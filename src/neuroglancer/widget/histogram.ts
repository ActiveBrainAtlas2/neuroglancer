import './histogram.css';

import {RenderedPanel} from 'neuroglancer/display_context';
import {getMemoizedBuffer} from 'neuroglancer/webgl/buffer';
import {computeInvlerp, getIntervalBoundsEffectiveFraction} from 'neuroglancer/webgl/lerp';
import {defineLineShader, drawLines, initializeLineShader, VERTICES_PER_LINE} from 'neuroglancer/webgl/lines';
import {ShaderBuilder} from 'neuroglancer/webgl/shader';
import {getSquareCornersBuffer} from 'neuroglancer/webgl/square_corners_buffer';
import {setRawTextureParameters} from 'neuroglancer/webgl/texture';
import {InvlerpWidget} from 'neuroglancer/widget/invlerp';

export class HistogramPanel extends RenderedPanel {
  get drawOrder() {
    return 100;
  }
  constructor(public parent: InvlerpWidget, public NUM_CDF_LINES: number, public histogramSamplerTextureUnit: Symbol) {
    super(parent.display, document.createElement('div'), parent.visibility);
    const {element} = this;
    element.classList.add('neuroglancer-invlerp-histogram-panel');
  }

  private dataValuesBuffer =
      this.registerDisposer(getMemoizedBuffer(this.gl, WebGL2RenderingContext.ARRAY_BUFFER, () => {
            const {NUM_CDF_LINES} = this;
            const array = new Uint8Array(NUM_CDF_LINES * VERTICES_PER_LINE);
            for (let i = 0; i < NUM_CDF_LINES; ++i) {
              for (let j = 0; j < VERTICES_PER_LINE; ++j) {
                array[i * VERTICES_PER_LINE + j] = i;
              }
            }
            return array;
          })).value;

  private lineShader = this.registerDisposer((() => {
    const builder = new ShaderBuilder(this.gl);
    const {histogramSamplerTextureUnit} = this;
    defineLineShader(builder);
    builder.addTextureSampler('sampler2D', 'uHistogramSampler', histogramSamplerTextureUnit);
    builder.addOutputBuffer('vec4', 'out_color', 0);
    builder.addAttribute('uint', 'aDataValue');
    builder.addUniform('float', 'uBoundsFraction');
    builder.addVertexCode(`
float getCount(int i) {
  return texelFetch(uHistogramSampler, ivec2(i, 0), 0).x;
}
vec4 getVertex(float cdf, int i) {
  float x;
  if (i == 0) {
    x = -1.0;
  } else if (i == 255) {
    x = 1.0;
  } else {
    x = float(i) / 254.0 * uBoundsFraction * 2.0 - 1.0;
  }
  return vec4(x, cdf * (2.0 - uLineParams.y) - 1.0 + uLineParams.y * 0.5, 0.0, 1.0);
}
`);
    builder.setVertexMain(`
int lineNumber = int(aDataValue);
int dataValue = lineNumber;
float maxVal = 0.0;
for (int i = 0; i < 256; ++i) {
  if (maxVal < getCount(i)) {
    maxVal = getCount(i);
  }
}
float height = log(getCount(lineNumber) + 1.0) / log(maxVal + 1.0);
emitLine(getVertex(0.0, lineNumber), getVertex(height, lineNumber), 1.0 / 254.0 * uBoundsFraction);
`);
    builder.setFragmentMain(`
out_color = vec4(1.0, 0.0, 0.0, getLineAlpha());
`);
    return builder.build();
  })());

  private regionCornersBuffer = getSquareCornersBuffer(this.gl, 0, -1, 1, 1);

  private regionShader = this.registerDisposer((() => {
    const builder = new ShaderBuilder(this.gl);
    builder.addAttribute('vec2', 'aVertexPosition');
    builder.addUniform('vec2', 'uBounds');
    builder.addUniform('vec4', 'uColor');
    builder.addOutputBuffer('vec4', 'out_color', 0);
    builder.setVertexMain(`
gl_Position = vec4(mix(uBounds[0], uBounds[1], aVertexPosition.x) * 2.0 - 1.0, aVertexPosition.y, 0.0, 1.0);
`);
    builder.setFragmentMain(`
out_color = uColor;
`);
    return builder.build();
  })());

  draw() {
    const {lineShader, gl, regionShader, parent: {dataType, trackable: {value: bounds}}, NUM_CDF_LINES, histogramSamplerTextureUnit} = this;
    this.setGLLogicalViewport();
    gl.enable(WebGL2RenderingContext.BLEND);
    gl.blendFunc(WebGL2RenderingContext.SRC_ALPHA, WebGL2RenderingContext.ONE_MINUS_SRC_ALPHA);
    gl.disable(WebGL2RenderingContext.DEPTH_TEST);
    gl.disable(WebGL2RenderingContext.STENCIL_TEST);
    {
      regionShader.bind();
      gl.uniform4f(regionShader.uniform('uColor'), 0.2, 0.2, 0.2, 1.0);
      const fraction0 = computeInvlerp(bounds.window, bounds.range[0]),
            fraction1 = computeInvlerp(bounds.window, bounds.range[1]);
      const effectiveFraction = getIntervalBoundsEffectiveFraction(dataType, bounds.window);
      gl.uniform2f(
          regionShader.uniform('uBounds'), Math.min(fraction0, fraction1) * effectiveFraction,
          Math.max(fraction0, fraction1) * effectiveFraction + (1 - effectiveFraction));
      const aVertexPosition = regionShader.attribute('aVertexPosition');
      this.regionCornersBuffer.bindToVertexAttrib(
          aVertexPosition, /*componentsPerVertexAttribute=*/ 2,
          /*attributeType=*/ WebGL2RenderingContext.FLOAT);
      gl.drawArrays(WebGL2RenderingContext.TRIANGLE_FAN, 0, 4);
      gl.disableVertexAttribArray(aVertexPosition);
    }
    if (this.parent.histogramSpecifications.producerVisibility.visible) {
      const {renderViewport} = this;
      lineShader.bind();
      initializeLineShader(
          lineShader, {width: renderViewport.logicalWidth, height: renderViewport.logicalHeight},
          /*featherWidthInPixels=*/ 1.0);
      const histogramTextureUnit = lineShader.textureUnit(histogramSamplerTextureUnit);
      gl.uniform1f(
          lineShader.uniform('uBoundsFraction'),
          getIntervalBoundsEffectiveFraction(dataType, bounds.window));
      gl.activeTexture(WebGL2RenderingContext.TEXTURE0 + histogramTextureUnit);
      gl.bindTexture(WebGL2RenderingContext.TEXTURE_2D, this.parent.texture);
      setRawTextureParameters(gl);
      const aDataValue = lineShader.attribute('aDataValue');
      this.dataValuesBuffer.bindToVertexAttribI(
          aDataValue, /*componentsPerVertexAttribute=*/ 1,
          /*attributeType=*/ WebGL2RenderingContext.UNSIGNED_BYTE);
      drawLines(gl, /*linesPerInstance=*/ NUM_CDF_LINES, /*numInstances=*/ 1);
      gl.disableVertexAttribArray(aDataValue);
      gl.bindTexture(WebGL2RenderingContext.TEXTURE_2D, null);
    }
    gl.disable(WebGL2RenderingContext.BLEND);
  }

  isReady() {
    return true;
  }
}
