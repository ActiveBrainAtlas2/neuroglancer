[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/webgl/empirical\_cdf](../modules/neuroglancer_webgl_empirical_cdf.md) / HistogramSpecifications

# Class: HistogramSpecifications

[neuroglancer/webgl/empirical_cdf](../modules/neuroglancer_webgl_empirical_cdf.md).HistogramSpecifications

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`HistogramSpecifications`**

## Table of contents

### Constructors

- [constructor](neuroglancer_webgl_empirical_cdf.HistogramSpecifications.md#constructor)

### Properties

- [bounds](neuroglancer_webgl_empirical_cdf.HistogramSpecifications.md#bounds)
- [channels](neuroglancer_webgl_empirical_cdf.HistogramSpecifications.md#channels)
- [disposedStacks](neuroglancer_webgl_empirical_cdf.HistogramSpecifications.md#disposedstacks)
- [frameNumber](neuroglancer_webgl_empirical_cdf.HistogramSpecifications.md#framenumber)
- [framebuffers](neuroglancer_webgl_empirical_cdf.HistogramSpecifications.md#framebuffers)
- [producerVisibility](neuroglancer_webgl_empirical_cdf.HistogramSpecifications.md#producervisibility)
- [refCount](neuroglancer_webgl_empirical_cdf.HistogramSpecifications.md#refcount)
- [visibility](neuroglancer_webgl_empirical_cdf.HistogramSpecifications.md#visibility)
- [wasDisposed](neuroglancer_webgl_empirical_cdf.HistogramSpecifications.md#wasdisposed)

### Methods

- [addRef](neuroglancer_webgl_empirical_cdf.HistogramSpecifications.md#addref)
- [dispose](neuroglancer_webgl_empirical_cdf.HistogramSpecifications.md#dispose)
- [disposed](neuroglancer_webgl_empirical_cdf.HistogramSpecifications.md#disposed)
- [getFramebuffers](neuroglancer_webgl_empirical_cdf.HistogramSpecifications.md#getframebuffers)
- [refCountReachedZero](neuroglancer_webgl_empirical_cdf.HistogramSpecifications.md#refcountreachedzero)
- [registerCancellable](neuroglancer_webgl_empirical_cdf.HistogramSpecifications.md#registercancellable)
- [registerDisposer](neuroglancer_webgl_empirical_cdf.HistogramSpecifications.md#registerdisposer)
- [registerEventListener](neuroglancer_webgl_empirical_cdf.HistogramSpecifications.md#registereventlistener)
- [unregisterDisposer](neuroglancer_webgl_empirical_cdf.HistogramSpecifications.md#unregisterdisposer)

## Constructors

### constructor

• **new HistogramSpecifications**(`channels`, `bounds`, `visibility?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `channels` | [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<[`HistogramChannelSpecification`](../interfaces/neuroglancer_webgl_empirical_cdf.HistogramChannelSpecification.md)[]\> |
| `bounds` | [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<[`DataTypeInterval`](../modules/neuroglancer_util_lerp.md#datatypeinterval)[]\> |
| `visibility` | [`VisibilityPriorityAggregator`](neuroglancer_visibility_priority_frontend.VisibilityPriorityAggregator.md) |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/webgl/empirical_cdf.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/empirical_cdf.ts#L49)

## Properties

### bounds

• **bounds**: [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<[`DataTypeInterval`](../modules/neuroglancer_util_lerp.md#datatypeinterval)[]\>

___

### channels

• **channels**: [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<[`HistogramChannelSpecification`](../interfaces/neuroglancer_webgl_empirical_cdf.HistogramChannelSpecification.md)[]\>

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### frameNumber

• **frameNumber**: `number` = `-1`

#### Defined in

[src/neuroglancer/webgl/empirical_cdf.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/empirical_cdf.ts#L48)

___

### framebuffers

• **framebuffers**: [`FramebufferConfiguration`](neuroglancer_webgl_offscreen.FramebufferConfiguration.md)<[`TextureBuffer`](neuroglancer_webgl_offscreen.TextureBuffer.md), [`DepthRenderbuffer`](neuroglancer_webgl_offscreen.DepthRenderbuffer.md) \| [`DepthTextureBuffer`](neuroglancer_webgl_offscreen.DepthTextureBuffer.md)\>[] = `[]`

#### Defined in

[src/neuroglancer/webgl/empirical_cdf.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/empirical_cdf.ts#L46)

___

### producerVisibility

• **producerVisibility**: [`VisibilityPriorityAggregator`](neuroglancer_visibility_priority_frontend.VisibilityPriorityAggregator.md)

#### Defined in

[src/neuroglancer/webgl/empirical_cdf.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/empirical_cdf.ts#L47)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### visibility

• **visibility**: [`VisibilityPriorityAggregator`](neuroglancer_visibility_priority_frontend.VisibilityPriorityAggregator.md)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`HistogramSpecifications`](neuroglancer_webgl_empirical_cdf.HistogramSpecifications.md)

#### Returns

[`HistogramSpecifications`](neuroglancer_webgl_empirical_cdf.HistogramSpecifications.md)

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[addRef](neuroglancer_util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L48)

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

[src/neuroglancer/webgl/empirical_cdf.ts:69](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/empirical_cdf.ts#L69)

___

### getFramebuffers

▸ **getFramebuffers**(`gl`): [`FramebufferConfiguration`](neuroglancer_webgl_offscreen.FramebufferConfiguration.md)<[`TextureBuffer`](neuroglancer_webgl_offscreen.TextureBuffer.md), [`DepthRenderbuffer`](neuroglancer_webgl_offscreen.DepthRenderbuffer.md) \| [`DepthTextureBuffer`](neuroglancer_webgl_offscreen.DepthTextureBuffer.md)\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |

#### Returns

[`FramebufferConfiguration`](neuroglancer_webgl_offscreen.FramebufferConfiguration.md)<[`TextureBuffer`](neuroglancer_webgl_offscreen.TextureBuffer.md), [`DepthRenderbuffer`](neuroglancer_webgl_offscreen.DepthRenderbuffer.md) \| [`DepthTextureBuffer`](neuroglancer_webgl_offscreen.DepthTextureBuffer.md)\>[]

#### Defined in

[src/neuroglancer/webgl/empirical_cdf.ts:56](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/empirical_cdf.ts#L56)

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
