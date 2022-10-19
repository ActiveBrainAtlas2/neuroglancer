[neuroglancer](../README.md) / [Modules](../modules.md) / [datasource/state\_share](../modules/datasource_state_share.md) / [<internal\>](../modules/datasource_state_share._internal_.md) / RootLayoutContainer

# Class: RootLayoutContainer

[datasource/state_share](../modules/datasource_state_share.md).[<internal>](../modules/datasource_state_share._internal_.md).RootLayoutContainer

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`RootLayoutContainer`**

## Implements

- [`Trackable`](../interfaces/util_trackable.Trackable.md)

## Table of contents

### Constructors

- [constructor](datasource_state_share._internal_.RootLayoutContainer.md#constructor)

### Properties

- [container](datasource_state_share._internal_.RootLayoutContainer.md#container)
- [defaultSpecification](datasource_state_share._internal_.RootLayoutContainer.md#defaultspecification)
- [disposedStacks](datasource_state_share._internal_.RootLayoutContainer.md#disposedstacks)
- [refCount](datasource_state_share._internal_.RootLayoutContainer.md#refcount)
- [viewer](datasource_state_share._internal_.RootLayoutContainer.md#viewer)
- [wasDisposed](datasource_state_share._internal_.RootLayoutContainer.md#wasdisposed)

### Accessors

- [changed](datasource_state_share._internal_.RootLayoutContainer.md#changed)
- [element](datasource_state_share._internal_.RootLayoutContainer.md#element)

### Methods

- [addRef](datasource_state_share._internal_.RootLayoutContainer.md#addref)
- [dispose](datasource_state_share._internal_.RootLayoutContainer.md#dispose)
- [disposed](datasource_state_share._internal_.RootLayoutContainer.md#disposed)
- [refCountReachedZero](datasource_state_share._internal_.RootLayoutContainer.md#refcountreachedzero)
- [registerCancellable](datasource_state_share._internal_.RootLayoutContainer.md#registercancellable)
- [registerDisposer](datasource_state_share._internal_.RootLayoutContainer.md#registerdisposer)
- [registerEventListener](datasource_state_share._internal_.RootLayoutContainer.md#registereventlistener)
- [reset](datasource_state_share._internal_.RootLayoutContainer.md#reset)
- [restoreState](datasource_state_share._internal_.RootLayoutContainer.md#restorestate)
- [toJSON](datasource_state_share._internal_.RootLayoutContainer.md#tojson)
- [unregisterDisposer](datasource_state_share._internal_.RootLayoutContainer.md#unregisterdisposer)

## Constructors

### constructor

• **new RootLayoutContainer**(`viewer`, `defaultSpecification`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `viewer` | [`Viewer`](datasource_state_share._internal_.Viewer.md) |
| `defaultSpecification` | `any` |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:576](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_groups_layout.ts#L576)

## Properties

### container

• **container**: [`LayoutComponentContainer`](datasource_state_share._internal_.LayoutComponentContainer.md)

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:565](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_groups_layout.ts#L565)

___

### defaultSpecification

• **defaultSpecification**: `any`

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### viewer

• **viewer**: [`Viewer`](datasource_state_share._internal_.Viewer.md)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### changed

• `get` **changed**(): [`NullarySignal`](util_signal.NullarySignal.md)

#### Returns

[`NullarySignal`](util_signal.NullarySignal.md)

#### Implementation of

[Trackable](../interfaces/util_trackable.Trackable.md).[changed](../interfaces/util_trackable.Trackable.md#changed)

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:568](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_groups_layout.ts#L568)

___

### element

• `get` **element**(): [`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement)

#### Returns

[`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:572](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_groups_layout.ts#L572)

## Methods

### addRef

▸ **addRef**(): [`RootLayoutContainer`](datasource_state_share._internal_.RootLayoutContainer.md)

#### Returns

[`RootLayoutContainer`](datasource_state_share._internal_.RootLayoutContainer.md)

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

[src/neuroglancer/layer_groups_layout.ts:588](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_groups_layout.ts#L588)

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

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Implementation of

[Trackable](../interfaces/util_trackable.Trackable.md).[reset](../interfaces/util_trackable.Trackable.md#reset)

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:580](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_groups_layout.ts#L580)

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

[Trackable](../interfaces/util_trackable.Trackable.md).[restoreState](../interfaces/util_trackable.Trackable.md#restorestate)

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:584](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_groups_layout.ts#L584)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Implementation of

[Trackable](../interfaces/util_trackable.Trackable.md).[toJSON](../interfaces/util_trackable.Trackable.md#tojson)

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:592](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_groups_layout.ts#L592)

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
