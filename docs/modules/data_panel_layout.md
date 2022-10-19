[neuroglancer](../README.md) / [Modules](../modules.md) / data\_panel\_layout

# Module: data\_panel\_layout

## Table of contents

### Modules

- [&lt;internal\&gt;](data_panel_layout._internal_.md)

### Classes

- [CrossSectionSpecification](../classes/data_panel_layout.CrossSectionSpecification.md)
- [CrossSectionSpecificationMap](../classes/data_panel_layout.CrossSectionSpecificationMap.md)
- [DataPanelLayoutContainer](../classes/data_panel_layout.DataPanelLayoutContainer.md)
- [DataPanelLayoutSpecification](../classes/data_panel_layout.DataPanelLayoutSpecification.md)
- [FourPanelLayout](../classes/data_panel_layout.FourPanelLayout.md)
- [InputEventBindings](../classes/data_panel_layout.InputEventBindings.md)
- [SinglePanelLayout](../classes/data_panel_layout.SinglePanelLayout.md)
- [SinglePerspectiveLayout](../classes/data_panel_layout.SinglePerspectiveLayout.md)
- [SliceViewPerspectiveTwoPanelLayout](../classes/data_panel_layout.SliceViewPerspectiveTwoPanelLayout.md)

### Interfaces

- [DataDisplayLayout](../interfaces/data_panel_layout.DataDisplayLayout.md)
- [SliceViewViewerState](../interfaces/data_panel_layout.SliceViewViewerState.md)
- [ViewerUIState](../interfaces/data_panel_layout.ViewerUIState.md)

### Variables

- [LAYOUTS](data_panel_layout.md#layouts)

### Functions

- [getCommonViewerState](data_panel_layout.md#getcommonviewerstate)
- [getLayoutByName](data_panel_layout.md#getlayoutbyname)
- [makeNamedSliceView](data_panel_layout.md#makenamedsliceview)
- [makeOrthogonalSliceViews](data_panel_layout.md#makeorthogonalsliceviews)
- [makeSliceView](data_panel_layout.md#makesliceview)
- [validateLayoutName](data_panel_layout.md#validatelayoutname)

## Variables

### LAYOUTS

• `Const` **LAYOUTS**: `Map`<`string`, { `factory`: (`container`: [`DataPanelLayoutContainer`](../classes/data_panel_layout.DataPanelLayoutContainer.md), `element`: [`HTMLElement`](axes_lines._internal_.md#htmlelement), `viewer`: [`ViewerUIState`](../interfaces/data_panel_layout.ViewerUIState.md), `crossSections`: [`CrossSectionSpecificationMap`](../classes/data_panel_layout.CrossSectionSpecificationMap.md)) => [`DataDisplayLayout`](../interfaces/data_panel_layout.DataDisplayLayout.md)  }\>

#### Defined in

[src/neuroglancer/data_panel_layout.ts:420](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/data_panel_layout.ts#L420)

## Functions

### getCommonViewerState

▸ **getCommonViewerState**(`viewer`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `viewer` | [`ViewerUIState`](../interfaces/data_panel_layout.ViewerUIState.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `crossSectionBackgroundColor` | [`TrackableRGB`](../classes/data_panel_layout._internal_.TrackableRGB.md) |
| `layerManager` | [`LayerManager`](../classes/layer.LayerManager.md) |
| `mouseState` | [`MouseSelectionState`](../classes/layer.MouseSelectionState.md) |
| `perspectiveViewBackgroundColor` | [`TrackableRGB`](../classes/data_panel_layout._internal_.TrackableRGB.md) |
| `scaleBarOptions` | [`TrackableValue`](../classes/trackable_value.TrackableValue.md)<[`ScaleBarOptions`](../interfaces/data_panel_layout._internal_.ScaleBarOptions.md)\> |
| `selectedLayer` | [`SelectedLayerState`](../classes/layer.SelectedLayerState.md) |
| `selectionDetailsState` | [`TrackableDataSelectionState`](../classes/layer.TrackableDataSelectionState.md) |
| `showAxisLines` | [`TrackableBoolean`](../classes/trackable_boolean.TrackableBoolean.md) |
| `visibility` | [`WatchableVisibilityPriority`](../classes/data_panel_layout._internal_.WatchableVisibilityPriority.md) |
| `visibleLayerRoles` | [`WatchableSet`](../classes/trackable_value.WatchableSet.md)<[`RenderLayerRole`](../enums/renderlayer.RenderLayerRole.md)\> |
| `wireFrame` | [`TrackableBoolean`](../classes/trackable_boolean.TrackableBoolean.md) |

#### Defined in

[src/neuroglancer/data_panel_layout.ts:124](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/data_panel_layout.ts#L124)

___

### getLayoutByName

▸ **getLayoutByName**(`obj`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `factory` | (`container`: [`DataPanelLayoutContainer`](../classes/data_panel_layout.DataPanelLayoutContainer.md), `element`: [`HTMLElement`](axes_lines._internal_.md#htmlelement), `viewer`: [`ViewerUIState`](../interfaces/data_panel_layout.ViewerUIState.md), `crossSections`: [`CrossSectionSpecificationMap`](../classes/data_panel_layout.CrossSectionSpecificationMap.md)) => [`DataDisplayLayout`](../interfaces/data_panel_layout.DataDisplayLayout.md) |

#### Defined in

[src/neuroglancer/data_panel_layout.ts:455](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/data_panel_layout.ts#L455)

___

### makeNamedSliceView

▸ **makeNamedSliceView**(`viewerState`, `axes`): [`SliceView`](../classes/data_panel_layout._internal_.SliceView.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `viewerState` | [`SliceViewViewerState`](../interfaces/data_panel_layout.SliceViewViewerState.md) |
| `axes` | [`NamedAxes`](data_panel_layout._internal_.md#namedaxes) |

#### Returns

[`SliceView`](../classes/data_panel_layout._internal_.SliceView.md)

#### Defined in

[src/neuroglancer/data_panel_layout.ts:112](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/data_panel_layout.ts#L112)

___

### makeOrthogonalSliceViews

▸ **makeOrthogonalSliceViews**(`viewerState`): `Map`<[`NamedAxes`](data_panel_layout._internal_.md#namedaxes), [`SliceView`](../classes/data_panel_layout._internal_.SliceView.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `viewerState` | [`SliceViewViewerState`](../interfaces/data_panel_layout.SliceViewViewerState.md) |

#### Returns

`Map`<[`NamedAxes`](data_panel_layout._internal_.md#namedaxes), [`SliceView`](../classes/data_panel_layout._internal_.SliceView.md)\>

#### Defined in

[src/neuroglancer/data_panel_layout.ts:116](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/data_panel_layout.ts#L116)

___

### makeSliceView

▸ **makeSliceView**(`viewerState`, `baseToSelf?`): [`SliceView`](../classes/data_panel_layout._internal_.SliceView.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `viewerState` | [`SliceViewViewerState`](../interfaces/data_panel_layout.SliceViewViewerState.md) |
| `baseToSelf?` | [`quat`](../classes/axes_lines._internal_.quat.md) |

#### Returns

[`SliceView`](../classes/data_panel_layout._internal_.SliceView.md)

#### Defined in

[src/neuroglancer/data_panel_layout.ts:94](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/data_panel_layout.ts#L94)

___

### validateLayoutName

▸ **validateLayoutName**(`obj`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

`string`

#### Defined in

[src/neuroglancer/data_panel_layout.ts:463](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/data_panel_layout.ts#L463)
