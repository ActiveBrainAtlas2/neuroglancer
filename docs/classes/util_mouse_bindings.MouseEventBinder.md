[neuroglancer](../README.md) / [Modules](../modules.md) / [util/mouse\_bindings](../modules/util_mouse_bindings.md) / MouseEventBinder

# Class: MouseEventBinder<EventMap\>

[util/mouse_bindings](../modules/util_mouse_bindings.md).MouseEventBinder

## Type parameters

| Name | Type |
| :------ | :------ |
| `EventMap` | extends [`EventActionMapInterface`](../modules/util_event_action_map.md#eventactionmapinterface) |

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`MouseEventBinder`**

## Table of contents

### Constructors

- [constructor](util_mouse_bindings.MouseEventBinder.md#constructor)

### Properties

- [disposedStacks](util_mouse_bindings.MouseEventBinder.md#disposedstacks)
- [eventMap](util_mouse_bindings.MouseEventBinder.md#eventmap)
- [refCount](util_mouse_bindings.MouseEventBinder.md#refcount)
- [target](util_mouse_bindings.MouseEventBinder.md#target)
- [wasDisposed](util_mouse_bindings.MouseEventBinder.md#wasdisposed)

### Methods

- [addRef](util_mouse_bindings.MouseEventBinder.md#addref)
- [dispatch](util_mouse_bindings.MouseEventBinder.md#dispatch)
- [dispose](util_mouse_bindings.MouseEventBinder.md#dispose)
- [disposed](util_mouse_bindings.MouseEventBinder.md#disposed)
- [refCountReachedZero](util_mouse_bindings.MouseEventBinder.md#refcountreachedzero)
- [registerCancellable](util_mouse_bindings.MouseEventBinder.md#registercancellable)
- [registerDisposer](util_mouse_bindings.MouseEventBinder.md#registerdisposer)
- [registerEventListener](util_mouse_bindings.MouseEventBinder.md#registereventlistener)
- [unregisterDisposer](util_mouse_bindings.MouseEventBinder.md#unregisterdisposer)

## Constructors

### constructor

• **new MouseEventBinder**<`EventMap`\>(`target`, `eventMap`, `commonHandler?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventMap` | extends [`HierarchicalMapInterface`](../interfaces/util_hierarchical_map.HierarchicalMapInterface.md)<`string`, [`EventAction`](../interfaces/util_event_action_map.EventAction.md), `EventMap`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EventTarget`](../modules/annotation_annotation_layer_state._internal_.md#eventtarget) |
| `eventMap` | `EventMap` |
| `commonHandler?` | (`event`: [`MouseEvent`](../modules/annotation_annotation_layer_state._internal_.md#mouseevent)) => `void` |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/util/mouse_bindings.ts:28](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/mouse_bindings.ts#L28)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### eventMap

• **eventMap**: `EventMap`

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### target

• **target**: [`EventTarget`](../modules/annotation_annotation_layer_state._internal_.md#eventtarget)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`MouseEventBinder`](util_mouse_bindings.MouseEventBinder.md)<`EventMap`\>

#### Returns

[`MouseEventBinder`](util_mouse_bindings.MouseEventBinder.md)<`EventMap`\>

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[addRef](util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### dispatch

▸ `Private` **dispatch**(`baseIdentifier`, `event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `baseIdentifier` | `string` |
| `event` | [`MouseEvent`](../modules/annotation_annotation_layer_state._internal_.md#mouseevent) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/mouse_bindings.ts:25](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/mouse_bindings.ts#L25)

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
