[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/annotation](../modules/neuroglancer_annotation.md) / Ellipsoid

# Interface: Ellipsoid

[neuroglancer/annotation](../modules/neuroglancer_annotation.md).Ellipsoid

## Hierarchy

- [`AnnotationBase`](neuroglancer_annotation.AnnotationBase.md)

  ↳ **`Ellipsoid`**

## Table of contents

### Properties

- [center](neuroglancer_annotation.Ellipsoid.md#center)
- [description](neuroglancer_annotation.Ellipsoid.md#description)
- [id](neuroglancer_annotation.Ellipsoid.md#id)
- [parentAnnotationId](neuroglancer_annotation.Ellipsoid.md#parentannotationid)
- [properties](neuroglancer_annotation.Ellipsoid.md#properties)
- [radii](neuroglancer_annotation.Ellipsoid.md#radii)
- [relatedSegments](neuroglancer_annotation.Ellipsoid.md#relatedsegments)
- [type](neuroglancer_annotation.Ellipsoid.md#type)

## Properties

### center

• **center**: `Float32Array`

#### Defined in

[src/neuroglancer/annotation/index.ts:492](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L492)

___

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

### properties

• **properties**: `any`[]

#### Inherited from

[AnnotationBase](neuroglancer_annotation.AnnotationBase.md).[properties](neuroglancer_annotation.AnnotationBase.md#properties)

#### Defined in

[src/neuroglancer/annotation/index.ts:469](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L469)

___

### radii

• **radii**: `Float32Array`

#### Defined in

[src/neuroglancer/annotation/index.ts:493](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L493)

___

### relatedSegments

• `Optional` **relatedSegments**: [`Uint64`](../classes/neuroglancer_util_uint64.Uint64.md)[][]

#### Inherited from

[AnnotationBase](neuroglancer_annotation.AnnotationBase.md).[relatedSegments](neuroglancer_annotation.AnnotationBase.md#relatedsegments)

#### Defined in

[src/neuroglancer/annotation/index.ts:468](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L468)

___

### type

• **type**: [`ELLIPSOID`](../enums/neuroglancer_annotation.AnnotationType.md#ellipsoid)

#### Overrides

[AnnotationBase](neuroglancer_annotation.AnnotationBase.md).[type](neuroglancer_annotation.AnnotationBase.md#type)

#### Defined in

[src/neuroglancer/annotation/index.ts:494](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L494)
