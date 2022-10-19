[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/annotation](../modules/neuroglancer_annotation.md) / Polygon

# Interface: Polygon

[neuroglancer/annotation](../modules/neuroglancer_annotation.md).Polygon

## Hierarchy

- [`Collection`](neuroglancer_annotation.Collection.md)

  ↳ **`Polygon`**

## Table of contents

### Properties

- [childAnnotationIds](neuroglancer_annotation.Polygon.md#childannotationids)
- [childrenVisible](neuroglancer_annotation.Polygon.md#childrenvisible)
- [description](neuroglancer_annotation.Polygon.md#description)
- [id](neuroglancer_annotation.Polygon.md#id)
- [parentAnnotationId](neuroglancer_annotation.Polygon.md#parentannotationid)
- [properties](neuroglancer_annotation.Polygon.md#properties)
- [relatedSegments](neuroglancer_annotation.Polygon.md#relatedsegments)
- [source](neuroglancer_annotation.Polygon.md#source)
- [type](neuroglancer_annotation.Polygon.md#type)

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

• **type**: [`POLYGON`](../enums/neuroglancer_annotation.AnnotationType.md#polygon)

#### Overrides

[Collection](neuroglancer_annotation.Collection.md).[type](neuroglancer_annotation.Collection.md#type)

#### Defined in

[src/neuroglancer/annotation/index.ts:504](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L504)
