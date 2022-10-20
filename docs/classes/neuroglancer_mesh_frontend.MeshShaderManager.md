[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/mesh/frontend](../modules/neuroglancer_mesh_frontend.md) / MeshShaderManager

# Class: MeshShaderManager

[neuroglancer/mesh/frontend](../modules/neuroglancer_mesh_frontend.md).MeshShaderManager

## Table of contents

### Constructors

- [constructor](neuroglancer_mesh_frontend.MeshShaderManager.md#constructor)

### Properties

- [fragmentRelativeVertices](neuroglancer_mesh_frontend.MeshShaderManager.md#fragmentrelativevertices)
- [tempLightVec](neuroglancer_mesh_frontend.MeshShaderManager.md#templightvec)
- [vertexPositionFormat](neuroglancer_mesh_frontend.MeshShaderManager.md#vertexpositionformat)
- [vertexPositionHandler](neuroglancer_mesh_frontend.MeshShaderManager.md#vertexpositionhandler)

### Methods

- [beginLayer](neuroglancer_mesh_frontend.MeshShaderManager.md#beginlayer)
- [beginModel](neuroglancer_mesh_frontend.MeshShaderManager.md#beginmodel)
- [drawFragment](neuroglancer_mesh_frontend.MeshShaderManager.md#drawfragment)
- [drawFragmentHelper](neuroglancer_mesh_frontend.MeshShaderManager.md#drawfragmenthelper)
- [drawMultiscaleFragment](neuroglancer_mesh_frontend.MeshShaderManager.md#drawmultiscalefragment)
- [endLayer](neuroglancer_mesh_frontend.MeshShaderManager.md#endlayer)
- [makeGetter](neuroglancer_mesh_frontend.MeshShaderManager.md#makegetter)
- [setColor](neuroglancer_mesh_frontend.MeshShaderManager.md#setcolor)
- [setPickID](neuroglancer_mesh_frontend.MeshShaderManager.md#setpickid)

## Constructors

### constructor

• **new MeshShaderManager**(`fragmentRelativeVertices`, `vertexPositionFormat`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fragmentRelativeVertices` | `boolean` |
| `vertexPositionFormat` | [`VertexPositionFormat`](../enums/neuroglancer_mesh_base.VertexPositionFormat.md) |

#### Defined in

[src/neuroglancer/mesh/frontend.ts:164](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/mesh/frontend.ts#L164)

## Properties

### fragmentRelativeVertices

• **fragmentRelativeVertices**: `boolean`

#### Defined in

[src/neuroglancer/mesh/frontend.ts:165](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/mesh/frontend.ts#L165)

___

### tempLightVec

• `Private` **tempLightVec**: `Float32Array`

#### Defined in

[src/neuroglancer/mesh/frontend.ts:162](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/mesh/frontend.ts#L162)

___

### vertexPositionFormat

• **vertexPositionFormat**: [`VertexPositionFormat`](../enums/neuroglancer_mesh_base.VertexPositionFormat.md)

#### Defined in

[src/neuroglancer/mesh/frontend.ts:165](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/mesh/frontend.ts#L165)

___

### vertexPositionHandler

• `Private` **vertexPositionHandler**: [`VertexPositionFormatHandler`](../interfaces/neuroglancer_mesh_frontend._internal_.VertexPositionFormatHandler.md)

#### Defined in

[src/neuroglancer/mesh/frontend.ts:163](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/mesh/frontend.ts#L163)

## Methods

### beginLayer

▸ **beginLayer**(`gl`, `shader`, `renderContext`, `displayState`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |
| `shader` | [`ShaderProgram`](neuroglancer_webgl_shader.ShaderProgram.md) |
| `renderContext` | [`PerspectiveViewRenderContext`](../interfaces/neuroglancer_perspective_view_render_layer.PerspectiveViewRenderContext.md) |
| `displayState` | [`MeshDisplayState`](../interfaces/neuroglancer_mesh_frontend.MeshDisplayState.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/mesh/frontend.ts:168](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/mesh/frontend.ts#L168)

___

### beginModel

▸ **beginModel**(`gl`, `shader`, `renderContext`, `modelMat`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |
| `shader` | [`ShaderProgram`](neuroglancer_webgl_shader.ShaderProgram.md) |
| `renderContext` | [`PerspectiveViewRenderContext`](../interfaces/neuroglancer_perspective_view_render_layer.PerspectiveViewRenderContext.md) |
| `modelMat` | [`mat4`](neuroglancer_util_geom.mat4.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/mesh/frontend.ts:190](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/mesh/frontend.ts#L190)

___

### drawFragment

▸ **drawFragment**(`gl`, `shader`, `fragmentChunk`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |
| `shader` | [`ShaderProgram`](neuroglancer_webgl_shader.ShaderProgram.md) |
| `fragmentChunk` | [`FragmentChunk`](neuroglancer_mesh_frontend.FragmentChunk.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/mesh/frontend.ts:222](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/mesh/frontend.ts#L222)

___

### drawFragmentHelper

▸ **drawFragmentHelper**(`gl`, `shader`, `fragmentChunk`, `indexBegin`, `indexEnd`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |
| `shader` | [`ShaderProgram`](neuroglancer_webgl_shader.ShaderProgram.md) |
| `fragmentChunk` | [`FragmentChunk`](neuroglancer_mesh_frontend.FragmentChunk.md) \| [`MultiscaleFragmentChunk`](neuroglancer_mesh_frontend.MultiscaleFragmentChunk.md) |
| `indexBegin` | `number` |
| `indexEnd` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/mesh/frontend.ts:204](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/mesh/frontend.ts#L204)

___

### drawMultiscaleFragment

▸ **drawMultiscaleFragment**(`gl`, `shader`, `fragmentChunk`, `subChunkBegin`, `subChunkEnd`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |
| `shader` | [`ShaderProgram`](neuroglancer_webgl_shader.ShaderProgram.md) |
| `fragmentChunk` | [`MultiscaleFragmentChunk`](neuroglancer_mesh_frontend.MultiscaleFragmentChunk.md) |
| `subChunkBegin` | `number` |
| `subChunkEnd` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/mesh/frontend.ts:228](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/mesh/frontend.ts#L228)

___

### endLayer

▸ **endLayer**(`gl`, `shader`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |
| `shader` | [`ShaderProgram`](neuroglancer_webgl_shader.ShaderProgram.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/mesh/frontend.ts:240](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/mesh/frontend.ts#L240)

___

### makeGetter

▸ **makeGetter**(`layer`): [`ParameterizedEmitterDependentShaderGetter`](../modules/neuroglancer_webgl_dynamic_shader.md#parameterizedemitterdependentshadergetter)<`boolean`, `undefined`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`RefCounted`](neuroglancer_util_disposable.RefCounted.md) & { `displayState`: [`MeshDisplayState`](../interfaces/neuroglancer_mesh_frontend.MeshDisplayState.md) ; `gl`: [`GL`](../interfaces/neuroglancer_webgl_context.GL.md)  } |

#### Returns

[`ParameterizedEmitterDependentShaderGetter`](../modules/neuroglancer_webgl_dynamic_shader.md#parameterizedemitterdependentshadergetter)<`boolean`, `undefined`\>

#### Defined in

[src/neuroglancer/mesh/frontend.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/mesh/frontend.ts#L245)

___

### setColor

▸ **setColor**(`gl`, `shader`, `color`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |
| `shader` | [`ShaderProgram`](neuroglancer_webgl_shader.ShaderProgram.md) |
| `color` | [`vec4`](neuroglancer_util_geom.vec4.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/mesh/frontend.ts:182](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/mesh/frontend.ts#L182)

___

### setPickID

▸ **setPickID**(`gl`, `shader`, `pickID`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |
| `shader` | [`ShaderProgram`](neuroglancer_webgl_shader.ShaderProgram.md) |
| `pickID` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/mesh/frontend.ts:186](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/mesh/frontend.ts#L186)
