[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/sliceview/backend

# Module: neuroglancer/sliceview/backend

## Table of contents

### Modules

- [&lt;internal\&gt;](neuroglancer_sliceview_backend._internal_.md)

### Classes

- [SliceViewBackend](../classes/neuroglancer_sliceview_backend.SliceViewBackend.md)
- [SliceViewChunk](../classes/neuroglancer_sliceview_backend.SliceViewChunk.md)
- [SliceViewChunkSourceBackend](../classes/neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md)
- [SliceViewRenderLayerBackend](../classes/neuroglancer_sliceview_backend.SliceViewRenderLayerBackend.md)

### Variables

- [BASE\_PRIORITY](neuroglancer_sliceview_backend.md#base_priority)
- [SCALE\_PRIORITY\_MULTIPLIER](neuroglancer_sliceview_backend.md#scale_priority_multiplier)

### Functions

- [deserializeTransformedSources](neuroglancer_sliceview_backend.md#deserializetransformedsources)

## Variables

### BASE\_PRIORITY

• `Const` **BASE\_PRIORITY**: ``-1000000000000``

#### Defined in

[src/neuroglancer/sliceview/backend.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/backend.ts#L31)

___

### SCALE\_PRIORITY\_MULTIPLIER

• `Const` **SCALE\_PRIORITY\_MULTIPLIER**: ``1000000000``

#### Defined in

[src/neuroglancer/sliceview/backend.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/backend.ts#L32)

## Functions

### deserializeTransformedSources

▸ **deserializeTransformedSources**<`Source`, `RLayer`\>(`rpc`, `serializedSources`, `layer`): [`TransformedSource`](../interfaces/neuroglancer_sliceview_base.TransformedSource.md)<`RLayer`, `Source`\>[][]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Source` | extends [`SliceViewChunkSourceBackend`](../classes/neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md)<[`SliceViewChunkSpecification`](../interfaces/neuroglancer_sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>, [`SliceViewChunk`](../classes/neuroglancer_sliceview_backend.SliceViewChunk.md), `Source`\> |
| `RLayer` | extends [`MultiscaleVolumetricDataRenderLayer`](../interfaces/neuroglancer_sliceview_base.MultiscaleVolumetricDataRenderLayer.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](../classes/neuroglancer_worker_rpc.RPC.md) |
| `serializedSources` | `any`[][] |
| `layer` | `any` |

#### Returns

[`TransformedSource`](../interfaces/neuroglancer_sliceview_base.TransformedSource.md)<`RLayer`, `Source`\>[][]

#### Defined in

[src/neuroglancer/sliceview/backend.ts:222](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/backend.ts#L222)
