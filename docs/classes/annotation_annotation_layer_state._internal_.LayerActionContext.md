[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / LayerActionContext

# Class: LayerActionContext

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).LayerActionContext

## Hierarchy

- **`LayerActionContext`**

  ↳ [`SegmentationActionContext`](../interfaces/segmentation_display_state_frontend._internal_.SegmentationActionContext.md)

## Table of contents

### Constructors

- [constructor](annotation_annotation_layer_state._internal_.LayerActionContext.md#constructor)

### Properties

- [callbacks](annotation_annotation_layer_state._internal_.LayerActionContext.md#callbacks)

### Methods

- [defer](annotation_annotation_layer_state._internal_.LayerActionContext.md#defer)

## Constructors

### constructor

• **new LayerActionContext**()

## Properties

### callbacks

• **callbacks**: () => `void`[] = `[]`

#### Defined in

[src/neuroglancer/layer.ts:80](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L80)

## Methods

### defer

▸ **defer**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => `void` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:81](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L81)
