[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / CanvasImageData

# Interface: CanvasImageData

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).CanvasImageData

## Hierarchy

- **`CanvasImageData`**

  ↳ [`CanvasRenderingContext2D`](annotation_annotation_layer_state._internal_.CanvasRenderingContext2D.md)

## Table of contents

### Methods

- [createImageData](annotation_annotation_layer_state._internal_.CanvasImageData.md#createimagedata)
- [getImageData](annotation_annotation_layer_state._internal_.CanvasImageData.md#getimagedata)
- [putImageData](annotation_annotation_layer_state._internal_.CanvasImageData.md#putimagedata)

## Methods

### createImageData

▸ **createImageData**(`sw`, `sh`, `settings?`): [`ImageData`](../modules/annotation_annotation_layer_state._internal_.md#imagedata)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sw` | `number` |
| `sh` | `number` |
| `settings?` | [`ImageDataSettings`](annotation_annotation_layer_state._internal_.ImageDataSettings.md) |

#### Returns

[`ImageData`](../modules/annotation_annotation_layer_state._internal_.md#imagedata)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3430

▸ **createImageData**(`imagedata`): [`ImageData`](../modules/annotation_annotation_layer_state._internal_.md#imagedata)

#### Parameters

| Name | Type |
| :------ | :------ |
| `imagedata` | [`ImageData`](../modules/annotation_annotation_layer_state._internal_.md#imagedata) |

#### Returns

[`ImageData`](../modules/annotation_annotation_layer_state._internal_.md#imagedata)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3431

___

### getImageData

▸ **getImageData**(`sx`, `sy`, `sw`, `sh`, `settings?`): [`ImageData`](../modules/annotation_annotation_layer_state._internal_.md#imagedata)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sx` | `number` |
| `sy` | `number` |
| `sw` | `number` |
| `sh` | `number` |
| `settings?` | [`ImageDataSettings`](annotation_annotation_layer_state._internal_.ImageDataSettings.md) |

#### Returns

[`ImageData`](../modules/annotation_annotation_layer_state._internal_.md#imagedata)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3432

___

### putImageData

▸ **putImageData**(`imagedata`, `dx`, `dy`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `imagedata` | [`ImageData`](../modules/annotation_annotation_layer_state._internal_.md#imagedata) |
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
| `imagedata` | [`ImageData`](../modules/annotation_annotation_layer_state._internal_.md#imagedata) |
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
