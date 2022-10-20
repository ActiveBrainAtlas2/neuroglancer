[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/sliceview/png

# Module: neuroglancer/sliceview/png

## Table of contents

### Functions

- [decompressPng](neuroglancer_sliceview_png.md#decompresspng)

## Functions

### decompressPng

▸ **decompressPng**(`buffer`, `width`, `height`, `numComponents`, `bytesPerPixel`, `convertToGrayscale`): `Promise`<`Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `Uint8Array` |
| `width` | `number` |
| `height` | `number` |
| `numComponents` | `number` |
| `bytesPerPixel` | `number` |
| `convertToGrayscale` | `boolean` |

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

[src/neuroglancer/sliceview/png/index.ts:148](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/png/index.ts#L148)
