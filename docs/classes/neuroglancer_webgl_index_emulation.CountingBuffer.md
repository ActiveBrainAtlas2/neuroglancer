[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/webgl/index\_emulation](../modules/neuroglancer_webgl_index_emulation.md) / CountingBuffer

# Class: CountingBuffer

[neuroglancer/webgl/index_emulation](../modules/neuroglancer_webgl_index_emulation.md).CountingBuffer

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`CountingBuffer`**

## Table of contents

### Constructors

- [constructor](neuroglancer_webgl_index_emulation.CountingBuffer.md#constructor)

### Properties

- [buffer](neuroglancer_webgl_index_emulation.CountingBuffer.md#buffer)
- [disposedStacks](neuroglancer_webgl_index_emulation.CountingBuffer.md#disposedstacks)
- [gl](neuroglancer_webgl_index_emulation.CountingBuffer.md#gl)
- [length](neuroglancer_webgl_index_emulation.CountingBuffer.md#length)
- [refCount](neuroglancer_webgl_index_emulation.CountingBuffer.md#refcount)
- [wasDisposed](neuroglancer_webgl_index_emulation.CountingBuffer.md#wasdisposed)
- [webglType](neuroglancer_webgl_index_emulation.CountingBuffer.md#webgltype)

### Methods

- [addRef](neuroglancer_webgl_index_emulation.CountingBuffer.md#addref)
- [bind](neuroglancer_webgl_index_emulation.CountingBuffer.md#bind)
- [bindToVertexAttrib](neuroglancer_webgl_index_emulation.CountingBuffer.md#bindtovertexattrib)
- [dispose](neuroglancer_webgl_index_emulation.CountingBuffer.md#dispose)
- [disposed](neuroglancer_webgl_index_emulation.CountingBuffer.md#disposed)
- [ensure](neuroglancer_webgl_index_emulation.CountingBuffer.md#ensure)
- [refCountReachedZero](neuroglancer_webgl_index_emulation.CountingBuffer.md#refcountreachedzero)
- [registerCancellable](neuroglancer_webgl_index_emulation.CountingBuffer.md#registercancellable)
- [registerDisposer](neuroglancer_webgl_index_emulation.CountingBuffer.md#registerdisposer)
- [registerEventListener](neuroglancer_webgl_index_emulation.CountingBuffer.md#registereventlistener)
- [resize](neuroglancer_webgl_index_emulation.CountingBuffer.md#resize)
- [unregisterDisposer](neuroglancer_webgl_index_emulation.CountingBuffer.md#unregisterdisposer)

## Constructors

### constructor

• **new CountingBuffer**(`gl`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/webgl/index_emulation.ts:28](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/index_emulation.ts#L28)

## Properties

### buffer

• **buffer**: [`Buffer`](neuroglancer_webgl_buffer.Buffer.md)

#### Defined in

[src/neuroglancer/webgl/index_emulation.ts:26](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/index_emulation.ts#L26)

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

### length

• **length**: `undefined` \| `number`

#### Defined in

[src/neuroglancer/webgl/index_emulation.ts:24](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/index_emulation.ts#L24)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

___

### webglType

• **webglType**: `undefined` \| `number`

#### Defined in

[src/neuroglancer/webgl/index_emulation.ts:25](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/index_emulation.ts#L25)

## Methods

### addRef

▸ **addRef**(): [`CountingBuffer`](neuroglancer_webgl_index_emulation.CountingBuffer.md)

#### Returns

[`CountingBuffer`](neuroglancer_webgl_index_emulation.CountingBuffer.md)

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[addRef](neuroglancer_util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L48)

___

### bind

▸ **bind**(`shader`, `divisor?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `shader` | [`ShaderProgram`](neuroglancer_webgl_shader.ShaderProgram.md) | `undefined` |
| `divisor` | `number` | `0` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/index_emulation.ts:69](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/index_emulation.ts#L69)

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

[src/neuroglancer/webgl/index_emulation.ts:65](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/index_emulation.ts#L65)

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

### ensure

▸ **ensure**(`length`): [`CountingBuffer`](neuroglancer_webgl_index_emulation.CountingBuffer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `length` | `number` |

#### Returns

[`CountingBuffer`](neuroglancer_webgl_index_emulation.CountingBuffer.md)

#### Defined in

[src/neuroglancer/webgl/index_emulation.ts:58](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/index_emulation.ts#L58)

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

### resize

▸ **resize**(`length`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `length` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/index_emulation.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/index_emulation.ts#L33)

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
