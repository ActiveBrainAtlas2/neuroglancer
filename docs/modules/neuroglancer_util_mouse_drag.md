[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/util/mouse\_drag

# Module: neuroglancer/util/mouse\_drag

## Table of contents

### Type Aliases

- [RelativeDragHandler](neuroglancer_util_mouse_drag.md#relativedraghandler)

### Functions

- [startRelativeMouseDrag](neuroglancer_util_mouse_drag.md#startrelativemousedrag)

## Type Aliases

### RelativeDragHandler

Ƭ **RelativeDragHandler**: (`event`: [`MouseEvent`](main_module._internal_.md#mouseevent), `deltaX`: `number`, `deltaY`: `number`) => `void`

#### Type declaration

▸ (`event`, `deltaX`, `deltaY`): `void`

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

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`MouseEvent`](main_module._internal_.md#mouseevent) |
| `deltaX` | `number` |
| `deltaY` | `number` |

##### Returns

`void`

#### Defined in

[src/neuroglancer/util/mouse_drag.ts:17](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/mouse_drag.ts#L17)

## Functions

### startRelativeMouseDrag

▸ **startRelativeMouseDrag**(`initialEvent`, `handler`, `finishDragHandler?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `initialEvent` | [`MouseEvent`](main_module._internal_.md#mouseevent) |
| `handler` | [`RelativeDragHandler`](neuroglancer_util_mouse_drag.md#relativedraghandler) |
| `finishDragHandler?` | [`RelativeDragHandler`](neuroglancer_util_mouse_drag.md#relativedraghandler) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/mouse_drag.ts:18](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/mouse_drag.ts#L18)
