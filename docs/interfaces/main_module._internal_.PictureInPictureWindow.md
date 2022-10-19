[neuroglancer](../README.md) / [Exports](../modules.md) / [main\_module](../modules/main_module.md) / [<internal\>](../modules/main_module._internal_.md) / PictureInPictureWindow

# Interface: PictureInPictureWindow

[main_module](../modules/main_module.md).[<internal>](../modules/main_module._internal_.md).PictureInPictureWindow

## Hierarchy

- [`EventTarget`](../modules/main_module._internal_.md#eventtarget)

  ↳ **`PictureInPictureWindow`**

## Table of contents

### Properties

- [height](main_module._internal_.PictureInPictureWindow.md#height)
- [onresize](main_module._internal_.PictureInPictureWindow.md#onresize)
- [width](main_module._internal_.PictureInPictureWindow.md#width)

### Methods

- [addEventListener](main_module._internal_.PictureInPictureWindow.md#addeventlistener)
- [dispatchEvent](main_module._internal_.PictureInPictureWindow.md#dispatchevent)
- [removeEventListener](main_module._internal_.PictureInPictureWindow.md#removeeventlistener)

## Properties

### height

• `Readonly` **height**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10818

___

### onresize

• **onresize**: ``null`` \| (`this`: [`PictureInPictureWindow`](../modules/main_module._internal_.md#pictureinpicturewindow), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

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
| `listener` | (`this`: [`PictureInPictureWindow`](../modules/main_module._internal_.md#pictureinpicturewindow), `ev`: [`PictureInPictureWindowEventMap`](main_module._internal_.PictureInPictureWindowEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](main_module._internal_.AddEventListenerOptions.md) |

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
| `listener` | [`EventListenerOrEventListenerObject`](../modules/main_module._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](main_module._internal_.AddEventListenerOptions.md) |

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
| `event` | [`Event`](../modules/main_module._internal_.md#event) |

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
| `listener` | (`this`: [`PictureInPictureWindow`](../modules/main_module._internal_.md#pictureinpicturewindow), `ev`: [`PictureInPictureWindowEventMap`](main_module._internal_.PictureInPictureWindowEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](main_module._internal_.EventListenerOptions.md) |

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
| `listener` | [`EventListenerOrEventListenerObject`](../modules/main_module._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`EventListenerOptions`](main_module._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10824
