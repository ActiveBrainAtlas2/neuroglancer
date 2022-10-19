[neuroglancer](../README.md) / [Modules](../modules.md) / [layer](../modules/layer.md) / LinkedLayerGroup

# Class: LinkedLayerGroup

[layer](../modules/layer.md).LinkedLayerGroup

## Hierarchy

- [`RefCounted`](axes_lines._internal_.RefCounted.md)

  ↳ **`LinkedLayerGroup`**

## Implements

- [`Trackable`](../interfaces/coordinate_transform._internal_.Trackable.md)

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

[RefCounted](axes_lines._internal_.RefCounted.md).[constructor](axes_lines._internal_.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/layer.ts:1636](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L1636)

## Properties

### changed

• **changed**: [`NullarySignal`](coordinate_transform._internal_.NullarySignal.md)

#### Implementation of

[Trackable](../interfaces/coordinate_transform._internal_.Trackable.md).[changed](../interfaces/coordinate_transform._internal_.Trackable.md#changed)

#### Defined in

[src/neuroglancer/layer.ts:1624](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L1624)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[disposedStacks](axes_lines._internal_.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L52)

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

• **linkedLayersChanged**: [`NullarySignal`](coordinate_transform._internal_.NullarySignal.md)

#### Defined in

[src/neuroglancer/layer.ts:1625](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L1625)

___

### linkedLayers\_

• `Private` **linkedLayers\_**: `Set`<[`UserLayer`](layer.UserLayer.md)\>

#### Defined in

[src/neuroglancer/layer.ts:1622](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L1622)

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

[RefCounted](axes_lines._internal_.RefCounted.md).[refCount](axes_lines._internal_.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L45)

___

### root

• `Readonly` **root**: [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<[`UserLayer`](layer.UserLayer.md)\>

#### Defined in

[src/neuroglancer/layer.ts:1626](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L1626)

___

### root\_

• `Private` **root\_**: [`UserLayer`](layer.UserLayer.md)

#### Defined in

[src/neuroglancer/layer.ts:1623](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L1623)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[wasDisposed](axes_lines._internal_.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### linkedLayers

• `get` **linkedLayers**(): `ReadonlySet`<[`UserLayer`](layer.UserLayer.md)\>

#### Returns

`ReadonlySet`<[`UserLayer`](layer.UserLayer.md)\>

#### Defined in

[src/neuroglancer/layer.ts:1628](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L1628)

___

### rootGroup

• `get` **rootGroup**(): [`LinkedLayerGroup`](layer.LinkedLayerGroup.md)

#### Returns

[`LinkedLayerGroup`](layer.LinkedLayerGroup.md)

#### Defined in

[src/neuroglancer/layer.ts:1632](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L1632)

## Methods

### addRef

▸ **addRef**(): [`LinkedLayerGroup`](layer.LinkedLayerGroup.md)

#### Returns

[`LinkedLayerGroup`](layer.LinkedLayerGroup.md)

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

[src/neuroglancer/layer.ts:1720](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L1720)

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

[src/neuroglancer/layer.ts:1667](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L1667)

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

[src/neuroglancer/layer.ts:1691](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L1691)

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

[src/neuroglancer/layer.ts:1704](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L1704)

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

[src/neuroglancer/layer.ts:1651](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L1651)

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

[Trackable](../interfaces/coordinate_transform._internal_.Trackable.md).[restoreState](../interfaces/coordinate_transform._internal_.Trackable.md#restorestate)

#### Defined in

[src/neuroglancer/layer.ts:1655](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L1655)

___

### toJSON

▸ **toJSON**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Implementation of

[Trackable](../interfaces/coordinate_transform._internal_.Trackable.md).[toJSON](../interfaces/coordinate_transform._internal_.Trackable.md#tojson)

#### Defined in

[src/neuroglancer/layer.ts:1661](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L1661)

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
