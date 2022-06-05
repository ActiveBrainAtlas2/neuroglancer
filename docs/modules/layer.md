[neuroglancer](../README.md) / [Modules](../modules.md) / layer

# Module: layer

## Table of contents

### Classes

- [AutoUserLayer](../classes/layer.AutoUserLayer.md)
- [LayerActionContext](../classes/layer.LayerActionContext.md)
- [LayerListSpecification](../classes/layer.LayerListSpecification.md)
- [LayerManager](../classes/layer.LayerManager.md)
- [LayerReference](../classes/layer.LayerReference.md)
- [LayerSelectedValues](../classes/layer.LayerSelectedValues.md)
- [LayerSubsetSpecification](../classes/layer.LayerSubsetSpecification.md)
- [LinkedLayerGroup](../classes/layer.LinkedLayerGroup.md)
- [ManagedUserLayer](../classes/layer.ManagedUserLayer.md)
- [MouseSelectionState](../classes/layer.MouseSelectionState.md)
- [NewUserLayer](../classes/layer.NewUserLayer.md)
- [SelectedLayerState](../classes/layer.SelectedLayerState.md)
- [TopLevelLayerListSpecification](../classes/layer.TopLevelLayerListSpecification.md)
- [TrackableDataSelectionState](../classes/layer.TrackableDataSelectionState.md)
- [UserLayer](../classes/layer.UserLayer.md)
- [VisibleLayerInfo](../classes/layer.VisibleLayerInfo.md)
- [VisibleRenderLayerTracker](../classes/layer.VisibleRenderLayerTracker.md)

### Interfaces

- [LayerTypeGuess](../interfaces/layer.LayerTypeGuess.md)
- [LayerView](../interfaces/layer.LayerView.md)
- [PersistentLayerSelectionState](../interfaces/layer.PersistentLayerSelectionState.md)
- [PersistentViewerSelectionState](../interfaces/layer.PersistentViewerSelectionState.md)
- [PickState](../interfaces/layer.PickState.md)
- [UserLayerSelectionState](../interfaces/layer.UserLayerSelectionState.md)

### Type Aliases

- [LayerTypeDetector](layer.md#layertypedetector)
- [UserLayerConstructor](layer.md#userlayerconstructor)

### Variables

- [layerTypes](layer.md#layertypes)

### Functions

- [addNewLayer](layer.md#addnewlayer)
- [capturePersistentViewerSelectionState](layer.md#capturepersistentviewerselectionstate)
- [changeLayerName](layer.md#changelayername)
- [changeLayerType](layer.md#changelayertype)
- [deleteLayer](layer.md#deletelayer)
- [detectLayerType](layer.md#detectlayertype)
- [detectLayerTypeFromDataSubsource](layer.md#detectlayertypefromdatasubsource)
- [initializeLayerFromSpec](layer.md#initializelayerfromspec)
- [initializeLayerFromSpecShowErrorStatus](layer.md#initializelayerfromspecshowerrorstatus)
- [makeLayer](layer.md#makelayer)
- [makeRenderedPanelVisibleLayerTracker](layer.md#makerenderedpanelvisiblelayertracker)
- [registerLayerType](layer.md#registerlayertype)
- [registerLayerTypeDetector](layer.md#registerlayertypedetector)
- [registerVolumeLayerType](layer.md#registervolumelayertype)

## Type Aliases

### LayerTypeDetector

Ƭ **LayerTypeDetector**: (`subsource`: `DataSubsource`) => [`LayerTypeGuess`](../interfaces/layer.LayerTypeGuess.md) \| `undefined`

#### Type declaration

▸ (`subsource`): [`LayerTypeGuess`](../interfaces/layer.LayerTypeGuess.md) \| `undefined`

##### Parameters

| Name | Type |
| :------ | :------ |
| `subsource` | `DataSubsource` |

##### Returns

[`LayerTypeGuess`](../interfaces/layer.LayerTypeGuess.md) \| `undefined`

#### Defined in

[src/neuroglancer/layer.ts:1986](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer.ts#L1986)

___

### UserLayerConstructor

Ƭ **UserLayerConstructor**<`LayerType`\>: typeof [`UserLayer`](../classes/layer.UserLayer.md) & `AnyConstructor`<`LayerType`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `LayerType` | extends [`UserLayer`](../classes/layer.UserLayer.md) = [`UserLayer`](../classes/layer.UserLayer.md) |

#### Defined in

[src/neuroglancer/layer.ts:1975](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer.ts#L1975)

## Variables

### layerTypes

• `Const` **layerTypes**: `Map`<`string`, [`UserLayerConstructor`](layer.md#userlayerconstructor)<[`UserLayer`](../classes/layer.UserLayer.md)\>\>

#### Defined in

[src/neuroglancer/layer.ts:1978](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer.ts#L1978)

## Functions

### addNewLayer

▸ **addNewLayer**(`manager`, `selectedLayer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`LayerListSpecification`](../classes/layer.LayerListSpecification.md) |
| `selectedLayer` | [`SelectedLayerState`](../classes/layer.SelectedLayerState.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:2116](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer.ts#L2116)

___

### capturePersistentViewerSelectionState

▸ **capturePersistentViewerSelectionState**(`layerSelectedValues`): [`PersistentViewerSelectionState`](../interfaces/layer.PersistentViewerSelectionState.md) \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `layerSelectedValues` | [`LayerSelectedValues`](../classes/layer.LayerSelectedValues.md) |

#### Returns

[`PersistentViewerSelectionState`](../interfaces/layer.PersistentViewerSelectionState.md) \| `undefined`

#### Defined in

[src/neuroglancer/layer.ts:1237](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer.ts#L1237)

___

### changeLayerName

▸ **changeLayerName**(`managedLayer`, `newName`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `managedLayer` | [`ManagedUserLayer`](../classes/layer.ManagedUserLayer.md) |
| `newName` | `string` |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/layer.ts:2022](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer.ts#L2022)

___

### changeLayerType

▸ **changeLayerType**(`managedLayer`, `layerConstructor`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `managedLayer` | [`ManagedUserLayer`](../classes/layer.ManagedUserLayer.md) |
| `layerConstructor` | typeof [`UserLayer`](../classes/layer.UserLayer.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:2011](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer.ts#L2011)

___

### deleteLayer

▸ **deleteLayer**(`managedLayer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `managedLayer` | [`ManagedUserLayer`](../classes/layer.ManagedUserLayer.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:2033](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer.ts#L2033)

___

### detectLayerType

▸ **detectLayerType**(`userLayer`): [`UserLayerConstructor`](layer.md#userlayerconstructor) \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `userLayer` | [`UserLayer`](../classes/layer.UserLayer.md) |

#### Returns

[`UserLayerConstructor`](layer.md#userlayerconstructor) \| `undefined`

#### Defined in

[src/neuroglancer/layer.ts:2062](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer.ts#L2062)

___

### detectLayerTypeFromDataSubsource

▸ **detectLayerTypeFromDataSubsource**(`subsource`): [`LayerTypeGuess`](../interfaces/layer.LayerTypeGuess.md) \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `subsource` | `DataSubsource` |

#### Returns

[`LayerTypeGuess`](../interfaces/layer.LayerTypeGuess.md) \| `undefined`

#### Defined in

[src/neuroglancer/layer.ts:2046](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer.ts#L2046)

___

### initializeLayerFromSpec

▸ **initializeLayerFromSpec**(`managedLayer`, `spec`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `managedLayer` | [`ManagedUserLayer`](../classes/layer.ManagedUserLayer.md) |
| `spec` | `any` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:1746](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer.ts#L1746)

___

### initializeLayerFromSpecShowErrorStatus

▸ **initializeLayerFromSpecShowErrorStatus**(`managedLayer`, `spec`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `managedLayer` | [`ManagedUserLayer`](../classes/layer.ManagedUserLayer.md) |
| `spec` | `any` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:1757](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer.ts#L1757)

___

### makeLayer

▸ **makeLayer**(`manager`, `name`, `spec`): [`ManagedUserLayer`](../classes/layer.ManagedUserLayer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`LayerListSpecification`](../classes/layer.LayerListSpecification.md) |
| `name` | `string` |
| `spec` | `any` |

#### Returns

[`ManagedUserLayer`](../classes/layer.ManagedUserLayer.md)

#### Defined in

[src/neuroglancer/layer.ts:1767](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer.ts#L1767)

___

### makeRenderedPanelVisibleLayerTracker

▸ **makeRenderedPanelVisibleLayerTracker**<`View`, `RenderLayerType`\>(`layerManager`, `renderLayerType`, `roles`, `panel`, `layerAdded?`): [`VisibleRenderLayerTracker`](../classes/layer.VisibleRenderLayerTracker.md)<`View`, `RenderLayerType`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `View` | extends [`RenderedPanel`](../classes/display_context.RenderedPanel.md)<`View`\> & [`LayerView`](../interfaces/layer.LayerView.md) |
| `RenderLayerType` | extends [`VisibilityTrackedRenderLayer`](../classes/renderlayer.VisibilityTrackedRenderLayer.md)<`View`, `unknown`, `RenderLayerType`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `layerManager` | [`LayerManager`](../classes/layer.LayerManager.md) |
| `renderLayerType` | (...`args`: `any`[]) => `RenderLayerType` |
| `roles` | [`WatchableSet`](../classes/trackable_value.WatchableSet.md)<[`RenderLayerRole`](../enums/renderlayer.RenderLayerRole.md)\> |
| `panel` | `View` |
| `layerAdded?` | (`layer`: `RenderLayerType`, `info`: [`VisibleLayerInfo`](../classes/layer.VisibleLayerInfo.md)<`View`, `unknown`\>) => `void` |

#### Returns

[`VisibleRenderLayerTracker`](../classes/layer.VisibleRenderLayerTracker.md)<`View`, `RenderLayerType`\>

#### Defined in

[src/neuroglancer/layer.ts:1343](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer.ts#L1343)

___

### registerLayerType

▸ **registerLayerType**(`layerConstructor`, `name?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `layerConstructor` | [`UserLayerConstructor`](layer.md#userlayerconstructor)<[`UserLayer`](../classes/layer.UserLayer.md)\> | `undefined` |
| `name` | `string` | `layerConstructor.type` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:1997](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer.ts#L1997)

___

### registerLayerTypeDetector

▸ **registerLayerTypeDetector**(`detector`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `detector` | [`LayerTypeDetector`](layer.md#layertypedetector) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:2002](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer.ts#L2002)

___

### registerVolumeLayerType

▸ **registerVolumeLayerType**(`volumeType`, `layerConstructor`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `volumeType` | `VolumeType` |
| `layerConstructor` | [`UserLayerConstructor`](layer.md#userlayerconstructor)<[`UserLayer`](../classes/layer.UserLayer.md)\> |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:2006](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer.ts#L2006)
