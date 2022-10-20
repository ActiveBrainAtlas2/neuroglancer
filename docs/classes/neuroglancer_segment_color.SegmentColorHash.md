[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/segment\_color](../modules/neuroglancer_segment_color.md) / SegmentColorHash

# Class: SegmentColorHash

[neuroglancer/segment_color](../modules/neuroglancer_segment_color.md).SegmentColorHash

## Implements

- [`Trackable`](../interfaces/neuroglancer_util_trackable.Trackable.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_segment_color.SegmentColorHash.md#constructor)

### Properties

- [changed](neuroglancer_segment_color.SegmentColorHash.md#changed)
- [hashSeed](neuroglancer_segment_color.SegmentColorHash.md#hashseed)

### Accessors

- [value](neuroglancer_segment_color.SegmentColorHash.md#value)

### Methods

- [compute](neuroglancer_segment_color.SegmentColorHash.md#compute)
- [computeCssColor](neuroglancer_segment_color.SegmentColorHash.md#computecsscolor)
- [randomize](neuroglancer_segment_color.SegmentColorHash.md#randomize)
- [reset](neuroglancer_segment_color.SegmentColorHash.md#reset)
- [restoreState](neuroglancer_segment_color.SegmentColorHash.md#restorestate)
- [toJSON](neuroglancer_segment_color.SegmentColorHash.md#tojson)
- [toString](neuroglancer_segment_color.SegmentColorHash.md#tostring)
- [getDefault](neuroglancer_segment_color.SegmentColorHash.md#getdefault)

## Constructors

### constructor

• **new SegmentColorHash**(`hashSeed?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `hashSeed` | `number` |

#### Defined in

[src/neuroglancer/segment_color.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segment_color.ts#L75)

## Properties

### changed

• **changed**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Implementation of

[Trackable](../interfaces/neuroglancer_util_trackable.Trackable.md).[changed](../interfaces/neuroglancer_util_trackable.Trackable.md#changed)

#### Defined in

[src/neuroglancer/segment_color.ts:73](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segment_color.ts#L73)

___

### hashSeed

• **hashSeed**: `number`

#### Defined in

[src/neuroglancer/segment_color.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segment_color.ts#L75)

## Accessors

### value

• `get` **value**(): `number`

#### Returns

`number`

#### Defined in

[src/neuroglancer/segment_color.ts:81](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segment_color.ts#L81)

• `set` **value**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/segment_color.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segment_color.ts#L85)

## Methods

### compute

▸ **compute**(`out`, `x`): `Float32Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `out` | `Float32Array` |
| `x` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |

#### Returns

`Float32Array`

#### Defined in

[src/neuroglancer/segment_color.ts:92](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segment_color.ts#L92)

___

### computeCssColor

▸ **computeCssColor**(`x`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |

#### Returns

`string`

#### Defined in

[src/neuroglancer/segment_color.ts:101](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segment_color.ts#L101)

___

### randomize

▸ **randomize**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/segment_color.ts:106](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segment_color.ts#L106)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Implementation of

Trackable.reset

#### Defined in

[src/neuroglancer/segment_color.ts:119](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segment_color.ts#L119)

___

### restoreState

▸ **restoreState**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `any` |

#### Returns

`void`

#### Implementation of

Trackable.restoreState

#### Defined in

[src/neuroglancer/segment_color.ts:123](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segment_color.ts#L123)

___

### toJSON

▸ **toJSON**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Implementation of

Trackable.toJSON

#### Defined in

[src/neuroglancer/segment_color.ts:115](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segment_color.ts#L115)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[src/neuroglancer/segment_color.ts:111](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segment_color.ts#L111)

___

### getDefault

▸ `Static` **getDefault**(): [`SegmentColorHash`](neuroglancer_segment_color.SegmentColorHash.md)

#### Returns

[`SegmentColorHash`](neuroglancer_segment_color.SegmentColorHash.md)

#### Defined in

[src/neuroglancer/segment_color.ts:77](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segment_color.ts#L77)
