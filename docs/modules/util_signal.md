[neuroglancer](../README.md) / [Modules](../modules.md) / util/signal

# Module: util/signal

**`license`**
Copyright 2016 Google Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

## Table of contents

### Classes

- [NullarySignal](../classes/util_signal.NullarySignal.md)
- [Signal](../classes/util_signal.Signal.md)

### Interfaces

- [ReadonlySignal](../interfaces/util_signal.ReadonlySignal.md)

### Type Aliases

- [NullaryReadonlySignal](util_signal.md#nullaryreadonlysignal)

### Variables

- [neverSignal](util_signal.md#neversignal)

### Functions

- [observeSignal](util_signal.md#observesignal)

## Type Aliases

### NullaryReadonlySignal

Ƭ **NullaryReadonlySignal**: [`ReadonlySignal`](../interfaces/util_signal.ReadonlySignal.md)<() => `void`\>

#### Defined in

[src/neuroglancer/util/signal.ts:118](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/signal.ts#L118)

## Variables

### neverSignal

• `Const` **neverSignal**: [`NullaryReadonlySignal`](util_signal.md#nullaryreadonlysignal)

#### Defined in

[src/neuroglancer/util/signal.ts:120](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/signal.ts#L120)

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

[src/neuroglancer/util/signal.ts:88](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/signal.ts#L88)
