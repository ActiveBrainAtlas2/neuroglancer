[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/data\_panel\_layout

# Module: neuroglancer/data\_panel\_layout

## Table of contents

### Modules

- [&lt;internal\&gt;](neuroglancer_data_panel_layout._internal_.md)

### Classes

- [CrossSectionSpecification](../classes/neuroglancer_data_panel_layout.CrossSectionSpecification.md)
- [CrossSectionSpecificationMap](../classes/neuroglancer_data_panel_layout.CrossSectionSpecificationMap.md)
- [DataPanelLayoutContainer](../classes/neuroglancer_data_panel_layout.DataPanelLayoutContainer.md)
- [DataPanelLayoutSpecification](../classes/neuroglancer_data_panel_layout.DataPanelLayoutSpecification.md)
- [FourPanelLayout](../classes/neuroglancer_data_panel_layout.FourPanelLayout.md)
- [InputEventBindings](../classes/neuroglancer_data_panel_layout.InputEventBindings.md)
- [SinglePanelLayout](../classes/neuroglancer_data_panel_layout.SinglePanelLayout.md)
- [SinglePerspectiveLayout](../classes/neuroglancer_data_panel_layout.SinglePerspectiveLayout.md)
- [SliceViewPerspectiveTwoPanelLayout](../classes/neuroglancer_data_panel_layout.SliceViewPerspectiveTwoPanelLayout.md)

### Interfaces

- [DataDisplayLayout](../interfaces/neuroglancer_data_panel_layout.DataDisplayLayout.md)
- [SliceViewViewerState](../interfaces/neuroglancer_data_panel_layout.SliceViewViewerState.md)
- [ViewerUIState](../interfaces/neuroglancer_data_panel_layout.ViewerUIState.md)

### Variables

- [LAYOUTS](neuroglancer_data_panel_layout.md#layouts)

### Functions

- [getCommonViewerState](neuroglancer_data_panel_layout.md#getcommonviewerstate)
- [getLayoutByName](neuroglancer_data_panel_layout.md#getlayoutbyname)
- [makeNamedSliceView](neuroglancer_data_panel_layout.md#makenamedsliceview)
- [makeOrthogonalSliceViews](neuroglancer_data_panel_layout.md#makeorthogonalsliceviews)
- [makeSliceView](neuroglancer_data_panel_layout.md#makesliceview)
- [validateLayoutName](neuroglancer_data_panel_layout.md#validatelayoutname)

## Variables

### LAYOUTS

• `Const` **LAYOUTS**: `Map`<`string`, { `factory`: (`container`: [`DataPanelLayoutContainer`](../classes/neuroglancer_data_panel_layout.DataPanelLayoutContainer.md), `element`: [`HTMLElement`](main_module._internal_.md#htmlelement), `viewer`: [`ViewerUIState`](../interfaces/neuroglancer_data_panel_layout.ViewerUIState.md), `crossSections`: [`CrossSectionSpecificationMap`](../classes/neuroglancer_data_panel_layout.CrossSectionSpecificationMap.md)) => [`DataDisplayLayout`](../interfaces/neuroglancer_data_panel_layout.DataDisplayLayout.md)  }\>

#### Defined in

[src/neuroglancer/data_panel_layout.ts:420](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/data_panel_layout.ts#L420)

## Functions

### getCommonViewerState

▸ **getCommonViewerState**(`viewer`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `viewer` | [`ViewerUIState`](../interfaces/neuroglancer_data_panel_layout.ViewerUIState.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `crossSectionBackgroundColor` | [`TrackableRGB`](../classes/neuroglancer_util_color.TrackableRGB.md) |
| `layerManager` | [`LayerManager`](../classes/neuroglancer_layer.LayerManager.md) |
| `mouseState` | [`MouseSelectionState`](../classes/neuroglancer_layer.MouseSelectionState.md) |
| `perspectiveViewBackgroundColor` | [`TrackableRGB`](../classes/neuroglancer_util_color.TrackableRGB.md) |
| `scaleBarOptions` | [`TrackableValue`](../classes/neuroglancer_trackable_value.TrackableValue.md)<[`ScaleBarOptions`](../interfaces/neuroglancer_widget_scale_bar.ScaleBarOptions.md)\> |
| `selectedLayer` | [`SelectedLayerState`](../classes/neuroglancer_layer.SelectedLayerState.md) |
| `selectionDetailsState` | [`TrackableDataSelectionState`](../classes/neuroglancer_layer.TrackableDataSelectionState.md) |
| `showAxisLines` | [`TrackableBoolean`](../classes/neuroglancer_trackable_boolean.TrackableBoolean.md) |
| `visibility` | [`WatchableVisibilityPriority`](../classes/neuroglancer_visibility_priority_frontend.WatchableVisibilityPriority.md) |
| `visibleLayerRoles` | [`WatchableSet`](../classes/neuroglancer_trackable_value.WatchableSet.md)<[`RenderLayerRole`](../enums/neuroglancer_renderlayer.RenderLayerRole.md)\> |
| `wireFrame` | [`TrackableBoolean`](../classes/neuroglancer_trackable_boolean.TrackableBoolean.md) |

#### Defined in

[src/neuroglancer/data_panel_layout.ts:124](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/data_panel_layout.ts#L124)

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
| `factory` | (`container`: [`DataPanelLayoutContainer`](../classes/neuroglancer_data_panel_layout.DataPanelLayoutContainer.md), `element`: [`HTMLElement`](main_module._internal_.md#htmlelement), `viewer`: [`ViewerUIState`](../interfaces/neuroglancer_data_panel_layout.ViewerUIState.md), `crossSections`: [`CrossSectionSpecificationMap`](../classes/neuroglancer_data_panel_layout.CrossSectionSpecificationMap.md)) => [`DataDisplayLayout`](../interfaces/neuroglancer_data_panel_layout.DataDisplayLayout.md) |

#### Defined in

[src/neuroglancer/data_panel_layout.ts:455](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/data_panel_layout.ts#L455)

___

### makeNamedSliceView

▸ **makeNamedSliceView**(`viewerState`, `axes`): [`SliceView`](../classes/neuroglancer_sliceview_frontend.SliceView.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `viewerState` | [`SliceViewViewerState`](../interfaces/neuroglancer_data_panel_layout.SliceViewViewerState.md) |
| `axes` | [`NamedAxes`](neuroglancer_data_panel_layout._internal_.md#namedaxes) |

#### Returns

[`SliceView`](../classes/neuroglancer_sliceview_frontend.SliceView.md)

#### Defined in

[src/neuroglancer/data_panel_layout.ts:112](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/data_panel_layout.ts#L112)

___

### makeOrthogonalSliceViews

▸ **makeOrthogonalSliceViews**(`viewerState`): `Map`<[`NamedAxes`](neuroglancer_data_panel_layout._internal_.md#namedaxes), [`SliceView`](../classes/neuroglancer_sliceview_frontend.SliceView.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `viewerState` | [`SliceViewViewerState`](../interfaces/neuroglancer_data_panel_layout.SliceViewViewerState.md) |

#### Returns

`Map`<[`NamedAxes`](neuroglancer_data_panel_layout._internal_.md#namedaxes), [`SliceView`](../classes/neuroglancer_sliceview_frontend.SliceView.md)\>

#### Defined in

[src/neuroglancer/data_panel_layout.ts:116](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/data_panel_layout.ts#L116)

___

### makeSliceView

▸ **makeSliceView**(`viewerState`, `baseToSelf?`): [`SliceView`](../classes/neuroglancer_sliceview_frontend.SliceView.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `viewerState` | [`SliceViewViewerState`](../interfaces/neuroglancer_data_panel_layout.SliceViewViewerState.md) |
| `baseToSelf?` | [`quat`](../classes/neuroglancer_util_geom.quat.md) |

#### Returns

[`SliceView`](../classes/neuroglancer_sliceview_frontend.SliceView.md)

#### Defined in

[src/neuroglancer/data_panel_layout.ts:94](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/data_panel_layout.ts#L94)

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

[src/neuroglancer/data_panel_layout.ts:463](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/data_panel_layout.ts#L463)
