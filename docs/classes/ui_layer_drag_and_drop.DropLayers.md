[neuroglancer](../README.md) / [Modules](../modules.md) / [ui/layer\_drag\_and\_drop](../modules/ui_layer_drag_and_drop.md) / DropLayers

# Class: DropLayers

[ui/layer_drag_and_drop](../modules/ui_layer_drag_and_drop.md).DropLayers

## Table of contents

### Constructors

- [constructor](ui_layer_drag_and_drop.DropLayers.md#constructor)

### Properties

- [dragType](ui_layer_drag_and_drop.DropLayers.md#dragtype)
- [forceCopy](ui_layer_drag_and_drop.DropLayers.md#forcecopy)
- [layers](ui_layer_drag_and_drop.DropLayers.md#layers)
- [layoutSpec](ui_layer_drag_and_drop.DropLayers.md#layoutspec)
- [manager](ui_layer_drag_and_drop.DropLayers.md#manager)
- [moveSupported](ui_layer_drag_and_drop.DropLayers.md#movesupported)
- [numSourceLayers](ui_layer_drag_and_drop.DropLayers.md#numsourcelayers)
- [sourceIsLayerListPanel](ui_layer_drag_and_drop.DropLayers.md#sourceislayerlistpanel)
- [sourceManager](ui_layer_drag_and_drop.DropLayers.md#sourcemanager)
- [targetIsLayerListPanel](ui_layer_drag_and_drop.DropLayers.md#targetislayerlistpanel)

### Accessors

- [method](ui_layer_drag_and_drop.DropLayers.md#method)

### Methods

- [compatibleWithMethod](ui_layer_drag_and_drop.DropLayers.md#compatiblewithmethod)
- [initializeExternalLayers](ui_layer_drag_and_drop.DropLayers.md#initializeexternallayers)
- [updateArchiveStates](ui_layer_drag_and_drop.DropLayers.md#updatearchivestates)

## Constructors

### constructor

• **new DropLayers**()

## Properties

### dragType

• **dragType**: `undefined` \| `string`

#### Defined in

[src/neuroglancer/ui/layer_drag_and_drop.ts:97](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_drag_and_drop.ts#L97)

___

### forceCopy

• **forceCopy**: `boolean`

#### Defined in

[src/neuroglancer/ui/layer_drag_and_drop.ts:105](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_drag_and_drop.ts#L105)

___

### layers

• **layers**: `Map`<[`ManagedUserLayer`](annotation_annotation_layer_state._internal_.ManagedUserLayer.md), `number`\>

#### Defined in

[src/neuroglancer/ui/layer_drag_and_drop.ts:110](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_drag_and_drop.ts#L110)

___

### layoutSpec

• **layoutSpec**: `any`

#### Defined in

[src/neuroglancer/ui/layer_drag_and_drop.ts:116](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_drag_and_drop.ts#L116)

___

### manager

• **manager**: [`LayerListSpecification`](annotation_annotation_layer_state._internal_.LayerListSpecification.md)

#### Defined in

[src/neuroglancer/ui/layer_drag_and_drop.ts:107](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_drag_and_drop.ts#L107)

___

### moveSupported

• **moveSupported**: `boolean`

#### Defined in

[src/neuroglancer/ui/layer_drag_and_drop.ts:104](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_drag_and_drop.ts#L104)

___

### numSourceLayers

• **numSourceLayers**: `number`

#### Defined in

[src/neuroglancer/ui/layer_drag_and_drop.ts:112](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_drag_and_drop.ts#L112)

___

### sourceIsLayerListPanel

• **sourceIsLayerListPanel**: `boolean`

#### Defined in

[src/neuroglancer/ui/layer_drag_and_drop.ts:102](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_drag_and_drop.ts#L102)

___

### sourceManager

• **sourceManager**: `undefined` \| [`LayerListSpecification`](annotation_annotation_layer_state._internal_.LayerListSpecification.md)

#### Defined in

[src/neuroglancer/ui/layer_drag_and_drop.ts:101](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_drag_and_drop.ts#L101)

___

### targetIsLayerListPanel

• **targetIsLayerListPanel**: `boolean`

#### Defined in

[src/neuroglancer/ui/layer_drag_and_drop.ts:99](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_drag_and_drop.ts#L99)

## Accessors

### method

• `get` **method**(): ``"copy"`` \| ``"link"`` \| ``"move"``

#### Returns

``"copy"`` \| ``"link"`` \| ``"move"``

#### Defined in

[src/neuroglancer/ui/layer_drag_and_drop.ts:164](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_drag_and_drop.ts#L164)

## Methods

### compatibleWithMethod

▸ **compatibleWithMethod**(`otherMethod`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `otherMethod` | `string` |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/ui/layer_drag_and_drop.ts:177](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_drag_and_drop.ts#L177)

___

### initializeExternalLayers

▸ **initializeExternalLayers**(`event`): `boolean`

Called in the 'drop' event handler to actually initialize the layers if they are external.
Returns false if any layers failed to initialized.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`DragEvent`](../modules/annotation_annotation_layer_state._internal_.md#dragevent) |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/ui/layer_drag_and_drop.ts:122](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_drag_and_drop.ts#L122)

___

### updateArchiveStates

▸ **updateArchiveStates**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`DragEvent`](../modules/annotation_annotation_layer_state._internal_.md#dragevent) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/layer_drag_and_drop.ts:141](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_drag_and_drop.ts#L141)
