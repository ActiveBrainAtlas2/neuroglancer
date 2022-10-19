[neuroglancer](../README.md) / [Modules](../modules.md) / [axes\_lines](../modules/axes_lines.md) / [<internal\>](../modules/axes_lines._internal_.md) / ScreenOrientation

# Interface: ScreenOrientation

[axes_lines](../modules/axes_lines.md).[<internal>](../modules/axes_lines._internal_.md).ScreenOrientation

## Hierarchy

- [`EventTarget`](../modules/axes_lines._internal_.md#eventtarget)

  ↳ **`ScreenOrientation`**

## Table of contents

### Properties

- [angle](axes_lines._internal_.ScreenOrientation.md#angle)
- [onchange](axes_lines._internal_.ScreenOrientation.md#onchange)
- [type](axes_lines._internal_.ScreenOrientation.md#type)

### Methods

- [addEventListener](axes_lines._internal_.ScreenOrientation.md#addeventlistener)
- [dispatchEvent](axes_lines._internal_.ScreenOrientation.md#dispatchevent)
- [lock](axes_lines._internal_.ScreenOrientation.md#lock)
- [removeEventListener](axes_lines._internal_.ScreenOrientation.md#removeeventlistener)
- [unlock](axes_lines._internal_.ScreenOrientation.md#unlock)

## Properties

### angle

• `Readonly` **angle**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13376

___

### onchange

• **onchange**: ``null`` \| (`this`: [`ScreenOrientation`](../modules/axes_lines._internal_.md#screenorientation), `ev`: [`Event`](../modules/axes_lines._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13377

___

### type

• `Readonly` **type**: [`OrientationType`](../modules/axes_lines._internal_.md#orientationtype)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13378

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"change"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`ScreenOrientation`](../modules/axes_lines._internal_.md#screenorientation), `ev`: [`ScreenOrientationEventMap`](axes_lines._internal_.ScreenOrientationEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](axes_lines._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13381

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

node_modules/typescript/lib/lib.dom.d.ts:13382

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

### lock

▸ **lock**(`orientation`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `orientation` | [`OrientationLockType`](../modules/axes_lines._internal_.md#orientationlocktype) |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13379

___

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"change"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`ScreenOrientation`](../modules/axes_lines._internal_.md#screenorientation), `ev`: [`ScreenOrientationEventMap`](axes_lines._internal_.ScreenOrientationEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](axes_lines._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13383

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

node_modules/typescript/lib/lib.dom.d.ts:13384

___

### unlock

▸ **unlock**(): `void`

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13380
