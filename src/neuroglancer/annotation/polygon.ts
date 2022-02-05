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
 * @file Support for rendering polygon annotations.
 */

 import {AnnotationType, Polygon} from 'neuroglancer/annotation';
 import {AnnotationRenderContext, AnnotationRenderHelper, AnnotationShaderGetter, registerAnnotationTypeRenderHandler} from 'neuroglancer/annotation/type_handler';
import { defineCircleShader } from '../webgl/circles';
import { defineLineShader } from '../webgl/lines';
import { ShaderBuilder, ShaderProgram } from '../webgl/shader';
import { defineVectorArrayVertexShaderInput } from '../webgl/shader_lib';
import { defineVertexId, VertexIdHelper } from '../webgl/vertex_id';
 
 class RenderHelper extends AnnotationRenderHelper {

  draw(context: AnnotationRenderContext) {
    context;
  }
 }
 
 registerAnnotationTypeRenderHandler<Polygon>(AnnotationType.POLYGON, {
   sliceViewRenderHelper: RenderHelper,
   perspectiveViewRenderHelper: RenderHelper,
   defineShaderNoOpSetters(builder) {
     builder;
   },
   pickIdsPerInstance: 1,
   snapPosition(position, data, offset) {
     position.set(new Float32Array(data, offset, position.length));
   },
   getRepresentativePoint(out, ann) {
     out.set(ann.source);
   },
   updateViaRepresentativePoint(oldAnnotation, position) {
     return {...oldAnnotation, source: new Float32Array(position)};
   }
 });