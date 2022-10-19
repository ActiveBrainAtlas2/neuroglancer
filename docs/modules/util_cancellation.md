[neuroglancer](../README.md) / [Modules](../modules.md) / util/cancellation

# Module: util/cancellation

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

### Modules

- [&lt;internal\&gt;](util_cancellation._internal_.md)

### Classes

- [CancellationTokenSource](../classes/util_cancellation.CancellationTokenSource.md)
- [MultipleConsumerCancellationTokenSource](../classes/util_cancellation.MultipleConsumerCancellationTokenSource.md)

### Interfaces

- [CancellationToken](../interfaces/util_cancellation.CancellationToken.md)

### Variables

- [CANCELED](util_cancellation.md#canceled)
- [uncancelableToken](util_cancellation.md#uncancelabletoken)

### Functions

- [makeCancelablePromise](util_cancellation.md#makecancelablepromise)
- [throwIfCanceled](util_cancellation.md#throwifcanceled)

## Variables

### CANCELED

• `Const` **CANCELED**: [`CancellationError`](../classes/util_cancellation._internal_.CancellationError.md)

Singleton instance of CancellationError thrown to indicate cancellation.

#### Defined in

[src/neuroglancer/util/cancellation.ts:67](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/cancellation.ts#L67)

___

### uncancelableToken

• `Const` **uncancelableToken**: [`CancellationToken`](../interfaces/util_cancellation.CancellationToken.md)

CancellationToken that cannot be canceled.  This can be passed to operations that require a
CancellationToken but will not need to be canceled.

#### Defined in

[src/neuroglancer/util/cancellation.ts:84](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/cancellation.ts#L84)

## Functions

### makeCancelablePromise

▸ **makeCancelablePromise**<`T`\>(`cancellationToken`, `executor`): `Promise`<`T`\>

Creates a promise and a dependent cancellation token.

The dependent cancellation token will be canceled if the specified `cancellationToken` is
canceled while the promise is pending.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cancellationToken` | [`CancellationToken`](../interfaces/util_cancellation.CancellationToken.md) | The token that provides notification of cancellation. |
| `executor` | (`resolve`: (`value`: `T` \| `Promise`<`T`\>) => `void`, `reject`: (`error`: `any`) => `void`, `token`: [`CancellationToken`](../interfaces/util_cancellation.CancellationToken.md)) => `void` | The executor passed the resolve and reject functions for the promise, as well as the dependent cancellation token.  If cancellation occurs after either resolve or reject is called, then the dependent token is not cancelled. |

#### Returns

`Promise`<`T`\>

A new Promise.

#### Defined in

[src/neuroglancer/util/cancellation.ts:178](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/cancellation.ts#L178)

___

### throwIfCanceled

▸ **throwIfCanceled**(`token`): `void`

Throws CANCELED if token.isCanceled === true.

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | [`CancellationToken`](../interfaces/util_cancellation.CancellationToken.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/cancellation.ts:72](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/cancellation.ts#L72)
