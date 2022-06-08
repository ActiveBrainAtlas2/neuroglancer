[neuroglancer](../README.md) / [Modules](../modules.md) / [navigation\_state](../modules/navigation_state.md) / LinkedZoomState

# Class: LinkedZoomState<T\>

[navigation_state](../modules/navigation_state.md).LinkedZoomState

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TrackableProjectionZoom`](navigation_state.TrackableProjectionZoom.md) \| [`TrackableCrossSectionZoom`](navigation_state.TrackableCrossSectionZoom.md) |

## Hierarchy

- `LinkedBase`<`T`\>

  ↳ **`LinkedZoomState`**

## Table of contents

### Constructors

- [constructor](navigation_state.LinkedZoomState.md#constructor)

### Properties

- [link](navigation_state.LinkedZoomState.md#link)
- [peer](navigation_state.LinkedZoomState.md#peer)
- [value](navigation_state.LinkedZoomState.md#value)

### Accessors

- [changed](navigation_state.LinkedZoomState.md#changed)

### Methods

- [copyToPeer](navigation_state.LinkedZoomState.md#copytopeer)
- [getValueJson](navigation_state.LinkedZoomState.md#getvaluejson)
- [reset](navigation_state.LinkedZoomState.md#reset)
- [restoreState](navigation_state.LinkedZoomState.md#restorestate)
- [toJSON](navigation_state.LinkedZoomState.md#tojson)

## Constructors

### constructor

• **new LinkedZoomState**<`T`\>(`peer`, `displayDimensionRenderInfo`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TrackableProjectionZoom`](navigation_state.TrackableProjectionZoom.md) \| [`TrackableCrossSectionZoom`](navigation_state.TrackableCrossSectionZoom.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `peer` | `T` |
| `displayDimensionRenderInfo` | [`WatchableDisplayDimensionRenderInfo`](navigation_state.WatchableDisplayDimensionRenderInfo.md) |

#### Overrides

LinkedBase&lt;T\&gt;.constructor

#### Defined in

[src/neuroglancer/navigation_state.ts:1187](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/navigation_state.ts#L1187)

## Properties

### link

• **link**: [`TrackableNavigationLink`](navigation_state.TrackableNavigationLink.md)

#### Inherited from

LinkedBase.link

___

### peer

• **peer**: `T`

#### Inherited from

LinkedBase.peer

___

### value

• **value**: `T`

#### Inherited from

LinkedBase.value

#### Defined in

[src/neuroglancer/navigation_state.ts:323](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/navigation_state.ts#L323)

## Accessors

### changed

• `get` **changed**(): `NullaryReadonlySignal`

#### Returns

`NullaryReadonlySignal`

#### Inherited from

LinkedBase.changed

#### Defined in

[src/neuroglancer/navigation_state.ts:324](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/navigation_state.ts#L324)

## Methods

### copyToPeer

▸ **copyToPeer**(): `void`

#### Returns

`void`

#### Inherited from

LinkedBase.copyToPeer

#### Defined in

[src/neuroglancer/navigation_state.ts:349](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/navigation_state.ts#L349)

___

### getValueJson

▸ `Protected` **getValueJson**(): `any`

#### Returns

`any`

#### Inherited from

LinkedBase.getValueJson

#### Defined in

[src/neuroglancer/navigation_state.ts:337](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/navigation_state.ts#L337)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Inherited from

LinkedBase.reset

#### Defined in

[src/neuroglancer/navigation_state.ts:341](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/navigation_state.ts#L341)

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

LinkedBase.restoreState

#### Defined in

[src/neuroglancer/navigation_state.ts:345](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/navigation_state.ts#L345)

___

### toJSON

▸ **toJSON**(): `undefined` \| { `link`: `undefined` \| `string` ; `value`: `any`  }

#### Returns

`undefined` \| { `link`: `undefined` \| `string` ; `value`: `any`  }

#### Inherited from

LinkedBase.toJSON

#### Defined in

[src/neuroglancer/navigation_state.ts:329](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/navigation_state.ts#L329)
