[neuroglancer](../README.md) / [Modules](../modules.md) / widget/invlerp

# Module: widget/invlerp

## Table of contents

### Modules

- [&lt;internal\&gt;](widget_invlerp._internal_.md)

### Classes

- [CdfController](../classes/widget_invlerp.CdfController.md)
- [InvlerpWidget](../classes/widget_invlerp.InvlerpWidget.md)

### Interfaces

- [RangeAndWindowIntervals](../interfaces/widget_invlerp.RangeAndWindowIntervals.md)

### Functions

- [adjustInvlerpBrightnessContrast](widget_invlerp.md#adjustinvlerpbrightnesscontrast)
- [adjustInvlerpContrast](widget_invlerp.md#adjustinvlerpcontrast)
- [getUpdatedRangeAndWindowParameters](widget_invlerp.md#getupdatedrangeandwindowparameters)
- [invertInvlerpRange](widget_invlerp.md#invertinvlerprange)

## Functions

### adjustInvlerpBrightnessContrast

▸ **adjustInvlerpBrightnessContrast**(`dataType`, `trackable`, `baseRange`, `brightnessAmount`, `contrastAmount`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataType` | [`DataType`](../enums/util_data_type.DataType.md) |
| `trackable` | [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<[`InvlerpParameters`](../interfaces/webgl_shader_ui_controls.InvlerpParameters.md)\> |
| `baseRange` | [`DataTypeInterval`](util_lerp.md#datatypeinterval) |
| `brightnessAmount` | `number` |
| `contrastAmount` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/invlerp.ts:498](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/invlerp.ts#L498)

___

### adjustInvlerpContrast

▸ **adjustInvlerpContrast**(`dataType`, `trackable`, `scaleFactor`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataType` | [`DataType`](../enums/util_data_type.DataType.md) |
| `trackable` | [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<[`InvlerpParameters`](../interfaces/webgl_shader_ui_controls.InvlerpParameters.md)\> |
| `scaleFactor` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/invlerp.ts:489](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/invlerp.ts#L489)

___

### getUpdatedRangeAndWindowParameters

▸ **getUpdatedRangeAndWindowParameters**<`T`\>(`existingBounds`, `boundType`, `endpointIndex`, `newEndpoint`, `fitRangeInWindow?`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`RangeAndWindowIntervals`](../interfaces/widget_invlerp.RangeAndWindowIntervals.md) |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `existingBounds` | `T` | `undefined` |
| `boundType` | ``"window"`` \| ``"range"`` | `undefined` |
| `endpointIndex` | `number` | `undefined` |
| `newEndpoint` | `number` \| [`Uint64`](../classes/util_uint64.Uint64.md) | `undefined` |
| `fitRangeInWindow` | `boolean` | `false` |

#### Returns

`T`

#### Defined in

[src/neuroglancer/widget/invlerp.ts:152](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/invlerp.ts#L152)

___

### invertInvlerpRange

▸ **invertInvlerpRange**(`trackable`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `trackable` | [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<[`InvlerpParameters`](../interfaces/webgl_shader_ui_controls.InvlerpParameters.md)\> |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/invlerp.ts:483](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/invlerp.ts#L483)
