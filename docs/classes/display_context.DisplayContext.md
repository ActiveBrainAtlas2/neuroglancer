[neuroglancer](../README.md) / [Modules](../modules.md) / [display\_context](../modules/display_context.md) / DisplayContext

# Class: DisplayContext

[display_context](../modules/display_context.md).DisplayContext

## Hierarchy

- `RefCounted`

  ↳ **`DisplayContext`**

## Implements

- `FrameNumberCounter`

## Table of contents

### Constructors

- [constructor](display_context.DisplayContext.md#constructor)

### Properties

- [boundsGeneration](display_context.DisplayContext.md#boundsgeneration)
- [canvas](display_context.DisplayContext.md#canvas)
- [canvasRect](display_context.DisplayContext.md#canvasrect)
- [changed](display_context.DisplayContext.md#changed)
- [container](display_context.DisplayContext.md#container)
- [disposedStacks](display_context.DisplayContext.md#disposedstacks)
- [frameNumber](display_context.DisplayContext.md#framenumber)
- [gl](display_context.DisplayContext.md#gl)
- [orderedPanels](display_context.DisplayContext.md#orderedpanels)
- [panelAncestors](display_context.DisplayContext.md#panelancestors)
- [panels](display_context.DisplayContext.md#panels)
- [refCount](display_context.DisplayContext.md#refcount)
- [resizeGeneration](display_context.DisplayContext.md#resizegeneration)
- [resizeObserver](display_context.DisplayContext.md#resizeobserver)
- [scheduleRedraw](display_context.DisplayContext.md#scheduleredraw)
- [updateFinished](display_context.DisplayContext.md#updatefinished)
- [updateStarted](display_context.DisplayContext.md#updatestarted)
- [wasDisposed](display_context.DisplayContext.md#wasdisposed)

### Methods

- [addPanel](display_context.DisplayContext.md#addpanel)
- [addRef](display_context.DisplayContext.md#addref)
- [applyWindowedViewportToElement](display_context.DisplayContext.md#applywindowedviewporttoelement)
- [dispose](display_context.DisplayContext.md#dispose)
- [disposed](display_context.DisplayContext.md#disposed)
- [draw](display_context.DisplayContext.md#draw)
- [ensureBoundsUpdated](display_context.DisplayContext.md#ensureboundsupdated)
- [getDepthArray](display_context.DisplayContext.md#getdeptharray)
- [isReady](display_context.DisplayContext.md#isready)
- [makeCanvasOverlayElement](display_context.DisplayContext.md#makecanvasoverlayelement)
- [monitorPanel](display_context.DisplayContext.md#monitorpanel)
- [refCountReachedZero](display_context.DisplayContext.md#refcountreachedzero)
- [registerCancellable](display_context.DisplayContext.md#registercancellable)
- [registerDisposer](display_context.DisplayContext.md#registerdisposer)
- [registerEventListener](display_context.DisplayContext.md#registereventlistener)
- [removePanel](display_context.DisplayContext.md#removepanel)
- [resizeCallback](display_context.DisplayContext.md#resizecallback)
- [unmonitorPanel](display_context.DisplayContext.md#unmonitorpanel)
- [unregisterDisposer](display_context.DisplayContext.md#unregisterdisposer)

## Constructors

### constructor

• **new DisplayContext**(`container`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | `HTMLElement` |

#### Overrides

RefCounted.constructor

#### Defined in

[src/neuroglancer/display_context.ts:351](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/display_context.ts#L351)

## Properties

### boundsGeneration

• **boundsGeneration**: `number` = `-1`

#### Defined in

[src/neuroglancer/display_context.ts:298](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/display_context.ts#L298)

___

### canvas

• **canvas**: `HTMLCanvasElement`

#### Defined in

[src/neuroglancer/display_context.ts:290](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/display_context.ts#L290)

___

### canvasRect

• **canvasRect**: `undefined` \| `ClientRect`

#### Defined in

[src/neuroglancer/display_context.ts:296](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/display_context.ts#L296)

___

### changed

• **changed**: `NullarySignal`

#### Implementation of

FrameNumberCounter.changed

#### Defined in

[src/neuroglancer/display_context.ts:294](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/display_context.ts#L294)

___

### container

• **container**: `HTMLElement`

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

RefCounted.disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L52)

___

### frameNumber

• **frameNumber**: `number` = `0`

Unique number of the next frame.  Incremented once each time a frame is drawn.

#### Implementation of

FrameNumberCounter.frameNumber

#### Defined in

[src/neuroglancer/display_context.ts:306](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/display_context.ts#L306)

___

### gl

• **gl**: `GL`

#### Defined in

[src/neuroglancer/display_context.ts:291](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/display_context.ts#L291)

___

### orderedPanels

• `Private` **orderedPanels**: [`RenderedPanel`](display_context.RenderedPanel.md)[] = `[]`

#### Defined in

[src/neuroglancer/display_context.ts:301](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/display_context.ts#L301)

___

### panelAncestors

• `Private` **panelAncestors**: `Map`<`HTMLElement`, { `count`: `number` ; `parent`: `HTMLElement`  }\>

#### Defined in

[src/neuroglancer/display_context.ts:308](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/display_context.ts#L308)

___

### panels

• **panels**: `Set`<[`RenderedPanel`](display_context.RenderedPanel.md)\>

#### Defined in

[src/neuroglancer/display_context.ts:295](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/display_context.ts#L295)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

RefCounted.refCount

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L45)

___

### resizeGeneration

• **resizeGeneration**: `number` = `0`

#### Defined in

[src/neuroglancer/display_context.ts:297](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/display_context.ts#L297)

___

### resizeObserver

• `Private` **resizeObserver**: `ResizeObserver`

#### Defined in

[src/neuroglancer/display_context.ts:349](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/display_context.ts#L349)

___

### scheduleRedraw

• `Readonly` **scheduleRedraw**: `DebouncedFunction`

#### Defined in

[src/neuroglancer/display_context.ts:438](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/display_context.ts#L438)

___

### updateFinished

• **updateFinished**: `NullarySignal`

#### Defined in

[src/neuroglancer/display_context.ts:293](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/display_context.ts#L293)

___

### updateStarted

• **updateStarted**: `NullarySignal`

#### Defined in

[src/neuroglancer/display_context.ts:292](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/display_context.ts#L292)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

RefCounted.wasDisposed

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addPanel

▸ **addPanel**(`panel`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `panel` | [`RenderedPanel`](display_context.RenderedPanel.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/display_context.ts:424](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/display_context.ts#L424)

___

### addRef

▸ **addRef**(): [`DisplayContext`](display_context.DisplayContext.md)

#### Returns

[`DisplayContext`](display_context.DisplayContext.md)

#### Inherited from

RefCounted.addRef

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L48)

___

### applyWindowedViewportToElement

▸ **applyWindowedViewportToElement**(`element`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `HTMLElement` |
| `value` | `Float64Array` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/display_context.ts:376](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/display_context.ts#L376)

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

[src/neuroglancer/display_context.ts:419](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/display_context.ts#L419)

___

### draw

▸ **draw**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/display_context.ts:450](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/display_context.ts#L450)

___

### ensureBoundsUpdated

▸ **ensureBoundsUpdated**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/display_context.ts:440](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/display_context.ts#L440)

___

### getDepthArray

▸ **getDepthArray**(): `Float32Array`

#### Returns

`Float32Array`

#### Defined in

[src/neuroglancer/display_context.ts:479](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/display_context.ts#L479)

___

### isReady

▸ **isReady**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/display_context.ts:392](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/display_context.ts#L392)

___

### makeCanvasOverlayElement

▸ **makeCanvasOverlayElement**(): `HTMLDivElement`

Returns a child element that overlays the canvas.

#### Returns

`HTMLDivElement`

#### Defined in

[src/neuroglancer/display_context.ts:407](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/display_context.ts#L407)

___

### monitorPanel

▸ **monitorPanel**(`element`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `HTMLElement` |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/display_context.ts:315](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/display_context.ts#L315)

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

### removePanel

▸ **removePanel**(`panel`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `panel` | [`RenderedPanel`](display_context.RenderedPanel.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/display_context.ts:431](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/display_context.ts#L431)

___

### resizeCallback

▸ `Private` **resizeCallback**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/display_context.ts:310](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/display_context.ts#L310)

___

### unmonitorPanel

▸ **unmonitorPanel**(`element`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `HTMLElement` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/display_context.ts:334](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/display_context.ts#L334)

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
