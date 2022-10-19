[neuroglancer](../README.md) / [Modules](../modules.md) / [layer\_group\_viewer](../modules/layer_group_viewer.md) / [<internal\>](../modules/layer_group_viewer._internal_.md) / DropLayers

# Class: DropLayers

[layer_group_viewer](../modules/layer_group_viewer.md).[<internal>](../modules/layer_group_viewer._internal_.md).DropLayers

## Table of contents

### Constructors

- [constructor](layer_group_viewer._internal_.DropLayers.md#constructor)

### Properties

- [dragType](layer_group_viewer._internal_.DropLayers.md#dragtype)
- [forceCopy](layer_group_viewer._internal_.DropLayers.md#forcecopy)
- [layers](layer_group_viewer._internal_.DropLayers.md#layers)
- [layoutSpec](layer_group_viewer._internal_.DropLayers.md#layoutspec)
- [manager](layer_group_viewer._internal_.DropLayers.md#manager)
- [moveSupported](layer_group_viewer._internal_.DropLayers.md#movesupported)
- [numSourceLayers](layer_group_viewer._internal_.DropLayers.md#numsourcelayers)
- [sourceIsLayerListPanel](layer_group_viewer._internal_.DropLayers.md#sourceislayerlistpanel)
- [sourceManager](layer_group_viewer._internal_.DropLayers.md#sourcemanager)
- [targetIsLayerListPanel](layer_group_viewer._internal_.DropLayers.md#targetislayerlistpanel)

### Accessors

- [method](layer_group_viewer._internal_.DropLayers.md#method)

### Methods

- [compatibleWithMethod](layer_group_viewer._internal_.DropLayers.md#compatiblewithmethod)
- [initializeExternalLayers](layer_group_viewer._internal_.DropLayers.md#initializeexternallayers)
- [updateArchiveStates](layer_group_viewer._internal_.DropLayers.md#updatearchivestates)

## Constructors

### constructor

• **new DropLayers**()

## Properties

### dragType

• **dragType**: `undefined` \| `string`

#### Defined in

[src/neuroglancer/ui/layer_drag_and_drop.ts:97](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/layer_drag_and_drop.ts#L97)

___

### forceCopy

• **forceCopy**: `boolean`

#### Defined in

[src/neuroglancer/ui/layer_drag_and_drop.ts:105](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/layer_drag_and_drop.ts#L105)

___

### layers

• **layers**: `Map`<[`ManagedUserLayer`](layer.ManagedUserLayer.md), `number`\>

#### Defined in

[src/neuroglancer/ui/layer_drag_and_drop.ts:110](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/layer_drag_and_drop.ts#L110)

___

### layoutSpec

• **layoutSpec**: `any`

#### Defined in

[src/neuroglancer/ui/layer_drag_and_drop.ts:116](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/layer_drag_and_drop.ts#L116)

___

### manager

• **manager**: [`LayerListSpecification`](layer.LayerListSpecification.md)

#### Defined in

[src/neuroglancer/ui/layer_drag_and_drop.ts:107](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/layer_drag_and_drop.ts#L107)

___

### moveSupported

• **moveSupported**: `boolean`

#### Defined in

[src/neuroglancer/ui/layer_drag_and_drop.ts:104](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/layer_drag_and_drop.ts#L104)

___

### numSourceLayers

• **numSourceLayers**: `number`

#### Defined in

[src/neuroglancer/ui/layer_drag_and_drop.ts:112](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/layer_drag_and_drop.ts#L112)

___

### sourceIsLayerListPanel

• **sourceIsLayerListPanel**: `boolean`

#### Defined in

[src/neuroglancer/ui/layer_drag_and_drop.ts:102](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/layer_drag_and_drop.ts#L102)

___

### sourceManager

• **sourceManager**: `undefined` \| [`LayerListSpecification`](layer.LayerListSpecification.md)

#### Defined in

[src/neuroglancer/ui/layer_drag_and_drop.ts:101](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/layer_drag_and_drop.ts#L101)

___

### targetIsLayerListPanel

• **targetIsLayerListPanel**: `boolean`

#### Defined in

[src/neuroglancer/ui/layer_drag_and_drop.ts:99](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/layer_drag_and_drop.ts#L99)

## Accessors

### method

• `get` **method**(): ``"copy"`` \| ``"link"`` \| ``"move"``

#### Returns

``"copy"`` \| ``"link"`` \| ``"move"``

#### Defined in

[src/neuroglancer/ui/layer_drag_and_drop.ts:164](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/layer_drag_and_drop.ts#L164)

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

[src/neuroglancer/ui/layer_drag_and_drop.ts:177](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/layer_drag_and_drop.ts#L177)

___

### initializeExternalLayers

▸ **initializeExternalLayers**(`event`): `boolean`

Called in the 'drop' event handler to actually initialize the layers if they are external.
Returns false if any layers failed to initialized.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`DragEvent`](../modules/axes_lines._internal_.md#dragevent) |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/ui/layer_drag_and_drop.ts:122](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/layer_drag_and_drop.ts#L122)

___

### updateArchiveStates

▸ **updateArchiveStates**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`DragEvent`](../modules/axes_lines._internal_.md#dragevent) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/layer_drag_and_drop.ts:141](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/layer_drag_and_drop.ts#L141)
