[neuroglancer](../README.md) / [Modules](../modules.md) / [navigation\_state](../modules/navigation_state.md) / [<internal\>](../modules/navigation_state._internal_.md) / SimpleLinkedBase

# Class: SimpleLinkedBase<T\>

[navigation_state](../modules/navigation_state.md).[<internal>](../modules/navigation_state._internal_.md).SimpleLinkedBase

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`RefCounted`](axes_lines._internal_.RefCounted.md) & [`Trackable`](../interfaces/coordinate_transform._internal_.Trackable.md) & { `assign`: (`other`: `T`) => `void`  } |

## Hierarchy

- [`LinkedBase`](navigation_state._internal_.LinkedBase.md)<`T`, [`TrackableNavigationSimpleLink`](navigation_state.TrackableNavigationSimpleLink.md)\>

  ↳ **`SimpleLinkedBase`**

  ↳↳ [`LinkedDisplayDimensions`](navigation_state.LinkedDisplayDimensions.md)

  ↳↳ [`LinkedDepthRange`](navigation_state.LinkedDepthRange.md)

## Implements

- [`Trackable`](../interfaces/coordinate_transform._internal_.Trackable.md)

## Table of contents

### Constructors

- [constructor](navigation_state._internal_.SimpleLinkedBase.md#constructor)

### Properties

- [link](navigation_state._internal_.SimpleLinkedBase.md#link)
- [peer](navigation_state._internal_.SimpleLinkedBase.md#peer)
- [value](navigation_state._internal_.SimpleLinkedBase.md#value)

### Accessors

- [changed](navigation_state._internal_.SimpleLinkedBase.md#changed)

### Methods

- [copyToPeer](navigation_state._internal_.SimpleLinkedBase.md#copytopeer)
- [getValueJson](navigation_state._internal_.SimpleLinkedBase.md#getvaluejson)
- [reset](navigation_state._internal_.SimpleLinkedBase.md#reset)
- [restoreState](navigation_state._internal_.SimpleLinkedBase.md#restorestate)
- [toJSON](navigation_state._internal_.SimpleLinkedBase.md#tojson)

## Constructors

### constructor

• **new SimpleLinkedBase**<`T`\>(`peer`, `link?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`RefCounted`](axes_lines._internal_.RefCounted.md)<`T`\> & [`Trackable`](../interfaces/coordinate_transform._internal_.Trackable.md) & { `assign`: (`other`: `T`) => `void`  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `peer` | `T` |
| `link` | [`TrackableNavigationSimpleLink`](navigation_state.TrackableNavigationSimpleLink.md) |

#### Overrides

[LinkedBase](navigation_state._internal_.LinkedBase.md).[constructor](navigation_state._internal_.LinkedBase.md#constructor)

#### Defined in

[src/neuroglancer/navigation_state.ts:360](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/navigation_state.ts#L360)

## Properties

### link

• **link**: [`TrackableNavigationSimpleLink`](navigation_state.TrackableNavigationSimpleLink.md)

#### Inherited from

[LinkedBase](navigation_state._internal_.LinkedBase.md).[link](navigation_state._internal_.LinkedBase.md#link)

___

### peer

• **peer**: `T`

#### Inherited from

[LinkedBase](navigation_state._internal_.LinkedBase.md).[peer](navigation_state._internal_.LinkedBase.md#peer)

___

### value

• **value**: `T`

#### Inherited from

[LinkedBase](navigation_state._internal_.LinkedBase.md).[value](navigation_state._internal_.LinkedBase.md#value)

#### Defined in

[src/neuroglancer/navigation_state.ts:323](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/navigation_state.ts#L323)

## Accessors

### changed

• `get` **changed**(): [`NullaryReadonlySignal`](../modules/coordinate_transform._internal_.md#nullaryreadonlysignal)

#### Returns

[`NullaryReadonlySignal`](../modules/coordinate_transform._internal_.md#nullaryreadonlysignal)

#### Implementation of

[Trackable](../interfaces/coordinate_transform._internal_.Trackable.md).[changed](../interfaces/coordinate_transform._internal_.Trackable.md#changed)

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

#### Implementation of

[Trackable](../interfaces/coordinate_transform._internal_.Trackable.md).[reset](../interfaces/coordinate_transform._internal_.Trackable.md#reset)

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

#### Implementation of

[Trackable](../interfaces/coordinate_transform._internal_.Trackable.md).[restoreState](../interfaces/coordinate_transform._internal_.Trackable.md#restorestate)

#### Inherited from

[LinkedBase](navigation_state._internal_.LinkedBase.md).[restoreState](navigation_state._internal_.LinkedBase.md#restorestate)

#### Defined in

[src/neuroglancer/navigation_state.ts:345](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/navigation_state.ts#L345)

___

### toJSON

▸ **toJSON**(): `undefined` \| { `link`: `undefined` \| `string` ; `value`: `any`  }

#### Returns

`undefined` \| { `link`: `undefined` \| `string` ; `value`: `any`  }

#### Implementation of

[Trackable](../interfaces/coordinate_transform._internal_.Trackable.md).[toJSON](../interfaces/coordinate_transform._internal_.Trackable.md#tojson)

#### Inherited from

[LinkedBase](navigation_state._internal_.LinkedBase.md).[toJSON](navigation_state._internal_.LinkedBase.md#tojson)

#### Defined in

[src/neuroglancer/navigation_state.ts:329](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/navigation_state.ts#L329)
