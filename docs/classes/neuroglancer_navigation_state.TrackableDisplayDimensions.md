[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/navigation\_state](../modules/neuroglancer_navigation_state.md) / TrackableDisplayDimensions

# Class: TrackableDisplayDimensions

[neuroglancer/navigation_state](../modules/neuroglancer_navigation_state.md).TrackableDisplayDimensions

**`License`**

Copyright 2016 Google Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`TrackableDisplayDimensions`**

## Implements

- [`Trackable`](../interfaces/neuroglancer_util_trackable.Trackable.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_navigation_state.TrackableDisplayDimensions.md#constructor)

### Properties

- [changed](neuroglancer_navigation_state.TrackableDisplayDimensions.md#changed)
- [coordinateSpace](neuroglancer_navigation_state.TrackableDisplayDimensions.md#coordinatespace)
- [default\_](neuroglancer_navigation_state.TrackableDisplayDimensions.md#default_)
- [disposedStacks](neuroglancer_navigation_state.TrackableDisplayDimensions.md#disposedstacks)
- [refCount](neuroglancer_navigation_state.TrackableDisplayDimensions.md#refcount)
- [value\_](neuroglancer_navigation_state.TrackableDisplayDimensions.md#value_)
- [wasDisposed](neuroglancer_navigation_state.TrackableDisplayDimensions.md#wasdisposed)

### Accessors

- [default](neuroglancer_navigation_state.TrackableDisplayDimensions.md#default)
- [value](neuroglancer_navigation_state.TrackableDisplayDimensions.md#value)

### Methods

- [addRef](neuroglancer_navigation_state.TrackableDisplayDimensions.md#addref)
- [assign](neuroglancer_navigation_state.TrackableDisplayDimensions.md#assign)
- [assignValue](neuroglancer_navigation_state.TrackableDisplayDimensions.md#assignvalue)
- [dispose](neuroglancer_navigation_state.TrackableDisplayDimensions.md#dispose)
- [disposed](neuroglancer_navigation_state.TrackableDisplayDimensions.md#disposed)
- [refCountReachedZero](neuroglancer_navigation_state.TrackableDisplayDimensions.md#refcountreachedzero)
- [registerCancellable](neuroglancer_navigation_state.TrackableDisplayDimensions.md#registercancellable)
- [registerDisposer](neuroglancer_navigation_state.TrackableDisplayDimensions.md#registerdisposer)
- [registerEventListener](neuroglancer_navigation_state.TrackableDisplayDimensions.md#registereventlistener)
- [reset](neuroglancer_navigation_state.TrackableDisplayDimensions.md#reset)
- [restoreState](neuroglancer_navigation_state.TrackableDisplayDimensions.md#restorestate)
- [setDimensionIndices](neuroglancer_navigation_state.TrackableDisplayDimensions.md#setdimensionindices)
- [setToDefault](neuroglancer_navigation_state.TrackableDisplayDimensions.md#settodefault)
- [toJSON](neuroglancer_navigation_state.TrackableDisplayDimensions.md#tojson)
- [unregisterDisposer](neuroglancer_navigation_state.TrackableDisplayDimensions.md#unregisterdisposer)
- [update](neuroglancer_navigation_state.TrackableDisplayDimensions.md#update)

## Constructors

### constructor

• **new TrackableDisplayDimensions**(`coordinateSpace`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `coordinateSpace` | [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<[`CoordinateSpace`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpace.md)\> |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/navigation_state.ts:818](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/navigation_state.ts#L818)

## Properties

### changed

• **changed**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Implementation of

[Trackable](../interfaces/neuroglancer_util_trackable.Trackable.md).[changed](../interfaces/neuroglancer_util_trackable.Trackable.md#changed)

#### Defined in

[src/neuroglancer/navigation_state.ts:814](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/navigation_state.ts#L814)

___

### coordinateSpace

• **coordinateSpace**: [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<[`CoordinateSpace`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpace.md)\>

#### Defined in

[src/neuroglancer/navigation_state.ts:818](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/navigation_state.ts#L818)

___

### default\_

• `Private` **default\_**: `boolean` = `true`

#### Defined in

[src/neuroglancer/navigation_state.ts:815](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/navigation_state.ts#L815)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### value\_

• `Private` **value\_**: `undefined` \| [`DisplayDimensions`](../interfaces/neuroglancer_navigation_state.DisplayDimensions.md) = `undefined`

#### Defined in

[src/neuroglancer/navigation_state.ts:816](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/navigation_state.ts#L816)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### default

• `get` **default**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/navigation_state.ts:914](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/navigation_state.ts#L914)

• `set` **default**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:919](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/navigation_state.ts#L919)

___

### value

• `get` **value**(): [`DisplayDimensions`](../interfaces/neuroglancer_navigation_state.DisplayDimensions.md)

#### Returns

[`DisplayDimensions`](../interfaces/neuroglancer_navigation_state.DisplayDimensions.md)

#### Defined in

[src/neuroglancer/navigation_state.ts:824](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/navigation_state.ts#L824)

## Methods

### addRef

▸ **addRef**(): [`TrackableDisplayDimensions`](neuroglancer_navigation_state.TrackableDisplayDimensions.md)

#### Returns

[`TrackableDisplayDimensions`](neuroglancer_navigation_state.TrackableDisplayDimensions.md)

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[addRef](neuroglancer_util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

___

### assign

▸ **assign**(`other`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`TrackableDisplayDimensions`](neuroglancer_navigation_state.TrackableDisplayDimensions.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:947](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/navigation_state.ts#L947)

___

### assignValue

▸ `Private` **assignValue**(`coordinateSpace`, `displayRank`, `displayDimensionIndices`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `coordinateSpace` | [`CoordinateSpace`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpace.md) |
| `displayRank` | `number` |
| `displayDimensionIndices` | `Int32Array` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:871](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/navigation_state.ts#L871)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[dispose](neuroglancer_util_disposable.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposed](neuroglancer_util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L75)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCountReachedZero](neuroglancer_util_disposable.RefCounted.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L66)

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

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L100)

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

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L76)

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

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L95)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Implementation of

Trackable.reset

#### Defined in

[src/neuroglancer/navigation_state.ts:881](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/navigation_state.ts#L881)

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

[src/neuroglancer/navigation_state.ts:887](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/navigation_state.ts#L887)

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

[src/neuroglancer/navigation_state.ts:930](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/navigation_state.ts#L930)

___

### setToDefault

▸ `Private` **setToDefault**(`coordinateSpace`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `coordinateSpace` | [`CoordinateSpace`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpace.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:861](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/navigation_state.ts#L861)

___

### toJSON

▸ **toJSON**(): `undefined` \| `string`[]

#### Returns

`undefined` \| `string`[]

#### Implementation of

Trackable.toJSON

#### Defined in

[src/neuroglancer/navigation_state.ts:935](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/navigation_state.ts#L935)

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

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L85)

___

### update

▸ `Private` **update**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:829](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/navigation_state.ts#L829)
