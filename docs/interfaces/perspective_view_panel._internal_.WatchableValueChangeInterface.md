[neuroglancer](../README.md) / [Modules](../modules.md) / [perspective\_view/panel](../modules/perspective_view_panel.md) / [<internal\>](../modules/perspective_view_panel._internal_.md) / WatchableValueChangeInterface

# Interface: WatchableValueChangeInterface<T\>

[perspective_view/panel](../modules/perspective_view_panel.md).[<internal>](../modules/perspective_view_panel._internal_.md).WatchableValueChangeInterface

## Type parameters

| Name |
| :------ |
| `T` |

## Implemented by

- [`DerivedProjectionParameters`](../classes/perspective_view_panel._internal_.DerivedProjectionParameters.md)

## Table of contents

### Properties

- [changed](perspective_view_panel._internal_.WatchableValueChangeInterface.md#changed)
- [value](perspective_view_panel._internal_.WatchableValueChangeInterface.md#value)

## Properties

### changed

• `Readonly` **changed**: [`Signal`](../classes/util_signal.Signal.md)<(`oldValue`: `T`, `newValue`: `T`) => `void`\>

#### Defined in

[src/neuroglancer/trackable_value.ts:29](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/trackable_value.ts#L29)

___

### value

• `Readonly` **value**: `T`

#### Defined in

[src/neuroglancer/trackable_value.ts:28](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/trackable_value.ts#L28)
