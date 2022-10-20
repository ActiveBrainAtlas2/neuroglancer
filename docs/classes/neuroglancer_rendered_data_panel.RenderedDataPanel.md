[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/rendered\_data\_panel](../modules/neuroglancer_rendered_data_panel.md) / RenderedDataPanel

# Class: RenderedDataPanel

[neuroglancer/rendered_data_panel](../modules/neuroglancer_rendered_data_panel.md).RenderedDataPanel

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

- [`RenderedPanel`](neuroglancer_display_context.RenderedPanel.md)

  ↳ **`RenderedDataPanel`**

  ↳↳ [`PerspectivePanel`](neuroglancer_perspective_view_panel.PerspectivePanel.md)

  ↳↳ [`SliceViewPanel`](neuroglancer_sliceview_panel.SliceViewPanel.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_rendered_data_panel.RenderedDataPanel.md#constructor)

### Properties

- [boundsGeneration](neuroglancer_rendered_data_panel.RenderedDataPanel.md#boundsgeneration)
- [canvasRelativeClippedLeft](neuroglancer_rendered_data_panel.RenderedDataPanel.md#canvasrelativeclippedleft)
- [canvasRelativeClippedTop](neuroglancer_rendered_data_panel.RenderedDataPanel.md#canvasrelativeclippedtop)
- [canvasRelativeLogicalLeft](neuroglancer_rendered_data_panel.RenderedDataPanel.md#canvasrelativelogicalleft)
- [canvasRelativeLogicalTop](neuroglancer_rendered_data_panel.RenderedDataPanel.md#canvasrelativelogicaltop)
- [context](neuroglancer_rendered_data_panel.RenderedDataPanel.md#context)
- [disposedStacks](neuroglancer_rendered_data_panel.RenderedDataPanel.md#disposedstacks)
- [element](neuroglancer_rendered_data_panel.RenderedDataPanel.md#element)
- [gl](neuroglancer_rendered_data_panel.RenderedDataPanel.md#gl)
- [inputEventMap](neuroglancer_rendered_data_panel.RenderedDataPanel.md#inputeventmap)
- [mouseX](neuroglancer_rendered_data_panel.RenderedDataPanel.md#mousex)
- [mouseY](neuroglancer_rendered_data_panel.RenderedDataPanel.md#mousey)
- [navigationState](neuroglancer_rendered_data_panel.RenderedDataPanel.md#navigationstate)
- [nextPickRequestTime](neuroglancer_rendered_data_panel.RenderedDataPanel.md#nextpickrequesttime)
- [pendingPickRequestTimerId](neuroglancer_rendered_data_panel.RenderedDataPanel.md#pendingpickrequesttimerid)
- [pickBufferContents](neuroglancer_rendered_data_panel.RenderedDataPanel.md#pickbuffercontents)
- [pickRequestPending](neuroglancer_rendered_data_panel.RenderedDataPanel.md#pickrequestpending)
- [pickRequests](neuroglancer_rendered_data_panel.RenderedDataPanel.md#pickrequests)
- [pickTimerId](neuroglancer_rendered_data_panel.RenderedDataPanel.md#picktimerid)
- [pickingData](neuroglancer_rendered_data_panel.RenderedDataPanel.md#pickingdata)
- [refCount](neuroglancer_rendered_data_panel.RenderedDataPanel.md#refcount)
- [renderViewport](neuroglancer_rendered_data_panel.RenderedDataPanel.md#renderviewport)
- [viewer](neuroglancer_rendered_data_panel.RenderedDataPanel.md#viewer)
- [visibility](neuroglancer_rendered_data_panel.RenderedDataPanel.md#visibility)
- [wasDisposed](neuroglancer_rendered_data_panel.RenderedDataPanel.md#wasdisposed)

### Accessors

- [drawOrder](neuroglancer_rendered_data_panel.RenderedDataPanel.md#draworder)
- [shouldDraw](neuroglancer_rendered_data_panel.RenderedDataPanel.md#shoulddraw)
- [visible](neuroglancer_rendered_data_panel.RenderedDataPanel.md#visible)

### Methods

- [addRef](neuroglancer_rendered_data_panel.RenderedDataPanel.md#addref)
- [attemptToIssuePickRequest](neuroglancer_rendered_data_panel.RenderedDataPanel.md#attempttoissuepickrequest)
- [blockOnPickRequest](neuroglancer_rendered_data_panel.RenderedDataPanel.md#blockonpickrequest)
- [canIssuePickRequest](neuroglancer_rendered_data_panel.RenderedDataPanel.md#canissuepickrequest)
- [cancelPickRequests](neuroglancer_rendered_data_panel.RenderedDataPanel.md#cancelpickrequests)
- [checkForPickRequestCompletion](neuroglancer_rendered_data_panel.RenderedDataPanel.md#checkforpickrequestcompletion)
- [completePickInternal](neuroglancer_rendered_data_panel.RenderedDataPanel.md#completepickinternal)
- [completePickRequest](neuroglancer_rendered_data_panel.RenderedDataPanel.md#completepickrequest)
- [dispose](neuroglancer_rendered_data_panel.RenderedDataPanel.md#dispose)
- [disposed](neuroglancer_rendered_data_panel.RenderedDataPanel.md#disposed)
- [draw](neuroglancer_rendered_data_panel.RenderedDataPanel.md#draw)
- [drawWithPicking](neuroglancer_rendered_data_panel.RenderedDataPanel.md#drawwithpicking)
- [ensureBoundsUpdated](neuroglancer_rendered_data_panel.RenderedDataPanel.md#ensureboundsupdated)
- [getDepthArray](neuroglancer_rendered_data_panel.RenderedDataPanel.md#getdeptharray)
- [handleMouseMove](neuroglancer_rendered_data_panel.RenderedDataPanel.md#handlemousemove)
- [isReady](neuroglancer_rendered_data_panel.RenderedDataPanel.md#isready)
- [issuePickRequest](neuroglancer_rendered_data_panel.RenderedDataPanel.md#issuepickrequest)
- [issuePickRequestInternal](neuroglancer_rendered_data_panel.RenderedDataPanel.md#issuepickrequestinternal)
- [mouseStateForcer](neuroglancer_rendered_data_panel.RenderedDataPanel.md#mousestateforcer)
- [onMousemove](neuroglancer_rendered_data_panel.RenderedDataPanel.md#onmousemove)
- [onMouseout](neuroglancer_rendered_data_panel.RenderedDataPanel.md#onmouseout)
- [onTouchstart](neuroglancer_rendered_data_panel.RenderedDataPanel.md#ontouchstart)
- [pendingPickRequestTimerExpired](neuroglancer_rendered_data_panel.RenderedDataPanel.md#pendingpickrequesttimerexpired)
- [refCountReachedZero](neuroglancer_rendered_data_panel.RenderedDataPanel.md#refcountreachedzero)
- [registerCancellable](neuroglancer_rendered_data_panel.RenderedDataPanel.md#registercancellable)
- [registerDisposer](neuroglancer_rendered_data_panel.RenderedDataPanel.md#registerdisposer)
- [registerEventListener](neuroglancer_rendered_data_panel.RenderedDataPanel.md#registereventlistener)
- [scheduleCheckForPickRequestCompletion](neuroglancer_rendered_data_panel.RenderedDataPanel.md#schedulecheckforpickrequestcompletion)
- [scheduleRedraw](neuroglancer_rendered_data_panel.RenderedDataPanel.md#scheduleredraw)
- [setGLClippedViewport](neuroglancer_rendered_data_panel.RenderedDataPanel.md#setglclippedviewport)
- [setGLLogicalViewport](neuroglancer_rendered_data_panel.RenderedDataPanel.md#setgllogicalviewport)
- [translateByViewportPixels](neuroglancer_rendered_data_panel.RenderedDataPanel.md#translatebyviewportpixels)
- [translateDataPointByViewportPixels](neuroglancer_rendered_data_panel.RenderedDataPanel.md#translatedatapointbyviewportpixels)
- [unregisterDisposer](neuroglancer_rendered_data_panel.RenderedDataPanel.md#unregisterdisposer)
- [updateMousePosition](neuroglancer_rendered_data_panel.RenderedDataPanel.md#updatemouseposition)
- [zoomByMouse](neuroglancer_rendered_data_panel.RenderedDataPanel.md#zoombymouse)

## Constructors

### constructor

• **new RenderedDataPanel**(`context`, `element`, `viewer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`DisplayContext`](neuroglancer_display_context.DisplayContext.md) |
| `element` | [`HTMLElement`](../modules/main_module._internal_.md#htmlelement) |
| `viewer` | [`RenderedDataViewerState`](../interfaces/neuroglancer_rendered_data_panel.RenderedDataViewerState.md) |

#### Overrides

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[constructor](neuroglancer_display_context.RenderedPanel.md#constructor)

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:391](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/rendered_data_panel.ts#L391)

## Properties

### boundsGeneration

• **boundsGeneration**: `number` = `-1`

#### Inherited from

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[boundsGeneration](neuroglancer_display_context.RenderedPanel.md#boundsgeneration)

#### Defined in

[src/neuroglancer/display_context.ts:84](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L84)

___

### canvasRelativeClippedLeft

• **canvasRelativeClippedLeft**: `number` = `0`

#### Inherited from

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[canvasRelativeClippedLeft](neuroglancer_display_context.RenderedPanel.md#canvasrelativeclippedleft)

#### Defined in

[src/neuroglancer/display_context.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L87)

___

### canvasRelativeClippedTop

• **canvasRelativeClippedTop**: `number` = `0`

#### Inherited from

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[canvasRelativeClippedTop](neuroglancer_display_context.RenderedPanel.md#canvasrelativeclippedtop)

#### Defined in

[src/neuroglancer/display_context.ts:90](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L90)

___

### canvasRelativeLogicalLeft

• **canvasRelativeLogicalLeft**: `number` = `0`

#### Inherited from

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[canvasRelativeLogicalLeft](neuroglancer_display_context.RenderedPanel.md#canvasrelativelogicalleft)

#### Defined in

[src/neuroglancer/display_context.ts:92](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L92)

___

### canvasRelativeLogicalTop

• **canvasRelativeLogicalTop**: `number` = `0`

#### Inherited from

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[canvasRelativeLogicalTop](neuroglancer_display_context.RenderedPanel.md#canvasrelativelogicaltop)

#### Defined in

[src/neuroglancer/display_context.ts:93](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L93)

___

### context

• **context**: [`DisplayContext`](neuroglancer_display_context.DisplayContext.md)

#### Inherited from

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[context](neuroglancer_display_context.RenderedPanel.md#context)

#### Defined in

[src/neuroglancer/display_context.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L100)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[disposedStacks](neuroglancer_display_context.RenderedPanel.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)

#### Inherited from

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[element](neuroglancer_display_context.RenderedPanel.md#element)

#### Defined in

[src/neuroglancer/display_context.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L100)

___

### gl

• **gl**: [`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

#### Inherited from

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[gl](neuroglancer_display_context.RenderedPanel.md#gl)

#### Defined in

[src/neuroglancer/display_context.ts:81](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L81)

___

### inputEventMap

• **inputEventMap**: [`EventActionMap`](neuroglancer_util_event_action_map.EventActionMap.md)

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:150](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/rendered_data_panel.ts#L150)

___

### mouseX

• **mouseX**: `number` = `-1`

Current mouse position within the viewport, or -1 if the mouse is not in the viewport.

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:134](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/rendered_data_panel.ts#L134)

___

### mouseY

• **mouseY**: `number` = `-1`

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:135](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/rendered_data_panel.ts#L135)

___

### navigationState

• `Abstract` **navigationState**: [`NavigationState`](neuroglancer_navigation_state.NavigationState.md)<[`TrackableZoomInterface`](../modules/neuroglancer_navigation_state.md#trackablezoominterface)\>

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:152](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/rendered_data_panel.ts#L152)

___

### nextPickRequestTime

• `Private` **nextPickRequestTime**: `number` = `0`

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:318](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/rendered_data_panel.ts#L318)

___

### pendingPickRequestTimerId

• `Private` **pendingPickRequestTimerId**: `number` = `-1`

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:319](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/rendered_data_panel.ts#L319)

___

### pickBufferContents

• **pickBufferContents**: `Float32Array`

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:156](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/rendered_data_panel.ts#L156)

___

### pickRequestPending

• **pickRequestPending**: `boolean` = `false`

If `false`, either the mouse is not within the viewport, or a picking request was already
issued for the current mouseX and mouseY after the most recent frame was rendered; when the
current pick requests complete, no additional pick requests will be issued.

If `true`, a picking request was not issued for the current mouseX and mouseY due to all pick
buffers being in use; when a pick buffer becomes available, an additional pick request will be
issued.

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:146](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/rendered_data_panel.ts#L146)

___

### pickRequests

• **pickRequests**: [`PickRequest`](neuroglancer_rendered_data_panel.PickRequest.md)[]

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:155](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/rendered_data_panel.ts#L155)

___

### pickTimerId

• `Private` **pickTimerId**: `number` = `-1`

Timer id for checking if outstanding pick requests have completed.

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:166](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/rendered_data_panel.ts#L166)

___

### pickingData

• **pickingData**: [`FramePickingData`](neuroglancer_rendered_data_panel.FramePickingData.md)[]

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:154](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/rendered_data_panel.ts#L154)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[refCount](neuroglancer_display_context.RenderedPanel.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### renderViewport

• **renderViewport**: [`RenderViewport`](neuroglancer_display_context.RenderViewport.md)

#### Inherited from

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[renderViewport](neuroglancer_display_context.RenderedPanel.md#renderviewport)

#### Defined in

[src/neuroglancer/display_context.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L95)

___

### viewer

• **viewer**: [`RenderedDataViewerState`](../interfaces/neuroglancer_rendered_data_panel.RenderedDataViewerState.md)

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:393](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/rendered_data_panel.ts#L393)

___

### visibility

• **visibility**: [`WatchableVisibilityPriority`](neuroglancer_visibility_priority_frontend.WatchableVisibilityPriority.md)

#### Inherited from

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[visibility](neuroglancer_display_context.RenderedPanel.md#visibility)

#### Defined in

[src/neuroglancer/display_context.ts:101](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L101)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[wasDisposed](neuroglancer_display_context.RenderedPanel.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### drawOrder

• `get` **drawOrder**(): `number`

#### Returns

`number`

#### Inherited from

RenderedPanel.drawOrder

#### Defined in

[src/neuroglancer/display_context.ts:233](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L233)

___

### shouldDraw

• `get` **shouldDraw**(): `boolean`

#### Returns

`boolean`

#### Inherited from

RenderedPanel.shouldDraw

#### Defined in

[src/neuroglancer/display_context.ts:218](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L218)

___

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

RenderedPanel.visible

#### Defined in

[src/neuroglancer/display_context.ts:210](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L210)

## Methods

### addRef

▸ **addRef**(): [`RenderedDataPanel`](neuroglancer_rendered_data_panel.RenderedDataPanel.md)

#### Returns

[`RenderedDataPanel`](neuroglancer_rendered_data_panel.RenderedDataPanel.md)

#### Inherited from

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[addRef](neuroglancer_display_context.RenderedPanel.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

___

### attemptToIssuePickRequest

▸ `Private` **attemptToIssuePickRequest**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:340](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/rendered_data_panel.ts#L340)

___

### blockOnPickRequest

▸ `Private` **blockOnPickRequest**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:285](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/rendered_data_panel.ts#L285)

___

### canIssuePickRequest

▸ `Private` **canIssuePickRequest**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:327](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/rendered_data_panel.ts#L327)

___

### cancelPickRequests

▸ `Private` **cancelPickRequests**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:168](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/rendered_data_panel.ts#L168)

___

### checkForPickRequestCompletion

▸ `Private` **checkForPickRequestCompletion**(`checkingBeforeDraw?`, `block?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `checkingBeforeDraw` | `boolean` | `false` |
| `block` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:241](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/rendered_data_panel.ts#L241)

___

### completePickInternal

▸ `Private` **completePickInternal**(`pickRequest`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pickRequest` | [`PickRequest`](neuroglancer_rendered_data_panel.PickRequest.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:221](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/rendered_data_panel.ts#L221)

___

### completePickRequest

▸ `Abstract` **completePickRequest**(`glWindowX`, `glWindowY`, `data`, `pickingData`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `glWindowX` | `number` |
| `glWindowY` | `number` |
| `data` | `Float32Array` |
| `pickingData` | [`FramePickingData`](neuroglancer_rendered_data_panel.FramePickingData.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:217](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/rendered_data_panel.ts#L217)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[dispose](neuroglancer_display_context.RenderedPanel.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[disposed](neuroglancer_display_context.RenderedPanel.md#disposed)

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:918](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/rendered_data_panel.ts#L918)

___

### draw

▸ **draw**(): `void`

#### Returns

`void`

#### Overrides

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[draw](neuroglancer_display_context.RenderedPanel.md#draw)

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:294](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/rendered_data_panel.ts#L294)

___

### drawWithPicking

▸ `Abstract` **drawWithPicking**(`pickingData`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pickingData` | [`FramePickingData`](neuroglancer_rendered_data_panel.FramePickingData.md) |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:316](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/rendered_data_panel.ts#L316)

___

### ensureBoundsUpdated

▸ **ensureBoundsUpdated**(): `void`

#### Returns

`void`

#### Inherited from

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[ensureBoundsUpdated](neuroglancer_display_context.RenderedPanel.md#ensureboundsupdated)

#### Defined in

[src/neuroglancer/display_context.ts:115](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L115)

___

### getDepthArray

▸ **getDepthArray**(): `undefined` \| `Float32Array`

#### Returns

`undefined` \| `Float32Array`

#### Inherited from

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[getDepthArray](neuroglancer_display_context.RenderedPanel.md#getdeptharray)

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

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:889](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/rendered_data_panel.ts#L889)

___

### isReady

▸ `Abstract` **isReady**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[isReady](neuroglancer_display_context.RenderedPanel.md#isready)

#### Defined in

[src/neuroglancer/display_context.ts:113](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L113)

___

### issuePickRequest

▸ `Abstract` **issuePickRequest**(`glWindowX`, `glWindowY`): `void`

Reads pick data for the current mouse position into the currently-bound pixel pack buffer.

#### Parameters

| Name | Type |
| :------ | :------ |
| `glWindowX` | `number` |
| `glWindowY` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:161](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/rendered_data_panel.ts#L161)

___

### issuePickRequestInternal

▸ `Private` **issuePickRequestInternal**(`pickRequest`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pickRequest` | [`PickRequest`](neuroglancer_rendered_data_panel.PickRequest.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:181](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/rendered_data_panel.ts#L181)

___

### mouseStateForcer

▸ `Private` **mouseStateForcer**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:148](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/rendered_data_panel.ts#L148)

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

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:901](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/rendered_data_panel.ts#L901)

___

### onMouseout

▸ **onMouseout**(): `void`

#### Returns

`void`

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

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:909](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/rendered_data_panel.ts#L909)

___

### pendingPickRequestTimerExpired

▸ `Private` **pendingPickRequestTimerExpired**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:321](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/rendered_data_panel.ts#L321)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[refCountReachedZero](neuroglancer_display_context.RenderedPanel.md#refcountreachedzero)

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

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[registerCancellable](neuroglancer_display_context.RenderedPanel.md#registercancellable)

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

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[registerDisposer](neuroglancer_display_context.RenderedPanel.md#registerdisposer)

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

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[registerEventListener](neuroglancer_display_context.RenderedPanel.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L95)

___

### scheduleCheckForPickRequestCompletion

▸ `Private` **scheduleCheckForPickRequestCompletion**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/rendered_data_panel.ts#L234)

___

### scheduleRedraw

▸ **scheduleRedraw**(): `void`

#### Returns

`void`

#### Inherited from

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[scheduleRedraw](neuroglancer_display_context.RenderedPanel.md#scheduleredraw)

#### Defined in

[src/neuroglancer/display_context.ts:107](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L107)

___

### setGLClippedViewport

▸ **setGLClippedViewport**(): `void`

#### Returns

`void`

#### Inherited from

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[setGLClippedViewport](neuroglancer_display_context.RenderedPanel.md#setglclippedviewport)

#### Defined in

[src/neuroglancer/display_context.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L175)

___

### setGLLogicalViewport

▸ **setGLLogicalViewport**(): `void`

#### Returns

`void`

#### Inherited from

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[setGLLogicalViewport](neuroglancer_display_context.RenderedPanel.md#setgllogicalviewport)

#### Defined in

[src/neuroglancer/display_context.ts:187](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L187)

___

### translateByViewportPixels

▸ `Abstract` **translateByViewportPixels**(`deltaX`, `deltaY`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `deltaX` | `number` |
| `deltaY` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:887](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/rendered_data_panel.ts#L887)

___

### translateDataPointByViewportPixels

▸ `Abstract` **translateDataPointByViewportPixels**(`out`, `orig`, `deltaX`, `deltaY`): [`vec3`](neuroglancer_util_geom.vec3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `out` | [`vec3`](neuroglancer_util_geom.vec3.md) |
| `orig` | [`vec3`](neuroglancer_util_geom.vec3.md) |
| `deltaX` | `number` |
| `deltaY` | `number` |

#### Returns

[`vec3`](neuroglancer_util_geom.vec3.md)

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:879](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/rendered_data_panel.ts#L879)

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

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[unregisterDisposer](neuroglancer_display_context.RenderedPanel.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L85)

___

### updateMousePosition

▸ `Private` **updateMousePosition**(`mouseX`, `mouseY`): `void`

Called each time the mouse position relative to the top level of the rendered viewport changes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `mouseX` | `number` |
| `mouseY` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:366](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/rendered_data_panel.ts#L366)

___

### zoomByMouse

▸ `Abstract` **zoomByMouse**(`factor`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `factor` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:933](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/rendered_data_panel.ts#L933)
