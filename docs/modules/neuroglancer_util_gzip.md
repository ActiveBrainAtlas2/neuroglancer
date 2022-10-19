[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/util/gzip

# Module: neuroglancer/util/gzip

## Table of contents

### Functions

- [isGzipFormat](neuroglancer_util_gzip.md#isgzipformat)
- [maybeDecompressGzip](neuroglancer_util_gzip.md#maybedecompressgzip)

## Functions

### isGzipFormat

▸ **isGzipFormat**(`data`): `boolean`

Detects gzip format based on the 2 magic bytes at the start.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`ArrayBufferView`](../interfaces/main_module._internal_.ArrayBufferView.md) |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/util/gzip.ts:22](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/gzip.ts#L22)

___

### maybeDecompressGzip

▸ **maybeDecompressGzip**(`data`): `Uint8Array`

Decompress `data` if it is in gzip format, otherwise just return it.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `ArrayBuffer` \| [`ArrayBufferView`](../interfaces/main_module._internal_.ArrayBufferView.md) |

#### Returns

`Uint8Array`

#### Defined in

[src/neuroglancer/util/gzip.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/gzip.ts#L30)
