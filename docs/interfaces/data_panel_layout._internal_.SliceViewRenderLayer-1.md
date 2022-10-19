[neuroglancer](../README.md) / [Modules](../modules.md) / [data\_panel\_layout](../modules/data_panel_layout.md) / [<internal\>](../modules/data_panel_layout._internal_.md) / SliceViewRenderLayer

# Interface: SliceViewRenderLayer

[data_panel_layout](../modules/data_panel_layout.md).[<internal>](../modules/data_panel_layout._internal_.md).SliceViewRenderLayer

## Table of contents

### Properties

- [localPosition](data_panel_layout._internal_.SliceViewRenderLayer-1.md#localposition)
- [renderScaleTarget](data_panel_layout._internal_.SliceViewRenderLayer-1.md#renderscaletarget)

### Methods

- [filterVisibleSources](data_panel_layout._internal_.SliceViewRenderLayer-1.md#filtervisiblesources)

## Properties

### localPosition

• **localPosition**: [`WatchableValueInterface`](trackable_value.WatchableValueInterface.md)<`Float32Array`\>

Current position of non-global layer dimensions.

#### Defined in

[src/neuroglancer/sliceview/base.ts:153](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/base.ts#L153)

___

### renderScaleTarget

• **renderScaleTarget**: [`WatchableValueInterface`](trackable_value.WatchableValueInterface.md)<`number`\>

#### Defined in

[src/neuroglancer/sliceview/base.ts:154](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/base.ts#L154)

## Methods

### filterVisibleSources

▸ **filterVisibleSources**(`sliceView`, `sources`): [`Iterable`](axes_lines._internal_.Iterable.md)<[`TransformedSource`](data_panel_layout._internal_.TransformedSource.md)<[`SliceViewRenderLayer`](data_panel_layout._internal_.SliceViewRenderLayer-1.md), [`SliceViewChunkSource`](data_panel_layout._internal_.SliceViewChunkSource-1.md)<[`SliceViewChunkSpecification`](data_panel_layout._internal_.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sliceView` | [`SliceViewBase`](../classes/data_panel_layout._internal_.SliceViewBase.md)<[`SliceViewChunkSource`](data_panel_layout._internal_.SliceViewChunkSource-1.md)<[`SliceViewChunkSpecification`](data_panel_layout._internal_.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>\>, [`SliceViewRenderLayer`](data_panel_layout._internal_.SliceViewRenderLayer-1.md), [`TransformedSource`](data_panel_layout._internal_.TransformedSource.md)<[`SliceViewRenderLayer`](data_panel_layout._internal_.SliceViewRenderLayer-1.md), [`SliceViewChunkSource`](data_panel_layout._internal_.SliceViewChunkSource-1.md)<[`SliceViewChunkSpecification`](data_panel_layout._internal_.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>\>\>\> |
| `sources` | readonly [`TransformedSource`](data_panel_layout._internal_.TransformedSource.md)<[`SliceViewRenderLayer`](data_panel_layout._internal_.SliceViewRenderLayer-1.md), [`SliceViewChunkSource`](data_panel_layout._internal_.SliceViewChunkSource-1.md)<[`SliceViewChunkSpecification`](data_panel_layout._internal_.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>\>\>[] |

#### Returns

[`Iterable`](axes_lines._internal_.Iterable.md)<[`TransformedSource`](data_panel_layout._internal_.TransformedSource.md)<[`SliceViewRenderLayer`](data_panel_layout._internal_.SliceViewRenderLayer-1.md), [`SliceViewChunkSource`](data_panel_layout._internal_.SliceViewChunkSource-1.md)<[`SliceViewChunkSpecification`](data_panel_layout._internal_.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>\>\>\>

#### Defined in

[src/neuroglancer/sliceview/base.ts:156](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/base.ts#L156)
