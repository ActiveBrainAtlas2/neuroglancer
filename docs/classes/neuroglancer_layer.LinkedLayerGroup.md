[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/layer](../modules/neuroglancer_layer.md) / LinkedLayerGroup

# Class: LinkedLayerGroup

[neuroglancer/layer](../modules/neuroglancer_layer.md).LinkedLayerGroup

**`License`**

Copyright 2016 Google Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`LinkedLayerGroup`**

## Implements

- [`Trackable`](../interfaces/neuroglancer_util_trackable.Trackable.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_layer.LinkedLayerGroup.md#constructor)

### Properties

- [changed](neuroglancer_layer.LinkedLayerGroup.md#changed)
- [disposedStacks](neuroglancer_layer.LinkedLayerGroup.md#disposedstacks)
- [getGroup](neuroglancer_layer.LinkedLayerGroup.md#getgroup)
- [layer](neuroglancer_layer.LinkedLayerGroup.md#layer)
- [layerManager](neuroglancer_layer.LinkedLayerGroup.md#layermanager)
- [linkedLayersChanged](neuroglancer_layer.LinkedLayerGroup.md#linkedlayerschanged)
- [linkedLayers\_](neuroglancer_layer.LinkedLayerGroup.md#linkedlayers_)
- [predicate](neuroglancer_layer.LinkedLayerGroup.md#predicate)
- [refCount](neuroglancer_layer.LinkedLayerGroup.md#refcount)
- [root](neuroglancer_layer.LinkedLayerGroup.md#root)
- [root\_](neuroglancer_layer.LinkedLayerGroup.md#root_)
- [wasDisposed](neuroglancer_layer.LinkedLayerGroup.md#wasdisposed)

### Accessors

- [linkedLayers](neuroglancer_layer.LinkedLayerGroup.md#linkedlayers)
- [rootGroup](neuroglancer_layer.LinkedLayerGroup.md#rootgroup)

### Methods

- [addRef](neuroglancer_layer.LinkedLayerGroup.md#addref)
- [dispose](neuroglancer_layer.LinkedLayerGroup.md#dispose)
- [disposed](neuroglancer_layer.LinkedLayerGroup.md#disposed)
- [isolate](neuroglancer_layer.LinkedLayerGroup.md#isolate)
- [linkByName](neuroglancer_layer.LinkedLayerGroup.md#linkbyname)
- [linkToLayer](neuroglancer_layer.LinkedLayerGroup.md#linktolayer)
- [refCountReachedZero](neuroglancer_layer.LinkedLayerGroup.md#refcountreachedzero)
- [registerCancellable](neuroglancer_layer.LinkedLayerGroup.md#registercancellable)
- [registerDisposer](neuroglancer_layer.LinkedLayerGroup.md#registerdisposer)
- [registerEventListener](neuroglancer_layer.LinkedLayerGroup.md#registereventlistener)
- [reset](neuroglancer_layer.LinkedLayerGroup.md#reset)
- [restoreState](neuroglancer_layer.LinkedLayerGroup.md#restorestate)
- [toJSON](neuroglancer_layer.LinkedLayerGroup.md#tojson)
- [unregisterDisposer](neuroglancer_layer.LinkedLayerGroup.md#unregisterdisposer)

## Constructors

### constructor

• **new LinkedLayerGroup**(`layerManager`, `layer`, `predicate`, `getGroup`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layerManager` | [`LayerManager`](neuroglancer_layer.LayerManager.md) |
| `layer` | [`UserLayer`](neuroglancer_layer.UserLayer.md) |
| `predicate` | (`layer`: [`UserLayer`](neuroglancer_layer.UserLayer.md)) => `boolean` |
| `getGroup` | (`layer`: [`UserLayer`](neuroglancer_layer.UserLayer.md)) => [`LinkedLayerGroup`](neuroglancer_layer.LinkedLayerGroup.md) |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/layer.ts:1636](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1636)

## Properties

### changed

• **changed**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Implementation of

[Trackable](../interfaces/neuroglancer_util_trackable.Trackable.md).[changed](../interfaces/neuroglancer_util_trackable.Trackable.md#changed)

#### Defined in

[src/neuroglancer/layer.ts:1624](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1624)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### getGroup

• **getGroup**: (`layer`: [`UserLayer`](neuroglancer_layer.UserLayer.md)) => [`LinkedLayerGroup`](neuroglancer_layer.LinkedLayerGroup.md)

#### Type declaration

▸ (`layer`): [`LinkedLayerGroup`](neuroglancer_layer.LinkedLayerGroup.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`UserLayer`](neuroglancer_layer.UserLayer.md) |

##### Returns

[`LinkedLayerGroup`](neuroglancer_layer.LinkedLayerGroup.md)

#### Defined in

[src/neuroglancer/layer.ts:1639](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1639)

___

### layer

• **layer**: [`UserLayer`](neuroglancer_layer.UserLayer.md)

#### Defined in

[src/neuroglancer/layer.ts:1637](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1637)

___

### layerManager

• **layerManager**: [`LayerManager`](neuroglancer_layer.LayerManager.md)

#### Defined in

[src/neuroglancer/layer.ts:1637](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1637)

___

### linkedLayersChanged

• **linkedLayersChanged**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/layer.ts:1625](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1625)

___

### linkedLayers\_

• `Private` **linkedLayers\_**: `Set`<[`UserLayer`](neuroglancer_layer.UserLayer.md)\>

#### Defined in

[src/neuroglancer/layer.ts:1622](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1622)

___

### predicate

• **predicate**: (`layer`: [`UserLayer`](neuroglancer_layer.UserLayer.md)) => `boolean`

#### Type declaration

▸ (`layer`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`UserLayer`](neuroglancer_layer.UserLayer.md) |

##### Returns

`boolean`

#### Defined in

[src/neuroglancer/layer.ts:1638](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1638)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### root

• `Readonly` **root**: [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<[`UserLayer`](neuroglancer_layer.UserLayer.md)\>

#### Defined in

[src/neuroglancer/layer.ts:1626](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1626)

___

### root\_

• `Private` **root\_**: [`UserLayer`](neuroglancer_layer.UserLayer.md)

#### Defined in

[src/neuroglancer/layer.ts:1623](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1623)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### linkedLayers

• `get` **linkedLayers**(): `ReadonlySet`<[`UserLayer`](neuroglancer_layer.UserLayer.md)\>

#### Returns

`ReadonlySet`<[`UserLayer`](neuroglancer_layer.UserLayer.md)\>

#### Defined in

[src/neuroglancer/layer.ts:1628](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1628)

___

### rootGroup

• `get` **rootGroup**(): [`LinkedLayerGroup`](neuroglancer_layer.LinkedLayerGroup.md)

#### Returns

[`LinkedLayerGroup`](neuroglancer_layer.LinkedLayerGroup.md)

#### Defined in

[src/neuroglancer/layer.ts:1632](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1632)

## Methods

### addRef

▸ **addRef**(): [`LinkedLayerGroup`](neuroglancer_layer.LinkedLayerGroup.md)

#### Returns

[`LinkedLayerGroup`](neuroglancer_layer.LinkedLayerGroup.md)

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[addRef](neuroglancer_util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[dispose](neuroglancer_util_disposable.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposed](neuroglancer_util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/layer.ts:1720](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1720)

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

[src/neuroglancer/layer.ts:1667](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1667)

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

[src/neuroglancer/layer.ts:1691](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1691)

___

### linkToLayer

▸ **linkToLayer**(`otherUserLayer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `otherUserLayer` | [`UserLayer`](neuroglancer_layer.UserLayer.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:1704](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1704)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCountReachedZero](neuroglancer_util_disposable.RefCounted.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L66)

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

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L100)

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

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L76)

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

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L95)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Implementation of

Trackable.reset

#### Defined in

[src/neuroglancer/layer.ts:1651](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1651)

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

[src/neuroglancer/layer.ts:1655](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1655)

___

### toJSON

▸ **toJSON**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Implementation of

Trackable.toJSON

#### Defined in

[src/neuroglancer/layer.ts:1661](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1661)

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

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L85)
