[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/util/disposable](../modules/neuroglancer_util_disposable.md) / RefCounted

# Class: RefCounted

[neuroglancer/util/disposable](../modules/neuroglancer_util_disposable.md).RefCounted

**`License`**

Copyright 2016 Google Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

## Hierarchy

- **`RefCounted`**

  ↳ [`AnnotationDisplayState`](neuroglancer_annotation_annotation_layer_state.AnnotationDisplayState.md)

  ↳ [`AnnotationLayerState`](neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md)

  ↳ [`AnnotationReference`](neuroglancer_annotation.AnnotationReference.md)

  ↳ [`AnnotationSource`](neuroglancer_annotation.AnnotationSource.md)

  ↳ [`AnnotationLayer`](neuroglancer_annotation_renderlayer.AnnotationLayer.md)

  ↳ [`AnnotationRenderHelper`](neuroglancer_annotation_type_handler.AnnotationRenderHelper.md)

  ↳ [`AxesLineHelper`](neuroglancer_axes_lines.AxesLineHelper.md)

  ↳ [`CredentialsProvider`](neuroglancer_credentials_provider.CredentialsProvider.md)

  ↳ [`CachingCredentialsManager`](neuroglancer_credentials_provider.CachingCredentialsManager.md)

  ↳ [`DataDisplayLayout`](../interfaces/neuroglancer_data_panel_layout.DataDisplayLayout.md)

  ↳ [`FourPanelLayout`](neuroglancer_data_panel_layout.FourPanelLayout.md)

  ↳ [`SliceViewPerspectiveTwoPanelLayout`](neuroglancer_data_panel_layout.SliceViewPerspectiveTwoPanelLayout.md)

  ↳ [`SinglePanelLayout`](neuroglancer_data_panel_layout.SinglePanelLayout.md)

  ↳ [`SinglePerspectiveLayout`](neuroglancer_data_panel_layout.SinglePerspectiveLayout.md)

  ↳ [`CrossSectionSpecification`](neuroglancer_data_panel_layout.CrossSectionSpecification.md)

  ↳ [`DataPanelLayoutSpecification`](neuroglancer_data_panel_layout.DataPanelLayoutSpecification.md)

  ↳ [`DataPanelLayoutContainer`](neuroglancer_data_panel_layout.DataPanelLayoutContainer.md)

  ↳ [`DataSourceProvider`](neuroglancer_datasource.DataSourceProvider.md)

  ↳ [`DataSourceProviderRegistry`](neuroglancer_datasource.DataSourceProviderRegistry.md)

  ↳ [`StateShare`](neuroglancer_datasource_state_share.StateShare.md)

  ↳ [`RenderedPanel`](neuroglancer_display_context.RenderedPanel.md)

  ↳ [`DisplayContext`](neuroglancer_display_context.DisplayContext.md)

  ↳ [`GPUHashTable`](neuroglancer_gpu_hash_shader.GPUHashTable.md)

  ↳ [`UserLayer`](neuroglancer_layer.UserLayer.md)

  ↳ [`ManagedUserLayer`](neuroglancer_layer.ManagedUserLayer.md)

  ↳ [`LayerManager`](neuroglancer_layer.LayerManager.md)

  ↳ [`LayerSelectedValues`](neuroglancer_layer.LayerSelectedValues.md)

  ↳ [`TrackableDataSelectionState`](neuroglancer_layer.TrackableDataSelectionState.md)

  ↳ [`VisibleLayerInfo`](neuroglancer_layer.VisibleLayerInfo.md)

  ↳ [`VisibleRenderLayerTracker`](neuroglancer_layer.VisibleRenderLayerTracker.md)

  ↳ [`SelectedLayerState`](neuroglancer_layer.SelectedLayerState.md)

  ↳ [`LayerReference`](neuroglancer_layer.LayerReference.md)

  ↳ [`LinkedLayerGroup`](neuroglancer_layer.LinkedLayerGroup.md)

  ↳ [`LayerListSpecification`](neuroglancer_layer.LayerListSpecification.md)

  ↳ [`LoadedLayerDataSource`](neuroglancer_layer_data_source.LoadedLayerDataSource.md)

  ↳ [`LayerDataSource`](neuroglancer_layer_data_source.LayerDataSource.md)

  ↳ [`LinkedViewerNavigationState`](neuroglancer_layer_group_viewer.LinkedViewerNavigationState.md)

  ↳ [`LayerGroupViewer`](neuroglancer_layer_group_viewer.LayerGroupViewer.md)

  ↳ [`LayoutComponentContainer`](neuroglancer_layer_groups_layout.LayoutComponentContainer.md)

  ↳ [`SingletonLayerGroupViewer`](neuroglancer_layer_groups_layout.SingletonLayerGroupViewer.md)

  ↳ [`StackLayoutComponent`](neuroglancer_layer_groups_layout.StackLayoutComponent.md)

  ↳ [`RootLayoutContainer`](neuroglancer_layer_groups_layout.RootLayoutContainer.md)

  ↳ [`Position`](neuroglancer_navigation_state.Position.md)

  ↳ [`OrientationState`](neuroglancer_navigation_state.OrientationState.md)

  ↳ [`TrackableRelativeDisplayScales`](neuroglancer_navigation_state.TrackableRelativeDisplayScales.md)

  ↳ [`WatchableDisplayDimensionRenderInfo`](neuroglancer_navigation_state.WatchableDisplayDimensionRenderInfo.md)

  ↳ [`TrackableDisplayDimensions`](neuroglancer_navigation_state.TrackableDisplayDimensions.md)

  ↳ [`DisplayPose`](neuroglancer_navigation_state.DisplayPose.md)

  ↳ [`TrackableDepthRange`](neuroglancer_navigation_state.TrackableDepthRange.md)

  ↳ [`NavigationState`](neuroglancer_navigation_state.NavigationState.md)

  ↳ [`Overlay`](neuroglancer_overlay.Overlay.md)

  ↳ [`ClientStateSynchronizer`](neuroglancer_python_integration_api.ClientStateSynchronizer.md)

  ↳ [`ClientStateReceiver`](neuroglancer_python_integration_api.ClientStateReceiver.md)

  ↳ [`PrefetchManager`](neuroglancer_python_integration_prefetch.PrefetchManager.md)

  ↳ [`RemoteActionHandler`](neuroglancer_python_integration_remote_actions.RemoteActionHandler.md)

  ↳ [`TrackableBasedStatusMessages`](neuroglancer_python_integration_remote_status_messages.TrackableBasedStatusMessages.md)

  ↳ [`ScreenshotHandler`](neuroglancer_python_integration_screenshots.ScreenshotHandler.md)

  ↳ [`RenderLayerBackendAttachment`](neuroglancer_render_layer_backend.RenderLayerBackendAttachment.md)

  ↳ [`RenderLayer`](neuroglancer_renderlayer.RenderLayer.md)

  ↳ [`DerivedProjectionParameters`](neuroglancer_renderlayer.DerivedProjectionParameters.md)

  ↳ [`SegmentSelectionState`](neuroglancer_segmentation_display_state_frontend.SegmentSelectionState.md)

  ↳ [`SegmentationGraphSourceConnection`](neuroglancer_segmentation_graph_source.SegmentationGraphSourceConnection.md)

  ↳ [`SegmentationUserLayerGroupState`](neuroglancer_segmentation_user_layer.SegmentationUserLayerGroupState.md)

  ↳ [`SegmentationUserLayerColorGroupState`](neuroglancer_segmentation_user_layer.SegmentationUserLayerColorGroupState.md)

  ↳ [`StateLoader`](neuroglancer_services_state_loader.StateLoader.md)

  ↳ [`SkeletonLayer`](neuroglancer_skeleton_frontend.SkeletonLayer.md)

  ↳ [`CompressedSegmentationChunkFormatHandler`](neuroglancer_sliceview_compressed_segmentation_chunk_format.CompressedSegmentationChunkFormatHandler.md)

  ↳ [`SliceViewRenderHelper`](neuroglancer_sliceview_frontend.SliceViewRenderHelper.md)

  ↳ [`SingleTextureChunkFormat`](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md)

  ↳ [`UncompressedChunkFormatHandler`](neuroglancer_sliceview_uncompressed_chunk_format.UncompressedChunkFormatHandler.md)

  ↳ [`TrackableBooleanCheckbox`](neuroglancer_trackable_boolean.TrackableBooleanCheckbox.md)

  ↳ [`ElementVisibilityFromTrackableBoolean`](neuroglancer_trackable_boolean.ElementVisibilityFromTrackableBoolean.md)

  ↳ [`CachedWatchableValue`](neuroglancer_trackable_value.CachedWatchableValue.md)

  ↳ [`AggregateWatchableValue`](neuroglancer_trackable_value.AggregateWatchableValue.md)

  ↳ [`ComputedWatchableValue`](neuroglancer_trackable_value.ComputedWatchableValue.md)

  ↳ [`WatchableRefCounted`](neuroglancer_trackable_value.WatchableRefCounted.md)

  ↳ [`MergedAnnotationStates`](neuroglancer_ui_annotations.MergedAnnotationStates.md)

  ↳ [`ContextMenu`](neuroglancer_ui_context_menu.ContextMenu.md)

  ↳ [`DragResizablePanel`](neuroglancer_ui_drag_resize.DragResizablePanel.md)

  ↳ [`LayerBar`](neuroglancer_ui_layer_bar.LayerBar.md)

  ↳ [`MessagesView`](neuroglancer_ui_layer_data_sources_tab.MessagesView.md)

  ↳ [`DataSourceSubsourceView`](neuroglancer_ui_layer_data_sources_tab.DataSourceSubsourceView.md)

  ↳ [`LoadedDataSourceView`](neuroglancer_ui_layer_data_sources_tab.LoadedDataSourceView.md)

  ↳ [`DataSourceView`](neuroglancer_ui_layer_data_sources_tab.DataSourceView.md)

  ↳ [`LayerArchiveCountWidget`](neuroglancer_ui_layer_list_panel.LayerArchiveCountWidget.md)

  ↳ [`LayerNameWidget`](neuroglancer_ui_layer_side_panel.LayerNameWidget.md)

  ↳ [`LayerTypeWidget`](neuroglancer_ui_layer_side_panel.LayerTypeWidget.md)

  ↳ [`LayerSidePanelManager`](neuroglancer_ui_layer_side_panel.LayerSidePanelManager.md)

  ↳ [`UserLayerSidePanelState`](neuroglancer_ui_layer_side_panel_state.UserLayerSidePanelState.md)

  ↳ [`SidePanel`](neuroglancer_ui_side_panel.SidePanel.md)

  ↳ [`SidePanelManager`](neuroglancer_ui_side_panel.SidePanelManager.md)

  ↳ [`ToolActivation`](neuroglancer_ui_tool.ToolActivation.md)

  ↳ [`Tool`](neuroglancer_ui_tool.Tool.md)

  ↳ [`LegacyTool`](neuroglancer_ui_tool.LegacyTool.md)

  ↳ [`SelectedLegacyTool`](neuroglancer_ui_tool.SelectedLegacyTool.md)

  ↳ [`ToolBinder`](neuroglancer_ui_tool.ToolBinder.md)

  ↳ [`ToolBindingWidget`](neuroglancer_ui_tool.ToolBindingWidget.md)

  ↳ [`UrlHashBinding`](neuroglancer_ui_url_hash_binding.UrlHashBinding.md)

  ↳ [`AutomaticallyFocusedElement`](neuroglancer_util_automatic_focus.AutomaticallyFocusedElement.md)

  ↳ [`RefCountedValue`](neuroglancer_util_disposable.RefCountedValue.md)

  ↳ [`KeyboardEventBinder`](neuroglancer_util_keyboard_bindings.KeyboardEventBinder.md)

  ↳ [`MouseEventBinder`](neuroglancer_util_mouse_bindings.MouseEventBinder.md)

  ↳ [`TouchEventBinder`](neuroglancer_util_touch_bindings.TouchEventBinder.md)

  ↳ [`CompoundTrackable`](neuroglancer_util_trackable.CompoundTrackable.md)

  ↳ [`WatchableMap`](neuroglancer_util_watchable_map.WatchableMap.md)

  ↳ [`DataManagementContext`](neuroglancer_viewer.DataManagementContext.md)

  ↳ [`Viewer`](neuroglancer_viewer.Viewer.md)

  ↳ [`HistogramSpecifications`](neuroglancer_webgl_empirical_cdf.HistogramSpecifications.md)

  ↳ [`TextureHistogramGenerator`](neuroglancer_webgl_empirical_cdf.TextureHistogramGenerator.md)

  ↳ [`CountingBuffer`](neuroglancer_webgl_index_emulation.CountingBuffer.md)

  ↳ [`SizeManaged`](neuroglancer_webgl_offscreen.SizeManaged.md)

  ↳ [`Framebuffer`](neuroglancer_webgl_offscreen.Framebuffer.md)

  ↳ [`FramebufferConfiguration`](neuroglancer_webgl_offscreen.FramebufferConfiguration.md)

  ↳ [`OffscreenCopyHelper`](neuroglancer_webgl_offscreen.OffscreenCopyHelper.md)

  ↳ [`ShaderProgram`](neuroglancer_webgl_shader.ShaderProgram.md)

  ↳ [`FragmentShaderTester`](neuroglancer_webgl_shader_testing.FragmentShaderTester.md)

  ↳ [`ShaderControlState`](neuroglancer_webgl_shader_ui_controls.ShaderControlState.md)

  ↳ [`SphereRenderHelper`](neuroglancer_webgl_spheres.SphereRenderHelper.md)

  ↳ [`VertexIdHelper`](neuroglancer_webgl_vertex_id.VertexIdHelper.md)

  ↳ [`AnnotationToolStatusWidget`](neuroglancer_widget_annotation_tool_status.AnnotationToolStatusWidget.md)

  ↳ [`ChannelDimensionsWidget`](neuroglancer_widget_channel_dimensions_widget.ChannelDimensionsWidget.md)

  ↳ [`CheckboxIcon`](neuroglancer_widget_checkbox_icon.CheckboxIcon.md)

  ↳ [`ColorWidget`](neuroglancer_widget_color.ColorWidget.md)

  ↳ [`AnnotationColorWidget`](neuroglancer_widget_color.AnnotationColorWidget.md)

  ↳ [`CoordinateSpaceTransformWidget`](neuroglancer_widget_coordinate_transform.CoordinateSpaceTransformWidget.md)

  ↳ [`DependentViewContext`](neuroglancer_widget_dependent_view_widget.DependentViewContext.md)

  ↳ [`DependentViewWidget`](neuroglancer_widget_dependent_view_widget.DependentViewWidget.md)

  ↳ [`DisplayDimensionsWidget`](neuroglancer_widget_display_dimensions_widget.DisplayDimensionsWidget.md)

  ↳ [`EnumSelectWidget`](neuroglancer_widget_enum_widget.EnumSelectWidget.md)

  ↳ [`FetchAnnotationWidget`](neuroglancer_widget_fetch_annotation.FetchAnnotationWidget.md)

  ↳ [`FetchTransformationWidget`](neuroglancer_widget_fetch_transformation.FetchTransformationWidget.md)

  ↳ [`CdfController`](neuroglancer_widget_invlerp.CdfController.md)

  ↳ [`LayerReferenceWidget`](neuroglancer_widget_layer_reference.LayerReferenceWidget.md)

  ↳ [`LinkedLayerGroupWidget`](neuroglancer_widget_linked_layer.LinkedLayerGroupWidget.md)

  ↳ [`AutocompleteTextInput`](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md)

  ↳ [`NumberInputWidget`](neuroglancer_widget_number_input_widget.NumberInputWidget.md)

  ↳ [`PositionWidget`](neuroglancer_widget_position_widget.PositionWidget.md)

  ↳ [`MousePositionWidget`](neuroglancer_widget_position_widget.MousePositionWidget.md)

  ↳ [`RangeWidget`](neuroglancer_widget_range.RangeWidget.md)

  ↳ [`RenderScaleWidget`](neuroglancer_widget_render_scale_widget.RenderScaleWidget.md)

  ↳ [`SaveAnnotationWidget`](neuroglancer_widget_save_annotation.SaveAnnotationWidget.md)

  ↳ [`ScaleBarTexture`](neuroglancer_widget_scale_bar.ScaleBarTexture.md)

  ↳ [`MultipleScaleBarTextures`](neuroglancer_widget_scale_bar.MultipleScaleBarTextures.md)

  ↳ [`ShaderCodeWidget`](neuroglancer_widget_shader_code_widget.ShaderCodeWidget.md)

  ↳ [`Tab`](neuroglancer_widget_tab_view.Tab.md)

  ↳ [`OptionSpecification`](neuroglancer_widget_tab_view.OptionSpecification.md)

  ↳ [`StackView`](neuroglancer_widget_tab_view.StackView.md)

  ↳ [`TabView`](neuroglancer_widget_tab_view.TabView.md)

  ↳ [`TextInputWidget`](neuroglancer_widget_text_input.TextInputWidget.md)

  ↳ [`Tooltip`](neuroglancer_widget_tooltip.Tooltip.md)

  ↳ [`Vec3Widget`](neuroglancer_widget_vec3_entry_widget.Vec3Widget.md)

  ↳ [`VirtualList`](neuroglancer_widget_virtual_list.VirtualList.md)

  ↳ [`SharedObject`](neuroglancer_worker_rpc.SharedObject.md)

  ↳ [`CachedLazyDerivedWatchableValue`](neuroglancer_annotation_annotation_layer_state._internal_.CachedLazyDerivedWatchableValue.md)

  ↳ [`LinkedSegmentationLayers`](neuroglancer_annotation_user_layer._internal_.LinkedSegmentationLayers.md)

  ↳ [`AvailableCapacity`](neuroglancer_chunk_manager_backend._internal_.AvailableCapacity.md)

  ↳ [`LayoutComponent`](../interfaces/neuroglancer_layer_groups_layout._internal_.LayoutComponent.md)

  ↳ [`TrackableZoom`](neuroglancer_navigation_state._internal_.TrackableZoom.md)

  ↳ [`LinkableState`](../interfaces/neuroglancer_navigation_state._internal_.LinkableState.md)

  ↳ [`RenderHelper`](neuroglancer_skeleton_frontend._internal_.RenderHelper.md)

  ↳ [`TextureLayout`](neuroglancer_sliceview_compressed_segmentation_chunk_format._internal_.TextureLayout.md)

  ↳ [`TextureLayout`](neuroglancer_sliceview_uncompressed_chunk_format._internal_.TextureLayout.md)

  ↳ [`DerivedWatchableValue`](neuroglancer_trackable_value._internal_.DerivedWatchableValue.md)

  ↳ [`LayerWidget`](neuroglancer_ui_layer_bar._internal_.LayerWidget.md)

  ↳ [`LayerListItem`](neuroglancer_ui_layer_list_panel._internal_.LayerListItem.md)

## Implements

- [`Disposable`](../interfaces/neuroglancer_util_disposable.Disposable.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

### Properties

- [disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)
- [disposers](neuroglancer_util_disposable.RefCounted.md#disposers)
- [refCount](neuroglancer_util_disposable.RefCounted.md#refcount)
- [wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

### Methods

- [addRef](neuroglancer_util_disposable.RefCounted.md#addref)
- [dispose](neuroglancer_util_disposable.RefCounted.md#dispose)
- [disposed](neuroglancer_util_disposable.RefCounted.md#disposed)
- [refCountReachedZero](neuroglancer_util_disposable.RefCounted.md#refcountreachedzero)
- [registerCancellable](neuroglancer_util_disposable.RefCounted.md#registercancellable)
- [registerDisposer](neuroglancer_util_disposable.RefCounted.md#registerdisposer)
- [registerEventListener](neuroglancer_util_disposable.RefCounted.md#registereventlistener)
- [unregisterDisposer](neuroglancer_util_disposable.RefCounted.md#unregisterdisposer)

## Constructors

### constructor

• **new RefCounted**()

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### disposers

• `Private` **disposers**: [`Disposer`](../modules/neuroglancer_util_disposable.md#disposer)[]

#### Defined in

[src/neuroglancer/util/disposable.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L47)

___

### refCount

• **refCount**: `number` = `1`

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

#### Returns

[`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Implementation of

Disposable.dispose

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L75)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L66)

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

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L100)

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

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L76)

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

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L95)

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

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L85)
