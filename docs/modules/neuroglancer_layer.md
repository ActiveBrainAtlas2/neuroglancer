[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/layer

# Module: neuroglancer/layer

## Table of contents

### Classes

- [AutoUserLayer](../classes/neuroglancer_layer.AutoUserLayer.md)
- [LayerActionContext](../classes/neuroglancer_layer.LayerActionContext.md)
- [LayerListSpecification](../classes/neuroglancer_layer.LayerListSpecification.md)
- [LayerManager](../classes/neuroglancer_layer.LayerManager.md)
- [LayerReference](../classes/neuroglancer_layer.LayerReference.md)
- [LayerSelectedValues](../classes/neuroglancer_layer.LayerSelectedValues.md)
- [LayerSubsetSpecification](../classes/neuroglancer_layer.LayerSubsetSpecification.md)
- [LinkedLayerGroup](../classes/neuroglancer_layer.LinkedLayerGroup.md)
- [ManagedUserLayer](../classes/neuroglancer_layer.ManagedUserLayer.md)
- [MouseSelectionState](../classes/neuroglancer_layer.MouseSelectionState.md)
- [NewUserLayer](../classes/neuroglancer_layer.NewUserLayer.md)
- [SelectedLayerState](../classes/neuroglancer_layer.SelectedLayerState.md)
- [TopLevelLayerListSpecification](../classes/neuroglancer_layer.TopLevelLayerListSpecification.md)
- [TrackableDataSelectionState](../classes/neuroglancer_layer.TrackableDataSelectionState.md)
- [UserLayer](../classes/neuroglancer_layer.UserLayer.md)
- [VisibleLayerInfo](../classes/neuroglancer_layer.VisibleLayerInfo.md)
- [VisibleRenderLayerTracker](../classes/neuroglancer_layer.VisibleRenderLayerTracker.md)

### Interfaces

- [LayerTypeGuess](../interfaces/neuroglancer_layer.LayerTypeGuess.md)
- [LayerView](../interfaces/neuroglancer_layer.LayerView.md)
- [PersistentLayerSelectionState](../interfaces/neuroglancer_layer.PersistentLayerSelectionState.md)
- [PersistentViewerSelectionState](../interfaces/neuroglancer_layer.PersistentViewerSelectionState.md)
- [PickState](../interfaces/neuroglancer_layer.PickState.md)
- [UserLayerSelectionState](../interfaces/neuroglancer_layer.UserLayerSelectionState.md)

### Type Aliases

- [LayerTypeDetector](neuroglancer_layer.md#layertypedetector)
- [UserLayerConstructor](neuroglancer_layer.md#userlayerconstructor)

### Variables

- [layerTypes](neuroglancer_layer.md#layertypes)

### Functions

- [addNewLayer](neuroglancer_layer.md#addnewlayer)
- [capturePersistentViewerSelectionState](neuroglancer_layer.md#capturepersistentviewerselectionstate)
- [changeLayerName](neuroglancer_layer.md#changelayername)
- [changeLayerType](neuroglancer_layer.md#changelayertype)
- [deleteLayer](neuroglancer_layer.md#deletelayer)
- [detectLayerType](neuroglancer_layer.md#detectlayertype)
- [detectLayerTypeFromDataSubsource](neuroglancer_layer.md#detectlayertypefromdatasubsource)
- [initializeLayerFromSpec](neuroglancer_layer.md#initializelayerfromspec)
- [initializeLayerFromSpecShowErrorStatus](neuroglancer_layer.md#initializelayerfromspecshowerrorstatus)
- [makeLayer](neuroglancer_layer.md#makelayer)
- [makeRenderedPanelVisibleLayerTracker](neuroglancer_layer.md#makerenderedpanelvisiblelayertracker)
- [registerLayerType](neuroglancer_layer.md#registerlayertype)
- [registerLayerTypeDetector](neuroglancer_layer.md#registerlayertypedetector)
- [registerVolumeLayerType](neuroglancer_layer.md#registervolumelayertype)

## Type Aliases

### LayerTypeDetector

Ƭ **LayerTypeDetector**: (`subsource`: [`DataSubsource`](../interfaces/neuroglancer_datasource.DataSubsource.md)) => [`LayerTypeGuess`](../interfaces/neuroglancer_layer.LayerTypeGuess.md) \| `undefined`

#### Type declaration

▸ (`subsource`): [`LayerTypeGuess`](../interfaces/neuroglancer_layer.LayerTypeGuess.md) \| `undefined`

##### Parameters

| Name | Type |
| :------ | :------ |
| `subsource` | [`DataSubsource`](../interfaces/neuroglancer_datasource.DataSubsource.md) |

##### Returns

[`LayerTypeGuess`](../interfaces/neuroglancer_layer.LayerTypeGuess.md) \| `undefined`

#### Defined in

[src/neuroglancer/layer.ts:1990](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1990)

___

### UserLayerConstructor

Ƭ **UserLayerConstructor**<`LayerType`\>: typeof [`UserLayer`](../classes/neuroglancer_layer.UserLayer.md) & [`AnyConstructor`](neuroglancer_util_mixin.md#anyconstructor)<`LayerType`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `LayerType` | extends [`UserLayer`](../classes/neuroglancer_layer.UserLayer.md) = [`UserLayer`](../classes/neuroglancer_layer.UserLayer.md) |

#### Defined in

[src/neuroglancer/layer.ts:1979](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1979)

## Variables

### layerTypes

• `Const` **layerTypes**: `Map`<`string`, [`UserLayerConstructor`](neuroglancer_layer.md#userlayerconstructor)<[`UserLayer`](../classes/neuroglancer_layer.UserLayer.md)\>\>

#### Defined in

[src/neuroglancer/layer.ts:1982](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1982)

## Functions

### addNewLayer

▸ **addNewLayer**(`manager`, `selectedLayer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`LayerListSpecification`](../classes/neuroglancer_layer.LayerListSpecification.md) |
| `selectedLayer` | [`SelectedLayerState`](../classes/neuroglancer_layer.SelectedLayerState.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:2120](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L2120)

___

### capturePersistentViewerSelectionState

▸ **capturePersistentViewerSelectionState**(`layerSelectedValues`): [`PersistentViewerSelectionState`](../interfaces/neuroglancer_layer.PersistentViewerSelectionState.md) \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `layerSelectedValues` | [`LayerSelectedValues`](../classes/neuroglancer_layer.LayerSelectedValues.md) |

#### Returns

[`PersistentViewerSelectionState`](../interfaces/neuroglancer_layer.PersistentViewerSelectionState.md) \| `undefined`

#### Defined in

[src/neuroglancer/layer.ts:1241](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1241)

___

### changeLayerName

▸ **changeLayerName**(`managedLayer`, `newName`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `managedLayer` | [`ManagedUserLayer`](../classes/neuroglancer_layer.ManagedUserLayer.md) |
| `newName` | `string` |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/layer.ts:2026](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L2026)

___

### changeLayerType

▸ **changeLayerType**(`managedLayer`, `layerConstructor`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `managedLayer` | [`ManagedUserLayer`](../classes/neuroglancer_layer.ManagedUserLayer.md) |
| `layerConstructor` | typeof [`UserLayer`](../classes/neuroglancer_layer.UserLayer.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:2015](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L2015)

___

### deleteLayer

▸ **deleteLayer**(`managedLayer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `managedLayer` | [`ManagedUserLayer`](../classes/neuroglancer_layer.ManagedUserLayer.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:2037](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L2037)

___

### detectLayerType

▸ **detectLayerType**(`userLayer`): [`UserLayerConstructor`](neuroglancer_layer.md#userlayerconstructor) \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `userLayer` | [`UserLayer`](../classes/neuroglancer_layer.UserLayer.md) |

#### Returns

[`UserLayerConstructor`](neuroglancer_layer.md#userlayerconstructor) \| `undefined`

#### Defined in

[src/neuroglancer/layer.ts:2066](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L2066)

___

### detectLayerTypeFromDataSubsource

▸ **detectLayerTypeFromDataSubsource**(`subsource`): [`LayerTypeGuess`](../interfaces/neuroglancer_layer.LayerTypeGuess.md) \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `subsource` | [`DataSubsource`](../interfaces/neuroglancer_datasource.DataSubsource.md) |

#### Returns

[`LayerTypeGuess`](../interfaces/neuroglancer_layer.LayerTypeGuess.md) \| `undefined`

#### Defined in

[src/neuroglancer/layer.ts:2050](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L2050)

___

### initializeLayerFromSpec

▸ **initializeLayerFromSpec**(`managedLayer`, `spec`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `managedLayer` | [`ManagedUserLayer`](../classes/neuroglancer_layer.ManagedUserLayer.md) |
| `spec` | `any` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:1750](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1750)

___

### initializeLayerFromSpecShowErrorStatus

▸ **initializeLayerFromSpecShowErrorStatus**(`managedLayer`, `spec`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `managedLayer` | [`ManagedUserLayer`](../classes/neuroglancer_layer.ManagedUserLayer.md) |
| `spec` | `any` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:1761](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1761)

___

### makeLayer

▸ **makeLayer**(`manager`, `name`, `spec`): [`ManagedUserLayer`](../classes/neuroglancer_layer.ManagedUserLayer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`LayerListSpecification`](../classes/neuroglancer_layer.LayerListSpecification.md) |
| `name` | `string` |
| `spec` | `any` |

#### Returns

[`ManagedUserLayer`](../classes/neuroglancer_layer.ManagedUserLayer.md)

#### Defined in

[src/neuroglancer/layer.ts:1771](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1771)

___

### makeRenderedPanelVisibleLayerTracker

▸ **makeRenderedPanelVisibleLayerTracker**<`View`, `RenderLayerType`\>(`layerManager`, `renderLayerType`, `roles`, `panel`, `layerAdded?`): [`VisibleRenderLayerTracker`](../classes/neuroglancer_layer.VisibleRenderLayerTracker.md)<`View`, `RenderLayerType`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `View` | extends [`RenderedPanel`](../classes/neuroglancer_display_context.RenderedPanel.md)<`View`\> & [`LayerView`](../interfaces/neuroglancer_layer.LayerView.md) |
| `RenderLayerType` | extends [`VisibilityTrackedRenderLayer`](../classes/neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md)<`View`, `unknown`, `RenderLayerType`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `layerManager` | [`LayerManager`](../classes/neuroglancer_layer.LayerManager.md) |
| `renderLayerType` | (...`args`: `any`[]) => `RenderLayerType` |
| `roles` | [`WatchableSet`](../classes/neuroglancer_trackable_value.WatchableSet.md)<[`RenderLayerRole`](../enums/neuroglancer_renderlayer.RenderLayerRole.md)\> |
| `panel` | `View` |
| `layerAdded?` | (`layer`: `RenderLayerType`, `info`: [`VisibleLayerInfo`](../classes/neuroglancer_layer.VisibleLayerInfo.md)<`View`, `unknown`\>) => `void` |

#### Returns

[`VisibleRenderLayerTracker`](../classes/neuroglancer_layer.VisibleRenderLayerTracker.md)<`View`, `RenderLayerType`\>

#### Defined in

[src/neuroglancer/layer.ts:1346](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1346)

___

### registerLayerType

▸ **registerLayerType**(`layerConstructor`, `name?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `layerConstructor` | [`UserLayerConstructor`](neuroglancer_layer.md#userlayerconstructor)<[`UserLayer`](../classes/neuroglancer_layer.UserLayer.md)\> | `undefined` |
| `name` | `string` | `layerConstructor.type` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:2001](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L2001)

___

### registerLayerTypeDetector

▸ **registerLayerTypeDetector**(`detector`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `detector` | [`LayerTypeDetector`](neuroglancer_layer.md#layertypedetector) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:2006](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L2006)

___

### registerVolumeLayerType

▸ **registerVolumeLayerType**(`volumeType`, `layerConstructor`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `volumeType` | [`VolumeType`](../enums/neuroglancer_sliceview_volume_base.VolumeType.md) |
| `layerConstructor` | [`UserLayerConstructor`](neuroglancer_layer.md#userlayerconstructor)<[`UserLayer`](../classes/neuroglancer_layer.UserLayer.md)\> |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:2010](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L2010)
