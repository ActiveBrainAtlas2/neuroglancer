[neuroglancer](../README.md) / [Modules](../modules.md) / util/animation\_frame\_debounce

# Module: util/animation\_frame\_debounce

## Table of contents

### Interfaces

- [DebouncedFunction](../interfaces/util_animation_frame_debounce.DebouncedFunction.md)

### Functions

- [animationFrameDebounce](util_animation_frame_debounce.md#animationframedebounce)

## Functions

### animationFrameDebounce

▸ **animationFrameDebounce**(`callback`): [`DebouncedFunction`](../interfaces/util_animation_frame_debounce.DebouncedFunction.md)

Returns a function that, when called, ensures `callback` is invoked at the next animation frame.

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => `void` |

#### Returns

[`DebouncedFunction`](../interfaces/util_animation_frame_debounce.DebouncedFunction.md)

#### Defined in

[src/neuroglancer/util/animation_frame_debounce.ts:37](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/animation_frame_debounce.ts#L37)
