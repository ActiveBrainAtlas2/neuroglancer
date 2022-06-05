[neuroglancer](../README.md) / [Modules](../modules.md) / [layer\_groups\_layout](../modules/layer_groups_layout.md) / SingletonLayerGroupViewer

# Class: SingletonLayerGroupViewer

[layer_groups_layout](../modules/layer_groups_layout.md).SingletonLayerGroupViewer

## Hierarchy

- `RefCounted`

  ↳ **`SingletonLayerGroupViewer`**

## Implements

- `LayoutComponent`

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
| `element` | `HTMLElement` |
| `layout` | `any` |
| `viewer` | [`Viewer`](viewer.Viewer.md) |

#### Overrides

RefCounted.constructor

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:317](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer_groups_layout.ts#L317)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Implementation of

LayoutComponent.disposedStacks

#### Inherited from

RefCounted.disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: `HTMLElement`

#### Implementation of

LayoutComponent.element

___

### layerGroupViewer

• **layerGroupViewer**: [`LayerGroupViewer`](layer_group_viewer.LayerGroupViewer.md)

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:315](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer_groups_layout.ts#L315)

___

### refCount

• **refCount**: `number` = `1`

#### Implementation of

LayoutComponent.refCount

#### Inherited from

RefCounted.refCount

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Implementation of

LayoutComponent.wasDisposed

#### Inherited from

RefCounted.wasDisposed

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### changed

• `get` **changed**(): `NullarySignal`

#### Returns

`NullarySignal`

#### Implementation of

LayoutComponent.changed

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:337](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer_groups_layout.ts#L337)

## Methods

### addRef

▸ **addRef**(): [`SingletonLayerGroupViewer`](layer_groups_layout.SingletonLayerGroupViewer.md)

#### Returns

[`SingletonLayerGroupViewer`](layer_groups_layout.SingletonLayerGroupViewer.md)

#### Implementation of

LayoutComponent.addRef

#### Inherited from

RefCounted.addRef

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L48)

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

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Implementation of

LayoutComponent.disposed

#### Inherited from

RefCounted.disposed

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L75)

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

#### Implementation of

LayoutComponent.registerCancellable

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

#### Implementation of

LayoutComponent.registerDisposer

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

#### Implementation of

LayoutComponent.registerEventListener

#### Inherited from

RefCounted.registerEventListener

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L95)

___

### toJSON

▸ **toJSON**(): `string` \| { `crossSections`: `undefined` \| { `[key: string]`: `any`;  } ; `orthographicProjection`: `undefined` \| `boolean` = orthographicProjectionJson; `type`: `string` = type.value }

#### Returns

`string` \| { `crossSections`: `undefined` \| { `[key: string]`: `any`;  } ; `orthographicProjection`: `undefined` \| `boolean` = orthographicProjectionJson; `type`: `string` = type.value }

#### Implementation of

LayoutComponent.toJSON

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:333](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer_groups_layout.ts#L333)

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

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L85)
