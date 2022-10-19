[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/trackable\_value](../modules/neuroglancer_trackable_value.md) / IndirectWatchableValue

# Class: IndirectWatchableValue<U, T\>

[neuroglancer/trackable_value](../modules/neuroglancer_trackable_value.md).IndirectWatchableValue

## Type parameters

| Name |
| :------ |
| `U` |
| `T` |

## Hierarchy

- **`IndirectWatchableValue`**

  ↳ [`IndirectTrackableValue`](neuroglancer_trackable_value.IndirectTrackableValue.md)

## Implements

- [`Disposable`](../interfaces/neuroglancer_util_disposable.Disposable.md)
- [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<`T`\>

## Table of contents

### Constructors

- [constructor](neuroglancer_trackable_value.IndirectWatchableValue.md#constructor)

### Properties

- [changed](neuroglancer_trackable_value.IndirectWatchableValue.md#changed)
- [disposer](neuroglancer_trackable_value.IndirectWatchableValue.md#disposer)
- [inner](neuroglancer_trackable_value.IndirectWatchableValue.md#inner)

### Accessors

- [value](neuroglancer_trackable_value.IndirectWatchableValue.md#value)

### Methods

- [dispose](neuroglancer_trackable_value.IndirectWatchableValue.md#dispose)
- [update](neuroglancer_trackable_value.IndirectWatchableValue.md#update)

## Constructors

### constructor

• **new IndirectWatchableValue**<`U`, `T`\>(`outer`, `getInner`)

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

#### Defined in

[src/neuroglancer/trackable_value.ts:418](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/trackable_value.ts#L418)

## Properties

### changed

• **changed**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Implementation of

[WatchableValueInterface](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md).[changed](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md#changed)

#### Defined in

[src/neuroglancer/trackable_value.ts:407](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/trackable_value.ts#L407)

___

### disposer

• **disposer**: `undefined` \| () => `void`

#### Defined in

[src/neuroglancer/trackable_value.ts:408](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/trackable_value.ts#L408)

___

### inner

• `Protected` **inner**: [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<`T`\>

#### Defined in

[src/neuroglancer/trackable_value.ts:406](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/trackable_value.ts#L406)

## Accessors

### value

• `get` **value**(): `T`

#### Returns

`T`

#### Implementation of

[WatchableValueInterface](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md).[value](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md#value)

#### Defined in

[src/neuroglancer/trackable_value.ts:428](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/trackable_value.ts#L428)

• `set` **value**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`void`

#### Implementation of

[WatchableValueInterface](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md).[value](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md#value)

#### Defined in

[src/neuroglancer/trackable_value.ts:431](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/trackable_value.ts#L431)

## Methods

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Implementation of

[Disposable](../interfaces/neuroglancer_util_disposable.Disposable.md).[dispose](../interfaces/neuroglancer_util_disposable.Disposable.md#dispose)

#### Defined in

[src/neuroglancer/trackable_value.ts:423](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/trackable_value.ts#L423)

___

### update

▸ `Private` **update**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/trackable_value.ts:409](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/trackable_value.ts#L409)
