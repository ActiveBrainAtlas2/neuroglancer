[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/skeleton/frontend](../modules/neuroglancer_skeleton_frontend.md) / SkeletonRenderingOptions

# Class: SkeletonRenderingOptions

[neuroglancer/skeleton/frontend](../modules/neuroglancer_skeleton_frontend.md).SkeletonRenderingOptions

## Implements

- [`Trackable`](../interfaces/neuroglancer_util_trackable.Trackable.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_skeleton_frontend.SkeletonRenderingOptions.md#constructor)

### Properties

- [compound](neuroglancer_skeleton_frontend.SkeletonRenderingOptions.md#compound)
- [params2d](neuroglancer_skeleton_frontend.SkeletonRenderingOptions.md#params2d)
- [params3d](neuroglancer_skeleton_frontend.SkeletonRenderingOptions.md#params3d)
- [shader](neuroglancer_skeleton_frontend.SkeletonRenderingOptions.md#shader)
- [shaderControlState](neuroglancer_skeleton_frontend.SkeletonRenderingOptions.md#shadercontrolstate)

### Accessors

- [changed](neuroglancer_skeleton_frontend.SkeletonRenderingOptions.md#changed)

### Methods

- [reset](neuroglancer_skeleton_frontend.SkeletonRenderingOptions.md#reset)
- [restoreState](neuroglancer_skeleton_frontend.SkeletonRenderingOptions.md#restorestate)
- [toJSON](neuroglancer_skeleton_frontend.SkeletonRenderingOptions.md#tojson)

## Constructors

### constructor

• **new SkeletonRenderingOptions**()

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:318](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/skeleton/frontend.ts#L318)

## Properties

### compound

• `Private` **compound**: [`CompoundTrackable`](neuroglancer_util_trackable.CompoundTrackable.md)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:302](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/skeleton/frontend.ts#L302)

___

### params2d

• **params2d**: [`ViewSpecificSkeletonRenderingOptions`](../interfaces/neuroglancer_skeleton_frontend.ViewSpecificSkeletonRenderingOptions.md)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:309](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/skeleton/frontend.ts#L309)

___

### params3d

• **params3d**: [`ViewSpecificSkeletonRenderingOptions`](../interfaces/neuroglancer_skeleton_frontend.ViewSpecificSkeletonRenderingOptions.md)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:313](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/skeleton/frontend.ts#L313)

___

### shader

• **shader**: [`TrackableValue`](neuroglancer_trackable_value.TrackableValue.md)<`string`\>

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:307](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/skeleton/frontend.ts#L307)

___

### shaderControlState

• **shaderControlState**: [`ShaderControlState`](neuroglancer_webgl_shader_ui_controls.ShaderControlState.md)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:308](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/skeleton/frontend.ts#L308)

## Accessors

### changed

• `get` **changed**(): [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Returns

[`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Implementation of

[Trackable](../interfaces/neuroglancer_util_trackable.Trackable.md).[changed](../interfaces/neuroglancer_util_trackable.Trackable.md#changed)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:303](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/skeleton/frontend.ts#L303)

## Methods

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Implementation of

[Trackable](../interfaces/neuroglancer_util_trackable.Trackable.md).[reset](../interfaces/neuroglancer_util_trackable.Trackable.md#reset)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:328](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/skeleton/frontend.ts#L328)

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

[Trackable](../interfaces/neuroglancer_util_trackable.Trackable.md).[restoreState](../interfaces/neuroglancer_util_trackable.Trackable.md#restorestate)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:332](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/skeleton/frontend.ts#L332)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Implementation of

[Trackable](../interfaces/neuroglancer_util_trackable.Trackable.md).[toJSON](../interfaces/neuroglancer_util_trackable.Trackable.md#tojson)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:337](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/skeleton/frontend.ts#L337)
