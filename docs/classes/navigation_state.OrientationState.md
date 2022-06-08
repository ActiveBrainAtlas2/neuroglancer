[neuroglancer](../README.md) / [Modules](../modules.md) / [navigation\_state](../modules/navigation_state.md) / OrientationState

# Class: OrientationState

[navigation_state](../modules/navigation_state.md).OrientationState

## Hierarchy

- `RefCounted`

  ↳ **`OrientationState`**

## Table of contents

### Constructors

- [constructor](navigation_state.OrientationState.md#constructor)

### Properties

- [changed](navigation_state.OrientationState.md#changed)
- [disposedStacks](navigation_state.OrientationState.md#disposedstacks)
- [orientation](navigation_state.OrientationState.md#orientation)
- [refCount](navigation_state.OrientationState.md#refcount)
- [wasDisposed](navigation_state.OrientationState.md#wasdisposed)

### Methods

- [addRef](navigation_state.OrientationState.md#addref)
- [assign](navigation_state.OrientationState.md#assign)
- [dispose](navigation_state.OrientationState.md#dispose)
- [disposed](navigation_state.OrientationState.md#disposed)
- [refCountReachedZero](navigation_state.OrientationState.md#refcountreachedzero)
- [registerCancellable](navigation_state.OrientationState.md#registercancellable)
- [registerDisposer](navigation_state.OrientationState.md#registerdisposer)
- [registerEventListener](navigation_state.OrientationState.md#registereventlistener)
- [reset](navigation_state.OrientationState.md#reset)
- [restoreState](navigation_state.OrientationState.md#restorestate)
- [snap](navigation_state.OrientationState.md#snap)
- [toJSON](navigation_state.OrientationState.md#tojson)
- [unregisterDisposer](navigation_state.OrientationState.md#unregisterdisposer)
- [makeRelative](navigation_state.OrientationState.md#makerelative)

## Constructors

### constructor

• **new OrientationState**(`orientation?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `orientation?` | `quat` |

#### Overrides

RefCounted.constructor

#### Defined in

[src/neuroglancer/navigation_state.ts:390](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/navigation_state.ts#L390)

## Properties

### changed

• **changed**: `NullarySignal`

#### Defined in

[src/neuroglancer/navigation_state.ts:388](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/navigation_state.ts#L388)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

RefCounted.disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L52)

___

### orientation

• **orientation**: `quat`

#### Defined in

[src/neuroglancer/navigation_state.ts:387](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/navigation_state.ts#L387)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

RefCounted.refCount

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

RefCounted.wasDisposed

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`OrientationState`](navigation_state.OrientationState.md)

#### Returns

[`OrientationState`](navigation_state.OrientationState.md)

#### Inherited from

RefCounted.addRef

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L48)

___

### assign

▸ **assign**(`other`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`OrientationState`](navigation_state.OrientationState.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:474](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/navigation_state.ts#L474)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

RefCounted.dispose

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

RefCounted.disposed

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L75)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

RefCounted.refCountReachedZero

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L66)

___

### registerCancellable

▸ **registerCancellable**<`T`\>(`cancellable`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cancellable` | `T` |

#### Returns

`T`

#### Inherited from

RefCounted.registerCancellable

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L100)

___

### registerDisposer

▸ **registerDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Disposer` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

RefCounted.registerDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L76)

___

### registerEventListener

▸ **registerEventListener**(`target`, `type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `EventTarget` |
| `type` | `string` |
| `listener` | `EventListenerOrEventListenerObject` |
| `options?` | `boolean` \| `AddEventListenerOptions` |

#### Returns

`void`

#### Inherited from

RefCounted.registerEventListener

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L95)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:415](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/navigation_state.ts#L415)

___

### restoreState

▸ **restoreState**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:405](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/navigation_state.ts#L405)

___

### snap

▸ **snap**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:420](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/navigation_state.ts#L420)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Defined in

[src/neuroglancer/navigation_state.ts:397](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/navigation_state.ts#L397)

___

### unregisterDisposer

▸ **unregisterDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Disposer` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

RefCounted.unregisterDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L85)

___

### makeRelative

▸ `Static` **makeRelative**(`peer`, `peerToSelf`): [`OrientationState`](navigation_state.OrientationState.md)

Returns a new OrientationState with orientation fixed to peerToSelf * peer.orientation.  Any
changes to the returned OrientationState will cause a corresponding change in peer, and vice
versa.

#### Parameters

| Name | Type |
| :------ | :------ |
| `peer` | [`OrientationState`](navigation_state.OrientationState.md) |
| `peerToSelf` | `quat` |

#### Returns

[`OrientationState`](navigation_state.OrientationState.md)

#### Defined in

[src/neuroglancer/navigation_state.ts:450](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/navigation_state.ts#L450)
