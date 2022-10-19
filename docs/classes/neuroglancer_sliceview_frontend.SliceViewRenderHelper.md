[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/sliceview/frontend](../modules/neuroglancer_sliceview_frontend.md) / SliceViewRenderHelper

# Class: SliceViewRenderHelper

[neuroglancer/sliceview/frontend](../modules/neuroglancer_sliceview_frontend.md).SliceViewRenderHelper

Helper for rendering a SliceView that has been pre-rendered to a texture.

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`SliceViewRenderHelper`**

## Table of contents

### Constructors

- [constructor](neuroglancer_sliceview_frontend.SliceViewRenderHelper.md#constructor)

### Properties

- [copyVertexPositionsBuffer](neuroglancer_sliceview_frontend.SliceViewRenderHelper.md#copyvertexpositionsbuffer)
- [disposedStacks](neuroglancer_sliceview_frontend.SliceViewRenderHelper.md#disposedstacks)
- [gl](neuroglancer_sliceview_frontend.SliceViewRenderHelper.md#gl)
- [refCount](neuroglancer_sliceview_frontend.SliceViewRenderHelper.md#refcount)
- [shader](neuroglancer_sliceview_frontend.SliceViewRenderHelper.md#shader)
- [textureCoordinateAdjustment](neuroglancer_sliceview_frontend.SliceViewRenderHelper.md#texturecoordinateadjustment)
- [wasDisposed](neuroglancer_sliceview_frontend.SliceViewRenderHelper.md#wasdisposed)

### Methods

- [addRef](neuroglancer_sliceview_frontend.SliceViewRenderHelper.md#addref)
- [dispose](neuroglancer_sliceview_frontend.SliceViewRenderHelper.md#dispose)
- [disposed](neuroglancer_sliceview_frontend.SliceViewRenderHelper.md#disposed)
- [draw](neuroglancer_sliceview_frontend.SliceViewRenderHelper.md#draw)
- [refCountReachedZero](neuroglancer_sliceview_frontend.SliceViewRenderHelper.md#refcountreachedzero)
- [registerCancellable](neuroglancer_sliceview_frontend.SliceViewRenderHelper.md#registercancellable)
- [registerDisposer](neuroglancer_sliceview_frontend.SliceViewRenderHelper.md#registerdisposer)
- [registerEventListener](neuroglancer_sliceview_frontend.SliceViewRenderHelper.md#registereventlistener)
- [unregisterDisposer](neuroglancer_sliceview_frontend.SliceViewRenderHelper.md#unregisterdisposer)
- [get](neuroglancer_sliceview_frontend.SliceViewRenderHelper.md#get)

## Constructors

### constructor

• **new SliceViewRenderHelper**(`gl`, `emitter`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |
| `emitter` | [`ShaderModule`](../modules/neuroglancer_webgl_shader.md#shadermodule) |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:508](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/frontend.ts#L508)

## Properties

### copyVertexPositionsBuffer

• `Private` **copyVertexPositionsBuffer**: [`Buffer`](neuroglancer_webgl_buffer.Buffer.md)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:503](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/frontend.ts#L503)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### gl

• **gl**: [`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### shader

• `Private` **shader**: [`ShaderProgram`](neuroglancer_webgl_shader.ShaderProgram.md)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:504](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/frontend.ts#L504)

___

### textureCoordinateAdjustment

• `Private` **textureCoordinateAdjustment**: `Float32Array`

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:506](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/frontend.ts#L506)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`SliceViewRenderHelper`](neuroglancer_sliceview_frontend.SliceViewRenderHelper.md)

#### Returns

[`SliceViewRenderHelper`](neuroglancer_sliceview_frontend.SliceViewRenderHelper.md)

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[addRef](neuroglancer_util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[dispose](neuroglancer_util_disposable.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposed](neuroglancer_util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L75)

___

### draw

▸ **draw**(`texture`, `projectionMatrix`, `colorFactor`, `backgroundColor`, `xStart`, `yStart`, `xEnd`, `yEnd`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | ``null`` \| [`WebGLTexture`](../modules/main_module._internal_.md#webgltexture) |
| `projectionMatrix` | [`mat4`](neuroglancer_util_geom.mat4.md) |
| `colorFactor` | [`vec4`](neuroglancer_util_geom.vec4.md) |
| `backgroundColor` | [`vec4`](neuroglancer_util_geom.vec4.md) |
| `xStart` | `number` |
| `yStart` | `number` |
| `xEnd` | `number` |
| `yEnd` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:536](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/frontend.ts#L536)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCountReachedZero](neuroglancer_util_disposable.RefCounted.md#refcountreachedzero)

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

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[registerCancellable](neuroglancer_util_disposable.RefCounted.md#registercancellable)

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

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[registerDisposer](neuroglancer_util_disposable.RefCounted.md#registerdisposer)

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

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[registerEventListener](neuroglancer_util_disposable.RefCounted.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L95)

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

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L85)

___

### get

▸ `Static` **get**(`gl`, `emitter`): [`SliceViewRenderHelper`](neuroglancer_sliceview_frontend.SliceViewRenderHelper.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |
| `emitter` | [`ShaderModule`](../modules/neuroglancer_webgl_shader.md#shadermodule) |

#### Returns

[`SliceViewRenderHelper`](neuroglancer_sliceview_frontend.SliceViewRenderHelper.md)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:562](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/frontend.ts#L562)
