[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/datasource](../modules/neuroglancer_datasource.md) / DataSourceProviderRegistry

# Class: DataSourceProviderRegistry

[neuroglancer/datasource](../modules/neuroglancer_datasource.md).DataSourceProviderRegistry

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`DataSourceProviderRegistry`**

## Table of contents

### Constructors

- [constructor](neuroglancer_datasource.DataSourceProviderRegistry.md#constructor)

### Properties

- [credentialsManager](neuroglancer_datasource.DataSourceProviderRegistry.md#credentialsmanager)
- [dataSources](neuroglancer_datasource.DataSourceProviderRegistry.md#datasources)
- [disposedStacks](neuroglancer_datasource.DataSourceProviderRegistry.md#disposedstacks)
- [refCount](neuroglancer_datasource.DataSourceProviderRegistry.md#refcount)
- [wasDisposed](neuroglancer_datasource.DataSourceProviderRegistry.md#wasdisposed)

### Methods

- [addRef](neuroglancer_datasource.DataSourceProviderRegistry.md#addref)
- [completeUrl](neuroglancer_datasource.DataSourceProviderRegistry.md#completeurl)
- [convertLegacyUrl](neuroglancer_datasource.DataSourceProviderRegistry.md#convertlegacyurl)
- [dispose](neuroglancer_datasource.DataSourceProviderRegistry.md#dispose)
- [disposed](neuroglancer_datasource.DataSourceProviderRegistry.md#disposed)
- [findSourceGroup](neuroglancer_datasource.DataSourceProviderRegistry.md#findsourcegroup)
- [get](neuroglancer_datasource.DataSourceProviderRegistry.md#get)
- [getProvider](neuroglancer_datasource.DataSourceProviderRegistry.md#getprovider)
- [normalizeUrl](neuroglancer_datasource.DataSourceProviderRegistry.md#normalizeurl)
- [refCountReachedZero](neuroglancer_datasource.DataSourceProviderRegistry.md#refcountreachedzero)
- [register](neuroglancer_datasource.DataSourceProviderRegistry.md#register)
- [registerCancellable](neuroglancer_datasource.DataSourceProviderRegistry.md#registercancellable)
- [registerDisposer](neuroglancer_datasource.DataSourceProviderRegistry.md#registerdisposer)
- [registerEventListener](neuroglancer_datasource.DataSourceProviderRegistry.md#registereventlistener)
- [suggestLayerName](neuroglancer_datasource.DataSourceProviderRegistry.md#suggestlayername)
- [unregisterDisposer](neuroglancer_datasource.DataSourceProviderRegistry.md#unregisterdisposer)

## Constructors

### constructor

• **new DataSourceProviderRegistry**(`credentialsManager`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `credentialsManager` | [`CredentialsManager`](../interfaces/neuroglancer_credentials_provider.CredentialsManager.md) |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/datasource/index.ts:313](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/index.ts#L313)

## Properties

### credentialsManager

• **credentialsManager**: [`CredentialsManager`](../interfaces/neuroglancer_credentials_provider.CredentialsManager.md)

___

### dataSources

• **dataSources**: `Map`<`string`, [`DataSourceProvider`](neuroglancer_datasource.DataSourceProvider.md)\>

#### Defined in

[src/neuroglancer/datasource/index.ts:316](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/index.ts#L316)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

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

## Methods

### addRef

▸ **addRef**(): [`DataSourceProviderRegistry`](neuroglancer_datasource.DataSourceProviderRegistry.md)

#### Returns

[`DataSourceProviderRegistry`](neuroglancer_datasource.DataSourceProviderRegistry.md)

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[addRef](neuroglancer_util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L48)

___

### completeUrl

▸ **completeUrl**(`options`): `Promise`<[`CompletionResult`](../modules/neuroglancer_datasource.md#completionresult)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`CompleteUrlOptionsBase`](../interfaces/neuroglancer_datasource.CompleteUrlOptionsBase.md) |

#### Returns

`Promise`<[`CompletionResult`](../modules/neuroglancer_datasource.md#completionresult)\>

#### Defined in

[src/neuroglancer/datasource/index.ts:390](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/index.ts#L390)

___

### convertLegacyUrl

▸ **convertLegacyUrl**(`options`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ConvertLegacyUrlOptionsBase`](../interfaces/neuroglancer_datasource.ConvertLegacyUrlOptionsBase.md) |

#### Returns

`string`

#### Defined in

[src/neuroglancer/datasource/index.ts:372](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/index.ts#L372)

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

### findSourceGroup

▸ **findSourceGroup**(`url`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`number`

#### Defined in

[src/neuroglancer/datasource/index.ts:430](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/index.ts#L430)

___

### get

▸ **get**(`options`): `Promise`<[`DataSource`](../interfaces/neuroglancer_datasource.DataSource.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`GetDataSourceOptionsBase`](../interfaces/neuroglancer_datasource.GetDataSourceOptionsBase.md) |

#### Returns

`Promise`<[`DataSource`](../interfaces/neuroglancer_datasource.DataSource.md)\>

#### Defined in

[src/neuroglancer/datasource/index.ts:336](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/index.ts#L336)

___

### getProvider

▸ **getProvider**(`url`): [[`DataSourceProvider`](neuroglancer_datasource.DataSourceProvider.md), `string`, `string`]

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

[[`DataSourceProvider`](neuroglancer_datasource.DataSourceProvider.md), `string`, `string`]

#### Defined in

[src/neuroglancer/datasource/index.ts:323](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/index.ts#L323)

___

### normalizeUrl

▸ **normalizeUrl**(`options`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`NormalizeUrlOptionsBase`](../interfaces/neuroglancer_datasource.NormalizeUrlOptionsBase.md) |

#### Returns

`string`

#### Defined in

[src/neuroglancer/datasource/index.ts:381](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/index.ts#L381)

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

### register

▸ **register**(`name`, `dataSource`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `dataSource` | [`DataSourceProvider`](neuroglancer_datasource.DataSourceProvider.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/datasource/index.ts:319](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/index.ts#L319)

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

### suggestLayerName

▸ **suggestLayerName**(`url`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`string`

#### Defined in

[src/neuroglancer/datasource/index.ts:418](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/index.ts#L418)

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
