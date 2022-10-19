[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation](../modules/annotation.md) / Polygon

# Interface: Polygon

[annotation](../modules/annotation.md).Polygon

## Hierarchy

- [`Collection`](annotation.Collection.md)

  ↳ **`Polygon`**

## Table of contents

### Properties

- [childAnnotationIds](annotation.Polygon.md#childannotationids)
- [childrenVisible](annotation.Polygon.md#childrenvisible)
- [description](annotation.Polygon.md#description)
- [id](annotation.Polygon.md#id)
- [parentAnnotationId](annotation.Polygon.md#parentannotationid)
- [properties](annotation.Polygon.md#properties)
- [relatedSegments](annotation.Polygon.md#relatedsegments)
- [source](annotation.Polygon.md#source)
- [type](annotation.Polygon.md#type)

## Properties

### childAnnotationIds

• **childAnnotationIds**: `string`[]

#### Inherited from

[Collection](annotation.Collection.md).[childAnnotationIds](annotation.Collection.md#childannotationids)

#### Defined in

[src/neuroglancer/annotation/index.ts:499](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L499)

___

### childrenVisible

• **childrenVisible**: `boolean`

#### Inherited from

[Collection](annotation.Collection.md).[childrenVisible](annotation.Collection.md#childrenvisible)

#### Defined in

[src/neuroglancer/annotation/index.ts:500](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L500)

___

### description

• `Optional` **description**: ``null`` \| `string`

If equal to `undefined`, then the description is unknown (possibly still being loaded).  If
equal to `null`, then there is no description.

#### Inherited from

[Collection](annotation.Collection.md).[description](annotation.Collection.md#description)

#### Defined in

[src/neuroglancer/annotation/index.ts:463](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L463)

___

### id

• **id**: `string`

#### Inherited from

[Collection](annotation.Collection.md).[id](annotation.Collection.md#id)

#### Defined in

[src/neuroglancer/annotation/index.ts:465](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L465)

___

### parentAnnotationId

• `Optional` **parentAnnotationId**: `string`

#### Inherited from

[Collection](annotation.Collection.md).[parentAnnotationId](annotation.Collection.md#parentannotationid)

#### Defined in

[src/neuroglancer/annotation/index.ts:471](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L471)

___

### properties

• **properties**: `any`[]

#### Inherited from

[Collection](annotation.Collection.md).[properties](annotation.Collection.md#properties)

#### Defined in

[src/neuroglancer/annotation/index.ts:469](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L469)

___

### relatedSegments

• `Optional` **relatedSegments**: [`Uint64`](../classes/util_uint64.Uint64.md)[][]

#### Inherited from

[Collection](annotation.Collection.md).[relatedSegments](annotation.Collection.md#relatedsegments)

#### Defined in

[src/neuroglancer/annotation/index.ts:468](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L468)

___

### source

• **source**: `Float32Array`

#### Inherited from

[Collection](annotation.Collection.md).[source](annotation.Collection.md#source)

#### Defined in

[src/neuroglancer/annotation/index.ts:498](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L498)

___

### type

• **type**: [`POLYGON`](../enums/annotation.AnnotationType.md#polygon)

#### Overrides

[Collection](annotation.Collection.md).[type](annotation.Collection.md#type)

#### Defined in

[src/neuroglancer/annotation/index.ts:504](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L504)
