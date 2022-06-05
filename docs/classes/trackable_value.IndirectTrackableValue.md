[neuroglancer](../README.md) / [Modules](../modules.md) / [trackable\_value](../modules/trackable_value.md) / IndirectTrackableValue

# Class: IndirectTrackableValue<U, T\>

[trackable_value](../modules/trackable_value.md).IndirectTrackableValue

## Type parameters

| Name |
| :------ |
| `U` |
| `T` |

## Hierarchy

- [`IndirectWatchableValue`](trackable_value.IndirectWatchableValue.md)<`U`, `T`\>

  ↳ **`IndirectTrackableValue`**

## Implements

- `Trackable`

## Table of contents

### Constructors

- [constructor](trackable_value.IndirectTrackableValue.md#constructor)

### Properties

- [changed](trackable_value.IndirectTrackableValue.md#changed)
- [disposer](trackable_value.IndirectTrackableValue.md#disposer)
- [inner](trackable_value.IndirectTrackableValue.md#inner)

### Accessors

- [value](trackable_value.IndirectTrackableValue.md#value)

### Methods

- [dispose](trackable_value.IndirectTrackableValue.md#dispose)
- [reset](trackable_value.IndirectTrackableValue.md#reset)
- [restoreState](trackable_value.IndirectTrackableValue.md#restorestate)
- [toJSON](trackable_value.IndirectTrackableValue.md#tojson)

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
| `outer` | [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<`U`\> |
| `getInner` | (`outer`: `U`) => [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<`T`\> |

#### Inherited from

[IndirectWatchableValue](trackable_value.IndirectWatchableValue.md).[constructor](trackable_value.IndirectWatchableValue.md#constructor)

#### Defined in

[src/neuroglancer/trackable_value.ts:418](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/trackable_value.ts#L418)

## Properties

### changed

• **changed**: `NullarySignal`

#### Implementation of

Trackable.changed

#### Inherited from

[IndirectWatchableValue](trackable_value.IndirectWatchableValue.md).[changed](trackable_value.IndirectWatchableValue.md#changed)

#### Defined in

[src/neuroglancer/trackable_value.ts:407](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/trackable_value.ts#L407)

___

### disposer

• **disposer**: `undefined` \| () => `void`

#### Inherited from

[IndirectWatchableValue](trackable_value.IndirectWatchableValue.md).[disposer](trackable_value.IndirectWatchableValue.md#disposer)

#### Defined in

[src/neuroglancer/trackable_value.ts:408](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/trackable_value.ts#L408)

___

### inner

• **inner**: [`TrackableValueInterface`](../interfaces/trackable_value.TrackableValueInterface.md)<`T`\>

#### Overrides

[IndirectWatchableValue](trackable_value.IndirectWatchableValue.md).[inner](trackable_value.IndirectWatchableValue.md#inner)

#### Defined in

[src/neuroglancer/trackable_value.ts:438](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/trackable_value.ts#L438)

## Accessors

### value

• `get` **value**(): `T`

#### Returns

`T`

#### Inherited from

IndirectWatchableValue.value

#### Defined in

[src/neuroglancer/trackable_value.ts:428](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/trackable_value.ts#L428)

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

[src/neuroglancer/trackable_value.ts:431](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/trackable_value.ts#L431)

## Methods

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[IndirectWatchableValue](trackable_value.IndirectWatchableValue.md).[dispose](trackable_value.IndirectWatchableValue.md#dispose)

#### Defined in

[src/neuroglancer/trackable_value.ts:423](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/trackable_value.ts#L423)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Implementation of

Trackable.reset

#### Defined in

[src/neuroglancer/trackable_value.ts:439](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/trackable_value.ts#L439)

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

Trackable.restoreState

#### Defined in

[src/neuroglancer/trackable_value.ts:442](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/trackable_value.ts#L442)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Implementation of

Trackable.toJSON

#### Defined in

[src/neuroglancer/trackable_value.ts:445](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/trackable_value.ts#L445)
