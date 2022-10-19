[neuroglancer](../README.md) / [Modules](../modules.md) / [viewer](../modules/viewer.md) / [<internal\>](../modules/viewer._internal_.md) / AbstractWorker

# Interface: AbstractWorker

[viewer](../modules/viewer.md).[<internal>](../modules/viewer._internal_.md).AbstractWorker

## Hierarchy

- **`AbstractWorker`**

  ↳ [`Worker`](viewer._internal_.Worker.md)

## Table of contents

### Properties

- [onerror](viewer._internal_.AbstractWorker.md#onerror)

### Methods

- [addEventListener](viewer._internal_.AbstractWorker.md#addeventlistener)
- [removeEventListener](viewer._internal_.AbstractWorker.md#removeeventlistener)

## Properties

### onerror

• **onerror**: ``null`` \| (`this`: [`AbstractWorker`](viewer._internal_.AbstractWorker.md), `ev`: [`ErrorEvent`](../modules/axes_lines._internal_.md#errorevent)) => `any`

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
| `listener` | (`this`: [`AbstractWorker`](viewer._internal_.AbstractWorker.md), `ev`: [`AbstractWorkerEventMap`](viewer._internal_.AbstractWorkerEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](axes_lines._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2022

▸ **addEventListener**(`type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/axes_lines._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](axes_lines._internal_.AddEventListenerOptions.md) |

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
| `listener` | (`this`: [`AbstractWorker`](viewer._internal_.AbstractWorker.md), `ev`: [`AbstractWorkerEventMap`](viewer._internal_.AbstractWorkerEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](axes_lines._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2024

▸ **removeEventListener**(`type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/axes_lines._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`EventListenerOptions`](axes_lines._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2025
