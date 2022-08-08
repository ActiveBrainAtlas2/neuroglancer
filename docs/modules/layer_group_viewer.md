[neuroglancer](../README.md) / [Modules](../modules.md) / layer\_group\_viewer

# Module: layer\_group\_viewer

**`license`**
Copyright 2017 Google Inc.
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

- [LayerGroupViewer](../classes/layer_group_viewer.LayerGroupViewer.md)
- [LinkedViewerNavigationState](../classes/layer_group_viewer.LinkedViewerNavigationState.md)

### Interfaces

- [LayerGroupViewerOptions](../interfaces/layer_group_viewer.LayerGroupViewerOptions.md)
- [LayerGroupViewerState](../interfaces/layer_group_viewer.LayerGroupViewerState.md)

### Variables

- [viewerDragType](layer_group_viewer.md#viewerdragtype)

### Functions

- [getCompatibleViewerDragSource](layer_group_viewer.md#getcompatibleviewerdragsource)
- [getViewerDropEffect](layer_group_viewer.md#getviewerdropeffect)
- [hasViewerDrag](layer_group_viewer.md#hasviewerdrag)

## Variables

### viewerDragType

• `Const` **viewerDragType**: ``"neuroglancer-layer-group-viewer"``

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:73](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer_group_viewer.ts#L73)

## Functions

### getCompatibleViewerDragSource

▸ **getCompatibleViewerDragSource**(`manager`): [`LayerGroupViewer`](../classes/layer_group_viewer.LayerGroupViewer.md) \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`LayerListSpecification`](../classes/layer.LayerListSpecification.md) |

#### Returns

[`LayerGroupViewer`](../classes/layer_group_viewer.LayerGroupViewer.md) \| `undefined`

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:81](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer_group_viewer.ts#L81)

___

### getViewerDropEffect

▸ **getViewerDropEffect**(`event`, `manager`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `DragEvent` |
| `manager` | [`LayerListSpecification`](../classes/layer.LayerListSpecification.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `dropEffect` | ``"move"`` \| ``"copy"`` |
| `dropEffectMessage` | `string` |

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:90](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer_group_viewer.ts#L90)

___

### hasViewerDrag

▸ **hasViewerDrag**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `DragEvent` |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer_group_viewer.ts#L75)
