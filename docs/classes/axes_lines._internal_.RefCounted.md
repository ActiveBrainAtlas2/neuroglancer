[neuroglancer](../README.md) / [Modules](../modules.md) / [axes\_lines](../modules/axes_lines.md) / [<internal\>](../modules/axes_lines._internal_.md) / RefCounted

# Class: RefCounted

[axes_lines](../modules/axes_lines.md).[<internal>](../modules/axes_lines._internal_.md).RefCounted

## Hierarchy

- **`RefCounted`**

  ↳ [`AxesLineHelper`](axes_lines.AxesLineHelper.md)

  ↳ [`DataDisplayLayout`](../interfaces/data_panel_layout.DataDisplayLayout.md)

  ↳ [`FourPanelLayout`](data_panel_layout.FourPanelLayout.md)

  ↳ [`SliceViewPerspectiveTwoPanelLayout`](data_panel_layout.SliceViewPerspectiveTwoPanelLayout.md)

  ↳ [`SinglePanelLayout`](data_panel_layout.SinglePanelLayout.md)

  ↳ [`SinglePerspectiveLayout`](data_panel_layout.SinglePerspectiveLayout.md)

  ↳ [`CrossSectionSpecification`](data_panel_layout.CrossSectionSpecification.md)

  ↳ [`DataPanelLayoutSpecification`](data_panel_layout.DataPanelLayoutSpecification.md)

  ↳ [`DataPanelLayoutContainer`](data_panel_layout.DataPanelLayoutContainer.md)

  ↳ [`RenderedPanel`](display_context.RenderedPanel.md)

  ↳ [`DisplayContext`](display_context.DisplayContext.md)

  ↳ [`UserLayer`](layer.UserLayer.md)

  ↳ [`ManagedUserLayer`](layer.ManagedUserLayer.md)

  ↳ [`LayerManager`](layer.LayerManager.md)

  ↳ [`LayerSelectedValues`](layer.LayerSelectedValues.md)

  ↳ [`TrackableDataSelectionState`](layer.TrackableDataSelectionState.md)

  ↳ [`VisibleLayerInfo`](layer.VisibleLayerInfo.md)

  ↳ [`VisibleRenderLayerTracker`](layer.VisibleRenderLayerTracker.md)

  ↳ [`SelectedLayerState`](layer.SelectedLayerState.md)

  ↳ [`LayerReference`](layer.LayerReference.md)

  ↳ [`LinkedLayerGroup`](layer.LinkedLayerGroup.md)

  ↳ [`LayerListSpecification`](layer.LayerListSpecification.md)

  ↳ [`LoadedLayerDataSource`](layer_data_source.LoadedLayerDataSource.md)

  ↳ [`LayerDataSource`](layer_data_source.LayerDataSource.md)

  ↳ [`LinkedViewerNavigationState`](layer_group_viewer.LinkedViewerNavigationState.md)

  ↳ [`LayerGroupViewer`](layer_group_viewer.LayerGroupViewer.md)

  ↳ [`LayoutComponentContainer`](layer_groups_layout.LayoutComponentContainer.md)

  ↳ [`SingletonLayerGroupViewer`](layer_groups_layout.SingletonLayerGroupViewer.md)

  ↳ [`StackLayoutComponent`](layer_groups_layout.StackLayoutComponent.md)

  ↳ [`RootLayoutContainer`](layer_groups_layout.RootLayoutContainer.md)

  ↳ [`Position`](navigation_state.Position.md)

  ↳ [`OrientationState`](navigation_state.OrientationState.md)

  ↳ [`TrackableRelativeDisplayScales`](navigation_state.TrackableRelativeDisplayScales.md)

  ↳ [`WatchableDisplayDimensionRenderInfo`](navigation_state.WatchableDisplayDimensionRenderInfo.md)

  ↳ [`TrackableDisplayDimensions`](navigation_state.TrackableDisplayDimensions.md)

  ↳ [`DisplayPose`](navigation_state.DisplayPose.md)

  ↳ [`TrackableDepthRange`](navigation_state.TrackableDepthRange.md)

  ↳ [`NavigationState`](navigation_state.NavigationState.md)

  ↳ [`Overlay`](overlay.Overlay.md)

  ↳ [`RenderLayerBackendAttachment`](render_layer_backend.RenderLayerBackendAttachment.md)

  ↳ [`RenderLayer`](renderlayer.RenderLayer.md)

  ↳ [`DerivedProjectionParameters`](renderlayer.DerivedProjectionParameters.md)

  ↳ [`SegmentationUserLayerGroupState`](segmentation_user_layer.SegmentationUserLayerGroupState.md)

  ↳ [`SegmentationUserLayerColorGroupState`](segmentation_user_layer.SegmentationUserLayerColorGroupState.md)

  ↳ [`TrackableBooleanCheckbox`](trackable_boolean.TrackableBooleanCheckbox.md)

  ↳ [`ElementVisibilityFromTrackableBoolean`](trackable_boolean.ElementVisibilityFromTrackableBoolean.md)

  ↳ [`CachedWatchableValue`](trackable_value.CachedWatchableValue.md)

  ↳ [`AggregateWatchableValue`](trackable_value.AggregateWatchableValue.md)

  ↳ [`ComputedWatchableValue`](trackable_value.ComputedWatchableValue.md)

  ↳ [`WatchableRefCounted`](trackable_value.WatchableRefCounted.md)

  ↳ [`DataManagementContext`](viewer.DataManagementContext.md)

  ↳ [`Viewer`](viewer.Viewer.md)

  ↳ [`SharedObject`](worker_rpc.SharedObject.md)

  ↳ [`ShaderProgram`](axes_lines._internal_.ShaderProgram.md)

  ↳ [`WatchableMap`](data_panel_layout._internal_.WatchableMap.md)

  ↳ [`FramebufferConfiguration`](data_panel_layout._internal_.FramebufferConfiguration.md)

  ↳ [`TextureHistogramGenerator`](data_panel_layout._internal_.TextureHistogramGenerator.md)

  ↳ [`HistogramSpecifications`](data_panel_layout._internal_.HistogramSpecifications.md)

  ↳ [`SizeManaged`](data_panel_layout._internal_.SizeManaged.md)

  ↳ [`Framebuffer`](data_panel_layout._internal_.Framebuffer.md)

  ↳ [`RefCountedValue`](data_panel_layout._internal_.RefCountedValue.md)

  ↳ [`CachedLazyDerivedWatchableValue`](image_user_layer._internal_.CachedLazyDerivedWatchableValue.md)

  ↳ [`ShaderControlState`](image_user_layer._internal_.ShaderControlState.md)

  ↳ [`MergedAnnotationStates`](image_user_layer._internal_.MergedAnnotationStates.md)

  ↳ [`AnnotationDisplayState`](image_user_layer._internal_.AnnotationDisplayState.md)

  ↳ [`AnnotationColorWidget`](image_user_layer._internal_.AnnotationColorWidget.md)

  ↳ [`SelectedLegacyTool`](image_user_layer._internal_.SelectedLegacyTool.md)

  ↳ [`DependentViewContext`](image_user_layer._internal_.DependentViewContext.md)

  ↳ [`AnnotationLayerState`](image_user_layer._internal_.AnnotationLayerState.md)

  ↳ [`AnnotationReference`](image_user_layer._internal_.AnnotationReference.md)

  ↳ [`AnnotationSource`](image_user_layer._internal_.AnnotationSource.md)

  ↳ [`OptionSpecification`](image_user_layer._internal_.OptionSpecification.md)

  ↳ [`LegacyTool`](image_user_layer._internal_.LegacyTool.md)

  ↳ [`Tab`](image_user_layer._internal_.Tab.md)

  ↳ [`UserLayerSidePanelState`](image_user_layer._internal_.UserLayerSidePanelState.md)

  ↳ [`Tool`](image_user_layer._internal_.Tool.md)

  ↳ [`VirtualList`](image_user_layer._internal_.VirtualList.md)

  ↳ [`ToolBinder`](image_user_layer._internal_.ToolBinder.md)

  ↳ [`ToolActivation`](image_user_layer._internal_.ToolActivation.md)

  ↳ [`SegmentSelectionState`](image_user_layer._internal_.SegmentSelectionState.md)

  ↳ [`DataSourceProviderRegistry`](layer._internal_.DataSourceProviderRegistry.md)

  ↳ [`DataSourceProvider`](layer._internal_.DataSourceProvider.md)

  ↳ [`CredentialsProvider`](layer._internal_.CredentialsProvider.md)

  ↳ [`SegmentationGraphSourceConnection`](layer._internal_.SegmentationGraphSourceConnection.md)

  ↳ [`LayerBar`](layer_group_viewer._internal_.LayerBar.md)

  ↳ [`CompoundTrackable`](layer_group_viewer._internal_.CompoundTrackable.md)

  ↳ [`LayerWidget`](layer_group_viewer._internal_.LayerWidget.md)

  ↳ [`PositionWidget`](layer_group_viewer._internal_.PositionWidget.md)

  ↳ [`LayoutComponent`](../interfaces/layer_groups_layout._internal_.LayoutComponent.md)

  ↳ [`TrackableZoom`](navigation_state._internal_.TrackableZoom.md)

  ↳ [`LinkableState`](../interfaces/navigation_state._internal_.LinkableState.md)

  ↳ [`GPUHashTable`](segment_color._internal_.GPUHashTable.md)

  ↳ [`DerivedWatchableValue`](trackable_value._internal_.DerivedWatchableValue.md)

  ↳ [`SidePanelManager`](viewer._internal_.SidePanelManager.md)

  ↳ [`UrlHashBinding`](viewer._internal_.UrlHashBinding.md)

  ↳ [`StateLoader`](viewer._internal_.StateLoader.md)

  ↳ [`AutocompleteTextInput`](viewer._internal_.AutocompleteTextInput.md)

  ↳ [`SidePanel`](viewer._internal_.SidePanel.md)

## Implements

- [`Disposable`](../interfaces/axes_lines._internal_.Disposable.md)

## Table of contents

### Constructors

- [constructor](axes_lines._internal_.RefCounted.md#constructor)

### Properties

- [disposedStacks](axes_lines._internal_.RefCounted.md#disposedstacks)
- [disposers](axes_lines._internal_.RefCounted.md#disposers)
- [refCount](axes_lines._internal_.RefCounted.md#refcount)
- [wasDisposed](axes_lines._internal_.RefCounted.md#wasdisposed)

### Methods

- [addRef](axes_lines._internal_.RefCounted.md#addref)
- [dispose](axes_lines._internal_.RefCounted.md#dispose)
- [disposed](axes_lines._internal_.RefCounted.md#disposed)
- [refCountReachedZero](axes_lines._internal_.RefCounted.md#refcountreachedzero)
- [registerCancellable](axes_lines._internal_.RefCounted.md#registercancellable)
- [registerDisposer](axes_lines._internal_.RefCounted.md#registerdisposer)
- [registerEventListener](axes_lines._internal_.RefCounted.md#registereventlistener)
- [unregisterDisposer](axes_lines._internal_.RefCounted.md#unregisterdisposer)

## Constructors

### constructor

• **new RefCounted**()

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L52)

___

### disposers

• `Private` **disposers**: [`Disposer`](../modules/axes_lines._internal_.md#disposer)[]

#### Defined in

[src/neuroglancer/util/disposable.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L47)

___

### refCount

• **refCount**: `number` = `1`

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`RefCounted`](axes_lines._internal_.RefCounted.md)

#### Returns

[`RefCounted`](axes_lines._internal_.RefCounted.md)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Implementation of

[Disposable](../interfaces/axes_lines._internal_.Disposable.md).[dispose](../interfaces/axes_lines._internal_.Disposable.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L75)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

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

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L95)

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

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L85)
