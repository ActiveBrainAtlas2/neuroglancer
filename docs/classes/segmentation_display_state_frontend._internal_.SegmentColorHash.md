[neuroglancer](../README.md) / [Modules](../modules.md) / [segmentation\_display\_state/frontend](../modules/segmentation_display_state_frontend.md) / [<internal\>](../modules/segmentation_display_state_frontend._internal_.md) / SegmentColorHash

# Class: SegmentColorHash

[segmentation_display_state/frontend](../modules/segmentation_display_state_frontend.md).[<internal>](../modules/segmentation_display_state_frontend._internal_.md).SegmentColorHash

## Implements

- [`Trackable`](../interfaces/util_trackable.Trackable.md)

## Table of contents

### Constructors

- [constructor](segmentation_display_state_frontend._internal_.SegmentColorHash.md#constructor)

### Properties

- [changed](segmentation_display_state_frontend._internal_.SegmentColorHash.md#changed)
- [hashSeed](segmentation_display_state_frontend._internal_.SegmentColorHash.md#hashseed)

### Accessors

- [value](segmentation_display_state_frontend._internal_.SegmentColorHash.md#value)

### Methods

- [compute](segmentation_display_state_frontend._internal_.SegmentColorHash.md#compute)
- [computeCssColor](segmentation_display_state_frontend._internal_.SegmentColorHash.md#computecsscolor)
- [randomize](segmentation_display_state_frontend._internal_.SegmentColorHash.md#randomize)
- [reset](segmentation_display_state_frontend._internal_.SegmentColorHash.md#reset)
- [restoreState](segmentation_display_state_frontend._internal_.SegmentColorHash.md#restorestate)
- [toJSON](segmentation_display_state_frontend._internal_.SegmentColorHash.md#tojson)
- [toString](segmentation_display_state_frontend._internal_.SegmentColorHash.md#tostring)
- [getDefault](segmentation_display_state_frontend._internal_.SegmentColorHash.md#getdefault)

## Constructors

### constructor

• **new SegmentColorHash**(`hashSeed?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `hashSeed` | `number` |

#### Defined in

[src/neuroglancer/segment_color.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segment_color.ts#L75)

## Properties

### changed

• **changed**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Implementation of

[Trackable](../interfaces/util_trackable.Trackable.md).[changed](../interfaces/util_trackable.Trackable.md#changed)

#### Defined in

[src/neuroglancer/segment_color.ts:73](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segment_color.ts#L73)

___

### hashSeed

• **hashSeed**: `number`

## Accessors

### value

• `get` **value**(): `number`

#### Returns

`number`

#### Defined in

[src/neuroglancer/segment_color.ts:81](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segment_color.ts#L81)

• `set` **value**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/segment_color.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segment_color.ts#L85)

## Methods

### compute

▸ **compute**(`out`, `x`): `Float32Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `out` | `Float32Array` |
| `x` | [`Uint64`](util_uint64.Uint64.md) |

#### Returns

`Float32Array`

#### Defined in

[src/neuroglancer/segment_color.ts:92](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segment_color.ts#L92)

___

### computeCssColor

▸ **computeCssColor**(`x`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Uint64`](util_uint64.Uint64.md) |

#### Returns

`string`

#### Defined in

[src/neuroglancer/segment_color.ts:101](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segment_color.ts#L101)

___

### randomize

▸ **randomize**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/segment_color.ts:106](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segment_color.ts#L106)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Implementation of

[Trackable](../interfaces/util_trackable.Trackable.md).[reset](../interfaces/util_trackable.Trackable.md#reset)

#### Defined in

[src/neuroglancer/segment_color.ts:119](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segment_color.ts#L119)

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

[Trackable](../interfaces/util_trackable.Trackable.md).[restoreState](../interfaces/util_trackable.Trackable.md#restorestate)

#### Defined in

[src/neuroglancer/segment_color.ts:123](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segment_color.ts#L123)

___

### toJSON

▸ **toJSON**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Implementation of

[Trackable](../interfaces/util_trackable.Trackable.md).[toJSON](../interfaces/util_trackable.Trackable.md#tojson)

#### Defined in

[src/neuroglancer/segment_color.ts:115](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segment_color.ts#L115)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[src/neuroglancer/segment_color.ts:111](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segment_color.ts#L111)

___

### getDefault

▸ `Static` **getDefault**(): [`SegmentColorHash`](segmentation_display_state_frontend._internal_.SegmentColorHash.md)

#### Returns

[`SegmentColorHash`](segmentation_display_state_frontend._internal_.SegmentColorHash.md)

#### Defined in

[src/neuroglancer/segment_color.ts:77](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segment_color.ts#L77)
