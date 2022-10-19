[neuroglancer](../README.md) / [Modules](../modules.md) / util/float32\_to\_string

# Module: util/float32\_to\_string

## Table of contents

### Functions

- [float32ToString](util_float32_to_string.md#float32tostring)

## Functions

### float32ToString

▸ **float32ToString**(`x`): `string`

Converts `x` into its nearest single precision float representation and
returns a minimal string representation, with as many digits as necessary
to uniquely distinguish single precision `x` from its adjacent single
precision values.

E.g.: 0.299999999000000017179701217174d → 0.30000001192092896f → '0.3')

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |

#### Returns

`string`

#### Defined in

[src/neuroglancer/util/float32_to_string.ts:28](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/float32_to_string.ts#L28)
