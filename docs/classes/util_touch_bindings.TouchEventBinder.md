[neuroglancer](../README.md) / [Modules](../modules.md) / [util/touch\_bindings](../modules/util_touch_bindings.md) / TouchEventBinder

# Class: TouchEventBinder<EventMap\>

[util/touch_bindings](../modules/util_touch_bindings.md).TouchEventBinder

## Type parameters

| Name | Type |
| :------ | :------ |
| `EventMap` | extends [`EventActionMapInterface`](../modules/util_event_action_map.md#eventactionmapinterface) |

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`TouchEventBinder`**

## Table of contents

### Constructors

- [constructor](util_touch_bindings.TouchEventBinder.md#constructor)

### Properties

- [curTapNumTouches](util_touch_bindings.TouchEventBinder.md#curtapnumtouches)
- [disposedStacks](util_touch_bindings.TouchEventBinder.md#disposedstacks)
- [eventMap](util_touch_bindings.TouchEventBinder.md#eventmap)
- [moved](util_touch_bindings.TouchEventBinder.md#moved)
- [numPriorTaps](util_touch_bindings.TouchEventBinder.md#numpriortaps)
- [pinched](util_touch_bindings.TouchEventBinder.md#pinched)
- [prevAngle](util_touch_bindings.TouchEventBinder.md#prevangle)
- [prevCenterX](util_touch_bindings.TouchEventBinder.md#prevcenterx)
- [prevCenterY](util_touch_bindings.TouchEventBinder.md#prevcentery)
- [prevDistance](util_touch_bindings.TouchEventBinder.md#prevdistance)
- [prevEvent](util_touch_bindings.TouchEventBinder.md#prevevent)
- [prevTouches](util_touch_bindings.TouchEventBinder.md#prevtouches)
- [priorTapNumTouches](util_touch_bindings.TouchEventBinder.md#priortapnumtouches)
- [refCount](util_touch_bindings.TouchEventBinder.md#refcount)
- [rotated](util_touch_bindings.TouchEventBinder.md#rotated)
- [startHold](util_touch_bindings.TouchEventBinder.md#starthold)
- [tapEndTime](util_touch_bindings.TouchEventBinder.md#tapendtime)
- [tapStartTime](util_touch_bindings.TouchEventBinder.md#tapstarttime)
- [target](util_touch_bindings.TouchEventBinder.md#target)
- [translated](util_touch_bindings.TouchEventBinder.md#translated)
- [wasDisposed](util_touch_bindings.TouchEventBinder.md#wasdisposed)

### Methods

- [addRef](util_touch_bindings.TouchEventBinder.md#addref)
- [dispatch](util_touch_bindings.TouchEventBinder.md#dispatch)
- [dispose](util_touch_bindings.TouchEventBinder.md#dispose)
- [disposed](util_touch_bindings.TouchEventBinder.md#disposed)
- [handleTouchEvent](util_touch_bindings.TouchEventBinder.md#handletouchevent)
- [refCountReachedZero](util_touch_bindings.TouchEventBinder.md#refcountreachedzero)
- [registerCancellable](util_touch_bindings.TouchEventBinder.md#registercancellable)
- [registerDisposer](util_touch_bindings.TouchEventBinder.md#registerdisposer)
- [registerEventListener](util_touch_bindings.TouchEventBinder.md#registereventlistener)
- [unregisterDisposer](util_touch_bindings.TouchEventBinder.md#unregisterdisposer)

## Constructors

### constructor

• **new TouchEventBinder**<`EventMap`\>(`target`, `eventMap`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventMap` | extends [`HierarchicalMapInterface`](../interfaces/util_hierarchical_map.HierarchicalMapInterface.md)<`string`, [`EventAction`](../interfaces/util_event_action_map.EventAction.md), `EventMap`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement) |
| `eventMap` | `EventMap` |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/util/touch_bindings.ts:274](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/touch_bindings.ts#L274)

## Properties

### curTapNumTouches

• `Private` **curTapNumTouches**: `number` = `0`

#### Defined in

[src/neuroglancer/util/touch_bindings.ts:146](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/touch_bindings.ts#L146)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### eventMap

• **eventMap**: `EventMap`

___

### moved

• `Private` **moved**: `boolean` = `false`

#### Defined in

[src/neuroglancer/util/touch_bindings.ts:117](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/touch_bindings.ts#L117)

___

### numPriorTaps

• `Private` **numPriorTaps**: `number` = `0`

#### Defined in

[src/neuroglancer/util/touch_bindings.ts:142](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/touch_bindings.ts#L142)

___

### pinched

• `Private` **pinched**: `boolean` = `false`

#### Defined in

[src/neuroglancer/util/touch_bindings.ts:131](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/touch_bindings.ts#L131)

___

### prevAngle

• `Private` **prevAngle**: `number` = `0`

Initial angle for two-finger touch.  Once the difference between this ange the current angle
exceeds `rotateThreshold`, `touchrotate` events are dispatched.

#### Defined in

[src/neuroglancer/util/touch_bindings.ts:123](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/touch_bindings.ts#L123)

___

### prevCenterX

• `Private` **prevCenterX**: `number` = `0`

#### Defined in

[src/neuroglancer/util/touch_bindings.ts:133](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/touch_bindings.ts#L133)

___

### prevCenterY

• `Private` **prevCenterY**: `number` = `0`

#### Defined in

[src/neuroglancer/util/touch_bindings.ts:134](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/touch_bindings.ts#L134)

___

### prevDistance

• `Private` **prevDistance**: `number` = `0`

Initial distance for two-finger touch.  Once the difference between this ange the current
distance exceeds `pinchThreshold`, `touchpinich` events are dispatched.

#### Defined in

[src/neuroglancer/util/touch_bindings.ts:130](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/touch_bindings.ts#L130)

___

### prevEvent

• `Private` `Optional` **prevEvent**: [`TouchEvent`](../modules/annotation_annotation_layer_state._internal_.md#touchevent)

#### Defined in

[src/neuroglancer/util/touch_bindings.ts:116](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/touch_bindings.ts#L116)

___

### prevTouches

• `Private` **prevTouches**: `Map`<`number`, [`Touch`](../modules/util_touch_bindings._internal_.md#touch)\>

#### Defined in

[src/neuroglancer/util/touch_bindings.ts:115](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/touch_bindings.ts#L115)

___

### priorTapNumTouches

• `Private` **priorTapNumTouches**: `number` = `0`

#### Defined in

[src/neuroglancer/util/touch_bindings.ts:143](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/touch_bindings.ts#L143)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### rotated

• `Private` **rotated**: `boolean` = `false`

#### Defined in

[src/neuroglancer/util/touch_bindings.ts:124](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/touch_bindings.ts#L124)

___

### startHold

• `Private` **startHold**: [`DebouncedFunc`](../interfaces/annotation_annotation_layer_state._internal_.DebouncedFunc.md)<(`event`: [`TouchEvent`](../modules/annotation_annotation_layer_state._internal_.md#touchevent), `eventPhase`: `number`, `centerX`: `number`, `centerY`: `number`) => `void`\>

#### Defined in

[src/neuroglancer/util/touch_bindings.ts:137](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/touch_bindings.ts#L137)

___

### tapEndTime

• `Private` **tapEndTime**: `number` = `0`

#### Defined in

[src/neuroglancer/util/touch_bindings.ts:145](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/touch_bindings.ts#L145)

___

### tapStartTime

• `Private` **tapStartTime**: `number` = `0`

#### Defined in

[src/neuroglancer/util/touch_bindings.ts:144](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/touch_bindings.ts#L144)

___

### target

• **target**: [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement)

___

### translated

• `Private` **translated**: `boolean` = `false`

#### Defined in

[src/neuroglancer/util/touch_bindings.ts:135](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/touch_bindings.ts#L135)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`TouchEventBinder`](util_touch_bindings.TouchEventBinder.md)<`EventMap`\>

#### Returns

[`TouchEventBinder`](util_touch_bindings.TouchEventBinder.md)<`EventMap`\>

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[addRef](util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### dispatch

▸ `Private` **dispatch**(`eventIdentifier`, `event`, `detail`, `eventPhase?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `eventIdentifier` | `string` | `undefined` |
| `event` | [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event) | `undefined` |
| `detail` | `any` | `undefined` |
| `eventPhase` | `number` | `event.eventPhase` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/touch_bindings.ts:111](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/touch_bindings.ts#L111)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[dispose](util_disposable.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposed](util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L75)

___

### handleTouchEvent

▸ `Private` **handleTouchEvent**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`TouchEvent`](../modules/annotation_annotation_layer_state._internal_.md#touchevent) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/touch_bindings.ts:148](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/touch_bindings.ts#L148)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCountReachedZero](util_disposable.RefCounted.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L66)

___

### registerCancellable

▸ **registerCancellable**<`T`\>(`cancellable`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cancellable` | `T` |

#### Returns

`T`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[registerCancellable](util_disposable.RefCounted.md#registercancellable)

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L100)

___

### registerDisposer

▸ **registerDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/util_disposable.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[registerDisposer](util_disposable.RefCounted.md#registerdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L76)

___

### registerEventListener

▸ **registerEventListener**(`target`, `type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EventTarget`](../modules/annotation_annotation_layer_state._internal_.md#eventtarget) |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/annotation_annotation_layer_state._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](../interfaces/annotation_annotation_layer_state._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[registerEventListener](util_disposable.RefCounted.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L95)

___

### unregisterDisposer

▸ **unregisterDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/util_disposable.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[unregisterDisposer](util_disposable.RefCounted.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)
