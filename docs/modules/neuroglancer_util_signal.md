[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/util/signal

# Module: neuroglancer/util/signal

## Table of contents

### Classes

- [NullarySignal](../classes/neuroglancer_util_signal.NullarySignal.md)
- [Signal](../classes/neuroglancer_util_signal.Signal.md)

### Interfaces

- [ReadonlySignal](../interfaces/neuroglancer_util_signal.ReadonlySignal.md)

### Type Aliases

- [NullaryReadonlySignal](neuroglancer_util_signal.md#nullaryreadonlysignal)

### Variables

- [neverSignal](neuroglancer_util_signal.md#neversignal)

### Functions

- [observeSignal](neuroglancer_util_signal.md#observesignal)

## Type Aliases

### NullaryReadonlySignal

Ƭ **NullaryReadonlySignal**: [`ReadonlySignal`](../interfaces/neuroglancer_util_signal.ReadonlySignal.md)<() => `void`\>

#### Defined in

[src/neuroglancer/util/signal.ts:118](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/signal.ts#L118)

## Variables

### neverSignal

• `Const` **neverSignal**: [`NullaryReadonlySignal`](neuroglancer_util_signal.md#nullaryreadonlysignal)

#### Defined in

[src/neuroglancer/util/signal.ts:120](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/signal.ts#L120)

## Functions

### observeSignal

▸ **observeSignal**(`callback`, ...`signals`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => `void` |
| `...signals` | { `add`: (`callback`: () => `void`) => `void` ; `remove`: (`callback`: () => `void`) => `void`  }[] |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/neuroglancer/util/signal.ts:88](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/signal.ts#L88)
