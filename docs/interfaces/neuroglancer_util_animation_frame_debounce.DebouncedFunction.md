[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/util/animation\_frame\_debounce](../modules/neuroglancer_util_animation_frame_debounce.md) / DebouncedFunction

# Interface: DebouncedFunction

[neuroglancer/util/animation_frame_debounce](../modules/neuroglancer_util_animation_frame_debounce.md).DebouncedFunction

## Callable

### DebouncedFunction

▸ **DebouncedFunction**(): `void`

Ensures the wrapped function will be run at the next animation frame.

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/animation_frame_debounce.ts:21](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/animation_frame_debounce.ts#L21)

## Table of contents

### Methods

- [cancel](neuroglancer_util_animation_frame_debounce.DebouncedFunction.md#cancel)
- [flush](neuroglancer_util_animation_frame_debounce.DebouncedFunction.md#flush)

## Methods

### cancel

▸ **cancel**(): `void`

Cancels any outstanding call.

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/animation_frame_debounce.ts:26](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/animation_frame_debounce.ts#L26)

___

### flush

▸ **flush**(): `void`

Runs any outstanding call immediately.

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/animation_frame_debounce.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/animation_frame_debounce.ts#L31)
