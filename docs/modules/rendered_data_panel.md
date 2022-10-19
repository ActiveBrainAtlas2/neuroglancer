[neuroglancer](../README.md) / [Modules](../modules.md) / rendered\_data\_panel

# Module: rendered\_data\_panel

## Table of contents

### Classes

- [FramePickingData](../classes/rendered_data_panel.FramePickingData.md)
- [PickRequest](../classes/rendered_data_panel.PickRequest.md)
- [RenderedDataPanel](../classes/rendered_data_panel.RenderedDataPanel.md)

### Interfaces

- [RenderedDataViewerState](../interfaces/rendered_data_panel.RenderedDataViewerState.md)

### Variables

- [pickDiameter](rendered_data_panel.md#pickdiameter)
- [pickOffsetSequence](rendered_data_panel.md#pickoffsetsequence)
- [pickRadius](rendered_data_panel.md#pickradius)

### Functions

- [clearOutOfBoundsPickData](rendered_data_panel.md#clearoutofboundspickdata)

## Variables

### pickDiameter

• `Const` **pickDiameter**: `number`

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:69](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/rendered_data_panel.ts#L69)

___

### pickOffsetSequence

• `Const` **pickOffsetSequence**: `Uint32Array`

Sequence of offsets into C order (pickDiamater, pickDiamater) array in order of increasing
distance from center.

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/rendered_data_panel.ts#L75)

___

### pickRadius

• `Const` **pickRadius**: ``5``

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:68](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/rendered_data_panel.ts#L68)

## Functions

### clearOutOfBoundsPickData

▸ **clearOutOfBoundsPickData**(`buffer`, `baseOffset`, `stride`, `glWindowX`, `glWindowY`, `viewportWidth`, `viewportHeight`): `void`

Sets array elements to 0 that would be outside the viewport.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `buffer` | `Float32Array` | Array view, which contains a C order (pickDiameter, pickDiameter) array. |
| `baseOffset` | `number` | Offset into `buffer` corresponding to (0, 0). |
| `stride` | `number` | Stride between consecutive elements of the array. |
| `glWindowX` | `number` | Center x position, must be integer. |
| `glWindowY` | `number` | Center y position, must be integer. |
| `viewportWidth` | `number` | Width of viewport in pixels. |
| `viewportHeight` | `number` | Width of viewport in pixels. |

#### Returns

`void`

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:110](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/rendered_data_panel.ts#L110)
