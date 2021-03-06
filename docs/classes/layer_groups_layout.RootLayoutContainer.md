[neuroglancer](../README.md) / [Modules](../modules.md) / [layer\_groups\_layout](../modules/layer_groups_layout.md) / RootLayoutContainer

# Class: RootLayoutContainer

[layer_groups_layout](../modules/layer_groups_layout.md).RootLayoutContainer

## Hierarchy

- `RefCounted`

  ↳ **`RootLayoutContainer`**

## Implements

- `Trackable`

## Table of contents

### Constructors

- [constructor](layer_groups_layout.RootLayoutContainer.md#constructor)

### Properties

- [container](layer_groups_layout.RootLayoutContainer.md#container)
- [defaultSpecification](layer_groups_layout.RootLayoutContainer.md#defaultspecification)
- [disposedStacks](layer_groups_layout.RootLayoutContainer.md#disposedstacks)
- [refCount](layer_groups_layout.RootLayoutContainer.md#refcount)
- [viewer](layer_groups_layout.RootLayoutContainer.md#viewer)
- [wasDisposed](layer_groups_layout.RootLayoutContainer.md#wasdisposed)

### Accessors

- [changed](layer_groups_layout.RootLayoutContainer.md#changed)
- [element](layer_groups_layout.RootLayoutContainer.md#element)

### Methods

- [addRef](layer_groups_layout.RootLayoutContainer.md#addref)
- [dispose](layer_groups_layout.RootLayoutContainer.md#dispose)
- [disposed](layer_groups_layout.RootLayoutContainer.md#disposed)
- [refCountReachedZero](layer_groups_layout.RootLayoutContainer.md#refcountreachedzero)
- [registerCancellable](layer_groups_layout.RootLayoutContainer.md#registercancellable)
- [registerDisposer](layer_groups_layout.RootLayoutContainer.md#registerdisposer)
- [registerEventListener](layer_groups_layout.RootLayoutContainer.md#registereventlistener)
- [reset](layer_groups_layout.RootLayoutContainer.md#reset)
- [restoreState](layer_groups_layout.RootLayoutContainer.md#restorestate)
- [toJSON](layer_groups_layout.RootLayoutContainer.md#tojson)
- [unregisterDisposer](layer_groups_layout.RootLayoutContainer.md#unregisterdisposer)

## Constructors

### constructor

• **new RootLayoutContainer**(`viewer`, `defaultSpecification`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `viewer` | [`Viewer`](viewer.Viewer.md) |
| `defaultSpecification` | `any` |

#### Overrides

RefCounted.constructor

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:576](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer_groups_layout.ts#L576)

## Properties

### container

• **container**: [`LayoutComponentContainer`](layer_groups_layout.LayoutComponentContainer.md)

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:565](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer_groups_layout.ts#L565)

___

### defaultSpecification

• **defaultSpecification**: `any`

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

RefCounted.disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L52)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

RefCounted.refCount

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L45)

___

### viewer

• **viewer**: [`Viewer`](viewer.Viewer.md)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

RefCounted.wasDisposed

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### changed

• `get` **changed**(): `NullarySignal`

#### Returns

`NullarySignal`

#### Implementation of

Trackable.changed

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:568](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer_groups_layout.ts#L568)

___

### element

• `get` **element**(): `HTMLDivElement`

#### Returns

`HTMLDivElement`

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:572](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer_groups_layout.ts#L572)

## Methods

### addRef

▸ **addRef**(): [`RootLayoutContainer`](layer_groups_layout.RootLayoutContainer.md)

#### Returns

[`RootLayoutContainer`](layer_groups_layout.RootLayoutContainer.md)

#### Inherited from

RefCounted.addRef

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

RefCounted.dispose

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

RefCounted.disposed

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:588](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer_groups_layout.ts#L588)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

RefCounted.refCountReachedZero

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L66)

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

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L100)

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

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L76)

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

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L95)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Implementation of

Trackable.reset

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:580](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer_groups_layout.ts#L580)

___

### restoreState

▸ **restoreState**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

`void`

#### Implementation of

Trackable.restoreState

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:584](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer_groups_layout.ts#L584)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Implementation of

Trackable.toJSON

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:592](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer_groups_layout.ts#L592)

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

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L85)
