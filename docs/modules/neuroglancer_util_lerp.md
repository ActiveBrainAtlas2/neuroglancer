[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/util/lerp

# Module: neuroglancer/util/lerp

## Table of contents

### Type Aliases

- [DataTypeInterval](neuroglancer_util_lerp.md#datatypeinterval)

### Variables

- [defaultDataTypeRange](neuroglancer_util_lerp.md#defaultdatatyperange)

### Functions

- [clampToInterval](neuroglancer_util_lerp.md#clamptointerval)
- [computeInvlerp](neuroglancer_util_lerp.md#computeinvlerp)
- [computeLerp](neuroglancer_util_lerp.md#computelerp)
- [dataTypeCompare](neuroglancer_util_lerp.md#datatypecompare)
- [dataTypeIntervalEqual](neuroglancer_util_lerp.md#datatypeintervalequal)
- [dataTypeIntervalToJson](neuroglancer_util_lerp.md#datatypeintervaltojson)
- [dataTypeValueNextAfter](neuroglancer_util_lerp.md#datatypevaluenextafter)
- [getClampedInterval](neuroglancer_util_lerp.md#getclampedinterval)
- [getClosestEndpoint](neuroglancer_util_lerp.md#getclosestendpoint)
- [getIntervalBoundsEffectiveFraction](neuroglancer_util_lerp.md#getintervalboundseffectivefraction)
- [getIntervalBoundsEffectiveOffset](neuroglancer_util_lerp.md#getintervalboundseffectiveoffset)
- [normalizeDataTypeInterval](neuroglancer_util_lerp.md#normalizedatatypeinterval)
- [parseDataTypeInterval](neuroglancer_util_lerp.md#parsedatatypeinterval)
- [parseDataTypeValue](neuroglancer_util_lerp.md#parsedatatypevalue)
- [validateDataTypeInterval](neuroglancer_util_lerp.md#validatedatatypeinterval)

## Type Aliases

### DataTypeInterval

Ƭ **DataTypeInterval**: [`number`, `number`] \| [[`Uint64`](../classes/neuroglancer_util_uint64.Uint64.md), [`Uint64`](../classes/neuroglancer_util_uint64.Uint64.md)]

#### Defined in

[src/neuroglancer/util/lerp.ts:22](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/lerp.ts#L22)

## Variables

### defaultDataTypeRange

• `Const` **defaultDataTypeRange**: [`Record`](main_module._internal_.md#record)<[`DataType`](../enums/neuroglancer_util_data_type.DataType.md), [`DataTypeInterval`](neuroglancer_util_lerp.md#datatypeinterval)\>

#### Defined in

[src/neuroglancer/util/lerp.ts:24](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/lerp.ts#L24)

## Functions

### clampToInterval

▸ **clampToInterval**(`range`, `value`): `number` \| [`Uint64`](../classes/neuroglancer_util_uint64.Uint64.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `range` | [`DataTypeInterval`](neuroglancer_util_lerp.md#datatypeinterval) |
| `value` | `number` \| [`Uint64`](../classes/neuroglancer_util_uint64.Uint64.md) |

#### Returns

`number` \| [`Uint64`](../classes/neuroglancer_util_uint64.Uint64.md)

#### Defined in

[src/neuroglancer/util/lerp.ts:97](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/lerp.ts#L97)

___

### computeInvlerp

▸ **computeInvlerp**(`range`, `value`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `range` | [`DataTypeInterval`](neuroglancer_util_lerp.md#datatypeinterval) |
| `value` | `number` \| [`Uint64`](../classes/neuroglancer_util_uint64.Uint64.md) |

#### Returns

`number`

#### Defined in

[src/neuroglancer/util/lerp.ts:35](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/lerp.ts#L35)

___

### computeLerp

▸ **computeLerp**(`range`, `dataType`, `value`): `number` \| [`Uint64`](../classes/neuroglancer_util_uint64.Uint64.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `range` | [`DataTypeInterval`](neuroglancer_util_lerp.md#datatypeinterval) |
| `dataType` | [`DataType`](../enums/neuroglancer_util_data_type.DataType.md) |
| `value` | `number` |

#### Returns

`number` \| [`Uint64`](../classes/neuroglancer_util_uint64.Uint64.md)

#### Defined in

[src/neuroglancer/util/lerp.ts:55](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/lerp.ts#L55)

___

### dataTypeCompare

▸ **dataTypeCompare**(`a`, `b`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` \| [`Uint64`](../classes/neuroglancer_util_uint64.Uint64.md) |
| `b` | `number` \| [`Uint64`](../classes/neuroglancer_util_uint64.Uint64.md) |

#### Returns

`number`

#### Defined in

[src/neuroglancer/util/lerp.ts:122](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/lerp.ts#L122)

___

### dataTypeIntervalEqual

▸ **dataTypeIntervalEqual**(`dataType`, `a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataType` | [`DataType`](../enums/neuroglancer_util_data_type.DataType.md) |
| `a` | [`DataTypeInterval`](neuroglancer_util_lerp.md#datatypeinterval) |
| `b` | [`DataTypeInterval`](neuroglancer_util_lerp.md#datatypeinterval) |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/util/lerp.ts:180](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/lerp.ts#L180)

___

### dataTypeIntervalToJson

▸ **dataTypeIntervalToJson**(`range`, `dataType`, `defaultRange?`): `undefined` \| `string`[] \| [`number`, `number`] \| [[`Uint64`](../classes/neuroglancer_util_uint64.Uint64.md), [`Uint64`](../classes/neuroglancer_util_uint64.Uint64.md)]

#### Parameters

| Name | Type |
| :------ | :------ |
| `range` | [`DataTypeInterval`](neuroglancer_util_lerp.md#datatypeinterval) |
| `dataType` | [`DataType`](../enums/neuroglancer_util_data_type.DataType.md) |
| `defaultRange` | [`DataTypeInterval`](neuroglancer_util_lerp.md#datatypeinterval) |

#### Returns

`undefined` \| `string`[] \| [`number`, `number`] \| [[`Uint64`](../classes/neuroglancer_util_uint64.Uint64.md), [`Uint64`](../classes/neuroglancer_util_uint64.Uint64.md)]

#### Defined in

[src/neuroglancer/util/lerp.ts:190](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/lerp.ts#L190)

___

### dataTypeValueNextAfter

▸ **dataTypeValueNextAfter**(`dataType`, `value`, `sign`): `number` \| [`Uint64`](../classes/neuroglancer_util_uint64.Uint64.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataType` | [`DataType`](../enums/neuroglancer_util_data_type.DataType.md) |
| `value` | `number` \| [`Uint64`](../classes/neuroglancer_util_uint64.Uint64.md) |
| `sign` | ``1`` \| ``-1`` |

#### Returns

`number` \| [`Uint64`](../classes/neuroglancer_util_uint64.Uint64.md)

#### Defined in

[src/neuroglancer/util/lerp.ts:200](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/lerp.ts#L200)

___

### getClampedInterval

▸ **getClampedInterval**(`bounds`, `range`): [`DataTypeInterval`](neuroglancer_util_lerp.md#datatypeinterval)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | [`DataTypeInterval`](neuroglancer_util_lerp.md#datatypeinterval) |
| `range` | [`DataTypeInterval`](neuroglancer_util_lerp.md#datatypeinterval) |

#### Returns

[`DataTypeInterval`](neuroglancer_util_lerp.md#datatypeinterval)

#### Defined in

[src/neuroglancer/util/lerp.ts:105](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/lerp.ts#L105)

___

### getClosestEndpoint

▸ **getClosestEndpoint**(`range`, `value`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `range` | [`DataTypeInterval`](neuroglancer_util_lerp.md#datatypeinterval) |
| `value` | `number` \| [`Uint64`](../classes/neuroglancer_util_uint64.Uint64.md) |

#### Returns

`number`

#### Defined in

[src/neuroglancer/util/lerp.ts:133](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/lerp.ts#L133)

___

### getIntervalBoundsEffectiveFraction

▸ **getIntervalBoundsEffectiveFraction**(`dataType`, `interval`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataType` | [`DataType`](../enums/neuroglancer_util_data_type.DataType.md) |
| `interval` | [`DataTypeInterval`](neuroglancer_util_lerp.md#datatypeinterval) |

#### Returns

`number`

#### Defined in

[src/neuroglancer/util/lerp.ts:240](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/lerp.ts#L240)

___

### getIntervalBoundsEffectiveOffset

▸ **getIntervalBoundsEffectiveOffset**(`dataType`, `interval`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataType` | [`DataType`](../enums/neuroglancer_util_data_type.DataType.md) |
| `interval` | [`DataTypeInterval`](neuroglancer_util_lerp.md#datatypeinterval) |

#### Returns

`number`

#### Defined in

[src/neuroglancer/util/lerp.ts:227](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/lerp.ts#L227)

___

### normalizeDataTypeInterval

▸ **normalizeDataTypeInterval**(`interval`): [`DataTypeInterval`](neuroglancer_util_lerp.md#datatypeinterval)

#### Parameters

| Name | Type |
| :------ | :------ |
| `interval` | [`DataTypeInterval`](neuroglancer_util_lerp.md#datatypeinterval) |

#### Returns

[`DataTypeInterval`](neuroglancer_util_lerp.md#datatypeinterval)

#### Defined in

[src/neuroglancer/util/lerp.ts:117](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/lerp.ts#L117)

___

### parseDataTypeInterval

▸ **parseDataTypeInterval**(`obj`, `dataType`): [`DataTypeInterval`](neuroglancer_util_lerp.md#datatypeinterval)

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `unknown` |
| `dataType` | [`DataType`](../enums/neuroglancer_util_data_type.DataType.md) |

#### Returns

[`DataTypeInterval`](neuroglancer_util_lerp.md#datatypeinterval)

#### Defined in

[src/neuroglancer/util/lerp.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/lerp.ts#L175)

___

### parseDataTypeValue

▸ **parseDataTypeValue**(`dataType`, `x`): `number` \| [`Uint64`](../classes/neuroglancer_util_uint64.Uint64.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataType` | [`DataType`](../enums/neuroglancer_util_data_type.DataType.md) |
| `x` | `unknown` |

#### Returns

`number` \| [`Uint64`](../classes/neuroglancer_util_uint64.Uint64.md)

#### Defined in

[src/neuroglancer/util/lerp.ts:146](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/lerp.ts#L146)

___

### validateDataTypeInterval

▸ **validateDataTypeInterval**(`interval`): [`DataTypeInterval`](neuroglancer_util_lerp.md#datatypeinterval)

#### Parameters

| Name | Type |
| :------ | :------ |
| `interval` | [`DataTypeInterval`](neuroglancer_util_lerp.md#datatypeinterval) |

#### Returns

[`DataTypeInterval`](neuroglancer_util_lerp.md#datatypeinterval)

#### Defined in

[src/neuroglancer/util/lerp.ts:111](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/lerp.ts#L111)
