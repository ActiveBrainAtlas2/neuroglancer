[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation](../modules/annotation.md) / AnnotationTypeHandler

# Interface: AnnotationTypeHandler<T\>

[annotation](../modules/annotation.md).AnnotationTypeHandler

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Annotation`](../modules/annotation.md#annotation) = [`Annotation`](../modules/annotation.md#annotation) |

## Table of contents

### Properties

- [description](annotation.AnnotationTypeHandler.md#description)
- [icon](annotation.AnnotationTypeHandler.md#icon)

### Methods

- [deserialize](annotation.AnnotationTypeHandler.md#deserialize)
- [restoreState](annotation.AnnotationTypeHandler.md#restorestate)
- [serialize](annotation.AnnotationTypeHandler.md#serialize)
- [serializedBytes](annotation.AnnotationTypeHandler.md#serializedbytes)
- [toJSON](annotation.AnnotationTypeHandler.md#tojson)
- [visitGeometry](annotation.AnnotationTypeHandler.md#visitgeometry)

## Properties

### description

• **description**: `string`

#### Defined in

[src/neuroglancer/annotation/index.ts:526](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L526)

___

### icon

• **icon**: `string`

#### Defined in

[src/neuroglancer/annotation/index.ts:525](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L525)

## Methods

### deserialize

▸ **deserialize**(`buffer`, `offset`, `isLittleEndian`, `rank`, `id`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `DataView` |
| `offset` | `number` |
| `isLittleEndian` | `boolean` |
| `rank` | `number` |
| `id` | `string` |

#### Returns

`T`

#### Defined in

[src/neuroglancer/annotation/index.ts:534](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L534)

___

### restoreState

▸ **restoreState**(`annotation`, `obj`, `rank`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `annotation` | `T` |
| `obj` | `any` |
| `rank` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/index.ts:528](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L528)

___

### serialize

▸ **serialize**(`buffer`, `offset`, `isLittleEndian`, `rank`, `annotation`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `DataView` |
| `offset` | `number` |
| `isLittleEndian` | `boolean` |
| `rank` | `number` |
| `annotation` | `T` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/index.ts:531](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L531)

___

### serializedBytes

▸ **serializedBytes**(`rank`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rank` | `number` |

#### Returns

`number`

#### Defined in

[src/neuroglancer/annotation/index.ts:529](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L529)

___

### toJSON

▸ **toJSON**(`annotation`, `rank`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `annotation` | `T` |
| `rank` | `number` |

#### Returns

`any`

#### Defined in

[src/neuroglancer/annotation/index.ts:527](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L527)

___

### visitGeometry

▸ **visitGeometry**(`annotation`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `annotation` | `T` |
| `callback` | (`vec`: `Float32Array`, `isVector`: `boolean`) => `void` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/index.ts:535](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L535)
