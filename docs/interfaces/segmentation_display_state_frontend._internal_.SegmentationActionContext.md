[neuroglancer](../README.md) / [Modules](../modules.md) / [segmentation\_display\_state/frontend](../modules/segmentation_display_state_frontend.md) / [<internal\>](../modules/segmentation_display_state_frontend._internal_.md) / SegmentationActionContext

# Interface: SegmentationActionContext

[segmentation_display_state/frontend](../modules/segmentation_display_state_frontend.md).[<internal>](../modules/segmentation_display_state_frontend._internal_.md).SegmentationActionContext

## Hierarchy

- [`LayerActionContext`](../classes/annotation_annotation_layer_state._internal_.LayerActionContext.md)

  ↳ **`SegmentationActionContext`**

## Table of contents

### Properties

- [callbacks](segmentation_display_state_frontend._internal_.SegmentationActionContext.md#callbacks)
- [segmentationToggleSegmentState](segmentation_display_state_frontend._internal_.SegmentationActionContext.md#segmentationtogglesegmentstate)

### Methods

- [defer](segmentation_display_state_frontend._internal_.SegmentationActionContext.md#defer)

## Properties

### callbacks

• **callbacks**: () => `void`[] = `[]`

#### Inherited from

[LayerActionContext](../classes/annotation_annotation_layer_state._internal_.LayerActionContext.md).[callbacks](../classes/annotation_annotation_layer_state._internal_.LayerActionContext.md#callbacks)

#### Defined in

[src/neuroglancer/layer.ts:80](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L80)

___

### segmentationToggleSegmentState

• `Optional` **segmentationToggleSegmentState**: `boolean`

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:330](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_user_layer.ts#L330)

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

[LayerActionContext](../classes/annotation_annotation_layer_state._internal_.LayerActionContext.md).[defer](../classes/annotation_annotation_layer_state._internal_.LayerActionContext.md#defer)

#### Defined in

[src/neuroglancer/layer.ts:81](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L81)
