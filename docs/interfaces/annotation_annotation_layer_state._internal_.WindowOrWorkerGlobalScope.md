[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / WindowOrWorkerGlobalScope

# Interface: WindowOrWorkerGlobalScope

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).WindowOrWorkerGlobalScope

## Hierarchy

- **`WindowOrWorkerGlobalScope`**

  ↳ [`Window`](annotation_annotation_layer_state._internal_.Window.md)

## Table of contents

### Properties

- [caches](annotation_annotation_layer_state._internal_.WindowOrWorkerGlobalScope.md#caches)
- [crossOriginIsolated](annotation_annotation_layer_state._internal_.WindowOrWorkerGlobalScope.md#crossoriginisolated)
- [crypto](annotation_annotation_layer_state._internal_.WindowOrWorkerGlobalScope.md#crypto)
- [indexedDB](annotation_annotation_layer_state._internal_.WindowOrWorkerGlobalScope.md#indexeddb)
- [isSecureContext](annotation_annotation_layer_state._internal_.WindowOrWorkerGlobalScope.md#issecurecontext)
- [origin](annotation_annotation_layer_state._internal_.WindowOrWorkerGlobalScope.md#origin)
- [performance](annotation_annotation_layer_state._internal_.WindowOrWorkerGlobalScope.md#performance)

### Methods

- [atob](annotation_annotation_layer_state._internal_.WindowOrWorkerGlobalScope.md#atob)
- [btoa](annotation_annotation_layer_state._internal_.WindowOrWorkerGlobalScope.md#btoa)
- [clearInterval](annotation_annotation_layer_state._internal_.WindowOrWorkerGlobalScope.md#clearinterval)
- [clearTimeout](annotation_annotation_layer_state._internal_.WindowOrWorkerGlobalScope.md#cleartimeout)
- [createImageBitmap](annotation_annotation_layer_state._internal_.WindowOrWorkerGlobalScope.md#createimagebitmap)
- [fetch](annotation_annotation_layer_state._internal_.WindowOrWorkerGlobalScope.md#fetch)
- [queueMicrotask](annotation_annotation_layer_state._internal_.WindowOrWorkerGlobalScope.md#queuemicrotask)
- [reportError](annotation_annotation_layer_state._internal_.WindowOrWorkerGlobalScope.md#reporterror)
- [setInterval](annotation_annotation_layer_state._internal_.WindowOrWorkerGlobalScope.md#setinterval)
- [setTimeout](annotation_annotation_layer_state._internal_.WindowOrWorkerGlobalScope.md#settimeout)
- [structuredClone](annotation_annotation_layer_state._internal_.WindowOrWorkerGlobalScope.md#structuredclone)

## Properties

### caches

• `Readonly` **caches**: [`CacheStorage`](../modules/annotation_annotation_layer_state._internal_.md#cachestorage)

Available only in secure contexts.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16796

___

### crossOriginIsolated

• `Readonly` **crossOriginIsolated**: `boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16797

___

### crypto

• `Readonly` **crypto**: [`Crypto`](../modules/annotation_annotation_layer_state._internal_.md#crypto)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16798

___

### indexedDB

• `Readonly` **indexedDB**: [`IDBFactory`](../modules/annotation_annotation_layer_state._internal_.md#idbfactory)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16799

___

### isSecureContext

• `Readonly` **isSecureContext**: `boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16800

___

### origin

• `Readonly` **origin**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16801

___

### performance

• `Readonly` **performance**: [`Performance`](../modules/annotation_annotation_layer_state._internal_.md#performance)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16802

## Methods

### atob

▸ **atob**(`data`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |

#### Returns

`string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16803

___

### btoa

▸ **btoa**(`data`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |

#### Returns

`string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16804

___

### clearInterval

▸ **clearInterval**(`id?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id?` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16805

___

### clearTimeout

▸ **clearTimeout**(`id?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id?` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16806

___

### createImageBitmap

▸ **createImageBitmap**(`image`, `options?`): `Promise`<[`ImageBitmap`](../modules/annotation_annotation_layer_state._internal_.md#imagebitmap)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `image` | [`ImageBitmapSource`](../modules/annotation_annotation_layer_state._internal_.md#imagebitmapsource) |
| `options?` | [`ImageBitmapOptions`](annotation_annotation_layer_state._internal_.ImageBitmapOptions.md) |

#### Returns

`Promise`<[`ImageBitmap`](../modules/annotation_annotation_layer_state._internal_.md#imagebitmap)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16807

▸ **createImageBitmap**(`image`, `sx`, `sy`, `sw`, `sh`, `options?`): `Promise`<[`ImageBitmap`](../modules/annotation_annotation_layer_state._internal_.md#imagebitmap)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `image` | [`ImageBitmapSource`](../modules/annotation_annotation_layer_state._internal_.md#imagebitmapsource) |
| `sx` | `number` |
| `sy` | `number` |
| `sw` | `number` |
| `sh` | `number` |
| `options?` | [`ImageBitmapOptions`](annotation_annotation_layer_state._internal_.ImageBitmapOptions.md) |

#### Returns

`Promise`<[`ImageBitmap`](../modules/annotation_annotation_layer_state._internal_.md#imagebitmap)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16808

___

### fetch

▸ **fetch**(`input`, `init?`): `Promise`<[`Response`](../modules/annotation_annotation_layer_state._internal_.md#response)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`RequestInfo`](../modules/annotation_annotation_layer_state._internal_.md#requestinfo) \| [`URL`](../modules/annotation_annotation_layer_state._internal_.md#url) |
| `init?` | [`RequestInit`](annotation_annotation_layer_state._internal_.RequestInit.md) |

#### Returns

`Promise`<[`Response`](../modules/annotation_annotation_layer_state._internal_.md#response)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16809

___

### queueMicrotask

▸ **queueMicrotask**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`VoidFunction`](annotation_annotation_layer_state._internal_.VoidFunction.md) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16810

___

### reportError

▸ **reportError**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `any` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16811

___

### setInterval

▸ **setInterval**(`handler`, `timeout?`, ...`arguments`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | [`TimerHandler`](../modules/annotation_annotation_layer_state._internal_.md#timerhandler) |
| `timeout?` | `number` |
| `...arguments` | `any`[] |

#### Returns

`number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16812

___

### setTimeout

▸ **setTimeout**(`handler`, `timeout?`, ...`arguments`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | [`TimerHandler`](../modules/annotation_annotation_layer_state._internal_.md#timerhandler) |
| `timeout?` | `number` |
| `...arguments` | `any`[] |

#### Returns

`number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16813

___

### structuredClone

▸ **structuredClone**(`value`, `options?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `options?` | [`StructuredSerializeOptions`](annotation_annotation_layer_state._internal_.StructuredSerializeOptions.md) |

#### Returns

`any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16814
