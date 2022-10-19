[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/single\_mesh/frontend](../modules/neuroglancer_single_mesh_frontend.md) / SingleMeshShaderManager

# Class: SingleMeshShaderManager

[neuroglancer/single_mesh/frontend](../modules/neuroglancer_single_mesh_frontend.md).SingleMeshShaderManager

## Table of contents

### Constructors

- [constructor](neuroglancer_single_mesh_frontend.SingleMeshShaderManager.md#constructor)

### Properties

- [attributeInfo](neuroglancer_single_mesh_frontend.SingleMeshShaderManager.md#attributeinfo)
- [attributeNames](neuroglancer_single_mesh_frontend.SingleMeshShaderManager.md#attributenames)
- [indexBufferHelper](neuroglancer_single_mesh_frontend.SingleMeshShaderManager.md#indexbufferhelper)
- [tempLightVec](neuroglancer_single_mesh_frontend.SingleMeshShaderManager.md#templightvec)
- [textureAccessHelper](neuroglancer_single_mesh_frontend.SingleMeshShaderManager.md#textureaccesshelper)

### Methods

- [beginLayer](neuroglancer_single_mesh_frontend.SingleMeshShaderManager.md#beginlayer)
- [beginObject](neuroglancer_single_mesh_frontend.SingleMeshShaderManager.md#beginobject)
- [bindVertexData](neuroglancer_single_mesh_frontend.SingleMeshShaderManager.md#bindvertexdata)
- [defineAttributeAccess](neuroglancer_single_mesh_frontend.SingleMeshShaderManager.md#defineattributeaccess)
- [defineShader](neuroglancer_single_mesh_frontend.SingleMeshShaderManager.md#defineshader)
- [disableVertexData](neuroglancer_single_mesh_frontend.SingleMeshShaderManager.md#disablevertexdata)
- [drawFragment](neuroglancer_single_mesh_frontend.SingleMeshShaderManager.md#drawfragment)
- [endLayer](neuroglancer_single_mesh_frontend.SingleMeshShaderManager.md#endlayer)
- [setPickID](neuroglancer_single_mesh_frontend.SingleMeshShaderManager.md#setpickid)

## Constructors

### constructor

• **new SingleMeshShaderManager**(`attributeNames`, `attributeInfo`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `attributeNames` | `string`[] |
| `attributeInfo` | [`VertexAttributeInfo`](../interfaces/neuroglancer_single_mesh_base.VertexAttributeInfo.md)[] |

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:88](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/single_mesh/frontend.ts#L88)

## Properties

### attributeInfo

• **attributeInfo**: [`VertexAttributeInfo`](../interfaces/neuroglancer_single_mesh_base.VertexAttributeInfo.md)[]

___

### attributeNames

• **attributeNames**: `string`[]

___

### indexBufferHelper

• `Private` **indexBufferHelper**: [`IndexBufferAttributeHelper`](neuroglancer_webgl_index_emulation.IndexBufferAttributeHelper.md)

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:86](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/single_mesh/frontend.ts#L86)

___

### tempLightVec

• `Private` **tempLightVec**: `Float32Array`

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:83](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/single_mesh/frontend.ts#L83)

___

### textureAccessHelper

• `Private` **textureAccessHelper**: [`OneDimensionalTextureAccessHelper`](neuroglancer_webgl_texture_access.OneDimensionalTextureAccessHelper.md)

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/single_mesh/frontend.ts#L85)

## Methods

### beginLayer

▸ **beginLayer**(`gl`, `shader`, `renderContext`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |
| `shader` | [`ShaderProgram`](neuroglancer_webgl_shader.ShaderProgram.md) |
| `renderContext` | [`PerspectiveViewRenderContext`](../interfaces/neuroglancer_perspective_view_render_layer.PerspectiveViewRenderContext.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:176](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/single_mesh/frontend.ts#L176)

___

### beginObject

▸ **beginObject**(`gl`, `shader`, `objectToDataMatrix`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |
| `shader` | [`ShaderProgram`](neuroglancer_webgl_shader.ShaderProgram.md) |
| `objectToDataMatrix` | [`mat4`](neuroglancer_util_geom.mat4.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:191](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/single_mesh/frontend.ts#L191)

___

### bindVertexData

▸ **bindVertexData**(`gl`, `shader`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |
| `shader` | [`ShaderProgram`](neuroglancer_webgl_shader.ShaderProgram.md) |
| `data` | [`VertexChunkData`](neuroglancer_single_mesh_frontend.VertexChunkData.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:195](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/single_mesh/frontend.ts#L195)

___

### defineAttributeAccess

▸ **defineAttributeAccess**(`builder`, `vertexIndexVariable`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | [`ShaderBuilder`](neuroglancer_webgl_shader.ShaderBuilder.md) |
| `vertexIndexVariable` | `string` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:90](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/single_mesh/frontend.ts#L90)

___

### defineShader

▸ **defineShader**(`builder`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | [`ShaderBuilder`](neuroglancer_webgl_shader.ShaderBuilder.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:133](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/single_mesh/frontend.ts#L133)

___

### disableVertexData

▸ **disableVertexData**(`gl`, `shader`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |
| `shader` | [`ShaderProgram`](neuroglancer_webgl_shader.ShaderProgram.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:214](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/single_mesh/frontend.ts#L214)

___

### drawFragment

▸ **drawFragment**(`gl`, `shader`, `chunk`, `countingBuffer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |
| `shader` | [`ShaderProgram`](neuroglancer_webgl_shader.ShaderProgram.md) |
| `chunk` | [`SingleMeshChunk`](neuroglancer_single_mesh_frontend.SingleMeshChunk.md) |
| `countingBuffer` | [`CountingBuffer`](neuroglancer_webgl_index_emulation.CountingBuffer.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:231](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/single_mesh/frontend.ts#L231)

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

[src/neuroglancer/single_mesh/frontend.ts:239](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/single_mesh/frontend.ts#L239)

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

[src/neuroglancer/single_mesh/frontend.ts:187](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/single_mesh/frontend.ts#L187)
