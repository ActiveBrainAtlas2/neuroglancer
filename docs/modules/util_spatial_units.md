[neuroglancer](../README.md) / [Modules](../modules.md) / util/spatial\_units

# Module: util/spatial\_units

## Table of contents

### Functions

- [formatBoundingBoxVolume](util_spatial_units.md#formatboundingboxvolume)
- [formatIntegerBounds](util_spatial_units.md#formatintegerbounds)
- [formatIntegerPoint](util_spatial_units.md#formatintegerpoint)
- [formatLength](util_spatial_units.md#formatlength)
- [formatVolume](util_spatial_units.md#formatvolume)

## Functions

### formatBoundingBoxVolume

▸ **formatBoundingBoxVolume**(`pointA`, `pointB`, `transform`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pointA` | [`vec3`](../classes/util_geom.vec3.md) |
| `pointB` | [`vec3`](../classes/util_geom.vec3.md) |
| `transform` | [`mat4`](../classes/util_geom.mat4.md) |

#### Returns

`string`

#### Defined in

[src/neuroglancer/util/spatial_units.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/spatial_units.ts#L53)

___

### formatIntegerBounds

▸ **formatIntegerBounds**(`bounds`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | `Float32Array` |

#### Returns

`string`

#### Defined in

[src/neuroglancer/util/spatial_units.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/spatial_units.ts#L30)

___

### formatIntegerPoint

▸ **formatIntegerPoint**(`point`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | `Float32Array` |

#### Returns

`string`

#### Defined in

[src/neuroglancer/util/spatial_units.ts:20](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/spatial_units.ts#L20)

___

### formatLength

▸ **formatLength**(`lengthInNanometers`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lengthInNanometers` | `number` |

#### Returns

`string`

#### Defined in

[src/neuroglancer/util/spatial_units.ts:41](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/spatial_units.ts#L41)

___

### formatVolume

▸ **formatVolume**(`volumeInCubicNanometers`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `volumeInCubicNanometers` | `number` |

#### Returns

`string`

#### Defined in

[src/neuroglancer/util/spatial_units.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/spatial_units.ts#L47)
