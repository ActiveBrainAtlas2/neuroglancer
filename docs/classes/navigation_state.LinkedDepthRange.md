[neuroglancer](../README.md) / [Modules](../modules.md) / [navigation\_state](../modules/navigation_state.md) / LinkedDepthRange

# Class: LinkedDepthRange

[navigation_state](../modules/navigation_state.md).LinkedDepthRange

## Hierarchy

- `SimpleLinkedBase`<[`TrackableDepthRange`](navigation_state.TrackableDepthRange.md)\>

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

SimpleLinkedBase&lt;TrackableDepthRange\&gt;.constructor

#### Defined in

[src/neuroglancer/navigation_state.ts:1487](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/navigation_state.ts#L1487)

## Properties

### link

• **link**: [`TrackableNavigationSimpleLink`](navigation_state.TrackableNavigationSimpleLink.md)

#### Inherited from

SimpleLinkedBase.link

___

### peer

• **peer**: [`TrackableDepthRange`](navigation_state.TrackableDepthRange.md)

#### Inherited from

SimpleLinkedBase.peer

___

### value

• **value**: [`TrackableDepthRange`](navigation_state.TrackableDepthRange.md)

#### Inherited from

SimpleLinkedBase.value

#### Defined in

[src/neuroglancer/navigation_state.ts:323](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/navigation_state.ts#L323)

## Accessors

### changed

• `get` **changed**(): `NullaryReadonlySignal`

#### Returns

`NullaryReadonlySignal`

#### Inherited from

SimpleLinkedBase.changed

#### Defined in

[src/neuroglancer/navigation_state.ts:324](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/navigation_state.ts#L324)

## Methods

### copyToPeer

▸ **copyToPeer**(): `void`

#### Returns

`void`

#### Inherited from

SimpleLinkedBase.copyToPeer

#### Defined in

[src/neuroglancer/navigation_state.ts:349](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/navigation_state.ts#L349)

___

### getValueJson

▸ `Protected` **getValueJson**(): `any`

#### Returns

`any`

#### Inherited from

SimpleLinkedBase.getValueJson

#### Defined in

[src/neuroglancer/navigation_state.ts:337](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/navigation_state.ts#L337)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Inherited from

SimpleLinkedBase.reset

#### Defined in

[src/neuroglancer/navigation_state.ts:341](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/navigation_state.ts#L341)

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

SimpleLinkedBase.restoreState

#### Defined in

[src/neuroglancer/navigation_state.ts:345](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/navigation_state.ts#L345)

___

### toJSON

▸ **toJSON**(): `undefined` \| { `link`: `undefined` \| `string` ; `value`: `any`  }

#### Returns

`undefined` \| { `link`: `undefined` \| `string` ; `value`: `any`  }

#### Inherited from

SimpleLinkedBase.toJSON

#### Defined in

[src/neuroglancer/navigation_state.ts:329](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/navigation_state.ts#L329)
