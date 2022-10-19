[neuroglancer](../README.md) / [Modules](../modules.md) / [navigation\_state](../modules/navigation_state.md) / DisplayPose

# Class: DisplayPose

[navigation_state](../modules/navigation_state.md).DisplayPose

## Hierarchy

- [`RefCounted`](axes_lines._internal_.RefCounted.md)

  ↳ **`DisplayPose`**

## Table of contents

### Constructors

- [constructor](navigation_state.DisplayPose.md#constructor)

### Properties

- [changed](navigation_state.DisplayPose.md#changed)
- [displayDimensionRenderInfo](navigation_state.DisplayPose.md#displaydimensionrenderinfo)
- [disposedStacks](navigation_state.DisplayPose.md#disposedstacks)
- [orientation](navigation_state.DisplayPose.md#orientation)
- [position](navigation_state.DisplayPose.md#position)
- [refCount](navigation_state.DisplayPose.md#refcount)
- [wasDisposed](navigation_state.DisplayPose.md#wasdisposed)

### Accessors

- [displayDimensions](navigation_state.DisplayPose.md#displaydimensions)
- [relativeDisplayScales](navigation_state.DisplayPose.md#relativedisplayscales)
- [valid](navigation_state.DisplayPose.md#valid)

### Methods

- [addRef](navigation_state.DisplayPose.md#addref)
- [dispose](navigation_state.DisplayPose.md#dispose)
- [disposed](navigation_state.DisplayPose.md#disposed)
- [refCountReachedZero](navigation_state.DisplayPose.md#refcountreachedzero)
- [registerCancellable](navigation_state.DisplayPose.md#registercancellable)
- [registerDisposer](navigation_state.DisplayPose.md#registerdisposer)
- [registerEventListener](navigation_state.DisplayPose.md#registereventlistener)
- [reset](navigation_state.DisplayPose.md#reset)
- [rotateAbsolute](navigation_state.DisplayPose.md#rotateabsolute)
- [rotateRelative](navigation_state.DisplayPose.md#rotaterelative)
- [snap](navigation_state.DisplayPose.md#snap)
- [toMat3](navigation_state.DisplayPose.md#tomat3)
- [toMat4](navigation_state.DisplayPose.md#tomat4)
- [translateDimensionRelative](navigation_state.DisplayPose.md#translatedimensionrelative)
- [translateNonDisplayDimension](navigation_state.DisplayPose.md#translatenondisplaydimension)
- [translateVoxelsRelative](navigation_state.DisplayPose.md#translatevoxelsrelative)
- [unregisterDisposer](navigation_state.DisplayPose.md#unregisterdisposer)
- [updateDisplayPosition](navigation_state.DisplayPose.md#updatedisplayposition)

## Constructors

### constructor

• **new DisplayPose**(`position`, `displayDimensionRenderInfo`, `orientation`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | [`Position`](navigation_state.Position.md) |
| `displayDimensionRenderInfo` | [`WatchableDisplayDimensionRenderInfo`](navigation_state.WatchableDisplayDimensionRenderInfo.md) |
| `orientation` | [`OrientationState`](navigation_state.OrientationState.md) |

#### Overrides

[RefCounted](axes_lines._internal_.RefCounted.md).[constructor](axes_lines._internal_.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/navigation_state.ts:979](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/navigation_state.ts#L979)

## Properties

### changed

• **changed**: [`NullarySignal`](coordinate_transform._internal_.NullarySignal.md)

#### Defined in

[src/neuroglancer/navigation_state.ts:969](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/navigation_state.ts#L969)

___

### displayDimensionRenderInfo

• **displayDimensionRenderInfo**: [`WatchableDisplayDimensionRenderInfo`](navigation_state.WatchableDisplayDimensionRenderInfo.md)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[disposedStacks](axes_lines._internal_.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L52)

___

### orientation

• **orientation**: [`OrientationState`](navigation_state.OrientationState.md)

___

### position

• **position**: [`Position`](navigation_state.Position.md)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[refCount](axes_lines._internal_.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[wasDisposed](axes_lines._internal_.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### displayDimensions

• `get` **displayDimensions**(): [`TrackableDisplayDimensions`](navigation_state.TrackableDisplayDimensions.md)

#### Returns

[`TrackableDisplayDimensions`](navigation_state.TrackableDisplayDimensions.md)

#### Defined in

[src/neuroglancer/navigation_state.ts:971](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/navigation_state.ts#L971)

___

### relativeDisplayScales

• `get` **relativeDisplayScales**(): [`TrackableRelativeDisplayScales`](navigation_state.TrackableRelativeDisplayScales.md)

#### Returns

[`TrackableRelativeDisplayScales`](navigation_state.TrackableRelativeDisplayScales.md)

#### Defined in

[src/neuroglancer/navigation_state.ts:975](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/navigation_state.ts#L975)

___

### valid

• `get` **valid**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/navigation_state.ts:992](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/navigation_state.ts#L992)

## Methods

### addRef

▸ **addRef**(): [`DisplayPose`](navigation_state.DisplayPose.md)

#### Returns

[`DisplayPose`](navigation_state.DisplayPose.md)

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[addRef](axes_lines._internal_.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[dispose](axes_lines._internal_.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[disposed](axes_lines._internal_.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L75)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[refCountReachedZero](axes_lines._internal_.RefCounted.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L66)

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

[RefCounted](axes_lines._internal_.RefCounted.md).[registerCancellable](axes_lines._internal_.RefCounted.md#registercancellable)

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L100)

___

### registerDisposer

▸ **registerDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/axes_lines._internal_.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[registerDisposer](axes_lines._internal_.RefCounted.md#registerdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L76)

___

### registerEventListener

▸ **registerEventListener**(`target`, `type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EventTarget`](../modules/axes_lines._internal_.md#eventtarget) |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/axes_lines._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](../interfaces/axes_lines._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[registerEventListener](axes_lines._internal_.RefCounted.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L95)

___

### reset

▸ **reset**(): `void`

Resets everything.

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:999](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/navigation_state.ts#L999)

___

### rotateAbsolute

▸ **rotateAbsolute**(`axis`, `angle`, `fixedPoint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `axis` | [`vec3`](axes_lines._internal_.vec3.md) |
| `angle` | `number` |
| `fixedPoint` | `Float32Array` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:1123](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/navigation_state.ts#L1123)

___

### rotateRelative

▸ **rotateRelative**(`axis`, `angle`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `axis` | [`vec3`](axes_lines._internal_.vec3.md) |
| `angle` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:1115](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/navigation_state.ts#L1115)

___

### snap

▸ **snap**(): `void`

Snaps the orientation to the nearest axis-aligned orientation, and
snaps the position to the nearest voxel.

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:1055](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/navigation_state.ts#L1055)

___

### toMat3

▸ **toMat3**(`mat`, `zoom`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mat` | [`mat3`](axes_lines._internal_.mat3.md) |
| `zoom` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:1040](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/navigation_state.ts#L1040)

___

### toMat4

▸ **toMat4**(`mat`, `zoom`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mat` | [`mat4`](axes_lines._internal_.mat4.md) |
| `zoom` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:1026](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/navigation_state.ts#L1026)

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

[src/neuroglancer/navigation_state.ts:1061](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/navigation_state.ts#L1061)

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

[src/neuroglancer/navigation_state.ts:1168](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/navigation_state.ts#L1168)

___

### translateVoxelsRelative

▸ **translateVoxelsRelative**(`translation`, `round?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `translation` | [`vec3`](axes_lines._internal_.vec3.md) | `undefined` |
| `round` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:1084](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/navigation_state.ts#L1084)

___

### unregisterDisposer

▸ **unregisterDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/axes_lines._internal_.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[unregisterDisposer](axes_lines._internal_.RefCounted.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L85)

___

### updateDisplayPosition

▸ **updateDisplayPosition**(`fun`, `temp?`): `boolean`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `fun` | (`pos`: [`vec3`](axes_lines._internal_.vec3.md)) => `boolean` \| `void` | `undefined` |
| `temp` | [`vec3`](axes_lines._internal_.vec3.md) | `tempVec3` |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/navigation_state.ts:1005](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/navigation_state.ts#L1005)
