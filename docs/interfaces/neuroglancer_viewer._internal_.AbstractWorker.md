[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/viewer](../modules/neuroglancer_viewer.md) / [<internal\>](../modules/neuroglancer_viewer._internal_.md) / AbstractWorker

# Interface: AbstractWorker

[neuroglancer/viewer](../modules/neuroglancer_viewer.md).[<internal>](../modules/neuroglancer_viewer._internal_.md).AbstractWorker

## Hierarchy

- **`AbstractWorker`**

  ↳ [`Worker`](neuroglancer_viewer._internal_.Worker.md)

## Table of contents

### Properties

- [onerror](neuroglancer_viewer._internal_.AbstractWorker.md#onerror)

### Methods

- [addEventListener](neuroglancer_viewer._internal_.AbstractWorker.md#addeventlistener)
- [removeEventListener](neuroglancer_viewer._internal_.AbstractWorker.md#removeeventlistener)

## Properties

### onerror

• **onerror**: ``null`` \| (`this`: [`AbstractWorker`](neuroglancer_viewer._internal_.AbstractWorker.md), `ev`: [`ErrorEvent`](../modules/main_module._internal_.md#errorevent)) => `any`

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
| `listener` | (`this`: [`AbstractWorker`](neuroglancer_viewer._internal_.AbstractWorker.md), `ev`: [`AbstractWorkerEventMap`](neuroglancer_viewer._internal_.AbstractWorkerEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](main_module._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2022

▸ **addEventListener**(`type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/main_module._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](main_module._internal_.AddEventListenerOptions.md) |

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
| `listener` | (`this`: [`AbstractWorker`](neuroglancer_viewer._internal_.AbstractWorker.md), `ev`: [`AbstractWorkerEventMap`](neuroglancer_viewer._internal_.AbstractWorkerEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](main_module._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2024

▸ **removeEventListener**(`type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/main_module._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`EventListenerOptions`](main_module._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2025
