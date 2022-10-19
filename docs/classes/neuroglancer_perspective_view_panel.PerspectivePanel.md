[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/perspective\_view/panel](../modules/neuroglancer_perspective_view_panel.md) / PerspectivePanel

# Class: PerspectivePanel

[neuroglancer/perspective_view/panel](../modules/neuroglancer_perspective_view_panel.md).PerspectivePanel

## Hierarchy

- [`RenderedDataPanel`](neuroglancer_rendered_data_panel.RenderedDataPanel.md)

  ↳ **`PerspectivePanel`**

## Table of contents

### Constructors

- [constructor](neuroglancer_perspective_view_panel.PerspectivePanel.md#constructor)

### Properties

- [axesLineHelper](neuroglancer_perspective_view_panel.PerspectivePanel.md#axeslinehelper)
- [boundsGeneration](neuroglancer_perspective_view_panel.PerspectivePanel.md#boundsgeneration)
- [canvasRelativeClippedLeft](neuroglancer_perspective_view_panel.PerspectivePanel.md#canvasrelativeclippedleft)
- [canvasRelativeClippedTop](neuroglancer_perspective_view_panel.PerspectivePanel.md#canvasrelativeclippedtop)
- [canvasRelativeLogicalLeft](neuroglancer_perspective_view_panel.PerspectivePanel.md#canvasrelativelogicalleft)
- [canvasRelativeLogicalTop](neuroglancer_perspective_view_panel.PerspectivePanel.md#canvasrelativelogicaltop)
- [context](neuroglancer_perspective_view_panel.PerspectivePanel.md#context)
- [disposedStacks](neuroglancer_perspective_view_panel.PerspectivePanel.md#disposedstacks)
- [element](neuroglancer_perspective_view_panel.PerspectivePanel.md#element)
- [gl](neuroglancer_perspective_view_panel.PerspectivePanel.md#gl)
- [inputEventMap](neuroglancer_perspective_view_panel.PerspectivePanel.md#inputeventmap)
- [mouseX](neuroglancer_perspective_view_panel.PerspectivePanel.md#mousex)
- [mouseY](neuroglancer_perspective_view_panel.PerspectivePanel.md#mousey)
- [offscreenCopyHelper](neuroglancer_perspective_view_panel.PerspectivePanel.md#offscreencopyhelper)
- [offscreenFramebuffer](neuroglancer_perspective_view_panel.PerspectivePanel.md#offscreenframebuffer)
- [pickBufferContents](neuroglancer_perspective_view_panel.PerspectivePanel.md#pickbuffercontents)
- [pickRequestPending](neuroglancer_perspective_view_panel.PerspectivePanel.md#pickrequestpending)
- [pickRequests](neuroglancer_perspective_view_panel.PerspectivePanel.md#pickrequests)
- [pickingData](neuroglancer_perspective_view_panel.PerspectivePanel.md#pickingdata)
- [projectionParameters](neuroglancer_perspective_view_panel.PerspectivePanel.md#projectionparameters)
- [refCount](neuroglancer_perspective_view_panel.PerspectivePanel.md#refcount)
- [renderViewport](neuroglancer_perspective_view_panel.PerspectivePanel.md#renderviewport)
- [scaleBars](neuroglancer_perspective_view_panel.PerspectivePanel.md#scalebars)
- [sharedObject](neuroglancer_perspective_view_panel.PerspectivePanel.md#sharedobject)
- [sliceViewRenderHelper](neuroglancer_perspective_view_panel.PerspectivePanel.md#sliceviewrenderhelper)
- [sliceViews](neuroglancer_perspective_view_panel.PerspectivePanel.md#sliceviews)
- [transparencyCopyHelper](neuroglancer_perspective_view_panel.PerspectivePanel.md#transparencycopyhelper)
- [transparentConfiguration\_](neuroglancer_perspective_view_panel.PerspectivePanel.md#transparentconfiguration_)
- [viewer](neuroglancer_perspective_view_panel.PerspectivePanel.md#viewer)
- [visibility](neuroglancer_perspective_view_panel.PerspectivePanel.md#visibility)
- [visibleLayerTracker](neuroglancer_perspective_view_panel.PerspectivePanel.md#visiblelayertracker)
- [wasDisposed](neuroglancer_perspective_view_panel.PerspectivePanel.md#wasdisposed)

### Accessors

- [displayDimensionRenderInfo](neuroglancer_perspective_view_panel.PerspectivePanel.md#displaydimensionrenderinfo)
- [drawOrder](neuroglancer_perspective_view_panel.PerspectivePanel.md#draworder)
- [navigationState](neuroglancer_perspective_view_panel.PerspectivePanel.md#navigationstate)
- [rpc](neuroglancer_perspective_view_panel.PerspectivePanel.md#rpc)
- [rpcId](neuroglancer_perspective_view_panel.PerspectivePanel.md#rpcid)
- [shouldDraw](neuroglancer_perspective_view_panel.PerspectivePanel.md#shoulddraw)
- [transparentConfiguration](neuroglancer_perspective_view_panel.PerspectivePanel.md#transparentconfiguration)
- [visible](neuroglancer_perspective_view_panel.PerspectivePanel.md#visible)

### Methods

- [addRef](neuroglancer_perspective_view_panel.PerspectivePanel.md#addref)
- [completePickRequest](neuroglancer_perspective_view_panel.PerspectivePanel.md#completepickrequest)
- [dispose](neuroglancer_perspective_view_panel.PerspectivePanel.md#dispose)
- [disposed](neuroglancer_perspective_view_panel.PerspectivePanel.md#disposed)
- [draw](neuroglancer_perspective_view_panel.PerspectivePanel.md#draw)
- [drawAxisLines](neuroglancer_perspective_view_panel.PerspectivePanel.md#drawaxislines)
- [drawSliceViews](neuroglancer_perspective_view_panel.PerspectivePanel.md#drawsliceviews)
- [drawWithPicking](neuroglancer_perspective_view_panel.PerspectivePanel.md#drawwithpicking)
- [ensureBoundsUpdated](neuroglancer_perspective_view_panel.PerspectivePanel.md#ensureboundsupdated)
- [flushBackendProjectionParameters](neuroglancer_perspective_view_panel.PerspectivePanel.md#flushbackendprojectionparameters)
- [getDepthArray](neuroglancer_perspective_view_panel.PerspectivePanel.md#getdeptharray)
- [handleMouseMove](neuroglancer_perspective_view_panel.PerspectivePanel.md#handlemousemove)
- [isReady](neuroglancer_perspective_view_panel.PerspectivePanel.md#isready)
- [issuePickRequest](neuroglancer_perspective_view_panel.PerspectivePanel.md#issuepickrequest)
- [onMousemove](neuroglancer_perspective_view_panel.PerspectivePanel.md#onmousemove)
- [onMouseout](neuroglancer_perspective_view_panel.PerspectivePanel.md#onmouseout)
- [onTouchstart](neuroglancer_perspective_view_panel.PerspectivePanel.md#ontouchstart)
- [refCountReachedZero](neuroglancer_perspective_view_panel.PerspectivePanel.md#refcountreachedzero)
- [registerCancellable](neuroglancer_perspective_view_panel.PerspectivePanel.md#registercancellable)
- [registerDisposer](neuroglancer_perspective_view_panel.PerspectivePanel.md#registerdisposer)
- [registerEventListener](neuroglancer_perspective_view_panel.PerspectivePanel.md#registereventlistener)
- [scheduleRedraw](neuroglancer_perspective_view_panel.PerspectivePanel.md#scheduleredraw)
- [setGLClippedViewport](neuroglancer_perspective_view_panel.PerspectivePanel.md#setglclippedviewport)
- [setGLLogicalViewport](neuroglancer_perspective_view_panel.PerspectivePanel.md#setgllogicalviewport)
- [translateByViewportPixels](neuroglancer_perspective_view_panel.PerspectivePanel.md#translatebyviewportpixels)
- [translateDataPointByViewportPixels](neuroglancer_perspective_view_panel.PerspectivePanel.md#translatedatapointbyviewportpixels)
- [unregisterDisposer](neuroglancer_perspective_view_panel.PerspectivePanel.md#unregisterdisposer)
- [zoomByMouse](neuroglancer_perspective_view_panel.PerspectivePanel.md#zoombymouse)

## Constructors

### constructor

• **new PerspectivePanel**(`context`, `element`, `viewer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`DisplayContext`](neuroglancer_display_context.DisplayContext.md) |
| `element` | [`HTMLElement`](../modules/main_module._internal_.md#htmlelement) |
| `viewer` | [`PerspectiveViewerState`](../interfaces/neuroglancer_perspective_view_panel.PerspectiveViewerState.md) |

#### Overrides

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[constructor](neuroglancer_rendered_data_panel.RenderedDataPanel.md#constructor)

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:202](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/perspective_view/panel.ts#L202)

## Properties

### axesLineHelper

• `Private` **axesLineHelper**: [`AxesLineHelper`](neuroglancer_axes_lines.AxesLineHelper.md)

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/perspective_view/panel.ts#L169)

___

### boundsGeneration

• **boundsGeneration**: `number` = `-1`

#### Inherited from

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[boundsGeneration](neuroglancer_rendered_data_panel.RenderedDataPanel.md#boundsgeneration)

#### Defined in

[src/neuroglancer/display_context.ts:84](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/display_context.ts#L84)

___

### canvasRelativeClippedLeft

• **canvasRelativeClippedLeft**: `number` = `0`

#### Inherited from

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[canvasRelativeClippedLeft](neuroglancer_rendered_data_panel.RenderedDataPanel.md#canvasrelativeclippedleft)

#### Defined in

[src/neuroglancer/display_context.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/display_context.ts#L87)

___

### canvasRelativeClippedTop

• **canvasRelativeClippedTop**: `number` = `0`

#### Inherited from

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[canvasRelativeClippedTop](neuroglancer_rendered_data_panel.RenderedDataPanel.md#canvasrelativeclippedtop)

#### Defined in

[src/neuroglancer/display_context.ts:90](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/display_context.ts#L90)

___

### canvasRelativeLogicalLeft

• **canvasRelativeLogicalLeft**: `number` = `0`

#### Inherited from

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[canvasRelativeLogicalLeft](neuroglancer_rendered_data_panel.RenderedDataPanel.md#canvasrelativelogicalleft)

#### Defined in

[src/neuroglancer/display_context.ts:92](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/display_context.ts#L92)

___

### canvasRelativeLogicalTop

• **canvasRelativeLogicalTop**: `number` = `0`

#### Inherited from

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[canvasRelativeLogicalTop](neuroglancer_rendered_data_panel.RenderedDataPanel.md#canvasrelativelogicaltop)

#### Defined in

[src/neuroglancer/display_context.ts:93](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/display_context.ts#L93)

___

### context

• **context**: [`DisplayContext`](neuroglancer_display_context.DisplayContext.md)

#### Inherited from

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[context](neuroglancer_rendered_data_panel.RenderedDataPanel.md#context)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[disposedStacks](neuroglancer_rendered_data_panel.RenderedDataPanel.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)

#### Inherited from

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[element](neuroglancer_rendered_data_panel.RenderedDataPanel.md#element)

___

### gl

• **gl**: [`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

#### Inherited from

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[gl](neuroglancer_rendered_data_panel.RenderedDataPanel.md#gl)

#### Defined in

[src/neuroglancer/display_context.ts:81](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/display_context.ts#L81)

___

### inputEventMap

• **inputEventMap**: [`EventActionMap`](neuroglancer_util_event_action_map.EventActionMap.md)

#### Inherited from

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[inputEventMap](neuroglancer_rendered_data_panel.RenderedDataPanel.md#inputeventmap)

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:150](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/rendered_data_panel.ts#L150)

___

### mouseX

• **mouseX**: `number` = `-1`

Current mouse position within the viewport, or -1 if the mouse is not in the viewport.

#### Inherited from

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[mouseX](neuroglancer_rendered_data_panel.RenderedDataPanel.md#mousex)

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:134](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/rendered_data_panel.ts#L134)

___

### mouseY

• **mouseY**: `number` = `-1`

#### Inherited from

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[mouseY](neuroglancer_rendered_data_panel.RenderedDataPanel.md#mousey)

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:135](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/rendered_data_panel.ts#L135)

___

### offscreenCopyHelper

• `Protected` **offscreenCopyHelper**: [`OffscreenCopyHelper`](neuroglancer_webgl_offscreen.OffscreenCopyHelper.md)

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:190](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/perspective_view/panel.ts#L190)

___

### offscreenFramebuffer

• `Protected` **offscreenFramebuffer**: [`FramebufferConfiguration`](neuroglancer_webgl_offscreen.FramebufferConfiguration.md)<[`TextureBuffer`](neuroglancer_webgl_offscreen.TextureBuffer.md), [`DepthStencilRenderbuffer`](neuroglancer_webgl_offscreen.DepthStencilRenderbuffer.md)\>

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/perspective_view/panel.ts#L173)

___

### pickBufferContents

• **pickBufferContents**: `Float32Array`

#### Inherited from

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[pickBufferContents](neuroglancer_rendered_data_panel.RenderedDataPanel.md#pickbuffercontents)

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:156](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/rendered_data_panel.ts#L156)

___

### pickRequestPending

• **pickRequestPending**: `boolean` = `false`

If `false`, either the mouse is not within the viewport, or a picking request was already
issued for the current mouseX and mouseY after the most recent frame was rendered; when the
current pick requests complete, no additional pick requests will be issued.

If `true`, a picking request was not issued for the current mouseX and mouseY due to all pick
buffers being in use; when a pick buffer becomes available, an additional pick request will be
issued.

#### Inherited from

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[pickRequestPending](neuroglancer_rendered_data_panel.RenderedDataPanel.md#pickrequestpending)

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:146](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/rendered_data_panel.ts#L146)

___

### pickRequests

• **pickRequests**: [`PickRequest`](neuroglancer_rendered_data_panel.PickRequest.md)[]

#### Inherited from

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[pickRequests](neuroglancer_rendered_data_panel.RenderedDataPanel.md#pickrequests)

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:155](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/rendered_data_panel.ts#L155)

___

### pickingData

• **pickingData**: [`FramePickingData`](neuroglancer_rendered_data_panel.FramePickingData.md)[]

#### Inherited from

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[pickingData](neuroglancer_rendered_data_panel.RenderedDataPanel.md#pickingdata)

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:154](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/rendered_data_panel.ts#L154)

___

### projectionParameters

• **projectionParameters**: [`DerivedProjectionParameters`](neuroglancer_renderlayer.DerivedProjectionParameters.md)<[`ProjectionParameters`](neuroglancer_projection_parameters.ProjectionParameters.md)\>

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:144](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/perspective_view/panel.ts#L144)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[refCount](neuroglancer_rendered_data_panel.RenderedDataPanel.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### renderViewport

• **renderViewport**: [`RenderViewport`](neuroglancer_display_context.RenderViewport.md)

#### Inherited from

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[renderViewport](neuroglancer_rendered_data_panel.RenderedDataPanel.md#renderviewport)

#### Defined in

[src/neuroglancer/display_context.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/display_context.ts#L95)

___

### scaleBars

• `Private` **scaleBars**: [`MultipleScaleBarTextures`](neuroglancer_widget_scale_bar.MultipleScaleBarTextures.md)

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:196](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/perspective_view/panel.ts#L196)

___

### sharedObject

• `Private` **sharedObject**: [`PerspectiveViewState`](neuroglancer_perspective_view_panel._internal_.PerspectiveViewState.md)

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:194](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/perspective_view/panel.ts#L194)

___

### sliceViewRenderHelper

• **sliceViewRenderHelper**: [`SliceViewRenderHelper`](neuroglancer_sliceview_frontend.SliceViewRenderHelper.md)

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/perspective_view/panel.ts#L170)

___

### sliceViews

• **sliceViews**: [`WatchableMap`](neuroglancer_util_watchable_map.WatchableMap.md)<[`SliceView`](neuroglancer_sliceview_frontend.SliceView.md), `boolean`\>

If boolean value is true, sliceView is shown unconditionally, regardless of the value of
this.viewer.showSliceViews.value.

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:163](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/perspective_view/panel.ts#L163)

___

### transparencyCopyHelper

• `Protected` **transparencyCopyHelper**: [`OffscreenCopyHelper`](neuroglancer_webgl_offscreen.OffscreenCopyHelper.md)

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:191](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/perspective_view/panel.ts#L191)

___

### transparentConfiguration\_

• `Protected` **transparentConfiguration\_**: `undefined` \| [`FramebufferConfiguration`](neuroglancer_webgl_offscreen.FramebufferConfiguration.md)<[`TextureBuffer`](neuroglancer_webgl_offscreen.TextureBuffer.md), [`DepthRenderbuffer`](neuroglancer_webgl_offscreen.DepthRenderbuffer.md) \| [`DepthTextureBuffer`](neuroglancer_webgl_offscreen.DepthTextureBuffer.md)\>

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:188](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/perspective_view/panel.ts#L188)

___

### viewer

• **viewer**: [`PerspectiveViewerState`](../interfaces/neuroglancer_perspective_view_panel.PerspectiveViewerState.md)

#### Overrides

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[viewer](neuroglancer_rendered_data_panel.RenderedDataPanel.md#viewer)

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:142](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/perspective_view/panel.ts#L142)

___

### visibility

• **visibility**: [`WatchableVisibilityPriority`](neuroglancer_visibility_priority_frontend.WatchableVisibilityPriority.md)

#### Inherited from

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[visibility](neuroglancer_rendered_data_panel.RenderedDataPanel.md#visibility)

___

### visibleLayerTracker

• `Protected` **visibleLayerTracker**: [`VisibleRenderLayerTracker`](neuroglancer_layer.VisibleRenderLayerTracker.md)<[`PerspectivePanel`](neuroglancer_perspective_view_panel.PerspectivePanel.md), [`PerspectiveViewRenderLayer`](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md)<`unknown`\>\>

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:146](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/perspective_view/panel.ts#L146)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[wasDisposed](neuroglancer_rendered_data_panel.RenderedDataPanel.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### displayDimensionRenderInfo

• `get` **displayDimensionRenderInfo**(): [`WatchableDisplayDimensionRenderInfo`](neuroglancer_navigation_state.WatchableDisplayDimensionRenderInfo.md)

#### Returns

[`WatchableDisplayDimensionRenderInfo`](neuroglancer_navigation_state.WatchableDisplayDimensionRenderInfo.md)

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:155](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/perspective_view/panel.ts#L155)

___

### drawOrder

• `get` **drawOrder**(): `number`

#### Returns

`number`

#### Inherited from

RenderedDataPanel.drawOrder

#### Defined in

[src/neuroglancer/display_context.ts:233](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/display_context.ts#L233)

___

### navigationState

• `get` **navigationState**(): [`NavigationState`](neuroglancer_navigation_state.NavigationState.md)<[`TrackableZoomInterface`](../modules/neuroglancer_navigation_state.md#trackablezoominterface)\>

#### Returns

[`NavigationState`](neuroglancer_navigation_state.NavigationState.md)<[`TrackableZoomInterface`](../modules/neuroglancer_navigation_state.md#trackablezoominterface)\>

#### Overrides

RenderedDataPanel.navigationState

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:305](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/perspective_view/panel.ts#L305)

___

### rpc

• `get` **rpc**(): [`RPC`](neuroglancer_worker_rpc.RPC.md)

#### Returns

[`RPC`](neuroglancer_worker_rpc.RPC.md)

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:149](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/perspective_view/panel.ts#L149)

___

### rpcId

• `get` **rpcId**(): `number`

#### Returns

`number`

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:152](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/perspective_view/panel.ts#L152)

___

### shouldDraw

• `get` **shouldDraw**(): `boolean`

#### Returns

`boolean`

#### Inherited from

RenderedDataPanel.shouldDraw

#### Defined in

[src/neuroglancer/display_context.ts:218](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/display_context.ts#L218)

___

### transparentConfiguration

• `Private` `get` **transparentConfiguration**(): [`FramebufferConfiguration`](neuroglancer_webgl_offscreen.FramebufferConfiguration.md)<[`TextureBuffer`](neuroglancer_webgl_offscreen.TextureBuffer.md), [`DepthRenderbuffer`](neuroglancer_webgl_offscreen.DepthRenderbuffer.md) \| [`DepthTextureBuffer`](neuroglancer_webgl_offscreen.DepthTextureBuffer.md)\>

#### Returns

[`FramebufferConfiguration`](neuroglancer_webgl_offscreen.FramebufferConfiguration.md)<[`TextureBuffer`](neuroglancer_webgl_offscreen.TextureBuffer.md), [`DepthRenderbuffer`](neuroglancer_webgl_offscreen.DepthRenderbuffer.md) \| [`DepthTextureBuffer`](neuroglancer_webgl_offscreen.DepthTextureBuffer.md)\>

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:435](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/perspective_view/panel.ts#L435)

___

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

RenderedDataPanel.visible

#### Defined in

[src/neuroglancer/display_context.ts:210](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/display_context.ts#L210)

## Methods

### addRef

▸ **addRef**(): [`PerspectivePanel`](neuroglancer_perspective_view_panel.PerspectivePanel.md)

#### Returns

[`PerspectivePanel`](neuroglancer_perspective_view_panel.PerspectivePanel.md)

#### Inherited from

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[addRef](neuroglancer_rendered_data_panel.RenderedDataPanel.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L48)

___

### completePickRequest

▸ **completePickRequest**(`glWindowX`, `glWindowY`, `data`, `pickingData`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `glWindowX` | `number` |
| `glWindowY` | `number` |
| `data` | `Float32Array` |
| `pickingData` | [`FramePickingData`](neuroglancer_rendered_data_panel.FramePickingData.md) |

#### Returns

`void`

#### Overrides

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[completePickRequest](neuroglancer_rendered_data_panel.RenderedDataPanel.md#completepickrequest)

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:381](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/perspective_view/panel.ts#L381)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[dispose](neuroglancer_rendered_data_panel.RenderedDataPanel.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[disposed](neuroglancer_rendered_data_panel.RenderedDataPanel.md#disposed)

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:344](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/perspective_view/panel.ts#L344)

___

### draw

▸ **draw**(): `void`

#### Returns

`void`

#### Inherited from

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[draw](neuroglancer_rendered_data_panel.RenderedDataPanel.md#draw)

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:294](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/rendered_data_panel.ts#L294)

___

### drawAxisLines

▸ `Protected` **drawAxisLines**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:731](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/perspective_view/panel.ts#L731)

___

### drawSliceViews

▸ `Protected` **drawSliceViews**(`renderContext`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderContext` | [`PerspectiveViewRenderContext`](../interfaces/neuroglancer_perspective_view_render_layer.PerspectiveViewRenderContext.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:687](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/perspective_view/panel.ts#L687)

___

### drawWithPicking

▸ **drawWithPicking**(`pickingData`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pickingData` | [`FramePickingData`](neuroglancer_rendered_data_panel.FramePickingData.md) |

#### Returns

`boolean`

#### Overrides

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[drawWithPicking](neuroglancer_rendered_data_panel.RenderedDataPanel.md#drawwithpicking)

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:448](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/perspective_view/panel.ts#L448)

___

### ensureBoundsUpdated

▸ **ensureBoundsUpdated**(): `void`

#### Returns

`void`

#### Overrides

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[ensureBoundsUpdated](neuroglancer_rendered_data_panel.RenderedDataPanel.md#ensureboundsupdated)

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:309](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/perspective_view/panel.ts#L309)

___

### flushBackendProjectionParameters

▸ **flushBackendProjectionParameters**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:198](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/perspective_view/panel.ts#L198)

___

### getDepthArray

▸ **getDepthArray**(): `undefined` \| `Float32Array`

#### Returns

`undefined` \| `Float32Array`

#### Overrides

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[getDepthArray](neuroglancer_rendered_data_panel.RenderedDataPanel.md#getdeptharray)

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:349](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/perspective_view/panel.ts#L349)

___

### handleMouseMove

▸ **handleMouseMove**(`clientX`, `clientY`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `clientX` | `number` |
| `clientY` | `number` |

#### Returns

`void`

#### Inherited from

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[handleMouseMove](neuroglancer_rendered_data_panel.RenderedDataPanel.md#handlemousemove)

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:889](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/rendered_data_panel.ts#L889)

___

### isReady

▸ **isReady**(): `boolean`

#### Returns

`boolean`

#### Overrides

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[isReady](neuroglancer_rendered_data_panel.RenderedDataPanel.md#isready)

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:314](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/perspective_view/panel.ts#L314)

___

### issuePickRequest

▸ **issuePickRequest**(`glWindowX`, `glWindowY`): `void`

Reads pick data for the current mouse position into the currently-bound pixel pack buffer.

#### Parameters

| Name | Type |
| :------ | :------ |
| `glWindowX` | `number` |
| `glWindowY` | `number` |

#### Returns

`void`

#### Overrides

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[issuePickRequest](neuroglancer_rendered_data_panel.RenderedDataPanel.md#issuepickrequest)

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:371](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/perspective_view/panel.ts#L371)

___

### onMousemove

▸ **onMousemove**(`event`, `atOnly?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `event` | [`MouseEvent`](../modules/main_module._internal_.md#mouseevent) | `undefined` |
| `atOnly` | `boolean` | `true` |

#### Returns

`void`

#### Inherited from

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[onMousemove](neuroglancer_rendered_data_panel.RenderedDataPanel.md#onmousemove)

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:901](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/rendered_data_panel.ts#L901)

___

### onMouseout

▸ **onMouseout**(): `void`

#### Returns

`void`

#### Inherited from

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[onMouseout](neuroglancer_rendered_data_panel.RenderedDataPanel.md#onmouseout)

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:882](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/rendered_data_panel.ts#L882)

___

### onTouchstart

▸ **onTouchstart**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`TouchEvent`](../modules/main_module._internal_.md#touchevent) |

#### Returns

`void`

#### Inherited from

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[onTouchstart](neuroglancer_rendered_data_panel.RenderedDataPanel.md#ontouchstart)

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:909](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/rendered_data_panel.ts#L909)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[refCountReachedZero](neuroglancer_rendered_data_panel.RenderedDataPanel.md#refcountreachedzero)

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

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[registerCancellable](neuroglancer_rendered_data_panel.RenderedDataPanel.md#registercancellable)

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

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[registerDisposer](neuroglancer_rendered_data_panel.RenderedDataPanel.md#registerdisposer)

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

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[registerEventListener](neuroglancer_rendered_data_panel.RenderedDataPanel.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L95)

___

### scheduleRedraw

▸ **scheduleRedraw**(): `void`

#### Returns

`void`

#### Inherited from

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[scheduleRedraw](neuroglancer_rendered_data_panel.RenderedDataPanel.md#scheduleredraw)

#### Defined in

[src/neuroglancer/display_context.ts:107](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/display_context.ts#L107)

___

### setGLClippedViewport

▸ **setGLClippedViewport**(): `void`

#### Returns

`void`

#### Inherited from

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[setGLClippedViewport](neuroglancer_rendered_data_panel.RenderedDataPanel.md#setglclippedviewport)

#### Defined in

[src/neuroglancer/display_context.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/display_context.ts#L175)

___

### setGLLogicalViewport

▸ **setGLLogicalViewport**(): `void`

#### Returns

`void`

#### Inherited from

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[setGLLogicalViewport](neuroglancer_rendered_data_panel.RenderedDataPanel.md#setgllogicalviewport)

#### Defined in

[src/neuroglancer/display_context.ts:187](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/display_context.ts#L187)

___

### translateByViewportPixels

▸ **translateByViewportPixels**(`deltaX`, `deltaY`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `deltaX` | `number` |
| `deltaY` | `number` |

#### Returns

`void`

#### Overrides

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[translateByViewportPixels](neuroglancer_rendered_data_panel.RenderedDataPanel.md#translatebyviewportpixels)

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:292](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/perspective_view/panel.ts#L292)

___

### translateDataPointByViewportPixels

▸ **translateDataPointByViewportPixels**(`out`, `orig`, `deltaX`, `deltaY`): [`vec3`](neuroglancer_util_geom.vec3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `out` | [`vec3`](neuroglancer_util_geom.vec3.md) |
| `orig` | [`vec3`](neuroglancer_util_geom.vec3.md) |
| `deltaX` | `number` |
| `deltaY` | `number` |

#### Returns

[`vec3`](neuroglancer_util_geom.vec3.md)

#### Overrides

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[translateDataPointByViewportPixels](neuroglancer_rendered_data_panel.RenderedDataPanel.md#translatedatapointbyviewportpixels)

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:425](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/perspective_view/panel.ts#L425)

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

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[unregisterDisposer](neuroglancer_rendered_data_panel.RenderedDataPanel.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L85)

___

### zoomByMouse

▸ **zoomByMouse**(`factor`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `factor` | `number` |

#### Returns

`void`

#### Overrides

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[zoomByMouse](neuroglancer_rendered_data_panel.RenderedDataPanel.md#zoombymouse)

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:746](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/perspective_view/panel.ts#L746)
