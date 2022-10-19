[neuroglancer](../README.md) / [Modules](../modules.md) / [axes\_lines](../modules/axes_lines.md) / [<internal\>](../modules/axes_lines._internal_.md) / CustomElementRegistry

# Interface: CustomElementRegistry

[axes_lines](../modules/axes_lines.md).[<internal>](../modules/axes_lines._internal_.md).CustomElementRegistry

## Table of contents

### Methods

- [define](axes_lines._internal_.CustomElementRegistry.md#define)
- [get](axes_lines._internal_.CustomElementRegistry.md#get)
- [upgrade](axes_lines._internal_.CustomElementRegistry.md#upgrade)
- [whenDefined](axes_lines._internal_.CustomElementRegistry.md#whendefined)

## Methods

### define

▸ **define**(`name`, `constructor`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `constructor` | [`CustomElementConstructor`](axes_lines._internal_.CustomElementConstructor.md) |
| `options?` | [`ElementDefinitionOptions`](axes_lines._internal_.ElementDefinitionOptions.md) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3755

___

### get

▸ **get**(`name`): `undefined` \| [`CustomElementConstructor`](axes_lines._internal_.CustomElementConstructor.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`undefined` \| [`CustomElementConstructor`](axes_lines._internal_.CustomElementConstructor.md)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3756

___

### upgrade

▸ **upgrade**(`root`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `root` | [`Node`](../modules/axes_lines._internal_.md#node) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3757

___

### whenDefined

▸ **whenDefined**(`name`): `Promise`<[`CustomElementConstructor`](axes_lines._internal_.CustomElementConstructor.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`Promise`<[`CustomElementConstructor`](axes_lines._internal_.CustomElementConstructor.md)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3758
