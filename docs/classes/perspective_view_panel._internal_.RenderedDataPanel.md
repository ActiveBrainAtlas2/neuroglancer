[neuroglancer](../README.md) / [Modules](../modules.md) / [perspective\_view/panel](../modules/perspective_view_panel.md) / [<internal\>](../modules/perspective_view_panel._internal_.md) / RenderedDataPanel

# Class: RenderedDataPanel

[perspective_view/panel](../modules/perspective_view_panel.md).[<internal>](../modules/perspective_view_panel._internal_.md).RenderedDataPanel

## Hierarchy

- [`RenderedPanel`](annotation_annotation_layer_state._internal_.RenderedPanel.md)

  ↳ **`RenderedDataPanel`**

  ↳↳ [`PerspectivePanel`](perspective_view_panel.PerspectivePanel.md)

  ↳↳ [`SliceViewPanel`](sliceview_panel.SliceViewPanel.md)

## Table of contents

### Constructors

- [constructor](perspective_view_panel._internal_.RenderedDataPanel.md#constructor)

### Properties

- [boundsGeneration](perspective_view_panel._internal_.RenderedDataPanel.md#boundsgeneration)
- [canvasRelativeClippedLeft](perspective_view_panel._internal_.RenderedDataPanel.md#canvasrelativeclippedleft)
- [canvasRelativeClippedTop](perspective_view_panel._internal_.RenderedDataPanel.md#canvasrelativeclippedtop)
- [canvasRelativeLogicalLeft](perspective_view_panel._internal_.RenderedDataPanel.md#canvasrelativelogicalleft)
- [canvasRelativeLogicalTop](perspective_view_panel._internal_.RenderedDataPanel.md#canvasrelativelogicaltop)
- [context](perspective_view_panel._internal_.RenderedDataPanel.md#context)
- [disposedStacks](perspective_view_panel._internal_.RenderedDataPanel.md#disposedstacks)
- [element](perspective_view_panel._internal_.RenderedDataPanel.md#element)
- [gl](perspective_view_panel._internal_.RenderedDataPanel.md#gl)
- [inputEventMap](perspective_view_panel._internal_.RenderedDataPanel.md#inputeventmap)
- [mouseX](perspective_view_panel._internal_.RenderedDataPanel.md#mousex)
- [mouseY](perspective_view_panel._internal_.RenderedDataPanel.md#mousey)
- [navigationState](perspective_view_panel._internal_.RenderedDataPanel.md#navigationstate)
- [nextPickRequestTime](perspective_view_panel._internal_.RenderedDataPanel.md#nextpickrequesttime)
- [pendingPickRequestTimerId](perspective_view_panel._internal_.RenderedDataPanel.md#pendingpickrequesttimerid)
- [pickBufferContents](perspective_view_panel._internal_.RenderedDataPanel.md#pickbuffercontents)
- [pickRequestPending](perspective_view_panel._internal_.RenderedDataPanel.md#pickrequestpending)
- [pickRequests](perspective_view_panel._internal_.RenderedDataPanel.md#pickrequests)
- [pickTimerId](perspective_view_panel._internal_.RenderedDataPanel.md#picktimerid)
- [pickingData](perspective_view_panel._internal_.RenderedDataPanel.md#pickingdata)
- [refCount](perspective_view_panel._internal_.RenderedDataPanel.md#refcount)
- [renderViewport](perspective_view_panel._internal_.RenderedDataPanel.md#renderviewport)
- [viewer](perspective_view_panel._internal_.RenderedDataPanel.md#viewer)
- [visibility](perspective_view_panel._internal_.RenderedDataPanel.md#visibility)
- [wasDisposed](perspective_view_panel._internal_.RenderedDataPanel.md#wasdisposed)

### Accessors

- [drawOrder](perspective_view_panel._internal_.RenderedDataPanel.md#draworder)
- [shouldDraw](perspective_view_panel._internal_.RenderedDataPanel.md#shoulddraw)
- [visible](perspective_view_panel._internal_.RenderedDataPanel.md#visible)

### Methods

- [addRef](perspective_view_panel._internal_.RenderedDataPanel.md#addref)
- [attemptToIssuePickRequest](perspective_view_panel._internal_.RenderedDataPanel.md#attempttoissuepickrequest)
- [blockOnPickRequest](perspective_view_panel._internal_.RenderedDataPanel.md#blockonpickrequest)
- [canIssuePickRequest](perspective_view_panel._internal_.RenderedDataPanel.md#canissuepickrequest)
- [cancelPickRequests](perspective_view_panel._internal_.RenderedDataPanel.md#cancelpickrequests)
- [checkForPickRequestCompletion](perspective_view_panel._internal_.RenderedDataPanel.md#checkforpickrequestcompletion)
- [completePickInternal](perspective_view_panel._internal_.RenderedDataPanel.md#completepickinternal)
- [completePickRequest](perspective_view_panel._internal_.RenderedDataPanel.md#completepickrequest)
- [dispose](perspective_view_panel._internal_.RenderedDataPanel.md#dispose)
- [disposed](perspective_view_panel._internal_.RenderedDataPanel.md#disposed)
- [draw](perspective_view_panel._internal_.RenderedDataPanel.md#draw)
- [drawWithPicking](perspective_view_panel._internal_.RenderedDataPanel.md#drawwithpicking)
- [ensureBoundsUpdated](perspective_view_panel._internal_.RenderedDataPanel.md#ensureboundsupdated)
- [getDepthArray](perspective_view_panel._internal_.RenderedDataPanel.md#getdeptharray)
- [handleMouseMove](perspective_view_panel._internal_.RenderedDataPanel.md#handlemousemove)
- [isReady](perspective_view_panel._internal_.RenderedDataPanel.md#isready)
- [issuePickRequest](perspective_view_panel._internal_.RenderedDataPanel.md#issuepickrequest)
- [issuePickRequestInternal](perspective_view_panel._internal_.RenderedDataPanel.md#issuepickrequestinternal)
- [mouseStateForcer](perspective_view_panel._internal_.RenderedDataPanel.md#mousestateforcer)
- [onMousemove](perspective_view_panel._internal_.RenderedDataPanel.md#onmousemove)
- [onMouseout](perspective_view_panel._internal_.RenderedDataPanel.md#onmouseout)
- [onTouchstart](perspective_view_panel._internal_.RenderedDataPanel.md#ontouchstart)
- [pendingPickRequestTimerExpired](perspective_view_panel._internal_.RenderedDataPanel.md#pendingpickrequesttimerexpired)
- [refCountReachedZero](perspective_view_panel._internal_.RenderedDataPanel.md#refcountreachedzero)
- [registerCancellable](perspective_view_panel._internal_.RenderedDataPanel.md#registercancellable)
- [registerDisposer](perspective_view_panel._internal_.RenderedDataPanel.md#registerdisposer)
- [registerEventListener](perspective_view_panel._internal_.RenderedDataPanel.md#registereventlistener)
- [scheduleCheckForPickRequestCompletion](perspective_view_panel._internal_.RenderedDataPanel.md#schedulecheckforpickrequestcompletion)
- [scheduleRedraw](perspective_view_panel._internal_.RenderedDataPanel.md#scheduleredraw)
- [setGLClippedViewport](perspective_view_panel._internal_.RenderedDataPanel.md#setglclippedviewport)
- [setGLLogicalViewport](perspective_view_panel._internal_.RenderedDataPanel.md#setgllogicalviewport)
- [translateByViewportPixels](perspective_view_panel._internal_.RenderedDataPanel.md#translatebyviewportpixels)
- [translateDataPointByViewportPixels](perspective_view_panel._internal_.RenderedDataPanel.md#translatedatapointbyviewportpixels)
- [unregisterDisposer](perspective_view_panel._internal_.RenderedDataPanel.md#unregisterdisposer)
- [updateMousePosition](perspective_view_panel._internal_.RenderedDataPanel.md#updatemouseposition)
- [zoomByMouse](perspective_view_panel._internal_.RenderedDataPanel.md#zoombymouse)

## Constructors

### constructor

• **new RenderedDataPanel**(`context`, `element`, `viewer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`DisplayContext`](annotation_annotation_layer_state._internal_.DisplayContext.md) |
| `element` | [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement) |
| `viewer` | [`RenderedDataViewerState`](../interfaces/perspective_view_panel._internal_.RenderedDataViewerState.md) |

#### Overrides

[RenderedPanel](annotation_annotation_layer_state._internal_.RenderedPanel.md).[constructor](annotation_annotation_layer_state._internal_.RenderedPanel.md#constructor)

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:391](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/rendered_data_panel.ts#L391)

## Properties

### boundsGeneration

• **boundsGeneration**: `number` = `-1`

#### Inherited from

[RenderedPanel](annotation_annotation_layer_state._internal_.RenderedPanel.md).[boundsGeneration](annotation_annotation_layer_state._internal_.RenderedPanel.md#boundsgeneration)

#### Defined in

[src/neuroglancer/display_context.ts:84](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L84)

___

### canvasRelativeClippedLeft

• **canvasRelativeClippedLeft**: `number` = `0`

#### Inherited from

[RenderedPanel](annotation_annotation_layer_state._internal_.RenderedPanel.md).[canvasRelativeClippedLeft](annotation_annotation_layer_state._internal_.RenderedPanel.md#canvasrelativeclippedleft)

#### Defined in

[src/neuroglancer/display_context.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L87)

___

### canvasRelativeClippedTop

• **canvasRelativeClippedTop**: `number` = `0`

#### Inherited from

[RenderedPanel](annotation_annotation_layer_state._internal_.RenderedPanel.md).[canvasRelativeClippedTop](annotation_annotation_layer_state._internal_.RenderedPanel.md#canvasrelativeclippedtop)

#### Defined in

[src/neuroglancer/display_context.ts:90](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L90)

___

### canvasRelativeLogicalLeft

• **canvasRelativeLogicalLeft**: `number` = `0`

#### Inherited from

[RenderedPanel](annotation_annotation_layer_state._internal_.RenderedPanel.md).[canvasRelativeLogicalLeft](annotation_annotation_layer_state._internal_.RenderedPanel.md#canvasrelativelogicalleft)

#### Defined in

[src/neuroglancer/display_context.ts:92](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L92)

___

### canvasRelativeLogicalTop

• **canvasRelativeLogicalTop**: `number` = `0`

#### Inherited from

[RenderedPanel](annotation_annotation_layer_state._internal_.RenderedPanel.md).[canvasRelativeLogicalTop](annotation_annotation_layer_state._internal_.RenderedPanel.md#canvasrelativelogicaltop)

#### Defined in

[src/neuroglancer/display_context.ts:93](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L93)

___

### context

• **context**: [`DisplayContext`](annotation_annotation_layer_state._internal_.DisplayContext.md)

#### Inherited from

[RenderedPanel](annotation_annotation_layer_state._internal_.RenderedPanel.md).[context](annotation_annotation_layer_state._internal_.RenderedPanel.md#context)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RenderedPanel](annotation_annotation_layer_state._internal_.RenderedPanel.md).[disposedStacks](annotation_annotation_layer_state._internal_.RenderedPanel.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement)

#### Inherited from

[RenderedPanel](annotation_annotation_layer_state._internal_.RenderedPanel.md).[element](annotation_annotation_layer_state._internal_.RenderedPanel.md#element)

___

### gl

• **gl**: [`GL`](../interfaces/webgl_context.GL.md)

#### Inherited from

[RenderedPanel](annotation_annotation_layer_state._internal_.RenderedPanel.md).[gl](annotation_annotation_layer_state._internal_.RenderedPanel.md#gl)

#### Defined in

[src/neuroglancer/display_context.ts:81](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L81)

___

### inputEventMap

• **inputEventMap**: [`EventActionMap`](util_event_action_map.EventActionMap.md)

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:150](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/rendered_data_panel.ts#L150)

___

### mouseX

• **mouseX**: `number` = `-1`

Current mouse position within the viewport, or -1 if the mouse is not in the viewport.

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:134](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/rendered_data_panel.ts#L134)

___

### mouseY

• **mouseY**: `number` = `-1`

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:135](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/rendered_data_panel.ts#L135)

___

### navigationState

• `Abstract` **navigationState**: [`NavigationState`](annotation_polygon._internal_.NavigationState.md)<[`TrackableZoomInterface`](../modules/annotation_polygon._internal_.md#trackablezoominterface)\>

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:152](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/rendered_data_panel.ts#L152)

___

### nextPickRequestTime

• `Private` **nextPickRequestTime**: `number` = `0`

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:318](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/rendered_data_panel.ts#L318)

___

### pendingPickRequestTimerId

• `Private` **pendingPickRequestTimerId**: `number` = `-1`

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:319](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/rendered_data_panel.ts#L319)

___

### pickBufferContents

• **pickBufferContents**: `Float32Array`

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

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:146](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/rendered_data_panel.ts#L146)

___

### pickRequests

• **pickRequests**: [`PickRequest`](perspective_view_panel._internal_.PickRequest.md)[]

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:155](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/rendered_data_panel.ts#L155)

___

### pickTimerId

• `Private` **pickTimerId**: `number` = `-1`

Timer id for checking if outstanding pick requests have completed.

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:166](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/rendered_data_panel.ts#L166)

___

### pickingData

• **pickingData**: [`FramePickingData`](perspective_view_panel._internal_.FramePickingData.md)[]

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:154](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/rendered_data_panel.ts#L154)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RenderedPanel](annotation_annotation_layer_state._internal_.RenderedPanel.md).[refCount](annotation_annotation_layer_state._internal_.RenderedPanel.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### renderViewport

• **renderViewport**: [`RenderViewport`](annotation_annotation_layer_state._internal_.RenderViewport.md)

#### Inherited from

[RenderedPanel](annotation_annotation_layer_state._internal_.RenderedPanel.md).[renderViewport](annotation_annotation_layer_state._internal_.RenderedPanel.md#renderviewport)

#### Defined in

[src/neuroglancer/display_context.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L95)

___

### viewer

• **viewer**: [`RenderedDataViewerState`](../interfaces/perspective_view_panel._internal_.RenderedDataViewerState.md)

___

### visibility

• **visibility**: [`WatchableVisibilityPriority`](visibility_priority_frontend.WatchableVisibilityPriority.md)

#### Inherited from

[RenderedPanel](annotation_annotation_layer_state._internal_.RenderedPanel.md).[visibility](annotation_annotation_layer_state._internal_.RenderedPanel.md#visibility)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RenderedPanel](annotation_annotation_layer_state._internal_.RenderedPanel.md).[wasDisposed](annotation_annotation_layer_state._internal_.RenderedPanel.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### drawOrder

• `get` **drawOrder**(): `number`

#### Returns

`number`

#### Inherited from

RenderedPanel.drawOrder

#### Defined in

[src/neuroglancer/display_context.ts:233](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L233)

___

### shouldDraw

• `get` **shouldDraw**(): `boolean`

#### Returns

`boolean`

#### Inherited from

RenderedPanel.shouldDraw

#### Defined in

[src/neuroglancer/display_context.ts:218](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L218)

___

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

RenderedPanel.visible

#### Defined in

[src/neuroglancer/display_context.ts:210](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L210)

## Methods

### addRef

▸ **addRef**(): [`RenderedDataPanel`](perspective_view_panel._internal_.RenderedDataPanel.md)

#### Returns

[`RenderedDataPanel`](perspective_view_panel._internal_.RenderedDataPanel.md)

#### Inherited from

[RenderedPanel](annotation_annotation_layer_state._internal_.RenderedPanel.md).[addRef](annotation_annotation_layer_state._internal_.RenderedPanel.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### attemptToIssuePickRequest

▸ `Private` **attemptToIssuePickRequest**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:340](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/rendered_data_panel.ts#L340)

___

### blockOnPickRequest

▸ `Private` **blockOnPickRequest**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:285](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/rendered_data_panel.ts#L285)

___

### canIssuePickRequest

▸ `Private` **canIssuePickRequest**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:327](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/rendered_data_panel.ts#L327)

___

### cancelPickRequests

▸ `Private` **cancelPickRequests**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:168](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/rendered_data_panel.ts#L168)

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

[src/neuroglancer/rendered_data_panel.ts:241](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/rendered_data_panel.ts#L241)

___

### completePickInternal

▸ `Private` **completePickInternal**(`pickRequest`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pickRequest` | [`PickRequest`](perspective_view_panel._internal_.PickRequest.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:221](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/rendered_data_panel.ts#L221)

___

### completePickRequest

▸ `Abstract` **completePickRequest**(`glWindowX`, `glWindowY`, `data`, `pickingData`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `glWindowX` | `number` |
| `glWindowY` | `number` |
| `data` | `Float32Array` |
| `pickingData` | [`FramePickingData`](perspective_view_panel._internal_.FramePickingData.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:217](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/rendered_data_panel.ts#L217)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RenderedPanel](annotation_annotation_layer_state._internal_.RenderedPanel.md).[dispose](annotation_annotation_layer_state._internal_.RenderedPanel.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

[RenderedPanel](annotation_annotation_layer_state._internal_.RenderedPanel.md).[disposed](annotation_annotation_layer_state._internal_.RenderedPanel.md#disposed)

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:918](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/rendered_data_panel.ts#L918)

___

### draw

▸ **draw**(): `void`

#### Returns

`void`

#### Overrides

[RenderedPanel](annotation_annotation_layer_state._internal_.RenderedPanel.md).[draw](annotation_annotation_layer_state._internal_.RenderedPanel.md#draw)

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:294](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/rendered_data_panel.ts#L294)

___

### drawWithPicking

▸ `Abstract` **drawWithPicking**(`pickingData`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pickingData` | [`FramePickingData`](perspective_view_panel._internal_.FramePickingData.md) |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:316](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/rendered_data_panel.ts#L316)

___

### ensureBoundsUpdated

▸ **ensureBoundsUpdated**(): `void`

#### Returns

`void`

#### Inherited from

[RenderedPanel](annotation_annotation_layer_state._internal_.RenderedPanel.md).[ensureBoundsUpdated](annotation_annotation_layer_state._internal_.RenderedPanel.md#ensureboundsupdated)

#### Defined in

[src/neuroglancer/display_context.ts:115](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L115)

___

### getDepthArray

▸ **getDepthArray**(): `undefined` \| `Float32Array`

#### Returns

`undefined` \| `Float32Array`

#### Inherited from

[RenderedPanel](annotation_annotation_layer_state._internal_.RenderedPanel.md).[getDepthArray](annotation_annotation_layer_state._internal_.RenderedPanel.md#getdeptharray)

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

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:889](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/rendered_data_panel.ts#L889)

___

### isReady

▸ `Abstract` **isReady**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[RenderedPanel](annotation_annotation_layer_state._internal_.RenderedPanel.md).[isReady](annotation_annotation_layer_state._internal_.RenderedPanel.md#isready)

#### Defined in

[src/neuroglancer/display_context.ts:113](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L113)

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

[src/neuroglancer/rendered_data_panel.ts:161](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/rendered_data_panel.ts#L161)

___

### issuePickRequestInternal

▸ `Private` **issuePickRequestInternal**(`pickRequest`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pickRequest` | [`PickRequest`](perspective_view_panel._internal_.PickRequest.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:181](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/rendered_data_panel.ts#L181)

___

### mouseStateForcer

▸ `Private` **mouseStateForcer**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:148](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/rendered_data_panel.ts#L148)

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

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:901](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/rendered_data_panel.ts#L901)

___

### onMouseout

▸ **onMouseout**(): `void`

#### Returns

`void`

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

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:909](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/rendered_data_panel.ts#L909)

___

### pendingPickRequestTimerExpired

▸ `Private` **pendingPickRequestTimerExpired**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:321](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/rendered_data_panel.ts#L321)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RenderedPanel](annotation_annotation_layer_state._internal_.RenderedPanel.md).[refCountReachedZero](annotation_annotation_layer_state._internal_.RenderedPanel.md#refcountreachedzero)

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

[RenderedPanel](annotation_annotation_layer_state._internal_.RenderedPanel.md).[registerCancellable](annotation_annotation_layer_state._internal_.RenderedPanel.md#registercancellable)

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

[RenderedPanel](annotation_annotation_layer_state._internal_.RenderedPanel.md).[registerDisposer](annotation_annotation_layer_state._internal_.RenderedPanel.md#registerdisposer)

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

[RenderedPanel](annotation_annotation_layer_state._internal_.RenderedPanel.md).[registerEventListener](annotation_annotation_layer_state._internal_.RenderedPanel.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L95)

___

### scheduleCheckForPickRequestCompletion

▸ `Private` **scheduleCheckForPickRequestCompletion**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/rendered_data_panel.ts#L234)

___

### scheduleRedraw

▸ **scheduleRedraw**(): `void`

#### Returns

`void`

#### Inherited from

[RenderedPanel](annotation_annotation_layer_state._internal_.RenderedPanel.md).[scheduleRedraw](annotation_annotation_layer_state._internal_.RenderedPanel.md#scheduleredraw)

#### Defined in

[src/neuroglancer/display_context.ts:107](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L107)

___

### setGLClippedViewport

▸ **setGLClippedViewport**(): `void`

#### Returns

`void`

#### Inherited from

[RenderedPanel](annotation_annotation_layer_state._internal_.RenderedPanel.md).[setGLClippedViewport](annotation_annotation_layer_state._internal_.RenderedPanel.md#setglclippedviewport)

#### Defined in

[src/neuroglancer/display_context.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L175)

___

### setGLLogicalViewport

▸ **setGLLogicalViewport**(): `void`

#### Returns

`void`

#### Inherited from

[RenderedPanel](annotation_annotation_layer_state._internal_.RenderedPanel.md).[setGLLogicalViewport](annotation_annotation_layer_state._internal_.RenderedPanel.md#setgllogicalviewport)

#### Defined in

[src/neuroglancer/display_context.ts:187](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L187)

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

[src/neuroglancer/rendered_data_panel.ts:887](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/rendered_data_panel.ts#L887)

___

### translateDataPointByViewportPixels

▸ `Abstract` **translateDataPointByViewportPixels**(`out`, `orig`, `deltaX`, `deltaY`): [`vec3`](util_geom.vec3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `out` | [`vec3`](util_geom.vec3.md) |
| `orig` | [`vec3`](util_geom.vec3.md) |
| `deltaX` | `number` |
| `deltaY` | `number` |

#### Returns

[`vec3`](util_geom.vec3.md)

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:879](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/rendered_data_panel.ts#L879)

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

[RenderedPanel](annotation_annotation_layer_state._internal_.RenderedPanel.md).[unregisterDisposer](annotation_annotation_layer_state._internal_.RenderedPanel.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)

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

[src/neuroglancer/rendered_data_panel.ts:366](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/rendered_data_panel.ts#L366)

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

[src/neuroglancer/rendered_data_panel.ts:933](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/rendered_data_panel.ts#L933)
