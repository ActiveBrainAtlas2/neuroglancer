[neuroglancer](../README.md) / [Modules](../modules.md) / [single\_mesh/frontend](../modules/single_mesh_frontend.md) / SingleMeshDisplayState

# Class: SingleMeshDisplayState

[single_mesh/frontend](../modules/single_mesh_frontend.md).SingleMeshDisplayState

## Table of contents

### Constructors

- [constructor](single_mesh_frontend.SingleMeshDisplayState.md#constructor)

### Properties

- [fragmentMain](single_mesh_frontend.SingleMeshDisplayState.md#fragmentmain)
- [shaderControlState](single_mesh_frontend.SingleMeshDisplayState.md#shadercontrolstate)
- [shaderError](single_mesh_frontend.SingleMeshDisplayState.md#shadererror)

## Constructors

### constructor

• **new SingleMeshDisplayState**()

## Properties

### fragmentMain

• **fragmentMain**: [`TrackableValue`](annotation_annotation_layer_state._internal_.TrackableValue.md)<`string`\>

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/single_mesh/frontend.ts#L50)

___

### shaderControlState

• **shaderControlState**: [`ShaderControlState`](webgl_shader_ui_controls.ShaderControlState.md)

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:51](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/single_mesh/frontend.ts#L51)

___

### shaderError

• **shaderError**: [`WatchableValue`](annotation_annotation_layer_state._internal_.WatchableValue.md)<`undefined` \| ``null`` \| [`ShaderCompilationError`](webgl_shader.ShaderCompilationError.md) \| [`ShaderLinkError`](webgl_shader.ShaderLinkError.md)\>

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/single_mesh/frontend.ts#L49)
