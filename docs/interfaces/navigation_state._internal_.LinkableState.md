[neuroglancer](../README.md) / [Modules](../modules.md) / [navigation\_state](../modules/navigation_state.md) / [<internal\>](../modules/navigation_state._internal_.md) / LinkableState

# Interface: LinkableState<T\>

[navigation_state](../modules/navigation_state.md).[<internal>](../modules/navigation_state._internal_.md).LinkableState

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`RefCounted`](../classes/axes_lines._internal_.RefCounted.md)

- [`Trackable`](coordinate_transform._internal_.Trackable.md)

  ↳ **`LinkableState`**

## Table of contents

### Properties

- [changed](navigation_state._internal_.LinkableState.md#changed)
- [disposedStacks](navigation_state._internal_.LinkableState.md#disposedstacks)
- [refCount](navigation_state._internal_.LinkableState.md#refcount)
- [wasDisposed](navigation_state._internal_.LinkableState.md#wasdisposed)

### Methods

- [addRef](navigation_state._internal_.LinkableState.md#addref)
- [assign](navigation_state._internal_.LinkableState.md#assign)
- [dispose](navigation_state._internal_.LinkableState.md#dispose)
- [disposed](navigation_state._internal_.LinkableState.md#disposed)
- [refCountReachedZero](navigation_state._internal_.LinkableState.md#refcountreachedzero)
- [registerCancellable](navigation_state._internal_.LinkableState.md#registercancellable)
- [registerDisposer](navigation_state._internal_.LinkableState.md#registerdisposer)
- [registerEventListener](navigation_state._internal_.LinkableState.md#registereventlistener)
- [reset](navigation_state._internal_.LinkableState.md#reset)
- [restoreState](navigation_state._internal_.LinkableState.md#restorestate)
- [toJSON](navigation_state._internal_.LinkableState.md#tojson)
- [unregisterDisposer](navigation_state._internal_.LinkableState.md#unregisterdisposer)

## Properties

### changed

• **changed**: [`NullaryReadonlySignal`](../modules/coordinate_transform._internal_.md#nullaryreadonlysignal)

#### Inherited from

[Trackable](coordinate_transform._internal_.Trackable.md).[changed](coordinate_transform._internal_.Trackable.md#changed)

#### Defined in

[src/neuroglancer/util/trackable.ts:37](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/trackable.ts#L37)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](../classes/axes_lines._internal_.RefCounted.md).[disposedStacks](../classes/axes_lines._internal_.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L52)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](../classes/axes_lines._internal_.RefCounted.md).[refCount](../classes/axes_lines._internal_.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](../classes/axes_lines._internal_.RefCounted.md).[wasDisposed](../classes/axes_lines._internal_.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`LinkableState`](navigation_state._internal_.LinkableState.md)<`T`\>

#### Returns

[`LinkableState`](navigation_state._internal_.LinkableState.md)<`T`\>

#### Inherited from

[RefCounted](../classes/axes_lines._internal_.RefCounted.md).[addRef](../classes/axes_lines._internal_.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L48)

___

### assign

▸ **assign**(`other`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `T` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:317](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/navigation_state.ts#L317)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](../classes/axes_lines._internal_.RefCounted.md).[dispose](../classes/axes_lines._internal_.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](../classes/axes_lines._internal_.RefCounted.md).[disposed](../classes/axes_lines._internal_.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L75)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](../classes/axes_lines._internal_.RefCounted.md).[refCountReachedZero](../classes/axes_lines._internal_.RefCounted.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L66)

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

[RefCounted](../classes/axes_lines._internal_.RefCounted.md).[registerCancellable](../classes/axes_lines._internal_.RefCounted.md#registercancellable)

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L100)

___

### registerDisposer

▸ **registerDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/axes_lines._internal_.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[RefCounted](../classes/axes_lines._internal_.RefCounted.md).[registerDisposer](../classes/axes_lines._internal_.RefCounted.md#registerdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L76)

___

### registerEventListener

▸ **registerEventListener**(`target`, `type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EventTarget`](../modules/axes_lines._internal_.md#eventtarget) |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/axes_lines._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](axes_lines._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

[RefCounted](../classes/axes_lines._internal_.RefCounted.md).[registerEventListener](../classes/axes_lines._internal_.RefCounted.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L95)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Inherited from

[Trackable](coordinate_transform._internal_.Trackable.md).[reset](coordinate_transform._internal_.Trackable.md#reset)

#### Defined in

[src/neuroglancer/util/trackable.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/trackable.ts#L36)

___

### restoreState

▸ **restoreState**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `any` |

#### Returns

`void`

#### Inherited from

[Trackable](coordinate_transform._internal_.Trackable.md).[restoreState](coordinate_transform._internal_.Trackable.md#restorestate)

#### Defined in

[src/neuroglancer/util/trackable.ts:35](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/trackable.ts#L35)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Inherited from

[Trackable](coordinate_transform._internal_.Trackable.md).[toJSON](coordinate_transform._internal_.Trackable.md#tojson)

#### Defined in

[src/neuroglancer/util/trackable.ts:38](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/trackable.ts#L38)

___

### unregisterDisposer

▸ **unregisterDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/axes_lines._internal_.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[RefCounted](../classes/axes_lines._internal_.RefCounted.md).[unregisterDisposer](../classes/axes_lines._internal_.RefCounted.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L85)
