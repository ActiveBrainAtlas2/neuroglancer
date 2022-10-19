[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/polygon](../modules/annotation_polygon.md) / [<internal\>](../modules/annotation_polygon._internal_.md) / DisplayPose

# Class: DisplayPose

[annotation/polygon](../modules/annotation_polygon.md).[<internal>](../modules/annotation_polygon._internal_.md).DisplayPose

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`DisplayPose`**

## Table of contents

### Constructors

- [constructor](annotation_polygon._internal_.DisplayPose.md#constructor)

### Properties

- [changed](annotation_polygon._internal_.DisplayPose.md#changed)
- [displayDimensionRenderInfo](annotation_polygon._internal_.DisplayPose.md#displaydimensionrenderinfo)
- [disposedStacks](annotation_polygon._internal_.DisplayPose.md#disposedstacks)
- [orientation](annotation_polygon._internal_.DisplayPose.md#orientation)
- [position](annotation_polygon._internal_.DisplayPose.md#position)
- [refCount](annotation_polygon._internal_.DisplayPose.md#refcount)
- [wasDisposed](annotation_polygon._internal_.DisplayPose.md#wasdisposed)

### Accessors

- [displayDimensions](annotation_polygon._internal_.DisplayPose.md#displaydimensions)
- [relativeDisplayScales](annotation_polygon._internal_.DisplayPose.md#relativedisplayscales)
- [valid](annotation_polygon._internal_.DisplayPose.md#valid)

### Methods

- [addRef](annotation_polygon._internal_.DisplayPose.md#addref)
- [dispose](annotation_polygon._internal_.DisplayPose.md#dispose)
- [disposed](annotation_polygon._internal_.DisplayPose.md#disposed)
- [refCountReachedZero](annotation_polygon._internal_.DisplayPose.md#refcountreachedzero)
- [registerCancellable](annotation_polygon._internal_.DisplayPose.md#registercancellable)
- [registerDisposer](annotation_polygon._internal_.DisplayPose.md#registerdisposer)
- [registerEventListener](annotation_polygon._internal_.DisplayPose.md#registereventlistener)
- [reset](annotation_polygon._internal_.DisplayPose.md#reset)
- [rotateAbsolute](annotation_polygon._internal_.DisplayPose.md#rotateabsolute)
- [rotateRelative](annotation_polygon._internal_.DisplayPose.md#rotaterelative)
- [snap](annotation_polygon._internal_.DisplayPose.md#snap)
- [toMat3](annotation_polygon._internal_.DisplayPose.md#tomat3)
- [toMat4](annotation_polygon._internal_.DisplayPose.md#tomat4)
- [translateDimensionRelative](annotation_polygon._internal_.DisplayPose.md#translatedimensionrelative)
- [translateNonDisplayDimension](annotation_polygon._internal_.DisplayPose.md#translatenondisplaydimension)
- [translateVoxelsRelative](annotation_polygon._internal_.DisplayPose.md#translatevoxelsrelative)
- [unregisterDisposer](annotation_polygon._internal_.DisplayPose.md#unregisterdisposer)
- [updateDisplayPosition](annotation_polygon._internal_.DisplayPose.md#updatedisplayposition)

## Constructors

### constructor

• **new DisplayPose**(`position`, `displayDimensionRenderInfo`, `orientation`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | [`Position`](annotation_annotation_layer_state._internal_.Position.md) |
| `displayDimensionRenderInfo` | [`WatchableDisplayDimensionRenderInfo`](annotation_polygon._internal_.WatchableDisplayDimensionRenderInfo.md) |
| `orientation` | [`OrientationState`](annotation_polygon._internal_.OrientationState.md) |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/navigation_state.ts:979](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L979)

## Properties

### changed

• **changed**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/navigation_state.ts:969](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L969)

___

### displayDimensionRenderInfo

• **displayDimensionRenderInfo**: [`WatchableDisplayDimensionRenderInfo`](annotation_polygon._internal_.WatchableDisplayDimensionRenderInfo.md)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### orientation

• **orientation**: [`OrientationState`](annotation_polygon._internal_.OrientationState.md)

___

### position

• **position**: [`Position`](annotation_annotation_layer_state._internal_.Position.md)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### displayDimensions

• `get` **displayDimensions**(): [`TrackableDisplayDimensions`](annotation_polygon._internal_.TrackableDisplayDimensions.md)

#### Returns

[`TrackableDisplayDimensions`](annotation_polygon._internal_.TrackableDisplayDimensions.md)

#### Defined in

[src/neuroglancer/navigation_state.ts:971](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L971)

___

### relativeDisplayScales

• `get` **relativeDisplayScales**(): [`TrackableRelativeDisplayScales`](annotation_polygon._internal_.TrackableRelativeDisplayScales.md)

#### Returns

[`TrackableRelativeDisplayScales`](annotation_polygon._internal_.TrackableRelativeDisplayScales.md)

#### Defined in

[src/neuroglancer/navigation_state.ts:975](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L975)

___

### valid

• `get` **valid**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/navigation_state.ts:992](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L992)

## Methods

### addRef

▸ **addRef**(): [`DisplayPose`](annotation_polygon._internal_.DisplayPose.md)

#### Returns

[`DisplayPose`](annotation_polygon._internal_.DisplayPose.md)

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[addRef](util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

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

Resets everything.

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:999](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L999)

___

### rotateAbsolute

▸ **rotateAbsolute**(`axis`, `angle`, `fixedPoint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `axis` | [`vec3`](util_geom.vec3.md) |
| `angle` | `number` |
| `fixedPoint` | `Float32Array` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:1123](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L1123)

___

### rotateRelative

▸ **rotateRelative**(`axis`, `angle`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `axis` | [`vec3`](util_geom.vec3.md) |
| `angle` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:1115](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L1115)

___

### snap

▸ **snap**(): `void`

Snaps the orientation to the nearest axis-aligned orientation, and
snaps the position to the nearest voxel.

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:1055](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L1055)

___

### toMat3

▸ **toMat3**(`mat`, `zoom`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mat` | [`mat3`](util_geom.mat3.md) |
| `zoom` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:1040](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L1040)

___

### toMat4

▸ **toMat4**(`mat`, `zoom`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mat` | [`mat4`](util_geom.mat4.md) |
| `zoom` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:1026](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L1026)

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

[src/neuroglancer/navigation_state.ts:1061](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L1061)

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

[src/neuroglancer/navigation_state.ts:1168](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L1168)

___

### translateVoxelsRelative

▸ **translateVoxelsRelative**(`translation`, `round?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `translation` | [`vec3`](util_geom.vec3.md) | `undefined` |
| `round` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:1084](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L1084)

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

### updateDisplayPosition

▸ **updateDisplayPosition**(`fun`, `temp?`): `boolean`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `fun` | (`pos`: [`vec3`](util_geom.vec3.md)) => `boolean` \| `void` | `undefined` |
| `temp` | [`vec3`](util_geom.vec3.md) | `tempVec3` |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/navigation_state.ts:1005](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L1005)
