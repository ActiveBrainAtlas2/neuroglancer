[neuroglancer](../README.md) / [Modules](../modules.md) / [sliceview/renderlayer](../modules/sliceview_renderlayer.md) / SliceViewRenderLayer

# Class: SliceViewRenderLayer<Source, SourceOptions\>

[sliceview/renderlayer](../modules/sliceview_renderlayer.md).SliceViewRenderLayer

## Type parameters

| Name | Type |
| :------ | :------ |
| `Source` | extends [`SliceViewChunkSource`](sliceview_frontend.SliceViewChunkSource.md) = [`SliceViewChunkSource`](sliceview_frontend.SliceViewChunkSource.md) |
| `SourceOptions` | extends [`SliceViewSourceOptions`](../interfaces/sliceview_base.SliceViewSourceOptions.md) = [`SliceViewSourceOptions`](../interfaces/sliceview_base.SliceViewSourceOptions.md) |

## Hierarchy

- [`RenderLayer`](annotation_annotation_layer_state._internal_.RenderLayer.md)

  ↳ **`SliceViewRenderLayer`**

## Table of contents

### Constructors

- [constructor](sliceview_renderlayer.SliceViewRenderLayer.md#constructor)

### Properties

- [RPC\_TYPE\_ID](sliceview_renderlayer.SliceViewRenderLayer.md#rpc_type_id)
- [channelCoordinateSpace](sliceview_renderlayer.SliceViewRenderLayer.md#channelcoordinatespace)
- [chunkManager](sliceview_renderlayer.SliceViewRenderLayer.md#chunkmanager)
- [dataHistogramSpecifications](sliceview_renderlayer.SliceViewRenderLayer.md#datahistogramspecifications)
- [disposedStacks](sliceview_renderlayer.SliceViewRenderLayer.md#disposedstacks)
- [layerChanged](sliceview_renderlayer.SliceViewRenderLayer.md#layerchanged)
- [layerChunkProgressInfo](sliceview_renderlayer.SliceViewRenderLayer.md#layerchunkprogressinfo)
- [localPosition](sliceview_renderlayer.SliceViewRenderLayer.md#localposition)
- [messages](sliceview_renderlayer.SliceViewRenderLayer.md#messages)
- [multiscaleSource](sliceview_renderlayer.SliceViewRenderLayer.md#multiscalesource)
- [redrawNeeded](sliceview_renderlayer.SliceViewRenderLayer.md#redrawneeded)
- [refCount](sliceview_renderlayer.SliceViewRenderLayer.md#refcount)
- [renderScaleHistogram](sliceview_renderlayer.SliceViewRenderLayer.md#renderscalehistogram)
- [renderScaleTarget](sliceview_renderlayer.SliceViewRenderLayer.md#renderscaletarget)
- [role](sliceview_renderlayer.SliceViewRenderLayer.md#role)
- [rpcId](sliceview_renderlayer.SliceViewRenderLayer.md#rpcid)
- [transform](sliceview_renderlayer.SliceViewRenderLayer.md#transform)
- [userLayer](sliceview_renderlayer.SliceViewRenderLayer.md#userlayer)
- [visibleSources](sliceview_renderlayer.SliceViewRenderLayer.md#visiblesources)
- [visibleSourcesList\_](sliceview_renderlayer.SliceViewRenderLayer.md#visiblesourceslist_)
- [wasDisposed](sliceview_renderlayer.SliceViewRenderLayer.md#wasdisposed)

### Accessors

- [gl](sliceview_renderlayer.SliceViewRenderLayer.md#gl)
- [visibleSourcesList](sliceview_renderlayer.SliceViewRenderLayer.md#visiblesourceslist)

### Methods

- [addRef](sliceview_renderlayer.SliceViewRenderLayer.md#addref)
- [addSource](sliceview_renderlayer.SliceViewRenderLayer.md#addsource)
- [dispose](sliceview_renderlayer.SliceViewRenderLayer.md#dispose)
- [disposed](sliceview_renderlayer.SliceViewRenderLayer.md#disposed)
- [draw](sliceview_renderlayer.SliceViewRenderLayer.md#draw)
- [filterVisibleSources](sliceview_renderlayer.SliceViewRenderLayer.md#filtervisiblesources)
- [getDataHistogramCount](sliceview_renderlayer.SliceViewRenderLayer.md#getdatahistogramcount)
- [getSources](sliceview_renderlayer.SliceViewRenderLayer.md#getsources)
- [getValueAt](sliceview_renderlayer.SliceViewRenderLayer.md#getvalueat)
- [handleAction](sliceview_renderlayer.SliceViewRenderLayer.md#handleaction)
- [initializeCounterpart](sliceview_renderlayer.SliceViewRenderLayer.md#initializecounterpart)
- [refCountReachedZero](sliceview_renderlayer.SliceViewRenderLayer.md#refcountreachedzero)
- [registerCancellable](sliceview_renderlayer.SliceViewRenderLayer.md#registercancellable)
- [registerDisposer](sliceview_renderlayer.SliceViewRenderLayer.md#registerdisposer)
- [registerEventListener](sliceview_renderlayer.SliceViewRenderLayer.md#registereventlistener)
- [removeSource](sliceview_renderlayer.SliceViewRenderLayer.md#removesource)
- [setGLBlendMode](sliceview_renderlayer.SliceViewRenderLayer.md#setglblendmode)
- [transformPickedValue](sliceview_renderlayer.SliceViewRenderLayer.md#transformpickedvalue)
- [unregisterDisposer](sliceview_renderlayer.SliceViewRenderLayer.md#unregisterdisposer)
- [updateMouseState](sliceview_renderlayer.SliceViewRenderLayer.md#updatemousestate)

## Constructors

### constructor

• **new SliceViewRenderLayer**<`Source`, `SourceOptions`\>(`chunkManager`, `multiscaleSource`, `options`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Source` | extends [`SliceViewChunkSource`](sliceview_frontend.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>, [`SliceViewChunk`](sliceview_frontend.SliceViewChunk.md), `Source`\> = [`SliceViewChunkSource`](sliceview_frontend.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>, [`SliceViewChunk`](sliceview_frontend.SliceViewChunk.md)\> |
| `SourceOptions` | extends [`SliceViewSourceOptions`](../interfaces/sliceview_base.SliceViewSourceOptions.md) = [`SliceViewSourceOptions`](../interfaces/sliceview_base.SliceViewSourceOptions.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkManager` | [`ChunkManager`](chunk_manager_frontend.ChunkManager.md) |
| `multiscaleSource` | [`MultiscaleSliceViewChunkSource`](sliceview_frontend.MultiscaleSliceViewChunkSource.md)<`Source`, `SourceOptions`\> |
| `options` | [`SliceViewRenderLayerOptions`](../interfaces/sliceview_renderlayer.SliceViewRenderLayerOptions.md) |

#### Overrides

[RenderLayer](annotation_annotation_layer_state._internal_.RenderLayer.md).[constructor](annotation_annotation_layer_state._internal_.RenderLayer.md#constructor)

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:140](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/renderlayer.ts#L140)

## Properties

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:158](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/renderlayer.ts#L158)

___

### channelCoordinateSpace

• **channelCoordinateSpace**: [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<[`CoordinateSpace`](../interfaces/annotation_annotation_layer_state._internal_.CoordinateSpace.md)\>

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:68](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/renderlayer.ts#L68)

___

### chunkManager

• **chunkManager**: [`ChunkManager`](chunk_manager_frontend.ChunkManager.md)

___

### dataHistogramSpecifications

• **dataHistogramSpecifications**: [`HistogramSpecifications`](webgl_empirical_cdf.HistogramSpecifications.md)

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:77](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/renderlayer.ts#L77)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RenderLayer](annotation_annotation_layer_state._internal_.RenderLayer.md).[disposedStacks](annotation_annotation_layer_state._internal_.RenderLayer.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### layerChanged

• **layerChanged**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Inherited from

[RenderLayer](annotation_annotation_layer_state._internal_.RenderLayer.md).[layerChanged](annotation_annotation_layer_state._internal_.RenderLayer.md#layerchanged)

#### Defined in

[src/neuroglancer/renderlayer.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L50)

___

### layerChunkProgressInfo

• **layerChunkProgressInfo**: [`LayerChunkProgressInfo`](chunk_manager_base.LayerChunkProgressInfo.md)

#### Inherited from

[RenderLayer](annotation_annotation_layer_state._internal_.RenderLayer.md).[layerChunkProgressInfo](annotation_annotation_layer_state._internal_.RenderLayer.md#layerchunkprogressinfo)

#### Defined in

[src/neuroglancer/renderlayer.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L52)

___

### localPosition

• **localPosition**: [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`Float32Array`\>

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:67](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/renderlayer.ts#L67)

___

### messages

• **messages**: [`MessageList`](util_message_list.MessageList.md)

#### Inherited from

[RenderLayer](annotation_annotation_layer_state._internal_.RenderLayer.md).[messages](annotation_annotation_layer_state._internal_.RenderLayer.md#messages)

#### Defined in

[src/neuroglancer/renderlayer.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L49)

___

### multiscaleSource

• **multiscaleSource**: [`MultiscaleSliceViewChunkSource`](sliceview_frontend.MultiscaleSliceViewChunkSource.md)<`Source`, `SourceOptions`\>

___

### redrawNeeded

• **redrawNeeded**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Inherited from

[RenderLayer](annotation_annotation_layer_state._internal_.RenderLayer.md).[redrawNeeded](annotation_annotation_layer_state._internal_.RenderLayer.md#redrawneeded)

#### Defined in

[src/neuroglancer/renderlayer.ts:51](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L51)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RenderLayer](annotation_annotation_layer_state._internal_.RenderLayer.md).[refCount](annotation_annotation_layer_state._internal_.RenderLayer.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### renderScaleHistogram

• `Optional` **renderScaleHistogram**: [`RenderScaleHistogram`](annotation_renderlayer._internal_.RenderScaleHistogram.md)

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:72](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/renderlayer.ts#L72)

___

### renderScaleTarget

• **renderScaleTarget**: [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`number`\>

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:71](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/renderlayer.ts#L71)

___

### role

• **role**: [`RenderLayerRole`](../enums/annotation_annotation_layer_state._internal_.RenderLayerRole.md) = `RenderLayerRole.DATA`

#### Inherited from

[RenderLayer](annotation_annotation_layer_state._internal_.RenderLayer.md).[role](annotation_annotation_layer_state._internal_.RenderLayer.md#role)

#### Defined in

[src/neuroglancer/renderlayer.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L48)

___

### rpcId

• **rpcId**: ``null`` \| `number` = `null`

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:65](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/renderlayer.ts#L65)

___

### transform

• **transform**: [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<[`RenderLayerTransformOrError`](../modules/annotation_annotation_layer_state._internal_.md#renderlayertransformorerror)\>

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:69](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/renderlayer.ts#L69)

___

### userLayer

• **userLayer**: `undefined` \| [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)

#### Inherited from

[RenderLayer](annotation_annotation_layer_state._internal_.RenderLayer.md).[userLayer](annotation_annotation_layer_state._internal_.RenderLayer.md#userlayer)

#### Defined in

[src/neuroglancer/renderlayer.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L47)

___

### visibleSources

• `Private` **visibleSources**: `Map`<`Source`, [`VisibleSourceInfo`](../interfaces/sliceview_renderlayer.VisibleSourceInfo.md)<`Source`\>\>

Currently visible sources for this render layer.

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:88](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/renderlayer.ts#L88)

___

### visibleSourcesList\_

• `Private` **visibleSourcesList\_**: [`VisibleSourceInfo`](../interfaces/sliceview_renderlayer.VisibleSourceInfo.md)<`Source`\>[] = `[]`

Cached list of sources in `visibleSources`, ordered by voxel size.

Truncated to zero length when `visibleSources` changes to indicate that it is invalid.

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/renderlayer.ts#L95)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RenderLayer](annotation_annotation_layer_state._internal_.RenderLayer.md).[wasDisposed](annotation_annotation_layer_state._internal_.RenderLayer.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### gl

• `get` **gl**(): [`GL`](../interfaces/webgl_context.GL.md)

#### Returns

[`GL`](../interfaces/webgl_context.GL.md)

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:176](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/renderlayer.ts#L176)

___

### visibleSourcesList

• `get` **visibleSourcesList**(): [`VisibleSourceInfo`](../interfaces/sliceview_renderlayer.VisibleSourceInfo.md)<`Source`\>[]

#### Returns

[`VisibleSourceInfo`](../interfaces/sliceview_renderlayer.VisibleSourceInfo.md)<`Source`\>[]

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:124](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/renderlayer.ts#L124)

## Methods

### addRef

▸ **addRef**(): [`SliceViewRenderLayer`](sliceview_renderlayer.SliceViewRenderLayer.md)<`Source`, `SourceOptions`\>

#### Returns

[`SliceViewRenderLayer`](sliceview_renderlayer.SliceViewRenderLayer.md)<`Source`, `SourceOptions`\>

#### Inherited from

[RenderLayer](annotation_annotation_layer_state._internal_.RenderLayer.md).[addRef](annotation_annotation_layer_state._internal_.RenderLayer.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### addSource

▸ **addSource**(`source`, `chunkTransform`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Source` |
| `chunkTransform` | [`ChunkTransformParameters`](../interfaces/annotation_annotation_layer_state._internal_.ChunkTransformParameters.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:101](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/renderlayer.ts#L101)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RenderLayer](annotation_annotation_layer_state._internal_.RenderLayer.md).[dispose](annotation_annotation_layer_state._internal_.RenderLayer.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[RenderLayer](annotation_annotation_layer_state._internal_.RenderLayer.md).[disposed](annotation_annotation_layer_state._internal_.RenderLayer.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L75)

___

### draw

▸ `Abstract` **draw**(`renderContext`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderContext` | [`SliceViewRenderContext`](../interfaces/sliceview_renderlayer.SliceViewRenderContext.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:190](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/renderlayer.ts#L190)

___

### filterVisibleSources

▸ **filterVisibleSources**(`sliceView`, `sources`): [`Iterable`](../interfaces/annotation_annotation_layer_state._internal_.Iterable.md)<[`TransformedSource`](../interfaces/sliceview_base.TransformedSource.md)<[`SliceViewRenderLayer`](../interfaces/sliceview_base.SliceViewRenderLayer.md), [`SliceViewChunkSource`](../interfaces/sliceview_base.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sliceView` | [`SliceViewBase`](sliceview_base.SliceViewBase.md)<[`SliceViewChunkSource`](../interfaces/sliceview_base.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>\>, [`SliceViewRenderLayer`](../interfaces/sliceview_base.SliceViewRenderLayer.md), [`TransformedSource`](../interfaces/sliceview_base.TransformedSource.md)<[`SliceViewRenderLayer`](../interfaces/sliceview_base.SliceViewRenderLayer.md), [`SliceViewChunkSource`](../interfaces/sliceview_base.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>\>\>\> |
| `sources` | readonly [`TransformedSource`](../interfaces/sliceview_base.TransformedSource.md)<[`SliceViewRenderLayer`](../interfaces/sliceview_base.SliceViewRenderLayer.md), [`SliceViewChunkSource`](../interfaces/sliceview_base.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>\>\>[] |

#### Returns

[`Iterable`](../interfaces/annotation_annotation_layer_state._internal_.Iterable.md)<[`TransformedSource`](../interfaces/sliceview_base.TransformedSource.md)<[`SliceViewRenderLayer`](../interfaces/sliceview_base.SliceViewRenderLayer.md), [`SliceViewChunkSource`](../interfaces/sliceview_base.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>\>\>\>

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/renderlayer.ts#L192)

___

### getDataHistogramCount

▸ **getDataHistogramCount**(): `number`

#### Returns

`number`

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:79](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/renderlayer.ts#L79)

___

### getSources

▸ **getSources**(`options`): [`SliceViewSingleResolutionSource`](../interfaces/sliceview_frontend.SliceViewSingleResolutionSource.md)<`Source`\>[][]

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`SliceViewSourceOptions`](../interfaces/sliceview_base.SliceViewSourceOptions.md) |

#### Returns

[`SliceViewSingleResolutionSource`](../interfaces/sliceview_frontend.SliceViewSingleResolutionSource.md)<`Source`\>[][]

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:97](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/renderlayer.ts#L97)

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

[RenderLayer](annotation_annotation_layer_state._internal_.RenderLayer.md).[getValueAt](annotation_annotation_layer_state._internal_.RenderLayer.md#getvalueat)

#### Defined in

[src/neuroglancer/renderlayer.ts:58](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L58)

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

[RenderLayer](annotation_annotation_layer_state._internal_.RenderLayer.md).[handleAction](annotation_annotation_layer_state._internal_.RenderLayer.md#handleaction)

#### Defined in

[src/neuroglancer/renderlayer.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L54)

___

### initializeCounterpart

▸ **initializeCounterpart**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:160](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/renderlayer.ts#L160)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RenderLayer](annotation_annotation_layer_state._internal_.RenderLayer.md).[refCountReachedZero](annotation_annotation_layer_state._internal_.RenderLayer.md#refcountreachedzero)

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

[RenderLayer](annotation_annotation_layer_state._internal_.RenderLayer.md).[registerCancellable](annotation_annotation_layer_state._internal_.RenderLayer.md#registercancellable)

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

[RenderLayer](annotation_annotation_layer_state._internal_.RenderLayer.md).[registerDisposer](annotation_annotation_layer_state._internal_.RenderLayer.md#registerdisposer)

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

[RenderLayer](annotation_annotation_layer_state._internal_.RenderLayer.md).[registerEventListener](annotation_annotation_layer_state._internal_.RenderLayer.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L95)

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

[src/neuroglancer/sliceview/renderlayer.ts:113](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/renderlayer.ts#L113)

___

### setGLBlendMode

▸ **setGLBlendMode**(`gl`, `renderLayerNum`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`WebGL2RenderingContext`](../modules/annotation_annotation_layer_state._internal_.md#webgl2renderingcontext) |
| `renderLayerNum` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:180](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/renderlayer.ts#L180)

___

### transformPickedValue

▸ **transformPickedValue**(`pickState`): `any`

Transform the stored pickedValue and offset associated with the retrieved pick ID into the
actual value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `pickState` | [`PickState`](../interfaces/annotation_annotation_layer_state._internal_.PickState.md) |

#### Returns

`any`

#### Inherited from

[RenderLayer](annotation_annotation_layer_state._internal_.RenderLayer.md).[transformPickedValue](annotation_annotation_layer_state._internal_.RenderLayer.md#transformpickedvalue)

#### Defined in

[src/neuroglancer/renderlayer.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L66)

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

[RenderLayer](annotation_annotation_layer_state._internal_.RenderLayer.md).[unregisterDisposer](annotation_annotation_layer_state._internal_.RenderLayer.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)

___

### updateMouseState

▸ **updateMouseState**(`_mouseState`, `_pickedValue`, `_pickedOffset`, `_data`): `void`

Optionally updates the mouse state based on the retrived pick information.  This might snap the
3-d position to the center of the picked point.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_mouseState` | [`MouseSelectionState`](annotation_annotation_layer_state._internal_.MouseSelectionState.md) |
| `_pickedValue` | [`Uint64`](util_uint64.Uint64.md) |
| `_pickedOffset` | `number` |
| `_data` | `any` |

#### Returns

`void`

#### Inherited from

[RenderLayer](annotation_annotation_layer_state._internal_.RenderLayer.md).[updateMouseState](annotation_annotation_layer_state._internal_.RenderLayer.md#updatemousestate)

#### Defined in

[src/neuroglancer/renderlayer.ts:74](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L74)
