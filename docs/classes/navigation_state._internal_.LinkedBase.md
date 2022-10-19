[neuroglancer](../README.md) / [Modules](../modules.md) / [navigation\_state](../modules/navigation_state.md) / [<internal\>](../modules/navigation_state._internal_.md) / LinkedBase

# Class: LinkedBase<T, Link\>

[navigation_state](../modules/navigation_state.md).[<internal>](../modules/navigation_state._internal_.md).LinkedBase

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`LinkableState`](../interfaces/navigation_state._internal_.LinkableState.md)<`T`\> |
| `Link` | extends [`TrackableLinkInterface`](../modules/navigation_state._internal_.md#trackablelinkinterface) = [`TrackableNavigationLink`](navigation_state.TrackableNavigationLink.md) |

## Hierarchy

- **`LinkedBase`**

  ↳ [`LinkedPosition`](navigation_state.LinkedPosition.md)

  ↳ [`LinkedOrientationState`](navigation_state.LinkedOrientationState.md)

  ↳ [`LinkedRelativeDisplayScales`](navigation_state.LinkedRelativeDisplayScales.md)

  ↳ [`LinkedZoomState`](navigation_state.LinkedZoomState.md)

  ↳ [`SimpleLinkedBase`](navigation_state._internal_.SimpleLinkedBase.md)

## Implements

- [`Trackable`](../interfaces/coordinate_transform._internal_.Trackable.md)

## Table of contents

### Constructors

- [constructor](navigation_state._internal_.LinkedBase.md#constructor)

### Properties

- [link](navigation_state._internal_.LinkedBase.md#link)
- [peer](navigation_state._internal_.LinkedBase.md#peer)
- [value](navigation_state._internal_.LinkedBase.md#value)

### Accessors

- [changed](navigation_state._internal_.LinkedBase.md#changed)

### Methods

- [copyToPeer](navigation_state._internal_.LinkedBase.md#copytopeer)
- [getValueJson](navigation_state._internal_.LinkedBase.md#getvaluejson)
- [reset](navigation_state._internal_.LinkedBase.md#reset)
- [restoreState](navigation_state._internal_.LinkedBase.md#restorestate)
- [toJSON](navigation_state._internal_.LinkedBase.md#tojson)

## Constructors

### constructor

• **new LinkedBase**<`T`, `Link`\>(`peer`, `link?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`LinkableState`](../interfaces/navigation_state._internal_.LinkableState.md)<`T`, `T`\> |
| `Link` | extends [`TrackableLinkInterface`](../modules/navigation_state._internal_.md#trackablelinkinterface) = [`TrackableNavigationLink`](navigation_state.TrackableNavigationLink.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `peer` | `T` |
| `link` | `Link` |

#### Defined in

[src/neuroglancer/navigation_state.ts:327](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/navigation_state.ts#L327)

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

[src/neuroglancer/navigation_state.ts:323](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/navigation_state.ts#L323)

## Accessors

### changed

• `get` **changed**(): [`NullaryReadonlySignal`](../modules/coordinate_transform._internal_.md#nullaryreadonlysignal)

#### Returns

[`NullaryReadonlySignal`](../modules/coordinate_transform._internal_.md#nullaryreadonlysignal)

#### Implementation of

[Trackable](../interfaces/coordinate_transform._internal_.Trackable.md).[changed](../interfaces/coordinate_transform._internal_.Trackable.md#changed)

#### Defined in

[src/neuroglancer/navigation_state.ts:324](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/navigation_state.ts#L324)

## Methods

### copyToPeer

▸ **copyToPeer**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:349](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/navigation_state.ts#L349)

___

### getValueJson

▸ `Protected` **getValueJson**(): `any`

#### Returns

`any`

#### Defined in

[src/neuroglancer/navigation_state.ts:337](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/navigation_state.ts#L337)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Implementation of

[Trackable](../interfaces/coordinate_transform._internal_.Trackable.md).[reset](../interfaces/coordinate_transform._internal_.Trackable.md#reset)

#### Defined in

[src/neuroglancer/navigation_state.ts:341](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/navigation_state.ts#L341)

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

[Trackable](../interfaces/coordinate_transform._internal_.Trackable.md).[restoreState](../interfaces/coordinate_transform._internal_.Trackable.md#restorestate)

#### Defined in

[src/neuroglancer/navigation_state.ts:345](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/navigation_state.ts#L345)

___

### toJSON

▸ **toJSON**(): `undefined` \| { `link`: `undefined` \| `string` ; `value`: `any`  }

#### Returns

`undefined` \| { `link`: `undefined` \| `string` ; `value`: `any`  }

#### Implementation of

[Trackable](../interfaces/coordinate_transform._internal_.Trackable.md).[toJSON](../interfaces/coordinate_transform._internal_.Trackable.md#tojson)

#### Defined in

[src/neuroglancer/navigation_state.ts:329](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/navigation_state.ts#L329)
