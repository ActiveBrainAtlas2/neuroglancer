[neuroglancer](../README.md) / [Modules](../modules.md) / [display\_context](../modules/display_context.md) / IndirectRenderedPanel

# Class: IndirectRenderedPanel

[display_context](../modules/display_context.md).IndirectRenderedPanel

## Hierarchy

- [`RenderedPanel`](display_context.RenderedPanel.md)

  ↳ **`IndirectRenderedPanel`**

## Table of contents

### Constructors

- [constructor](display_context.IndirectRenderedPanel.md#constructor)

### Properties

- [boundsGeneration](display_context.IndirectRenderedPanel.md#boundsgeneration)
- [canvas](display_context.IndirectRenderedPanel.md#canvas)
- [canvasRelativeClippedLeft](display_context.IndirectRenderedPanel.md#canvasrelativeclippedleft)
- [canvasRelativeClippedTop](display_context.IndirectRenderedPanel.md#canvasrelativeclippedtop)
- [canvasRelativeLogicalLeft](display_context.IndirectRenderedPanel.md#canvasrelativelogicalleft)
- [canvasRelativeLogicalTop](display_context.IndirectRenderedPanel.md#canvasrelativelogicaltop)
- [canvasRenderingContext](display_context.IndirectRenderedPanel.md#canvasrenderingcontext)
- [context](display_context.IndirectRenderedPanel.md#context)
- [disposedStacks](display_context.IndirectRenderedPanel.md#disposedstacks)
- [element](display_context.IndirectRenderedPanel.md#element)
- [gl](display_context.IndirectRenderedPanel.md#gl)
- [refCount](display_context.IndirectRenderedPanel.md#refcount)
- [renderViewport](display_context.IndirectRenderedPanel.md#renderviewport)
- [visibility](display_context.IndirectRenderedPanel.md#visibility)
- [wasDisposed](display_context.IndirectRenderedPanel.md#wasdisposed)

### Accessors

- [drawOrder](display_context.IndirectRenderedPanel.md#draworder)
- [shouldDraw](display_context.IndirectRenderedPanel.md#shoulddraw)
- [visible](display_context.IndirectRenderedPanel.md#visible)

### Methods

- [addRef](display_context.IndirectRenderedPanel.md#addref)
- [dispose](display_context.IndirectRenderedPanel.md#dispose)
- [disposed](display_context.IndirectRenderedPanel.md#disposed)
- [draw](display_context.IndirectRenderedPanel.md#draw)
- [drawIndirect](display_context.IndirectRenderedPanel.md#drawindirect)
- [ensureBoundsUpdated](display_context.IndirectRenderedPanel.md#ensureboundsupdated)
- [getDepthArray](display_context.IndirectRenderedPanel.md#getdeptharray)
- [isReady](display_context.IndirectRenderedPanel.md#isready)
- [refCountReachedZero](display_context.IndirectRenderedPanel.md#refcountreachedzero)
- [registerCancellable](display_context.IndirectRenderedPanel.md#registercancellable)
- [registerDisposer](display_context.IndirectRenderedPanel.md#registerdisposer)
- [registerEventListener](display_context.IndirectRenderedPanel.md#registereventlistener)
- [scheduleRedraw](display_context.IndirectRenderedPanel.md#scheduleredraw)
- [setGLClippedViewport](display_context.IndirectRenderedPanel.md#setglclippedviewport)
- [setGLLogicalViewport](display_context.IndirectRenderedPanel.md#setgllogicalviewport)
- [unregisterDisposer](display_context.IndirectRenderedPanel.md#unregisterdisposer)

## Constructors

### constructor

• **new IndirectRenderedPanel**(`context`, `element`, `visibility`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`DisplayContext`](display_context.DisplayContext.md) |
| `element` | `HTMLElement` |
| `visibility` | `WatchableVisibilityPriority` |

#### Overrides

[RenderedPanel](display_context.RenderedPanel.md).[constructor](display_context.RenderedPanel.md#constructor)

#### Defined in

[src/neuroglancer/display_context.ts:241](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/display_context.ts#L241)

## Properties

### boundsGeneration

• **boundsGeneration**: `number` = `-1`

#### Inherited from

[RenderedPanel](display_context.RenderedPanel.md).[boundsGeneration](display_context.RenderedPanel.md#boundsgeneration)

#### Defined in

[src/neuroglancer/display_context.ts:84](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/display_context.ts#L84)

___

### canvas

• **canvas**: `HTMLCanvasElement`

#### Defined in

[src/neuroglancer/display_context.ts:239](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/display_context.ts#L239)

___

### canvasRelativeClippedLeft

• **canvasRelativeClippedLeft**: `number` = `0`

#### Inherited from

[RenderedPanel](display_context.RenderedPanel.md).[canvasRelativeClippedLeft](display_context.RenderedPanel.md#canvasrelativeclippedleft)

#### Defined in

[src/neuroglancer/display_context.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/display_context.ts#L87)

___

### canvasRelativeClippedTop

• **canvasRelativeClippedTop**: `number` = `0`

#### Inherited from

[RenderedPanel](display_context.RenderedPanel.md).[canvasRelativeClippedTop](display_context.RenderedPanel.md#canvasrelativeclippedtop)

#### Defined in

[src/neuroglancer/display_context.ts:90](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/display_context.ts#L90)

___

### canvasRelativeLogicalLeft

• **canvasRelativeLogicalLeft**: `number` = `0`

#### Inherited from

[RenderedPanel](display_context.RenderedPanel.md).[canvasRelativeLogicalLeft](display_context.RenderedPanel.md#canvasrelativelogicalleft)

#### Defined in

[src/neuroglancer/display_context.ts:92](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/display_context.ts#L92)

___

### canvasRelativeLogicalTop

• **canvasRelativeLogicalTop**: `number` = `0`

#### Inherited from

[RenderedPanel](display_context.RenderedPanel.md).[canvasRelativeLogicalTop](display_context.RenderedPanel.md#canvasrelativelogicaltop)

#### Defined in

[src/neuroglancer/display_context.ts:93](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/display_context.ts#L93)

___

### canvasRenderingContext

• **canvasRenderingContext**: ``null`` \| `CanvasRenderingContext2D`

#### Defined in

[src/neuroglancer/display_context.ts:240](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/display_context.ts#L240)

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

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L52)

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

[src/neuroglancer/display_context.ts:81](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/display_context.ts#L81)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RenderedPanel](display_context.RenderedPanel.md).[refCount](display_context.RenderedPanel.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L45)

___

### renderViewport

• **renderViewport**: [`RenderViewport`](display_context.RenderViewport.md)

#### Inherited from

[RenderedPanel](display_context.RenderedPanel.md).[renderViewport](display_context.RenderedPanel.md#renderviewport)

#### Defined in

[src/neuroglancer/display_context.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/display_context.ts#L95)

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

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### drawOrder

• `get` **drawOrder**(): `number`

#### Returns

`number`

#### Inherited from

RenderedPanel.drawOrder

#### Defined in

[src/neuroglancer/display_context.ts:233](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/display_context.ts#L233)

___

### shouldDraw

• `get` **shouldDraw**(): `boolean`

#### Returns

`boolean`

#### Inherited from

RenderedPanel.shouldDraw

#### Defined in

[src/neuroglancer/display_context.ts:218](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/display_context.ts#L218)

___

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

RenderedPanel.visible

#### Defined in

[src/neuroglancer/display_context.ts:210](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/display_context.ts#L210)

## Methods

### addRef

▸ **addRef**(): [`IndirectRenderedPanel`](display_context.IndirectRenderedPanel.md)

#### Returns

[`IndirectRenderedPanel`](display_context.IndirectRenderedPanel.md)

#### Inherited from

[RenderedPanel](display_context.RenderedPanel.md).[addRef](display_context.RenderedPanel.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RenderedPanel](display_context.RenderedPanel.md).[dispose](display_context.RenderedPanel.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[RenderedPanel](display_context.RenderedPanel.md).[disposed](display_context.RenderedPanel.md#disposed)

#### Defined in

[src/neuroglancer/display_context.ts:202](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/display_context.ts#L202)

___

### draw

▸ **draw**(): `void`

#### Returns

`void`

#### Overrides

[RenderedPanel](display_context.RenderedPanel.md).[draw](display_context.RenderedPanel.md#draw)

#### Defined in

[src/neuroglancer/display_context.ts:257](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/display_context.ts#L257)

___

### drawIndirect

▸ `Abstract` **drawIndirect**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/display_context.ts:255](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/display_context.ts#L255)

___

### ensureBoundsUpdated

▸ **ensureBoundsUpdated**(): `void`

#### Returns

`void`

#### Inherited from

[RenderedPanel](display_context.RenderedPanel.md).[ensureBoundsUpdated](display_context.RenderedPanel.md#ensureboundsupdated)

#### Defined in

[src/neuroglancer/display_context.ts:115](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/display_context.ts#L115)

___

### getDepthArray

▸ **getDepthArray**(): `undefined` \| `Float32Array`

#### Returns

`undefined` \| `Float32Array`

#### Inherited from

[RenderedPanel](display_context.RenderedPanel.md).[getDepthArray](display_context.RenderedPanel.md#getdeptharray)

#### Defined in

[src/neuroglancer/display_context.ts:214](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/display_context.ts#L214)

___

### isReady

▸ `Abstract` **isReady**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[RenderedPanel](display_context.RenderedPanel.md).[isReady](display_context.RenderedPanel.md#isready)

#### Defined in

[src/neuroglancer/display_context.ts:113](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/display_context.ts#L113)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RenderedPanel](display_context.RenderedPanel.md).[refCountReachedZero](display_context.RenderedPanel.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L66)

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

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L100)

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

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L76)

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

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L95)

___

### scheduleRedraw

▸ **scheduleRedraw**(): `void`

#### Returns

`void`

#### Inherited from

[RenderedPanel](display_context.RenderedPanel.md).[scheduleRedraw](display_context.RenderedPanel.md#scheduleredraw)

#### Defined in

[src/neuroglancer/display_context.ts:107](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/display_context.ts#L107)

___

### setGLClippedViewport

▸ **setGLClippedViewport**(): `void`

#### Returns

`void`

#### Inherited from

[RenderedPanel](display_context.RenderedPanel.md).[setGLClippedViewport](display_context.RenderedPanel.md#setglclippedviewport)

#### Defined in

[src/neuroglancer/display_context.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/display_context.ts#L175)

___

### setGLLogicalViewport

▸ **setGLLogicalViewport**(): `void`

#### Returns

`void`

#### Inherited from

[RenderedPanel](display_context.RenderedPanel.md).[setGLLogicalViewport](display_context.RenderedPanel.md#setgllogicalviewport)

#### Defined in

[src/neuroglancer/display_context.ts:187](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/display_context.ts#L187)

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

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L85)
