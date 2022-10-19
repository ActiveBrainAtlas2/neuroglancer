[neuroglancer](../README.md) / [Modules](../modules.md) / [datasource](../modules/datasource.md) / DataSourceProviderRegistry

# Class: DataSourceProviderRegistry

[datasource](../modules/datasource.md).DataSourceProviderRegistry

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`DataSourceProviderRegistry`**

## Table of contents

### Constructors

- [constructor](datasource.DataSourceProviderRegistry.md#constructor)

### Properties

- [credentialsManager](datasource.DataSourceProviderRegistry.md#credentialsmanager)
- [dataSources](datasource.DataSourceProviderRegistry.md#datasources)
- [disposedStacks](datasource.DataSourceProviderRegistry.md#disposedstacks)
- [refCount](datasource.DataSourceProviderRegistry.md#refcount)
- [wasDisposed](datasource.DataSourceProviderRegistry.md#wasdisposed)

### Methods

- [addRef](datasource.DataSourceProviderRegistry.md#addref)
- [completeUrl](datasource.DataSourceProviderRegistry.md#completeurl)
- [convertLegacyUrl](datasource.DataSourceProviderRegistry.md#convertlegacyurl)
- [dispose](datasource.DataSourceProviderRegistry.md#dispose)
- [disposed](datasource.DataSourceProviderRegistry.md#disposed)
- [findSourceGroup](datasource.DataSourceProviderRegistry.md#findsourcegroup)
- [get](datasource.DataSourceProviderRegistry.md#get)
- [getProvider](datasource.DataSourceProviderRegistry.md#getprovider)
- [normalizeUrl](datasource.DataSourceProviderRegistry.md#normalizeurl)
- [refCountReachedZero](datasource.DataSourceProviderRegistry.md#refcountreachedzero)
- [register](datasource.DataSourceProviderRegistry.md#register)
- [registerCancellable](datasource.DataSourceProviderRegistry.md#registercancellable)
- [registerDisposer](datasource.DataSourceProviderRegistry.md#registerdisposer)
- [registerEventListener](datasource.DataSourceProviderRegistry.md#registereventlistener)
- [suggestLayerName](datasource.DataSourceProviderRegistry.md#suggestlayername)
- [unregisterDisposer](datasource.DataSourceProviderRegistry.md#unregisterdisposer)

## Constructors

### constructor

• **new DataSourceProviderRegistry**(`credentialsManager`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `credentialsManager` | [`CredentialsManager`](../interfaces/credentials_provider.CredentialsManager.md) |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/datasource/index.ts:313](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/datasource/index.ts#L313)

## Properties

### credentialsManager

• **credentialsManager**: [`CredentialsManager`](../interfaces/credentials_provider.CredentialsManager.md)

___

### dataSources

• **dataSources**: `Map`<`string`, [`DataSourceProvider`](datasource.DataSourceProvider.md)\>

#### Defined in

[src/neuroglancer/datasource/index.ts:316](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/datasource/index.ts#L316)

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

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`DataSourceProviderRegistry`](datasource.DataSourceProviderRegistry.md)

#### Returns

[`DataSourceProviderRegistry`](datasource.DataSourceProviderRegistry.md)

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[addRef](util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### completeUrl

▸ **completeUrl**(`options`): `Promise`<[`CompletionResult`](../modules/datasource.md#completionresult)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`CompleteUrlOptionsBase`](../interfaces/datasource.CompleteUrlOptionsBase.md) |

#### Returns

`Promise`<[`CompletionResult`](../modules/datasource.md#completionresult)\>

#### Defined in

[src/neuroglancer/datasource/index.ts:390](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/datasource/index.ts#L390)

___

### convertLegacyUrl

▸ **convertLegacyUrl**(`options`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ConvertLegacyUrlOptionsBase`](../interfaces/datasource.ConvertLegacyUrlOptionsBase.md) |

#### Returns

`string`

#### Defined in

[src/neuroglancer/datasource/index.ts:372](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/datasource/index.ts#L372)

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

### findSourceGroup

▸ **findSourceGroup**(`url`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`number`

#### Defined in

[src/neuroglancer/datasource/index.ts:430](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/datasource/index.ts#L430)

___

### get

▸ **get**(`options`): `Promise`<[`DataSource`](../interfaces/datasource.DataSource.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`GetDataSourceOptionsBase`](../interfaces/datasource.GetDataSourceOptionsBase.md) |

#### Returns

`Promise`<[`DataSource`](../interfaces/datasource.DataSource.md)\>

#### Defined in

[src/neuroglancer/datasource/index.ts:336](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/datasource/index.ts#L336)

___

### getProvider

▸ **getProvider**(`url`): [[`DataSourceProvider`](datasource.DataSourceProvider.md), `string`, `string`]

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

[[`DataSourceProvider`](datasource.DataSourceProvider.md), `string`, `string`]

#### Defined in

[src/neuroglancer/datasource/index.ts:323](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/datasource/index.ts#L323)

___

### normalizeUrl

▸ **normalizeUrl**(`options`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`NormalizeUrlOptionsBase`](../interfaces/datasource.NormalizeUrlOptionsBase.md) |

#### Returns

`string`

#### Defined in

[src/neuroglancer/datasource/index.ts:381](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/datasource/index.ts#L381)

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

### register

▸ **register**(`name`, `dataSource`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `dataSource` | [`DataSourceProvider`](datasource.DataSourceProvider.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/datasource/index.ts:319](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/datasource/index.ts#L319)

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

### suggestLayerName

▸ **suggestLayerName**(`url`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`string`

#### Defined in

[src/neuroglancer/datasource/index.ts:418](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/datasource/index.ts#L418)

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
