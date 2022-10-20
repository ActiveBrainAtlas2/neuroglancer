[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/navigation\_state](../modules/neuroglancer_navigation_state.md) / DisplayPose

# Class: DisplayPose

[neuroglancer/navigation_state](../modules/neuroglancer_navigation_state.md).DisplayPose

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

  ↳ **`DisplayPose`**

## Table of contents

### Constructors

- [constructor](neuroglancer_navigation_state.DisplayPose.md#constructor)

### Properties

- [changed](neuroglancer_navigation_state.DisplayPose.md#changed)
- [displayDimensionRenderInfo](neuroglancer_navigation_state.DisplayPose.md#displaydimensionrenderinfo)
- [disposedStacks](neuroglancer_navigation_state.DisplayPose.md#disposedstacks)
- [orientation](neuroglancer_navigation_state.DisplayPose.md#orientation)
- [position](neuroglancer_navigation_state.DisplayPose.md#position)
- [refCount](neuroglancer_navigation_state.DisplayPose.md#refcount)
- [wasDisposed](neuroglancer_navigation_state.DisplayPose.md#wasdisposed)

### Accessors

- [displayDimensions](neuroglancer_navigation_state.DisplayPose.md#displaydimensions)
- [relativeDisplayScales](neuroglancer_navigation_state.DisplayPose.md#relativedisplayscales)
- [valid](neuroglancer_navigation_state.DisplayPose.md#valid)

### Methods

- [addRef](neuroglancer_navigation_state.DisplayPose.md#addref)
- [dispose](neuroglancer_navigation_state.DisplayPose.md#dispose)
- [disposed](neuroglancer_navigation_state.DisplayPose.md#disposed)
- [refCountReachedZero](neuroglancer_navigation_state.DisplayPose.md#refcountreachedzero)
- [registerCancellable](neuroglancer_navigation_state.DisplayPose.md#registercancellable)
- [registerDisposer](neuroglancer_navigation_state.DisplayPose.md#registerdisposer)
- [registerEventListener](neuroglancer_navigation_state.DisplayPose.md#registereventlistener)
- [reset](neuroglancer_navigation_state.DisplayPose.md#reset)
- [rotateAbsolute](neuroglancer_navigation_state.DisplayPose.md#rotateabsolute)
- [rotateRelative](neuroglancer_navigation_state.DisplayPose.md#rotaterelative)
- [snap](neuroglancer_navigation_state.DisplayPose.md#snap)
- [toMat3](neuroglancer_navigation_state.DisplayPose.md#tomat3)
- [toMat4](neuroglancer_navigation_state.DisplayPose.md#tomat4)
- [translateDimensionRelative](neuroglancer_navigation_state.DisplayPose.md#translatedimensionrelative)
- [translateNonDisplayDimension](neuroglancer_navigation_state.DisplayPose.md#translatenondisplaydimension)
- [translateVoxelsRelative](neuroglancer_navigation_state.DisplayPose.md#translatevoxelsrelative)
- [unregisterDisposer](neuroglancer_navigation_state.DisplayPose.md#unregisterdisposer)
- [updateDisplayPosition](neuroglancer_navigation_state.DisplayPose.md#updatedisplayposition)

## Constructors

### constructor

• **new DisplayPose**(`position`, `displayDimensionRenderInfo`, `orientation`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | [`Position`](neuroglancer_navigation_state.Position.md) |
| `displayDimensionRenderInfo` | [`WatchableDisplayDimensionRenderInfo`](neuroglancer_navigation_state.WatchableDisplayDimensionRenderInfo.md) |
| `orientation` | [`OrientationState`](neuroglancer_navigation_state.OrientationState.md) |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/navigation_state.ts:979](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/navigation_state.ts#L979)

## Properties

### changed

• **changed**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/navigation_state.ts:969](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/navigation_state.ts#L969)

___

### displayDimensionRenderInfo

• **displayDimensionRenderInfo**: [`WatchableDisplayDimensionRenderInfo`](neuroglancer_navigation_state.WatchableDisplayDimensionRenderInfo.md)

#### Defined in

[src/neuroglancer/navigation_state.ts:981](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/navigation_state.ts#L981)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### orientation

• **orientation**: [`OrientationState`](neuroglancer_navigation_state.OrientationState.md)

#### Defined in

[src/neuroglancer/navigation_state.ts:982](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/navigation_state.ts#L982)

___

### position

• **position**: [`Position`](neuroglancer_navigation_state.Position.md)

#### Defined in

[src/neuroglancer/navigation_state.ts:980](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/navigation_state.ts#L980)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### displayDimensions

• `get` **displayDimensions**(): [`TrackableDisplayDimensions`](neuroglancer_navigation_state.TrackableDisplayDimensions.md)

#### Returns

[`TrackableDisplayDimensions`](neuroglancer_navigation_state.TrackableDisplayDimensions.md)

#### Defined in

[src/neuroglancer/navigation_state.ts:971](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/navigation_state.ts#L971)

___

### relativeDisplayScales

• `get` **relativeDisplayScales**(): [`TrackableRelativeDisplayScales`](neuroglancer_navigation_state.TrackableRelativeDisplayScales.md)

#### Returns

[`TrackableRelativeDisplayScales`](neuroglancer_navigation_state.TrackableRelativeDisplayScales.md)

#### Defined in

[src/neuroglancer/navigation_state.ts:975](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/navigation_state.ts#L975)

___

### valid

• `get` **valid**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/navigation_state.ts:992](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/navigation_state.ts#L992)

## Methods

### addRef

▸ **addRef**(): [`DisplayPose`](neuroglancer_navigation_state.DisplayPose.md)

#### Returns

[`DisplayPose`](neuroglancer_navigation_state.DisplayPose.md)

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

### reset

▸ **reset**(): `void`

Resets everything.

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:999](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/navigation_state.ts#L999)

___

### rotateAbsolute

▸ **rotateAbsolute**(`axis`, `angle`, `fixedPoint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `axis` | [`vec3`](neuroglancer_util_geom.vec3.md) |
| `angle` | `number` |
| `fixedPoint` | `Float32Array` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:1123](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/navigation_state.ts#L1123)

___

### rotateRelative

▸ **rotateRelative**(`axis`, `angle`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `axis` | [`vec3`](neuroglancer_util_geom.vec3.md) |
| `angle` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:1115](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/navigation_state.ts#L1115)

___

### snap

▸ **snap**(): `void`

Snaps the orientation to the nearest axis-aligned orientation, and
snaps the position to the nearest voxel.

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:1055](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/navigation_state.ts#L1055)

___

### toMat3

▸ **toMat3**(`mat`, `zoom`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mat` | [`mat3`](neuroglancer_util_geom.mat3.md) |
| `zoom` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:1040](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/navigation_state.ts#L1040)

___

### toMat4

▸ **toMat4**(`mat`, `zoom`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mat` | [`mat4`](neuroglancer_util_geom.mat4.md) |
| `zoom` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:1026](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/navigation_state.ts#L1026)

___

### translateDimensionRelative

▸ **translateDimensionRelative**(`dimensionIndex`, `adjustment`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimensionIndex` | `number` |
| `adjustment` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:1061](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/navigation_state.ts#L1061)

___

### translateNonDisplayDimension

▸ **translateNonDisplayDimension**(`nonSpatialDimensionIndex`, `adjustment`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nonSpatialDimensionIndex` | `number` |
| `adjustment` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:1168](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/navigation_state.ts#L1168)

___

### translateVoxelsRelative

▸ **translateVoxelsRelative**(`translation`, `round?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `translation` | [`vec3`](neuroglancer_util_geom.vec3.md) | `undefined` |
| `round` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:1084](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/navigation_state.ts#L1084)

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

### updateDisplayPosition

▸ **updateDisplayPosition**(`fun`, `temp?`): `boolean`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `fun` | (`pos`: [`vec3`](neuroglancer_util_geom.vec3.md)) => `boolean` \| `void` | `undefined` |
| `temp` | [`vec3`](neuroglancer_util_geom.vec3.md) | `tempVec3` |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/navigation_state.ts:1005](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/navigation_state.ts#L1005)
