[neuroglancer](../README.md) / [Modules](../modules.md) / [ui/layer\_bar](../modules/ui_layer_bar.md) / [<internal\>](../modules/ui_layer_bar._internal_.md) / LinkedDepthRange

# Class: LinkedDepthRange

[ui/layer_bar](../modules/ui_layer_bar.md).[<internal>](../modules/ui_layer_bar._internal_.md).LinkedDepthRange

## Hierarchy

- [`SimpleLinkedBase`](ui_layer_bar._internal_.SimpleLinkedBase.md)<[`TrackableDepthRange`](annotation_polygon._internal_.TrackableDepthRange.md)\>

  ↳ **`LinkedDepthRange`**

## Table of contents

### Constructors

- [constructor](ui_layer_bar._internal_.LinkedDepthRange.md#constructor)

### Properties

- [link](ui_layer_bar._internal_.LinkedDepthRange.md#link)
- [peer](ui_layer_bar._internal_.LinkedDepthRange.md#peer)
- [value](ui_layer_bar._internal_.LinkedDepthRange.md#value)

### Accessors

- [changed](ui_layer_bar._internal_.LinkedDepthRange.md#changed)

### Methods

- [copyToPeer](ui_layer_bar._internal_.LinkedDepthRange.md#copytopeer)
- [getValueJson](ui_layer_bar._internal_.LinkedDepthRange.md#getvaluejson)
- [reset](ui_layer_bar._internal_.LinkedDepthRange.md#reset)
- [restoreState](ui_layer_bar._internal_.LinkedDepthRange.md#restorestate)
- [toJSON](ui_layer_bar._internal_.LinkedDepthRange.md#tojson)

## Constructors

### constructor

• **new LinkedDepthRange**(`peer`, `displayDimensionRenderInfo`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `peer` | [`TrackableDepthRange`](annotation_polygon._internal_.TrackableDepthRange.md) |
| `displayDimensionRenderInfo` | [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<[`DisplayDimensionRenderInfo`](../interfaces/annotation_base._internal_.DisplayDimensionRenderInfo.md)\> |

#### Overrides

[SimpleLinkedBase](ui_layer_bar._internal_.SimpleLinkedBase.md).[constructor](ui_layer_bar._internal_.SimpleLinkedBase.md#constructor)

#### Defined in

[src/neuroglancer/navigation_state.ts:1487](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L1487)

## Properties

### link

• **link**: [`TrackableNavigationSimpleLink`](ui_layer_bar._internal_.TrackableNavigationSimpleLink.md)

#### Inherited from

[SimpleLinkedBase](ui_layer_bar._internal_.SimpleLinkedBase.md).[link](ui_layer_bar._internal_.SimpleLinkedBase.md#link)

___

### peer

• **peer**: [`TrackableDepthRange`](annotation_polygon._internal_.TrackableDepthRange.md)

#### Inherited from

[SimpleLinkedBase](ui_layer_bar._internal_.SimpleLinkedBase.md).[peer](ui_layer_bar._internal_.SimpleLinkedBase.md#peer)

___

### value

• **value**: [`TrackableDepthRange`](annotation_polygon._internal_.TrackableDepthRange.md)

#### Inherited from

[SimpleLinkedBase](ui_layer_bar._internal_.SimpleLinkedBase.md).[value](ui_layer_bar._internal_.SimpleLinkedBase.md#value)

#### Defined in

[src/neuroglancer/navigation_state.ts:323](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L323)

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
