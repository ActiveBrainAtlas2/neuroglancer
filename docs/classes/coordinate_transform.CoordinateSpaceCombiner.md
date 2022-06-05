[neuroglancer](../README.md) / [Modules](../modules.md) / [coordinate\_transform](../modules/coordinate_transform.md) / CoordinateSpaceCombiner

# Class: CoordinateSpaceCombiner

[coordinate_transform](../modules/coordinate_transform.md).CoordinateSpaceCombiner

## Table of contents

### Constructors

- [constructor](coordinate_transform.CoordinateSpaceCombiner.md#constructor)

### Properties

- [bindings](coordinate_transform.CoordinateSpaceCombiner.md#bindings)
- [combined](coordinate_transform.CoordinateSpaceCombiner.md#combined)
- [dimensionRefCounts](coordinate_transform.CoordinateSpaceCombiner.md#dimensionrefcounts)
- [includeDimensionPredicate\_](coordinate_transform.CoordinateSpaceCombiner.md#includedimensionpredicate_)
- [prevCombined](coordinate_transform.CoordinateSpaceCombiner.md#prevcombined)
- [retainCount](coordinate_transform.CoordinateSpaceCombiner.md#retaincount)

### Accessors

- [includeDimensionPredicate](coordinate_transform.CoordinateSpaceCombiner.md#includedimensionpredicate)

### Methods

- [bind](coordinate_transform.CoordinateSpaceCombiner.md#bind)
- [getRenameValidity](coordinate_transform.CoordinateSpaceCombiner.md#getrenamevalidity)
- [handleCombinedChanged](coordinate_transform.CoordinateSpaceCombiner.md#handlecombinedchanged)
- [retain](coordinate_transform.CoordinateSpaceCombiner.md#retain)
- [update](coordinate_transform.CoordinateSpaceCombiner.md#update)

## Constructors

### constructor

• **new CoordinateSpaceCombiner**(`combined`, `includeDimensionPredicate`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `combined` | [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<[`CoordinateSpace`](../interfaces/coordinate_transform.CoordinateSpace.md)\> |
| `includeDimensionPredicate` | (`name`: `string`) => `boolean` |

#### Defined in

[src/neuroglancer/coordinate_transform.ts:1119](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/coordinate_transform.ts#L1119)

## Properties

### bindings

• `Private` **bindings**: `Set`<`BoundCoordinateSpace`\>

#### Defined in

[src/neuroglancer/coordinate_transform.ts:1080](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/coordinate_transform.ts#L1080)

___

### combined

• **combined**: [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<[`CoordinateSpace`](../interfaces/coordinate_transform.CoordinateSpace.md)\>

___

### dimensionRefCounts

• **dimensionRefCounts**: `Map`<`string`, `number`\>

#### Defined in

[src/neuroglancer/coordinate_transform.ts:1086](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/coordinate_transform.ts#L1086)

___

### includeDimensionPredicate\_

• `Private` **includeDimensionPredicate\_**: (`name`: `string`) => `boolean`

#### Type declaration

▸ (`name`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

##### Returns

`boolean`

#### Defined in

[src/neuroglancer/coordinate_transform.ts:1109](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/coordinate_transform.ts#L1109)

___

### prevCombined

• `Private` **prevCombined**: `undefined` \| [`CoordinateSpace`](../interfaces/coordinate_transform.CoordinateSpace.md)

#### Defined in

[src/neuroglancer/coordinate_transform.ts:1084](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/coordinate_transform.ts#L1084)

___

### retainCount

• `Private` **retainCount**: `number` = `0`

#### Defined in

[src/neuroglancer/coordinate_transform.ts:1082](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/coordinate_transform.ts#L1082)

## Accessors

### includeDimensionPredicate

• `get` **includeDimensionPredicate**(): (`name`: `string`) => `boolean`

#### Returns

`fn`

▸ (`name`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

##### Returns

`boolean`

#### Defined in

[src/neuroglancer/coordinate_transform.ts:1111](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/coordinate_transform.ts#L1111)

• `set` **includeDimensionPredicate**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | (`name`: `string`) => `boolean` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/coordinate_transform.ts:1114](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/coordinate_transform.ts#L1114)

## Methods

### bind

▸ **bind**(`space`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `space` | [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<[`CoordinateSpace`](../interfaces/coordinate_transform.CoordinateSpace.md)\> |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/neuroglancer/coordinate_transform.ts:1329](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/coordinate_transform.ts#L1329)

___

### getRenameValidity

▸ **getRenameValidity**(`newNames`): `boolean`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `newNames` | readonly `string`[] |

#### Returns

`boolean`[]

#### Defined in

[src/neuroglancer/coordinate_transform.ts:1088](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/coordinate_transform.ts#L1088)

___

### handleCombinedChanged

▸ `Private` **handleCombinedChanged**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/coordinate_transform.ts:1315](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/coordinate_transform.ts#L1315)

___

### retain

▸ **retain**(): () => `void`

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/neuroglancer/coordinate_transform.ts:1320](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/coordinate_transform.ts#L1320)

___

### update

▸ `Private` **update**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/coordinate_transform.ts:1125](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/coordinate_transform.ts#L1125)
