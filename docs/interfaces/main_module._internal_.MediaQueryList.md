[neuroglancer](../README.md) / [Exports](../modules.md) / [main\_module](../modules/main_module.md) / [<internal\>](../modules/main_module._internal_.md) / MediaQueryList

# Interface: MediaQueryList

[main_module](../modules/main_module.md).[<internal>](../modules/main_module._internal_.md).MediaQueryList

Stores information on a media query applied to a document, and handles sending notifications to listeners when the media query state change (i.e. when the media query test starts or stops evaluating to true).

## Hierarchy

- [`EventTarget`](../modules/main_module._internal_.md#eventtarget)

  ↳ **`MediaQueryList`**

## Table of contents

### Properties

- [matches](main_module._internal_.MediaQueryList.md#matches)
- [media](main_module._internal_.MediaQueryList.md#media)
- [onchange](main_module._internal_.MediaQueryList.md#onchange)

### Methods

- [addEventListener](main_module._internal_.MediaQueryList.md#addeventlistener)
- [addListener](main_module._internal_.MediaQueryList.md#addlistener)
- [dispatchEvent](main_module._internal_.MediaQueryList.md#dispatchevent)
- [removeEventListener](main_module._internal_.MediaQueryList.md#removeeventlistener)
- [removeListener](main_module._internal_.MediaQueryList.md#removelistener)

## Properties

### matches

• `Readonly` **matches**: `boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9456

___

### media

• `Readonly` **media**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9457

___

### onchange

• **onchange**: ``null`` \| (`this`: [`MediaQueryList`](../modules/main_module._internal_.md#mediaquerylist), `ev`: [`MediaQueryListEvent`](../modules/main_module._internal_.md#mediaquerylistevent)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9458

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
| `listener` | (`this`: [`MediaQueryList`](../modules/main_module._internal_.md#mediaquerylist), `ev`: [`MediaQueryListEventMap`](main_module._internal_.MediaQueryListEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](main_module._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9463

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

node_modules/typescript/lib/lib.dom.d.ts:9464

___

### addListener

▸ **addListener**(`callback`): `void`

**`deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | ``null`` \| (`this`: [`MediaQueryList`](../modules/main_module._internal_.md#mediaquerylist), `ev`: [`MediaQueryListEvent`](../modules/main_module._internal_.md#mediaquerylistevent)) => `any` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9460

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
| `K` | extends ``"change"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`MediaQueryList`](../modules/main_module._internal_.md#mediaquerylist), `ev`: [`MediaQueryListEventMap`](main_module._internal_.MediaQueryListEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](main_module._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9465

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

node_modules/typescript/lib/lib.dom.d.ts:9466

___

### removeListener

▸ **removeListener**(`callback`): `void`

**`deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | ``null`` \| (`this`: [`MediaQueryList`](../modules/main_module._internal_.md#mediaquerylist), `ev`: [`MediaQueryListEvent`](../modules/main_module._internal_.md#mediaquerylistevent)) => `any` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9462
