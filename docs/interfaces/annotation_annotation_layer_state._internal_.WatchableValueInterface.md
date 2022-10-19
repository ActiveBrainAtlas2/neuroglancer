[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / WatchableValueInterface

# Interface: WatchableValueInterface<T\>

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).WatchableValueInterface

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- **`WatchableValueInterface`**

  ↳ [`TrackableValueInterface`](annotation_annotation_layer_state._internal_.TrackableValueInterface.md)

## Implemented by

- [`CachedLazyDerivedWatchableValue`](../classes/annotation_annotation_layer_state._internal_.CachedLazyDerivedWatchableValue.md)
- [`CachedWatchableValue`](../classes/annotation_annotation_layer_state._internal_.CachedWatchableValue.md)
- [`DerivedWatchableValue`](../classes/datasource_state_share._internal_.DerivedWatchableValue.md)
- [`MergedAnnotationStates`](../classes/ui_annotations.MergedAnnotationStates.md)
- [`ShaderControlState`](../classes/webgl_shader_ui_controls.ShaderControlState.md)
- [`SharedDisjointUint64Sets`](../classes/mesh_backend._internal_.SharedDisjointUint64Sets.md)
- [`SharedWatchableValue`](../classes/chunk_manager_backend._internal_.SharedWatchableValue.md)
- [`TrackableDepthRange`](../classes/annotation_polygon._internal_.TrackableDepthRange.md)
- [`TrackableRelativeDisplayScales`](../classes/annotation_polygon._internal_.TrackableRelativeDisplayScales.md)
- [`TrackableZoom`](../classes/annotation_polygon._internal_.TrackableZoom.md)
- [`Uint64Map`](../classes/mesh_frontend._internal_.Uint64Map.md)
- [`Uint64Set`](../classes/mesh_backend._internal_.Uint64Set.md)
- [`WatchableCoordinateSpaceTransform`](../classes/annotation_annotation_layer_state._internal_.WatchableCoordinateSpaceTransform.md)
- [`WatchableShaderUiControls`](../classes/webgl_shader_ui_controls.WatchableShaderUiControls.md)
- [`WatchableValue`](../classes/annotation_annotation_layer_state._internal_.WatchableValue.md)

## Table of contents

### Properties

- [changed](annotation_annotation_layer_state._internal_.WatchableValueInterface.md#changed)
- [value](annotation_annotation_layer_state._internal_.WatchableValueInterface.md#value)

## Properties

### changed

• **changed**: [`NullaryReadonlySignal`](../modules/util_signal.md#nullaryreadonlysignal)

#### Defined in

[src/neuroglancer/trackable_value.ts:24](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/trackable_value.ts#L24)

___

### value

• **value**: `T`

#### Defined in

[src/neuroglancer/trackable_value.ts:23](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/trackable_value.ts#L23)
