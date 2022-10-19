[neuroglancer](../README.md) / [Modules](../modules.md) / util/keyboard\_bindings

# Module: util/keyboard\_bindings

**`license`**
Copyright 2016 Google Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

## Table of contents

### References

- [ActionEvent](util_keyboard_bindings.md#actionevent)
- [EventActionMap](util_keyboard_bindings.md#eventactionmap)
- [EventActionMapInterface](util_keyboard_bindings.md#eventactionmapinterface)
- [registerActionListener](util_keyboard_bindings.md#registeractionlistener)

### Classes

- [KeyboardEventBinder](../classes/util_keyboard_bindings.KeyboardEventBinder.md)

### Variables

- [globalModifiers](util_keyboard_bindings.md#globalmodifiers)

### Functions

- [getEventKeyName](util_keyboard_bindings.md#geteventkeyname)

## References

### ActionEvent

Re-exports [ActionEvent](../interfaces/util_event_action_map.ActionEvent.md)

___

### EventActionMap

Re-exports [EventActionMap](../classes/util_event_action_map.EventActionMap.md)

___

### EventActionMapInterface

Re-exports [EventActionMapInterface](util_event_action_map.md#eventactionmapinterface)

___

### registerActionListener

Re-exports [registerActionListener](util_event_action_map.md#registeractionlistener)

## Variables

### globalModifiers

• `Const` **globalModifiers**: [`WatchableValue`](../classes/annotation_annotation_layer_state._internal_.WatchableValue.md)<`number`\>

#### Defined in

[src/neuroglancer/util/keyboard_bindings.ts:27](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/keyboard_bindings.ts#L27)

## Functions

### getEventKeyName

▸ **getEventKeyName**(`event`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`KeyboardEvent`](annotation_annotation_layer_state._internal_.md#keyboardevent) |

#### Returns

`string`

#### Defined in

[src/neuroglancer/util/keyboard_bindings.ts:106](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/keyboard_bindings.ts#L106)
