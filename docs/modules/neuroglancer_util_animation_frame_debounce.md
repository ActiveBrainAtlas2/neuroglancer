[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/util/animation\_frame\_debounce

# Module: neuroglancer/util/animation\_frame\_debounce

## Table of contents

### Interfaces

- [DebouncedFunction](../interfaces/neuroglancer_util_animation_frame_debounce.DebouncedFunction.md)

### Functions

- [animationFrameDebounce](neuroglancer_util_animation_frame_debounce.md#animationframedebounce)

## Functions

### animationFrameDebounce

▸ **animationFrameDebounce**(`callback`): [`DebouncedFunction`](../interfaces/neuroglancer_util_animation_frame_debounce.DebouncedFunction.md)

Returns a function that, when called, ensures `callback` is invoked at the next animation frame.

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => `void` |

#### Returns

[`DebouncedFunction`](../interfaces/neuroglancer_util_animation_frame_debounce.DebouncedFunction.md)

#### Defined in

[src/neuroglancer/util/animation_frame_debounce.ts:37](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/animation_frame_debounce.ts#L37)
