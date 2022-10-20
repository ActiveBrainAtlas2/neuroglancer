[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/util/disposable

# Module: neuroglancer/util/disposable

## Table of contents

### Classes

- [RefCounted](../classes/neuroglancer_util_disposable.RefCounted.md)
- [RefCountedValue](../classes/neuroglancer_util_disposable.RefCountedValue.md)

### Interfaces

- [Disposable](../interfaces/neuroglancer_util_disposable.Disposable.md)

### Type Aliases

- [Borrowed](neuroglancer_util_disposable.md#borrowed)
- [Disposer](neuroglancer_util_disposable.md#disposer)
- [Owned](neuroglancer_util_disposable.md#owned)

### Functions

- [disposableOnce](neuroglancer_util_disposable.md#disposableonce)
- [invokeDisposer](neuroglancer_util_disposable.md#invokedisposer)
- [invokeDisposers](neuroglancer_util_disposable.md#invokedisposers)
- [registerEventListener](neuroglancer_util_disposable.md#registereventlistener)

## Type Aliases

### Borrowed

Ƭ **Borrowed**<`T`\>: `T`

A variable of this type is not associated with an increment of the reference count.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposable`](../interfaces/neuroglancer_util_disposable.Disposable.md) |

#### Defined in

[src/neuroglancer/util/disposable.ts:123](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L123)

___

### Disposer

Ƭ **Disposer**: [`Disposable`](../interfaces/neuroglancer_util_disposable.Disposable.md) \| () => `void`

#### Defined in

[src/neuroglancer/util/disposable.ts:19](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L19)

___

### Owned

Ƭ **Owned**<`T`\>: `T`

A variable of this type is associated with an increment of the reference count.  If a function
parameter is declared with this type, then callers must donate a reference count.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposable`](../interfaces/neuroglancer_util_disposable.Disposable.md) |

#### Defined in

[src/neuroglancer/util/disposable.ts:118](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L118)

## Functions

### disposableOnce

▸ **disposableOnce**(`value`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| [`Disposer`](neuroglancer_util_disposable.md#disposer) |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/neuroglancer/util/disposable.ts:125](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L125)

___

### invokeDisposer

▸ **invokeDisposer**(`disposer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `disposer` | [`Disposer`](neuroglancer_util_disposable.md#disposer) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/disposable.ts:23](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L23)

___

### invokeDisposers

▸ **invokeDisposers**(`disposers`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `disposers` | [`Disposer`](neuroglancer_util_disposable.md#disposer)[] |

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/disposable.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L31)

___

### registerEventListener

▸ **registerEventListener**(`target`, `type`, `listener`, `options?`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EventTarget`](main_module._internal_.md#eventtarget) |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](main_module._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](../interfaces/main_module._internal_.AddEventListenerOptions.md) |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/neuroglancer/util/disposable.ts:37](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L37)
