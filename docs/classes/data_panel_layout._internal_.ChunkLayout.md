[neuroglancer](../README.md) / [Modules](../modules.md) / [data\_panel\_layout](../modules/data_panel_layout.md) / [<internal\>](../modules/data_panel_layout._internal_.md) / ChunkLayout

# Class: ChunkLayout

[data_panel_layout](../modules/data_panel_layout.md).[<internal>](../modules/data_panel_layout._internal_.md).ChunkLayout

## Table of contents

### Constructors

- [constructor](data_panel_layout._internal_.ChunkLayout.md#constructor)

### Properties

- [detTransform](data_panel_layout._internal_.ChunkLayout.md#dettransform)
- [finiteRank](data_panel_layout._internal_.ChunkLayout.md#finiterank)
- [invTransform](data_panel_layout._internal_.ChunkLayout.md#invtransform)
- [size](data_panel_layout._internal_.ChunkLayout.md#size)
- [transform](data_panel_layout._internal_.ChunkLayout.md#transform)

### Methods

- [globalToLocalNormal](data_panel_layout._internal_.ChunkLayout.md#globaltolocalnormal)
- [globalToLocalSpatial](data_panel_layout._internal_.ChunkLayout.md#globaltolocalspatial)
- [localSpatialVectorToGlobal](data_panel_layout._internal_.ChunkLayout.md#localspatialvectortoglobal)
- [toObject](data_panel_layout._internal_.ChunkLayout.md#toobject)
- [fromObject](data_panel_layout._internal_.ChunkLayout.md#fromobject)

## Constructors

### constructor

• **new ChunkLayout**(`size`, `transform`, `finiteRank`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | [`vec3`](axes_lines._internal_.vec3.md) |
| `transform` | [`mat4`](axes_lines._internal_.mat4.md) |
| `finiteRank` | `number` |

#### Defined in

[src/neuroglancer/sliceview/chunk_layout.ts:43](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/chunk_layout.ts#L43)

## Properties

### detTransform

• **detTransform**: `number`

Determinant of `transform`.

#### Defined in

[src/neuroglancer/sliceview/chunk_layout.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/chunk_layout.ts#L39)

___

### finiteRank

• **finiteRank**: `number`

#### Defined in

[src/neuroglancer/sliceview/chunk_layout.ts:41](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/chunk_layout.ts#L41)

___

### invTransform

• **invTransform**: [`mat4`](axes_lines._internal_.mat4.md)

Inverse of transform.  Transform from global voxel coordinates to "chunk" coordinates.

#### Defined in

[src/neuroglancer/sliceview/chunk_layout.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/chunk_layout.ts#L34)

___

### size

• **size**: [`vec3`](axes_lines._internal_.vec3.md)

Size of each chunk in "chunk" coordinates.

#### Defined in

[src/neuroglancer/sliceview/chunk_layout.ts:24](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/chunk_layout.ts#L24)

___

### transform

• **transform**: [`mat4`](axes_lines._internal_.mat4.md)

Transform from local "chunk" coordinates to global voxel coordinates.

#### Defined in

[src/neuroglancer/sliceview/chunk_layout.ts:29](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/chunk_layout.ts#L29)

## Methods

### globalToLocalNormal

▸ **globalToLocalNormal**(`globalNormal`, `localNormal`): [`vec3`](axes_lines._internal_.vec3.md)

Returns the unnormalized normal vector.

#### Parameters

| Name | Type |
| :------ | :------ |
| `globalNormal` | [`vec3`](axes_lines._internal_.vec3.md) |
| `localNormal` | [`vec3`](axes_lines._internal_.vec3.md) |

#### Returns

[`vec3`](axes_lines._internal_.vec3.md)

#### Defined in

[src/neuroglancer/sliceview/chunk_layout.ts:77](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/chunk_layout.ts#L77)

___

### globalToLocalSpatial

▸ **globalToLocalSpatial**(`out`, `globalSpatial`): [`vec3`](axes_lines._internal_.vec3.md)

Transform global spatial coordinates to local spatial coordinates.

#### Parameters

| Name | Type |
| :------ | :------ |
| `out` | [`vec3`](axes_lines._internal_.vec3.md) |
| `globalSpatial` | [`vec3`](axes_lines._internal_.vec3.md) |

#### Returns

[`vec3`](axes_lines._internal_.vec3.md)

#### Defined in

[src/neuroglancer/sliceview/chunk_layout.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/chunk_layout.ts#L66)

___

### localSpatialVectorToGlobal

▸ **localSpatialVectorToGlobal**(`out`, `localVector`): [`vec3`](axes_lines._internal_.vec3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `out` | [`vec3`](axes_lines._internal_.vec3.md) |
| `localVector` | [`vec3`](axes_lines._internal_.vec3.md) |

#### Returns

[`vec3`](axes_lines._internal_.vec3.md)

#### Defined in

[src/neuroglancer/sliceview/chunk_layout.ts:70](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/chunk_layout.ts#L70)

___

### toObject

▸ **toObject**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `finiteRank` | `number` |
| `size` | [`vec3`](axes_lines._internal_.vec3.md) |
| `transform` | [`mat4`](axes_lines._internal_.mat4.md) |

#### Defined in

[src/neuroglancer/sliceview/chunk_layout.ts:55](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/chunk_layout.ts#L55)

___

### fromObject

▸ `Static` **fromObject**(`msg`): [`ChunkLayout`](data_panel_layout._internal_.ChunkLayout.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `any` |

#### Returns

[`ChunkLayout`](data_panel_layout._internal_.ChunkLayout.md)

#### Defined in

[src/neuroglancer/sliceview/chunk_layout.ts:59](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/chunk_layout.ts#L59)
