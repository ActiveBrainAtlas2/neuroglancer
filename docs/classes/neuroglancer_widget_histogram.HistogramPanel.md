[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/widget/histogram](../modules/neuroglancer_widget_histogram.md) / HistogramPanel

# Class: HistogramPanel

[neuroglancer/widget/histogram](../modules/neuroglancer_widget_histogram.md).HistogramPanel

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

- [`RenderedPanel`](neuroglancer_display_context.RenderedPanel.md)

  ↳ **`HistogramPanel`**

## Table of contents

### Constructors

- [constructor](neuroglancer_widget_histogram.HistogramPanel.md#constructor)

### Properties

- [NUM\_CDF\_LINES](neuroglancer_widget_histogram.HistogramPanel.md#num_cdf_lines)
- [boundsGeneration](neuroglancer_widget_histogram.HistogramPanel.md#boundsgeneration)
- [canvasRelativeClippedLeft](neuroglancer_widget_histogram.HistogramPanel.md#canvasrelativeclippedleft)
- [canvasRelativeClippedTop](neuroglancer_widget_histogram.HistogramPanel.md#canvasrelativeclippedtop)
- [canvasRelativeLogicalLeft](neuroglancer_widget_histogram.HistogramPanel.md#canvasrelativelogicalleft)
- [canvasRelativeLogicalTop](neuroglancer_widget_histogram.HistogramPanel.md#canvasrelativelogicaltop)
- [context](neuroglancer_widget_histogram.HistogramPanel.md#context)
- [dataValuesBuffer](neuroglancer_widget_histogram.HistogramPanel.md#datavaluesbuffer)
- [disposedStacks](neuroglancer_widget_histogram.HistogramPanel.md#disposedstacks)
- [element](neuroglancer_widget_histogram.HistogramPanel.md#element)
- [gl](neuroglancer_widget_histogram.HistogramPanel.md#gl)
- [histogramSamplerTextureUnit](neuroglancer_widget_histogram.HistogramPanel.md#histogramsamplertextureunit)
- [lineShader](neuroglancer_widget_histogram.HistogramPanel.md#lineshader)
- [parent](neuroglancer_widget_histogram.HistogramPanel.md#parent)
- [refCount](neuroglancer_widget_histogram.HistogramPanel.md#refcount)
- [regionCornersBuffer](neuroglancer_widget_histogram.HistogramPanel.md#regioncornersbuffer)
- [regionShader](neuroglancer_widget_histogram.HistogramPanel.md#regionshader)
- [renderViewport](neuroglancer_widget_histogram.HistogramPanel.md#renderviewport)
- [visibility](neuroglancer_widget_histogram.HistogramPanel.md#visibility)
- [wasDisposed](neuroglancer_widget_histogram.HistogramPanel.md#wasdisposed)

### Accessors

- [drawOrder](neuroglancer_widget_histogram.HistogramPanel.md#draworder)
- [shouldDraw](neuroglancer_widget_histogram.HistogramPanel.md#shoulddraw)
- [visible](neuroglancer_widget_histogram.HistogramPanel.md#visible)

### Methods

- [addRef](neuroglancer_widget_histogram.HistogramPanel.md#addref)
- [dispose](neuroglancer_widget_histogram.HistogramPanel.md#dispose)
- [disposed](neuroglancer_widget_histogram.HistogramPanel.md#disposed)
- [draw](neuroglancer_widget_histogram.HistogramPanel.md#draw)
- [ensureBoundsUpdated](neuroglancer_widget_histogram.HistogramPanel.md#ensureboundsupdated)
- [getDepthArray](neuroglancer_widget_histogram.HistogramPanel.md#getdeptharray)
- [isReady](neuroglancer_widget_histogram.HistogramPanel.md#isready)
- [refCountReachedZero](neuroglancer_widget_histogram.HistogramPanel.md#refcountreachedzero)
- [registerCancellable](neuroglancer_widget_histogram.HistogramPanel.md#registercancellable)
- [registerDisposer](neuroglancer_widget_histogram.HistogramPanel.md#registerdisposer)
- [registerEventListener](neuroglancer_widget_histogram.HistogramPanel.md#registereventlistener)
- [scheduleRedraw](neuroglancer_widget_histogram.HistogramPanel.md#scheduleredraw)
- [setGLClippedViewport](neuroglancer_widget_histogram.HistogramPanel.md#setglclippedviewport)
- [setGLLogicalViewport](neuroglancer_widget_histogram.HistogramPanel.md#setgllogicalviewport)
- [unregisterDisposer](neuroglancer_widget_histogram.HistogramPanel.md#unregisterdisposer)

## Constructors

### constructor

• **new HistogramPanel**(`parent`, `NUM_CDF_LINES`, `histogramSamplerTextureUnit`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`InvlerpWidget`](neuroglancer_widget_invlerp.InvlerpWidget.md) |
| `NUM_CDF_LINES` | `number` |
| `histogramSamplerTextureUnit` | `Symbol` |

#### Overrides

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[constructor](neuroglancer_display_context.RenderedPanel.md#constructor)

#### Defined in

[src/neuroglancer/widget/histogram.ts:16](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/histogram.ts#L16)

## Properties

### NUM\_CDF\_LINES

• **NUM\_CDF\_LINES**: `number`

#### Defined in

[src/neuroglancer/widget/histogram.ts:16](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/histogram.ts#L16)

___

### boundsGeneration

• **boundsGeneration**: `number` = `-1`

#### Inherited from

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[boundsGeneration](neuroglancer_display_context.RenderedPanel.md#boundsgeneration)

#### Defined in

[src/neuroglancer/display_context.ts:84](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L84)

___

### canvasRelativeClippedLeft

• **canvasRelativeClippedLeft**: `number` = `0`

#### Inherited from

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[canvasRelativeClippedLeft](neuroglancer_display_context.RenderedPanel.md#canvasrelativeclippedleft)

#### Defined in

[src/neuroglancer/display_context.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L87)

___

### canvasRelativeClippedTop

• **canvasRelativeClippedTop**: `number` = `0`

#### Inherited from

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[canvasRelativeClippedTop](neuroglancer_display_context.RenderedPanel.md#canvasrelativeclippedtop)

#### Defined in

[src/neuroglancer/display_context.ts:90](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L90)

___

### canvasRelativeLogicalLeft

• **canvasRelativeLogicalLeft**: `number` = `0`

#### Inherited from

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[canvasRelativeLogicalLeft](neuroglancer_display_context.RenderedPanel.md#canvasrelativelogicalleft)

#### Defined in

[src/neuroglancer/display_context.ts:92](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L92)

___

### canvasRelativeLogicalTop

• **canvasRelativeLogicalTop**: `number` = `0`

#### Inherited from

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[canvasRelativeLogicalTop](neuroglancer_display_context.RenderedPanel.md#canvasrelativelogicaltop)

#### Defined in

[src/neuroglancer/display_context.ts:93](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L93)

___

### context

• **context**: [`DisplayContext`](neuroglancer_display_context.DisplayContext.md)

#### Inherited from

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[context](neuroglancer_display_context.RenderedPanel.md#context)

#### Defined in

[src/neuroglancer/display_context.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L100)

___

### dataValuesBuffer

• `Private` **dataValuesBuffer**: [`Buffer`](neuroglancer_webgl_buffer.Buffer.md)

#### Defined in

[src/neuroglancer/widget/histogram.ts:22](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/histogram.ts#L22)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[disposedStacks](neuroglancer_display_context.RenderedPanel.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)

#### Inherited from

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[element](neuroglancer_display_context.RenderedPanel.md#element)

#### Defined in

[src/neuroglancer/display_context.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L100)

___

### gl

• **gl**: [`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

#### Inherited from

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[gl](neuroglancer_display_context.RenderedPanel.md#gl)

#### Defined in

[src/neuroglancer/display_context.ts:81](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L81)

___

### histogramSamplerTextureUnit

• **histogramSamplerTextureUnit**: `Symbol`

#### Defined in

[src/neuroglancer/widget/histogram.ts:16](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/histogram.ts#L16)

___

### lineShader

• `Private` **lineShader**: [`ShaderProgram`](neuroglancer_webgl_shader.ShaderProgram.md)

#### Defined in

[src/neuroglancer/widget/histogram.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/histogram.ts#L34)

___

### parent

• **parent**: [`InvlerpWidget`](neuroglancer_widget_invlerp.InvlerpWidget.md)

#### Defined in

[src/neuroglancer/widget/histogram.ts:16](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/histogram.ts#L16)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[refCount](neuroglancer_display_context.RenderedPanel.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### regionCornersBuffer

• `Private` **regionCornersBuffer**: [`Buffer`](neuroglancer_webgl_buffer.Buffer.md)

#### Defined in

[src/neuroglancer/widget/histogram.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/histogram.ts#L76)

___

### regionShader

• `Private` **regionShader**: [`ShaderProgram`](neuroglancer_webgl_shader.ShaderProgram.md)

#### Defined in

[src/neuroglancer/widget/histogram.ts:78](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/histogram.ts#L78)

___

### renderViewport

• **renderViewport**: [`RenderViewport`](neuroglancer_display_context.RenderViewport.md)

#### Inherited from

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[renderViewport](neuroglancer_display_context.RenderedPanel.md#renderviewport)

#### Defined in

[src/neuroglancer/display_context.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L95)

___

### visibility

• **visibility**: [`WatchableVisibilityPriority`](neuroglancer_visibility_priority_frontend.WatchableVisibilityPriority.md)

#### Inherited from

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[visibility](neuroglancer_display_context.RenderedPanel.md#visibility)

#### Defined in

[src/neuroglancer/display_context.ts:101](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L101)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[wasDisposed](neuroglancer_display_context.RenderedPanel.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### drawOrder

• `get` **drawOrder**(): `number`

#### Returns

`number`

#### Overrides

RenderedPanel.drawOrder

#### Defined in

[src/neuroglancer/widget/histogram.ts:13](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/histogram.ts#L13)

___

### shouldDraw

• `get` **shouldDraw**(): `boolean`

#### Returns

`boolean`

#### Inherited from

RenderedPanel.shouldDraw

#### Defined in

[src/neuroglancer/display_context.ts:218](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L218)

___

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

RenderedPanel.visible

#### Defined in

[src/neuroglancer/display_context.ts:210](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L210)

## Methods

### addRef

▸ **addRef**(): [`HistogramPanel`](neuroglancer_widget_histogram.HistogramPanel.md)

#### Returns

[`HistogramPanel`](neuroglancer_widget_histogram.HistogramPanel.md)

#### Inherited from

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[addRef](neuroglancer_display_context.RenderedPanel.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[dispose](neuroglancer_display_context.RenderedPanel.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[disposed](neuroglancer_display_context.RenderedPanel.md#disposed)

#### Defined in

[src/neuroglancer/display_context.ts:202](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L202)

___

### draw

▸ **draw**(): `void`

#### Returns

`void`

#### Overrides

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[draw](neuroglancer_display_context.RenderedPanel.md#draw)

#### Defined in

[src/neuroglancer/widget/histogram.ts:93](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/histogram.ts#L93)

___

### ensureBoundsUpdated

▸ **ensureBoundsUpdated**(): `void`

#### Returns

`void`

#### Inherited from

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[ensureBoundsUpdated](neuroglancer_display_context.RenderedPanel.md#ensureboundsupdated)

#### Defined in

[src/neuroglancer/display_context.ts:115](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L115)

___

### getDepthArray

▸ **getDepthArray**(): `undefined` \| `Float32Array`

#### Returns

`undefined` \| `Float32Array`

#### Inherited from

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[getDepthArray](neuroglancer_display_context.RenderedPanel.md#getdeptharray)

#### Defined in

[src/neuroglancer/display_context.ts:214](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L214)

___

### isReady

▸ **isReady**(): `boolean`

#### Returns

`boolean`

#### Overrides

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[isReady](neuroglancer_display_context.RenderedPanel.md#isready)

#### Defined in

[src/neuroglancer/widget/histogram.ts:140](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/histogram.ts#L140)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[refCountReachedZero](neuroglancer_display_context.RenderedPanel.md#refcountreachedzero)

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

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[registerCancellable](neuroglancer_display_context.RenderedPanel.md#registercancellable)

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

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[registerDisposer](neuroglancer_display_context.RenderedPanel.md#registerdisposer)

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

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[registerEventListener](neuroglancer_display_context.RenderedPanel.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L95)

___

### scheduleRedraw

▸ **scheduleRedraw**(): `void`

#### Returns

`void`

#### Inherited from

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[scheduleRedraw](neuroglancer_display_context.RenderedPanel.md#scheduleredraw)

#### Defined in

[src/neuroglancer/display_context.ts:107](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L107)

___

### setGLClippedViewport

▸ **setGLClippedViewport**(): `void`

#### Returns

`void`

#### Inherited from

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[setGLClippedViewport](neuroglancer_display_context.RenderedPanel.md#setglclippedviewport)

#### Defined in

[src/neuroglancer/display_context.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L175)

___

### setGLLogicalViewport

▸ **setGLLogicalViewport**(): `void`

#### Returns

`void`

#### Inherited from

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[setGLLogicalViewport](neuroglancer_display_context.RenderedPanel.md#setgllogicalviewport)

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

[RenderedPanel](neuroglancer_display_context.RenderedPanel.md).[unregisterDisposer](neuroglancer_display_context.RenderedPanel.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L85)
