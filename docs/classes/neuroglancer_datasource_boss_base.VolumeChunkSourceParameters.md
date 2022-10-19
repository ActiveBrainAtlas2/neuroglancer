[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/datasource/boss/base](../modules/neuroglancer_datasource_boss_base.md) / VolumeChunkSourceParameters

# Class: VolumeChunkSourceParameters

[neuroglancer/datasource/boss/base](../modules/neuroglancer_datasource_boss_base.md).VolumeChunkSourceParameters

## Hierarchy

- [`BossSourceParameters`](neuroglancer_datasource_boss_base.BossSourceParameters.md)

  ↳ **`VolumeChunkSourceParameters`**

## Table of contents

### Constructors

- [constructor](neuroglancer_datasource_boss_base.VolumeChunkSourceParameters.md#constructor)

### Properties

- [baseUrl](neuroglancer_datasource_boss_base.VolumeChunkSourceParameters.md#baseurl)
- [channel](neuroglancer_datasource_boss_base.VolumeChunkSourceParameters.md#channel)
- [collection](neuroglancer_datasource_boss_base.VolumeChunkSourceParameters.md#collection)
- [encoding](neuroglancer_datasource_boss_base.VolumeChunkSourceParameters.md#encoding)
- [experiment](neuroglancer_datasource_boss_base.VolumeChunkSourceParameters.md#experiment)
- [resolution](neuroglancer_datasource_boss_base.VolumeChunkSourceParameters.md#resolution)
- [window](neuroglancer_datasource_boss_base.VolumeChunkSourceParameters.md#window)
- [RPC\_ID](neuroglancer_datasource_boss_base.VolumeChunkSourceParameters.md#rpc_id)

### Methods

- [stringify](neuroglancer_datasource_boss_base.VolumeChunkSourceParameters.md#stringify)

## Constructors

### constructor

• **new VolumeChunkSourceParameters**()

#### Inherited from

[BossSourceParameters](neuroglancer_datasource_boss_base.BossSourceParameters.md).[constructor](neuroglancer_datasource_boss_base.BossSourceParameters.md#constructor)

## Properties

### baseUrl

• **baseUrl**: `string`

#### Inherited from

[BossSourceParameters](neuroglancer_datasource_boss_base.BossSourceParameters.md).[baseUrl](neuroglancer_datasource_boss_base.BossSourceParameters.md#baseurl)

#### Defined in

[src/neuroglancer/datasource/boss/base.ts:20](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/boss/base.ts#L20)

___

### channel

• **channel**: `string`

#### Inherited from

[BossSourceParameters](neuroglancer_datasource_boss_base.BossSourceParameters.md).[channel](neuroglancer_datasource_boss_base.BossSourceParameters.md#channel)

#### Defined in

[src/neuroglancer/datasource/boss/base.ts:23](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/boss/base.ts#L23)

___

### collection

• **collection**: `string`

#### Inherited from

[BossSourceParameters](neuroglancer_datasource_boss_base.BossSourceParameters.md).[collection](neuroglancer_datasource_boss_base.BossSourceParameters.md#collection)

#### Defined in

[src/neuroglancer/datasource/boss/base.ts:21](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/boss/base.ts#L21)

___

### encoding

• **encoding**: `string`

#### Defined in

[src/neuroglancer/datasource/boss/base.ts:28](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/boss/base.ts#L28)

___

### experiment

• **experiment**: `string`

#### Inherited from

[BossSourceParameters](neuroglancer_datasource_boss_base.BossSourceParameters.md).[experiment](neuroglancer_datasource_boss_base.BossSourceParameters.md#experiment)

#### Defined in

[src/neuroglancer/datasource/boss/base.ts:22](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/boss/base.ts#L22)

___

### resolution

• **resolution**: `string`

#### Inherited from

[BossSourceParameters](neuroglancer_datasource_boss_base.BossSourceParameters.md).[resolution](neuroglancer_datasource_boss_base.BossSourceParameters.md#resolution)

#### Defined in

[src/neuroglancer/datasource/boss/base.ts:24](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/boss/base.ts#L24)

___

### window

• **window**: `undefined` \| [`vec2`](neuroglancer_util_geom.vec2.md)

#### Defined in

[src/neuroglancer/datasource/boss/base.ts:29](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/boss/base.ts#L29)

___

### RPC\_ID

▪ `Static` **RPC\_ID**: `string` = `'boss/VolumeChunkSource'`

#### Defined in

[src/neuroglancer/datasource/boss/base.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/boss/base.ts#L31)

## Methods

### stringify

▸ `Static` **stringify**(`parameters`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | [`VolumeChunkSourceParameters`](neuroglancer_datasource_boss_base.VolumeChunkSourceParameters.md) |

#### Returns

`string`

#### Defined in

[src/neuroglancer/datasource/boss/base.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/boss/base.ts#L33)
