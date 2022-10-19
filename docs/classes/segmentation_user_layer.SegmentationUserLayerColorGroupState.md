[neuroglancer](../README.md) / [Modules](../modules.md) / [segmentation\_user\_layer](../modules/segmentation_user_layer.md) / SegmentationUserLayerColorGroupState

# Class: SegmentationUserLayerColorGroupState

[segmentation_user_layer](../modules/segmentation_user_layer.md).SegmentationUserLayerColorGroupState

## Hierarchy

- [`RefCounted`](axes_lines._internal_.RefCounted.md)

  ↳ **`SegmentationUserLayerColorGroupState`**

## Implements

- [`SegmentationColorGroupState`](../interfaces/image_user_layer._internal_.SegmentationColorGroupState.md)

## Table of contents

### Constructors

- [constructor](segmentation_user_layer.SegmentationUserLayerColorGroupState.md#constructor)

### Properties

- [disposedStacks](segmentation_user_layer.SegmentationUserLayerColorGroupState.md#disposedstacks)
- [layer](segmentation_user_layer.SegmentationUserLayerColorGroupState.md#layer)
- [refCount](segmentation_user_layer.SegmentationUserLayerColorGroupState.md#refcount)
- [segmentColorHash](segmentation_user_layer.SegmentationUserLayerColorGroupState.md#segmentcolorhash)
- [segmentDefaultColor](segmentation_user_layer.SegmentationUserLayerColorGroupState.md#segmentdefaultcolor)
- [segmentStatedColors](segmentation_user_layer.SegmentationUserLayerColorGroupState.md#segmentstatedcolors)
- [specificationChanged](segmentation_user_layer.SegmentationUserLayerColorGroupState.md#specificationchanged)
- [wasDisposed](segmentation_user_layer.SegmentationUserLayerColorGroupState.md#wasdisposed)

### Methods

- [addRef](segmentation_user_layer.SegmentationUserLayerColorGroupState.md#addref)
- [assignFrom](segmentation_user_layer.SegmentationUserLayerColorGroupState.md#assignfrom)
- [dispose](segmentation_user_layer.SegmentationUserLayerColorGroupState.md#dispose)
- [disposed](segmentation_user_layer.SegmentationUserLayerColorGroupState.md#disposed)
- [refCountReachedZero](segmentation_user_layer.SegmentationUserLayerColorGroupState.md#refcountreachedzero)
- [registerCancellable](segmentation_user_layer.SegmentationUserLayerColorGroupState.md#registercancellable)
- [registerDisposer](segmentation_user_layer.SegmentationUserLayerColorGroupState.md#registerdisposer)
- [registerEventListener](segmentation_user_layer.SegmentationUserLayerColorGroupState.md#registereventlistener)
- [restoreState](segmentation_user_layer.SegmentationUserLayerColorGroupState.md#restorestate)
- [toJSON](segmentation_user_layer.SegmentationUserLayerColorGroupState.md#tojson)
- [unregisterDisposer](segmentation_user_layer.SegmentationUserLayerColorGroupState.md#unregisterdisposer)

## Constructors

### constructor

• **new SegmentationUserLayerColorGroupState**(`layer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`SegmentationUserLayer`](segmentation_user_layer.SegmentationUserLayer.md) |

#### Overrides

[RefCounted](axes_lines._internal_.RefCounted.md).[constructor](axes_lines._internal_.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:168](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_user_layer.ts#L168)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[disposedStacks](axes_lines._internal_.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L52)

___

### layer

• **layer**: [`SegmentationUserLayer`](segmentation_user_layer.SegmentationUserLayer.md)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[refCount](axes_lines._internal_.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L45)

___

### segmentColorHash

• **segmentColorHash**: [`SegmentColorHash`](segment_color.SegmentColorHash.md)

#### Implementation of

[SegmentationColorGroupState](../interfaces/image_user_layer._internal_.SegmentationColorGroupState.md).[segmentColorHash](../interfaces/image_user_layer._internal_.SegmentationColorGroupState.md#segmentcolorhash)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:212](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_user_layer.ts#L212)

___

### segmentDefaultColor

• **segmentDefaultColor**: [`TrackableOptionalRGB`](segmentation_user_layer._internal_.TrackableOptionalRGB.md)

#### Implementation of

[SegmentationColorGroupState](../interfaces/image_user_layer._internal_.SegmentationColorGroupState.md).[segmentDefaultColor](../interfaces/image_user_layer._internal_.SegmentationColorGroupState.md#segmentdefaultcolor)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:214](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_user_layer.ts#L214)

___

### segmentStatedColors

• **segmentStatedColors**: [`Uint64Map`](uint64_map.Uint64Map.md)

#### Implementation of

[SegmentationColorGroupState](../interfaces/image_user_layer._internal_.SegmentationColorGroupState.md).[segmentStatedColors](../interfaces/image_user_layer._internal_.SegmentationColorGroupState.md#segmentstatedcolors)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:213](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_user_layer.ts#L213)

___

### specificationChanged

• **specificationChanged**: [`Signal`](coordinate_transform._internal_.Signal.md)<() => `void`\>

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:167](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_user_layer.ts#L167)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[wasDisposed](axes_lines._internal_.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`SegmentationUserLayerColorGroupState`](segmentation_user_layer.SegmentationUserLayerColorGroupState.md)

#### Returns

[`SegmentationUserLayerColorGroupState`](segmentation_user_layer.SegmentationUserLayerColorGroupState.md)

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[addRef](axes_lines._internal_.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L48)

___

### assignFrom

▸ **assignFrom**(`other`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`SegmentationUserLayerColorGroupState`](segmentation_user_layer.SegmentationUserLayerColorGroupState.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:206](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_user_layer.ts#L206)

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

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[disposed](axes_lines._internal_.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L75)

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

### restoreState

▸ **restoreState**(`specification`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `specification` | `unknown` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:176](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_user_layer.ts#L176)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_user_layer.ts#L192)

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
