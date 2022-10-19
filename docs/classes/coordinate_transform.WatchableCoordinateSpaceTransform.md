[neuroglancer](../README.md) / [Modules](../modules.md) / [coordinate\_transform](../modules/coordinate_transform.md) / WatchableCoordinateSpaceTransform

# Class: WatchableCoordinateSpaceTransform

[coordinate_transform](../modules/coordinate_transform.md).WatchableCoordinateSpaceTransform

## Implements

- [`Trackable`](../interfaces/coordinate_transform._internal_.Trackable.md)
- [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<[`CoordinateSpaceTransform`](../interfaces/coordinate_transform.CoordinateSpaceTransform.md)\>

## Table of contents

### Constructors

- [constructor](coordinate_transform.WatchableCoordinateSpaceTransform.md#constructor)

### Properties

- [changed](coordinate_transform.WatchableCoordinateSpaceTransform.md#changed)
- [defaultTransform](coordinate_transform.WatchableCoordinateSpaceTransform.md#defaulttransform)
- [inputSpace](coordinate_transform.WatchableCoordinateSpaceTransform.md#inputspace)
- [inputSpaceChanged](coordinate_transform.WatchableCoordinateSpaceTransform.md#inputspacechanged)
- [mutableSourceRank](coordinate_transform.WatchableCoordinateSpaceTransform.md#mutablesourcerank)
- [outputSpace](coordinate_transform.WatchableCoordinateSpaceTransform.md#outputspace)
- [value\_](coordinate_transform.WatchableCoordinateSpaceTransform.md#value_)

### Accessors

- [defaultInputSpace](coordinate_transform.WatchableCoordinateSpaceTransform.md#defaultinputspace)
- [spec](coordinate_transform.WatchableCoordinateSpaceTransform.md#spec)
- [transform](coordinate_transform.WatchableCoordinateSpaceTransform.md#transform)
- [value](coordinate_transform.WatchableCoordinateSpaceTransform.md#value)

### Methods

- [reset](coordinate_transform.WatchableCoordinateSpaceTransform.md#reset)
- [restoreState](coordinate_transform.WatchableCoordinateSpaceTransform.md#restorestate)
- [toJSON](coordinate_transform.WatchableCoordinateSpaceTransform.md#tojson)

## Constructors

### constructor

• **new WatchableCoordinateSpaceTransform**(`defaultTransform`, `mutableSourceRank?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `defaultTransform` | [`CoordinateSpaceTransform`](../interfaces/coordinate_transform.CoordinateSpaceTransform.md) | `undefined` |
| `mutableSourceRank` | `boolean` | `false` |

#### Defined in

[src/neuroglancer/coordinate_transform.ts:742](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/coordinate_transform.ts#L742)

## Properties

### changed

• **changed**: [`NullarySignal`](coordinate_transform._internal_.NullarySignal.md)

#### Implementation of

[WatchableValueInterface](../interfaces/trackable_value.WatchableValueInterface.md).[changed](../interfaces/trackable_value.WatchableValueInterface.md#changed)

#### Defined in

[src/neuroglancer/coordinate_transform.ts:738](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/coordinate_transform.ts#L738)

___

### defaultTransform

• `Readonly` **defaultTransform**: [`CoordinateSpaceTransform`](../interfaces/coordinate_transform.CoordinateSpaceTransform.md)

#### Defined in

[src/neuroglancer/coordinate_transform.ts:740](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/coordinate_transform.ts#L740)

___

### inputSpace

• `Readonly` **inputSpace**: [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<[`CoordinateSpace`](../interfaces/coordinate_transform.CoordinateSpace.md)\>

#### Defined in

[src/neuroglancer/coordinate_transform.ts:737](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/coordinate_transform.ts#L737)

___

### inputSpaceChanged

• `Private` **inputSpaceChanged**: [`NullarySignal`](coordinate_transform._internal_.NullarySignal.md)

#### Defined in

[src/neuroglancer/coordinate_transform.ts:739](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/coordinate_transform.ts#L739)

___

### mutableSourceRank

• `Readonly` **mutableSourceRank**: `boolean` = `false`

___

### outputSpace

• `Readonly` **outputSpace**: [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<[`CoordinateSpace`](../interfaces/coordinate_transform.CoordinateSpace.md)\>

#### Defined in

[src/neuroglancer/coordinate_transform.ts:736](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/coordinate_transform.ts#L736)

___

### value\_

• `Private` **value\_**: `undefined` \| [`CoordinateSpaceTransform`](../interfaces/coordinate_transform.CoordinateSpaceTransform.md) = `undefined`

#### Defined in

[src/neuroglancer/coordinate_transform.ts:735](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/coordinate_transform.ts#L735)

## Accessors

### defaultInputSpace

• `get` **defaultInputSpace**(): [`CoordinateSpace`](../interfaces/coordinate_transform.CoordinateSpace.md)

#### Returns

[`CoordinateSpace`](../interfaces/coordinate_transform.CoordinateSpace.md)

#### Defined in

[src/neuroglancer/coordinate_transform.ts:809](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/coordinate_transform.ts#L809)

___

### spec

• `get` **spec**(): `undefined` \| [`Readonly`](../modules/coordinate_transform._internal_.md#readonly)<[`CoordinateTransformSpecification`](../interfaces/coordinate_transform.CoordinateTransformSpecification.md)\>

#### Returns

`undefined` \| [`Readonly`](../modules/coordinate_transform._internal_.md#readonly)<[`CoordinateTransformSpecification`](../interfaces/coordinate_transform.CoordinateTransformSpecification.md)\>

#### Defined in

[src/neuroglancer/coordinate_transform.ts:813](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/coordinate_transform.ts#L813)

• `set` **spec**(`spec`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `spec` | `undefined` \| [`Readonly`](../modules/coordinate_transform._internal_.md#readonly)<[`CoordinateTransformSpecification`](../interfaces/coordinate_transform.CoordinateTransformSpecification.md)\> |

#### Returns

`void`

#### Defined in

[src/neuroglancer/coordinate_transform.ts:856](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/coordinate_transform.ts#L856)

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

[src/neuroglancer/coordinate_transform.ts:842](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/coordinate_transform.ts#L842)

___

### value

• `get` **value**(): [`CoordinateSpaceTransform`](../interfaces/coordinate_transform.CoordinateSpaceTransform.md)

#### Returns

[`CoordinateSpaceTransform`](../interfaces/coordinate_transform.CoordinateSpaceTransform.md)

#### Implementation of

[WatchableValueInterface](../interfaces/trackable_value.WatchableValueInterface.md).[value](../interfaces/trackable_value.WatchableValueInterface.md#value)

#### Defined in

[src/neuroglancer/coordinate_transform.ts:794](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/coordinate_transform.ts#L794)

• `set` **value**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`CoordinateSpaceTransform`](../interfaces/coordinate_transform.CoordinateSpaceTransform.md) |

#### Returns

`void`

#### Implementation of

[WatchableValueInterface](../interfaces/trackable_value.WatchableValueInterface.md).[value](../interfaces/trackable_value.WatchableValueInterface.md#value)

#### Defined in

[src/neuroglancer/coordinate_transform.ts:784](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/coordinate_transform.ts#L784)

## Methods

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Implementation of

[Trackable](../interfaces/coordinate_transform._internal_.Trackable.md).[reset](../interfaces/coordinate_transform._internal_.Trackable.md#reset)

#### Defined in

[src/neuroglancer/coordinate_transform.ts:802](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/coordinate_transform.ts#L802)

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

[Trackable](../interfaces/coordinate_transform._internal_.Trackable.md).[restoreState](../interfaces/coordinate_transform._internal_.Trackable.md#restorestate)

#### Defined in

[src/neuroglancer/coordinate_transform.ts:1052](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/coordinate_transform.ts#L1052)

___

### toJSON

▸ **toJSON**(): `undefined` \| { `inputDimensions`: `any` ; `matrix`: `undefined` \| `number`[][] = m; `outputDimensions`: `any` ; `sourceRank`: `undefined` \| `number`  }

#### Returns

`undefined` \| { `inputDimensions`: `any` ; `matrix`: `undefined` \| `number`[][] = m; `outputDimensions`: `any` ; `sourceRank`: `undefined` \| `number`  }

#### Implementation of

[Trackable](../interfaces/coordinate_transform._internal_.Trackable.md).[toJSON](../interfaces/coordinate_transform._internal_.Trackable.md#tojson)

#### Defined in

[src/neuroglancer/coordinate_transform.ts:1048](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/coordinate_transform.ts#L1048)
