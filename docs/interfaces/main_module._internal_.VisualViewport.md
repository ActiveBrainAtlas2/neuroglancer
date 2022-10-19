[neuroglancer](../README.md) / [Exports](../modules.md) / [main\_module](../modules/main_module.md) / [<internal\>](../modules/main_module._internal_.md) / VisualViewport

# Interface: VisualViewport

[main_module](../modules/main_module.md).[<internal>](../modules/main_module._internal_.md).VisualViewport

## Hierarchy

- [`EventTarget`](../modules/main_module._internal_.md#eventtarget)

  ↳ **`VisualViewport`**

## Table of contents

### Properties

- [height](main_module._internal_.VisualViewport.md#height)
- [offsetLeft](main_module._internal_.VisualViewport.md#offsetleft)
- [offsetTop](main_module._internal_.VisualViewport.md#offsettop)
- [onresize](main_module._internal_.VisualViewport.md#onresize)
- [onscroll](main_module._internal_.VisualViewport.md#onscroll)
- [pageLeft](main_module._internal_.VisualViewport.md#pageleft)
- [pageTop](main_module._internal_.VisualViewport.md#pagetop)
- [scale](main_module._internal_.VisualViewport.md#scale)
- [width](main_module._internal_.VisualViewport.md#width)

### Methods

- [addEventListener](main_module._internal_.VisualViewport.md#addeventlistener)
- [dispatchEvent](main_module._internal_.VisualViewport.md#dispatchevent)
- [removeEventListener](main_module._internal_.VisualViewport.md#removeeventlistener)

## Properties

### height

• `Readonly` **height**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14485

___

### offsetLeft

• `Readonly` **offsetLeft**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14486

___

### offsetTop

• `Readonly` **offsetTop**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14487

___

### onresize

• **onresize**: ``null`` \| (`this`: [`VisualViewport`](../modules/main_module._internal_.md#visualviewport), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14488

___

### onscroll

• **onscroll**: ``null`` \| (`this`: [`VisualViewport`](../modules/main_module._internal_.md#visualviewport), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14489

___

### pageLeft

• `Readonly` **pageLeft**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14490

___

### pageTop

• `Readonly` **pageTop**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14491

___

### scale

• `Readonly` **scale**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14492

___

### width

• `Readonly` **width**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14493

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`VisualViewportEventMap`](main_module._internal_.VisualViewportEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`VisualViewport`](../modules/main_module._internal_.md#visualviewport), `ev`: [`VisualViewportEventMap`](main_module._internal_.VisualViewportEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](main_module._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14494

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

node_modules/typescript/lib/lib.dom.d.ts:14495

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
| `K` | extends keyof [`VisualViewportEventMap`](main_module._internal_.VisualViewportEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`VisualViewport`](../modules/main_module._internal_.md#visualviewport), `ev`: [`VisualViewportEventMap`](main_module._internal_.VisualViewportEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](main_module._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14496

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

node_modules/typescript/lib/lib.dom.d.ts:14497
