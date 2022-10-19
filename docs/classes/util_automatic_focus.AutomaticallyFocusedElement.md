[neuroglancer](../README.md) / [Modules](../modules.md) / [util/automatic\_focus](../modules/util_automatic_focus.md) / AutomaticallyFocusedElement

# Class: AutomaticallyFocusedElement

[util/automatic_focus](../modules/util_automatic_focus.md).AutomaticallyFocusedElement

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`AutomaticallyFocusedElement`**

## Table of contents

### Constructors

- [constructor](util_automatic_focus.AutomaticallyFocusedElement.md#constructor)

### Properties

- [disposedStacks](util_automatic_focus.AutomaticallyFocusedElement.md#disposedstacks)
- [element](util_automatic_focus.AutomaticallyFocusedElement.md#element)
- [lastFocusedElement](util_automatic_focus.AutomaticallyFocusedElement.md#lastfocusedelement)
- [next0](util_automatic_focus.AutomaticallyFocusedElement.md#next0)
- [prev0](util_automatic_focus.AutomaticallyFocusedElement.md#prev0)
- [refCount](util_automatic_focus.AutomaticallyFocusedElement.md#refcount)
- [scheduleUpdateFocus](util_automatic_focus.AutomaticallyFocusedElement.md#scheduleupdatefocus)
- [wasDisposed](util_automatic_focus.AutomaticallyFocusedElement.md#wasdisposed)

### Methods

- [addRef](util_automatic_focus.AutomaticallyFocusedElement.md#addref)
- [dispose](util_automatic_focus.AutomaticallyFocusedElement.md#dispose)
- [disposed](util_automatic_focus.AutomaticallyFocusedElement.md#disposed)
- [refCountReachedZero](util_automatic_focus.AutomaticallyFocusedElement.md#refcountreachedzero)
- [registerCancellable](util_automatic_focus.AutomaticallyFocusedElement.md#registercancellable)
- [registerDisposer](util_automatic_focus.AutomaticallyFocusedElement.md#registerdisposer)
- [registerEventListener](util_automatic_focus.AutomaticallyFocusedElement.md#registereventlistener)
- [unregisterDisposer](util_automatic_focus.AutomaticallyFocusedElement.md#unregisterdisposer)

## Constructors

### constructor

• **new AutomaticallyFocusedElement**(`element`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement) |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/util/automatic_focus.ts:74](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/automatic_focus.ts#L74)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement)

___

### lastFocusedElement

• `Private` **lastFocusedElement**: ``null`` \| [`Element`](../modules/annotation_annotation_layer_state._internal_.md#element) = `null`

#### Defined in

[src/neuroglancer/util/automatic_focus.ts:58](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/automatic_focus.ts#L58)

___

### next0

• **next0**: ``null`` \| [`AutomaticallyFocusedElement`](util_automatic_focus.AutomaticallyFocusedElement.md) = `null`

#### Defined in

[src/neuroglancer/util/automatic_focus.ts:56](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/automatic_focus.ts#L56)

___

### prev0

• **prev0**: ``null`` \| [`AutomaticallyFocusedElement`](util_automatic_focus.AutomaticallyFocusedElement.md) = `null`

#### Defined in

[src/neuroglancer/util/automatic_focus.ts:55](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/automatic_focus.ts#L55)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### scheduleUpdateFocus

• `Private` **scheduleUpdateFocus**: [`DebouncedFunc`](../interfaces/annotation_annotation_layer_state._internal_.DebouncedFunc.md)<() => `void`\>

#### Defined in

[src/neuroglancer/util/automatic_focus.ts:60](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/automatic_focus.ts#L60)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`AutomaticallyFocusedElement`](util_automatic_focus.AutomaticallyFocusedElement.md)

#### Returns

[`AutomaticallyFocusedElement`](util_automatic_focus.AutomaticallyFocusedElement.md)

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

[src/neuroglancer/util/automatic_focus.ts:99](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/automatic_focus.ts#L99)

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
