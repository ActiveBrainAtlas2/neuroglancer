[neuroglancer](../README.md) / [Modules](../modules.md) / [widget/virtual\_list](../modules/widget_virtual_list.md) / [<internal\>](../modules/widget_virtual_list._internal_.md) / SizeEstimates

# Class: SizeEstimates

[widget/virtual_list](../modules/widget_virtual_list.md).[<internal>](../modules/widget_virtual_list._internal_.md).SizeEstimates

## Table of contents

### Constructors

- [constructor](widget_virtual_list._internal_.SizeEstimates.md#constructor)

### Properties

- [itemSize](widget_virtual_list._internal_.SizeEstimates.md#itemsize)
- [numItemsInTotalKnownSize](widget_virtual_list._internal_.SizeEstimates.md#numitemsintotalknownsize)
- [totalKnownSize](widget_virtual_list._internal_.SizeEstimates.md#totalknownsize)

### Accessors

- [averageSize](widget_virtual_list._internal_.SizeEstimates.md#averagesize)

### Methods

- [getEstimatedOffset](widget_virtual_list._internal_.SizeEstimates.md#getestimatedoffset)
- [getEstimatedSize](widget_virtual_list._internal_.SizeEstimates.md#getestimatedsize)
- [getEstimatedTotalSize](widget_virtual_list._internal_.SizeEstimates.md#getestimatedtotalsize)
- [getRangeSize](widget_virtual_list._internal_.SizeEstimates.md#getrangesize)
- [splice](widget_virtual_list._internal_.SizeEstimates.md#splice)

## Constructors

### constructor

• **new SizeEstimates**()

## Properties

### itemSize

• **itemSize**: `number`[] = `[]`

If height of item `i` has already been determined, it is set in `itemSize[i]`.  Otherwise,
`itemSize[i]` is `undefined`.

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:79](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/virtual_list.ts#L79)

___

### numItemsInTotalKnownSize

• **numItemsInTotalKnownSize**: `number` = `0`

Number of non-`undefined` values in `itemSize`.

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:89](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/virtual_list.ts#L89)

___

### totalKnownSize

• **totalKnownSize**: `number` = `0`

Sum of non-`undefined` values in `itemSize`.

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:84](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/virtual_list.ts#L84)

## Accessors

### averageSize

• `get` **averageSize**(): `number`

#### Returns

`number`

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:91](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/virtual_list.ts#L91)

## Methods

### getEstimatedOffset

▸ **getEstimatedOffset**(`index`, `hintIndex?`, `hintOffset?`): `number`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `index` | `number` | `undefined` |
| `hintIndex` | `number` | `0` |
| `hintOffset` | `number` | `0` |

#### Returns

`number`

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:103](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/virtual_list.ts#L103)

___

### getEstimatedSize

▸ **getEstimatedSize**(`index`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`number`

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/virtual_list.ts#L95)

___

### getEstimatedTotalSize

▸ **getEstimatedTotalSize**(): `number`

#### Returns

`number`

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:99](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/virtual_list.ts#L99)

___

### getRangeSize

▸ **getRangeSize**(`begin`, `end`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `begin` | `number` |
| `end` | `number` |

#### Returns

`number`

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:113](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/virtual_list.ts#L113)

___

### splice

▸ **splice**(`splices`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `splices` | readonly [`Readonly`](../modules/annotation_annotation_layer_state._internal_.md#readonly)<[`ArraySpliceOp`](../interfaces/util_array.ArraySpliceOp.md)\>[] |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:122](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/virtual_list.ts#L122)
