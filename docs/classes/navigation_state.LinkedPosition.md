[neuroglancer](../README.md) / [Modules](../modules.md) / [navigation\_state](../modules/navigation_state.md) / LinkedPosition

# Class: LinkedPosition

[navigation_state](../modules/navigation_state.md).LinkedPosition

## Hierarchy

- [`LinkedBase`](navigation_state._internal_.LinkedBase.md)<[`Position`](navigation_state.Position.md)\>

  ↳ **`LinkedPosition`**

## Table of contents

### Constructors

- [constructor](navigation_state.LinkedPosition.md#constructor)

### Properties

- [link](navigation_state.LinkedPosition.md#link)
- [peer](navigation_state.LinkedPosition.md#peer)
- [value](navigation_state.LinkedPosition.md#value)

### Accessors

- [changed](navigation_state.LinkedPosition.md#changed)

### Methods

- [copyToPeer](navigation_state.LinkedPosition.md#copytopeer)
- [getValueJson](navigation_state.LinkedPosition.md#getvaluejson)
- [reset](navigation_state.LinkedPosition.md#reset)
- [restoreState](navigation_state.LinkedPosition.md#restorestate)
- [toJSON](navigation_state.LinkedPosition.md#tojson)

## Constructors

### constructor

• **new LinkedPosition**(`peer`, `link?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `peer` | [`Position`](navigation_state.Position.md) |
| `link` | [`TrackableNavigationLink`](navigation_state.TrackableNavigationLink.md) |

#### Inherited from

[LinkedBase](navigation_state._internal_.LinkedBase.md).[constructor](navigation_state._internal_.LinkedBase.md#constructor)

#### Defined in

[src/neuroglancer/navigation_state.ts:327](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/navigation_state.ts#L327)

## Properties

### link

• **link**: [`TrackableNavigationLink`](navigation_state.TrackableNavigationLink.md)

#### Inherited from

[LinkedBase](navigation_state._internal_.LinkedBase.md).[link](navigation_state._internal_.LinkedBase.md#link)

___

### peer

• **peer**: [`Position`](navigation_state.Position.md)

#### Inherited from

[LinkedBase](navigation_state._internal_.LinkedBase.md).[peer](navigation_state._internal_.LinkedBase.md#peer)

___

### value

• **value**: [`Position`](navigation_state.Position.md)

#### Overrides

[LinkedBase](navigation_state._internal_.LinkedBase.md).[value](navigation_state._internal_.LinkedBase.md#value)

#### Defined in

[src/neuroglancer/navigation_state.ts:367](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/navigation_state.ts#L367)

## Accessors

### changed

• `get` **changed**(): [`NullaryReadonlySignal`](../modules/coordinate_transform._internal_.md#nullaryreadonlysignal)

#### Returns

[`NullaryReadonlySignal`](../modules/coordinate_transform._internal_.md#nullaryreadonlysignal)

#### Inherited from

LinkedBase.changed

#### Defined in

[src/neuroglancer/navigation_state.ts:324](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/navigation_state.ts#L324)

## Methods

### copyToPeer

▸ **copyToPeer**(): `void`

#### Returns

`void`

#### Inherited from

[LinkedBase](navigation_state._internal_.LinkedBase.md).[copyToPeer](navigation_state._internal_.LinkedBase.md#copytopeer)

#### Defined in

[src/neuroglancer/navigation_state.ts:349](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/navigation_state.ts#L349)

___

### getValueJson

▸ `Protected` **getValueJson**(): `any`

#### Returns

`any`

#### Inherited from

[LinkedBase](navigation_state._internal_.LinkedBase.md).[getValueJson](navigation_state._internal_.LinkedBase.md#getvaluejson)

#### Defined in

[src/neuroglancer/navigation_state.ts:337](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/navigation_state.ts#L337)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Inherited from

[LinkedBase](navigation_state._internal_.LinkedBase.md).[reset](navigation_state._internal_.LinkedBase.md#reset)

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

#### Inherited from

[LinkedBase](navigation_state._internal_.LinkedBase.md).[restoreState](navigation_state._internal_.LinkedBase.md#restorestate)

#### Defined in

[src/neuroglancer/navigation_state.ts:345](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/navigation_state.ts#L345)

___

### toJSON

▸ **toJSON**(): `undefined` \| { `link`: `undefined` \| `string` ; `value`: `any`  }

#### Returns

`undefined` \| { `link`: `undefined` \| `string` ; `value`: `any`  }

#### Inherited from

[LinkedBase](navigation_state._internal_.LinkedBase.md).[toJSON](navigation_state._internal_.LinkedBase.md#tojson)

#### Defined in

[src/neuroglancer/navigation_state.ts:329](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/navigation_state.ts#L329)
