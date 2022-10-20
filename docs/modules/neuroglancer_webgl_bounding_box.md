[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/webgl/bounding\_box

# Module: neuroglancer/webgl/bounding\_box

## Table of contents

### Variables

- [CORNERS\_PER\_BOX](neuroglancer_webgl_bounding_box.md#corners_per_box)
- [EDGES\_PER\_BOX](neuroglancer_webgl_bounding_box.md#edges_per_box)
- [FACES\_PER\_BOX](neuroglancer_webgl_bounding_box.md#faces_per_box)
- [glsl\_getBoxFaceVertexPosition](neuroglancer_webgl_bounding_box.md#glsl_getboxfacevertexposition)

### Functions

- [drawBoxes](neuroglancer_webgl_bounding_box.md#drawboxes)

## Variables

### CORNERS\_PER\_BOX

• `Const` **CORNERS\_PER\_BOX**: ``8``

#### Defined in

[src/neuroglancer/webgl/bounding_box.ts:18](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/bounding_box.ts#L18)

___

### EDGES\_PER\_BOX

• `Const` **EDGES\_PER\_BOX**: ``12``

**`License`**

Copyright 2020 Google Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

#### Defined in

[src/neuroglancer/webgl/bounding_box.ts:17](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/bounding_box.ts#L17)

___

### FACES\_PER\_BOX

• `Const` **FACES\_PER\_BOX**: ``6``

#### Defined in

[src/neuroglancer/webgl/bounding_box.ts:19](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/bounding_box.ts#L19)

___

### glsl\_getBoxFaceVertexPosition

• `Const` **glsl\_getBoxFaceVertexPosition**: ``"\nvec3 getBoxFaceVertexPosition(int vertexIndex) {\n  const vec3 vertexPositions[] = vec3[](\n  // Front face\n  vec3(0.0, 0.0,  1.0), // 0\n  vec3(1.0, 0.0,  1.0), // 1\n  vec3(1.0,  1.0,  1.0), // 2\n  vec3(0.0,  1.0,  1.0), // 3\n\n  // Back face\n  vec3(0.0, 0.0, 0.0), // 4\n  vec3(0.0,  1.0, 0.0), // 5\n  vec3(1.0,  1.0, 0.0), // 6\n  vec3(1.0, 0.0, 0.0), // 7\n\n  // Top face\n  vec3(0.0,  1.0, 0.0), // 8\n  vec3(0.0,  1.0,  1.0), // 9\n  vec3(1.0,  1.0,  1.0), // 10\n  vec3(1.0,  1.0, 0.0), // 11\n\n  // Bottom face\n  vec3(0.0, 0.0, 0.0), // 12\n  vec3( 1.0, 0.0, 0.0), // 13\n  vec3( 1.0, 0.0,  1.0), // 14\n  vec3(0.0, 0.0,  1.0), // 15\n\n  // Right face\n  vec3( 1.0, 0.0, 0.0), // 16\n  vec3( 1.0,  1.0, 0.0), // 17\n  vec3( 1.0,  1.0,  1.0), // 18\n  vec3( 1.0, 0.0,  1.0), // 19\n\n  // Left face\n  vec3(0.0, 0.0, 0.0), // 20\n  vec3(0.0, 0.0,  1.0), // 21\n  vec3(0.0,  1.0,  1.0), // 22\n  vec3(0.0,  1.0, 0.0) // 23\n  );\n  const int indices[] = int[](\n    0,  1,  2,      0,  2,  3,    // front\n    4,  5,  6,      4,  6,  7,    // back\n    8,  9,  10,     8,  10, 11,   // top\n    12, 13, 14,     12, 14, 15,   // bottom\n    16, 17, 18,     16, 18, 19,   // right\n    20, 21, 22,     20, 22, 23   // left\n  );\n  return vertexPositions[indices[vertexIndex]];\n}\n"``

#### Defined in

[src/neuroglancer/webgl/bounding_box.ts:21](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/bounding_box.ts#L21)

## Functions

### drawBoxes

▸ **drawBoxes**(`gl`, `boxesPerInstance`, `numInstances`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`WebGL2RenderingContext`](main_module._internal_.md#webgl2renderingcontext) |
| `boxesPerInstance` | `number` |
| `numInstances` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/bounding_box.ts:72](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/bounding_box.ts#L72)
