[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/datasource/obj/frontend](../modules/neuroglancer_datasource_obj_frontend.md) / ObjDataSource

# Class: ObjDataSource

[neuroglancer/datasource/obj/frontend](../modules/neuroglancer_datasource_obj_frontend.md).ObjDataSource

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

- [`DataSourceProvider`](neuroglancer_datasource.DataSourceProvider.md)

  ↳ **`ObjDataSource`**

## Table of contents

### Constructors

- [constructor](neuroglancer_datasource_obj_frontend.ObjDataSource.md#constructor)

### Properties

- [disposedStacks](neuroglancer_datasource_obj_frontend.ObjDataSource.md#disposedstacks)
- [refCount](neuroglancer_datasource_obj_frontend.ObjDataSource.md#refcount)
- [wasDisposed](neuroglancer_datasource_obj_frontend.ObjDataSource.md#wasdisposed)

### Accessors

- [description](neuroglancer_datasource_obj_frontend.ObjDataSource.md#description)

### Methods

- [addRef](neuroglancer_datasource_obj_frontend.ObjDataSource.md#addref)
- [completeUrl](neuroglancer_datasource_obj_frontend.ObjDataSource.md#completeurl)
- [convertLegacyUrl](neuroglancer_datasource_obj_frontend.ObjDataSource.md#convertlegacyurl)
- [dispose](neuroglancer_datasource_obj_frontend.ObjDataSource.md#dispose)
- [disposed](neuroglancer_datasource_obj_frontend.ObjDataSource.md#disposed)
- [findSourceGroup](neuroglancer_datasource_obj_frontend.ObjDataSource.md#findsourcegroup)
- [get](neuroglancer_datasource_obj_frontend.ObjDataSource.md#get)
- [normalizeUrl](neuroglancer_datasource_obj_frontend.ObjDataSource.md#normalizeurl)
- [refCountReachedZero](neuroglancer_datasource_obj_frontend.ObjDataSource.md#refcountreachedzero)
- [registerCancellable](neuroglancer_datasource_obj_frontend.ObjDataSource.md#registercancellable)
- [registerDisposer](neuroglancer_datasource_obj_frontend.ObjDataSource.md#registerdisposer)
- [registerEventListener](neuroglancer_datasource_obj_frontend.ObjDataSource.md#registereventlistener)
- [suggestLayerName](neuroglancer_datasource_obj_frontend.ObjDataSource.md#suggestlayername)
- [unregisterDisposer](neuroglancer_datasource_obj_frontend.ObjDataSource.md#unregisterdisposer)

## Constructors

### constructor

• **new ObjDataSource**()

#### Inherited from

[DataSourceProvider](neuroglancer_datasource.DataSourceProvider.md).[constructor](neuroglancer_datasource.DataSourceProvider.md#constructor)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[DataSourceProvider](neuroglancer_datasource.DataSourceProvider.md).[disposedStacks](neuroglancer_datasource.DataSourceProvider.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[DataSourceProvider](neuroglancer_datasource.DataSourceProvider.md).[refCount](neuroglancer_datasource.DataSourceProvider.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[DataSourceProvider](neuroglancer_datasource.DataSourceProvider.md).[wasDisposed](neuroglancer_datasource.DataSourceProvider.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### description

• `get` **description**(): `string`

#### Returns

`string`

#### Overrides

DataSourceProvider.description

#### Defined in

[src/neuroglancer/datasource/obj/frontend.ts:23](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/obj/frontend.ts#L23)

## Methods

### addRef

▸ **addRef**(): [`ObjDataSource`](neuroglancer_datasource_obj_frontend.ObjDataSource.md)

#### Returns

[`ObjDataSource`](neuroglancer_datasource_obj_frontend.ObjDataSource.md)

#### Inherited from

[DataSourceProvider](neuroglancer_datasource.DataSourceProvider.md).[addRef](neuroglancer_datasource.DataSourceProvider.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

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

[src/neuroglancer/datasource/obj/frontend.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/obj/frontend.ts#L46)

___

### convertLegacyUrl

▸ **convertLegacyUrl**(`options`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ConvertLegacyUrlOptions`](../interfaces/neuroglancer_datasource.ConvertLegacyUrlOptions.md) |

#### Returns

`string`

#### Inherited from

[DataSourceProvider](neuroglancer_datasource.DataSourceProvider.md).[convertLegacyUrl](neuroglancer_datasource.DataSourceProvider.md#convertlegacyurl)

#### Defined in

[src/neuroglancer/datasource/index.ts:214](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/index.ts#L214)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[DataSourceProvider](neuroglancer_datasource.DataSourceProvider.md).[dispose](neuroglancer_datasource.DataSourceProvider.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[DataSourceProvider](neuroglancer_datasource.DataSourceProvider.md).[disposed](neuroglancer_datasource.DataSourceProvider.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L75)

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

[src/neuroglancer/datasource/index.ts:187](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/index.ts#L187)

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

[src/neuroglancer/datasource/obj/frontend.ts:27](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/obj/frontend.ts#L27)

___

### normalizeUrl

▸ **normalizeUrl**(`options`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`NormalizeUrlOptions`](../interfaces/neuroglancer_datasource.NormalizeUrlOptions.md) |

#### Returns

`string`

#### Inherited from

[DataSourceProvider](neuroglancer_datasource.DataSourceProvider.md).[normalizeUrl](neuroglancer_datasource.DataSourceProvider.md#normalizeurl)

#### Defined in

[src/neuroglancer/datasource/index.ts:210](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/index.ts#L210)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[DataSourceProvider](neuroglancer_datasource.DataSourceProvider.md).[refCountReachedZero](neuroglancer_datasource.DataSourceProvider.md#refcountreachedzero)

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

[DataSourceProvider](neuroglancer_datasource.DataSourceProvider.md).[registerCancellable](neuroglancer_datasource.DataSourceProvider.md#registercancellable)

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

[DataSourceProvider](neuroglancer_datasource.DataSourceProvider.md).[registerDisposer](neuroglancer_datasource.DataSourceProvider.md#registerdisposer)

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

[DataSourceProvider](neuroglancer_datasource.DataSourceProvider.md).[registerEventListener](neuroglancer_datasource.DataSourceProvider.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L95)

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

[src/neuroglancer/datasource/index.ts:181](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/index.ts#L181)

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

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L85)
