[neuroglancer](../README.md) / [Modules](../modules.md) / [image\_user\_layer](../modules/image_user_layer.md) / [<internal\>](../modules/image_user_layer._internal_.md) / Line

# Interface: Line

[image_user_layer](../modules/image_user_layer.md).[<internal>](../modules/image_user_layer._internal_.md).Line

## Hierarchy

- [`AnnotationBase`](image_user_layer._internal_.AnnotationBase.md)

  ↳ **`Line`**

## Table of contents

### Properties

- [description](image_user_layer._internal_.Line.md#description)
- [id](image_user_layer._internal_.Line.md#id)
- [parentAnnotationId](image_user_layer._internal_.Line.md#parentannotationid)
- [pointA](image_user_layer._internal_.Line.md#pointa)
- [pointB](image_user_layer._internal_.Line.md#pointb)
- [properties](image_user_layer._internal_.Line.md#properties)
- [relatedSegments](image_user_layer._internal_.Line.md#relatedsegments)
- [type](image_user_layer._internal_.Line.md#type)

## Properties

### description

• `Optional` **description**: ``null`` \| `string`

If equal to `undefined`, then the description is unknown (possibly still being loaded).  If
equal to `null`, then there is no description.

#### Inherited from

[AnnotationBase](image_user_layer._internal_.AnnotationBase.md).[description](image_user_layer._internal_.AnnotationBase.md#description)

#### Defined in

[src/neuroglancer/annotation/index.ts:463](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/index.ts#L463)

___

### id

• **id**: `string`

#### Inherited from

[AnnotationBase](image_user_layer._internal_.AnnotationBase.md).[id](image_user_layer._internal_.AnnotationBase.md#id)

#### Defined in

[src/neuroglancer/annotation/index.ts:465](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/index.ts#L465)

___

### parentAnnotationId

• `Optional` **parentAnnotationId**: `string`

#### Inherited from

[AnnotationBase](image_user_layer._internal_.AnnotationBase.md).[parentAnnotationId](image_user_layer._internal_.AnnotationBase.md#parentannotationid)

#### Defined in

[src/neuroglancer/annotation/index.ts:471](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/index.ts#L471)

___

### pointA

• **pointA**: `Float32Array`

#### Defined in

[src/neuroglancer/annotation/index.ts:475](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/index.ts#L475)

___

### pointB

• **pointB**: `Float32Array`

#### Defined in

[src/neuroglancer/annotation/index.ts:476](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/index.ts#L476)

___

### properties

• **properties**: `any`[]

#### Inherited from

[AnnotationBase](image_user_layer._internal_.AnnotationBase.md).[properties](image_user_layer._internal_.AnnotationBase.md#properties)

#### Defined in

[src/neuroglancer/annotation/index.ts:469](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/index.ts#L469)

___

### relatedSegments

• `Optional` **relatedSegments**: [`Uint64`](../classes/data_panel_layout._internal_.Uint64.md)[][]

#### Inherited from

[AnnotationBase](image_user_layer._internal_.AnnotationBase.md).[relatedSegments](image_user_layer._internal_.AnnotationBase.md#relatedsegments)

#### Defined in

[src/neuroglancer/annotation/index.ts:468](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/index.ts#L468)

___

### type

• **type**: [`LINE`](../enums/image_user_layer._internal_.AnnotationType.md#line)

#### Overrides

[AnnotationBase](image_user_layer._internal_.AnnotationBase.md).[type](image_user_layer._internal_.AnnotationBase.md#type)

#### Defined in

[src/neuroglancer/annotation/index.ts:477](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/index.ts#L477)
