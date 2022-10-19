[neuroglancer](../README.md) / [Modules](../modules.md) / [image\_user\_layer](../modules/image_user_layer.md) / ImageLayerSelectionState

# Interface: ImageLayerSelectionState

[image_user_layer](../modules/image_user_layer.md).ImageLayerSelectionState

## Hierarchy

- [`UserLayerSelectionState`](layer.UserLayerSelectionState.md)

  ↳ **`ImageLayerSelectionState`**

## Table of contents

### Properties

- [annotationId](image_user_layer.ImageLayerSelectionState.md#annotationid)
- [annotationPartIndex](image_user_layer.ImageLayerSelectionState.md#annotationpartindex)
- [annotationSerialized](image_user_layer.ImageLayerSelectionState.md#annotationserialized)
- [annotationSourceIndex](image_user_layer.ImageLayerSelectionState.md#annotationsourceindex)
- [annotationSubsource](image_user_layer.ImageLayerSelectionState.md#annotationsubsource)
- [annotationType](image_user_layer.ImageLayerSelectionState.md#annotationtype)
- [generation](image_user_layer.ImageLayerSelectionState.md#generation)
- [localCoordinateSpace](image_user_layer.ImageLayerSelectionState.md#localcoordinatespace)
- [localPosition](image_user_layer.ImageLayerSelectionState.md#localposition)
- [localPositionValid](image_user_layer.ImageLayerSelectionState.md#localpositionvalid)
- [value](image_user_layer.ImageLayerSelectionState.md#value)

## Properties

### annotationId

• **annotationId**: `undefined` \| `string`

#### Inherited from

[UserLayerSelectionState](layer.UserLayerSelectionState.md).[annotationId](layer.UserLayerSelectionState.md#annotationid)

#### Defined in

[src/neuroglancer/layer.ts:69](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L69)

___

### annotationPartIndex

• **annotationPartIndex**: `undefined` \| `number`

#### Inherited from

[UserLayerSelectionState](layer.UserLayerSelectionState.md).[annotationPartIndex](layer.UserLayerSelectionState.md#annotationpartindex)

#### Defined in

[src/neuroglancer/layer.ts:74](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L74)

___

### annotationSerialized

• **annotationSerialized**: `undefined` \| `Uint8Array`

#### Inherited from

[UserLayerSelectionState](layer.UserLayerSelectionState.md).[annotationSerialized](layer.UserLayerSelectionState.md#annotationserialized)

#### Defined in

[src/neuroglancer/layer.ts:71](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L71)

___

### annotationSourceIndex

• **annotationSourceIndex**: `undefined` \| `number`

#### Inherited from

[UserLayerSelectionState](layer.UserLayerSelectionState.md).[annotationSourceIndex](layer.UserLayerSelectionState.md#annotationsourceindex)

#### Defined in

[src/neuroglancer/layer.ts:72](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L72)

___

### annotationSubsource

• **annotationSubsource**: `undefined` \| `string`

#### Inherited from

[UserLayerSelectionState](layer.UserLayerSelectionState.md).[annotationSubsource](layer.UserLayerSelectionState.md#annotationsubsource)

#### Defined in

[src/neuroglancer/layer.ts:73](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L73)

___

### annotationType

• **annotationType**: `undefined` \| [`AnnotationType`](../enums/image_user_layer._internal_.AnnotationType.md)

#### Inherited from

[UserLayerSelectionState](layer.UserLayerSelectionState.md).[annotationType](layer.UserLayerSelectionState.md#annotationtype)

#### Defined in

[src/neuroglancer/layer.ts:70](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L70)

___

### generation

• **generation**: `number`

#### Inherited from

[UserLayerSelectionState](layer.UserLayerSelectionState.md).[generation](layer.UserLayerSelectionState.md#generation)

#### Defined in

[src/neuroglancer/layer.ts:62](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L62)

___

### localCoordinateSpace

• **localCoordinateSpace**: `undefined` \| [`CoordinateSpace`](coordinate_transform.CoordinateSpace.md)

#### Inherited from

[UserLayerSelectionState](layer.UserLayerSelectionState.md).[localCoordinateSpace](layer.UserLayerSelectionState.md#localcoordinatespace)

#### Defined in

[src/neuroglancer/layer.ts:67](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L67)

___

### localPosition

• **localPosition**: `Float32Array`

#### Inherited from

[UserLayerSelectionState](layer.UserLayerSelectionState.md).[localPosition](layer.UserLayerSelectionState.md#localposition)

#### Defined in

[src/neuroglancer/layer.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L66)

___

### localPositionValid

• **localPositionValid**: `boolean`

#### Inherited from

[UserLayerSelectionState](layer.UserLayerSelectionState.md).[localPositionValid](layer.UserLayerSelectionState.md#localpositionvalid)

#### Defined in

[src/neuroglancer/layer.ts:65](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L65)

___

### value

• **value**: `any`

#### Overrides

[UserLayerSelectionState](layer.UserLayerSelectionState.md).[value](layer.UserLayerSelectionState.md#value)

#### Defined in

[src/neuroglancer/image_user_layer.ts:64](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/image_user_layer.ts#L64)
