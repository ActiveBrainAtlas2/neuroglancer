[neuroglancer](../README.md) / [Modules](../modules.md) / [render\_scale\_statistics](../modules/render_scale_statistics.md) / RenderScaleHistogram

# Class: RenderScaleHistogram

[render_scale_statistics](../modules/render_scale_statistics.md).RenderScaleHistogram

## Table of contents

### Constructors

- [constructor](render_scale_statistics.RenderScaleHistogram.md#constructor)

### Properties

- [changed](render_scale_statistics.RenderScaleHistogram.md#changed)
- [frameNumber](render_scale_statistics.RenderScaleHistogram.md#framenumber)
- [numHistogramRows](render_scale_statistics.RenderScaleHistogram.md#numhistogramrows)
- [spatialScales](render_scale_statistics.RenderScaleHistogram.md#spatialscales)
- [value](render_scale_statistics.RenderScaleHistogram.md#value)
- [visibility](render_scale_statistics.RenderScaleHistogram.md#visibility)

### Methods

- [add](render_scale_statistics.RenderScaleHistogram.md#add)
- [begin](render_scale_statistics.RenderScaleHistogram.md#begin)

## Constructors

### constructor

• **new RenderScaleHistogram**()

## Properties

### changed

• **changed**: `NullarySignal`

#### Defined in

[src/neuroglancer/render_scale_statistics.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/render_scale_statistics.ts#L40)

___

### frameNumber

• **frameNumber**: `number` = `-1`

Frame number corresponding to the current histogram.

#### Defined in

[src/neuroglancer/render_scale_statistics.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/render_scale_statistics.ts#L45)

___

### numHistogramRows

• **numHistogramRows**: `number` = `1`

Current number of rows allocated for the histogram.

#### Defined in

[src/neuroglancer/render_scale_statistics.ts:56](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/render_scale_statistics.ts#L56)

___

### spatialScales

• **spatialScales**: `Map`<`number`, `number`\>

Maps from spatial scale (nanometers) to histogram row index in the range
`[0, spatialScales.size)`.

#### Defined in

[src/neuroglancer/render_scale_statistics.ts:51](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/render_scale_statistics.ts#L51)

___

### value

• **value**: `Uint32Array`

Initially allocate one row.

#### Defined in

[src/neuroglancer/render_scale_statistics.ts:61](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/render_scale_statistics.ts#L61)

___

### visibility

• **visibility**: `VisibilityPriorityAggregator`

#### Defined in

[src/neuroglancer/render_scale_statistics.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/render_scale_statistics.ts#L39)

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

[src/neuroglancer/render_scale_statistics.ts:80](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/render_scale_statistics.ts#L80)

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

[src/neuroglancer/render_scale_statistics.ts:63](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/render_scale_statistics.ts#L63)
