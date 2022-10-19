[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/user\_layer](../modules/annotation_user_layer.md) / [<internal\>](../modules/annotation_user_layer._internal_.md) / LinkedSegmentationLayers

# Class: LinkedSegmentationLayers

[annotation/user_layer](../modules/annotation_user_layer.md).[<internal>](../modules/annotation_user_layer._internal_.md).LinkedSegmentationLayers

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`LinkedSegmentationLayers`**

## Table of contents

### Constructors

- [constructor](annotation_user_layer._internal_.LinkedSegmentationLayers.md#constructor)

### Properties

- [annotationDisplayState](annotation_user_layer._internal_.LinkedSegmentationLayers.md#annotationdisplaystate)
- [annotationStates](annotation_user_layer._internal_.LinkedSegmentationLayers.md#annotationstates)
- [changed](annotation_user_layer._internal_.LinkedSegmentationLayers.md#changed)
- [curGeneration](annotation_user_layer._internal_.LinkedSegmentationLayers.md#curgeneration)
- [disposedStacks](annotation_user_layer._internal_.LinkedSegmentationLayers.md#disposedstacks)
- [layerManager](annotation_user_layer._internal_.LinkedSegmentationLayers.md#layermanager)
- [map](annotation_user_layer._internal_.LinkedSegmentationLayers.md#map)
- [refCount](annotation_user_layer._internal_.LinkedSegmentationLayers.md#refcount)
- [wasDisposed](annotation_user_layer._internal_.LinkedSegmentationLayers.md#wasdisposed)
- [wasLoading](annotation_user_layer._internal_.LinkedSegmentationLayers.md#wasloading)

### Methods

- [addRef](annotation_user_layer._internal_.LinkedSegmentationLayers.md#addref)
- [addRelationship](annotation_user_layer._internal_.LinkedSegmentationLayers.md#addrelationship)
- [dispose](annotation_user_layer._internal_.LinkedSegmentationLayers.md#dispose)
- [disposed](annotation_user_layer._internal_.LinkedSegmentationLayers.md#disposed)
- [get](annotation_user_layer._internal_.LinkedSegmentationLayers.md#get)
- [refCountReachedZero](annotation_user_layer._internal_.LinkedSegmentationLayers.md#refcountreachedzero)
- [registerCancellable](annotation_user_layer._internal_.LinkedSegmentationLayers.md#registercancellable)
- [registerDisposer](annotation_user_layer._internal_.LinkedSegmentationLayers.md#registerdisposer)
- [registerEventListener](annotation_user_layer._internal_.LinkedSegmentationLayers.md#registereventlistener)
- [reset](annotation_user_layer._internal_.LinkedSegmentationLayers.md#reset)
- [restoreState](annotation_user_layer._internal_.LinkedSegmentationLayers.md#restorestate)
- [toJSON](annotation_user_layer._internal_.LinkedSegmentationLayers.md#tojson)
- [unbind](annotation_user_layer._internal_.LinkedSegmentationLayers.md#unbind)
- [unregisterDisposer](annotation_user_layer._internal_.LinkedSegmentationLayers.md#unregisterdisposer)
- [update](annotation_user_layer._internal_.LinkedSegmentationLayers.md#update)

## Constructors

### constructor

• **new LinkedSegmentationLayers**(`layerManager`, `annotationStates`, `annotationDisplayState`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layerManager` | [`LayerManager`](annotation_annotation_layer_state._internal_.LayerManager.md) |
| `annotationStates` | [`MergedAnnotationStates`](ui_annotations.MergedAnnotationStates.md) |
| `annotationDisplayState` | [`AnnotationDisplayState`](annotation_annotation_layer_state.AnnotationDisplayState.md) |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/annotation/user_layer.ts:112](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/user_layer.ts#L112)

## Properties

### annotationDisplayState

• **annotationDisplayState**: [`AnnotationDisplayState`](annotation_annotation_layer_state.AnnotationDisplayState.md)

___

### annotationStates

• **annotationStates**: [`MergedAnnotationStates`](ui_annotations.MergedAnnotationStates.md)

___

### changed

• **changed**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/annotation/user_layer.ts:109](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/user_layer.ts#L109)

___

### curGeneration

• `Private` **curGeneration**: `number` = `-1`

#### Defined in

[src/neuroglancer/annotation/user_layer.ts:110](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/user_layer.ts#L110)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### layerManager

• **layerManager**: [`LayerManager`](annotation_annotation_layer_state._internal_.LayerManager.md)

___

### map

• `Private` **map**: `Map`<`string`, [`LinkedSegmentationLayer`](../interfaces/annotation_user_layer._internal_.LinkedSegmentationLayer.md)\>

#### Defined in

[src/neuroglancer/annotation/user_layer.ts:253](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/user_layer.ts#L253)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

___

### wasLoading

• `Private` **wasLoading**: `undefined` \| `boolean` = `undefined`

#### Defined in

[src/neuroglancer/annotation/user_layer.ts:111](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/user_layer.ts#L111)

## Methods

### addRef

▸ **addRef**(): [`LinkedSegmentationLayers`](annotation_user_layer._internal_.LinkedSegmentationLayers.md)

#### Returns

[`LinkedSegmentationLayers`](annotation_user_layer._internal_.LinkedSegmentationLayers.md)

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[addRef](util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### addRelationship

▸ `Private` **addRelationship**(`relationship`): [`LinkedSegmentationLayer`](../interfaces/annotation_user_layer._internal_.LinkedSegmentationLayer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `relationship` | `string` |

#### Returns

[`LinkedSegmentationLayer`](../interfaces/annotation_user_layer._internal_.LinkedSegmentationLayer.md)

#### Defined in

[src/neuroglancer/annotation/user_layer.ts:151](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/user_layer.ts#L151)

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

[src/neuroglancer/annotation/user_layer.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/user_layer.ts#L245)

___

### get

▸ **get**(`relationship`): [`LinkedSegmentationLayer`](../interfaces/annotation_user_layer._internal_.LinkedSegmentationLayer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `relationship` | `string` |

#### Returns

[`LinkedSegmentationLayer`](../interfaces/annotation_user_layer._internal_.LinkedSegmentationLayer.md)

#### Defined in

[src/neuroglancer/annotation/user_layer.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/user_layer.ts#L171)

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

#### Defined in

[src/neuroglancer/annotation/user_layer.ts:181](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/user_layer.ts#L181)

___

### restoreState

▸ **restoreState**(`json`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/user_layer.ts:208](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/user_layer.ts#L208)

___

### toJSON

▸ **toJSON**(): { `filterBySegmentation`: `undefined` ; `linkedSegmentationLayer`: `undefined` = linkedJson } \| { `filterBySegmentation`: `undefined` \| `string`[] ; `linkedSegmentationLayer`: `undefined` \| { `[relationship: string]`: `string`;  } = linkedJson }

#### Returns

{ `filterBySegmentation`: `undefined` ; `linkedSegmentationLayer`: `undefined` = linkedJson } \| { `filterBySegmentation`: `undefined` \| `string`[] ; `linkedSegmentationLayer`: `undefined` \| { `[relationship: string]`: `string`;  } = linkedJson }

#### Defined in

[src/neuroglancer/annotation/user_layer.ts:187](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/user_layer.ts#L187)

___

### unbind

▸ `Private` **unbind**(`state`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`LinkedSegmentationLayer`](../interfaces/annotation_user_layer._internal_.LinkedSegmentationLayer.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/user_layer.ts:176](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/user_layer.ts#L176)

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

___

### update

▸ `Private` **update**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/user_layer.ts:122](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/user_layer.ts#L122)
