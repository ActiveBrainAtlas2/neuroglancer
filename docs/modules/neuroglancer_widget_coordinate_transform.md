[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/widget/coordinate\_transform

# Module: neuroglancer/widget/coordinate\_transform

## Table of contents

### Classes

- [CoordinateSpaceTransformWidget](../classes/neuroglancer_widget_coordinate_transform.CoordinateSpaceTransformWidget.md)

### Functions

- [updateCoordinateSpaceScaleValues](neuroglancer_widget_coordinate_transform.md#updatecoordinatespacescalevalues)

## Functions

### updateCoordinateSpaceScaleValues

▸ **updateCoordinateSpaceScaleValues**(`scalesAndUnits`, `modified`, `watchable`): `boolean`

Takes new scales and units and modifies the coordinate space resolution.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scalesAndUnits` | (`undefined` \| { `scale`: `number` ; `unit`: `string`  })[] | New scales and units (new resolution). |
| `modified` | `boolean`[] | An array with each index true or false indicating whether new  resolution needs to be added to the corresponding dimension. |
| `watchable` | [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<[`CoordinateSpace`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpace.md)\> | A watchable value which contains the coordinate space of neuroglancer. |

#### Returns

`boolean`

returns a boolean indicating whether the coordinate space has been updated or not.

#### Defined in

[src/neuroglancer/widget/coordinate_transform.ts:156](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/coordinate_transform.ts#L156)
