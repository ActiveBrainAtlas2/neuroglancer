[neuroglancer](../README.md) / [Modules](../modules.md) / [single\_mesh\_user\_layer](../modules/single_mesh_user_layer.md) / [<internal\>](../modules/single_mesh_user_layer._internal_.md) / SingleMeshDisplayState

# Class: SingleMeshDisplayState

[single_mesh_user_layer](../modules/single_mesh_user_layer.md).[<internal>](../modules/single_mesh_user_layer._internal_.md).SingleMeshDisplayState

## Table of contents

### Constructors

- [constructor](single_mesh_user_layer._internal_.SingleMeshDisplayState.md#constructor)

### Properties

- [fragmentMain](single_mesh_user_layer._internal_.SingleMeshDisplayState.md#fragmentmain)
- [shaderControlState](single_mesh_user_layer._internal_.SingleMeshDisplayState.md#shadercontrolstate)
- [shaderError](single_mesh_user_layer._internal_.SingleMeshDisplayState.md#shadererror)

## Constructors

### constructor

• **new SingleMeshDisplayState**()

## Properties

### fragmentMain

• **fragmentMain**: [`TrackableValue`](trackable_value.TrackableValue.md)<`string`\>

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/single_mesh/frontend.ts#L50)

___

### shaderControlState

• **shaderControlState**: [`ShaderControlState`](image_user_layer._internal_.ShaderControlState.md)

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:51](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/single_mesh/frontend.ts#L51)

___

### shaderError

• **shaderError**: [`WatchableValue`](trackable_value.WatchableValue.md)<`undefined` \| ``null`` \| [`ShaderCompilationError`](image_user_layer._internal_.ShaderCompilationError.md) \| [`ShaderLinkError`](image_user_layer._internal_.ShaderLinkError.md)\>

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/single_mesh/frontend.ts#L49)
