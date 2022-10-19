[neuroglancer](../README.md) / [Modules](../modules.md) / sliceview/chunk\_format\_testing

# Module: sliceview/chunk\_format\_testing

## Table of contents

### Functions

- [chunkFormatTest](sliceview_chunk_format_testing.md#chunkformattest)

## Functions

### chunkFormatTest

▸ **chunkFormatTest**<`TextureLayout`\>(`dataType`, `volumeSize`, `getChunkFormatAndTextureLayout`, `rawData`, `encodedData`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TextureLayout` | extends [`Disposable`](../interfaces/util_disposable.Disposable.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataType` | [`DataType`](../enums/util_data_type.DataType.md) |
| `volumeSize` | `Uint32Array` |
| `getChunkFormatAndTextureLayout` | (`gl`: [`GL`](../interfaces/webgl_context.GL.md)) => [[`SingleTextureChunkFormat`](../classes/sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md)<`TextureLayout`\>, `TextureLayout`] |
| `rawData` | [`TypedArray`](util_array.md#typedarray) |
| `encodedData` | [`TypedArray`](util_array.md#typedarray) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/chunk_format_testing.ts:29](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/chunk_format_testing.ts#L29)
