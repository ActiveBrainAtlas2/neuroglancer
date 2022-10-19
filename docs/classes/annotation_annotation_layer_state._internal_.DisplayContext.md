[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / DisplayContext

# Class: DisplayContext

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).DisplayContext

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`DisplayContext`**

## Implements

- [`FrameNumberCounter`](../interfaces/chunk_manager_frontend.FrameNumberCounter.md)

## Table of contents

### Constructors

- [constructor](annotation_annotation_layer_state._internal_.DisplayContext.md#constructor)

### Properties

- [boundsGeneration](annotation_annotation_layer_state._internal_.DisplayContext.md#boundsgeneration)
- [canvas](annotation_annotation_layer_state._internal_.DisplayContext.md#canvas)
- [canvasRect](annotation_annotation_layer_state._internal_.DisplayContext.md#canvasrect)
- [changed](annotation_annotation_layer_state._internal_.DisplayContext.md#changed)
- [container](annotation_annotation_layer_state._internal_.DisplayContext.md#container)
- [disposedStacks](annotation_annotation_layer_state._internal_.DisplayContext.md#disposedstacks)
- [frameNumber](annotation_annotation_layer_state._internal_.DisplayContext.md#framenumber)
- [gl](annotation_annotation_layer_state._internal_.DisplayContext.md#gl)
- [orderedPanels](annotation_annotation_layer_state._internal_.DisplayContext.md#orderedpanels)
- [panelAncestors](annotation_annotation_layer_state._internal_.DisplayContext.md#panelancestors)
- [panels](annotation_annotation_layer_state._internal_.DisplayContext.md#panels)
- [refCount](annotation_annotation_layer_state._internal_.DisplayContext.md#refcount)
- [resizeGeneration](annotation_annotation_layer_state._internal_.DisplayContext.md#resizegeneration)
- [resizeObserver](annotation_annotation_layer_state._internal_.DisplayContext.md#resizeobserver)
- [scheduleRedraw](annotation_annotation_layer_state._internal_.DisplayContext.md#scheduleredraw)
- [updateFinished](annotation_annotation_layer_state._internal_.DisplayContext.md#updatefinished)
- [updateStarted](annotation_annotation_layer_state._internal_.DisplayContext.md#updatestarted)
- [wasDisposed](annotation_annotation_layer_state._internal_.DisplayContext.md#wasdisposed)

### Methods

- [addPanel](annotation_annotation_layer_state._internal_.DisplayContext.md#addpanel)
- [addRef](annotation_annotation_layer_state._internal_.DisplayContext.md#addref)
- [applyWindowedViewportToElement](annotation_annotation_layer_state._internal_.DisplayContext.md#applywindowedviewporttoelement)
- [dispose](annotation_annotation_layer_state._internal_.DisplayContext.md#dispose)
- [disposed](annotation_annotation_layer_state._internal_.DisplayContext.md#disposed)
- [draw](annotation_annotation_layer_state._internal_.DisplayContext.md#draw)
- [ensureBoundsUpdated](annotation_annotation_layer_state._internal_.DisplayContext.md#ensureboundsupdated)
- [getDepthArray](annotation_annotation_layer_state._internal_.DisplayContext.md#getdeptharray)
- [isReady](annotation_annotation_layer_state._internal_.DisplayContext.md#isready)
- [makeCanvasOverlayElement](annotation_annotation_layer_state._internal_.DisplayContext.md#makecanvasoverlayelement)
- [monitorPanel](annotation_annotation_layer_state._internal_.DisplayContext.md#monitorpanel)
- [refCountReachedZero](annotation_annotation_layer_state._internal_.DisplayContext.md#refcountreachedzero)
- [registerCancellable](annotation_annotation_layer_state._internal_.DisplayContext.md#registercancellable)
- [registerDisposer](annotation_annotation_layer_state._internal_.DisplayContext.md#registerdisposer)
- [registerEventListener](annotation_annotation_layer_state._internal_.DisplayContext.md#registereventlistener)
- [removePanel](annotation_annotation_layer_state._internal_.DisplayContext.md#removepanel)
- [resizeCallback](annotation_annotation_layer_state._internal_.DisplayContext.md#resizecallback)
- [unmonitorPanel](annotation_annotation_layer_state._internal_.DisplayContext.md#unmonitorpanel)
- [unregisterDisposer](annotation_annotation_layer_state._internal_.DisplayContext.md#unregisterdisposer)

## Constructors

### constructor

• **new DisplayContext**(`container`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement) |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/display_context.ts:351](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L351)

## Properties

### boundsGeneration

• **boundsGeneration**: `number` = `-1`

#### Defined in

[src/neuroglancer/display_context.ts:298](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L298)

___

### canvas

• **canvas**: [`HTMLCanvasElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlcanvaselement)

#### Defined in

[src/neuroglancer/display_context.ts:290](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L290)

___

### canvasRect

• **canvasRect**: `undefined` \| [`ClientRect`](../interfaces/annotation_annotation_layer_state._internal_.ClientRect.md)

#### Defined in

[src/neuroglancer/display_context.ts:296](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L296)

___

### changed

• **changed**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Implementation of

[FrameNumberCounter](../interfaces/chunk_manager_frontend.FrameNumberCounter.md).[changed](../interfaces/chunk_manager_frontend.FrameNumberCounter.md#changed)

#### Defined in

[src/neuroglancer/display_context.ts:294](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L294)

___

### container

• **container**: [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### frameNumber

• **frameNumber**: `number` = `0`

Unique number of the next frame.  Incremented once each time a frame is drawn.

#### Implementation of

[FrameNumberCounter](../interfaces/chunk_manager_frontend.FrameNumberCounter.md).[frameNumber](../interfaces/chunk_manager_frontend.FrameNumberCounter.md#framenumber)

#### Defined in

[src/neuroglancer/display_context.ts:306](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L306)

___

### gl

• **gl**: [`GL`](../interfaces/webgl_context.GL.md)

#### Defined in

[src/neuroglancer/display_context.ts:291](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L291)

___

### orderedPanels

• `Private` **orderedPanels**: [`RenderedPanel`](annotation_annotation_layer_state._internal_.RenderedPanel.md)[] = `[]`

#### Defined in

[src/neuroglancer/display_context.ts:301](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L301)

___

### panelAncestors

• `Private` **panelAncestors**: `Map`<[`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement), { `count`: `number` ; `parent`: [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement)  }\>

#### Defined in

[src/neuroglancer/display_context.ts:308](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L308)

___

### panels

• **panels**: `Set`<[`RenderedPanel`](annotation_annotation_layer_state._internal_.RenderedPanel.md)\>

#### Defined in

[src/neuroglancer/display_context.ts:295](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L295)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### resizeGeneration

• **resizeGeneration**: `number` = `0`

#### Defined in

[src/neuroglancer/display_context.ts:297](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L297)

___

### resizeObserver

• `Private` **resizeObserver**: [`ResizeObserver`](../modules/annotation_annotation_layer_state._internal_.md#resizeobserver)

#### Defined in

[src/neuroglancer/display_context.ts:349](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L349)

___

### scheduleRedraw

• `Readonly` **scheduleRedraw**: [`DebouncedFunction`](../interfaces/util_animation_frame_debounce.DebouncedFunction.md)

#### Defined in

[src/neuroglancer/display_context.ts:438](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L438)

___

### updateFinished

• **updateFinished**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/display_context.ts:293](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L293)

___

### updateStarted

• **updateStarted**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/display_context.ts:292](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L292)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addPanel

▸ **addPanel**(`panel`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `panel` | [`RenderedPanel`](annotation_annotation_layer_state._internal_.RenderedPanel.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/display_context.ts:424](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L424)

___

### addRef

▸ **addRef**(): [`DisplayContext`](annotation_annotation_layer_state._internal_.DisplayContext.md)

#### Returns

[`DisplayContext`](annotation_annotation_layer_state._internal_.DisplayContext.md)

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[addRef](util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### applyWindowedViewportToElement

▸ **applyWindowedViewportToElement**(`element`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement) |
| `value` | `Float64Array` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/display_context.ts:376](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L376)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[dispose](util_disposable.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[disposed](util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/display_context.ts:419](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L419)

___

### draw

▸ **draw**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/display_context.ts:450](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L450)

___

### ensureBoundsUpdated

▸ **ensureBoundsUpdated**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/display_context.ts:440](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L440)

___

### getDepthArray

▸ **getDepthArray**(): `Float32Array`

#### Returns

`Float32Array`

#### Defined in

[src/neuroglancer/display_context.ts:479](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L479)

___

### isReady

▸ **isReady**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/display_context.ts:392](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L392)

___

### makeCanvasOverlayElement

▸ **makeCanvasOverlayElement**(): [`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement)

Returns a child element that overlays the canvas.

#### Returns

[`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/display_context.ts:407](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L407)

___

### monitorPanel

▸ **monitorPanel**(`element`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement) |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/display_context.ts:315](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L315)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCountReachedZero](util_disposable.RefCounted.md#refcountreachedzero)

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

[RefCounted](util_disposable.RefCounted.md).[registerCancellable](util_disposable.RefCounted.md#registercancellable)

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

[RefCounted](util_disposable.RefCounted.md).[registerDisposer](util_disposable.RefCounted.md#registerdisposer)

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

[RefCounted](util_disposable.RefCounted.md).[registerEventListener](util_disposable.RefCounted.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L95)

___

### removePanel

▸ **removePanel**(`panel`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `panel` | [`RenderedPanel`](annotation_annotation_layer_state._internal_.RenderedPanel.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/display_context.ts:431](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L431)

___

### resizeCallback

▸ `Private` **resizeCallback**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/display_context.ts:310](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L310)

___

### unmonitorPanel

▸ **unmonitorPanel**(`element`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/display_context.ts:334](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L334)

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

[RefCounted](util_disposable.RefCounted.md).[unregisterDisposer](util_disposable.RefCounted.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)
