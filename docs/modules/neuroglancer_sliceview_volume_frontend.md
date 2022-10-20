[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/sliceview/volume/frontend

# Module: neuroglancer/sliceview/volume/frontend

## Table of contents

### Classes

- [MultiscaleVolumeChunkSource](../classes/neuroglancer_sliceview_volume_frontend.MultiscaleVolumeChunkSource.md)
- [VolumeChunk](../classes/neuroglancer_sliceview_volume_frontend.VolumeChunk.md)
- [VolumeChunkSource](../classes/neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md)

### Interfaces

- [ChunkFormat](../interfaces/neuroglancer_sliceview_volume_frontend.ChunkFormat.md)
- [ChunkFormatHandler](../interfaces/neuroglancer_sliceview_volume_frontend.ChunkFormatHandler.md)

### Type Aliases

- [ChunkFormatHandlerFactory](neuroglancer_sliceview_volume_frontend.md#chunkformathandlerfactory)
- [VolumeChunkKey](neuroglancer_sliceview_volume_frontend.md#volumechunkkey)

### Functions

- [defineChunkDataShaderAccess](neuroglancer_sliceview_volume_frontend.md#definechunkdatashaderaccess)
- [getChunkFormatHandler](neuroglancer_sliceview_volume_frontend.md#getchunkformathandler)
- [registerChunkFormatHandler](neuroglancer_sliceview_volume_frontend.md#registerchunkformathandler)

## Type Aliases

### ChunkFormatHandlerFactory

Ƭ **ChunkFormatHandlerFactory**: (`gl`: [`GL`](../interfaces/neuroglancer_webgl_context.GL.md), `spec`: [`VolumeChunkSpecification`](../interfaces/neuroglancer_sliceview_volume_base.VolumeChunkSpecification.md)) => [`ChunkFormatHandler`](../interfaces/neuroglancer_sliceview_volume_frontend.ChunkFormatHandler.md) \| ``null``

#### Type declaration

▸ (`gl`, `spec`): [`ChunkFormatHandler`](../interfaces/neuroglancer_sliceview_volume_frontend.ChunkFormatHandler.md) \| ``null``

##### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |
| `spec` | [`VolumeChunkSpecification`](../interfaces/neuroglancer_sliceview_volume_base.VolumeChunkSpecification.md) |

##### Returns

[`ChunkFormatHandler`](../interfaces/neuroglancer_sliceview_volume_frontend.ChunkFormatHandler.md) \| ``null``

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:130](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/frontend.ts#L130)

___

### VolumeChunkKey

Ƭ **VolumeChunkKey**: `string`

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:27](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/frontend.ts#L27)

## Functions

### defineChunkDataShaderAccess

▸ **defineChunkDataShaderAccess**(`builder`, `chunkFormat`, `numChannelDimensions`, `getPositionWithinChunkExpr`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | [`ShaderBuilder`](../classes/neuroglancer_webgl_shader.ShaderBuilder.md) |
| `chunkFormat` | [`ChunkFormat`](../interfaces/neuroglancer_sliceview_volume_frontend.ChunkFormat.md) |
| `numChannelDimensions` | `number` |
| `getPositionWithinChunkExpr` | `string` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:70](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/frontend.ts#L70)

___

### getChunkFormatHandler

▸ **getChunkFormatHandler**(`gl`, `spec`): [`ChunkFormatHandler`](../interfaces/neuroglancer_sliceview_volume_frontend.ChunkFormatHandler.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |
| `spec` | [`VolumeChunkSpecification`](../interfaces/neuroglancer_sliceview_volume_base.VolumeChunkSpecification.md) |

#### Returns

[`ChunkFormatHandler`](../interfaces/neuroglancer_sliceview_volume_frontend.ChunkFormatHandler.md)

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:139](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/frontend.ts#L139)

___

### registerChunkFormatHandler

▸ **registerChunkFormatHandler**(`factory`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`ChunkFormatHandlerFactory`](neuroglancer_sliceview_volume_frontend.md#chunkformathandlerfactory) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:135](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/frontend.ts#L135)
