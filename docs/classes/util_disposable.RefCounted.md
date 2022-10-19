[neuroglancer](../README.md) / [Modules](../modules.md) / [util/disposable](../modules/util_disposable.md) / RefCounted

# Class: RefCounted

[util/disposable](../modules/util_disposable.md).RefCounted

## Hierarchy

- **`RefCounted`**

  ↳ [`AnnotationDisplayState`](annotation_annotation_layer_state.AnnotationDisplayState.md)

  ↳ [`AnnotationLayerState`](annotation_annotation_layer_state.AnnotationLayerState.md)

  ↳ [`AnnotationReference`](annotation.AnnotationReference.md)

  ↳ [`AnnotationSource`](annotation.AnnotationSource.md)

  ↳ [`AnnotationLayer`](annotation_renderlayer.AnnotationLayer.md)

  ↳ [`AnnotationRenderHelper`](annotation_type_handler.AnnotationRenderHelper.md)

  ↳ [`CredentialsProvider`](credentials_provider.CredentialsProvider.md)

  ↳ [`CachingCredentialsManager`](credentials_provider.CachingCredentialsManager.md)

  ↳ [`DataSourceProvider`](datasource.DataSourceProvider.md)

  ↳ [`DataSourceProviderRegistry`](datasource.DataSourceProviderRegistry.md)

  ↳ [`StateShare`](datasource_state_share.StateShare.md)

  ↳ [`GPUHashTable`](gpu_hash_shader.GPUHashTable.md)

  ↳ [`ClientStateSynchronizer`](python_integration_api.ClientStateSynchronizer.md)

  ↳ [`ClientStateReceiver`](python_integration_api.ClientStateReceiver.md)

  ↳ [`PrefetchManager`](python_integration_prefetch.PrefetchManager.md)

  ↳ [`RemoteActionHandler`](python_integration_remote_actions.RemoteActionHandler.md)

  ↳ [`TrackableBasedStatusMessages`](python_integration_remote_status_messages.TrackableBasedStatusMessages.md)

  ↳ [`ScreenshotHandler`](python_integration_screenshots.ScreenshotHandler.md)

  ↳ [`SegmentSelectionState`](segmentation_display_state_frontend.SegmentSelectionState.md)

  ↳ [`SegmentationGraphSourceConnection`](segmentation_graph_source.SegmentationGraphSourceConnection.md)

  ↳ [`StateLoader`](services_state_loader.StateLoader.md)

  ↳ [`SkeletonLayer`](skeleton_frontend.SkeletonLayer.md)

  ↳ [`SliceViewRenderHelper`](sliceview_frontend.SliceViewRenderHelper.md)

  ↳ [`SingleTextureChunkFormat`](sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md)

  ↳ [`UncompressedChunkFormatHandler`](sliceview_uncompressed_chunk_format.UncompressedChunkFormatHandler.md)

  ↳ [`MergedAnnotationStates`](ui_annotations.MergedAnnotationStates.md)

  ↳ [`ContextMenu`](ui_context_menu.ContextMenu.md)

  ↳ [`DragResizablePanel`](ui_drag_resize.DragResizablePanel.md)

  ↳ [`LayerBar`](ui_layer_bar.LayerBar.md)

  ↳ [`MessagesView`](ui_layer_data_sources_tab.MessagesView.md)

  ↳ [`DataSourceSubsourceView`](ui_layer_data_sources_tab.DataSourceSubsourceView.md)

  ↳ [`LoadedDataSourceView`](ui_layer_data_sources_tab.LoadedDataSourceView.md)

  ↳ [`DataSourceView`](ui_layer_data_sources_tab.DataSourceView.md)

  ↳ [`LayerArchiveCountWidget`](ui_layer_list_panel.LayerArchiveCountWidget.md)

  ↳ [`LayerNameWidget`](ui_layer_side_panel.LayerNameWidget.md)

  ↳ [`LayerTypeWidget`](ui_layer_side_panel.LayerTypeWidget.md)

  ↳ [`LayerSidePanelManager`](ui_layer_side_panel.LayerSidePanelManager.md)

  ↳ [`UserLayerSidePanelState`](ui_layer_side_panel_state.UserLayerSidePanelState.md)

  ↳ [`SidePanel`](ui_side_panel.SidePanel.md)

  ↳ [`SidePanelManager`](ui_side_panel.SidePanelManager.md)

  ↳ [`ToolActivation`](ui_tool.ToolActivation.md)

  ↳ [`Tool`](ui_tool.Tool.md)

  ↳ [`LegacyTool`](ui_tool.LegacyTool.md)

  ↳ [`SelectedLegacyTool`](ui_tool.SelectedLegacyTool.md)

  ↳ [`ToolBinder`](ui_tool.ToolBinder.md)

  ↳ [`ToolBindingWidget`](ui_tool.ToolBindingWidget.md)

  ↳ [`UrlHashBinding`](ui_url_hash_binding.UrlHashBinding.md)

  ↳ [`AutomaticallyFocusedElement`](util_automatic_focus.AutomaticallyFocusedElement.md)

  ↳ [`RefCountedValue`](util_disposable.RefCountedValue.md)

  ↳ [`KeyboardEventBinder`](util_keyboard_bindings.KeyboardEventBinder.md)

  ↳ [`MouseEventBinder`](util_mouse_bindings.MouseEventBinder.md)

  ↳ [`TouchEventBinder`](util_touch_bindings.TouchEventBinder.md)

  ↳ [`CompoundTrackable`](util_trackable.CompoundTrackable.md)

  ↳ [`WatchableMap`](util_watchable_map.WatchableMap.md)

  ↳ [`HistogramSpecifications`](webgl_empirical_cdf.HistogramSpecifications.md)

  ↳ [`TextureHistogramGenerator`](webgl_empirical_cdf.TextureHistogramGenerator.md)

  ↳ [`CountingBuffer`](webgl_index_emulation.CountingBuffer.md)

  ↳ [`SizeManaged`](webgl_offscreen.SizeManaged.md)

  ↳ [`Framebuffer`](webgl_offscreen.Framebuffer.md)

  ↳ [`FramebufferConfiguration`](webgl_offscreen.FramebufferConfiguration.md)

  ↳ [`OffscreenCopyHelper`](webgl_offscreen.OffscreenCopyHelper.md)

  ↳ [`ShaderProgram`](webgl_shader.ShaderProgram.md)

  ↳ [`FragmentShaderTester`](webgl_shader_testing.FragmentShaderTester.md)

  ↳ [`ShaderControlState`](webgl_shader_ui_controls.ShaderControlState.md)

  ↳ [`SphereRenderHelper`](webgl_spheres.SphereRenderHelper.md)

  ↳ [`VertexIdHelper`](webgl_vertex_id.VertexIdHelper.md)

  ↳ [`AnnotationToolStatusWidget`](widget_annotation_tool_status.AnnotationToolStatusWidget.md)

  ↳ [`ChannelDimensionsWidget`](widget_channel_dimensions_widget.ChannelDimensionsWidget.md)

  ↳ [`CheckboxIcon`](widget_checkbox_icon.CheckboxIcon.md)

  ↳ [`ColorWidget`](widget_color.ColorWidget.md)

  ↳ [`AnnotationColorWidget`](widget_color.AnnotationColorWidget.md)

  ↳ [`CoordinateSpaceTransformWidget`](widget_coordinate_transform.CoordinateSpaceTransformWidget.md)

  ↳ [`DependentViewContext`](widget_dependent_view_widget.DependentViewContext.md)

  ↳ [`DependentViewWidget`](widget_dependent_view_widget.DependentViewWidget.md)

  ↳ [`DisplayDimensionsWidget`](widget_display_dimensions_widget.DisplayDimensionsWidget.md)

  ↳ [`EnumSelectWidget`](widget_enum_widget.EnumSelectWidget.md)

  ↳ [`FetchAnnotationWidget`](widget_fetch_annotation.FetchAnnotationWidget.md)

  ↳ [`FetchTransformationWidget`](widget_fetch_transformation.FetchTransformationWidget.md)

  ↳ [`CdfController`](widget_invlerp.CdfController.md)

  ↳ [`LayerReferenceWidget`](widget_layer_reference.LayerReferenceWidget.md)

  ↳ [`LinkedLayerGroupWidget`](widget_linked_layer.LinkedLayerGroupWidget.md)

  ↳ [`AutocompleteTextInput`](widget_multiline_autocomplete.AutocompleteTextInput.md)

  ↳ [`NumberInputWidget`](widget_number_input_widget.NumberInputWidget.md)

  ↳ [`PositionWidget`](widget_position_widget.PositionWidget.md)

  ↳ [`MousePositionWidget`](widget_position_widget.MousePositionWidget.md)

  ↳ [`RangeWidget`](widget_range.RangeWidget.md)

  ↳ [`RenderScaleWidget`](widget_render_scale_widget.RenderScaleWidget.md)

  ↳ [`SaveAnnotationWidget`](widget_save_annotation.SaveAnnotationWidget.md)

  ↳ [`ScaleBarTexture`](widget_scale_bar.ScaleBarTexture.md)

  ↳ [`MultipleScaleBarTextures`](widget_scale_bar.MultipleScaleBarTextures.md)

  ↳ [`ShaderCodeWidget`](widget_shader_code_widget.ShaderCodeWidget.md)

  ↳ [`Tab`](widget_tab_view.Tab.md)

  ↳ [`OptionSpecification`](widget_tab_view.OptionSpecification.md)

  ↳ [`StackView`](widget_tab_view.StackView.md)

  ↳ [`TabView`](widget_tab_view.TabView.md)

  ↳ [`TextInputWidget`](widget_text_input.TextInputWidget.md)

  ↳ [`Tooltip`](widget_tooltip.Tooltip.md)

  ↳ [`Vec3Widget`](widget_vec3_entry_widget.Vec3Widget.md)

  ↳ [`VirtualList`](widget_virtual_list.VirtualList.md)

  ↳ [`CachedLazyDerivedWatchableValue`](annotation_annotation_layer_state._internal_.CachedLazyDerivedWatchableValue.md)

  ↳ [`LayerDataSource`](annotation_annotation_layer_state._internal_.LayerDataSource.md)

  ↳ [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)

  ↳ [`LoadedLayerDataSource`](annotation_annotation_layer_state._internal_.LoadedLayerDataSource.md)

  ↳ [`RenderLayer`](annotation_annotation_layer_state._internal_.RenderLayer.md)

  ↳ [`ManagedUserLayer`](annotation_annotation_layer_state._internal_.ManagedUserLayer.md)

  ↳ [`Position`](annotation_annotation_layer_state._internal_.Position.md)

  ↳ [`LayerListSpecification`](annotation_annotation_layer_state._internal_.LayerListSpecification.md)

  ↳ [`LayerManager`](annotation_annotation_layer_state._internal_.LayerManager.md)

  ↳ [`LayerSelectedValues`](annotation_annotation_layer_state._internal_.LayerSelectedValues.md)

  ↳ [`CachedWatchableValue`](annotation_annotation_layer_state._internal_.CachedWatchableValue.md)

  ↳ [`DisplayContext`](annotation_annotation_layer_state._internal_.DisplayContext.md)

  ↳ [`TrackableDataSelectionState`](annotation_annotation_layer_state._internal_.TrackableDataSelectionState.md)

  ↳ [`SelectedLayerState`](annotation_annotation_layer_state._internal_.SelectedLayerState.md)

  ↳ [`SharedObject`](annotation_annotation_layer_state._internal_.SharedObject.md)

  ↳ [`RenderedPanel`](annotation_annotation_layer_state._internal_.RenderedPanel.md)

  ↳ [`NavigationState`](annotation_polygon._internal_.NavigationState.md)

  ↳ [`DisplayPose`](annotation_polygon._internal_.DisplayPose.md)

  ↳ [`TrackableDepthRange`](annotation_polygon._internal_.TrackableDepthRange.md)

  ↳ [`TrackableDisplayDimensions`](annotation_polygon._internal_.TrackableDisplayDimensions.md)

  ↳ [`TrackableRelativeDisplayScales`](annotation_polygon._internal_.TrackableRelativeDisplayScales.md)

  ↳ [`WatchableDisplayDimensionRenderInfo`](annotation_polygon._internal_.WatchableDisplayDimensionRenderInfo.md)

  ↳ [`TrackableZoom`](annotation_polygon._internal_.TrackableZoom.md)

  ↳ [`OrientationState`](annotation_polygon._internal_.OrientationState.md)

  ↳ [`VisibleLayerInfo`](annotation_renderlayer._internal_.VisibleLayerInfo.md)

  ↳ [`LinkedSegmentationLayers`](annotation_user_layer._internal_.LinkedSegmentationLayers.md)

  ↳ [`LayerReference`](annotation_user_layer._internal_.LayerReference.md)

  ↳ [`AvailableCapacity`](chunk_manager_backend._internal_.AvailableCapacity.md)

  ↳ [`Viewer`](datasource_state_share._internal_.Viewer.md)

  ↳ [`RootLayoutContainer`](datasource_state_share._internal_.RootLayoutContainer.md)

  ↳ [`DataManagementContext`](datasource_state_share._internal_.DataManagementContext.md)

  ↳ [`DerivedWatchableValue`](datasource_state_share._internal_.DerivedWatchableValue.md)

  ↳ [`LayoutComponentContainer`](datasource_state_share._internal_.LayoutComponentContainer.md)

  ↳ [`LayoutComponent`](../interfaces/datasource_state_share._internal_.LayoutComponent.md)

  ↳ [`StackLayoutComponent`](datasource_state_share._internal_.StackLayoutComponent.md)

  ↳ [`RenderLayerBackendAttachment`](mesh_backend._internal_.RenderLayerBackendAttachment.md)

  ↳ [`DerivedProjectionParameters`](perspective_view_panel._internal_.DerivedProjectionParameters.md)

  ↳ [`VisibleRenderLayerTracker`](perspective_view_panel._internal_.VisibleRenderLayerTracker.md)

  ↳ [`AxesLineHelper`](perspective_view_panel._internal_.AxesLineHelper.md)

  ↳ [`LinkedLayerGroup`](segmentation_display_state_frontend._internal_.LinkedLayerGroup.md)

  ↳ [`SegmentationUserLayerGroupState`](segmentation_display_state_frontend._internal_.SegmentationUserLayerGroupState.md)

  ↳ [`SegmentationUserLayerColorGroupState`](segmentation_display_state_frontend._internal_.SegmentationUserLayerColorGroupState.md)

  ↳ [`RenderHelper`](skeleton_frontend._internal_.RenderHelper.md)

  ↳ [`TextureLayout`](sliceview_uncompressed_chunk_format._internal_.TextureLayout.md)

  ↳ [`Overlay`](ui_cell_session._internal_.Overlay.md)

  ↳ [`LayerWidget`](ui_layer_bar._internal_.LayerWidget.md)

  ↳ [`LinkedViewerNavigationState`](ui_layer_bar._internal_.LinkedViewerNavigationState.md)

  ↳ [`LinkableState`](../interfaces/ui_layer_bar._internal_.LinkableState.md)

  ↳ [`LayerListItem`](ui_layer_list_panel._internal_.LayerListItem.md)

  ↳ [`TrackableBooleanCheckbox`](widget_layer_control_checkbox._internal_.TrackableBooleanCheckbox.md)

## Implements

- [`Disposable`](../interfaces/util_disposable.Disposable.md)

## Table of contents

### Constructors

- [constructor](util_disposable.RefCounted.md#constructor)

### Properties

- [disposedStacks](util_disposable.RefCounted.md#disposedstacks)
- [disposers](util_disposable.RefCounted.md#disposers)
- [refCount](util_disposable.RefCounted.md#refcount)
- [wasDisposed](util_disposable.RefCounted.md#wasdisposed)

### Methods

- [addRef](util_disposable.RefCounted.md#addref)
- [dispose](util_disposable.RefCounted.md#dispose)
- [disposed](util_disposable.RefCounted.md#disposed)
- [refCountReachedZero](util_disposable.RefCounted.md#refcountreachedzero)
- [registerCancellable](util_disposable.RefCounted.md#registercancellable)
- [registerDisposer](util_disposable.RefCounted.md#registerdisposer)
- [registerEventListener](util_disposable.RefCounted.md#registereventlistener)
- [unregisterDisposer](util_disposable.RefCounted.md#unregisterdisposer)

## Constructors

### constructor

• **new RefCounted**()

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### disposers

• `Private` **disposers**: [`Disposer`](../modules/util_disposable.md#disposer)[]

#### Defined in

[src/neuroglancer/util/disposable.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L47)

___

### refCount

• **refCount**: `number` = `1`

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`RefCounted`](util_disposable.RefCounted.md)

#### Returns

[`RefCounted`](util_disposable.RefCounted.md)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Implementation of

[Disposable](../interfaces/util_disposable.Disposable.md).[dispose](../interfaces/util_disposable.Disposable.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L75)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

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

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L95)

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

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)
