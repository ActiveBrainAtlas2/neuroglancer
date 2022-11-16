/**
 * @license
 * Copyright 2018 Google Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @file Support for rendering line annotations.
 */

import {AnnotationType, Line} from 'neuroglancer/annotation';
import {AnnotationRenderContext, AnnotationRenderHelper, AnnotationShaderGetter, registerAnnotationTypeRenderHandler} from 'neuroglancer/annotation/type_handler';
import {projectPointToLineSegment} from 'neuroglancer/util/geom';
import {defineCircleShader, drawCircles, initializeCircleShader, VERTICES_PER_CIRCLE} from 'neuroglancer/webgl/circles';
import {defineLineShader, drawLines, initializeLineShader} from 'neuroglancer/webgl/lines';
import {ShaderBuilder, ShaderProgram} from 'neuroglancer/webgl/shader';
import {defineVectorArrayVertexShaderInput} from 'neuroglancer/webgl/shader_lib';
import {defineVertexId, VertexIdHelper} from 'neuroglancer/webgl/vertex_id';
import { arraysEqual } from '../util/array';

export const FULL_OBJECT_PICK_OFFSET = 0;
const ENDPOINTS_PICK_OFFSET = FULL_OBJECT_PICK_OFFSET + 1;
const PICK_IDS_PER_INSTANCE = ENDPOINTS_PICK_OFFSET + 2;

function defineNoOpEndpointMarkerSetters(builder: ShaderBuilder) {
  builder.addVertexCode(`
void setEndpointMarkerSize(float startSize, float endSize) {}
void setEndpointMarkerBorderWidth(float startSize, float endSize) {}
void setEndpointMarkerColor(vec4 startColor, vec4 endColor) {}
void setEndpointMarkerBorderColor(vec4 startColor, vec4 endColor) {}
void setEndpointOpacity(float opacity) {}
void setEndpointVisibility(float visibility) {}
`);
}

function defineNoOpLineSetters(builder: ShaderBuilder) {
  builder.addVertexCode(`
void setLineWidth(float width) {}
void setLineColor(vec4 startColor, vec4 endColor) {}
void setLineOpacity(float opacity) {}
void setVisibility(float visibility) {}
`);
}

class RenderHelper extends AnnotationRenderHelper {
  defineShader(builder: ShaderBuilder) {
    defineVertexId(builder);
    // Position of endpoints in model coordinates.
    const {rank} = this;
    defineVectorArrayVertexShaderInput(
        builder, 'float', WebGL2RenderingContext.FLOAT, /*normalized=*/ false, 'VertexPosition',
        rank, 2);
  }

  private vertexIdHelper = this.registerDisposer(VertexIdHelper.get(this.gl));

  private edgeShaderGetter =
      this.getDependentShader('annotation/line/edge', (builder: ShaderBuilder) => {
        const {rank} = this;
        this.defineShader(builder);
        defineLineShader(builder);
        builder.addVarying(`highp float[${rank}]`, 'vModelPosition');
        builder.addVarying(`highp float`, 'vLineOpacity');
        builder.addVarying(`highp float`, 'vVisibility');
        builder.addVertexCode(`
float ng_LineWidth;
float ng_Visibility;
`);
        defineNoOpEndpointMarkerSetters(builder);
        builder.addVertexCode(`
void setLineWidth(float width) {
  ng_LineWidth = width;
}
void setLineOpacity(float opacity) {
  vLineOpacity = opacity;
}
void setLineColor(vec4 startColor, vec4 endColor) {
  vColor = mix(startColor, endColor, getLineEndpointCoefficient());
}
void setVisibility(float visibility) {
  vVisibility = visibility;
  ng_Visibility = visibility;
}
`);
        builder.setVertexMain(`
float modelPositionA[${rank}] = getVertexPosition0();
float modelPositionB[${rank}] = getVertexPosition1();
for (int i = 0; i < ${rank}; ++i) {
  vModelPosition[i] = mix(modelPositionA[i], modelPositionB[i], getLineEndpointCoefficient());
}
ng_LineWidth = 1.0;
ng_Visibility = 1.0;
vLineOpacity = 1.0;
vColor = vec4(0.0, 0.0, 0.0, 0.0);
vVisibility = 1.0;
${this.invokeUserMain}
if (ng_Visibility == 1.0) {
  emitLine(uModelViewProjection * vec4(projectModelVectorToSubspace(modelPositionA), 1.0),
          uModelViewProjection * vec4(projectModelVectorToSubspace(modelPositionB), 1.0),
          ng_LineWidth);
}
${this.setPartIndex(builder)};
`);
        builder.setFragmentMain(`
float clipCoefficient = getSubspaceClipCoefficient(vModelPosition);
if (vVisibility == 1.0) {
  emitAnnotation(vec4(vColor.rgb, vColor.a * getLineAlpha() *
                                  ${this.getCrossSectionFadeFactor()} *
                                  clipCoefficient * vLineOpacity));
}
`);
      });

  private endpointShaderGetter =
      this.getDependentShader('annotation/line/endpoint', (builder: ShaderBuilder) => {
        const {rank} = this;
        this.defineShader(builder);
        defineCircleShader(builder, this.targetIsSliceView);
        builder.addVarying('highp float', 'vClipCoefficient');
        builder.addVarying('highp float', 'vEndpointOpacity');
        builder.addVarying('highp float', 'vEndpointVisibility');
        builder.addVarying('highp vec4', 'vBorderColor');
        defineNoOpLineSetters(builder);
        builder.addVertexCode(`
float ng_markerDiameter;
float ng_markerBorderWidth;
float ng_endPointVisibility;
int getEndpointIndex() {
  return gl_VertexID / ${VERTICES_PER_CIRCLE};
}
void setEndpointMarkerSize(float startSize, float endSize) {
  ng_markerDiameter = mix(startSize, endSize, float(getEndpointIndex()));
}
void setEndpointMarkerBorderWidth(float startSize, float endSize) {
  ng_markerBorderWidth = mix(startSize, endSize, float(getEndpointIndex()));
}
void setEndpointMarkerColor(vec4 startColor, vec4 endColor) {
  vColor = mix(startColor, endColor, float(getEndpointIndex()));
}
void setEndpointMarkerBorderColor(vec4 startColor, vec4 endColor) {
  vBorderColor = mix(startColor, endColor, float(getEndpointIndex()));
}
void setEndpointOpacity(float opacity) {
  vEndpointOpacity = opacity;
}
void setEndpointVisibility(float visibility) {
  ng_endPointVisibility = visibility;
  vEndpointVisibility = visibility;
}
`);
        builder.setVertexMain(`
float modelPosition[${rank}] = getVertexPosition0();
float modelPositionB[${rank}] = getVertexPosition1();
for (int i = 0; i < ${rank}; ++i) {
  modelPosition[i] = mix(modelPosition[i], modelPositionB[i], float(getEndpointIndex()));
}
vEndpointOpacity = 1.0;
vClipCoefficient = getSubspaceClipCoefficient(modelPosition);
vColor = vec4(0.0, 0.0, 0.0, 0.0);
vBorderColor = vec4(0.0, 0.0, 0.0, 1.0);
ng_markerDiameter = 7.0;
ng_markerBorderWidth = 3.0;
${this.invokeUserMain}
if (ng_endPointVisibility == 1.0) {
  emitCircle(uModelViewProjection * vec4(projectModelVectorToSubspace(modelPosition), 1.0), ng_markerDiameter, ng_markerBorderWidth);
}
${this.setPartIndex(builder, 'uint(getEndpointIndex()) + 1u')};
`);
        builder.setFragmentMain(`
vec4 color = getCircleColor(vColor, vBorderColor);
color.a *= vClipCoefficient;
color.a *= vEndpointOpacity;
if (vEndpointVisibility == 1.0) {
  emitAnnotation(color);
}
`);
      });

  enable(
      shaderGetter: AnnotationShaderGetter, context: AnnotationRenderContext,
      callback: (shader: ShaderProgram) => void) {
    super.enable(shaderGetter, context, shader => {
      const binder = shader.vertexShaderInputBinders['VertexPosition'];
      binder.enable(1);
      this.gl.bindBuffer(WebGL2RenderingContext.ARRAY_BUFFER, context.buffer.buffer);
      binder.bind(this.serializedBytesPerAnnotation, context.bufferOffset);
      const {vertexIdHelper} = this;
      vertexIdHelper.enable();
      callback(shader);
      vertexIdHelper.disable();
      binder.disable();
    });
  }

  drawEdges(context: AnnotationRenderContext) {
    this.enable(this.edgeShaderGetter, context, shader => {
      initializeLineShader(
          shader, context.renderContext.projectionParameters, /*featherWidthInPixels=*/ 1.0);
      drawLines(shader.gl, 1, context.count);
    });
  }

  drawEndpoints(context: AnnotationRenderContext) {
    this.enable(this.endpointShaderGetter, context, shader => {
      initializeCircleShader(
          shader, context.renderContext.projectionParameters, {featherWidthInPixels: 0.5});
      drawCircles(shader.gl, 2, context.count);
    });
  }

  draw(context: AnnotationRenderContext) {
    this.drawEdges(context);
    this.drawEndpoints(context);
  }
}

function snapPositionToLine(position: Float32Array, endpoints: Float32Array) {
  const rank = position.length;
  projectPointToLineSegment(
      position, endpoints.subarray(0, rank), endpoints.subarray(rank), position);
}

function snapPositionToEndpoint(
    position: Float32Array, endpoints: Float32Array, endpointIndex: number) {
  const rank = position.length;
  const startOffset = rank * endpointIndex;
  for (let i = 0; i < rank; ++i) {
    position[i] = endpoints[startOffset + i];
  }
}

registerAnnotationTypeRenderHandler<Line>(AnnotationType.LINE, {
  sliceViewRenderHelper: RenderHelper,
  perspectiveViewRenderHelper: RenderHelper,
  defineShaderNoOpSetters(builder) {
    defineNoOpEndpointMarkerSetters(builder);
    defineNoOpLineSetters(builder);
  },
  pickIdsPerInstance: PICK_IDS_PER_INSTANCE,
  snapPosition(position, data, offset, partIndex) {
    const rank = position.length;
    const endpoints = new Float32Array(data, offset, rank * 2);
    if (partIndex === FULL_OBJECT_PICK_OFFSET) {
      snapPositionToLine(position, endpoints);
    } else {
      snapPositionToEndpoint(position, endpoints, partIndex - ENDPOINTS_PICK_OFFSET);
    }
  },
  getRepresentativePoint(out, ann, partIndex) {
    // if the full object is selected just pick the first point as representative
    out.set(
        (partIndex === FULL_OBJECT_PICK_OFFSET || partIndex === ENDPOINTS_PICK_OFFSET) ?
            ann.pointA :
            ann.pointB);
  },
  updateViaRepresentativePoint(oldAnnotation, position, partIndex) {
    let baseLine = {...oldAnnotation};
    const rank = position.length;
    switch (partIndex) {
      case FULL_OBJECT_PICK_OFFSET: {
        const {pointA, pointB} = oldAnnotation;
        const newPointA = new Float32Array(rank);
        const newPointB = new Float32Array(rank);
        for (let i = 0; i < rank; ++i) {
          const pos = newPointA[i] = position[i];
          newPointB[i] = pointB[i] + (pos - pointA[i]);
        }
        return {...oldAnnotation, pointA: newPointA, pointB: newPointB};
      }
      case FULL_OBJECT_PICK_OFFSET + 1:
        return {...oldAnnotation, pointA: new Float32Array(position)};
      case FULL_OBJECT_PICK_OFFSET + 2:
        return {...oldAnnotation, pointB: new Float32Array(position)};
    }
    return baseLine;
  }
});

/**
 * 
 * @param partIndex the part of the annotation that is picked with mouse
 * @returns returns true if the part index indicates a corner is picked.
 */
export function isCornerPicked(partIndex: number) : boolean {
  return partIndex === FULL_OBJECT_PICK_OFFSET + 1 || partIndex === FULL_OBJECT_PICK_OFFSET + 2
}

/**
 * Finds which part index is picked based on the annotation and the point.
 * @param annotation The line annotation for which part index needs to be found based on point.
 * @param point Input point of the line.
 * @returns part index corresponding to the point.
 */
export function getPointPartIndex(annotation: Line, point: Float32Array) : number {
  if (arraysEqual(annotation.pointA, point)) return FULL_OBJECT_PICK_OFFSET + 1;
  if (arraysEqual(annotation.pointB, point)) return FULL_OBJECT_PICK_OFFSET + 2;
  return -1;
}

/**
 * Finds the point corresponding to the part index picked.
 * @param annotation Annotation for which the point needs to be found.
 * @param partIndex input part index
 * @returns undefined if the part index is valid otherwise 
 * returns the point corresponding to the part index.
 */
export function getEndPointBasedOnPartIndex(annotation: Line, partIndex: number) : Float32Array|undefined {
  if (partIndex === FULL_OBJECT_PICK_OFFSET + 1) {
    return annotation.pointA;
  }
  else if (partIndex === FULL_OBJECT_PICK_OFFSET + 2) {
    return annotation.pointB;
  }
  return undefined;
}
