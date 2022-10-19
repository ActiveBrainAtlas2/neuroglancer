[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / Animation

# Interface: Animation

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).Animation

## Hierarchy

- [`EventTarget`](../modules/annotation_annotation_layer_state._internal_.md#eventtarget)

  ↳ **`Animation`**

## Table of contents

### Properties

- [currentTime](annotation_annotation_layer_state._internal_.Animation.md#currenttime)
- [effect](annotation_annotation_layer_state._internal_.Animation.md#effect)
- [finished](annotation_annotation_layer_state._internal_.Animation.md#finished)
- [id](annotation_annotation_layer_state._internal_.Animation.md#id)
- [oncancel](annotation_annotation_layer_state._internal_.Animation.md#oncancel)
- [onfinish](annotation_annotation_layer_state._internal_.Animation.md#onfinish)
- [onremove](annotation_annotation_layer_state._internal_.Animation.md#onremove)
- [pending](annotation_annotation_layer_state._internal_.Animation.md#pending)
- [playState](annotation_annotation_layer_state._internal_.Animation.md#playstate)
- [playbackRate](annotation_annotation_layer_state._internal_.Animation.md#playbackrate)
- [ready](annotation_annotation_layer_state._internal_.Animation.md#ready)
- [replaceState](annotation_annotation_layer_state._internal_.Animation.md#replacestate)
- [startTime](annotation_annotation_layer_state._internal_.Animation.md#starttime)
- [timeline](annotation_annotation_layer_state._internal_.Animation.md#timeline)

### Methods

- [addEventListener](annotation_annotation_layer_state._internal_.Animation.md#addeventlistener)
- [cancel](annotation_annotation_layer_state._internal_.Animation.md#cancel)
- [commitStyles](annotation_annotation_layer_state._internal_.Animation.md#commitstyles)
- [dispatchEvent](annotation_annotation_layer_state._internal_.Animation.md#dispatchevent)
- [finish](annotation_annotation_layer_state._internal_.Animation.md#finish)
- [pause](annotation_annotation_layer_state._internal_.Animation.md#pause)
- [persist](annotation_annotation_layer_state._internal_.Animation.md#persist)
- [play](annotation_annotation_layer_state._internal_.Animation.md#play)
- [removeEventListener](annotation_annotation_layer_state._internal_.Animation.md#removeeventlistener)
- [reverse](annotation_annotation_layer_state._internal_.Animation.md#reverse)
- [updatePlaybackRate](annotation_annotation_layer_state._internal_.Animation.md#updateplaybackrate)

## Properties

### currentTime

• **currentTime**: ``null`` \| `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2058

___

### effect

• **effect**: ``null`` \| [`AnimationEffect`](../modules/annotation_annotation_layer_state._internal_.md#animationeffect)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2059

___

### finished

• `Readonly` **finished**: `Promise`<[`Animation`](../modules/annotation_annotation_layer_state._internal_.md#animation)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2060

___

### id

• **id**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2061

___

### oncancel

• **oncancel**: ``null`` \| (`this`: [`Animation`](../modules/annotation_annotation_layer_state._internal_.md#animation), `ev`: [`AnimationPlaybackEvent`](../modules/annotation_annotation_layer_state._internal_.md#animationplaybackevent)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2062

___

### onfinish

• **onfinish**: ``null`` \| (`this`: [`Animation`](../modules/annotation_annotation_layer_state._internal_.md#animation), `ev`: [`AnimationPlaybackEvent`](../modules/annotation_annotation_layer_state._internal_.md#animationplaybackevent)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2063

___

### onremove

• **onremove**: ``null`` \| (`this`: [`Animation`](../modules/annotation_annotation_layer_state._internal_.md#animation), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2064

___

### pending

• `Readonly` **pending**: `boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2065

___

### playState

• `Readonly` **playState**: [`AnimationPlayState`](../modules/annotation_annotation_layer_state._internal_.md#animationplaystate)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2066

___

### playbackRate

• **playbackRate**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2067

___

### ready

• `Readonly` **ready**: `Promise`<[`Animation`](../modules/annotation_annotation_layer_state._internal_.md#animation)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2068

___

### replaceState

• `Readonly` **replaceState**: [`AnimationReplaceState`](../modules/annotation_annotation_layer_state._internal_.md#animationreplacestate)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2069

___

### startTime

• **startTime**: ``null`` \| `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2070

___

### timeline

• **timeline**: ``null`` \| [`AnimationTimeline`](../modules/annotation_annotation_layer_state._internal_.md#animationtimeline)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2071

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`AnimationEventMap`](annotation_annotation_layer_state._internal_.AnimationEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`Animation`](../modules/annotation_annotation_layer_state._internal_.md#animation), `ev`: [`AnimationEventMap`](annotation_annotation_layer_state._internal_.AnimationEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](annotation_annotation_layer_state._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2080

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

node_modules/typescript/lib/lib.dom.d.ts:2081

___

### cancel

▸ **cancel**(): `void`

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2072

___

### commitStyles

▸ **commitStyles**(): `void`

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2073

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

### finish

▸ **finish**(): `void`

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2074

___

### pause

▸ **pause**(): `void`

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2075

___

### persist

▸ **persist**(): `void`

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2076

___

### play

▸ **play**(): `void`

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2077

___

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`AnimationEventMap`](annotation_annotation_layer_state._internal_.AnimationEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`Animation`](../modules/annotation_annotation_layer_state._internal_.md#animation), `ev`: [`AnimationEventMap`](annotation_annotation_layer_state._internal_.AnimationEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](annotation_annotation_layer_state._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2082

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

node_modules/typescript/lib/lib.dom.d.ts:2083

___

### reverse

▸ **reverse**(): `void`

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2078

___

### updatePlaybackRate

▸ **updatePlaybackRate**(`playbackRate`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `playbackRate` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2079
