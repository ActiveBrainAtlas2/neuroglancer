[neuroglancer](../README.md) / [Modules](../modules.md) / [segmentation\_display\_state/frontend](../modules/segmentation_display_state_frontend.md) / SegmentWidgetFactory

# Class: SegmentWidgetFactory<Template\>

[segmentation_display_state/frontend](../modules/segmentation_display_state_frontend.md).SegmentWidgetFactory

## Type parameters

| Name | Type |
| :------ | :------ |
| `Template` | extends [`SegmentWidgetTemplate`](../modules/segmentation_display_state_frontend.md#segmentwidgettemplate) |

## Hierarchy

- **`SegmentWidgetFactory`**

  ↳ [`SegmentWidgetWithExtraColumnsFactory`](segmentation_display_state_frontend.SegmentWidgetWithExtraColumnsFactory.md)

## Table of contents

### Constructors

- [constructor](segmentation_display_state_frontend.SegmentWidgetFactory.md#constructor)

### Properties

- [displayState](segmentation_display_state_frontend.SegmentWidgetFactory.md#displaystate)
- [registerEventHandlers](segmentation_display_state_frontend.SegmentWidgetFactory.md#registereventhandlers)
- [template](segmentation_display_state_frontend.SegmentWidgetFactory.md#template)

### Methods

- [get](segmentation_display_state_frontend.SegmentWidgetFactory.md#get)
- [getWithNormalizedId](segmentation_display_state_frontend.SegmentWidgetFactory.md#getwithnormalizedid)
- [update](segmentation_display_state_frontend.SegmentWidgetFactory.md#update)
- [updateWithId](segmentation_display_state_frontend.SegmentWidgetFactory.md#updatewithid)
- [make](segmentation_display_state_frontend.SegmentWidgetFactory.md#make)

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
| `displayState` | `undefined` \| [`SegmentationDisplayState`](../interfaces/segmentation_display_state_frontend.SegmentationDisplayState.md) |
| `template` | `Template` |

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:423](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L423)

## Properties

### displayState

• **displayState**: `undefined` \| [`SegmentationDisplayState`](../interfaces/segmentation_display_state_frontend.SegmentationDisplayState.md)

___

### registerEventHandlers

• `Private` **registerEventHandlers**: `undefined` \| (`element`: [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement), `template`: { `copyContainerIndex`: `number` ; `copyIndex`: `number` ; `filterIndex`: `number` ; `idContainerIndex`: `number` ; `idIndex`: `number` ; `labelIndex`: `number` ; `template`: [`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement) ; `unmappedCopyIndex`: `number` = -1; `unmappedIdIndex`: `number` = -1; `visibleIndex`: `number`  }) => `void`

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:421](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L421)

___

### template

• `Protected` **template**: `Template`

## Methods

### get

▸ **get**(`rawId`): [`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rawId` | `number` \| [`Uint64`](util_uint64.Uint64.md) |

#### Returns

[`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:440](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L440)

___

### getWithNormalizedId

▸ **getWithNormalizedId**(`normalizedId`): [`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement)

#### Parameters

| Name | Type |
| :------ | :------ |
| `normalizedId` | [`Uint64MapEntry`](segmentation_display_state_frontend.Uint64MapEntry.md) |

#### Returns

[`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:445](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L445)

___

### update

▸ **update**(`container`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:487](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L487)

___

### updateWithId

▸ `Private` **updateWithId**(`container`, `mapped`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement) |
| `mapped` | [`Uint64`](util_uint64.Uint64.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:495](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L495)

___

### make

▸ `Static` **make**(`displayState`, `includeUnmapped`): [`SegmentWidgetFactory`](segmentation_display_state_frontend.SegmentWidgetFactory.md)<{ `copyContainerIndex`: `number` ; `copyIndex`: `number` ; `filterIndex`: `number` ; `idContainerIndex`: `number` ; `idIndex`: `number` ; `labelIndex`: `number` ; `template`: [`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement) ; `unmappedCopyIndex`: `number` = -1; `unmappedIdIndex`: `number` = -1; `visibleIndex`: `number`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `displayState` | `undefined` \| [`SegmentationDisplayState`](../interfaces/segmentation_display_state_frontend.SegmentationDisplayState.md) |
| `includeUnmapped` | `boolean` |

#### Returns

[`SegmentWidgetFactory`](segmentation_display_state_frontend.SegmentWidgetFactory.md)<{ `copyContainerIndex`: `number` ; `copyIndex`: `number` ; `filterIndex`: `number` ; `idContainerIndex`: `number` ; `idIndex`: `number` ; `labelIndex`: `number` ; `template`: [`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement) ; `unmappedCopyIndex`: `number` = -1; `unmappedIdIndex`: `number` = -1; `visibleIndex`: `number`  }\>

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:435](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L435)
