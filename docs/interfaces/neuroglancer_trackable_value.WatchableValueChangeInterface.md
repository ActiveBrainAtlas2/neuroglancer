[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/trackable\_value](../modules/neuroglancer_trackable_value.md) / WatchableValueChangeInterface

# Interface: WatchableValueChangeInterface<T\>

[neuroglancer/trackable_value](../modules/neuroglancer_trackable_value.md).WatchableValueChangeInterface

## Type parameters

| Name |
| :------ |
| `T` |

## Implemented by

- [`DerivedProjectionParameters`](../classes/neuroglancer_renderlayer.DerivedProjectionParameters.md)
- [`SharedProjectionParametersBackend`](../classes/neuroglancer_render_layer_backend.SharedProjectionParametersBackend.md)

## Table of contents

### Properties

- [changed](neuroglancer_trackable_value.WatchableValueChangeInterface.md#changed)
- [value](neuroglancer_trackable_value.WatchableValueChangeInterface.md#value)

## Properties

### changed

• `Readonly` **changed**: [`Signal`](../classes/neuroglancer_util_signal.Signal.md)<(`oldValue`: `T`, `newValue`: `T`) => `void`\>

#### Defined in

[src/neuroglancer/trackable_value.ts:29](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/trackable_value.ts#L29)

___

### value

• `Readonly` **value**: `T`

#### Defined in

[src/neuroglancer/trackable_value.ts:28](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/trackable_value.ts#L28)
