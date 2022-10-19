[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/trackable\_blend

# Module: neuroglancer/trackable\_blend

## Table of contents

### Enumerations

- [BLEND\_MODES](../enums/neuroglancer_trackable_blend.BLEND_MODES.md)

### Type Aliases

- [TrackableBlendModeValue](neuroglancer_trackable_blend.md#trackableblendmodevalue)

### Variables

- [BLEND\_FUNCTIONS](neuroglancer_trackable_blend.md#blend_functions)

### Functions

- [trackableBlendModeValue](neuroglancer_trackable_blend.md#trackableblendmodevalue-1)

## Type Aliases

### TrackableBlendModeValue

Ƭ **TrackableBlendModeValue**: [`TrackableEnum`](../classes/neuroglancer_util_trackable_enum.TrackableEnum.md)<[`BLEND_MODES`](../enums/neuroglancer_trackable_blend.BLEND_MODES.md)\>

#### Defined in

[src/neuroglancer/trackable_blend.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/trackable_blend.ts#L39)

## Variables

### BLEND\_FUNCTIONS

• `Const` **BLEND\_FUNCTIONS**: `Map`<[`BLEND_MODES`](../enums/neuroglancer_trackable_blend.BLEND_MODES.md), (`gl`: [`WebGL2RenderingContext`](main_module._internal_.md#webgl2renderingcontext)) => `void`\>

#### Defined in

[src/neuroglancer/trackable_blend.ts:24](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/trackable_blend.ts#L24)

## Functions

### trackableBlendModeValue

▸ **trackableBlendModeValue**(`initialValue?`): [`TrackableEnum`](../classes/neuroglancer_util_trackable_enum.TrackableEnum.md)<[`BLEND_MODES`](../enums/neuroglancer_trackable_blend.BLEND_MODES.md)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `initialValue` | [`BLEND_MODES`](../enums/neuroglancer_trackable_blend.BLEND_MODES.md) | `BLEND_MODES.DEFAULT` |

#### Returns

[`TrackableEnum`](../classes/neuroglancer_util_trackable_enum.TrackableEnum.md)<[`BLEND_MODES`](../enums/neuroglancer_trackable_blend.BLEND_MODES.md)\>

#### Defined in

[src/neuroglancer/trackable_blend.ts:41](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/trackable_blend.ts#L41)
