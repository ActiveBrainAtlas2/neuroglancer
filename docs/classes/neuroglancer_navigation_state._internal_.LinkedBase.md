[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/navigation\_state](../modules/neuroglancer_navigation_state.md) / [<internal\>](../modules/neuroglancer_navigation_state._internal_.md) / LinkedBase

# Class: LinkedBase<T, Link\>

[neuroglancer/navigation_state](../modules/neuroglancer_navigation_state.md).[<internal>](../modules/neuroglancer_navigation_state._internal_.md).LinkedBase

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`LinkableState`](../interfaces/neuroglancer_navigation_state._internal_.LinkableState.md)<`T`\> |
| `Link` | extends [`TrackableLinkInterface`](../modules/neuroglancer_navigation_state._internal_.md#trackablelinkinterface) = [`TrackableNavigationLink`](neuroglancer_navigation_state.TrackableNavigationLink.md) |

## Hierarchy

- **`LinkedBase`**

  ↳ [`LinkedPosition`](neuroglancer_navigation_state.LinkedPosition.md)

  ↳ [`LinkedOrientationState`](neuroglancer_navigation_state.LinkedOrientationState.md)

  ↳ [`LinkedRelativeDisplayScales`](neuroglancer_navigation_state.LinkedRelativeDisplayScales.md)

  ↳ [`LinkedZoomState`](neuroglancer_navigation_state.LinkedZoomState.md)

  ↳ [`SimpleLinkedBase`](neuroglancer_navigation_state._internal_.SimpleLinkedBase.md)

## Implements

- [`Trackable`](../interfaces/neuroglancer_util_trackable.Trackable.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_navigation_state._internal_.LinkedBase.md#constructor)

### Properties

- [link](neuroglancer_navigation_state._internal_.LinkedBase.md#link)
- [peer](neuroglancer_navigation_state._internal_.LinkedBase.md#peer)
- [value](neuroglancer_navigation_state._internal_.LinkedBase.md#value)

### Accessors

- [changed](neuroglancer_navigation_state._internal_.LinkedBase.md#changed)

### Methods

- [copyToPeer](neuroglancer_navigation_state._internal_.LinkedBase.md#copytopeer)
- [getValueJson](neuroglancer_navigation_state._internal_.LinkedBase.md#getvaluejson)
- [reset](neuroglancer_navigation_state._internal_.LinkedBase.md#reset)
- [restoreState](neuroglancer_navigation_state._internal_.LinkedBase.md#restorestate)
- [toJSON](neuroglancer_navigation_state._internal_.LinkedBase.md#tojson)

## Constructors

### constructor

• **new LinkedBase**<`T`, `Link`\>(`peer`, `link?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`LinkableState`](../interfaces/neuroglancer_navigation_state._internal_.LinkableState.md)<`T`, `T`\> |
| `Link` | extends [`TrackableLinkInterface`](../modules/neuroglancer_navigation_state._internal_.md#trackablelinkinterface) = [`TrackableNavigationLink`](neuroglancer_navigation_state.TrackableNavigationLink.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `peer` | `T` |
| `link` | `Link` |

#### Defined in

[src/neuroglancer/navigation_state.ts:327](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/navigation_state.ts#L327)

## Properties

### link

• **link**: `Link`

#### Defined in

[src/neuroglancer/navigation_state.ts:327](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/navigation_state.ts#L327)

___

### peer

• **peer**: `T`

#### Defined in

[src/neuroglancer/navigation_state.ts:327](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/navigation_state.ts#L327)

___

### value

• **value**: `T`

#### Defined in

[src/neuroglancer/navigation_state.ts:323](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/navigation_state.ts#L323)

## Accessors

### changed

• `get` **changed**(): [`NullaryReadonlySignal`](../modules/neuroglancer_util_signal.md#nullaryreadonlysignal)

#### Returns

[`NullaryReadonlySignal`](../modules/neuroglancer_util_signal.md#nullaryreadonlysignal)

#### Implementation of

[Trackable](../interfaces/neuroglancer_util_trackable.Trackable.md).[changed](../interfaces/neuroglancer_util_trackable.Trackable.md#changed)

#### Defined in

[src/neuroglancer/navigation_state.ts:324](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/navigation_state.ts#L324)

## Methods

### copyToPeer

▸ **copyToPeer**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:349](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/navigation_state.ts#L349)

___

### getValueJson

▸ `Protected` **getValueJson**(): `any`

#### Returns

`any`

#### Defined in

[src/neuroglancer/navigation_state.ts:337](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/navigation_state.ts#L337)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Implementation of

Trackable.reset

#### Defined in

[src/neuroglancer/navigation_state.ts:341](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/navigation_state.ts#L341)

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

Trackable.restoreState

#### Defined in

[src/neuroglancer/navigation_state.ts:345](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/navigation_state.ts#L345)

___

### toJSON

▸ **toJSON**(): `undefined` \| { `link`: `undefined` \| `string` ; `value`: `any`  }

#### Returns

`undefined` \| { `link`: `undefined` \| `string` ; `value`: `any`  }

#### Implementation of

Trackable.toJSON

#### Defined in

[src/neuroglancer/navigation_state.ts:329](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/navigation_state.ts#L329)
