[neuroglancer](../README.md) / [Modules](../modules.md) / [layer](../modules/layer.md) / [<internal\>](../modules/layer._internal_.md) / DataSourceProviderRegistry

# Class: DataSourceProviderRegistry

[layer](../modules/layer.md).[<internal>](../modules/layer._internal_.md).DataSourceProviderRegistry

## Hierarchy

- [`RefCounted`](axes_lines._internal_.RefCounted.md)

  ↳ **`DataSourceProviderRegistry`**

## Table of contents

### Constructors

- [constructor](layer._internal_.DataSourceProviderRegistry.md#constructor)

### Properties

- [credentialsManager](layer._internal_.DataSourceProviderRegistry.md#credentialsmanager)
- [dataSources](layer._internal_.DataSourceProviderRegistry.md#datasources)
- [disposedStacks](layer._internal_.DataSourceProviderRegistry.md#disposedstacks)
- [refCount](layer._internal_.DataSourceProviderRegistry.md#refcount)
- [wasDisposed](layer._internal_.DataSourceProviderRegistry.md#wasdisposed)

### Methods

- [addRef](layer._internal_.DataSourceProviderRegistry.md#addref)
- [completeUrl](layer._internal_.DataSourceProviderRegistry.md#completeurl)
- [convertLegacyUrl](layer._internal_.DataSourceProviderRegistry.md#convertlegacyurl)
- [dispose](layer._internal_.DataSourceProviderRegistry.md#dispose)
- [disposed](layer._internal_.DataSourceProviderRegistry.md#disposed)
- [findSourceGroup](layer._internal_.DataSourceProviderRegistry.md#findsourcegroup)
- [get](layer._internal_.DataSourceProviderRegistry.md#get)
- [getProvider](layer._internal_.DataSourceProviderRegistry.md#getprovider)
- [normalizeUrl](layer._internal_.DataSourceProviderRegistry.md#normalizeurl)
- [refCountReachedZero](layer._internal_.DataSourceProviderRegistry.md#refcountreachedzero)
- [register](layer._internal_.DataSourceProviderRegistry.md#register)
- [registerCancellable](layer._internal_.DataSourceProviderRegistry.md#registercancellable)
- [registerDisposer](layer._internal_.DataSourceProviderRegistry.md#registerdisposer)
- [registerEventListener](layer._internal_.DataSourceProviderRegistry.md#registereventlistener)
- [suggestLayerName](layer._internal_.DataSourceProviderRegistry.md#suggestlayername)
- [unregisterDisposer](layer._internal_.DataSourceProviderRegistry.md#unregisterdisposer)

## Constructors

### constructor

• **new DataSourceProviderRegistry**(`credentialsManager`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `credentialsManager` | [`CredentialsManager`](../interfaces/layer._internal_.CredentialsManager.md) |

#### Overrides

[RefCounted](axes_lines._internal_.RefCounted.md).[constructor](axes_lines._internal_.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/datasource/index.ts:313](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/datasource/index.ts#L313)

## Properties

### credentialsManager

• **credentialsManager**: [`CredentialsManager`](../interfaces/layer._internal_.CredentialsManager.md)

___

### dataSources

• **dataSources**: `Map`<`string`, [`DataSourceProvider`](layer._internal_.DataSourceProvider.md)\>

#### Defined in

[src/neuroglancer/datasource/index.ts:316](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/datasource/index.ts#L316)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[disposedStacks](axes_lines._internal_.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L52)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[refCount](axes_lines._internal_.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[wasDisposed](axes_lines._internal_.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`DataSourceProviderRegistry`](layer._internal_.DataSourceProviderRegistry.md)

#### Returns

[`DataSourceProviderRegistry`](layer._internal_.DataSourceProviderRegistry.md)

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[addRef](axes_lines._internal_.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L48)

___

### completeUrl

▸ **completeUrl**(`options`): `Promise`<[`CompletionResult`](../modules/layer._internal_.md#completionresult)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`CompleteUrlOptionsBase`](../interfaces/layer._internal_.CompleteUrlOptionsBase.md) |

#### Returns

`Promise`<[`CompletionResult`](../modules/layer._internal_.md#completionresult)\>

#### Defined in

[src/neuroglancer/datasource/index.ts:390](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/datasource/index.ts#L390)

___

### convertLegacyUrl

▸ **convertLegacyUrl**(`options`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ConvertLegacyUrlOptionsBase`](../interfaces/layer._internal_.ConvertLegacyUrlOptionsBase.md) |

#### Returns

`string`

#### Defined in

[src/neuroglancer/datasource/index.ts:372](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/datasource/index.ts#L372)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[dispose](axes_lines._internal_.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[disposed](axes_lines._internal_.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L75)

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

[src/neuroglancer/datasource/index.ts:430](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/datasource/index.ts#L430)

___

### get

▸ **get**(`options`): `Promise`<[`DataSource`](../interfaces/layer._internal_.DataSource.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`GetDataSourceOptionsBase`](../interfaces/layer._internal_.GetDataSourceOptionsBase.md) |

#### Returns

`Promise`<[`DataSource`](../interfaces/layer._internal_.DataSource.md)\>

#### Defined in

[src/neuroglancer/datasource/index.ts:336](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/datasource/index.ts#L336)

___

### getProvider

▸ **getProvider**(`url`): [[`DataSourceProvider`](layer._internal_.DataSourceProvider.md), `string`, `string`]

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

[[`DataSourceProvider`](layer._internal_.DataSourceProvider.md), `string`, `string`]

#### Defined in

[src/neuroglancer/datasource/index.ts:323](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/datasource/index.ts#L323)

___

### normalizeUrl

▸ **normalizeUrl**(`options`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`NormalizeUrlOptionsBase`](../interfaces/layer._internal_.NormalizeUrlOptionsBase.md) |

#### Returns

`string`

#### Defined in

[src/neuroglancer/datasource/index.ts:381](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/datasource/index.ts#L381)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[refCountReachedZero](axes_lines._internal_.RefCounted.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L66)

___

### register

▸ **register**(`name`, `dataSource`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `dataSource` | [`DataSourceProvider`](layer._internal_.DataSourceProvider.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/datasource/index.ts:319](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/datasource/index.ts#L319)

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

[RefCounted](axes_lines._internal_.RefCounted.md).[registerCancellable](axes_lines._internal_.RefCounted.md#registercancellable)

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L100)

___

### registerDisposer

▸ **registerDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/axes_lines._internal_.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[registerDisposer](axes_lines._internal_.RefCounted.md#registerdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L76)

___

### registerEventListener

▸ **registerEventListener**(`target`, `type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EventTarget`](../modules/axes_lines._internal_.md#eventtarget) |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/axes_lines._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](../interfaces/axes_lines._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[registerEventListener](axes_lines._internal_.RefCounted.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L95)

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

[src/neuroglancer/datasource/index.ts:418](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/datasource/index.ts#L418)

___

### unregisterDisposer

▸ **unregisterDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/axes_lines._internal_.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[unregisterDisposer](axes_lines._internal_.RefCounted.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L85)
