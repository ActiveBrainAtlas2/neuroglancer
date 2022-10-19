[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/annotation](../modules/neuroglancer_annotation.md) / AxisAlignedBoundingBox

# Interface: AxisAlignedBoundingBox

[neuroglancer/annotation](../modules/neuroglancer_annotation.md).AxisAlignedBoundingBox

## Hierarchy

- [`AnnotationBase`](neuroglancer_annotation.AnnotationBase.md)

  ↳ **`AxisAlignedBoundingBox`**

## Table of contents

### Properties

- [description](neuroglancer_annotation.AxisAlignedBoundingBox.md#description)
- [id](neuroglancer_annotation.AxisAlignedBoundingBox.md#id)
- [parentAnnotationId](neuroglancer_annotation.AxisAlignedBoundingBox.md#parentannotationid)
- [pointA](neuroglancer_annotation.AxisAlignedBoundingBox.md#pointa)
- [pointB](neuroglancer_annotation.AxisAlignedBoundingBox.md#pointb)
- [properties](neuroglancer_annotation.AxisAlignedBoundingBox.md#properties)
- [relatedSegments](neuroglancer_annotation.AxisAlignedBoundingBox.md#relatedsegments)
- [type](neuroglancer_annotation.AxisAlignedBoundingBox.md#type)

## Properties

### description

• `Optional` **description**: ``null`` \| `string`

If equal to `undefined`, then the description is unknown (possibly still being loaded).  If
equal to `null`, then there is no description.

#### Inherited from

[AnnotationBase](neuroglancer_annotation.AnnotationBase.md).[description](neuroglancer_annotation.AnnotationBase.md#description)

#### Defined in

[src/neuroglancer/annotation/index.ts:463](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L463)

___

### id

• **id**: `string`

#### Inherited from

[AnnotationBase](neuroglancer_annotation.AnnotationBase.md).[id](neuroglancer_annotation.AnnotationBase.md#id)

#### Defined in

[src/neuroglancer/annotation/index.ts:465](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L465)

___

### parentAnnotationId

• `Optional` **parentAnnotationId**: `string`

#### Inherited from

[AnnotationBase](neuroglancer_annotation.AnnotationBase.md).[parentAnnotationId](neuroglancer_annotation.AnnotationBase.md#parentannotationid)

#### Defined in

[src/neuroglancer/annotation/index.ts:471](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L471)

___

### pointA

• **pointA**: `Float32Array`

#### Defined in

[src/neuroglancer/annotation/index.ts:486](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L486)

___

### pointB

• **pointB**: `Float32Array`

#### Defined in

[src/neuroglancer/annotation/index.ts:487](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L487)

___

### properties

• **properties**: `any`[]

#### Inherited from

[AnnotationBase](neuroglancer_annotation.AnnotationBase.md).[properties](neuroglancer_annotation.AnnotationBase.md#properties)

#### Defined in

[src/neuroglancer/annotation/index.ts:469](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L469)

___

### relatedSegments

• `Optional` **relatedSegments**: [`Uint64`](../classes/neuroglancer_util_uint64.Uint64.md)[][]

#### Inherited from

[AnnotationBase](neuroglancer_annotation.AnnotationBase.md).[relatedSegments](neuroglancer_annotation.AnnotationBase.md#relatedsegments)

#### Defined in

[src/neuroglancer/annotation/index.ts:468](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L468)

___

### type

• **type**: [`AXIS_ALIGNED_BOUNDING_BOX`](../enums/neuroglancer_annotation.AnnotationType.md#axis_aligned_bounding_box)

#### Overrides

[AnnotationBase](neuroglancer_annotation.AnnotationBase.md).[type](neuroglancer_annotation.AnnotationBase.md#type)

#### Defined in

[src/neuroglancer/annotation/index.ts:488](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L488)
