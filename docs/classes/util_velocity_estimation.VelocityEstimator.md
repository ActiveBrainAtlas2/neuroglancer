[neuroglancer](../README.md) / [Modules](../modules.md) / [util/velocity\_estimation](../modules/util_velocity_estimation.md) / VelocityEstimator

# Class: VelocityEstimator

[util/velocity_estimation](../modules/util_velocity_estimation.md).VelocityEstimator

## Table of contents

### Constructors

- [constructor](util_velocity_estimation.VelocityEstimator.md#constructor)

### Properties

- [lastTime](util_velocity_estimation.VelocityEstimator.md#lasttime)
- [mean](util_velocity_estimation.VelocityEstimator.md#mean)
- [modelHalfLifeMilliseconds](util_velocity_estimation.VelocityEstimator.md#modelhalflifemilliseconds)
- [numSamples](util_velocity_estimation.VelocityEstimator.md#numsamples)
- [prevPosition](util_velocity_estimation.VelocityEstimator.md#prevposition)
- [rank](util_velocity_estimation.VelocityEstimator.md#rank)
- [variance](util_velocity_estimation.VelocityEstimator.md#variance)
- [velocity](util_velocity_estimation.VelocityEstimator.md#velocity)
- [velocityHalfLifeMilliseconds](util_velocity_estimation.VelocityEstimator.md#velocityhalflifemilliseconds)

### Methods

- [addSample](util_velocity_estimation.VelocityEstimator.md#addsample)
- [reset](util_velocity_estimation.VelocityEstimator.md#reset)

## Constructors

### constructor

• **new VelocityEstimator**(`velocityHalfLifeMilliseconds?`, `modelHalfLifeMilliseconds?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `velocityHalfLifeMilliseconds` | `number` | `VELOCITY_HALF_LIFE_MS` |
| `modelHalfLifeMilliseconds` | `number` | `MODEL_HALF_LIFE_MS` |

#### Defined in

[src/neuroglancer/util/velocity_estimation.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/velocity_estimation.ts#L47)

## Properties

### lastTime

• `Private` **lastTime**: `number` = `Number.NEGATIVE_INFINITY`

#### Defined in

[src/neuroglancer/util/velocity_estimation.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/velocity_estimation.ts#L31)

___

### mean

• **mean**: `Float32Array`

#### Defined in

[src/neuroglancer/util/velocity_estimation.ts:43](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/velocity_estimation.ts#L43)

___

### modelHalfLifeMilliseconds

• **modelHalfLifeMilliseconds**: `number` = `MODEL_HALF_LIFE_MS`

___

### numSamples

• `Private` **numSamples**: `number` = `0`

#### Defined in

[src/neuroglancer/util/velocity_estimation.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/velocity_estimation.ts#L34)

___

### prevPosition

• `Private` **prevPosition**: `Float32Array`

#### Defined in

[src/neuroglancer/util/velocity_estimation.ts:37](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/velocity_estimation.ts#L37)

___

### rank

• **rank**: `number` = `0`

#### Defined in

[src/neuroglancer/util/velocity_estimation.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/velocity_estimation.ts#L32)

___

### variance

• **variance**: `Float32Array`

#### Defined in

[src/neuroglancer/util/velocity_estimation.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/velocity_estimation.ts#L45)

___

### velocity

• `Private` **velocity**: `Float32Array`

#### Defined in

[src/neuroglancer/util/velocity_estimation.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/velocity_estimation.ts#L40)

___

### velocityHalfLifeMilliseconds

• **velocityHalfLifeMilliseconds**: `number` = `VELOCITY_HALF_LIFE_MS`

## Methods

### addSample

▸ **addSample**(`position`, `time?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | `Float32Array` |
| `time` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/velocity_estimation.ts:61](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/velocity_estimation.ts#L61)

___

### reset

▸ **reset**(`rank`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rank` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/velocity_estimation.ts:51](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/velocity_estimation.ts#L51)
