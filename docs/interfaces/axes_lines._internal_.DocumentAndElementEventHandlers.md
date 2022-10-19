[neuroglancer](../README.md) / [Modules](../modules.md) / [axes\_lines](../modules/axes_lines.md) / [<internal\>](../modules/axes_lines._internal_.md) / DocumentAndElementEventHandlers

# Interface: DocumentAndElementEventHandlers

[axes_lines](../modules/axes_lines.md).[<internal>](../modules/axes_lines._internal_.md).DocumentAndElementEventHandlers

## Hierarchy

- **`DocumentAndElementEventHandlers`**

  ↳ [`HTMLElement`](axes_lines._internal_.HTMLElement.md)

  ↳ [`Document`](axes_lines._internal_.Document.md)

  ↳ [`SVGElement`](axes_lines._internal_.SVGElement.md)

## Table of contents

### Properties

- [oncopy](axes_lines._internal_.DocumentAndElementEventHandlers.md#oncopy)
- [oncut](axes_lines._internal_.DocumentAndElementEventHandlers.md#oncut)
- [onpaste](axes_lines._internal_.DocumentAndElementEventHandlers.md#onpaste)

### Methods

- [addEventListener](axes_lines._internal_.DocumentAndElementEventHandlers.md#addeventlistener)
- [removeEventListener](axes_lines._internal_.DocumentAndElementEventHandlers.md#removeeventlistener)

## Properties

### oncopy

• **oncopy**: ``null`` \| (`this`: [`DocumentAndElementEventHandlers`](axes_lines._internal_.DocumentAndElementEventHandlers.md), `ev`: [`ClipboardEvent`](../modules/axes_lines._internal_.md#clipboardevent)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4708

___

### oncut

• **oncut**: ``null`` \| (`this`: [`DocumentAndElementEventHandlers`](axes_lines._internal_.DocumentAndElementEventHandlers.md), `ev`: [`ClipboardEvent`](../modules/axes_lines._internal_.md#clipboardevent)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4709

___

### onpaste

• **onpaste**: ``null`` \| (`this`: [`DocumentAndElementEventHandlers`](axes_lines._internal_.DocumentAndElementEventHandlers.md), `ev`: [`ClipboardEvent`](../modules/axes_lines._internal_.md#clipboardevent)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4710

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`DocumentAndElementEventHandlersEventMap`](axes_lines._internal_.DocumentAndElementEventHandlersEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`DocumentAndElementEventHandlers`](axes_lines._internal_.DocumentAndElementEventHandlers.md), `ev`: [`DocumentAndElementEventHandlersEventMap`](axes_lines._internal_.DocumentAndElementEventHandlersEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](axes_lines._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4711

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

node_modules/typescript/lib/lib.dom.d.ts:4712

___

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`DocumentAndElementEventHandlersEventMap`](axes_lines._internal_.DocumentAndElementEventHandlersEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`DocumentAndElementEventHandlers`](axes_lines._internal_.DocumentAndElementEventHandlers.md), `ev`: [`DocumentAndElementEventHandlersEventMap`](axes_lines._internal_.DocumentAndElementEventHandlersEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](axes_lines._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4713

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

node_modules/typescript/lib/lib.dom.d.ts:4714
