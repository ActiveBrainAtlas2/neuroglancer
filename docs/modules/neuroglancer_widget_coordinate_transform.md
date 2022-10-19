[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/widget/coordinate\_transform

# Module: neuroglancer/widget/coordinate\_transform

**`license`**
Copyright 2019 Google Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

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

[src/neuroglancer/widget/coordinate_transform.ts:156](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/coordinate_transform.ts#L156)
