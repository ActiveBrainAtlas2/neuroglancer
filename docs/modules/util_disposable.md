[neuroglancer](../README.md) / [Modules](../modules.md) / util/disposable

# Module: util/disposable

## Table of contents

### Classes

- [RefCounted](../classes/util_disposable.RefCounted.md)
- [RefCountedValue](../classes/util_disposable.RefCountedValue.md)

### Interfaces

- [Disposable](../interfaces/util_disposable.Disposable.md)

### Type Aliases

- [Borrowed](util_disposable.md#borrowed)
- [Disposer](util_disposable.md#disposer)
- [Owned](util_disposable.md#owned)

### Functions

- [disposableOnce](util_disposable.md#disposableonce)
- [invokeDisposer](util_disposable.md#invokedisposer)
- [invokeDisposers](util_disposable.md#invokedisposers)
- [registerEventListener](util_disposable.md#registereventlistener)

## Type Aliases

### Borrowed

Ƭ **Borrowed**<`T`\>: `T`

A variable of this type is not associated with an increment of the reference count.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposable`](../interfaces/util_disposable.Disposable.md) |

#### Defined in

[src/neuroglancer/util/disposable.ts:123](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L123)

___

### Disposer

Ƭ **Disposer**: [`Disposable`](../interfaces/util_disposable.Disposable.md) \| () => `void`

#### Defined in

[src/neuroglancer/util/disposable.ts:19](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L19)

___

### Owned

Ƭ **Owned**<`T`\>: `T`

A variable of this type is associated with an increment of the reference count.  If a function
parameter is declared with this type, then callers must donate a reference count.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposable`](../interfaces/util_disposable.Disposable.md) |

#### Defined in

[src/neuroglancer/util/disposable.ts:118](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L118)

## Functions

### disposableOnce

▸ **disposableOnce**(`value`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| [`Disposer`](util_disposable.md#disposer) |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/neuroglancer/util/disposable.ts:125](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L125)

___

### invokeDisposer

▸ **invokeDisposer**(`disposer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `disposer` | [`Disposer`](util_disposable.md#disposer) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/disposable.ts:23](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L23)

___

### invokeDisposers

▸ **invokeDisposers**(`disposers`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `disposers` | [`Disposer`](util_disposable.md#disposer)[] |

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/disposable.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L31)

___

### registerEventListener

▸ **registerEventListener**(`target`, `type`, `listener`, `options?`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EventTarget`](annotation_annotation_layer_state._internal_.md#eventtarget) |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](annotation_annotation_layer_state._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](../interfaces/annotation_annotation_layer_state._internal_.AddEventListenerOptions.md) |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/neuroglancer/util/disposable.ts:37](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L37)
