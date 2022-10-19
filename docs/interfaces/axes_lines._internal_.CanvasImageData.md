[neuroglancer](../README.md) / [Modules](../modules.md) / [axes\_lines](../modules/axes_lines.md) / [<internal\>](../modules/axes_lines._internal_.md) / CanvasImageData

# Interface: CanvasImageData

[axes_lines](../modules/axes_lines.md).[<internal>](../modules/axes_lines._internal_.md).CanvasImageData

## Hierarchy

- **`CanvasImageData`**

  ↳ [`CanvasRenderingContext2D`](axes_lines._internal_.CanvasRenderingContext2D.md)

## Table of contents

### Methods

- [createImageData](axes_lines._internal_.CanvasImageData.md#createimagedata)
- [getImageData](axes_lines._internal_.CanvasImageData.md#getimagedata)
- [putImageData](axes_lines._internal_.CanvasImageData.md#putimagedata)

## Methods

### createImageData

▸ **createImageData**(`sw`, `sh`, `settings?`): [`ImageData`](../modules/axes_lines._internal_.md#imagedata)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sw` | `number` |
| `sh` | `number` |
| `settings?` | [`ImageDataSettings`](axes_lines._internal_.ImageDataSettings.md) |

#### Returns

[`ImageData`](../modules/axes_lines._internal_.md#imagedata)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3430

▸ **createImageData**(`imagedata`): [`ImageData`](../modules/axes_lines._internal_.md#imagedata)

#### Parameters

| Name | Type |
| :------ | :------ |
| `imagedata` | [`ImageData`](../modules/axes_lines._internal_.md#imagedata) |

#### Returns

[`ImageData`](../modules/axes_lines._internal_.md#imagedata)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3431

___

### getImageData

▸ **getImageData**(`sx`, `sy`, `sw`, `sh`, `settings?`): [`ImageData`](../modules/axes_lines._internal_.md#imagedata)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sx` | `number` |
| `sy` | `number` |
| `sw` | `number` |
| `sh` | `number` |
| `settings?` | [`ImageDataSettings`](axes_lines._internal_.ImageDataSettings.md) |

#### Returns

[`ImageData`](../modules/axes_lines._internal_.md#imagedata)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3432

___

### putImageData

▸ **putImageData**(`imagedata`, `dx`, `dy`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `imagedata` | [`ImageData`](../modules/axes_lines._internal_.md#imagedata) |
| `dx` | `number` |
| `dy` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3433

▸ **putImageData**(`imagedata`, `dx`, `dy`, `dirtyX`, `dirtyY`, `dirtyWidth`, `dirtyHeight`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `imagedata` | [`ImageData`](../modules/axes_lines._internal_.md#imagedata) |
| `dx` | `number` |
| `dy` | `number` |
| `dirtyX` | `number` |
| `dirtyY` | `number` |
| `dirtyWidth` | `number` |
| `dirtyHeight` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3434
