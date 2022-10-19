[neuroglancer](../README.md) / [Modules](../modules.md) / [sliceview/frontend](../modules/sliceview_frontend.md) / SliceViewRenderHelper

# Class: SliceViewRenderHelper

[sliceview/frontend](../modules/sliceview_frontend.md).SliceViewRenderHelper

Helper for rendering a SliceView that has been pre-rendered to a texture.

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`SliceViewRenderHelper`**

## Table of contents

### Constructors

- [constructor](sliceview_frontend.SliceViewRenderHelper.md#constructor)

### Properties

- [copyVertexPositionsBuffer](sliceview_frontend.SliceViewRenderHelper.md#copyvertexpositionsbuffer)
- [disposedStacks](sliceview_frontend.SliceViewRenderHelper.md#disposedstacks)
- [gl](sliceview_frontend.SliceViewRenderHelper.md#gl)
- [refCount](sliceview_frontend.SliceViewRenderHelper.md#refcount)
- [shader](sliceview_frontend.SliceViewRenderHelper.md#shader)
- [textureCoordinateAdjustment](sliceview_frontend.SliceViewRenderHelper.md#texturecoordinateadjustment)
- [wasDisposed](sliceview_frontend.SliceViewRenderHelper.md#wasdisposed)

### Methods

- [addRef](sliceview_frontend.SliceViewRenderHelper.md#addref)
- [dispose](sliceview_frontend.SliceViewRenderHelper.md#dispose)
- [disposed](sliceview_frontend.SliceViewRenderHelper.md#disposed)
- [draw](sliceview_frontend.SliceViewRenderHelper.md#draw)
- [refCountReachedZero](sliceview_frontend.SliceViewRenderHelper.md#refcountreachedzero)
- [registerCancellable](sliceview_frontend.SliceViewRenderHelper.md#registercancellable)
- [registerDisposer](sliceview_frontend.SliceViewRenderHelper.md#registerdisposer)
- [registerEventListener](sliceview_frontend.SliceViewRenderHelper.md#registereventlistener)
- [unregisterDisposer](sliceview_frontend.SliceViewRenderHelper.md#unregisterdisposer)
- [get](sliceview_frontend.SliceViewRenderHelper.md#get)

## Constructors

### constructor

• **new SliceViewRenderHelper**(`gl`, `emitter`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/webgl_context.GL.md) |
| `emitter` | [`ShaderModule`](../modules/webgl_shader.md#shadermodule) |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:508](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/frontend.ts#L508)

## Properties

### copyVertexPositionsBuffer

• `Private` **copyVertexPositionsBuffer**: [`Buffer`](webgl_buffer.Buffer.md)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:503](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/frontend.ts#L503)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### gl

• **gl**: [`GL`](../interfaces/webgl_context.GL.md)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### shader

• `Private` **shader**: [`ShaderProgram`](webgl_shader.ShaderProgram.md)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:504](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/frontend.ts#L504)

___

### textureCoordinateAdjustment

• `Private` **textureCoordinateAdjustment**: `Float32Array`

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:506](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/frontend.ts#L506)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`SliceViewRenderHelper`](sliceview_frontend.SliceViewRenderHelper.md)

#### Returns

[`SliceViewRenderHelper`](sliceview_frontend.SliceViewRenderHelper.md)

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

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposed](util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L75)

___

### draw

▸ **draw**(`texture`, `projectionMatrix`, `colorFactor`, `backgroundColor`, `xStart`, `yStart`, `xEnd`, `yEnd`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | ``null`` \| [`WebGLTexture`](../modules/annotation_annotation_layer_state._internal_.md#webgltexture) |
| `projectionMatrix` | [`mat4`](util_geom.mat4.md) |
| `colorFactor` | [`vec4`](util_geom.vec4.md) |
| `backgroundColor` | [`vec4`](util_geom.vec4.md) |
| `xStart` | `number` |
| `yStart` | `number` |
| `xEnd` | `number` |
| `yEnd` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:536](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/frontend.ts#L536)

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

___

### get

▸ `Static` **get**(`gl`, `emitter`): [`SliceViewRenderHelper`](sliceview_frontend.SliceViewRenderHelper.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/webgl_context.GL.md) |
| `emitter` | [`ShaderModule`](../modules/webgl_shader.md#shadermodule) |

#### Returns

[`SliceViewRenderHelper`](sliceview_frontend.SliceViewRenderHelper.md)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:562](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/frontend.ts#L562)
