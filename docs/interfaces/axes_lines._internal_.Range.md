[neuroglancer](../README.md) / [Modules](../modules.md) / [axes\_lines](../modules/axes_lines.md) / [<internal\>](../modules/axes_lines._internal_.md) / Range

# Interface: Range

[axes_lines](../modules/axes_lines.md).[<internal>](../modules/axes_lines._internal_.md).Range

A fragment of a document that can contain nodes and parts of text nodes.

## Hierarchy

- [`AbstractRange`](../modules/axes_lines._internal_.md#abstractrange)

  ↳ **`Range`**

## Table of contents

### Properties

- [END\_TO\_END](axes_lines._internal_.Range.md#end_to_end)
- [END\_TO\_START](axes_lines._internal_.Range.md#end_to_start)
- [START\_TO\_END](axes_lines._internal_.Range.md#start_to_end)
- [START\_TO\_START](axes_lines._internal_.Range.md#start_to_start)
- [collapsed](axes_lines._internal_.Range.md#collapsed)
- [commonAncestorContainer](axes_lines._internal_.Range.md#commonancestorcontainer)
- [endContainer](axes_lines._internal_.Range.md#endcontainer)
- [endOffset](axes_lines._internal_.Range.md#endoffset)
- [startContainer](axes_lines._internal_.Range.md#startcontainer)
- [startOffset](axes_lines._internal_.Range.md#startoffset)

### Methods

- [cloneContents](axes_lines._internal_.Range.md#clonecontents)
- [cloneRange](axes_lines._internal_.Range.md#clonerange)
- [collapse](axes_lines._internal_.Range.md#collapse)
- [compareBoundaryPoints](axes_lines._internal_.Range.md#compareboundarypoints)
- [comparePoint](axes_lines._internal_.Range.md#comparepoint)
- [createContextualFragment](axes_lines._internal_.Range.md#createcontextualfragment)
- [deleteContents](axes_lines._internal_.Range.md#deletecontents)
- [detach](axes_lines._internal_.Range.md#detach)
- [extractContents](axes_lines._internal_.Range.md#extractcontents)
- [getBoundingClientRect](axes_lines._internal_.Range.md#getboundingclientrect)
- [getClientRects](axes_lines._internal_.Range.md#getclientrects)
- [insertNode](axes_lines._internal_.Range.md#insertnode)
- [intersectsNode](axes_lines._internal_.Range.md#intersectsnode)
- [isPointInRange](axes_lines._internal_.Range.md#ispointinrange)
- [selectNode](axes_lines._internal_.Range.md#selectnode)
- [selectNodeContents](axes_lines._internal_.Range.md#selectnodecontents)
- [setEnd](axes_lines._internal_.Range.md#setend)
- [setEndAfter](axes_lines._internal_.Range.md#setendafter)
- [setEndBefore](axes_lines._internal_.Range.md#setendbefore)
- [setStart](axes_lines._internal_.Range.md#setstart)
- [setStartAfter](axes_lines._internal_.Range.md#setstartafter)
- [setStartBefore](axes_lines._internal_.Range.md#setstartbefore)
- [surroundContents](axes_lines._internal_.Range.md#surroundcontents)
- [toString](axes_lines._internal_.Range.md#tostring)

## Properties

### END\_TO\_END

• `Readonly` **END\_TO\_END**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11462

___

### END\_TO\_START

• `Readonly` **END\_TO\_START**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11463

___

### START\_TO\_END

• `Readonly` **START\_TO\_END**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11464

___

### START\_TO\_START

• `Readonly` **START\_TO\_START**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11465

___

### collapsed

• `Readonly` **collapsed**: `boolean`

Returns true if range is collapsed, and false otherwise.

#### Inherited from

AbstractRange.collapsed

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2000

___

### commonAncestorContainer

• `Readonly` **commonAncestorContainer**: [`Node`](../modules/axes_lines._internal_.md#node)

Returns the node, furthest away from the document, that is an ancestor of both range's start node and end node.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11435

___

### endContainer

• `Readonly` **endContainer**: [`Node`](../modules/axes_lines._internal_.md#node)

Returns range's end node.

#### Inherited from

AbstractRange.endContainer

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2002

___

### endOffset

• `Readonly` **endOffset**: `number`

Returns range's end offset.

#### Inherited from

AbstractRange.endOffset

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2004

___

### startContainer

• `Readonly` **startContainer**: [`Node`](../modules/axes_lines._internal_.md#node)

Returns range's start node.

#### Inherited from

AbstractRange.startContainer

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2006

___

### startOffset

• `Readonly` **startOffset**: `number`

Returns range's start offset.

#### Inherited from

AbstractRange.startOffset

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2008

## Methods

### cloneContents

▸ **cloneContents**(): [`DocumentFragment`](../modules/axes_lines._internal_.md#documentfragment)

#### Returns

[`DocumentFragment`](../modules/axes_lines._internal_.md#documentfragment)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11436

___

### cloneRange

▸ **cloneRange**(): [`Range`](../modules/axes_lines._internal_.md#range)

#### Returns

[`Range`](../modules/axes_lines._internal_.md#range)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11437

___

### collapse

▸ **collapse**(`toStart?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `toStart?` | `boolean` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11438

___

### compareBoundaryPoints

▸ **compareBoundaryPoints**(`how`, `sourceRange`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `how` | `number` |
| `sourceRange` | [`Range`](../modules/axes_lines._internal_.md#range) |

#### Returns

`number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11439

___

### comparePoint

▸ **comparePoint**(`node`, `offset`): `number`

Returns −1 if the point is before the range, 0 if the point is in the range, and 1 if the point is after the range.

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`Node`](../modules/axes_lines._internal_.md#node) |
| `offset` | `number` |

#### Returns

`number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11441

___

### createContextualFragment

▸ **createContextualFragment**(`fragment`): [`DocumentFragment`](../modules/axes_lines._internal_.md#documentfragment)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fragment` | `string` |

#### Returns

[`DocumentFragment`](../modules/axes_lines._internal_.md#documentfragment)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11442

___

### deleteContents

▸ **deleteContents**(): `void`

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11443

___

### detach

▸ **detach**(): `void`

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11444

___

### extractContents

▸ **extractContents**(): [`DocumentFragment`](../modules/axes_lines._internal_.md#documentfragment)

#### Returns

[`DocumentFragment`](../modules/axes_lines._internal_.md#documentfragment)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11445

___

### getBoundingClientRect

▸ **getBoundingClientRect**(): [`DOMRect`](../modules/axes_lines._internal_.md#domrect)

#### Returns

[`DOMRect`](../modules/axes_lines._internal_.md#domrect)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11446

___

### getClientRects

▸ **getClientRects**(): `DOMRectList`

#### Returns

`DOMRectList`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11447

___

### insertNode

▸ **insertNode**(`node`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`Node`](../modules/axes_lines._internal_.md#node) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11448

___

### intersectsNode

▸ **intersectsNode**(`node`): `boolean`

Returns whether range intersects node.

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`Node`](../modules/axes_lines._internal_.md#node) |

#### Returns

`boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11450

___

### isPointInRange

▸ **isPointInRange**(`node`, `offset`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`Node`](../modules/axes_lines._internal_.md#node) |
| `offset` | `number` |

#### Returns

`boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11451

___

### selectNode

▸ **selectNode**(`node`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`Node`](../modules/axes_lines._internal_.md#node) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11452

___

### selectNodeContents

▸ **selectNodeContents**(`node`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`Node`](../modules/axes_lines._internal_.md#node) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11453

___

### setEnd

▸ **setEnd**(`node`, `offset`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`Node`](../modules/axes_lines._internal_.md#node) |
| `offset` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11454

___

### setEndAfter

▸ **setEndAfter**(`node`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`Node`](../modules/axes_lines._internal_.md#node) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11455

___

### setEndBefore

▸ **setEndBefore**(`node`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`Node`](../modules/axes_lines._internal_.md#node) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11456

___

### setStart

▸ **setStart**(`node`, `offset`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`Node`](../modules/axes_lines._internal_.md#node) |
| `offset` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11457

___

### setStartAfter

▸ **setStartAfter**(`node`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`Node`](../modules/axes_lines._internal_.md#node) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11458

___

### setStartBefore

▸ **setStartBefore**(`node`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`Node`](../modules/axes_lines._internal_.md#node) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11459

___

### surroundContents

▸ **surroundContents**(`newParent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newParent` | [`Node`](../modules/axes_lines._internal_.md#node) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11460

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11461
