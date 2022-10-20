[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/display\_context](../modules/neuroglancer_display_context.md) / DisplayContext

# Class: DisplayContext

[neuroglancer/display_context](../modules/neuroglancer_display_context.md).DisplayContext

**`License`**

Copyright 2016 Google Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`DisplayContext`**

## Implements

- [`FrameNumberCounter`](../interfaces/neuroglancer_chunk_manager_frontend.FrameNumberCounter.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_display_context.DisplayContext.md#constructor)

### Properties

- [boundsGeneration](neuroglancer_display_context.DisplayContext.md#boundsgeneration)
- [canvas](neuroglancer_display_context.DisplayContext.md#canvas)
- [canvasRect](neuroglancer_display_context.DisplayContext.md#canvasrect)
- [changed](neuroglancer_display_context.DisplayContext.md#changed)
- [container](neuroglancer_display_context.DisplayContext.md#container)
- [disposedStacks](neuroglancer_display_context.DisplayContext.md#disposedstacks)
- [frameNumber](neuroglancer_display_context.DisplayContext.md#framenumber)
- [gl](neuroglancer_display_context.DisplayContext.md#gl)
- [orderedPanels](neuroglancer_display_context.DisplayContext.md#orderedpanels)
- [panelAncestors](neuroglancer_display_context.DisplayContext.md#panelancestors)
- [panels](neuroglancer_display_context.DisplayContext.md#panels)
- [refCount](neuroglancer_display_context.DisplayContext.md#refcount)
- [resizeGeneration](neuroglancer_display_context.DisplayContext.md#resizegeneration)
- [resizeObserver](neuroglancer_display_context.DisplayContext.md#resizeobserver)
- [scheduleRedraw](neuroglancer_display_context.DisplayContext.md#scheduleredraw)
- [updateFinished](neuroglancer_display_context.DisplayContext.md#updatefinished)
- [updateStarted](neuroglancer_display_context.DisplayContext.md#updatestarted)
- [wasDisposed](neuroglancer_display_context.DisplayContext.md#wasdisposed)

### Methods

- [addPanel](neuroglancer_display_context.DisplayContext.md#addpanel)
- [addRef](neuroglancer_display_context.DisplayContext.md#addref)
- [applyWindowedViewportToElement](neuroglancer_display_context.DisplayContext.md#applywindowedviewporttoelement)
- [dispose](neuroglancer_display_context.DisplayContext.md#dispose)
- [disposed](neuroglancer_display_context.DisplayContext.md#disposed)
- [draw](neuroglancer_display_context.DisplayContext.md#draw)
- [ensureBoundsUpdated](neuroglancer_display_context.DisplayContext.md#ensureboundsupdated)
- [getDepthArray](neuroglancer_display_context.DisplayContext.md#getdeptharray)
- [isReady](neuroglancer_display_context.DisplayContext.md#isready)
- [makeCanvasOverlayElement](neuroglancer_display_context.DisplayContext.md#makecanvasoverlayelement)
- [monitorPanel](neuroglancer_display_context.DisplayContext.md#monitorpanel)
- [refCountReachedZero](neuroglancer_display_context.DisplayContext.md#refcountreachedzero)
- [registerCancellable](neuroglancer_display_context.DisplayContext.md#registercancellable)
- [registerDisposer](neuroglancer_display_context.DisplayContext.md#registerdisposer)
- [registerEventListener](neuroglancer_display_context.DisplayContext.md#registereventlistener)
- [removePanel](neuroglancer_display_context.DisplayContext.md#removepanel)
- [resizeCallback](neuroglancer_display_context.DisplayContext.md#resizecallback)
- [unmonitorPanel](neuroglancer_display_context.DisplayContext.md#unmonitorpanel)
- [unregisterDisposer](neuroglancer_display_context.DisplayContext.md#unregisterdisposer)

## Constructors

### constructor

• **new DisplayContext**(`container`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`HTMLElement`](../modules/main_module._internal_.md#htmlelement) |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/display_context.ts:351](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L351)

## Properties

### boundsGeneration

• **boundsGeneration**: `number` = `-1`

#### Defined in

[src/neuroglancer/display_context.ts:298](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L298)

___

### canvas

• **canvas**: [`HTMLCanvasElement`](../modules/main_module._internal_.md#htmlcanvaselement)

#### Defined in

[src/neuroglancer/display_context.ts:290](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L290)

___

### canvasRect

• **canvasRect**: `undefined` \| [`ClientRect`](../interfaces/neuroglancer_display_context._internal_.ClientRect.md)

#### Defined in

[src/neuroglancer/display_context.ts:296](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L296)

___

### changed

• **changed**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Implementation of

[FrameNumberCounter](../interfaces/neuroglancer_chunk_manager_frontend.FrameNumberCounter.md).[changed](../interfaces/neuroglancer_chunk_manager_frontend.FrameNumberCounter.md#changed)

#### Defined in

[src/neuroglancer/display_context.ts:294](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L294)

___

### container

• **container**: [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/display_context.ts:351](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L351)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### frameNumber

• **frameNumber**: `number` = `0`

Unique number of the next frame.  Incremented once each time a frame is drawn.

#### Implementation of

[FrameNumberCounter](../interfaces/neuroglancer_chunk_manager_frontend.FrameNumberCounter.md).[frameNumber](../interfaces/neuroglancer_chunk_manager_frontend.FrameNumberCounter.md#framenumber)

#### Defined in

[src/neuroglancer/display_context.ts:306](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L306)

___

### gl

• **gl**: [`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

#### Defined in

[src/neuroglancer/display_context.ts:291](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L291)

___

### orderedPanels

• `Private` **orderedPanels**: [`RenderedPanel`](neuroglancer_display_context.RenderedPanel.md)[] = `[]`

#### Defined in

[src/neuroglancer/display_context.ts:301](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L301)

___

### panelAncestors

• `Private` **panelAncestors**: `Map`<[`HTMLElement`](../modules/main_module._internal_.md#htmlelement), { `count`: `number` ; `parent`: [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)  }\>

#### Defined in

[src/neuroglancer/display_context.ts:308](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L308)

___

### panels

• **panels**: `Set`<[`RenderedPanel`](neuroglancer_display_context.RenderedPanel.md)\>

#### Defined in

[src/neuroglancer/display_context.ts:295](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L295)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### resizeGeneration

• **resizeGeneration**: `number` = `0`

#### Defined in

[src/neuroglancer/display_context.ts:297](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L297)

___

### resizeObserver

• `Private` **resizeObserver**: [`ResizeObserver`](../modules/neuroglancer_display_context._internal_.md#resizeobserver)

#### Defined in

[src/neuroglancer/display_context.ts:349](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L349)

___

### scheduleRedraw

• `Readonly` **scheduleRedraw**: [`DebouncedFunction`](../interfaces/neuroglancer_util_animation_frame_debounce.DebouncedFunction.md)

#### Defined in

[src/neuroglancer/display_context.ts:438](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L438)

___

### updateFinished

• **updateFinished**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/display_context.ts:293](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L293)

___

### updateStarted

• **updateStarted**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/display_context.ts:292](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L292)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addPanel

▸ **addPanel**(`panel`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `panel` | [`RenderedPanel`](neuroglancer_display_context.RenderedPanel.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/display_context.ts:424](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L424)

___

### addRef

▸ **addRef**(): [`DisplayContext`](neuroglancer_display_context.DisplayContext.md)

#### Returns

[`DisplayContext`](neuroglancer_display_context.DisplayContext.md)

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[addRef](neuroglancer_util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

___

### applyWindowedViewportToElement

▸ **applyWindowedViewportToElement**(`element`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | [`HTMLElement`](../modules/main_module._internal_.md#htmlelement) |
| `value` | `Float64Array` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/display_context.ts:376](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L376)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[dispose](neuroglancer_util_disposable.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposed](neuroglancer_util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/display_context.ts:419](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L419)

___

### draw

▸ **draw**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/display_context.ts:450](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L450)

___

### ensureBoundsUpdated

▸ **ensureBoundsUpdated**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/display_context.ts:440](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L440)

___

### getDepthArray

▸ **getDepthArray**(): `Float32Array`

#### Returns

`Float32Array`

#### Defined in

[src/neuroglancer/display_context.ts:479](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L479)

___

### isReady

▸ **isReady**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/display_context.ts:392](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L392)

___

### makeCanvasOverlayElement

▸ **makeCanvasOverlayElement**(): [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

Returns a child element that overlays the canvas.

#### Returns

[`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/display_context.ts:407](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L407)

___

### monitorPanel

▸ **monitorPanel**(`element`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | [`HTMLElement`](../modules/main_module._internal_.md#htmlelement) |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/display_context.ts:315](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L315)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCountReachedZero](neuroglancer_util_disposable.RefCounted.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L66)

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

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[registerCancellable](neuroglancer_util_disposable.RefCounted.md#registercancellable)

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L100)

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

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[registerDisposer](neuroglancer_util_disposable.RefCounted.md#registerdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L76)

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

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[registerEventListener](neuroglancer_util_disposable.RefCounted.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L95)

___

### removePanel

▸ **removePanel**(`panel`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `panel` | [`RenderedPanel`](neuroglancer_display_context.RenderedPanel.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/display_context.ts:431](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L431)

___

### resizeCallback

▸ `Private` **resizeCallback**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/display_context.ts:310](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L310)

___

### unmonitorPanel

▸ **unmonitorPanel**(`element`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | [`HTMLElement`](../modules/main_module._internal_.md#htmlelement) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/display_context.ts:334](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L334)

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

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[unregisterDisposer](neuroglancer_util_disposable.RefCounted.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L85)
