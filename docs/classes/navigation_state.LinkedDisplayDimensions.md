[neuroglancer](../README.md) / [Modules](../modules.md) / [navigation\_state](../modules/navigation_state.md) / LinkedDisplayDimensions

# Class: LinkedDisplayDimensions

[navigation_state](../modules/navigation_state.md).LinkedDisplayDimensions

## Hierarchy

- `SimpleLinkedBase`<[`TrackableDisplayDimensions`](navigation_state.TrackableDisplayDimensions.md)\>

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

SimpleLinkedBase&lt;TrackableDisplayDimensions\&gt;.constructor

#### Defined in

[src/neuroglancer/navigation_state.ts:963](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/navigation_state.ts#L963)

## Properties

### link

• **link**: [`TrackableNavigationSimpleLink`](navigation_state.TrackableNavigationSimpleLink.md)

#### Inherited from

SimpleLinkedBase.link

___

### peer

• **peer**: [`TrackableDisplayDimensions`](navigation_state.TrackableDisplayDimensions.md)

#### Inherited from

SimpleLinkedBase.peer

___

### value

• **value**: [`TrackableDisplayDimensions`](navigation_state.TrackableDisplayDimensions.md)

#### Overrides

SimpleLinkedBase.value

#### Defined in

[src/neuroglancer/navigation_state.ts:958](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/navigation_state.ts#L958)

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
