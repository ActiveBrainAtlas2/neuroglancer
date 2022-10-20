[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/segmentation\_display\_state/frontend](../modules/neuroglancer_segmentation_display_state_frontend.md) / SegmentWidgetWithExtraColumnsFactory

# Class: SegmentWidgetWithExtraColumnsFactory

[neuroglancer/segmentation_display_state/frontend](../modules/neuroglancer_segmentation_display_state_frontend.md).SegmentWidgetWithExtraColumnsFactory

## Hierarchy

- [`SegmentWidgetFactory`](neuroglancer_segmentation_display_state_frontend.SegmentWidgetFactory.md)<[`SegmentWidgetWithExtraColumnsTemplate`](../interfaces/neuroglancer_segmentation_display_state_frontend._internal_.SegmentWidgetWithExtraColumnsTemplate.md)\>

  ↳ **`SegmentWidgetWithExtraColumnsFactory`**

## Table of contents

### Constructors

- [constructor](neuroglancer_segmentation_display_state_frontend.SegmentWidgetWithExtraColumnsFactory.md#constructor)

### Properties

- [displayState](neuroglancer_segmentation_display_state_frontend.SegmentWidgetWithExtraColumnsFactory.md#displaystate)
- [numericalProperties](neuroglancer_segmentation_display_state_frontend.SegmentWidgetWithExtraColumnsFactory.md#numericalproperties)
- [numericalPropertyWidths](neuroglancer_segmentation_display_state_frontend.SegmentWidgetWithExtraColumnsFactory.md#numericalpropertywidths)
- [parentElement](neuroglancer_segmentation_display_state_frontend.SegmentWidgetWithExtraColumnsFactory.md#parentelement)
- [segmentPropertyMap](neuroglancer_segmentation_display_state_frontend.SegmentWidgetWithExtraColumnsFactory.md#segmentpropertymap)
- [template](neuroglancer_segmentation_display_state_frontend.SegmentWidgetWithExtraColumnsFactory.md#template)

### Methods

- [get](neuroglancer_segmentation_display_state_frontend.SegmentWidgetWithExtraColumnsFactory.md#get)
- [getHeader](neuroglancer_segmentation_display_state_frontend.SegmentWidgetWithExtraColumnsFactory.md#getheader)
- [getWithNormalizedId](neuroglancer_segmentation_display_state_frontend.SegmentWidgetWithExtraColumnsFactory.md#getwithnormalizedid)
- [makeHeaderLabel](neuroglancer_segmentation_display_state_frontend.SegmentWidgetWithExtraColumnsFactory.md#makeheaderlabel)
- [update](neuroglancer_segmentation_display_state_frontend.SegmentWidgetWithExtraColumnsFactory.md#update)
- [make](neuroglancer_segmentation_display_state_frontend.SegmentWidgetWithExtraColumnsFactory.md#make)

## Constructors

### constructor

• **new SegmentWidgetWithExtraColumnsFactory**(`displayState`, `parentElement`, `includeProperty`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `displayState` | [`SegmentationDisplayState`](../interfaces/neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md) |
| `parentElement` | [`HTMLElement`](../modules/main_module._internal_.md#htmlelement) |
| `includeProperty` | (`property`: [`InlineSegmentProperty`](../modules/neuroglancer_segmentation_display_state_property_map.md#inlinesegmentproperty)) => `boolean` |

#### Overrides

[SegmentWidgetFactory](neuroglancer_segmentation_display_state_frontend.SegmentWidgetFactory.md).[constructor](neuroglancer_segmentation_display_state_frontend.SegmentWidgetFactory.md#constructor)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:539](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/frontend.ts#L539)

## Properties

### displayState

• **displayState**: `undefined` \| [`SegmentationDisplayState`](../interfaces/neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md)

#### Inherited from

[SegmentWidgetFactory](neuroglancer_segmentation_display_state_frontend.SegmentWidgetFactory.md).[displayState](neuroglancer_segmentation_display_state_frontend.SegmentWidgetFactory.md#displaystate)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:424](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/frontend.ts#L424)

___

### numericalProperties

• **numericalProperties**: [`InlineSegmentNumericalProperty`](../interfaces/neuroglancer_segmentation_display_state_property_map.InlineSegmentNumericalProperty.md)[]

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:536](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/frontend.ts#L536)

___

### numericalPropertyWidths

• **numericalPropertyWidths**: `number`[]

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:537](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/frontend.ts#L537)

___

### parentElement

• **parentElement**: [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:538](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/frontend.ts#L538)

___

### segmentPropertyMap

• **segmentPropertyMap**: `undefined` \| [`PreprocessedSegmentPropertyMap`](neuroglancer_segmentation_display_state_property_map.PreprocessedSegmentPropertyMap.md)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:535](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/frontend.ts#L535)

___

### template

• `Protected` **template**: [`SegmentWidgetWithExtraColumnsTemplate`](../interfaces/neuroglancer_segmentation_display_state_frontend._internal_.SegmentWidgetWithExtraColumnsTemplate.md)

#### Inherited from

[SegmentWidgetFactory](neuroglancer_segmentation_display_state_frontend.SegmentWidgetFactory.md).[template](neuroglancer_segmentation_display_state_frontend.SegmentWidgetFactory.md#template)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:424](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/frontend.ts#L424)

## Methods

### get

▸ **get**(`rawId`): [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rawId` | `number` \| [`Uint64`](neuroglancer_util_uint64.Uint64.md) |

#### Returns

[`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Inherited from

[SegmentWidgetFactory](neuroglancer_segmentation_display_state_frontend.SegmentWidgetFactory.md).[get](neuroglancer_segmentation_display_state_frontend.SegmentWidgetFactory.md#get)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:440](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/frontend.ts#L440)

___

### getHeader

▸ **getHeader**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `container` | [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement) |
| `propertyLabels` | { `id`: `string` ; `label`: [`HTMLSpanElement`](../modules/main_module._internal_.md#htmlspanelement) ; `sortIcon`: [`HTMLSpanElement`](../modules/main_module._internal_.md#htmlspanelement)  }[] |

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:600](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/frontend.ts#L600)

___

### getWithNormalizedId

▸ **getWithNormalizedId**(`normalizedId`): [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Parameters

| Name | Type |
| :------ | :------ |
| `normalizedId` | [`Uint64MapEntry`](neuroglancer_segmentation_display_state_frontend.Uint64MapEntry.md) |

#### Returns

[`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Overrides

[SegmentWidgetFactory](neuroglancer_segmentation_display_state_frontend.SegmentWidgetFactory.md).[getWithNormalizedId](neuroglancer_segmentation_display_state_frontend.SegmentWidgetFactory.md#getwithnormalizedid)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:555](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/frontend.ts#L555)

___

### makeHeaderLabel

▸ `Private` **makeHeaderLabel**(`id`, `widthProperty`, `parent`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `widthProperty` | `string` |
| `parent` | [`HTMLElement`](../modules/main_module._internal_.md#htmlelement) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `label` | [`HTMLSpanElement`](../modules/main_module._internal_.md#htmlspanelement) |
| `sortIcon` | [`HTMLSpanElement`](../modules/main_module._internal_.md#htmlspanelement) |

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:582](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/frontend.ts#L582)

___

### update

▸ **update**(`container`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`HTMLElement`](../modules/main_module._internal_.md#htmlelement) |

#### Returns

`void`

#### Inherited from

[SegmentWidgetFactory](neuroglancer_segmentation_display_state_frontend.SegmentWidgetFactory.md).[update](neuroglancer_segmentation_display_state_frontend.SegmentWidgetFactory.md#update)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:487](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/frontend.ts#L487)

___

### make

▸ `Static` **make**(`displayState`, `includeUnmapped`): [`SegmentWidgetFactory`](neuroglancer_segmentation_display_state_frontend.SegmentWidgetFactory.md)<{ `copyContainerIndex`: `number` ; `copyIndex`: `number` ; `filterIndex`: `number` ; `idContainerIndex`: `number` ; `idIndex`: `number` ; `labelIndex`: `number` ; `template`: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement) ; `unmappedCopyIndex`: `number` = -1; `unmappedIdIndex`: `number` = -1; `visibleIndex`: `number`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `displayState` | `undefined` \| [`SegmentationDisplayState`](../interfaces/neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md) |
| `includeUnmapped` | `boolean` |

#### Returns

[`SegmentWidgetFactory`](neuroglancer_segmentation_display_state_frontend.SegmentWidgetFactory.md)<{ `copyContainerIndex`: `number` ; `copyIndex`: `number` ; `filterIndex`: `number` ; `idContainerIndex`: `number` ; `idIndex`: `number` ; `labelIndex`: `number` ; `template`: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement) ; `unmappedCopyIndex`: `number` = -1; `unmappedIdIndex`: `number` = -1; `visibleIndex`: `number`  }\>

#### Inherited from

[SegmentWidgetFactory](neuroglancer_segmentation_display_state_frontend.SegmentWidgetFactory.md).[make](neuroglancer_segmentation_display_state_frontend.SegmentWidgetFactory.md#make)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:435](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/frontend.ts#L435)
