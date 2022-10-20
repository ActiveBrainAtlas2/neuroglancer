[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/layer\_data\_source](../modules/neuroglancer_layer_data_source.md) / LayerDataSource

# Class: LayerDataSource

[neuroglancer/layer_data_source](../modules/neuroglancer_layer_data_source.md).LayerDataSource

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

  ↳ **`LayerDataSource`**

## Table of contents

### Constructors

- [constructor](neuroglancer_layer_data_source.LayerDataSource.md#constructor)

### Properties

- [changed](neuroglancer_layer_data_source.LayerDataSource.md#changed)
- [disposedStacks](neuroglancer_layer_data_source.LayerDataSource.md#disposedstacks)
- [layer](neuroglancer_layer_data_source.LayerDataSource.md#layer)
- [loadState\_](neuroglancer_layer_data_source.LayerDataSource.md#loadstate_)
- [messages](neuroglancer_layer_data_source.LayerDataSource.md#messages)
- [refCount](neuroglancer_layer_data_source.LayerDataSource.md#refcount)
- [refCounted\_](neuroglancer_layer_data_source.LayerDataSource.md#refcounted_)
- [specGeneration](neuroglancer_layer_data_source.LayerDataSource.md#specgeneration)
- [spec\_](neuroglancer_layer_data_source.LayerDataSource.md#spec_)
- [wasDisposed](neuroglancer_layer_data_source.LayerDataSource.md#wasdisposed)

### Accessors

- [loadState](neuroglancer_layer_data_source.LayerDataSource.md#loadstate)
- [spec](neuroglancer_layer_data_source.LayerDataSource.md#spec)

### Methods

- [addRef](neuroglancer_layer_data_source.LayerDataSource.md#addref)
- [dispose](neuroglancer_layer_data_source.LayerDataSource.md#dispose)
- [disposed](neuroglancer_layer_data_source.LayerDataSource.md#disposed)
- [refCountReachedZero](neuroglancer_layer_data_source.LayerDataSource.md#refcountreachedzero)
- [registerCancellable](neuroglancer_layer_data_source.LayerDataSource.md#registercancellable)
- [registerDisposer](neuroglancer_layer_data_source.LayerDataSource.md#registerdisposer)
- [registerEventListener](neuroglancer_layer_data_source.LayerDataSource.md#registereventlistener)
- [toJSON](neuroglancer_layer_data_source.LayerDataSource.md#tojson)
- [unregisterDisposer](neuroglancer_layer_data_source.LayerDataSource.md#unregisterdisposer)

## Constructors

### constructor

• **new LayerDataSource**(`layer`, `spec?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `layer` | [`UserLayer`](neuroglancer_layer.UserLayer.md) | `undefined` |
| `spec` | `undefined` \| [`DataSourceSpecification`](../interfaces/neuroglancer_datasource.DataSourceSpecification.md) | `undefined` |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/layer_data_source.ts:223](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_data_source.ts#L223)

## Properties

### changed

• **changed**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/layer_data_source.ts:216](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_data_source.ts#L216)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### layer

• **layer**: [`UserLayer`](neuroglancer_layer.UserLayer.md)

#### Defined in

[src/neuroglancer/layer_data_source.ts:224](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_data_source.ts#L224)

___

### loadState\_

• `Private` **loadState\_**: [`LayerDataSourceLoadState`](../modules/neuroglancer_layer_data_source.md#layerdatasourceloadstate) = `undefined`

#### Defined in

[src/neuroglancer/layer_data_source.ts:218](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_data_source.ts#L218)

___

### messages

• **messages**: [`MessageList`](neuroglancer_util_message_list.MessageList.md)

#### Defined in

[src/neuroglancer/layer_data_source.ts:217](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_data_source.ts#L217)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### refCounted\_

• `Private` **refCounted\_**: `undefined` \| [`RefCounted`](neuroglancer_util_disposable.RefCounted.md) = `undefined`

#### Defined in

[src/neuroglancer/layer_data_source.ts:221](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_data_source.ts#L221)

___

### specGeneration

• `Private` **specGeneration**: `number` = `-1`

#### Defined in

[src/neuroglancer/layer_data_source.ts:220](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_data_source.ts#L220)

___

### spec\_

• `Private` **spec\_**: [`DataSourceSpecification`](../interfaces/neuroglancer_datasource.DataSourceSpecification.md)

#### Defined in

[src/neuroglancer/layer_data_source.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_data_source.ts#L219)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### loadState

• `get` **loadState**(): [`LayerDataSourceLoadState`](../modules/neuroglancer_layer_data_source.md#layerdatasourceloadstate)

#### Returns

[`LayerDataSourceLoadState`](../modules/neuroglancer_layer_data_source.md#layerdatasourceloadstate)

#### Defined in

[src/neuroglancer/layer_data_source.ts:263](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_data_source.ts#L263)

___

### spec

• `get` **spec**(): [`DataSourceSpecification`](../interfaces/neuroglancer_datasource.DataSourceSpecification.md)

#### Returns

[`DataSourceSpecification`](../interfaces/neuroglancer_datasource.DataSourceSpecification.md)

#### Defined in

[src/neuroglancer/layer_data_source.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_data_source.ts#L234)

• `set` **spec**(`spec`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `spec` | [`DataSourceSpecification`](../interfaces/neuroglancer_datasource.DataSourceSpecification.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer_data_source.ts:267](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_data_source.ts#L267)

## Methods

### addRef

▸ **addRef**(): [`LayerDataSource`](neuroglancer_layer_data_source.LayerDataSource.md)

#### Returns

[`LayerDataSource`](neuroglancer_layer_data_source.LayerDataSource.md)

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

[src/neuroglancer/layer_data_source.ts:333](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_data_source.ts#L333)

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

### toJSON

▸ **toJSON**(): `string` \| { `enableDefaultSubsources`: `undefined` \| `boolean` ; `subsources`: `any` ; `transform`: `undefined` \| { `inputDimensions`: `any` ; `matrix`: `undefined` \| `number`[][] = m; `outputDimensions`: `any` ; `sourceRank`: `undefined` \| `number`  } ; `url`: `string` = spec.url }

#### Returns

`string` \| { `enableDefaultSubsources`: `undefined` \| `boolean` ; `subsources`: `any` ; `transform`: `undefined` \| { `inputDimensions`: `any` ; `matrix`: `undefined` \| `number`[][] = m; `outputDimensions`: `any` ; `sourceRank`: `undefined` \| `number`  } ; `url`: `string` = spec.url }

#### Defined in

[src/neuroglancer/layer_data_source.ts:340](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_data_source.ts#L340)

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
