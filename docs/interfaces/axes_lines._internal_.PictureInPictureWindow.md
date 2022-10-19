[neuroglancer](../README.md) / [Modules](../modules.md) / [axes\_lines](../modules/axes_lines.md) / [<internal\>](../modules/axes_lines._internal_.md) / PictureInPictureWindow

# Interface: PictureInPictureWindow

[axes_lines](../modules/axes_lines.md).[<internal>](../modules/axes_lines._internal_.md).PictureInPictureWindow

## Hierarchy

- [`EventTarget`](../modules/axes_lines._internal_.md#eventtarget)

  ↳ **`PictureInPictureWindow`**

## Table of contents

### Properties

- [height](axes_lines._internal_.PictureInPictureWindow.md#height)
- [onresize](axes_lines._internal_.PictureInPictureWindow.md#onresize)
- [width](axes_lines._internal_.PictureInPictureWindow.md#width)

### Methods

- [addEventListener](axes_lines._internal_.PictureInPictureWindow.md#addeventlistener)
- [dispatchEvent](axes_lines._internal_.PictureInPictureWindow.md#dispatchevent)
- [removeEventListener](axes_lines._internal_.PictureInPictureWindow.md#removeeventlistener)

## Properties

### height

• `Readonly` **height**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10818

___

### onresize

• **onresize**: ``null`` \| (`this`: [`PictureInPictureWindow`](../modules/axes_lines._internal_.md#pictureinpicturewindow), `ev`: [`Event`](../modules/axes_lines._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10819

___

### width

• `Readonly` **width**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10820

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"resize"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`PictureInPictureWindow`](../modules/axes_lines._internal_.md#pictureinpicturewindow), `ev`: [`PictureInPictureWindowEventMap`](axes_lines._internal_.PictureInPictureWindowEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](axes_lines._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10821

▸ **addEventListener**(`type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/axes_lines._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](axes_lines._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10822

___

### dispatchEvent

▸ **dispatchEvent**(`event`): `boolean`

Dispatches a synthetic event event to target and returns true if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`Event`](../modules/axes_lines._internal_.md#event) |

#### Returns

`boolean`

#### Inherited from

EventTarget.dispatchEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5138

___

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"resize"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`PictureInPictureWindow`](../modules/axes_lines._internal_.md#pictureinpicturewindow), `ev`: [`PictureInPictureWindowEventMap`](axes_lines._internal_.PictureInPictureWindowEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](axes_lines._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10823

▸ **removeEventListener**(`type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/axes_lines._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`EventListenerOptions`](axes_lines._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10824
