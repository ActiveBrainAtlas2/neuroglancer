[neuroglancer](../README.md) / [Modules](../modules.md) / [rendered\_data\_panel](../modules/rendered_data_panel.md) / RenderedDataPanel

# Class: RenderedDataPanel

[rendered_data_panel](../modules/rendered_data_panel.md).RenderedDataPanel

## Hierarchy

- [`RenderedPanel`](display_context.RenderedPanel.md)

  ↳ **`RenderedDataPanel`**

## Table of contents

### Constructors

- [constructor](rendered_data_panel.RenderedDataPanel.md#constructor)

### Properties

- [boundsGeneration](rendered_data_panel.RenderedDataPanel.md#boundsgeneration)
- [canvasRelativeClippedLeft](rendered_data_panel.RenderedDataPanel.md#canvasrelativeclippedleft)
- [canvasRelativeClippedTop](rendered_data_panel.RenderedDataPanel.md#canvasrelativeclippedtop)
- [canvasRelativeLogicalLeft](rendered_data_panel.RenderedDataPanel.md#canvasrelativelogicalleft)
- [canvasRelativeLogicalTop](rendered_data_panel.RenderedDataPanel.md#canvasrelativelogicaltop)
- [context](rendered_data_panel.RenderedDataPanel.md#context)
- [disposedStacks](rendered_data_panel.RenderedDataPanel.md#disposedstacks)
- [element](rendered_data_panel.RenderedDataPanel.md#element)
- [gl](rendered_data_panel.RenderedDataPanel.md#gl)
- [inputEventMap](rendered_data_panel.RenderedDataPanel.md#inputeventmap)
- [mouseX](rendered_data_panel.RenderedDataPanel.md#mousex)
- [mouseY](rendered_data_panel.RenderedDataPanel.md#mousey)
- [navigationState](rendered_data_panel.RenderedDataPanel.md#navigationstate)
- [nextPickRequestTime](rendered_data_panel.RenderedDataPanel.md#nextpickrequesttime)
- [pendingPickRequestTimerId](rendered_data_panel.RenderedDataPanel.md#pendingpickrequesttimerid)
- [pickBufferContents](rendered_data_panel.RenderedDataPanel.md#pickbuffercontents)
- [pickRequestPending](rendered_data_panel.RenderedDataPanel.md#pickrequestpending)
- [pickRequests](rendered_data_panel.RenderedDataPanel.md#pickrequests)
- [pickTimerId](rendered_data_panel.RenderedDataPanel.md#picktimerid)
- [pickingData](rendered_data_panel.RenderedDataPanel.md#pickingdata)
- [refCount](rendered_data_panel.RenderedDataPanel.md#refcount)
- [renderViewport](rendered_data_panel.RenderedDataPanel.md#renderviewport)
- [viewer](rendered_data_panel.RenderedDataPanel.md#viewer)
- [visibility](rendered_data_panel.RenderedDataPanel.md#visibility)
- [wasDisposed](rendered_data_panel.RenderedDataPanel.md#wasdisposed)

### Accessors

- [drawOrder](rendered_data_panel.RenderedDataPanel.md#draworder)
- [shouldDraw](rendered_data_panel.RenderedDataPanel.md#shoulddraw)
- [visible](rendered_data_panel.RenderedDataPanel.md#visible)

### Methods

- [addRef](rendered_data_panel.RenderedDataPanel.md#addref)
- [attemptToIssuePickRequest](rendered_data_panel.RenderedDataPanel.md#attempttoissuepickrequest)
- [blockOnPickRequest](rendered_data_panel.RenderedDataPanel.md#blockonpickrequest)
- [canIssuePickRequest](rendered_data_panel.RenderedDataPanel.md#canissuepickrequest)
- [cancelPickRequests](rendered_data_panel.RenderedDataPanel.md#cancelpickrequests)
- [checkForPickRequestCompletion](rendered_data_panel.RenderedDataPanel.md#checkforpickrequestcompletion)
- [completePickInternal](rendered_data_panel.RenderedDataPanel.md#completepickinternal)
- [completePickRequest](rendered_data_panel.RenderedDataPanel.md#completepickrequest)
- [dispose](rendered_data_panel.RenderedDataPanel.md#dispose)
- [disposed](rendered_data_panel.RenderedDataPanel.md#disposed)
- [draw](rendered_data_panel.RenderedDataPanel.md#draw)
- [drawWithPicking](rendered_data_panel.RenderedDataPanel.md#drawwithpicking)
- [ensureBoundsUpdated](rendered_data_panel.RenderedDataPanel.md#ensureboundsupdated)
- [getDepthArray](rendered_data_panel.RenderedDataPanel.md#getdeptharray)
- [handleMouseMove](rendered_data_panel.RenderedDataPanel.md#handlemousemove)
- [isReady](rendered_data_panel.RenderedDataPanel.md#isready)
- [issuePickRequest](rendered_data_panel.RenderedDataPanel.md#issuepickrequest)
- [issuePickRequestInternal](rendered_data_panel.RenderedDataPanel.md#issuepickrequestinternal)
- [mouseStateForcer](rendered_data_panel.RenderedDataPanel.md#mousestateforcer)
- [onMousemove](rendered_data_panel.RenderedDataPanel.md#onmousemove)
- [onMouseout](rendered_data_panel.RenderedDataPanel.md#onmouseout)
- [onTouchstart](rendered_data_panel.RenderedDataPanel.md#ontouchstart)
- [pendingPickRequestTimerExpired](rendered_data_panel.RenderedDataPanel.md#pendingpickrequesttimerexpired)
- [refCountReachedZero](rendered_data_panel.RenderedDataPanel.md#refcountreachedzero)
- [registerCancellable](rendered_data_panel.RenderedDataPanel.md#registercancellable)
- [registerDisposer](rendered_data_panel.RenderedDataPanel.md#registerdisposer)
- [registerEventListener](rendered_data_panel.RenderedDataPanel.md#registereventlistener)
- [scheduleCheckForPickRequestCompletion](rendered_data_panel.RenderedDataPanel.md#schedulecheckforpickrequestcompletion)
- [scheduleRedraw](rendered_data_panel.RenderedDataPanel.md#scheduleredraw)
- [setGLClippedViewport](rendered_data_panel.RenderedDataPanel.md#setglclippedviewport)
- [setGLLogicalViewport](rendered_data_panel.RenderedDataPanel.md#setgllogicalviewport)
- [translateByViewportPixels](rendered_data_panel.RenderedDataPanel.md#translatebyviewportpixels)
- [translateDataPointByViewportPixels](rendered_data_panel.RenderedDataPanel.md#translatedatapointbyviewportpixels)
- [unregisterDisposer](rendered_data_panel.RenderedDataPanel.md#unregisterdisposer)
- [updateMousePosition](rendered_data_panel.RenderedDataPanel.md#updatemouseposition)
- [zoomByMouse](rendered_data_panel.RenderedDataPanel.md#zoombymouse)

## Constructors

### constructor

• **new RenderedDataPanel**(`context`, `element`, `viewer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`DisplayContext`](display_context.DisplayContext.md) |
| `element` | `HTMLElement` |
| `viewer` | [`RenderedDataViewerState`](../interfaces/rendered_data_panel.RenderedDataViewerState.md) |

#### Overrides

[RenderedPanel](display_context.RenderedPanel.md).[constructor](display_context.RenderedPanel.md#constructor)

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:391](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/rendered_data_panel.ts#L391)

## Properties

### boundsGeneration

• **boundsGeneration**: `number` = `-1`

#### Inherited from

[RenderedPanel](display_context.RenderedPanel.md).[boundsGeneration](display_context.RenderedPanel.md#boundsgeneration)

#### Defined in

[src/neuroglancer/display_context.ts:84](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/display_context.ts#L84)

___

### canvasRelativeClippedLeft

• **canvasRelativeClippedLeft**: `number` = `0`

#### Inherited from

[RenderedPanel](display_context.RenderedPanel.md).[canvasRelativeClippedLeft](display_context.RenderedPanel.md#canvasrelativeclippedleft)

#### Defined in

[src/neuroglancer/display_context.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/display_context.ts#L87)

___

### canvasRelativeClippedTop

• **canvasRelativeClippedTop**: `number` = `0`

#### Inherited from

[RenderedPanel](display_context.RenderedPanel.md).[canvasRelativeClippedTop](display_context.RenderedPanel.md#canvasrelativeclippedtop)

#### Defined in

[src/neuroglancer/display_context.ts:90](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/display_context.ts#L90)

___

### canvasRelativeLogicalLeft

• **canvasRelativeLogicalLeft**: `number` = `0`

#### Inherited from

[RenderedPanel](display_context.RenderedPanel.md).[canvasRelativeLogicalLeft](display_context.RenderedPanel.md#canvasrelativelogicalleft)

#### Defined in

[src/neuroglancer/display_context.ts:92](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/display_context.ts#L92)

___

### canvasRelativeLogicalTop

• **canvasRelativeLogicalTop**: `number` = `0`

#### Inherited from

[RenderedPanel](display_context.RenderedPanel.md).[canvasRelativeLogicalTop](display_context.RenderedPanel.md#canvasrelativelogicaltop)

#### Defined in

[src/neuroglancer/display_context.ts:93](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/display_context.ts#L93)

___

### context

• **context**: [`DisplayContext`](display_context.DisplayContext.md)

#### Inherited from

[RenderedPanel](display_context.RenderedPanel.md).[context](display_context.RenderedPanel.md#context)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RenderedPanel](display_context.RenderedPanel.md).[disposedStacks](display_context.RenderedPanel.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: `HTMLElement`

#### Inherited from

[RenderedPanel](display_context.RenderedPanel.md).[element](display_context.RenderedPanel.md#element)

___

### gl

• **gl**: `GL`

#### Inherited from

[RenderedPanel](display_context.RenderedPanel.md).[gl](display_context.RenderedPanel.md#gl)

#### Defined in

[src/neuroglancer/display_context.ts:81](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/display_context.ts#L81)

___

### inputEventMap

• **inputEventMap**: `EventActionMap`

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:150](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/rendered_data_panel.ts#L150)

___

### mouseX

• **mouseX**: `number` = `-1`

Current mouse position within the viewport, or -1 if the mouse is not in the viewport.

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:134](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/rendered_data_panel.ts#L134)

___

### mouseY

• **mouseY**: `number` = `-1`

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:135](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/rendered_data_panel.ts#L135)

___

### navigationState

• `Abstract` **navigationState**: [`NavigationState`](navigation_state.NavigationState.md)<[`TrackableZoomInterface`](../modules/navigation_state.md#trackablezoominterface)\>

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:152](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/rendered_data_panel.ts#L152)

___

### nextPickRequestTime

• `Private` **nextPickRequestTime**: `number` = `0`

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:318](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/rendered_data_panel.ts#L318)

___

### pendingPickRequestTimerId

• `Private` **pendingPickRequestTimerId**: `number` = `-1`

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:319](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/rendered_data_panel.ts#L319)

___

### pickBufferContents

• **pickBufferContents**: `Float32Array`

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:156](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/rendered_data_panel.ts#L156)

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

[src/neuroglancer/rendered_data_panel.ts:146](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/rendered_data_panel.ts#L146)

___

### pickRequests

• **pickRequests**: [`PickRequest`](rendered_data_panel.PickRequest.md)[]

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:155](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/rendered_data_panel.ts#L155)

___

### pickTimerId

• `Private` **pickTimerId**: `number` = `-1`

Timer id for checking if outstanding pick requests have completed.

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:166](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/rendered_data_panel.ts#L166)

___

### pickingData

• **pickingData**: [`FramePickingData`](rendered_data_panel.FramePickingData.md)[]

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:154](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/rendered_data_panel.ts#L154)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RenderedPanel](display_context.RenderedPanel.md).[refCount](display_context.RenderedPanel.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L45)

___

### renderViewport

• **renderViewport**: [`RenderViewport`](display_context.RenderViewport.md)

#### Inherited from

[RenderedPanel](display_context.RenderedPanel.md).[renderViewport](display_context.RenderedPanel.md#renderviewport)

#### Defined in

[src/neuroglancer/display_context.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/display_context.ts#L95)

___

### viewer

• **viewer**: [`RenderedDataViewerState`](../interfaces/rendered_data_panel.RenderedDataViewerState.md)

___

### visibility

• **visibility**: `WatchableVisibilityPriority`

#### Inherited from

[RenderedPanel](display_context.RenderedPanel.md).[visibility](display_context.RenderedPanel.md#visibility)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RenderedPanel](display_context.RenderedPanel.md).[wasDisposed](display_context.RenderedPanel.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### drawOrder

• `get` **drawOrder**(): `number`

#### Returns

`number`

#### Inherited from

RenderedPanel.drawOrder

#### Defined in

[src/neuroglancer/display_context.ts:233](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/display_context.ts#L233)

___

### shouldDraw

• `get` **shouldDraw**(): `boolean`

#### Returns

`boolean`

#### Inherited from

RenderedPanel.shouldDraw

#### Defined in

[src/neuroglancer/display_context.ts:218](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/display_context.ts#L218)

___

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

RenderedPanel.visible

#### Defined in

[src/neuroglancer/display_context.ts:210](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/display_context.ts#L210)

## Methods

### addRef

▸ **addRef**(): [`RenderedDataPanel`](rendered_data_panel.RenderedDataPanel.md)

#### Returns

[`RenderedDataPanel`](rendered_data_panel.RenderedDataPanel.md)

#### Inherited from

[RenderedPanel](display_context.RenderedPanel.md).[addRef](display_context.RenderedPanel.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L48)

___

### attemptToIssuePickRequest

▸ `Private` **attemptToIssuePickRequest**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:340](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/rendered_data_panel.ts#L340)

___

### blockOnPickRequest

▸ `Private` **blockOnPickRequest**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:285](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/rendered_data_panel.ts#L285)

___

### canIssuePickRequest

▸ `Private` **canIssuePickRequest**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:327](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/rendered_data_panel.ts#L327)

___

### cancelPickRequests

▸ `Private` **cancelPickRequests**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:168](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/rendered_data_panel.ts#L168)

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

[src/neuroglancer/rendered_data_panel.ts:241](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/rendered_data_panel.ts#L241)

___

### completePickInternal

▸ `Private` **completePickInternal**(`pickRequest`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pickRequest` | [`PickRequest`](rendered_data_panel.PickRequest.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:221](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/rendered_data_panel.ts#L221)

___

### completePickRequest

▸ `Abstract` **completePickRequest**(`glWindowX`, `glWindowY`, `data`, `pickingData`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `glWindowX` | `number` |
| `glWindowY` | `number` |
| `data` | `Float32Array` |
| `pickingData` | [`FramePickingData`](rendered_data_panel.FramePickingData.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:217](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/rendered_data_panel.ts#L217)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RenderedPanel](display_context.RenderedPanel.md).[dispose](display_context.RenderedPanel.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

[RenderedPanel](display_context.RenderedPanel.md).[disposed](display_context.RenderedPanel.md#disposed)

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:918](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/rendered_data_panel.ts#L918)

___

### draw

▸ **draw**(): `void`

#### Returns

`void`

#### Overrides

[RenderedPanel](display_context.RenderedPanel.md).[draw](display_context.RenderedPanel.md#draw)

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:294](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/rendered_data_panel.ts#L294)

___

### drawWithPicking

▸ `Abstract` **drawWithPicking**(`pickingData`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pickingData` | [`FramePickingData`](rendered_data_panel.FramePickingData.md) |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:316](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/rendered_data_panel.ts#L316)

___

### ensureBoundsUpdated

▸ **ensureBoundsUpdated**(): `void`

#### Returns

`void`

#### Inherited from

[RenderedPanel](display_context.RenderedPanel.md).[ensureBoundsUpdated](display_context.RenderedPanel.md#ensureboundsupdated)

#### Defined in

[src/neuroglancer/display_context.ts:115](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/display_context.ts#L115)

___

### getDepthArray

▸ **getDepthArray**(): `undefined` \| `Float32Array`

#### Returns

`undefined` \| `Float32Array`

#### Inherited from

[RenderedPanel](display_context.RenderedPanel.md).[getDepthArray](display_context.RenderedPanel.md#getdeptharray)

#### Defined in

[src/neuroglancer/display_context.ts:214](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/display_context.ts#L214)

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

[src/neuroglancer/rendered_data_panel.ts:889](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/rendered_data_panel.ts#L889)

___

### isReady

▸ `Abstract` **isReady**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[RenderedPanel](display_context.RenderedPanel.md).[isReady](display_context.RenderedPanel.md#isready)

#### Defined in

[src/neuroglancer/display_context.ts:113](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/display_context.ts#L113)

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

[src/neuroglancer/rendered_data_panel.ts:161](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/rendered_data_panel.ts#L161)

___

### issuePickRequestInternal

▸ `Private` **issuePickRequestInternal**(`pickRequest`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pickRequest` | [`PickRequest`](rendered_data_panel.PickRequest.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:181](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/rendered_data_panel.ts#L181)

___

### mouseStateForcer

▸ `Private` **mouseStateForcer**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:148](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/rendered_data_panel.ts#L148)

___

### onMousemove

▸ **onMousemove**(`event`, `atOnly?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `event` | `MouseEvent` | `undefined` |
| `atOnly` | `boolean` | `true` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:901](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/rendered_data_panel.ts#L901)

___

### onMouseout

▸ **onMouseout**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:882](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/rendered_data_panel.ts#L882)

___

### onTouchstart

▸ **onTouchstart**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `TouchEvent` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:909](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/rendered_data_panel.ts#L909)

___

### pendingPickRequestTimerExpired

▸ `Private` **pendingPickRequestTimerExpired**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:321](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/rendered_data_panel.ts#L321)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RenderedPanel](display_context.RenderedPanel.md).[refCountReachedZero](display_context.RenderedPanel.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L66)

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

[RenderedPanel](display_context.RenderedPanel.md).[registerCancellable](display_context.RenderedPanel.md#registercancellable)

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L100)

___

### registerDisposer

▸ **registerDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Disposer` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[RenderedPanel](display_context.RenderedPanel.md).[registerDisposer](display_context.RenderedPanel.md#registerdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L76)

___

### registerEventListener

▸ **registerEventListener**(`target`, `type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `EventTarget` |
| `type` | `string` |
| `listener` | `EventListenerOrEventListenerObject` |
| `options?` | `boolean` \| `AddEventListenerOptions` |

#### Returns

`void`

#### Inherited from

[RenderedPanel](display_context.RenderedPanel.md).[registerEventListener](display_context.RenderedPanel.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L95)

___

### scheduleCheckForPickRequestCompletion

▸ `Private` **scheduleCheckForPickRequestCompletion**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/rendered_data_panel.ts#L234)

___

### scheduleRedraw

▸ **scheduleRedraw**(): `void`

#### Returns

`void`

#### Inherited from

[RenderedPanel](display_context.RenderedPanel.md).[scheduleRedraw](display_context.RenderedPanel.md#scheduleredraw)

#### Defined in

[src/neuroglancer/display_context.ts:107](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/display_context.ts#L107)

___

### setGLClippedViewport

▸ **setGLClippedViewport**(): `void`

#### Returns

`void`

#### Inherited from

[RenderedPanel](display_context.RenderedPanel.md).[setGLClippedViewport](display_context.RenderedPanel.md#setglclippedviewport)

#### Defined in

[src/neuroglancer/display_context.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/display_context.ts#L175)

___

### setGLLogicalViewport

▸ **setGLLogicalViewport**(): `void`

#### Returns

`void`

#### Inherited from

[RenderedPanel](display_context.RenderedPanel.md).[setGLLogicalViewport](display_context.RenderedPanel.md#setgllogicalviewport)

#### Defined in

[src/neuroglancer/display_context.ts:187](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/display_context.ts#L187)

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

[src/neuroglancer/rendered_data_panel.ts:887](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/rendered_data_panel.ts#L887)

___

### translateDataPointByViewportPixels

▸ `Abstract` **translateDataPointByViewportPixels**(`out`, `orig`, `deltaX`, `deltaY`): `vec3`

#### Parameters

| Name | Type |
| :------ | :------ |
| `out` | `vec3` |
| `orig` | `vec3` |
| `deltaX` | `number` |
| `deltaY` | `number` |

#### Returns

`vec3`

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:879](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/rendered_data_panel.ts#L879)

___

### unregisterDisposer

▸ **unregisterDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Disposer` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[RenderedPanel](display_context.RenderedPanel.md).[unregisterDisposer](display_context.RenderedPanel.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L85)

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

[src/neuroglancer/rendered_data_panel.ts:366](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/rendered_data_panel.ts#L366)

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

[src/neuroglancer/rendered_data_panel.ts:933](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/rendered_data_panel.ts#L933)
