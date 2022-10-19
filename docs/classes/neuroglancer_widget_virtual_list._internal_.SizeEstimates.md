[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/widget/virtual\_list](../modules/neuroglancer_widget_virtual_list.md) / [<internal\>](../modules/neuroglancer_widget_virtual_list._internal_.md) / SizeEstimates

# Class: SizeEstimates

[neuroglancer/widget/virtual_list](../modules/neuroglancer_widget_virtual_list.md).[<internal>](../modules/neuroglancer_widget_virtual_list._internal_.md).SizeEstimates

## Table of contents

### Constructors

- [constructor](neuroglancer_widget_virtual_list._internal_.SizeEstimates.md#constructor)

### Properties

- [itemSize](neuroglancer_widget_virtual_list._internal_.SizeEstimates.md#itemsize)
- [numItemsInTotalKnownSize](neuroglancer_widget_virtual_list._internal_.SizeEstimates.md#numitemsintotalknownsize)
- [totalKnownSize](neuroglancer_widget_virtual_list._internal_.SizeEstimates.md#totalknownsize)

### Accessors

- [averageSize](neuroglancer_widget_virtual_list._internal_.SizeEstimates.md#averagesize)

### Methods

- [getEstimatedOffset](neuroglancer_widget_virtual_list._internal_.SizeEstimates.md#getestimatedoffset)
- [getEstimatedSize](neuroglancer_widget_virtual_list._internal_.SizeEstimates.md#getestimatedsize)
- [getEstimatedTotalSize](neuroglancer_widget_virtual_list._internal_.SizeEstimates.md#getestimatedtotalsize)
- [getRangeSize](neuroglancer_widget_virtual_list._internal_.SizeEstimates.md#getrangesize)
- [splice](neuroglancer_widget_virtual_list._internal_.SizeEstimates.md#splice)

## Constructors

### constructor

• **new SizeEstimates**()

## Properties

### itemSize

• **itemSize**: `number`[] = `[]`

If height of item `i` has already been determined, it is set in `itemSize[i]`.  Otherwise,
`itemSize[i]` is `undefined`.

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:79](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/virtual_list.ts#L79)

___

### numItemsInTotalKnownSize

• **numItemsInTotalKnownSize**: `number` = `0`

Number of non-`undefined` values in `itemSize`.

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:89](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/virtual_list.ts#L89)

___

### totalKnownSize

• **totalKnownSize**: `number` = `0`

Sum of non-`undefined` values in `itemSize`.

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:84](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/virtual_list.ts#L84)

## Accessors

### averageSize

• `get` **averageSize**(): `number`

#### Returns

`number`

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:91](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/virtual_list.ts#L91)

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

[src/neuroglancer/widget/virtual_list.ts:103](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/virtual_list.ts#L103)

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

[src/neuroglancer/widget/virtual_list.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/virtual_list.ts#L95)

___

### getEstimatedTotalSize

▸ **getEstimatedTotalSize**(): `number`

#### Returns

`number`

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:99](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/virtual_list.ts#L99)

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

[src/neuroglancer/widget/virtual_list.ts:113](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/virtual_list.ts#L113)

___

### splice

▸ **splice**(`splices`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `splices` | readonly [`Readonly`](../modules/neuroglancer_annotation_frontend_source._internal_.md#readonly)<[`ArraySpliceOp`](../interfaces/neuroglancer_util_array.ArraySpliceOp.md)\>[] |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/virtual_list.ts:122](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/virtual_list.ts#L122)
