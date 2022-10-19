[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/layer\_groups\_layout](../modules/neuroglancer_layer_groups_layout.md) / StackLayoutComponent

# Class: StackLayoutComponent

[neuroglancer/layer_groups_layout](../modules/neuroglancer_layer_groups_layout.md).StackLayoutComponent

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`StackLayoutComponent`**

## Implements

- [`LayoutComponent`](../interfaces/neuroglancer_layer_groups_layout._internal_.LayoutComponent.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_layer_groups_layout.StackLayoutComponent.md#constructor)

### Properties

- [changed](neuroglancer_layer_groups_layout.StackLayoutComponent.md#changed)
- [container](neuroglancer_layer_groups_layout.StackLayoutComponent.md#container)
- [direction](neuroglancer_layer_groups_layout.StackLayoutComponent.md#direction)
- [disposedStacks](neuroglancer_layer_groups_layout.StackLayoutComponent.md#disposedstacks)
- [element](neuroglancer_layer_groups_layout.StackLayoutComponent.md#element)
- [refCount](neuroglancer_layer_groups_layout.StackLayoutComponent.md#refcount)
- [wasDisposed](neuroglancer_layer_groups_layout.StackLayoutComponent.md#wasdisposed)

### Accessors

- [length](neuroglancer_layer_groups_layout.StackLayoutComponent.md#length)
- [viewer](neuroglancer_layer_groups_layout.StackLayoutComponent.md#viewer)

### Methods

- [[iterator]](neuroglancer_layer_groups_layout.StackLayoutComponent.md#[iterator])
- [addRef](neuroglancer_layer_groups_layout.StackLayoutComponent.md#addref)
- [clear](neuroglancer_layer_groups_layout.StackLayoutComponent.md#clear)
- [dispose](neuroglancer_layer_groups_layout.StackLayoutComponent.md#dispose)
- [disposed](neuroglancer_layer_groups_layout.StackLayoutComponent.md#disposed)
- [get](neuroglancer_layer_groups_layout.StackLayoutComponent.md#get)
- [insertChild](neuroglancer_layer_groups_layout.StackLayoutComponent.md#insertchild)
- [makeDropPlaceholder](neuroglancer_layer_groups_layout.StackLayoutComponent.md#makedropplaceholder)
- [refCountReachedZero](neuroglancer_layer_groups_layout.StackLayoutComponent.md#refcountreachedzero)
- [registerCancellable](neuroglancer_layer_groups_layout.StackLayoutComponent.md#registercancellable)
- [registerDisposer](neuroglancer_layer_groups_layout.StackLayoutComponent.md#registerdisposer)
- [registerEventListener](neuroglancer_layer_groups_layout.StackLayoutComponent.md#registereventlistener)
- [toJSON](neuroglancer_layer_groups_layout.StackLayoutComponent.md#tojson)
- [unregisterDisposer](neuroglancer_layer_groups_layout.StackLayoutComponent.md#unregisterdisposer)

## Constructors

### constructor

• **new StackLayoutComponent**(`element`, `direction`, `children`, `container`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | [`HTMLElement`](../modules/main_module._internal_.md#htmlelement) |
| `direction` | ``"row"`` \| ``"column"`` |
| `children` | `any`[] |
| `container` | [`LayoutComponentContainer`](neuroglancer_layer_groups_layout.LayoutComponentContainer.md) |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:451](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer_groups_layout.ts#L451)

## Properties

### changed

• **changed**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Implementation of

[LayoutComponent](../interfaces/neuroglancer_layer_groups_layout._internal_.LayoutComponent.md).[changed](../interfaces/neuroglancer_layer_groups_layout._internal_.LayoutComponent.md#changed)

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:423](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer_groups_layout.ts#L423)

___

### container

• **container**: [`LayoutComponentContainer`](neuroglancer_layer_groups_layout.LayoutComponentContainer.md)

___

### direction

• **direction**: ``"row"`` \| ``"column"``

___

### disposedStacks

• **disposedStacks**: `any`

#### Implementation of

[LayoutComponent](../interfaces/neuroglancer_layer_groups_layout._internal_.LayoutComponent.md).[disposedStacks](../interfaces/neuroglancer_layer_groups_layout._internal_.LayoutComponent.md#disposedstacks)

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)

#### Implementation of

[LayoutComponent](../interfaces/neuroglancer_layer_groups_layout._internal_.LayoutComponent.md).[element](../interfaces/neuroglancer_layer_groups_layout._internal_.LayoutComponent.md#element)

___

### refCount

• **refCount**: `number` = `1`

#### Implementation of

[LayoutComponent](../interfaces/neuroglancer_layer_groups_layout._internal_.LayoutComponent.md).[refCount](../interfaces/neuroglancer_layer_groups_layout._internal_.LayoutComponent.md#refcount)

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Implementation of

[LayoutComponent](../interfaces/neuroglancer_layer_groups_layout._internal_.LayoutComponent.md).[wasDisposed](../interfaces/neuroglancer_layer_groups_layout._internal_.LayoutComponent.md#wasdisposed)

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### length

• `get` **length**(): `number`

#### Returns

`number`

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:425](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer_groups_layout.ts#L425)

___

### viewer

• `get` **viewer**(): [`Viewer`](neuroglancer_viewer.Viewer.md)

#### Returns

[`Viewer`](neuroglancer_viewer.Viewer.md)

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:447](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer_groups_layout.ts#L447)

## Methods

### [iterator]

▸ **[iterator]**(): [`Generator`](../interfaces/neuroglancer_chunk_manager_backend._internal_.Generator.md)<[`LayoutComponentContainer`](neuroglancer_layer_groups_layout.LayoutComponentContainer.md), `void`, `unknown`\>

#### Returns

[`Generator`](../interfaces/neuroglancer_chunk_manager_backend._internal_.Generator.md)<[`LayoutComponentContainer`](neuroglancer_layer_groups_layout.LayoutComponentContainer.md), `void`, `unknown`\>

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:496](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer_groups_layout.ts#L496)

___

### addRef

▸ **addRef**(): [`StackLayoutComponent`](neuroglancer_layer_groups_layout.StackLayoutComponent.md)

#### Returns

[`StackLayoutComponent`](neuroglancer_layer_groups_layout.StackLayoutComponent.md)

#### Implementation of

[LayoutComponent](../interfaces/neuroglancer_layer_groups_layout._internal_.LayoutComponent.md).[addRef](../interfaces/neuroglancer_layer_groups_layout._internal_.LayoutComponent.md#addref)

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[addRef](neuroglancer_util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L48)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:490](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer_groups_layout.ts#L490)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Implementation of

[LayoutComponent](../interfaces/neuroglancer_layer_groups_layout._internal_.LayoutComponent.md).[dispose](../interfaces/neuroglancer_layer_groups_layout._internal_.LayoutComponent.md#dispose)

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[dispose](neuroglancer_util_disposable.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Implementation of

[LayoutComponent](../interfaces/neuroglancer_layer_groups_layout._internal_.LayoutComponent.md).[disposed](../interfaces/neuroglancer_layer_groups_layout._internal_.LayoutComponent.md#disposed)

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposed](neuroglancer_util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:485](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer_groups_layout.ts#L485)

___

### get

▸ **get**(`index`): [`LayoutComponentContainer`](neuroglancer_layer_groups_layout.LayoutComponentContainer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

[`LayoutComponentContainer`](neuroglancer_layer_groups_layout.LayoutComponentContainer.md)

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:465](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer_groups_layout.ts#L465)

___

### insertChild

▸ **insertChild**(`spec`, `before?`): [`LayoutComponentContainer`](neuroglancer_layer_groups_layout.LayoutComponentContainer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `spec` | `any` |
| `before?` | [`LayoutComponentContainer`](neuroglancer_layer_groups_layout.LayoutComponentContainer.md) |

#### Returns

[`LayoutComponentContainer`](neuroglancer_layer_groups_layout.LayoutComponentContainer.md)

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:469](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer_groups_layout.ts#L469)

___

### makeDropPlaceholder

▸ `Private` **makeDropPlaceholder**(`refCounted`): [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Parameters

| Name | Type |
| :------ | :------ |
| `refCounted` | [`RefCounted`](neuroglancer_util_disposable.RefCounted.md) |

#### Returns

[`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:429](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer_groups_layout.ts#L429)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Implementation of

[LayoutComponent](../interfaces/neuroglancer_layer_groups_layout._internal_.LayoutComponent.md).[refCountReachedZero](../interfaces/neuroglancer_layer_groups_layout._internal_.LayoutComponent.md#refcountreachedzero)

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

#### Implementation of

[LayoutComponent](../interfaces/neuroglancer_layer_groups_layout._internal_.LayoutComponent.md).[registerCancellable](../interfaces/neuroglancer_layer_groups_layout._internal_.LayoutComponent.md#registercancellable)

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

#### Implementation of

[LayoutComponent](../interfaces/neuroglancer_layer_groups_layout._internal_.LayoutComponent.md).[registerDisposer](../interfaces/neuroglancer_layer_groups_layout._internal_.LayoutComponent.md#registerdisposer)

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

#### Implementation of

[LayoutComponent](../interfaces/neuroglancer_layer_groups_layout._internal_.LayoutComponent.md).[registerEventListener](../interfaces/neuroglancer_layer_groups_layout._internal_.LayoutComponent.md#registereventlistener)

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[registerEventListener](neuroglancer_util_disposable.RefCounted.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L95)

___

### toJSON

▸ **toJSON**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `children` | `any`[] |
| `type` | ``"row"`` \| ``"column"`` |

#### Implementation of

[LayoutComponent](../interfaces/neuroglancer_layer_groups_layout._internal_.LayoutComponent.md).[toJSON](../interfaces/neuroglancer_layer_groups_layout._internal_.LayoutComponent.md#tojson)

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:503](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer_groups_layout.ts#L503)

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

#### Implementation of

[LayoutComponent](../interfaces/neuroglancer_layer_groups_layout._internal_.LayoutComponent.md).[unregisterDisposer](../interfaces/neuroglancer_layer_groups_layout._internal_.LayoutComponent.md#unregisterdisposer)

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[unregisterDisposer](neuroglancer_util_disposable.RefCounted.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L85)
