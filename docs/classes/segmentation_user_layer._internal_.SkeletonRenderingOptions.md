[neuroglancer](../README.md) / [Modules](../modules.md) / [segmentation\_user\_layer](../modules/segmentation_user_layer.md) / [<internal\>](../modules/segmentation_user_layer._internal_.md) / SkeletonRenderingOptions

# Class: SkeletonRenderingOptions

[segmentation_user_layer](../modules/segmentation_user_layer.md).[<internal>](../modules/segmentation_user_layer._internal_.md).SkeletonRenderingOptions

## Implements

- [`Trackable`](../interfaces/coordinate_transform._internal_.Trackable.md)

## Table of contents

### Constructors

- [constructor](segmentation_user_layer._internal_.SkeletonRenderingOptions.md#constructor)

### Properties

- [compound](segmentation_user_layer._internal_.SkeletonRenderingOptions.md#compound)
- [params2d](segmentation_user_layer._internal_.SkeletonRenderingOptions.md#params2d)
- [params3d](segmentation_user_layer._internal_.SkeletonRenderingOptions.md#params3d)
- [shader](segmentation_user_layer._internal_.SkeletonRenderingOptions.md#shader)
- [shaderControlState](segmentation_user_layer._internal_.SkeletonRenderingOptions.md#shadercontrolstate)

### Accessors

- [changed](segmentation_user_layer._internal_.SkeletonRenderingOptions.md#changed)

### Methods

- [reset](segmentation_user_layer._internal_.SkeletonRenderingOptions.md#reset)
- [restoreState](segmentation_user_layer._internal_.SkeletonRenderingOptions.md#restorestate)
- [toJSON](segmentation_user_layer._internal_.SkeletonRenderingOptions.md#tojson)

## Constructors

### constructor

• **new SkeletonRenderingOptions**()

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:318](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/skeleton/frontend.ts#L318)

## Properties

### compound

• `Private` **compound**: [`CompoundTrackable`](layer_group_viewer._internal_.CompoundTrackable.md)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:302](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/skeleton/frontend.ts#L302)

___

### params2d

• **params2d**: [`ViewSpecificSkeletonRenderingOptions`](../interfaces/segmentation_user_layer._internal_.ViewSpecificSkeletonRenderingOptions.md)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:309](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/skeleton/frontend.ts#L309)

___

### params3d

• **params3d**: [`ViewSpecificSkeletonRenderingOptions`](../interfaces/segmentation_user_layer._internal_.ViewSpecificSkeletonRenderingOptions.md)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:313](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/skeleton/frontend.ts#L313)

___

### shader

• **shader**: [`TrackableValue`](trackable_value.TrackableValue.md)<`string`\>

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:307](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/skeleton/frontend.ts#L307)

___

### shaderControlState

• **shaderControlState**: [`ShaderControlState`](image_user_layer._internal_.ShaderControlState.md)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:308](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/skeleton/frontend.ts#L308)

## Accessors

### changed

• `get` **changed**(): [`NullarySignal`](coordinate_transform._internal_.NullarySignal.md)

#### Returns

[`NullarySignal`](coordinate_transform._internal_.NullarySignal.md)

#### Implementation of

[Trackable](../interfaces/coordinate_transform._internal_.Trackable.md).[changed](../interfaces/coordinate_transform._internal_.Trackable.md#changed)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:303](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/skeleton/frontend.ts#L303)

## Methods

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Implementation of

[Trackable](../interfaces/coordinate_transform._internal_.Trackable.md).[reset](../interfaces/coordinate_transform._internal_.Trackable.md#reset)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:328](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/skeleton/frontend.ts#L328)

___

### restoreState

▸ **restoreState**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

`void`

#### Implementation of

[Trackable](../interfaces/coordinate_transform._internal_.Trackable.md).[restoreState](../interfaces/coordinate_transform._internal_.Trackable.md#restorestate)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:332](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/skeleton/frontend.ts#L332)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Implementation of

[Trackable](../interfaces/coordinate_transform._internal_.Trackable.md).[toJSON](../interfaces/coordinate_transform._internal_.Trackable.md#tojson)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:337](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/skeleton/frontend.ts#L337)
