[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/ui/context\_menu](../modules/neuroglancer_ui_context_menu.md) / ContextMenu

# Class: ContextMenu

[neuroglancer/ui/context_menu](../modules/neuroglancer_ui_context_menu.md).ContextMenu

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`ContextMenu`**

## Table of contents

### Constructors

- [constructor](neuroglancer_ui_context_menu.ContextMenu.md#constructor)

### Properties

- [closed](neuroglancer_ui_context_menu.ContextMenu.md#closed)
- [disabledValue](neuroglancer_ui_context_menu.ContextMenu.md#disabledvalue)
- [disposedStacks](neuroglancer_ui_context_menu.ContextMenu.md#disposedstacks)
- [element](neuroglancer_ui_context_menu.ContextMenu.md#element)
- [menuDisposer](neuroglancer_ui_context_menu.ContextMenu.md#menudisposer)
- [opened](neuroglancer_ui_context_menu.ContextMenu.md#opened)
- [parentDisposers](neuroglancer_ui_context_menu.ContextMenu.md#parentdisposers)
- [refCount](neuroglancer_ui_context_menu.ContextMenu.md#refcount)
- [wasDisposed](neuroglancer_ui_context_menu.ContextMenu.md#wasdisposed)

### Accessors

- [disabled](neuroglancer_ui_context_menu.ContextMenu.md#disabled)
- [open](neuroglancer_ui_context_menu.ContextMenu.md#open)

### Methods

- [addRef](neuroglancer_ui_context_menu.ContextMenu.md#addref)
- [dispose](neuroglancer_ui_context_menu.ContextMenu.md#dispose)
- [disposed](neuroglancer_ui_context_menu.ContextMenu.md#disposed)
- [hide](neuroglancer_ui_context_menu.ContextMenu.md#hide)
- [refCountReachedZero](neuroglancer_ui_context_menu.ContextMenu.md#refcountreachedzero)
- [registerCancellable](neuroglancer_ui_context_menu.ContextMenu.md#registercancellable)
- [registerDisposer](neuroglancer_ui_context_menu.ContextMenu.md#registerdisposer)
- [registerEventListener](neuroglancer_ui_context_menu.ContextMenu.md#registereventlistener)
- [registerParent](neuroglancer_ui_context_menu.ContextMenu.md#registerparent)
- [show](neuroglancer_ui_context_menu.ContextMenu.md#show)
- [unregisterDisposer](neuroglancer_ui_context_menu.ContextMenu.md#unregisterdisposer)
- [unregisterParent](neuroglancer_ui_context_menu.ContextMenu.md#unregisterparent)

## Constructors

### constructor

• **new ContextMenu**(`parent?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent?` | [`HTMLElement`](../modules/main_module._internal_.md#htmlelement) |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/ui/context_menu.ts:57](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/context_menu.ts#L57)

## Properties

### closed

• **closed**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/ui/context_menu.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/context_menu.ts#L45)

___

### disabledValue

• `Private` **disabledValue**: `boolean` = `false`

#### Defined in

[src/neuroglancer/ui/context_menu.ts:43](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/context_menu.ts#L43)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/ui/context_menu.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/context_menu.ts#L40)

___

### menuDisposer

• `Private` **menuDisposer**: `undefined` \| () => `void`

#### Defined in

[src/neuroglancer/ui/context_menu.ts:41](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/context_menu.ts#L41)

___

### opened

• **opened**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/ui/context_menu.ts:44](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/context_menu.ts#L44)

___

### parentDisposers

• `Private` **parentDisposers**: `Map`<[`HTMLElement`](../modules/main_module._internal_.md#htmlelement), () => `void`\>

#### Defined in

[src/neuroglancer/ui/context_menu.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/context_menu.ts#L42)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### disabled

• `get` **disabled**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/ui/context_menu.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/context_menu.ts#L46)

• `set` **disabled**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/context_menu.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/context_menu.ts#L49)

___

### open

• `get` **open**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/ui/context_menu.ts:70](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/context_menu.ts#L70)

## Methods

### addRef

▸ **addRef**(): [`ContextMenu`](neuroglancer_ui_context_menu.ContextMenu.md)

#### Returns

[`ContextMenu`](neuroglancer_ui_context_menu.ContextMenu.md)

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[addRef](neuroglancer_util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[dispose](neuroglancer_util_disposable.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposed](neuroglancer_util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/ui/context_menu.ts:122](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/context_menu.ts#L122)

___

### hide

▸ **hide**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/context_menu.ts:131](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/context_menu.ts#L131)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCountReachedZero](neuroglancer_util_disposable.RefCounted.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L66)

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

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[registerCancellable](neuroglancer_util_disposable.RefCounted.md#registercancellable)

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L100)

___

### registerDisposer

▸ **registerDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/neuroglancer_util_disposable.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[registerDisposer](neuroglancer_util_disposable.RefCounted.md#registerdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L76)

___

### registerEventListener

▸ **registerEventListener**(`target`, `type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EventTarget`](../modules/main_module._internal_.md#eventtarget) |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/main_module._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](../interfaces/main_module._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[registerEventListener](neuroglancer_util_disposable.RefCounted.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L95)

___

### registerParent

▸ **registerParent**(`parent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`HTMLElement`](../modules/main_module._internal_.md#htmlelement) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/context_menu.ts:74](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/context_menu.ts#L74)

___

### show

▸ **show**(`originalEvent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `originalEvent` | [`MouseEvent`](../modules/main_module._internal_.md#mouseevent) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/context_menu.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/context_menu.ts#L87)

___

### unregisterDisposer

▸ **unregisterDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/neuroglancer_util_disposable.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[unregisterDisposer](neuroglancer_util_disposable.RefCounted.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L85)

___

### unregisterParent

▸ **unregisterParent**(`parent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`HTMLElement`](../modules/main_module._internal_.md#htmlelement) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/context_menu.ts:113](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/context_menu.ts#L113)
