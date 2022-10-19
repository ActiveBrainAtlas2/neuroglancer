[neuroglancer](../README.md) / [Modules](../modules.md) / [axes\_lines](../modules/axes_lines.md) / [<internal\>](../modules/axes_lines._internal_.md) / TimeRanges

# Interface: TimeRanges

[axes_lines](../modules/axes_lines.md).[<internal>](../modules/axes_lines._internal_.md).TimeRanges

Used to represent a set of time ranges, primarily for the purpose of tracking which portions of media have been buffered when loading it for use by the <audio> and <video> elements.

## Table of contents

### Properties

- [length](axes_lines._internal_.TimeRanges.md#length)

### Methods

- [end](axes_lines._internal_.TimeRanges.md#end)
- [start](axes_lines._internal_.TimeRanges.md#start)

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
