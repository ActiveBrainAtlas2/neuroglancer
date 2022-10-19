[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/layer\_groups\_layout](../modules/neuroglancer_layer_groups_layout.md) / SingletonLayerGroupViewer

# Class: SingletonLayerGroupViewer

[neuroglancer/layer_groups_layout](../modules/neuroglancer_layer_groups_layout.md).SingletonLayerGroupViewer

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`SingletonLayerGroupViewer`**

## Implements

- [`LayoutComponent`](../interfaces/neuroglancer_layer_groups_layout._internal_.LayoutComponent.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_layer_groups_layout.SingletonLayerGroupViewer.md#constructor)

### Properties

- [disposedStacks](neuroglancer_layer_groups_layout.SingletonLayerGroupViewer.md#disposedstacks)
- [element](neuroglancer_layer_groups_layout.SingletonLayerGroupViewer.md#element)
- [layerGroupViewer](neuroglancer_layer_groups_layout.SingletonLayerGroupViewer.md#layergroupviewer)
- [refCount](neuroglancer_layer_groups_layout.SingletonLayerGroupViewer.md#refcount)
- [wasDisposed](neuroglancer_layer_groups_layout.SingletonLayerGroupViewer.md#wasdisposed)

### Accessors

- [changed](neuroglancer_layer_groups_layout.SingletonLayerGroupViewer.md#changed)

### Methods

- [addRef](neuroglancer_layer_groups_layout.SingletonLayerGroupViewer.md#addref)
- [dispose](neuroglancer_layer_groups_layout.SingletonLayerGroupViewer.md#dispose)
- [disposed](neuroglancer_layer_groups_layout.SingletonLayerGroupViewer.md#disposed)
- [refCountReachedZero](neuroglancer_layer_groups_layout.SingletonLayerGroupViewer.md#refcountreachedzero)
- [registerCancellable](neuroglancer_layer_groups_layout.SingletonLayerGroupViewer.md#registercancellable)
- [registerDisposer](neuroglancer_layer_groups_layout.SingletonLayerGroupViewer.md#registerdisposer)
- [registerEventListener](neuroglancer_layer_groups_layout.SingletonLayerGroupViewer.md#registereventlistener)
- [toJSON](neuroglancer_layer_groups_layout.SingletonLayerGroupViewer.md#tojson)
- [unregisterDisposer](neuroglancer_layer_groups_layout.SingletonLayerGroupViewer.md#unregisterdisposer)

## Constructors

### constructor

• **new SingletonLayerGroupViewer**(`element`, `layout`, `viewer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | [`HTMLElement`](../modules/main_module._internal_.md#htmlelement) |
| `layout` | `any` |
| `viewer` | [`Viewer`](neuroglancer_viewer.Viewer.md) |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:317](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer_groups_layout.ts#L317)

## Properties

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

### layerGroupViewer

• **layerGroupViewer**: [`LayerGroupViewer`](neuroglancer_layer_group_viewer.LayerGroupViewer.md)

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:315](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer_groups_layout.ts#L315)

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

### changed

• `get` **changed**(): [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Returns

[`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Implementation of

[LayoutComponent](../interfaces/neuroglancer_layer_groups_layout._internal_.LayoutComponent.md).[changed](../interfaces/neuroglancer_layer_groups_layout._internal_.LayoutComponent.md#changed)

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:337](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer_groups_layout.ts#L337)

## Methods

### addRef

▸ **addRef**(): [`SingletonLayerGroupViewer`](neuroglancer_layer_groups_layout.SingletonLayerGroupViewer.md)

#### Returns

[`SingletonLayerGroupViewer`](neuroglancer_layer_groups_layout.SingletonLayerGroupViewer.md)

#### Implementation of

[LayoutComponent](../interfaces/neuroglancer_layer_groups_layout._internal_.LayoutComponent.md).[addRef](../interfaces/neuroglancer_layer_groups_layout._internal_.LayoutComponent.md#addref)

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[addRef](neuroglancer_util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L48)

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

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposed](neuroglancer_util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L75)

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

▸ **toJSON**(): `string` \| { `crossSections`: `undefined` \| { `[key: string]`: `any`;  } ; `orthographicProjection`: `undefined` \| `boolean` = orthographicProjectionJson; `type`: `string` = type.value }

#### Returns

`string` \| { `crossSections`: `undefined` \| { `[key: string]`: `any`;  } ; `orthographicProjection`: `undefined` \| `boolean` = orthographicProjectionJson; `type`: `string` = type.value }

#### Implementation of

[LayoutComponent](../interfaces/neuroglancer_layer_groups_layout._internal_.LayoutComponent.md).[toJSON](../interfaces/neuroglancer_layer_groups_layout._internal_.LayoutComponent.md#tojson)

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:333](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer_groups_layout.ts#L333)

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
