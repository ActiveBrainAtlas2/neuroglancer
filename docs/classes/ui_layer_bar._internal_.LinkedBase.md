[neuroglancer](../README.md) / [Modules](../modules.md) / [ui/layer\_bar](../modules/ui_layer_bar.md) / [<internal\>](../modules/ui_layer_bar._internal_.md) / LinkedBase

# Class: LinkedBase<T, Link\>

[ui/layer_bar](../modules/ui_layer_bar.md).[<internal>](../modules/ui_layer_bar._internal_.md).LinkedBase

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`LinkableState`](../interfaces/ui_layer_bar._internal_.LinkableState.md)<`T`\> |
| `Link` | extends [`TrackableLinkInterface`](../modules/ui_layer_bar._internal_.md#trackablelinkinterface) = [`TrackableNavigationLink`](ui_layer_bar._internal_.TrackableNavigationLink.md) |

## Hierarchy

- **`LinkedBase`**

  ↳ [`LinkedPosition`](ui_layer_bar._internal_.LinkedPosition.md)

  ↳ [`LinkedRelativeDisplayScales`](ui_layer_bar._internal_.LinkedRelativeDisplayScales.md)

  ↳ [`LinkedOrientationState`](ui_layer_bar._internal_.LinkedOrientationState.md)

  ↳ [`LinkedZoomState`](ui_layer_bar._internal_.LinkedZoomState.md)

  ↳ [`SimpleLinkedBase`](ui_layer_bar._internal_.SimpleLinkedBase.md)

## Implements

- [`Trackable`](../interfaces/util_trackable.Trackable.md)

## Table of contents

### Constructors

- [constructor](ui_layer_bar._internal_.LinkedBase.md#constructor)

### Properties

- [link](ui_layer_bar._internal_.LinkedBase.md#link)
- [peer](ui_layer_bar._internal_.LinkedBase.md#peer)
- [value](ui_layer_bar._internal_.LinkedBase.md#value)

### Accessors

- [changed](ui_layer_bar._internal_.LinkedBase.md#changed)

### Methods

- [copyToPeer](ui_layer_bar._internal_.LinkedBase.md#copytopeer)
- [getValueJson](ui_layer_bar._internal_.LinkedBase.md#getvaluejson)
- [reset](ui_layer_bar._internal_.LinkedBase.md#reset)
- [restoreState](ui_layer_bar._internal_.LinkedBase.md#restorestate)
- [toJSON](ui_layer_bar._internal_.LinkedBase.md#tojson)

## Constructors

### constructor

• **new LinkedBase**<`T`, `Link`\>(`peer`, `link?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`LinkableState`](../interfaces/ui_layer_bar._internal_.LinkableState.md)<`T`, `T`\> |
| `Link` | extends [`TrackableLinkInterface`](../modules/ui_layer_bar._internal_.md#trackablelinkinterface) = [`TrackableNavigationLink`](ui_layer_bar._internal_.TrackableNavigationLink.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `peer` | `T` |
| `link` | `Link` |

#### Defined in

[src/neuroglancer/navigation_state.ts:327](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L327)

## Properties

### link

• **link**: `Link`

___

### peer

• **peer**: `T`

___

### value

• **value**: `T`

#### Defined in

[src/neuroglancer/navigation_state.ts:323](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L323)

## Accessors

### changed

• `get` **changed**(): [`NullaryReadonlySignal`](../modules/util_signal.md#nullaryreadonlysignal)

#### Returns

[`NullaryReadonlySignal`](../modules/util_signal.md#nullaryreadonlysignal)

#### Implementation of

[Trackable](../interfaces/util_trackable.Trackable.md).[changed](../interfaces/util_trackable.Trackable.md#changed)

#### Defined in

[src/neuroglancer/navigation_state.ts:324](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L324)

## Methods

### copyToPeer

▸ **copyToPeer**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:349](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L349)

___

### getValueJson

▸ `Protected` **getValueJson**(): `any`

#### Returns

`any`

#### Defined in

[src/neuroglancer/navigation_state.ts:337](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L337)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Implementation of

[Trackable](../interfaces/util_trackable.Trackable.md).[reset](../interfaces/util_trackable.Trackable.md#reset)

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

#### Implementation of

[Trackable](../interfaces/util_trackable.Trackable.md).[restoreState](../interfaces/util_trackable.Trackable.md#restorestate)

#### Defined in

[src/neuroglancer/navigation_state.ts:345](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L345)

___

### toJSON

▸ **toJSON**(): `undefined` \| { `link`: `undefined` \| `string` ; `value`: `any`  }

#### Returns

`undefined` \| { `link`: `undefined` \| `string` ; `value`: `any`  }

#### Implementation of

[Trackable](../interfaces/util_trackable.Trackable.md).[toJSON](../interfaces/util_trackable.Trackable.md#tojson)

#### Defined in

[src/neuroglancer/navigation_state.ts:329](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L329)
