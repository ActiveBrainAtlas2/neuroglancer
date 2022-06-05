[neuroglancer](../README.md) / [Modules](../modules.md) / [navigation\_state](../modules/navigation_state.md) / DisplayPose

# Class: DisplayPose

[navigation_state](../modules/navigation_state.md).DisplayPose

## Hierarchy

- `RefCounted`

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

RefCounted.constructor

#### Defined in

[src/neuroglancer/navigation_state.ts:979](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/navigation_state.ts#L979)

## Properties

### changed

• **changed**: `NullarySignal`

#### Defined in

[src/neuroglancer/navigation_state.ts:969](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/navigation_state.ts#L969)

___

### displayDimensionRenderInfo

• **displayDimensionRenderInfo**: [`WatchableDisplayDimensionRenderInfo`](navigation_state.WatchableDisplayDimensionRenderInfo.md)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

RefCounted.disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L52)

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

RefCounted.refCount

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

RefCounted.wasDisposed

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### displayDimensions

• `get` **displayDimensions**(): [`TrackableDisplayDimensions`](navigation_state.TrackableDisplayDimensions.md)

#### Returns

[`TrackableDisplayDimensions`](navigation_state.TrackableDisplayDimensions.md)

#### Defined in

[src/neuroglancer/navigation_state.ts:971](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/navigation_state.ts#L971)

___

### relativeDisplayScales

• `get` **relativeDisplayScales**(): [`TrackableRelativeDisplayScales`](navigation_state.TrackableRelativeDisplayScales.md)

#### Returns

[`TrackableRelativeDisplayScales`](navigation_state.TrackableRelativeDisplayScales.md)

#### Defined in

[src/neuroglancer/navigation_state.ts:975](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/navigation_state.ts#L975)

___

### valid

• `get` **valid**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/navigation_state.ts:992](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/navigation_state.ts#L992)

## Methods

### addRef

▸ **addRef**(): [`DisplayPose`](navigation_state.DisplayPose.md)

#### Returns

[`DisplayPose`](navigation_state.DisplayPose.md)

#### Inherited from

RefCounted.addRef

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

RefCounted.dispose

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

RefCounted.disposed

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L75)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

RefCounted.refCountReachedZero

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L66)

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

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L100)

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

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L76)

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

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L95)

___

### reset

▸ **reset**(): `void`

Resets everything.

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:999](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/navigation_state.ts#L999)

___

### rotateAbsolute

▸ **rotateAbsolute**(`axis`, `angle`, `fixedPoint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `axis` | `vec3` |
| `angle` | `number` |
| `fixedPoint` | `Float32Array` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:1123](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/navigation_state.ts#L1123)

___

### rotateRelative

▸ **rotateRelative**(`axis`, `angle`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `axis` | `vec3` |
| `angle` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:1115](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/navigation_state.ts#L1115)

___

### snap

▸ **snap**(): `void`

Snaps the orientation to the nearest axis-aligned orientation, and
snaps the position to the nearest voxel.

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:1055](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/navigation_state.ts#L1055)

___

### toMat3

▸ **toMat3**(`mat`, `zoom`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mat` | `mat3` |
| `zoom` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:1040](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/navigation_state.ts#L1040)

___

### toMat4

▸ **toMat4**(`mat`, `zoom`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mat` | `mat4` |
| `zoom` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:1026](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/navigation_state.ts#L1026)

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

[src/neuroglancer/navigation_state.ts:1061](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/navigation_state.ts#L1061)

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

[src/neuroglancer/navigation_state.ts:1168](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/navigation_state.ts#L1168)

___

### translateVoxelsRelative

▸ **translateVoxelsRelative**(`translation`, `round?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `translation` | `vec3` | `undefined` |
| `round` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:1084](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/navigation_state.ts#L1084)

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

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L85)

___

### updateDisplayPosition

▸ **updateDisplayPosition**(`fun`, `temp?`): `boolean`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `fun` | (`pos`: `vec3`) => `boolean` \| `void` | `undefined` |
| `temp` | `vec3` | `tempVec3` |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/navigation_state.ts:1005](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/navigation_state.ts#L1005)
