[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/sliceview/backend\_chunk\_decoders/postprocess

# Module: neuroglancer/sliceview/backend\_chunk\_decoders/postprocess

## Table of contents

### Functions

- [postProcessRawData](neuroglancer_sliceview_backend_chunk_decoders_postprocess.md#postprocessrawdata)

## Functions

### postProcessRawData

▸ **postProcessRawData**(`chunk`, `cancellationToken`, `data`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | [`VolumeChunk`](../classes/neuroglancer_sliceview_volume_backend.VolumeChunk.md) |
| `cancellationToken` | [`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md) |
| `data` | [`ArrayBufferView`](../interfaces/main_module._internal_.ArrayBufferView.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/neuroglancer/sliceview/backend_chunk_decoders/postprocess.ts:27](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/backend_chunk_decoders/postprocess.ts#L27)
