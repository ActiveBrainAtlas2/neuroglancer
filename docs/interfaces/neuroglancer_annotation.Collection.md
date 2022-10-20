[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/annotation](../modules/neuroglancer_annotation.md) / Collection

# Interface: Collection

[neuroglancer/annotation](../modules/neuroglancer_annotation.md).Collection

## Hierarchy

- [`AnnotationBase`](neuroglancer_annotation.AnnotationBase.md)

  ↳ **`Collection`**

  ↳↳ [`Polygon`](neuroglancer_annotation.Polygon.md)

  ↳↳ [`Volume`](neuroglancer_annotation.Volume.md)

## Table of contents

### Properties

- [childAnnotationIds](neuroglancer_annotation.Collection.md#childannotationids)
- [childrenVisible](neuroglancer_annotation.Collection.md#childrenvisible)
- [description](neuroglancer_annotation.Collection.md#description)
- [id](neuroglancer_annotation.Collection.md#id)
- [parentAnnotationId](neuroglancer_annotation.Collection.md#parentannotationid)
- [properties](neuroglancer_annotation.Collection.md#properties)
- [relatedSegments](neuroglancer_annotation.Collection.md#relatedsegments)
- [source](neuroglancer_annotation.Collection.md#source)
- [type](neuroglancer_annotation.Collection.md#type)

## Properties

### childAnnotationIds

• **childAnnotationIds**: `string`[]

#### Defined in

[src/neuroglancer/annotation/index.ts:499](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/index.ts#L499)

___

### childrenVisible

• **childrenVisible**: `boolean`

#### Defined in

[src/neuroglancer/annotation/index.ts:500](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/index.ts#L500)

___

### description

• `Optional` **description**: ``null`` \| `string`

If equal to `undefined`, then the description is unknown (possibly still being loaded).  If
equal to `null`, then there is no description.

#### Inherited from

[AnnotationBase](neuroglancer_annotation.AnnotationBase.md).[description](neuroglancer_annotation.AnnotationBase.md#description)

#### Defined in

[src/neuroglancer/annotation/index.ts:463](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/index.ts#L463)

___

### id

• **id**: `string`

#### Inherited from

[AnnotationBase](neuroglancer_annotation.AnnotationBase.md).[id](neuroglancer_annotation.AnnotationBase.md#id)

#### Defined in

[src/neuroglancer/annotation/index.ts:465](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/index.ts#L465)

___

### parentAnnotationId

• `Optional` **parentAnnotationId**: `string`

#### Inherited from

[AnnotationBase](neuroglancer_annotation.AnnotationBase.md).[parentAnnotationId](neuroglancer_annotation.AnnotationBase.md#parentannotationid)

#### Defined in

[src/neuroglancer/annotation/index.ts:471](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/index.ts#L471)

___

### properties

• **properties**: `any`[]

#### Inherited from

[AnnotationBase](neuroglancer_annotation.AnnotationBase.md).[properties](neuroglancer_annotation.AnnotationBase.md#properties)

#### Defined in

[src/neuroglancer/annotation/index.ts:469](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/index.ts#L469)

___

### relatedSegments

• `Optional` **relatedSegments**: [`Uint64`](../classes/neuroglancer_util_uint64.Uint64.md)[][]

#### Inherited from

[AnnotationBase](neuroglancer_annotation.AnnotationBase.md).[relatedSegments](neuroglancer_annotation.AnnotationBase.md#relatedsegments)

#### Defined in

[src/neuroglancer/annotation/index.ts:468](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/index.ts#L468)

___

### source

• **source**: `Float32Array`

#### Defined in

[src/neuroglancer/annotation/index.ts:498](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/index.ts#L498)

___

### type

• **type**: [`AnnotationType`](../enums/neuroglancer_annotation.AnnotationType.md)

#### Inherited from

[AnnotationBase](neuroglancer_annotation.AnnotationBase.md).[type](neuroglancer_annotation.AnnotationBase.md#type)

#### Defined in

[src/neuroglancer/annotation/index.ts:466](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/index.ts#L466)
