[neuroglancer](../README.md) / [Modules](../modules.md) / [ui/layer\_bar](../modules/ui_layer_bar.md) / [<internal\>](../modules/ui_layer_bar._internal_.md) / LinkedZoomState

# Class: LinkedZoomState<T\>

[ui/layer_bar](../modules/ui_layer_bar.md).[<internal>](../modules/ui_layer_bar._internal_.md).LinkedZoomState

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TrackableProjectionZoom`](annotation_polygon._internal_.TrackableProjectionZoom.md) \| [`TrackableCrossSectionZoom`](annotation_polygon._internal_.TrackableCrossSectionZoom.md) |

## Hierarchy

- [`LinkedBase`](ui_layer_bar._internal_.LinkedBase.md)<`T`\>

  ↳ **`LinkedZoomState`**

## Table of contents

### Constructors

- [constructor](ui_layer_bar._internal_.LinkedZoomState.md#constructor)

### Properties

- [link](ui_layer_bar._internal_.LinkedZoomState.md#link)
- [peer](ui_layer_bar._internal_.LinkedZoomState.md#peer)
- [value](ui_layer_bar._internal_.LinkedZoomState.md#value)

### Accessors

- [changed](ui_layer_bar._internal_.LinkedZoomState.md#changed)

### Methods

- [copyToPeer](ui_layer_bar._internal_.LinkedZoomState.md#copytopeer)
- [getValueJson](ui_layer_bar._internal_.LinkedZoomState.md#getvaluejson)
- [reset](ui_layer_bar._internal_.LinkedZoomState.md#reset)
- [restoreState](ui_layer_bar._internal_.LinkedZoomState.md#restorestate)
- [toJSON](ui_layer_bar._internal_.LinkedZoomState.md#tojson)

## Constructors

### constructor

• **new LinkedZoomState**<`T`\>(`peer`, `displayDimensionRenderInfo`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TrackableProjectionZoom`](annotation_polygon._internal_.TrackableProjectionZoom.md) \| [`TrackableCrossSectionZoom`](annotation_polygon._internal_.TrackableCrossSectionZoom.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `peer` | `T` |
| `displayDimensionRenderInfo` | [`WatchableDisplayDimensionRenderInfo`](annotation_polygon._internal_.WatchableDisplayDimensionRenderInfo.md) |

#### Overrides

[LinkedBase](ui_layer_bar._internal_.LinkedBase.md).[constructor](ui_layer_bar._internal_.LinkedBase.md#constructor)

#### Defined in

[src/neuroglancer/navigation_state.ts:1187](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L1187)

## Properties

### link

• **link**: [`TrackableNavigationLink`](ui_layer_bar._internal_.TrackableNavigationLink.md)

#### Inherited from

[LinkedBase](ui_layer_bar._internal_.LinkedBase.md).[link](ui_layer_bar._internal_.LinkedBase.md#link)

___

### peer

• **peer**: `T`

#### Inherited from

[LinkedBase](ui_layer_bar._internal_.LinkedBase.md).[peer](ui_layer_bar._internal_.LinkedBase.md#peer)

___

### value

• **value**: `T`

#### Inherited from

[LinkedBase](ui_layer_bar._internal_.LinkedBase.md).[value](ui_layer_bar._internal_.LinkedBase.md#value)

#### Defined in

[src/neuroglancer/navigation_state.ts:323](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L323)

## Accessors

### changed

• `get` **changed**(): [`NullaryReadonlySignal`](../modules/util_signal.md#nullaryreadonlysignal)

#### Returns

[`NullaryReadonlySignal`](../modules/util_signal.md#nullaryreadonlysignal)

#### Inherited from

LinkedBase.changed

#### Defined in

[src/neuroglancer/navigation_state.ts:324](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L324)

## Methods

### copyToPeer

▸ **copyToPeer**(): `void`

#### Returns

`void`

#### Inherited from

[LinkedBase](ui_layer_bar._internal_.LinkedBase.md).[copyToPeer](ui_layer_bar._internal_.LinkedBase.md#copytopeer)

#### Defined in

[src/neuroglancer/navigation_state.ts:349](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L349)

___

### getValueJson

▸ `Protected` **getValueJson**(): `any`

#### Returns

`any`

#### Inherited from

[LinkedBase](ui_layer_bar._internal_.LinkedBase.md).[getValueJson](ui_layer_bar._internal_.LinkedBase.md#getvaluejson)

#### Defined in

[src/neuroglancer/navigation_state.ts:337](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L337)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Inherited from

[LinkedBase](ui_layer_bar._internal_.LinkedBase.md).[reset](ui_layer_bar._internal_.LinkedBase.md#reset)

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

[LinkedBase](ui_layer_bar._internal_.LinkedBase.md).[restoreState](ui_layer_bar._internal_.LinkedBase.md#restorestate)

#### Defined in

[src/neuroglancer/navigation_state.ts:345](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L345)

___

### toJSON

▸ **toJSON**(): `undefined` \| { `link`: `undefined` \| `string` ; `value`: `any`  }

#### Returns

`undefined` \| { `link`: `undefined` \| `string` ; `value`: `any`  }

#### Inherited from

[LinkedBase](ui_layer_bar._internal_.LinkedBase.md).[toJSON](ui_layer_bar._internal_.LinkedBase.md#tojson)

#### Defined in

[src/neuroglancer/navigation_state.ts:329](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L329)
