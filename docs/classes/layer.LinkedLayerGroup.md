[neuroglancer](../README.md) / [Modules](../modules.md) / [layer](../modules/layer.md) / LinkedLayerGroup

# Class: LinkedLayerGroup

[layer](../modules/layer.md).LinkedLayerGroup

## Hierarchy

- `RefCounted`

  ↳ **`LinkedLayerGroup`**

## Implements

- `Trackable`

## Table of contents

### Constructors

- [constructor](layer.LinkedLayerGroup.md#constructor)

### Properties

- [changed](layer.LinkedLayerGroup.md#changed)
- [disposedStacks](layer.LinkedLayerGroup.md#disposedstacks)
- [getGroup](layer.LinkedLayerGroup.md#getgroup)
- [layer](layer.LinkedLayerGroup.md#layer)
- [layerManager](layer.LinkedLayerGroup.md#layermanager)
- [linkedLayersChanged](layer.LinkedLayerGroup.md#linkedlayerschanged)
- [linkedLayers\_](layer.LinkedLayerGroup.md#linkedlayers_)
- [predicate](layer.LinkedLayerGroup.md#predicate)
- [refCount](layer.LinkedLayerGroup.md#refcount)
- [root](layer.LinkedLayerGroup.md#root)
- [root\_](layer.LinkedLayerGroup.md#root_)
- [wasDisposed](layer.LinkedLayerGroup.md#wasdisposed)

### Accessors

- [linkedLayers](layer.LinkedLayerGroup.md#linkedlayers)
- [rootGroup](layer.LinkedLayerGroup.md#rootgroup)

### Methods

- [addRef](layer.LinkedLayerGroup.md#addref)
- [dispose](layer.LinkedLayerGroup.md#dispose)
- [disposed](layer.LinkedLayerGroup.md#disposed)
- [isolate](layer.LinkedLayerGroup.md#isolate)
- [linkByName](layer.LinkedLayerGroup.md#linkbyname)
- [linkToLayer](layer.LinkedLayerGroup.md#linktolayer)
- [refCountReachedZero](layer.LinkedLayerGroup.md#refcountreachedzero)
- [registerCancellable](layer.LinkedLayerGroup.md#registercancellable)
- [registerDisposer](layer.LinkedLayerGroup.md#registerdisposer)
- [registerEventListener](layer.LinkedLayerGroup.md#registereventlistener)
- [reset](layer.LinkedLayerGroup.md#reset)
- [restoreState](layer.LinkedLayerGroup.md#restorestate)
- [toJSON](layer.LinkedLayerGroup.md#tojson)
- [unregisterDisposer](layer.LinkedLayerGroup.md#unregisterdisposer)

## Constructors

### constructor

• **new LinkedLayerGroup**(`layerManager`, `layer`, `predicate`, `getGroup`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layerManager` | [`LayerManager`](layer.LayerManager.md) |
| `layer` | [`UserLayer`](layer.UserLayer.md) |
| `predicate` | (`layer`: [`UserLayer`](layer.UserLayer.md)) => `boolean` |
| `getGroup` | (`layer`: [`UserLayer`](layer.UserLayer.md)) => [`LinkedLayerGroup`](layer.LinkedLayerGroup.md) |

#### Overrides

RefCounted.constructor

#### Defined in

[src/neuroglancer/layer.ts:1632](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer.ts#L1632)

## Properties

### changed

• **changed**: `NullarySignal`

#### Implementation of

Trackable.changed

#### Defined in

[src/neuroglancer/layer.ts:1620](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer.ts#L1620)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

RefCounted.disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L52)

___

### getGroup

• **getGroup**: (`layer`: [`UserLayer`](layer.UserLayer.md)) => [`LinkedLayerGroup`](layer.LinkedLayerGroup.md)

#### Type declaration

▸ (`layer`): [`LinkedLayerGroup`](layer.LinkedLayerGroup.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`UserLayer`](layer.UserLayer.md) |

##### Returns

[`LinkedLayerGroup`](layer.LinkedLayerGroup.md)

___

### layer

• **layer**: [`UserLayer`](layer.UserLayer.md)

___

### layerManager

• **layerManager**: [`LayerManager`](layer.LayerManager.md)

___

### linkedLayersChanged

• **linkedLayersChanged**: `NullarySignal`

#### Defined in

[src/neuroglancer/layer.ts:1621](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer.ts#L1621)

___

### linkedLayers\_

• `Private` **linkedLayers\_**: `Set`<[`UserLayer`](layer.UserLayer.md)\>

#### Defined in

[src/neuroglancer/layer.ts:1618](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer.ts#L1618)

___

### predicate

• **predicate**: (`layer`: [`UserLayer`](layer.UserLayer.md)) => `boolean`

#### Type declaration

▸ (`layer`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`UserLayer`](layer.UserLayer.md) |

##### Returns

`boolean`

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

RefCounted.refCount

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L45)

___

### root

• `Readonly` **root**: [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<[`UserLayer`](layer.UserLayer.md)\>

#### Defined in

[src/neuroglancer/layer.ts:1622](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer.ts#L1622)

___

### root\_

• `Private` **root\_**: [`UserLayer`](layer.UserLayer.md)

#### Defined in

[src/neuroglancer/layer.ts:1619](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer.ts#L1619)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

RefCounted.wasDisposed

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### linkedLayers

• `get` **linkedLayers**(): `ReadonlySet`<[`UserLayer`](layer.UserLayer.md)\>

#### Returns

`ReadonlySet`<[`UserLayer`](layer.UserLayer.md)\>

#### Defined in

[src/neuroglancer/layer.ts:1624](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer.ts#L1624)

___

### rootGroup

• `get` **rootGroup**(): [`LinkedLayerGroup`](layer.LinkedLayerGroup.md)

#### Returns

[`LinkedLayerGroup`](layer.LinkedLayerGroup.md)

#### Defined in

[src/neuroglancer/layer.ts:1628](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer.ts#L1628)

## Methods

### addRef

▸ **addRef**(): [`LinkedLayerGroup`](layer.LinkedLayerGroup.md)

#### Returns

[`LinkedLayerGroup`](layer.LinkedLayerGroup.md)

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

[src/neuroglancer/layer.ts:1716](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer.ts#L1716)

___

### isolate

▸ **isolate**(`notifyChanged?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `notifyChanged` | `boolean` | `true` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:1663](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer.ts#L1663)

___

### linkByName

▸ **linkByName**(`otherLayerName`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `otherLayerName` | `string` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:1687](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer.ts#L1687)

___

### linkToLayer

▸ **linkToLayer**(`otherUserLayer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `otherUserLayer` | [`UserLayer`](layer.UserLayer.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:1700](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer.ts#L1700)

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

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Implementation of

Trackable.reset

#### Defined in

[src/neuroglancer/layer.ts:1647](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer.ts#L1647)

___

### restoreState

▸ **restoreState**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `unknown` |

#### Returns

`void`

#### Implementation of

Trackable.restoreState

#### Defined in

[src/neuroglancer/layer.ts:1651](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer.ts#L1651)

___

### toJSON

▸ **toJSON**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Implementation of

Trackable.toJSON

#### Defined in

[src/neuroglancer/layer.ts:1657](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer.ts#L1657)

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
