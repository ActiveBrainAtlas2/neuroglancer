[neuroglancer](../README.md) / [Modules](../modules.md) / [image\_user\_layer](../modules/image_user_layer.md) / [<internal\>](../modules/image_user_layer._internal_.md) / Polygon

# Interface: Polygon

[image_user_layer](../modules/image_user_layer.md).[<internal>](../modules/image_user_layer._internal_.md).Polygon

## Hierarchy

- [`Collection`](image_user_layer._internal_.Collection.md)

  ↳ **`Polygon`**

## Table of contents

### Properties

- [childAnnotationIds](image_user_layer._internal_.Polygon.md#childannotationids)
- [childrenVisible](image_user_layer._internal_.Polygon.md#childrenvisible)
- [description](image_user_layer._internal_.Polygon.md#description)
- [id](image_user_layer._internal_.Polygon.md#id)
- [parentAnnotationId](image_user_layer._internal_.Polygon.md#parentannotationid)
- [properties](image_user_layer._internal_.Polygon.md#properties)
- [relatedSegments](image_user_layer._internal_.Polygon.md#relatedsegments)
- [source](image_user_layer._internal_.Polygon.md#source)
- [type](image_user_layer._internal_.Polygon.md#type)

## Properties

### childAnnotationIds

• **childAnnotationIds**: `string`[]

#### Inherited from

[Collection](image_user_layer._internal_.Collection.md).[childAnnotationIds](image_user_layer._internal_.Collection.md#childannotationids)

#### Defined in

[src/neuroglancer/annotation/index.ts:499](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/index.ts#L499)

___

### childrenVisible

• **childrenVisible**: `boolean`

#### Inherited from

[Collection](image_user_layer._internal_.Collection.md).[childrenVisible](image_user_layer._internal_.Collection.md#childrenvisible)

#### Defined in

[src/neuroglancer/annotation/index.ts:500](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/index.ts#L500)

___

### description

• `Optional` **description**: ``null`` \| `string`

If equal to `undefined`, then the description is unknown (possibly still being loaded).  If
equal to `null`, then there is no description.

#### Inherited from

[Collection](image_user_layer._internal_.Collection.md).[description](image_user_layer._internal_.Collection.md#description)

#### Defined in

[src/neuroglancer/annotation/index.ts:463](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/index.ts#L463)

___

### id

• **id**: `string`

#### Inherited from

[Collection](image_user_layer._internal_.Collection.md).[id](image_user_layer._internal_.Collection.md#id)

#### Defined in

[src/neuroglancer/annotation/index.ts:465](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/index.ts#L465)

___

### parentAnnotationId

• `Optional` **parentAnnotationId**: `string`

#### Inherited from

[Collection](image_user_layer._internal_.Collection.md).[parentAnnotationId](image_user_layer._internal_.Collection.md#parentannotationid)

#### Defined in

[src/neuroglancer/annotation/index.ts:471](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/index.ts#L471)

___

### properties

• **properties**: `any`[]

#### Inherited from

[Collection](image_user_layer._internal_.Collection.md).[properties](image_user_layer._internal_.Collection.md#properties)

#### Defined in

[src/neuroglancer/annotation/index.ts:469](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/index.ts#L469)

___

### relatedSegments

• `Optional` **relatedSegments**: [`Uint64`](../classes/data_panel_layout._internal_.Uint64.md)[][]

#### Inherited from

[Collection](image_user_layer._internal_.Collection.md).[relatedSegments](image_user_layer._internal_.Collection.md#relatedsegments)

#### Defined in

[src/neuroglancer/annotation/index.ts:468](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/index.ts#L468)

___

### source

• **source**: `Float32Array`

#### Inherited from

[Collection](image_user_layer._internal_.Collection.md).[source](image_user_layer._internal_.Collection.md#source)

#### Defined in

[src/neuroglancer/annotation/index.ts:498](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/index.ts#L498)

___

### type

• **type**: [`POLYGON`](../enums/image_user_layer._internal_.AnnotationType.md#polygon)

#### Overrides

[Collection](image_user_layer._internal_.Collection.md).[type](image_user_layer._internal_.Collection.md#type)

#### Defined in

[src/neuroglancer/annotation/index.ts:504](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/index.ts#L504)
