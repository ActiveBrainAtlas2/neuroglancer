[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / Animatable

# Interface: Animatable

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).Animatable

## Hierarchy

- **`Animatable`**

  ↳ [`Element`](annotation_annotation_layer_state._internal_.Element.md)

## Table of contents

### Methods

- [animate](annotation_annotation_layer_state._internal_.Animatable.md#animate)
- [getAnimations](annotation_annotation_layer_state._internal_.Animatable.md#getanimations)

## Methods

### animate

▸ **animate**(`keyframes`, `options?`): [`Animation`](../modules/annotation_annotation_layer_state._internal_.md#animation)

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyframes` | ``null`` \| [`PropertyIndexedKeyframes`](annotation_annotation_layer_state._internal_.PropertyIndexedKeyframes.md) \| [`Keyframe`](annotation_annotation_layer_state._internal_.Keyframe.md)[] |
| `options?` | `number` \| [`KeyframeAnimationOptions`](annotation_annotation_layer_state._internal_.KeyframeAnimationOptions.md) |

#### Returns

[`Animation`](../modules/annotation_annotation_layer_state._internal_.md#animation)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2047

___

### getAnimations

▸ **getAnimations**(`options?`): [`Animation`](../modules/annotation_annotation_layer_state._internal_.md#animation)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`GetAnimationsOptions`](annotation_annotation_layer_state._internal_.GetAnimationsOptions.md) |

#### Returns

[`Animation`](../modules/annotation_annotation_layer_state._internal_.md#animation)[]

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2048
