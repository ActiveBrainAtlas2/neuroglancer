[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/navigation\_state](../modules/neuroglancer_navigation_state.md) / LinkedPosition

# Class: LinkedPosition

[neuroglancer/navigation_state](../modules/neuroglancer_navigation_state.md).LinkedPosition

## Hierarchy

- [`LinkedBase`](neuroglancer_navigation_state._internal_.LinkedBase.md)<[`Position`](neuroglancer_navigation_state.Position.md)\>

  ↳ **`LinkedPosition`**

## Table of contents

### Constructors

- [constructor](neuroglancer_navigation_state.LinkedPosition.md#constructor)

### Properties

- [link](neuroglancer_navigation_state.LinkedPosition.md#link)
- [peer](neuroglancer_navigation_state.LinkedPosition.md#peer)
- [value](neuroglancer_navigation_state.LinkedPosition.md#value)

### Accessors

- [changed](neuroglancer_navigation_state.LinkedPosition.md#changed)

### Methods

- [copyToPeer](neuroglancer_navigation_state.LinkedPosition.md#copytopeer)
- [getValueJson](neuroglancer_navigation_state.LinkedPosition.md#getvaluejson)
- [reset](neuroglancer_navigation_state.LinkedPosition.md#reset)
- [restoreState](neuroglancer_navigation_state.LinkedPosition.md#restorestate)
- [toJSON](neuroglancer_navigation_state.LinkedPosition.md#tojson)

## Constructors

### constructor

• **new LinkedPosition**(`peer`, `link?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `peer` | [`Position`](neuroglancer_navigation_state.Position.md) |
| `link` | [`TrackableNavigationLink`](neuroglancer_navigation_state.TrackableNavigationLink.md) |

#### Inherited from

[LinkedBase](neuroglancer_navigation_state._internal_.LinkedBase.md).[constructor](neuroglancer_navigation_state._internal_.LinkedBase.md#constructor)

#### Defined in

[src/neuroglancer/navigation_state.ts:327](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/navigation_state.ts#L327)

## Properties

### link

• **link**: [`TrackableNavigationLink`](neuroglancer_navigation_state.TrackableNavigationLink.md)

#### Inherited from

[LinkedBase](neuroglancer_navigation_state._internal_.LinkedBase.md).[link](neuroglancer_navigation_state._internal_.LinkedBase.md#link)

#### Defined in

[src/neuroglancer/navigation_state.ts:327](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/navigation_state.ts#L327)

___

### peer

• **peer**: [`Position`](neuroglancer_navigation_state.Position.md)

#### Inherited from

[LinkedBase](neuroglancer_navigation_state._internal_.LinkedBase.md).[peer](neuroglancer_navigation_state._internal_.LinkedBase.md#peer)

#### Defined in

[src/neuroglancer/navigation_state.ts:327](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/navigation_state.ts#L327)

___

### value

• **value**: [`Position`](neuroglancer_navigation_state.Position.md)

#### Overrides

[LinkedBase](neuroglancer_navigation_state._internal_.LinkedBase.md).[value](neuroglancer_navigation_state._internal_.LinkedBase.md#value)

#### Defined in

[src/neuroglancer/navigation_state.ts:367](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/navigation_state.ts#L367)

## Accessors

### changed

• `get` **changed**(): [`NullaryReadonlySignal`](../modules/neuroglancer_util_signal.md#nullaryreadonlysignal)

#### Returns

[`NullaryReadonlySignal`](../modules/neuroglancer_util_signal.md#nullaryreadonlysignal)

#### Inherited from

LinkedBase.changed

#### Defined in

[src/neuroglancer/navigation_state.ts:324](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/navigation_state.ts#L324)

## Methods

### copyToPeer

▸ **copyToPeer**(): `void`

#### Returns

`void`

#### Inherited from

[LinkedBase](neuroglancer_navigation_state._internal_.LinkedBase.md).[copyToPeer](neuroglancer_navigation_state._internal_.LinkedBase.md#copytopeer)

#### Defined in

[src/neuroglancer/navigation_state.ts:349](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/navigation_state.ts#L349)

___

### getValueJson

▸ `Protected` **getValueJson**(): `any`

#### Returns

`any`

#### Inherited from

[LinkedBase](neuroglancer_navigation_state._internal_.LinkedBase.md).[getValueJson](neuroglancer_navigation_state._internal_.LinkedBase.md#getvaluejson)

#### Defined in

[src/neuroglancer/navigation_state.ts:337](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/navigation_state.ts#L337)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Inherited from

[LinkedBase](neuroglancer_navigation_state._internal_.LinkedBase.md).[reset](neuroglancer_navigation_state._internal_.LinkedBase.md#reset)

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

#### Inherited from

[LinkedBase](neuroglancer_navigation_state._internal_.LinkedBase.md).[restoreState](neuroglancer_navigation_state._internal_.LinkedBase.md#restorestate)

#### Defined in

[src/neuroglancer/navigation_state.ts:345](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/navigation_state.ts#L345)

___

### toJSON

▸ **toJSON**(): `undefined` \| { `link`: `undefined` \| `string` ; `value`: `any`  }

#### Returns

`undefined` \| { `link`: `undefined` \| `string` ; `value`: `any`  }

#### Inherited from

[LinkedBase](neuroglancer_navigation_state._internal_.LinkedBase.md).[toJSON](neuroglancer_navigation_state._internal_.LinkedBase.md#tojson)

#### Defined in

[src/neuroglancer/navigation_state.ts:329](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/navigation_state.ts#L329)
