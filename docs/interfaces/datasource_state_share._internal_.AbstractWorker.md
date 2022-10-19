[neuroglancer](../README.md) / [Modules](../modules.md) / [datasource/state\_share](../modules/datasource_state_share.md) / [<internal\>](../modules/datasource_state_share._internal_.md) / AbstractWorker

# Interface: AbstractWorker

[datasource/state_share](../modules/datasource_state_share.md).[<internal>](../modules/datasource_state_share._internal_.md).AbstractWorker

## Hierarchy

- **`AbstractWorker`**

  ↳ [`Worker`](datasource_state_share._internal_.Worker.md)

## Table of contents

### Properties

- [onerror](datasource_state_share._internal_.AbstractWorker.md#onerror)

### Methods

- [addEventListener](datasource_state_share._internal_.AbstractWorker.md#addeventlistener)
- [removeEventListener](datasource_state_share._internal_.AbstractWorker.md#removeeventlistener)

## Properties

### onerror

• **onerror**: ``null`` \| (`this`: [`AbstractWorker`](datasource_state_share._internal_.AbstractWorker.md), `ev`: [`ErrorEvent`](../modules/annotation_annotation_layer_state._internal_.md#errorevent)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2021

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"error"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`AbstractWorker`](datasource_state_share._internal_.AbstractWorker.md), `ev`: [`AbstractWorkerEventMap`](datasource_state_share._internal_.AbstractWorkerEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](annotation_annotation_layer_state._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2022

▸ **addEventListener**(`type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/annotation_annotation_layer_state._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](annotation_annotation_layer_state._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2023

___

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"error"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`AbstractWorker`](datasource_state_share._internal_.AbstractWorker.md), `ev`: [`AbstractWorkerEventMap`](datasource_state_share._internal_.AbstractWorkerEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](annotation_annotation_layer_state._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2024

▸ **removeEventListener**(`type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/annotation_annotation_layer_state._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`EventListenerOptions`](annotation_annotation_layer_state._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2025
