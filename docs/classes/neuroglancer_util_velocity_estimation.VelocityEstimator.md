[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/util/velocity\_estimation](../modules/neuroglancer_util_velocity_estimation.md) / VelocityEstimator

# Class: VelocityEstimator

[neuroglancer/util/velocity_estimation](../modules/neuroglancer_util_velocity_estimation.md).VelocityEstimator

## Table of contents

### Constructors

- [constructor](neuroglancer_util_velocity_estimation.VelocityEstimator.md#constructor)

### Properties

- [lastTime](neuroglancer_util_velocity_estimation.VelocityEstimator.md#lasttime)
- [mean](neuroglancer_util_velocity_estimation.VelocityEstimator.md#mean)
- [modelHalfLifeMilliseconds](neuroglancer_util_velocity_estimation.VelocityEstimator.md#modelhalflifemilliseconds)
- [numSamples](neuroglancer_util_velocity_estimation.VelocityEstimator.md#numsamples)
- [prevPosition](neuroglancer_util_velocity_estimation.VelocityEstimator.md#prevposition)
- [rank](neuroglancer_util_velocity_estimation.VelocityEstimator.md#rank)
- [variance](neuroglancer_util_velocity_estimation.VelocityEstimator.md#variance)
- [velocity](neuroglancer_util_velocity_estimation.VelocityEstimator.md#velocity)
- [velocityHalfLifeMilliseconds](neuroglancer_util_velocity_estimation.VelocityEstimator.md#velocityhalflifemilliseconds)

### Methods

- [addSample](neuroglancer_util_velocity_estimation.VelocityEstimator.md#addsample)
- [reset](neuroglancer_util_velocity_estimation.VelocityEstimator.md#reset)

## Constructors

### constructor

• **new VelocityEstimator**(`velocityHalfLifeMilliseconds?`, `modelHalfLifeMilliseconds?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `velocityHalfLifeMilliseconds` | `number` | `VELOCITY_HALF_LIFE_MS` |
| `modelHalfLifeMilliseconds` | `number` | `MODEL_HALF_LIFE_MS` |

#### Defined in

[src/neuroglancer/util/velocity_estimation.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/velocity_estimation.ts#L47)

## Properties

### lastTime

• `Private` **lastTime**: `number` = `Number.NEGATIVE_INFINITY`

#### Defined in

[src/neuroglancer/util/velocity_estimation.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/velocity_estimation.ts#L31)

___

### mean

• **mean**: `Float32Array`

#### Defined in

[src/neuroglancer/util/velocity_estimation.ts:43](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/velocity_estimation.ts#L43)

___

### modelHalfLifeMilliseconds

• **modelHalfLifeMilliseconds**: `number` = `MODEL_HALF_LIFE_MS`

___

### numSamples

• `Private` **numSamples**: `number` = `0`

#### Defined in

[src/neuroglancer/util/velocity_estimation.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/velocity_estimation.ts#L34)

___

### prevPosition

• `Private` **prevPosition**: `Float32Array`

#### Defined in

[src/neuroglancer/util/velocity_estimation.ts:37](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/velocity_estimation.ts#L37)

___

### rank

• **rank**: `number` = `0`

#### Defined in

[src/neuroglancer/util/velocity_estimation.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/velocity_estimation.ts#L32)

___

### variance

• **variance**: `Float32Array`

#### Defined in

[src/neuroglancer/util/velocity_estimation.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/velocity_estimation.ts#L45)

___

### velocity

• `Private` **velocity**: `Float32Array`

#### Defined in

[src/neuroglancer/util/velocity_estimation.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/velocity_estimation.ts#L40)

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

[src/neuroglancer/util/velocity_estimation.ts:61](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/velocity_estimation.ts#L61)

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

[src/neuroglancer/util/velocity_estimation.ts:51](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/velocity_estimation.ts#L51)
