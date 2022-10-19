[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / TimeRanges

# Interface: TimeRanges

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).TimeRanges

Used to represent a set of time ranges, primarily for the purpose of tracking which portions of media have been buffered when loading it for use by the <audio> and <video> elements.

## Table of contents

### Properties

- [length](annotation_annotation_layer_state._internal_.TimeRanges.md#length)

### Methods

- [end](annotation_annotation_layer_state._internal_.TimeRanges.md#end)
- [start](annotation_annotation_layer_state._internal_.TimeRanges.md#start)

## Properties

### length

• `Readonly` **length**: `number`

Returns the number of ranges in the object.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14191

## Methods

### end

▸ **end**(`index`): `number`

Returns the time for the end of the range with the given index.

Throws an "IndexSizeError" DOMException if the index is out of range.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14197

___

### start

▸ **start**(`index`): `number`

Returns the time for the start of the range with the given index.

Throws an "IndexSizeError" DOMException if the index is out of range.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14203
