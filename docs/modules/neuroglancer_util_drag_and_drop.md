[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/util/drag\_and\_drop

# Module: neuroglancer/util/drag\_and\_drop

## Table of contents

### Interfaces

- [DragInfo](../interfaces/neuroglancer_util_drag_and_drop.DragInfo.md)

### Functions

- [decodeParametersFromDragType](neuroglancer_util_drag_and_drop.md#decodeparametersfromdragtype)
- [decodeParametersFromDragTypeList](neuroglancer_util_drag_and_drop.md#decodeparametersfromdragtypelist)
- [decodeStringFromDragType](neuroglancer_util_drag_and_drop.md#decodestringfromdragtype)
- [encodeDragType](neuroglancer_util_drag_and_drop.md#encodedragtype)
- [encodeParametersAsDragType](neuroglancer_util_drag_and_drop.md#encodeparametersasdragtype)
- [encodeStringAsDragType](neuroglancer_util_drag_and_drop.md#encodestringasdragtype)
- [getDropEffect](neuroglancer_util_drag_and_drop.md#getdropeffect)
- [preventDrag](neuroglancer_util_drag_and_drop.md#preventdrag)
- [setDropEffect](neuroglancer_util_drag_and_drop.md#setdropeffect)

## Functions

### decodeParametersFromDragType

▸ **decodeParametersFromDragType**(`dragType`, `prefix`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dragType` | `string` |
| `prefix` | `string` |

#### Returns

`any`

#### Defined in

[src/neuroglancer/util/drag_and_drop.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/drag_and_drop.ts#L46)

___

### decodeParametersFromDragTypeList

▸ **decodeParametersFromDragTypeList**(`dragTypes`, `prefix`): [`DragInfo`](../interfaces/neuroglancer_util_drag_and_drop.DragInfo.md) \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dragTypes` | readonly `string`[] |
| `prefix` | `string` |

#### Returns

[`DragInfo`](../interfaces/neuroglancer_util_drag_and_drop.DragInfo.md) \| `undefined`

#### Defined in

[src/neuroglancer/util/drag_and_drop.ts:67](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/drag_and_drop.ts#L67)

___

### decodeStringFromDragType

▸ **decodeStringFromDragType**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

#### Defined in

[src/neuroglancer/util/drag_and_drop.ts:38](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/drag_and_drop.ts#L38)

___

### encodeDragType

▸ **encodeDragType**(`prefix`, `parameters`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `prefix` | `string` |
| `parameters` | `any` |

#### Returns

`string`

#### Defined in

[src/neuroglancer/util/drag_and_drop.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/drag_and_drop.ts#L42)

___

### encodeParametersAsDragType

▸ **encodeParametersAsDragType**(`prefix`, `parameters`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `prefix` | `string` |
| `parameters` | `any` |

#### Returns

`string`

#### Defined in

[src/neuroglancer/util/drag_and_drop.ts:58](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/drag_and_drop.ts#L58)

___

### encodeStringAsDragType

▸ **encodeStringAsDragType**(`s`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`any`

#### Defined in

[src/neuroglancer/util/drag_and_drop.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/drag_and_drop.ts#L34)

___

### getDropEffect

▸ **getDropEffect**(): `undefined` \| ``"link"`` \| ``"none"`` \| ``"copy"`` \| ``"move"``

#### Returns

`undefined` \| ``"link"`` \| ``"none"`` \| ``"copy"`` \| ``"move"``

#### Defined in

[src/neuroglancer/util/drag_and_drop.ts:94](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/drag_and_drop.ts#L94)

___

### preventDrag

▸ **preventDrag**(`element`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | [`HTMLElement`](main_module._internal_.md#htmlelement) |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/neuroglancer/util/drag_and_drop.ts:98](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/drag_and_drop.ts#L98)

___

### setDropEffect

▸ **setDropEffect**<`T`\>(`event`, `dropEffect`): `T`

On Chrome 62, the dataTransfer.dropEffect property is reset to 'none' when the 'drop' event is
dispatched.  As a workaround, we store it in a global variable.

The alternative workaround of recomputing it in the 'drop' event handler is problematic for a
different reason: the computation may depend on the modifier key states, and on Firefox 52, these
key states are not set in the 'drop' event.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends ``"link"`` \| ``"none"`` \| ``"copy"`` \| ``"move"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`DragEvent`](main_module._internal_.md#dragevent) |
| `dropEffect` | `T` |

#### Returns

`T`

#### Defined in

[src/neuroglancer/util/drag_and_drop.ts:88](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/drag_and_drop.ts#L88)
