[neuroglancer](../README.md) / [Modules](../modules.md) / [navigation\_state](../modules/navigation_state.md) / LinkedZoomState

# Class: LinkedZoomState<T\>

[navigation_state](../modules/navigation_state.md).LinkedZoomState

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TrackableProjectionZoom`](navigation_state.TrackableProjectionZoom.md) \| [`TrackableCrossSectionZoom`](navigation_state.TrackableCrossSectionZoom.md) |

## Hierarchy

- [`LinkedBase`](navigation_state._internal_.LinkedBase.md)<`T`\>

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

[LinkedBase](navigation_state._internal_.LinkedBase.md).[constructor](navigation_state._internal_.LinkedBase.md#constructor)

#### Defined in

[src/neuroglancer/navigation_state.ts:1187](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/navigation_state.ts#L1187)

## Properties

### link

• **link**: [`TrackableNavigationLink`](navigation_state.TrackableNavigationLink.md)

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
