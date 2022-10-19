[neuroglancer](../README.md) / [Modules](../modules.md) / [navigation\_state](../modules/navigation_state.md) / LinkedDepthRange

# Class: LinkedDepthRange

[navigation_state](../modules/navigation_state.md).LinkedDepthRange

## Hierarchy

- [`SimpleLinkedBase`](navigation_state._internal_.SimpleLinkedBase.md)<[`TrackableDepthRange`](navigation_state.TrackableDepthRange.md)\>

  ↳ **`LinkedDepthRange`**

## Table of contents

### Constructors

- [constructor](navigation_state.LinkedDepthRange.md#constructor)

### Properties

- [link](navigation_state.LinkedDepthRange.md#link)
- [peer](navigation_state.LinkedDepthRange.md#peer)
- [value](navigation_state.LinkedDepthRange.md#value)

### Accessors

- [changed](navigation_state.LinkedDepthRange.md#changed)

### Methods

- [copyToPeer](navigation_state.LinkedDepthRange.md#copytopeer)
- [getValueJson](navigation_state.LinkedDepthRange.md#getvaluejson)
- [reset](navigation_state.LinkedDepthRange.md#reset)
- [restoreState](navigation_state.LinkedDepthRange.md#restorestate)
- [toJSON](navigation_state.LinkedDepthRange.md#tojson)

## Constructors

### constructor

• **new LinkedDepthRange**(`peer`, `displayDimensionRenderInfo`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `peer` | [`TrackableDepthRange`](navigation_state.TrackableDepthRange.md) |
| `displayDimensionRenderInfo` | [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<[`DisplayDimensionRenderInfo`](../interfaces/navigation_state.DisplayDimensionRenderInfo.md)\> |

#### Overrides

[SimpleLinkedBase](navigation_state._internal_.SimpleLinkedBase.md).[constructor](navigation_state._internal_.SimpleLinkedBase.md#constructor)

#### Defined in

[src/neuroglancer/navigation_state.ts:1487](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/navigation_state.ts#L1487)

## Properties

### link

• **link**: [`TrackableNavigationSimpleLink`](navigation_state.TrackableNavigationSimpleLink.md)

#### Inherited from

[SimpleLinkedBase](navigation_state._internal_.SimpleLinkedBase.md).[link](navigation_state._internal_.SimpleLinkedBase.md#link)

___

### peer

• **peer**: [`TrackableDepthRange`](navigation_state.TrackableDepthRange.md)

#### Inherited from

[SimpleLinkedBase](navigation_state._internal_.SimpleLinkedBase.md).[peer](navigation_state._internal_.SimpleLinkedBase.md#peer)

___

### value

• **value**: [`TrackableDepthRange`](navigation_state.TrackableDepthRange.md)

#### Inherited from

[SimpleLinkedBase](navigation_state._internal_.SimpleLinkedBase.md).[value](navigation_state._internal_.SimpleLinkedBase.md#value)

#### Defined in

[src/neuroglancer/navigation_state.ts:323](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/navigation_state.ts#L323)

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
