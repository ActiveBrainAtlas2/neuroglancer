[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / RenderedPanel

# Class: RenderedPanel

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).RenderedPanel

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`RenderedPanel`**

  ↳↳ [`HistogramPanel`](widget_histogram.HistogramPanel.md)

  ↳↳ [`RenderedDataPanel`](perspective_view_panel._internal_.RenderedDataPanel.md)

  ↳↳ [`IndirectRenderedPanel`](widget_invlerp._internal_.IndirectRenderedPanel.md)

## Table of contents

### Constructors

- [constructor](annotation_annotation_layer_state._internal_.RenderedPanel.md#constructor)

### Properties

- [boundsGeneration](annotation_annotation_layer_state._internal_.RenderedPanel.md#boundsgeneration)
- [boundsObserversRegistered](annotation_annotation_layer_state._internal_.RenderedPanel.md#boundsobserversregistered)
- [canvasRelativeClippedLeft](annotation_annotation_layer_state._internal_.RenderedPanel.md#canvasrelativeclippedleft)
- [canvasRelativeClippedTop](annotation_annotation_layer_state._internal_.RenderedPanel.md#canvasrelativeclippedtop)
- [canvasRelativeLogicalLeft](annotation_annotation_layer_state._internal_.RenderedPanel.md#canvasrelativelogicalleft)
- [canvasRelativeLogicalTop](annotation_annotation_layer_state._internal_.RenderedPanel.md#canvasrelativelogicaltop)
- [context](annotation_annotation_layer_state._internal_.RenderedPanel.md#context)
- [disposedStacks](annotation_annotation_layer_state._internal_.RenderedPanel.md#disposedstacks)
- [element](annotation_annotation_layer_state._internal_.RenderedPanel.md#element)
- [gl](annotation_annotation_layer_state._internal_.RenderedPanel.md#gl)
- [refCount](annotation_annotation_layer_state._internal_.RenderedPanel.md#refcount)
- [renderViewport](annotation_annotation_layer_state._internal_.RenderedPanel.md#renderviewport)
- [visibility](annotation_annotation_layer_state._internal_.RenderedPanel.md#visibility)
- [wasDisposed](annotation_annotation_layer_state._internal_.RenderedPanel.md#wasdisposed)

### Accessors

- [drawOrder](annotation_annotation_layer_state._internal_.RenderedPanel.md#draworder)
- [shouldDraw](annotation_annotation_layer_state._internal_.RenderedPanel.md#shoulddraw)
- [visible](annotation_annotation_layer_state._internal_.RenderedPanel.md#visible)

### Methods

- [addRef](annotation_annotation_layer_state._internal_.RenderedPanel.md#addref)
- [dispose](annotation_annotation_layer_state._internal_.RenderedPanel.md#dispose)
- [disposed](annotation_annotation_layer_state._internal_.RenderedPanel.md#disposed)
- [draw](annotation_annotation_layer_state._internal_.RenderedPanel.md#draw)
- [ensureBoundsUpdated](annotation_annotation_layer_state._internal_.RenderedPanel.md#ensureboundsupdated)
- [getDepthArray](annotation_annotation_layer_state._internal_.RenderedPanel.md#getdeptharray)
- [isReady](annotation_annotation_layer_state._internal_.RenderedPanel.md#isready)
- [refCountReachedZero](annotation_annotation_layer_state._internal_.RenderedPanel.md#refcountreachedzero)
- [registerCancellable](annotation_annotation_layer_state._internal_.RenderedPanel.md#registercancellable)
- [registerDisposer](annotation_annotation_layer_state._internal_.RenderedPanel.md#registerdisposer)
- [registerEventListener](annotation_annotation_layer_state._internal_.RenderedPanel.md#registereventlistener)
- [scheduleRedraw](annotation_annotation_layer_state._internal_.RenderedPanel.md#scheduleredraw)
- [setGLClippedViewport](annotation_annotation_layer_state._internal_.RenderedPanel.md#setglclippedviewport)
- [setGLLogicalViewport](annotation_annotation_layer_state._internal_.RenderedPanel.md#setgllogicalviewport)
- [unregisterDisposer](annotation_annotation_layer_state._internal_.RenderedPanel.md#unregisterdisposer)

## Constructors

### constructor

• **new RenderedPanel**(`context`, `element`, `visibility`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`DisplayContext`](annotation_annotation_layer_state._internal_.DisplayContext.md) |
| `element` | [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement) |
| `visibility` | [`WatchableVisibilityPriority`](visibility_priority_frontend.WatchableVisibilityPriority.md) |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/display_context.ts:99](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L99)

## Properties

### boundsGeneration

• **boundsGeneration**: `number` = `-1`

#### Defined in

[src/neuroglancer/display_context.ts:84](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L84)

___

### boundsObserversRegistered

• `Private` **boundsObserversRegistered**: `boolean` = `false`

#### Defined in

[src/neuroglancer/display_context.ts:97](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L97)

___

### canvasRelativeClippedLeft

• **canvasRelativeClippedLeft**: `number` = `0`

#### Defined in

[src/neuroglancer/display_context.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L87)

___

### canvasRelativeClippedTop

• **canvasRelativeClippedTop**: `number` = `0`

#### Defined in

[src/neuroglancer/display_context.ts:90](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L90)

___

### canvasRelativeLogicalLeft

• **canvasRelativeLogicalLeft**: `number` = `0`

#### Defined in

[src/neuroglancer/display_context.ts:92](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L92)

___

### canvasRelativeLogicalTop

• **canvasRelativeLogicalTop**: `number` = `0`

#### Defined in

[src/neuroglancer/display_context.ts:93](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L93)

___

### context

• **context**: [`DisplayContext`](annotation_annotation_layer_state._internal_.DisplayContext.md)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement)

___

### gl

• **gl**: [`GL`](../interfaces/webgl_context.GL.md)

#### Defined in

[src/neuroglancer/display_context.ts:81](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L81)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### renderViewport

• **renderViewport**: [`RenderViewport`](annotation_annotation_layer_state._internal_.RenderViewport.md)

#### Defined in

[src/neuroglancer/display_context.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L95)

___

### visibility

• **visibility**: [`WatchableVisibilityPriority`](visibility_priority_frontend.WatchableVisibilityPriority.md)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### drawOrder

• `get` **drawOrder**(): `number`

#### Returns

`number`

#### Defined in

[src/neuroglancer/display_context.ts:233](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L233)

___

### shouldDraw

• `get` **shouldDraw**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/display_context.ts:218](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L218)

___

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/display_context.ts:210](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L210)

## Methods

### addRef

▸ **addRef**(): [`RenderedPanel`](annotation_annotation_layer_state._internal_.RenderedPanel.md)

#### Returns

[`RenderedPanel`](annotation_annotation_layer_state._internal_.RenderedPanel.md)

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[addRef](util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

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

[src/neuroglancer/display_context.ts:202](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L202)

___

### draw

▸ `Abstract` **draw**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/display_context.ts:200](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L200)

___

### ensureBoundsUpdated

▸ **ensureBoundsUpdated**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/display_context.ts:115](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L115)

___

### getDepthArray

▸ **getDepthArray**(): `undefined` \| `Float32Array`

#### Returns

`undefined` \| `Float32Array`

#### Defined in

[src/neuroglancer/display_context.ts:214](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L214)

___

### isReady

▸ `Abstract` **isReady**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/display_context.ts:113](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L113)

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

### scheduleRedraw

▸ **scheduleRedraw**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/display_context.ts:107](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L107)

___

### setGLClippedViewport

▸ **setGLClippedViewport**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/display_context.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L175)

___

### setGLLogicalViewport

▸ **setGLLogicalViewport**(): `void`

#### Returns

`void`

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

[RefCounted](util_disposable.RefCounted.md).[unregisterDisposer](util_disposable.RefCounted.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)
