[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / TrackableValueInterface

# Interface: TrackableValueInterface<T\>

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).TrackableValueInterface

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`WatchableValueInterface`](annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`T`\>

- [`Trackable`](util_trackable.Trackable.md)

  ↳ **`TrackableValueInterface`**

## Implemented by

- [`SelectedLegacyTool`](../classes/ui_tool.SelectedLegacyTool.md)
- [`TrackableDataSelectionState`](../classes/annotation_annotation_layer_state._internal_.TrackableDataSelectionState.md)

## Table of contents

### Properties

- [changed](annotation_annotation_layer_state._internal_.TrackableValueInterface.md#changed)
- [value](annotation_annotation_layer_state._internal_.TrackableValueInterface.md#value)

### Methods

- [reset](annotation_annotation_layer_state._internal_.TrackableValueInterface.md#reset)
- [restoreState](annotation_annotation_layer_state._internal_.TrackableValueInterface.md#restorestate)
- [toJSON](annotation_annotation_layer_state._internal_.TrackableValueInterface.md#tojson)

## Properties

### changed

• **changed**: [`NullaryReadonlySignal`](../modules/util_signal.md#nullaryreadonlysignal)

#### Inherited from

[Trackable](util_trackable.Trackable.md).[changed](util_trackable.Trackable.md#changed)

#### Defined in

[src/neuroglancer/trackable_value.ts:24](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/trackable_value.ts#L24)

___

### value

• **value**: `T`

#### Inherited from

[WatchableValueInterface](annotation_annotation_layer_state._internal_.WatchableValueInterface.md).[value](annotation_annotation_layer_state._internal_.WatchableValueInterface.md#value)

#### Defined in

[src/neuroglancer/trackable_value.ts:23](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/trackable_value.ts#L23)

## Methods

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Inherited from

[Trackable](util_trackable.Trackable.md).[reset](util_trackable.Trackable.md#reset)

#### Defined in

[src/neuroglancer/util/trackable.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/trackable.ts#L36)

___

### restoreState

▸ **restoreState**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `any` |

#### Returns

`void`

#### Inherited from

[Trackable](util_trackable.Trackable.md).[restoreState](util_trackable.Trackable.md#restorestate)

#### Defined in

[src/neuroglancer/util/trackable.ts:35](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/trackable.ts#L35)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Inherited from

[Trackable](util_trackable.Trackable.md).[toJSON](util_trackable.Trackable.md#tojson)

#### Defined in

[src/neuroglancer/util/trackable.ts:38](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/trackable.ts#L38)
