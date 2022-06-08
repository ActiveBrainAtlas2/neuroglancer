[neuroglancer](../README.md) / [Modules](../modules.md) / [navigation\_state](../modules/navigation_state.md) / TrackableRelativeDisplayScales

# Class: TrackableRelativeDisplayScales

[navigation_state](../modules/navigation_state.md).TrackableRelativeDisplayScales

## Hierarchy

- `RefCounted`

  ↳ **`TrackableRelativeDisplayScales`**

## Implements

- `Trackable`
- [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<[`RelativeDisplayScales`](../interfaces/navigation_state.RelativeDisplayScales.md)\>

## Table of contents

### Constructors

- [constructor](navigation_state.TrackableRelativeDisplayScales.md#constructor)

### Properties

- [changed](navigation_state.TrackableRelativeDisplayScales.md#changed)
- [coordinateSpace](navigation_state.TrackableRelativeDisplayScales.md#coordinatespace)
- [curCoordinateSpace](navigation_state.TrackableRelativeDisplayScales.md#curcoordinatespace)
- [disposedStacks](navigation_state.TrackableRelativeDisplayScales.md#disposedstacks)
- [refCount](navigation_state.TrackableRelativeDisplayScales.md#refcount)
- [value\_](navigation_state.TrackableRelativeDisplayScales.md#value_)
- [wasDisposed](navigation_state.TrackableRelativeDisplayScales.md#wasdisposed)

### Accessors

- [value](navigation_state.TrackableRelativeDisplayScales.md#value)

### Methods

- [addRef](navigation_state.TrackableRelativeDisplayScales.md#addref)
- [assign](navigation_state.TrackableRelativeDisplayScales.md#assign)
- [dispose](navigation_state.TrackableRelativeDisplayScales.md#dispose)
- [disposed](navigation_state.TrackableRelativeDisplayScales.md#disposed)
- [refCountReachedZero](navigation_state.TrackableRelativeDisplayScales.md#refcountreachedzero)
- [registerCancellable](navigation_state.TrackableRelativeDisplayScales.md#registercancellable)
- [registerDisposer](navigation_state.TrackableRelativeDisplayScales.md#registerdisposer)
- [registerEventListener](navigation_state.TrackableRelativeDisplayScales.md#registereventlistener)
- [reset](navigation_state.TrackableRelativeDisplayScales.md#reset)
- [restoreState](navigation_state.TrackableRelativeDisplayScales.md#restorestate)
- [setFactors](navigation_state.TrackableRelativeDisplayScales.md#setfactors)
- [toJSON](navigation_state.TrackableRelativeDisplayScales.md#tojson)
- [unregisterDisposer](navigation_state.TrackableRelativeDisplayScales.md#unregisterdisposer)
- [update](navigation_state.TrackableRelativeDisplayScales.md#update)

## Constructors

### constructor

• **new TrackableRelativeDisplayScales**(`coordinateSpace`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `coordinateSpace` | [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<[`CoordinateSpace`](../interfaces/coordinate_transform.CoordinateSpace.md)\> |

#### Overrides

RefCounted.constructor

#### Defined in

[src/neuroglancer/navigation_state.ts:515](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/navigation_state.ts#L515)

## Properties

### changed

• **changed**: `NullarySignal`

#### Implementation of

[WatchableValueInterface](../interfaces/trackable_value.WatchableValueInterface.md).[changed](../interfaces/trackable_value.WatchableValueInterface.md#changed)

#### Defined in

[src/neuroglancer/navigation_state.ts:512](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/navigation_state.ts#L512)

___

### coordinateSpace

• **coordinateSpace**: [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<[`CoordinateSpace`](../interfaces/coordinate_transform.CoordinateSpace.md)\>

___

### curCoordinateSpace

• `Private` **curCoordinateSpace**: [`CoordinateSpace`](../interfaces/coordinate_transform.CoordinateSpace.md) = `emptyInvalidCoordinateSpace`

#### Defined in

[src/neuroglancer/navigation_state.ts:513](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/navigation_state.ts#L513)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

RefCounted.disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L52)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

RefCounted.refCount

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L45)

___

### value\_

• `Private` **value\_**: [`RelativeDisplayScales`](../interfaces/navigation_state.RelativeDisplayScales.md)

#### Defined in

[src/neuroglancer/navigation_state.ts:514](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/navigation_state.ts#L514)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

RefCounted.wasDisposed

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### value

• `get` **value**(): [`RelativeDisplayScales`](../interfaces/navigation_state.RelativeDisplayScales.md)

#### Returns

[`RelativeDisplayScales`](../interfaces/navigation_state.RelativeDisplayScales.md)

#### Implementation of

[WatchableValueInterface](../interfaces/trackable_value.WatchableValueInterface.md).[value](../interfaces/trackable_value.WatchableValueInterface.md#value)

#### Defined in

[src/neuroglancer/navigation_state.ts:521](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/navigation_state.ts#L521)

## Methods

### addRef

▸ **addRef**(): [`TrackableRelativeDisplayScales`](navigation_state.TrackableRelativeDisplayScales.md)

#### Returns

[`TrackableRelativeDisplayScales`](navigation_state.TrackableRelativeDisplayScales.md)

#### Inherited from

RefCounted.addRef

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L48)

___

### assign

▸ **assign**(`other`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`TrackableRelativeDisplayScales`](navigation_state.TrackableRelativeDisplayScales.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:595](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/navigation_state.ts#L595)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

RefCounted.dispose

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

RefCounted.disposed

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L75)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

RefCounted.refCountReachedZero

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L66)

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

RefCounted.registerCancellable

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L100)

___

### registerDisposer

▸ **registerDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Disposer` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

RefCounted.registerDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L76)

___

### registerEventListener

▸ **registerEventListener**(`target`, `type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `EventTarget` |
| `type` | `string` |
| `listener` | `EventListenerOrEventListenerObject` |
| `options?` | `boolean` \| `AddEventListenerOptions` |

#### Returns

`void`

#### Inherited from

RefCounted.registerEventListener

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L95)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Implementation of

Trackable.reset

#### Defined in

[src/neuroglancer/navigation_state.ts:525](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/navigation_state.ts#L525)

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

Trackable.restoreState

#### Defined in

[src/neuroglancer/navigation_state.ts:547](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/navigation_state.ts#L547)

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

[src/neuroglancer/navigation_state.ts:564](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/navigation_state.ts#L564)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Implementation of

Trackable.toJSON

#### Defined in

[src/neuroglancer/navigation_state.ts:531](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/navigation_state.ts#L531)

___

### unregisterDisposer

▸ **unregisterDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Disposer` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

RefCounted.unregisterDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L85)

___

### update

▸ `Private` **update**(): [`RelativeDisplayScales`](../interfaces/navigation_state.RelativeDisplayScales.md)

#### Returns

[`RelativeDisplayScales`](../interfaces/navigation_state.RelativeDisplayScales.md)

#### Defined in

[src/neuroglancer/navigation_state.ts:572](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/navigation_state.ts#L572)
