[neuroglancer](../README.md) / [Modules](../modules.md) / [datasource/state\_share](../modules/datasource_state_share.md) / [<internal\>](../modules/datasource_state_share._internal_.md) / LayoutComponent

# Interface: LayoutComponent

[datasource/state_share](../modules/datasource_state_share.md).[<internal>](../modules/datasource_state_share._internal_.md).LayoutComponent

## Hierarchy

- [`RefCounted`](../classes/util_disposable.RefCounted.md)

  ↳ **`LayoutComponent`**

## Implemented by

- [`StackLayoutComponent`](../classes/datasource_state_share._internal_.StackLayoutComponent.md)

## Table of contents

### Properties

- [changed](datasource_state_share._internal_.LayoutComponent.md#changed)
- [disposedStacks](datasource_state_share._internal_.LayoutComponent.md#disposedstacks)
- [element](datasource_state_share._internal_.LayoutComponent.md#element)
- [refCount](datasource_state_share._internal_.LayoutComponent.md#refcount)
- [wasDisposed](datasource_state_share._internal_.LayoutComponent.md#wasdisposed)

### Methods

- [addRef](datasource_state_share._internal_.LayoutComponent.md#addref)
- [dispose](datasource_state_share._internal_.LayoutComponent.md#dispose)
- [disposed](datasource_state_share._internal_.LayoutComponent.md#disposed)
- [refCountReachedZero](datasource_state_share._internal_.LayoutComponent.md#refcountreachedzero)
- [registerCancellable](datasource_state_share._internal_.LayoutComponent.md#registercancellable)
- [registerDisposer](datasource_state_share._internal_.LayoutComponent.md#registerdisposer)
- [registerEventListener](datasource_state_share._internal_.LayoutComponent.md#registereventlistener)
- [toJSON](datasource_state_share._internal_.LayoutComponent.md#tojson)
- [unregisterDisposer](datasource_state_share._internal_.LayoutComponent.md#unregisterdisposer)

## Properties

### changed

• **changed**: [`NullarySignal`](../classes/util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:38](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_groups_layout.ts#L38)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](../classes/util_disposable.RefCounted.md).[disposedStacks](../classes/util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:37](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_groups_layout.ts#L37)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](../classes/util_disposable.RefCounted.md).[refCount](../classes/util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](../classes/util_disposable.RefCounted.md).[wasDisposed](../classes/util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`LayoutComponent`](datasource_state_share._internal_.LayoutComponent.md)

#### Returns

[`LayoutComponent`](datasource_state_share._internal_.LayoutComponent.md)

#### Inherited from

[RefCounted](../classes/util_disposable.RefCounted.md).[addRef](../classes/util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](../classes/util_disposable.RefCounted.md).[dispose](../classes/util_disposable.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](../classes/util_disposable.RefCounted.md).[disposed](../classes/util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L75)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](../classes/util_disposable.RefCounted.md).[refCountReachedZero](../classes/util_disposable.RefCounted.md#refcountreachedzero)

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

[RefCounted](../classes/util_disposable.RefCounted.md).[registerCancellable](../classes/util_disposable.RefCounted.md#registercancellable)

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

[RefCounted](../classes/util_disposable.RefCounted.md).[registerDisposer](../classes/util_disposable.RefCounted.md#registerdisposer)

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
| `options?` | `boolean` \| [`AddEventListenerOptions`](annotation_annotation_layer_state._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

[RefCounted](../classes/util_disposable.RefCounted.md).[registerEventListener](../classes/util_disposable.RefCounted.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L95)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_groups_layout.ts#L39)

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

[RefCounted](../classes/util_disposable.RefCounted.md).[unregisterDisposer](../classes/util_disposable.RefCounted.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)
