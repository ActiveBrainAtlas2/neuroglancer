[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / MouseSelectionState

# Class: MouseSelectionState

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).MouseSelectionState

## Implements

- [`PickState`](../interfaces/annotation_annotation_layer_state._internal_.PickState.md)

## Table of contents

### Constructors

- [constructor](annotation_annotation_layer_state._internal_.MouseSelectionState.md#constructor)

### Properties

- [active](annotation_annotation_layer_state._internal_.MouseSelectionState.md#active)
- [changed](annotation_annotation_layer_state._internal_.MouseSelectionState.md#changed)
- [coordinateSpace](annotation_annotation_layer_state._internal_.MouseSelectionState.md#coordinatespace)
- [displayDimensions](annotation_annotation_layer_state._internal_.MouseSelectionState.md#displaydimensions)
- [forcerFunction](annotation_annotation_layer_state._internal_.MouseSelectionState.md#forcerfunction)
- [pageX](annotation_annotation_layer_state._internal_.MouseSelectionState.md#pagex)
- [pageY](annotation_annotation_layer_state._internal_.MouseSelectionState.md#pagey)
- [pickedAnnotationBuffer](annotation_annotation_layer_state._internal_.MouseSelectionState.md#pickedannotationbuffer)
- [pickedAnnotationBufferOffset](annotation_annotation_layer_state._internal_.MouseSelectionState.md#pickedannotationbufferoffset)
- [pickedAnnotationId](annotation_annotation_layer_state._internal_.MouseSelectionState.md#pickedannotationid)
- [pickedAnnotationLayer](annotation_annotation_layer_state._internal_.MouseSelectionState.md#pickedannotationlayer)
- [pickedAnnotationType](annotation_annotation_layer_state._internal_.MouseSelectionState.md#pickedannotationtype)
- [pickedOffset](annotation_annotation_layer_state._internal_.MouseSelectionState.md#pickedoffset)
- [pickedRenderLayer](annotation_annotation_layer_state._internal_.MouseSelectionState.md#pickedrenderlayer)
- [pickedValue](annotation_annotation_layer_state._internal_.MouseSelectionState.md#pickedvalue)
- [position](annotation_annotation_layer_state._internal_.MouseSelectionState.md#position)
- [unsnappedPosition](annotation_annotation_layer_state._internal_.MouseSelectionState.md#unsnappedposition)

### Methods

- [removeForcer](annotation_annotation_layer_state._internal_.MouseSelectionState.md#removeforcer)
- [setActive](annotation_annotation_layer_state._internal_.MouseSelectionState.md#setactive)
- [setForcer](annotation_annotation_layer_state._internal_.MouseSelectionState.md#setforcer)
- [updateUnconditionally](annotation_annotation_layer_state._internal_.MouseSelectionState.md#updateunconditionally)

## Constructors

### constructor

• **new MouseSelectionState**()

## Properties

### active

• **active**: `boolean` = `false`

#### Defined in

[src/neuroglancer/layer.ts:912](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L912)

___

### changed

• **changed**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/layer.ts:908](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L908)

___

### coordinateSpace

• **coordinateSpace**: [`CoordinateSpace`](../interfaces/annotation_annotation_layer_state._internal_.CoordinateSpace.md) = `emptyInvalidCoordinateSpace`

#### Defined in

[src/neuroglancer/layer.ts:909](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L909)

___

### displayDimensions

• **displayDimensions**: `undefined` \| [`DisplayDimensions`](../interfaces/annotation_annotation_layer_state._internal_.DisplayDimensions.md) = `undefined`

#### Defined in

[src/neuroglancer/layer.ts:913](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L913)

___

### forcerFunction

• `Private` **forcerFunction**: `undefined` \| () => `void` = `undefined`

#### Defined in

[src/neuroglancer/layer.ts:925](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L925)

___

### pageX

• **pageX**: `number`

#### Defined in

[src/neuroglancer/layer.ts:922](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L922)

___

### pageY

• **pageY**: `number`

#### Defined in

[src/neuroglancer/layer.ts:923](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L923)

___

### pickedAnnotationBuffer

• **pickedAnnotationBuffer**: `undefined` \| `ArrayBuffer` = `undefined`

#### Implementation of

[PickState](../interfaces/annotation_annotation_layer_state._internal_.PickState.md).[pickedAnnotationBuffer](../interfaces/annotation_annotation_layer_state._internal_.PickState.md#pickedannotationbuffer)

#### Defined in

[src/neuroglancer/layer.ts:919](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L919)

___

### pickedAnnotationBufferOffset

• **pickedAnnotationBufferOffset**: `undefined` \| `number` = `undefined`

#### Implementation of

[PickState](../interfaces/annotation_annotation_layer_state._internal_.PickState.md).[pickedAnnotationBufferOffset](../interfaces/annotation_annotation_layer_state._internal_.PickState.md#pickedannotationbufferoffset)

#### Defined in

[src/neuroglancer/layer.ts:920](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L920)

___

### pickedAnnotationId

• **pickedAnnotationId**: `undefined` \| `string` = `undefined`

#### Implementation of

[PickState](../interfaces/annotation_annotation_layer_state._internal_.PickState.md).[pickedAnnotationId](../interfaces/annotation_annotation_layer_state._internal_.PickState.md#pickedannotationid)

#### Defined in

[src/neuroglancer/layer.ts:918](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L918)

___

### pickedAnnotationLayer

• **pickedAnnotationLayer**: `undefined` \| [`AnnotationLayerState`](annotation_annotation_layer_state.AnnotationLayerState.md) = `undefined`

#### Implementation of

[PickState](../interfaces/annotation_annotation_layer_state._internal_.PickState.md).[pickedAnnotationLayer](../interfaces/annotation_annotation_layer_state._internal_.PickState.md#pickedannotationlayer)

#### Defined in

[src/neuroglancer/layer.ts:917](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L917)

___

### pickedAnnotationType

• **pickedAnnotationType**: `undefined` \| [`AnnotationType`](../enums/annotation.AnnotationType.md) = `undefined`

#### Implementation of

[PickState](../interfaces/annotation_annotation_layer_state._internal_.PickState.md).[pickedAnnotationType](../interfaces/annotation_annotation_layer_state._internal_.PickState.md#pickedannotationtype)

#### Defined in

[src/neuroglancer/layer.ts:921](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L921)

___

### pickedOffset

• **pickedOffset**: `number` = `0`

#### Implementation of

[PickState](../interfaces/annotation_annotation_layer_state._internal_.PickState.md).[pickedOffset](../interfaces/annotation_annotation_layer_state._internal_.PickState.md#pickedoffset)

#### Defined in

[src/neuroglancer/layer.ts:916](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L916)

___

### pickedRenderLayer

• **pickedRenderLayer**: ``null`` \| [`RenderLayer`](annotation_annotation_layer_state._internal_.RenderLayer.md) = `null`

#### Implementation of

[PickState](../interfaces/annotation_annotation_layer_state._internal_.PickState.md).[pickedRenderLayer](../interfaces/annotation_annotation_layer_state._internal_.PickState.md#pickedrenderlayer)

#### Defined in

[src/neuroglancer/layer.ts:914](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L914)

___

### pickedValue

• **pickedValue**: [`Uint64`](util_uint64.Uint64.md)

#### Implementation of

[PickState](../interfaces/annotation_annotation_layer_state._internal_.PickState.md).[pickedValue](../interfaces/annotation_annotation_layer_state._internal_.PickState.md#pickedvalue)

#### Defined in

[src/neuroglancer/layer.ts:915](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L915)

___

### position

• **position**: `Float32Array` = `kEmptyFloat32Vec`

#### Defined in

[src/neuroglancer/layer.ts:910](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L910)

___

### unsnappedPosition

• **unsnappedPosition**: `Float32Array` = `kEmptyFloat32Vec`

#### Defined in

[src/neuroglancer/layer.ts:911](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L911)

## Methods

### removeForcer

▸ **removeForcer**(`forcer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `forcer` | () => `void` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:927](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L927)

___

### setActive

▸ **setActive**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:950](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L950)

___

### setForcer

▸ **setForcer**(`forcer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `forcer` | `undefined` \| () => `void` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:934](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L934)

___

### updateUnconditionally

▸ **updateUnconditionally**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/layer.ts:941](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L941)
