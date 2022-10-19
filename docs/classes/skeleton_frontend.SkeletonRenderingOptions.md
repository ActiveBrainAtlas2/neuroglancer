[neuroglancer](../README.md) / [Modules](../modules.md) / [skeleton/frontend](../modules/skeleton_frontend.md) / SkeletonRenderingOptions

# Class: SkeletonRenderingOptions

[skeleton/frontend](../modules/skeleton_frontend.md).SkeletonRenderingOptions

## Implements

- [`Trackable`](../interfaces/util_trackable.Trackable.md)

## Table of contents

### Constructors

- [constructor](skeleton_frontend.SkeletonRenderingOptions.md#constructor)

### Properties

- [compound](skeleton_frontend.SkeletonRenderingOptions.md#compound)
- [params2d](skeleton_frontend.SkeletonRenderingOptions.md#params2d)
- [params3d](skeleton_frontend.SkeletonRenderingOptions.md#params3d)
- [shader](skeleton_frontend.SkeletonRenderingOptions.md#shader)
- [shaderControlState](skeleton_frontend.SkeletonRenderingOptions.md#shadercontrolstate)

### Accessors

- [changed](skeleton_frontend.SkeletonRenderingOptions.md#changed)

### Methods

- [reset](skeleton_frontend.SkeletonRenderingOptions.md#reset)
- [restoreState](skeleton_frontend.SkeletonRenderingOptions.md#restorestate)
- [toJSON](skeleton_frontend.SkeletonRenderingOptions.md#tojson)

## Constructors

### constructor

• **new SkeletonRenderingOptions**()

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:318](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/skeleton/frontend.ts#L318)

## Properties

### compound

• `Private` **compound**: [`CompoundTrackable`](util_trackable.CompoundTrackable.md)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:302](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/skeleton/frontend.ts#L302)

___

### params2d

• **params2d**: [`ViewSpecificSkeletonRenderingOptions`](../interfaces/skeleton_frontend.ViewSpecificSkeletonRenderingOptions.md)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:309](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/skeleton/frontend.ts#L309)

___

### params3d

• **params3d**: [`ViewSpecificSkeletonRenderingOptions`](../interfaces/skeleton_frontend.ViewSpecificSkeletonRenderingOptions.md)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:313](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/skeleton/frontend.ts#L313)

___

### shader

• **shader**: [`TrackableValue`](annotation_annotation_layer_state._internal_.TrackableValue.md)<`string`\>

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:307](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/skeleton/frontend.ts#L307)

___

### shaderControlState

• **shaderControlState**: [`ShaderControlState`](webgl_shader_ui_controls.ShaderControlState.md)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:308](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/skeleton/frontend.ts#L308)

## Accessors

### changed

• `get` **changed**(): [`NullarySignal`](util_signal.NullarySignal.md)

#### Returns

[`NullarySignal`](util_signal.NullarySignal.md)

#### Implementation of

[Trackable](../interfaces/util_trackable.Trackable.md).[changed](../interfaces/util_trackable.Trackable.md#changed)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:303](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/skeleton/frontend.ts#L303)

## Methods

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Implementation of

[Trackable](../interfaces/util_trackable.Trackable.md).[reset](../interfaces/util_trackable.Trackable.md#reset)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:328](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/skeleton/frontend.ts#L328)

___

### restoreState

▸ **restoreState**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

`void`

#### Implementation of

[Trackable](../interfaces/util_trackable.Trackable.md).[restoreState](../interfaces/util_trackable.Trackable.md#restorestate)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:332](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/skeleton/frontend.ts#L332)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Implementation of

[Trackable](../interfaces/util_trackable.Trackable.md).[toJSON](../interfaces/util_trackable.Trackable.md#tojson)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:337](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/skeleton/frontend.ts#L337)
