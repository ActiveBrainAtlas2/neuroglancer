[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/segmentation\_display\_state/frontend

# Module: neuroglancer/segmentation\_display\_state/frontend

## Table of contents

### Modules

- [&lt;internal\&gt;](neuroglancer_segmentation_display_state_frontend._internal_.md)

### Classes

- [SegmentSelectionState](../classes/neuroglancer_segmentation_display_state_frontend.SegmentSelectionState.md)
- [SegmentWidgetFactory](../classes/neuroglancer_segmentation_display_state_frontend.SegmentWidgetFactory.md)
- [SegmentWidgetWithExtraColumnsFactory](../classes/neuroglancer_segmentation_display_state_frontend.SegmentWidgetWithExtraColumnsFactory.md)
- [SegmentationLayerSharedObject](../classes/neuroglancer_segmentation_display_state_frontend.SegmentationLayerSharedObject.md)
- [Uint64MapEntry](../classes/neuroglancer_segmentation_display_state_frontend.Uint64MapEntry.md)

### Interfaces

- [SegmentationColorGroupState](../interfaces/neuroglancer_segmentation_display_state_frontend.SegmentationColorGroupState.md)
- [SegmentationDisplayState](../interfaces/neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md)
- [SegmentationDisplayState3D](../interfaces/neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState3D.md)
- [SegmentationDisplayStateWithAlpha](../interfaces/neuroglancer_segmentation_display_state_frontend.SegmentationDisplayStateWithAlpha.md)
- [SegmentationGroupState](../interfaces/neuroglancer_segmentation_display_state_frontend.SegmentationGroupState.md)

### Type Aliases

- [SegmentWidgetTemplate](neuroglancer_segmentation_display_state_frontend.md#segmentwidgettemplate)

### Functions

- [augmentSegmentId](neuroglancer_segmentation_display_state_frontend.md#augmentsegmentid)
- [bindSegmentListWidth](neuroglancer_segmentation_display_state_frontend.md#bindsegmentlistwidth)
- [forEachVisibleSegmentToDraw](neuroglancer_segmentation_display_state_frontend.md#foreachvisiblesegmenttodraw)
- [getBaseObjectColor](neuroglancer_segmentation_display_state_frontend.md#getbaseobjectcolor)
- [getObjectColor](neuroglancer_segmentation_display_state_frontend.md#getobjectcolor)
- [makeSegmentWidget](neuroglancer_segmentation_display_state_frontend.md#makesegmentwidget)
- [maybeAugmentSegmentId](neuroglancer_segmentation_display_state_frontend.md#maybeaugmentsegmentid)
- [registerCallbackWhenSegmentationDisplayStateChanged](neuroglancer_segmentation_display_state_frontend.md#registercallbackwhensegmentationdisplaystatechanged)
- [registerRedrawWhenSegmentationDisplayState3DChanged](neuroglancer_segmentation_display_state_frontend.md#registerredrawwhensegmentationdisplaystate3dchanged)
- [registerRedrawWhenSegmentationDisplayStateChanged](neuroglancer_segmentation_display_state_frontend.md#registerredrawwhensegmentationdisplaystatechanged)
- [registerRedrawWhenSegmentationDisplayStateWithAlphaChanged](neuroglancer_segmentation_display_state_frontend.md#registerredrawwhensegmentationdisplaystatewithalphachanged)
- [resetTemporaryVisibleSegmentsState](neuroglancer_segmentation_display_state_frontend.md#resettemporaryvisiblesegmentsstate)
- [segmentWidgetTemplateWithExtraColumns](neuroglancer_segmentation_display_state_frontend.md#segmentwidgettemplatewithextracolumns)
- [sendVisibleSegmentsState](neuroglancer_segmentation_display_state_frontend.md#sendvisiblesegmentsstate)
- [updateIdStringWidth](neuroglancer_segmentation_display_state_frontend.md#updateidstringwidth)

## Type Aliases

### SegmentWidgetTemplate

Ƭ **SegmentWidgetTemplate**: typeof [`segmentWidgetTemplate`](neuroglancer_segmentation_display_state_frontend._internal_.md#segmentwidgettemplate)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:306](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/frontend.ts#L306)

## Functions

### augmentSegmentId

▸ **augmentSegmentId**(`displayState`, `value`): [`Uint64MapEntry`](../classes/neuroglancer_segmentation_display_state_frontend.Uint64MapEntry.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `displayState` | `undefined` \| ``null`` \| [`SegmentationDisplayState`](../interfaces/neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md) |
| `value` | `number` \| [`Uint64`](../classes/neuroglancer_util_uint64.Uint64.md) \| [`Uint64MapEntry`](../classes/neuroglancer_segmentation_display_state_frontend.Uint64MapEntry.md) |

#### Returns

[`Uint64MapEntry`](../classes/neuroglancer_segmentation_display_state_frontend.Uint64MapEntry.md)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:211](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/frontend.ts#L211)

___

### bindSegmentListWidth

▸ **bindSegmentListWidth**(`displayState`, `element`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `displayState` | [`SegmentationDisplayState`](../interfaces/neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md) |
| `element` | [`HTMLElement`](main_module._internal_.md#htmlelement) |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:230](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/frontend.ts#L230)

___

### forEachVisibleSegmentToDraw

▸ **forEachVisibleSegmentToDraw**(`displayState`, `renderLayer`, `emitColor`, `pickIDs`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `displayState` | [`SegmentationDisplayState3D`](../interfaces/neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState3D.md) |
| `renderLayer` | [`RenderLayer`](../classes/neuroglancer_renderlayer.RenderLayer.md) |
| `emitColor` | `boolean` |
| `pickIDs` | `undefined` \| [`PickIDManager`](../classes/neuroglancer_object_picking.PickIDManager.md) |
| `callback` | (`objectId`: [`Uint64`](../classes/neuroglancer_util_uint64.Uint64.md), `color`: `undefined` \| [`vec4`](../classes/neuroglancer_util_geom.vec4.md), `pickIndex`: `undefined` \| `number`, `rootObjectId`: [`Uint64`](../classes/neuroglancer_util_uint64.Uint64.md)) => `void` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:789](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/frontend.ts#L789)

___

### getBaseObjectColor

▸ **getBaseObjectColor**(`displayState`, `objectId`, `color?`): `Float32Array`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `displayState` | `undefined` \| ``null`` \| [`SegmentationDisplayState`](../interfaces/neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md) | `undefined` |
| `objectId` | [`Uint64`](../classes/neuroglancer_util_uint64.Uint64.md) | `undefined` |
| `color` | `Float32Array` | `tempColor` |

#### Returns

`Float32Array`

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:704](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/frontend.ts#L704)

___

### getObjectColor

▸ **getObjectColor**(`displayState`, `objectId`, `alpha?`): [`vec4`](../classes/neuroglancer_util_geom.vec4.md)

Returns the alpha-premultiplied color to use.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `displayState` | [`SegmentationDisplayState`](../interfaces/neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md) | `undefined` |
| `objectId` | [`Uint64`](../classes/neuroglancer_util_uint64.Uint64.md) | `undefined` |
| `alpha` | `number` | `1` |

#### Returns

[`vec4`](../classes/neuroglancer_util_geom.vec4.md)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:735](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/frontend.ts#L735)

___

### makeSegmentWidget

▸ **makeSegmentWidget**(`displayState`, `normalizedId`): [`HTMLDivElement`](main_module._internal_.md#htmldivelement)

#### Parameters

| Name | Type |
| :------ | :------ |
| `displayState` | `undefined` \| ``null`` \| [`SegmentationDisplayState`](../interfaces/neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md) |
| `normalizedId` | [`Uint64MapEntry`](../classes/neuroglancer_segmentation_display_state_frontend.Uint64MapEntry.md) |

#### Returns

[`HTMLDivElement`](main_module._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:635](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/frontend.ts#L635)

___

### maybeAugmentSegmentId

▸ **maybeAugmentSegmentId**(`displayState`, `value`, `mustCopy?`): [`Uint64`](../classes/neuroglancer_util_uint64.Uint64.md) \| [`Uint64MapEntry`](../classes/neuroglancer_segmentation_display_state_frontend.Uint64MapEntry.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `displayState` | `undefined` \| ``null`` \| [`SegmentationDisplayState`](../interfaces/neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md) | `undefined` |
| `value` | `number` \| [`Uint64`](../classes/neuroglancer_util_uint64.Uint64.md) | `undefined` |
| `mustCopy` | `boolean` | `false` |

#### Returns

[`Uint64`](../classes/neuroglancer_util_uint64.Uint64.md) \| [`Uint64MapEntry`](../classes/neuroglancer_segmentation_display_state_frontend.Uint64MapEntry.md)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:176](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/frontend.ts#L176)

___

### registerCallbackWhenSegmentationDisplayStateChanged

▸ **registerCallbackWhenSegmentationDisplayStateChanged**(`displayState`, `context`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `displayState` | [`SegmentationDisplayState`](../interfaces/neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md) |
| `context` | [`RefCounted`](../classes/neuroglancer_util_disposable.RefCounted.md) |
| `callback` | () => `void` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:655](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/frontend.ts#L655)

___

### registerRedrawWhenSegmentationDisplayState3DChanged

▸ **registerRedrawWhenSegmentationDisplayState3DChanged**(`displayState`, `renderLayer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `displayState` | [`SegmentationDisplayState3D`](../interfaces/neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState3D.md) |
| `renderLayer` | { `redrawNeeded`: [`NullarySignal`](../classes/neuroglancer_util_signal.NullarySignal.md)  } & [`RefCounted`](../classes/neuroglancer_util_disposable.RefCounted.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:686](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/frontend.ts#L686)

___

### registerRedrawWhenSegmentationDisplayStateChanged

▸ **registerRedrawWhenSegmentationDisplayStateChanged**(`displayState`, `renderLayer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `displayState` | [`SegmentationDisplayState`](../interfaces/neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md) |
| `renderLayer` | { `redrawNeeded`: [`NullarySignal`](../classes/neuroglancer_util_signal.NullarySignal.md)  } & [`RefCounted`](../classes/neuroglancer_util_disposable.RefCounted.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:669](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/frontend.ts#L669)

___

### registerRedrawWhenSegmentationDisplayStateWithAlphaChanged

▸ **registerRedrawWhenSegmentationDisplayStateWithAlphaChanged**(`displayState`, `renderLayer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `displayState` | [`SegmentationDisplayStateWithAlpha`](../interfaces/neuroglancer_segmentation_display_state_frontend.SegmentationDisplayStateWithAlpha.md) |
| `renderLayer` | { `redrawNeeded`: [`NullarySignal`](../classes/neuroglancer_util_signal.NullarySignal.md)  } & [`RefCounted`](../classes/neuroglancer_util_disposable.RefCounted.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:678](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/frontend.ts#L678)

___

### resetTemporaryVisibleSegmentsState

▸ **resetTemporaryVisibleSegmentsState**(`state`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`VisibleSegmentsState`](../interfaces/neuroglancer_segmentation_display_state_base.VisibleSegmentsState.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:167](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/frontend.ts#L167)

___

### segmentWidgetTemplateWithExtraColumns

▸ **segmentWidgetTemplateWithExtraColumns**(`numExtraColumns`): [`SegmentWidgetWithExtraColumnsTemplate`](../interfaces/neuroglancer_segmentation_display_state_frontend._internal_.SegmentWidgetWithExtraColumnsTemplate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `numExtraColumns` | `number` |

#### Returns

[`SegmentWidgetWithExtraColumnsTemplate`](../interfaces/neuroglancer_segmentation_display_state_frontend._internal_.SegmentWidgetWithExtraColumnsTemplate.md)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:312](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/frontend.ts#L312)

___

### sendVisibleSegmentsState

▸ **sendVisibleSegmentsState**(`state`, `options?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`VisibleSegmentsState`](../interfaces/neuroglancer_segmentation_display_state_base.VisibleSegmentsState.md) |
| `options` | `any` |

#### Returns

`any`

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:758](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/frontend.ts#L758)

___

### updateIdStringWidth

▸ **updateIdStringWidth**(`idStringWidth`, `idString`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `idStringWidth` | [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<`number`\> |
| `idString` | `string` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:222](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/frontend.ts#L222)
