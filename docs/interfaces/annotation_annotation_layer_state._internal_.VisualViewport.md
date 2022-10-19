[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / VisualViewport

# Interface: VisualViewport

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).VisualViewport

## Hierarchy

- [`EventTarget`](../modules/annotation_annotation_layer_state._internal_.md#eventtarget)

  ↳ **`VisualViewport`**

## Table of contents

### Properties

- [height](annotation_annotation_layer_state._internal_.VisualViewport.md#height)
- [offsetLeft](annotation_annotation_layer_state._internal_.VisualViewport.md#offsetleft)
- [offsetTop](annotation_annotation_layer_state._internal_.VisualViewport.md#offsettop)
- [onresize](annotation_annotation_layer_state._internal_.VisualViewport.md#onresize)
- [onscroll](annotation_annotation_layer_state._internal_.VisualViewport.md#onscroll)
- [pageLeft](annotation_annotation_layer_state._internal_.VisualViewport.md#pageleft)
- [pageTop](annotation_annotation_layer_state._internal_.VisualViewport.md#pagetop)
- [scale](annotation_annotation_layer_state._internal_.VisualViewport.md#scale)
- [width](annotation_annotation_layer_state._internal_.VisualViewport.md#width)

### Methods

- [addEventListener](annotation_annotation_layer_state._internal_.VisualViewport.md#addeventlistener)
- [dispatchEvent](annotation_annotation_layer_state._internal_.VisualViewport.md#dispatchevent)
- [removeEventListener](annotation_annotation_layer_state._internal_.VisualViewport.md#removeeventlistener)

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

• **onresize**: ``null`` \| (`this`: [`VisualViewport`](../modules/annotation_annotation_layer_state._internal_.md#visualviewport), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14488

___

### onscroll

• **onscroll**: ``null`` \| (`this`: [`VisualViewport`](../modules/annotation_annotation_layer_state._internal_.md#visualviewport), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

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
| `K` | extends keyof [`VisualViewportEventMap`](annotation_annotation_layer_state._internal_.VisualViewportEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`VisualViewport`](../modules/annotation_annotation_layer_state._internal_.md#visualviewport), `ev`: [`VisualViewportEventMap`](annotation_annotation_layer_state._internal_.VisualViewportEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](annotation_annotation_layer_state._internal_.AddEventListenerOptions.md) |

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
| `listener` | [`EventListenerOrEventListenerObject`](../modules/annotation_annotation_layer_state._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](annotation_annotation_layer_state._internal_.AddEventListenerOptions.md) |

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
| `event` | [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event) |

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
| `K` | extends keyof [`VisualViewportEventMap`](annotation_annotation_layer_state._internal_.VisualViewportEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`VisualViewport`](../modules/annotation_annotation_layer_state._internal_.md#visualviewport), `ev`: [`VisualViewportEventMap`](annotation_annotation_layer_state._internal_.VisualViewportEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](annotation_annotation_layer_state._internal_.EventListenerOptions.md) |

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
| `listener` | [`EventListenerOrEventListenerObject`](../modules/annotation_annotation_layer_state._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`EventListenerOptions`](annotation_annotation_layer_state._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14497
