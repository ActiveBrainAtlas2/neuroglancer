[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/annotation](../modules/neuroglancer_annotation.md) / AnnotationBase

# Interface: AnnotationBase

[neuroglancer/annotation](../modules/neuroglancer_annotation.md).AnnotationBase

## Hierarchy

- **`AnnotationBase`**

  ↳ [`Line`](neuroglancer_annotation.Line.md)

  ↳ [`Point`](neuroglancer_annotation.Point.md)

  ↳ [`AxisAlignedBoundingBox`](neuroglancer_annotation.AxisAlignedBoundingBox.md)

  ↳ [`Ellipsoid`](neuroglancer_annotation.Ellipsoid.md)

  ↳ [`Collection`](neuroglancer_annotation.Collection.md)

  ↳ [`Com`](neuroglancer_annotation.Com.md)

  ↳ [`Cell`](neuroglancer_annotation.Cell.md)

## Table of contents

### Properties

- [description](neuroglancer_annotation.AnnotationBase.md#description)
- [id](neuroglancer_annotation.AnnotationBase.md#id)
- [parentAnnotationId](neuroglancer_annotation.AnnotationBase.md#parentannotationid)
- [properties](neuroglancer_annotation.AnnotationBase.md#properties)
- [relatedSegments](neuroglancer_annotation.AnnotationBase.md#relatedsegments)
- [type](neuroglancer_annotation.AnnotationBase.md#type)

## Properties

### description

• `Optional` **description**: ``null`` \| `string`

If equal to `undefined`, then the description is unknown (possibly still being loaded).  If
equal to `null`, then there is no description.

#### Defined in

[src/neuroglancer/annotation/index.ts:463](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L463)

___

### id

• **id**: `string`

#### Defined in

[src/neuroglancer/annotation/index.ts:465](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L465)

___

### parentAnnotationId

• `Optional` **parentAnnotationId**: `string`

#### Defined in

[src/neuroglancer/annotation/index.ts:471](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L471)

___

### properties

• **properties**: `any`[]

#### Defined in

[src/neuroglancer/annotation/index.ts:469](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L469)

___

### relatedSegments

• `Optional` **relatedSegments**: [`Uint64`](../classes/neuroglancer_util_uint64.Uint64.md)[][]

#### Defined in

[src/neuroglancer/annotation/index.ts:468](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L468)

___

### type

• **type**: [`AnnotationType`](../enums/neuroglancer_annotation.AnnotationType.md)

#### Defined in

[src/neuroglancer/annotation/index.ts:466](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L466)
