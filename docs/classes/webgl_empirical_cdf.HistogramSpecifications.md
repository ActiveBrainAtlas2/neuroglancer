[neuroglancer](../README.md) / [Modules](../modules.md) / [webgl/empirical\_cdf](../modules/webgl_empirical_cdf.md) / HistogramSpecifications

# Class: HistogramSpecifications

[webgl/empirical_cdf](../modules/webgl_empirical_cdf.md).HistogramSpecifications

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`HistogramSpecifications`**

## Table of contents

### Constructors

- [constructor](webgl_empirical_cdf.HistogramSpecifications.md#constructor)

### Properties

- [bounds](webgl_empirical_cdf.HistogramSpecifications.md#bounds)
- [channels](webgl_empirical_cdf.HistogramSpecifications.md#channels)
- [disposedStacks](webgl_empirical_cdf.HistogramSpecifications.md#disposedstacks)
- [frameNumber](webgl_empirical_cdf.HistogramSpecifications.md#framenumber)
- [framebuffers](webgl_empirical_cdf.HistogramSpecifications.md#framebuffers)
- [producerVisibility](webgl_empirical_cdf.HistogramSpecifications.md#producervisibility)
- [refCount](webgl_empirical_cdf.HistogramSpecifications.md#refcount)
- [visibility](webgl_empirical_cdf.HistogramSpecifications.md#visibility)
- [wasDisposed](webgl_empirical_cdf.HistogramSpecifications.md#wasdisposed)

### Methods

- [addRef](webgl_empirical_cdf.HistogramSpecifications.md#addref)
- [dispose](webgl_empirical_cdf.HistogramSpecifications.md#dispose)
- [disposed](webgl_empirical_cdf.HistogramSpecifications.md#disposed)
- [getFramebuffers](webgl_empirical_cdf.HistogramSpecifications.md#getframebuffers)
- [refCountReachedZero](webgl_empirical_cdf.HistogramSpecifications.md#refcountreachedzero)
- [registerCancellable](webgl_empirical_cdf.HistogramSpecifications.md#registercancellable)
- [registerDisposer](webgl_empirical_cdf.HistogramSpecifications.md#registerdisposer)
- [registerEventListener](webgl_empirical_cdf.HistogramSpecifications.md#registereventlistener)
- [unregisterDisposer](webgl_empirical_cdf.HistogramSpecifications.md#unregisterdisposer)

## Constructors

### constructor

• **new HistogramSpecifications**(`channels`, `bounds`, `visibility?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `channels` | [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<[`HistogramChannelSpecification`](../interfaces/webgl_empirical_cdf.HistogramChannelSpecification.md)[]\> |
| `bounds` | [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<[`DataTypeInterval`](../modules/util_lerp.md#datatypeinterval)[]\> |
| `visibility` | [`VisibilityPriorityAggregator`](visibility_priority_frontend.VisibilityPriorityAggregator.md) |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/webgl/empirical_cdf.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/empirical_cdf.ts#L49)

## Properties

### bounds

• **bounds**: [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<[`DataTypeInterval`](../modules/util_lerp.md#datatypeinterval)[]\>

___

### channels

• **channels**: [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<[`HistogramChannelSpecification`](../interfaces/webgl_empirical_cdf.HistogramChannelSpecification.md)[]\>

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### frameNumber

• **frameNumber**: `number` = `-1`

#### Defined in

[src/neuroglancer/webgl/empirical_cdf.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/empirical_cdf.ts#L48)

___

### framebuffers

• **framebuffers**: [`FramebufferConfiguration`](webgl_offscreen.FramebufferConfiguration.md)<[`TextureBuffer`](webgl_offscreen.TextureBuffer.md), [`DepthRenderbuffer`](webgl_offscreen.DepthRenderbuffer.md) \| [`DepthTextureBuffer`](webgl_offscreen.DepthTextureBuffer.md)\>[] = `[]`

#### Defined in

[src/neuroglancer/webgl/empirical_cdf.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/empirical_cdf.ts#L46)

___

### producerVisibility

• **producerVisibility**: [`VisibilityPriorityAggregator`](visibility_priority_frontend.VisibilityPriorityAggregator.md)

#### Defined in

[src/neuroglancer/webgl/empirical_cdf.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/empirical_cdf.ts#L47)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### visibility

• **visibility**: [`VisibilityPriorityAggregator`](visibility_priority_frontend.VisibilityPriorityAggregator.md)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`HistogramSpecifications`](webgl_empirical_cdf.HistogramSpecifications.md)

#### Returns

[`HistogramSpecifications`](webgl_empirical_cdf.HistogramSpecifications.md)

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

[src/neuroglancer/webgl/empirical_cdf.ts:69](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/empirical_cdf.ts#L69)

___

### getFramebuffers

▸ **getFramebuffers**(`gl`): [`FramebufferConfiguration`](webgl_offscreen.FramebufferConfiguration.md)<[`TextureBuffer`](webgl_offscreen.TextureBuffer.md), [`DepthRenderbuffer`](webgl_offscreen.DepthRenderbuffer.md) \| [`DepthTextureBuffer`](webgl_offscreen.DepthTextureBuffer.md)\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/webgl_context.GL.md) |

#### Returns

[`FramebufferConfiguration`](webgl_offscreen.FramebufferConfiguration.md)<[`TextureBuffer`](webgl_offscreen.TextureBuffer.md), [`DepthRenderbuffer`](webgl_offscreen.DepthRenderbuffer.md) \| [`DepthTextureBuffer`](webgl_offscreen.DepthTextureBuffer.md)\>[]

#### Defined in

[src/neuroglancer/webgl/empirical_cdf.ts:56](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/empirical_cdf.ts#L56)

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
