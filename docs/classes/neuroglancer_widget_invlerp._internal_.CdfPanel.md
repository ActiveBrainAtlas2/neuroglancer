[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/widget/invlerp](../modules/neuroglancer_widget_invlerp.md) / [<internal\>](../modules/neuroglancer_widget_invlerp._internal_.md) / CdfPanel

# Class: CdfPanel

[neuroglancer/widget/invlerp](../modules/neuroglancer_widget_invlerp.md).[<internal>](../modules/neuroglancer_widget_invlerp._internal_.md).CdfPanel

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

- [`IndirectRenderedPanel`](neuroglancer_display_context.IndirectRenderedPanel.md)

  ↳ **`CdfPanel`**

## Table of contents

### Constructors

- [constructor](neuroglancer_widget_invlerp._internal_.CdfPanel.md#constructor)

### Properties

- [boundsGeneration](neuroglancer_widget_invlerp._internal_.CdfPanel.md#boundsgeneration)
- [canvas](neuroglancer_widget_invlerp._internal_.CdfPanel.md#canvas)
- [canvasRelativeClippedLeft](neuroglancer_widget_invlerp._internal_.CdfPanel.md#canvasrelativeclippedleft)
- [canvasRelativeClippedTop](neuroglancer_widget_invlerp._internal_.CdfPanel.md#canvasrelativeclippedtop)
- [canvasRelativeLogicalLeft](neuroglancer_widget_invlerp._internal_.CdfPanel.md#canvasrelativelogicalleft)
- [canvasRelativeLogicalTop](neuroglancer_widget_invlerp._internal_.CdfPanel.md#canvasrelativelogicaltop)
- [canvasRenderingContext](neuroglancer_widget_invlerp._internal_.CdfPanel.md#canvasrenderingcontext)
- [context](neuroglancer_widget_invlerp._internal_.CdfPanel.md#context)
- [controller](neuroglancer_widget_invlerp._internal_.CdfPanel.md#controller)
- [dataValuesBuffer](neuroglancer_widget_invlerp._internal_.CdfPanel.md#datavaluesbuffer)
- [disposedStacks](neuroglancer_widget_invlerp._internal_.CdfPanel.md#disposedstacks)
- [element](neuroglancer_widget_invlerp._internal_.CdfPanel.md#element)
- [gl](neuroglancer_widget_invlerp._internal_.CdfPanel.md#gl)
- [lineShader](neuroglancer_widget_invlerp._internal_.CdfPanel.md#lineshader)
- [parent](neuroglancer_widget_invlerp._internal_.CdfPanel.md#parent)
- [refCount](neuroglancer_widget_invlerp._internal_.CdfPanel.md#refcount)
- [regionCornersBuffer](neuroglancer_widget_invlerp._internal_.CdfPanel.md#regioncornersbuffer)
- [regionShader](neuroglancer_widget_invlerp._internal_.CdfPanel.md#regionshader)
- [renderViewport](neuroglancer_widget_invlerp._internal_.CdfPanel.md#renderviewport)
- [visibility](neuroglancer_widget_invlerp._internal_.CdfPanel.md#visibility)
- [wasDisposed](neuroglancer_widget_invlerp._internal_.CdfPanel.md#wasdisposed)

### Accessors

- [drawOrder](neuroglancer_widget_invlerp._internal_.CdfPanel.md#draworder)
- [shouldDraw](neuroglancer_widget_invlerp._internal_.CdfPanel.md#shoulddraw)
- [visible](neuroglancer_widget_invlerp._internal_.CdfPanel.md#visible)

### Methods

- [addRef](neuroglancer_widget_invlerp._internal_.CdfPanel.md#addref)
- [dispose](neuroglancer_widget_invlerp._internal_.CdfPanel.md#dispose)
- [disposed](neuroglancer_widget_invlerp._internal_.CdfPanel.md#disposed)
- [draw](neuroglancer_widget_invlerp._internal_.CdfPanel.md#draw)
- [drawIndirect](neuroglancer_widget_invlerp._internal_.CdfPanel.md#drawindirect)
- [ensureBoundsUpdated](neuroglancer_widget_invlerp._internal_.CdfPanel.md#ensureboundsupdated)
- [getDepthArray](neuroglancer_widget_invlerp._internal_.CdfPanel.md#getdeptharray)
- [isReady](neuroglancer_widget_invlerp._internal_.CdfPanel.md#isready)
- [refCountReachedZero](neuroglancer_widget_invlerp._internal_.CdfPanel.md#refcountreachedzero)
- [registerCancellable](neuroglancer_widget_invlerp._internal_.CdfPanel.md#registercancellable)
- [registerDisposer](neuroglancer_widget_invlerp._internal_.CdfPanel.md#registerdisposer)
- [registerEventListener](neuroglancer_widget_invlerp._internal_.CdfPanel.md#registereventlistener)
- [scheduleRedraw](neuroglancer_widget_invlerp._internal_.CdfPanel.md#scheduleredraw)
- [setGLClippedViewport](neuroglancer_widget_invlerp._internal_.CdfPanel.md#setglclippedviewport)
- [setGLLogicalViewport](neuroglancer_widget_invlerp._internal_.CdfPanel.md#setgllogicalviewport)
- [unregisterDisposer](neuroglancer_widget_invlerp._internal_.CdfPanel.md#unregisterdisposer)

## Constructors

### constructor

• **new CdfPanel**(`parent`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`InvlerpWidget`](neuroglancer_widget_invlerp.InvlerpWidget.md) |

#### Overrides

[IndirectRenderedPanel](neuroglancer_display_context.IndirectRenderedPanel.md).[constructor](neuroglancer_display_context.IndirectRenderedPanel.md#constructor)

#### Defined in

[src/neuroglancer/widget/invlerp.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/invlerp.ts#L192)

## Properties

### boundsGeneration

• **boundsGeneration**: `number` = `-1`

#### Inherited from

[IndirectRenderedPanel](neuroglancer_display_context.IndirectRenderedPanel.md).[boundsGeneration](neuroglancer_display_context.IndirectRenderedPanel.md#boundsgeneration)

#### Defined in

[src/neuroglancer/display_context.ts:84](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L84)

___

### canvas

• **canvas**: [`HTMLCanvasElement`](../modules/main_module._internal_.md#htmlcanvaselement)

#### Inherited from

[IndirectRenderedPanel](neuroglancer_display_context.IndirectRenderedPanel.md).[canvas](neuroglancer_display_context.IndirectRenderedPanel.md#canvas)

#### Defined in

[src/neuroglancer/display_context.ts:239](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L239)

___

### canvasRelativeClippedLeft

• **canvasRelativeClippedLeft**: `number` = `0`

#### Inherited from

[IndirectRenderedPanel](neuroglancer_display_context.IndirectRenderedPanel.md).[canvasRelativeClippedLeft](neuroglancer_display_context.IndirectRenderedPanel.md#canvasrelativeclippedleft)

#### Defined in

[src/neuroglancer/display_context.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L87)

___

### canvasRelativeClippedTop

• **canvasRelativeClippedTop**: `number` = `0`

#### Inherited from

[IndirectRenderedPanel](neuroglancer_display_context.IndirectRenderedPanel.md).[canvasRelativeClippedTop](neuroglancer_display_context.IndirectRenderedPanel.md#canvasrelativeclippedtop)

#### Defined in

[src/neuroglancer/display_context.ts:90](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L90)

___

### canvasRelativeLogicalLeft

• **canvasRelativeLogicalLeft**: `number` = `0`

#### Inherited from

[IndirectRenderedPanel](neuroglancer_display_context.IndirectRenderedPanel.md).[canvasRelativeLogicalLeft](neuroglancer_display_context.IndirectRenderedPanel.md#canvasrelativelogicalleft)

#### Defined in

[src/neuroglancer/display_context.ts:92](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L92)

___

### canvasRelativeLogicalTop

• **canvasRelativeLogicalTop**: `number` = `0`

#### Inherited from

[IndirectRenderedPanel](neuroglancer_display_context.IndirectRenderedPanel.md).[canvasRelativeLogicalTop](neuroglancer_display_context.IndirectRenderedPanel.md#canvasrelativelogicaltop)

#### Defined in

[src/neuroglancer/display_context.ts:93](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L93)

___

### canvasRenderingContext

• **canvasRenderingContext**: ``null`` \| [`CanvasRenderingContext2D`](../modules/main_module._internal_.md#canvasrenderingcontext2d)

#### Inherited from

[IndirectRenderedPanel](neuroglancer_display_context.IndirectRenderedPanel.md).[canvasRenderingContext](neuroglancer_display_context.IndirectRenderedPanel.md#canvasrenderingcontext)

#### Defined in

[src/neuroglancer/display_context.ts:240](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L240)

___

### context

• **context**: [`DisplayContext`](neuroglancer_display_context.DisplayContext.md)

#### Inherited from

[IndirectRenderedPanel](neuroglancer_display_context.IndirectRenderedPanel.md).[context](neuroglancer_display_context.IndirectRenderedPanel.md#context)

#### Defined in

[src/neuroglancer/display_context.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L100)

___

### controller

• **controller**: [`CdfController`](neuroglancer_widget_invlerp.CdfController.md)<[`InvlerpParameters`](../interfaces/neuroglancer_webgl_shader_ui_controls.InvlerpParameters.md)\>

#### Defined in

[src/neuroglancer/widget/invlerp.ts:187](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/invlerp.ts#L187)

___

### dataValuesBuffer

• `Private` **dataValuesBuffer**: [`Buffer`](neuroglancer_webgl_buffer.Buffer.md)

#### Defined in

[src/neuroglancer/widget/invlerp.ts:198](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/invlerp.ts#L198)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[IndirectRenderedPanel](neuroglancer_display_context.IndirectRenderedPanel.md).[disposedStacks](neuroglancer_display_context.IndirectRenderedPanel.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)

#### Inherited from

[IndirectRenderedPanel](neuroglancer_display_context.IndirectRenderedPanel.md).[element](neuroglancer_display_context.IndirectRenderedPanel.md#element)

#### Defined in

[src/neuroglancer/display_context.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L100)

___

### gl

• **gl**: [`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

#### Inherited from

[IndirectRenderedPanel](neuroglancer_display_context.IndirectRenderedPanel.md).[gl](neuroglancer_display_context.IndirectRenderedPanel.md#gl)

#### Defined in

[src/neuroglancer/display_context.ts:81](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L81)

___

### lineShader

• `Private` **lineShader**: [`ShaderProgram`](neuroglancer_webgl_shader.ShaderProgram.md)

#### Defined in

[src/neuroglancer/widget/invlerp.ts:209](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/invlerp.ts#L209)

___

### parent

• **parent**: [`InvlerpWidget`](neuroglancer_widget_invlerp.InvlerpWidget.md)

#### Defined in

[src/neuroglancer/widget/invlerp.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/invlerp.ts#L192)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[IndirectRenderedPanel](neuroglancer_display_context.IndirectRenderedPanel.md).[refCount](neuroglancer_display_context.IndirectRenderedPanel.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### regionCornersBuffer

• `Private` **regionCornersBuffer**: [`Buffer`](neuroglancer_webgl_buffer.Buffer.md)

#### Defined in

[src/neuroglancer/widget/invlerp.ts:258](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/invlerp.ts#L258)

___

### regionShader

• `Private` **regionShader**: [`ShaderProgram`](neuroglancer_webgl_shader.ShaderProgram.md)

#### Defined in

[src/neuroglancer/widget/invlerp.ts:260](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/invlerp.ts#L260)

___

### renderViewport

• **renderViewport**: [`RenderViewport`](neuroglancer_display_context.RenderViewport.md)

#### Inherited from

[IndirectRenderedPanel](neuroglancer_display_context.IndirectRenderedPanel.md).[renderViewport](neuroglancer_display_context.IndirectRenderedPanel.md#renderviewport)

#### Defined in

[src/neuroglancer/display_context.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L95)

___

### visibility

• **visibility**: [`WatchableVisibilityPriority`](neuroglancer_visibility_priority_frontend.WatchableVisibilityPriority.md)

#### Inherited from

[IndirectRenderedPanel](neuroglancer_display_context.IndirectRenderedPanel.md).[visibility](neuroglancer_display_context.IndirectRenderedPanel.md#visibility)

#### Defined in

[src/neuroglancer/display_context.ts:101](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L101)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[IndirectRenderedPanel](neuroglancer_display_context.IndirectRenderedPanel.md).[wasDisposed](neuroglancer_display_context.IndirectRenderedPanel.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### drawOrder

• `get` **drawOrder**(): `number`

#### Returns

`number`

#### Overrides

IndirectRenderedPanel.drawOrder

#### Defined in

[src/neuroglancer/widget/invlerp.ts:184](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/invlerp.ts#L184)

___

### shouldDraw

• `get` **shouldDraw**(): `boolean`

#### Returns

`boolean`

#### Inherited from

IndirectRenderedPanel.shouldDraw

#### Defined in

[src/neuroglancer/display_context.ts:218](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L218)

___

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

IndirectRenderedPanel.visible

#### Defined in

[src/neuroglancer/display_context.ts:210](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L210)

## Methods

### addRef

▸ **addRef**(): [`CdfPanel`](neuroglancer_widget_invlerp._internal_.CdfPanel.md)

#### Returns

[`CdfPanel`](neuroglancer_widget_invlerp._internal_.CdfPanel.md)

#### Inherited from

[IndirectRenderedPanel](neuroglancer_display_context.IndirectRenderedPanel.md).[addRef](neuroglancer_display_context.IndirectRenderedPanel.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[IndirectRenderedPanel](neuroglancer_display_context.IndirectRenderedPanel.md).[dispose](neuroglancer_display_context.IndirectRenderedPanel.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[IndirectRenderedPanel](neuroglancer_display_context.IndirectRenderedPanel.md).[disposed](neuroglancer_display_context.IndirectRenderedPanel.md#disposed)

#### Defined in

[src/neuroglancer/display_context.ts:202](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L202)

___

### draw

▸ **draw**(): `void`

#### Returns

`void`

#### Inherited from

[IndirectRenderedPanel](neuroglancer_display_context.IndirectRenderedPanel.md).[draw](neuroglancer_display_context.IndirectRenderedPanel.md#draw)

#### Defined in

[src/neuroglancer/display_context.ts:257](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L257)

___

### drawIndirect

▸ **drawIndirect**(): `void`

#### Returns

`void`

#### Overrides

[IndirectRenderedPanel](neuroglancer_display_context.IndirectRenderedPanel.md).[drawIndirect](neuroglancer_display_context.IndirectRenderedPanel.md#drawindirect)

#### Defined in

[src/neuroglancer/widget/invlerp.ts:275](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/invlerp.ts#L275)

___

### ensureBoundsUpdated

▸ **ensureBoundsUpdated**(): `void`

#### Returns

`void`

#### Inherited from

[IndirectRenderedPanel](neuroglancer_display_context.IndirectRenderedPanel.md).[ensureBoundsUpdated](neuroglancer_display_context.IndirectRenderedPanel.md#ensureboundsupdated)

#### Defined in

[src/neuroglancer/display_context.ts:115](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L115)

___

### getDepthArray

▸ **getDepthArray**(): `undefined` \| `Float32Array`

#### Returns

`undefined` \| `Float32Array`

#### Inherited from

[IndirectRenderedPanel](neuroglancer_display_context.IndirectRenderedPanel.md).[getDepthArray](neuroglancer_display_context.IndirectRenderedPanel.md#getdeptharray)

#### Defined in

[src/neuroglancer/display_context.ts:214](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L214)

___

### isReady

▸ **isReady**(): `boolean`

#### Returns

`boolean`

#### Overrides

[IndirectRenderedPanel](neuroglancer_display_context.IndirectRenderedPanel.md).[isReady](neuroglancer_display_context.IndirectRenderedPanel.md#isready)

#### Defined in

[src/neuroglancer/widget/invlerp.ts:324](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/invlerp.ts#L324)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[IndirectRenderedPanel](neuroglancer_display_context.IndirectRenderedPanel.md).[refCountReachedZero](neuroglancer_display_context.IndirectRenderedPanel.md#refcountreachedzero)

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

[IndirectRenderedPanel](neuroglancer_display_context.IndirectRenderedPanel.md).[registerCancellable](neuroglancer_display_context.IndirectRenderedPanel.md#registercancellable)

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

[IndirectRenderedPanel](neuroglancer_display_context.IndirectRenderedPanel.md).[registerDisposer](neuroglancer_display_context.IndirectRenderedPanel.md#registerdisposer)

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

[IndirectRenderedPanel](neuroglancer_display_context.IndirectRenderedPanel.md).[registerEventListener](neuroglancer_display_context.IndirectRenderedPanel.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L95)

___

### scheduleRedraw

▸ **scheduleRedraw**(): `void`

#### Returns

`void`

#### Inherited from

[IndirectRenderedPanel](neuroglancer_display_context.IndirectRenderedPanel.md).[scheduleRedraw](neuroglancer_display_context.IndirectRenderedPanel.md#scheduleredraw)

#### Defined in

[src/neuroglancer/display_context.ts:107](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L107)

___

### setGLClippedViewport

▸ **setGLClippedViewport**(): `void`

#### Returns

`void`

#### Inherited from

[IndirectRenderedPanel](neuroglancer_display_context.IndirectRenderedPanel.md).[setGLClippedViewport](neuroglancer_display_context.IndirectRenderedPanel.md#setglclippedviewport)

#### Defined in

[src/neuroglancer/display_context.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/display_context.ts#L175)

___

### setGLLogicalViewport

▸ **setGLLogicalViewport**(): `void`

#### Returns

`void`

#### Inherited from

[IndirectRenderedPanel](neuroglancer_display_context.IndirectRenderedPanel.md).[setGLLogicalViewport](neuroglancer_display_context.IndirectRenderedPanel.md#setgllogicalviewport)

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

[IndirectRenderedPanel](neuroglancer_display_context.IndirectRenderedPanel.md).[unregisterDisposer](neuroglancer_display_context.IndirectRenderedPanel.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L85)
