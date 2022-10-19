[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / ScreenOrientation

# Interface: ScreenOrientation

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).ScreenOrientation

## Hierarchy

- [`EventTarget`](../modules/annotation_annotation_layer_state._internal_.md#eventtarget)

  ↳ **`ScreenOrientation`**

## Table of contents

### Properties

- [angle](annotation_annotation_layer_state._internal_.ScreenOrientation.md#angle)
- [onchange](annotation_annotation_layer_state._internal_.ScreenOrientation.md#onchange)
- [type](annotation_annotation_layer_state._internal_.ScreenOrientation.md#type)

### Methods

- [addEventListener](annotation_annotation_layer_state._internal_.ScreenOrientation.md#addeventlistener)
- [dispatchEvent](annotation_annotation_layer_state._internal_.ScreenOrientation.md#dispatchevent)
- [lock](annotation_annotation_layer_state._internal_.ScreenOrientation.md#lock)
- [removeEventListener](annotation_annotation_layer_state._internal_.ScreenOrientation.md#removeeventlistener)
- [unlock](annotation_annotation_layer_state._internal_.ScreenOrientation.md#unlock)

## Properties

### angle

• `Readonly` **angle**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13376

___

### onchange

• **onchange**: ``null`` \| (`this`: [`ScreenOrientation`](../modules/annotation_annotation_layer_state._internal_.md#screenorientation), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13377

___

### type

• `Readonly` **type**: [`OrientationType`](../modules/annotation_annotation_layer_state._internal_.md#orientationtype)

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
| `listener` | (`this`: [`ScreenOrientation`](../modules/annotation_annotation_layer_state._internal_.md#screenorientation), `ev`: [`ScreenOrientationEventMap`](annotation_annotation_layer_state._internal_.ScreenOrientationEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](annotation_annotation_layer_state._internal_.AddEventListenerOptions.md) |

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
| `listener` | [`EventListenerOrEventListenerObject`](../modules/annotation_annotation_layer_state._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](annotation_annotation_layer_state._internal_.AddEventListenerOptions.md) |

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
| `event` | [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event) |

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
| `orientation` | [`OrientationLockType`](../modules/annotation_annotation_layer_state._internal_.md#orientationlocktype) |

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
| `listener` | (`this`: [`ScreenOrientation`](../modules/annotation_annotation_layer_state._internal_.md#screenorientation), `ev`: [`ScreenOrientationEventMap`](annotation_annotation_layer_state._internal_.ScreenOrientationEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](annotation_annotation_layer_state._internal_.EventListenerOptions.md) |

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
| `listener` | [`EventListenerOrEventListenerObject`](../modules/annotation_annotation_layer_state._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`EventListenerOptions`](annotation_annotation_layer_state._internal_.EventListenerOptions.md) |

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
