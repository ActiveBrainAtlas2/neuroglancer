[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/single\_mesh/frontend](../modules/neuroglancer_single_mesh_frontend.md) / SingleMeshDisplayState

# Class: SingleMeshDisplayState

[neuroglancer/single_mesh/frontend](../modules/neuroglancer_single_mesh_frontend.md).SingleMeshDisplayState

## Table of contents

### Constructors

- [constructor](neuroglancer_single_mesh_frontend.SingleMeshDisplayState.md#constructor)

### Properties

- [fragmentMain](neuroglancer_single_mesh_frontend.SingleMeshDisplayState.md#fragmentmain)
- [shaderControlState](neuroglancer_single_mesh_frontend.SingleMeshDisplayState.md#shadercontrolstate)
- [shaderError](neuroglancer_single_mesh_frontend.SingleMeshDisplayState.md#shadererror)

## Constructors

### constructor

• **new SingleMeshDisplayState**()

## Properties

### fragmentMain

• **fragmentMain**: [`TrackableValue`](neuroglancer_trackable_value.TrackableValue.md)<`string`\>

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/single_mesh/frontend.ts#L50)

___

### shaderControlState

• **shaderControlState**: [`ShaderControlState`](neuroglancer_webgl_shader_ui_controls.ShaderControlState.md)

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:51](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/single_mesh/frontend.ts#L51)

___

### shaderError

• **shaderError**: [`WatchableValue`](neuroglancer_trackable_value.WatchableValue.md)<`undefined` \| ``null`` \| [`ShaderCompilationError`](neuroglancer_webgl_shader.ShaderCompilationError.md) \| [`ShaderLinkError`](neuroglancer_webgl_shader.ShaderLinkError.md)\>

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/single_mesh/frontend.ts#L49)
