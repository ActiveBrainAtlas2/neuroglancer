[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/navigation\_state](../modules/neuroglancer_navigation_state.md) / [<internal\>](../modules/neuroglancer_navigation_state._internal_.md) / TrackableZoom

# Class: TrackableZoom

[neuroglancer/navigation_state](../modules/neuroglancer_navigation_state.md).[<internal>](../modules/neuroglancer_navigation_state._internal_.md).TrackableZoom

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`TrackableZoom`**

  ↳↳ [`TrackableCrossSectionZoom`](neuroglancer_navigation_state.TrackableCrossSectionZoom.md)

  ↳↳ [`TrackableProjectionZoom`](neuroglancer_navigation_state.TrackableProjectionZoom.md)

## Implements

- [`Trackable`](../interfaces/neuroglancer_util_trackable.Trackable.md)
- [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<`number`\>

## Table of contents

### Constructors

- [constructor](neuroglancer_navigation_state._internal_.TrackableZoom.md#constructor)

### Properties

- [changed](neuroglancer_navigation_state._internal_.TrackableZoom.md#changed)
- [curCanonicalVoxelPhysicalSize](neuroglancer_navigation_state._internal_.TrackableZoom.md#curcanonicalvoxelphysicalsize)
- [displayDimensionRenderInfo](neuroglancer_navigation_state._internal_.TrackableZoom.md#displaydimensionrenderinfo)
- [disposedStacks](neuroglancer_navigation_state._internal_.TrackableZoom.md#disposedstacks)
- [legacyValue\_](neuroglancer_navigation_state._internal_.TrackableZoom.md#legacyvalue_)
- [refCount](neuroglancer_navigation_state._internal_.TrackableZoom.md#refcount)
- [value\_](neuroglancer_navigation_state._internal_.TrackableZoom.md#value_)
- [wasDisposed](neuroglancer_navigation_state._internal_.TrackableZoom.md#wasdisposed)

### Accessors

- [canonicalVoxelPhysicalSize](neuroglancer_navigation_state._internal_.TrackableZoom.md#canonicalvoxelphysicalsize)
- [coordinateSpaceValue](neuroglancer_navigation_state._internal_.TrackableZoom.md#coordinatespacevalue)
- [legacyJsonView](neuroglancer_navigation_state._internal_.TrackableZoom.md#legacyjsonview)
- [legacyValue](neuroglancer_navigation_state._internal_.TrackableZoom.md#legacyvalue)
- [value](neuroglancer_navigation_state._internal_.TrackableZoom.md#value)

### Methods

- [addRef](neuroglancer_navigation_state._internal_.TrackableZoom.md#addref)
- [assign](neuroglancer_navigation_state._internal_.TrackableZoom.md#assign)
- [dispose](neuroglancer_navigation_state._internal_.TrackableZoom.md#dispose)
- [disposed](neuroglancer_navigation_state._internal_.TrackableZoom.md#disposed)
- [getDefaultValue](neuroglancer_navigation_state._internal_.TrackableZoom.md#getdefaultvalue)
- [handleCoordinateSpaceChanged](neuroglancer_navigation_state._internal_.TrackableZoom.md#handlecoordinatespacechanged)
- [refCountReachedZero](neuroglancer_navigation_state._internal_.TrackableZoom.md#refcountreachedzero)
- [registerCancellable](neuroglancer_navigation_state._internal_.TrackableZoom.md#registercancellable)
- [registerDisposer](neuroglancer_navigation_state._internal_.TrackableZoom.md#registerdisposer)
- [registerEventListener](neuroglancer_navigation_state._internal_.TrackableZoom.md#registereventlistener)
- [reset](neuroglancer_navigation_state._internal_.TrackableZoom.md#reset)
- [restoreState](neuroglancer_navigation_state._internal_.TrackableZoom.md#restorestate)
- [setPhysicalScale](neuroglancer_navigation_state._internal_.TrackableZoom.md#setphysicalscale)
- [toJSON](neuroglancer_navigation_state._internal_.TrackableZoom.md#tojson)
- [unregisterDisposer](neuroglancer_navigation_state._internal_.TrackableZoom.md#unregisterdisposer)

## Constructors

### constructor

• **new TrackableZoom**(`displayDimensionRenderInfo`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `displayDimensionRenderInfo` | [`WatchableDisplayDimensionRenderInfo`](neuroglancer_navigation_state.WatchableDisplayDimensionRenderInfo.md) |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/navigation_state.ts:1281](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L1281)

## Properties

### changed

• `Readonly` **changed**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Implementation of

[WatchableValueInterface](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md).[changed](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md#changed)

#### Defined in

[src/neuroglancer/navigation_state.ts:1230](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L1230)

___

### curCanonicalVoxelPhysicalSize

• `Private` **curCanonicalVoxelPhysicalSize**: `number` = `0`

#### Defined in

[src/neuroglancer/navigation_state.ts:1231](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L1231)

___

### displayDimensionRenderInfo

• **displayDimensionRenderInfo**: [`WatchableDisplayDimensionRenderInfo`](neuroglancer_navigation_state.WatchableDisplayDimensionRenderInfo.md)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### legacyValue\_

• `Protected` **legacyValue\_**: `number` = `Number.NaN`

#### Defined in

[src/neuroglancer/navigation_state.ts:1233](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L1233)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### value\_

• `Private` **value\_**: `number` = `Number.NaN`

#### Defined in

[src/neuroglancer/navigation_state.ts:1232](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L1232)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### canonicalVoxelPhysicalSize

• `get` **canonicalVoxelPhysicalSize**(): `number`

#### Returns

`number`

#### Defined in

[src/neuroglancer/navigation_state.ts:1256](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L1256)

___

### coordinateSpaceValue

• `get` **coordinateSpaceValue**(): [`CoordinateSpace`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpace.md)

#### Returns

[`CoordinateSpace`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpace.md)

#### Defined in

[src/neuroglancer/navigation_state.ts:1260](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L1260)

___

### legacyJsonView

• `get` **legacyJsonView**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `changed` | [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md) |
| `reset` | () => `void` |
| `restoreState` | (`obj`: `any`) => `void` |
| `toJSON` | () => `undefined` \| `number` |

#### Defined in

[src/neuroglancer/navigation_state.ts:1345](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L1345)

___

### legacyValue

• `get` **legacyValue**(): `number`

Sets the zoom factor in the legacy units.  For cross section views, `1e-9` spatial units per
viewport pixel.  For projection views, `2 * 100 * Math.tan(Math.PI / 8) * 1e-9` spatial units
per viewport height (for orthographic projection).

#### Returns

`number`

#### Defined in

[src/neuroglancer/navigation_state.ts:1277](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L1277)

• `set` **legacyValue**(`value`): `void`

Sets the zoom factor in the legacy units.  For cross section views, `1e-9` spatial units per
viewport pixel.  For projection views, `2 * 100 * Math.tan(Math.PI / 8) * 1e-9` spatial units
per viewport height (for orthographic projection).

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:1269](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L1269)

___

### value

• `get` **value**(): `number`

Zoom factor.  For cross section views, in canonical voxels per viewport pixel.  For projection
views, in canonical voxels per viewport height (for orthographic projection).

#### Returns

`number`

#### Implementation of

[WatchableValueInterface](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md).[value](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md#value)

#### Defined in

[src/neuroglancer/navigation_state.ts:1239](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L1239)

• `set` **value**(`value`): `void`

Zoom factor.  For cross section views, in canonical voxels per viewport pixel.  For projection
views, in canonical voxels per viewport height (for orthographic projection).

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Implementation of

[WatchableValueInterface](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md).[value](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md#value)

#### Defined in

[src/neuroglancer/navigation_state.ts:1244](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L1244)

## Methods

### addRef

▸ **addRef**(): [`TrackableZoom`](neuroglancer_navigation_state._internal_.TrackableZoom.md)

#### Returns

[`TrackableZoom`](neuroglancer_navigation_state._internal_.TrackableZoom.md)

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[addRef](neuroglancer_util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L48)

___

### assign

▸ **assign**(`source`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`TrackableZoomInterface`](../modules/neuroglancer_navigation_state.md#trackablezoominterface) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:1368](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L1368)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[dispose](neuroglancer_util_disposable.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposed](neuroglancer_util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L75)

___

### getDefaultValue

▸ `Protected` `Abstract` **getDefaultValue**(): `number`

#### Returns

`number`

#### Defined in

[src/neuroglancer/navigation_state.ts:1320](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L1320)

___

### handleCoordinateSpaceChanged

▸ **handleCoordinateSpaceChanged**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:1292](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L1292)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCountReachedZero](neuroglancer_util_disposable.RefCounted.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L66)

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

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L100)

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

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L76)

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

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L95)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Implementation of

[Trackable](../interfaces/neuroglancer_util_trackable.Trackable.md).[reset](../interfaces/neuroglancer_util_trackable.Trackable.md#reset)

#### Defined in

[src/neuroglancer/navigation_state.ts:1338](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L1338)

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

[Trackable](../interfaces/neuroglancer_util_trackable.Trackable.md).[restoreState](../interfaces/neuroglancer_util_trackable.Trackable.md#restorestate)

#### Defined in

[src/neuroglancer/navigation_state.ts:1327](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L1327)

___

### setPhysicalScale

▸ **setPhysicalScale**(`scaleInCanonicalVoxels`, `canonicalVoxelPhysicalSize`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scaleInCanonicalVoxels` | `number` |
| `canonicalVoxelPhysicalSize` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:1361](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L1361)

___

### toJSON

▸ **toJSON**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Implementation of

[Trackable](../interfaces/neuroglancer_util_trackable.Trackable.md).[toJSON](../interfaces/neuroglancer_util_trackable.Trackable.md#tojson)

#### Defined in

[src/neuroglancer/navigation_state.ts:1322](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L1322)

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

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L85)
