[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/renderlayer](../modules/annotation_renderlayer.md) / [<internal\>](../modules/annotation_renderlayer._internal_.md) / RenderScaleHistogram

# Class: RenderScaleHistogram

[annotation/renderlayer](../modules/annotation_renderlayer.md).[<internal>](../modules/annotation_renderlayer._internal_.md).RenderScaleHistogram

## Table of contents

### Constructors

- [constructor](annotation_renderlayer._internal_.RenderScaleHistogram.md#constructor)

### Properties

- [changed](annotation_renderlayer._internal_.RenderScaleHistogram.md#changed)
- [frameNumber](annotation_renderlayer._internal_.RenderScaleHistogram.md#framenumber)
- [numHistogramRows](annotation_renderlayer._internal_.RenderScaleHistogram.md#numhistogramrows)
- [spatialScales](annotation_renderlayer._internal_.RenderScaleHistogram.md#spatialscales)
- [value](annotation_renderlayer._internal_.RenderScaleHistogram.md#value)
- [visibility](annotation_renderlayer._internal_.RenderScaleHistogram.md#visibility)

### Methods

- [add](annotation_renderlayer._internal_.RenderScaleHistogram.md#add)
- [begin](annotation_renderlayer._internal_.RenderScaleHistogram.md#begin)

## Constructors

### constructor

• **new RenderScaleHistogram**()

## Properties

### changed

• **changed**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/render_scale_statistics.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/render_scale_statistics.ts#L40)

___

### frameNumber

• **frameNumber**: `number` = `-1`

Frame number corresponding to the current histogram.

#### Defined in

[src/neuroglancer/render_scale_statistics.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/render_scale_statistics.ts#L45)

___

### numHistogramRows

• **numHistogramRows**: `number` = `1`

Current number of rows allocated for the histogram.

#### Defined in

[src/neuroglancer/render_scale_statistics.ts:56](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/render_scale_statistics.ts#L56)

___

### spatialScales

• **spatialScales**: `Map`<`number`, `number`\>

Maps from spatial scale (nanometers) to histogram row index in the range
`[0, spatialScales.size)`.

#### Defined in

[src/neuroglancer/render_scale_statistics.ts:51](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/render_scale_statistics.ts#L51)

___

### value

• **value**: `Uint32Array`

Initially allocate one row.

#### Defined in

[src/neuroglancer/render_scale_statistics.ts:61](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/render_scale_statistics.ts#L61)

___

### visibility

• **visibility**: [`VisibilityPriorityAggregator`](visibility_priority_frontend.VisibilityPriorityAggregator.md)

#### Defined in

[src/neuroglancer/render_scale_statistics.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/render_scale_statistics.ts#L39)

## Methods

### add

▸ **add**(`spatialScale`, `renderScale`, `presentCount`, `notPresentCount`): `void`

Adds a count to the histogram.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `spatialScale` | `number` | Spatial resolution of data in nanometers. |
| `renderScale` | `number` | Rendered scale of data in screen pixels. |
| `presentCount` | `number` | Number of present chunks. |
| `notPresentCount` | `number` | Number of desired but not-present chunks. |

#### Returns

`void`

#### Defined in

[src/neuroglancer/render_scale_statistics.ts:80](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/render_scale_statistics.ts#L80)

___

### begin

▸ **begin**(`frameNumber`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `frameNumber` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/render_scale_statistics.ts:63](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/render_scale_statistics.ts#L63)
