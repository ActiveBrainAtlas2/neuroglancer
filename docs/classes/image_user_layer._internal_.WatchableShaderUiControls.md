[neuroglancer](../README.md) / [Modules](../modules.md) / [image\_user\_layer](../modules/image_user_layer.md) / [<internal\>](../modules/image_user_layer._internal_.md) / WatchableShaderUiControls

# Class: WatchableShaderUiControls

[image_user_layer](../modules/image_user_layer.md).[<internal>](../modules/image_user_layer._internal_.md).WatchableShaderUiControls

## Implements

- [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<[`Controls`](../modules/image_user_layer._internal_.md#controls) \| `undefined`\>

## Table of contents

### Constructors

- [constructor](image_user_layer._internal_.WatchableShaderUiControls.md#constructor)

### Properties

- [changed](image_user_layer._internal_.WatchableShaderUiControls.md#changed)
- [controls](image_user_layer._internal_.WatchableShaderUiControls.md#controls)

### Accessors

- [value](image_user_layer._internal_.WatchableShaderUiControls.md#value)

## Constructors

### constructor

• **new WatchableShaderUiControls**()

## Properties

### changed

• **changed**: [`NullarySignal`](coordinate_transform._internal_.NullarySignal.md)

#### Implementation of

[WatchableValueInterface](../interfaces/trackable_value.WatchableValueInterface.md).[changed](../interfaces/trackable_value.WatchableValueInterface.md#changed)

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:529](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader_ui_controls.ts#L529)

___

### controls

• **controls**: `undefined` \| [`Controls`](../modules/image_user_layer._internal_.md#controls) = `undefined`

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:530](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader_ui_controls.ts#L530)

## Accessors

### value

• `get` **value**(): `undefined` \| [`Controls`](../modules/image_user_layer._internal_.md#controls)

#### Returns

`undefined` \| [`Controls`](../modules/image_user_layer._internal_.md#controls)

#### Implementation of

[WatchableValueInterface](../interfaces/trackable_value.WatchableValueInterface.md).[value](../interfaces/trackable_value.WatchableValueInterface.md#value)

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:531](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader_ui_controls.ts#L531)

• `set` **value**(`newControls`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newControls` | `undefined` \| [`Controls`](../modules/image_user_layer._internal_.md#controls) |

#### Returns

`void`

#### Implementation of

[WatchableValueInterface](../interfaces/trackable_value.WatchableValueInterface.md).[value](../interfaces/trackable_value.WatchableValueInterface.md#value)

#### Defined in

[src/neuroglancer/webgl/shader_ui_controls.ts:534](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader_ui_controls.ts#L534)
