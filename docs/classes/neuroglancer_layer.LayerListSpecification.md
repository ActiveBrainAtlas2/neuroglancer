[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/layer](../modules/neuroglancer_layer.md) / LayerListSpecification

# Class: LayerListSpecification

[neuroglancer/layer](../modules/neuroglancer_layer.md).LayerListSpecification

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

  ↳ **`LayerListSpecification`**

  ↳↳ [`TopLevelLayerListSpecification`](neuroglancer_layer.TopLevelLayerListSpecification.md)

  ↳↳ [`LayerSubsetSpecification`](neuroglancer_layer.LayerSubsetSpecification.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_layer.LayerListSpecification.md#constructor)

### Properties

- [changed](neuroglancer_layer.LayerListSpecification.md#changed)
- [chunkManager](neuroglancer_layer.LayerListSpecification.md#chunkmanager)
- [dataSourceProviderRegistry](neuroglancer_layer.LayerListSpecification.md#datasourceproviderregistry)
- [disposedStacks](neuroglancer_layer.LayerListSpecification.md#disposedstacks)
- [layerManager](neuroglancer_layer.LayerListSpecification.md#layermanager)
- [layerSelectedValues](neuroglancer_layer.LayerListSpecification.md#layerselectedvalues)
- [refCount](neuroglancer_layer.LayerListSpecification.md#refcount)
- [root](neuroglancer_layer.LayerListSpecification.md#root)
- [rootLayers](neuroglancer_layer.LayerListSpecification.md#rootlayers)
- [rpc](neuroglancer_layer.LayerListSpecification.md#rpc)
- [wasDisposed](neuroglancer_layer.LayerListSpecification.md#wasdisposed)

### Methods

- [add](neuroglancer_layer.LayerListSpecification.md#add)
- [addRef](neuroglancer_layer.LayerListSpecification.md#addref)
- [dispose](neuroglancer_layer.LayerListSpecification.md#dispose)
- [disposed](neuroglancer_layer.LayerListSpecification.md#disposed)
- [refCountReachedZero](neuroglancer_layer.LayerListSpecification.md#refcountreachedzero)
- [registerCancellable](neuroglancer_layer.LayerListSpecification.md#registercancellable)
- [registerDisposer](neuroglancer_layer.LayerListSpecification.md#registerdisposer)
- [registerEventListener](neuroglancer_layer.LayerListSpecification.md#registereventlistener)
- [unregisterDisposer](neuroglancer_layer.LayerListSpecification.md#unregisterdisposer)

## Constructors

### constructor

• **new LayerListSpecification**()

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

## Properties

### changed

• **changed**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/layer.ts:1780](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1780)

___

### chunkManager

• `Abstract` **chunkManager**: [`ChunkManager`](neuroglancer_chunk_manager_frontend.ChunkManager.md)

#### Defined in

[src/neuroglancer/layer.ts:1786](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1786)

___

### dataSourceProviderRegistry

• `Abstract` **dataSourceProviderRegistry**: [`DataSourceProviderRegistry`](neuroglancer_datasource.DataSourceProviderRegistry.md)

#### Defined in

[src/neuroglancer/layer.ts:1784](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1784)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### layerManager

• `Abstract` **layerManager**: [`LayerManager`](neuroglancer_layer.LayerManager.md)

#### Defined in

[src/neuroglancer/layer.ts:1785](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1785)

___

### layerSelectedValues

• `Abstract` **layerSelectedValues**: [`LayerSelectedValues`](neuroglancer_layer.LayerSelectedValues.md)

#### Defined in

[src/neuroglancer/layer.ts:1787](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1787)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### root

• `Readonly` `Abstract` **root**: [`TopLevelLayerListSpecification`](neuroglancer_layer.TopLevelLayerListSpecification.md)

#### Defined in

[src/neuroglancer/layer.ts:1789](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1789)

___

### rootLayers

• `Abstract` **rootLayers**: [`LayerManager`](neuroglancer_layer.LayerManager.md)

#### Defined in

[src/neuroglancer/layer.ts:1793](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1793)

___

### rpc

• `Abstract` **rpc**: [`RPC`](neuroglancer_worker_rpc.RPC.md)

#### Defined in

[src/neuroglancer/layer.ts:1782](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1782)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Methods

### add

▸ `Abstract` **add**(`layer`, `index?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`ManagedUserLayer`](neuroglancer_layer.ManagedUserLayer.md) |
| `index?` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:1791](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1791)

___

### addRef

▸ **addRef**(): [`LayerListSpecification`](neuroglancer_layer.LayerListSpecification.md)

#### Returns

[`LayerListSpecification`](neuroglancer_layer.LayerListSpecification.md)

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

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposed](neuroglancer_util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L75)

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
