[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/polygon](../modules/annotation_polygon.md) / [<internal\>](../modules/annotation_polygon._internal_.md) / OrientationState

# Class: OrientationState

[annotation/polygon](../modules/annotation_polygon.md).[<internal>](../modules/annotation_polygon._internal_.md).OrientationState

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`OrientationState`**

## Table of contents

### Constructors

- [constructor](annotation_polygon._internal_.OrientationState.md#constructor)

### Properties

- [changed](annotation_polygon._internal_.OrientationState.md#changed)
- [disposedStacks](annotation_polygon._internal_.OrientationState.md#disposedstacks)
- [orientation](annotation_polygon._internal_.OrientationState.md#orientation)
- [refCount](annotation_polygon._internal_.OrientationState.md#refcount)
- [wasDisposed](annotation_polygon._internal_.OrientationState.md#wasdisposed)

### Methods

- [addRef](annotation_polygon._internal_.OrientationState.md#addref)
- [assign](annotation_polygon._internal_.OrientationState.md#assign)
- [dispose](annotation_polygon._internal_.OrientationState.md#dispose)
- [disposed](annotation_polygon._internal_.OrientationState.md#disposed)
- [refCountReachedZero](annotation_polygon._internal_.OrientationState.md#refcountreachedzero)
- [registerCancellable](annotation_polygon._internal_.OrientationState.md#registercancellable)
- [registerDisposer](annotation_polygon._internal_.OrientationState.md#registerdisposer)
- [registerEventListener](annotation_polygon._internal_.OrientationState.md#registereventlistener)
- [reset](annotation_polygon._internal_.OrientationState.md#reset)
- [restoreState](annotation_polygon._internal_.OrientationState.md#restorestate)
- [snap](annotation_polygon._internal_.OrientationState.md#snap)
- [toJSON](annotation_polygon._internal_.OrientationState.md#tojson)
- [unregisterDisposer](annotation_polygon._internal_.OrientationState.md#unregisterdisposer)
- [makeRelative](annotation_polygon._internal_.OrientationState.md#makerelative)

## Constructors

### constructor

• **new OrientationState**(`orientation?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `orientation?` | [`quat`](util_geom.quat.md) |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/navigation_state.ts:390](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L390)

## Properties

### changed

• **changed**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/navigation_state.ts:388](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L388)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### orientation

• **orientation**: [`quat`](util_geom.quat.md)

#### Defined in

[src/neuroglancer/navigation_state.ts:387](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L387)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`OrientationState`](annotation_polygon._internal_.OrientationState.md)

#### Returns

[`OrientationState`](annotation_polygon._internal_.OrientationState.md)

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[addRef](util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### assign

▸ **assign**(`other`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`OrientationState`](annotation_polygon._internal_.OrientationState.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:474](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L474)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[dispose](util_disposable.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposed](util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L75)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCountReachedZero](util_disposable.RefCounted.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L66)

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

[RefCounted](util_disposable.RefCounted.md).[registerCancellable](util_disposable.RefCounted.md#registercancellable)

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L100)

___

### registerDisposer

▸ **registerDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/util_disposable.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[registerDisposer](util_disposable.RefCounted.md#registerdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L76)

___

### registerEventListener

▸ **registerEventListener**(`target`, `type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EventTarget`](../modules/annotation_annotation_layer_state._internal_.md#eventtarget) |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/annotation_annotation_layer_state._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](../interfaces/annotation_annotation_layer_state._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[registerEventListener](util_disposable.RefCounted.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L95)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:415](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L415)

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

[src/neuroglancer/navigation_state.ts:405](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L405)

___

### snap

▸ **snap**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:420](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L420)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Defined in

[src/neuroglancer/navigation_state.ts:397](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L397)

___

### unregisterDisposer

▸ **unregisterDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/util_disposable.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[unregisterDisposer](util_disposable.RefCounted.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)

___

### makeRelative

▸ `Static` **makeRelative**(`peer`, `peerToSelf`): [`OrientationState`](annotation_polygon._internal_.OrientationState.md)

Returns a new OrientationState with orientation fixed to peerToSelf * peer.orientation.  Any
changes to the returned OrientationState will cause a corresponding change in peer, and vice
versa.

#### Parameters

| Name | Type |
| :------ | :------ |
| `peer` | [`OrientationState`](annotation_polygon._internal_.OrientationState.md) |
| `peerToSelf` | [`quat`](util_geom.quat.md) |

#### Returns

[`OrientationState`](annotation_polygon._internal_.OrientationState.md)

#### Defined in

[src/neuroglancer/navigation_state.ts:450](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L450)
