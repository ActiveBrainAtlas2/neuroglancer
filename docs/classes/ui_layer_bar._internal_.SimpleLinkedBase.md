[neuroglancer](../README.md) / [Modules](../modules.md) / [ui/layer\_bar](../modules/ui_layer_bar.md) / [<internal\>](../modules/ui_layer_bar._internal_.md) / SimpleLinkedBase

# Class: SimpleLinkedBase<T\>

[ui/layer_bar](../modules/ui_layer_bar.md).[<internal>](../modules/ui_layer_bar._internal_.md).SimpleLinkedBase

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`RefCounted`](util_disposable.RefCounted.md) & [`Trackable`](../interfaces/util_trackable.Trackable.md) & { `assign`: (`other`: `T`) => `void`  } |

## Hierarchy

- [`LinkedBase`](ui_layer_bar._internal_.LinkedBase.md)<`T`, [`TrackableNavigationSimpleLink`](ui_layer_bar._internal_.TrackableNavigationSimpleLink.md)\>

  ↳ **`SimpleLinkedBase`**

  ↳↳ [`LinkedDisplayDimensions`](ui_layer_bar._internal_.LinkedDisplayDimensions.md)

  ↳↳ [`LinkedDepthRange`](ui_layer_bar._internal_.LinkedDepthRange.md)

## Implements

- [`Trackable`](../interfaces/util_trackable.Trackable.md)

## Table of contents

### Constructors

- [constructor](ui_layer_bar._internal_.SimpleLinkedBase.md#constructor)

### Properties

- [link](ui_layer_bar._internal_.SimpleLinkedBase.md#link)
- [peer](ui_layer_bar._internal_.SimpleLinkedBase.md#peer)
- [value](ui_layer_bar._internal_.SimpleLinkedBase.md#value)

### Accessors

- [changed](ui_layer_bar._internal_.SimpleLinkedBase.md#changed)

### Methods

- [copyToPeer](ui_layer_bar._internal_.SimpleLinkedBase.md#copytopeer)
- [getValueJson](ui_layer_bar._internal_.SimpleLinkedBase.md#getvaluejson)
- [reset](ui_layer_bar._internal_.SimpleLinkedBase.md#reset)
- [restoreState](ui_layer_bar._internal_.SimpleLinkedBase.md#restorestate)
- [toJSON](ui_layer_bar._internal_.SimpleLinkedBase.md#tojson)

## Constructors

### constructor

• **new SimpleLinkedBase**<`T`\>(`peer`, `link?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`RefCounted`](util_disposable.RefCounted.md)<`T`\> & [`Trackable`](../interfaces/util_trackable.Trackable.md) & { `assign`: (`other`: `T`) => `void`  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `peer` | `T` |
| `link` | [`TrackableNavigationSimpleLink`](ui_layer_bar._internal_.TrackableNavigationSimpleLink.md) |

#### Overrides

[LinkedBase](ui_layer_bar._internal_.LinkedBase.md).[constructor](ui_layer_bar._internal_.LinkedBase.md#constructor)

#### Defined in

[src/neuroglancer/navigation_state.ts:360](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L360)

## Properties

### link

• **link**: [`TrackableNavigationSimpleLink`](ui_layer_bar._internal_.TrackableNavigationSimpleLink.md)

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

#### Implementation of

[Trackable](../interfaces/util_trackable.Trackable.md).[changed](../interfaces/util_trackable.Trackable.md#changed)

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

#### Implementation of

[Trackable](../interfaces/util_trackable.Trackable.md).[reset](../interfaces/util_trackable.Trackable.md#reset)

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

#### Implementation of

[Trackable](../interfaces/util_trackable.Trackable.md).[restoreState](../interfaces/util_trackable.Trackable.md#restorestate)

#### Inherited from

[LinkedBase](ui_layer_bar._internal_.LinkedBase.md).[restoreState](ui_layer_bar._internal_.LinkedBase.md#restorestate)

#### Defined in

[src/neuroglancer/navigation_state.ts:345](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L345)

___

### toJSON

▸ **toJSON**(): `undefined` \| { `link`: `undefined` \| `string` ; `value`: `any`  }

#### Returns

`undefined` \| { `link`: `undefined` \| `string` ; `value`: `any`  }

#### Implementation of

[Trackable](../interfaces/util_trackable.Trackable.md).[toJSON](../interfaces/util_trackable.Trackable.md#tojson)

#### Inherited from

[LinkedBase](ui_layer_bar._internal_.LinkedBase.md).[toJSON](ui_layer_bar._internal_.LinkedBase.md#tojson)

#### Defined in

[src/neuroglancer/navigation_state.ts:329](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L329)
