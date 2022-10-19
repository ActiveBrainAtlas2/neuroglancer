[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/annotation](../modules/neuroglancer_annotation.md) / AnnotationTypeHandler

# Interface: AnnotationTypeHandler<T\>

[neuroglancer/annotation](../modules/neuroglancer_annotation.md).AnnotationTypeHandler

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Annotation`](../modules/neuroglancer_annotation.md#annotation) = [`Annotation`](../modules/neuroglancer_annotation.md#annotation) |

## Table of contents

### Properties

- [description](neuroglancer_annotation.AnnotationTypeHandler.md#description)
- [icon](neuroglancer_annotation.AnnotationTypeHandler.md#icon)

### Methods

- [deserialize](neuroglancer_annotation.AnnotationTypeHandler.md#deserialize)
- [restoreState](neuroglancer_annotation.AnnotationTypeHandler.md#restorestate)
- [serialize](neuroglancer_annotation.AnnotationTypeHandler.md#serialize)
- [serializedBytes](neuroglancer_annotation.AnnotationTypeHandler.md#serializedbytes)
- [toJSON](neuroglancer_annotation.AnnotationTypeHandler.md#tojson)
- [visitGeometry](neuroglancer_annotation.AnnotationTypeHandler.md#visitgeometry)

## Properties

### description

• **description**: `string`

#### Defined in

[src/neuroglancer/annotation/index.ts:526](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L526)

___

### icon

• **icon**: `string`

#### Defined in

[src/neuroglancer/annotation/index.ts:525](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L525)

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

[src/neuroglancer/annotation/index.ts:534](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L534)

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

[src/neuroglancer/annotation/index.ts:528](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L528)

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

[src/neuroglancer/annotation/index.ts:531](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L531)

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

[src/neuroglancer/annotation/index.ts:529](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L529)

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

[src/neuroglancer/annotation/index.ts:527](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L527)

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

[src/neuroglancer/annotation/index.ts:535](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L535)
