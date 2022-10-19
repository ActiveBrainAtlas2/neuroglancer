[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/polygon](../modules/annotation_polygon.md) / [<internal\>](../modules/annotation_polygon._internal_.md) / TrackableDisplayDimensions

# Class: TrackableDisplayDimensions

[annotation/polygon](../modules/annotation_polygon.md).[<internal>](../modules/annotation_polygon._internal_.md).TrackableDisplayDimensions

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`TrackableDisplayDimensions`**

## Implements

- [`Trackable`](../interfaces/util_trackable.Trackable.md)

## Table of contents

### Constructors

- [constructor](annotation_polygon._internal_.TrackableDisplayDimensions.md#constructor)

### Properties

- [changed](annotation_polygon._internal_.TrackableDisplayDimensions.md#changed)
- [coordinateSpace](annotation_polygon._internal_.TrackableDisplayDimensions.md#coordinatespace)
- [default\_](annotation_polygon._internal_.TrackableDisplayDimensions.md#default_)
- [disposedStacks](annotation_polygon._internal_.TrackableDisplayDimensions.md#disposedstacks)
- [refCount](annotation_polygon._internal_.TrackableDisplayDimensions.md#refcount)
- [value\_](annotation_polygon._internal_.TrackableDisplayDimensions.md#value_)
- [wasDisposed](annotation_polygon._internal_.TrackableDisplayDimensions.md#wasdisposed)

### Accessors

- [default](annotation_polygon._internal_.TrackableDisplayDimensions.md#default)
- [value](annotation_polygon._internal_.TrackableDisplayDimensions.md#value)

### Methods

- [addRef](annotation_polygon._internal_.TrackableDisplayDimensions.md#addref)
- [assign](annotation_polygon._internal_.TrackableDisplayDimensions.md#assign)
- [assignValue](annotation_polygon._internal_.TrackableDisplayDimensions.md#assignvalue)
- [dispose](annotation_polygon._internal_.TrackableDisplayDimensions.md#dispose)
- [disposed](annotation_polygon._internal_.TrackableDisplayDimensions.md#disposed)
- [refCountReachedZero](annotation_polygon._internal_.TrackableDisplayDimensions.md#refcountreachedzero)
- [registerCancellable](annotation_polygon._internal_.TrackableDisplayDimensions.md#registercancellable)
- [registerDisposer](annotation_polygon._internal_.TrackableDisplayDimensions.md#registerdisposer)
- [registerEventListener](annotation_polygon._internal_.TrackableDisplayDimensions.md#registereventlistener)
- [reset](annotation_polygon._internal_.TrackableDisplayDimensions.md#reset)
- [restoreState](annotation_polygon._internal_.TrackableDisplayDimensions.md#restorestate)
- [setDimensionIndices](annotation_polygon._internal_.TrackableDisplayDimensions.md#setdimensionindices)
- [setToDefault](annotation_polygon._internal_.TrackableDisplayDimensions.md#settodefault)
- [toJSON](annotation_polygon._internal_.TrackableDisplayDimensions.md#tojson)
- [unregisterDisposer](annotation_polygon._internal_.TrackableDisplayDimensions.md#unregisterdisposer)
- [update](annotation_polygon._internal_.TrackableDisplayDimensions.md#update)

## Constructors

### constructor

• **new TrackableDisplayDimensions**(`coordinateSpace`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `coordinateSpace` | [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<[`CoordinateSpace`](../interfaces/annotation_annotation_layer_state._internal_.CoordinateSpace.md)\> |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/navigation_state.ts:818](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L818)

## Properties

### changed

• **changed**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Implementation of

[Trackable](../interfaces/util_trackable.Trackable.md).[changed](../interfaces/util_trackable.Trackable.md#changed)

#### Defined in

[src/neuroglancer/navigation_state.ts:814](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L814)

___

### coordinateSpace

• **coordinateSpace**: [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<[`CoordinateSpace`](../interfaces/annotation_annotation_layer_state._internal_.CoordinateSpace.md)\>

___

### default\_

• `Private` **default\_**: `boolean` = `true`

#### Defined in

[src/neuroglancer/navigation_state.ts:815](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L815)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### value\_

• `Private` **value\_**: `undefined` \| [`DisplayDimensions`](../interfaces/annotation_annotation_layer_state._internal_.DisplayDimensions.md) = `undefined`

#### Defined in

[src/neuroglancer/navigation_state.ts:816](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L816)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### default

• `get` **default**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/navigation_state.ts:914](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L914)

• `set` **default**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:919](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L919)

___

### value

• `get` **value**(): [`DisplayDimensions`](../interfaces/annotation_annotation_layer_state._internal_.DisplayDimensions.md)

#### Returns

[`DisplayDimensions`](../interfaces/annotation_annotation_layer_state._internal_.DisplayDimensions.md)

#### Defined in

[src/neuroglancer/navigation_state.ts:824](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L824)

## Methods

### addRef

▸ **addRef**(): [`TrackableDisplayDimensions`](annotation_polygon._internal_.TrackableDisplayDimensions.md)

#### Returns

[`TrackableDisplayDimensions`](annotation_polygon._internal_.TrackableDisplayDimensions.md)

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[addRef](util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### assign

▸ **assign**(`other`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`TrackableDisplayDimensions`](annotation_polygon._internal_.TrackableDisplayDimensions.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:947](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L947)

___

### assignValue

▸ `Private` **assignValue**(`coordinateSpace`, `displayRank`, `displayDimensionIndices`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `coordinateSpace` | [`CoordinateSpace`](../interfaces/annotation_annotation_layer_state._internal_.CoordinateSpace.md) |
| `displayRank` | `number` |
| `displayDimensionIndices` | `Int32Array` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:871](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L871)

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

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Implementation of

[Trackable](../interfaces/util_trackable.Trackable.md).[reset](../interfaces/util_trackable.Trackable.md#reset)

#### Defined in

[src/neuroglancer/navigation_state.ts:881](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L881)

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

[Trackable](../interfaces/util_trackable.Trackable.md).[restoreState](../interfaces/util_trackable.Trackable.md#restorestate)

#### Defined in

[src/neuroglancer/navigation_state.ts:887](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L887)

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

[src/neuroglancer/navigation_state.ts:930](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L930)

___

### setToDefault

▸ `Private` **setToDefault**(`coordinateSpace`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `coordinateSpace` | [`CoordinateSpace`](../interfaces/annotation_annotation_layer_state._internal_.CoordinateSpace.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:861](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L861)

___

### toJSON

▸ **toJSON**(): `undefined` \| `string`[]

#### Returns

`undefined` \| `string`[]

#### Implementation of

[Trackable](../interfaces/util_trackable.Trackable.md).[toJSON](../interfaces/util_trackable.Trackable.md#tojson)

#### Defined in

[src/neuroglancer/navigation_state.ts:935](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L935)

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

___

### update

▸ `Private` **update**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:829](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L829)
