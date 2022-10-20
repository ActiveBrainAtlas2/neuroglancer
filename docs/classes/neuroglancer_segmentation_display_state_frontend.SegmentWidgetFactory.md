[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/segmentation\_display\_state/frontend](../modules/neuroglancer_segmentation_display_state_frontend.md) / SegmentWidgetFactory

# Class: SegmentWidgetFactory<Template\>

[neuroglancer/segmentation_display_state/frontend](../modules/neuroglancer_segmentation_display_state_frontend.md).SegmentWidgetFactory

## Type parameters

| Name | Type |
| :------ | :------ |
| `Template` | extends [`SegmentWidgetTemplate`](../modules/neuroglancer_segmentation_display_state_frontend.md#segmentwidgettemplate) |

## Hierarchy

- **`SegmentWidgetFactory`**

  ↳ [`SegmentWidgetWithExtraColumnsFactory`](neuroglancer_segmentation_display_state_frontend.SegmentWidgetWithExtraColumnsFactory.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_segmentation_display_state_frontend.SegmentWidgetFactory.md#constructor)

### Properties

- [displayState](neuroglancer_segmentation_display_state_frontend.SegmentWidgetFactory.md#displaystate)
- [registerEventHandlers](neuroglancer_segmentation_display_state_frontend.SegmentWidgetFactory.md#registereventhandlers)
- [template](neuroglancer_segmentation_display_state_frontend.SegmentWidgetFactory.md#template)

### Methods

- [get](neuroglancer_segmentation_display_state_frontend.SegmentWidgetFactory.md#get)
- [getWithNormalizedId](neuroglancer_segmentation_display_state_frontend.SegmentWidgetFactory.md#getwithnormalizedid)
- [update](neuroglancer_segmentation_display_state_frontend.SegmentWidgetFactory.md#update)
- [updateWithId](neuroglancer_segmentation_display_state_frontend.SegmentWidgetFactory.md#updatewithid)
- [make](neuroglancer_segmentation_display_state_frontend.SegmentWidgetFactory.md#make)

## Constructors

### constructor

• **new SegmentWidgetFactory**<`Template`\>(`displayState`, `template`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Template` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `displayState` | `undefined` \| [`SegmentationDisplayState`](../interfaces/neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md) |
| `template` | `Template` |

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:423](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/frontend.ts#L423)

## Properties

### displayState

• **displayState**: `undefined` \| [`SegmentationDisplayState`](../interfaces/neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:424](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/frontend.ts#L424)

___

### registerEventHandlers

• `Private` **registerEventHandlers**: `undefined` \| (`element`: [`HTMLElement`](../modules/main_module._internal_.md#htmlelement), `template`: { `copyContainerIndex`: `number` ; `copyIndex`: `number` ; `filterIndex`: `number` ; `idContainerIndex`: `number` ; `idIndex`: `number` ; `labelIndex`: `number` ; `template`: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement) ; `unmappedCopyIndex`: `number` = -1; `unmappedIdIndex`: `number` = -1; `visibleIndex`: `number`  }) => `void`

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:421](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/frontend.ts#L421)

___

### template

• `Protected` **template**: `Template`

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

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:440](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/frontend.ts#L440)

___

### getWithNormalizedId

▸ **getWithNormalizedId**(`normalizedId`): [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Parameters

| Name | Type |
| :------ | :------ |
| `normalizedId` | [`Uint64MapEntry`](neuroglancer_segmentation_display_state_frontend.Uint64MapEntry.md) |

#### Returns

[`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:445](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/frontend.ts#L445)

___

### update

▸ **update**(`container`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`HTMLElement`](../modules/main_module._internal_.md#htmlelement) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:487](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/frontend.ts#L487)

___

### updateWithId

▸ `Private` **updateWithId**(`container`, `mapped`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`HTMLElement`](../modules/main_module._internal_.md#htmlelement) |
| `mapped` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:495](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/frontend.ts#L495)

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

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:435](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/frontend.ts#L435)
