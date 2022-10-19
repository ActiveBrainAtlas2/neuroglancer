[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / Crypto

# Interface: Crypto

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).Crypto

Basic cryptography features available in the current context. It allows access to a cryptographically strong random number generator and to cryptographic primitives.

## Table of contents

### Properties

- [subtle](annotation_annotation_layer_state._internal_.Crypto.md#subtle)

### Methods

- [getRandomValues](annotation_annotation_layer_state._internal_.Crypto.md#getrandomvalues)
- [randomUUID](annotation_annotation_layer_state._internal_.Crypto.md#randomuuid)

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
| `T` | extends ``null`` \| [`ArrayBufferView`](annotation_annotation_layer_state._internal_.ArrayBufferView.md) |

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
