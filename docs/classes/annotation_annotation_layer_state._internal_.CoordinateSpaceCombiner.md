[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / CoordinateSpaceCombiner

# Class: CoordinateSpaceCombiner

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).CoordinateSpaceCombiner

## Table of contents

### Constructors

- [constructor](annotation_annotation_layer_state._internal_.CoordinateSpaceCombiner.md#constructor)

### Properties

- [bindings](annotation_annotation_layer_state._internal_.CoordinateSpaceCombiner.md#bindings)
- [combined](annotation_annotation_layer_state._internal_.CoordinateSpaceCombiner.md#combined)
- [dimensionRefCounts](annotation_annotation_layer_state._internal_.CoordinateSpaceCombiner.md#dimensionrefcounts)
- [includeDimensionPredicate\_](annotation_annotation_layer_state._internal_.CoordinateSpaceCombiner.md#includedimensionpredicate_)
- [prevCombined](annotation_annotation_layer_state._internal_.CoordinateSpaceCombiner.md#prevcombined)
- [retainCount](annotation_annotation_layer_state._internal_.CoordinateSpaceCombiner.md#retaincount)

### Accessors

- [includeDimensionPredicate](annotation_annotation_layer_state._internal_.CoordinateSpaceCombiner.md#includedimensionpredicate)

### Methods

- [bind](annotation_annotation_layer_state._internal_.CoordinateSpaceCombiner.md#bind)
- [getRenameValidity](annotation_annotation_layer_state._internal_.CoordinateSpaceCombiner.md#getrenamevalidity)
- [handleCombinedChanged](annotation_annotation_layer_state._internal_.CoordinateSpaceCombiner.md#handlecombinedchanged)
- [retain](annotation_annotation_layer_state._internal_.CoordinateSpaceCombiner.md#retain)
- [update](annotation_annotation_layer_state._internal_.CoordinateSpaceCombiner.md#update)

## Constructors

### constructor

• **new CoordinateSpaceCombiner**(`combined`, `includeDimensionPredicate`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `combined` | [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<[`CoordinateSpace`](../interfaces/annotation_annotation_layer_state._internal_.CoordinateSpace.md)\> |
| `includeDimensionPredicate` | (`name`: `string`) => `boolean` |

#### Defined in

[src/neuroglancer/coordinate_transform.ts:1119](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/coordinate_transform.ts#L1119)

## Properties

### bindings

• `Private` **bindings**: `Set`<[`BoundCoordinateSpace`](../interfaces/annotation_annotation_layer_state._internal_.BoundCoordinateSpace.md)\>

#### Defined in

[src/neuroglancer/coordinate_transform.ts:1080](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/coordinate_transform.ts#L1080)

___

### combined

• **combined**: [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<[`CoordinateSpace`](../interfaces/annotation_annotation_layer_state._internal_.CoordinateSpace.md)\>

___

### dimensionRefCounts

• **dimensionRefCounts**: `Map`<`string`, `number`\>

#### Defined in

[src/neuroglancer/coordinate_transform.ts:1086](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/coordinate_transform.ts#L1086)

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

[src/neuroglancer/coordinate_transform.ts:1109](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/coordinate_transform.ts#L1109)

___

### prevCombined

• `Private` **prevCombined**: `undefined` \| [`CoordinateSpace`](../interfaces/annotation_annotation_layer_state._internal_.CoordinateSpace.md)

#### Defined in

[src/neuroglancer/coordinate_transform.ts:1084](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/coordinate_transform.ts#L1084)

___

### retainCount

• `Private` **retainCount**: `number` = `0`

#### Defined in

[src/neuroglancer/coordinate_transform.ts:1082](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/coordinate_transform.ts#L1082)

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

[src/neuroglancer/coordinate_transform.ts:1111](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/coordinate_transform.ts#L1111)

• `set` **includeDimensionPredicate**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | (`name`: `string`) => `boolean` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/coordinate_transform.ts:1114](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/coordinate_transform.ts#L1114)

## Methods

### bind

▸ **bind**(`space`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `space` | [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<[`CoordinateSpace`](../interfaces/annotation_annotation_layer_state._internal_.CoordinateSpace.md)\> |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/neuroglancer/coordinate_transform.ts:1329](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/coordinate_transform.ts#L1329)

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

[src/neuroglancer/coordinate_transform.ts:1088](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/coordinate_transform.ts#L1088)

___

### handleCombinedChanged

▸ `Private` **handleCombinedChanged**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/coordinate_transform.ts:1315](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/coordinate_transform.ts#L1315)

___

### retain

▸ **retain**(): () => `void`

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/neuroglancer/coordinate_transform.ts:1320](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/coordinate_transform.ts#L1320)

___

### update

▸ `Private` **update**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/coordinate_transform.ts:1125](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/coordinate_transform.ts#L1125)
