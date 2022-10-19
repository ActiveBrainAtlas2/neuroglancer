[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / IDBKeyRange

# Interface: IDBKeyRange

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).IDBKeyRange

A key range can be a single value or a range with upper and lower bounds or endpoints. If the key range has both upper and lower bounds, then it is bounded; if it has no bounds, it is unbounded. A bounded key range can either be open (the endpoints are excluded) or closed (the endpoints are included). To retrieve all keys within a certain range, you can use the following code constructs:

## Table of contents

### Properties

- [lower](annotation_annotation_layer_state._internal_.IDBKeyRange.md#lower)
- [lowerOpen](annotation_annotation_layer_state._internal_.IDBKeyRange.md#loweropen)
- [upper](annotation_annotation_layer_state._internal_.IDBKeyRange.md#upper)
- [upperOpen](annotation_annotation_layer_state._internal_.IDBKeyRange.md#upperopen)

### Methods

- [includes](annotation_annotation_layer_state._internal_.IDBKeyRange.md#includes)

## Properties

### lower

• `Readonly` **lower**: `any`

Returns lower bound, or undefined if none.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8613

___

### lowerOpen

• `Readonly` **lowerOpen**: `boolean`

Returns true if the lower open flag is set, and false otherwise.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8615

___

### upper

• `Readonly` **upper**: `any`

Returns upper bound, or undefined if none.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8617

___

### upperOpen

• `Readonly` **upperOpen**: `boolean`

Returns true if the upper open flag is set, and false otherwise.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8619

## Methods

### includes

▸ **includes**(`key`): `boolean`

Returns true if key is included in the range, and false otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |

#### Returns

`boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8621
