[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation](../modules/annotation.md) / Cell

# Interface: Cell

[annotation](../modules/annotation.md).Cell

## Hierarchy

- [`AnnotationBase`](annotation.AnnotationBase.md)

  ↳ **`Cell`**

## Table of contents

### Properties

- [category](annotation.Cell.md#category)
- [description](annotation.Cell.md#description)
- [id](annotation.Cell.md#id)
- [parentAnnotationId](annotation.Cell.md#parentannotationid)
- [point](annotation.Cell.md#point)
- [properties](annotation.Cell.md#properties)
- [relatedSegments](annotation.Cell.md#relatedsegments)
- [type](annotation.Cell.md#type)

## Properties

### category

• `Optional` **category**: `string`

#### Defined in

[src/neuroglancer/annotation/index.ts:518](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L518)

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

### point

• **point**: `Float32Array`

#### Defined in

[src/neuroglancer/annotation/index.ts:517](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L517)

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

• **type**: [`CELL`](../enums/annotation.AnnotationType.md#cell)

#### Overrides

[AnnotationBase](annotation.AnnotationBase.md).[type](annotation.AnnotationBase.md#type)

#### Defined in

[src/neuroglancer/annotation/index.ts:519](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L519)
