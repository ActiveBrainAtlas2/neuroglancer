[neuroglancer](../README.md) / [Modules](../modules.md) / [util/animation\_frame\_debounce](../modules/util_animation_frame_debounce.md) / DebouncedFunction

# Interface: DebouncedFunction

[util/animation_frame_debounce](../modules/util_animation_frame_debounce.md).DebouncedFunction

## Callable

### DebouncedFunction

▸ **DebouncedFunction**(): `void`

Ensures the wrapped function will be run at the next animation frame.

**`license`**
Copyright 2017 Google Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/animation_frame_debounce.ts:21](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/animation_frame_debounce.ts#L21)

## Table of contents

### Methods

- [cancel](util_animation_frame_debounce.DebouncedFunction.md#cancel)
- [flush](util_animation_frame_debounce.DebouncedFunction.md#flush)

## Methods

### cancel

▸ **cancel**(): `void`

Cancels any outstanding call.

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/animation_frame_debounce.ts:26](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/animation_frame_debounce.ts#L26)

___

### flush

▸ **flush**(): `void`

Runs any outstanding call immediately.

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/animation_frame_debounce.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/animation_frame_debounce.ts#L31)
