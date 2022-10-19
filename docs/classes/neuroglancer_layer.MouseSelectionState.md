[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/layer](../modules/neuroglancer_layer.md) / MouseSelectionState

# Class: MouseSelectionState

[neuroglancer/layer](../modules/neuroglancer_layer.md).MouseSelectionState

## Implements

- [`PickState`](../interfaces/neuroglancer_layer.PickState.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_layer.MouseSelectionState.md#constructor)

### Properties

- [active](neuroglancer_layer.MouseSelectionState.md#active)
- [changed](neuroglancer_layer.MouseSelectionState.md#changed)
- [coordinateSpace](neuroglancer_layer.MouseSelectionState.md#coordinatespace)
- [displayDimensions](neuroglancer_layer.MouseSelectionState.md#displaydimensions)
- [forcerFunction](neuroglancer_layer.MouseSelectionState.md#forcerfunction)
- [pageX](neuroglancer_layer.MouseSelectionState.md#pagex)
- [pageY](neuroglancer_layer.MouseSelectionState.md#pagey)
- [pickedAnnotationBuffer](neuroglancer_layer.MouseSelectionState.md#pickedannotationbuffer)
- [pickedAnnotationBufferOffset](neuroglancer_layer.MouseSelectionState.md#pickedannotationbufferoffset)
- [pickedAnnotationId](neuroglancer_layer.MouseSelectionState.md#pickedannotationid)
- [pickedAnnotationLayer](neuroglancer_layer.MouseSelectionState.md#pickedannotationlayer)
- [pickedAnnotationType](neuroglancer_layer.MouseSelectionState.md#pickedannotationtype)
- [pickedOffset](neuroglancer_layer.MouseSelectionState.md#pickedoffset)
- [pickedRenderLayer](neuroglancer_layer.MouseSelectionState.md#pickedrenderlayer)
- [pickedValue](neuroglancer_layer.MouseSelectionState.md#pickedvalue)
- [position](neuroglancer_layer.MouseSelectionState.md#position)
- [unsnappedPosition](neuroglancer_layer.MouseSelectionState.md#unsnappedposition)

### Methods

- [removeForcer](neuroglancer_layer.MouseSelectionState.md#removeforcer)
- [setActive](neuroglancer_layer.MouseSelectionState.md#setactive)
- [setForcer](neuroglancer_layer.MouseSelectionState.md#setforcer)
- [updateUnconditionally](neuroglancer_layer.MouseSelectionState.md#updateunconditionally)

## Constructors

### constructor

• **new MouseSelectionState**()

## Properties

### active

• **active**: `boolean` = `false`

#### Defined in

[src/neuroglancer/layer.ts:912](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L912)

___

### changed

• **changed**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/layer.ts:908](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L908)

___

### coordinateSpace

• **coordinateSpace**: [`CoordinateSpace`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpace.md) = `emptyInvalidCoordinateSpace`

#### Defined in

[src/neuroglancer/layer.ts:909](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L909)

___

### displayDimensions

• **displayDimensions**: `undefined` \| [`DisplayDimensions`](../interfaces/neuroglancer_navigation_state.DisplayDimensions.md) = `undefined`

#### Defined in

[src/neuroglancer/layer.ts:913](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L913)

___

### forcerFunction

• `Private` **forcerFunction**: `undefined` \| () => `void` = `undefined`

#### Defined in

[src/neuroglancer/layer.ts:925](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L925)

___

### pageX

• **pageX**: `number`

#### Defined in

[src/neuroglancer/layer.ts:922](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L922)

___

### pageY

• **pageY**: `number`

#### Defined in

[src/neuroglancer/layer.ts:923](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L923)

___

### pickedAnnotationBuffer

• **pickedAnnotationBuffer**: `undefined` \| `ArrayBuffer` = `undefined`

#### Implementation of

[PickState](../interfaces/neuroglancer_layer.PickState.md).[pickedAnnotationBuffer](../interfaces/neuroglancer_layer.PickState.md#pickedannotationbuffer)

#### Defined in

[src/neuroglancer/layer.ts:919](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L919)

___

### pickedAnnotationBufferOffset

• **pickedAnnotationBufferOffset**: `undefined` \| `number` = `undefined`

#### Implementation of

[PickState](../interfaces/neuroglancer_layer.PickState.md).[pickedAnnotationBufferOffset](../interfaces/neuroglancer_layer.PickState.md#pickedannotationbufferoffset)

#### Defined in

[src/neuroglancer/layer.ts:920](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L920)

___

### pickedAnnotationId

• **pickedAnnotationId**: `undefined` \| `string` = `undefined`

#### Implementation of

[PickState](../interfaces/neuroglancer_layer.PickState.md).[pickedAnnotationId](../interfaces/neuroglancer_layer.PickState.md#pickedannotationid)

#### Defined in

[src/neuroglancer/layer.ts:918](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L918)

___

### pickedAnnotationLayer

• **pickedAnnotationLayer**: `undefined` \| [`AnnotationLayerState`](neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md) = `undefined`

#### Implementation of

[PickState](../interfaces/neuroglancer_layer.PickState.md).[pickedAnnotationLayer](../interfaces/neuroglancer_layer.PickState.md#pickedannotationlayer)

#### Defined in

[src/neuroglancer/layer.ts:917](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L917)

___

### pickedAnnotationType

• **pickedAnnotationType**: `undefined` \| [`AnnotationType`](../enums/neuroglancer_annotation.AnnotationType.md) = `undefined`

#### Implementation of

[PickState](../interfaces/neuroglancer_layer.PickState.md).[pickedAnnotationType](../interfaces/neuroglancer_layer.PickState.md#pickedannotationtype)

#### Defined in

[src/neuroglancer/layer.ts:921](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L921)

___

### pickedOffset

• **pickedOffset**: `number` = `0`

#### Implementation of

[PickState](../interfaces/neuroglancer_layer.PickState.md).[pickedOffset](../interfaces/neuroglancer_layer.PickState.md#pickedoffset)

#### Defined in

[src/neuroglancer/layer.ts:916](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L916)

___

### pickedRenderLayer

• **pickedRenderLayer**: ``null`` \| [`RenderLayer`](neuroglancer_renderlayer.RenderLayer.md) = `null`

#### Implementation of

[PickState](../interfaces/neuroglancer_layer.PickState.md).[pickedRenderLayer](../interfaces/neuroglancer_layer.PickState.md#pickedrenderlayer)

#### Defined in

[src/neuroglancer/layer.ts:914](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L914)

___

### pickedValue

• **pickedValue**: [`Uint64`](neuroglancer_util_uint64.Uint64.md)

#### Implementation of

[PickState](../interfaces/neuroglancer_layer.PickState.md).[pickedValue](../interfaces/neuroglancer_layer.PickState.md#pickedvalue)

#### Defined in

[src/neuroglancer/layer.ts:915](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L915)

___

### position

• **position**: `Float32Array` = `kEmptyFloat32Vec`

#### Defined in

[src/neuroglancer/layer.ts:910](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L910)

___

### unsnappedPosition

• **unsnappedPosition**: `Float32Array` = `kEmptyFloat32Vec`

#### Defined in

[src/neuroglancer/layer.ts:911](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L911)

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

[src/neuroglancer/layer.ts:927](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L927)

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

[src/neuroglancer/layer.ts:950](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L950)

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

[src/neuroglancer/layer.ts:934](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L934)

___

### updateUnconditionally

▸ **updateUnconditionally**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/layer.ts:941](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L941)
