[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / CustomElementRegistry

# Interface: CustomElementRegistry

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).CustomElementRegistry

## Table of contents

### Methods

- [define](annotation_annotation_layer_state._internal_.CustomElementRegistry.md#define)
- [get](annotation_annotation_layer_state._internal_.CustomElementRegistry.md#get)
- [upgrade](annotation_annotation_layer_state._internal_.CustomElementRegistry.md#upgrade)
- [whenDefined](annotation_annotation_layer_state._internal_.CustomElementRegistry.md#whendefined)

## Methods

### define

▸ **define**(`name`, `constructor`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `constructor` | [`CustomElementConstructor`](annotation_annotation_layer_state._internal_.CustomElementConstructor.md) |
| `options?` | [`ElementDefinitionOptions`](annotation_annotation_layer_state._internal_.ElementDefinitionOptions.md) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3755

___

### get

▸ **get**(`name`): `undefined` \| [`CustomElementConstructor`](annotation_annotation_layer_state._internal_.CustomElementConstructor.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`undefined` \| [`CustomElementConstructor`](annotation_annotation_layer_state._internal_.CustomElementConstructor.md)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3756

___

### upgrade

▸ **upgrade**(`root`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `root` | [`Node`](../modules/annotation_annotation_layer_state._internal_.md#node) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3757

___

### whenDefined

▸ **whenDefined**(`name`): `Promise`<[`CustomElementConstructor`](annotation_annotation_layer_state._internal_.CustomElementConstructor.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`Promise`<[`CustomElementConstructor`](annotation_annotation_layer_state._internal_.CustomElementConstructor.md)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3758
