[neuroglancer](../README.md) / [Exports](../modules.md) / [main\_module](../modules/main_module.md) / [<internal\>](../modules/main_module._internal_.md) / DocumentAndElementEventHandlers

# Interface: DocumentAndElementEventHandlers

[main_module](../modules/main_module.md).[<internal>](../modules/main_module._internal_.md).DocumentAndElementEventHandlers

## Hierarchy

- **`DocumentAndElementEventHandlers`**

  ↳ [`HTMLElement`](main_module._internal_.HTMLElement.md)

  ↳ [`Document`](main_module._internal_.Document.md)

  ↳ [`SVGElement`](main_module._internal_.SVGElement.md)

## Table of contents

### Properties

- [oncopy](main_module._internal_.DocumentAndElementEventHandlers.md#oncopy)
- [oncut](main_module._internal_.DocumentAndElementEventHandlers.md#oncut)
- [onpaste](main_module._internal_.DocumentAndElementEventHandlers.md#onpaste)

### Methods

- [addEventListener](main_module._internal_.DocumentAndElementEventHandlers.md#addeventlistener)
- [removeEventListener](main_module._internal_.DocumentAndElementEventHandlers.md#removeeventlistener)

## Properties

### oncopy

• **oncopy**: ``null`` \| (`this`: [`DocumentAndElementEventHandlers`](main_module._internal_.DocumentAndElementEventHandlers.md), `ev`: [`ClipboardEvent`](../modules/main_module._internal_.md#clipboardevent)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4708

___

### oncut

• **oncut**: ``null`` \| (`this`: [`DocumentAndElementEventHandlers`](main_module._internal_.DocumentAndElementEventHandlers.md), `ev`: [`ClipboardEvent`](../modules/main_module._internal_.md#clipboardevent)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4709

___

### onpaste

• **onpaste**: ``null`` \| (`this`: [`DocumentAndElementEventHandlers`](main_module._internal_.DocumentAndElementEventHandlers.md), `ev`: [`ClipboardEvent`](../modules/main_module._internal_.md#clipboardevent)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4710

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`DocumentAndElementEventHandlersEventMap`](main_module._internal_.DocumentAndElementEventHandlersEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`DocumentAndElementEventHandlers`](main_module._internal_.DocumentAndElementEventHandlers.md), `ev`: [`DocumentAndElementEventHandlersEventMap`](main_module._internal_.DocumentAndElementEventHandlersEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](main_module._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4711

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

node_modules/typescript/lib/lib.dom.d.ts:4712

___

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`DocumentAndElementEventHandlersEventMap`](main_module._internal_.DocumentAndElementEventHandlersEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`DocumentAndElementEventHandlers`](main_module._internal_.DocumentAndElementEventHandlers.md), `ev`: [`DocumentAndElementEventHandlersEventMap`](main_module._internal_.DocumentAndElementEventHandlersEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](main_module._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4713

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

node_modules/typescript/lib/lib.dom.d.ts:4714
