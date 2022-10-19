[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation](../modules/annotation.md) / AnnotationBase

# Interface: AnnotationBase

[annotation](../modules/annotation.md).AnnotationBase

## Hierarchy

- **`AnnotationBase`**

  ↳ [`Line`](annotation.Line.md)

  ↳ [`Point`](annotation.Point.md)

  ↳ [`AxisAlignedBoundingBox`](annotation.AxisAlignedBoundingBox.md)

  ↳ [`Ellipsoid`](annotation.Ellipsoid.md)

  ↳ [`Collection`](annotation.Collection.md)

  ↳ [`Com`](annotation.Com.md)

  ↳ [`Cell`](annotation.Cell.md)

## Table of contents

### Properties

- [description](annotation.AnnotationBase.md#description)
- [id](annotation.AnnotationBase.md#id)
- [parentAnnotationId](annotation.AnnotationBase.md#parentannotationid)
- [properties](annotation.AnnotationBase.md#properties)
- [relatedSegments](annotation.AnnotationBase.md#relatedsegments)
- [type](annotation.AnnotationBase.md#type)

## Properties

### description

• `Optional` **description**: ``null`` \| `string`

If equal to `undefined`, then the description is unknown (possibly still being loaded).  If
equal to `null`, then there is no description.

#### Defined in

[src/neuroglancer/annotation/index.ts:463](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L463)

___

### id

• **id**: `string`

#### Defined in

[src/neuroglancer/annotation/index.ts:465](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L465)

___

### parentAnnotationId

• `Optional` **parentAnnotationId**: `string`

#### Defined in

[src/neuroglancer/annotation/index.ts:471](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L471)

___

### properties

• **properties**: `any`[]

#### Defined in

[src/neuroglancer/annotation/index.ts:469](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L469)

___

### relatedSegments

• `Optional` **relatedSegments**: [`Uint64`](../classes/util_uint64.Uint64.md)[][]

#### Defined in

[src/neuroglancer/annotation/index.ts:468](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L468)

___

### type

• **type**: [`AnnotationType`](../enums/annotation.AnnotationType.md)

#### Defined in

[src/neuroglancer/annotation/index.ts:466](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L466)
