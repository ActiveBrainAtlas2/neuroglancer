[neuroglancer](../README.md) / [Exports](../modules.md) / [main\_module](../modules/main_module.md) / [<internal\>](../modules/main_module._internal_.md) / CSSStyleSheet

# Interface: CSSStyleSheet

[main_module](../modules/main_module.md).[<internal>](../modules/main_module._internal_.md).CSSStyleSheet

A single CSS style sheet. It inherits properties and methods from its parent, StyleSheet.

## Hierarchy

- [`StyleSheet`](../modules/main_module._internal_.md#stylesheet)

  ↳ **`CSSStyleSheet`**

## Table of contents

### Properties

- [cssRules](main_module._internal_.CSSStyleSheet.md#cssrules)
- [disabled](main_module._internal_.CSSStyleSheet.md#disabled)
- [href](main_module._internal_.CSSStyleSheet.md#href)
- [media](main_module._internal_.CSSStyleSheet.md#media)
- [ownerNode](main_module._internal_.CSSStyleSheet.md#ownernode)
- [ownerRule](main_module._internal_.CSSStyleSheet.md#ownerrule)
- [parentStyleSheet](main_module._internal_.CSSStyleSheet.md#parentstylesheet)
- [rules](main_module._internal_.CSSStyleSheet.md#rules)
- [title](main_module._internal_.CSSStyleSheet.md#title)
- [type](main_module._internal_.CSSStyleSheet.md#type)

### Methods

- [addRule](main_module._internal_.CSSStyleSheet.md#addrule)
- [deleteRule](main_module._internal_.CSSStyleSheet.md#deleterule)
- [insertRule](main_module._internal_.CSSStyleSheet.md#insertrule)
- [removeRule](main_module._internal_.CSSStyleSheet.md#removerule)

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

• `Readonly` **ownerNode**: ``null`` \| [`Element`](../modules/main_module._internal_.md#element) \| [`ProcessingInstruction`](../modules/main_module._internal_.md#processinginstruction)

#### Inherited from

StyleSheet.ownerNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13886

___

### ownerRule

• `Readonly` **ownerRule**: ``null`` \| [`CSSRule`](../modules/main_module._internal_.md#cssrule)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3288

___

### parentStyleSheet

• `Readonly` **parentStyleSheet**: ``null`` \| [`CSSStyleSheet`](../modules/main_module._internal_.md#cssstylesheet)

#### Inherited from

StyleSheet.parentStyleSheet

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13887

___

### rules

• `Readonly` **rules**: `CSSRuleList`

**`Deprecated`**

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

**`Deprecated`**

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

**`Deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `index?` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3296
