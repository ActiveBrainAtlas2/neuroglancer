[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / HTMLHyperlinkElementUtils

# Interface: HTMLHyperlinkElementUtils

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).HTMLHyperlinkElementUtils

## Hierarchy

- **`HTMLHyperlinkElementUtils`**

  ↳ [`HTMLAnchorElement`](annotation_annotation_layer_state._internal_.HTMLAnchorElement.md)

  ↳ [`HTMLAreaElement`](annotation_annotation_layer_state._internal_.HTMLAreaElement.md)

## Table of contents

### Properties

- [hash](annotation_annotation_layer_state._internal_.HTMLHyperlinkElementUtils.md#hash)
- [host](annotation_annotation_layer_state._internal_.HTMLHyperlinkElementUtils.md#host)
- [hostname](annotation_annotation_layer_state._internal_.HTMLHyperlinkElementUtils.md#hostname)
- [href](annotation_annotation_layer_state._internal_.HTMLHyperlinkElementUtils.md#href)
- [origin](annotation_annotation_layer_state._internal_.HTMLHyperlinkElementUtils.md#origin)
- [password](annotation_annotation_layer_state._internal_.HTMLHyperlinkElementUtils.md#password)
- [pathname](annotation_annotation_layer_state._internal_.HTMLHyperlinkElementUtils.md#pathname)
- [port](annotation_annotation_layer_state._internal_.HTMLHyperlinkElementUtils.md#port)
- [protocol](annotation_annotation_layer_state._internal_.HTMLHyperlinkElementUtils.md#protocol)
- [search](annotation_annotation_layer_state._internal_.HTMLHyperlinkElementUtils.md#search)
- [username](annotation_annotation_layer_state._internal_.HTMLHyperlinkElementUtils.md#username)

### Methods

- [toString](annotation_annotation_layer_state._internal_.HTMLHyperlinkElementUtils.md#tostring)

## Properties

### hash

• **hash**: `string`

Returns the hyperlink's URL's fragment (includes leading "#" if non-empty).

Can be set, to change the URL's fragment (ignores leading "#").

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6703

___

### host

• **host**: `string`

Returns the hyperlink's URL's host and port (if different from the default port for the scheme).

Can be set, to change the URL's host and port.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6709

___

### hostname

• **hostname**: `string`

Returns the hyperlink's URL's host.

Can be set, to change the URL's host.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6715

___

### href

• **href**: `string`

Returns the hyperlink's URL.

Can be set, to change the URL.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6721

___

### origin

• `Readonly` **origin**: `string`

Returns the hyperlink's URL's origin.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6724

___

### password

• **password**: `string`

Returns the hyperlink's URL's password.

Can be set, to change the URL's password.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6730

___

### pathname

• **pathname**: `string`

Returns the hyperlink's URL's path.

Can be set, to change the URL's path.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6736

___

### port

• **port**: `string`

Returns the hyperlink's URL's port.

Can be set, to change the URL's port.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6742

___

### protocol

• **protocol**: `string`

Returns the hyperlink's URL's scheme.

Can be set, to change the URL's scheme.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6748

___

### search

• **search**: `string`

Returns the hyperlink's URL's query (includes leading "?" if non-empty).

Can be set, to change the URL's query (ignores leading "?").

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6754

___

### username

• **username**: `string`

Returns the hyperlink's URL's username.

Can be set, to change the URL's username.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6760

## Methods

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6722
