[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/annotation](../modules/neuroglancer_annotation.md) / Volume

# Interface: Volume

[neuroglancer/annotation](../modules/neuroglancer_annotation.md).Volume

## Hierarchy

- [`Collection`](neuroglancer_annotation.Collection.md)

  ↳ **`Volume`**

## Table of contents

### Properties

- [childAnnotationIds](neuroglancer_annotation.Volume.md#childannotationids)
- [childrenVisible](neuroglancer_annotation.Volume.md#childrenvisible)
- [description](neuroglancer_annotation.Volume.md#description)
- [id](neuroglancer_annotation.Volume.md#id)
- [parentAnnotationId](neuroglancer_annotation.Volume.md#parentannotationid)
- [properties](neuroglancer_annotation.Volume.md#properties)
- [relatedSegments](neuroglancer_annotation.Volume.md#relatedsegments)
- [source](neuroglancer_annotation.Volume.md#source)
- [type](neuroglancer_annotation.Volume.md#type)

## Properties

### childAnnotationIds

• **childAnnotationIds**: `string`[]

#### Inherited from

[Collection](neuroglancer_annotation.Collection.md).[childAnnotationIds](neuroglancer_annotation.Collection.md#childannotationids)

#### Defined in

[src/neuroglancer/annotation/index.ts:499](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L499)

___

### childrenVisible

• **childrenVisible**: `boolean`

#### Inherited from

[Collection](neuroglancer_annotation.Collection.md).[childrenVisible](neuroglancer_annotation.Collection.md#childrenvisible)

#### Defined in

[src/neuroglancer/annotation/index.ts:500](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L500)

___

### description

• `Optional` **description**: ``null`` \| `string`

If equal to `undefined`, then the description is unknown (possibly still being loaded).  If
equal to `null`, then there is no description.

#### Inherited from

[Collection](neuroglancer_annotation.Collection.md).[description](neuroglancer_annotation.Collection.md#description)

#### Defined in

[src/neuroglancer/annotation/index.ts:463](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L463)

___

### id

• **id**: `string`

#### Inherited from

[Collection](neuroglancer_annotation.Collection.md).[id](neuroglancer_annotation.Collection.md#id)

#### Defined in

[src/neuroglancer/annotation/index.ts:465](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L465)

___

### parentAnnotationId

• `Optional` **parentAnnotationId**: `string`

#### Inherited from

[Collection](neuroglancer_annotation.Collection.md).[parentAnnotationId](neuroglancer_annotation.Collection.md#parentannotationid)

#### Defined in

[src/neuroglancer/annotation/index.ts:471](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L471)

___

### properties

• **properties**: `any`[]

#### Inherited from

[Collection](neuroglancer_annotation.Collection.md).[properties](neuroglancer_annotation.Collection.md#properties)

#### Defined in

[src/neuroglancer/annotation/index.ts:469](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L469)

___

### relatedSegments

• `Optional` **relatedSegments**: [`Uint64`](../classes/neuroglancer_util_uint64.Uint64.md)[][]

#### Inherited from

[Collection](neuroglancer_annotation.Collection.md).[relatedSegments](neuroglancer_annotation.Collection.md#relatedsegments)

#### Defined in

[src/neuroglancer/annotation/index.ts:468](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L468)

___

### source

• **source**: `Float32Array`

#### Inherited from

[Collection](neuroglancer_annotation.Collection.md).[source](neuroglancer_annotation.Collection.md#source)

#### Defined in

[src/neuroglancer/annotation/index.ts:498](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L498)

___

### type

• **type**: [`VOLUME`](../enums/neuroglancer_annotation.AnnotationType.md#volume)

#### Overrides

[Collection](neuroglancer_annotation.Collection.md).[type](neuroglancer_annotation.Collection.md#type)

#### Defined in

[src/neuroglancer/annotation/index.ts:508](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L508)
