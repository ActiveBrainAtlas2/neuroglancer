[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/ui/default\_clipboard\_handling

# Module: neuroglancer/ui/default\_clipboard\_handling

## Table of contents

### Functions

- [bindDefaultCopyHandler](neuroglancer_ui_default_clipboard_handling.md#binddefaultcopyhandler)
- [bindDefaultPasteHandler](neuroglancer_ui_default_clipboard_handling.md#binddefaultpastehandler)
- [parsePositionString](neuroglancer_ui_default_clipboard_handling.md#parsepositionstring)

## Functions

### bindDefaultCopyHandler

▸ **bindDefaultCopyHandler**(`viewer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `viewer` | [`Viewer`](../classes/neuroglancer_viewer.Viewer.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/default_clipboard_handling.ts:21](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/default_clipboard_handling.ts#L21)

___

### bindDefaultPasteHandler

▸ **bindDefaultPasteHandler**(`viewer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `viewer` | [`Viewer`](../classes/neuroglancer_viewer.Viewer.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/default_clipboard_handling.ts:65](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/default_clipboard_handling.ts#L65)

___

### parsePositionString

▸ **parsePositionString**(`s`, `rank`): `Float32Array` \| `undefined`

Checks if `s` consists of `rank` numbers separated by whitespace or commas, with optional parentheses or
brackets before and after.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `s` | `string` | The string to parse. |
| `rank` | `number` | Specifies how many numbers are expected. |

#### Returns

`Float32Array` \| `undefined`

The parsed vector, or undefined if parsing failed.

#### Defined in

[src/neuroglancer/ui/default_clipboard_handling.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/default_clipboard_handling.ts#L45)
