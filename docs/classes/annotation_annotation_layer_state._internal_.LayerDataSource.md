[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / LayerDataSource

# Class: LayerDataSource

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).LayerDataSource

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`LayerDataSource`**

## Table of contents

### Constructors

- [constructor](annotation_annotation_layer_state._internal_.LayerDataSource.md#constructor)

### Properties

- [changed](annotation_annotation_layer_state._internal_.LayerDataSource.md#changed)
- [disposedStacks](annotation_annotation_layer_state._internal_.LayerDataSource.md#disposedstacks)
- [layer](annotation_annotation_layer_state._internal_.LayerDataSource.md#layer)
- [loadState\_](annotation_annotation_layer_state._internal_.LayerDataSource.md#loadstate_)
- [messages](annotation_annotation_layer_state._internal_.LayerDataSource.md#messages)
- [refCount](annotation_annotation_layer_state._internal_.LayerDataSource.md#refcount)
- [refCounted\_](annotation_annotation_layer_state._internal_.LayerDataSource.md#refcounted_)
- [specGeneration](annotation_annotation_layer_state._internal_.LayerDataSource.md#specgeneration)
- [spec\_](annotation_annotation_layer_state._internal_.LayerDataSource.md#spec_)
- [wasDisposed](annotation_annotation_layer_state._internal_.LayerDataSource.md#wasdisposed)

### Accessors

- [loadState](annotation_annotation_layer_state._internal_.LayerDataSource.md#loadstate)
- [spec](annotation_annotation_layer_state._internal_.LayerDataSource.md#spec)

### Methods

- [addRef](annotation_annotation_layer_state._internal_.LayerDataSource.md#addref)
- [dispose](annotation_annotation_layer_state._internal_.LayerDataSource.md#dispose)
- [disposed](annotation_annotation_layer_state._internal_.LayerDataSource.md#disposed)
- [refCountReachedZero](annotation_annotation_layer_state._internal_.LayerDataSource.md#refcountreachedzero)
- [registerCancellable](annotation_annotation_layer_state._internal_.LayerDataSource.md#registercancellable)
- [registerDisposer](annotation_annotation_layer_state._internal_.LayerDataSource.md#registerdisposer)
- [registerEventListener](annotation_annotation_layer_state._internal_.LayerDataSource.md#registereventlistener)
- [toJSON](annotation_annotation_layer_state._internal_.LayerDataSource.md#tojson)
- [unregisterDisposer](annotation_annotation_layer_state._internal_.LayerDataSource.md#unregisterdisposer)

## Constructors

### constructor

• **new LayerDataSource**(`layer`, `spec?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `layer` | [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md) | `undefined` |
| `spec` | `undefined` \| [`DataSourceSpecification`](../interfaces/datasource.DataSourceSpecification.md) | `undefined` |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/layer_data_source.ts:223](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_data_source.ts#L223)

## Properties

### changed

• **changed**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/layer_data_source.ts:216](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_data_source.ts#L216)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### layer

• **layer**: [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)

___

### loadState\_

• `Private` **loadState\_**: [`LayerDataSourceLoadState`](../modules/annotation_annotation_layer_state._internal_.md#layerdatasourceloadstate) = `undefined`

#### Defined in

[src/neuroglancer/layer_data_source.ts:218](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_data_source.ts#L218)

___

### messages

• **messages**: [`MessageList`](util_message_list.MessageList.md)

#### Defined in

[src/neuroglancer/layer_data_source.ts:217](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_data_source.ts#L217)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### refCounted\_

• `Private` **refCounted\_**: `undefined` \| [`RefCounted`](util_disposable.RefCounted.md) = `undefined`

#### Defined in

[src/neuroglancer/layer_data_source.ts:221](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_data_source.ts#L221)

___

### specGeneration

• `Private` **specGeneration**: `number` = `-1`

#### Defined in

[src/neuroglancer/layer_data_source.ts:220](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_data_source.ts#L220)

___

### spec\_

• `Private` **spec\_**: [`DataSourceSpecification`](../interfaces/datasource.DataSourceSpecification.md)

#### Defined in

[src/neuroglancer/layer_data_source.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_data_source.ts#L219)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### loadState

• `get` **loadState**(): [`LayerDataSourceLoadState`](../modules/annotation_annotation_layer_state._internal_.md#layerdatasourceloadstate)

#### Returns

[`LayerDataSourceLoadState`](../modules/annotation_annotation_layer_state._internal_.md#layerdatasourceloadstate)

#### Defined in

[src/neuroglancer/layer_data_source.ts:263](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_data_source.ts#L263)

___

### spec

• `get` **spec**(): [`DataSourceSpecification`](../interfaces/datasource.DataSourceSpecification.md)

#### Returns

[`DataSourceSpecification`](../interfaces/datasource.DataSourceSpecification.md)

#### Defined in

[src/neuroglancer/layer_data_source.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_data_source.ts#L234)

• `set` **spec**(`spec`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `spec` | [`DataSourceSpecification`](../interfaces/datasource.DataSourceSpecification.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer_data_source.ts:267](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_data_source.ts#L267)

## Methods

### addRef

▸ **addRef**(): [`LayerDataSource`](annotation_annotation_layer_state._internal_.LayerDataSource.md)

#### Returns

[`LayerDataSource`](annotation_annotation_layer_state._internal_.LayerDataSource.md)

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

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[disposed](util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/layer_data_source.ts:333](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_data_source.ts#L333)

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

### toJSON

▸ **toJSON**(): `string` \| { `enableDefaultSubsources`: `undefined` \| `boolean` ; `subsources`: `any` ; `transform`: `undefined` \| { `inputDimensions`: `any` ; `matrix`: `undefined` \| `number`[][] = m; `outputDimensions`: `any` ; `sourceRank`: `undefined` \| `number`  } ; `url`: `string` = spec.url }

#### Returns

`string` \| { `enableDefaultSubsources`: `undefined` \| `boolean` ; `subsources`: `any` ; `transform`: `undefined` \| { `inputDimensions`: `any` ; `matrix`: `undefined` \| `number`[][] = m; `outputDimensions`: `any` ; `sourceRank`: `undefined` \| `number`  } ; `url`: `string` = spec.url }

#### Defined in

[src/neuroglancer/layer_data_source.ts:340](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_data_source.ts#L340)

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
