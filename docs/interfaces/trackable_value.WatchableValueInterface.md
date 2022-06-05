[neuroglancer](../README.md) / [Modules](../modules.md) / [trackable\_value](../modules/trackable_value.md) / WatchableValueInterface

# Interface: WatchableValueInterface<T\>

[trackable_value](../modules/trackable_value.md).WatchableValueInterface

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- **`WatchableValueInterface`**

  ↳ [`TrackableValueInterface`](trackable_value.TrackableValueInterface.md)

## Implemented by

- [`AggregateWatchableValue`](../classes/trackable_value.AggregateWatchableValue.md)
- [`CachedWatchableValue`](../classes/trackable_value.CachedWatchableValue.md)
- [`ComputedWatchableValue`](../classes/trackable_value.ComputedWatchableValue.md)
- [`IndirectWatchableValue`](../classes/trackable_value.IndirectWatchableValue.md)
- [`SharedDisjointUint64Sets`](../classes/shared_disjoint_sets.SharedDisjointUint64Sets.md)
- [`SharedWatchableValue`](../classes/shared_watchable_value.SharedWatchableValue.md)
- [`TrackableDepthRange`](../classes/navigation_state.TrackableDepthRange.md)
- [`TrackableRelativeDisplayScales`](../classes/navigation_state.TrackableRelativeDisplayScales.md)
- [`Uint64Map`](../classes/uint64_map.Uint64Map.md)
- [`Uint64Set`](../classes/uint64_set.Uint64Set.md)
- [`WatchableCoordinateSpaceTransform`](../classes/coordinate_transform.WatchableCoordinateSpaceTransform.md)
- [`WatchableRefCounted`](../classes/trackable_value.WatchableRefCounted.md)
- [`WatchableValue`](../classes/trackable_value.WatchableValue.md)

## Table of contents

### Properties

- [changed](trackable_value.WatchableValueInterface.md#changed)
- [value](trackable_value.WatchableValueInterface.md#value)

## Properties

### changed

• **changed**: `NullaryReadonlySignal`

#### Defined in

[src/neuroglancer/trackable_value.ts:24](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/trackable_value.ts#L24)

___

### value

• **value**: `T`

#### Defined in

[src/neuroglancer/trackable_value.ts:23](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/trackable_value.ts#L23)
