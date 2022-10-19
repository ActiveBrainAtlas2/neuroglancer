[neuroglancer](../README.md) / [Modules](../modules.md) / [util/keyboard\_bindings](../modules/util_keyboard_bindings.md) / KeyboardEventBinder

# Class: KeyboardEventBinder<EventMap\>

[util/keyboard_bindings](../modules/util_keyboard_bindings.md).KeyboardEventBinder

## Type parameters

| Name | Type |
| :------ | :------ |
| `EventMap` | extends [`EventActionMapInterface`](../modules/util_event_action_map.md#eventactionmapinterface) |

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`KeyboardEventBinder`**

## Table of contents

### Constructors

- [constructor](util_keyboard_bindings.KeyboardEventBinder.md#constructor)

### Properties

- [allShortcutsAreGlobal](util_keyboard_bindings.KeyboardEventBinder.md#allshortcutsareglobal)
- [allowSpaceKeyOnButtons](util_keyboard_bindings.KeyboardEventBinder.md#allowspacekeyonbuttons)
- [disposedStacks](util_keyboard_bindings.KeyboardEventBinder.md#disposedstacks)
- [eventMap](util_keyboard_bindings.KeyboardEventBinder.md#eventmap)
- [modifierShortcutsAreGlobal](util_keyboard_bindings.KeyboardEventBinder.md#modifiershortcutsareglobal)
- [refCount](util_keyboard_bindings.KeyboardEventBinder.md#refcount)
- [target](util_keyboard_bindings.KeyboardEventBinder.md#target)
- [wasDisposed](util_keyboard_bindings.KeyboardEventBinder.md#wasdisposed)

### Methods

- [addRef](util_keyboard_bindings.KeyboardEventBinder.md#addref)
- [dispose](util_keyboard_bindings.KeyboardEventBinder.md#dispose)
- [disposed](util_keyboard_bindings.KeyboardEventBinder.md#disposed)
- [handleKeyDown](util_keyboard_bindings.KeyboardEventBinder.md#handlekeydown)
- [refCountReachedZero](util_keyboard_bindings.KeyboardEventBinder.md#refcountreachedzero)
- [registerCancellable](util_keyboard_bindings.KeyboardEventBinder.md#registercancellable)
- [registerDisposer](util_keyboard_bindings.KeyboardEventBinder.md#registerdisposer)
- [registerEventListener](util_keyboard_bindings.KeyboardEventBinder.md#registereventlistener)
- [shouldIgnoreEvent](util_keyboard_bindings.KeyboardEventBinder.md#shouldignoreevent)
- [unregisterDisposer](util_keyboard_bindings.KeyboardEventBinder.md#unregisterdisposer)

## Constructors

### constructor

• **new KeyboardEventBinder**<`EventMap`\>(`target`, `eventMap`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventMap` | extends [`HierarchicalMapInterface`](../interfaces/util_hierarchical_map.HierarchicalMapInterface.md)<`string`, [`EventAction`](../interfaces/util_event_action_map.EventAction.md), `EventMap`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EventTarget`](../modules/annotation_annotation_layer_state._internal_.md#eventtarget) |
| `eventMap` | `EventMap` |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/util/keyboard_bindings.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/keyboard_bindings.ts#L42)

## Properties

### allShortcutsAreGlobal

• **allShortcutsAreGlobal**: `boolean` = `false`

#### Defined in

[src/neuroglancer/util/keyboard_bindings.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/keyboard_bindings.ts#L40)

___

### allowSpaceKeyOnButtons

• **allowSpaceKeyOnButtons**: `boolean` = `false`

#### Defined in

[src/neuroglancer/util/keyboard_bindings.ts:41](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/keyboard_bindings.ts#L41)

___

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

### modifierShortcutsAreGlobal

• **modifierShortcutsAreGlobal**: `boolean` = `true`

#### Defined in

[src/neuroglancer/util/keyboard_bindings.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/keyboard_bindings.ts#L39)

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

▸ **addRef**(): [`KeyboardEventBinder`](util_keyboard_bindings.KeyboardEventBinder.md)<`EventMap`\>

#### Returns

[`KeyboardEventBinder`](util_keyboard_bindings.KeyboardEventBinder.md)<`EventMap`\>

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[addRef](util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

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

### handleKeyDown

▸ `Private` **handleKeyDown**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`KeyboardEvent`](../modules/annotation_annotation_layer_state._internal_.md#keyboardevent) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/keyboard_bindings.ts:97](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/keyboard_bindings.ts#L97)

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

### shouldIgnoreEvent

▸ `Private` **shouldIgnoreEvent**(`key`, `event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `event` | [`KeyboardEvent`](../modules/annotation_annotation_layer_state._internal_.md#keyboardevent) |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/util/keyboard_bindings.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/keyboard_bindings.ts#L48)

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
