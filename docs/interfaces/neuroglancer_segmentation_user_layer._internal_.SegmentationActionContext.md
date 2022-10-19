[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/segmentation\_user\_layer](../modules/neuroglancer_segmentation_user_layer.md) / [<internal\>](../modules/neuroglancer_segmentation_user_layer._internal_.md) / SegmentationActionContext

# Interface: SegmentationActionContext

[neuroglancer/segmentation_user_layer](../modules/neuroglancer_segmentation_user_layer.md).[<internal>](../modules/neuroglancer_segmentation_user_layer._internal_.md).SegmentationActionContext

## Hierarchy

- [`LayerActionContext`](../classes/neuroglancer_layer.LayerActionContext.md)

  ↳ **`SegmentationActionContext`**

## Table of contents

### Properties

- [callbacks](neuroglancer_segmentation_user_layer._internal_.SegmentationActionContext.md#callbacks)
- [segmentationToggleSegmentState](neuroglancer_segmentation_user_layer._internal_.SegmentationActionContext.md#segmentationtogglesegmentstate)

### Methods

- [defer](neuroglancer_segmentation_user_layer._internal_.SegmentationActionContext.md#defer)

## Properties

### callbacks

• **callbacks**: () => `void`[] = `[]`

#### Inherited from

[LayerActionContext](../classes/neuroglancer_layer.LayerActionContext.md).[callbacks](../classes/neuroglancer_layer.LayerActionContext.md#callbacks)

#### Defined in

[src/neuroglancer/layer.ts:80](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L80)

___

### segmentationToggleSegmentState

• `Optional` **segmentationToggleSegmentState**: `boolean`

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:330](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L330)

## Methods

### defer

▸ **defer**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => `void` |

#### Returns

`void`

#### Inherited from

[LayerActionContext](../classes/neuroglancer_layer.LayerActionContext.md).[defer](../classes/neuroglancer_layer.LayerActionContext.md#defer)

#### Defined in

[src/neuroglancer/layer.ts:81](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L81)
