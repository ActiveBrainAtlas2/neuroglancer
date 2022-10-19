[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / ANGLE\_instanced\_arrays

# Interface: ANGLE\_instanced\_arrays

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).ANGLE_instanced_arrays

The ANGLE_instanced_arrays extension is part of the WebGL API and allows to draw the same object, or groups of similar objects multiple times, if they share the same vertex data, primitive count and type.

## Table of contents

### Properties

- [VERTEX\_ATTRIB\_ARRAY\_DIVISOR\_ANGLE](annotation_annotation_layer_state._internal_.ANGLE_instanced_arrays.md#vertex_attrib_array_divisor_angle)

### Methods

- [drawArraysInstancedANGLE](annotation_annotation_layer_state._internal_.ANGLE_instanced_arrays.md#drawarraysinstancedangle)
- [drawElementsInstancedANGLE](annotation_annotation_layer_state._internal_.ANGLE_instanced_arrays.md#drawelementsinstancedangle)
- [vertexAttribDivisorANGLE](annotation_annotation_layer_state._internal_.ANGLE_instanced_arrays.md#vertexattribdivisorangle)

## Properties

### VERTEX\_ATTRIB\_ARRAY\_DIVISOR\_ANGLE

• `Readonly` **VERTEX\_ATTRIB\_ARRAY\_DIVISOR\_ANGLE**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1920

## Methods

### drawArraysInstancedANGLE

▸ **drawArraysInstancedANGLE**(`mode`, `first`, `count`, `primcount`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | `number` |
| `first` | `number` |
| `count` | `number` |
| `primcount` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1917

___

### drawElementsInstancedANGLE

▸ **drawElementsInstancedANGLE**(`mode`, `count`, `type`, `offset`, `primcount`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | `number` |
| `count` | `number` |
| `type` | `number` |
| `offset` | `number` |
| `primcount` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1918

___

### vertexAttribDivisorANGLE

▸ **vertexAttribDivisorANGLE**(`index`, `divisor`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `divisor` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1919
