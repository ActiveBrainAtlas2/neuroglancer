[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/sliceview/panel](../modules/neuroglancer_sliceview_panel.md) / SliceViewPanel

# Class: SliceViewPanel

[neuroglancer/sliceview/panel](../modules/neuroglancer_sliceview_panel.md).SliceViewPanel

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

- [`RenderedDataPanel`](neuroglancer_rendered_data_panel.RenderedDataPanel.md)

  ↳ **`SliceViewPanel`**

## Table of contents

### Constructors

- [constructor](neuroglancer_sliceview_panel.SliceViewPanel.md#constructor)

### Properties

- [axesLineHelper](neuroglancer_sliceview_panel.SliceViewPanel.md#axeslinehelper)
- [boundsGeneration](neuroglancer_sliceview_panel.SliceViewPanel.md#boundsgeneration)
- [canvasRelativeClippedLeft](neuroglancer_sliceview_panel.SliceViewPanel.md#canvasrelativeclippedleft)
- [canvasRelativeClippedTop](neuroglancer_sliceview_panel.SliceViewPanel.md#canvasrelativeclippedtop)
- [canvasRelativeLogicalLeft](neuroglancer_sliceview_panel.SliceViewPanel.md#canvasrelativelogicalleft)
- [canvasRelativeLogicalTop](neuroglancer_sliceview_panel.SliceViewPanel.md#canvasrelativelogicaltop)
- [colorFactor](neuroglancer_sliceview_panel.SliceViewPanel.md#colorfactor)
- [context](neuroglancer_sliceview_panel.SliceViewPanel.md#context)
- [disposedStacks](neuroglancer_sliceview_panel.SliceViewPanel.md#disposedstacks)
- [element](neuroglancer_sliceview_panel.SliceViewPanel.md#element)
- [gl](neuroglancer_sliceview_panel.SliceViewPanel.md#gl)
- [inputEventMap](neuroglancer_sliceview_panel.SliceViewPanel.md#inputeventmap)
- [mouseX](neuroglancer_sliceview_panel.SliceViewPanel.md#mousex)
- [mouseY](neuroglancer_sliceview_panel.SliceViewPanel.md#mousey)
- [offscreenCopyHelper](neuroglancer_sliceview_panel.SliceViewPanel.md#offscreencopyhelper)
- [offscreenFramebuffer](neuroglancer_sliceview_panel.SliceViewPanel.md#offscreenframebuffer)
- [pickBufferContents](neuroglancer_sliceview_panel.SliceViewPanel.md#pickbuffercontents)
- [pickIDs](neuroglancer_sliceview_panel.SliceViewPanel.md#pickids)
- [pickRequestPending](neuroglancer_sliceview_panel.SliceViewPanel.md#pickrequestpending)
- [pickRequests](neuroglancer_sliceview_panel.SliceViewPanel.md#pickrequests)
- [pickingData](neuroglancer_sliceview_panel.SliceViewPanel.md#pickingdata)
- [refCount](neuroglancer_sliceview_panel.SliceViewPanel.md#refcount)
- [renderViewport](neuroglancer_sliceview_panel.SliceViewPanel.md#renderviewport)
- [scaleBars](neuroglancer_sliceview_panel.SliceViewPanel.md#scalebars)
- [sliceView](neuroglancer_sliceview_panel.SliceViewPanel.md#sliceview)
- [sliceViewRenderHelper](neuroglancer_sliceview_panel.SliceViewPanel.md#sliceviewrenderhelper)
- [viewer](neuroglancer_sliceview_panel.SliceViewPanel.md#viewer)
- [visibility](neuroglancer_sliceview_panel.SliceViewPanel.md#visibility)
- [visibleLayerTracker](neuroglancer_sliceview_panel.SliceViewPanel.md#visiblelayertracker)
- [wasDisposed](neuroglancer_sliceview_panel.SliceViewPanel.md#wasdisposed)

### Accessors

- [displayDimensionRenderInfo](neuroglancer_sliceview_panel.SliceViewPanel.md#displaydimensionrenderinfo)
- [drawOrder](neuroglancer_sliceview_panel.SliceViewPanel.md#draworder)
- [navigationState](neuroglancer_sliceview_panel.SliceViewPanel.md#navigationstate)
- [rpc](neuroglancer_sliceview_panel.SliceViewPanel.md#rpc)
- [rpcId](neuroglancer_sliceview_panel.SliceViewPanel.md#rpcid)
- [shouldDraw](neuroglancer_sliceview_panel.SliceViewPanel.md#shoulddraw)
- [visible](neuroglancer_sliceview_panel.SliceViewPanel.md#visible)

### Methods

- [addRef](neuroglancer_sliceview_panel.SliceViewPanel.md#addref)
- [completePickRequest](neuroglancer_sliceview_panel.SliceViewPanel.md#completepickrequest)
- [dispose](neuroglancer_sliceview_panel.SliceViewPanel.md#dispose)
- [disposed](neuroglancer_sliceview_panel.SliceViewPanel.md#disposed)
- [draw](neuroglancer_sliceview_panel.SliceViewPanel.md#draw)
- [drawWithPicking](neuroglancer_sliceview_panel.SliceViewPanel.md#drawwithpicking)
- [ensureBoundsUpdated](neuroglancer_sliceview_panel.SliceViewPanel.md#ensureboundsupdated)
- [flushBackendProjectionParameters](neuroglancer_sliceview_panel.SliceViewPanel.md#flushbackendprojectionparameters)
- [getDepthArray](neuroglancer_sliceview_panel.SliceViewPanel.md#getdeptharray)
- [handleMouseMove](neuroglancer_sliceview_panel.SliceViewPanel.md#handlemousemove)
- [isReady](neuroglancer_sliceview_panel.SliceViewPanel.md#isready)
- [issuePickRequest](neuroglancer_sliceview_panel.SliceViewPanel.md#issuepickrequest)
- [onMousemove](neuroglancer_sliceview_panel.SliceViewPanel.md#onmousemove)
- [onMouseout](neuroglancer_sliceview_panel.SliceViewPanel.md#onmouseout)
- [onTouchstart](neuroglancer_sliceview_panel.SliceViewPanel.md#ontouchstart)
- [refCountReachedZero](neuroglancer_sliceview_panel.SliceViewPanel.md#refcountreachedzero)
- [registerCancellable](neuroglancer_sliceview_panel.SliceViewPanel.md#registercancellable)
- [registerDisposer](neuroglancer_sliceview_panel.SliceViewPanel.md#registerdisposer)
- [registerEventListener](neuroglancer_sliceview_panel.SliceViewPanel.md#registereventlistener)
- [scheduleRedraw](neuroglancer_sliceview_panel.SliceViewPanel.md#scheduleredraw)
- [setGLClippedViewport](neuroglancer_sliceview_panel.SliceViewPanel.md#setglclippedviewport)
- [setGLLogicalViewport](neuroglancer_sliceview_panel.SliceViewPanel.md#setgllogicalviewport)
- [translateByViewportPixels](neuroglancer_sliceview_panel.SliceViewPanel.md#translatebyviewportpixels)
- [translateDataPointByViewportPixels](neuroglancer_sliceview_panel.SliceViewPanel.md#translatedatapointbyviewportpixels)
- [unregisterDisposer](neuroglancer_sliceview_panel.SliceViewPanel.md#unregisterdisposer)
- [zoomByMouse](neuroglancer_sliceview_panel.SliceViewPanel.md#zoombymouse)

## Constructors

### constructor

• **new SliceViewPanel**(`context`, `element`, `sliceView`, `viewer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`DisplayContext`](neuroglancer_display_context.DisplayContext.md) |
| `element` | [`HTMLElement`](../modules/main_module._internal_.md#htmlelement) |
| `sliceView` | [`SliceView`](neuroglancer_sliceview_frontend.SliceView.md) |
| `viewer` | [`SliceViewerState`](../interfaces/neuroglancer_sliceview_panel.SliceViewerState.md) |

#### Overrides

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[constructor](neuroglancer_rendered_data_panel.RenderedDataPanel.md#constructor)

#### Defined in

[src/neuroglancer/sliceview/panel.ts:128](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/panel.ts#L128)

## Properties

### axesLineHelper

• `Private` **axesLineHelper**: [`AxesLineHelper`](neuroglancer_axes_lines.AxesLineHelper.md)

#### Defined in

[src/neuroglancer/sliceview/panel.ts:86](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/panel.ts#L86)

___

### boundsGeneration

• **boundsGeneration**: `number` = `-1`

#### Inherited from

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[boundsGeneration](neuroglancer_rendered_data_panel.RenderedDataPanel.md#boundsgeneration)

#### Defined in

[src/neuroglancer/display_context.ts:84](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L84)

___

### canvasRelativeClippedLeft

• **canvasRelativeClippedLeft**: `number` = `0`

#### Inherited from

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[canvasRelativeClippedLeft](neuroglancer_rendered_data_panel.RenderedDataPanel.md#canvasrelativeclippedleft)

#### Defined in

[src/neuroglancer/display_context.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L87)

___

### canvasRelativeClippedTop

• **canvasRelativeClippedTop**: `number` = `0`

#### Inherited from

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[canvasRelativeClippedTop](neuroglancer_rendered_data_panel.RenderedDataPanel.md#canvasrelativeclippedtop)

#### Defined in

[src/neuroglancer/display_context.ts:90](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L90)

___

### canvasRelativeLogicalLeft

• **canvasRelativeLogicalLeft**: `number` = `0`

#### Inherited from

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[canvasRelativeLogicalLeft](neuroglancer_rendered_data_panel.RenderedDataPanel.md#canvasrelativelogicalleft)

#### Defined in

[src/neuroglancer/display_context.ts:92](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L92)

___

### canvasRelativeLogicalTop

• **canvasRelativeLogicalTop**: `number` = `0`

#### Inherited from

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[canvasRelativeLogicalTop](neuroglancer_rendered_data_panel.RenderedDataPanel.md#canvasrelativelogicaltop)

#### Defined in

[src/neuroglancer/display_context.ts:93](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L93)

___

### colorFactor

• `Private` **colorFactor**: [`vec4`](neuroglancer_util_geom.vec4.md)

#### Defined in

[src/neuroglancer/sliceview/panel.ts:89](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/panel.ts#L89)

___

### context

• **context**: [`DisplayContext`](neuroglancer_display_context.DisplayContext.md)

#### Inherited from

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[context](neuroglancer_rendered_data_panel.RenderedDataPanel.md#context)

#### Defined in

[src/neuroglancer/display_context.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L100)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[disposedStacks](neuroglancer_rendered_data_panel.RenderedDataPanel.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)

#### Inherited from

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[element](neuroglancer_rendered_data_panel.RenderedDataPanel.md#element)

#### Defined in

[src/neuroglancer/display_context.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L100)

___

### gl

• **gl**: [`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

#### Inherited from

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[gl](neuroglancer_rendered_data_panel.RenderedDataPanel.md#gl)

#### Defined in

[src/neuroglancer/display_context.ts:81](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L81)

___

### inputEventMap

• **inputEventMap**: [`EventActionMap`](neuroglancer_util_event_action_map.EventActionMap.md)

#### Inherited from

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[inputEventMap](neuroglancer_rendered_data_panel.RenderedDataPanel.md#inputeventmap)

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:150](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/rendered_data_panel.ts#L150)

___

### mouseX

• **mouseX**: `number` = `-1`

Current mouse position within the viewport, or -1 if the mouse is not in the viewport.

#### Inherited from

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[mouseX](neuroglancer_rendered_data_panel.RenderedDataPanel.md#mousex)

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:134](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/rendered_data_panel.ts#L134)

___

### mouseY

• **mouseY**: `number` = `-1`

#### Inherited from

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[mouseY](neuroglancer_rendered_data_panel.RenderedDataPanel.md#mousey)

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:135](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/rendered_data_panel.ts#L135)

___

### offscreenCopyHelper

• `Private` **offscreenCopyHelper**: [`OffscreenCopyHelper`](neuroglancer_webgl_offscreen.OffscreenCopyHelper.md)

#### Defined in

[src/neuroglancer/sliceview/panel.ts:121](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/panel.ts#L121)

___

### offscreenFramebuffer

• `Private` **offscreenFramebuffer**: [`FramebufferConfiguration`](neuroglancer_webgl_offscreen.FramebufferConfiguration.md)<[`TextureBuffer`](neuroglancer_webgl_offscreen.TextureBuffer.md), [`DepthRenderbuffer`](neuroglancer_webgl_offscreen.DepthRenderbuffer.md) \| [`DepthTextureBuffer`](neuroglancer_webgl_offscreen.DepthTextureBuffer.md)\>

#### Defined in

[src/neuroglancer/sliceview/panel.ts:110](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/panel.ts#L110)

___

### pickBufferContents

• **pickBufferContents**: `Float32Array`

#### Inherited from

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[pickBufferContents](neuroglancer_rendered_data_panel.RenderedDataPanel.md#pickbuffercontents)

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:156](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/rendered_data_panel.ts#L156)

___

### pickIDs

• `Private` **pickIDs**: [`PickIDManager`](neuroglancer_object_picking.PickIDManager.md)

#### Defined in

[src/neuroglancer/sliceview/panel.ts:90](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/panel.ts#L90)

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

[src/neuroglancer/rendered_data_panel.ts:146](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/rendered_data_panel.ts#L146)

___

### pickRequests

• **pickRequests**: [`PickRequest`](neuroglancer_rendered_data_panel.PickRequest.md)[]

#### Inherited from

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[pickRequests](neuroglancer_rendered_data_panel.RenderedDataPanel.md#pickrequests)

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:155](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/rendered_data_panel.ts#L155)

___

### pickingData

• **pickingData**: [`FramePickingData`](neuroglancer_rendered_data_panel.FramePickingData.md)[]

#### Inherited from

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[pickingData](neuroglancer_rendered_data_panel.RenderedDataPanel.md#pickingdata)

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:154](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/rendered_data_panel.ts#L154)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[refCount](neuroglancer_rendered_data_panel.RenderedDataPanel.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### renderViewport

• **renderViewport**: [`RenderViewport`](neuroglancer_display_context.RenderViewport.md)

#### Inherited from

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[renderViewport](neuroglancer_rendered_data_panel.RenderedDataPanel.md#renderviewport)

#### Defined in

[src/neuroglancer/display_context.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L95)

___

### scaleBars

• `Private` **scaleBars**: [`MultipleScaleBarTextures`](neuroglancer_widget_scale_bar.MultipleScaleBarTextures.md)

#### Defined in

[src/neuroglancer/sliceview/panel.ts:122](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/panel.ts#L122)

___

### sliceView

• **sliceView**: [`SliceView`](neuroglancer_sliceview_frontend.SliceView.md)

#### Defined in

[src/neuroglancer/sliceview/panel.ts:129](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/panel.ts#L129)

___

### sliceViewRenderHelper

• `Private` **sliceViewRenderHelper**: [`SliceViewRenderHelper`](neuroglancer_sliceview_frontend.SliceViewRenderHelper.md)

#### Defined in

[src/neuroglancer/sliceview/panel.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/panel.ts#L87)

___

### viewer

• **viewer**: [`SliceViewerState`](../interfaces/neuroglancer_sliceview_panel.SliceViewerState.md)

#### Overrides

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[viewer](neuroglancer_rendered_data_panel.RenderedDataPanel.md#viewer)

#### Defined in

[src/neuroglancer/sliceview/panel.ts:84](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/panel.ts#L84)

___

### visibility

• **visibility**: [`WatchableVisibilityPriority`](neuroglancer_visibility_priority_frontend.WatchableVisibilityPriority.md)

#### Inherited from

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[visibility](neuroglancer_rendered_data_panel.RenderedDataPanel.md#visibility)

#### Defined in

[src/neuroglancer/display_context.ts:101](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L101)

___

### visibleLayerTracker

• `Private` **visibleLayerTracker**: [`VisibleRenderLayerTracker`](neuroglancer_layer.VisibleRenderLayerTracker.md)<[`SliceViewPanel`](neuroglancer_sliceview_panel.SliceViewPanel.md), [`SliceViewPanelRenderLayer`](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md)<`unknown`\>\>

#### Defined in

[src/neuroglancer/sliceview/panel.ts:96](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/panel.ts#L96)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[wasDisposed](neuroglancer_rendered_data_panel.RenderedDataPanel.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### displayDimensionRenderInfo

• `get` **displayDimensionRenderInfo**(): [`WatchableDisplayDimensionRenderInfo`](neuroglancer_navigation_state.WatchableDisplayDimensionRenderInfo.md)

#### Returns

[`WatchableDisplayDimensionRenderInfo`](neuroglancer_navigation_state.WatchableDisplayDimensionRenderInfo.md)

#### Defined in

[src/neuroglancer/sliceview/panel.ts:98](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/panel.ts#L98)

___

### drawOrder

• `get` **drawOrder**(): `number`

#### Returns

`number`

#### Inherited from

RenderedDataPanel.drawOrder

#### Defined in

[src/neuroglancer/display_context.ts:233](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L233)

___

### navigationState

• `get` **navigationState**(): [`NavigationState`](neuroglancer_navigation_state.NavigationState.md)<[`TrackableZoomInterface`](../modules/neuroglancer_navigation_state.md#trackablezoominterface)\>

#### Returns

[`NavigationState`](neuroglancer_navigation_state.NavigationState.md)<[`TrackableZoomInterface`](../modules/neuroglancer_navigation_state.md#trackablezoominterface)\>

#### Overrides

RenderedDataPanel.navigationState

#### Defined in

[src/neuroglancer/sliceview/panel.ts:124](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/panel.ts#L124)

___

### rpc

• `get` **rpc**(): [`RPC`](neuroglancer_worker_rpc.RPC.md)

#### Returns

[`RPC`](neuroglancer_worker_rpc.RPC.md)

#### Defined in

[src/neuroglancer/sliceview/panel.ts:103](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/panel.ts#L103)

___

### rpcId

• `get` **rpcId**(): `number`

#### Returns

`number`

#### Defined in

[src/neuroglancer/sliceview/panel.ts:106](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/panel.ts#L106)

___

### shouldDraw

• `get` **shouldDraw**(): `boolean`

#### Returns

`boolean`

#### Inherited from

RenderedDataPanel.shouldDraw

#### Defined in

[src/neuroglancer/display_context.ts:218](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L218)

___

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

RenderedDataPanel.visible

#### Defined in

[src/neuroglancer/display_context.ts:210](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L210)

## Methods

### addRef

▸ **addRef**(): [`SliceViewPanel`](neuroglancer_sliceview_panel.SliceViewPanel.md)

#### Returns

[`SliceViewPanel`](neuroglancer_sliceview_panel.SliceViewPanel.md)

#### Inherited from

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[addRef](neuroglancer_rendered_data_panel.RenderedDataPanel.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

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

[src/neuroglancer/sliceview/panel.ts:601](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/panel.ts#L601)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[dispose](neuroglancer_rendered_data_panel.RenderedDataPanel.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[disposed](neuroglancer_rendered_data_panel.RenderedDataPanel.md#disposed)

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:918](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/rendered_data_panel.ts#L918)

___

### draw

▸ **draw**(): `void`

#### Returns

`void`

#### Inherited from

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[draw](neuroglancer_rendered_data_panel.RenderedDataPanel.md#draw)

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:294](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/rendered_data_panel.ts#L294)

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

[src/neuroglancer/sliceview/panel.ts:509](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/panel.ts#L509)

___

### ensureBoundsUpdated

▸ **ensureBoundsUpdated**(): `void`

#### Returns

`void`

#### Overrides

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[ensureBoundsUpdated](neuroglancer_rendered_data_panel.RenderedDataPanel.md#ensureboundsupdated)

#### Defined in

[src/neuroglancer/sliceview/panel.ts:589](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/panel.ts#L589)

___

### flushBackendProjectionParameters

▸ **flushBackendProjectionParameters**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/panel.ts:92](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/panel.ts#L92)

___

### getDepthArray

▸ **getDepthArray**(): `undefined` \| `Float32Array`

#### Returns

`undefined` \| `Float32Array`

#### Inherited from

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[getDepthArray](neuroglancer_rendered_data_panel.RenderedDataPanel.md#getdeptharray)

#### Defined in

[src/neuroglancer/display_context.ts:214](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L214)

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

[src/neuroglancer/rendered_data_panel.ts:889](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/rendered_data_panel.ts#L889)

___

### isReady

▸ **isReady**(): `boolean`

#### Returns

`boolean`

#### Overrides

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[isReady](neuroglancer_rendered_data_panel.RenderedDataPanel.md#isready)

#### Defined in

[src/neuroglancer/sliceview/panel.ts:483](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/panel.ts#L483)

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

[src/neuroglancer/sliceview/panel.ts:594](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/panel.ts#L594)

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

[src/neuroglancer/rendered_data_panel.ts:901](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/rendered_data_panel.ts#L901)

___

### onMouseout

▸ **onMouseout**(): `void`

#### Returns

`void`

#### Inherited from

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[onMouseout](neuroglancer_rendered_data_panel.RenderedDataPanel.md#onmouseout)

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:882](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/rendered_data_panel.ts#L882)

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

[src/neuroglancer/rendered_data_panel.ts:909](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/rendered_data_panel.ts#L909)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[refCountReachedZero](neuroglancer_rendered_data_panel.RenderedDataPanel.md#refcountreachedzero)

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

#### Inherited from

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[registerCancellable](neuroglancer_rendered_data_panel.RenderedDataPanel.md#registercancellable)

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

#### Inherited from

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[registerDisposer](neuroglancer_rendered_data_panel.RenderedDataPanel.md#registerdisposer)

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

#### Inherited from

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[registerEventListener](neuroglancer_rendered_data_panel.RenderedDataPanel.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L95)

___

### scheduleRedraw

▸ **scheduleRedraw**(): `void`

#### Returns

`void`

#### Inherited from

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[scheduleRedraw](neuroglancer_rendered_data_panel.RenderedDataPanel.md#scheduleredraw)

#### Defined in

[src/neuroglancer/display_context.ts:107](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L107)

___

### setGLClippedViewport

▸ **setGLClippedViewport**(): `void`

#### Returns

`void`

#### Inherited from

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[setGLClippedViewport](neuroglancer_rendered_data_panel.RenderedDataPanel.md#setglclippedviewport)

#### Defined in

[src/neuroglancer/display_context.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L175)

___

### setGLLogicalViewport

▸ **setGLLogicalViewport**(): `void`

#### Returns

`void`

#### Inherited from

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[setGLLogicalViewport](neuroglancer_rendered_data_panel.RenderedDataPanel.md#setgllogicalviewport)

#### Defined in

[src/neuroglancer/display_context.ts:187](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L187)

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

[src/neuroglancer/sliceview/panel.ts:467](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/panel.ts#L467)

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

[src/neuroglancer/sliceview/panel.ts:475](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/panel.ts#L475)

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

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L85)

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

[RenderedDataPanel](neuroglancer_rendered_data_panel.RenderedDataPanel.md).[zoomByMouse](neuroglancer_rendered_data_panel.RenderedDataPanel.md#zoombymouse)

#### Defined in

[src/neuroglancer/sliceview/panel.ts:661](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/panel.ts#L661)
