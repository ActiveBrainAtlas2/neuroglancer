[neuroglancer](../README.md) / [Modules](../modules.md) / [widget/invlerp](../modules/widget_invlerp.md) / [<internal\>](../modules/widget_invlerp._internal_.md) / CdfPanel

# Class: CdfPanel

[widget/invlerp](../modules/widget_invlerp.md).[<internal>](../modules/widget_invlerp._internal_.md).CdfPanel

## Hierarchy

- [`IndirectRenderedPanel`](widget_invlerp._internal_.IndirectRenderedPanel.md)

  ↳ **`CdfPanel`**

## Table of contents

### Constructors

- [constructor](widget_invlerp._internal_.CdfPanel.md#constructor)

### Properties

- [boundsGeneration](widget_invlerp._internal_.CdfPanel.md#boundsgeneration)
- [canvas](widget_invlerp._internal_.CdfPanel.md#canvas)
- [canvasRelativeClippedLeft](widget_invlerp._internal_.CdfPanel.md#canvasrelativeclippedleft)
- [canvasRelativeClippedTop](widget_invlerp._internal_.CdfPanel.md#canvasrelativeclippedtop)
- [canvasRelativeLogicalLeft](widget_invlerp._internal_.CdfPanel.md#canvasrelativelogicalleft)
- [canvasRelativeLogicalTop](widget_invlerp._internal_.CdfPanel.md#canvasrelativelogicaltop)
- [canvasRenderingContext](widget_invlerp._internal_.CdfPanel.md#canvasrenderingcontext)
- [context](widget_invlerp._internal_.CdfPanel.md#context)
- [controller](widget_invlerp._internal_.CdfPanel.md#controller)
- [dataValuesBuffer](widget_invlerp._internal_.CdfPanel.md#datavaluesbuffer)
- [disposedStacks](widget_invlerp._internal_.CdfPanel.md#disposedstacks)
- [element](widget_invlerp._internal_.CdfPanel.md#element)
- [gl](widget_invlerp._internal_.CdfPanel.md#gl)
- [lineShader](widget_invlerp._internal_.CdfPanel.md#lineshader)
- [parent](widget_invlerp._internal_.CdfPanel.md#parent)
- [refCount](widget_invlerp._internal_.CdfPanel.md#refcount)
- [regionCornersBuffer](widget_invlerp._internal_.CdfPanel.md#regioncornersbuffer)
- [regionShader](widget_invlerp._internal_.CdfPanel.md#regionshader)
- [renderViewport](widget_invlerp._internal_.CdfPanel.md#renderviewport)
- [visibility](widget_invlerp._internal_.CdfPanel.md#visibility)
- [wasDisposed](widget_invlerp._internal_.CdfPanel.md#wasdisposed)

### Accessors

- [drawOrder](widget_invlerp._internal_.CdfPanel.md#draworder)
- [shouldDraw](widget_invlerp._internal_.CdfPanel.md#shoulddraw)
- [visible](widget_invlerp._internal_.CdfPanel.md#visible)

### Methods

- [addRef](widget_invlerp._internal_.CdfPanel.md#addref)
- [dispose](widget_invlerp._internal_.CdfPanel.md#dispose)
- [disposed](widget_invlerp._internal_.CdfPanel.md#disposed)
- [draw](widget_invlerp._internal_.CdfPanel.md#draw)
- [drawIndirect](widget_invlerp._internal_.CdfPanel.md#drawindirect)
- [ensureBoundsUpdated](widget_invlerp._internal_.CdfPanel.md#ensureboundsupdated)
- [getDepthArray](widget_invlerp._internal_.CdfPanel.md#getdeptharray)
- [isReady](widget_invlerp._internal_.CdfPanel.md#isready)
- [refCountReachedZero](widget_invlerp._internal_.CdfPanel.md#refcountreachedzero)
- [registerCancellable](widget_invlerp._internal_.CdfPanel.md#registercancellable)
- [registerDisposer](widget_invlerp._internal_.CdfPanel.md#registerdisposer)
- [registerEventListener](widget_invlerp._internal_.CdfPanel.md#registereventlistener)
- [scheduleRedraw](widget_invlerp._internal_.CdfPanel.md#scheduleredraw)
- [setGLClippedViewport](widget_invlerp._internal_.CdfPanel.md#setglclippedviewport)
- [setGLLogicalViewport](widget_invlerp._internal_.CdfPanel.md#setgllogicalviewport)
- [unregisterDisposer](widget_invlerp._internal_.CdfPanel.md#unregisterdisposer)

## Constructors

### constructor

• **new CdfPanel**(`parent`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`InvlerpWidget`](widget_invlerp.InvlerpWidget.md) |

#### Overrides

[IndirectRenderedPanel](widget_invlerp._internal_.IndirectRenderedPanel.md).[constructor](widget_invlerp._internal_.IndirectRenderedPanel.md#constructor)

#### Defined in

[src/neuroglancer/widget/invlerp.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/invlerp.ts#L192)

## Properties

### boundsGeneration

• **boundsGeneration**: `number` = `-1`

#### Inherited from

[IndirectRenderedPanel](widget_invlerp._internal_.IndirectRenderedPanel.md).[boundsGeneration](widget_invlerp._internal_.IndirectRenderedPanel.md#boundsgeneration)

#### Defined in

[src/neuroglancer/display_context.ts:84](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L84)

___

### canvas

• **canvas**: [`HTMLCanvasElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlcanvaselement)

#### Inherited from

[IndirectRenderedPanel](widget_invlerp._internal_.IndirectRenderedPanel.md).[canvas](widget_invlerp._internal_.IndirectRenderedPanel.md#canvas)

#### Defined in

[src/neuroglancer/display_context.ts:239](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L239)

___

### canvasRelativeClippedLeft

• **canvasRelativeClippedLeft**: `number` = `0`

#### Inherited from

[IndirectRenderedPanel](widget_invlerp._internal_.IndirectRenderedPanel.md).[canvasRelativeClippedLeft](widget_invlerp._internal_.IndirectRenderedPanel.md#canvasrelativeclippedleft)

#### Defined in

[src/neuroglancer/display_context.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L87)

___

### canvasRelativeClippedTop

• **canvasRelativeClippedTop**: `number` = `0`

#### Inherited from

[IndirectRenderedPanel](widget_invlerp._internal_.IndirectRenderedPanel.md).[canvasRelativeClippedTop](widget_invlerp._internal_.IndirectRenderedPanel.md#canvasrelativeclippedtop)

#### Defined in

[src/neuroglancer/display_context.ts:90](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L90)

___

### canvasRelativeLogicalLeft

• **canvasRelativeLogicalLeft**: `number` = `0`

#### Inherited from

[IndirectRenderedPanel](widget_invlerp._internal_.IndirectRenderedPanel.md).[canvasRelativeLogicalLeft](widget_invlerp._internal_.IndirectRenderedPanel.md#canvasrelativelogicalleft)

#### Defined in

[src/neuroglancer/display_context.ts:92](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L92)

___

### canvasRelativeLogicalTop

• **canvasRelativeLogicalTop**: `number` = `0`

#### Inherited from

[IndirectRenderedPanel](widget_invlerp._internal_.IndirectRenderedPanel.md).[canvasRelativeLogicalTop](widget_invlerp._internal_.IndirectRenderedPanel.md#canvasrelativelogicaltop)

#### Defined in

[src/neuroglancer/display_context.ts:93](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L93)

___

### canvasRenderingContext

• **canvasRenderingContext**: ``null`` \| [`CanvasRenderingContext2D`](../modules/annotation_annotation_layer_state._internal_.md#canvasrenderingcontext2d)

#### Inherited from

[IndirectRenderedPanel](widget_invlerp._internal_.IndirectRenderedPanel.md).[canvasRenderingContext](widget_invlerp._internal_.IndirectRenderedPanel.md#canvasrenderingcontext)

#### Defined in

[src/neuroglancer/display_context.ts:240](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L240)

___

### context

• **context**: [`DisplayContext`](annotation_annotation_layer_state._internal_.DisplayContext.md)

#### Inherited from

[IndirectRenderedPanel](widget_invlerp._internal_.IndirectRenderedPanel.md).[context](widget_invlerp._internal_.IndirectRenderedPanel.md#context)

___

### controller

• **controller**: [`CdfController`](widget_invlerp.CdfController.md)<[`InvlerpParameters`](../interfaces/webgl_shader_ui_controls.InvlerpParameters.md)\>

#### Defined in

[src/neuroglancer/widget/invlerp.ts:187](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/invlerp.ts#L187)

___

### dataValuesBuffer

• `Private` **dataValuesBuffer**: [`Buffer`](webgl_buffer.Buffer.md)

#### Defined in

[src/neuroglancer/widget/invlerp.ts:198](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/invlerp.ts#L198)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[IndirectRenderedPanel](widget_invlerp._internal_.IndirectRenderedPanel.md).[disposedStacks](widget_invlerp._internal_.IndirectRenderedPanel.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement)

#### Inherited from

[IndirectRenderedPanel](widget_invlerp._internal_.IndirectRenderedPanel.md).[element](widget_invlerp._internal_.IndirectRenderedPanel.md#element)

___

### gl

• **gl**: [`GL`](../interfaces/webgl_context.GL.md)

#### Inherited from

[IndirectRenderedPanel](widget_invlerp._internal_.IndirectRenderedPanel.md).[gl](widget_invlerp._internal_.IndirectRenderedPanel.md#gl)

#### Defined in

[src/neuroglancer/display_context.ts:81](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L81)

___

### lineShader

• `Private` **lineShader**: [`ShaderProgram`](webgl_shader.ShaderProgram.md)

#### Defined in

[src/neuroglancer/widget/invlerp.ts:209](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/invlerp.ts#L209)

___

### parent

• **parent**: [`InvlerpWidget`](widget_invlerp.InvlerpWidget.md)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[IndirectRenderedPanel](widget_invlerp._internal_.IndirectRenderedPanel.md).[refCount](widget_invlerp._internal_.IndirectRenderedPanel.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### regionCornersBuffer

• `Private` **regionCornersBuffer**: [`Buffer`](webgl_buffer.Buffer.md)

#### Defined in

[src/neuroglancer/widget/invlerp.ts:258](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/invlerp.ts#L258)

___

### regionShader

• `Private` **regionShader**: [`ShaderProgram`](webgl_shader.ShaderProgram.md)

#### Defined in

[src/neuroglancer/widget/invlerp.ts:260](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/invlerp.ts#L260)

___

### renderViewport

• **renderViewport**: [`RenderViewport`](annotation_annotation_layer_state._internal_.RenderViewport.md)

#### Inherited from

[IndirectRenderedPanel](widget_invlerp._internal_.IndirectRenderedPanel.md).[renderViewport](widget_invlerp._internal_.IndirectRenderedPanel.md#renderviewport)

#### Defined in

[src/neuroglancer/display_context.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L95)

___

### visibility

• **visibility**: [`WatchableVisibilityPriority`](visibility_priority_frontend.WatchableVisibilityPriority.md)

#### Inherited from

[IndirectRenderedPanel](widget_invlerp._internal_.IndirectRenderedPanel.md).[visibility](widget_invlerp._internal_.IndirectRenderedPanel.md#visibility)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[IndirectRenderedPanel](widget_invlerp._internal_.IndirectRenderedPanel.md).[wasDisposed](widget_invlerp._internal_.IndirectRenderedPanel.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### drawOrder

• `get` **drawOrder**(): `number`

#### Returns

`number`

#### Overrides

IndirectRenderedPanel.drawOrder

#### Defined in

[src/neuroglancer/widget/invlerp.ts:184](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/invlerp.ts#L184)

___

### shouldDraw

• `get` **shouldDraw**(): `boolean`

#### Returns

`boolean`

#### Inherited from

IndirectRenderedPanel.shouldDraw

#### Defined in

[src/neuroglancer/display_context.ts:218](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L218)

___

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

IndirectRenderedPanel.visible

#### Defined in

[src/neuroglancer/display_context.ts:210](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L210)

## Methods

### addRef

▸ **addRef**(): [`CdfPanel`](widget_invlerp._internal_.CdfPanel.md)

#### Returns

[`CdfPanel`](widget_invlerp._internal_.CdfPanel.md)

#### Inherited from

[IndirectRenderedPanel](widget_invlerp._internal_.IndirectRenderedPanel.md).[addRef](widget_invlerp._internal_.IndirectRenderedPanel.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[IndirectRenderedPanel](widget_invlerp._internal_.IndirectRenderedPanel.md).[dispose](widget_invlerp._internal_.IndirectRenderedPanel.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[IndirectRenderedPanel](widget_invlerp._internal_.IndirectRenderedPanel.md).[disposed](widget_invlerp._internal_.IndirectRenderedPanel.md#disposed)

#### Defined in

[src/neuroglancer/display_context.ts:202](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L202)

___

### draw

▸ **draw**(): `void`

#### Returns

`void`

#### Inherited from

[IndirectRenderedPanel](widget_invlerp._internal_.IndirectRenderedPanel.md).[draw](widget_invlerp._internal_.IndirectRenderedPanel.md#draw)

#### Defined in

[src/neuroglancer/display_context.ts:257](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L257)

___

### drawIndirect

▸ **drawIndirect**(): `void`

#### Returns

`void`

#### Overrides

[IndirectRenderedPanel](widget_invlerp._internal_.IndirectRenderedPanel.md).[drawIndirect](widget_invlerp._internal_.IndirectRenderedPanel.md#drawindirect)

#### Defined in

[src/neuroglancer/widget/invlerp.ts:275](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/invlerp.ts#L275)

___

### ensureBoundsUpdated

▸ **ensureBoundsUpdated**(): `void`

#### Returns

`void`

#### Inherited from

[IndirectRenderedPanel](widget_invlerp._internal_.IndirectRenderedPanel.md).[ensureBoundsUpdated](widget_invlerp._internal_.IndirectRenderedPanel.md#ensureboundsupdated)

#### Defined in

[src/neuroglancer/display_context.ts:115](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L115)

___

### getDepthArray

▸ **getDepthArray**(): `undefined` \| `Float32Array`

#### Returns

`undefined` \| `Float32Array`

#### Inherited from

[IndirectRenderedPanel](widget_invlerp._internal_.IndirectRenderedPanel.md).[getDepthArray](widget_invlerp._internal_.IndirectRenderedPanel.md#getdeptharray)

#### Defined in

[src/neuroglancer/display_context.ts:214](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L214)

___

### isReady

▸ **isReady**(): `boolean`

#### Returns

`boolean`

#### Overrides

[IndirectRenderedPanel](widget_invlerp._internal_.IndirectRenderedPanel.md).[isReady](widget_invlerp._internal_.IndirectRenderedPanel.md#isready)

#### Defined in

[src/neuroglancer/widget/invlerp.ts:324](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/invlerp.ts#L324)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[IndirectRenderedPanel](widget_invlerp._internal_.IndirectRenderedPanel.md).[refCountReachedZero](widget_invlerp._internal_.IndirectRenderedPanel.md#refcountreachedzero)

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

[IndirectRenderedPanel](widget_invlerp._internal_.IndirectRenderedPanel.md).[registerCancellable](widget_invlerp._internal_.IndirectRenderedPanel.md#registercancellable)

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

[IndirectRenderedPanel](widget_invlerp._internal_.IndirectRenderedPanel.md).[registerDisposer](widget_invlerp._internal_.IndirectRenderedPanel.md#registerdisposer)

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

[IndirectRenderedPanel](widget_invlerp._internal_.IndirectRenderedPanel.md).[registerEventListener](widget_invlerp._internal_.IndirectRenderedPanel.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L95)

___

### scheduleRedraw

▸ **scheduleRedraw**(): `void`

#### Returns

`void`

#### Inherited from

[IndirectRenderedPanel](widget_invlerp._internal_.IndirectRenderedPanel.md).[scheduleRedraw](widget_invlerp._internal_.IndirectRenderedPanel.md#scheduleredraw)

#### Defined in

[src/neuroglancer/display_context.ts:107](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L107)

___

### setGLClippedViewport

▸ **setGLClippedViewport**(): `void`

#### Returns

`void`

#### Inherited from

[IndirectRenderedPanel](widget_invlerp._internal_.IndirectRenderedPanel.md).[setGLClippedViewport](widget_invlerp._internal_.IndirectRenderedPanel.md#setglclippedviewport)

#### Defined in

[src/neuroglancer/display_context.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L175)

___

### setGLLogicalViewport

▸ **setGLLogicalViewport**(): `void`

#### Returns

`void`

#### Inherited from

[IndirectRenderedPanel](widget_invlerp._internal_.IndirectRenderedPanel.md).[setGLLogicalViewport](widget_invlerp._internal_.IndirectRenderedPanel.md#setgllogicalviewport)

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

[IndirectRenderedPanel](widget_invlerp._internal_.IndirectRenderedPanel.md).[unregisterDisposer](widget_invlerp._internal_.IndirectRenderedPanel.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)
