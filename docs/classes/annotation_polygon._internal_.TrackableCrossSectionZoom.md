[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/polygon](../modules/annotation_polygon.md) / [<internal\>](../modules/annotation_polygon._internal_.md) / TrackableCrossSectionZoom

# Class: TrackableCrossSectionZoom

[annotation/polygon](../modules/annotation_polygon.md).[<internal>](../modules/annotation_polygon._internal_.md).TrackableCrossSectionZoom

## Hierarchy

- [`TrackableZoom`](annotation_polygon._internal_.TrackableZoom.md)

  ↳ **`TrackableCrossSectionZoom`**

## Table of contents

### Constructors

- [constructor](annotation_polygon._internal_.TrackableCrossSectionZoom.md#constructor)

### Properties

- [changed](annotation_polygon._internal_.TrackableCrossSectionZoom.md#changed)
- [displayDimensionRenderInfo](annotation_polygon._internal_.TrackableCrossSectionZoom.md#displaydimensionrenderinfo)
- [disposedStacks](annotation_polygon._internal_.TrackableCrossSectionZoom.md#disposedstacks)
- [legacyValue\_](annotation_polygon._internal_.TrackableCrossSectionZoom.md#legacyvalue_)
- [refCount](annotation_polygon._internal_.TrackableCrossSectionZoom.md#refcount)
- [wasDisposed](annotation_polygon._internal_.TrackableCrossSectionZoom.md#wasdisposed)

### Accessors

- [canonicalVoxelPhysicalSize](annotation_polygon._internal_.TrackableCrossSectionZoom.md#canonicalvoxelphysicalsize)
- [coordinateSpaceValue](annotation_polygon._internal_.TrackableCrossSectionZoom.md#coordinatespacevalue)
- [legacyJsonView](annotation_polygon._internal_.TrackableCrossSectionZoom.md#legacyjsonview)
- [legacyValue](annotation_polygon._internal_.TrackableCrossSectionZoom.md#legacyvalue)
- [value](annotation_polygon._internal_.TrackableCrossSectionZoom.md#value)

### Methods

- [addRef](annotation_polygon._internal_.TrackableCrossSectionZoom.md#addref)
- [assign](annotation_polygon._internal_.TrackableCrossSectionZoom.md#assign)
- [dispose](annotation_polygon._internal_.TrackableCrossSectionZoom.md#dispose)
- [disposed](annotation_polygon._internal_.TrackableCrossSectionZoom.md#disposed)
- [getDefaultValue](annotation_polygon._internal_.TrackableCrossSectionZoom.md#getdefaultvalue)
- [handleCoordinateSpaceChanged](annotation_polygon._internal_.TrackableCrossSectionZoom.md#handlecoordinatespacechanged)
- [refCountReachedZero](annotation_polygon._internal_.TrackableCrossSectionZoom.md#refcountreachedzero)
- [registerCancellable](annotation_polygon._internal_.TrackableCrossSectionZoom.md#registercancellable)
- [registerDisposer](annotation_polygon._internal_.TrackableCrossSectionZoom.md#registerdisposer)
- [registerEventListener](annotation_polygon._internal_.TrackableCrossSectionZoom.md#registereventlistener)
- [reset](annotation_polygon._internal_.TrackableCrossSectionZoom.md#reset)
- [restoreState](annotation_polygon._internal_.TrackableCrossSectionZoom.md#restorestate)
- [setPhysicalScale](annotation_polygon._internal_.TrackableCrossSectionZoom.md#setphysicalscale)
- [toJSON](annotation_polygon._internal_.TrackableCrossSectionZoom.md#tojson)
- [unregisterDisposer](annotation_polygon._internal_.TrackableCrossSectionZoom.md#unregisterdisposer)

## Constructors

### constructor

• **new TrackableCrossSectionZoom**(`displayDimensionRenderInfo`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `displayDimensionRenderInfo` | [`WatchableDisplayDimensionRenderInfo`](annotation_polygon._internal_.WatchableDisplayDimensionRenderInfo.md) |

#### Inherited from

[TrackableZoom](annotation_polygon._internal_.TrackableZoom.md).[constructor](annotation_polygon._internal_.TrackableZoom.md#constructor)

#### Defined in

[src/neuroglancer/navigation_state.ts:1281](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L1281)

## Properties

### changed

• `Readonly` **changed**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Inherited from

[TrackableZoom](annotation_polygon._internal_.TrackableZoom.md).[changed](annotation_polygon._internal_.TrackableZoom.md#changed)

#### Defined in

[src/neuroglancer/navigation_state.ts:1230](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L1230)

___

### displayDimensionRenderInfo

• **displayDimensionRenderInfo**: [`WatchableDisplayDimensionRenderInfo`](annotation_polygon._internal_.WatchableDisplayDimensionRenderInfo.md)

#### Inherited from

[TrackableZoom](annotation_polygon._internal_.TrackableZoom.md).[displayDimensionRenderInfo](annotation_polygon._internal_.TrackableZoom.md#displaydimensionrenderinfo)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[TrackableZoom](annotation_polygon._internal_.TrackableZoom.md).[disposedStacks](annotation_polygon._internal_.TrackableZoom.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### legacyValue\_

• `Protected` **legacyValue\_**: `number` = `Number.NaN`

#### Inherited from

[TrackableZoom](annotation_polygon._internal_.TrackableZoom.md).[legacyValue_](annotation_polygon._internal_.TrackableZoom.md#legacyvalue_)

#### Defined in

[src/neuroglancer/navigation_state.ts:1233](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L1233)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[TrackableZoom](annotation_polygon._internal_.TrackableZoom.md).[refCount](annotation_polygon._internal_.TrackableZoom.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[TrackableZoom](annotation_polygon._internal_.TrackableZoom.md).[wasDisposed](annotation_polygon._internal_.TrackableZoom.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### canonicalVoxelPhysicalSize

• `get` **canonicalVoxelPhysicalSize**(): `number`

#### Returns

`number`

#### Inherited from

TrackableZoom.canonicalVoxelPhysicalSize

#### Defined in

[src/neuroglancer/navigation_state.ts:1256](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L1256)

___

### coordinateSpaceValue

• `get` **coordinateSpaceValue**(): [`CoordinateSpace`](../interfaces/annotation_annotation_layer_state._internal_.CoordinateSpace.md)

#### Returns

[`CoordinateSpace`](../interfaces/annotation_annotation_layer_state._internal_.CoordinateSpace.md)

#### Inherited from

TrackableZoom.coordinateSpaceValue

#### Defined in

[src/neuroglancer/navigation_state.ts:1260](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L1260)

___

### legacyJsonView

• `get` **legacyJsonView**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `changed` | [`NullarySignal`](util_signal.NullarySignal.md) |
| `reset` | () => `void` |
| `restoreState` | (`obj`: `any`) => `void` |
| `toJSON` | () => `undefined` \| `number` |

#### Inherited from

TrackableZoom.legacyJsonView

#### Defined in

[src/neuroglancer/navigation_state.ts:1345](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L1345)

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

[src/neuroglancer/navigation_state.ts:1277](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L1277)

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

[src/neuroglancer/navigation_state.ts:1269](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L1269)

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

[src/neuroglancer/navigation_state.ts:1239](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L1239)

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

[src/neuroglancer/navigation_state.ts:1244](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L1244)

## Methods

### addRef

▸ **addRef**(): [`TrackableCrossSectionZoom`](annotation_polygon._internal_.TrackableCrossSectionZoom.md)

#### Returns

[`TrackableCrossSectionZoom`](annotation_polygon._internal_.TrackableCrossSectionZoom.md)

#### Inherited from

[TrackableZoom](annotation_polygon._internal_.TrackableZoom.md).[addRef](annotation_polygon._internal_.TrackableZoom.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### assign

▸ **assign**(`source`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`TrackableZoomInterface`](../modules/annotation_polygon._internal_.md#trackablezoominterface) |

#### Returns

`void`

#### Inherited from

[TrackableZoom](annotation_polygon._internal_.TrackableZoom.md).[assign](annotation_polygon._internal_.TrackableZoom.md#assign)

#### Defined in

[src/neuroglancer/navigation_state.ts:1368](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L1368)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[TrackableZoom](annotation_polygon._internal_.TrackableZoom.md).[dispose](annotation_polygon._internal_.TrackableZoom.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[TrackableZoom](annotation_polygon._internal_.TrackableZoom.md).[disposed](annotation_polygon._internal_.TrackableZoom.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L75)

___

### getDefaultValue

▸ `Protected` **getDefaultValue**(): `number`

#### Returns

`number`

#### Overrides

[TrackableZoom](annotation_polygon._internal_.TrackableZoom.md).[getDefaultValue](annotation_polygon._internal_.TrackableZoom.md#getdefaultvalue)

#### Defined in

[src/neuroglancer/navigation_state.ts:1379](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L1379)

___

### handleCoordinateSpaceChanged

▸ **handleCoordinateSpaceChanged**(): `void`

#### Returns

`void`

#### Inherited from

[TrackableZoom](annotation_polygon._internal_.TrackableZoom.md).[handleCoordinateSpaceChanged](annotation_polygon._internal_.TrackableZoom.md#handlecoordinatespacechanged)

#### Defined in

[src/neuroglancer/navigation_state.ts:1292](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L1292)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[TrackableZoom](annotation_polygon._internal_.TrackableZoom.md).[refCountReachedZero](annotation_polygon._internal_.TrackableZoom.md#refcountreachedzero)

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

[TrackableZoom](annotation_polygon._internal_.TrackableZoom.md).[registerCancellable](annotation_polygon._internal_.TrackableZoom.md#registercancellable)

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

[TrackableZoom](annotation_polygon._internal_.TrackableZoom.md).[registerDisposer](annotation_polygon._internal_.TrackableZoom.md#registerdisposer)

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

[TrackableZoom](annotation_polygon._internal_.TrackableZoom.md).[registerEventListener](annotation_polygon._internal_.TrackableZoom.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L95)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Inherited from

[TrackableZoom](annotation_polygon._internal_.TrackableZoom.md).[reset](annotation_polygon._internal_.TrackableZoom.md#reset)

#### Defined in

[src/neuroglancer/navigation_state.ts:1338](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L1338)

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

[TrackableZoom](annotation_polygon._internal_.TrackableZoom.md).[restoreState](annotation_polygon._internal_.TrackableZoom.md#restorestate)

#### Defined in

[src/neuroglancer/navigation_state.ts:1327](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L1327)

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

[TrackableZoom](annotation_polygon._internal_.TrackableZoom.md).[setPhysicalScale](annotation_polygon._internal_.TrackableZoom.md#setphysicalscale)

#### Defined in

[src/neuroglancer/navigation_state.ts:1361](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L1361)

___

### toJSON

▸ **toJSON**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Inherited from

[TrackableZoom](annotation_polygon._internal_.TrackableZoom.md).[toJSON](annotation_polygon._internal_.TrackableZoom.md#tojson)

#### Defined in

[src/neuroglancer/navigation_state.ts:1322](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L1322)

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

[TrackableZoom](annotation_polygon._internal_.TrackableZoom.md).[unregisterDisposer](annotation_polygon._internal_.TrackableZoom.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)
