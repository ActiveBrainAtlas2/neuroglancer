[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/trackable\_value](../modules/neuroglancer_trackable_value.md) / WatchableValueInterface

# Interface: WatchableValueInterface<T\>

[neuroglancer/trackable_value](../modules/neuroglancer_trackable_value.md).WatchableValueInterface

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- **`WatchableValueInterface`**

  ↳ [`TrackableValueInterface`](neuroglancer_trackable_value.TrackableValueInterface.md)

## Implemented by

- [`AggregateWatchableValue`](../classes/neuroglancer_trackable_value.AggregateWatchableValue.md)
- [`CachedLazyDerivedWatchableValue`](../classes/neuroglancer_annotation_annotation_layer_state._internal_.CachedLazyDerivedWatchableValue.md)
- [`CachedWatchableValue`](../classes/neuroglancer_trackable_value.CachedWatchableValue.md)
- [`ComputedWatchableValue`](../classes/neuroglancer_trackable_value.ComputedWatchableValue.md)
- [`DerivedWatchableValue`](../classes/neuroglancer_trackable_value._internal_.DerivedWatchableValue.md)
- [`IndirectWatchableValue`](../classes/neuroglancer_trackable_value.IndirectWatchableValue.md)
- [`MergedAnnotationStates`](../classes/neuroglancer_ui_annotations.MergedAnnotationStates.md)
- [`ShaderControlState`](../classes/neuroglancer_webgl_shader_ui_controls.ShaderControlState.md)
- [`SharedDisjointUint64Sets`](../classes/neuroglancer_shared_disjoint_sets.SharedDisjointUint64Sets.md)
- [`SharedWatchableValue`](../classes/neuroglancer_shared_watchable_value.SharedWatchableValue.md)
- [`TrackableDepthRange`](../classes/neuroglancer_navigation_state.TrackableDepthRange.md)
- [`TrackableRelativeDisplayScales`](../classes/neuroglancer_navigation_state.TrackableRelativeDisplayScales.md)
- [`TrackableZoom`](../classes/neuroglancer_navigation_state._internal_.TrackableZoom.md)
- [`Uint64Map`](../classes/neuroglancer_uint64_map.Uint64Map.md)
- [`Uint64Set`](../classes/neuroglancer_uint64_set.Uint64Set.md)
- [`WatchableCoordinateSpaceTransform`](../classes/neuroglancer_coordinate_transform.WatchableCoordinateSpaceTransform.md)
- [`WatchableRefCounted`](../classes/neuroglancer_trackable_value.WatchableRefCounted.md)
- [`WatchableShaderUiControls`](../classes/neuroglancer_webgl_shader_ui_controls.WatchableShaderUiControls.md)
- [`WatchableValue`](../classes/neuroglancer_trackable_value.WatchableValue.md)

## Table of contents

### Properties

- [changed](neuroglancer_trackable_value.WatchableValueInterface.md#changed)
- [value](neuroglancer_trackable_value.WatchableValueInterface.md#value)

## Properties

### changed

• **changed**: [`NullaryReadonlySignal`](../modules/neuroglancer_util_signal.md#nullaryreadonlysignal)

#### Defined in

[src/neuroglancer/trackable_value.ts:24](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/trackable_value.ts#L24)

___

### value

• **value**: `T`

#### Defined in

[src/neuroglancer/trackable_value.ts:23](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/trackable_value.ts#L23)
