[neuroglancer](../README.md) / [Modules](../modules.md) / [perspective\_view/panel](../modules/perspective_view_panel.md) / PerspectivePanel

# Class: PerspectivePanel

[perspective_view/panel](../modules/perspective_view_panel.md).PerspectivePanel

## Hierarchy

- [`RenderedDataPanel`](perspective_view_panel._internal_.RenderedDataPanel.md)

  ↳ **`PerspectivePanel`**

## Table of contents

### Constructors

- [constructor](perspective_view_panel.PerspectivePanel.md#constructor)

### Properties

- [axesLineHelper](perspective_view_panel.PerspectivePanel.md#axeslinehelper)
- [boundsGeneration](perspective_view_panel.PerspectivePanel.md#boundsgeneration)
- [canvasRelativeClippedLeft](perspective_view_panel.PerspectivePanel.md#canvasrelativeclippedleft)
- [canvasRelativeClippedTop](perspective_view_panel.PerspectivePanel.md#canvasrelativeclippedtop)
- [canvasRelativeLogicalLeft](perspective_view_panel.PerspectivePanel.md#canvasrelativelogicalleft)
- [canvasRelativeLogicalTop](perspective_view_panel.PerspectivePanel.md#canvasrelativelogicaltop)
- [context](perspective_view_panel.PerspectivePanel.md#context)
- [disposedStacks](perspective_view_panel.PerspectivePanel.md#disposedstacks)
- [element](perspective_view_panel.PerspectivePanel.md#element)
- [gl](perspective_view_panel.PerspectivePanel.md#gl)
- [inputEventMap](perspective_view_panel.PerspectivePanel.md#inputeventmap)
- [mouseX](perspective_view_panel.PerspectivePanel.md#mousex)
- [mouseY](perspective_view_panel.PerspectivePanel.md#mousey)
- [offscreenCopyHelper](perspective_view_panel.PerspectivePanel.md#offscreencopyhelper)
- [offscreenFramebuffer](perspective_view_panel.PerspectivePanel.md#offscreenframebuffer)
- [pickBufferContents](perspective_view_panel.PerspectivePanel.md#pickbuffercontents)
- [pickRequestPending](perspective_view_panel.PerspectivePanel.md#pickrequestpending)
- [pickRequests](perspective_view_panel.PerspectivePanel.md#pickrequests)
- [pickingData](perspective_view_panel.PerspectivePanel.md#pickingdata)
- [projectionParameters](perspective_view_panel.PerspectivePanel.md#projectionparameters)
- [refCount](perspective_view_panel.PerspectivePanel.md#refcount)
- [renderViewport](perspective_view_panel.PerspectivePanel.md#renderviewport)
- [scaleBars](perspective_view_panel.PerspectivePanel.md#scalebars)
- [sharedObject](perspective_view_panel.PerspectivePanel.md#sharedobject)
- [sliceViewRenderHelper](perspective_view_panel.PerspectivePanel.md#sliceviewrenderhelper)
- [sliceViews](perspective_view_panel.PerspectivePanel.md#sliceviews)
- [transparencyCopyHelper](perspective_view_panel.PerspectivePanel.md#transparencycopyhelper)
- [transparentConfiguration\_](perspective_view_panel.PerspectivePanel.md#transparentconfiguration_)
- [viewer](perspective_view_panel.PerspectivePanel.md#viewer)
- [visibility](perspective_view_panel.PerspectivePanel.md#visibility)
- [visibleLayerTracker](perspective_view_panel.PerspectivePanel.md#visiblelayertracker)
- [wasDisposed](perspective_view_panel.PerspectivePanel.md#wasdisposed)

### Accessors

- [displayDimensionRenderInfo](perspective_view_panel.PerspectivePanel.md#displaydimensionrenderinfo)
- [drawOrder](perspective_view_panel.PerspectivePanel.md#draworder)
- [navigationState](perspective_view_panel.PerspectivePanel.md#navigationstate)
- [rpc](perspective_view_panel.PerspectivePanel.md#rpc)
- [rpcId](perspective_view_panel.PerspectivePanel.md#rpcid)
- [shouldDraw](perspective_view_panel.PerspectivePanel.md#shoulddraw)
- [transparentConfiguration](perspective_view_panel.PerspectivePanel.md#transparentconfiguration)
- [visible](perspective_view_panel.PerspectivePanel.md#visible)

### Methods

- [addRef](perspective_view_panel.PerspectivePanel.md#addref)
- [completePickRequest](perspective_view_panel.PerspectivePanel.md#completepickrequest)
- [dispose](perspective_view_panel.PerspectivePanel.md#dispose)
- [disposed](perspective_view_panel.PerspectivePanel.md#disposed)
- [draw](perspective_view_panel.PerspectivePanel.md#draw)
- [drawAxisLines](perspective_view_panel.PerspectivePanel.md#drawaxislines)
- [drawSliceViews](perspective_view_panel.PerspectivePanel.md#drawsliceviews)
- [drawWithPicking](perspective_view_panel.PerspectivePanel.md#drawwithpicking)
- [ensureBoundsUpdated](perspective_view_panel.PerspectivePanel.md#ensureboundsupdated)
- [flushBackendProjectionParameters](perspective_view_panel.PerspectivePanel.md#flushbackendprojectionparameters)
- [getDepthArray](perspective_view_panel.PerspectivePanel.md#getdeptharray)
- [handleMouseMove](perspective_view_panel.PerspectivePanel.md#handlemousemove)
- [isReady](perspective_view_panel.PerspectivePanel.md#isready)
- [issuePickRequest](perspective_view_panel.PerspectivePanel.md#issuepickrequest)
- [onMousemove](perspective_view_panel.PerspectivePanel.md#onmousemove)
- [onMouseout](perspective_view_panel.PerspectivePanel.md#onmouseout)
- [onTouchstart](perspective_view_panel.PerspectivePanel.md#ontouchstart)
- [refCountReachedZero](perspective_view_panel.PerspectivePanel.md#refcountreachedzero)
- [registerCancellable](perspective_view_panel.PerspectivePanel.md#registercancellable)
- [registerDisposer](perspective_view_panel.PerspectivePanel.md#registerdisposer)
- [registerEventListener](perspective_view_panel.PerspectivePanel.md#registereventlistener)
- [scheduleRedraw](perspective_view_panel.PerspectivePanel.md#scheduleredraw)
- [setGLClippedViewport](perspective_view_panel.PerspectivePanel.md#setglclippedviewport)
- [setGLLogicalViewport](perspective_view_panel.PerspectivePanel.md#setgllogicalviewport)
- [translateByViewportPixels](perspective_view_panel.PerspectivePanel.md#translatebyviewportpixels)
- [translateDataPointByViewportPixels](perspective_view_panel.PerspectivePanel.md#translatedatapointbyviewportpixels)
- [unregisterDisposer](perspective_view_panel.PerspectivePanel.md#unregisterdisposer)
- [zoomByMouse](perspective_view_panel.PerspectivePanel.md#zoombymouse)

## Constructors

### constructor

• **new PerspectivePanel**(`context`, `element`, `viewer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`DisplayContext`](annotation_annotation_layer_state._internal_.DisplayContext.md) |
| `element` | [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement) |
| `viewer` | [`PerspectiveViewerState`](../interfaces/perspective_view_panel.PerspectiveViewerState.md) |

#### Overrides

[RenderedDataPanel](perspective_view_panel._internal_.RenderedDataPanel.md).[constructor](perspective_view_panel._internal_.RenderedDataPanel.md#constructor)

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:202](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/perspective_view/panel.ts#L202)

## Properties

### axesLineHelper

• `Private` **axesLineHelper**: [`AxesLineHelper`](perspective_view_panel._internal_.AxesLineHelper.md)

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/perspective_view/panel.ts#L169)

___

### boundsGeneration

• **boundsGeneration**: `number` = `-1`

#### Inherited from

[RenderedDataPanel](perspective_view_panel._internal_.RenderedDataPanel.md).[boundsGeneration](perspective_view_panel._internal_.RenderedDataPanel.md#boundsgeneration)

#### Defined in

[src/neuroglancer/display_context.ts:84](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L84)

___

### canvasRelativeClippedLeft

• **canvasRelativeClippedLeft**: `number` = `0`

#### Inherited from

[RenderedDataPanel](perspective_view_panel._internal_.RenderedDataPanel.md).[canvasRelativeClippedLeft](perspective_view_panel._internal_.RenderedDataPanel.md#canvasrelativeclippedleft)

#### Defined in

[src/neuroglancer/display_context.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L87)

___

### canvasRelativeClippedTop

• **canvasRelativeClippedTop**: `number` = `0`

#### Inherited from

[RenderedDataPanel](perspective_view_panel._internal_.RenderedDataPanel.md).[canvasRelativeClippedTop](perspective_view_panel._internal_.RenderedDataPanel.md#canvasrelativeclippedtop)

#### Defined in

[src/neuroglancer/display_context.ts:90](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L90)

___

### canvasRelativeLogicalLeft

• **canvasRelativeLogicalLeft**: `number` = `0`

#### Inherited from

[RenderedDataPanel](perspective_view_panel._internal_.RenderedDataPanel.md).[canvasRelativeLogicalLeft](perspective_view_panel._internal_.RenderedDataPanel.md#canvasrelativelogicalleft)

#### Defined in

[src/neuroglancer/display_context.ts:92](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L92)

___

### canvasRelativeLogicalTop

• **canvasRelativeLogicalTop**: `number` = `0`

#### Inherited from

[RenderedDataPanel](perspective_view_panel._internal_.RenderedDataPanel.md).[canvasRelativeLogicalTop](perspective_view_panel._internal_.RenderedDataPanel.md#canvasrelativelogicaltop)

#### Defined in

[src/neuroglancer/display_context.ts:93](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L93)

___

### context

• **context**: [`DisplayContext`](annotation_annotation_layer_state._internal_.DisplayContext.md)

#### Inherited from

[RenderedDataPanel](perspective_view_panel._internal_.RenderedDataPanel.md).[context](perspective_view_panel._internal_.RenderedDataPanel.md#context)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RenderedDataPanel](perspective_view_panel._internal_.RenderedDataPanel.md).[disposedStacks](perspective_view_panel._internal_.RenderedDataPanel.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement)

#### Inherited from

[RenderedDataPanel](perspective_view_panel._internal_.RenderedDataPanel.md).[element](perspective_view_panel._internal_.RenderedDataPanel.md#element)

___

### gl

• **gl**: [`GL`](../interfaces/webgl_context.GL.md)

#### Inherited from

[RenderedDataPanel](perspective_view_panel._internal_.RenderedDataPanel.md).[gl](perspective_view_panel._internal_.RenderedDataPanel.md#gl)

#### Defined in

[src/neuroglancer/display_context.ts:81](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L81)

___

### inputEventMap

• **inputEventMap**: [`EventActionMap`](util_event_action_map.EventActionMap.md)

#### Inherited from

[RenderedDataPanel](perspective_view_panel._internal_.RenderedDataPanel.md).[inputEventMap](perspective_view_panel._internal_.RenderedDataPanel.md#inputeventmap)

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:150](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/rendered_data_panel.ts#L150)

___

### mouseX

• **mouseX**: `number` = `-1`

Current mouse position within the viewport, or -1 if the mouse is not in the viewport.

#### Inherited from

[RenderedDataPanel](perspective_view_panel._internal_.RenderedDataPanel.md).[mouseX](perspective_view_panel._internal_.RenderedDataPanel.md#mousex)

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:134](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/rendered_data_panel.ts#L134)

___

### mouseY

• **mouseY**: `number` = `-1`

#### Inherited from

[RenderedDataPanel](perspective_view_panel._internal_.RenderedDataPanel.md).[mouseY](perspective_view_panel._internal_.RenderedDataPanel.md#mousey)

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:135](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/rendered_data_panel.ts#L135)

___

### offscreenCopyHelper

• `Protected` **offscreenCopyHelper**: [`OffscreenCopyHelper`](webgl_offscreen.OffscreenCopyHelper.md)

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:190](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/perspective_view/panel.ts#L190)

___

### offscreenFramebuffer

• `Protected` **offscreenFramebuffer**: [`FramebufferConfiguration`](webgl_offscreen.FramebufferConfiguration.md)<[`TextureBuffer`](webgl_offscreen.TextureBuffer.md), [`DepthStencilRenderbuffer`](webgl_offscreen.DepthStencilRenderbuffer.md)\>

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/perspective_view/panel.ts#L173)

___

### pickBufferContents

• **pickBufferContents**: `Float32Array`

#### Inherited from

[RenderedDataPanel](perspective_view_panel._internal_.RenderedDataPanel.md).[pickBufferContents](perspective_view_panel._internal_.RenderedDataPanel.md#pickbuffercontents)

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:156](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/rendered_data_panel.ts#L156)

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

[RenderedDataPanel](perspective_view_panel._internal_.RenderedDataPanel.md).[pickRequestPending](perspective_view_panel._internal_.RenderedDataPanel.md#pickrequestpending)

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:146](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/rendered_data_panel.ts#L146)

___

### pickRequests

• **pickRequests**: [`PickRequest`](perspective_view_panel._internal_.PickRequest.md)[]

#### Inherited from

[RenderedDataPanel](perspective_view_panel._internal_.RenderedDataPanel.md).[pickRequests](perspective_view_panel._internal_.RenderedDataPanel.md#pickrequests)

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:155](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/rendered_data_panel.ts#L155)

___

### pickingData

• **pickingData**: [`FramePickingData`](perspective_view_panel._internal_.FramePickingData.md)[]

#### Inherited from

[RenderedDataPanel](perspective_view_panel._internal_.RenderedDataPanel.md).[pickingData](perspective_view_panel._internal_.RenderedDataPanel.md#pickingdata)

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:154](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/rendered_data_panel.ts#L154)

___

### projectionParameters

• **projectionParameters**: [`DerivedProjectionParameters`](perspective_view_panel._internal_.DerivedProjectionParameters.md)<[`ProjectionParameters`](annotation_base._internal_.ProjectionParameters.md)\>

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:144](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/perspective_view/panel.ts#L144)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RenderedDataPanel](perspective_view_panel._internal_.RenderedDataPanel.md).[refCount](perspective_view_panel._internal_.RenderedDataPanel.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### renderViewport

• **renderViewport**: [`RenderViewport`](annotation_annotation_layer_state._internal_.RenderViewport.md)

#### Inherited from

[RenderedDataPanel](perspective_view_panel._internal_.RenderedDataPanel.md).[renderViewport](perspective_view_panel._internal_.RenderedDataPanel.md#renderviewport)

#### Defined in

[src/neuroglancer/display_context.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L95)

___

### scaleBars

• `Private` **scaleBars**: [`MultipleScaleBarTextures`](widget_scale_bar.MultipleScaleBarTextures.md)

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:196](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/perspective_view/panel.ts#L196)

___

### sharedObject

• `Private` **sharedObject**: [`PerspectiveViewState`](perspective_view_panel._internal_.PerspectiveViewState.md)

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:194](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/perspective_view/panel.ts#L194)

___

### sliceViewRenderHelper

• **sliceViewRenderHelper**: [`SliceViewRenderHelper`](sliceview_frontend.SliceViewRenderHelper.md)

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/perspective_view/panel.ts#L170)

___

### sliceViews

• **sliceViews**: [`WatchableMap`](util_watchable_map.WatchableMap.md)<[`SliceView`](sliceview_frontend.SliceView.md), `boolean`\>

If boolean value is true, sliceView is shown unconditionally, regardless of the value of
this.viewer.showSliceViews.value.

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:163](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/perspective_view/panel.ts#L163)

___

### transparencyCopyHelper

• `Protected` **transparencyCopyHelper**: [`OffscreenCopyHelper`](webgl_offscreen.OffscreenCopyHelper.md)

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:191](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/perspective_view/panel.ts#L191)

___

### transparentConfiguration\_

• `Protected` **transparentConfiguration\_**: `undefined` \| [`FramebufferConfiguration`](webgl_offscreen.FramebufferConfiguration.md)<[`TextureBuffer`](webgl_offscreen.TextureBuffer.md), [`DepthRenderbuffer`](webgl_offscreen.DepthRenderbuffer.md) \| [`DepthTextureBuffer`](webgl_offscreen.DepthTextureBuffer.md)\>

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:188](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/perspective_view/panel.ts#L188)

___

### viewer

• **viewer**: [`PerspectiveViewerState`](../interfaces/perspective_view_panel.PerspectiveViewerState.md)

#### Overrides

[RenderedDataPanel](perspective_view_panel._internal_.RenderedDataPanel.md).[viewer](perspective_view_panel._internal_.RenderedDataPanel.md#viewer)

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:142](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/perspective_view/panel.ts#L142)

___

### visibility

• **visibility**: [`WatchableVisibilityPriority`](visibility_priority_frontend.WatchableVisibilityPriority.md)

#### Inherited from

[RenderedDataPanel](perspective_view_panel._internal_.RenderedDataPanel.md).[visibility](perspective_view_panel._internal_.RenderedDataPanel.md#visibility)

___

### visibleLayerTracker

• `Protected` **visibleLayerTracker**: [`VisibleRenderLayerTracker`](perspective_view_panel._internal_.VisibleRenderLayerTracker.md)<[`PerspectivePanel`](perspective_view_panel.PerspectivePanel.md), [`PerspectiveViewRenderLayer`](perspective_view_render_layer.PerspectiveViewRenderLayer.md)<`unknown`\>\>

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:146](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/perspective_view/panel.ts#L146)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RenderedDataPanel](perspective_view_panel._internal_.RenderedDataPanel.md).[wasDisposed](perspective_view_panel._internal_.RenderedDataPanel.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### displayDimensionRenderInfo

• `get` **displayDimensionRenderInfo**(): [`WatchableDisplayDimensionRenderInfo`](annotation_polygon._internal_.WatchableDisplayDimensionRenderInfo.md)

#### Returns

[`WatchableDisplayDimensionRenderInfo`](annotation_polygon._internal_.WatchableDisplayDimensionRenderInfo.md)

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:155](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/perspective_view/panel.ts#L155)

___

### drawOrder

• `get` **drawOrder**(): `number`

#### Returns

`number`

#### Inherited from

RenderedDataPanel.drawOrder

#### Defined in

[src/neuroglancer/display_context.ts:233](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L233)

___

### navigationState

• `get` **navigationState**(): [`NavigationState`](annotation_polygon._internal_.NavigationState.md)<[`TrackableZoomInterface`](../modules/annotation_polygon._internal_.md#trackablezoominterface)\>

#### Returns

[`NavigationState`](annotation_polygon._internal_.NavigationState.md)<[`TrackableZoomInterface`](../modules/annotation_polygon._internal_.md#trackablezoominterface)\>

#### Overrides

RenderedDataPanel.navigationState

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:305](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/perspective_view/panel.ts#L305)

___

### rpc

• `get` **rpc**(): [`RPC`](annotation_annotation_layer_state._internal_.RPC.md)

#### Returns

[`RPC`](annotation_annotation_layer_state._internal_.RPC.md)

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:149](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/perspective_view/panel.ts#L149)

___

### rpcId

• `get` **rpcId**(): `number`

#### Returns

`number`

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:152](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/perspective_view/panel.ts#L152)

___

### shouldDraw

• `get` **shouldDraw**(): `boolean`

#### Returns

`boolean`

#### Inherited from

RenderedDataPanel.shouldDraw

#### Defined in

[src/neuroglancer/display_context.ts:218](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L218)

___

### transparentConfiguration

• `Private` `get` **transparentConfiguration**(): [`FramebufferConfiguration`](webgl_offscreen.FramebufferConfiguration.md)<[`TextureBuffer`](webgl_offscreen.TextureBuffer.md), [`DepthRenderbuffer`](webgl_offscreen.DepthRenderbuffer.md) \| [`DepthTextureBuffer`](webgl_offscreen.DepthTextureBuffer.md)\>

#### Returns

[`FramebufferConfiguration`](webgl_offscreen.FramebufferConfiguration.md)<[`TextureBuffer`](webgl_offscreen.TextureBuffer.md), [`DepthRenderbuffer`](webgl_offscreen.DepthRenderbuffer.md) \| [`DepthTextureBuffer`](webgl_offscreen.DepthTextureBuffer.md)\>

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:435](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/perspective_view/panel.ts#L435)

___

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

RenderedDataPanel.visible

#### Defined in

[src/neuroglancer/display_context.ts:210](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L210)

## Methods

### addRef

▸ **addRef**(): [`PerspectivePanel`](perspective_view_panel.PerspectivePanel.md)

#### Returns

[`PerspectivePanel`](perspective_view_panel.PerspectivePanel.md)

#### Inherited from

[RenderedDataPanel](perspective_view_panel._internal_.RenderedDataPanel.md).[addRef](perspective_view_panel._internal_.RenderedDataPanel.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### completePickRequest

▸ **completePickRequest**(`glWindowX`, `glWindowY`, `data`, `pickingData`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `glWindowX` | `number` |
| `glWindowY` | `number` |
| `data` | `Float32Array` |
| `pickingData` | [`FramePickingData`](perspective_view_panel._internal_.FramePickingData.md) |

#### Returns

`void`

#### Overrides

[RenderedDataPanel](perspective_view_panel._internal_.RenderedDataPanel.md).[completePickRequest](perspective_view_panel._internal_.RenderedDataPanel.md#completepickrequest)

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:381](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/perspective_view/panel.ts#L381)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RenderedDataPanel](perspective_view_panel._internal_.RenderedDataPanel.md).[dispose](perspective_view_panel._internal_.RenderedDataPanel.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

[RenderedDataPanel](perspective_view_panel._internal_.RenderedDataPanel.md).[disposed](perspective_view_panel._internal_.RenderedDataPanel.md#disposed)

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:344](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/perspective_view/panel.ts#L344)

___

### draw

▸ **draw**(): `void`

#### Returns

`void`

#### Inherited from

[RenderedDataPanel](perspective_view_panel._internal_.RenderedDataPanel.md).[draw](perspective_view_panel._internal_.RenderedDataPanel.md#draw)

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:294](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/rendered_data_panel.ts#L294)

___

### drawAxisLines

▸ `Protected` **drawAxisLines**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:731](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/perspective_view/panel.ts#L731)

___

### drawSliceViews

▸ `Protected` **drawSliceViews**(`renderContext`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderContext` | [`PerspectiveViewRenderContext`](../interfaces/perspective_view_render_layer.PerspectiveViewRenderContext.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:687](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/perspective_view/panel.ts#L687)

___

### drawWithPicking

▸ **drawWithPicking**(`pickingData`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pickingData` | [`FramePickingData`](perspective_view_panel._internal_.FramePickingData.md) |

#### Returns

`boolean`

#### Overrides

[RenderedDataPanel](perspective_view_panel._internal_.RenderedDataPanel.md).[drawWithPicking](perspective_view_panel._internal_.RenderedDataPanel.md#drawwithpicking)

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:448](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/perspective_view/panel.ts#L448)

___

### ensureBoundsUpdated

▸ **ensureBoundsUpdated**(): `void`

#### Returns

`void`

#### Overrides

[RenderedDataPanel](perspective_view_panel._internal_.RenderedDataPanel.md).[ensureBoundsUpdated](perspective_view_panel._internal_.RenderedDataPanel.md#ensureboundsupdated)

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:309](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/perspective_view/panel.ts#L309)

___

### flushBackendProjectionParameters

▸ **flushBackendProjectionParameters**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:198](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/perspective_view/panel.ts#L198)

___

### getDepthArray

▸ **getDepthArray**(): `undefined` \| `Float32Array`

#### Returns

`undefined` \| `Float32Array`

#### Overrides

[RenderedDataPanel](perspective_view_panel._internal_.RenderedDataPanel.md).[getDepthArray](perspective_view_panel._internal_.RenderedDataPanel.md#getdeptharray)

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:349](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/perspective_view/panel.ts#L349)

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

[RenderedDataPanel](perspective_view_panel._internal_.RenderedDataPanel.md).[handleMouseMove](perspective_view_panel._internal_.RenderedDataPanel.md#handlemousemove)

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:889](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/rendered_data_panel.ts#L889)

___

### isReady

▸ **isReady**(): `boolean`

#### Returns

`boolean`

#### Overrides

[RenderedDataPanel](perspective_view_panel._internal_.RenderedDataPanel.md).[isReady](perspective_view_panel._internal_.RenderedDataPanel.md#isready)

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:314](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/perspective_view/panel.ts#L314)

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

[RenderedDataPanel](perspective_view_panel._internal_.RenderedDataPanel.md).[issuePickRequest](perspective_view_panel._internal_.RenderedDataPanel.md#issuepickrequest)

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:371](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/perspective_view/panel.ts#L371)

___

### onMousemove

▸ **onMousemove**(`event`, `atOnly?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `event` | [`MouseEvent`](../modules/annotation_annotation_layer_state._internal_.md#mouseevent) | `undefined` |
| `atOnly` | `boolean` | `true` |

#### Returns

`void`

#### Inherited from

[RenderedDataPanel](perspective_view_panel._internal_.RenderedDataPanel.md).[onMousemove](perspective_view_panel._internal_.RenderedDataPanel.md#onmousemove)

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:901](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/rendered_data_panel.ts#L901)

___

### onMouseout

▸ **onMouseout**(): `void`

#### Returns

`void`

#### Inherited from

[RenderedDataPanel](perspective_view_panel._internal_.RenderedDataPanel.md).[onMouseout](perspective_view_panel._internal_.RenderedDataPanel.md#onmouseout)

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:882](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/rendered_data_panel.ts#L882)

___

### onTouchstart

▸ **onTouchstart**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`TouchEvent`](../modules/annotation_annotation_layer_state._internal_.md#touchevent) |

#### Returns

`void`

#### Inherited from

[RenderedDataPanel](perspective_view_panel._internal_.RenderedDataPanel.md).[onTouchstart](perspective_view_panel._internal_.RenderedDataPanel.md#ontouchstart)

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:909](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/rendered_data_panel.ts#L909)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RenderedDataPanel](perspective_view_panel._internal_.RenderedDataPanel.md).[refCountReachedZero](perspective_view_panel._internal_.RenderedDataPanel.md#refcountreachedzero)

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

[RenderedDataPanel](perspective_view_panel._internal_.RenderedDataPanel.md).[registerCancellable](perspective_view_panel._internal_.RenderedDataPanel.md#registercancellable)

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

[RenderedDataPanel](perspective_view_panel._internal_.RenderedDataPanel.md).[registerDisposer](perspective_view_panel._internal_.RenderedDataPanel.md#registerdisposer)

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

[RenderedDataPanel](perspective_view_panel._internal_.RenderedDataPanel.md).[registerEventListener](perspective_view_panel._internal_.RenderedDataPanel.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L95)

___

### scheduleRedraw

▸ **scheduleRedraw**(): `void`

#### Returns

`void`

#### Inherited from

[RenderedDataPanel](perspective_view_panel._internal_.RenderedDataPanel.md).[scheduleRedraw](perspective_view_panel._internal_.RenderedDataPanel.md#scheduleredraw)

#### Defined in

[src/neuroglancer/display_context.ts:107](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L107)

___

### setGLClippedViewport

▸ **setGLClippedViewport**(): `void`

#### Returns

`void`

#### Inherited from

[RenderedDataPanel](perspective_view_panel._internal_.RenderedDataPanel.md).[setGLClippedViewport](perspective_view_panel._internal_.RenderedDataPanel.md#setglclippedviewport)

#### Defined in

[src/neuroglancer/display_context.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L175)

___

### setGLLogicalViewport

▸ **setGLLogicalViewport**(): `void`

#### Returns

`void`

#### Inherited from

[RenderedDataPanel](perspective_view_panel._internal_.RenderedDataPanel.md).[setGLLogicalViewport](perspective_view_panel._internal_.RenderedDataPanel.md#setgllogicalviewport)

#### Defined in

[src/neuroglancer/display_context.ts:187](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L187)

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

[RenderedDataPanel](perspective_view_panel._internal_.RenderedDataPanel.md).[translateByViewportPixels](perspective_view_panel._internal_.RenderedDataPanel.md#translatebyviewportpixels)

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:292](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/perspective_view/panel.ts#L292)

___

### translateDataPointByViewportPixels

▸ **translateDataPointByViewportPixels**(`out`, `orig`, `deltaX`, `deltaY`): [`vec3`](util_geom.vec3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `out` | [`vec3`](util_geom.vec3.md) |
| `orig` | [`vec3`](util_geom.vec3.md) |
| `deltaX` | `number` |
| `deltaY` | `number` |

#### Returns

[`vec3`](util_geom.vec3.md)

#### Overrides

[RenderedDataPanel](perspective_view_panel._internal_.RenderedDataPanel.md).[translateDataPointByViewportPixels](perspective_view_panel._internal_.RenderedDataPanel.md#translatedatapointbyviewportpixels)

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:425](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/perspective_view/panel.ts#L425)

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

[RenderedDataPanel](perspective_view_panel._internal_.RenderedDataPanel.md).[unregisterDisposer](perspective_view_panel._internal_.RenderedDataPanel.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)

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

[RenderedDataPanel](perspective_view_panel._internal_.RenderedDataPanel.md).[zoomByMouse](perspective_view_panel._internal_.RenderedDataPanel.md#zoombymouse)

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:746](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/perspective_view/panel.ts#L746)
