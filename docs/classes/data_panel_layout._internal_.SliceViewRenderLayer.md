[neuroglancer](../README.md) / [Modules](../modules.md) / [data\_panel\_layout](../modules/data_panel_layout.md) / [<internal\>](../modules/data_panel_layout._internal_.md) / SliceViewRenderLayer

# Class: SliceViewRenderLayer<Source, SourceOptions\>

[data_panel_layout](../modules/data_panel_layout.md).[<internal>](../modules/data_panel_layout._internal_.md).SliceViewRenderLayer

## Type parameters

| Name | Type |
| :------ | :------ |
| `Source` | extends [`SliceViewChunkSource`](data_panel_layout._internal_.SliceViewChunkSource.md) = [`SliceViewChunkSource`](data_panel_layout._internal_.SliceViewChunkSource.md) |
| `SourceOptions` | extends [`SliceViewSourceOptions`](../interfaces/data_panel_layout._internal_.SliceViewSourceOptions.md) = [`SliceViewSourceOptions`](../interfaces/data_panel_layout._internal_.SliceViewSourceOptions.md) |

## Hierarchy

- [`RenderLayer`](renderlayer.RenderLayer.md)

  ↳ **`SliceViewRenderLayer`**

## Table of contents

### Constructors

- [constructor](data_panel_layout._internal_.SliceViewRenderLayer.md#constructor)

### Properties

- [RPC\_TYPE\_ID](data_panel_layout._internal_.SliceViewRenderLayer.md#rpc_type_id)
- [channelCoordinateSpace](data_panel_layout._internal_.SliceViewRenderLayer.md#channelcoordinatespace)
- [chunkManager](data_panel_layout._internal_.SliceViewRenderLayer.md#chunkmanager)
- [dataHistogramSpecifications](data_panel_layout._internal_.SliceViewRenderLayer.md#datahistogramspecifications)
- [disposedStacks](data_panel_layout._internal_.SliceViewRenderLayer.md#disposedstacks)
- [layerChanged](data_panel_layout._internal_.SliceViewRenderLayer.md#layerchanged)
- [layerChunkProgressInfo](data_panel_layout._internal_.SliceViewRenderLayer.md#layerchunkprogressinfo)
- [localPosition](data_panel_layout._internal_.SliceViewRenderLayer.md#localposition)
- [messages](data_panel_layout._internal_.SliceViewRenderLayer.md#messages)
- [multiscaleSource](data_panel_layout._internal_.SliceViewRenderLayer.md#multiscalesource)
- [redrawNeeded](data_panel_layout._internal_.SliceViewRenderLayer.md#redrawneeded)
- [refCount](data_panel_layout._internal_.SliceViewRenderLayer.md#refcount)
- [renderScaleHistogram](data_panel_layout._internal_.SliceViewRenderLayer.md#renderscalehistogram)
- [renderScaleTarget](data_panel_layout._internal_.SliceViewRenderLayer.md#renderscaletarget)
- [role](data_panel_layout._internal_.SliceViewRenderLayer.md#role)
- [rpcId](data_panel_layout._internal_.SliceViewRenderLayer.md#rpcid)
- [transform](data_panel_layout._internal_.SliceViewRenderLayer.md#transform)
- [userLayer](data_panel_layout._internal_.SliceViewRenderLayer.md#userlayer)
- [visibleSources](data_panel_layout._internal_.SliceViewRenderLayer.md#visiblesources)
- [visibleSourcesList\_](data_panel_layout._internal_.SliceViewRenderLayer.md#visiblesourceslist_)
- [wasDisposed](data_panel_layout._internal_.SliceViewRenderLayer.md#wasdisposed)

### Accessors

- [gl](data_panel_layout._internal_.SliceViewRenderLayer.md#gl)
- [visibleSourcesList](data_panel_layout._internal_.SliceViewRenderLayer.md#visiblesourceslist)

### Methods

- [addRef](data_panel_layout._internal_.SliceViewRenderLayer.md#addref)
- [addSource](data_panel_layout._internal_.SliceViewRenderLayer.md#addsource)
- [dispose](data_panel_layout._internal_.SliceViewRenderLayer.md#dispose)
- [disposed](data_panel_layout._internal_.SliceViewRenderLayer.md#disposed)
- [draw](data_panel_layout._internal_.SliceViewRenderLayer.md#draw)
- [filterVisibleSources](data_panel_layout._internal_.SliceViewRenderLayer.md#filtervisiblesources)
- [getDataHistogramCount](data_panel_layout._internal_.SliceViewRenderLayer.md#getdatahistogramcount)
- [getSources](data_panel_layout._internal_.SliceViewRenderLayer.md#getsources)
- [getValueAt](data_panel_layout._internal_.SliceViewRenderLayer.md#getvalueat)
- [handleAction](data_panel_layout._internal_.SliceViewRenderLayer.md#handleaction)
- [initializeCounterpart](data_panel_layout._internal_.SliceViewRenderLayer.md#initializecounterpart)
- [refCountReachedZero](data_panel_layout._internal_.SliceViewRenderLayer.md#refcountreachedzero)
- [registerCancellable](data_panel_layout._internal_.SliceViewRenderLayer.md#registercancellable)
- [registerDisposer](data_panel_layout._internal_.SliceViewRenderLayer.md#registerdisposer)
- [registerEventListener](data_panel_layout._internal_.SliceViewRenderLayer.md#registereventlistener)
- [removeSource](data_panel_layout._internal_.SliceViewRenderLayer.md#removesource)
- [setGLBlendMode](data_panel_layout._internal_.SliceViewRenderLayer.md#setglblendmode)
- [transformPickedValue](data_panel_layout._internal_.SliceViewRenderLayer.md#transformpickedvalue)
- [unregisterDisposer](data_panel_layout._internal_.SliceViewRenderLayer.md#unregisterdisposer)
- [updateMouseState](data_panel_layout._internal_.SliceViewRenderLayer.md#updatemousestate)

## Constructors

### constructor

• **new SliceViewRenderLayer**<`Source`, `SourceOptions`\>(`chunkManager`, `multiscaleSource`, `options`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Source` | extends [`SliceViewChunkSource`](data_panel_layout._internal_.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/data_panel_layout._internal_.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>, [`SliceViewChunk`](data_panel_layout._internal_.SliceViewChunk.md), `Source`\> = [`SliceViewChunkSource`](data_panel_layout._internal_.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/data_panel_layout._internal_.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>, [`SliceViewChunk`](data_panel_layout._internal_.SliceViewChunk.md)\> |
| `SourceOptions` | extends [`SliceViewSourceOptions`](../interfaces/data_panel_layout._internal_.SliceViewSourceOptions.md) = [`SliceViewSourceOptions`](../interfaces/data_panel_layout._internal_.SliceViewSourceOptions.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkManager` | [`ChunkManager`](data_panel_layout._internal_.ChunkManager.md) |
| `multiscaleSource` | [`MultiscaleSliceViewChunkSource`](data_panel_layout._internal_.MultiscaleSliceViewChunkSource.md)<`Source`, `SourceOptions`\> |
| `options` | [`SliceViewRenderLayerOptions`](../interfaces/data_panel_layout._internal_.SliceViewRenderLayerOptions.md) |

#### Overrides

[RenderLayer](renderlayer.RenderLayer.md).[constructor](renderlayer.RenderLayer.md#constructor)

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:140](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/renderlayer.ts#L140)

## Properties

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:158](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/renderlayer.ts#L158)

___

### channelCoordinateSpace

• **channelCoordinateSpace**: [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<[`CoordinateSpace`](../interfaces/coordinate_transform.CoordinateSpace.md)\>

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:68](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/renderlayer.ts#L68)

___

### chunkManager

• **chunkManager**: [`ChunkManager`](data_panel_layout._internal_.ChunkManager.md)

___

### dataHistogramSpecifications

• **dataHistogramSpecifications**: [`HistogramSpecifications`](data_panel_layout._internal_.HistogramSpecifications.md)

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:77](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/renderlayer.ts#L77)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RenderLayer](renderlayer.RenderLayer.md).[disposedStacks](renderlayer.RenderLayer.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L52)

___

### layerChanged

• **layerChanged**: [`NullarySignal`](coordinate_transform._internal_.NullarySignal.md)

#### Inherited from

[RenderLayer](renderlayer.RenderLayer.md).[layerChanged](renderlayer.RenderLayer.md#layerchanged)

#### Defined in

[src/neuroglancer/renderlayer.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/renderlayer.ts#L50)

___

### layerChunkProgressInfo

• **layerChunkProgressInfo**: [`LayerChunkProgressInfo`](data_panel_layout._internal_.LayerChunkProgressInfo.md)

#### Inherited from

[RenderLayer](renderlayer.RenderLayer.md).[layerChunkProgressInfo](renderlayer.RenderLayer.md#layerchunkprogressinfo)

#### Defined in

[src/neuroglancer/renderlayer.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/renderlayer.ts#L52)

___

### localPosition

• **localPosition**: [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<`Float32Array`\>

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:67](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/renderlayer.ts#L67)

___

### messages

• **messages**: [`MessageList`](data_panel_layout._internal_.MessageList.md)

#### Inherited from

[RenderLayer](renderlayer.RenderLayer.md).[messages](renderlayer.RenderLayer.md#messages)

#### Defined in

[src/neuroglancer/renderlayer.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/renderlayer.ts#L49)

___

### multiscaleSource

• **multiscaleSource**: [`MultiscaleSliceViewChunkSource`](data_panel_layout._internal_.MultiscaleSliceViewChunkSource.md)<`Source`, `SourceOptions`\>

___

### redrawNeeded

• **redrawNeeded**: [`NullarySignal`](coordinate_transform._internal_.NullarySignal.md)

#### Inherited from

[RenderLayer](renderlayer.RenderLayer.md).[redrawNeeded](renderlayer.RenderLayer.md#redrawneeded)

#### Defined in

[src/neuroglancer/renderlayer.ts:51](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/renderlayer.ts#L51)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RenderLayer](renderlayer.RenderLayer.md).[refCount](renderlayer.RenderLayer.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L45)

___

### renderScaleHistogram

• `Optional` **renderScaleHistogram**: [`RenderScaleHistogram`](render_scale_statistics.RenderScaleHistogram.md)

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:72](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/renderlayer.ts#L72)

___

### renderScaleTarget

• **renderScaleTarget**: [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<`number`\>

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:71](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/renderlayer.ts#L71)

___

### role

• **role**: [`RenderLayerRole`](../enums/renderlayer.RenderLayerRole.md) = `RenderLayerRole.DATA`

#### Inherited from

[RenderLayer](renderlayer.RenderLayer.md).[role](renderlayer.RenderLayer.md#role)

#### Defined in

[src/neuroglancer/renderlayer.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/renderlayer.ts#L48)

___

### rpcId

• **rpcId**: ``null`` \| `number` = `null`

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:65](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/renderlayer.ts#L65)

___

### transform

• **transform**: [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<[`RenderLayerTransformOrError`](../modules/render_coordinate_transform.md#renderlayertransformorerror)\>

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:69](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/renderlayer.ts#L69)

___

### userLayer

• **userLayer**: `undefined` \| [`UserLayer`](layer.UserLayer.md)

#### Inherited from

[RenderLayer](renderlayer.RenderLayer.md).[userLayer](renderlayer.RenderLayer.md#userlayer)

#### Defined in

[src/neuroglancer/renderlayer.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/renderlayer.ts#L47)

___

### visibleSources

• `Private` **visibleSources**: `Map`<`Source`, [`VisibleSourceInfo`](../interfaces/data_panel_layout._internal_.VisibleSourceInfo.md)<`Source`\>\>

Currently visible sources for this render layer.

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:88](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/renderlayer.ts#L88)

___

### visibleSourcesList\_

• `Private` **visibleSourcesList\_**: [`VisibleSourceInfo`](../interfaces/data_panel_layout._internal_.VisibleSourceInfo.md)<`Source`\>[] = `[]`

Cached list of sources in `visibleSources`, ordered by voxel size.

Truncated to zero length when `visibleSources` changes to indicate that it is invalid.

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/renderlayer.ts#L95)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RenderLayer](renderlayer.RenderLayer.md).[wasDisposed](renderlayer.RenderLayer.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### gl

• `get` **gl**(): [`GL`](../interfaces/axes_lines._internal_.GL.md)

#### Returns

[`GL`](../interfaces/axes_lines._internal_.GL.md)

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:176](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/renderlayer.ts#L176)

___

### visibleSourcesList

• `get` **visibleSourcesList**(): [`VisibleSourceInfo`](../interfaces/data_panel_layout._internal_.VisibleSourceInfo.md)<`Source`\>[]

#### Returns

[`VisibleSourceInfo`](../interfaces/data_panel_layout._internal_.VisibleSourceInfo.md)<`Source`\>[]

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:124](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/renderlayer.ts#L124)

## Methods

### addRef

▸ **addRef**(): [`SliceViewRenderLayer`](data_panel_layout._internal_.SliceViewRenderLayer.md)<`Source`, `SourceOptions`\>

#### Returns

[`SliceViewRenderLayer`](data_panel_layout._internal_.SliceViewRenderLayer.md)<`Source`, `SourceOptions`\>

#### Inherited from

[RenderLayer](renderlayer.RenderLayer.md).[addRef](renderlayer.RenderLayer.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L48)

___

### addSource

▸ **addSource**(`source`, `chunkTransform`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Source` |
| `chunkTransform` | [`ChunkTransformParameters`](../interfaces/render_coordinate_transform.ChunkTransformParameters.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:101](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/renderlayer.ts#L101)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RenderLayer](renderlayer.RenderLayer.md).[dispose](renderlayer.RenderLayer.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[RenderLayer](renderlayer.RenderLayer.md).[disposed](renderlayer.RenderLayer.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L75)

___

### draw

▸ `Abstract` **draw**(`renderContext`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderContext` | [`SliceViewRenderContext`](../interfaces/data_panel_layout._internal_.SliceViewRenderContext.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:190](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/renderlayer.ts#L190)

___

### filterVisibleSources

▸ **filterVisibleSources**(`sliceView`, `sources`): [`Iterable`](../interfaces/axes_lines._internal_.Iterable.md)<[`TransformedSource`](../interfaces/data_panel_layout._internal_.TransformedSource.md)<[`SliceViewRenderLayer`](../interfaces/data_panel_layout._internal_.SliceViewRenderLayer-1.md), [`SliceViewChunkSource`](../interfaces/data_panel_layout._internal_.SliceViewChunkSource-1.md)<[`SliceViewChunkSpecification`](../interfaces/data_panel_layout._internal_.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sliceView` | [`SliceViewBase`](data_panel_layout._internal_.SliceViewBase.md)<[`SliceViewChunkSource`](../interfaces/data_panel_layout._internal_.SliceViewChunkSource-1.md)<[`SliceViewChunkSpecification`](../interfaces/data_panel_layout._internal_.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>\>, [`SliceViewRenderLayer`](../interfaces/data_panel_layout._internal_.SliceViewRenderLayer-1.md), [`TransformedSource`](../interfaces/data_panel_layout._internal_.TransformedSource.md)<[`SliceViewRenderLayer`](../interfaces/data_panel_layout._internal_.SliceViewRenderLayer-1.md), [`SliceViewChunkSource`](../interfaces/data_panel_layout._internal_.SliceViewChunkSource-1.md)<[`SliceViewChunkSpecification`](../interfaces/data_panel_layout._internal_.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>\>\>\> |
| `sources` | readonly [`TransformedSource`](../interfaces/data_panel_layout._internal_.TransformedSource.md)<[`SliceViewRenderLayer`](../interfaces/data_panel_layout._internal_.SliceViewRenderLayer-1.md), [`SliceViewChunkSource`](../interfaces/data_panel_layout._internal_.SliceViewChunkSource-1.md)<[`SliceViewChunkSpecification`](../interfaces/data_panel_layout._internal_.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>\>\>[] |

#### Returns

[`Iterable`](../interfaces/axes_lines._internal_.Iterable.md)<[`TransformedSource`](../interfaces/data_panel_layout._internal_.TransformedSource.md)<[`SliceViewRenderLayer`](../interfaces/data_panel_layout._internal_.SliceViewRenderLayer-1.md), [`SliceViewChunkSource`](../interfaces/data_panel_layout._internal_.SliceViewChunkSource-1.md)<[`SliceViewChunkSpecification`](../interfaces/data_panel_layout._internal_.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>\>\>\>

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/renderlayer.ts#L192)

___

### getDataHistogramCount

▸ **getDataHistogramCount**(): `number`

#### Returns

`number`

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:79](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/renderlayer.ts#L79)

___

### getSources

▸ **getSources**(`options`): [`SliceViewSingleResolutionSource`](../interfaces/data_panel_layout._internal_.SliceViewSingleResolutionSource.md)<`Source`\>[][]

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`SliceViewSourceOptions`](../interfaces/data_panel_layout._internal_.SliceViewSourceOptions.md) |

#### Returns

[`SliceViewSingleResolutionSource`](../interfaces/data_panel_layout._internal_.SliceViewSingleResolutionSource.md)<`Source`\>[][]

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:97](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/renderlayer.ts#L97)

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

[RenderLayer](renderlayer.RenderLayer.md).[getValueAt](renderlayer.RenderLayer.md#getvalueat)

#### Defined in

[src/neuroglancer/renderlayer.ts:58](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/renderlayer.ts#L58)

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

[RenderLayer](renderlayer.RenderLayer.md).[handleAction](renderlayer.RenderLayer.md#handleaction)

#### Defined in

[src/neuroglancer/renderlayer.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/renderlayer.ts#L54)

___

### initializeCounterpart

▸ **initializeCounterpart**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:160](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/renderlayer.ts#L160)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RenderLayer](renderlayer.RenderLayer.md).[refCountReachedZero](renderlayer.RenderLayer.md#refcountreachedzero)

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

[RenderLayer](renderlayer.RenderLayer.md).[registerCancellable](renderlayer.RenderLayer.md#registercancellable)

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

[RenderLayer](renderlayer.RenderLayer.md).[registerDisposer](renderlayer.RenderLayer.md#registerdisposer)

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

[RenderLayer](renderlayer.RenderLayer.md).[registerEventListener](renderlayer.RenderLayer.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L95)

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

[src/neuroglancer/sliceview/renderlayer.ts:113](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/renderlayer.ts#L113)

___

### setGLBlendMode

▸ **setGLBlendMode**(`gl`, `renderLayerNum`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`WebGL2RenderingContext`](../modules/axes_lines._internal_.md#webgl2renderingcontext) |
| `renderLayerNum` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:180](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/renderlayer.ts#L180)

___

### transformPickedValue

▸ **transformPickedValue**(`pickState`): `any`

Transform the stored pickedValue and offset associated with the retrieved pick ID into the
actual value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `pickState` | [`PickState`](../interfaces/layer.PickState.md) |

#### Returns

`any`

#### Inherited from

[RenderLayer](renderlayer.RenderLayer.md).[transformPickedValue](renderlayer.RenderLayer.md#transformpickedvalue)

#### Defined in

[src/neuroglancer/renderlayer.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/renderlayer.ts#L66)

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

[RenderLayer](renderlayer.RenderLayer.md).[unregisterDisposer](renderlayer.RenderLayer.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L85)

___

### updateMouseState

▸ **updateMouseState**(`_mouseState`, `_pickedValue`, `_pickedOffset`, `_data`): `void`

Optionally updates the mouse state based on the retrived pick information.  This might snap the
3-d position to the center of the picked point.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_mouseState` | [`MouseSelectionState`](layer.MouseSelectionState.md) |
| `_pickedValue` | [`Uint64`](data_panel_layout._internal_.Uint64.md) |
| `_pickedOffset` | `number` |
| `_data` | `any` |

#### Returns

`void`

#### Inherited from

[RenderLayer](renderlayer.RenderLayer.md).[updateMouseState](renderlayer.RenderLayer.md#updatemousestate)

#### Defined in

[src/neuroglancer/renderlayer.ts:74](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/renderlayer.ts#L74)
