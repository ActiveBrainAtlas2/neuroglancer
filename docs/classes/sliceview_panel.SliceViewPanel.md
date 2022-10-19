[neuroglancer](../README.md) / [Modules](../modules.md) / [sliceview/panel](../modules/sliceview_panel.md) / SliceViewPanel

# Class: SliceViewPanel

[sliceview/panel](../modules/sliceview_panel.md).SliceViewPanel

## Hierarchy

- [`RenderedDataPanel`](perspective_view_panel._internal_.RenderedDataPanel.md)

  ↳ **`SliceViewPanel`**

## Table of contents

### Constructors

- [constructor](sliceview_panel.SliceViewPanel.md#constructor)

### Properties

- [axesLineHelper](sliceview_panel.SliceViewPanel.md#axeslinehelper)
- [boundsGeneration](sliceview_panel.SliceViewPanel.md#boundsgeneration)
- [canvasRelativeClippedLeft](sliceview_panel.SliceViewPanel.md#canvasrelativeclippedleft)
- [canvasRelativeClippedTop](sliceview_panel.SliceViewPanel.md#canvasrelativeclippedtop)
- [canvasRelativeLogicalLeft](sliceview_panel.SliceViewPanel.md#canvasrelativelogicalleft)
- [canvasRelativeLogicalTop](sliceview_panel.SliceViewPanel.md#canvasrelativelogicaltop)
- [colorFactor](sliceview_panel.SliceViewPanel.md#colorfactor)
- [context](sliceview_panel.SliceViewPanel.md#context)
- [disposedStacks](sliceview_panel.SliceViewPanel.md#disposedstacks)
- [element](sliceview_panel.SliceViewPanel.md#element)
- [gl](sliceview_panel.SliceViewPanel.md#gl)
- [inputEventMap](sliceview_panel.SliceViewPanel.md#inputeventmap)
- [mouseX](sliceview_panel.SliceViewPanel.md#mousex)
- [mouseY](sliceview_panel.SliceViewPanel.md#mousey)
- [offscreenCopyHelper](sliceview_panel.SliceViewPanel.md#offscreencopyhelper)
- [offscreenFramebuffer](sliceview_panel.SliceViewPanel.md#offscreenframebuffer)
- [pickBufferContents](sliceview_panel.SliceViewPanel.md#pickbuffercontents)
- [pickIDs](sliceview_panel.SliceViewPanel.md#pickids)
- [pickRequestPending](sliceview_panel.SliceViewPanel.md#pickrequestpending)
- [pickRequests](sliceview_panel.SliceViewPanel.md#pickrequests)
- [pickingData](sliceview_panel.SliceViewPanel.md#pickingdata)
- [refCount](sliceview_panel.SliceViewPanel.md#refcount)
- [renderViewport](sliceview_panel.SliceViewPanel.md#renderviewport)
- [scaleBars](sliceview_panel.SliceViewPanel.md#scalebars)
- [sliceView](sliceview_panel.SliceViewPanel.md#sliceview)
- [sliceViewRenderHelper](sliceview_panel.SliceViewPanel.md#sliceviewrenderhelper)
- [viewer](sliceview_panel.SliceViewPanel.md#viewer)
- [visibility](sliceview_panel.SliceViewPanel.md#visibility)
- [visibleLayerTracker](sliceview_panel.SliceViewPanel.md#visiblelayertracker)
- [wasDisposed](sliceview_panel.SliceViewPanel.md#wasdisposed)

### Accessors

- [displayDimensionRenderInfo](sliceview_panel.SliceViewPanel.md#displaydimensionrenderinfo)
- [drawOrder](sliceview_panel.SliceViewPanel.md#draworder)
- [navigationState](sliceview_panel.SliceViewPanel.md#navigationstate)
- [rpc](sliceview_panel.SliceViewPanel.md#rpc)
- [rpcId](sliceview_panel.SliceViewPanel.md#rpcid)
- [shouldDraw](sliceview_panel.SliceViewPanel.md#shoulddraw)
- [visible](sliceview_panel.SliceViewPanel.md#visible)

### Methods

- [addRef](sliceview_panel.SliceViewPanel.md#addref)
- [completePickRequest](sliceview_panel.SliceViewPanel.md#completepickrequest)
- [dispose](sliceview_panel.SliceViewPanel.md#dispose)
- [disposed](sliceview_panel.SliceViewPanel.md#disposed)
- [draw](sliceview_panel.SliceViewPanel.md#draw)
- [drawWithPicking](sliceview_panel.SliceViewPanel.md#drawwithpicking)
- [ensureBoundsUpdated](sliceview_panel.SliceViewPanel.md#ensureboundsupdated)
- [flushBackendProjectionParameters](sliceview_panel.SliceViewPanel.md#flushbackendprojectionparameters)
- [getDepthArray](sliceview_panel.SliceViewPanel.md#getdeptharray)
- [handleMouseMove](sliceview_panel.SliceViewPanel.md#handlemousemove)
- [isReady](sliceview_panel.SliceViewPanel.md#isready)
- [issuePickRequest](sliceview_panel.SliceViewPanel.md#issuepickrequest)
- [onMousemove](sliceview_panel.SliceViewPanel.md#onmousemove)
- [onMouseout](sliceview_panel.SliceViewPanel.md#onmouseout)
- [onTouchstart](sliceview_panel.SliceViewPanel.md#ontouchstart)
- [refCountReachedZero](sliceview_panel.SliceViewPanel.md#refcountreachedzero)
- [registerCancellable](sliceview_panel.SliceViewPanel.md#registercancellable)
- [registerDisposer](sliceview_panel.SliceViewPanel.md#registerdisposer)
- [registerEventListener](sliceview_panel.SliceViewPanel.md#registereventlistener)
- [scheduleRedraw](sliceview_panel.SliceViewPanel.md#scheduleredraw)
- [setGLClippedViewport](sliceview_panel.SliceViewPanel.md#setglclippedviewport)
- [setGLLogicalViewport](sliceview_panel.SliceViewPanel.md#setgllogicalviewport)
- [translateByViewportPixels](sliceview_panel.SliceViewPanel.md#translatebyviewportpixels)
- [translateDataPointByViewportPixels](sliceview_panel.SliceViewPanel.md#translatedatapointbyviewportpixels)
- [unregisterDisposer](sliceview_panel.SliceViewPanel.md#unregisterdisposer)
- [zoomByMouse](sliceview_panel.SliceViewPanel.md#zoombymouse)

## Constructors

### constructor

• **new SliceViewPanel**(`context`, `element`, `sliceView`, `viewer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`DisplayContext`](annotation_annotation_layer_state._internal_.DisplayContext.md) |
| `element` | [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement) |
| `sliceView` | [`SliceView`](sliceview_frontend.SliceView.md) |
| `viewer` | [`SliceViewerState`](../interfaces/sliceview_panel.SliceViewerState.md) |

#### Overrides

[RenderedDataPanel](perspective_view_panel._internal_.RenderedDataPanel.md).[constructor](perspective_view_panel._internal_.RenderedDataPanel.md#constructor)

#### Defined in

[src/neuroglancer/sliceview/panel.ts:128](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/panel.ts#L128)

## Properties

### axesLineHelper

• `Private` **axesLineHelper**: [`AxesLineHelper`](perspective_view_panel._internal_.AxesLineHelper.md)

#### Defined in

[src/neuroglancer/sliceview/panel.ts:86](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/panel.ts#L86)

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

### colorFactor

• `Private` **colorFactor**: [`vec4`](util_geom.vec4.md)

#### Defined in

[src/neuroglancer/sliceview/panel.ts:89](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/panel.ts#L89)

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

• `Private` **offscreenCopyHelper**: [`OffscreenCopyHelper`](webgl_offscreen.OffscreenCopyHelper.md)

#### Defined in

[src/neuroglancer/sliceview/panel.ts:121](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/panel.ts#L121)

___

### offscreenFramebuffer

• `Private` **offscreenFramebuffer**: [`FramebufferConfiguration`](webgl_offscreen.FramebufferConfiguration.md)<[`TextureBuffer`](webgl_offscreen.TextureBuffer.md), [`DepthRenderbuffer`](webgl_offscreen.DepthRenderbuffer.md) \| [`DepthTextureBuffer`](webgl_offscreen.DepthTextureBuffer.md)\>

#### Defined in

[src/neuroglancer/sliceview/panel.ts:110](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/panel.ts#L110)

___

### pickBufferContents

• **pickBufferContents**: `Float32Array`

#### Inherited from

[RenderedDataPanel](perspective_view_panel._internal_.RenderedDataPanel.md).[pickBufferContents](perspective_view_panel._internal_.RenderedDataPanel.md#pickbuffercontents)

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:156](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/rendered_data_panel.ts#L156)

___

### pickIDs

• `Private` **pickIDs**: [`PickIDManager`](annotation_renderlayer._internal_.PickIDManager.md)

#### Defined in

[src/neuroglancer/sliceview/panel.ts:90](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/panel.ts#L90)

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

[src/neuroglancer/sliceview/panel.ts:122](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/panel.ts#L122)

___

### sliceView

• **sliceView**: [`SliceView`](sliceview_frontend.SliceView.md)

___

### sliceViewRenderHelper

• `Private` **sliceViewRenderHelper**: [`SliceViewRenderHelper`](sliceview_frontend.SliceViewRenderHelper.md)

#### Defined in

[src/neuroglancer/sliceview/panel.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/panel.ts#L87)

___

### viewer

• **viewer**: [`SliceViewerState`](../interfaces/sliceview_panel.SliceViewerState.md)

#### Overrides

[RenderedDataPanel](perspective_view_panel._internal_.RenderedDataPanel.md).[viewer](perspective_view_panel._internal_.RenderedDataPanel.md#viewer)

#### Defined in

[src/neuroglancer/sliceview/panel.ts:84](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/panel.ts#L84)

___

### visibility

• **visibility**: [`WatchableVisibilityPriority`](visibility_priority_frontend.WatchableVisibilityPriority.md)

#### Inherited from

[RenderedDataPanel](perspective_view_panel._internal_.RenderedDataPanel.md).[visibility](perspective_view_panel._internal_.RenderedDataPanel.md#visibility)

___

### visibleLayerTracker

• `Private` **visibleLayerTracker**: [`VisibleRenderLayerTracker`](perspective_view_panel._internal_.VisibleRenderLayerTracker.md)<[`SliceViewPanel`](sliceview_panel.SliceViewPanel.md), [`SliceViewPanelRenderLayer`](sliceview_renderlayer.SliceViewPanelRenderLayer.md)<`unknown`\>\>

#### Defined in

[src/neuroglancer/sliceview/panel.ts:96](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/panel.ts#L96)

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

[src/neuroglancer/sliceview/panel.ts:98](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/panel.ts#L98)

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

[src/neuroglancer/sliceview/panel.ts:124](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/panel.ts#L124)

___

### rpc

• `get` **rpc**(): [`RPC`](annotation_annotation_layer_state._internal_.RPC.md)

#### Returns

[`RPC`](annotation_annotation_layer_state._internal_.RPC.md)

#### Defined in

[src/neuroglancer/sliceview/panel.ts:103](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/panel.ts#L103)

___

### rpcId

• `get` **rpcId**(): `number`

#### Returns

`number`

#### Defined in

[src/neuroglancer/sliceview/panel.ts:106](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/panel.ts#L106)

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

▸ **addRef**(): [`SliceViewPanel`](sliceview_panel.SliceViewPanel.md)

#### Returns

[`SliceViewPanel`](sliceview_panel.SliceViewPanel.md)

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

[src/neuroglancer/sliceview/panel.ts:601](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/panel.ts#L601)

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

#### Inherited from

[RenderedDataPanel](perspective_view_panel._internal_.RenderedDataPanel.md).[disposed](perspective_view_panel._internal_.RenderedDataPanel.md#disposed)

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:918](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/rendered_data_panel.ts#L918)

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

[src/neuroglancer/sliceview/panel.ts:509](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/panel.ts#L509)

___

### ensureBoundsUpdated

▸ **ensureBoundsUpdated**(): `void`

#### Returns

`void`

#### Overrides

[RenderedDataPanel](perspective_view_panel._internal_.RenderedDataPanel.md).[ensureBoundsUpdated](perspective_view_panel._internal_.RenderedDataPanel.md#ensureboundsupdated)

#### Defined in

[src/neuroglancer/sliceview/panel.ts:589](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/panel.ts#L589)

___

### flushBackendProjectionParameters

▸ **flushBackendProjectionParameters**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/panel.ts:92](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/panel.ts#L92)

___

### getDepthArray

▸ **getDepthArray**(): `undefined` \| `Float32Array`

#### Returns

`undefined` \| `Float32Array`

#### Inherited from

[RenderedDataPanel](perspective_view_panel._internal_.RenderedDataPanel.md).[getDepthArray](perspective_view_panel._internal_.RenderedDataPanel.md#getdeptharray)

#### Defined in

[src/neuroglancer/display_context.ts:214](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L214)

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

[src/neuroglancer/sliceview/panel.ts:483](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/panel.ts#L483)

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

[src/neuroglancer/sliceview/panel.ts:594](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/panel.ts#L594)

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

[src/neuroglancer/sliceview/panel.ts:467](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/panel.ts#L467)

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

[src/neuroglancer/sliceview/panel.ts:475](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/panel.ts#L475)

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

Zooms by the specified factor, maintaining the data position that projects to the current mouse
position.

#### Parameters

| Name | Type |
| :------ | :------ |
| `factor` | `number` |

#### Returns

`void`

#### Overrides

[RenderedDataPanel](perspective_view_panel._internal_.RenderedDataPanel.md).[zoomByMouse](perspective_view_panel._internal_.RenderedDataPanel.md#zoombymouse)

#### Defined in

[src/neuroglancer/sliceview/panel.ts:661](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/panel.ts#L661)
