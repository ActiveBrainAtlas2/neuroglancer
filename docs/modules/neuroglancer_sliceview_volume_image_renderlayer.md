[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/sliceview/volume/image\_renderlayer

# Module: neuroglancer/sliceview/volume/image\_renderlayer

## Table of contents

### Modules

- [&lt;internal\&gt;](neuroglancer_sliceview_volume_image_renderlayer._internal_.md)

### Classes

- [ImageRenderLayer](../classes/neuroglancer_sliceview_volume_image_renderlayer.ImageRenderLayer.md)

### Interfaces

- [ImageRenderLayerOptions](../interfaces/neuroglancer_sliceview_volume_image_renderlayer.ImageRenderLayerOptions.md)

### Functions

- [defineImageLayerShader](neuroglancer_sliceview_volume_image_renderlayer.md#defineimagelayershader)
- [getTrackableFragmentMain](neuroglancer_sliceview_volume_image_renderlayer.md#gettrackablefragmentmain)

## Functions

### defineImageLayerShader

▸ **defineImageLayerShader**(`builder`, `shaderBuilderState`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | [`ShaderBuilder`](../classes/neuroglancer_webgl_shader.ShaderBuilder.md) |
| `shaderBuilderState` | [`ShaderControlsBuilderState`](../interfaces/neuroglancer_webgl_shader_ui_controls.ShaderControlsBuilderState.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/volume/image_renderlayer.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/image_renderlayer.ts#L48)

___

### getTrackableFragmentMain

▸ **getTrackableFragmentMain**(`value?`): [`TrackableValue`](../classes/neuroglancer_trackable_value.TrackableValue.md)<`string`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `string` | `DEFAULT_FRAGMENT_MAIN` |

#### Returns

[`TrackableValue`](../classes/neuroglancer_trackable_value.TrackableValue.md)<`string`\>

#### Defined in

[src/neuroglancer/sliceview/volume/image_renderlayer.ts:37](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/image_renderlayer.ts#L37)
