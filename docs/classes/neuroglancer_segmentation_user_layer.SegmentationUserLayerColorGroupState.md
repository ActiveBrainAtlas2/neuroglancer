[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/segmentation\_user\_layer](../modules/neuroglancer_segmentation_user_layer.md) / SegmentationUserLayerColorGroupState

# Class: SegmentationUserLayerColorGroupState

[neuroglancer/segmentation_user_layer](../modules/neuroglancer_segmentation_user_layer.md).SegmentationUserLayerColorGroupState

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

  ↳ **`SegmentationUserLayerColorGroupState`**

## Implements

- [`SegmentationColorGroupState`](../interfaces/neuroglancer_segmentation_display_state_frontend.SegmentationColorGroupState.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_segmentation_user_layer.SegmentationUserLayerColorGroupState.md#constructor)

### Properties

- [disposedStacks](neuroglancer_segmentation_user_layer.SegmentationUserLayerColorGroupState.md#disposedstacks)
- [layer](neuroglancer_segmentation_user_layer.SegmentationUserLayerColorGroupState.md#layer)
- [refCount](neuroglancer_segmentation_user_layer.SegmentationUserLayerColorGroupState.md#refcount)
- [segmentColorHash](neuroglancer_segmentation_user_layer.SegmentationUserLayerColorGroupState.md#segmentcolorhash)
- [segmentDefaultColor](neuroglancer_segmentation_user_layer.SegmentationUserLayerColorGroupState.md#segmentdefaultcolor)
- [segmentStatedColors](neuroglancer_segmentation_user_layer.SegmentationUserLayerColorGroupState.md#segmentstatedcolors)
- [specificationChanged](neuroglancer_segmentation_user_layer.SegmentationUserLayerColorGroupState.md#specificationchanged)
- [wasDisposed](neuroglancer_segmentation_user_layer.SegmentationUserLayerColorGroupState.md#wasdisposed)

### Methods

- [addRef](neuroglancer_segmentation_user_layer.SegmentationUserLayerColorGroupState.md#addref)
- [assignFrom](neuroglancer_segmentation_user_layer.SegmentationUserLayerColorGroupState.md#assignfrom)
- [dispose](neuroglancer_segmentation_user_layer.SegmentationUserLayerColorGroupState.md#dispose)
- [disposed](neuroglancer_segmentation_user_layer.SegmentationUserLayerColorGroupState.md#disposed)
- [refCountReachedZero](neuroglancer_segmentation_user_layer.SegmentationUserLayerColorGroupState.md#refcountreachedzero)
- [registerCancellable](neuroglancer_segmentation_user_layer.SegmentationUserLayerColorGroupState.md#registercancellable)
- [registerDisposer](neuroglancer_segmentation_user_layer.SegmentationUserLayerColorGroupState.md#registerdisposer)
- [registerEventListener](neuroglancer_segmentation_user_layer.SegmentationUserLayerColorGroupState.md#registereventlistener)
- [restoreState](neuroglancer_segmentation_user_layer.SegmentationUserLayerColorGroupState.md#restorestate)
- [toJSON](neuroglancer_segmentation_user_layer.SegmentationUserLayerColorGroupState.md#tojson)
- [unregisterDisposer](neuroglancer_segmentation_user_layer.SegmentationUserLayerColorGroupState.md#unregisterdisposer)

## Constructors

### constructor

• **new SegmentationUserLayerColorGroupState**(`layer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`SegmentationUserLayer`](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md) |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:168](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_user_layer.ts#L168)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### layer

• **layer**: [`SegmentationUserLayer`](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:168](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_user_layer.ts#L168)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### segmentColorHash

• **segmentColorHash**: [`SegmentColorHash`](neuroglancer_segment_color.SegmentColorHash.md)

#### Implementation of

[SegmentationColorGroupState](../interfaces/neuroglancer_segmentation_display_state_frontend.SegmentationColorGroupState.md).[segmentColorHash](../interfaces/neuroglancer_segmentation_display_state_frontend.SegmentationColorGroupState.md#segmentcolorhash)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:212](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_user_layer.ts#L212)

___

### segmentDefaultColor

• **segmentDefaultColor**: [`TrackableOptionalRGB`](neuroglancer_util_color.TrackableOptionalRGB.md)

#### Implementation of

[SegmentationColorGroupState](../interfaces/neuroglancer_segmentation_display_state_frontend.SegmentationColorGroupState.md).[segmentDefaultColor](../interfaces/neuroglancer_segmentation_display_state_frontend.SegmentationColorGroupState.md#segmentdefaultcolor)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:214](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_user_layer.ts#L214)

___

### segmentStatedColors

• **segmentStatedColors**: [`Uint64Map`](neuroglancer_uint64_map.Uint64Map.md)

#### Implementation of

[SegmentationColorGroupState](../interfaces/neuroglancer_segmentation_display_state_frontend.SegmentationColorGroupState.md).[segmentStatedColors](../interfaces/neuroglancer_segmentation_display_state_frontend.SegmentationColorGroupState.md#segmentstatedcolors)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:213](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_user_layer.ts#L213)

___

### specificationChanged

• **specificationChanged**: [`Signal`](neuroglancer_util_signal.Signal.md)<() => `void`\>

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:167](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_user_layer.ts#L167)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`SegmentationUserLayerColorGroupState`](neuroglancer_segmentation_user_layer.SegmentationUserLayerColorGroupState.md)

#### Returns

[`SegmentationUserLayerColorGroupState`](neuroglancer_segmentation_user_layer.SegmentationUserLayerColorGroupState.md)

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[addRef](neuroglancer_util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

___

### assignFrom

▸ **assignFrom**(`other`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`SegmentationUserLayerColorGroupState`](neuroglancer_segmentation_user_layer.SegmentationUserLayerColorGroupState.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:206](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_user_layer.ts#L206)

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

### restoreState

▸ **restoreState**(`specification`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `specification` | `unknown` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:176](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_user_layer.ts#L176)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_user_layer.ts#L192)

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
