[neuroglancer](../README.md) / [Modules](../modules.md) / sliceview/backend

# Module: sliceview/backend

## Table of contents

### Modules

- [&lt;internal\&gt;](sliceview_backend._internal_.md)

### Classes

- [SliceViewBackend](../classes/sliceview_backend.SliceViewBackend.md)
- [SliceViewChunk](../classes/sliceview_backend.SliceViewChunk.md)
- [SliceViewChunkSourceBackend](../classes/sliceview_backend.SliceViewChunkSourceBackend.md)
- [SliceViewRenderLayerBackend](../classes/sliceview_backend.SliceViewRenderLayerBackend.md)

### Variables

- [BASE\_PRIORITY](sliceview_backend.md#base_priority)
- [SCALE\_PRIORITY\_MULTIPLIER](sliceview_backend.md#scale_priority_multiplier)

### Functions

- [deserializeTransformedSources](sliceview_backend.md#deserializetransformedsources)

## Variables

### BASE\_PRIORITY

• `Const` **BASE\_PRIORITY**: ``-1000000000000``

#### Defined in

[src/neuroglancer/sliceview/backend.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/backend.ts#L31)

___

### SCALE\_PRIORITY\_MULTIPLIER

• `Const` **SCALE\_PRIORITY\_MULTIPLIER**: ``1000000000``

#### Defined in

[src/neuroglancer/sliceview/backend.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/backend.ts#L32)

## Functions

### deserializeTransformedSources

▸ **deserializeTransformedSources**<`Source`, `RLayer`\>(`rpc`, `serializedSources`, `layer`): [`TransformedSource`](../interfaces/sliceview_base.TransformedSource.md)<`RLayer`, `Source`\>[][]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Source` | extends [`SliceViewChunkSourceBackend`](../classes/sliceview_backend.SliceViewChunkSourceBackend.md)<[`SliceViewChunkSpecification`](../interfaces/sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>, [`SliceViewChunk`](../classes/sliceview_backend.SliceViewChunk.md), `Source`\> |
| `RLayer` | extends [`MultiscaleVolumetricDataRenderLayer`](../interfaces/sliceview_base.MultiscaleVolumetricDataRenderLayer.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](../classes/annotation_annotation_layer_state._internal_.RPC.md) |
| `serializedSources` | `any`[][] |
| `layer` | `any` |

#### Returns

[`TransformedSource`](../interfaces/sliceview_base.TransformedSource.md)<`RLayer`, `Source`\>[][]

#### Defined in

[src/neuroglancer/sliceview/backend.ts:222](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/backend.ts#L222)
