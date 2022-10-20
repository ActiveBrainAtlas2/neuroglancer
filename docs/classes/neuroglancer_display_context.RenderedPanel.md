[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/display\_context](../modules/neuroglancer_display_context.md) / RenderedPanel

# Class: RenderedPanel

[neuroglancer/display_context](../modules/neuroglancer_display_context.md).RenderedPanel

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

  ↳ **`RenderedPanel`**

  ↳↳ [`IndirectRenderedPanel`](neuroglancer_display_context.IndirectRenderedPanel.md)

  ↳↳ [`RenderedDataPanel`](neuroglancer_rendered_data_panel.RenderedDataPanel.md)

  ↳↳ [`HistogramPanel`](neuroglancer_widget_histogram.HistogramPanel.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_display_context.RenderedPanel.md#constructor)

### Properties

- [boundsGeneration](neuroglancer_display_context.RenderedPanel.md#boundsgeneration)
- [boundsObserversRegistered](neuroglancer_display_context.RenderedPanel.md#boundsobserversregistered)
- [canvasRelativeClippedLeft](neuroglancer_display_context.RenderedPanel.md#canvasrelativeclippedleft)
- [canvasRelativeClippedTop](neuroglancer_display_context.RenderedPanel.md#canvasrelativeclippedtop)
- [canvasRelativeLogicalLeft](neuroglancer_display_context.RenderedPanel.md#canvasrelativelogicalleft)
- [canvasRelativeLogicalTop](neuroglancer_display_context.RenderedPanel.md#canvasrelativelogicaltop)
- [context](neuroglancer_display_context.RenderedPanel.md#context)
- [disposedStacks](neuroglancer_display_context.RenderedPanel.md#disposedstacks)
- [element](neuroglancer_display_context.RenderedPanel.md#element)
- [gl](neuroglancer_display_context.RenderedPanel.md#gl)
- [refCount](neuroglancer_display_context.RenderedPanel.md#refcount)
- [renderViewport](neuroglancer_display_context.RenderedPanel.md#renderviewport)
- [visibility](neuroglancer_display_context.RenderedPanel.md#visibility)
- [wasDisposed](neuroglancer_display_context.RenderedPanel.md#wasdisposed)

### Accessors

- [drawOrder](neuroglancer_display_context.RenderedPanel.md#draworder)
- [shouldDraw](neuroglancer_display_context.RenderedPanel.md#shoulddraw)
- [visible](neuroglancer_display_context.RenderedPanel.md#visible)

### Methods

- [addRef](neuroglancer_display_context.RenderedPanel.md#addref)
- [dispose](neuroglancer_display_context.RenderedPanel.md#dispose)
- [disposed](neuroglancer_display_context.RenderedPanel.md#disposed)
- [draw](neuroglancer_display_context.RenderedPanel.md#draw)
- [ensureBoundsUpdated](neuroglancer_display_context.RenderedPanel.md#ensureboundsupdated)
- [getDepthArray](neuroglancer_display_context.RenderedPanel.md#getdeptharray)
- [isReady](neuroglancer_display_context.RenderedPanel.md#isready)
- [refCountReachedZero](neuroglancer_display_context.RenderedPanel.md#refcountreachedzero)
- [registerCancellable](neuroglancer_display_context.RenderedPanel.md#registercancellable)
- [registerDisposer](neuroglancer_display_context.RenderedPanel.md#registerdisposer)
- [registerEventListener](neuroglancer_display_context.RenderedPanel.md#registereventlistener)
- [scheduleRedraw](neuroglancer_display_context.RenderedPanel.md#scheduleredraw)
- [setGLClippedViewport](neuroglancer_display_context.RenderedPanel.md#setglclippedviewport)
- [setGLLogicalViewport](neuroglancer_display_context.RenderedPanel.md#setgllogicalviewport)
- [unregisterDisposer](neuroglancer_display_context.RenderedPanel.md#unregisterdisposer)

## Constructors

### constructor

• **new RenderedPanel**(`context`, `element`, `visibility`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`DisplayContext`](neuroglancer_display_context.DisplayContext.md) |
| `element` | [`HTMLElement`](../modules/main_module._internal_.md#htmlelement) |
| `visibility` | [`WatchableVisibilityPriority`](neuroglancer_visibility_priority_frontend.WatchableVisibilityPriority.md) |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/display_context.ts:99](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L99)

## Properties

### boundsGeneration

• **boundsGeneration**: `number` = `-1`

#### Defined in

[src/neuroglancer/display_context.ts:84](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L84)

___

### boundsObserversRegistered

• `Private` **boundsObserversRegistered**: `boolean` = `false`

#### Defined in

[src/neuroglancer/display_context.ts:97](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L97)

___

### canvasRelativeClippedLeft

• **canvasRelativeClippedLeft**: `number` = `0`

#### Defined in

[src/neuroglancer/display_context.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L87)

___

### canvasRelativeClippedTop

• **canvasRelativeClippedTop**: `number` = `0`

#### Defined in

[src/neuroglancer/display_context.ts:90](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L90)

___

### canvasRelativeLogicalLeft

• **canvasRelativeLogicalLeft**: `number` = `0`

#### Defined in

[src/neuroglancer/display_context.ts:92](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L92)

___

### canvasRelativeLogicalTop

• **canvasRelativeLogicalTop**: `number` = `0`

#### Defined in

[src/neuroglancer/display_context.ts:93](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L93)

___

### context

• **context**: [`DisplayContext`](neuroglancer_display_context.DisplayContext.md)

#### Defined in

[src/neuroglancer/display_context.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L100)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/display_context.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L100)

___

### gl

• **gl**: [`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

#### Defined in

[src/neuroglancer/display_context.ts:81](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L81)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### renderViewport

• **renderViewport**: [`RenderViewport`](neuroglancer_display_context.RenderViewport.md)

#### Defined in

[src/neuroglancer/display_context.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L95)

___

### visibility

• **visibility**: [`WatchableVisibilityPriority`](neuroglancer_visibility_priority_frontend.WatchableVisibilityPriority.md)

#### Defined in

[src/neuroglancer/display_context.ts:101](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L101)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### drawOrder

• `get` **drawOrder**(): `number`

#### Returns

`number`

#### Defined in

[src/neuroglancer/display_context.ts:233](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L233)

___

### shouldDraw

• `get` **shouldDraw**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/display_context.ts:218](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L218)

___

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/display_context.ts:210](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L210)

## Methods

### addRef

▸ **addRef**(): [`RenderedPanel`](neuroglancer_display_context.RenderedPanel.md)

#### Returns

[`RenderedPanel`](neuroglancer_display_context.RenderedPanel.md)

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[addRef](neuroglancer_util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

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

[src/neuroglancer/display_context.ts:202](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L202)

___

### draw

▸ `Abstract` **draw**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/display_context.ts:200](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L200)

___

### ensureBoundsUpdated

▸ **ensureBoundsUpdated**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/display_context.ts:115](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L115)

___

### getDepthArray

▸ **getDepthArray**(): `undefined` \| `Float32Array`

#### Returns

`undefined` \| `Float32Array`

#### Defined in

[src/neuroglancer/display_context.ts:214](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L214)

___

### isReady

▸ `Abstract` **isReady**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/display_context.ts:113](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L113)

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

### scheduleRedraw

▸ **scheduleRedraw**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/display_context.ts:107](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L107)

___

### setGLClippedViewport

▸ **setGLClippedViewport**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/display_context.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L175)

___

### setGLLogicalViewport

▸ **setGLLogicalViewport**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/display_context.ts:187](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L187)

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
