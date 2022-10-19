[neuroglancer](../README.md) / [Modules](../modules.md) / [image\_user\_layer](../modules/image_user_layer.md) / [<internal\>](../modules/image_user_layer._internal_.md) / AnnotationBase

# Interface: AnnotationBase

[image_user_layer](../modules/image_user_layer.md).[<internal>](../modules/image_user_layer._internal_.md).AnnotationBase

## Hierarchy

- **`AnnotationBase`**

  ↳ [`Line`](image_user_layer._internal_.Line.md)

  ↳ [`Point`](image_user_layer._internal_.Point.md)

  ↳ [`AxisAlignedBoundingBox`](image_user_layer._internal_.AxisAlignedBoundingBox.md)

  ↳ [`Ellipsoid`](image_user_layer._internal_.Ellipsoid.md)

  ↳ [`Com`](image_user_layer._internal_.Com.md)

  ↳ [`Cell`](image_user_layer._internal_.Cell.md)

  ↳ [`Collection`](image_user_layer._internal_.Collection.md)

## Table of contents

### Properties

- [description](image_user_layer._internal_.AnnotationBase.md#description)
- [id](image_user_layer._internal_.AnnotationBase.md#id)
- [parentAnnotationId](image_user_layer._internal_.AnnotationBase.md#parentannotationid)
- [properties](image_user_layer._internal_.AnnotationBase.md#properties)
- [relatedSegments](image_user_layer._internal_.AnnotationBase.md#relatedsegments)
- [type](image_user_layer._internal_.AnnotationBase.md#type)

## Properties

### description

• `Optional` **description**: ``null`` \| `string`

If equal to `undefined`, then the description is unknown (possibly still being loaded).  If
equal to `null`, then there is no description.

#### Defined in

[src/neuroglancer/annotation/index.ts:463](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/index.ts#L463)

___

### id

• **id**: `string`

#### Defined in

[src/neuroglancer/annotation/index.ts:465](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/index.ts#L465)

___

### parentAnnotationId

• `Optional` **parentAnnotationId**: `string`

#### Defined in

[src/neuroglancer/annotation/index.ts:471](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/index.ts#L471)

___

### properties

• **properties**: `any`[]

#### Defined in

[src/neuroglancer/annotation/index.ts:469](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/index.ts#L469)

___

### relatedSegments

• `Optional` **relatedSegments**: [`Uint64`](../classes/data_panel_layout._internal_.Uint64.md)[][]

#### Defined in

[src/neuroglancer/annotation/index.ts:468](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/index.ts#L468)

___

### type

• **type**: [`AnnotationType`](../enums/image_user_layer._internal_.AnnotationType.md)

#### Defined in

[src/neuroglancer/annotation/index.ts:466](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/index.ts#L466)
