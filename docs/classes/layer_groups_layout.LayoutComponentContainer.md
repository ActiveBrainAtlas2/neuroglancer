[neuroglancer](../README.md) / [Modules](../modules.md) / [layer\_groups\_layout](../modules/layer_groups_layout.md) / LayoutComponentContainer

# Class: LayoutComponentContainer

[layer_groups_layout](../modules/layer_groups_layout.md).LayoutComponentContainer

Container for a LayoutComponent.  The contained LayoutComponent may change.

## Hierarchy

- `RefCounted`

  ↳ **`LayoutComponentContainer`**

## Table of contents

### Constructors

- [constructor](layer_groups_layout.LayoutComponentContainer.md#constructor)

### Properties

- [changed](layer_groups_layout.LayoutComponentContainer.md#changed)
- [componentValue](layer_groups_layout.LayoutComponentContainer.md#componentvalue)
- [disposedStacks](layer_groups_layout.LayoutComponentContainer.md#disposedstacks)
- [element](layer_groups_layout.LayoutComponentContainer.md#element)
- [parent](layer_groups_layout.LayoutComponentContainer.md#parent)
- [refCount](layer_groups_layout.LayoutComponentContainer.md#refcount)
- [viewer](layer_groups_layout.LayoutComponentContainer.md#viewer)
- [wasDisposed](layer_groups_layout.LayoutComponentContainer.md#wasdisposed)

### Accessors

- [component](layer_groups_layout.LayoutComponentContainer.md#component)

### Methods

- [addRef](layer_groups_layout.LayoutComponentContainer.md#addref)
- [dispose](layer_groups_layout.LayoutComponentContainer.md#dispose)
- [disposed](layer_groups_layout.LayoutComponentContainer.md#disposed)
- [refCountReachedZero](layer_groups_layout.LayoutComponentContainer.md#refcountreachedzero)
- [registerCancellable](layer_groups_layout.LayoutComponentContainer.md#registercancellable)
- [registerDisposer](layer_groups_layout.LayoutComponentContainer.md#registerdisposer)
- [registerEventListener](layer_groups_layout.LayoutComponentContainer.md#registereventlistener)
- [setComponent](layer_groups_layout.LayoutComponentContainer.md#setcomponent)
- [setSpecification](layer_groups_layout.LayoutComponentContainer.md#setspecification)
- [split](layer_groups_layout.LayoutComponentContainer.md#split)
- [toJSON](layer_groups_layout.LayoutComponentContainer.md#tojson)
- [unregisterDisposer](layer_groups_layout.LayoutComponentContainer.md#unregisterdisposer)
- [unsetComponent](layer_groups_layout.LayoutComponentContainer.md#unsetcomponent)
- [getFromElement](layer_groups_layout.LayoutComponentContainer.md#getfromelement)

## Constructors

### constructor

• **new LayoutComponentContainer**(`viewer`, `spec`, `parent`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `viewer` | [`Viewer`](viewer.Viewer.md) |
| `spec` | `any` |
| `parent` | `undefined` \| [`StackLayoutComponent`](layer_groups_layout.StackLayoutComponent.md) |

#### Overrides

RefCounted.constructor

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:129](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer_groups_layout.ts#L129)

## Properties

### changed

• **changed**: `NullarySignal`

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer_groups_layout.ts#L48)

___

### componentValue

• `Private` **componentValue**: `LayoutComponent`

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer_groups_layout.ts#L49)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

RefCounted.disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: `HTMLDivElement`

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:127](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer_groups_layout.ts#L127)

___

### parent

• **parent**: `undefined` \| [`StackLayoutComponent`](layer_groups_layout.StackLayoutComponent.md)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

RefCounted.refCount

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L45)

___

### viewer

• **viewer**: [`Viewer`](viewer.Viewer.md)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

RefCounted.wasDisposed

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### component

• `get` **component**(): `LayoutComponent`

#### Returns

`LayoutComponent`

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:60](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer_groups_layout.ts#L60)

## Methods

### addRef

▸ **addRef**(): [`LayoutComponentContainer`](layer_groups_layout.LayoutComponentContainer.md)

#### Returns

[`LayoutComponentContainer`](layer_groups_layout.LayoutComponentContainer.md)

#### Inherited from

RefCounted.addRef

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

RefCounted.dispose

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

RefCounted.disposed

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:240](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer_groups_layout.ts#L240)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

RefCounted.refCountReachedZero

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L66)

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

RefCounted.registerCancellable

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L100)

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

#### Inherited from

RefCounted.registerDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L76)

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

#### Inherited from

RefCounted.registerEventListener

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L95)

___

### setComponent

▸ `Private` **setComponent**(`component`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `component` | `LayoutComponent` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:64](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer_groups_layout.ts#L64)

___

### setSpecification

▸ **setSpecification**(`spec`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `spec` | `any` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:232](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer_groups_layout.ts#L232)

___

### split

▸ **split**(`side`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `side` | ``"left"`` \| ``"top"`` \| ``"bottom"`` \| ``"right"`` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `existingContainer` | [`LayoutComponentContainer`](layer_groups_layout.LayoutComponentContainer.md) |
| `newContainer` | [`LayoutComponentContainer`](layer_groups_layout.LayoutComponentContainer.md) |

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:246](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer_groups_layout.ts#L246)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:228](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer_groups_layout.ts#L228)

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

#### Inherited from

RefCounted.unregisterDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L85)

___

### unsetComponent

▸ `Private` **unsetComponent**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:51](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer_groups_layout.ts#L51)

___

### getFromElement

▸ `Static` **getFromElement**(`element`): [`LayoutComponentContainer`](layer_groups_layout.LayoutComponentContainer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `Element` |

#### Returns

[`LayoutComponentContainer`](layer_groups_layout.LayoutComponentContainer.md)

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:236](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer_groups_layout.ts#L236)
