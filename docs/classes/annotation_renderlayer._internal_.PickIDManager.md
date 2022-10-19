[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/renderlayer](../modules/annotation_renderlayer.md) / [<internal\>](../modules/annotation_renderlayer._internal_.md) / PickIDManager

# Class: PickIDManager

[annotation/renderlayer](../modules/annotation_renderlayer.md).[<internal>](../modules/annotation_renderlayer._internal_.md).PickIDManager

## Table of contents

### Constructors

- [constructor](annotation_renderlayer._internal_.PickIDManager.md#constructor)

### Properties

- [nextPickID](annotation_renderlayer._internal_.PickIDManager.md#nextpickid)
- [pickData](annotation_renderlayer._internal_.PickIDManager.md#pickdata)
- [renderLayers](annotation_renderlayer._internal_.PickIDManager.md#renderlayers)
- [values](annotation_renderlayer._internal_.PickIDManager.md#values)

### Methods

- [clear](annotation_renderlayer._internal_.PickIDManager.md#clear)
- [register](annotation_renderlayer._internal_.PickIDManager.md#register)
- [registerUint64](annotation_renderlayer._internal_.PickIDManager.md#registeruint64)
- [setMouseState](annotation_renderlayer._internal_.PickIDManager.md#setmousestate)

## Constructors

### constructor

• **new PickIDManager**()

#### Defined in

[src/neuroglancer/object_picking.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/object_picking.ts#L40)

## Properties

### nextPickID

• `Private` **nextPickID**: `number` = `1`

#### Defined in

[src/neuroglancer/object_picking.ts:38](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/object_picking.ts#L38)

___

### pickData

• `Private` **pickData**: `any`[]

#### Defined in

[src/neuroglancer/object_picking.ts:29](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/object_picking.ts#L29)

___

### renderLayers

• `Private` **renderLayers**: (``null`` \| [`RenderLayer`](annotation_annotation_layer_state._internal_.RenderLayer.md))[]

This specifies the render layer corresponding to each registered entry.

#### Defined in

[src/neuroglancer/object_picking.ts:27](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/object_picking.ts#L27)

___

### values

• `Private` **values**: `number`[]

This contains 3 consecutive values, specifying (startPickID, low, high), for each registered
entry.  startPickID specifies the first uint32 pick ID corresponding to the entry.  low and
high specify two additional numbers associated with the entry.

#### Defined in

[src/neuroglancer/object_picking.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/object_picking.ts#L36)

## Methods

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/object_picking.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/object_picking.ts#L42)

___

### register

▸ **register**(`renderLayer`, `count?`, `low?`, `high?`, `data?`): `number`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `renderLayer` | [`RenderLayer`](annotation_annotation_layer_state._internal_.RenderLayer.md) | `undefined` |
| `count` | `number` | `1` |
| `low` | `number` | `0` |
| `high` | `number` | `0` |
| `data` | `any` | `null` |

#### Returns

`number`

#### Defined in

[src/neuroglancer/object_picking.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/object_picking.ts#L53)

___

### registerUint64

▸ **registerUint64**(`renderLayer`, `x`, `count?`, `data?`): `number`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `renderLayer` | [`RenderLayer`](annotation_annotation_layer_state._internal_.RenderLayer.md) | `undefined` |
| `x` | [`Uint64`](util_uint64.Uint64.md) | `undefined` |
| `count` | `number` | `1` |
| `data` | `any` | `null` |

#### Returns

`number`

#### Defined in

[src/neuroglancer/object_picking.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/object_picking.ts#L49)

___

### setMouseState

▸ **setMouseState**(`mouseState`, `pickID`): `void`

Set the object state according to the specified pick ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `mouseState` | [`MouseSelectionState`](annotation_annotation_layer_state._internal_.MouseSelectionState.md) |
| `pickID` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/object_picking.ts:70](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/object_picking.ts#L70)
