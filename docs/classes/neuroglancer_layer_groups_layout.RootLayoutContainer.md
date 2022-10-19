[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/layer\_groups\_layout](../modules/neuroglancer_layer_groups_layout.md) / RootLayoutContainer

# Class: RootLayoutContainer

[neuroglancer/layer_groups_layout](../modules/neuroglancer_layer_groups_layout.md).RootLayoutContainer

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`RootLayoutContainer`**

## Implements

- [`Trackable`](../interfaces/neuroglancer_util_trackable.Trackable.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_layer_groups_layout.RootLayoutContainer.md#constructor)

### Properties

- [container](neuroglancer_layer_groups_layout.RootLayoutContainer.md#container)
- [defaultSpecification](neuroglancer_layer_groups_layout.RootLayoutContainer.md#defaultspecification)
- [disposedStacks](neuroglancer_layer_groups_layout.RootLayoutContainer.md#disposedstacks)
- [refCount](neuroglancer_layer_groups_layout.RootLayoutContainer.md#refcount)
- [viewer](neuroglancer_layer_groups_layout.RootLayoutContainer.md#viewer)
- [wasDisposed](neuroglancer_layer_groups_layout.RootLayoutContainer.md#wasdisposed)

### Accessors

- [changed](neuroglancer_layer_groups_layout.RootLayoutContainer.md#changed)
- [element](neuroglancer_layer_groups_layout.RootLayoutContainer.md#element)

### Methods

- [addRef](neuroglancer_layer_groups_layout.RootLayoutContainer.md#addref)
- [dispose](neuroglancer_layer_groups_layout.RootLayoutContainer.md#dispose)
- [disposed](neuroglancer_layer_groups_layout.RootLayoutContainer.md#disposed)
- [refCountReachedZero](neuroglancer_layer_groups_layout.RootLayoutContainer.md#refcountreachedzero)
- [registerCancellable](neuroglancer_layer_groups_layout.RootLayoutContainer.md#registercancellable)
- [registerDisposer](neuroglancer_layer_groups_layout.RootLayoutContainer.md#registerdisposer)
- [registerEventListener](neuroglancer_layer_groups_layout.RootLayoutContainer.md#registereventlistener)
- [reset](neuroglancer_layer_groups_layout.RootLayoutContainer.md#reset)
- [restoreState](neuroglancer_layer_groups_layout.RootLayoutContainer.md#restorestate)
- [toJSON](neuroglancer_layer_groups_layout.RootLayoutContainer.md#tojson)
- [unregisterDisposer](neuroglancer_layer_groups_layout.RootLayoutContainer.md#unregisterdisposer)

## Constructors

### constructor

• **new RootLayoutContainer**(`viewer`, `defaultSpecification`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `viewer` | [`Viewer`](neuroglancer_viewer.Viewer.md) |
| `defaultSpecification` | `any` |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:576](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer_groups_layout.ts#L576)

## Properties

### container

• **container**: [`LayoutComponentContainer`](neuroglancer_layer_groups_layout.LayoutComponentContainer.md)

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:565](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer_groups_layout.ts#L565)

___

### defaultSpecification

• **defaultSpecification**: `any`

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### viewer

• **viewer**: [`Viewer`](neuroglancer_viewer.Viewer.md)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### changed

• `get` **changed**(): [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Returns

[`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Implementation of

[Trackable](../interfaces/neuroglancer_util_trackable.Trackable.md).[changed](../interfaces/neuroglancer_util_trackable.Trackable.md#changed)

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:568](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer_groups_layout.ts#L568)

___

### element

• `get` **element**(): [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Returns

[`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:572](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer_groups_layout.ts#L572)

## Methods

### addRef

▸ **addRef**(): [`RootLayoutContainer`](neuroglancer_layer_groups_layout.RootLayoutContainer.md)

#### Returns

[`RootLayoutContainer`](neuroglancer_layer_groups_layout.RootLayoutContainer.md)

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

[src/neuroglancer/layer_groups_layout.ts:588](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer_groups_layout.ts#L588)

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

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Implementation of

[Trackable](../interfaces/neuroglancer_util_trackable.Trackable.md).[reset](../interfaces/neuroglancer_util_trackable.Trackable.md#reset)

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:580](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer_groups_layout.ts#L580)

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

[Trackable](../interfaces/neuroglancer_util_trackable.Trackable.md).[restoreState](../interfaces/neuroglancer_util_trackable.Trackable.md#restorestate)

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:584](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer_groups_layout.ts#L584)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Implementation of

[Trackable](../interfaces/neuroglancer_util_trackable.Trackable.md).[toJSON](../interfaces/neuroglancer_util_trackable.Trackable.md#tojson)

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:592](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer_groups_layout.ts#L592)

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
