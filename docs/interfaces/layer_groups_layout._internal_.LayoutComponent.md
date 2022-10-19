[neuroglancer](../README.md) / [Modules](../modules.md) / [layer\_groups\_layout](../modules/layer_groups_layout.md) / [<internal\>](../modules/layer_groups_layout._internal_.md) / LayoutComponent

# Interface: LayoutComponent

[layer_groups_layout](../modules/layer_groups_layout.md).[<internal>](../modules/layer_groups_layout._internal_.md).LayoutComponent

## Hierarchy

- [`RefCounted`](../classes/axes_lines._internal_.RefCounted.md)

  ↳ **`LayoutComponent`**

## Implemented by

- [`SingletonLayerGroupViewer`](../classes/layer_groups_layout.SingletonLayerGroupViewer.md)
- [`StackLayoutComponent`](../classes/layer_groups_layout.StackLayoutComponent.md)

## Table of contents

### Properties

- [changed](layer_groups_layout._internal_.LayoutComponent.md#changed)
- [disposedStacks](layer_groups_layout._internal_.LayoutComponent.md#disposedstacks)
- [element](layer_groups_layout._internal_.LayoutComponent.md#element)
- [refCount](layer_groups_layout._internal_.LayoutComponent.md#refcount)
- [wasDisposed](layer_groups_layout._internal_.LayoutComponent.md#wasdisposed)

### Methods

- [addRef](layer_groups_layout._internal_.LayoutComponent.md#addref)
- [dispose](layer_groups_layout._internal_.LayoutComponent.md#dispose)
- [disposed](layer_groups_layout._internal_.LayoutComponent.md#disposed)
- [refCountReachedZero](layer_groups_layout._internal_.LayoutComponent.md#refcountreachedzero)
- [registerCancellable](layer_groups_layout._internal_.LayoutComponent.md#registercancellable)
- [registerDisposer](layer_groups_layout._internal_.LayoutComponent.md#registerdisposer)
- [registerEventListener](layer_groups_layout._internal_.LayoutComponent.md#registereventlistener)
- [toJSON](layer_groups_layout._internal_.LayoutComponent.md#tojson)
- [unregisterDisposer](layer_groups_layout._internal_.LayoutComponent.md#unregisterdisposer)

## Properties

### changed

• **changed**: [`NullarySignal`](../classes/coordinate_transform._internal_.NullarySignal.md)

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:38](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer_groups_layout.ts#L38)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](../classes/axes_lines._internal_.RefCounted.md).[disposedStacks](../classes/axes_lines._internal_.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: [`HTMLElement`](../modules/axes_lines._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:37](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer_groups_layout.ts#L37)

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

▸ **addRef**(): [`LayoutComponent`](layer_groups_layout._internal_.LayoutComponent.md)

#### Returns

[`LayoutComponent`](layer_groups_layout._internal_.LayoutComponent.md)

#### Inherited from

[RefCounted](../classes/axes_lines._internal_.RefCounted.md).[addRef](../classes/axes_lines._internal_.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L48)

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

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer_groups_layout.ts#L39)

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
