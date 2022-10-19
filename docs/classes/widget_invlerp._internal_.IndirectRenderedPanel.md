[neuroglancer](../README.md) / [Modules](../modules.md) / [widget/invlerp](../modules/widget_invlerp.md) / [<internal\>](../modules/widget_invlerp._internal_.md) / IndirectRenderedPanel

# Class: IndirectRenderedPanel

[widget/invlerp](../modules/widget_invlerp.md).[<internal>](../modules/widget_invlerp._internal_.md).IndirectRenderedPanel

## Hierarchy

- [`RenderedPanel`](annotation_annotation_layer_state._internal_.RenderedPanel.md)

  ↳ **`IndirectRenderedPanel`**

  ↳↳ [`CdfPanel`](widget_invlerp._internal_.CdfPanel.md)

## Table of contents

### Constructors

- [constructor](widget_invlerp._internal_.IndirectRenderedPanel.md#constructor)

### Properties

- [boundsGeneration](widget_invlerp._internal_.IndirectRenderedPanel.md#boundsgeneration)
- [canvas](widget_invlerp._internal_.IndirectRenderedPanel.md#canvas)
- [canvasRelativeClippedLeft](widget_invlerp._internal_.IndirectRenderedPanel.md#canvasrelativeclippedleft)
- [canvasRelativeClippedTop](widget_invlerp._internal_.IndirectRenderedPanel.md#canvasrelativeclippedtop)
- [canvasRelativeLogicalLeft](widget_invlerp._internal_.IndirectRenderedPanel.md#canvasrelativelogicalleft)
- [canvasRelativeLogicalTop](widget_invlerp._internal_.IndirectRenderedPanel.md#canvasrelativelogicaltop)
- [canvasRenderingContext](widget_invlerp._internal_.IndirectRenderedPanel.md#canvasrenderingcontext)
- [context](widget_invlerp._internal_.IndirectRenderedPanel.md#context)
- [disposedStacks](widget_invlerp._internal_.IndirectRenderedPanel.md#disposedstacks)
- [element](widget_invlerp._internal_.IndirectRenderedPanel.md#element)
- [gl](widget_invlerp._internal_.IndirectRenderedPanel.md#gl)
- [refCount](widget_invlerp._internal_.IndirectRenderedPanel.md#refcount)
- [renderViewport](widget_invlerp._internal_.IndirectRenderedPanel.md#renderviewport)
- [visibility](widget_invlerp._internal_.IndirectRenderedPanel.md#visibility)
- [wasDisposed](widget_invlerp._internal_.IndirectRenderedPanel.md#wasdisposed)

### Accessors

- [drawOrder](widget_invlerp._internal_.IndirectRenderedPanel.md#draworder)
- [shouldDraw](widget_invlerp._internal_.IndirectRenderedPanel.md#shoulddraw)
- [visible](widget_invlerp._internal_.IndirectRenderedPanel.md#visible)

### Methods

- [addRef](widget_invlerp._internal_.IndirectRenderedPanel.md#addref)
- [dispose](widget_invlerp._internal_.IndirectRenderedPanel.md#dispose)
- [disposed](widget_invlerp._internal_.IndirectRenderedPanel.md#disposed)
- [draw](widget_invlerp._internal_.IndirectRenderedPanel.md#draw)
- [drawIndirect](widget_invlerp._internal_.IndirectRenderedPanel.md#drawindirect)
- [ensureBoundsUpdated](widget_invlerp._internal_.IndirectRenderedPanel.md#ensureboundsupdated)
- [getDepthArray](widget_invlerp._internal_.IndirectRenderedPanel.md#getdeptharray)
- [isReady](widget_invlerp._internal_.IndirectRenderedPanel.md#isready)
- [refCountReachedZero](widget_invlerp._internal_.IndirectRenderedPanel.md#refcountreachedzero)
- [registerCancellable](widget_invlerp._internal_.IndirectRenderedPanel.md#registercancellable)
- [registerDisposer](widget_invlerp._internal_.IndirectRenderedPanel.md#registerdisposer)
- [registerEventListener](widget_invlerp._internal_.IndirectRenderedPanel.md#registereventlistener)
- [scheduleRedraw](widget_invlerp._internal_.IndirectRenderedPanel.md#scheduleredraw)
- [setGLClippedViewport](widget_invlerp._internal_.IndirectRenderedPanel.md#setglclippedviewport)
- [setGLLogicalViewport](widget_invlerp._internal_.IndirectRenderedPanel.md#setgllogicalviewport)
- [unregisterDisposer](widget_invlerp._internal_.IndirectRenderedPanel.md#unregisterdisposer)

## Constructors

### constructor

• **new IndirectRenderedPanel**(`context`, `element`, `visibility`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`DisplayContext`](annotation_annotation_layer_state._internal_.DisplayContext.md) |
| `element` | [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement) |
| `visibility` | [`WatchableVisibilityPriority`](visibility_priority_frontend.WatchableVisibilityPriority.md) |

#### Overrides

[RenderedPanel](annotation_annotation_layer_state._internal_.RenderedPanel.md).[constructor](annotation_annotation_layer_state._internal_.RenderedPanel.md#constructor)

#### Defined in

[src/neuroglancer/display_context.ts:241](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L241)

## Properties

### boundsGeneration

• **boundsGeneration**: `number` = `-1`

#### Inherited from

[RenderedPanel](annotation_annotation_layer_state._internal_.RenderedPanel.md).[boundsGeneration](annotation_annotation_layer_state._internal_.RenderedPanel.md#boundsgeneration)

#### Defined in

[src/neuroglancer/display_context.ts:84](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L84)

___

### canvas

• **canvas**: [`HTMLCanvasElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlcanvaselement)

#### Defined in

[src/neuroglancer/display_context.ts:239](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L239)

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

### canvasRenderingContext

• **canvasRenderingContext**: ``null`` \| [`CanvasRenderingContext2D`](../modules/annotation_annotation_layer_state._internal_.md#canvasrenderingcontext2d)

#### Defined in

[src/neuroglancer/display_context.ts:240](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L240)

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

▸ **addRef**(): [`IndirectRenderedPanel`](widget_invlerp._internal_.IndirectRenderedPanel.md)

#### Returns

[`IndirectRenderedPanel`](widget_invlerp._internal_.IndirectRenderedPanel.md)

#### Inherited from

[RenderedPanel](annotation_annotation_layer_state._internal_.RenderedPanel.md).[addRef](annotation_annotation_layer_state._internal_.RenderedPanel.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

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

#### Inherited from

[RenderedPanel](annotation_annotation_layer_state._internal_.RenderedPanel.md).[disposed](annotation_annotation_layer_state._internal_.RenderedPanel.md#disposed)

#### Defined in

[src/neuroglancer/display_context.ts:202](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L202)

___

### draw

▸ **draw**(): `void`

#### Returns

`void`

#### Overrides

[RenderedPanel](annotation_annotation_layer_state._internal_.RenderedPanel.md).[draw](annotation_annotation_layer_state._internal_.RenderedPanel.md#draw)

#### Defined in

[src/neuroglancer/display_context.ts:257](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L257)

___

### drawIndirect

▸ `Abstract` **drawIndirect**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/display_context.ts:255](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L255)

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

### isReady

▸ `Abstract` **isReady**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[RenderedPanel](annotation_annotation_layer_state._internal_.RenderedPanel.md).[isReady](annotation_annotation_layer_state._internal_.RenderedPanel.md#isready)

#### Defined in

[src/neuroglancer/display_context.ts:113](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L113)

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
