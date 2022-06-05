[neuroglancer](../README.md) / [Modules](../modules.md) / [layer](../modules/layer.md) / MouseSelectionState

# Class: MouseSelectionState

[layer](../modules/layer.md).MouseSelectionState

## Implements

- [`PickState`](../interfaces/layer.PickState.md)

## Table of contents

### Constructors

- [constructor](layer.MouseSelectionState.md#constructor)

### Properties

- [active](layer.MouseSelectionState.md#active)
- [changed](layer.MouseSelectionState.md#changed)
- [coordinateSpace](layer.MouseSelectionState.md#coordinatespace)
- [displayDimensions](layer.MouseSelectionState.md#displaydimensions)
- [forcerFunction](layer.MouseSelectionState.md#forcerfunction)
- [pageX](layer.MouseSelectionState.md#pagex)
- [pageY](layer.MouseSelectionState.md#pagey)
- [pickedAnnotationBuffer](layer.MouseSelectionState.md#pickedannotationbuffer)
- [pickedAnnotationBufferOffset](layer.MouseSelectionState.md#pickedannotationbufferoffset)
- [pickedAnnotationId](layer.MouseSelectionState.md#pickedannotationid)
- [pickedAnnotationLayer](layer.MouseSelectionState.md#pickedannotationlayer)
- [pickedAnnotationType](layer.MouseSelectionState.md#pickedannotationtype)
- [pickedOffset](layer.MouseSelectionState.md#pickedoffset)
- [pickedRenderLayer](layer.MouseSelectionState.md#pickedrenderlayer)
- [pickedValue](layer.MouseSelectionState.md#pickedvalue)
- [position](layer.MouseSelectionState.md#position)
- [unsnappedPosition](layer.MouseSelectionState.md#unsnappedposition)

### Methods

- [removeForcer](layer.MouseSelectionState.md#removeforcer)
- [setActive](layer.MouseSelectionState.md#setactive)
- [setForcer](layer.MouseSelectionState.md#setforcer)
- [updateUnconditionally](layer.MouseSelectionState.md#updateunconditionally)

## Constructors

### constructor

• **new MouseSelectionState**()

## Properties

### active

• **active**: `boolean` = `false`

#### Defined in

[src/neuroglancer/layer.ts:908](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L908)

___

### changed

• **changed**: `NullarySignal`

#### Defined in

[src/neuroglancer/layer.ts:904](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L904)

___

### coordinateSpace

• **coordinateSpace**: [`CoordinateSpace`](../interfaces/coordinate_transform.CoordinateSpace.md) = `emptyInvalidCoordinateSpace`

#### Defined in

[src/neuroglancer/layer.ts:905](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L905)

___

### displayDimensions

• **displayDimensions**: `undefined` \| [`DisplayDimensions`](../interfaces/navigation_state.DisplayDimensions.md) = `undefined`

#### Defined in

[src/neuroglancer/layer.ts:909](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L909)

___

### forcerFunction

• `Private` **forcerFunction**: `undefined` \| () => `void` = `undefined`

#### Defined in

[src/neuroglancer/layer.ts:921](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L921)

___

### pageX

• **pageX**: `number`

#### Defined in

[src/neuroglancer/layer.ts:918](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L918)

___

### pageY

• **pageY**: `number`

#### Defined in

[src/neuroglancer/layer.ts:919](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L919)

___

### pickedAnnotationBuffer

• **pickedAnnotationBuffer**: `undefined` \| `ArrayBuffer` = `undefined`

#### Implementation of

[PickState](../interfaces/layer.PickState.md).[pickedAnnotationBuffer](../interfaces/layer.PickState.md#pickedannotationbuffer)

#### Defined in

[src/neuroglancer/layer.ts:915](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L915)

___

### pickedAnnotationBufferOffset

• **pickedAnnotationBufferOffset**: `undefined` \| `number` = `undefined`

#### Implementation of

[PickState](../interfaces/layer.PickState.md).[pickedAnnotationBufferOffset](../interfaces/layer.PickState.md#pickedannotationbufferoffset)

#### Defined in

[src/neuroglancer/layer.ts:916](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L916)

___

### pickedAnnotationId

• **pickedAnnotationId**: `undefined` \| `string` = `undefined`

#### Implementation of

[PickState](../interfaces/layer.PickState.md).[pickedAnnotationId](../interfaces/layer.PickState.md#pickedannotationid)

#### Defined in

[src/neuroglancer/layer.ts:914](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L914)

___

### pickedAnnotationLayer

• **pickedAnnotationLayer**: `undefined` \| `AnnotationLayerState` = `undefined`

#### Implementation of

[PickState](../interfaces/layer.PickState.md).[pickedAnnotationLayer](../interfaces/layer.PickState.md#pickedannotationlayer)

#### Defined in

[src/neuroglancer/layer.ts:913](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L913)

___

### pickedAnnotationType

• **pickedAnnotationType**: `undefined` \| `AnnotationType` = `undefined`

#### Implementation of

[PickState](../interfaces/layer.PickState.md).[pickedAnnotationType](../interfaces/layer.PickState.md#pickedannotationtype)

#### Defined in

[src/neuroglancer/layer.ts:917](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L917)

___

### pickedOffset

• **pickedOffset**: `number` = `0`

#### Implementation of

[PickState](../interfaces/layer.PickState.md).[pickedOffset](../interfaces/layer.PickState.md#pickedoffset)

#### Defined in

[src/neuroglancer/layer.ts:912](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L912)

___

### pickedRenderLayer

• **pickedRenderLayer**: ``null`` \| [`RenderLayer`](renderlayer.RenderLayer.md) = `null`

#### Implementation of

[PickState](../interfaces/layer.PickState.md).[pickedRenderLayer](../interfaces/layer.PickState.md#pickedrenderlayer)

#### Defined in

[src/neuroglancer/layer.ts:910](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L910)

___

### pickedValue

• **pickedValue**: `Uint64`

#### Implementation of

[PickState](../interfaces/layer.PickState.md).[pickedValue](../interfaces/layer.PickState.md#pickedvalue)

#### Defined in

[src/neuroglancer/layer.ts:911](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L911)

___

### position

• **position**: `Float32Array` = `kEmptyFloat32Vec`

#### Defined in

[src/neuroglancer/layer.ts:906](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L906)

___

### unsnappedPosition

• **unsnappedPosition**: `Float32Array` = `kEmptyFloat32Vec`

#### Defined in

[src/neuroglancer/layer.ts:907](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L907)

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

[src/neuroglancer/layer.ts:923](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L923)

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

[src/neuroglancer/layer.ts:946](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L946)

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

[src/neuroglancer/layer.ts:930](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L930)

___

### updateUnconditionally

▸ **updateUnconditionally**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/layer.ts:937](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L937)
