[neuroglancer](../README.md) / [Modules](../modules.md) / [layer](../modules/layer.md) / SelectedLayerState

# Class: SelectedLayerState

[layer](../modules/layer.md).SelectedLayerState

## Hierarchy

- `RefCounted`

  ↳ **`SelectedLayerState`**

## Implements

- `Trackable`

## Table of contents

### Constructors

- [constructor](layer.SelectedLayerState.md#constructor)

### Properties

- [changed](layer.SelectedLayerState.md#changed)
- [disposedStacks](layer.SelectedLayerState.md#disposedstacks)
- [existingLayerDisposer](layer.SelectedLayerState.md#existinglayerdisposer)
- [layerManager](layer.SelectedLayerState.md#layermanager)
- [layer\_](layer.SelectedLayerState.md#layer_)
- [location](layer.SelectedLayerState.md#location)
- [refCount](layer.SelectedLayerState.md#refcount)
- [wasDisposed](layer.SelectedLayerState.md#wasdisposed)

### Accessors

- [layer](layer.SelectedLayerState.md#layer)
- [visible](layer.SelectedLayerState.md#visible)

### Methods

- [addRef](layer.SelectedLayerState.md#addref)
- [dispose](layer.SelectedLayerState.md#dispose)
- [disposed](layer.SelectedLayerState.md#disposed)
- [maybeDeleteNewLayer](layer.SelectedLayerState.md#maybedeletenewlayer)
- [refCountReachedZero](layer.SelectedLayerState.md#refcountreachedzero)
- [registerCancellable](layer.SelectedLayerState.md#registercancellable)
- [registerDisposer](layer.SelectedLayerState.md#registerdisposer)
- [registerEventListener](layer.SelectedLayerState.md#registereventlistener)
- [reset](layer.SelectedLayerState.md#reset)
- [restoreState](layer.SelectedLayerState.md#restorestate)
- [toJSON](layer.SelectedLayerState.md#tojson)
- [toggle](layer.SelectedLayerState.md#toggle)
- [unregisterDisposer](layer.SelectedLayerState.md#unregisterdisposer)

## Constructors

### constructor

• **new SelectedLayerState**(`layerManager`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layerManager` | [`LayerManager`](layer.LayerManager.md) |

#### Overrides

RefCounted.constructor

#### Defined in

[src/neuroglancer/layer.ts:1427](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/layer.ts#L1427)

## Properties

### changed

• **changed**: `NullarySignal`

#### Implementation of

Trackable.changed

#### Defined in

[src/neuroglancer/layer.ts:1368](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/layer.ts#L1368)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

RefCounted.disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L52)

___

### existingLayerDisposer

• `Private` `Optional` **existingLayerDisposer**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:1425](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/layer.ts#L1425)

___

### layerManager

• **layerManager**: [`LayerManager`](layer.LayerManager.md)

___

### layer\_

• **layer\_**: `undefined` \| [`ManagedUserLayer`](layer.ManagedUserLayer.md)

#### Defined in

[src/neuroglancer/layer.ts:1370](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/layer.ts#L1370)

___

### location

• **location**: `TrackableSidePanelLocation`

#### Defined in

[src/neuroglancer/layer.ts:1369](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/layer.ts#L1369)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

RefCounted.refCount

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

RefCounted.wasDisposed

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### layer

• `get` **layer**(): `undefined` \| [`ManagedUserLayer`](layer.ManagedUserLayer.md)

#### Returns

`undefined` \| [`ManagedUserLayer`](layer.ManagedUserLayer.md)

#### Defined in

[src/neuroglancer/layer.ts:1372](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/layer.ts#L1372)

• `set` **layer**(`layer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | `undefined` \| [`ManagedUserLayer`](layer.ManagedUserLayer.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:1446](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/layer.ts#L1446)

___

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/layer.ts:1376](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/layer.ts#L1376)

• `set` **visible**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:1389](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/layer.ts#L1389)

## Methods

### addRef

▸ **addRef**(): [`SelectedLayerState`](layer.SelectedLayerState.md)

#### Returns

[`SelectedLayerState`](layer.SelectedLayerState.md)

#### Inherited from

RefCounted.addRef

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

RefCounted.dispose

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

RefCounted.disposed

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L75)

___

### maybeDeleteNewLayer

▸ `Private` **maybeDeleteNewLayer**(`existingLayer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `existingLayer` | [`ManagedUserLayer`](layer.ManagedUserLayer.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:1415](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/layer.ts#L1415)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

RefCounted.refCountReachedZero

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L66)

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

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L100)

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

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L76)

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

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L95)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Implementation of

Trackable.reset

#### Defined in

[src/neuroglancer/layer.ts:1515](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/layer.ts#L1515)

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

[src/neuroglancer/layer.ts:1500](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/layer.ts#L1500)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Implementation of

Trackable.toJSON

#### Defined in

[src/neuroglancer/layer.ts:1492](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/layer.ts#L1492)

___

### toggle

▸ **toggle**(`layer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`ManagedUserLayer`](layer.ManagedUserLayer.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:1380](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/layer.ts#L1380)

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

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L85)
