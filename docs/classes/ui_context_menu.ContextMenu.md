[neuroglancer](../README.md) / [Modules](../modules.md) / [ui/context\_menu](../modules/ui_context_menu.md) / ContextMenu

# Class: ContextMenu

[ui/context_menu](../modules/ui_context_menu.md).ContextMenu

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`ContextMenu`**

## Table of contents

### Constructors

- [constructor](ui_context_menu.ContextMenu.md#constructor)

### Properties

- [closed](ui_context_menu.ContextMenu.md#closed)
- [disabledValue](ui_context_menu.ContextMenu.md#disabledvalue)
- [disposedStacks](ui_context_menu.ContextMenu.md#disposedstacks)
- [element](ui_context_menu.ContextMenu.md#element)
- [menuDisposer](ui_context_menu.ContextMenu.md#menudisposer)
- [opened](ui_context_menu.ContextMenu.md#opened)
- [parentDisposers](ui_context_menu.ContextMenu.md#parentdisposers)
- [refCount](ui_context_menu.ContextMenu.md#refcount)
- [wasDisposed](ui_context_menu.ContextMenu.md#wasdisposed)

### Accessors

- [disabled](ui_context_menu.ContextMenu.md#disabled)
- [open](ui_context_menu.ContextMenu.md#open)

### Methods

- [addRef](ui_context_menu.ContextMenu.md#addref)
- [dispose](ui_context_menu.ContextMenu.md#dispose)
- [disposed](ui_context_menu.ContextMenu.md#disposed)
- [hide](ui_context_menu.ContextMenu.md#hide)
- [refCountReachedZero](ui_context_menu.ContextMenu.md#refcountreachedzero)
- [registerCancellable](ui_context_menu.ContextMenu.md#registercancellable)
- [registerDisposer](ui_context_menu.ContextMenu.md#registerdisposer)
- [registerEventListener](ui_context_menu.ContextMenu.md#registereventlistener)
- [registerParent](ui_context_menu.ContextMenu.md#registerparent)
- [show](ui_context_menu.ContextMenu.md#show)
- [unregisterDisposer](ui_context_menu.ContextMenu.md#unregisterdisposer)
- [unregisterParent](ui_context_menu.ContextMenu.md#unregisterparent)

## Constructors

### constructor

• **new ContextMenu**(`parent?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent?` | [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement) |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/ui/context_menu.ts:57](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/context_menu.ts#L57)

## Properties

### closed

• **closed**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/ui/context_menu.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/context_menu.ts#L45)

___

### disabledValue

• `Private` **disabledValue**: `boolean` = `false`

#### Defined in

[src/neuroglancer/ui/context_menu.ts:43](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/context_menu.ts#L43)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: [`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/ui/context_menu.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/context_menu.ts#L40)

___

### menuDisposer

• `Private` **menuDisposer**: `undefined` \| () => `void`

#### Defined in

[src/neuroglancer/ui/context_menu.ts:41](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/context_menu.ts#L41)

___

### opened

• **opened**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/ui/context_menu.ts:44](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/context_menu.ts#L44)

___

### parentDisposers

• `Private` **parentDisposers**: `Map`<[`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement), () => `void`\>

#### Defined in

[src/neuroglancer/ui/context_menu.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/context_menu.ts#L42)

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

## Accessors

### disabled

• `get` **disabled**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/ui/context_menu.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/context_menu.ts#L46)

• `set` **disabled**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/context_menu.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/context_menu.ts#L49)

___

### open

• `get` **open**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/ui/context_menu.ts:70](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/context_menu.ts#L70)

## Methods

### addRef

▸ **addRef**(): [`ContextMenu`](ui_context_menu.ContextMenu.md)

#### Returns

[`ContextMenu`](ui_context_menu.ContextMenu.md)

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

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[disposed](util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/ui/context_menu.ts:122](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/context_menu.ts#L122)

___

### hide

▸ **hide**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/context_menu.ts:131](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/context_menu.ts#L131)

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

### registerParent

▸ **registerParent**(`parent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/context_menu.ts:74](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/context_menu.ts#L74)

___

### show

▸ **show**(`originalEvent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `originalEvent` | [`MouseEvent`](../modules/annotation_annotation_layer_state._internal_.md#mouseevent) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/context_menu.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/context_menu.ts#L87)

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

### unregisterParent

▸ **unregisterParent**(`parent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/context_menu.ts:113](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/context_menu.ts#L113)
