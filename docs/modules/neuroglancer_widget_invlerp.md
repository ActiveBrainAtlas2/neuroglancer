[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/widget/invlerp

# Module: neuroglancer/widget/invlerp

## Table of contents

### Modules

- [&lt;internal\&gt;](neuroglancer_widget_invlerp._internal_.md)

### Classes

- [CdfController](../classes/neuroglancer_widget_invlerp.CdfController.md)
- [InvlerpWidget](../classes/neuroglancer_widget_invlerp.InvlerpWidget.md)

### Interfaces

- [RangeAndWindowIntervals](../interfaces/neuroglancer_widget_invlerp.RangeAndWindowIntervals.md)

### Functions

- [adjustInvlerpBrightnessContrast](neuroglancer_widget_invlerp.md#adjustinvlerpbrightnesscontrast)
- [adjustInvlerpContrast](neuroglancer_widget_invlerp.md#adjustinvlerpcontrast)
- [getUpdatedRangeAndWindowParameters](neuroglancer_widget_invlerp.md#getupdatedrangeandwindowparameters)
- [invertInvlerpRange](neuroglancer_widget_invlerp.md#invertinvlerprange)

## Functions

### adjustInvlerpBrightnessContrast

▸ **adjustInvlerpBrightnessContrast**(`dataType`, `trackable`, `baseRange`, `brightnessAmount`, `contrastAmount`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataType` | [`DataType`](../enums/neuroglancer_util_data_type.DataType.md) |
| `trackable` | [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<[`InvlerpParameters`](../interfaces/neuroglancer_webgl_shader_ui_controls.InvlerpParameters.md)\> |
| `baseRange` | [`DataTypeInterval`](neuroglancer_util_lerp.md#datatypeinterval) |
| `brightnessAmount` | `number` |
| `contrastAmount` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/invlerp.ts:498](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/invlerp.ts#L498)

___

### adjustInvlerpContrast

▸ **adjustInvlerpContrast**(`dataType`, `trackable`, `scaleFactor`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataType` | [`DataType`](../enums/neuroglancer_util_data_type.DataType.md) |
| `trackable` | [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<[`InvlerpParameters`](../interfaces/neuroglancer_webgl_shader_ui_controls.InvlerpParameters.md)\> |
| `scaleFactor` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/invlerp.ts:489](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/invlerp.ts#L489)

___

### getUpdatedRangeAndWindowParameters

▸ **getUpdatedRangeAndWindowParameters**<`T`\>(`existingBounds`, `boundType`, `endpointIndex`, `newEndpoint`, `fitRangeInWindow?`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`RangeAndWindowIntervals`](../interfaces/neuroglancer_widget_invlerp.RangeAndWindowIntervals.md) |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `existingBounds` | `T` | `undefined` |
| `boundType` | ``"window"`` \| ``"range"`` | `undefined` |
| `endpointIndex` | `number` | `undefined` |
| `newEndpoint` | `number` \| [`Uint64`](../classes/neuroglancer_util_uint64.Uint64.md) | `undefined` |
| `fitRangeInWindow` | `boolean` | `false` |

#### Returns

`T`

#### Defined in

[src/neuroglancer/widget/invlerp.ts:152](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/invlerp.ts#L152)

___

### invertInvlerpRange

▸ **invertInvlerpRange**(`trackable`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `trackable` | [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<[`InvlerpParameters`](../interfaces/neuroglancer_webgl_shader_ui_controls.InvlerpParameters.md)\> |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/invlerp.ts:483](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/invlerp.ts#L483)
