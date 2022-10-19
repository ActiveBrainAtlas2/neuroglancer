[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/ui/layer\_drag\_and\_drop](../modules/neuroglancer_ui_layer_drag_and_drop.md) / DropLayers

# Class: DropLayers

[neuroglancer/ui/layer_drag_and_drop](../modules/neuroglancer_ui_layer_drag_and_drop.md).DropLayers

## Table of contents

### Constructors

- [constructor](neuroglancer_ui_layer_drag_and_drop.DropLayers.md#constructor)

### Properties

- [dragType](neuroglancer_ui_layer_drag_and_drop.DropLayers.md#dragtype)
- [forceCopy](neuroglancer_ui_layer_drag_and_drop.DropLayers.md#forcecopy)
- [layers](neuroglancer_ui_layer_drag_and_drop.DropLayers.md#layers)
- [layoutSpec](neuroglancer_ui_layer_drag_and_drop.DropLayers.md#layoutspec)
- [manager](neuroglancer_ui_layer_drag_and_drop.DropLayers.md#manager)
- [moveSupported](neuroglancer_ui_layer_drag_and_drop.DropLayers.md#movesupported)
- [numSourceLayers](neuroglancer_ui_layer_drag_and_drop.DropLayers.md#numsourcelayers)
- [sourceIsLayerListPanel](neuroglancer_ui_layer_drag_and_drop.DropLayers.md#sourceislayerlistpanel)
- [sourceManager](neuroglancer_ui_layer_drag_and_drop.DropLayers.md#sourcemanager)
- [targetIsLayerListPanel](neuroglancer_ui_layer_drag_and_drop.DropLayers.md#targetislayerlistpanel)

### Accessors

- [method](neuroglancer_ui_layer_drag_and_drop.DropLayers.md#method)

### Methods

- [compatibleWithMethod](neuroglancer_ui_layer_drag_and_drop.DropLayers.md#compatiblewithmethod)
- [initializeExternalLayers](neuroglancer_ui_layer_drag_and_drop.DropLayers.md#initializeexternallayers)
- [updateArchiveStates](neuroglancer_ui_layer_drag_and_drop.DropLayers.md#updatearchivestates)

## Constructors

### constructor

• **new DropLayers**()

## Properties

### dragType

• **dragType**: `undefined` \| `string`

#### Defined in

[src/neuroglancer/ui/layer_drag_and_drop.ts:97](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_drag_and_drop.ts#L97)

___

### forceCopy

• **forceCopy**: `boolean`

#### Defined in

[src/neuroglancer/ui/layer_drag_and_drop.ts:105](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_drag_and_drop.ts#L105)

___

### layers

• **layers**: `Map`<[`ManagedUserLayer`](neuroglancer_layer.ManagedUserLayer.md), `number`\>

#### Defined in

[src/neuroglancer/ui/layer_drag_and_drop.ts:110](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_drag_and_drop.ts#L110)

___

### layoutSpec

• **layoutSpec**: `any`

#### Defined in

[src/neuroglancer/ui/layer_drag_and_drop.ts:116](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_drag_and_drop.ts#L116)

___

### manager

• **manager**: [`LayerListSpecification`](neuroglancer_layer.LayerListSpecification.md)

#### Defined in

[src/neuroglancer/ui/layer_drag_and_drop.ts:107](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_drag_and_drop.ts#L107)

___

### moveSupported

• **moveSupported**: `boolean`

#### Defined in

[src/neuroglancer/ui/layer_drag_and_drop.ts:104](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_drag_and_drop.ts#L104)

___

### numSourceLayers

• **numSourceLayers**: `number`

#### Defined in

[src/neuroglancer/ui/layer_drag_and_drop.ts:112](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_drag_and_drop.ts#L112)

___

### sourceIsLayerListPanel

• **sourceIsLayerListPanel**: `boolean`

#### Defined in

[src/neuroglancer/ui/layer_drag_and_drop.ts:102](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_drag_and_drop.ts#L102)

___

### sourceManager

• **sourceManager**: `undefined` \| [`LayerListSpecification`](neuroglancer_layer.LayerListSpecification.md)

#### Defined in

[src/neuroglancer/ui/layer_drag_and_drop.ts:101](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_drag_and_drop.ts#L101)

___

### targetIsLayerListPanel

• **targetIsLayerListPanel**: `boolean`

#### Defined in

[src/neuroglancer/ui/layer_drag_and_drop.ts:99](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_drag_and_drop.ts#L99)

## Accessors

### method

• `get` **method**(): ``"copy"`` \| ``"link"`` \| ``"move"``

#### Returns

``"copy"`` \| ``"link"`` \| ``"move"``

#### Defined in

[src/neuroglancer/ui/layer_drag_and_drop.ts:164](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_drag_and_drop.ts#L164)

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

[src/neuroglancer/ui/layer_drag_and_drop.ts:177](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_drag_and_drop.ts#L177)

___

### initializeExternalLayers

▸ **initializeExternalLayers**(`event`): `boolean`

Called in the 'drop' event handler to actually initialize the layers if they are external.
Returns false if any layers failed to initialized.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`DragEvent`](../modules/main_module._internal_.md#dragevent) |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/ui/layer_drag_and_drop.ts:122](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_drag_and_drop.ts#L122)

___

### updateArchiveStates

▸ **updateArchiveStates**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`DragEvent`](../modules/main_module._internal_.md#dragevent) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/layer_drag_and_drop.ts:141](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_drag_and_drop.ts#L141)
