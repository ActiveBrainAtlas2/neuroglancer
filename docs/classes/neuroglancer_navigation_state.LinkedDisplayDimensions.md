[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/navigation\_state](../modules/neuroglancer_navigation_state.md) / LinkedDisplayDimensions

# Class: LinkedDisplayDimensions

[neuroglancer/navigation_state](../modules/neuroglancer_navigation_state.md).LinkedDisplayDimensions

## Hierarchy

- [`SimpleLinkedBase`](neuroglancer_navigation_state._internal_.SimpleLinkedBase.md)<[`TrackableDisplayDimensions`](neuroglancer_navigation_state.TrackableDisplayDimensions.md)\>

  ↳ **`LinkedDisplayDimensions`**

## Table of contents

### Constructors

- [constructor](neuroglancer_navigation_state.LinkedDisplayDimensions.md#constructor)

### Properties

- [link](neuroglancer_navigation_state.LinkedDisplayDimensions.md#link)
- [peer](neuroglancer_navigation_state.LinkedDisplayDimensions.md#peer)
- [value](neuroglancer_navigation_state.LinkedDisplayDimensions.md#value)

### Accessors

- [changed](neuroglancer_navigation_state.LinkedDisplayDimensions.md#changed)

### Methods

- [copyToPeer](neuroglancer_navigation_state.LinkedDisplayDimensions.md#copytopeer)
- [getValueJson](neuroglancer_navigation_state.LinkedDisplayDimensions.md#getvaluejson)
- [reset](neuroglancer_navigation_state.LinkedDisplayDimensions.md#reset)
- [restoreState](neuroglancer_navigation_state.LinkedDisplayDimensions.md#restorestate)
- [toJSON](neuroglancer_navigation_state.LinkedDisplayDimensions.md#tojson)

## Constructors

### constructor

• **new LinkedDisplayDimensions**(`peer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `peer` | [`TrackableDisplayDimensions`](neuroglancer_navigation_state.TrackableDisplayDimensions.md) |

#### Overrides

[SimpleLinkedBase](neuroglancer_navigation_state._internal_.SimpleLinkedBase.md).[constructor](neuroglancer_navigation_state._internal_.SimpleLinkedBase.md#constructor)

#### Defined in

[src/neuroglancer/navigation_state.ts:963](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L963)

## Properties

### link

• **link**: [`TrackableNavigationSimpleLink`](neuroglancer_navigation_state.TrackableNavigationSimpleLink.md)

#### Inherited from

[SimpleLinkedBase](neuroglancer_navigation_state._internal_.SimpleLinkedBase.md).[link](neuroglancer_navigation_state._internal_.SimpleLinkedBase.md#link)

___

### peer

• **peer**: [`TrackableDisplayDimensions`](neuroglancer_navigation_state.TrackableDisplayDimensions.md)

#### Inherited from

[SimpleLinkedBase](neuroglancer_navigation_state._internal_.SimpleLinkedBase.md).[peer](neuroglancer_navigation_state._internal_.SimpleLinkedBase.md#peer)

___

### value

• **value**: [`TrackableDisplayDimensions`](neuroglancer_navigation_state.TrackableDisplayDimensions.md)

#### Overrides

[SimpleLinkedBase](neuroglancer_navigation_state._internal_.SimpleLinkedBase.md).[value](neuroglancer_navigation_state._internal_.SimpleLinkedBase.md#value)

#### Defined in

[src/neuroglancer/navigation_state.ts:958](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L958)

## Accessors

### changed

• `get` **changed**(): [`NullaryReadonlySignal`](../modules/neuroglancer_util_signal.md#nullaryreadonlysignal)

#### Returns

[`NullaryReadonlySignal`](../modules/neuroglancer_util_signal.md#nullaryreadonlysignal)

#### Inherited from

SimpleLinkedBase.changed

#### Defined in

[src/neuroglancer/navigation_state.ts:324](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L324)

## Methods

### copyToPeer

▸ **copyToPeer**(): `void`

#### Returns

`void`

#### Inherited from

[SimpleLinkedBase](neuroglancer_navigation_state._internal_.SimpleLinkedBase.md).[copyToPeer](neuroglancer_navigation_state._internal_.SimpleLinkedBase.md#copytopeer)

#### Defined in

[src/neuroglancer/navigation_state.ts:349](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L349)

___

### getValueJson

▸ `Protected` **getValueJson**(): `any`

#### Returns

`any`

#### Inherited from

[SimpleLinkedBase](neuroglancer_navigation_state._internal_.SimpleLinkedBase.md).[getValueJson](neuroglancer_navigation_state._internal_.SimpleLinkedBase.md#getvaluejson)

#### Defined in

[src/neuroglancer/navigation_state.ts:337](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L337)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Inherited from

[SimpleLinkedBase](neuroglancer_navigation_state._internal_.SimpleLinkedBase.md).[reset](neuroglancer_navigation_state._internal_.SimpleLinkedBase.md#reset)

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

#### Inherited from

[SimpleLinkedBase](neuroglancer_navigation_state._internal_.SimpleLinkedBase.md).[restoreState](neuroglancer_navigation_state._internal_.SimpleLinkedBase.md#restorestate)

#### Defined in

[src/neuroglancer/navigation_state.ts:345](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L345)

___

### toJSON

▸ **toJSON**(): `undefined` \| { `link`: `undefined` \| `string` ; `value`: `any`  }

#### Returns

`undefined` \| { `link`: `undefined` \| `string` ; `value`: `any`  }

#### Inherited from

[SimpleLinkedBase](neuroglancer_navigation_state._internal_.SimpleLinkedBase.md).[toJSON](neuroglancer_navigation_state._internal_.SimpleLinkedBase.md#tojson)

#### Defined in

[src/neuroglancer/navigation_state.ts:329](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L329)
