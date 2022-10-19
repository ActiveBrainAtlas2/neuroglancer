[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation](../modules/annotation.md) / Line

# Interface: Line

[annotation](../modules/annotation.md).Line

## Hierarchy

- [`AnnotationBase`](annotation.AnnotationBase.md)

  ↳ **`Line`**

## Table of contents

### Properties

- [description](annotation.Line.md#description)
- [id](annotation.Line.md#id)
- [parentAnnotationId](annotation.Line.md#parentannotationid)
- [pointA](annotation.Line.md#pointa)
- [pointB](annotation.Line.md#pointb)
- [properties](annotation.Line.md#properties)
- [relatedSegments](annotation.Line.md#relatedsegments)
- [type](annotation.Line.md#type)

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

### pointA

• **pointA**: `Float32Array`

#### Defined in

[src/neuroglancer/annotation/index.ts:475](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L475)

___

### pointB

• **pointB**: `Float32Array`

#### Defined in

[src/neuroglancer/annotation/index.ts:476](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L476)

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

• **type**: [`LINE`](../enums/annotation.AnnotationType.md#line)

#### Overrides

[AnnotationBase](annotation.AnnotationBase.md).[type](annotation.AnnotationBase.md#type)

#### Defined in

[src/neuroglancer/annotation/index.ts:477](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L477)
