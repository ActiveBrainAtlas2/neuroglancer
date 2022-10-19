[neuroglancer](../README.md) / [Modules](../modules.md) / [widget/checkbox\_icon](../modules/widget_checkbox_icon.md) / MakeCheckboxIconOptions

# Interface: MakeCheckboxIconOptions

[widget/checkbox_icon](../modules/widget_checkbox_icon.md).MakeCheckboxIconOptions

## Hierarchy

- [`Omit`](../modules/widget_checkbox_icon._internal_.md#omit)<[`MakeIconOptions`](widget_icon.MakeIconOptions.md), ``"onClick"`` \| ``"title"``\>

  ↳ **`MakeCheckboxIconOptions`**

## Table of contents

### Properties

- [backgroundScheme](widget_checkbox_icon.MakeCheckboxIconOptions.md#backgroundscheme)
- [disableTitle](widget_checkbox_icon.MakeCheckboxIconOptions.md#disabletitle)
- [enableTitle](widget_checkbox_icon.MakeCheckboxIconOptions.md#enabletitle)
- [href](widget_checkbox_icon.MakeCheckboxIconOptions.md#href)
- [svg](widget_checkbox_icon.MakeCheckboxIconOptions.md#svg)
- [text](widget_checkbox_icon.MakeCheckboxIconOptions.md#text)

### Methods

- [onRightClick](widget_checkbox_icon.MakeCheckboxIconOptions.md#onrightclick)

## Properties

### backgroundScheme

• `Optional` **backgroundScheme**: ``"light"`` \| ``"dark"``

#### Defined in

[src/neuroglancer/widget/checkbox_icon.ts:26](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/checkbox_icon.ts#L26)

___

### disableTitle

• `Optional` **disableTitle**: `string`

#### Defined in

[src/neuroglancer/widget/checkbox_icon.ts:25](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/checkbox_icon.ts#L25)

___

### enableTitle

• `Optional` **enableTitle**: `string`

#### Defined in

[src/neuroglancer/widget/checkbox_icon.ts:24](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/checkbox_icon.ts#L24)

___

### href

• `Optional` **href**: `string`

#### Inherited from

Omit.href

#### Defined in

[src/neuroglancer/widget/icon.ts:24](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/icon.ts#L24)

___

### svg

• `Optional` **svg**: `string`

#### Inherited from

Omit.svg

#### Defined in

[src/neuroglancer/widget/icon.ts:21](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/icon.ts#L21)

___

### text

• `Optional` **text**: `string`

#### Inherited from

Omit.text

#### Defined in

[src/neuroglancer/widget/icon.ts:20](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/icon.ts#L20)

## Methods

### onRightClick

▸ `Optional` **onRightClick**(`this`, `event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement) |
| `event` | [`MouseEvent`](../modules/annotation_annotation_layer_state._internal_.md#mouseevent) |

#### Returns

`void`

#### Inherited from

Omit.onRightClick

#### Defined in

[src/neuroglancer/widget/icon.ts:25](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/icon.ts#L25)
