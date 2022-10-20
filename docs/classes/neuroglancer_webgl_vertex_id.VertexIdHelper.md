[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/webgl/vertex\_id](../modules/neuroglancer_webgl_vertex_id.md) / VertexIdHelper

# Class: VertexIdHelper

[neuroglancer/webgl/vertex_id](../modules/neuroglancer_webgl_vertex_id.md).VertexIdHelper

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

  ↳ **`VertexIdHelper`**

## Table of contents

### Constructors

- [constructor](neuroglancer_webgl_vertex_id.VertexIdHelper.md#constructor)

### Properties

- [buffer](neuroglancer_webgl_vertex_id.VertexIdHelper.md#buffer)
- [disposedStacks](neuroglancer_webgl_vertex_id.VertexIdHelper.md#disposedstacks)
- [refCount](neuroglancer_webgl_vertex_id.VertexIdHelper.md#refcount)
- [size](neuroglancer_webgl_vertex_id.VertexIdHelper.md#size)
- [wasDisposed](neuroglancer_webgl_vertex_id.VertexIdHelper.md#wasdisposed)

### Methods

- [addRef](neuroglancer_webgl_vertex_id.VertexIdHelper.md#addref)
- [disable](neuroglancer_webgl_vertex_id.VertexIdHelper.md#disable)
- [dispose](neuroglancer_webgl_vertex_id.VertexIdHelper.md#dispose)
- [disposed](neuroglancer_webgl_vertex_id.VertexIdHelper.md#disposed)
- [enable](neuroglancer_webgl_vertex_id.VertexIdHelper.md#enable)
- [refCountReachedZero](neuroglancer_webgl_vertex_id.VertexIdHelper.md#refcountreachedzero)
- [registerCancellable](neuroglancer_webgl_vertex_id.VertexIdHelper.md#registercancellable)
- [registerDisposer](neuroglancer_webgl_vertex_id.VertexIdHelper.md#registerdisposer)
- [registerEventListener](neuroglancer_webgl_vertex_id.VertexIdHelper.md#registereventlistener)
- [unregisterDisposer](neuroglancer_webgl_vertex_id.VertexIdHelper.md#unregisterdisposer)
- [get](neuroglancer_webgl_vertex_id.VertexIdHelper.md#get)

## Constructors

### constructor

• **new VertexIdHelper**(`gl`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`WebGL2RenderingContext`](../modules/main_module._internal_.md#webgl2renderingcontext) |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/webgl/vertex_id.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/vertex_id.ts#L45)

## Properties

### buffer

• **buffer**: [`Buffer`](neuroglancer_webgl_buffer.Buffer.md)

#### Defined in

[src/neuroglancer/webgl/vertex_id.ts:43](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/vertex_id.ts#L43)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### size

• **size**: `number`

#### Defined in

[src/neuroglancer/webgl/vertex_id.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/vertex_id.ts#L42)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`VertexIdHelper`](neuroglancer_webgl_vertex_id.VertexIdHelper.md)

#### Returns

[`VertexIdHelper`](neuroglancer_webgl_vertex_id.VertexIdHelper.md)

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[addRef](neuroglancer_util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

___

### disable

▸ **disable**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/vertex_id.ts:70](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/vertex_id.ts#L70)

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

[src/neuroglancer/webgl/vertex_id.ts:51](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/vertex_id.ts#L51)

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

[src/neuroglancer/webgl/vertex_id.ts:55](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/vertex_id.ts#L55)

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

___

### get

▸ `Static` **get**(`gl`): [`VertexIdHelper`](neuroglancer_webgl_vertex_id.VertexIdHelper.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |

#### Returns

[`VertexIdHelper`](neuroglancer_webgl_vertex_id.VertexIdHelper.md)

#### Defined in

[src/neuroglancer/webgl/vertex_id.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/vertex_id.ts#L75)
