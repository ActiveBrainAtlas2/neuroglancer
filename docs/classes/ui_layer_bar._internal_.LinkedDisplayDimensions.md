[neuroglancer](../README.md) / [Modules](../modules.md) / [ui/layer\_bar](../modules/ui_layer_bar.md) / [<internal\>](../modules/ui_layer_bar._internal_.md) / LinkedDisplayDimensions

# Class: LinkedDisplayDimensions

[ui/layer_bar](../modules/ui_layer_bar.md).[<internal>](../modules/ui_layer_bar._internal_.md).LinkedDisplayDimensions

## Hierarchy

- [`SimpleLinkedBase`](ui_layer_bar._internal_.SimpleLinkedBase.md)<[`TrackableDisplayDimensions`](annotation_polygon._internal_.TrackableDisplayDimensions.md)\>

  ↳ **`LinkedDisplayDimensions`**

## Table of contents

### Constructors

- [constructor](ui_layer_bar._internal_.LinkedDisplayDimensions.md#constructor)

### Properties

- [link](ui_layer_bar._internal_.LinkedDisplayDimensions.md#link)
- [peer](ui_layer_bar._internal_.LinkedDisplayDimensions.md#peer)
- [value](ui_layer_bar._internal_.LinkedDisplayDimensions.md#value)

### Accessors

- [changed](ui_layer_bar._internal_.LinkedDisplayDimensions.md#changed)

### Methods

- [copyToPeer](ui_layer_bar._internal_.LinkedDisplayDimensions.md#copytopeer)
- [getValueJson](ui_layer_bar._internal_.LinkedDisplayDimensions.md#getvaluejson)
- [reset](ui_layer_bar._internal_.LinkedDisplayDimensions.md#reset)
- [restoreState](ui_layer_bar._internal_.LinkedDisplayDimensions.md#restorestate)
- [toJSON](ui_layer_bar._internal_.LinkedDisplayDimensions.md#tojson)

## Constructors

### constructor

• **new LinkedDisplayDimensions**(`peer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `peer` | [`TrackableDisplayDimensions`](annotation_polygon._internal_.TrackableDisplayDimensions.md) |

#### Overrides

[SimpleLinkedBase](ui_layer_bar._internal_.SimpleLinkedBase.md).[constructor](ui_layer_bar._internal_.SimpleLinkedBase.md#constructor)

#### Defined in

[src/neuroglancer/navigation_state.ts:963](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L963)

## Properties

### link

• **link**: [`TrackableNavigationSimpleLink`](ui_layer_bar._internal_.TrackableNavigationSimpleLink.md)

#### Inherited from

[SimpleLinkedBase](ui_layer_bar._internal_.SimpleLinkedBase.md).[link](ui_layer_bar._internal_.SimpleLinkedBase.md#link)

___

### peer

• **peer**: [`TrackableDisplayDimensions`](annotation_polygon._internal_.TrackableDisplayDimensions.md)

#### Inherited from

[SimpleLinkedBase](ui_layer_bar._internal_.SimpleLinkedBase.md).[peer](ui_layer_bar._internal_.SimpleLinkedBase.md#peer)

___

### value

• **value**: [`TrackableDisplayDimensions`](annotation_polygon._internal_.TrackableDisplayDimensions.md)

#### Overrides

[SimpleLinkedBase](ui_layer_bar._internal_.SimpleLinkedBase.md).[value](ui_layer_bar._internal_.SimpleLinkedBase.md#value)

#### Defined in

[src/neuroglancer/navigation_state.ts:958](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L958)

## Accessors

### changed

• `get` **changed**(): [`NullaryReadonlySignal`](../modules/util_signal.md#nullaryreadonlysignal)

#### Returns

[`NullaryReadonlySignal`](../modules/util_signal.md#nullaryreadonlysignal)

#### Inherited from

SimpleLinkedBase.changed

#### Defined in

[src/neuroglancer/navigation_state.ts:324](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L324)

## Methods

### copyToPeer

▸ **copyToPeer**(): `void`

#### Returns

`void`

#### Inherited from

[SimpleLinkedBase](ui_layer_bar._internal_.SimpleLinkedBase.md).[copyToPeer](ui_layer_bar._internal_.SimpleLinkedBase.md#copytopeer)

#### Defined in

[src/neuroglancer/navigation_state.ts:349](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L349)

___

### getValueJson

▸ `Protected` **getValueJson**(): `any`

#### Returns

`any`

#### Inherited from

[SimpleLinkedBase](ui_layer_bar._internal_.SimpleLinkedBase.md).[getValueJson](ui_layer_bar._internal_.SimpleLinkedBase.md#getvaluejson)

#### Defined in

[src/neuroglancer/navigation_state.ts:337](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L337)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Inherited from

[SimpleLinkedBase](ui_layer_bar._internal_.SimpleLinkedBase.md).[reset](ui_layer_bar._internal_.SimpleLinkedBase.md#reset)

#### Defined in

[src/neuroglancer/navigation_state.ts:341](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L341)

___

### restoreState

▸ **restoreState**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

`void`

#### Inherited from

[SimpleLinkedBase](ui_layer_bar._internal_.SimpleLinkedBase.md).[restoreState](ui_layer_bar._internal_.SimpleLinkedBase.md#restorestate)

#### Defined in

[src/neuroglancer/navigation_state.ts:345](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L345)

___

### toJSON

▸ **toJSON**(): `undefined` \| { `link`: `undefined` \| `string` ; `value`: `any`  }

#### Returns

`undefined` \| { `link`: `undefined` \| `string` ; `value`: `any`  }

#### Inherited from

[SimpleLinkedBase](ui_layer_bar._internal_.SimpleLinkedBase.md).[toJSON](ui_layer_bar._internal_.SimpleLinkedBase.md#tojson)

#### Defined in

[src/neuroglancer/navigation_state.ts:329](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L329)
