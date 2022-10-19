[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / CoordinateSpace

# Interface: CoordinateSpace

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).CoordinateSpace

## Table of contents

### Properties

- [boundingBoxes](annotation_annotation_layer_state._internal_.CoordinateSpace.md#boundingboxes)
- [bounds](annotation_annotation_layer_state._internal_.CoordinateSpace.md#bounds)
- [coordinateArrays](annotation_annotation_layer_state._internal_.CoordinateSpace.md#coordinatearrays)
- [ids](annotation_annotation_layer_state._internal_.CoordinateSpace.md#ids)
- [names](annotation_annotation_layer_state._internal_.CoordinateSpace.md#names)
- [rank](annotation_annotation_layer_state._internal_.CoordinateSpace.md#rank)
- [scales](annotation_annotation_layer_state._internal_.CoordinateSpace.md#scales)
- [timestamps](annotation_annotation_layer_state._internal_.CoordinateSpace.md#timestamps)
- [units](annotation_annotation_layer_state._internal_.CoordinateSpace.md#units)
- [valid](annotation_annotation_layer_state._internal_.CoordinateSpace.md#valid)

## Properties

### boundingBoxes

• `Readonly` **boundingBoxes**: readonly [`TransformedBoundingBox`](annotation_annotation_layer_state._internal_.TransformedBoundingBox.md)[]

#### Defined in

[src/neuroglancer/coordinate_transform.ts:79](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/coordinate_transform.ts#L79)

___

### bounds

• `Readonly` **bounds**: [`BoundingBox`](annotation_annotation_layer_state._internal_.BoundingBox.md)

#### Defined in

[src/neuroglancer/coordinate_transform.ts:78](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/coordinate_transform.ts#L78)

___

### coordinateArrays

• `Readonly` **coordinateArrays**: (`undefined` \| [`CoordinateArray`](annotation_annotation_layer_state._internal_.CoordinateArray.md))[]

#### Defined in

[src/neuroglancer/coordinate_transform.ts:81](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/coordinate_transform.ts#L81)

___

### ids

• `Readonly` **ids**: readonly `number`[]

#### Defined in

[src/neuroglancer/coordinate_transform.ts:59](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/coordinate_transform.ts#L59)

___

### names

• `Readonly` **names**: readonly `string`[]

Specifies the name of each dimension.

#### Defined in

[src/neuroglancer/coordinate_transform.ts:57](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/coordinate_transform.ts#L57)

___

### rank

• `Readonly` **rank**: `number`

#### Defined in

[src/neuroglancer/coordinate_transform.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/coordinate_transform.ts#L52)

___

### scales

• `Readonly` **scales**: `Float64Array`

Specifies a scale for this dimension.

#### Defined in

[src/neuroglancer/coordinate_transform.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/coordinate_transform.ts#L76)

___

### timestamps

• `Readonly` **timestamps**: readonly `number`[]

Timestamp of last user action that changed the name, scale, or unit of each dimension, or
`undefined` if there was no user action.

#### Defined in

[src/neuroglancer/coordinate_transform.ts:65](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/coordinate_transform.ts#L65)

___

### units

• `Readonly` **units**: readonly `string`[]

Specifies the physical units corresponding to this dimension.  May be empty to indicate
unitless.

#### Defined in

[src/neuroglancer/coordinate_transform.ts:71](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/coordinate_transform.ts#L71)

___

### valid

• `Readonly` **valid**: `boolean`

If `true`, has been fully initialized (i.e. based on at least one data source).  If `false`,
may be partially initialized.

#### Defined in

[src/neuroglancer/coordinate_transform.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/coordinate_transform.ts#L50)
