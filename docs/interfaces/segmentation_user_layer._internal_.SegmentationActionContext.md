[neuroglancer](../README.md) / [Modules](../modules.md) / [segmentation\_user\_layer](../modules/segmentation_user_layer.md) / [<internal\>](../modules/segmentation_user_layer._internal_.md) / SegmentationActionContext

# Interface: SegmentationActionContext

[segmentation_user_layer](../modules/segmentation_user_layer.md).[<internal>](../modules/segmentation_user_layer._internal_.md).SegmentationActionContext

## Hierarchy

- [`LayerActionContext`](../classes/layer.LayerActionContext.md)

  ↳ **`SegmentationActionContext`**

## Table of contents

### Properties

- [callbacks](segmentation_user_layer._internal_.SegmentationActionContext.md#callbacks)
- [segmentationToggleSegmentState](segmentation_user_layer._internal_.SegmentationActionContext.md#segmentationtogglesegmentstate)

### Methods

- [defer](segmentation_user_layer._internal_.SegmentationActionContext.md#defer)

## Properties

### callbacks

• **callbacks**: () => `void`[] = `[]`

#### Inherited from

[LayerActionContext](../classes/layer.LayerActionContext.md).[callbacks](../classes/layer.LayerActionContext.md#callbacks)

#### Defined in

[src/neuroglancer/layer.ts:80](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L80)

___

### segmentationToggleSegmentState

• `Optional` **segmentationToggleSegmentState**: `boolean`

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:330](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_user_layer.ts#L330)

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

[LayerActionContext](../classes/layer.LayerActionContext.md).[defer](../classes/layer.LayerActionContext.md#defer)

#### Defined in

[src/neuroglancer/layer.ts:81](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L81)
