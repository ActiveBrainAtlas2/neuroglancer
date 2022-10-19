[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / DocumentOrShadowRoot

# Interface: DocumentOrShadowRoot

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).DocumentOrShadowRoot

## Hierarchy

- **`DocumentOrShadowRoot`**

  ↳ [`Document`](annotation_annotation_layer_state._internal_.Document.md)

  ↳ [`ShadowRoot`](annotation_annotation_layer_state._internal_.ShadowRoot.md)

## Table of contents

### Properties

- [activeElement](annotation_annotation_layer_state._internal_.DocumentOrShadowRoot.md#activeelement)
- [fullscreenElement](annotation_annotation_layer_state._internal_.DocumentOrShadowRoot.md#fullscreenelement)
- [pictureInPictureElement](annotation_annotation_layer_state._internal_.DocumentOrShadowRoot.md#pictureinpictureelement)
- [pointerLockElement](annotation_annotation_layer_state._internal_.DocumentOrShadowRoot.md#pointerlockelement)
- [styleSheets](annotation_annotation_layer_state._internal_.DocumentOrShadowRoot.md#stylesheets)

### Methods

- [elementFromPoint](annotation_annotation_layer_state._internal_.DocumentOrShadowRoot.md#elementfrompoint)
- [elementsFromPoint](annotation_annotation_layer_state._internal_.DocumentOrShadowRoot.md#elementsfrompoint)
- [getAnimations](annotation_annotation_layer_state._internal_.DocumentOrShadowRoot.md#getanimations)

## Properties

### activeElement

• `Readonly` **activeElement**: ``null`` \| [`Element`](../modules/annotation_annotation_layer_state._internal_.md#element)

Returns the deepest element in the document through which or to which key events are being routed. This is, roughly speaking, the focused element in the document.

For the purposes of this API, when a child browsing context is focused, its container is focused in the parent browsing context. For example, if the user moves the focus to a text control in an iframe, the iframe is the element returned by the activeElement API in the iframe's node document.

Similarly, when the focused element is in a different node tree than documentOrShadowRoot, the element returned will be the host that's located in the same node tree as documentOrShadowRoot if documentOrShadowRoot is a shadow-including inclusive ancestor of the focused element, and null if not.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4736

___

### fullscreenElement

• `Readonly` **fullscreenElement**: ``null`` \| [`Element`](../modules/annotation_annotation_layer_state._internal_.md#element)

Returns document's fullscreen element.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4738

___

### pictureInPictureElement

• `Readonly` **pictureInPictureElement**: ``null`` \| [`Element`](../modules/annotation_annotation_layer_state._internal_.md#element)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4739

___

### pointerLockElement

• `Readonly` **pointerLockElement**: ``null`` \| [`Element`](../modules/annotation_annotation_layer_state._internal_.md#element)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4740

___

### styleSheets

• `Readonly` **styleSheets**: `StyleSheetList`

Retrieves a collection of styleSheet objects representing the style sheets that correspond to each instance of a link or style object in the document.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4742

## Methods

### elementFromPoint

▸ **elementFromPoint**(`x`, `y`): ``null`` \| [`Element`](../modules/annotation_annotation_layer_state._internal_.md#element)

Returns the element for the specified x coordinate and the specified y coordinate.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The x-offset |
| `y` | `number` | The y-offset |

#### Returns

``null`` \| [`Element`](../modules/annotation_annotation_layer_state._internal_.md#element)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4748

___

### elementsFromPoint

▸ **elementsFromPoint**(`x`, `y`): [`Element`](../modules/annotation_annotation_layer_state._internal_.md#element)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

[`Element`](../modules/annotation_annotation_layer_state._internal_.md#element)[]

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4749

___

### getAnimations

▸ **getAnimations**(): [`Animation`](../modules/annotation_annotation_layer_state._internal_.md#animation)[]

#### Returns

[`Animation`](../modules/annotation_annotation_layer_state._internal_.md#animation)[]

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4750
