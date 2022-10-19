[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/util/touch\_bindings](../modules/neuroglancer_util_touch_bindings.md) / TouchEventBinder

# Class: TouchEventBinder<EventMap\>

[neuroglancer/util/touch_bindings](../modules/neuroglancer_util_touch_bindings.md).TouchEventBinder

## Type parameters

| Name | Type |
| :------ | :------ |
| `EventMap` | extends [`EventActionMapInterface`](../modules/neuroglancer_util_event_action_map.md#eventactionmapinterface) |

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`TouchEventBinder`**

## Table of contents

### Constructors

- [constructor](neuroglancer_util_touch_bindings.TouchEventBinder.md#constructor)

### Properties

- [curTapNumTouches](neuroglancer_util_touch_bindings.TouchEventBinder.md#curtapnumtouches)
- [disposedStacks](neuroglancer_util_touch_bindings.TouchEventBinder.md#disposedstacks)
- [eventMap](neuroglancer_util_touch_bindings.TouchEventBinder.md#eventmap)
- [moved](neuroglancer_util_touch_bindings.TouchEventBinder.md#moved)
- [numPriorTaps](neuroglancer_util_touch_bindings.TouchEventBinder.md#numpriortaps)
- [pinched](neuroglancer_util_touch_bindings.TouchEventBinder.md#pinched)
- [prevAngle](neuroglancer_util_touch_bindings.TouchEventBinder.md#prevangle)
- [prevCenterX](neuroglancer_util_touch_bindings.TouchEventBinder.md#prevcenterx)
- [prevCenterY](neuroglancer_util_touch_bindings.TouchEventBinder.md#prevcentery)
- [prevDistance](neuroglancer_util_touch_bindings.TouchEventBinder.md#prevdistance)
- [prevEvent](neuroglancer_util_touch_bindings.TouchEventBinder.md#prevevent)
- [prevTouches](neuroglancer_util_touch_bindings.TouchEventBinder.md#prevtouches)
- [priorTapNumTouches](neuroglancer_util_touch_bindings.TouchEventBinder.md#priortapnumtouches)
- [refCount](neuroglancer_util_touch_bindings.TouchEventBinder.md#refcount)
- [rotated](neuroglancer_util_touch_bindings.TouchEventBinder.md#rotated)
- [startHold](neuroglancer_util_touch_bindings.TouchEventBinder.md#starthold)
- [tapEndTime](neuroglancer_util_touch_bindings.TouchEventBinder.md#tapendtime)
- [tapStartTime](neuroglancer_util_touch_bindings.TouchEventBinder.md#tapstarttime)
- [target](neuroglancer_util_touch_bindings.TouchEventBinder.md#target)
- [translated](neuroglancer_util_touch_bindings.TouchEventBinder.md#translated)
- [wasDisposed](neuroglancer_util_touch_bindings.TouchEventBinder.md#wasdisposed)

### Methods

- [addRef](neuroglancer_util_touch_bindings.TouchEventBinder.md#addref)
- [dispatch](neuroglancer_util_touch_bindings.TouchEventBinder.md#dispatch)
- [dispose](neuroglancer_util_touch_bindings.TouchEventBinder.md#dispose)
- [disposed](neuroglancer_util_touch_bindings.TouchEventBinder.md#disposed)
- [handleTouchEvent](neuroglancer_util_touch_bindings.TouchEventBinder.md#handletouchevent)
- [refCountReachedZero](neuroglancer_util_touch_bindings.TouchEventBinder.md#refcountreachedzero)
- [registerCancellable](neuroglancer_util_touch_bindings.TouchEventBinder.md#registercancellable)
- [registerDisposer](neuroglancer_util_touch_bindings.TouchEventBinder.md#registerdisposer)
- [registerEventListener](neuroglancer_util_touch_bindings.TouchEventBinder.md#registereventlistener)
- [unregisterDisposer](neuroglancer_util_touch_bindings.TouchEventBinder.md#unregisterdisposer)

## Constructors

### constructor

• **new TouchEventBinder**<`EventMap`\>(`target`, `eventMap`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventMap` | extends [`HierarchicalMapInterface`](../interfaces/neuroglancer_util_hierarchical_map.HierarchicalMapInterface.md)<`string`, [`EventAction`](../interfaces/neuroglancer_util_event_action_map.EventAction.md), `EventMap`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`HTMLElement`](../modules/main_module._internal_.md#htmlelement) |
| `eventMap` | `EventMap` |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/util/touch_bindings.ts:274](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/touch_bindings.ts#L274)

## Properties

### curTapNumTouches

• `Private` **curTapNumTouches**: `number` = `0`

#### Defined in

[src/neuroglancer/util/touch_bindings.ts:146](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/touch_bindings.ts#L146)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### eventMap

• **eventMap**: `EventMap`

___

### moved

• `Private` **moved**: `boolean` = `false`

#### Defined in

[src/neuroglancer/util/touch_bindings.ts:117](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/touch_bindings.ts#L117)

___

### numPriorTaps

• `Private` **numPriorTaps**: `number` = `0`

#### Defined in

[src/neuroglancer/util/touch_bindings.ts:142](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/touch_bindings.ts#L142)

___

### pinched

• `Private` **pinched**: `boolean` = `false`

#### Defined in

[src/neuroglancer/util/touch_bindings.ts:131](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/touch_bindings.ts#L131)

___

### prevAngle

• `Private` **prevAngle**: `number` = `0`

Initial angle for two-finger touch.  Once the difference between this ange the current angle
exceeds `rotateThreshold`, `touchrotate` events are dispatched.

#### Defined in

[src/neuroglancer/util/touch_bindings.ts:123](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/touch_bindings.ts#L123)

___

### prevCenterX

• `Private` **prevCenterX**: `number` = `0`

#### Defined in

[src/neuroglancer/util/touch_bindings.ts:133](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/touch_bindings.ts#L133)

___

### prevCenterY

• `Private` **prevCenterY**: `number` = `0`

#### Defined in

[src/neuroglancer/util/touch_bindings.ts:134](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/touch_bindings.ts#L134)

___

### prevDistance

• `Private` **prevDistance**: `number` = `0`

Initial distance for two-finger touch.  Once the difference between this ange the current
distance exceeds `pinchThreshold`, `touchpinich` events are dispatched.

#### Defined in

[src/neuroglancer/util/touch_bindings.ts:130](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/touch_bindings.ts#L130)

___

### prevEvent

• `Private` `Optional` **prevEvent**: [`TouchEvent`](../modules/main_module._internal_.md#touchevent)

#### Defined in

[src/neuroglancer/util/touch_bindings.ts:116](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/touch_bindings.ts#L116)

___

### prevTouches

• `Private` **prevTouches**: `Map`<`number`, [`Touch`](../modules/neuroglancer_util_touch_bindings._internal_.md#touch)\>

#### Defined in

[src/neuroglancer/util/touch_bindings.ts:115](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/touch_bindings.ts#L115)

___

### priorTapNumTouches

• `Private` **priorTapNumTouches**: `number` = `0`

#### Defined in

[src/neuroglancer/util/touch_bindings.ts:143](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/touch_bindings.ts#L143)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### rotated

• `Private` **rotated**: `boolean` = `false`

#### Defined in

[src/neuroglancer/util/touch_bindings.ts:124](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/touch_bindings.ts#L124)

___

### startHold

• `Private` **startHold**: [`DebouncedFunc`](../interfaces/neuroglancer_chunk_manager_backend._internal_.DebouncedFunc.md)<(`event`: [`TouchEvent`](../modules/main_module._internal_.md#touchevent), `eventPhase`: `number`, `centerX`: `number`, `centerY`: `number`) => `void`\>

#### Defined in

[src/neuroglancer/util/touch_bindings.ts:137](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/touch_bindings.ts#L137)

___

### tapEndTime

• `Private` **tapEndTime**: `number` = `0`

#### Defined in

[src/neuroglancer/util/touch_bindings.ts:145](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/touch_bindings.ts#L145)

___

### tapStartTime

• `Private` **tapStartTime**: `number` = `0`

#### Defined in

[src/neuroglancer/util/touch_bindings.ts:144](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/touch_bindings.ts#L144)

___

### target

• **target**: [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)

___

### translated

• `Private` **translated**: `boolean` = `false`

#### Defined in

[src/neuroglancer/util/touch_bindings.ts:135](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/touch_bindings.ts#L135)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`TouchEventBinder`](neuroglancer_util_touch_bindings.TouchEventBinder.md)<`EventMap`\>

#### Returns

[`TouchEventBinder`](neuroglancer_util_touch_bindings.TouchEventBinder.md)<`EventMap`\>

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[addRef](neuroglancer_util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L48)

___

### dispatch

▸ `Private` **dispatch**(`eventIdentifier`, `event`, `detail`, `eventPhase?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `eventIdentifier` | `string` | `undefined` |
| `event` | [`Event`](../modules/main_module._internal_.md#event) | `undefined` |
| `detail` | `any` | `undefined` |
| `eventPhase` | `number` | `event.eventPhase` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/touch_bindings.ts:111](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/touch_bindings.ts#L111)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[dispose](neuroglancer_util_disposable.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposed](neuroglancer_util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L75)

___

### handleTouchEvent

▸ `Private` **handleTouchEvent**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`TouchEvent`](../modules/main_module._internal_.md#touchevent) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/touch_bindings.ts:148](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/touch_bindings.ts#L148)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCountReachedZero](neuroglancer_util_disposable.RefCounted.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L66)

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

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[registerCancellable](neuroglancer_util_disposable.RefCounted.md#registercancellable)

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L100)

___

### registerDisposer

▸ **registerDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/neuroglancer_util_disposable.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[registerDisposer](neuroglancer_util_disposable.RefCounted.md#registerdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L76)

___

### registerEventListener

▸ **registerEventListener**(`target`, `type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EventTarget`](../modules/main_module._internal_.md#eventtarget) |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/main_module._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](../interfaces/main_module._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[registerEventListener](neuroglancer_util_disposable.RefCounted.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L95)

___

### unregisterDisposer

▸ **unregisterDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/neuroglancer_util_disposable.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[unregisterDisposer](neuroglancer_util_disposable.RefCounted.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L85)
