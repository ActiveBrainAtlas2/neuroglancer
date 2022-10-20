[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/sliceview/volume/segmentation\_renderlayer](../modules/neuroglancer_sliceview_volume_segmentation_renderlayer.md) / SegmentationRenderLayer

# Class: SegmentationRenderLayer

[neuroglancer/sliceview/volume/segmentation_renderlayer](../modules/neuroglancer_sliceview_volume_segmentation_renderlayer.md).SegmentationRenderLayer

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

- [`SliceViewVolumeRenderLayer`](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md)<[`ShaderParameters`](../interfaces/neuroglancer_sliceview_volume_segmentation_renderlayer._internal_.ShaderParameters.md)\>

  ↳ **`SegmentationRenderLayer`**

## Table of contents

### Constructors

- [constructor](neuroglancer_sliceview_volume_segmentation_renderlayer.SegmentationRenderLayer.md#constructor)

### Properties

- [RPC\_TYPE\_ID](neuroglancer_sliceview_volume_segmentation_renderlayer.SegmentationRenderLayer.md#rpc_type_id)
- [channelCoordinateSpace](neuroglancer_sliceview_volume_segmentation_renderlayer.SegmentationRenderLayer.md#channelcoordinatespace)
- [chunkManager](neuroglancer_sliceview_volume_segmentation_renderlayer.SegmentationRenderLayer.md#chunkmanager)
- [dataHistogramSpecifications](neuroglancer_sliceview_volume_segmentation_renderlayer.SegmentationRenderLayer.md#datahistogramspecifications)
- [displayState](neuroglancer_sliceview_volume_segmentation_renderlayer.SegmentationRenderLayer.md#displaystate)
- [disposedStacks](neuroglancer_sliceview_volume_segmentation_renderlayer.SegmentationRenderLayer.md#disposedstacks)
- [equivalencesHashMap](neuroglancer_sliceview_volume_segmentation_renderlayer.SegmentationRenderLayer.md#equivalenceshashmap)
- [equivalencesShaderManager](neuroglancer_sliceview_volume_segmentation_renderlayer.SegmentationRenderLayer.md#equivalencesshadermanager)
- [gpuEquivalencesHashTable](neuroglancer_sliceview_volume_segmentation_renderlayer.SegmentationRenderLayer.md#gpuequivalenceshashtable)
- [gpuHashTable](neuroglancer_sliceview_volume_segmentation_renderlayer.SegmentationRenderLayer.md#gpuhashtable)
- [gpuSegmentStatedColorHashTable](neuroglancer_sliceview_volume_segmentation_renderlayer.SegmentationRenderLayer.md#gpusegmentstatedcolorhashtable)
- [gpuTemporaryEquivalencesHashTable](neuroglancer_sliceview_volume_segmentation_renderlayer.SegmentationRenderLayer.md#gputemporaryequivalenceshashtable)
- [gpuTemporaryHashTable](neuroglancer_sliceview_volume_segmentation_renderlayer.SegmentationRenderLayer.md#gputemporaryhashtable)
- [hashTableManager](neuroglancer_sliceview_volume_segmentation_renderlayer.SegmentationRenderLayer.md#hashtablemanager)
- [layerChanged](neuroglancer_sliceview_volume_segmentation_renderlayer.SegmentationRenderLayer.md#layerchanged)
- [layerChunkProgressInfo](neuroglancer_sliceview_volume_segmentation_renderlayer.SegmentationRenderLayer.md#layerchunkprogressinfo)
- [localPosition](neuroglancer_sliceview_volume_segmentation_renderlayer.SegmentationRenderLayer.md#localposition)
- [messages](neuroglancer_sliceview_volume_segmentation_renderlayer.SegmentationRenderLayer.md#messages)
- [multiscaleSource](neuroglancer_sliceview_volume_segmentation_renderlayer.SegmentationRenderLayer.md#multiscalesource)
- [redrawNeeded](neuroglancer_sliceview_volume_segmentation_renderlayer.SegmentationRenderLayer.md#redrawneeded)
- [refCount](neuroglancer_sliceview_volume_segmentation_renderlayer.SegmentationRenderLayer.md#refcount)
- [renderScaleHistogram](neuroglancer_sliceview_volume_segmentation_renderlayer.SegmentationRenderLayer.md#renderscalehistogram)
- [renderScaleTarget](neuroglancer_sliceview_volume_segmentation_renderlayer.SegmentationRenderLayer.md#renderscaletarget)
- [role](neuroglancer_sliceview_volume_segmentation_renderlayer.SegmentationRenderLayer.md#role)
- [rpcId](neuroglancer_sliceview_volume_segmentation_renderlayer.SegmentationRenderLayer.md#rpcid)
- [segmentColorShaderManager](neuroglancer_sliceview_volume_segmentation_renderlayer.SegmentationRenderLayer.md#segmentcolorshadermanager)
- [segmentStatedColorShaderManager](neuroglancer_sliceview_volume_segmentation_renderlayer.SegmentationRenderLayer.md#segmentstatedcolorshadermanager)
- [segmentationGroupState](neuroglancer_sliceview_volume_segmentation_renderlayer.SegmentationRenderLayer.md#segmentationgroupstate)
- [shaderGetter](neuroglancer_sliceview_volume_segmentation_renderlayer.SegmentationRenderLayer.md#shadergetter)
- [shaderParameters](neuroglancer_sliceview_volume_segmentation_renderlayer.SegmentationRenderLayer.md#shaderparameters)
- [temporaryEquivalencesHashMap](neuroglancer_sliceview_volume_segmentation_renderlayer.SegmentationRenderLayer.md#temporaryequivalenceshashmap)
- [transform](neuroglancer_sliceview_volume_segmentation_renderlayer.SegmentationRenderLayer.md#transform)
- [userLayer](neuroglancer_sliceview_volume_segmentation_renderlayer.SegmentationRenderLayer.md#userlayer)
- [wasDisposed](neuroglancer_sliceview_volume_segmentation_renderlayer.SegmentationRenderLayer.md#wasdisposed)

### Accessors

- [dataType](neuroglancer_sliceview_volume_segmentation_renderlayer.SegmentationRenderLayer.md#datatype)
- [gl](neuroglancer_sliceview_volume_segmentation_renderlayer.SegmentationRenderLayer.md#gl)
- [visibleSourcesList](neuroglancer_sliceview_volume_segmentation_renderlayer.SegmentationRenderLayer.md#visiblesourceslist)

### Methods

- [addRef](neuroglancer_sliceview_volume_segmentation_renderlayer.SegmentationRenderLayer.md#addref)
- [addSource](neuroglancer_sliceview_volume_segmentation_renderlayer.SegmentationRenderLayer.md#addsource)
- [beginChunkFormat](neuroglancer_sliceview_volume_segmentation_renderlayer.SegmentationRenderLayer.md#beginchunkformat)
- [defineShader](neuroglancer_sliceview_volume_segmentation_renderlayer.SegmentationRenderLayer.md#defineshader)
- [dispose](neuroglancer_sliceview_volume_segmentation_renderlayer.SegmentationRenderLayer.md#dispose)
- [disposed](neuroglancer_sliceview_volume_segmentation_renderlayer.SegmentationRenderLayer.md#disposed)
- [draw](neuroglancer_sliceview_volume_segmentation_renderlayer.SegmentationRenderLayer.md#draw)
- [endSlice](neuroglancer_sliceview_volume_segmentation_renderlayer.SegmentationRenderLayer.md#endslice)
- [filterVisibleSources](neuroglancer_sliceview_volume_segmentation_renderlayer.SegmentationRenderLayer.md#filtervisiblesources)
- [getDataHistogramCount](neuroglancer_sliceview_volume_segmentation_renderlayer.SegmentationRenderLayer.md#getdatahistogramcount)
- [getSources](neuroglancer_sliceview_volume_segmentation_renderlayer.SegmentationRenderLayer.md#getsources)
- [getValueAt](neuroglancer_sliceview_volume_segmentation_renderlayer.SegmentationRenderLayer.md#getvalueat)
- [handleAction](neuroglancer_sliceview_volume_segmentation_renderlayer.SegmentationRenderLayer.md#handleaction)
- [initializeCounterpart](neuroglancer_sliceview_volume_segmentation_renderlayer.SegmentationRenderLayer.md#initializecounterpart)
- [initializeShader](neuroglancer_sliceview_volume_segmentation_renderlayer.SegmentationRenderLayer.md#initializeshader)
- [refCountReachedZero](neuroglancer_sliceview_volume_segmentation_renderlayer.SegmentationRenderLayer.md#refcountreachedzero)
- [registerCancellable](neuroglancer_sliceview_volume_segmentation_renderlayer.SegmentationRenderLayer.md#registercancellable)
- [registerDisposer](neuroglancer_sliceview_volume_segmentation_renderlayer.SegmentationRenderLayer.md#registerdisposer)
- [registerEventListener](neuroglancer_sliceview_volume_segmentation_renderlayer.SegmentationRenderLayer.md#registereventlistener)
- [removeSource](neuroglancer_sliceview_volume_segmentation_renderlayer.SegmentationRenderLayer.md#removesource)
- [setGLBlendMode](neuroglancer_sliceview_volume_segmentation_renderlayer.SegmentationRenderLayer.md#setglblendmode)
- [transformPickedValue](neuroglancer_sliceview_volume_segmentation_renderlayer.SegmentationRenderLayer.md#transformpickedvalue)
- [unregisterDisposer](neuroglancer_sliceview_volume_segmentation_renderlayer.SegmentationRenderLayer.md#unregisterdisposer)
- [updateMouseState](neuroglancer_sliceview_volume_segmentation_renderlayer.SegmentationRenderLayer.md#updatemousestate)

## Constructors

### constructor

• **new SegmentationRenderLayer**(`multiscaleSource`, `displayState`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `multiscaleSource` | [`MultiscaleVolumeChunkSource`](neuroglancer_sliceview_volume_frontend.MultiscaleVolumeChunkSource.md) |
| `displayState` | [`SliceViewSegmentationDisplayState`](../interfaces/neuroglancer_sliceview_volume_segmentation_renderlayer.SliceViewSegmentationDisplayState.md) |

#### Overrides

[SliceViewVolumeRenderLayer](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md).[constructor](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md#constructor)

#### Defined in

[src/neuroglancer/sliceview/volume/segmentation_renderlayer.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/segmentation_renderlayer.ts#L85)

## Properties

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

#### Inherited from

[SliceViewVolumeRenderLayer](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md).[RPC_TYPE_ID](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md#rpc_type_id)

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:158](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/renderlayer.ts#L158)

___

### channelCoordinateSpace

• **channelCoordinateSpace**: [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<[`CoordinateSpace`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpace.md)\>

#### Inherited from

[SliceViewVolumeRenderLayer](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md).[channelCoordinateSpace](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md#channelcoordinatespace)

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:68](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/renderlayer.ts#L68)

___

### chunkManager

• **chunkManager**: [`ChunkManager`](neuroglancer_chunk_manager_frontend.ChunkManager.md)

#### Inherited from

[SliceViewVolumeRenderLayer](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md).[chunkManager](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md#chunkmanager)

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:141](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/renderlayer.ts#L141)

___

### dataHistogramSpecifications

• **dataHistogramSpecifications**: [`HistogramSpecifications`](neuroglancer_webgl_empirical_cdf.HistogramSpecifications.md)

#### Inherited from

[SliceViewVolumeRenderLayer](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md).[dataHistogramSpecifications](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md#datahistogramspecifications)

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:77](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/renderlayer.ts#L77)

___

### displayState

• **displayState**: [`SliceViewSegmentationDisplayState`](../interfaces/neuroglancer_sliceview_volume_segmentation_renderlayer.SliceViewSegmentationDisplayState.md)

#### Defined in

[src/neuroglancer/sliceview/volume/segmentation_renderlayer.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/segmentation_renderlayer.ts#L87)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[SliceViewVolumeRenderLayer](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md).[disposedStacks](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### equivalencesHashMap

• `Private` **equivalencesHashMap**: [`EquivalencesHashMap`](neuroglancer_sliceview_volume_segmentation_renderlayer.EquivalencesHashMap.md)

#### Defined in

[src/neuroglancer/sliceview/volume/segmentation_renderlayer.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/segmentation_renderlayer.ts#L76)

___

### equivalencesShaderManager

• `Private` **equivalencesShaderManager**: [`HashMapShaderManager`](neuroglancer_gpu_hash_shader.HashMapShaderManager.md)

#### Defined in

[src/neuroglancer/sliceview/volume/segmentation_renderlayer.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/segmentation_renderlayer.ts#L75)

___

### gpuEquivalencesHashTable

• `Private` **gpuEquivalencesHashTable**: [`GPUHashTable`](neuroglancer_gpu_hash_shader.GPUHashTable.md)<[`HashMapUint64`](neuroglancer_gpu_hash_hash_table.HashMapUint64.md)\>

#### Defined in

[src/neuroglancer/sliceview/volume/segmentation_renderlayer.ts:80](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/segmentation_renderlayer.ts#L80)

___

### gpuHashTable

• `Private` **gpuHashTable**: [`GPUHashTable`](neuroglancer_gpu_hash_shader.GPUHashTable.md)<[`HashSetUint64`](neuroglancer_gpu_hash_hash_table.HashSetUint64.md)\>

#### Defined in

[src/neuroglancer/sliceview/volume/segmentation_renderlayer.ts:71](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/segmentation_renderlayer.ts#L71)

___

### gpuSegmentStatedColorHashTable

• `Private` **gpuSegmentStatedColorHashTable**: `undefined` \| [`GPUHashTable`](neuroglancer_gpu_hash_shader.GPUHashTable.md)<[`HashMapUint64`](neuroglancer_gpu_hash_hash_table.HashMapUint64.md)\>

#### Defined in

[src/neuroglancer/sliceview/volume/segmentation_renderlayer.ts:69](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/segmentation_renderlayer.ts#L69)

___

### gpuTemporaryEquivalencesHashTable

• `Private` **gpuTemporaryEquivalencesHashTable**: [`GPUHashTable`](neuroglancer_gpu_hash_shader.GPUHashTable.md)<[`HashMapUint64`](neuroglancer_gpu_hash_hash_table.HashMapUint64.md)\>

#### Defined in

[src/neuroglancer/sliceview/volume/segmentation_renderlayer.ts:82](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/segmentation_renderlayer.ts#L82)

___

### gpuTemporaryHashTable

• `Private` **gpuTemporaryHashTable**: [`GPUHashTable`](neuroglancer_gpu_hash_shader.GPUHashTable.md)<[`HashSetUint64`](neuroglancer_gpu_hash_hash_table.HashSetUint64.md)\>

#### Defined in

[src/neuroglancer/sliceview/volume/segmentation_renderlayer.ts:73](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/segmentation_renderlayer.ts#L73)

___

### hashTableManager

• `Private` **hashTableManager**: [`HashSetShaderManager`](neuroglancer_gpu_hash_shader.HashSetShaderManager.md)

#### Defined in

[src/neuroglancer/sliceview/volume/segmentation_renderlayer.ts:70](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/segmentation_renderlayer.ts#L70)

___

### layerChanged

• **layerChanged**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Inherited from

[SliceViewVolumeRenderLayer](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md).[layerChanged](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md#layerchanged)

#### Defined in

[src/neuroglancer/renderlayer.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/renderlayer.ts#L50)

___

### layerChunkProgressInfo

• **layerChunkProgressInfo**: [`LayerChunkProgressInfo`](neuroglancer_chunk_manager_base.LayerChunkProgressInfo.md)

#### Inherited from

[SliceViewVolumeRenderLayer](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md).[layerChunkProgressInfo](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md#layerchunkprogressinfo)

#### Defined in

[src/neuroglancer/renderlayer.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/renderlayer.ts#L52)

___

### localPosition

• **localPosition**: [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<`Float32Array`\>

#### Inherited from

[SliceViewVolumeRenderLayer](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md).[localPosition](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md#localposition)

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:67](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/renderlayer.ts#L67)

___

### messages

• **messages**: [`MessageList`](neuroglancer_util_message_list.MessageList.md)

#### Inherited from

[SliceViewVolumeRenderLayer](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md).[messages](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md#messages)

#### Defined in

[src/neuroglancer/renderlayer.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/renderlayer.ts#L49)

___

### multiscaleSource

• **multiscaleSource**: [`MultiscaleVolumeChunkSource`](neuroglancer_sliceview_volume_frontend.MultiscaleVolumeChunkSource.md)

#### Inherited from

[SliceViewVolumeRenderLayer](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md).[multiscaleSource](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md#multiscalesource)

#### Defined in

[src/neuroglancer/sliceview/volume/renderlayer.ts:227](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/renderlayer.ts#L227)

___

### redrawNeeded

• **redrawNeeded**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Inherited from

[SliceViewVolumeRenderLayer](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md).[redrawNeeded](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md#redrawneeded)

#### Defined in

[src/neuroglancer/renderlayer.ts:51](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/renderlayer.ts#L51)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[SliceViewVolumeRenderLayer](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md).[refCount](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### renderScaleHistogram

• `Optional` **renderScaleHistogram**: [`RenderScaleHistogram`](neuroglancer_render_scale_statistics.RenderScaleHistogram.md)

#### Inherited from

[SliceViewVolumeRenderLayer](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md).[renderScaleHistogram](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md#renderscalehistogram)

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:72](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/renderlayer.ts#L72)

___

### renderScaleTarget

• **renderScaleTarget**: [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<`number`\>

#### Inherited from

[SliceViewVolumeRenderLayer](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md).[renderScaleTarget](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md#renderscaletarget)

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:71](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/renderlayer.ts#L71)

___

### role

• **role**: [`RenderLayerRole`](../enums/neuroglancer_renderlayer.RenderLayerRole.md) = `RenderLayerRole.DATA`

#### Inherited from

[SliceViewVolumeRenderLayer](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md).[role](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md#role)

#### Defined in

[src/neuroglancer/renderlayer.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/renderlayer.ts#L48)

___

### rpcId

• **rpcId**: ``null`` \| `number` = `null`

#### Inherited from

[SliceViewVolumeRenderLayer](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md).[rpcId](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md#rpcid)

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:65](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/renderlayer.ts#L65)

___

### segmentColorShaderManager

• `Protected` **segmentColorShaderManager**: [`SegmentColorShaderManager`](neuroglancer_segment_color.SegmentColorShaderManager.md)

#### Defined in

[src/neuroglancer/sliceview/volume/segmentation_renderlayer.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/segmentation_renderlayer.ts#L66)

___

### segmentStatedColorShaderManager

• `Protected` **segmentStatedColorShaderManager**: [`SegmentStatedColorShaderManager`](neuroglancer_segment_color.SegmentStatedColorShaderManager.md)

#### Defined in

[src/neuroglancer/sliceview/volume/segmentation_renderlayer.ts:67](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/segmentation_renderlayer.ts#L67)

___

### segmentationGroupState

• `Readonly` **segmentationGroupState**: [`SegmentationGroupState`](../interfaces/neuroglancer_segmentation_display_state_frontend.SegmentationGroupState.md)

#### Defined in

[src/neuroglancer/sliceview/volume/segmentation_renderlayer.ts:65](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/segmentation_renderlayer.ts#L65)

___

### shaderGetter

• `Protected` **shaderGetter**: [`ParameterizedContextDependentShaderGetter`](../interfaces/neuroglancer_webgl_dynamic_shader.ParameterizedContextDependentShaderGetter.md)<{ `chunkFormat`: ``null`` \| [`ChunkFormat`](../interfaces/neuroglancer_sliceview_volume_frontend.ChunkFormat.md) ; `dataHistogramsEnabled`: `boolean`  }, [`ShaderParameters`](../interfaces/neuroglancer_sliceview_volume_segmentation_renderlayer._internal_.ShaderParameters.md), [`ShaderContext`](../interfaces/neuroglancer_sliceview_volume_image_renderlayer._internal_.ShaderContext.md)\>

#### Inherited from

[SliceViewVolumeRenderLayer](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md).[shaderGetter](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md#shadergetter)

#### Defined in

[src/neuroglancer/sliceview/volume/renderlayer.ts:228](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/renderlayer.ts#L228)

___

### shaderParameters

• **shaderParameters**: [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<[`ShaderParameters`](../interfaces/neuroglancer_sliceview_volume_segmentation_renderlayer._internal_.ShaderParameters.md)\>

#### Inherited from

[SliceViewVolumeRenderLayer](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md).[shaderParameters](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md#shaderparameters)

#### Defined in

[src/neuroglancer/sliceview/volume/renderlayer.ts:232](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/renderlayer.ts#L232)

___

### temporaryEquivalencesHashMap

• `Private` **temporaryEquivalencesHashMap**: [`EquivalencesHashMap`](neuroglancer_sliceview_volume_segmentation_renderlayer.EquivalencesHashMap.md)

#### Defined in

[src/neuroglancer/sliceview/volume/segmentation_renderlayer.ts:78](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/segmentation_renderlayer.ts#L78)

___

### transform

• **transform**: [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<[`RenderLayerTransformOrError`](../modules/neuroglancer_render_coordinate_transform.md#renderlayertransformorerror)\>

#### Inherited from

[SliceViewVolumeRenderLayer](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md).[transform](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md#transform)

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:69](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/renderlayer.ts#L69)

___

### userLayer

• **userLayer**: `undefined` \| [`UserLayer`](neuroglancer_layer.UserLayer.md)

#### Inherited from

[SliceViewVolumeRenderLayer](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md).[userLayer](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md#userlayer)

#### Defined in

[src/neuroglancer/renderlayer.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/renderlayer.ts#L47)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[SliceViewVolumeRenderLayer](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md).[wasDisposed](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### dataType

• `get` **dataType**(): [`DataType`](../enums/neuroglancer_util_data_type.DataType.md)

#### Returns

[`DataType`](../enums/neuroglancer_util_data_type.DataType.md)

#### Inherited from

SliceViewVolumeRenderLayer.dataType

#### Defined in

[src/neuroglancer/sliceview/volume/renderlayer.ts:321](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/renderlayer.ts#L321)

___

### gl

• `get` **gl**(): [`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

#### Returns

[`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

#### Inherited from

SliceViewVolumeRenderLayer.gl

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:176](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/renderlayer.ts#L176)

___

### visibleSourcesList

• `get` **visibleSourcesList**(): [`VisibleSourceInfo`](../interfaces/neuroglancer_sliceview_renderlayer.VisibleSourceInfo.md)<`Source`\>[]

#### Returns

[`VisibleSourceInfo`](../interfaces/neuroglancer_sliceview_renderlayer.VisibleSourceInfo.md)<`Source`\>[]

#### Inherited from

SliceViewVolumeRenderLayer.visibleSourcesList

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:124](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/renderlayer.ts#L124)

## Methods

### addRef

▸ **addRef**(): [`SegmentationRenderLayer`](neuroglancer_sliceview_volume_segmentation_renderlayer.SegmentationRenderLayer.md)

#### Returns

[`SegmentationRenderLayer`](neuroglancer_sliceview_volume_segmentation_renderlayer.SegmentationRenderLayer.md)

#### Inherited from

[SliceViewVolumeRenderLayer](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md).[addRef](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

___

### addSource

▸ **addSource**(`source`, `chunkTransform`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`VolumeChunkSource`](neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md) |
| `chunkTransform` | [`ChunkTransformParameters`](../interfaces/neuroglancer_render_coordinate_transform.ChunkTransformParameters.md) |

#### Returns

`void`

#### Inherited from

[SliceViewVolumeRenderLayer](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md).[addSource](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md#addsource)

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:101](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/renderlayer.ts#L101)

___

### beginChunkFormat

▸ **beginChunkFormat**(`sliceView`, `chunkFormat`, `projectionParameters`): [`ParameterizedShaderGetterResult`](../interfaces/neuroglancer_webgl_dynamic_shader.ParameterizedShaderGetterResult.md)<[`ShaderParameters`](../interfaces/neuroglancer_sliceview_volume_segmentation_renderlayer._internal_.ShaderParameters.md), [`ShaderContext`](../interfaces/neuroglancer_sliceview_volume_image_renderlayer._internal_.ShaderContext.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sliceView` | [`SliceView`](neuroglancer_sliceview_frontend.SliceView.md) |
| `chunkFormat` | ``null`` \| [`ChunkFormat`](../interfaces/neuroglancer_sliceview_volume_frontend.ChunkFormat.md) |
| `projectionParameters` | [`ProjectionParameters`](neuroglancer_projection_parameters.ProjectionParameters.md) |

#### Returns

[`ParameterizedShaderGetterResult`](../interfaces/neuroglancer_webgl_dynamic_shader.ParameterizedShaderGetterResult.md)<[`ShaderParameters`](../interfaces/neuroglancer_sliceview_volume_segmentation_renderlayer._internal_.ShaderParameters.md), [`ShaderContext`](../interfaces/neuroglancer_sliceview_volume_image_renderlayer._internal_.ShaderContext.md)\>

#### Inherited from

[SliceViewVolumeRenderLayer](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md).[beginChunkFormat](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md#beginchunkformat)

#### Defined in

[src/neuroglancer/sliceview/volume/renderlayer.ts:341](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/renderlayer.ts#L341)

___

### defineShader

▸ **defineShader**(`builder`, `parameters`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | [`ShaderBuilder`](neuroglancer_webgl_shader.ShaderBuilder.md) |
| `parameters` | [`ShaderParameters`](../interfaces/neuroglancer_sliceview_volume_segmentation_renderlayer._internal_.ShaderParameters.md) |

#### Returns

`void`

#### Overrides

[SliceViewVolumeRenderLayer](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md).[defineShader](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md#defineshader)

#### Defined in

[src/neuroglancer/sliceview/volume/segmentation_renderlayer.ts:123](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/segmentation_renderlayer.ts#L123)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[SliceViewVolumeRenderLayer](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md).[dispose](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

[SliceViewVolumeRenderLayer](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md).[disposed](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md#disposed)

#### Defined in

[src/neuroglancer/sliceview/volume/segmentation_renderlayer.ts:114](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/segmentation_renderlayer.ts#L114)

___

### draw

▸ **draw**(`renderContext`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderContext` | [`SliceViewRenderContext`](../interfaces/neuroglancer_sliceview_renderlayer.SliceViewRenderContext.md) |

#### Returns

`void`

#### Inherited from

[SliceViewVolumeRenderLayer](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md).[draw](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md#draw)

#### Defined in

[src/neuroglancer/sliceview/volume/renderlayer.ts:381](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/renderlayer.ts#L381)

___

### endSlice

▸ **endSlice**(`sliceView`, `shader`, `parameters`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sliceView` | [`SliceView`](neuroglancer_sliceview_frontend.SliceView.md) |
| `shader` | [`ShaderProgram`](neuroglancer_webgl_shader.ShaderProgram.md) |
| `parameters` | [`ShaderParameters`](../interfaces/neuroglancer_sliceview_volume_segmentation_renderlayer._internal_.ShaderParameters.md) |

#### Returns

`void`

#### Overrides

[SliceViewVolumeRenderLayer](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md).[endSlice](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md#endslice)

#### Defined in

[src/neuroglancer/sliceview/volume/segmentation_renderlayer.ts:267](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/segmentation_renderlayer.ts#L267)

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

#### Inherited from

[SliceViewVolumeRenderLayer](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md).[filterVisibleSources](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md#filtervisiblesources)

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/renderlayer.ts#L192)

___

### getDataHistogramCount

▸ **getDataHistogramCount**(): `number`

#### Returns

`number`

#### Inherited from

[SliceViewVolumeRenderLayer](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md).[getDataHistogramCount](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md#getdatahistogramcount)

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:79](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/renderlayer.ts#L79)

___

### getSources

▸ **getSources**(`options`): [`SliceViewSingleResolutionSource`](../interfaces/neuroglancer_sliceview_frontend.SliceViewSingleResolutionSource.md)<[`VolumeChunkSource`](neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md)\>[][]

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`SliceViewSourceOptions`](../interfaces/neuroglancer_sliceview_base.SliceViewSourceOptions.md) |

#### Returns

[`SliceViewSingleResolutionSource`](../interfaces/neuroglancer_sliceview_frontend.SliceViewSingleResolutionSource.md)<[`VolumeChunkSource`](neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md)\>[][]

#### Overrides

[SliceViewVolumeRenderLayer](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md).[getSources](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md#getsources)

#### Defined in

[src/neuroglancer/sliceview/volume/segmentation_renderlayer.ts:118](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/segmentation_renderlayer.ts#L118)

___

### getValueAt

▸ **getValueAt**(`globalPosition`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `globalPosition` | `Float32Array` |

#### Returns

`any`

#### Inherited from

[SliceViewVolumeRenderLayer](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md).[getValueAt](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md#getvalueat)

#### Defined in

[src/neuroglancer/sliceview/volume/renderlayer.ts:325](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/renderlayer.ts#L325)

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

[SliceViewVolumeRenderLayer](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md).[handleAction](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md#handleaction)

#### Defined in

[src/neuroglancer/renderlayer.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/renderlayer.ts#L54)

___

### initializeCounterpart

▸ **initializeCounterpart**(): `void`

#### Returns

`void`

#### Inherited from

[SliceViewVolumeRenderLayer](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md).[initializeCounterpart](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md#initializecounterpart)

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:160](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/renderlayer.ts#L160)

___

### initializeShader

▸ **initializeShader**(`_sliceView`, `shader`, `parameters`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_sliceView` | [`SliceView`](neuroglancer_sliceview_frontend.SliceView.md) |
| `shader` | [`ShaderProgram`](neuroglancer_webgl_shader.ShaderProgram.md) |
| `parameters` | [`ShaderParameters`](../interfaces/neuroglancer_sliceview_volume_segmentation_renderlayer._internal_.ShaderParameters.md) |

#### Returns

`void`

#### Overrides

[SliceViewVolumeRenderLayer](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md).[initializeShader](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md#initializeshader)

#### Defined in

[src/neuroglancer/sliceview/volume/segmentation_renderlayer.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/segmentation_renderlayer.ts#L219)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[SliceViewVolumeRenderLayer](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md).[refCountReachedZero](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md#refcountreachedzero)

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

[SliceViewVolumeRenderLayer](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md).[registerCancellable](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md#registercancellable)

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

[SliceViewVolumeRenderLayer](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md).[registerDisposer](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md#registerdisposer)

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

[SliceViewVolumeRenderLayer](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md).[registerEventListener](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L95)

___

### removeSource

▸ **removeSource**(`source`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`VolumeChunkSource`](neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md) |

#### Returns

`void`

#### Inherited from

[SliceViewVolumeRenderLayer](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md).[removeSource](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md#removesource)

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:113](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/renderlayer.ts#L113)

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

#### Inherited from

[SliceViewVolumeRenderLayer](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md).[setGLBlendMode](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md#setglblendmode)

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:180](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/renderlayer.ts#L180)

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

[SliceViewVolumeRenderLayer](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md).[transformPickedValue](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md#transformpickedvalue)

#### Defined in

[src/neuroglancer/renderlayer.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/renderlayer.ts#L66)

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

[SliceViewVolumeRenderLayer](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md).[unregisterDisposer](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L85)

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

[SliceViewVolumeRenderLayer](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md).[updateMouseState](neuroglancer_sliceview_volume_renderlayer.SliceViewVolumeRenderLayer.md#updatemousestate)

#### Defined in

[src/neuroglancer/renderlayer.ts:74](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/renderlayer.ts#L74)
