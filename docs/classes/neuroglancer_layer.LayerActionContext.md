[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/layer](../modules/neuroglancer_layer.md) / LayerActionContext

# Class: LayerActionContext

[neuroglancer/layer](../modules/neuroglancer_layer.md).LayerActionContext

## Hierarchy

- **`LayerActionContext`**

  ↳ [`SegmentationActionContext`](../interfaces/neuroglancer_segmentation_user_layer._internal_.SegmentationActionContext.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_layer.LayerActionContext.md#constructor)

### Properties

- [callbacks](neuroglancer_layer.LayerActionContext.md#callbacks)

### Methods

- [defer](neuroglancer_layer.LayerActionContext.md#defer)

## Constructors

### constructor

• **new LayerActionContext**()

## Properties

### callbacks

• **callbacks**: () => `void`[] = `[]`

#### Defined in

[src/neuroglancer/layer.ts:80](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L80)

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

[src/neuroglancer/layer.ts:81](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L81)
