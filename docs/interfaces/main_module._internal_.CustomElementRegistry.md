[neuroglancer](../README.md) / [Exports](../modules.md) / [main\_module](../modules/main_module.md) / [<internal\>](../modules/main_module._internal_.md) / CustomElementRegistry

# Interface: CustomElementRegistry

[main_module](../modules/main_module.md).[<internal>](../modules/main_module._internal_.md).CustomElementRegistry

## Table of contents

### Methods

- [define](main_module._internal_.CustomElementRegistry.md#define)
- [get](main_module._internal_.CustomElementRegistry.md#get)
- [upgrade](main_module._internal_.CustomElementRegistry.md#upgrade)
- [whenDefined](main_module._internal_.CustomElementRegistry.md#whendefined)

## Methods

### define

▸ **define**(`name`, `constructor`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `constructor` | [`CustomElementConstructor`](main_module._internal_.CustomElementConstructor.md) |
| `options?` | [`ElementDefinitionOptions`](main_module._internal_.ElementDefinitionOptions.md) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3755

___

### get

▸ **get**(`name`): `undefined` \| [`CustomElementConstructor`](main_module._internal_.CustomElementConstructor.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`undefined` \| [`CustomElementConstructor`](main_module._internal_.CustomElementConstructor.md)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3756

___

### upgrade

▸ **upgrade**(`root`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `root` | [`Node`](../modules/main_module._internal_.md#node) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3757

___

### whenDefined

▸ **whenDefined**(`name`): `Promise`<[`CustomElementConstructor`](main_module._internal_.CustomElementConstructor.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`Promise`<[`CustomElementConstructor`](main_module._internal_.CustomElementConstructor.md)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3758
