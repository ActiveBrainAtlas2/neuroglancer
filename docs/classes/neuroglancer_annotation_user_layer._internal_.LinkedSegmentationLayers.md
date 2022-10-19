[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/annotation/user\_layer](../modules/neuroglancer_annotation_user_layer.md) / [<internal\>](../modules/neuroglancer_annotation_user_layer._internal_.md) / LinkedSegmentationLayers

# Class: LinkedSegmentationLayers

[neuroglancer/annotation/user_layer](../modules/neuroglancer_annotation_user_layer.md).[<internal>](../modules/neuroglancer_annotation_user_layer._internal_.md).LinkedSegmentationLayers

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`LinkedSegmentationLayers`**

## Table of contents

### Constructors

- [constructor](neuroglancer_annotation_user_layer._internal_.LinkedSegmentationLayers.md#constructor)

### Properties

- [annotationDisplayState](neuroglancer_annotation_user_layer._internal_.LinkedSegmentationLayers.md#annotationdisplaystate)
- [annotationStates](neuroglancer_annotation_user_layer._internal_.LinkedSegmentationLayers.md#annotationstates)
- [changed](neuroglancer_annotation_user_layer._internal_.LinkedSegmentationLayers.md#changed)
- [curGeneration](neuroglancer_annotation_user_layer._internal_.LinkedSegmentationLayers.md#curgeneration)
- [disposedStacks](neuroglancer_annotation_user_layer._internal_.LinkedSegmentationLayers.md#disposedstacks)
- [layerManager](neuroglancer_annotation_user_layer._internal_.LinkedSegmentationLayers.md#layermanager)
- [map](neuroglancer_annotation_user_layer._internal_.LinkedSegmentationLayers.md#map)
- [refCount](neuroglancer_annotation_user_layer._internal_.LinkedSegmentationLayers.md#refcount)
- [wasDisposed](neuroglancer_annotation_user_layer._internal_.LinkedSegmentationLayers.md#wasdisposed)
- [wasLoading](neuroglancer_annotation_user_layer._internal_.LinkedSegmentationLayers.md#wasloading)

### Methods

- [addRef](neuroglancer_annotation_user_layer._internal_.LinkedSegmentationLayers.md#addref)
- [addRelationship](neuroglancer_annotation_user_layer._internal_.LinkedSegmentationLayers.md#addrelationship)
- [dispose](neuroglancer_annotation_user_layer._internal_.LinkedSegmentationLayers.md#dispose)
- [disposed](neuroglancer_annotation_user_layer._internal_.LinkedSegmentationLayers.md#disposed)
- [get](neuroglancer_annotation_user_layer._internal_.LinkedSegmentationLayers.md#get)
- [refCountReachedZero](neuroglancer_annotation_user_layer._internal_.LinkedSegmentationLayers.md#refcountreachedzero)
- [registerCancellable](neuroglancer_annotation_user_layer._internal_.LinkedSegmentationLayers.md#registercancellable)
- [registerDisposer](neuroglancer_annotation_user_layer._internal_.LinkedSegmentationLayers.md#registerdisposer)
- [registerEventListener](neuroglancer_annotation_user_layer._internal_.LinkedSegmentationLayers.md#registereventlistener)
- [reset](neuroglancer_annotation_user_layer._internal_.LinkedSegmentationLayers.md#reset)
- [restoreState](neuroglancer_annotation_user_layer._internal_.LinkedSegmentationLayers.md#restorestate)
- [toJSON](neuroglancer_annotation_user_layer._internal_.LinkedSegmentationLayers.md#tojson)
- [unbind](neuroglancer_annotation_user_layer._internal_.LinkedSegmentationLayers.md#unbind)
- [unregisterDisposer](neuroglancer_annotation_user_layer._internal_.LinkedSegmentationLayers.md#unregisterdisposer)
- [update](neuroglancer_annotation_user_layer._internal_.LinkedSegmentationLayers.md#update)

## Constructors

### constructor

• **new LinkedSegmentationLayers**(`layerManager`, `annotationStates`, `annotationDisplayState`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layerManager` | [`LayerManager`](neuroglancer_layer.LayerManager.md) |
| `annotationStates` | [`MergedAnnotationStates`](neuroglancer_ui_annotations.MergedAnnotationStates.md) |
| `annotationDisplayState` | [`AnnotationDisplayState`](neuroglancer_annotation_annotation_layer_state.AnnotationDisplayState.md) |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/annotation/user_layer.ts:112](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/user_layer.ts#L112)

## Properties

### annotationDisplayState

• **annotationDisplayState**: [`AnnotationDisplayState`](neuroglancer_annotation_annotation_layer_state.AnnotationDisplayState.md)

___

### annotationStates

• **annotationStates**: [`MergedAnnotationStates`](neuroglancer_ui_annotations.MergedAnnotationStates.md)

___

### changed

• **changed**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/annotation/user_layer.ts:109](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/user_layer.ts#L109)

___

### curGeneration

• `Private` **curGeneration**: `number` = `-1`

#### Defined in

[src/neuroglancer/annotation/user_layer.ts:110](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/user_layer.ts#L110)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### layerManager

• **layerManager**: [`LayerManager`](neuroglancer_layer.LayerManager.md)

___

### map

• `Private` **map**: `Map`<`string`, [`LinkedSegmentationLayer`](../interfaces/neuroglancer_annotation_user_layer._internal_.LinkedSegmentationLayer.md)\>

#### Defined in

[src/neuroglancer/annotation/user_layer.ts:253](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/user_layer.ts#L253)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

___

### wasLoading

• `Private` **wasLoading**: `undefined` \| `boolean` = `undefined`

#### Defined in

[src/neuroglancer/annotation/user_layer.ts:111](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/user_layer.ts#L111)

## Methods

### addRef

▸ **addRef**(): [`LinkedSegmentationLayers`](neuroglancer_annotation_user_layer._internal_.LinkedSegmentationLayers.md)

#### Returns

[`LinkedSegmentationLayers`](neuroglancer_annotation_user_layer._internal_.LinkedSegmentationLayers.md)

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[addRef](neuroglancer_util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L48)

___

### addRelationship

▸ `Private` **addRelationship**(`relationship`): [`LinkedSegmentationLayer`](../interfaces/neuroglancer_annotation_user_layer._internal_.LinkedSegmentationLayer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `relationship` | `string` |

#### Returns

[`LinkedSegmentationLayer`](../interfaces/neuroglancer_annotation_user_layer._internal_.LinkedSegmentationLayer.md)

#### Defined in

[src/neuroglancer/annotation/user_layer.ts:151](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/user_layer.ts#L151)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[dispose](neuroglancer_util_disposable.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposed](neuroglancer_util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/annotation/user_layer.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/user_layer.ts#L245)

___

### get

▸ **get**(`relationship`): [`LinkedSegmentationLayer`](../interfaces/neuroglancer_annotation_user_layer._internal_.LinkedSegmentationLayer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `relationship` | `string` |

#### Returns

[`LinkedSegmentationLayer`](../interfaces/neuroglancer_annotation_user_layer._internal_.LinkedSegmentationLayer.md)

#### Defined in

[src/neuroglancer/annotation/user_layer.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/user_layer.ts#L171)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

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

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[registerEventListener](neuroglancer_util_disposable.RefCounted.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L95)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/user_layer.ts:181](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/user_layer.ts#L181)

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

[src/neuroglancer/annotation/user_layer.ts:208](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/user_layer.ts#L208)

___

### toJSON

▸ **toJSON**(): { `filterBySegmentation`: `undefined` ; `linkedSegmentationLayer`: `undefined` = linkedJson } \| { `filterBySegmentation`: `undefined` \| `string`[] ; `linkedSegmentationLayer`: `undefined` \| { `[relationship: string]`: `string`;  } = linkedJson }

#### Returns

{ `filterBySegmentation`: `undefined` ; `linkedSegmentationLayer`: `undefined` = linkedJson } \| { `filterBySegmentation`: `undefined` \| `string`[] ; `linkedSegmentationLayer`: `undefined` \| { `[relationship: string]`: `string`;  } = linkedJson }

#### Defined in

[src/neuroglancer/annotation/user_layer.ts:187](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/user_layer.ts#L187)

___

### unbind

▸ `Private` **unbind**(`state`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`LinkedSegmentationLayer`](../interfaces/neuroglancer_annotation_user_layer._internal_.LinkedSegmentationLayer.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/user_layer.ts:176](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/user_layer.ts#L176)

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

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L85)

___

### update

▸ `Private` **update**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/user_layer.ts:122](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/user_layer.ts#L122)
