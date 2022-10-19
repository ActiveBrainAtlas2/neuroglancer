[neuroglancer](../README.md) / [Modules](../modules.md) / [ui/layer\_bar](../modules/ui_layer_bar.md) / [<internal\>](../modules/ui_layer_bar._internal_.md) / LinkedOrientationState

# Class: LinkedOrientationState

[ui/layer_bar](../modules/ui_layer_bar.md).[<internal>](../modules/ui_layer_bar._internal_.md).LinkedOrientationState

## Hierarchy

- [`LinkedBase`](ui_layer_bar._internal_.LinkedBase.md)<[`OrientationState`](annotation_polygon._internal_.OrientationState.md)\>

  ↳ **`LinkedOrientationState`**

## Table of contents

### Constructors

- [constructor](ui_layer_bar._internal_.LinkedOrientationState.md#constructor)

### Properties

- [link](ui_layer_bar._internal_.LinkedOrientationState.md#link)
- [peer](ui_layer_bar._internal_.LinkedOrientationState.md#peer)
- [value](ui_layer_bar._internal_.LinkedOrientationState.md#value)

### Accessors

- [changed](ui_layer_bar._internal_.LinkedOrientationState.md#changed)

### Methods

- [copyToPeer](ui_layer_bar._internal_.LinkedOrientationState.md#copytopeer)
- [getValueJson](ui_layer_bar._internal_.LinkedOrientationState.md#getvaluejson)
- [reset](ui_layer_bar._internal_.LinkedOrientationState.md#reset)
- [restoreState](ui_layer_bar._internal_.LinkedOrientationState.md#restorestate)
- [toJSON](ui_layer_bar._internal_.LinkedOrientationState.md#tojson)

## Constructors

### constructor

• **new LinkedOrientationState**(`peer`, `link?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `peer` | [`OrientationState`](annotation_polygon._internal_.OrientationState.md) |
| `link` | [`TrackableNavigationLink`](ui_layer_bar._internal_.TrackableNavigationLink.md) |

#### Inherited from

[LinkedBase](ui_layer_bar._internal_.LinkedBase.md).[constructor](ui_layer_bar._internal_.LinkedBase.md#constructor)

#### Defined in

[src/neuroglancer/navigation_state.ts:327](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L327)

## Properties

### link

• **link**: [`TrackableNavigationLink`](ui_layer_bar._internal_.TrackableNavigationLink.md)

#### Inherited from

[LinkedBase](ui_layer_bar._internal_.LinkedBase.md).[link](ui_layer_bar._internal_.LinkedBase.md#link)

___

### peer

• **peer**: [`OrientationState`](annotation_polygon._internal_.OrientationState.md)

#### Inherited from

[LinkedBase](ui_layer_bar._internal_.LinkedBase.md).[peer](ui_layer_bar._internal_.LinkedBase.md#peer)

___

### value

• **value**: [`OrientationState`](annotation_polygon._internal_.OrientationState.md)

#### Overrides

[LinkedBase](ui_layer_bar._internal_.LinkedBase.md).[value](ui_layer_bar._internal_.LinkedBase.md#value)

#### Defined in

[src/neuroglancer/navigation_state.ts:481](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L481)

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
