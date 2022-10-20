[neuroglancer](../README.md) / [Exports](../modules.md) / [main\_module](../modules/main_module.md) / [<internal\>](../modules/main_module._internal_.md) / WindowOrWorkerGlobalScope

# Interface: WindowOrWorkerGlobalScope

[main_module](../modules/main_module.md).[<internal>](../modules/main_module._internal_.md).WindowOrWorkerGlobalScope

## Hierarchy

- **`WindowOrWorkerGlobalScope`**

  ↳ [`Window`](main_module._internal_.Window.md)

## Table of contents

### Properties

- [caches](main_module._internal_.WindowOrWorkerGlobalScope.md#caches)
- [crossOriginIsolated](main_module._internal_.WindowOrWorkerGlobalScope.md#crossoriginisolated)
- [crypto](main_module._internal_.WindowOrWorkerGlobalScope.md#crypto)
- [indexedDB](main_module._internal_.WindowOrWorkerGlobalScope.md#indexeddb)
- [isSecureContext](main_module._internal_.WindowOrWorkerGlobalScope.md#issecurecontext)
- [origin](main_module._internal_.WindowOrWorkerGlobalScope.md#origin)
- [performance](main_module._internal_.WindowOrWorkerGlobalScope.md#performance)

### Methods

- [atob](main_module._internal_.WindowOrWorkerGlobalScope.md#atob)
- [btoa](main_module._internal_.WindowOrWorkerGlobalScope.md#btoa)
- [clearInterval](main_module._internal_.WindowOrWorkerGlobalScope.md#clearinterval)
- [clearTimeout](main_module._internal_.WindowOrWorkerGlobalScope.md#cleartimeout)
- [createImageBitmap](main_module._internal_.WindowOrWorkerGlobalScope.md#createimagebitmap)
- [fetch](main_module._internal_.WindowOrWorkerGlobalScope.md#fetch)
- [queueMicrotask](main_module._internal_.WindowOrWorkerGlobalScope.md#queuemicrotask)
- [reportError](main_module._internal_.WindowOrWorkerGlobalScope.md#reporterror)
- [setInterval](main_module._internal_.WindowOrWorkerGlobalScope.md#setinterval)
- [setTimeout](main_module._internal_.WindowOrWorkerGlobalScope.md#settimeout)
- [structuredClone](main_module._internal_.WindowOrWorkerGlobalScope.md#structuredclone)

## Properties

### caches

• `Readonly` **caches**: [`CacheStorage`](../modules/main_module._internal_.md#cachestorage)

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

• `Readonly` **crypto**: [`Crypto`](../modules/main_module._internal_.md#crypto)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16798

___

### indexedDB

• `Readonly` **indexedDB**: [`IDBFactory`](../modules/main_module._internal_.md#idbfactory)

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

• `Readonly` **performance**: [`Performance`](../modules/main_module._internal_.md#performance)

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

▸ **createImageBitmap**(`image`, `options?`): `Promise`<[`ImageBitmap`](../modules/main_module._internal_.md#imagebitmap)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `image` | [`ImageBitmapSource`](../modules/main_module._internal_.md#imagebitmapsource) |
| `options?` | [`ImageBitmapOptions`](main_module._internal_.ImageBitmapOptions.md) |

#### Returns

`Promise`<[`ImageBitmap`](../modules/main_module._internal_.md#imagebitmap)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16807

▸ **createImageBitmap**(`image`, `sx`, `sy`, `sw`, `sh`, `options?`): `Promise`<[`ImageBitmap`](../modules/main_module._internal_.md#imagebitmap)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `image` | [`ImageBitmapSource`](../modules/main_module._internal_.md#imagebitmapsource) |
| `sx` | `number` |
| `sy` | `number` |
| `sw` | `number` |
| `sh` | `number` |
| `options?` | [`ImageBitmapOptions`](main_module._internal_.ImageBitmapOptions.md) |

#### Returns

`Promise`<[`ImageBitmap`](../modules/main_module._internal_.md#imagebitmap)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16808

___

### fetch

▸ **fetch**(`input`, `init?`): `Promise`<[`Response`](../modules/main_module._internal_.md#response)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`RequestInfo`](../modules/main_module._internal_.md#requestinfo) \| [`URL`](../modules/main_module._internal_.md#url) |
| `init?` | [`RequestInit`](main_module._internal_.RequestInit.md) |

#### Returns

`Promise`<[`Response`](../modules/main_module._internal_.md#response)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16809

___

### queueMicrotask

▸ **queueMicrotask**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`VoidFunction`](main_module._internal_.VoidFunction.md) |

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
| `handler` | [`TimerHandler`](../modules/main_module._internal_.md#timerhandler) |
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
| `handler` | [`TimerHandler`](../modules/main_module._internal_.md#timerhandler) |
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
| `options?` | [`StructuredSerializeOptions`](main_module._internal_.StructuredSerializeOptions.md) |

#### Returns

`any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16814
