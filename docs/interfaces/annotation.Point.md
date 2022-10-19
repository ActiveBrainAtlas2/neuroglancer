[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation](../modules/annotation.md) / Point

# Interface: Point

[annotation](../modules/annotation.md).Point

## Hierarchy

- [`AnnotationBase`](annotation.AnnotationBase.md)

  ↳ **`Point`**

## Table of contents

### Properties

- [description](annotation.Point.md#description)
- [id](annotation.Point.md#id)
- [parentAnnotationId](annotation.Point.md#parentannotationid)
- [point](annotation.Point.md#point)
- [properties](annotation.Point.md#properties)
- [relatedSegments](annotation.Point.md#relatedsegments)
- [type](annotation.Point.md#type)

## Properties

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

### point

• **point**: `Float32Array`

#### Defined in

[src/neuroglancer/annotation/index.ts:481](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L481)

___

### properties

• **properties**: `any`[]

#### Inherited from

[AnnotationBase](annotation.AnnotationBase.md).[properties](annotation.AnnotationBase.md#properties)

#### Defined in

[src/neuroglancer/annotation/index.ts:469](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L469)

___

### relatedSegments

• `Optional` **relatedSegments**: [`Uint64`](../classes/util_uint64.Uint64.md)[][]

#### Inherited from

[AnnotationBase](annotation.AnnotationBase.md).[relatedSegments](annotation.AnnotationBase.md#relatedsegments)

#### Defined in

[src/neuroglancer/annotation/index.ts:468](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L468)

___

### type

• **type**: [`POINT`](../enums/annotation.AnnotationType.md#point)

#### Overrides

[AnnotationBase](annotation.AnnotationBase.md).[type](annotation.AnnotationBase.md#type)

#### Defined in

[src/neuroglancer/annotation/index.ts:482](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L482)
