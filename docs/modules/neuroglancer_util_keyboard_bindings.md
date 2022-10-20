[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/util/keyboard\_bindings

# Module: neuroglancer/util/keyboard\_bindings

## Table of contents

### References

- [ActionEvent](neuroglancer_util_keyboard_bindings.md#actionevent)
- [EventActionMap](neuroglancer_util_keyboard_bindings.md#eventactionmap)
- [EventActionMapInterface](neuroglancer_util_keyboard_bindings.md#eventactionmapinterface)
- [registerActionListener](neuroglancer_util_keyboard_bindings.md#registeractionlistener)

### Classes

- [KeyboardEventBinder](../classes/neuroglancer_util_keyboard_bindings.KeyboardEventBinder.md)

### Variables

- [globalModifiers](neuroglancer_util_keyboard_bindings.md#globalmodifiers)

### Functions

- [getEventKeyName](neuroglancer_util_keyboard_bindings.md#geteventkeyname)

## References

### ActionEvent

Re-exports [ActionEvent](../interfaces/neuroglancer_util_event_action_map.ActionEvent.md)

___

### EventActionMap

Re-exports [EventActionMap](../classes/neuroglancer_util_event_action_map.EventActionMap.md)

___

### EventActionMapInterface

Re-exports [EventActionMapInterface](neuroglancer_util_event_action_map.md#eventactionmapinterface)

___

### registerActionListener

Re-exports [registerActionListener](neuroglancer_util_event_action_map.md#registeractionlistener)

## Variables

### globalModifiers

• `Const` **globalModifiers**: [`WatchableValue`](../classes/neuroglancer_trackable_value.WatchableValue.md)<`number`\>

#### Defined in

[src/neuroglancer/util/keyboard_bindings.ts:27](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/keyboard_bindings.ts#L27)

## Functions

### getEventKeyName

▸ **getEventKeyName**(`event`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`KeyboardEvent`](main_module._internal_.md#keyboardevent) |

#### Returns

`string`

#### Defined in

[src/neuroglancer/util/keyboard_bindings.ts:106](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/keyboard_bindings.ts#L106)
