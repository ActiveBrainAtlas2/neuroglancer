[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/trackable\_value](../modules/neuroglancer_trackable_value.md) / IndirectTrackableValue

# Class: IndirectTrackableValue<U, T\>

[neuroglancer/trackable_value](../modules/neuroglancer_trackable_value.md).IndirectTrackableValue

## Type parameters

| Name |
| :------ |
| `U` |
| `T` |

## Hierarchy

- [`IndirectWatchableValue`](neuroglancer_trackable_value.IndirectWatchableValue.md)<`U`, `T`\>

  ↳ **`IndirectTrackableValue`**

## Implements

- [`Trackable`](../interfaces/neuroglancer_util_trackable.Trackable.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_trackable_value.IndirectTrackableValue.md#constructor)

### Properties

- [changed](neuroglancer_trackable_value.IndirectTrackableValue.md#changed)
- [disposer](neuroglancer_trackable_value.IndirectTrackableValue.md#disposer)
- [inner](neuroglancer_trackable_value.IndirectTrackableValue.md#inner)

### Accessors

- [value](neuroglancer_trackable_value.IndirectTrackableValue.md#value)

### Methods

- [dispose](neuroglancer_trackable_value.IndirectTrackableValue.md#dispose)
- [reset](neuroglancer_trackable_value.IndirectTrackableValue.md#reset)
- [restoreState](neuroglancer_trackable_value.IndirectTrackableValue.md#restorestate)
- [toJSON](neuroglancer_trackable_value.IndirectTrackableValue.md#tojson)

## Constructors

### constructor

• **new IndirectTrackableValue**<`U`, `T`\>(`outer`, `getInner`)

#### Type parameters

| Name |
| :------ |
| `U` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `outer` | [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<`U`\> |
| `getInner` | (`outer`: `U`) => [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<`T`\> |

#### Inherited from

[IndirectWatchableValue](neuroglancer_trackable_value.IndirectWatchableValue.md).[constructor](neuroglancer_trackable_value.IndirectWatchableValue.md#constructor)

#### Defined in

[src/neuroglancer/trackable_value.ts:418](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/trackable_value.ts#L418)

## Properties

### changed

• **changed**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Implementation of

[Trackable](../interfaces/neuroglancer_util_trackable.Trackable.md).[changed](../interfaces/neuroglancer_util_trackable.Trackable.md#changed)

#### Inherited from

[IndirectWatchableValue](neuroglancer_trackable_value.IndirectWatchableValue.md).[changed](neuroglancer_trackable_value.IndirectWatchableValue.md#changed)

#### Defined in

[src/neuroglancer/trackable_value.ts:407](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/trackable_value.ts#L407)

___

### disposer

• **disposer**: `undefined` \| () => `void`

#### Inherited from

[IndirectWatchableValue](neuroglancer_trackable_value.IndirectWatchableValue.md).[disposer](neuroglancer_trackable_value.IndirectWatchableValue.md#disposer)

#### Defined in

[src/neuroglancer/trackable_value.ts:408](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/trackable_value.ts#L408)

___

### inner

• **inner**: [`TrackableValueInterface`](../interfaces/neuroglancer_trackable_value.TrackableValueInterface.md)<`T`\>

#### Overrides

[IndirectWatchableValue](neuroglancer_trackable_value.IndirectWatchableValue.md).[inner](neuroglancer_trackable_value.IndirectWatchableValue.md#inner)

#### Defined in

[src/neuroglancer/trackable_value.ts:438](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/trackable_value.ts#L438)

## Accessors

### value

• `get` **value**(): `T`

#### Returns

`T`

#### Inherited from

IndirectWatchableValue.value

#### Defined in

[src/neuroglancer/trackable_value.ts:428](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/trackable_value.ts#L428)

• `set` **value**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`void`

#### Inherited from

IndirectWatchableValue.value

#### Defined in

[src/neuroglancer/trackable_value.ts:431](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/trackable_value.ts#L431)

## Methods

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[IndirectWatchableValue](neuroglancer_trackable_value.IndirectWatchableValue.md).[dispose](neuroglancer_trackable_value.IndirectWatchableValue.md#dispose)

#### Defined in

[src/neuroglancer/trackable_value.ts:423](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/trackable_value.ts#L423)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Implementation of

[Trackable](../interfaces/neuroglancer_util_trackable.Trackable.md).[reset](../interfaces/neuroglancer_util_trackable.Trackable.md#reset)

#### Defined in

[src/neuroglancer/trackable_value.ts:439](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/trackable_value.ts#L439)

___

### restoreState

▸ **restoreState**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `unknown` |

#### Returns

`void`

#### Implementation of

[Trackable](../interfaces/neuroglancer_util_trackable.Trackable.md).[restoreState](../interfaces/neuroglancer_util_trackable.Trackable.md#restorestate)

#### Defined in

[src/neuroglancer/trackable_value.ts:442](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/trackable_value.ts#L442)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Implementation of

[Trackable](../interfaces/neuroglancer_util_trackable.Trackable.md).[toJSON](../interfaces/neuroglancer_util_trackable.Trackable.md#tojson)

#### Defined in

[src/neuroglancer/trackable_value.ts:445](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/trackable_value.ts#L445)
