[neuroglancer](../README.md) / [Modules](../modules.md) / [segment\_color](../modules/segment_color.md) / SegmentColorHash

# Class: SegmentColorHash

[segment_color](../modules/segment_color.md).SegmentColorHash

## Implements

- [`Trackable`](../interfaces/coordinate_transform._internal_.Trackable.md)

## Table of contents

### Constructors

- [constructor](segment_color.SegmentColorHash.md#constructor)

### Properties

- [changed](segment_color.SegmentColorHash.md#changed)
- [hashSeed](segment_color.SegmentColorHash.md#hashseed)

### Accessors

- [value](segment_color.SegmentColorHash.md#value)

### Methods

- [compute](segment_color.SegmentColorHash.md#compute)
- [computeCssColor](segment_color.SegmentColorHash.md#computecsscolor)
- [randomize](segment_color.SegmentColorHash.md#randomize)
- [reset](segment_color.SegmentColorHash.md#reset)
- [restoreState](segment_color.SegmentColorHash.md#restorestate)
- [toJSON](segment_color.SegmentColorHash.md#tojson)
- [toString](segment_color.SegmentColorHash.md#tostring)
- [getDefault](segment_color.SegmentColorHash.md#getdefault)

## Constructors

### constructor

• **new SegmentColorHash**(`hashSeed?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `hashSeed` | `number` |

#### Defined in

[src/neuroglancer/segment_color.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segment_color.ts#L75)

## Properties

### changed

• **changed**: [`NullarySignal`](coordinate_transform._internal_.NullarySignal.md)

#### Implementation of

[Trackable](../interfaces/coordinate_transform._internal_.Trackable.md).[changed](../interfaces/coordinate_transform._internal_.Trackable.md#changed)

#### Defined in

[src/neuroglancer/segment_color.ts:73](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segment_color.ts#L73)

___

### hashSeed

• **hashSeed**: `number`

## Accessors

### value

• `get` **value**(): `number`

#### Returns

`number`

#### Defined in

[src/neuroglancer/segment_color.ts:81](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segment_color.ts#L81)

• `set` **value**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/segment_color.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segment_color.ts#L85)

## Methods

### compute

▸ **compute**(`out`, `x`): `Float32Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `out` | `Float32Array` |
| `x` | [`Uint64`](data_panel_layout._internal_.Uint64.md) |

#### Returns

`Float32Array`

#### Defined in

[src/neuroglancer/segment_color.ts:92](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segment_color.ts#L92)

___

### computeCssColor

▸ **computeCssColor**(`x`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Uint64`](data_panel_layout._internal_.Uint64.md) |

#### Returns

`string`

#### Defined in

[src/neuroglancer/segment_color.ts:101](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segment_color.ts#L101)

___

### randomize

▸ **randomize**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/segment_color.ts:106](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segment_color.ts#L106)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Implementation of

[Trackable](../interfaces/coordinate_transform._internal_.Trackable.md).[reset](../interfaces/coordinate_transform._internal_.Trackable.md#reset)

#### Defined in

[src/neuroglancer/segment_color.ts:119](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segment_color.ts#L119)

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

[Trackable](../interfaces/coordinate_transform._internal_.Trackable.md).[restoreState](../interfaces/coordinate_transform._internal_.Trackable.md#restorestate)

#### Defined in

[src/neuroglancer/segment_color.ts:123](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segment_color.ts#L123)

___

### toJSON

▸ **toJSON**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Implementation of

[Trackable](../interfaces/coordinate_transform._internal_.Trackable.md).[toJSON](../interfaces/coordinate_transform._internal_.Trackable.md#tojson)

#### Defined in

[src/neuroglancer/segment_color.ts:115](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segment_color.ts#L115)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[src/neuroglancer/segment_color.ts:111](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segment_color.ts#L111)

___

### getDefault

▸ `Static` **getDefault**(): [`SegmentColorHash`](segment_color.SegmentColorHash.md)

#### Returns

[`SegmentColorHash`](segment_color.SegmentColorHash.md)

#### Defined in

[src/neuroglancer/segment_color.ts:77](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segment_color.ts#L77)
