[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation](../modules/annotation.md) / AnnotationSerializer

# Class: AnnotationSerializer

[annotation](../modules/annotation.md).AnnotationSerializer

## Table of contents

### Constructors

- [constructor](annotation.AnnotationSerializer.md#constructor)

### Properties

- [annotations](annotation.AnnotationSerializer.md#annotations)
- [propertySerializer](annotation.AnnotationSerializer.md#propertyserializer)

### Methods

- [add](annotation.AnnotationSerializer.md#add)
- [serialize](annotation.AnnotationSerializer.md#serialize)

## Constructors

### constructor

• **new AnnotationSerializer**(`propertySerializer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `propertySerializer` | [`AnnotationPropertySerializer`](annotation.AnnotationPropertySerializer.md) |

#### Defined in

[src/neuroglancer/annotation/index.ts:1480](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L1480)

## Properties

### annotations

• **annotations**: [[`Point`](../interfaces/annotation.Point.md)[], [`Line`](../interfaces/annotation.Line.md)[], [`AxisAlignedBoundingBox`](../interfaces/annotation.AxisAlignedBoundingBox.md)[], [`Ellipsoid`](../interfaces/annotation.Ellipsoid.md)[], [`Polygon`](../interfaces/annotation.Polygon.md)[], [`Volume`](../interfaces/annotation.Volume.md)[], [`Com`](../interfaces/annotation.Com.md)[], [`Cell`](../interfaces/annotation.Cell.md)[]]

#### Defined in

[src/neuroglancer/annotation/index.ts:1479](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L1479)

___

### propertySerializer

• **propertySerializer**: [`AnnotationPropertySerializer`](annotation.AnnotationPropertySerializer.md)

## Methods

### add

▸ **add**(`annotation`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `annotation` | [`Annotation`](../modules/annotation.md#annotation) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/index.ts:1481](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L1481)

___

### serialize

▸ **serialize**(): [`SerializedAnnotations`](../interfaces/annotation.SerializedAnnotations.md)

#### Returns

[`SerializedAnnotations`](../interfaces/annotation.SerializedAnnotations.md)

#### Defined in

[src/neuroglancer/annotation/index.ts:1484](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L1484)
