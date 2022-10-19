[neuroglancer](../README.md) / [Modules](../modules.md) / [axes\_lines](../modules/axes_lines.md) / [<internal\>](../modules/axes_lines._internal_.md) / Selection

# Interface: Selection

[axes_lines](../modules/axes_lines.md).[<internal>](../modules/axes_lines._internal_.md).Selection

A Selection object represents the range of text selected by the user or the current position of the caret. To obtain a Selection object for examination or modification, call Window.getSelection().

## Table of contents

### Properties

- [anchorNode](axes_lines._internal_.Selection.md#anchornode)
- [anchorOffset](axes_lines._internal_.Selection.md#anchoroffset)
- [focusNode](axes_lines._internal_.Selection.md#focusnode)
- [focusOffset](axes_lines._internal_.Selection.md#focusoffset)
- [isCollapsed](axes_lines._internal_.Selection.md#iscollapsed)
- [rangeCount](axes_lines._internal_.Selection.md#rangecount)
- [type](axes_lines._internal_.Selection.md#type)

### Methods

- [addRange](axes_lines._internal_.Selection.md#addrange)
- [collapse](axes_lines._internal_.Selection.md#collapse)
- [collapseToEnd](axes_lines._internal_.Selection.md#collapsetoend)
- [collapseToStart](axes_lines._internal_.Selection.md#collapsetostart)
- [containsNode](axes_lines._internal_.Selection.md#containsnode)
- [deleteFromDocument](axes_lines._internal_.Selection.md#deletefromdocument)
- [empty](axes_lines._internal_.Selection.md#empty)
- [extend](axes_lines._internal_.Selection.md#extend)
- [getRangeAt](axes_lines._internal_.Selection.md#getrangeat)
- [removeAllRanges](axes_lines._internal_.Selection.md#removeallranges)
- [removeRange](axes_lines._internal_.Selection.md#removerange)
- [selectAllChildren](axes_lines._internal_.Selection.md#selectallchildren)
- [setBaseAndExtent](axes_lines._internal_.Selection.md#setbaseandextent)
- [setPosition](axes_lines._internal_.Selection.md#setposition)
- [toString](axes_lines._internal_.Selection.md#tostring)

## Properties

### anchorNode

• `Readonly` **anchorNode**: ``null`` \| [`Node`](../modules/axes_lines._internal_.md#node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13440

___

### anchorOffset

• `Readonly` **anchorOffset**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13441

___

### focusNode

• `Readonly` **focusNode**: ``null`` \| [`Node`](../modules/axes_lines._internal_.md#node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13442

___

### focusOffset

• `Readonly` **focusOffset**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13443

___

### isCollapsed

• `Readonly` **isCollapsed**: `boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13444

___

### rangeCount

• `Readonly` **rangeCount**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13445

___

### type

• `Readonly` **type**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13446

## Methods

### addRange

▸ **addRange**(`range`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `range` | [`Range`](../modules/axes_lines._internal_.md#range) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13447

___

### collapse

▸ **collapse**(`node`, `offset?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | ``null`` \| [`Node`](../modules/axes_lines._internal_.md#node) |
| `offset?` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13448

___

### collapseToEnd

▸ **collapseToEnd**(): `void`

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13449

___

### collapseToStart

▸ **collapseToStart**(): `void`

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13450

___

### containsNode

▸ **containsNode**(`node`, `allowPartialContainment?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`Node`](../modules/axes_lines._internal_.md#node) |
| `allowPartialContainment?` | `boolean` |

#### Returns

`boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13451

___

### deleteFromDocument

▸ **deleteFromDocument**(): `void`

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13452

___

### empty

▸ **empty**(): `void`

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13453

___

### extend

▸ **extend**(`node`, `offset?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`Node`](../modules/axes_lines._internal_.md#node) |
| `offset?` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13454

___

### getRangeAt

▸ **getRangeAt**(`index`): [`Range`](../modules/axes_lines._internal_.md#range)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

[`Range`](../modules/axes_lines._internal_.md#range)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13455

___

### removeAllRanges

▸ **removeAllRanges**(): `void`

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13456

___

### removeRange

▸ **removeRange**(`range`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `range` | [`Range`](../modules/axes_lines._internal_.md#range) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13457

___

### selectAllChildren

▸ **selectAllChildren**(`node`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`Node`](../modules/axes_lines._internal_.md#node) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13458

___

### setBaseAndExtent

▸ **setBaseAndExtent**(`anchorNode`, `anchorOffset`, `focusNode`, `focusOffset`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `anchorNode` | [`Node`](../modules/axes_lines._internal_.md#node) |
| `anchorOffset` | `number` |
| `focusNode` | [`Node`](../modules/axes_lines._internal_.md#node) |
| `focusOffset` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13459

___

### setPosition

▸ **setPosition**(`node`, `offset?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | ``null`` \| [`Node`](../modules/axes_lines._internal_.md#node) |
| `offset?` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13460

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13461
