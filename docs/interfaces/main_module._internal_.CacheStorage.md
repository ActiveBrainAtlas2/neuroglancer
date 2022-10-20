[neuroglancer](../README.md) / [Exports](../modules.md) / [main\_module](../modules/main_module.md) / [<internal\>](../modules/main_module._internal_.md) / CacheStorage

# Interface: CacheStorage

[main_module](../modules/main_module.md).[<internal>](../modules/main_module._internal_.md).CacheStorage

The storage for Cache objects.
Available only in secure contexts.

## Table of contents

### Methods

- [delete](main_module._internal_.CacheStorage.md#delete)
- [has](main_module._internal_.CacheStorage.md#has)
- [keys](main_module._internal_.CacheStorage.md#keys)
- [match](main_module._internal_.CacheStorage.md#match)
- [open](main_module._internal_.CacheStorage.md#open)

## Methods

### delete

▸ **delete**(`cacheName`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cacheName` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3350

___

### has

▸ **has**(`cacheName`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cacheName` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3351

___

### keys

▸ **keys**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3352

___

### match

▸ **match**(`request`, `options?`): `Promise`<`undefined` \| [`Response`](../modules/main_module._internal_.md#response)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`RequestInfo`](../modules/main_module._internal_.md#requestinfo) \| [`URL`](../modules/main_module._internal_.md#url) |
| `options?` | [`MultiCacheQueryOptions`](main_module._internal_.MultiCacheQueryOptions.md) |

#### Returns

`Promise`<`undefined` \| [`Response`](../modules/main_module._internal_.md#response)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3353

___

### open

▸ **open**(`cacheName`): `Promise`<`Cache`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cacheName` | `string` |

#### Returns

`Promise`<`Cache`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3354
