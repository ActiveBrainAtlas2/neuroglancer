[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/navigation\_state](../modules/neuroglancer_navigation_state.md) / TrackableRelativeDisplayScales

# Class: TrackableRelativeDisplayScales

[neuroglancer/navigation_state](../modules/neuroglancer_navigation_state.md).TrackableRelativeDisplayScales

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`TrackableRelativeDisplayScales`**

## Implements

- [`Trackable`](../interfaces/neuroglancer_util_trackable.Trackable.md)
- [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<[`RelativeDisplayScales`](../interfaces/neuroglancer_navigation_state.RelativeDisplayScales.md)\>

## Table of contents

### Constructors

- [constructor](neuroglancer_navigation_state.TrackableRelativeDisplayScales.md#constructor)

### Properties

- [changed](neuroglancer_navigation_state.TrackableRelativeDisplayScales.md#changed)
- [coordinateSpace](neuroglancer_navigation_state.TrackableRelativeDisplayScales.md#coordinatespace)
- [curCoordinateSpace](neuroglancer_navigation_state.TrackableRelativeDisplayScales.md#curcoordinatespace)
- [disposedStacks](neuroglancer_navigation_state.TrackableRelativeDisplayScales.md#disposedstacks)
- [refCount](neuroglancer_navigation_state.TrackableRelativeDisplayScales.md#refcount)
- [value\_](neuroglancer_navigation_state.TrackableRelativeDisplayScales.md#value_)
- [wasDisposed](neuroglancer_navigation_state.TrackableRelativeDisplayScales.md#wasdisposed)

### Accessors

- [value](neuroglancer_navigation_state.TrackableRelativeDisplayScales.md#value)

### Methods

- [addRef](neuroglancer_navigation_state.TrackableRelativeDisplayScales.md#addref)
- [assign](neuroglancer_navigation_state.TrackableRelativeDisplayScales.md#assign)
- [dispose](neuroglancer_navigation_state.TrackableRelativeDisplayScales.md#dispose)
- [disposed](neuroglancer_navigation_state.TrackableRelativeDisplayScales.md#disposed)
- [refCountReachedZero](neuroglancer_navigation_state.TrackableRelativeDisplayScales.md#refcountreachedzero)
- [registerCancellable](neuroglancer_navigation_state.TrackableRelativeDisplayScales.md#registercancellable)
- [registerDisposer](neuroglancer_navigation_state.TrackableRelativeDisplayScales.md#registerdisposer)
- [registerEventListener](neuroglancer_navigation_state.TrackableRelativeDisplayScales.md#registereventlistener)
- [reset](neuroglancer_navigation_state.TrackableRelativeDisplayScales.md#reset)
- [restoreState](neuroglancer_navigation_state.TrackableRelativeDisplayScales.md#restorestate)
- [setFactors](neuroglancer_navigation_state.TrackableRelativeDisplayScales.md#setfactors)
- [toJSON](neuroglancer_navigation_state.TrackableRelativeDisplayScales.md#tojson)
- [unregisterDisposer](neuroglancer_navigation_state.TrackableRelativeDisplayScales.md#unregisterdisposer)
- [update](neuroglancer_navigation_state.TrackableRelativeDisplayScales.md#update)

## Constructors

### constructor

• **new TrackableRelativeDisplayScales**(`coordinateSpace`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `coordinateSpace` | [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<[`CoordinateSpace`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpace.md)\> |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/navigation_state.ts:515](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L515)

## Properties

### changed

• **changed**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Implementation of

[WatchableValueInterface](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md).[changed](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md#changed)

#### Defined in

[src/neuroglancer/navigation_state.ts:512](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L512)

___

### coordinateSpace

• **coordinateSpace**: [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<[`CoordinateSpace`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpace.md)\>

___

### curCoordinateSpace

• `Private` **curCoordinateSpace**: [`CoordinateSpace`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpace.md) = `emptyInvalidCoordinateSpace`

#### Defined in

[src/neuroglancer/navigation_state.ts:513](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L513)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### value\_

• `Private` **value\_**: [`RelativeDisplayScales`](../interfaces/neuroglancer_navigation_state.RelativeDisplayScales.md)

#### Defined in

[src/neuroglancer/navigation_state.ts:514](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L514)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### value

• `get` **value**(): [`RelativeDisplayScales`](../interfaces/neuroglancer_navigation_state.RelativeDisplayScales.md)

#### Returns

[`RelativeDisplayScales`](../interfaces/neuroglancer_navigation_state.RelativeDisplayScales.md)

#### Implementation of

[WatchableValueInterface](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md).[value](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md#value)

#### Defined in

[src/neuroglancer/navigation_state.ts:521](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L521)

## Methods

### addRef

▸ **addRef**(): [`TrackableRelativeDisplayScales`](neuroglancer_navigation_state.TrackableRelativeDisplayScales.md)

#### Returns

[`TrackableRelativeDisplayScales`](neuroglancer_navigation_state.TrackableRelativeDisplayScales.md)

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[addRef](neuroglancer_util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L48)

___

### assign

▸ **assign**(`other`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`TrackableRelativeDisplayScales`](neuroglancer_navigation_state.TrackableRelativeDisplayScales.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:595](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L595)

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

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Implementation of

[Trackable](../interfaces/neuroglancer_util_trackable.Trackable.md).[reset](../interfaces/neuroglancer_util_trackable.Trackable.md#reset)

#### Defined in

[src/neuroglancer/navigation_state.ts:525](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L525)

___

### restoreState

▸ **restoreState**(`json`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `unknown` |

#### Returns

`void`

#### Implementation of

[Trackable](../interfaces/neuroglancer_util_trackable.Trackable.md).[restoreState](../interfaces/neuroglancer_util_trackable.Trackable.md#restorestate)

#### Defined in

[src/neuroglancer/navigation_state.ts:547](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L547)

___

### setFactors

▸ **setFactors**(`factors`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `factors` | `Float64Array` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:564](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L564)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Implementation of

[Trackable](../interfaces/neuroglancer_util_trackable.Trackable.md).[toJSON](../interfaces/neuroglancer_util_trackable.Trackable.md#tojson)

#### Defined in

[src/neuroglancer/navigation_state.ts:531](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L531)

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

___

### update

▸ `Private` **update**(): [`RelativeDisplayScales`](../interfaces/neuroglancer_navigation_state.RelativeDisplayScales.md)

#### Returns

[`RelativeDisplayScales`](../interfaces/neuroglancer_navigation_state.RelativeDisplayScales.md)

#### Defined in

[src/neuroglancer/navigation_state.ts:572](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L572)
