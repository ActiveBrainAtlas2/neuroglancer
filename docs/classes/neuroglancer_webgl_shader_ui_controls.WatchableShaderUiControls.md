[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/webgl/shader\_ui\_controls](../modules/neuroglancer_webgl_shader_ui_controls.md) / WatchableShaderUiControls

# Class: WatchableShaderUiControls

[neuroglancer/webgl/shader_ui_controls](../modules/neuroglancer_webgl_shader_ui_controls.md).WatchableShaderUiControls

## Implements

- [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<[`Controls`](../modules/neuroglancer_webgl_shader_ui_controls.md#controls) \| `undefined`\>

## Table of contents

### Constructors

- [constructor](neuroglancer_webgl_shader_ui_controls.WatchableShaderUiControls.md#constructor)

### Properties

- [changed](neuroglancer_webgl_shader_ui_controls.WatchableShaderUiControls.md#changed)
- [controls](neuroglancer_webgl_shader_ui_controls.WatchableShaderUiControls.md#controls)

### Accessors

- [value](neuroglancer_webgl_shader_ui_controls.WatchableShaderUiControls.md#value)

## Constructors

### constructor

• **new WatchableShaderUiControls**()

## Properties

### changed

• **changed**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Implementation of

[WatchableValueInterface](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md).[changed](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md#changed)

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:529](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/shader_ui_controls.ts#L529)

___

### controls

• **controls**: `undefined` \| [`Controls`](../modules/neuroglancer_webgl_shader_ui_controls.md#controls) = `undefined`

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:530](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/shader_ui_controls.ts#L530)

## Accessors

### value

• `get` **value**(): `undefined` \| [`Controls`](../modules/neuroglancer_webgl_shader_ui_controls.md#controls)

#### Returns

`undefined` \| [`Controls`](../modules/neuroglancer_webgl_shader_ui_controls.md#controls)

#### Implementation of

[WatchableValueInterface](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md).[value](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md#value)

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:531](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/shader_ui_controls.ts#L531)

• `set` **value**(`newControls`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newControls` | `undefined` \| [`Controls`](../modules/neuroglancer_webgl_shader_ui_controls.md#controls) |

#### Returns

`void`

#### Implementation of

[WatchableValueInterface](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md).[value](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md#value)

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:534](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/shader_ui_controls.ts#L534)
