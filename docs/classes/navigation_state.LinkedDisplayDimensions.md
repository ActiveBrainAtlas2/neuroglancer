[neuroglancer](../README.md) / [Modules](../modules.md) / [navigation\_state](../modules/navigation_state.md) / LinkedDisplayDimensions

# Class: LinkedDisplayDimensions

[navigation_state](../modules/navigation_state.md).LinkedDisplayDimensions

## Hierarchy

- [`SimpleLinkedBase`](navigation_state._internal_.SimpleLinkedBase.md)<[`TrackableDisplayDimensions`](navigation_state.TrackableDisplayDimensions.md)\>

  ↳ **`LinkedDisplayDimensions`**

## Table of contents

### Constructors

- [constructor](navigation_state.LinkedDisplayDimensions.md#constructor)

### Properties

- [link](navigation_state.LinkedDisplayDimensions.md#link)
- [peer](navigation_state.LinkedDisplayDimensions.md#peer)
- [value](navigation_state.LinkedDisplayDimensions.md#value)

### Accessors

- [changed](navigation_state.LinkedDisplayDimensions.md#changed)

### Methods

- [copyToPeer](navigation_state.LinkedDisplayDimensions.md#copytopeer)
- [getValueJson](navigation_state.LinkedDisplayDimensions.md#getvaluejson)
- [reset](navigation_state.LinkedDisplayDimensions.md#reset)
- [restoreState](navigation_state.LinkedDisplayDimensions.md#restorestate)
- [toJSON](navigation_state.LinkedDisplayDimensions.md#tojson)

## Constructors

### constructor

• **new LinkedDisplayDimensions**(`peer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `peer` | [`TrackableDisplayDimensions`](navigation_state.TrackableDisplayDimensions.md) |

#### Overrides

[SimpleLinkedBase](navigation_state._internal_.SimpleLinkedBase.md).[constructor](navigation_state._internal_.SimpleLinkedBase.md#constructor)

#### Defined in

[src/neuroglancer/navigation_state.ts:963](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/navigation_state.ts#L963)

## Properties

### link

• **link**: [`TrackableNavigationSimpleLink`](navigation_state.TrackableNavigationSimpleLink.md)

#### Inherited from

[SimpleLinkedBase](navigation_state._internal_.SimpleLinkedBase.md).[link](navigation_state._internal_.SimpleLinkedBase.md#link)

___

### peer

• **peer**: [`TrackableDisplayDimensions`](navigation_state.TrackableDisplayDimensions.md)

#### Inherited from

[SimpleLinkedBase](navigation_state._internal_.SimpleLinkedBase.md).[peer](navigation_state._internal_.SimpleLinkedBase.md#peer)

___

### value

• **value**: [`TrackableDisplayDimensions`](navigation_state.TrackableDisplayDimensions.md)

#### Overrides

[SimpleLinkedBase](navigation_state._internal_.SimpleLinkedBase.md).[value](navigation_state._internal_.SimpleLinkedBase.md#value)

#### Defined in

[src/neuroglancer/navigation_state.ts:958](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/navigation_state.ts#L958)

## Accessors

### changed

• `get` **changed**(): [`NullaryReadonlySignal`](../modules/coordinate_transform._internal_.md#nullaryreadonlysignal)

#### Returns

[`NullaryReadonlySignal`](../modules/coordinate_transform._internal_.md#nullaryreadonlysignal)

#### Inherited from

SimpleLinkedBase.changed

#### Defined in

[src/neuroglancer/navigation_state.ts:324](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/navigation_state.ts#L324)

## Methods

### copyToPeer

▸ **copyToPeer**(): `void`

#### Returns

`void`

#### Inherited from

[SimpleLinkedBase](navigation_state._internal_.SimpleLinkedBase.md).[copyToPeer](navigation_state._internal_.SimpleLinkedBase.md#copytopeer)

#### Defined in

[src/neuroglancer/navigation_state.ts:349](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/navigation_state.ts#L349)

___

### getValueJson

▸ `Protected` **getValueJson**(): `any`

#### Returns

`any`

#### Inherited from

[SimpleLinkedBase](navigation_state._internal_.SimpleLinkedBase.md).[getValueJson](navigation_state._internal_.SimpleLinkedBase.md#getvaluejson)

#### Defined in

[src/neuroglancer/navigation_state.ts:337](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/navigation_state.ts#L337)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Inherited from

[SimpleLinkedBase](navigation_state._internal_.SimpleLinkedBase.md).[reset](navigation_state._internal_.SimpleLinkedBase.md#reset)

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

[SimpleLinkedBase](navigation_state._internal_.SimpleLinkedBase.md).[restoreState](navigation_state._internal_.SimpleLinkedBase.md#restorestate)

#### Defined in

[src/neuroglancer/navigation_state.ts:345](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/navigation_state.ts#L345)

___

### toJSON

▸ **toJSON**(): `undefined` \| { `link`: `undefined` \| `string` ; `value`: `any`  }

#### Returns

`undefined` \| { `link`: `undefined` \| `string` ; `value`: `any`  }

#### Inherited from

[SimpleLinkedBase](navigation_state._internal_.SimpleLinkedBase.md).[toJSON](navigation_state._internal_.SimpleLinkedBase.md#tojson)

#### Defined in

[src/neuroglancer/navigation_state.ts:329](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/navigation_state.ts#L329)
