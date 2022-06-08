[neuroglancer](../README.md) / [Modules](../modules.md) / [navigation\_state](../modules/navigation_state.md) / TrackableDisplayDimensions

# Class: TrackableDisplayDimensions

[navigation_state](../modules/navigation_state.md).TrackableDisplayDimensions

## Hierarchy

- `RefCounted`

  ↳ **`TrackableDisplayDimensions`**

## Implements

- `Trackable`

## Table of contents

### Constructors

- [constructor](navigation_state.TrackableDisplayDimensions.md#constructor)

### Properties

- [changed](navigation_state.TrackableDisplayDimensions.md#changed)
- [coordinateSpace](navigation_state.TrackableDisplayDimensions.md#coordinatespace)
- [default\_](navigation_state.TrackableDisplayDimensions.md#default_)
- [disposedStacks](navigation_state.TrackableDisplayDimensions.md#disposedstacks)
- [refCount](navigation_state.TrackableDisplayDimensions.md#refcount)
- [value\_](navigation_state.TrackableDisplayDimensions.md#value_)
- [wasDisposed](navigation_state.TrackableDisplayDimensions.md#wasdisposed)

### Accessors

- [default](navigation_state.TrackableDisplayDimensions.md#default)
- [value](navigation_state.TrackableDisplayDimensions.md#value)

### Methods

- [addRef](navigation_state.TrackableDisplayDimensions.md#addref)
- [assign](navigation_state.TrackableDisplayDimensions.md#assign)
- [assignValue](navigation_state.TrackableDisplayDimensions.md#assignvalue)
- [dispose](navigation_state.TrackableDisplayDimensions.md#dispose)
- [disposed](navigation_state.TrackableDisplayDimensions.md#disposed)
- [refCountReachedZero](navigation_state.TrackableDisplayDimensions.md#refcountreachedzero)
- [registerCancellable](navigation_state.TrackableDisplayDimensions.md#registercancellable)
- [registerDisposer](navigation_state.TrackableDisplayDimensions.md#registerdisposer)
- [registerEventListener](navigation_state.TrackableDisplayDimensions.md#registereventlistener)
- [reset](navigation_state.TrackableDisplayDimensions.md#reset)
- [restoreState](navigation_state.TrackableDisplayDimensions.md#restorestate)
- [setDimensionIndices](navigation_state.TrackableDisplayDimensions.md#setdimensionindices)
- [setToDefault](navigation_state.TrackableDisplayDimensions.md#settodefault)
- [toJSON](navigation_state.TrackableDisplayDimensions.md#tojson)
- [unregisterDisposer](navigation_state.TrackableDisplayDimensions.md#unregisterdisposer)
- [update](navigation_state.TrackableDisplayDimensions.md#update)

## Constructors

### constructor

• **new TrackableDisplayDimensions**(`coordinateSpace`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `coordinateSpace` | [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<[`CoordinateSpace`](../interfaces/coordinate_transform.CoordinateSpace.md)\> |

#### Overrides

RefCounted.constructor

#### Defined in

[src/neuroglancer/navigation_state.ts:818](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/navigation_state.ts#L818)

## Properties

### changed

• **changed**: `NullarySignal`

#### Implementation of

Trackable.changed

#### Defined in

[src/neuroglancer/navigation_state.ts:814](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/navigation_state.ts#L814)

___

### coordinateSpace

• **coordinateSpace**: [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<[`CoordinateSpace`](../interfaces/coordinate_transform.CoordinateSpace.md)\>

___

### default\_

• `Private` **default\_**: `boolean` = `true`

#### Defined in

[src/neuroglancer/navigation_state.ts:815](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/navigation_state.ts#L815)

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

• `Private` **value\_**: `undefined` \| [`DisplayDimensions`](../interfaces/navigation_state.DisplayDimensions.md) = `undefined`

#### Defined in

[src/neuroglancer/navigation_state.ts:816](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/navigation_state.ts#L816)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

RefCounted.wasDisposed

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### default

• `get` **default**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/navigation_state.ts:914](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/navigation_state.ts#L914)

• `set` **default**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:919](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/navigation_state.ts#L919)

___

### value

• `get` **value**(): [`DisplayDimensions`](../interfaces/navigation_state.DisplayDimensions.md)

#### Returns

[`DisplayDimensions`](../interfaces/navigation_state.DisplayDimensions.md)

#### Defined in

[src/neuroglancer/navigation_state.ts:824](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/navigation_state.ts#L824)

## Methods

### addRef

▸ **addRef**(): [`TrackableDisplayDimensions`](navigation_state.TrackableDisplayDimensions.md)

#### Returns

[`TrackableDisplayDimensions`](navigation_state.TrackableDisplayDimensions.md)

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
| `other` | [`TrackableDisplayDimensions`](navigation_state.TrackableDisplayDimensions.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:947](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/navigation_state.ts#L947)

___

### assignValue

▸ `Private` **assignValue**(`coordinateSpace`, `displayRank`, `displayDimensionIndices`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `coordinateSpace` | [`CoordinateSpace`](../interfaces/coordinate_transform.CoordinateSpace.md) |
| `displayRank` | `number` |
| `displayDimensionIndices` | `Int32Array` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:871](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/navigation_state.ts#L871)

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

[src/neuroglancer/navigation_state.ts:881](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/navigation_state.ts#L881)

___

### restoreState

▸ **restoreState**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

`void`

#### Implementation of

Trackable.restoreState

#### Defined in

[src/neuroglancer/navigation_state.ts:887](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/navigation_state.ts#L887)

___

### setDimensionIndices

▸ **setDimensionIndices**(`rank`, `dimensionIndices`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rank` | `number` |
| `dimensionIndices` | `Int32Array` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:930](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/navigation_state.ts#L930)

___

### setToDefault

▸ `Private` **setToDefault**(`coordinateSpace`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `coordinateSpace` | [`CoordinateSpace`](../interfaces/coordinate_transform.CoordinateSpace.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:861](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/navigation_state.ts#L861)

___

### toJSON

▸ **toJSON**(): `undefined` \| `string`[]

#### Returns

`undefined` \| `string`[]

#### Implementation of

Trackable.toJSON

#### Defined in

[src/neuroglancer/navigation_state.ts:935](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/navigation_state.ts#L935)

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

▸ `Private` **update**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:829](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/navigation_state.ts#L829)
