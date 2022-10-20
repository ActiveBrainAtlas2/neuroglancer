[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/navigation\_state](../modules/neuroglancer_navigation_state.md) / TrackableDepthRange

# Class: TrackableDepthRange

[neuroglancer/navigation_state](../modules/neuroglancer_navigation_state.md).TrackableDepthRange

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

  ↳ **`TrackableDepthRange`**

## Implements

- [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<`number`\>

## Table of contents

### Constructors

- [constructor](neuroglancer_navigation_state.TrackableDepthRange.md#constructor)

### Properties

- [canonicalVoxelPhysicalSize](neuroglancer_navigation_state.TrackableDepthRange.md#canonicalvoxelphysicalsize)
- [changed](neuroglancer_navigation_state.TrackableDepthRange.md#changed)
- [defaultValue](neuroglancer_navigation_state.TrackableDepthRange.md#defaultvalue)
- [displayDimensionRenderInfo](neuroglancer_navigation_state.TrackableDepthRange.md#displaydimensionrenderinfo)
- [disposedStacks](neuroglancer_navigation_state.TrackableDepthRange.md#disposedstacks)
- [refCount](neuroglancer_navigation_state.TrackableDepthRange.md#refcount)
- [value\_](neuroglancer_navigation_state.TrackableDepthRange.md#value_)
- [wasDisposed](neuroglancer_navigation_state.TrackableDepthRange.md#wasdisposed)

### Accessors

- [value](neuroglancer_navigation_state.TrackableDepthRange.md#value)

### Methods

- [addRef](neuroglancer_navigation_state.TrackableDepthRange.md#addref)
- [assign](neuroglancer_navigation_state.TrackableDepthRange.md#assign)
- [dispose](neuroglancer_navigation_state.TrackableDepthRange.md#dispose)
- [disposed](neuroglancer_navigation_state.TrackableDepthRange.md#disposed)
- [refCountReachedZero](neuroglancer_navigation_state.TrackableDepthRange.md#refcountreachedzero)
- [registerCancellable](neuroglancer_navigation_state.TrackableDepthRange.md#registercancellable)
- [registerDisposer](neuroglancer_navigation_state.TrackableDepthRange.md#registerdisposer)
- [registerEventListener](neuroglancer_navigation_state.TrackableDepthRange.md#registereventlistener)
- [reset](neuroglancer_navigation_state.TrackableDepthRange.md#reset)
- [restoreState](neuroglancer_navigation_state.TrackableDepthRange.md#restorestate)
- [setValueAbsolute](neuroglancer_navigation_state.TrackableDepthRange.md#setvalueabsolute)
- [toJSON](neuroglancer_navigation_state.TrackableDepthRange.md#tojson)
- [unregisterDisposer](neuroglancer_navigation_state.TrackableDepthRange.md#unregisterdisposer)

## Constructors

### constructor

• **new TrackableDepthRange**(`defaultValue`, `displayDimensionRenderInfo`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaultValue` | `number` |
| `displayDimensionRenderInfo` | [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<[`DisplayDimensionRenderInfo`](../interfaces/neuroglancer_navigation_state.DisplayDimensionRenderInfo.md)\> |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/navigation_state.ts:1418](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/navigation_state.ts#L1418)

## Properties

### canonicalVoxelPhysicalSize

• **canonicalVoxelPhysicalSize**: `number`

#### Defined in

[src/neuroglancer/navigation_state.ts:1430](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/navigation_state.ts#L1430)

___

### changed

• **changed**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Implementation of

[WatchableValueInterface](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md).[changed](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md#changed)

#### Defined in

[src/neuroglancer/navigation_state.ts:1416](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/navigation_state.ts#L1416)

___

### defaultValue

• `Readonly` **defaultValue**: `number`

#### Defined in

[src/neuroglancer/navigation_state.ts:1419](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/navigation_state.ts#L1419)

___

### displayDimensionRenderInfo

• **displayDimensionRenderInfo**: [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<[`DisplayDimensionRenderInfo`](../interfaces/neuroglancer_navigation_state.DisplayDimensionRenderInfo.md)\>

#### Defined in

[src/neuroglancer/navigation_state.ts:1420](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/navigation_state.ts#L1420)

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

• `Private` **value\_**: `number`

#### Defined in

[src/neuroglancer/navigation_state.ts:1429](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/navigation_state.ts#L1429)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### value

• `get` **value**(): `number`

#### Returns

`number`

#### Implementation of

[WatchableValueInterface](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md).[value](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md#value)

#### Defined in

[src/neuroglancer/navigation_state.ts:1432](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/navigation_state.ts#L1432)

• `set` **value**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Implementation of

[WatchableValueInterface](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md).[value](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md#value)

#### Defined in

[src/neuroglancer/navigation_state.ts:1447](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/navigation_state.ts#L1447)

## Methods

### addRef

▸ **addRef**(): [`TrackableDepthRange`](neuroglancer_navigation_state.TrackableDepthRange.md)

#### Returns

[`TrackableDepthRange`](neuroglancer_navigation_state.TrackableDepthRange.md)

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
| `other` | [`TrackableDepthRange`](neuroglancer_navigation_state.TrackableDepthRange.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:1481](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/navigation_state.ts#L1481)

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

#### Defined in

[src/neuroglancer/navigation_state.ts:1461](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/navigation_state.ts#L1461)

___

### restoreState

▸ **restoreState**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `unknown` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:1465](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/navigation_state.ts#L1465)

___

### setValueAbsolute

▸ **setValueAbsolute**(`value`, `sourceCanonicalVoxelPhysicalSize`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `sourceCanonicalVoxelPhysicalSize` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:1473](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/navigation_state.ts#L1473)

___

### toJSON

▸ **toJSON**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Defined in

[src/neuroglancer/navigation_state.ts:1455](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/navigation_state.ts#L1455)

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
