[neuroglancer](../README.md) / [Modules](../modules.md) / util/gzip

# Module: util/gzip

## Table of contents

### Functions

- [isGzipFormat](util_gzip.md#isgzipformat)
- [maybeDecompressGzip](util_gzip.md#maybedecompressgzip)

## Functions

### isGzipFormat

▸ **isGzipFormat**(`data`): `boolean`

Detects gzip format based on the 2 magic bytes at the start.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`ArrayBufferView`](../interfaces/annotation_annotation_layer_state._internal_.ArrayBufferView.md) |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/util/gzip.ts:22](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/gzip.ts#L22)

___

### maybeDecompressGzip

▸ **maybeDecompressGzip**(`data`): `Uint8Array`

Decompress `data` if it is in gzip format, otherwise just return it.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `ArrayBuffer` \| [`ArrayBufferView`](../interfaces/annotation_annotation_layer_state._internal_.ArrayBufferView.md) |

#### Returns

`Uint8Array`

#### Defined in

[src/neuroglancer/util/gzip.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/gzip.ts#L30)
