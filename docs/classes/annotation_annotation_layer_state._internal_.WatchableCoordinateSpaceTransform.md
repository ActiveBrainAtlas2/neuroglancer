[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / WatchableCoordinateSpaceTransform

# Class: WatchableCoordinateSpaceTransform

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).WatchableCoordinateSpaceTransform

## Implements

- [`Trackable`](../interfaces/util_trackable.Trackable.md)
- [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<[`CoordinateSpaceTransform`](../interfaces/annotation_annotation_layer_state._internal_.CoordinateSpaceTransform.md)\>

## Table of contents

### Constructors

- [constructor](annotation_annotation_layer_state._internal_.WatchableCoordinateSpaceTransform.md#constructor)

### Properties

- [changed](annotation_annotation_layer_state._internal_.WatchableCoordinateSpaceTransform.md#changed)
- [defaultTransform](annotation_annotation_layer_state._internal_.WatchableCoordinateSpaceTransform.md#defaulttransform)
- [inputSpace](annotation_annotation_layer_state._internal_.WatchableCoordinateSpaceTransform.md#inputspace)
- [inputSpaceChanged](annotation_annotation_layer_state._internal_.WatchableCoordinateSpaceTransform.md#inputspacechanged)
- [mutableSourceRank](annotation_annotation_layer_state._internal_.WatchableCoordinateSpaceTransform.md#mutablesourcerank)
- [outputSpace](annotation_annotation_layer_state._internal_.WatchableCoordinateSpaceTransform.md#outputspace)
- [value\_](annotation_annotation_layer_state._internal_.WatchableCoordinateSpaceTransform.md#value_)

### Accessors

- [defaultInputSpace](annotation_annotation_layer_state._internal_.WatchableCoordinateSpaceTransform.md#defaultinputspace)
- [spec](annotation_annotation_layer_state._internal_.WatchableCoordinateSpaceTransform.md#spec)
- [transform](annotation_annotation_layer_state._internal_.WatchableCoordinateSpaceTransform.md#transform)
- [value](annotation_annotation_layer_state._internal_.WatchableCoordinateSpaceTransform.md#value)

### Methods

- [reset](annotation_annotation_layer_state._internal_.WatchableCoordinateSpaceTransform.md#reset)
- [restoreState](annotation_annotation_layer_state._internal_.WatchableCoordinateSpaceTransform.md#restorestate)
- [toJSON](annotation_annotation_layer_state._internal_.WatchableCoordinateSpaceTransform.md#tojson)

## Constructors

### constructor

• **new WatchableCoordinateSpaceTransform**(`defaultTransform`, `mutableSourceRank?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `defaultTransform` | [`CoordinateSpaceTransform`](../interfaces/annotation_annotation_layer_state._internal_.CoordinateSpaceTransform.md) | `undefined` |
| `mutableSourceRank` | `boolean` | `false` |

#### Defined in

[src/neuroglancer/coordinate_transform.ts:742](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/coordinate_transform.ts#L742)

## Properties

### changed

• **changed**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Implementation of

[WatchableValueInterface](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md).[changed](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md#changed)

#### Defined in

[src/neuroglancer/coordinate_transform.ts:738](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/coordinate_transform.ts#L738)

___

### defaultTransform

• `Readonly` **defaultTransform**: [`CoordinateSpaceTransform`](../interfaces/annotation_annotation_layer_state._internal_.CoordinateSpaceTransform.md)

#### Defined in

[src/neuroglancer/coordinate_transform.ts:740](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/coordinate_transform.ts#L740)

___

### inputSpace

• `Readonly` **inputSpace**: [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<[`CoordinateSpace`](../interfaces/annotation_annotation_layer_state._internal_.CoordinateSpace.md)\>

#### Defined in

[src/neuroglancer/coordinate_transform.ts:737](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/coordinate_transform.ts#L737)

___

### inputSpaceChanged

• `Private` **inputSpaceChanged**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/coordinate_transform.ts:739](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/coordinate_transform.ts#L739)

___

### mutableSourceRank

• `Readonly` **mutableSourceRank**: `boolean` = `false`

___

### outputSpace

• `Readonly` **outputSpace**: [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<[`CoordinateSpace`](../interfaces/annotation_annotation_layer_state._internal_.CoordinateSpace.md)\>

#### Defined in

[src/neuroglancer/coordinate_transform.ts:736](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/coordinate_transform.ts#L736)

___

### value\_

• `Private` **value\_**: `undefined` \| [`CoordinateSpaceTransform`](../interfaces/annotation_annotation_layer_state._internal_.CoordinateSpaceTransform.md) = `undefined`

#### Defined in

[src/neuroglancer/coordinate_transform.ts:735](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/coordinate_transform.ts#L735)

## Accessors

### defaultInputSpace

• `get` **defaultInputSpace**(): [`CoordinateSpace`](../interfaces/annotation_annotation_layer_state._internal_.CoordinateSpace.md)

#### Returns

[`CoordinateSpace`](../interfaces/annotation_annotation_layer_state._internal_.CoordinateSpace.md)

#### Defined in

[src/neuroglancer/coordinate_transform.ts:809](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/coordinate_transform.ts#L809)

___

### spec

• `get` **spec**(): `undefined` \| [`Readonly`](../modules/annotation_annotation_layer_state._internal_.md#readonly)<[`CoordinateTransformSpecification`](../interfaces/annotation_annotation_layer_state._internal_.CoordinateTransformSpecification.md)\>

#### Returns

`undefined` \| [`Readonly`](../modules/annotation_annotation_layer_state._internal_.md#readonly)<[`CoordinateTransformSpecification`](../interfaces/annotation_annotation_layer_state._internal_.CoordinateTransformSpecification.md)\>

#### Defined in

[src/neuroglancer/coordinate_transform.ts:813](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/coordinate_transform.ts#L813)

• `set` **spec**(`spec`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `spec` | `undefined` \| [`Readonly`](../modules/annotation_annotation_layer_state._internal_.md#readonly)<[`CoordinateTransformSpecification`](../interfaces/annotation_annotation_layer_state._internal_.CoordinateTransformSpecification.md)\> |

#### Returns

`void`

#### Defined in

[src/neuroglancer/coordinate_transform.ts:856](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/coordinate_transform.ts#L856)

___

### transform

• `set` **transform**(`transform`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | `Float64Array` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/coordinate_transform.ts:842](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/coordinate_transform.ts#L842)

___

### value

• `get` **value**(): [`CoordinateSpaceTransform`](../interfaces/annotation_annotation_layer_state._internal_.CoordinateSpaceTransform.md)

#### Returns

[`CoordinateSpaceTransform`](../interfaces/annotation_annotation_layer_state._internal_.CoordinateSpaceTransform.md)

#### Implementation of

[WatchableValueInterface](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md).[value](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md#value)

#### Defined in

[src/neuroglancer/coordinate_transform.ts:794](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/coordinate_transform.ts#L794)

• `set` **value**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`CoordinateSpaceTransform`](../interfaces/annotation_annotation_layer_state._internal_.CoordinateSpaceTransform.md) |

#### Returns

`void`

#### Implementation of

[WatchableValueInterface](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md).[value](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md#value)

#### Defined in

[src/neuroglancer/coordinate_transform.ts:784](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/coordinate_transform.ts#L784)

## Methods

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Implementation of

[Trackable](../interfaces/util_trackable.Trackable.md).[reset](../interfaces/util_trackable.Trackable.md#reset)

#### Defined in

[src/neuroglancer/coordinate_transform.ts:802](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/coordinate_transform.ts#L802)

___

### restoreState

▸ **restoreState**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `unknown` |

#### Returns

`void`

#### Implementation of

[Trackable](../interfaces/util_trackable.Trackable.md).[restoreState](../interfaces/util_trackable.Trackable.md#restorestate)

#### Defined in

[src/neuroglancer/coordinate_transform.ts:1052](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/coordinate_transform.ts#L1052)

___

### toJSON

▸ **toJSON**(): `undefined` \| { `inputDimensions`: `any` ; `matrix`: `undefined` \| `number`[][] = m; `outputDimensions`: `any` ; `sourceRank`: `undefined` \| `number`  }

#### Returns

`undefined` \| { `inputDimensions`: `any` ; `matrix`: `undefined` \| `number`[][] = m; `outputDimensions`: `any` ; `sourceRank`: `undefined` \| `number`  }

#### Implementation of

[Trackable](../interfaces/util_trackable.Trackable.md).[toJSON](../interfaces/util_trackable.Trackable.md#tojson)

#### Defined in

[src/neuroglancer/coordinate_transform.ts:1048](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/coordinate_transform.ts#L1048)
