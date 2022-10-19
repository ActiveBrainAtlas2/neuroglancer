[neuroglancer](../README.md) / [Modules](../modules.md) / segmentation\_display\_state/frontend

# Module: segmentation\_display\_state/frontend

## Table of contents

### Modules

- [&lt;internal\&gt;](segmentation_display_state_frontend._internal_.md)

### Classes

- [SegmentSelectionState](../classes/segmentation_display_state_frontend.SegmentSelectionState.md)
- [SegmentWidgetFactory](../classes/segmentation_display_state_frontend.SegmentWidgetFactory.md)
- [SegmentWidgetWithExtraColumnsFactory](../classes/segmentation_display_state_frontend.SegmentWidgetWithExtraColumnsFactory.md)
- [SegmentationLayerSharedObject](../classes/segmentation_display_state_frontend.SegmentationLayerSharedObject.md)
- [Uint64MapEntry](../classes/segmentation_display_state_frontend.Uint64MapEntry.md)

### Interfaces

- [SegmentationColorGroupState](../interfaces/segmentation_display_state_frontend.SegmentationColorGroupState.md)
- [SegmentationDisplayState](../interfaces/segmentation_display_state_frontend.SegmentationDisplayState.md)
- [SegmentationDisplayState3D](../interfaces/segmentation_display_state_frontend.SegmentationDisplayState3D.md)
- [SegmentationDisplayStateWithAlpha](../interfaces/segmentation_display_state_frontend.SegmentationDisplayStateWithAlpha.md)
- [SegmentationGroupState](../interfaces/segmentation_display_state_frontend.SegmentationGroupState.md)

### Type Aliases

- [SegmentWidgetTemplate](segmentation_display_state_frontend.md#segmentwidgettemplate)

### Functions

- [augmentSegmentId](segmentation_display_state_frontend.md#augmentsegmentid)
- [bindSegmentListWidth](segmentation_display_state_frontend.md#bindsegmentlistwidth)
- [forEachVisibleSegmentToDraw](segmentation_display_state_frontend.md#foreachvisiblesegmenttodraw)
- [getBaseObjectColor](segmentation_display_state_frontend.md#getbaseobjectcolor)
- [getObjectColor](segmentation_display_state_frontend.md#getobjectcolor)
- [makeSegmentWidget](segmentation_display_state_frontend.md#makesegmentwidget)
- [maybeAugmentSegmentId](segmentation_display_state_frontend.md#maybeaugmentsegmentid)
- [registerCallbackWhenSegmentationDisplayStateChanged](segmentation_display_state_frontend.md#registercallbackwhensegmentationdisplaystatechanged)
- [registerRedrawWhenSegmentationDisplayState3DChanged](segmentation_display_state_frontend.md#registerredrawwhensegmentationdisplaystate3dchanged)
- [registerRedrawWhenSegmentationDisplayStateChanged](segmentation_display_state_frontend.md#registerredrawwhensegmentationdisplaystatechanged)
- [registerRedrawWhenSegmentationDisplayStateWithAlphaChanged](segmentation_display_state_frontend.md#registerredrawwhensegmentationdisplaystatewithalphachanged)
- [resetTemporaryVisibleSegmentsState](segmentation_display_state_frontend.md#resettemporaryvisiblesegmentsstate)
- [segmentWidgetTemplateWithExtraColumns](segmentation_display_state_frontend.md#segmentwidgettemplatewithextracolumns)
- [sendVisibleSegmentsState](segmentation_display_state_frontend.md#sendvisiblesegmentsstate)
- [updateIdStringWidth](segmentation_display_state_frontend.md#updateidstringwidth)

## Type Aliases

### SegmentWidgetTemplate

Ƭ **SegmentWidgetTemplate**: typeof [`segmentWidgetTemplate`](segmentation_display_state_frontend._internal_.md#segmentwidgettemplate)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:306](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L306)

## Functions

### augmentSegmentId

▸ **augmentSegmentId**(`displayState`, `value`): [`Uint64MapEntry`](../classes/segmentation_display_state_frontend.Uint64MapEntry.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `displayState` | `undefined` \| ``null`` \| [`SegmentationDisplayState`](../interfaces/segmentation_display_state_frontend.SegmentationDisplayState.md) |
| `value` | `number` \| [`Uint64`](../classes/util_uint64.Uint64.md) \| [`Uint64MapEntry`](../classes/segmentation_display_state_frontend.Uint64MapEntry.md) |

#### Returns

[`Uint64MapEntry`](../classes/segmentation_display_state_frontend.Uint64MapEntry.md)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:211](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L211)

___

### bindSegmentListWidth

▸ **bindSegmentListWidth**(`displayState`, `element`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `displayState` | [`SegmentationDisplayState`](../interfaces/segmentation_display_state_frontend.SegmentationDisplayState.md) |
| `element` | [`HTMLElement`](annotation_annotation_layer_state._internal_.md#htmlelement) |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:230](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L230)

___

### forEachVisibleSegmentToDraw

▸ **forEachVisibleSegmentToDraw**(`displayState`, `renderLayer`, `emitColor`, `pickIDs`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `displayState` | [`SegmentationDisplayState3D`](../interfaces/segmentation_display_state_frontend.SegmentationDisplayState3D.md) |
| `renderLayer` | [`RenderLayer`](../classes/annotation_annotation_layer_state._internal_.RenderLayer.md) |
| `emitColor` | `boolean` |
| `pickIDs` | `undefined` \| [`PickIDManager`](../classes/annotation_renderlayer._internal_.PickIDManager.md) |
| `callback` | (`objectId`: [`Uint64`](../classes/util_uint64.Uint64.md), `color`: `undefined` \| [`vec4`](../classes/util_geom.vec4.md), `pickIndex`: `undefined` \| `number`, `rootObjectId`: [`Uint64`](../classes/util_uint64.Uint64.md)) => `void` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:789](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L789)

___

### getBaseObjectColor

▸ **getBaseObjectColor**(`displayState`, `objectId`, `color?`): `Float32Array`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `displayState` | `undefined` \| ``null`` \| [`SegmentationDisplayState`](../interfaces/segmentation_display_state_frontend.SegmentationDisplayState.md) | `undefined` |
| `objectId` | [`Uint64`](../classes/util_uint64.Uint64.md) | `undefined` |
| `color` | `Float32Array` | `tempColor` |

#### Returns

`Float32Array`

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:704](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L704)

___

### getObjectColor

▸ **getObjectColor**(`displayState`, `objectId`, `alpha?`): [`vec4`](../classes/util_geom.vec4.md)

Returns the alpha-premultiplied color to use.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `displayState` | [`SegmentationDisplayState`](../interfaces/segmentation_display_state_frontend.SegmentationDisplayState.md) | `undefined` |
| `objectId` | [`Uint64`](../classes/util_uint64.Uint64.md) | `undefined` |
| `alpha` | `number` | `1` |

#### Returns

[`vec4`](../classes/util_geom.vec4.md)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:735](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L735)

___

### makeSegmentWidget

▸ **makeSegmentWidget**(`displayState`, `normalizedId`): [`HTMLDivElement`](annotation_annotation_layer_state._internal_.md#htmldivelement)

#### Parameters

| Name | Type |
| :------ | :------ |
| `displayState` | `undefined` \| ``null`` \| [`SegmentationDisplayState`](../interfaces/segmentation_display_state_frontend.SegmentationDisplayState.md) |
| `normalizedId` | [`Uint64MapEntry`](../classes/segmentation_display_state_frontend.Uint64MapEntry.md) |

#### Returns

[`HTMLDivElement`](annotation_annotation_layer_state._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:635](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L635)

___

### maybeAugmentSegmentId

▸ **maybeAugmentSegmentId**(`displayState`, `value`, `mustCopy?`): [`Uint64`](../classes/util_uint64.Uint64.md) \| [`Uint64MapEntry`](../classes/segmentation_display_state_frontend.Uint64MapEntry.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `displayState` | `undefined` \| ``null`` \| [`SegmentationDisplayState`](../interfaces/segmentation_display_state_frontend.SegmentationDisplayState.md) | `undefined` |
| `value` | `number` \| [`Uint64`](../classes/util_uint64.Uint64.md) | `undefined` |
| `mustCopy` | `boolean` | `false` |

#### Returns

[`Uint64`](../classes/util_uint64.Uint64.md) \| [`Uint64MapEntry`](../classes/segmentation_display_state_frontend.Uint64MapEntry.md)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:176](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L176)

___

### registerCallbackWhenSegmentationDisplayStateChanged

▸ **registerCallbackWhenSegmentationDisplayStateChanged**(`displayState`, `context`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `displayState` | [`SegmentationDisplayState`](../interfaces/segmentation_display_state_frontend.SegmentationDisplayState.md) |
| `context` | [`RefCounted`](../classes/util_disposable.RefCounted.md) |
| `callback` | () => `void` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:655](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L655)

___

### registerRedrawWhenSegmentationDisplayState3DChanged

▸ **registerRedrawWhenSegmentationDisplayState3DChanged**(`displayState`, `renderLayer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `displayState` | [`SegmentationDisplayState3D`](../interfaces/segmentation_display_state_frontend.SegmentationDisplayState3D.md) |
| `renderLayer` | { `redrawNeeded`: [`NullarySignal`](../classes/util_signal.NullarySignal.md)  } & [`RefCounted`](../classes/util_disposable.RefCounted.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:686](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L686)

___

### registerRedrawWhenSegmentationDisplayStateChanged

▸ **registerRedrawWhenSegmentationDisplayStateChanged**(`displayState`, `renderLayer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `displayState` | [`SegmentationDisplayState`](../interfaces/segmentation_display_state_frontend.SegmentationDisplayState.md) |
| `renderLayer` | { `redrawNeeded`: [`NullarySignal`](../classes/util_signal.NullarySignal.md)  } & [`RefCounted`](../classes/util_disposable.RefCounted.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:669](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L669)

___

### registerRedrawWhenSegmentationDisplayStateWithAlphaChanged

▸ **registerRedrawWhenSegmentationDisplayStateWithAlphaChanged**(`displayState`, `renderLayer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `displayState` | [`SegmentationDisplayStateWithAlpha`](../interfaces/segmentation_display_state_frontend.SegmentationDisplayStateWithAlpha.md) |
| `renderLayer` | { `redrawNeeded`: [`NullarySignal`](../classes/util_signal.NullarySignal.md)  } & [`RefCounted`](../classes/util_disposable.RefCounted.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:678](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L678)

___

### resetTemporaryVisibleSegmentsState

▸ **resetTemporaryVisibleSegmentsState**(`state`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`VisibleSegmentsState`](../interfaces/segmentation_display_state_base.VisibleSegmentsState.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:167](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L167)

___

### segmentWidgetTemplateWithExtraColumns

▸ **segmentWidgetTemplateWithExtraColumns**(`numExtraColumns`): [`SegmentWidgetWithExtraColumnsTemplate`](../interfaces/segmentation_display_state_frontend._internal_.SegmentWidgetWithExtraColumnsTemplate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `numExtraColumns` | `number` |

#### Returns

[`SegmentWidgetWithExtraColumnsTemplate`](../interfaces/segmentation_display_state_frontend._internal_.SegmentWidgetWithExtraColumnsTemplate.md)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:312](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L312)

___

### sendVisibleSegmentsState

▸ **sendVisibleSegmentsState**(`state`, `options?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`VisibleSegmentsState`](../interfaces/segmentation_display_state_base.VisibleSegmentsState.md) |
| `options` | `any` |

#### Returns

`any`

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:758](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L758)

___

### updateIdStringWidth

▸ **updateIdStringWidth**(`idStringWidth`, `idString`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `idStringWidth` | [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`number`\> |
| `idString` | `string` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:222](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L222)
