[neuroglancer](../README.md) / [Modules](../modules.md) / [layer\_groups\_layout](../modules/layer_groups_layout.md) / RootLayoutContainer

# Class: RootLayoutContainer

[layer_groups_layout](../modules/layer_groups_layout.md).RootLayoutContainer

## Hierarchy

- [`RefCounted`](axes_lines._internal_.RefCounted.md)

  ↳ **`RootLayoutContainer`**

## Implements

- [`Trackable`](../interfaces/coordinate_transform._internal_.Trackable.md)

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

[RefCounted](axes_lines._internal_.RefCounted.md).[constructor](axes_lines._internal_.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:576](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer_groups_layout.ts#L576)

## Properties

### container

• **container**: [`LayoutComponentContainer`](layer_groups_layout.LayoutComponentContainer.md)

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:565](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer_groups_layout.ts#L565)

___

### defaultSpecification

• **defaultSpecification**: `any`

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[disposedStacks](axes_lines._internal_.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L52)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[refCount](axes_lines._internal_.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L45)

___

### viewer

• **viewer**: [`Viewer`](viewer.Viewer.md)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[wasDisposed](axes_lines._internal_.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### changed

• `get` **changed**(): [`NullarySignal`](coordinate_transform._internal_.NullarySignal.md)

#### Returns

[`NullarySignal`](coordinate_transform._internal_.NullarySignal.md)

#### Implementation of

[Trackable](../interfaces/coordinate_transform._internal_.Trackable.md).[changed](../interfaces/coordinate_transform._internal_.Trackable.md#changed)

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:568](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer_groups_layout.ts#L568)

___

### element

• `get` **element**(): [`HTMLDivElement`](../modules/axes_lines._internal_.md#htmldivelement)

#### Returns

[`HTMLDivElement`](../modules/axes_lines._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:572](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer_groups_layout.ts#L572)

## Methods

### addRef

▸ **addRef**(): [`RootLayoutContainer`](layer_groups_layout.RootLayoutContainer.md)

#### Returns

[`RootLayoutContainer`](layer_groups_layout.RootLayoutContainer.md)

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[addRef](axes_lines._internal_.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[dispose](axes_lines._internal_.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

[RefCounted](axes_lines._internal_.RefCounted.md).[disposed](axes_lines._internal_.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:588](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer_groups_layout.ts#L588)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

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

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[registerEventListener](axes_lines._internal_.RefCounted.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L95)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Implementation of

[Trackable](../interfaces/coordinate_transform._internal_.Trackable.md).[reset](../interfaces/coordinate_transform._internal_.Trackable.md#reset)

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:580](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer_groups_layout.ts#L580)

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

[Trackable](../interfaces/coordinate_transform._internal_.Trackable.md).[restoreState](../interfaces/coordinate_transform._internal_.Trackable.md#restorestate)

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:584](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer_groups_layout.ts#L584)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Implementation of

[Trackable](../interfaces/coordinate_transform._internal_.Trackable.md).[toJSON](../interfaces/coordinate_transform._internal_.Trackable.md#tojson)

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:592](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer_groups_layout.ts#L592)

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

[RefCounted](axes_lines._internal_.RefCounted.md).[unregisterDisposer](axes_lines._internal_.RefCounted.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L85)
