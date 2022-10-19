[neuroglancer](../README.md) / [Modules](../modules.md) / [mesh/frontend](../modules/mesh_frontend.md) / MeshShaderManager

# Class: MeshShaderManager

[mesh/frontend](../modules/mesh_frontend.md).MeshShaderManager

## Table of contents

### Constructors

- [constructor](mesh_frontend.MeshShaderManager.md#constructor)

### Properties

- [fragmentRelativeVertices](mesh_frontend.MeshShaderManager.md#fragmentrelativevertices)
- [tempLightVec](mesh_frontend.MeshShaderManager.md#templightvec)
- [vertexPositionFormat](mesh_frontend.MeshShaderManager.md#vertexpositionformat)
- [vertexPositionHandler](mesh_frontend.MeshShaderManager.md#vertexpositionhandler)

### Methods

- [beginLayer](mesh_frontend.MeshShaderManager.md#beginlayer)
- [beginModel](mesh_frontend.MeshShaderManager.md#beginmodel)
- [drawFragment](mesh_frontend.MeshShaderManager.md#drawfragment)
- [drawFragmentHelper](mesh_frontend.MeshShaderManager.md#drawfragmenthelper)
- [drawMultiscaleFragment](mesh_frontend.MeshShaderManager.md#drawmultiscalefragment)
- [endLayer](mesh_frontend.MeshShaderManager.md#endlayer)
- [makeGetter](mesh_frontend.MeshShaderManager.md#makegetter)
- [setColor](mesh_frontend.MeshShaderManager.md#setcolor)
- [setPickID](mesh_frontend.MeshShaderManager.md#setpickid)

## Constructors

### constructor

• **new MeshShaderManager**(`fragmentRelativeVertices`, `vertexPositionFormat`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fragmentRelativeVertices` | `boolean` |
| `vertexPositionFormat` | [`VertexPositionFormat`](../enums/mesh_base.VertexPositionFormat.md) |

#### Defined in

[src/neuroglancer/mesh/frontend.ts:164](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/mesh/frontend.ts#L164)

## Properties

### fragmentRelativeVertices

• **fragmentRelativeVertices**: `boolean`

___

### tempLightVec

• `Private` **tempLightVec**: `Float32Array`

#### Defined in

[src/neuroglancer/mesh/frontend.ts:162](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/mesh/frontend.ts#L162)

___

### vertexPositionFormat

• **vertexPositionFormat**: [`VertexPositionFormat`](../enums/mesh_base.VertexPositionFormat.md)

___

### vertexPositionHandler

• `Private` **vertexPositionHandler**: [`VertexPositionFormatHandler`](../interfaces/mesh_frontend._internal_.VertexPositionFormatHandler.md)

#### Defined in

[src/neuroglancer/mesh/frontend.ts:163](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/mesh/frontend.ts#L163)

## Methods

### beginLayer

▸ **beginLayer**(`gl`, `shader`, `renderContext`, `displayState`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/webgl_context.GL.md) |
| `shader` | [`ShaderProgram`](webgl_shader.ShaderProgram.md) |
| `renderContext` | [`PerspectiveViewRenderContext`](../interfaces/perspective_view_render_layer.PerspectiveViewRenderContext.md) |
| `displayState` | [`MeshDisplayState`](../interfaces/mesh_frontend.MeshDisplayState.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/mesh/frontend.ts:168](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/mesh/frontend.ts#L168)

___

### beginModel

▸ **beginModel**(`gl`, `shader`, `renderContext`, `modelMat`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/webgl_context.GL.md) |
| `shader` | [`ShaderProgram`](webgl_shader.ShaderProgram.md) |
| `renderContext` | [`PerspectiveViewRenderContext`](../interfaces/perspective_view_render_layer.PerspectiveViewRenderContext.md) |
| `modelMat` | [`mat4`](util_geom.mat4.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/mesh/frontend.ts:190](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/mesh/frontend.ts#L190)

___

### drawFragment

▸ **drawFragment**(`gl`, `shader`, `fragmentChunk`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/webgl_context.GL.md) |
| `shader` | [`ShaderProgram`](webgl_shader.ShaderProgram.md) |
| `fragmentChunk` | [`FragmentChunk`](mesh_frontend.FragmentChunk.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/mesh/frontend.ts:222](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/mesh/frontend.ts#L222)

___

### drawFragmentHelper

▸ **drawFragmentHelper**(`gl`, `shader`, `fragmentChunk`, `indexBegin`, `indexEnd`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/webgl_context.GL.md) |
| `shader` | [`ShaderProgram`](webgl_shader.ShaderProgram.md) |
| `fragmentChunk` | [`FragmentChunk`](mesh_frontend.FragmentChunk.md) \| [`MultiscaleFragmentChunk`](mesh_frontend.MultiscaleFragmentChunk.md) |
| `indexBegin` | `number` |
| `indexEnd` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/mesh/frontend.ts:204](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/mesh/frontend.ts#L204)

___

### drawMultiscaleFragment

▸ **drawMultiscaleFragment**(`gl`, `shader`, `fragmentChunk`, `subChunkBegin`, `subChunkEnd`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/webgl_context.GL.md) |
| `shader` | [`ShaderProgram`](webgl_shader.ShaderProgram.md) |
| `fragmentChunk` | [`MultiscaleFragmentChunk`](mesh_frontend.MultiscaleFragmentChunk.md) |
| `subChunkBegin` | `number` |
| `subChunkEnd` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/mesh/frontend.ts:228](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/mesh/frontend.ts#L228)

___

### endLayer

▸ **endLayer**(`gl`, `shader`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/webgl_context.GL.md) |
| `shader` | [`ShaderProgram`](webgl_shader.ShaderProgram.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/mesh/frontend.ts:240](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/mesh/frontend.ts#L240)

___

### makeGetter

▸ **makeGetter**(`layer`): [`ParameterizedEmitterDependentShaderGetter`](../modules/webgl_dynamic_shader.md#parameterizedemitterdependentshadergetter)<`boolean`, `undefined`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`RefCounted`](util_disposable.RefCounted.md) & { `displayState`: [`MeshDisplayState`](../interfaces/mesh_frontend.MeshDisplayState.md) ; `gl`: [`GL`](../interfaces/webgl_context.GL.md)  } |

#### Returns

[`ParameterizedEmitterDependentShaderGetter`](../modules/webgl_dynamic_shader.md#parameterizedemitterdependentshadergetter)<`boolean`, `undefined`\>

#### Defined in

[src/neuroglancer/mesh/frontend.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/mesh/frontend.ts#L245)

___

### setColor

▸ **setColor**(`gl`, `shader`, `color`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/webgl_context.GL.md) |
| `shader` | [`ShaderProgram`](webgl_shader.ShaderProgram.md) |
| `color` | [`vec4`](util_geom.vec4.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/mesh/frontend.ts:182](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/mesh/frontend.ts#L182)

___

### setPickID

▸ **setPickID**(`gl`, `shader`, `pickID`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/webgl_context.GL.md) |
| `shader` | [`ShaderProgram`](webgl_shader.ShaderProgram.md) |
| `pickID` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/mesh/frontend.ts:186](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/mesh/frontend.ts#L186)
