[neuroglancer](../README.md) / [Modules](../modules.md) / [axes\_lines](../modules/axes_lines.md) / [<internal\>](../modules/axes_lines._internal_.md) / Crypto

# Interface: Crypto

[axes_lines](../modules/axes_lines.md).[<internal>](../modules/axes_lines._internal_.md).Crypto

Basic cryptography features available in the current context. It allows access to a cryptographically strong random number generator and to cryptographic primitives.

## Table of contents

### Properties

- [subtle](axes_lines._internal_.Crypto.md#subtle)

### Methods

- [getRandomValues](axes_lines._internal_.Crypto.md#getrandomvalues)
- [randomUUID](axes_lines._internal_.Crypto.md#randomuuid)

## Properties

### subtle

• `Readonly` **subtle**: `SubtleCrypto`

Available only in secure contexts.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3727

## Methods

### getRandomValues

▸ **getRandomValues**<`T`\>(`array`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends ``null`` \| [`ArrayBufferView`](axes_lines._internal_.ArrayBufferView.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `T` |

#### Returns

`T`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3728

___

### randomUUID

▸ **randomUUID**(): `string`

Available only in secure contexts.

#### Returns

`string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3730
