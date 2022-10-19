[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/util/si\_units

# Module: neuroglancer/util/si\_units

## Table of contents

### Modules

- [&lt;internal\&gt;](neuroglancer_util_si_units._internal_.md)

### Interfaces

- [SiPrefix](../interfaces/neuroglancer_util_si_units.SiPrefix.md)

### Variables

- [exponentToPrefix](neuroglancer_util_si_units.md#exponenttoprefix)
- [siPrefixes](neuroglancer_util_si_units.md#siprefixes)
- [supportedUnits](neuroglancer_util_si_units.md#supportedunits)

### Functions

- [formatScaleWithUnit](neuroglancer_util_si_units.md#formatscalewithunit)
- [formatScaleWithUnitAsString](neuroglancer_util_si_units.md#formatscalewithunitasstring)
- [parseScale](neuroglancer_util_si_units.md#parsescale)
- [pickSiPrefix](neuroglancer_util_si_units.md#picksiprefix)
- [scaleByExp10](neuroglancer_util_si_units.md#scalebyexp10)
- [unitFromJson](neuroglancer_util_si_units.md#unitfromjson)

## Variables

### exponentToPrefix

• `Const` **exponentToPrefix**: `Map`<`number`, `string`\>

#### Defined in

[src/neuroglancer/util/si_units.ts:57](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/si_units.ts#L57)

___

### siPrefixes

• `Const` **siPrefixes**: readonly [`SiPrefix`](../interfaces/neuroglancer_util_si_units.SiPrefix.md)[]

#### Defined in

[src/neuroglancer/util/si_units.ts:24](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/si_units.ts#L24)

___

### supportedUnits

• `Const` **supportedUnits**: `Map`<`string`, { `exponent`: `number` ; `unit`: `string`  }\>

#### Defined in

[src/neuroglancer/util/si_units.ts:55](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/si_units.ts#L55)

## Functions

### formatScaleWithUnit

▸ **formatScaleWithUnit**(`scale`, `unit`, `options?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scale` | `number` |
| `unit` | `string` |
| `options` | [`FormatScaleWithUnitOptions`](../interfaces/neuroglancer_util_si_units._internal_.FormatScaleWithUnitOptions.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `prefix` | `string` |
| `scale` | `string` |
| `unit` | `string` |

#### Defined in

[src/neuroglancer/util/si_units.ts:77](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/si_units.ts#L77)

___

### formatScaleWithUnitAsString

▸ **formatScaleWithUnitAsString**(`scale`, `unit`, `options?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scale` | `number` |
| `unit` | `string` |
| `options?` | [`FormatScaleWithUnitOptions`](../interfaces/neuroglancer_util_si_units._internal_.FormatScaleWithUnitOptions.md) |

#### Returns

`string`

#### Defined in

[src/neuroglancer/util/si_units.ts:126](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/si_units.ts#L126)

___

### parseScale

▸ **parseScale**(`s`): `undefined` \| { `scale`: `number` = 1; `unit`: `string` = '' }

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`undefined` \| { `scale`: `number` = 1; `unit`: `string` = '' }

#### Defined in

[src/neuroglancer/util/si_units.ts:133](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/si_units.ts#L133)

___

### pickSiPrefix

▸ **pickSiPrefix**(`x`): [`SiPrefix`](../interfaces/neuroglancer_util_si_units.SiPrefix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |

#### Returns

[`SiPrefix`](../interfaces/neuroglancer_util_si_units.SiPrefix.md)

#### Defined in

[src/neuroglancer/util/si_units.ts:65](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/si_units.ts#L65)

___

### scaleByExp10

▸ **scaleByExp10**(`scale`, `exponent`): `number`

Returns `scale * 10**exponent`, but uses division for negative exponents to reduce loss of
precision.

#### Parameters

| Name | Type |
| :------ | :------ |
| `scale` | `number` |
| `exponent` | `number` |

#### Returns

`number`

#### Defined in

[src/neuroglancer/util/si_units.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/si_units.ts#L171)

___

### unitFromJson

▸ **unitFromJson**(`x`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `unknown` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `exponent` | `number` |
| `unit` | `string` |

#### Defined in

[src/neuroglancer/util/si_units.ts:159](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/si_units.ts#L159)
