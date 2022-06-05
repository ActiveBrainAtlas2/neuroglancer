[neuroglancer](../README.md) / [Modules](../modules.md) / [layer\_groups\_layout](../modules/layer_groups_layout.md) / StackLayoutComponent

# Class: StackLayoutComponent

[layer_groups_layout](../modules/layer_groups_layout.md).StackLayoutComponent

## Hierarchy

- `RefCounted`

  ↳ **`StackLayoutComponent`**

## Implements

- `LayoutComponent`

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
| `element` | `HTMLElement` |
| `direction` | ``"row"`` \| ``"column"`` |
| `children` | `any`[] |
| `container` | [`LayoutComponentContainer`](layer_groups_layout.LayoutComponentContainer.md) |

#### Overrides

RefCounted.constructor

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:451](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer_groups_layout.ts#L451)

## Properties

### changed

• **changed**: `NullarySignal`

#### Implementation of

LayoutComponent.changed

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:423](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer_groups_layout.ts#L423)

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

LayoutComponent.disposedStacks

#### Inherited from

RefCounted.disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: `HTMLElement`

#### Implementation of

LayoutComponent.element

___

### refCount

• **refCount**: `number` = `1`

#### Implementation of

LayoutComponent.refCount

#### Inherited from

RefCounted.refCount

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Implementation of

LayoutComponent.wasDisposed

#### Inherited from

RefCounted.wasDisposed

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### length

• `get` **length**(): `number`

#### Returns

`number`

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:425](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer_groups_layout.ts#L425)

___

### viewer

• `get` **viewer**(): [`Viewer`](viewer.Viewer.md)

#### Returns

[`Viewer`](viewer.Viewer.md)

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:447](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer_groups_layout.ts#L447)

## Methods

### [iterator]

▸ **[iterator]**(): `Generator`<[`LayoutComponentContainer`](layer_groups_layout.LayoutComponentContainer.md), `void`, `unknown`\>

#### Returns

`Generator`<[`LayoutComponentContainer`](layer_groups_layout.LayoutComponentContainer.md), `void`, `unknown`\>

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:496](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer_groups_layout.ts#L496)

___

### addRef

▸ **addRef**(): [`StackLayoutComponent`](layer_groups_layout.StackLayoutComponent.md)

#### Returns

[`StackLayoutComponent`](layer_groups_layout.StackLayoutComponent.md)

#### Implementation of

LayoutComponent.addRef

#### Inherited from

RefCounted.addRef

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L48)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:490](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer_groups_layout.ts#L490)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Implementation of

LayoutComponent.dispose

#### Inherited from

RefCounted.dispose

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Implementation of

LayoutComponent.disposed

#### Overrides

RefCounted.disposed

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:485](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer_groups_layout.ts#L485)

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

[src/neuroglancer/layer_groups_layout.ts:465](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer_groups_layout.ts#L465)

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

[src/neuroglancer/layer_groups_layout.ts:469](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer_groups_layout.ts#L469)

___

### makeDropPlaceholder

▸ `Private` **makeDropPlaceholder**(`refCounted`): `HTMLDivElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `refCounted` | `RefCounted` |

#### Returns

`HTMLDivElement`

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:429](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer_groups_layout.ts#L429)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Implementation of

LayoutComponent.refCountReachedZero

#### Inherited from

RefCounted.refCountReachedZero

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L66)

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

LayoutComponent.registerCancellable

#### Inherited from

RefCounted.registerCancellable

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L100)

___

### registerDisposer

▸ **registerDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Disposer` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Implementation of

LayoutComponent.registerDisposer

#### Inherited from

RefCounted.registerDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L76)

___

### registerEventListener

▸ **registerEventListener**(`target`, `type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `EventTarget` |
| `type` | `string` |
| `listener` | `EventListenerOrEventListenerObject` |
| `options?` | `boolean` \| `AddEventListenerOptions` |

#### Returns

`void`

#### Implementation of

LayoutComponent.registerEventListener

#### Inherited from

RefCounted.registerEventListener

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L95)

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

LayoutComponent.toJSON

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:503](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer_groups_layout.ts#L503)

___

### unregisterDisposer

▸ **unregisterDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Disposer` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Implementation of

LayoutComponent.unregisterDisposer

#### Inherited from

RefCounted.unregisterDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L85)
