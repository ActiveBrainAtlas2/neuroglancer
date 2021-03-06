[neuroglancer](../README.md) / [Modules](../modules.md) / [coordinate\_transform](../modules/coordinate_transform.md) / CoordinateSpaceTransform

# Interface: CoordinateSpaceTransform

[coordinate_transform](../modules/coordinate_transform.md).CoordinateSpaceTransform

## Table of contents

### Properties

- [inputSpace](coordinate_transform.CoordinateSpaceTransform.md#inputspace)
- [outputSpace](coordinate_transform.CoordinateSpaceTransform.md#outputspace)
- [rank](coordinate_transform.CoordinateSpaceTransform.md#rank)
- [sourceRank](coordinate_transform.CoordinateSpaceTransform.md#sourcerank)
- [transform](coordinate_transform.CoordinateSpaceTransform.md#transform)

## Properties

### inputSpace

• `Readonly` **inputSpace**: [`CoordinateSpace`](coordinate_transform.CoordinateSpace.md)

May have rank less than `outputSpace.rank`, in which case additional unnamed dimensions with
range `[0, 1)` are implicitly added.

#### Defined in

[src/neuroglancer/coordinate_transform.ts:423](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/coordinate_transform.ts#L423)

___

### outputSpace

• `Readonly` **outputSpace**: [`CoordinateSpace`](coordinate_transform.CoordinateSpace.md)

#### Defined in

[src/neuroglancer/coordinate_transform.ts:425](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/coordinate_transform.ts#L425)

___

### rank

• `Readonly` **rank**: `number`

Equal to `outputSpace.rank`.

#### Defined in

[src/neuroglancer/coordinate_transform.ts:411](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/coordinate_transform.ts#L411)

___

### sourceRank

• `Readonly` **sourceRank**: `number`

The source rank, which is <= rank.  Input dimensions >= sourceRank are synthetic and serve only
to embed the source data in a larger view space.

#### Defined in

[src/neuroglancer/coordinate_transform.ts:417](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/coordinate_transform.ts#L417)

___

### transform

• `Readonly` **transform**: `Float64Array`

`(rank + 1) * (rank + 1)` homogeneous column-major transformation matrix, where columns
correspond to input dimensions and rows correspond to output dimensions.

#### Defined in

[src/neuroglancer/coordinate_transform.ts:431](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/coordinate_transform.ts#L431)
