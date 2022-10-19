[neuroglancer](../README.md) / [Modules](../modules.md) / [segmentation\_display\_state/frontend](../modules/segmentation_display_state_frontend.md) / [<internal\>](../modules/segmentation_display_state_frontend._internal_.md) / SegmentationUserLayerColorGroupState

# Class: SegmentationUserLayerColorGroupState

[segmentation_display_state/frontend](../modules/segmentation_display_state_frontend.md).[<internal>](../modules/segmentation_display_state_frontend._internal_.md).SegmentationUserLayerColorGroupState

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`SegmentationUserLayerColorGroupState`**

## Implements

- [`SegmentationColorGroupState`](../interfaces/segmentation_display_state_frontend.SegmentationColorGroupState.md)

## Table of contents

### Constructors

- [constructor](segmentation_display_state_frontend._internal_.SegmentationUserLayerColorGroupState.md#constructor)

### Properties

- [disposedStacks](segmentation_display_state_frontend._internal_.SegmentationUserLayerColorGroupState.md#disposedstacks)
- [layer](segmentation_display_state_frontend._internal_.SegmentationUserLayerColorGroupState.md#layer)
- [refCount](segmentation_display_state_frontend._internal_.SegmentationUserLayerColorGroupState.md#refcount)
- [segmentColorHash](segmentation_display_state_frontend._internal_.SegmentationUserLayerColorGroupState.md#segmentcolorhash)
- [segmentDefaultColor](segmentation_display_state_frontend._internal_.SegmentationUserLayerColorGroupState.md#segmentdefaultcolor)
- [segmentStatedColors](segmentation_display_state_frontend._internal_.SegmentationUserLayerColorGroupState.md#segmentstatedcolors)
- [specificationChanged](segmentation_display_state_frontend._internal_.SegmentationUserLayerColorGroupState.md#specificationchanged)
- [wasDisposed](segmentation_display_state_frontend._internal_.SegmentationUserLayerColorGroupState.md#wasdisposed)

### Methods

- [addRef](segmentation_display_state_frontend._internal_.SegmentationUserLayerColorGroupState.md#addref)
- [assignFrom](segmentation_display_state_frontend._internal_.SegmentationUserLayerColorGroupState.md#assignfrom)
- [dispose](segmentation_display_state_frontend._internal_.SegmentationUserLayerColorGroupState.md#dispose)
- [disposed](segmentation_display_state_frontend._internal_.SegmentationUserLayerColorGroupState.md#disposed)
- [refCountReachedZero](segmentation_display_state_frontend._internal_.SegmentationUserLayerColorGroupState.md#refcountreachedzero)
- [registerCancellable](segmentation_display_state_frontend._internal_.SegmentationUserLayerColorGroupState.md#registercancellable)
- [registerDisposer](segmentation_display_state_frontend._internal_.SegmentationUserLayerColorGroupState.md#registerdisposer)
- [registerEventListener](segmentation_display_state_frontend._internal_.SegmentationUserLayerColorGroupState.md#registereventlistener)
- [restoreState](segmentation_display_state_frontend._internal_.SegmentationUserLayerColorGroupState.md#restorestate)
- [toJSON](segmentation_display_state_frontend._internal_.SegmentationUserLayerColorGroupState.md#tojson)
- [unregisterDisposer](segmentation_display_state_frontend._internal_.SegmentationUserLayerColorGroupState.md#unregisterdisposer)

## Constructors

### constructor

• **new SegmentationUserLayerColorGroupState**(`layer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`SegmentationUserLayer`](segmentation_display_state_frontend._internal_.SegmentationUserLayer.md) |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:168](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_user_layer.ts#L168)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### layer

• **layer**: [`SegmentationUserLayer`](segmentation_display_state_frontend._internal_.SegmentationUserLayer.md)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### segmentColorHash

• **segmentColorHash**: [`SegmentColorHash`](segmentation_display_state_frontend._internal_.SegmentColorHash.md)

#### Implementation of

[SegmentationColorGroupState](../interfaces/segmentation_display_state_frontend.SegmentationColorGroupState.md).[segmentColorHash](../interfaces/segmentation_display_state_frontend.SegmentationColorGroupState.md#segmentcolorhash)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:212](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_user_layer.ts#L212)

___

### segmentDefaultColor

• **segmentDefaultColor**: [`TrackableOptionalRGB`](util_color.TrackableOptionalRGB.md)

#### Implementation of

[SegmentationColorGroupState](../interfaces/segmentation_display_state_frontend.SegmentationColorGroupState.md).[segmentDefaultColor](../interfaces/segmentation_display_state_frontend.SegmentationColorGroupState.md#segmentdefaultcolor)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:214](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_user_layer.ts#L214)

___

### segmentStatedColors

• **segmentStatedColors**: [`Uint64Map`](mesh_frontend._internal_.Uint64Map.md)

#### Implementation of

[SegmentationColorGroupState](../interfaces/segmentation_display_state_frontend.SegmentationColorGroupState.md).[segmentStatedColors](../interfaces/segmentation_display_state_frontend.SegmentationColorGroupState.md#segmentstatedcolors)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:213](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_user_layer.ts#L213)

___

### specificationChanged

• **specificationChanged**: [`Signal`](util_signal.Signal.md)<() => `void`\>

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:167](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_user_layer.ts#L167)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`SegmentationUserLayerColorGroupState`](segmentation_display_state_frontend._internal_.SegmentationUserLayerColorGroupState.md)

#### Returns

[`SegmentationUserLayerColorGroupState`](segmentation_display_state_frontend._internal_.SegmentationUserLayerColorGroupState.md)

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[addRef](util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### assignFrom

▸ **assignFrom**(`other`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`SegmentationUserLayerColorGroupState`](segmentation_display_state_frontend._internal_.SegmentationUserLayerColorGroupState.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:206](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_user_layer.ts#L206)

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

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposed](util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L75)

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

### restoreState

▸ **restoreState**(`specification`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `specification` | `unknown` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:176](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_user_layer.ts#L176)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_user_layer.ts#L192)

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
