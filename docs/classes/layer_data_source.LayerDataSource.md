[neuroglancer](../README.md) / [Modules](../modules.md) / [layer\_data\_source](../modules/layer_data_source.md) / LayerDataSource

# Class: LayerDataSource

[layer_data_source](../modules/layer_data_source.md).LayerDataSource

## Hierarchy

- `RefCounted`

  ↳ **`LayerDataSource`**

## Table of contents

### Constructors

- [constructor](layer_data_source.LayerDataSource.md#constructor)

### Properties

- [changed](layer_data_source.LayerDataSource.md#changed)
- [disposedStacks](layer_data_source.LayerDataSource.md#disposedstacks)
- [layer](layer_data_source.LayerDataSource.md#layer)
- [loadState\_](layer_data_source.LayerDataSource.md#loadstate_)
- [messages](layer_data_source.LayerDataSource.md#messages)
- [refCount](layer_data_source.LayerDataSource.md#refcount)
- [refCounted\_](layer_data_source.LayerDataSource.md#refcounted_)
- [specGeneration](layer_data_source.LayerDataSource.md#specgeneration)
- [spec\_](layer_data_source.LayerDataSource.md#spec_)
- [wasDisposed](layer_data_source.LayerDataSource.md#wasdisposed)

### Accessors

- [loadState](layer_data_source.LayerDataSource.md#loadstate)
- [spec](layer_data_source.LayerDataSource.md#spec)

### Methods

- [addRef](layer_data_source.LayerDataSource.md#addref)
- [dispose](layer_data_source.LayerDataSource.md#dispose)
- [disposed](layer_data_source.LayerDataSource.md#disposed)
- [refCountReachedZero](layer_data_source.LayerDataSource.md#refcountreachedzero)
- [registerCancellable](layer_data_source.LayerDataSource.md#registercancellable)
- [registerDisposer](layer_data_source.LayerDataSource.md#registerdisposer)
- [registerEventListener](layer_data_source.LayerDataSource.md#registereventlistener)
- [toJSON](layer_data_source.LayerDataSource.md#tojson)
- [unregisterDisposer](layer_data_source.LayerDataSource.md#unregisterdisposer)

## Constructors

### constructor

• **new LayerDataSource**(`layer`, `spec?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `layer` | [`UserLayer`](layer.UserLayer.md) | `undefined` |
| `spec` | `undefined` \| `DataSourceSpecification` | `undefined` |

#### Overrides

RefCounted.constructor

#### Defined in

[src/neuroglancer/layer_data_source.ts:223](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer_data_source.ts#L223)

## Properties

### changed

• **changed**: `NullarySignal`

#### Defined in

[src/neuroglancer/layer_data_source.ts:216](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer_data_source.ts#L216)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

RefCounted.disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L52)

___

### layer

• **layer**: [`UserLayer`](layer.UserLayer.md)

___

### loadState\_

• `Private` **loadState\_**: [`LayerDataSourceLoadState`](../modules/layer_data_source.md#layerdatasourceloadstate) = `undefined`

#### Defined in

[src/neuroglancer/layer_data_source.ts:218](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer_data_source.ts#L218)

___

### messages

• **messages**: `MessageList`

#### Defined in

[src/neuroglancer/layer_data_source.ts:217](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer_data_source.ts#L217)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

RefCounted.refCount

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L45)

___

### refCounted\_

• `Private` **refCounted\_**: `undefined` \| `RefCounted` = `undefined`

#### Defined in

[src/neuroglancer/layer_data_source.ts:221](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer_data_source.ts#L221)

___

### specGeneration

• `Private` **specGeneration**: `number` = `-1`

#### Defined in

[src/neuroglancer/layer_data_source.ts:220](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer_data_source.ts#L220)

___

### spec\_

• `Private` **spec\_**: `DataSourceSpecification`

#### Defined in

[src/neuroglancer/layer_data_source.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer_data_source.ts#L219)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

RefCounted.wasDisposed

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### loadState

• `get` **loadState**(): [`LayerDataSourceLoadState`](../modules/layer_data_source.md#layerdatasourceloadstate)

#### Returns

[`LayerDataSourceLoadState`](../modules/layer_data_source.md#layerdatasourceloadstate)

#### Defined in

[src/neuroglancer/layer_data_source.ts:263](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer_data_source.ts#L263)

___

### spec

• `get` **spec**(): `DataSourceSpecification`

#### Returns

`DataSourceSpecification`

#### Defined in

[src/neuroglancer/layer_data_source.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer_data_source.ts#L234)

• `set` **spec**(`spec`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `spec` | `DataSourceSpecification` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer_data_source.ts:267](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer_data_source.ts#L267)

## Methods

### addRef

▸ **addRef**(): [`LayerDataSource`](layer_data_source.LayerDataSource.md)

#### Returns

[`LayerDataSource`](layer_data_source.LayerDataSource.md)

#### Inherited from

RefCounted.addRef

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

RefCounted.dispose

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

RefCounted.disposed

#### Defined in

[src/neuroglancer/layer_data_source.ts:333](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer_data_source.ts#L333)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

RefCounted.refCountReachedZero

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L66)

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

RefCounted.registerCancellable

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L100)

___

### registerDisposer

▸ **registerDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Disposer` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

RefCounted.registerDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L76)

___

### registerEventListener

▸ **registerEventListener**(`target`, `type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `EventTarget` |
| `type` | `string` |
| `listener` | `EventListenerOrEventListenerObject` |
| `options?` | `boolean` \| `AddEventListenerOptions` |

#### Returns

`void`

#### Inherited from

RefCounted.registerEventListener

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L95)

___

### toJSON

▸ **toJSON**(): `string` \| { `enableDefaultSubsources`: `undefined` \| `boolean` ; `subsources`: `any` ; `transform`: `undefined` \| { `inputDimensions`: `any` ; `matrix`: `undefined` \| `number`[][] = m; `outputDimensions`: `any` ; `sourceRank`: `undefined` \| `number`  } ; `url`: `string` = spec.url }

#### Returns

`string` \| { `enableDefaultSubsources`: `undefined` \| `boolean` ; `subsources`: `any` ; `transform`: `undefined` \| { `inputDimensions`: `any` ; `matrix`: `undefined` \| `number`[][] = m; `outputDimensions`: `any` ; `sourceRank`: `undefined` \| `number`  } ; `url`: `string` = spec.url }

#### Defined in

[src/neuroglancer/layer_data_source.ts:340](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer_data_source.ts#L340)

___

### unregisterDisposer

▸ **unregisterDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Disposer` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

RefCounted.unregisterDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L85)
