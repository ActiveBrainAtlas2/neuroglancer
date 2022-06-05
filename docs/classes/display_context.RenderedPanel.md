[neuroglancer](../README.md) / [Modules](../modules.md) / [display\_context](../modules/display_context.md) / RenderedPanel

# Class: RenderedPanel

[display_context](../modules/display_context.md).RenderedPanel

## Hierarchy

- `RefCounted`

  ↳ **`RenderedPanel`**

  ↳↳ [`IndirectRenderedPanel`](display_context.IndirectRenderedPanel.md)

  ↳↳ [`RenderedDataPanel`](rendered_data_panel.RenderedDataPanel.md)

## Table of contents

### Constructors

- [constructor](display_context.RenderedPanel.md#constructor)

### Properties

- [boundsGeneration](display_context.RenderedPanel.md#boundsgeneration)
- [boundsObserversRegistered](display_context.RenderedPanel.md#boundsobserversregistered)
- [canvasRelativeClippedLeft](display_context.RenderedPanel.md#canvasrelativeclippedleft)
- [canvasRelativeClippedTop](display_context.RenderedPanel.md#canvasrelativeclippedtop)
- [canvasRelativeLogicalLeft](display_context.RenderedPanel.md#canvasrelativelogicalleft)
- [canvasRelativeLogicalTop](display_context.RenderedPanel.md#canvasrelativelogicaltop)
- [context](display_context.RenderedPanel.md#context)
- [disposedStacks](display_context.RenderedPanel.md#disposedstacks)
- [element](display_context.RenderedPanel.md#element)
- [gl](display_context.RenderedPanel.md#gl)
- [refCount](display_context.RenderedPanel.md#refcount)
- [renderViewport](display_context.RenderedPanel.md#renderviewport)
- [visibility](display_context.RenderedPanel.md#visibility)
- [wasDisposed](display_context.RenderedPanel.md#wasdisposed)

### Accessors

- [drawOrder](display_context.RenderedPanel.md#draworder)
- [shouldDraw](display_context.RenderedPanel.md#shoulddraw)
- [visible](display_context.RenderedPanel.md#visible)

### Methods

- [addRef](display_context.RenderedPanel.md#addref)
- [dispose](display_context.RenderedPanel.md#dispose)
- [disposed](display_context.RenderedPanel.md#disposed)
- [draw](display_context.RenderedPanel.md#draw)
- [ensureBoundsUpdated](display_context.RenderedPanel.md#ensureboundsupdated)
- [getDepthArray](display_context.RenderedPanel.md#getdeptharray)
- [isReady](display_context.RenderedPanel.md#isready)
- [refCountReachedZero](display_context.RenderedPanel.md#refcountreachedzero)
- [registerCancellable](display_context.RenderedPanel.md#registercancellable)
- [registerDisposer](display_context.RenderedPanel.md#registerdisposer)
- [registerEventListener](display_context.RenderedPanel.md#registereventlistener)
- [scheduleRedraw](display_context.RenderedPanel.md#scheduleredraw)
- [setGLClippedViewport](display_context.RenderedPanel.md#setglclippedviewport)
- [setGLLogicalViewport](display_context.RenderedPanel.md#setgllogicalviewport)
- [unregisterDisposer](display_context.RenderedPanel.md#unregisterdisposer)

## Constructors

### constructor

• **new RenderedPanel**(`context`, `element`, `visibility`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`DisplayContext`](display_context.DisplayContext.md) |
| `element` | `HTMLElement` |
| `visibility` | `WatchableVisibilityPriority` |

#### Overrides

RefCounted.constructor

#### Defined in

[src/neuroglancer/display_context.ts:99](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/display_context.ts#L99)

## Properties

### boundsGeneration

• **boundsGeneration**: `number` = `-1`

#### Defined in

[src/neuroglancer/display_context.ts:84](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/display_context.ts#L84)

___

### boundsObserversRegistered

• `Private` **boundsObserversRegistered**: `boolean` = `false`

#### Defined in

[src/neuroglancer/display_context.ts:97](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/display_context.ts#L97)

___

### canvasRelativeClippedLeft

• **canvasRelativeClippedLeft**: `number` = `0`

#### Defined in

[src/neuroglancer/display_context.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/display_context.ts#L87)

___

### canvasRelativeClippedTop

• **canvasRelativeClippedTop**: `number` = `0`

#### Defined in

[src/neuroglancer/display_context.ts:90](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/display_context.ts#L90)

___

### canvasRelativeLogicalLeft

• **canvasRelativeLogicalLeft**: `number` = `0`

#### Defined in

[src/neuroglancer/display_context.ts:92](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/display_context.ts#L92)

___

### canvasRelativeLogicalTop

• **canvasRelativeLogicalTop**: `number` = `0`

#### Defined in

[src/neuroglancer/display_context.ts:93](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/display_context.ts#L93)

___

### context

• **context**: [`DisplayContext`](display_context.DisplayContext.md)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

RefCounted.disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: `HTMLElement`

___

### gl

• **gl**: `GL`

#### Defined in

[src/neuroglancer/display_context.ts:81](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/display_context.ts#L81)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

RefCounted.refCount

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L45)

___

### renderViewport

• **renderViewport**: [`RenderViewport`](display_context.RenderViewport.md)

#### Defined in

[src/neuroglancer/display_context.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/display_context.ts#L95)

___

### visibility

• **visibility**: `WatchableVisibilityPriority`

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

RefCounted.wasDisposed

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### drawOrder

• `get` **drawOrder**(): `number`

#### Returns

`number`

#### Defined in

[src/neuroglancer/display_context.ts:233](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/display_context.ts#L233)

___

### shouldDraw

• `get` **shouldDraw**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/display_context.ts:218](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/display_context.ts#L218)

___

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/display_context.ts:210](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/display_context.ts#L210)

## Methods

### addRef

▸ **addRef**(): [`RenderedPanel`](display_context.RenderedPanel.md)

#### Returns

[`RenderedPanel`](display_context.RenderedPanel.md)

#### Inherited from

RefCounted.addRef

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

RefCounted.dispose

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

RefCounted.disposed

#### Defined in

[src/neuroglancer/display_context.ts:202](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/display_context.ts#L202)

___

### draw

▸ `Abstract` **draw**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/display_context.ts:200](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/display_context.ts#L200)

___

### ensureBoundsUpdated

▸ **ensureBoundsUpdated**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/display_context.ts:115](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/display_context.ts#L115)

___

### getDepthArray

▸ **getDepthArray**(): `undefined` \| `Float32Array`

#### Returns

`undefined` \| `Float32Array`

#### Defined in

[src/neuroglancer/display_context.ts:214](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/display_context.ts#L214)

___

### isReady

▸ `Abstract` **isReady**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/display_context.ts:113](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/display_context.ts#L113)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

RefCounted.refCountReachedZero

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

RefCounted.registerCancellable

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

RefCounted.registerDisposer

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

RefCounted.registerEventListener

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L95)

___

### scheduleRedraw

▸ **scheduleRedraw**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/display_context.ts:107](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/display_context.ts#L107)

___

### setGLClippedViewport

▸ **setGLClippedViewport**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/display_context.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/display_context.ts#L175)

___

### setGLLogicalViewport

▸ **setGLLogicalViewport**(): `void`

#### Returns

`void`

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

RefCounted.unregisterDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L85)
