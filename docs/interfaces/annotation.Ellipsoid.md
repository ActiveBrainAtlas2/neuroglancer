[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation](../modules/annotation.md) / Ellipsoid

# Interface: Ellipsoid

[annotation](../modules/annotation.md).Ellipsoid

## Hierarchy

- [`AnnotationBase`](annotation.AnnotationBase.md)

  ↳ **`Ellipsoid`**

## Table of contents

### Properties

- [center](annotation.Ellipsoid.md#center)
- [description](annotation.Ellipsoid.md#description)
- [id](annotation.Ellipsoid.md#id)
- [parentAnnotationId](annotation.Ellipsoid.md#parentannotationid)
- [properties](annotation.Ellipsoid.md#properties)
- [radii](annotation.Ellipsoid.md#radii)
- [relatedSegments](annotation.Ellipsoid.md#relatedsegments)
- [type](annotation.Ellipsoid.md#type)

## Properties

### center

• **center**: `Float32Array`

#### Defined in

[src/neuroglancer/annotation/index.ts:492](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L492)

___

### description

• `Optional` **description**: ``null`` \| `string`

If equal to `undefined`, then the description is unknown (possibly still being loaded).  If
equal to `null`, then there is no description.

#### Inherited from

[AnnotationBase](annotation.AnnotationBase.md).[description](annotation.AnnotationBase.md#description)

#### Defined in

[src/neuroglancer/annotation/index.ts:463](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L463)

___

### id

• **id**: `string`

#### Inherited from

[AnnotationBase](annotation.AnnotationBase.md).[id](annotation.AnnotationBase.md#id)

#### Defined in

[src/neuroglancer/annotation/index.ts:465](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L465)

___

### parentAnnotationId

• `Optional` **parentAnnotationId**: `string`

#### Inherited from

[AnnotationBase](annotation.AnnotationBase.md).[parentAnnotationId](annotation.AnnotationBase.md#parentannotationid)

#### Defined in

[src/neuroglancer/annotation/index.ts:471](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L471)

___

### properties

• **properties**: `any`[]

#### Inherited from

[AnnotationBase](annotation.AnnotationBase.md).[properties](annotation.AnnotationBase.md#properties)

#### Defined in

[src/neuroglancer/annotation/index.ts:469](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L469)

___

### radii

• **radii**: `Float32Array`

#### Defined in

[src/neuroglancer/annotation/index.ts:493](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L493)

___

### relatedSegments

• `Optional` **relatedSegments**: [`Uint64`](../classes/util_uint64.Uint64.md)[][]

#### Inherited from

[AnnotationBase](annotation.AnnotationBase.md).[relatedSegments](annotation.AnnotationBase.md#relatedsegments)

#### Defined in

[src/neuroglancer/annotation/index.ts:468](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L468)

___

### type

• **type**: [`ELLIPSOID`](../enums/annotation.AnnotationType.md#ellipsoid)

#### Overrides

[AnnotationBase](annotation.AnnotationBase.md).[type](annotation.AnnotationBase.md#type)

#### Defined in

[src/neuroglancer/annotation/index.ts:494](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L494)
