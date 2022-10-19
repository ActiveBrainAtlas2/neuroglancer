[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/navigation\_state](../modules/neuroglancer_navigation_state.md) / [<internal\>](../modules/neuroglancer_navigation_state._internal_.md) / SimpleLinkedBase

# Class: SimpleLinkedBase<T\>

[neuroglancer/navigation_state](../modules/neuroglancer_navigation_state.md).[<internal>](../modules/neuroglancer_navigation_state._internal_.md).SimpleLinkedBase

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`RefCounted`](neuroglancer_util_disposable.RefCounted.md) & [`Trackable`](../interfaces/neuroglancer_util_trackable.Trackable.md) & { `assign`: (`other`: `T`) => `void`  } |

## Hierarchy

- [`LinkedBase`](neuroglancer_navigation_state._internal_.LinkedBase.md)<`T`, [`TrackableNavigationSimpleLink`](neuroglancer_navigation_state.TrackableNavigationSimpleLink.md)\>

  ↳ **`SimpleLinkedBase`**

  ↳↳ [`LinkedDisplayDimensions`](neuroglancer_navigation_state.LinkedDisplayDimensions.md)

  ↳↳ [`LinkedDepthRange`](neuroglancer_navigation_state.LinkedDepthRange.md)

## Implements

- [`Trackable`](../interfaces/neuroglancer_util_trackable.Trackable.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_navigation_state._internal_.SimpleLinkedBase.md#constructor)

### Properties

- [link](neuroglancer_navigation_state._internal_.SimpleLinkedBase.md#link)
- [peer](neuroglancer_navigation_state._internal_.SimpleLinkedBase.md#peer)
- [value](neuroglancer_navigation_state._internal_.SimpleLinkedBase.md#value)

### Accessors

- [changed](neuroglancer_navigation_state._internal_.SimpleLinkedBase.md#changed)

### Methods

- [copyToPeer](neuroglancer_navigation_state._internal_.SimpleLinkedBase.md#copytopeer)
- [getValueJson](neuroglancer_navigation_state._internal_.SimpleLinkedBase.md#getvaluejson)
- [reset](neuroglancer_navigation_state._internal_.SimpleLinkedBase.md#reset)
- [restoreState](neuroglancer_navigation_state._internal_.SimpleLinkedBase.md#restorestate)
- [toJSON](neuroglancer_navigation_state._internal_.SimpleLinkedBase.md#tojson)

## Constructors

### constructor

• **new SimpleLinkedBase**<`T`\>(`peer`, `link?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)<`T`\> & [`Trackable`](../interfaces/neuroglancer_util_trackable.Trackable.md) & { `assign`: (`other`: `T`) => `void`  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `peer` | `T` |
| `link` | [`TrackableNavigationSimpleLink`](neuroglancer_navigation_state.TrackableNavigationSimpleLink.md) |

#### Overrides

[LinkedBase](neuroglancer_navigation_state._internal_.LinkedBase.md).[constructor](neuroglancer_navigation_state._internal_.LinkedBase.md#constructor)

#### Defined in

[src/neuroglancer/navigation_state.ts:360](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L360)

## Properties

### link

• **link**: [`TrackableNavigationSimpleLink`](neuroglancer_navigation_state.TrackableNavigationSimpleLink.md)

#### Inherited from

[LinkedBase](neuroglancer_navigation_state._internal_.LinkedBase.md).[link](neuroglancer_navigation_state._internal_.LinkedBase.md#link)

___

### peer

• **peer**: `T`

#### Inherited from

[LinkedBase](neuroglancer_navigation_state._internal_.LinkedBase.md).[peer](neuroglancer_navigation_state._internal_.LinkedBase.md#peer)

___

### value

• **value**: `T`

#### Inherited from

[LinkedBase](neuroglancer_navigation_state._internal_.LinkedBase.md).[value](neuroglancer_navigation_state._internal_.LinkedBase.md#value)

#### Defined in

[src/neuroglancer/navigation_state.ts:323](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L323)

## Accessors

### changed

• `get` **changed**(): [`NullaryReadonlySignal`](../modules/neuroglancer_util_signal.md#nullaryreadonlysignal)

#### Returns

[`NullaryReadonlySignal`](../modules/neuroglancer_util_signal.md#nullaryreadonlysignal)

#### Implementation of

[Trackable](../interfaces/neuroglancer_util_trackable.Trackable.md).[changed](../interfaces/neuroglancer_util_trackable.Trackable.md#changed)

#### Inherited from

LinkedBase.changed

#### Defined in

[src/neuroglancer/navigation_state.ts:324](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L324)

## Methods

### copyToPeer

▸ **copyToPeer**(): `void`

#### Returns

`void`

#### Inherited from

[LinkedBase](neuroglancer_navigation_state._internal_.LinkedBase.md).[copyToPeer](neuroglancer_navigation_state._internal_.LinkedBase.md#copytopeer)

#### Defined in

[src/neuroglancer/navigation_state.ts:349](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L349)

___

### getValueJson

▸ `Protected` **getValueJson**(): `any`

#### Returns

`any`

#### Inherited from

[LinkedBase](neuroglancer_navigation_state._internal_.LinkedBase.md).[getValueJson](neuroglancer_navigation_state._internal_.LinkedBase.md#getvaluejson)

#### Defined in

[src/neuroglancer/navigation_state.ts:337](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L337)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Implementation of

[Trackable](../interfaces/neuroglancer_util_trackable.Trackable.md).[reset](../interfaces/neuroglancer_util_trackable.Trackable.md#reset)

#### Inherited from

[LinkedBase](neuroglancer_navigation_state._internal_.LinkedBase.md).[reset](neuroglancer_navigation_state._internal_.LinkedBase.md#reset)

#### Defined in

[src/neuroglancer/navigation_state.ts:341](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L341)

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

[Trackable](../interfaces/neuroglancer_util_trackable.Trackable.md).[restoreState](../interfaces/neuroglancer_util_trackable.Trackable.md#restorestate)

#### Inherited from

[LinkedBase](neuroglancer_navigation_state._internal_.LinkedBase.md).[restoreState](neuroglancer_navigation_state._internal_.LinkedBase.md#restorestate)

#### Defined in

[src/neuroglancer/navigation_state.ts:345](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L345)

___

### toJSON

▸ **toJSON**(): `undefined` \| { `link`: `undefined` \| `string` ; `value`: `any`  }

#### Returns

`undefined` \| { `link`: `undefined` \| `string` ; `value`: `any`  }

#### Implementation of

[Trackable](../interfaces/neuroglancer_util_trackable.Trackable.md).[toJSON](../interfaces/neuroglancer_util_trackable.Trackable.md#tojson)

#### Inherited from

[LinkedBase](neuroglancer_navigation_state._internal_.LinkedBase.md).[toJSON](neuroglancer_navigation_state._internal_.LinkedBase.md#tojson)

#### Defined in

[src/neuroglancer/navigation_state.ts:329](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L329)
