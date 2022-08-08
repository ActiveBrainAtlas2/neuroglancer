[neuroglancer](../README.md) / [Modules](../modules.md) / [segmentation\_user\_layer](../modules/segmentation_user_layer.md) / SegmentationUserLayerColorGroupState

# Class: SegmentationUserLayerColorGroupState

[segmentation_user_layer](../modules/segmentation_user_layer.md).SegmentationUserLayerColorGroupState

## Hierarchy

- `RefCounted`

  ↳ **`SegmentationUserLayerColorGroupState`**

## Implements

- `SegmentationColorGroupState`

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

RefCounted.constructor

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:168](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/segmentation_user_layer.ts#L168)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

RefCounted.disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L52)

___

### layer

• **layer**: [`SegmentationUserLayer`](segmentation_user_layer.SegmentationUserLayer.md)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

RefCounted.refCount

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L45)

___

### segmentColorHash

• **segmentColorHash**: [`SegmentColorHash`](segment_color.SegmentColorHash.md)

#### Implementation of

SegmentationColorGroupState.segmentColorHash

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:212](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/segmentation_user_layer.ts#L212)

___

### segmentDefaultColor

• **segmentDefaultColor**: `TrackableOptionalRGB`

#### Implementation of

SegmentationColorGroupState.segmentDefaultColor

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:214](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/segmentation_user_layer.ts#L214)

___

### segmentStatedColors

• **segmentStatedColors**: [`Uint64Map`](uint64_map.Uint64Map.md)

#### Implementation of

SegmentationColorGroupState.segmentStatedColors

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:213](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/segmentation_user_layer.ts#L213)

___

### specificationChanged

• **specificationChanged**: `Signal`<() => `void`\>

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:167](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/segmentation_user_layer.ts#L167)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

RefCounted.wasDisposed

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`SegmentationUserLayerColorGroupState`](segmentation_user_layer.SegmentationUserLayerColorGroupState.md)

#### Returns

[`SegmentationUserLayerColorGroupState`](segmentation_user_layer.SegmentationUserLayerColorGroupState.md)

#### Inherited from

RefCounted.addRef

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L48)

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

[src/neuroglancer/segmentation_user_layer.ts:206](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/segmentation_user_layer.ts#L206)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

RefCounted.dispose

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

RefCounted.disposed

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L75)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

RefCounted.refCountReachedZero

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L66)

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

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L100)

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

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L76)

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

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L95)

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

[src/neuroglancer/segmentation_user_layer.ts:176](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/segmentation_user_layer.ts#L176)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/segmentation_user_layer.ts#L192)

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

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L85)
