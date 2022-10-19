[neuroglancer](../README.md) / [Modules](../modules.md) / [axes\_lines](../modules/axes_lines.md) / [<internal\>](../modules/axes_lines._internal_.md) / ReadableStreamDefaultReader

# Interface: ReadableStreamDefaultReader<R\>

[axes_lines](../modules/axes_lines.md).[<internal>](../modules/axes_lines._internal_.md).ReadableStreamDefaultReader

## Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `any` |

## Hierarchy

- [`ReadableStreamGenericReader`](axes_lines._internal_.ReadableStreamGenericReader.md)

  ↳ **`ReadableStreamDefaultReader`**

## Table of contents

### Properties

- [closed](axes_lines._internal_.ReadableStreamDefaultReader.md#closed)

### Methods

- [cancel](axes_lines._internal_.ReadableStreamDefaultReader.md#cancel)
- [read](axes_lines._internal_.ReadableStreamDefaultReader.md#read)
- [releaseLock](axes_lines._internal_.ReadableStreamDefaultReader.md#releaselock)

## Properties

### closed

• `Readonly` **closed**: `Promise`<`undefined`\>

#### Inherited from

[ReadableStreamGenericReader](axes_lines._internal_.ReadableStreamGenericReader.md).[closed](axes_lines._internal_.ReadableStreamGenericReader.md#closed)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11516

## Methods

### cancel

▸ **cancel**(`reason?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason?` | `any` |

#### Returns

`Promise`<`void`\>

#### Inherited from

[ReadableStreamGenericReader](axes_lines._internal_.ReadableStreamGenericReader.md).[cancel](axes_lines._internal_.ReadableStreamGenericReader.md#cancel)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11517

___

### read

▸ **read**(): `Promise`<[`ReadableStreamDefaultReadResult`](../modules/axes_lines._internal_.md#readablestreamdefaultreadresult)<`R`\>\>

#### Returns

`Promise`<[`ReadableStreamDefaultReadResult`](../modules/axes_lines._internal_.md#readablestreamdefaultreadresult)<`R`\>\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11506

___

### releaseLock

▸ **releaseLock**(): `void`

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11507
