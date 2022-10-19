[neuroglancer](../README.md) / [Modules](../modules.md) / [webgl/index\_emulation](../modules/webgl_index_emulation.md) / CountingBuffer

# Class: CountingBuffer

[webgl/index_emulation](../modules/webgl_index_emulation.md).CountingBuffer

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`CountingBuffer`**

## Table of contents

### Constructors

- [constructor](webgl_index_emulation.CountingBuffer.md#constructor)

### Properties

- [buffer](webgl_index_emulation.CountingBuffer.md#buffer)
- [disposedStacks](webgl_index_emulation.CountingBuffer.md#disposedstacks)
- [gl](webgl_index_emulation.CountingBuffer.md#gl)
- [length](webgl_index_emulation.CountingBuffer.md#length)
- [refCount](webgl_index_emulation.CountingBuffer.md#refcount)
- [wasDisposed](webgl_index_emulation.CountingBuffer.md#wasdisposed)
- [webglType](webgl_index_emulation.CountingBuffer.md#webgltype)

### Methods

- [addRef](webgl_index_emulation.CountingBuffer.md#addref)
- [bind](webgl_index_emulation.CountingBuffer.md#bind)
- [bindToVertexAttrib](webgl_index_emulation.CountingBuffer.md#bindtovertexattrib)
- [dispose](webgl_index_emulation.CountingBuffer.md#dispose)
- [disposed](webgl_index_emulation.CountingBuffer.md#disposed)
- [ensure](webgl_index_emulation.CountingBuffer.md#ensure)
- [refCountReachedZero](webgl_index_emulation.CountingBuffer.md#refcountreachedzero)
- [registerCancellable](webgl_index_emulation.CountingBuffer.md#registercancellable)
- [registerDisposer](webgl_index_emulation.CountingBuffer.md#registerdisposer)
- [registerEventListener](webgl_index_emulation.CountingBuffer.md#registereventlistener)
- [resize](webgl_index_emulation.CountingBuffer.md#resize)
- [unregisterDisposer](webgl_index_emulation.CountingBuffer.md#unregisterdisposer)

## Constructors

### constructor

• **new CountingBuffer**(`gl`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/webgl_context.GL.md) |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/webgl/index_emulation.ts:28](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/index_emulation.ts#L28)

## Properties

### buffer

• **buffer**: [`Buffer`](webgl_buffer.Buffer.md)

#### Defined in

[src/neuroglancer/webgl/index_emulation.ts:26](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/index_emulation.ts#L26)

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

### length

• **length**: `undefined` \| `number`

#### Defined in

[src/neuroglancer/webgl/index_emulation.ts:24](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/index_emulation.ts#L24)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

___

### webglType

• **webglType**: `undefined` \| `number`

#### Defined in

[src/neuroglancer/webgl/index_emulation.ts:25](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/index_emulation.ts#L25)

## Methods

### addRef

▸ **addRef**(): [`CountingBuffer`](webgl_index_emulation.CountingBuffer.md)

#### Returns

[`CountingBuffer`](webgl_index_emulation.CountingBuffer.md)

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[addRef](util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### bind

▸ **bind**(`shader`, `divisor?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `shader` | [`ShaderProgram`](webgl_shader.ShaderProgram.md) | `undefined` |
| `divisor` | `number` | `0` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/index_emulation.ts:69](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/index_emulation.ts#L69)

___

### bindToVertexAttrib

▸ **bindToVertexAttrib**(`location`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/index_emulation.ts:65](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/index_emulation.ts#L65)

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

### ensure

▸ **ensure**(`length`): [`CountingBuffer`](webgl_index_emulation.CountingBuffer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `length` | `number` |

#### Returns

[`CountingBuffer`](webgl_index_emulation.CountingBuffer.md)

#### Defined in

[src/neuroglancer/webgl/index_emulation.ts:58](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/index_emulation.ts#L58)

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

### resize

▸ **resize**(`length`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `length` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/index_emulation.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/index_emulation.ts#L33)

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
