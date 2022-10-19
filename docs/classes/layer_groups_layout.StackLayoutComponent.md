[neuroglancer](../README.md) / [Modules](../modules.md) / [layer\_groups\_layout](../modules/layer_groups_layout.md) / StackLayoutComponent

# Class: StackLayoutComponent

[layer_groups_layout](../modules/layer_groups_layout.md).StackLayoutComponent

## Hierarchy

- [`RefCounted`](axes_lines._internal_.RefCounted.md)

  ↳ **`StackLayoutComponent`**

## Implements

- [`LayoutComponent`](../interfaces/layer_groups_layout._internal_.LayoutComponent.md)

## Table of contents

### Constructors

- [constructor](layer_groups_layout.StackLayoutComponent.md#constructor)

### Properties

- [changed](layer_groups_layout.StackLayoutComponent.md#changed)
- [container](layer_groups_layout.StackLayoutComponent.md#container)
- [direction](layer_groups_layout.StackLayoutComponent.md#direction)
- [disposedStacks](layer_groups_layout.StackLayoutComponent.md#disposedstacks)
- [element](layer_groups_layout.StackLayoutComponent.md#element)
- [refCount](layer_groups_layout.StackLayoutComponent.md#refcount)
- [wasDisposed](layer_groups_layout.StackLayoutComponent.md#wasdisposed)

### Accessors

- [length](layer_groups_layout.StackLayoutComponent.md#length)
- [viewer](layer_groups_layout.StackLayoutComponent.md#viewer)

### Methods

- [[iterator]](layer_groups_layout.StackLayoutComponent.md#[iterator])
- [addRef](layer_groups_layout.StackLayoutComponent.md#addref)
- [clear](layer_groups_layout.StackLayoutComponent.md#clear)
- [dispose](layer_groups_layout.StackLayoutComponent.md#dispose)
- [disposed](layer_groups_layout.StackLayoutComponent.md#disposed)
- [get](layer_groups_layout.StackLayoutComponent.md#get)
- [insertChild](layer_groups_layout.StackLayoutComponent.md#insertchild)
- [makeDropPlaceholder](layer_groups_layout.StackLayoutComponent.md#makedropplaceholder)
- [refCountReachedZero](layer_groups_layout.StackLayoutComponent.md#refcountreachedzero)
- [registerCancellable](layer_groups_layout.StackLayoutComponent.md#registercancellable)
- [registerDisposer](layer_groups_layout.StackLayoutComponent.md#registerdisposer)
- [registerEventListener](layer_groups_layout.StackLayoutComponent.md#registereventlistener)
- [toJSON](layer_groups_layout.StackLayoutComponent.md#tojson)
- [unregisterDisposer](layer_groups_layout.StackLayoutComponent.md#unregisterdisposer)

## Constructors

### constructor

• **new StackLayoutComponent**(`element`, `direction`, `children`, `container`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | [`HTMLElement`](../modules/axes_lines._internal_.md#htmlelement) |
| `direction` | ``"row"`` \| ``"column"`` |
| `children` | `any`[] |
| `container` | [`LayoutComponentContainer`](layer_groups_layout.LayoutComponentContainer.md) |

#### Overrides

[RefCounted](axes_lines._internal_.RefCounted.md).[constructor](axes_lines._internal_.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:451](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer_groups_layout.ts#L451)

## Properties

### changed

• **changed**: [`NullarySignal`](coordinate_transform._internal_.NullarySignal.md)

#### Implementation of

[LayoutComponent](../interfaces/layer_groups_layout._internal_.LayoutComponent.md).[changed](../interfaces/layer_groups_layout._internal_.LayoutComponent.md#changed)

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:423](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer_groups_layout.ts#L423)

___

### container

• **container**: [`LayoutComponentContainer`](layer_groups_layout.LayoutComponentContainer.md)

___

### direction

• **direction**: ``"row"`` \| ``"column"``

___

### disposedStacks

• **disposedStacks**: `any`

#### Implementation of

[LayoutComponent](../interfaces/layer_groups_layout._internal_.LayoutComponent.md).[disposedStacks](../interfaces/layer_groups_layout._internal_.LayoutComponent.md#disposedstacks)

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[disposedStacks](axes_lines._internal_.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: [`HTMLElement`](../modules/axes_lines._internal_.md#htmlelement)

#### Implementation of

[LayoutComponent](../interfaces/layer_groups_layout._internal_.LayoutComponent.md).[element](../interfaces/layer_groups_layout._internal_.LayoutComponent.md#element)

___

### refCount

• **refCount**: `number` = `1`

#### Implementation of

[LayoutComponent](../interfaces/layer_groups_layout._internal_.LayoutComponent.md).[refCount](../interfaces/layer_groups_layout._internal_.LayoutComponent.md#refcount)

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[refCount](axes_lines._internal_.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Implementation of

[LayoutComponent](../interfaces/layer_groups_layout._internal_.LayoutComponent.md).[wasDisposed](../interfaces/layer_groups_layout._internal_.LayoutComponent.md#wasdisposed)

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[wasDisposed](axes_lines._internal_.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### length

• `get` **length**(): `number`

#### Returns

`number`

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:425](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer_groups_layout.ts#L425)

___

### viewer

• `get` **viewer**(): [`Viewer`](viewer.Viewer.md)

#### Returns

[`Viewer`](viewer.Viewer.md)

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:447](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer_groups_layout.ts#L447)

## Methods

### [iterator]

▸ **[iterator]**(): [`Generator`](../interfaces/layer._internal_.Generator.md)<[`LayoutComponentContainer`](layer_groups_layout.LayoutComponentContainer.md), `void`, `unknown`\>

#### Returns

[`Generator`](../interfaces/layer._internal_.Generator.md)<[`LayoutComponentContainer`](layer_groups_layout.LayoutComponentContainer.md), `void`, `unknown`\>

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:496](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer_groups_layout.ts#L496)

___

### addRef

▸ **addRef**(): [`StackLayoutComponent`](layer_groups_layout.StackLayoutComponent.md)

#### Returns

[`StackLayoutComponent`](layer_groups_layout.StackLayoutComponent.md)

#### Implementation of

[LayoutComponent](../interfaces/layer_groups_layout._internal_.LayoutComponent.md).[addRef](../interfaces/layer_groups_layout._internal_.LayoutComponent.md#addref)

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[addRef](axes_lines._internal_.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L48)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:490](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer_groups_layout.ts#L490)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Implementation of

[LayoutComponent](../interfaces/layer_groups_layout._internal_.LayoutComponent.md).[dispose](../interfaces/layer_groups_layout._internal_.LayoutComponent.md#dispose)

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[dispose](axes_lines._internal_.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Implementation of

[LayoutComponent](../interfaces/layer_groups_layout._internal_.LayoutComponent.md).[disposed](../interfaces/layer_groups_layout._internal_.LayoutComponent.md#disposed)

#### Overrides

[RefCounted](axes_lines._internal_.RefCounted.md).[disposed](axes_lines._internal_.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:485](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer_groups_layout.ts#L485)

___

### get

▸ **get**(`index`): [`LayoutComponentContainer`](layer_groups_layout.LayoutComponentContainer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

[`LayoutComponentContainer`](layer_groups_layout.LayoutComponentContainer.md)

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:465](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer_groups_layout.ts#L465)

___

### insertChild

▸ **insertChild**(`spec`, `before?`): [`LayoutComponentContainer`](layer_groups_layout.LayoutComponentContainer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `spec` | `any` |
| `before?` | [`LayoutComponentContainer`](layer_groups_layout.LayoutComponentContainer.md) |

#### Returns

[`LayoutComponentContainer`](layer_groups_layout.LayoutComponentContainer.md)

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:469](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer_groups_layout.ts#L469)

___

### makeDropPlaceholder

▸ `Private` **makeDropPlaceholder**(`refCounted`): [`HTMLDivElement`](../modules/axes_lines._internal_.md#htmldivelement)

#### Parameters

| Name | Type |
| :------ | :------ |
| `refCounted` | [`RefCounted`](axes_lines._internal_.RefCounted.md) |

#### Returns

[`HTMLDivElement`](../modules/axes_lines._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:429](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer_groups_layout.ts#L429)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Implementation of

[LayoutComponent](../interfaces/layer_groups_layout._internal_.LayoutComponent.md).[refCountReachedZero](../interfaces/layer_groups_layout._internal_.LayoutComponent.md#refcountreachedzero)

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[refCountReachedZero](axes_lines._internal_.RefCounted.md#refcountreachedzero)

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

#### Implementation of

[LayoutComponent](../interfaces/layer_groups_layout._internal_.LayoutComponent.md).[registerCancellable](../interfaces/layer_groups_layout._internal_.LayoutComponent.md#registercancellable)

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[registerCancellable](axes_lines._internal_.RefCounted.md#registercancellable)

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

#### Implementation of

[LayoutComponent](../interfaces/layer_groups_layout._internal_.LayoutComponent.md).[registerDisposer](../interfaces/layer_groups_layout._internal_.LayoutComponent.md#registerdisposer)

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[registerDisposer](axes_lines._internal_.RefCounted.md#registerdisposer)

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
| `options?` | `boolean` \| [`AddEventListenerOptions`](../interfaces/axes_lines._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Implementation of

[LayoutComponent](../interfaces/layer_groups_layout._internal_.LayoutComponent.md).[registerEventListener](../interfaces/layer_groups_layout._internal_.LayoutComponent.md#registereventlistener)

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[registerEventListener](axes_lines._internal_.RefCounted.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L95)

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

[LayoutComponent](../interfaces/layer_groups_layout._internal_.LayoutComponent.md).[toJSON](../interfaces/layer_groups_layout._internal_.LayoutComponent.md#tojson)

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:503](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer_groups_layout.ts#L503)

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

#### Implementation of

[LayoutComponent](../interfaces/layer_groups_layout._internal_.LayoutComponent.md).[unregisterDisposer](../interfaces/layer_groups_layout._internal_.LayoutComponent.md#unregisterdisposer)

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[unregisterDisposer](axes_lines._internal_.RefCounted.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L85)
