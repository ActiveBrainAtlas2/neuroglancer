[neuroglancer](../README.md) / [Modules](../modules.md) / [trackable\_value](../modules/trackable_value.md) / WatchableValueChangeInterface

# Interface: WatchableValueChangeInterface<T\>

[trackable_value](../modules/trackable_value.md).WatchableValueChangeInterface

## Type parameters

| Name |
| :------ |
| `T` |

## Implemented by

- [`DerivedProjectionParameters`](../classes/renderlayer.DerivedProjectionParameters.md)
- [`SharedProjectionParametersBackend`](../classes/render_layer_backend.SharedProjectionParametersBackend.md)

## Table of contents

### Properties

- [changed](trackable_value.WatchableValueChangeInterface.md#changed)
- [value](trackable_value.WatchableValueChangeInterface.md#value)

## Properties

### changed

• `Readonly` **changed**: `Signal`<(`oldValue`: `T`, `newValue`: `T`) => `void`\>

#### Defined in

[src/neuroglancer/trackable_value.ts:29](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/trackable_value.ts#L29)

___

### value

• `Readonly` **value**: `T`

#### Defined in

[src/neuroglancer/trackable_value.ts:28](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/trackable_value.ts#L28)
