[neuroglancer](../README.md) / [Modules](../modules.md) / [layer\_groups\_layout](../modules/layer_groups_layout.md) / SingletonLayerGroupViewer

# Class: SingletonLayerGroupViewer

[layer_groups_layout](../modules/layer_groups_layout.md).SingletonLayerGroupViewer

## Hierarchy

- [`RefCounted`](axes_lines._internal_.RefCounted.md)

  ↳ **`SingletonLayerGroupViewer`**

## Implements

- [`LayoutComponent`](../interfaces/layer_groups_layout._internal_.LayoutComponent.md)

## Table of contents

### Constructors

- [constructor](layer_groups_layout.SingletonLayerGroupViewer.md#constructor)

### Properties

- [disposedStacks](layer_groups_layout.SingletonLayerGroupViewer.md#disposedstacks)
- [element](layer_groups_layout.SingletonLayerGroupViewer.md#element)
- [layerGroupViewer](layer_groups_layout.SingletonLayerGroupViewer.md#layergroupviewer)
- [refCount](layer_groups_layout.SingletonLayerGroupViewer.md#refcount)
- [wasDisposed](layer_groups_layout.SingletonLayerGroupViewer.md#wasdisposed)

### Accessors

- [changed](layer_groups_layout.SingletonLayerGroupViewer.md#changed)

### Methods

- [addRef](layer_groups_layout.SingletonLayerGroupViewer.md#addref)
- [dispose](layer_groups_layout.SingletonLayerGroupViewer.md#dispose)
- [disposed](layer_groups_layout.SingletonLayerGroupViewer.md#disposed)
- [refCountReachedZero](layer_groups_layout.SingletonLayerGroupViewer.md#refcountreachedzero)
- [registerCancellable](layer_groups_layout.SingletonLayerGroupViewer.md#registercancellable)
- [registerDisposer](layer_groups_layout.SingletonLayerGroupViewer.md#registerdisposer)
- [registerEventListener](layer_groups_layout.SingletonLayerGroupViewer.md#registereventlistener)
- [toJSON](layer_groups_layout.SingletonLayerGroupViewer.md#tojson)
- [unregisterDisposer](layer_groups_layout.SingletonLayerGroupViewer.md#unregisterdisposer)

## Constructors

### constructor

• **new SingletonLayerGroupViewer**(`element`, `layout`, `viewer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | [`HTMLElement`](../modules/axes_lines._internal_.md#htmlelement) |
| `layout` | `any` |
| `viewer` | [`Viewer`](viewer.Viewer.md) |

#### Overrides

[RefCounted](axes_lines._internal_.RefCounted.md).[constructor](axes_lines._internal_.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:317](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer_groups_layout.ts#L317)

## Properties

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

### layerGroupViewer

• **layerGroupViewer**: [`LayerGroupViewer`](layer_group_viewer.LayerGroupViewer.md)

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:315](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer_groups_layout.ts#L315)

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

### changed

• `get` **changed**(): [`NullarySignal`](coordinate_transform._internal_.NullarySignal.md)

#### Returns

[`NullarySignal`](coordinate_transform._internal_.NullarySignal.md)

#### Implementation of

[LayoutComponent](../interfaces/layer_groups_layout._internal_.LayoutComponent.md).[changed](../interfaces/layer_groups_layout._internal_.LayoutComponent.md#changed)

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:337](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer_groups_layout.ts#L337)

## Methods

### addRef

▸ **addRef**(): [`SingletonLayerGroupViewer`](layer_groups_layout.SingletonLayerGroupViewer.md)

#### Returns

[`SingletonLayerGroupViewer`](layer_groups_layout.SingletonLayerGroupViewer.md)

#### Implementation of

[LayoutComponent](../interfaces/layer_groups_layout._internal_.LayoutComponent.md).[addRef](../interfaces/layer_groups_layout._internal_.LayoutComponent.md#addref)

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[addRef](axes_lines._internal_.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L48)

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

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[disposed](axes_lines._internal_.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L75)

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

▸ **toJSON**(): `string` \| { `crossSections`: `undefined` \| { `[key: string]`: `any`;  } ; `orthographicProjection`: `undefined` \| `boolean` = orthographicProjectionJson; `type`: `string` = type.value }

#### Returns

`string` \| { `crossSections`: `undefined` \| { `[key: string]`: `any`;  } ; `orthographicProjection`: `undefined` \| `boolean` = orthographicProjectionJson; `type`: `string` = type.value }

#### Implementation of

[LayoutComponent](../interfaces/layer_groups_layout._internal_.LayoutComponent.md).[toJSON](../interfaces/layer_groups_layout._internal_.LayoutComponent.md#tojson)

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:333](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer_groups_layout.ts#L333)

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
