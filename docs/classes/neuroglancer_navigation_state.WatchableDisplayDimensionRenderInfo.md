[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/navigation\_state](../modules/neuroglancer_navigation_state.md) / WatchableDisplayDimensionRenderInfo

# Class: WatchableDisplayDimensionRenderInfo

[neuroglancer/navigation_state](../modules/neuroglancer_navigation_state.md).WatchableDisplayDimensionRenderInfo

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

  ↳ **`WatchableDisplayDimensionRenderInfo`**

## Table of contents

### Constructors

- [constructor](neuroglancer_navigation_state.WatchableDisplayDimensionRenderInfo.md#constructor)

### Properties

- [changed](neuroglancer_navigation_state.WatchableDisplayDimensionRenderInfo.md#changed)
- [curCoordinateSpace](neuroglancer_navigation_state.WatchableDisplayDimensionRenderInfo.md#curcoordinatespace)
- [curDisplayDimensions](neuroglancer_navigation_state.WatchableDisplayDimensionRenderInfo.md#curdisplaydimensions)
- [curRelativeDisplayScales](neuroglancer_navigation_state.WatchableDisplayDimensionRenderInfo.md#currelativedisplayscales)
- [displayDimensions](neuroglancer_navigation_state.WatchableDisplayDimensionRenderInfo.md#displaydimensions)
- [disposedStacks](neuroglancer_navigation_state.WatchableDisplayDimensionRenderInfo.md#disposedstacks)
- [refCount](neuroglancer_navigation_state.WatchableDisplayDimensionRenderInfo.md#refcount)
- [relativeDisplayScales](neuroglancer_navigation_state.WatchableDisplayDimensionRenderInfo.md#relativedisplayscales)
- [value\_](neuroglancer_navigation_state.WatchableDisplayDimensionRenderInfo.md#value_)
- [wasDisposed](neuroglancer_navigation_state.WatchableDisplayDimensionRenderInfo.md#wasdisposed)

### Accessors

- [value](neuroglancer_navigation_state.WatchableDisplayDimensionRenderInfo.md#value)

### Methods

- [addRef](neuroglancer_navigation_state.WatchableDisplayDimensionRenderInfo.md#addref)
- [dispose](neuroglancer_navigation_state.WatchableDisplayDimensionRenderInfo.md#dispose)
- [disposed](neuroglancer_navigation_state.WatchableDisplayDimensionRenderInfo.md#disposed)
- [refCountReachedZero](neuroglancer_navigation_state.WatchableDisplayDimensionRenderInfo.md#refcountreachedzero)
- [registerCancellable](neuroglancer_navigation_state.WatchableDisplayDimensionRenderInfo.md#registercancellable)
- [registerDisposer](neuroglancer_navigation_state.WatchableDisplayDimensionRenderInfo.md#registerdisposer)
- [registerEventListener](neuroglancer_navigation_state.WatchableDisplayDimensionRenderInfo.md#registereventlistener)
- [unregisterDisposer](neuroglancer_navigation_state.WatchableDisplayDimensionRenderInfo.md#unregisterdisposer)

## Constructors

### constructor

• **new WatchableDisplayDimensionRenderInfo**(`relativeDisplayScales`, `displayDimensions`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `relativeDisplayScales` | [`TrackableRelativeDisplayScales`](neuroglancer_navigation_state.TrackableRelativeDisplayScales.md) |
| `displayDimensions` | [`TrackableDisplayDimensions`](neuroglancer_navigation_state.TrackableDisplayDimensions.md) |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/navigation_state.ts:793](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/navigation_state.ts#L793)

## Properties

### changed

• **changed**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/navigation_state.ts:763](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/navigation_state.ts#L763)

___

### curCoordinateSpace

• `Private` **curCoordinateSpace**: [`CoordinateSpace`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpace.md)

#### Defined in

[src/neuroglancer/navigation_state.ts:766](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/navigation_state.ts#L766)

___

### curDisplayDimensions

• `Private` **curDisplayDimensions**: [`DisplayDimensions`](../interfaces/neuroglancer_navigation_state.DisplayDimensions.md)

#### Defined in

[src/neuroglancer/navigation_state.ts:765](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/navigation_state.ts#L765)

___

### curRelativeDisplayScales

• `Private` **curRelativeDisplayScales**: [`RelativeDisplayScales`](../interfaces/neuroglancer_navigation_state.RelativeDisplayScales.md)

#### Defined in

[src/neuroglancer/navigation_state.ts:764](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/navigation_state.ts#L764)

___

### displayDimensions

• **displayDimensions**: [`TrackableDisplayDimensions`](neuroglancer_navigation_state.TrackableDisplayDimensions.md)

#### Defined in

[src/neuroglancer/navigation_state.ts:795](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/navigation_state.ts#L795)

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

### relativeDisplayScales

• **relativeDisplayScales**: [`TrackableRelativeDisplayScales`](neuroglancer_navigation_state.TrackableRelativeDisplayScales.md)

#### Defined in

[src/neuroglancer/navigation_state.ts:794](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/navigation_state.ts#L794)

___

### value\_

• `Private` **value\_**: [`DisplayDimensionRenderInfo`](../interfaces/neuroglancer_navigation_state.DisplayDimensionRenderInfo.md)

#### Defined in

[src/neuroglancer/navigation_state.ts:767](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/navigation_state.ts#L767)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### value

• `get` **value**(): [`DisplayDimensionRenderInfo`](../interfaces/neuroglancer_navigation_state.DisplayDimensionRenderInfo.md)

#### Returns

[`DisplayDimensionRenderInfo`](../interfaces/neuroglancer_navigation_state.DisplayDimensionRenderInfo.md)

#### Defined in

[src/neuroglancer/navigation_state.ts:769](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/navigation_state.ts#L769)

## Methods

### addRef

▸ **addRef**(): [`WatchableDisplayDimensionRenderInfo`](neuroglancer_navigation_state.WatchableDisplayDimensionRenderInfo.md)

#### Returns

[`WatchableDisplayDimensionRenderInfo`](neuroglancer_navigation_state.WatchableDisplayDimensionRenderInfo.md)

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[addRef](neuroglancer_util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

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
