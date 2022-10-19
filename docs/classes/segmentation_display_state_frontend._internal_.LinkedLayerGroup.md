[neuroglancer](../README.md) / [Modules](../modules.md) / [segmentation\_display\_state/frontend](../modules/segmentation_display_state_frontend.md) / [<internal\>](../modules/segmentation_display_state_frontend._internal_.md) / LinkedLayerGroup

# Class: LinkedLayerGroup

[segmentation_display_state/frontend](../modules/segmentation_display_state_frontend.md).[<internal>](../modules/segmentation_display_state_frontend._internal_.md).LinkedLayerGroup

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`LinkedLayerGroup`**

## Implements

- [`Trackable`](../interfaces/util_trackable.Trackable.md)

## Table of contents

### Constructors

- [constructor](segmentation_display_state_frontend._internal_.LinkedLayerGroup.md#constructor)

### Properties

- [changed](segmentation_display_state_frontend._internal_.LinkedLayerGroup.md#changed)
- [disposedStacks](segmentation_display_state_frontend._internal_.LinkedLayerGroup.md#disposedstacks)
- [getGroup](segmentation_display_state_frontend._internal_.LinkedLayerGroup.md#getgroup)
- [layer](segmentation_display_state_frontend._internal_.LinkedLayerGroup.md#layer)
- [layerManager](segmentation_display_state_frontend._internal_.LinkedLayerGroup.md#layermanager)
- [linkedLayersChanged](segmentation_display_state_frontend._internal_.LinkedLayerGroup.md#linkedlayerschanged)
- [linkedLayers\_](segmentation_display_state_frontend._internal_.LinkedLayerGroup.md#linkedlayers_)
- [predicate](segmentation_display_state_frontend._internal_.LinkedLayerGroup.md#predicate)
- [refCount](segmentation_display_state_frontend._internal_.LinkedLayerGroup.md#refcount)
- [root](segmentation_display_state_frontend._internal_.LinkedLayerGroup.md#root)
- [root\_](segmentation_display_state_frontend._internal_.LinkedLayerGroup.md#root_)
- [wasDisposed](segmentation_display_state_frontend._internal_.LinkedLayerGroup.md#wasdisposed)

### Accessors

- [linkedLayers](segmentation_display_state_frontend._internal_.LinkedLayerGroup.md#linkedlayers)
- [rootGroup](segmentation_display_state_frontend._internal_.LinkedLayerGroup.md#rootgroup)

### Methods

- [addRef](segmentation_display_state_frontend._internal_.LinkedLayerGroup.md#addref)
- [dispose](segmentation_display_state_frontend._internal_.LinkedLayerGroup.md#dispose)
- [disposed](segmentation_display_state_frontend._internal_.LinkedLayerGroup.md#disposed)
- [isolate](segmentation_display_state_frontend._internal_.LinkedLayerGroup.md#isolate)
- [linkByName](segmentation_display_state_frontend._internal_.LinkedLayerGroup.md#linkbyname)
- [linkToLayer](segmentation_display_state_frontend._internal_.LinkedLayerGroup.md#linktolayer)
- [refCountReachedZero](segmentation_display_state_frontend._internal_.LinkedLayerGroup.md#refcountreachedzero)
- [registerCancellable](segmentation_display_state_frontend._internal_.LinkedLayerGroup.md#registercancellable)
- [registerDisposer](segmentation_display_state_frontend._internal_.LinkedLayerGroup.md#registerdisposer)
- [registerEventListener](segmentation_display_state_frontend._internal_.LinkedLayerGroup.md#registereventlistener)
- [reset](segmentation_display_state_frontend._internal_.LinkedLayerGroup.md#reset)
- [restoreState](segmentation_display_state_frontend._internal_.LinkedLayerGroup.md#restorestate)
- [toJSON](segmentation_display_state_frontend._internal_.LinkedLayerGroup.md#tojson)
- [unregisterDisposer](segmentation_display_state_frontend._internal_.LinkedLayerGroup.md#unregisterdisposer)

## Constructors

### constructor

• **new LinkedLayerGroup**(`layerManager`, `layer`, `predicate`, `getGroup`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layerManager` | [`LayerManager`](annotation_annotation_layer_state._internal_.LayerManager.md) |
| `layer` | [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md) |
| `predicate` | (`layer`: [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)) => `boolean` |
| `getGroup` | (`layer`: [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)) => [`LinkedLayerGroup`](segmentation_display_state_frontend._internal_.LinkedLayerGroup.md) |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/layer.ts:1636](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1636)

## Properties

### changed

• **changed**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Implementation of

[Trackable](../interfaces/util_trackable.Trackable.md).[changed](../interfaces/util_trackable.Trackable.md#changed)

#### Defined in

[src/neuroglancer/layer.ts:1624](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1624)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### getGroup

• **getGroup**: (`layer`: [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)) => [`LinkedLayerGroup`](segmentation_display_state_frontend._internal_.LinkedLayerGroup.md)

#### Type declaration

▸ (`layer`): [`LinkedLayerGroup`](segmentation_display_state_frontend._internal_.LinkedLayerGroup.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md) |

##### Returns

[`LinkedLayerGroup`](segmentation_display_state_frontend._internal_.LinkedLayerGroup.md)

___

### layer

• **layer**: [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)

___

### layerManager

• **layerManager**: [`LayerManager`](annotation_annotation_layer_state._internal_.LayerManager.md)

___

### linkedLayersChanged

• **linkedLayersChanged**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/layer.ts:1625](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1625)

___

### linkedLayers\_

• `Private` **linkedLayers\_**: `Set`<[`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)\>

#### Defined in

[src/neuroglancer/layer.ts:1622](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1622)

___

### predicate

• **predicate**: (`layer`: [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)) => `boolean`

#### Type declaration

▸ (`layer`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md) |

##### Returns

`boolean`

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### root

• `Readonly` **root**: [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<[`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)\>

#### Defined in

[src/neuroglancer/layer.ts:1626](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1626)

___

### root\_

• `Private` **root\_**: [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)

#### Defined in

[src/neuroglancer/layer.ts:1623](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1623)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### linkedLayers

• `get` **linkedLayers**(): `ReadonlySet`<[`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)\>

#### Returns

`ReadonlySet`<[`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)\>

#### Defined in

[src/neuroglancer/layer.ts:1628](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1628)

___

### rootGroup

• `get` **rootGroup**(): [`LinkedLayerGroup`](segmentation_display_state_frontend._internal_.LinkedLayerGroup.md)

#### Returns

[`LinkedLayerGroup`](segmentation_display_state_frontend._internal_.LinkedLayerGroup.md)

#### Defined in

[src/neuroglancer/layer.ts:1632](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1632)

## Methods

### addRef

▸ **addRef**(): [`LinkedLayerGroup`](segmentation_display_state_frontend._internal_.LinkedLayerGroup.md)

#### Returns

[`LinkedLayerGroup`](segmentation_display_state_frontend._internal_.LinkedLayerGroup.md)

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

[src/neuroglancer/layer.ts:1720](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1720)

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

[src/neuroglancer/layer.ts:1667](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1667)

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

[src/neuroglancer/layer.ts:1691](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1691)

___

### linkToLayer

▸ **linkToLayer**(`otherUserLayer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `otherUserLayer` | [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:1704](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1704)

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

[src/neuroglancer/layer.ts:1651](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1651)

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

[Trackable](../interfaces/util_trackable.Trackable.md).[restoreState](../interfaces/util_trackable.Trackable.md#restorestate)

#### Defined in

[src/neuroglancer/layer.ts:1655](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1655)

___

### toJSON

▸ **toJSON**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Implementation of

[Trackable](../interfaces/util_trackable.Trackable.md).[toJSON](../interfaces/util_trackable.Trackable.md#tojson)

#### Defined in

[src/neuroglancer/layer.ts:1661](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1661)

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
