[neuroglancer](../README.md) / [Modules](../modules.md) / [data\_panel\_layout](../modules/data_panel_layout.md) / [<internal\>](../modules/data_panel_layout._internal_.md) / HistogramSpecifications

# Class: HistogramSpecifications

[data_panel_layout](../modules/data_panel_layout.md).[<internal>](../modules/data_panel_layout._internal_.md).HistogramSpecifications

## Hierarchy

- [`RefCounted`](axes_lines._internal_.RefCounted.md)

  ↳ **`HistogramSpecifications`**

## Table of contents

### Constructors

- [constructor](data_panel_layout._internal_.HistogramSpecifications.md#constructor)

### Properties

- [bounds](data_panel_layout._internal_.HistogramSpecifications.md#bounds)
- [channels](data_panel_layout._internal_.HistogramSpecifications.md#channels)
- [disposedStacks](data_panel_layout._internal_.HistogramSpecifications.md#disposedstacks)
- [frameNumber](data_panel_layout._internal_.HistogramSpecifications.md#framenumber)
- [framebuffers](data_panel_layout._internal_.HistogramSpecifications.md#framebuffers)
- [producerVisibility](data_panel_layout._internal_.HistogramSpecifications.md#producervisibility)
- [refCount](data_panel_layout._internal_.HistogramSpecifications.md#refcount)
- [visibility](data_panel_layout._internal_.HistogramSpecifications.md#visibility)
- [wasDisposed](data_panel_layout._internal_.HistogramSpecifications.md#wasdisposed)

### Methods

- [addRef](data_panel_layout._internal_.HistogramSpecifications.md#addref)
- [dispose](data_panel_layout._internal_.HistogramSpecifications.md#dispose)
- [disposed](data_panel_layout._internal_.HistogramSpecifications.md#disposed)
- [getFramebuffers](data_panel_layout._internal_.HistogramSpecifications.md#getframebuffers)
- [refCountReachedZero](data_panel_layout._internal_.HistogramSpecifications.md#refcountreachedzero)
- [registerCancellable](data_panel_layout._internal_.HistogramSpecifications.md#registercancellable)
- [registerDisposer](data_panel_layout._internal_.HistogramSpecifications.md#registerdisposer)
- [registerEventListener](data_panel_layout._internal_.HistogramSpecifications.md#registereventlistener)
- [unregisterDisposer](data_panel_layout._internal_.HistogramSpecifications.md#unregisterdisposer)

## Constructors

### constructor

• **new HistogramSpecifications**(`channels`, `bounds`, `visibility?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `channels` | [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<[`HistogramChannelSpecification`](../interfaces/data_panel_layout._internal_.HistogramChannelSpecification.md)[]\> |
| `bounds` | [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<[`DataTypeInterval`](../modules/data_panel_layout._internal_.md#datatypeinterval)[]\> |
| `visibility` | [`VisibilityPriorityAggregator`](data_panel_layout._internal_.VisibilityPriorityAggregator.md) |

#### Overrides

[RefCounted](axes_lines._internal_.RefCounted.md).[constructor](axes_lines._internal_.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/webgl/empirical_cdf.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/empirical_cdf.ts#L49)

## Properties

### bounds

• **bounds**: [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<[`DataTypeInterval`](../modules/data_panel_layout._internal_.md#datatypeinterval)[]\>

___

### channels

• **channels**: [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<[`HistogramChannelSpecification`](../interfaces/data_panel_layout._internal_.HistogramChannelSpecification.md)[]\>

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[disposedStacks](axes_lines._internal_.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L52)

___

### frameNumber

• **frameNumber**: `number` = `-1`

#### Defined in

[src/neuroglancer/webgl/empirical_cdf.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/empirical_cdf.ts#L48)

___

### framebuffers

• **framebuffers**: [`FramebufferConfiguration`](data_panel_layout._internal_.FramebufferConfiguration.md)<[`TextureBuffer`](data_panel_layout._internal_.TextureBuffer.md), [`DepthRenderbuffer`](data_panel_layout._internal_.DepthRenderbuffer.md) \| [`DepthTextureBuffer`](data_panel_layout._internal_.DepthTextureBuffer.md)\>[] = `[]`

#### Defined in

[src/neuroglancer/webgl/empirical_cdf.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/empirical_cdf.ts#L46)

___

### producerVisibility

• **producerVisibility**: [`VisibilityPriorityAggregator`](data_panel_layout._internal_.VisibilityPriorityAggregator.md)

#### Defined in

[src/neuroglancer/webgl/empirical_cdf.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/empirical_cdf.ts#L47)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[refCount](axes_lines._internal_.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L45)

___

### visibility

• **visibility**: [`VisibilityPriorityAggregator`](data_panel_layout._internal_.VisibilityPriorityAggregator.md)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[wasDisposed](axes_lines._internal_.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`HistogramSpecifications`](data_panel_layout._internal_.HistogramSpecifications.md)

#### Returns

[`HistogramSpecifications`](data_panel_layout._internal_.HistogramSpecifications.md)

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[addRef](axes_lines._internal_.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L48)

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

#### Overrides

[RefCounted](axes_lines._internal_.RefCounted.md).[disposed](axes_lines._internal_.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/webgl/empirical_cdf.ts:69](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/empirical_cdf.ts#L69)

___

### getFramebuffers

▸ **getFramebuffers**(`gl`): [`FramebufferConfiguration`](data_panel_layout._internal_.FramebufferConfiguration.md)<[`TextureBuffer`](data_panel_layout._internal_.TextureBuffer.md), [`DepthRenderbuffer`](data_panel_layout._internal_.DepthRenderbuffer.md) \| [`DepthTextureBuffer`](data_panel_layout._internal_.DepthTextureBuffer.md)\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/axes_lines._internal_.GL.md) |

#### Returns

[`FramebufferConfiguration`](data_panel_layout._internal_.FramebufferConfiguration.md)<[`TextureBuffer`](data_panel_layout._internal_.TextureBuffer.md), [`DepthRenderbuffer`](data_panel_layout._internal_.DepthRenderbuffer.md) \| [`DepthTextureBuffer`](data_panel_layout._internal_.DepthTextureBuffer.md)\>[]

#### Defined in

[src/neuroglancer/webgl/empirical_cdf.ts:56](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/empirical_cdf.ts#L56)

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
