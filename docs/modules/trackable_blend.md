[neuroglancer](../README.md) / [Modules](../modules.md) / trackable\_blend

# Module: trackable\_blend

## Table of contents

### Enumerations

- [BLEND\_MODES](../enums/trackable_blend.BLEND_MODES.md)

### Type Aliases

- [TrackableBlendModeValue](trackable_blend.md#trackableblendmodevalue)

### Variables

- [BLEND\_FUNCTIONS](trackable_blend.md#blend_functions)

### Functions

- [trackableBlendModeValue](trackable_blend.md#trackableblendmodevalue-1)

## Type Aliases

### TrackableBlendModeValue

Ƭ **TrackableBlendModeValue**: `TrackableEnum`<[`BLEND_MODES`](../enums/trackable_blend.BLEND_MODES.md)\>

#### Defined in

[src/neuroglancer/trackable_blend.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/trackable_blend.ts#L39)

## Variables

### BLEND\_FUNCTIONS

• `Const` **BLEND\_FUNCTIONS**: `Map`<[`BLEND_MODES`](../enums/trackable_blend.BLEND_MODES.md), (`gl`: `WebGL2RenderingContext`) => `void`\>

#### Defined in

[src/neuroglancer/trackable_blend.ts:24](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/trackable_blend.ts#L24)

## Functions

### trackableBlendModeValue

▸ **trackableBlendModeValue**(`initialValue?`): `TrackableEnum`<[`BLEND_MODES`](../enums/trackable_blend.BLEND_MODES.md)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `initialValue` | [`BLEND_MODES`](../enums/trackable_blend.BLEND_MODES.md) | `BLEND_MODES.DEFAULT` |

#### Returns

`TrackableEnum`<[`BLEND_MODES`](../enums/trackable_blend.BLEND_MODES.md)\>

#### Defined in

[src/neuroglancer/trackable_blend.ts:41](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/trackable_blend.ts#L41)
