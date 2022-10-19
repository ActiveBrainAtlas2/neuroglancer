[neuroglancer](../README.md) / [Modules](../modules.md) / [axes\_lines](../modules/axes_lines.md) / [<internal\>](../modules/axes_lines._internal_.md) / CacheStorage

# Interface: CacheStorage

[axes_lines](../modules/axes_lines.md).[<internal>](../modules/axes_lines._internal_.md).CacheStorage

The storage for Cache objects.
Available only in secure contexts.

## Table of contents

### Methods

- [delete](axes_lines._internal_.CacheStorage.md#delete)
- [has](axes_lines._internal_.CacheStorage.md#has)
- [keys](axes_lines._internal_.CacheStorage.md#keys)
- [match](axes_lines._internal_.CacheStorage.md#match)
- [open](axes_lines._internal_.CacheStorage.md#open)

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

▸ **match**(`request`, `options?`): `Promise`<`undefined` \| [`Response`](../modules/axes_lines._internal_.md#response)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`RequestInfo`](../modules/axes_lines._internal_.md#requestinfo) \| [`URL`](../modules/axes_lines._internal_.md#url) |
| `options?` | [`MultiCacheQueryOptions`](axes_lines._internal_.MultiCacheQueryOptions.md) |

#### Returns

`Promise`<`undefined` \| [`Response`](../modules/axes_lines._internal_.md#response)\>

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
