[neuroglancer](../README.md) / [Modules](../modules.md) / util/lerp

# Module: util/lerp

## Table of contents

### Type Aliases

- [DataTypeInterval](util_lerp.md#datatypeinterval)

### Variables

- [defaultDataTypeRange](util_lerp.md#defaultdatatyperange)

### Functions

- [clampToInterval](util_lerp.md#clamptointerval)
- [computeInvlerp](util_lerp.md#computeinvlerp)
- [computeLerp](util_lerp.md#computelerp)
- [dataTypeCompare](util_lerp.md#datatypecompare)
- [dataTypeIntervalEqual](util_lerp.md#datatypeintervalequal)
- [dataTypeIntervalToJson](util_lerp.md#datatypeintervaltojson)
- [dataTypeValueNextAfter](util_lerp.md#datatypevaluenextafter)
- [getClampedInterval](util_lerp.md#getclampedinterval)
- [getClosestEndpoint](util_lerp.md#getclosestendpoint)
- [getIntervalBoundsEffectiveFraction](util_lerp.md#getintervalboundseffectivefraction)
- [getIntervalBoundsEffectiveOffset](util_lerp.md#getintervalboundseffectiveoffset)
- [normalizeDataTypeInterval](util_lerp.md#normalizedatatypeinterval)
- [parseDataTypeInterval](util_lerp.md#parsedatatypeinterval)
- [parseDataTypeValue](util_lerp.md#parsedatatypevalue)
- [validateDataTypeInterval](util_lerp.md#validatedatatypeinterval)

## Type Aliases

### DataTypeInterval

Ƭ **DataTypeInterval**: [`number`, `number`] \| [[`Uint64`](../classes/util_uint64.Uint64.md), [`Uint64`](../classes/util_uint64.Uint64.md)]

#### Defined in

[src/neuroglancer/util/lerp.ts:22](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/lerp.ts#L22)

## Variables

### defaultDataTypeRange

• `Const` **defaultDataTypeRange**: [`Record`](annotation_annotation_layer_state._internal_.md#record)<[`DataType`](../enums/util_data_type.DataType.md), [`DataTypeInterval`](util_lerp.md#datatypeinterval)\>

#### Defined in

[src/neuroglancer/util/lerp.ts:24](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/lerp.ts#L24)

## Functions

### clampToInterval

▸ **clampToInterval**(`range`, `value`): `number` \| [`Uint64`](../classes/util_uint64.Uint64.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `range` | [`DataTypeInterval`](util_lerp.md#datatypeinterval) |
| `value` | `number` \| [`Uint64`](../classes/util_uint64.Uint64.md) |

#### Returns

`number` \| [`Uint64`](../classes/util_uint64.Uint64.md)

#### Defined in

[src/neuroglancer/util/lerp.ts:97](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/lerp.ts#L97)

___

### computeInvlerp

▸ **computeInvlerp**(`range`, `value`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `range` | [`DataTypeInterval`](util_lerp.md#datatypeinterval) |
| `value` | `number` \| [`Uint64`](../classes/util_uint64.Uint64.md) |

#### Returns

`number`

#### Defined in

[src/neuroglancer/util/lerp.ts:35](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/lerp.ts#L35)

___

### computeLerp

▸ **computeLerp**(`range`, `dataType`, `value`): `number` \| [`Uint64`](../classes/util_uint64.Uint64.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `range` | [`DataTypeInterval`](util_lerp.md#datatypeinterval) |
| `dataType` | [`DataType`](../enums/util_data_type.DataType.md) |
| `value` | `number` |

#### Returns

`number` \| [`Uint64`](../classes/util_uint64.Uint64.md)

#### Defined in

[src/neuroglancer/util/lerp.ts:55](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/lerp.ts#L55)

___

### dataTypeCompare

▸ **dataTypeCompare**(`a`, `b`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` \| [`Uint64`](../classes/util_uint64.Uint64.md) |
| `b` | `number` \| [`Uint64`](../classes/util_uint64.Uint64.md) |

#### Returns

`number`

#### Defined in

[src/neuroglancer/util/lerp.ts:122](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/lerp.ts#L122)

___

### dataTypeIntervalEqual

▸ **dataTypeIntervalEqual**(`dataType`, `a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataType` | [`DataType`](../enums/util_data_type.DataType.md) |
| `a` | [`DataTypeInterval`](util_lerp.md#datatypeinterval) |
| `b` | [`DataTypeInterval`](util_lerp.md#datatypeinterval) |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/util/lerp.ts:180](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/lerp.ts#L180)

___

### dataTypeIntervalToJson

▸ **dataTypeIntervalToJson**(`range`, `dataType`, `defaultRange?`): `undefined` \| `string`[] \| [`number`, `number`] \| [[`Uint64`](../classes/util_uint64.Uint64.md), [`Uint64`](../classes/util_uint64.Uint64.md)]

#### Parameters

| Name | Type |
| :------ | :------ |
| `range` | [`DataTypeInterval`](util_lerp.md#datatypeinterval) |
| `dataType` | [`DataType`](../enums/util_data_type.DataType.md) |
| `defaultRange` | [`DataTypeInterval`](util_lerp.md#datatypeinterval) |

#### Returns

`undefined` \| `string`[] \| [`number`, `number`] \| [[`Uint64`](../classes/util_uint64.Uint64.md), [`Uint64`](../classes/util_uint64.Uint64.md)]

#### Defined in

[src/neuroglancer/util/lerp.ts:190](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/lerp.ts#L190)

___

### dataTypeValueNextAfter

▸ **dataTypeValueNextAfter**(`dataType`, `value`, `sign`): `number` \| [`Uint64`](../classes/util_uint64.Uint64.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataType` | [`DataType`](../enums/util_data_type.DataType.md) |
| `value` | `number` \| [`Uint64`](../classes/util_uint64.Uint64.md) |
| `sign` | ``1`` \| ``-1`` |

#### Returns

`number` \| [`Uint64`](../classes/util_uint64.Uint64.md)

#### Defined in

[src/neuroglancer/util/lerp.ts:200](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/lerp.ts#L200)

___

### getClampedInterval

▸ **getClampedInterval**(`bounds`, `range`): [`DataTypeInterval`](util_lerp.md#datatypeinterval)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | [`DataTypeInterval`](util_lerp.md#datatypeinterval) |
| `range` | [`DataTypeInterval`](util_lerp.md#datatypeinterval) |

#### Returns

[`DataTypeInterval`](util_lerp.md#datatypeinterval)

#### Defined in

[src/neuroglancer/util/lerp.ts:105](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/lerp.ts#L105)

___

### getClosestEndpoint

▸ **getClosestEndpoint**(`range`, `value`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `range` | [`DataTypeInterval`](util_lerp.md#datatypeinterval) |
| `value` | `number` \| [`Uint64`](../classes/util_uint64.Uint64.md) |

#### Returns

`number`

#### Defined in

[src/neuroglancer/util/lerp.ts:133](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/lerp.ts#L133)

___

### getIntervalBoundsEffectiveFraction

▸ **getIntervalBoundsEffectiveFraction**(`dataType`, `interval`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataType` | [`DataType`](../enums/util_data_type.DataType.md) |
| `interval` | [`DataTypeInterval`](util_lerp.md#datatypeinterval) |

#### Returns

`number`

#### Defined in

[src/neuroglancer/util/lerp.ts:240](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/lerp.ts#L240)

___

### getIntervalBoundsEffectiveOffset

▸ **getIntervalBoundsEffectiveOffset**(`dataType`, `interval`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataType` | [`DataType`](../enums/util_data_type.DataType.md) |
| `interval` | [`DataTypeInterval`](util_lerp.md#datatypeinterval) |

#### Returns

`number`

#### Defined in

[src/neuroglancer/util/lerp.ts:227](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/lerp.ts#L227)

___

### normalizeDataTypeInterval

▸ **normalizeDataTypeInterval**(`interval`): [`DataTypeInterval`](util_lerp.md#datatypeinterval)

#### Parameters

| Name | Type |
| :------ | :------ |
| `interval` | [`DataTypeInterval`](util_lerp.md#datatypeinterval) |

#### Returns

[`DataTypeInterval`](util_lerp.md#datatypeinterval)

#### Defined in

[src/neuroglancer/util/lerp.ts:117](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/lerp.ts#L117)

___

### parseDataTypeInterval

▸ **parseDataTypeInterval**(`obj`, `dataType`): [`DataTypeInterval`](util_lerp.md#datatypeinterval)

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `unknown` |
| `dataType` | [`DataType`](../enums/util_data_type.DataType.md) |

#### Returns

[`DataTypeInterval`](util_lerp.md#datatypeinterval)

#### Defined in

[src/neuroglancer/util/lerp.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/lerp.ts#L175)

___

### parseDataTypeValue

▸ **parseDataTypeValue**(`dataType`, `x`): `number` \| [`Uint64`](../classes/util_uint64.Uint64.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataType` | [`DataType`](../enums/util_data_type.DataType.md) |
| `x` | `unknown` |

#### Returns

`number` \| [`Uint64`](../classes/util_uint64.Uint64.md)

#### Defined in

[src/neuroglancer/util/lerp.ts:146](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/lerp.ts#L146)

___

### validateDataTypeInterval

▸ **validateDataTypeInterval**(`interval`): [`DataTypeInterval`](util_lerp.md#datatypeinterval)

#### Parameters

| Name | Type |
| :------ | :------ |
| `interval` | [`DataTypeInterval`](util_lerp.md#datatypeinterval) |

#### Returns

[`DataTypeInterval`](util_lerp.md#datatypeinterval)

#### Defined in

[src/neuroglancer/util/lerp.ts:111](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/lerp.ts#L111)
