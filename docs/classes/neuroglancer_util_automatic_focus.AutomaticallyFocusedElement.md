[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/util/automatic\_focus](../modules/neuroglancer_util_automatic_focus.md) / AutomaticallyFocusedElement

# Class: AutomaticallyFocusedElement

[neuroglancer/util/automatic_focus](../modules/neuroglancer_util_automatic_focus.md).AutomaticallyFocusedElement

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`AutomaticallyFocusedElement`**

## Table of contents

### Constructors

- [constructor](neuroglancer_util_automatic_focus.AutomaticallyFocusedElement.md#constructor)

### Properties

- [disposedStacks](neuroglancer_util_automatic_focus.AutomaticallyFocusedElement.md#disposedstacks)
- [element](neuroglancer_util_automatic_focus.AutomaticallyFocusedElement.md#element)
- [lastFocusedElement](neuroglancer_util_automatic_focus.AutomaticallyFocusedElement.md#lastfocusedelement)
- [next0](neuroglancer_util_automatic_focus.AutomaticallyFocusedElement.md#next0)
- [prev0](neuroglancer_util_automatic_focus.AutomaticallyFocusedElement.md#prev0)
- [refCount](neuroglancer_util_automatic_focus.AutomaticallyFocusedElement.md#refcount)
- [scheduleUpdateFocus](neuroglancer_util_automatic_focus.AutomaticallyFocusedElement.md#scheduleupdatefocus)
- [wasDisposed](neuroglancer_util_automatic_focus.AutomaticallyFocusedElement.md#wasdisposed)

### Methods

- [addRef](neuroglancer_util_automatic_focus.AutomaticallyFocusedElement.md#addref)
- [dispose](neuroglancer_util_automatic_focus.AutomaticallyFocusedElement.md#dispose)
- [disposed](neuroglancer_util_automatic_focus.AutomaticallyFocusedElement.md#disposed)
- [refCountReachedZero](neuroglancer_util_automatic_focus.AutomaticallyFocusedElement.md#refcountreachedzero)
- [registerCancellable](neuroglancer_util_automatic_focus.AutomaticallyFocusedElement.md#registercancellable)
- [registerDisposer](neuroglancer_util_automatic_focus.AutomaticallyFocusedElement.md#registerdisposer)
- [registerEventListener](neuroglancer_util_automatic_focus.AutomaticallyFocusedElement.md#registereventlistener)
- [unregisterDisposer](neuroglancer_util_automatic_focus.AutomaticallyFocusedElement.md#unregisterdisposer)

## Constructors

### constructor

• **new AutomaticallyFocusedElement**(`element`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | [`HTMLElement`](../modules/main_module._internal_.md#htmlelement) |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/util/automatic_focus.ts:74](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/automatic_focus.ts#L74)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)

___

### lastFocusedElement

• `Private` **lastFocusedElement**: ``null`` \| [`Element`](../modules/main_module._internal_.md#element) = `null`

#### Defined in

[src/neuroglancer/util/automatic_focus.ts:58](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/automatic_focus.ts#L58)

___

### next0

• **next0**: ``null`` \| [`AutomaticallyFocusedElement`](neuroglancer_util_automatic_focus.AutomaticallyFocusedElement.md) = `null`

#### Defined in

[src/neuroglancer/util/automatic_focus.ts:56](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/automatic_focus.ts#L56)

___

### prev0

• **prev0**: ``null`` \| [`AutomaticallyFocusedElement`](neuroglancer_util_automatic_focus.AutomaticallyFocusedElement.md) = `null`

#### Defined in

[src/neuroglancer/util/automatic_focus.ts:55](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/automatic_focus.ts#L55)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### scheduleUpdateFocus

• `Private` **scheduleUpdateFocus**: [`DebouncedFunc`](../interfaces/neuroglancer_chunk_manager_backend._internal_.DebouncedFunc.md)<() => `void`\>

#### Defined in

[src/neuroglancer/util/automatic_focus.ts:60](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/automatic_focus.ts#L60)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`AutomaticallyFocusedElement`](neuroglancer_util_automatic_focus.AutomaticallyFocusedElement.md)

#### Returns

[`AutomaticallyFocusedElement`](neuroglancer_util_automatic_focus.AutomaticallyFocusedElement.md)

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

[src/neuroglancer/util/automatic_focus.ts:99](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/automatic_focus.ts#L99)

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
