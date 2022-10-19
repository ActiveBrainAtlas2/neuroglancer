[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/annotation/backend](../modules/neuroglancer_annotation_backend.md) / AnnotationGeometryData

# Class: AnnotationGeometryData

[neuroglancer/annotation/backend](../modules/neuroglancer_annotation_backend.md).AnnotationGeometryData

## Implements

- [`SerializedAnnotations`](../interfaces/neuroglancer_annotation.SerializedAnnotations.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_annotation_backend.AnnotationGeometryData.md#constructor)

### Properties

- [data](neuroglancer_annotation_backend.AnnotationGeometryData.md#data)
- [typeToIdMaps](neuroglancer_annotation_backend.AnnotationGeometryData.md#typetoidmaps)
- [typeToIds](neuroglancer_annotation_backend.AnnotationGeometryData.md#typetoids)
- [typeToOffset](neuroglancer_annotation_backend.AnnotationGeometryData.md#typetooffset)

### Accessors

- [numBytes](neuroglancer_annotation_backend.AnnotationGeometryData.md#numbytes)

### Methods

- [serialize](neuroglancer_annotation_backend.AnnotationGeometryData.md#serialize)

## Constructors

### constructor

• **new AnnotationGeometryData**()

## Properties

### data

• **data**: `Uint8Array`

#### Implementation of

[SerializedAnnotations](../interfaces/neuroglancer_annotation.SerializedAnnotations.md).[data](../interfaces/neuroglancer_annotation.SerializedAnnotations.md#data)

#### Defined in

[src/neuroglancer/annotation/backend.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/backend.ts#L54)

___

### typeToIdMaps

• **typeToIdMaps**: `Map`<`string`, `number`\>[]

#### Implementation of

[SerializedAnnotations](../interfaces/neuroglancer_annotation.SerializedAnnotations.md).[typeToIdMaps](../interfaces/neuroglancer_annotation.SerializedAnnotations.md#typetoidmaps)

#### Defined in

[src/neuroglancer/annotation/backend.ts:57](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/backend.ts#L57)

___

### typeToIds

• **typeToIds**: `string`[][]

#### Implementation of

[SerializedAnnotations](../interfaces/neuroglancer_annotation.SerializedAnnotations.md).[typeToIds](../interfaces/neuroglancer_annotation.SerializedAnnotations.md#typetoids)

#### Defined in

[src/neuroglancer/annotation/backend.ts:56](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/backend.ts#L56)

___

### typeToOffset

• **typeToOffset**: `number`[]

#### Implementation of

[SerializedAnnotations](../interfaces/neuroglancer_annotation.SerializedAnnotations.md).[typeToOffset](../interfaces/neuroglancer_annotation.SerializedAnnotations.md#typetooffset)

#### Defined in

[src/neuroglancer/annotation/backend.ts:55](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/backend.ts#L55)

## Accessors

### numBytes

• `get` **numBytes**(): `number`

#### Returns

`number`

#### Defined in

[src/neuroglancer/annotation/backend.ts:67](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/backend.ts#L67)

## Methods

### serialize

▸ **serialize**(`msg`, `transfers`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `any` |
| `transfers` | `any`[] |

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/backend.ts:59](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/backend.ts#L59)
