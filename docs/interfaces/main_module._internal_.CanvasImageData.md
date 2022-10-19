[neuroglancer](../README.md) / [Exports](../modules.md) / [main\_module](../modules/main_module.md) / [<internal\>](../modules/main_module._internal_.md) / CanvasImageData

# Interface: CanvasImageData

[main_module](../modules/main_module.md).[<internal>](../modules/main_module._internal_.md).CanvasImageData

## Hierarchy

- **`CanvasImageData`**

  ↳ [`CanvasRenderingContext2D`](main_module._internal_.CanvasRenderingContext2D.md)

## Table of contents

### Methods

- [createImageData](main_module._internal_.CanvasImageData.md#createimagedata)
- [getImageData](main_module._internal_.CanvasImageData.md#getimagedata)
- [putImageData](main_module._internal_.CanvasImageData.md#putimagedata)

## Methods

### createImageData

▸ **createImageData**(`sw`, `sh`, `settings?`): [`ImageData`](../modules/main_module._internal_.md#imagedata)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sw` | `number` |
| `sh` | `number` |
| `settings?` | [`ImageDataSettings`](main_module._internal_.ImageDataSettings.md) |

#### Returns

[`ImageData`](../modules/main_module._internal_.md#imagedata)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3430

▸ **createImageData**(`imagedata`): [`ImageData`](../modules/main_module._internal_.md#imagedata)

#### Parameters

| Name | Type |
| :------ | :------ |
| `imagedata` | [`ImageData`](../modules/main_module._internal_.md#imagedata) |

#### Returns

[`ImageData`](../modules/main_module._internal_.md#imagedata)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3431

___

### getImageData

▸ **getImageData**(`sx`, `sy`, `sw`, `sh`, `settings?`): [`ImageData`](../modules/main_module._internal_.md#imagedata)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sx` | `number` |
| `sy` | `number` |
| `sw` | `number` |
| `sh` | `number` |
| `settings?` | [`ImageDataSettings`](main_module._internal_.ImageDataSettings.md) |

#### Returns

[`ImageData`](../modules/main_module._internal_.md#imagedata)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3432

___

### putImageData

▸ **putImageData**(`imagedata`, `dx`, `dy`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `imagedata` | [`ImageData`](../modules/main_module._internal_.md#imagedata) |
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
| `imagedata` | [`ImageData`](../modules/main_module._internal_.md#imagedata) |
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
