[neuroglancer](../README.md) / [Modules](../modules.md) / [navigation\_state](../modules/navigation_state.md) / TrackableCrossSectionZoom

# Class: TrackableCrossSectionZoom

[navigation_state](../modules/navigation_state.md).TrackableCrossSectionZoom

## Hierarchy

- `TrackableZoom`

  ↳ **`TrackableCrossSectionZoom`**

## Table of contents

### Constructors

- [constructor](navigation_state.TrackableCrossSectionZoom.md#constructor)

### Properties

- [changed](navigation_state.TrackableCrossSectionZoom.md#changed)
- [displayDimensionRenderInfo](navigation_state.TrackableCrossSectionZoom.md#displaydimensionrenderinfo)
- [disposedStacks](navigation_state.TrackableCrossSectionZoom.md#disposedstacks)
- [legacyValue\_](navigation_state.TrackableCrossSectionZoom.md#legacyvalue_)
- [refCount](navigation_state.TrackableCrossSectionZoom.md#refcount)
- [wasDisposed](navigation_state.TrackableCrossSectionZoom.md#wasdisposed)

### Accessors

- [canonicalVoxelPhysicalSize](navigation_state.TrackableCrossSectionZoom.md#canonicalvoxelphysicalsize)
- [coordinateSpaceValue](navigation_state.TrackableCrossSectionZoom.md#coordinatespacevalue)
- [legacyJsonView](navigation_state.TrackableCrossSectionZoom.md#legacyjsonview)
- [legacyValue](navigation_state.TrackableCrossSectionZoom.md#legacyvalue)
- [value](navigation_state.TrackableCrossSectionZoom.md#value)

### Methods

- [addRef](navigation_state.TrackableCrossSectionZoom.md#addref)
- [assign](navigation_state.TrackableCrossSectionZoom.md#assign)
- [dispose](navigation_state.TrackableCrossSectionZoom.md#dispose)
- [disposed](navigation_state.TrackableCrossSectionZoom.md#disposed)
- [getDefaultValue](navigation_state.TrackableCrossSectionZoom.md#getdefaultvalue)
- [handleCoordinateSpaceChanged](navigation_state.TrackableCrossSectionZoom.md#handlecoordinatespacechanged)
- [refCountReachedZero](navigation_state.TrackableCrossSectionZoom.md#refcountreachedzero)
- [registerCancellable](navigation_state.TrackableCrossSectionZoom.md#registercancellable)
- [registerDisposer](navigation_state.TrackableCrossSectionZoom.md#registerdisposer)
- [registerEventListener](navigation_state.TrackableCrossSectionZoom.md#registereventlistener)
- [reset](navigation_state.TrackableCrossSectionZoom.md#reset)
- [restoreState](navigation_state.TrackableCrossSectionZoom.md#restorestate)
- [setPhysicalScale](navigation_state.TrackableCrossSectionZoom.md#setphysicalscale)
- [toJSON](navigation_state.TrackableCrossSectionZoom.md#tojson)
- [unregisterDisposer](navigation_state.TrackableCrossSectionZoom.md#unregisterdisposer)

## Constructors

### constructor

• **new TrackableCrossSectionZoom**(`displayDimensionRenderInfo`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `displayDimensionRenderInfo` | [`WatchableDisplayDimensionRenderInfo`](navigation_state.WatchableDisplayDimensionRenderInfo.md) |

#### Inherited from

TrackableZoom.constructor

#### Defined in

[src/neuroglancer/navigation_state.ts:1281](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/navigation_state.ts#L1281)

## Properties

### changed

• `Readonly` **changed**: `NullarySignal`

#### Inherited from

TrackableZoom.changed

#### Defined in

[src/neuroglancer/navigation_state.ts:1230](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/navigation_state.ts#L1230)

___

### displayDimensionRenderInfo

• **displayDimensionRenderInfo**: [`WatchableDisplayDimensionRenderInfo`](navigation_state.WatchableDisplayDimensionRenderInfo.md)

#### Inherited from

TrackableZoom.displayDimensionRenderInfo

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

TrackableZoom.disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L52)

___

### legacyValue\_

• `Protected` **legacyValue\_**: `number` = `Number.NaN`

#### Inherited from

TrackableZoom.legacyValue\_

#### Defined in

[src/neuroglancer/navigation_state.ts:1233](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/navigation_state.ts#L1233)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

TrackableZoom.refCount

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

TrackableZoom.wasDisposed

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### canonicalVoxelPhysicalSize

• `get` **canonicalVoxelPhysicalSize**(): `number`

#### Returns

`number`

#### Inherited from

TrackableZoom.canonicalVoxelPhysicalSize

#### Defined in

[src/neuroglancer/navigation_state.ts:1256](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/navigation_state.ts#L1256)

___

### coordinateSpaceValue

• `get` **coordinateSpaceValue**(): [`CoordinateSpace`](../interfaces/coordinate_transform.CoordinateSpace.md)

#### Returns

[`CoordinateSpace`](../interfaces/coordinate_transform.CoordinateSpace.md)

#### Inherited from

TrackableZoom.coordinateSpaceValue

#### Defined in

[src/neuroglancer/navigation_state.ts:1260](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/navigation_state.ts#L1260)

___

### legacyJsonView

• `get` **legacyJsonView**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `changed` | `NullarySignal` |
| `reset` | () => `void` |
| `restoreState` | (`obj`: `any`) => `void` |
| `toJSON` | () => `undefined` \| `number` |

#### Inherited from

TrackableZoom.legacyJsonView

#### Defined in

[src/neuroglancer/navigation_state.ts:1345](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/navigation_state.ts#L1345)

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

[src/neuroglancer/navigation_state.ts:1277](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/navigation_state.ts#L1277)

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

[src/neuroglancer/navigation_state.ts:1269](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/navigation_state.ts#L1269)

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

[src/neuroglancer/navigation_state.ts:1239](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/navigation_state.ts#L1239)

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

[src/neuroglancer/navigation_state.ts:1244](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/navigation_state.ts#L1244)

## Methods

### addRef

▸ **addRef**(): [`TrackableCrossSectionZoom`](navigation_state.TrackableCrossSectionZoom.md)

#### Returns

[`TrackableCrossSectionZoom`](navigation_state.TrackableCrossSectionZoom.md)

#### Inherited from

TrackableZoom.addRef

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L48)

___

### assign

▸ **assign**(`source`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`TrackableZoomInterface`](../modules/navigation_state.md#trackablezoominterface) |

#### Returns

`void`

#### Inherited from

TrackableZoom.assign

#### Defined in

[src/neuroglancer/navigation_state.ts:1368](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/navigation_state.ts#L1368)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

TrackableZoom.dispose

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

TrackableZoom.disposed

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L75)

___

### getDefaultValue

▸ `Protected` **getDefaultValue**(): `number`

#### Returns

`number`

#### Overrides

TrackableZoom.getDefaultValue

#### Defined in

[src/neuroglancer/navigation_state.ts:1379](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/navigation_state.ts#L1379)

___

### handleCoordinateSpaceChanged

▸ **handleCoordinateSpaceChanged**(): `void`

#### Returns

`void`

#### Inherited from

TrackableZoom.handleCoordinateSpaceChanged

#### Defined in

[src/neuroglancer/navigation_state.ts:1292](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/navigation_state.ts#L1292)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

TrackableZoom.refCountReachedZero

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L66)

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

TrackableZoom.registerCancellable

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L100)

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

TrackableZoom.registerDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L76)

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

TrackableZoom.registerEventListener

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L95)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Inherited from

TrackableZoom.reset

#### Defined in

[src/neuroglancer/navigation_state.ts:1338](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/navigation_state.ts#L1338)

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

TrackableZoom.restoreState

#### Defined in

[src/neuroglancer/navigation_state.ts:1327](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/navigation_state.ts#L1327)

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

TrackableZoom.setPhysicalScale

#### Defined in

[src/neuroglancer/navigation_state.ts:1361](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/navigation_state.ts#L1361)

___

### toJSON

▸ **toJSON**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Inherited from

TrackableZoom.toJSON

#### Defined in

[src/neuroglancer/navigation_state.ts:1322](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/navigation_state.ts#L1322)

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

TrackableZoom.unregisterDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L85)
