[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/navigation\_state](../modules/neuroglancer_navigation_state.md) / TrackableProjectionZoom

# Class: TrackableProjectionZoom

[neuroglancer/navigation_state](../modules/neuroglancer_navigation_state.md).TrackableProjectionZoom

## Hierarchy

- [`TrackableZoom`](neuroglancer_navigation_state._internal_.TrackableZoom.md)

  ↳ **`TrackableProjectionZoom`**

## Table of contents

### Constructors

- [constructor](neuroglancer_navigation_state.TrackableProjectionZoom.md#constructor)

### Properties

- [changed](neuroglancer_navigation_state.TrackableProjectionZoom.md#changed)
- [displayDimensionRenderInfo](neuroglancer_navigation_state.TrackableProjectionZoom.md#displaydimensionrenderinfo)
- [disposedStacks](neuroglancer_navigation_state.TrackableProjectionZoom.md#disposedstacks)
- [legacyValue\_](neuroglancer_navigation_state.TrackableProjectionZoom.md#legacyvalue_)
- [refCount](neuroglancer_navigation_state.TrackableProjectionZoom.md#refcount)
- [wasDisposed](neuroglancer_navigation_state.TrackableProjectionZoom.md#wasdisposed)

### Accessors

- [canonicalVoxelPhysicalSize](neuroglancer_navigation_state.TrackableProjectionZoom.md#canonicalvoxelphysicalsize)
- [coordinateSpaceValue](neuroglancer_navigation_state.TrackableProjectionZoom.md#coordinatespacevalue)
- [legacyJsonView](neuroglancer_navigation_state.TrackableProjectionZoom.md#legacyjsonview)
- [legacyValue](neuroglancer_navigation_state.TrackableProjectionZoom.md#legacyvalue)
- [value](neuroglancer_navigation_state.TrackableProjectionZoom.md#value)

### Methods

- [addRef](neuroglancer_navigation_state.TrackableProjectionZoom.md#addref)
- [assign](neuroglancer_navigation_state.TrackableProjectionZoom.md#assign)
- [dispose](neuroglancer_navigation_state.TrackableProjectionZoom.md#dispose)
- [disposed](neuroglancer_navigation_state.TrackableProjectionZoom.md#disposed)
- [getDefaultValue](neuroglancer_navigation_state.TrackableProjectionZoom.md#getdefaultvalue)
- [handleCoordinateSpaceChanged](neuroglancer_navigation_state.TrackableProjectionZoom.md#handlecoordinatespacechanged)
- [refCountReachedZero](neuroglancer_navigation_state.TrackableProjectionZoom.md#refcountreachedzero)
- [registerCancellable](neuroglancer_navigation_state.TrackableProjectionZoom.md#registercancellable)
- [registerDisposer](neuroglancer_navigation_state.TrackableProjectionZoom.md#registerdisposer)
- [registerEventListener](neuroglancer_navigation_state.TrackableProjectionZoom.md#registereventlistener)
- [reset](neuroglancer_navigation_state.TrackableProjectionZoom.md#reset)
- [restoreState](neuroglancer_navigation_state.TrackableProjectionZoom.md#restorestate)
- [setPhysicalScale](neuroglancer_navigation_state.TrackableProjectionZoom.md#setphysicalscale)
- [toJSON](neuroglancer_navigation_state.TrackableProjectionZoom.md#tojson)
- [unregisterDisposer](neuroglancer_navigation_state.TrackableProjectionZoom.md#unregisterdisposer)

## Constructors

### constructor

• **new TrackableProjectionZoom**(`displayDimensionRenderInfo`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `displayDimensionRenderInfo` | [`WatchableDisplayDimensionRenderInfo`](neuroglancer_navigation_state.WatchableDisplayDimensionRenderInfo.md) |

#### Inherited from

[TrackableZoom](neuroglancer_navigation_state._internal_.TrackableZoom.md).[constructor](neuroglancer_navigation_state._internal_.TrackableZoom.md#constructor)

#### Defined in

[src/neuroglancer/navigation_state.ts:1281](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L1281)

## Properties

### changed

• `Readonly` **changed**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Inherited from

[TrackableZoom](neuroglancer_navigation_state._internal_.TrackableZoom.md).[changed](neuroglancer_navigation_state._internal_.TrackableZoom.md#changed)

#### Defined in

[src/neuroglancer/navigation_state.ts:1230](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L1230)

___

### displayDimensionRenderInfo

• **displayDimensionRenderInfo**: [`WatchableDisplayDimensionRenderInfo`](neuroglancer_navigation_state.WatchableDisplayDimensionRenderInfo.md)

#### Inherited from

[TrackableZoom](neuroglancer_navigation_state._internal_.TrackableZoom.md).[displayDimensionRenderInfo](neuroglancer_navigation_state._internal_.TrackableZoom.md#displaydimensionrenderinfo)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[TrackableZoom](neuroglancer_navigation_state._internal_.TrackableZoom.md).[disposedStacks](neuroglancer_navigation_state._internal_.TrackableZoom.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### legacyValue\_

• `Protected` **legacyValue\_**: `number` = `Number.NaN`

#### Inherited from

[TrackableZoom](neuroglancer_navigation_state._internal_.TrackableZoom.md).[legacyValue_](neuroglancer_navigation_state._internal_.TrackableZoom.md#legacyvalue_)

#### Defined in

[src/neuroglancer/navigation_state.ts:1233](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L1233)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[TrackableZoom](neuroglancer_navigation_state._internal_.TrackableZoom.md).[refCount](neuroglancer_navigation_state._internal_.TrackableZoom.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[TrackableZoom](neuroglancer_navigation_state._internal_.TrackableZoom.md).[wasDisposed](neuroglancer_navigation_state._internal_.TrackableZoom.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### canonicalVoxelPhysicalSize

• `get` **canonicalVoxelPhysicalSize**(): `number`

#### Returns

`number`

#### Inherited from

TrackableZoom.canonicalVoxelPhysicalSize

#### Defined in

[src/neuroglancer/navigation_state.ts:1256](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L1256)

___

### coordinateSpaceValue

• `get` **coordinateSpaceValue**(): [`CoordinateSpace`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpace.md)

#### Returns

[`CoordinateSpace`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpace.md)

#### Inherited from

TrackableZoom.coordinateSpaceValue

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

#### Inherited from

TrackableZoom.legacyJsonView

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

#### Inherited from

TrackableZoom.legacyValue

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

#### Inherited from

TrackableZoom.legacyValue

#### Defined in

[src/neuroglancer/navigation_state.ts:1269](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L1269)

___

### value

• `get` **value**(): `number`

Zoom factor.  For cross section views, in canonical voxels per viewport pixel.  For projection
views, in canonical voxels per viewport height (for orthographic projection).

#### Returns

`number`

#### Inherited from

TrackableZoom.value

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

#### Inherited from

TrackableZoom.value

#### Defined in

[src/neuroglancer/navigation_state.ts:1244](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L1244)

## Methods

### addRef

▸ **addRef**(): [`TrackableProjectionZoom`](neuroglancer_navigation_state.TrackableProjectionZoom.md)

#### Returns

[`TrackableProjectionZoom`](neuroglancer_navigation_state.TrackableProjectionZoom.md)

#### Inherited from

[TrackableZoom](neuroglancer_navigation_state._internal_.TrackableZoom.md).[addRef](neuroglancer_navigation_state._internal_.TrackableZoom.md#addref)

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

#### Inherited from

[TrackableZoom](neuroglancer_navigation_state._internal_.TrackableZoom.md).[assign](neuroglancer_navigation_state._internal_.TrackableZoom.md#assign)

#### Defined in

[src/neuroglancer/navigation_state.ts:1368](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L1368)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[TrackableZoom](neuroglancer_navigation_state._internal_.TrackableZoom.md).[dispose](neuroglancer_navigation_state._internal_.TrackableZoom.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[TrackableZoom](neuroglancer_navigation_state._internal_.TrackableZoom.md).[disposed](neuroglancer_navigation_state._internal_.TrackableZoom.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L75)

___

### getDefaultValue

▸ `Protected` **getDefaultValue**(): `number`

#### Returns

`number`

#### Overrides

[TrackableZoom](neuroglancer_navigation_state._internal_.TrackableZoom.md).[getDefaultValue](neuroglancer_navigation_state._internal_.TrackableZoom.md#getdefaultvalue)

#### Defined in

[src/neuroglancer/navigation_state.ts:1391](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L1391)

___

### handleCoordinateSpaceChanged

▸ **handleCoordinateSpaceChanged**(): `void`

#### Returns

`void`

#### Inherited from

[TrackableZoom](neuroglancer_navigation_state._internal_.TrackableZoom.md).[handleCoordinateSpaceChanged](neuroglancer_navigation_state._internal_.TrackableZoom.md#handlecoordinatespacechanged)

#### Defined in

[src/neuroglancer/navigation_state.ts:1292](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L1292)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[TrackableZoom](neuroglancer_navigation_state._internal_.TrackableZoom.md).[refCountReachedZero](neuroglancer_navigation_state._internal_.TrackableZoom.md#refcountreachedzero)

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

[TrackableZoom](neuroglancer_navigation_state._internal_.TrackableZoom.md).[registerCancellable](neuroglancer_navigation_state._internal_.TrackableZoom.md#registercancellable)

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

[TrackableZoom](neuroglancer_navigation_state._internal_.TrackableZoom.md).[registerDisposer](neuroglancer_navigation_state._internal_.TrackableZoom.md#registerdisposer)

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

[TrackableZoom](neuroglancer_navigation_state._internal_.TrackableZoom.md).[registerEventListener](neuroglancer_navigation_state._internal_.TrackableZoom.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L95)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Inherited from

[TrackableZoom](neuroglancer_navigation_state._internal_.TrackableZoom.md).[reset](neuroglancer_navigation_state._internal_.TrackableZoom.md#reset)

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

#### Inherited from

[TrackableZoom](neuroglancer_navigation_state._internal_.TrackableZoom.md).[restoreState](neuroglancer_navigation_state._internal_.TrackableZoom.md#restorestate)

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

#### Inherited from

[TrackableZoom](neuroglancer_navigation_state._internal_.TrackableZoom.md).[setPhysicalScale](neuroglancer_navigation_state._internal_.TrackableZoom.md#setphysicalscale)

#### Defined in

[src/neuroglancer/navigation_state.ts:1361](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L1361)

___

### toJSON

▸ **toJSON**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Inherited from

[TrackableZoom](neuroglancer_navigation_state._internal_.TrackableZoom.md).[toJSON](neuroglancer_navigation_state._internal_.TrackableZoom.md#tojson)

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

[TrackableZoom](neuroglancer_navigation_state._internal_.TrackableZoom.md).[unregisterDisposer](neuroglancer_navigation_state._internal_.TrackableZoom.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L85)
