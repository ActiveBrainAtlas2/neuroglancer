[neuroglancer](../README.md) / [Modules](../modules.md) / [webgl/vertex\_id](../modules/webgl_vertex_id.md) / VertexIdHelper

# Class: VertexIdHelper

[webgl/vertex_id](../modules/webgl_vertex_id.md).VertexIdHelper

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`VertexIdHelper`**

## Table of contents

### Constructors

- [constructor](webgl_vertex_id.VertexIdHelper.md#constructor)

### Properties

- [buffer](webgl_vertex_id.VertexIdHelper.md#buffer)
- [disposedStacks](webgl_vertex_id.VertexIdHelper.md#disposedstacks)
- [refCount](webgl_vertex_id.VertexIdHelper.md#refcount)
- [size](webgl_vertex_id.VertexIdHelper.md#size)
- [wasDisposed](webgl_vertex_id.VertexIdHelper.md#wasdisposed)

### Methods

- [addRef](webgl_vertex_id.VertexIdHelper.md#addref)
- [disable](webgl_vertex_id.VertexIdHelper.md#disable)
- [dispose](webgl_vertex_id.VertexIdHelper.md#dispose)
- [disposed](webgl_vertex_id.VertexIdHelper.md#disposed)
- [enable](webgl_vertex_id.VertexIdHelper.md#enable)
- [refCountReachedZero](webgl_vertex_id.VertexIdHelper.md#refcountreachedzero)
- [registerCancellable](webgl_vertex_id.VertexIdHelper.md#registercancellable)
- [registerDisposer](webgl_vertex_id.VertexIdHelper.md#registerdisposer)
- [registerEventListener](webgl_vertex_id.VertexIdHelper.md#registereventlistener)
- [unregisterDisposer](webgl_vertex_id.VertexIdHelper.md#unregisterdisposer)
- [get](webgl_vertex_id.VertexIdHelper.md#get)

## Constructors

### constructor

• **new VertexIdHelper**(`gl`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`WebGL2RenderingContext`](../modules/annotation_annotation_layer_state._internal_.md#webgl2renderingcontext) |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/webgl/vertex_id.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/vertex_id.ts#L45)

## Properties

### buffer

• **buffer**: [`Buffer`](webgl_buffer.Buffer.md)

#### Defined in

[src/neuroglancer/webgl/vertex_id.ts:43](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/vertex_id.ts#L43)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### size

• **size**: `number`

#### Defined in

[src/neuroglancer/webgl/vertex_id.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/vertex_id.ts#L42)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`VertexIdHelper`](webgl_vertex_id.VertexIdHelper.md)

#### Returns

[`VertexIdHelper`](webgl_vertex_id.VertexIdHelper.md)

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[addRef](util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### disable

▸ **disable**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/vertex_id.ts:70](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/vertex_id.ts#L70)

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

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[disposed](util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/webgl/vertex_id.ts:51](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/vertex_id.ts#L51)

___

### enable

▸ **enable**(`size?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `size` | `number` | `256` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/vertex_id.ts:55](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/vertex_id.ts#L55)

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

▸ `Static` **get**(`gl`): [`VertexIdHelper`](webgl_vertex_id.VertexIdHelper.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/webgl_context.GL.md) |

#### Returns

[`VertexIdHelper`](webgl_vertex_id.VertexIdHelper.md)

#### Defined in

[src/neuroglancer/webgl/vertex_id.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/vertex_id.ts#L75)
