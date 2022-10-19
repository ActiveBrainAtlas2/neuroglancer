[neuroglancer](../README.md) / [Modules](../modules.md) / [axes\_lines](../modules/axes_lines.md) / [<internal\>](../modules/axes_lines._internal_.md) / CSSStyleSheet

# Interface: CSSStyleSheet

[axes_lines](../modules/axes_lines.md).[<internal>](../modules/axes_lines._internal_.md).CSSStyleSheet

A single CSS style sheet. It inherits properties and methods from its parent, StyleSheet.

## Hierarchy

- [`StyleSheet`](../modules/axes_lines._internal_.md#stylesheet)

  ↳ **`CSSStyleSheet`**

## Table of contents

### Properties

- [cssRules](axes_lines._internal_.CSSStyleSheet.md#cssrules)
- [disabled](axes_lines._internal_.CSSStyleSheet.md#disabled)
- [href](axes_lines._internal_.CSSStyleSheet.md#href)
- [media](axes_lines._internal_.CSSStyleSheet.md#media)
- [ownerNode](axes_lines._internal_.CSSStyleSheet.md#ownernode)
- [ownerRule](axes_lines._internal_.CSSStyleSheet.md#ownerrule)
- [parentStyleSheet](axes_lines._internal_.CSSStyleSheet.md#parentstylesheet)
- [rules](axes_lines._internal_.CSSStyleSheet.md#rules)
- [title](axes_lines._internal_.CSSStyleSheet.md#title)
- [type](axes_lines._internal_.CSSStyleSheet.md#type)

### Methods

- [addRule](axes_lines._internal_.CSSStyleSheet.md#addrule)
- [deleteRule](axes_lines._internal_.CSSStyleSheet.md#deleterule)
- [insertRule](axes_lines._internal_.CSSStyleSheet.md#insertrule)
- [removeRule](axes_lines._internal_.CSSStyleSheet.md#removerule)

## Properties

### cssRules

• `Readonly` **cssRules**: `CSSRuleList`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3287

___

### disabled

• **disabled**: `boolean`

#### Inherited from

StyleSheet.disabled

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13883

___

### href

• `Readonly` **href**: ``null`` \| `string`

#### Inherited from

StyleSheet.href

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13884

___

### media

• `Readonly` **media**: `MediaList`

#### Inherited from

StyleSheet.media

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13885

___

### ownerNode

• `Readonly` **ownerNode**: ``null`` \| [`Element`](../modules/axes_lines._internal_.md#element) \| [`ProcessingInstruction`](../modules/axes_lines._internal_.md#processinginstruction)

#### Inherited from

StyleSheet.ownerNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13886

___

### ownerRule

• `Readonly` **ownerRule**: ``null`` \| [`CSSRule`](../modules/axes_lines._internal_.md#cssrule)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3288

___

### parentStyleSheet

• `Readonly` **parentStyleSheet**: ``null`` \| [`CSSStyleSheet`](../modules/axes_lines._internal_.md#cssstylesheet)

#### Inherited from

StyleSheet.parentStyleSheet

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13887

___

### rules

• `Readonly` **rules**: `CSSRuleList`

**`deprecated`**

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3290

___

### title

• `Readonly` **title**: ``null`` \| `string`

#### Inherited from

StyleSheet.title

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13888

___

### type

• `Readonly` **type**: `string`

#### Inherited from

StyleSheet.type

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13889

## Methods

### addRule

▸ **addRule**(`selector?`, `style?`, `index?`): `number`

**`deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector?` | `string` |
| `style?` | `string` |
| `index?` | `number` |

#### Returns

`number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3292

___

### deleteRule

▸ **deleteRule**(`index`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3293

___

### insertRule

▸ **insertRule**(`rule`, `index?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rule` | `string` |
| `index?` | `number` |

#### Returns

`number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3294

___

### removeRule

▸ **removeRule**(`index?`): `void`

**`deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `index?` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3296
