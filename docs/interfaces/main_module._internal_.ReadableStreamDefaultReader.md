[neuroglancer](../README.md) / [Exports](../modules.md) / [main\_module](../modules/main_module.md) / [<internal\>](../modules/main_module._internal_.md) / ReadableStreamDefaultReader

# Interface: ReadableStreamDefaultReader<R\>

[main_module](../modules/main_module.md).[<internal>](../modules/main_module._internal_.md).ReadableStreamDefaultReader

## Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `any` |

## Hierarchy

- [`ReadableStreamGenericReader`](main_module._internal_.ReadableStreamGenericReader.md)

  ↳ **`ReadableStreamDefaultReader`**

## Table of contents

### Properties

- [closed](main_module._internal_.ReadableStreamDefaultReader.md#closed)

### Methods

- [cancel](main_module._internal_.ReadableStreamDefaultReader.md#cancel)
- [read](main_module._internal_.ReadableStreamDefaultReader.md#read)
- [releaseLock](main_module._internal_.ReadableStreamDefaultReader.md#releaselock)

## Properties

### closed

• `Readonly` **closed**: `Promise`<`undefined`\>

#### Inherited from

[ReadableStreamGenericReader](main_module._internal_.ReadableStreamGenericReader.md).[closed](main_module._internal_.ReadableStreamGenericReader.md#closed)

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

[ReadableStreamGenericReader](main_module._internal_.ReadableStreamGenericReader.md).[cancel](main_module._internal_.ReadableStreamGenericReader.md#cancel)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11517

___

### read

▸ **read**(): `Promise`<[`ReadableStreamDefaultReadResult`](../modules/main_module._internal_.md#readablestreamdefaultreadresult)<`R`\>\>

#### Returns

`Promise`<[`ReadableStreamDefaultReadResult`](../modules/main_module._internal_.md#readablestreamdefaultreadresult)<`R`\>\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11506

___

### releaseLock

▸ **releaseLock**(): `void`

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11507
