[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / DOMPoint

# Interface: DOMPoint

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).DOMPoint

## Hierarchy

- [`DOMPointReadOnly`](../modules/annotation_annotation_layer_state._internal_.md#dompointreadonly)

  ↳ **`DOMPoint`**

## Table of contents

### Properties

- [w](annotation_annotation_layer_state._internal_.DOMPoint.md#w)
- [x](annotation_annotation_layer_state._internal_.DOMPoint.md#x)
- [y](annotation_annotation_layer_state._internal_.DOMPoint.md#y)
- [z](annotation_annotation_layer_state._internal_.DOMPoint.md#z)

### Methods

- [matrixTransform](annotation_annotation_layer_state._internal_.DOMPoint.md#matrixtransform)
- [toJSON](annotation_annotation_layer_state._internal_.DOMPoint.md#tojson)

## Properties

### w

• **w**: `number`

#### Overrides

DOMPointReadOnly.w

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3980

___

### x

• **x**: `number`

#### Overrides

DOMPointReadOnly.x

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3981

___

### y

• **y**: `number`

#### Overrides

DOMPointReadOnly.y

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3982

___

### z

• **z**: `number`

#### Overrides

DOMPointReadOnly.z

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3983

## Methods

### matrixTransform

▸ **matrixTransform**(`matrix?`): [`DOMPoint`](../modules/annotation_annotation_layer_state._internal_.md#dompoint)

#### Parameters

| Name | Type |
| :------ | :------ |
| `matrix?` | [`DOMMatrixInit`](annotation_annotation_layer_state._internal_.DOMMatrixInit.md) |

#### Returns

[`DOMPoint`](../modules/annotation_annotation_layer_state._internal_.md#dompoint)

#### Inherited from

DOMPointReadOnly.matrixTransform

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4000

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Inherited from

DOMPointReadOnly.toJSON

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4001
