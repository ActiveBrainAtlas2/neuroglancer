[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/display\_context](../modules/neuroglancer_display_context.md) / IndirectRenderedPanel

# Class: IndirectRenderedPanel

[neuroglancer/display_context](../modules/neuroglancer_display_context.md).IndirectRenderedPanel

## Hierarchy

- [`RenderedPanel`](neuroglancer_display_context.RenderedPanel.md)

  ↳ **`IndirectRenderedPanel`**

  ↳↳ [`CdfPanel`](neuroglancer_widget_invlerp._internal_.CdfPanel.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_display_context.IndirectRenderedPanel.md#constructor)

### Properties

- [boundsGeneration](neuroglancer_display_context.IndirectRenderedPanel.md#boundsgeneration)
- [canvas](neuroglancer_display_context.IndirectRenderedPanel.md#canvas)
- [canvasRelativeClippedLeft](neuroglancer_display_context.IndirectRenderedPanel.md#canvasrelativeclippedleft)
- [canvasRelativeClippedTop](neuroglancer_display_context.IndirectRenderedPanel.md#canvasrelativeclippedtop)
- [canvasRelativeLogicalLeft](neuroglancer_display_context.IndirectRenderedPanel.md#canvasrelativelogicalleft)
- [canvasRelativeLogicalTop](neuroglancer_display_context.IndirectRenderedPanel.md#canvasrelativelogicaltop)
- [canvasRenderingContext](neuroglancer_display_context.IndirectRenderedPanel.md#canvasrenderingcontext)
- [context](neuroglancer_display_context.IndirectRenderedPanel.md#context)
- [disposedStacks](neuroglancer_display_context.IndirectRenderedPanel.md#disposedstacks)
- [element](neuroglancer_display_context.IndirectRenderedPanel.md#element)
- [gl](neuroglancer_display_context.IndirectRenderedPanel.md#gl)
- [refCount](neuroglancer_display_context.IndirectRenderedPanel.md#refcount)
- [renderViewport](neuroglancer_display_context.IndirectRenderedPanel.md#renderviewport)
- [visibility](neuroglancer_display_context.IndirectRenderedPanel.md#visibility)
- [wasDisposed](neuroglancer_display_context.IndirectRenderedPanel.md#wasdisposed)

### Accessors

- [drawOrder](neuroglancer_display_context.IndirectRenderedPanel.md#draworder)
- [shouldDraw](neuroglancer_display_context.IndirectRenderedPanel.md#shoulddraw)
- [visible](neuroglancer_display_context.IndirectRenderedPanel.md#visible)

### Methods

- [addRef](neuroglancer_display_context.IndirectRenderedPanel.md#addref)
- [dispose](neuroglancer_display_context.IndirectRenderedPanel.md#dispose)
- [disposed](neuroglancer_display_context.IndirectRenderedPanel.md#disposed)
- [draw](neuroglancer_display_context.IndirectRenderedPanel.md#draw)
- [drawIndirect](neuroglancer_display_context.IndirectRenderedPanel.md#drawindirect)
- [ensureBoundsUpdated](neuroglancer_display_context.IndirectRenderedPanel.md#ensureboundsupdated)
- [getDepthArray](neuroglancer_display_context.IndirectRenderedPanel.md#getdeptharray)
- [isReady](neuroglancer_display_context.IndirectRenderedPanel.md#isready)
- [refCountReachedZero](neuroglancer_display_context.IndirectRenderedPanel.md#refcountreachedzero)
- [registerCancellable](neuroglancer_display_context.IndirectRenderedPanel.md#registercancellable)
- [registerDisposer](neuroglancer_display_context.IndirectRenderedPanel.md#registerdisposer)
- [registerEventListener](neuroglancer_display_context.IndirectRenderedPanel.md#registereventlistener)
- [scheduleRedraw](neuroglancer_display_context.IndirectRenderedPanel.md#scheduleredraw)
- [setGLClippedViewport](neuroglancer_display_context.IndirectRenderedPanel.md#setglclippedviewport)
- [setGLLogicalViewport](neuroglancer_display_context.IndirectRenderedPanel.md#setgllogicalviewport)
- [unregisterDisposer](neuroglancer_display_context.IndirectRenderedPanel.md#unregisterdisposer)

## Constructors

### constructor

• **new IndirectRenderedPanel**(`context`, `element`, `visibility`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`DisplayContext`](neuroglancer_display_context.DisplayContext.md) |
| `element` | [`HTMLElement`](../modules/main_module._internal_.md#htmlelement) |
| `visibility` | [`WatchableVisibilityPriority`](neuroglancer_visibility_priority_frontend.WatchableVisibilityPriority.md) |

#### Overrides

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[constructor](neuroglancer_display_context.RenderedPanel.md#constructor)

#### Defined in

[src/neuroglancer/display_context.ts:241](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/display_context.ts#L241)

## Properties

### boundsGeneration

• **boundsGeneration**: `number` = `-1`

#### Inherited from

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[boundsGeneration](neuroglancer_display_context.RenderedPanel.md#boundsgeneration)

#### Defined in

[src/neuroglancer/display_context.ts:84](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/display_context.ts#L84)

___

### canvas

• **canvas**: [`HTMLCanvasElement`](../modules/main_module._internal_.md#htmlcanvaselement)

#### Defined in

[src/neuroglancer/display_context.ts:239](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/display_context.ts#L239)

___

### canvasRelativeClippedLeft

• **canvasRelativeClippedLeft**: `number` = `0`

#### Inherited from

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[canvasRelativeClippedLeft](neuroglancer_display_context.RenderedPanel.md#canvasrelativeclippedleft)

#### Defined in

[src/neuroglancer/display_context.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/display_context.ts#L87)

___

### canvasRelativeClippedTop

• **canvasRelativeClippedTop**: `number` = `0`

#### Inherited from

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[canvasRelativeClippedTop](neuroglancer_display_context.RenderedPanel.md#canvasrelativeclippedtop)

#### Defined in

[src/neuroglancer/display_context.ts:90](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/display_context.ts#L90)

___

### canvasRelativeLogicalLeft

• **canvasRelativeLogicalLeft**: `number` = `0`

#### Inherited from

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[canvasRelativeLogicalLeft](neuroglancer_display_context.RenderedPanel.md#canvasrelativelogicalleft)

#### Defined in

[src/neuroglancer/display_context.ts:92](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/display_context.ts#L92)

___

### canvasRelativeLogicalTop

• **canvasRelativeLogicalTop**: `number` = `0`

#### Inherited from

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[canvasRelativeLogicalTop](neuroglancer_display_context.RenderedPanel.md#canvasrelativelogicaltop)

#### Defined in

[src/neuroglancer/display_context.ts:93](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/display_context.ts#L93)

___

### canvasRenderingContext

• **canvasRenderingContext**: ``null`` \| [`CanvasRenderingContext2D`](../modules/main_module._internal_.md#canvasrenderingcontext2d)

#### Defined in

[src/neuroglancer/display_context.ts:240](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/display_context.ts#L240)

___

### context

• **context**: [`DisplayContext`](neuroglancer_display_context.DisplayContext.md)

#### Inherited from

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[context](neuroglancer_display_context.RenderedPanel.md#context)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[disposedStacks](neuroglancer_display_context.RenderedPanel.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)

#### Inherited from

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[element](neuroglancer_display_context.RenderedPanel.md#element)

___

### gl

• **gl**: [`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

#### Inherited from

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[gl](neuroglancer_display_context.RenderedPanel.md#gl)

#### Defined in

[src/neuroglancer/display_context.ts:81](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/display_context.ts#L81)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[refCount](neuroglancer_display_context.RenderedPanel.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### renderViewport

• **renderViewport**: [`RenderViewport`](neuroglancer_display_context.RenderViewport.md)

#### Inherited from

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[renderViewport](neuroglancer_display_context.RenderedPanel.md#renderviewport)

#### Defined in

[src/neuroglancer/display_context.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/display_context.ts#L95)

___

### visibility

• **visibility**: [`WatchableVisibilityPriority`](neuroglancer_visibility_priority_frontend.WatchableVisibilityPriority.md)

#### Inherited from

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[visibility](neuroglancer_display_context.RenderedPanel.md#visibility)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[wasDisposed](neuroglancer_display_context.RenderedPanel.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### drawOrder

• `get` **drawOrder**(): `number`

#### Returns

`number`

#### Inherited from

RenderedPanel.drawOrder

#### Defined in

[src/neuroglancer/display_context.ts:233](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/display_context.ts#L233)

___

### shouldDraw

• `get` **shouldDraw**(): `boolean`

#### Returns

`boolean`

#### Inherited from

RenderedPanel.shouldDraw

#### Defined in

[src/neuroglancer/display_context.ts:218](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/display_context.ts#L218)

___

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

RenderedPanel.visible

#### Defined in

[src/neuroglancer/display_context.ts:210](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/display_context.ts#L210)

## Methods

### addRef

▸ **addRef**(): [`IndirectRenderedPanel`](neuroglancer_display_context.IndirectRenderedPanel.md)

#### Returns

[`IndirectRenderedPanel`](neuroglancer_display_context.IndirectRenderedPanel.md)

#### Inherited from

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[addRef](neuroglancer_display_context.RenderedPanel.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[dispose](neuroglancer_display_context.RenderedPanel.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[disposed](neuroglancer_display_context.RenderedPanel.md#disposed)

#### Defined in

[src/neuroglancer/display_context.ts:202](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/display_context.ts#L202)

___

### draw

▸ **draw**(): `void`

#### Returns

`void`

#### Overrides

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[draw](neuroglancer_display_context.RenderedPanel.md#draw)

#### Defined in

[src/neuroglancer/display_context.ts:257](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/display_context.ts#L257)

___

### drawIndirect

▸ `Abstract` **drawIndirect**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/display_context.ts:255](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/display_context.ts#L255)

___

### ensureBoundsUpdated

▸ **ensureBoundsUpdated**(): `void`

#### Returns

`void`

#### Inherited from

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[ensureBoundsUpdated](neuroglancer_display_context.RenderedPanel.md#ensureboundsupdated)

#### Defined in

[src/neuroglancer/display_context.ts:115](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/display_context.ts#L115)

___

### getDepthArray

▸ **getDepthArray**(): `undefined` \| `Float32Array`

#### Returns

`undefined` \| `Float32Array`

#### Inherited from

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[getDepthArray](neuroglancer_display_context.RenderedPanel.md#getdeptharray)

#### Defined in

[src/neuroglancer/display_context.ts:214](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/display_context.ts#L214)

___

### isReady

▸ `Abstract` **isReady**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[isReady](neuroglancer_display_context.RenderedPanel.md#isready)

#### Defined in

[src/neuroglancer/display_context.ts:113](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/display_context.ts#L113)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[refCountReachedZero](neuroglancer_display_context.RenderedPanel.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L66)

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

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L100)

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

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L76)

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

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L95)

___

### scheduleRedraw

▸ **scheduleRedraw**(): `void`

#### Returns

`void`

#### Inherited from

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[scheduleRedraw](neuroglancer_display_context.RenderedPanel.md#scheduleredraw)

#### Defined in

[src/neuroglancer/display_context.ts:107](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/display_context.ts#L107)

___

### setGLClippedViewport

▸ **setGLClippedViewport**(): `void`

#### Returns

`void`

#### Inherited from

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[setGLClippedViewport](neuroglancer_display_context.RenderedPanel.md#setglclippedviewport)

#### Defined in

[src/neuroglancer/display_context.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/display_context.ts#L175)

___

### setGLLogicalViewport

▸ **setGLLogicalViewport**(): `void`

#### Returns

`void`

#### Inherited from

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[setGLLogicalViewport](neuroglancer_display_context.RenderedPanel.md#setgllogicalviewport)

#### Defined in

[src/neuroglancer/display_context.ts:187](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/display_context.ts#L187)

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

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L85)
