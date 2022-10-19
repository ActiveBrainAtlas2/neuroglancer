[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / CacheStorage

# Interface: CacheStorage

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).CacheStorage

The storage for Cache objects.
Available only in secure contexts.

## Table of contents

### Methods

- [delete](annotation_annotation_layer_state._internal_.CacheStorage.md#delete)
- [has](annotation_annotation_layer_state._internal_.CacheStorage.md#has)
- [keys](annotation_annotation_layer_state._internal_.CacheStorage.md#keys)
- [match](annotation_annotation_layer_state._internal_.CacheStorage.md#match)
- [open](annotation_annotation_layer_state._internal_.CacheStorage.md#open)

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

▸ **match**(`request`, `options?`): `Promise`<`undefined` \| [`Response`](../modules/annotation_annotation_layer_state._internal_.md#response)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`RequestInfo`](../modules/annotation_annotation_layer_state._internal_.md#requestinfo) \| [`URL`](../modules/annotation_annotation_layer_state._internal_.md#url) |
| `options?` | [`MultiCacheQueryOptions`](annotation_annotation_layer_state._internal_.MultiCacheQueryOptions.md) |

#### Returns

`Promise`<`undefined` \| [`Response`](../modules/annotation_annotation_layer_state._internal_.md#response)\>

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
