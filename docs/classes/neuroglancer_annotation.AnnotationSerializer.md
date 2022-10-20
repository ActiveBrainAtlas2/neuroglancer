[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/annotation](../modules/neuroglancer_annotation.md) / AnnotationSerializer

# Class: AnnotationSerializer

[neuroglancer/annotation](../modules/neuroglancer_annotation.md).AnnotationSerializer

## Table of contents

### Constructors

- [constructor](neuroglancer_annotation.AnnotationSerializer.md#constructor)

### Properties

- [annotations](neuroglancer_annotation.AnnotationSerializer.md#annotations)
- [propertySerializer](neuroglancer_annotation.AnnotationSerializer.md#propertyserializer)

### Methods

- [add](neuroglancer_annotation.AnnotationSerializer.md#add)
- [serialize](neuroglancer_annotation.AnnotationSerializer.md#serialize)

## Constructors

### constructor

• **new AnnotationSerializer**(`propertySerializer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `propertySerializer` | [`AnnotationPropertySerializer`](neuroglancer_annotation.AnnotationPropertySerializer.md) |

#### Defined in

[src/neuroglancer/annotation/index.ts:1480](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/index.ts#L1480)

## Properties

### annotations

• **annotations**: [[`Point`](../interfaces/neuroglancer_annotation.Point.md)[], [`Line`](../interfaces/neuroglancer_annotation.Line.md)[], [`AxisAlignedBoundingBox`](../interfaces/neuroglancer_annotation.AxisAlignedBoundingBox.md)[], [`Ellipsoid`](../interfaces/neuroglancer_annotation.Ellipsoid.md)[], [`Polygon`](../interfaces/neuroglancer_annotation.Polygon.md)[], [`Volume`](../interfaces/neuroglancer_annotation.Volume.md)[], [`Com`](../interfaces/neuroglancer_annotation.Com.md)[], [`Cell`](../interfaces/neuroglancer_annotation.Cell.md)[]]

#### Defined in

[src/neuroglancer/annotation/index.ts:1479](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/index.ts#L1479)

___

### propertySerializer

• **propertySerializer**: [`AnnotationPropertySerializer`](neuroglancer_annotation.AnnotationPropertySerializer.md)

#### Defined in

[src/neuroglancer/annotation/index.ts:1480](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/index.ts#L1480)

## Methods

### add

▸ **add**(`annotation`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `annotation` | [`Annotation`](../modules/neuroglancer_annotation.md#annotation) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/index.ts:1481](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/index.ts#L1481)

___

### serialize

▸ **serialize**(): [`SerializedAnnotations`](../interfaces/neuroglancer_annotation.SerializedAnnotations.md)

#### Returns

[`SerializedAnnotations`](../interfaces/neuroglancer_annotation.SerializedAnnotations.md)

#### Defined in

[src/neuroglancer/annotation/index.ts:1484](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/index.ts#L1484)
