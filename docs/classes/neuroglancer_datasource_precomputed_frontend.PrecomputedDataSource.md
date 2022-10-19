[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/datasource/precomputed/frontend](../modules/neuroglancer_datasource_precomputed_frontend.md) / PrecomputedDataSource

# Class: PrecomputedDataSource

[neuroglancer/datasource/precomputed/frontend](../modules/neuroglancer_datasource_precomputed_frontend.md).PrecomputedDataSource

## Hierarchy

- [`DataSourceProvider`](neuroglancer_datasource.DataSourceProvider.md)

  ↳ **`PrecomputedDataSource`**

## Table of contents

### Constructors

- [constructor](neuroglancer_datasource_precomputed_frontend.PrecomputedDataSource.md#constructor)

### Properties

- [disposedStacks](neuroglancer_datasource_precomputed_frontend.PrecomputedDataSource.md#disposedstacks)
- [refCount](neuroglancer_datasource_precomputed_frontend.PrecomputedDataSource.md#refcount)
- [wasDisposed](neuroglancer_datasource_precomputed_frontend.PrecomputedDataSource.md#wasdisposed)

### Accessors

- [description](neuroglancer_datasource_precomputed_frontend.PrecomputedDataSource.md#description)

### Methods

- [addRef](neuroglancer_datasource_precomputed_frontend.PrecomputedDataSource.md#addref)
- [completeUrl](neuroglancer_datasource_precomputed_frontend.PrecomputedDataSource.md#completeurl)
- [convertLegacyUrl](neuroglancer_datasource_precomputed_frontend.PrecomputedDataSource.md#convertlegacyurl)
- [dispose](neuroglancer_datasource_precomputed_frontend.PrecomputedDataSource.md#dispose)
- [disposed](neuroglancer_datasource_precomputed_frontend.PrecomputedDataSource.md#disposed)
- [findSourceGroup](neuroglancer_datasource_precomputed_frontend.PrecomputedDataSource.md#findsourcegroup)
- [get](neuroglancer_datasource_precomputed_frontend.PrecomputedDataSource.md#get)
- [normalizeUrl](neuroglancer_datasource_precomputed_frontend.PrecomputedDataSource.md#normalizeurl)
- [refCountReachedZero](neuroglancer_datasource_precomputed_frontend.PrecomputedDataSource.md#refcountreachedzero)
- [registerCancellable](neuroglancer_datasource_precomputed_frontend.PrecomputedDataSource.md#registercancellable)
- [registerDisposer](neuroglancer_datasource_precomputed_frontend.PrecomputedDataSource.md#registerdisposer)
- [registerEventListener](neuroglancer_datasource_precomputed_frontend.PrecomputedDataSource.md#registereventlistener)
- [suggestLayerName](neuroglancer_datasource_precomputed_frontend.PrecomputedDataSource.md#suggestlayername)
- [unregisterDisposer](neuroglancer_datasource_precomputed_frontend.PrecomputedDataSource.md#unregisterdisposer)

## Constructors

### constructor

• **new PrecomputedDataSource**()

#### Inherited from

[DataSourceProvider](neuroglancer_datasource.DataSourceProvider.md).[constructor](neuroglancer_datasource.DataSourceProvider.md#constructor)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[DataSourceProvider](neuroglancer_datasource.DataSourceProvider.md).[disposedStacks](neuroglancer_datasource.DataSourceProvider.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[DataSourceProvider](neuroglancer_datasource.DataSourceProvider.md).[refCount](neuroglancer_datasource.DataSourceProvider.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[DataSourceProvider](neuroglancer_datasource.DataSourceProvider.md).[wasDisposed](neuroglancer_datasource.DataSourceProvider.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### description

• `get` **description**(): `string`

#### Returns

`string`

#### Overrides

DataSourceProvider.description

#### Defined in

[src/neuroglancer/datasource/precomputed/frontend.ts:922](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/precomputed/frontend.ts#L922)

## Methods

### addRef

▸ **addRef**(): [`PrecomputedDataSource`](neuroglancer_datasource_precomputed_frontend.PrecomputedDataSource.md)

#### Returns

[`PrecomputedDataSource`](neuroglancer_datasource_precomputed_frontend.PrecomputedDataSource.md)

#### Inherited from

[DataSourceProvider](neuroglancer_datasource.DataSourceProvider.md).[addRef](neuroglancer_datasource.DataSourceProvider.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L48)

___

### completeUrl

▸ **completeUrl**(`options`): `Promise`<[`BasicCompletionResult`](../interfaces/neuroglancer_util_completion.BasicCompletionResult.md)<[`Completion`](../interfaces/neuroglancer_util_completion.Completion.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`CompleteUrlOptions`](../interfaces/neuroglancer_datasource.CompleteUrlOptions.md) |

#### Returns

`Promise`<[`BasicCompletionResult`](../interfaces/neuroglancer_util_completion.BasicCompletionResult.md)<[`Completion`](../interfaces/neuroglancer_util_completion.Completion.md)\>\>

#### Overrides

[DataSourceProvider](neuroglancer_datasource.DataSourceProvider.md).[completeUrl](neuroglancer_datasource.DataSourceProvider.md#completeurl)

#### Defined in

[src/neuroglancer/datasource/precomputed/frontend.ts:981](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/precomputed/frontend.ts#L981)

___

### convertLegacyUrl

▸ **convertLegacyUrl**(`options`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ConvertLegacyUrlOptions`](../interfaces/neuroglancer_datasource.ConvertLegacyUrlOptions.md) |

#### Returns

`string`

#### Overrides

[DataSourceProvider](neuroglancer_datasource.DataSourceProvider.md).[convertLegacyUrl](neuroglancer_datasource.DataSourceProvider.md#convertlegacyurl)

#### Defined in

[src/neuroglancer/datasource/precomputed/frontend.ts:931](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/precomputed/frontend.ts#L931)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[DataSourceProvider](neuroglancer_datasource.DataSourceProvider.md).[dispose](neuroglancer_datasource.DataSourceProvider.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[DataSourceProvider](neuroglancer_datasource.DataSourceProvider.md).[disposed](neuroglancer_datasource.DataSourceProvider.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L75)

___

### findSourceGroup

▸ `Optional` **findSourceGroup**(`path`): `number`

Returns the length of the prefix of path that is its 'group'.  This is used for suggesting a
default URL for adding a new layer.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`number`

#### Inherited from

[DataSourceProvider](neuroglancer_datasource.DataSourceProvider.md).[findSourceGroup](neuroglancer_datasource.DataSourceProvider.md#findsourcegroup)

#### Defined in

[src/neuroglancer/datasource/index.ts:187](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/index.ts#L187)

___

### get

▸ **get**(`options`): `Promise`<[`DataSource`](../interfaces/neuroglancer_datasource.DataSource.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`GetDataSourceOptions`](../interfaces/neuroglancer_datasource.GetDataSourceOptions.md) |

#### Returns

`Promise`<[`DataSource`](../interfaces/neuroglancer_datasource.DataSource.md)\>

#### Overrides

[DataSourceProvider](neuroglancer_datasource.DataSourceProvider.md).[get](neuroglancer_datasource.DataSourceProvider.md#get)

#### Defined in

[src/neuroglancer/datasource/precomputed/frontend.ts:939](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/precomputed/frontend.ts#L939)

___

### normalizeUrl

▸ **normalizeUrl**(`options`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`NormalizeUrlOptions`](../interfaces/neuroglancer_datasource.NormalizeUrlOptions.md) |

#### Returns

`string`

#### Overrides

[DataSourceProvider](neuroglancer_datasource.DataSourceProvider.md).[normalizeUrl](neuroglancer_datasource.DataSourceProvider.md#normalizeurl)

#### Defined in

[src/neuroglancer/datasource/precomputed/frontend.ts:926](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/precomputed/frontend.ts#L926)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[DataSourceProvider](neuroglancer_datasource.DataSourceProvider.md).[refCountReachedZero](neuroglancer_datasource.DataSourceProvider.md#refcountreachedzero)

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

[DataSourceProvider](neuroglancer_datasource.DataSourceProvider.md).[registerCancellable](neuroglancer_datasource.DataSourceProvider.md#registercancellable)

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

[DataSourceProvider](neuroglancer_datasource.DataSourceProvider.md).[registerDisposer](neuroglancer_datasource.DataSourceProvider.md#registerdisposer)

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

[DataSourceProvider](neuroglancer_datasource.DataSourceProvider.md).[registerEventListener](neuroglancer_datasource.DataSourceProvider.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L95)

___

### suggestLayerName

▸ `Optional` **suggestLayerName**(`path`): `string`

Returns a suggested layer name for the given volume source.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`string`

#### Inherited from

[DataSourceProvider](neuroglancer_datasource.DataSourceProvider.md).[suggestLayerName](neuroglancer_datasource.DataSourceProvider.md#suggestlayername)

#### Defined in

[src/neuroglancer/datasource/index.ts:181](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/index.ts#L181)

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

[DataSourceProvider](neuroglancer_datasource.DataSourceProvider.md).[unregisterDisposer](neuroglancer_datasource.DataSourceProvider.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L85)
