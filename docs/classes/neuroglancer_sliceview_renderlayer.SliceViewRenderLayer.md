[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/sliceview/renderlayer](../modules/neuroglancer_sliceview_renderlayer.md) / SliceViewRenderLayer

# Class: SliceViewRenderLayer<Source, SourceOptions\>

[neuroglancer/sliceview/renderlayer](../modules/neuroglancer_sliceview_renderlayer.md).SliceViewRenderLayer

## Type parameters

| Name | Type |
| :------ | :------ |
| `Source` | extends [`SliceViewChunkSource`](neuroglancer_sliceview_frontend.SliceViewChunkSource.md) = [`SliceViewChunkSource`](neuroglancer_sliceview_frontend.SliceViewChunkSource.md) |
| `SourceOptions` | extends [`SliceViewSourceOptions`](../interfaces/neuroglancer_sliceview_base.SliceViewSourceOptions.md) = [`SliceViewSourceOptions`](../interfaces/neuroglancer_sliceview_base.SliceViewSourceOptions.md) |

## Hierarchy

- [`RenderLayer`](neuroglancer_renderlayer.RenderLayer.md)

  ↳ **`SliceViewRenderLayer`**

  ↳↳ [`SliceViewVolumeRenderLayer`](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_sliceview_renderlayer.SliceViewRenderLayer.md#constructor)

### Properties

- [RPC\_TYPE\_ID](neuroglancer_sliceview_renderlayer.SliceViewRenderLayer.md#rpc_type_id)
- [channelCoordinateSpace](neuroglancer_sliceview_renderlayer.SliceViewRenderLayer.md#channelcoordinatespace)
- [chunkManager](neuroglancer_sliceview_renderlayer.SliceViewRenderLayer.md#chunkmanager)
- [dataHistogramSpecifications](neuroglancer_sliceview_renderlayer.SliceViewRenderLayer.md#datahistogramspecifications)
- [disposedStacks](neuroglancer_sliceview_renderlayer.SliceViewRenderLayer.md#disposedstacks)
- [layerChanged](neuroglancer_sliceview_renderlayer.SliceViewRenderLayer.md#layerchanged)
- [layerChunkProgressInfo](neuroglancer_sliceview_renderlayer.SliceViewRenderLayer.md#layerchunkprogressinfo)
- [localPosition](neuroglancer_sliceview_renderlayer.SliceViewRenderLayer.md#localposition)
- [messages](neuroglancer_sliceview_renderlayer.SliceViewRenderLayer.md#messages)
- [multiscaleSource](neuroglancer_sliceview_renderlayer.SliceViewRenderLayer.md#multiscalesource)
- [redrawNeeded](neuroglancer_sliceview_renderlayer.SliceViewRenderLayer.md#redrawneeded)
- [refCount](neuroglancer_sliceview_renderlayer.SliceViewRenderLayer.md#refcount)
- [renderScaleHistogram](neuroglancer_sliceview_renderlayer.SliceViewRenderLayer.md#renderscalehistogram)
- [renderScaleTarget](neuroglancer_sliceview_renderlayer.SliceViewRenderLayer.md#renderscaletarget)
- [role](neuroglancer_sliceview_renderlayer.SliceViewRenderLayer.md#role)
- [rpcId](neuroglancer_sliceview_renderlayer.SliceViewRenderLayer.md#rpcid)
- [transform](neuroglancer_sliceview_renderlayer.SliceViewRenderLayer.md#transform)
- [userLayer](neuroglancer_sliceview_renderlayer.SliceViewRenderLayer.md#userlayer)
- [visibleSources](neuroglancer_sliceview_renderlayer.SliceViewRenderLayer.md#visiblesources)
- [visibleSourcesList\_](neuroglancer_sliceview_renderlayer.SliceViewRenderLayer.md#visiblesourceslist_)
- [wasDisposed](neuroglancer_sliceview_renderlayer.SliceViewRenderLayer.md#wasdisposed)

### Accessors

- [gl](neuroglancer_sliceview_renderlayer.SliceViewRenderLayer.md#gl)
- [visibleSourcesList](neuroglancer_sliceview_renderlayer.SliceViewRenderLayer.md#visiblesourceslist)

### Methods

- [addRef](neuroglancer_sliceview_renderlayer.SliceViewRenderLayer.md#addref)
- [addSource](neuroglancer_sliceview_renderlayer.SliceViewRenderLayer.md#addsource)
- [dispose](neuroglancer_sliceview_renderlayer.SliceViewRenderLayer.md#dispose)
- [disposed](neuroglancer_sliceview_renderlayer.SliceViewRenderLayer.md#disposed)
- [draw](neuroglancer_sliceview_renderlayer.SliceViewRenderLayer.md#draw)
- [filterVisibleSources](neuroglancer_sliceview_renderlayer.SliceViewRenderLayer.md#filtervisiblesources)
- [getDataHistogramCount](neuroglancer_sliceview_renderlayer.SliceViewRenderLayer.md#getdatahistogramcount)
- [getSources](neuroglancer_sliceview_renderlayer.SliceViewRenderLayer.md#getsources)
- [getValueAt](neuroglancer_sliceview_renderlayer.SliceViewRenderLayer.md#getvalueat)
- [handleAction](neuroglancer_sliceview_renderlayer.SliceViewRenderLayer.md#handleaction)
- [initializeCounterpart](neuroglancer_sliceview_renderlayer.SliceViewRenderLayer.md#initializecounterpart)
- [refCountReachedZero](neuroglancer_sliceview_renderlayer.SliceViewRenderLayer.md#refcountreachedzero)
- [registerCancellable](neuroglancer_sliceview_renderlayer.SliceViewRenderLayer.md#registercancellable)
- [registerDisposer](neuroglancer_sliceview_renderlayer.SliceViewRenderLayer.md#registerdisposer)
- [registerEventListener](neuroglancer_sliceview_renderlayer.SliceViewRenderLayer.md#registereventlistener)
- [removeSource](neuroglancer_sliceview_renderlayer.SliceViewRenderLayer.md#removesource)
- [setGLBlendMode](neuroglancer_sliceview_renderlayer.SliceViewRenderLayer.md#setglblendmode)
- [transformPickedValue](neuroglancer_sliceview_renderlayer.SliceViewRenderLayer.md#transformpickedvalue)
- [unregisterDisposer](neuroglancer_sliceview_renderlayer.SliceViewRenderLayer.md#unregisterdisposer)
- [updateMouseState](neuroglancer_sliceview_renderlayer.SliceViewRenderLayer.md#updatemousestate)

## Constructors

### constructor

• **new SliceViewRenderLayer**<`Source`, `SourceOptions`\>(`chunkManager`, `multiscaleSource`, `options`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Source` | extends [`SliceViewChunkSource`](neuroglancer_sliceview_frontend.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/neuroglancer_sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>, [`SliceViewChunk`](neuroglancer_sliceview_frontend.SliceViewChunk.md), `Source`\> = [`SliceViewChunkSource`](neuroglancer_sliceview_frontend.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/neuroglancer_sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>, [`SliceViewChunk`](neuroglancer_sliceview_frontend.SliceViewChunk.md)\> |
| `SourceOptions` | extends [`SliceViewSourceOptions`](../interfaces/neuroglancer_sliceview_base.SliceViewSourceOptions.md) = [`SliceViewSourceOptions`](../interfaces/neuroglancer_sliceview_base.SliceViewSourceOptions.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkManager` | [`ChunkManager`](neuroglancer_chunk_manager_frontend.ChunkManager.md) |
| `multiscaleSource` | [`MultiscaleSliceViewChunkSource`](neuroglancer_sliceview_frontend.MultiscaleSliceViewChunkSource.md)<`Source`, `SourceOptions`\> |
| `options` | [`SliceViewRenderLayerOptions`](../interfaces/neuroglancer_sliceview_renderlayer.SliceViewRenderLayerOptions.md) |

#### Overrides

[RenderLayer](neuroglancer_renderlayer.RenderLayer.md).[constructor](neuroglancer_renderlayer.RenderLayer.md#constructor)

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:140](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/renderlayer.ts#L140)

## Properties

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:158](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/renderlayer.ts#L158)

___

### channelCoordinateSpace

• **channelCoordinateSpace**: [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<[`CoordinateSpace`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpace.md)\>

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:68](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/renderlayer.ts#L68)

___

### chunkManager

• **chunkManager**: [`ChunkManager`](neuroglancer_chunk_manager_frontend.ChunkManager.md)

___

### dataHistogramSpecifications

• **dataHistogramSpecifications**: [`HistogramSpecifications`](neuroglancer_webgl_empirical_cdf.HistogramSpecifications.md)

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:77](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/renderlayer.ts#L77)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RenderLayer](neuroglancer_renderlayer.RenderLayer.md).[disposedStacks](neuroglancer_renderlayer.RenderLayer.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### layerChanged

• **layerChanged**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Inherited from

[RenderLayer](neuroglancer_renderlayer.RenderLayer.md).[layerChanged](neuroglancer_renderlayer.RenderLayer.md#layerchanged)

#### Defined in

[src/neuroglancer/renderlayer.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L50)

___

### layerChunkProgressInfo

• **layerChunkProgressInfo**: [`LayerChunkProgressInfo`](neuroglancer_chunk_manager_base.LayerChunkProgressInfo.md)

#### Inherited from

[RenderLayer](neuroglancer_renderlayer.RenderLayer.md).[layerChunkProgressInfo](neuroglancer_renderlayer.RenderLayer.md#layerchunkprogressinfo)

#### Defined in

[src/neuroglancer/renderlayer.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L52)

___

### localPosition

• **localPosition**: [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<`Float32Array`\>

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:67](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/renderlayer.ts#L67)

___

### messages

• **messages**: [`MessageList`](neuroglancer_util_message_list.MessageList.md)

#### Inherited from

[RenderLayer](neuroglancer_renderlayer.RenderLayer.md).[messages](neuroglancer_renderlayer.RenderLayer.md#messages)

#### Defined in

[src/neuroglancer/renderlayer.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L49)

___

### multiscaleSource

• **multiscaleSource**: [`MultiscaleSliceViewChunkSource`](neuroglancer_sliceview_frontend.MultiscaleSliceViewChunkSource.md)<`Source`, `SourceOptions`\>

___

### redrawNeeded

• **redrawNeeded**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Inherited from

[RenderLayer](neuroglancer_renderlayer.RenderLayer.md).[redrawNeeded](neuroglancer_renderlayer.RenderLayer.md#redrawneeded)

#### Defined in

[src/neuroglancer/renderlayer.ts:51](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L51)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RenderLayer](neuroglancer_renderlayer.RenderLayer.md).[refCount](neuroglancer_renderlayer.RenderLayer.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### renderScaleHistogram

• `Optional` **renderScaleHistogram**: [`RenderScaleHistogram`](neuroglancer_render_scale_statistics.RenderScaleHistogram.md)

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:72](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/renderlayer.ts#L72)

___

### renderScaleTarget

• **renderScaleTarget**: [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<`number`\>

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:71](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/renderlayer.ts#L71)

___

### role

• **role**: [`RenderLayerRole`](../enums/neuroglancer_renderlayer.RenderLayerRole.md) = `RenderLayerRole.DATA`

#### Inherited from

[RenderLayer](neuroglancer_renderlayer.RenderLayer.md).[role](neuroglancer_renderlayer.RenderLayer.md#role)

#### Defined in

[src/neuroglancer/renderlayer.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L48)

___

### rpcId

• **rpcId**: ``null`` \| `number` = `null`

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:65](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/renderlayer.ts#L65)

___

### transform

• **transform**: [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<[`RenderLayerTransformOrError`](../modules/neuroglancer_render_coordinate_transform.md#renderlayertransformorerror)\>

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:69](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/renderlayer.ts#L69)

___

### userLayer

• **userLayer**: `undefined` \| [`UserLayer`](neuroglancer_layer.UserLayer.md)

#### Inherited from

[RenderLayer](neuroglancer_renderlayer.RenderLayer.md).[userLayer](neuroglancer_renderlayer.RenderLayer.md#userlayer)

#### Defined in

[src/neuroglancer/renderlayer.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L47)

___

### visibleSources

• `Private` **visibleSources**: `Map`<`Source`, [`VisibleSourceInfo`](../interfaces/neuroglancer_sliceview_renderlayer.VisibleSourceInfo.md)<`Source`\>\>

Currently visible sources for this render layer.

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:88](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/renderlayer.ts#L88)

___

### visibleSourcesList\_

• `Private` **visibleSourcesList\_**: [`VisibleSourceInfo`](../interfaces/neuroglancer_sliceview_renderlayer.VisibleSourceInfo.md)<`Source`\>[] = `[]`

Cached list of sources in `visibleSources`, ordered by voxel size.

Truncated to zero length when `visibleSources` changes to indicate that it is invalid.

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/renderlayer.ts#L95)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RenderLayer](neuroglancer_renderlayer.RenderLayer.md).[wasDisposed](neuroglancer_renderlayer.RenderLayer.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### gl

• `get` **gl**(): [`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

#### Returns

[`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:176](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/renderlayer.ts#L176)

___

### visibleSourcesList

• `get` **visibleSourcesList**(): [`VisibleSourceInfo`](../interfaces/neuroglancer_sliceview_renderlayer.VisibleSourceInfo.md)<`Source`\>[]

#### Returns

[`VisibleSourceInfo`](../interfaces/neuroglancer_sliceview_renderlayer.VisibleSourceInfo.md)<`Source`\>[]

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:124](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/renderlayer.ts#L124)

## Methods

### addRef

▸ **addRef**(): [`SliceViewRenderLayer`](neuroglancer_sliceview_renderlayer.SliceViewRenderLayer.md)<`Source`, `SourceOptions`\>

#### Returns

[`SliceViewRenderLayer`](neuroglancer_sliceview_renderlayer.SliceViewRenderLayer.md)<`Source`, `SourceOptions`\>

#### Inherited from

[RenderLayer](neuroglancer_renderlayer.RenderLayer.md).[addRef](neuroglancer_renderlayer.RenderLayer.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L48)

___

### addSource

▸ **addSource**(`source`, `chunkTransform`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Source` |
| `chunkTransform` | [`ChunkTransformParameters`](../interfaces/neuroglancer_render_coordinate_transform.ChunkTransformParameters.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:101](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/renderlayer.ts#L101)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RenderLayer](neuroglancer_renderlayer.RenderLayer.md).[dispose](neuroglancer_renderlayer.RenderLayer.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[RenderLayer](neuroglancer_renderlayer.RenderLayer.md).[disposed](neuroglancer_renderlayer.RenderLayer.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L75)

___

### draw

▸ `Abstract` **draw**(`renderContext`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderContext` | [`SliceViewRenderContext`](../interfaces/neuroglancer_sliceview_renderlayer.SliceViewRenderContext.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:190](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/renderlayer.ts#L190)

___

### filterVisibleSources

▸ **filterVisibleSources**(`sliceView`, `sources`): [`Iterable`](../interfaces/main_module._internal_.Iterable.md)<[`TransformedSource`](../interfaces/neuroglancer_sliceview_base.TransformedSource.md)<[`SliceViewRenderLayer`](../interfaces/neuroglancer_sliceview_base.SliceViewRenderLayer.md), [`SliceViewChunkSource`](../interfaces/neuroglancer_sliceview_base.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/neuroglancer_sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sliceView` | [`SliceViewBase`](neuroglancer_sliceview_base.SliceViewBase.md)<[`SliceViewChunkSource`](../interfaces/neuroglancer_sliceview_base.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/neuroglancer_sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>\>, [`SliceViewRenderLayer`](../interfaces/neuroglancer_sliceview_base.SliceViewRenderLayer.md), [`TransformedSource`](../interfaces/neuroglancer_sliceview_base.TransformedSource.md)<[`SliceViewRenderLayer`](../interfaces/neuroglancer_sliceview_base.SliceViewRenderLayer.md), [`SliceViewChunkSource`](../interfaces/neuroglancer_sliceview_base.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/neuroglancer_sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>\>\>\> |
| `sources` | readonly [`TransformedSource`](../interfaces/neuroglancer_sliceview_base.TransformedSource.md)<[`SliceViewRenderLayer`](../interfaces/neuroglancer_sliceview_base.SliceViewRenderLayer.md), [`SliceViewChunkSource`](../interfaces/neuroglancer_sliceview_base.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/neuroglancer_sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>\>\>[] |

#### Returns

[`Iterable`](../interfaces/main_module._internal_.Iterable.md)<[`TransformedSource`](../interfaces/neuroglancer_sliceview_base.TransformedSource.md)<[`SliceViewRenderLayer`](../interfaces/neuroglancer_sliceview_base.SliceViewRenderLayer.md), [`SliceViewChunkSource`](../interfaces/neuroglancer_sliceview_base.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/neuroglancer_sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>\>\>\>

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/renderlayer.ts#L192)

___

### getDataHistogramCount

▸ **getDataHistogramCount**(): `number`

#### Returns

`number`

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:79](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/renderlayer.ts#L79)

___

### getSources

▸ **getSources**(`options`): [`SliceViewSingleResolutionSource`](../interfaces/neuroglancer_sliceview_frontend.SliceViewSingleResolutionSource.md)<`Source`\>[][]

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`SliceViewSourceOptions`](../interfaces/neuroglancer_sliceview_base.SliceViewSourceOptions.md) |

#### Returns

[`SliceViewSingleResolutionSource`](../interfaces/neuroglancer_sliceview_frontend.SliceViewSingleResolutionSource.md)<`Source`\>[][]

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:97](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/renderlayer.ts#L97)

___

### getValueAt

▸ **getValueAt**(`_x`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_x` | `Float32Array` |

#### Returns

`any`

#### Inherited from

[RenderLayer](neuroglancer_renderlayer.RenderLayer.md).[getValueAt](neuroglancer_renderlayer.RenderLayer.md#getvalueat)

#### Defined in

[src/neuroglancer/renderlayer.ts:58](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L58)

___

### handleAction

▸ **handleAction**(`_action`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_action` | `string` |

#### Returns

`void`

#### Inherited from

[RenderLayer](neuroglancer_renderlayer.RenderLayer.md).[handleAction](neuroglancer_renderlayer.RenderLayer.md#handleaction)

#### Defined in

[src/neuroglancer/renderlayer.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L54)

___

### initializeCounterpart

▸ **initializeCounterpart**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:160](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/renderlayer.ts#L160)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RenderLayer](neuroglancer_renderlayer.RenderLayer.md).[refCountReachedZero](neuroglancer_renderlayer.RenderLayer.md#refcountreachedzero)

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

[RenderLayer](neuroglancer_renderlayer.RenderLayer.md).[registerCancellable](neuroglancer_renderlayer.RenderLayer.md#registercancellable)

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

[RenderLayer](neuroglancer_renderlayer.RenderLayer.md).[registerDisposer](neuroglancer_renderlayer.RenderLayer.md#registerdisposer)

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

[RenderLayer](neuroglancer_renderlayer.RenderLayer.md).[registerEventListener](neuroglancer_renderlayer.RenderLayer.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L95)

___

### removeSource

▸ **removeSource**(`source`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Source` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:113](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/renderlayer.ts#L113)

___

### setGLBlendMode

▸ **setGLBlendMode**(`gl`, `renderLayerNum`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`WebGL2RenderingContext`](../modules/main_module._internal_.md#webgl2renderingcontext) |
| `renderLayerNum` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:180](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/renderlayer.ts#L180)

___

### transformPickedValue

▸ **transformPickedValue**(`pickState`): `any`

Transform the stored pickedValue and offset associated with the retrieved pick ID into the
actual value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `pickState` | [`PickState`](../interfaces/neuroglancer_layer.PickState.md) |

#### Returns

`any`

#### Inherited from

[RenderLayer](neuroglancer_renderlayer.RenderLayer.md).[transformPickedValue](neuroglancer_renderlayer.RenderLayer.md#transformpickedvalue)

#### Defined in

[src/neuroglancer/renderlayer.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L66)

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

[RenderLayer](neuroglancer_renderlayer.RenderLayer.md).[unregisterDisposer](neuroglancer_renderlayer.RenderLayer.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L85)

___

### updateMouseState

▸ **updateMouseState**(`_mouseState`, `_pickedValue`, `_pickedOffset`, `_data`): `void`

Optionally updates the mouse state based on the retrived pick information.  This might snap the
3-d position to the center of the picked point.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_mouseState` | [`MouseSelectionState`](neuroglancer_layer.MouseSelectionState.md) |
| `_pickedValue` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |
| `_pickedOffset` | `number` |
| `_data` | `any` |

#### Returns

`void`

#### Inherited from

[RenderLayer](neuroglancer_renderlayer.RenderLayer.md).[updateMouseState](neuroglancer_renderlayer.RenderLayer.md#updatemousestate)

#### Defined in

[src/neuroglancer/renderlayer.ts:74](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L74)
