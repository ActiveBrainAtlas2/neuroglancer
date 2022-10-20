[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/coordinate\_transform](../modules/neuroglancer_coordinate_transform.md) / CoordinateSpace

# Interface: CoordinateSpace

[neuroglancer/coordinate_transform](../modules/neuroglancer_coordinate_transform.md).CoordinateSpace

## Table of contents

### Properties

- [boundingBoxes](neuroglancer_coordinate_transform.CoordinateSpace.md#boundingboxes)
- [bounds](neuroglancer_coordinate_transform.CoordinateSpace.md#bounds)
- [coordinateArrays](neuroglancer_coordinate_transform.CoordinateSpace.md#coordinatearrays)
- [ids](neuroglancer_coordinate_transform.CoordinateSpace.md#ids)
- [names](neuroglancer_coordinate_transform.CoordinateSpace.md#names)
- [rank](neuroglancer_coordinate_transform.CoordinateSpace.md#rank)
- [scales](neuroglancer_coordinate_transform.CoordinateSpace.md#scales)
- [timestamps](neuroglancer_coordinate_transform.CoordinateSpace.md#timestamps)
- [units](neuroglancer_coordinate_transform.CoordinateSpace.md#units)
- [valid](neuroglancer_coordinate_transform.CoordinateSpace.md#valid)

## Properties

### boundingBoxes

• `Readonly` **boundingBoxes**: readonly [`TransformedBoundingBox`](neuroglancer_coordinate_transform.TransformedBoundingBox.md)[]

#### Defined in

[src/neuroglancer/coordinate_transform.ts:79](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/coordinate_transform.ts#L79)

___

### bounds

• `Readonly` **bounds**: [`BoundingBox`](neuroglancer_coordinate_transform.BoundingBox.md)

#### Defined in

[src/neuroglancer/coordinate_transform.ts:78](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/coordinate_transform.ts#L78)

___

### coordinateArrays

• `Readonly` **coordinateArrays**: (`undefined` \| [`CoordinateArray`](neuroglancer_coordinate_transform.CoordinateArray.md))[]

#### Defined in

[src/neuroglancer/coordinate_transform.ts:81](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/coordinate_transform.ts#L81)

___

### ids

• `Readonly` **ids**: readonly `number`[]

#### Defined in

[src/neuroglancer/coordinate_transform.ts:59](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/coordinate_transform.ts#L59)

___

### names

• `Readonly` **names**: readonly `string`[]

Specifies the name of each dimension.

#### Defined in

[src/neuroglancer/coordinate_transform.ts:57](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/coordinate_transform.ts#L57)

___

### rank

• `Readonly` **rank**: `number`

#### Defined in

[src/neuroglancer/coordinate_transform.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/coordinate_transform.ts#L52)

___

### scales

• `Readonly` **scales**: `Float64Array`

Specifies a scale for this dimension.

#### Defined in

[src/neuroglancer/coordinate_transform.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/coordinate_transform.ts#L76)

___

### timestamps

• `Readonly` **timestamps**: readonly `number`[]

Timestamp of last user action that changed the name, scale, or unit of each dimension, or
`undefined` if there was no user action.

#### Defined in

[src/neuroglancer/coordinate_transform.ts:65](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/coordinate_transform.ts#L65)

___

### units

• `Readonly` **units**: readonly `string`[]

Specifies the physical units corresponding to this dimension.  May be empty to indicate
unitless.

#### Defined in

[src/neuroglancer/coordinate_transform.ts:71](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/coordinate_transform.ts#L71)

___

### valid

• `Readonly` **valid**: `boolean`

If `true`, has been fully initialized (i.e. based on at least one data source).  If `false`,
may be partially initialized.

#### Defined in

[src/neuroglancer/coordinate_transform.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/coordinate_transform.ts#L50)
