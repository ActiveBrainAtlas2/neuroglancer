[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/annotation

# Module: neuroglancer/annotation

**`license`**
Copyright 2018 Google Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

## Table of contents

### Enumerations

- [AnnotationType](../enums/neuroglancer_annotation.AnnotationType.md)

### Classes

- [AnnotationPropertySerializer](../classes/neuroglancer_annotation.AnnotationPropertySerializer.md)
- [AnnotationReference](../classes/neuroglancer_annotation.AnnotationReference.md)
- [AnnotationSerializer](../classes/neuroglancer_annotation.AnnotationSerializer.md)
- [AnnotationSource](../classes/neuroglancer_annotation.AnnotationSource.md)
- [LocalAnnotationSource](../classes/neuroglancer_annotation.LocalAnnotationSource.md)

### Interfaces

- [AnnotationBase](../interfaces/neuroglancer_annotation.AnnotationBase.md)
- [AnnotationColorPropertySpec](../interfaces/neuroglancer_annotation.AnnotationColorPropertySpec.md)
- [AnnotationNumericPropertySpec](../interfaces/neuroglancer_annotation.AnnotationNumericPropertySpec.md)
- [AnnotationPropertySpecBase](../interfaces/neuroglancer_annotation.AnnotationPropertySpecBase.md)
- [AnnotationPropertyTypeHandler](../interfaces/neuroglancer_annotation.AnnotationPropertyTypeHandler.md)
- [AnnotationSchema](../interfaces/neuroglancer_annotation.AnnotationSchema.md)
- [AnnotationSourceSignals](../interfaces/neuroglancer_annotation.AnnotationSourceSignals.md)
- [AnnotationTypeHandler](../interfaces/neuroglancer_annotation.AnnotationTypeHandler.md)
- [AxisAlignedBoundingBox](../interfaces/neuroglancer_annotation.AxisAlignedBoundingBox.md)
- [Cell](../interfaces/neuroglancer_annotation.Cell.md)
- [Collection](../interfaces/neuroglancer_annotation.Collection.md)
- [Com](../interfaces/neuroglancer_annotation.Com.md)
- [Ellipsoid](../interfaces/neuroglancer_annotation.Ellipsoid.md)
- [Line](../interfaces/neuroglancer_annotation.Line.md)
- [Point](../interfaces/neuroglancer_annotation.Point.md)
- [Polygon](../interfaces/neuroglancer_annotation.Polygon.md)
- [SerializedAnnotations](../interfaces/neuroglancer_annotation.SerializedAnnotations.md)
- [Volume](../interfaces/neuroglancer_annotation.Volume.md)

### Type Aliases

- [Annotation](neuroglancer_annotation.md#annotation)
- [AnnotationId](neuroglancer_annotation.md#annotationid)
- [AnnotationPropertySpec](neuroglancer_annotation.md#annotationpropertyspec)

### Variables

- [DATA\_BOUNDS\_DESCRIPTION](neuroglancer_annotation.md#data_bounds_description)
- [annotationPropertyTypeHandlers](neuroglancer_annotation.md#annotationpropertytypehandlers)
- [annotationTypeHandlers](neuroglancer_annotation.md#annotationtypehandlers)
- [annotationTypes](neuroglancer_annotation.md#annotationtypes)

### Functions

- [annotationPropertySpecsToJson](neuroglancer_annotation.md#annotationpropertyspecstojson)
- [annotationToJson](neuroglancer_annotation.md#annotationtojson)
- [ensureUniqueAnnotationPropertyIds](neuroglancer_annotation.md#ensureuniqueannotationpropertyids)
- [fixAnnotationAfterStructuredCloning](neuroglancer_annotation.md#fixannotationafterstructuredcloning)
- [formatAnnotationPropertyValue](neuroglancer_annotation.md#formatannotationpropertyvalue)
- [formatNumericProperty](neuroglancer_annotation.md#formatnumericproperty)
- [getPropertyOffsets](neuroglancer_annotation.md#getpropertyoffsets)
- [isChildDummyAnnotation](neuroglancer_annotation.md#ischilddummyannotation)
- [isTypeCollection](neuroglancer_annotation.md#istypecollection)
- [makeAnnotationId](neuroglancer_annotation.md#makeannotationid)
- [makeDataBoundsBoundingBoxAnnotation](neuroglancer_annotation.md#makedataboundsboundingboxannotation)
- [makeDataBoundsBoundingBoxAnnotationSet](neuroglancer_annotation.md#makedataboundsboundingboxannotationset)
- [parseAnnotationPropertyId](neuroglancer_annotation.md#parseannotationpropertyid)
- [parseAnnotationPropertySpecs](neuroglancer_annotation.md#parseannotationpropertyspecs)
- [parseAnnotationPropertyType](neuroglancer_annotation.md#parseannotationpropertytype)
- [restoreAnnotation](neuroglancer_annotation.md#restoreannotation)

## Type Aliases

### Annotation

Ƭ **Annotation**: [`Line`](../interfaces/neuroglancer_annotation.Line.md) \| [`Point`](../interfaces/neuroglancer_annotation.Point.md) \| [`AxisAlignedBoundingBox`](../interfaces/neuroglancer_annotation.AxisAlignedBoundingBox.md) \| [`Ellipsoid`](../interfaces/neuroglancer_annotation.Ellipsoid.md) \| [`Polygon`](../interfaces/neuroglancer_annotation.Polygon.md) \| [`Volume`](../interfaces/neuroglancer_annotation.Volume.md) \| [`Com`](../interfaces/neuroglancer_annotation.Com.md) \| [`Cell`](../interfaces/neuroglancer_annotation.Cell.md)

#### Defined in

[src/neuroglancer/annotation/index.ts:522](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L522)

___

### AnnotationId

Ƭ **AnnotationId**: `string`

#### Defined in

[src/neuroglancer/annotation/index.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L34)

___

### AnnotationPropertySpec

Ƭ **AnnotationPropertySpec**: [`AnnotationColorPropertySpec`](../interfaces/neuroglancer_annotation.AnnotationColorPropertySpec.md) \| [`AnnotationNumericPropertySpec`](../interfaces/neuroglancer_annotation.AnnotationNumericPropertySpec.md)

#### Defined in

[src/neuroglancer/annotation/index.ts:92](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L92)

## Variables

### DATA\_BOUNDS\_DESCRIPTION

• `Const` **DATA\_BOUNDS\_DESCRIPTION**: ``"Data Bounds"``

#### Defined in

[src/neuroglancer/annotation/index.ts:1408](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L1408)

___

### annotationPropertyTypeHandlers

• `Const` **annotationPropertyTypeHandlers**: { [K in AnnotationPropertySpec["type"]]: AnnotationPropertyTypeHandler }

#### Defined in

[src/neuroglancer/annotation/index.ts:103](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L103)

___

### annotationTypeHandlers

• `Const` **annotationTypeHandlers**: [`Record`](main_module._internal_.md#record)<[`AnnotationType`](../enums/neuroglancer_annotation.AnnotationType.md), [`AnnotationTypeHandler`](../interfaces/neuroglancer_annotation.AnnotationTypeHandler.md)\>

#### Defined in

[src/neuroglancer/annotation/index.ts:572](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L572)

___

### annotationTypes

• `Const` **annotationTypes**: [`AnnotationType`](../enums/neuroglancer_annotation.AnnotationType.md)[]

#### Defined in

[src/neuroglancer/annotation/index.ts:61](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L61)

## Functions

### annotationPropertySpecsToJson

▸ **annotationPropertySpecsToJson**(`specs`): `undefined` \| { `default`: `any` ; `description`: `undefined` \| `string` = spec.description; `id`: `string` = spec.identifier; `type`: ``"rgb"`` \| ``"rgba"`` \| ``"float32"`` \| ``"uint32"`` \| ``"int32"`` \| ``"uint16"`` \| ``"int16"`` \| ``"uint8"`` \| ``"int8"`` = spec.type }[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `specs` | `undefined` \| [`AnnotationPropertySpec`](neuroglancer_annotation.md#annotationpropertyspec)[] |

#### Returns

`undefined` \| { `default`: `any` ; `description`: `undefined` \| `string` = spec.description; `id`: `string` = spec.identifier; `type`: ``"rgb"`` \| ``"rgba"`` \| ``"float32"`` \| ``"uint32"`` \| ``"int32"`` \| ``"uint16"`` \| ``"int16"`` \| ``"uint8"`` \| ``"int8"`` = spec.type }[]

#### Defined in

[src/neuroglancer/annotation/index.ts:446](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L446)

___

### annotationToJson

▸ **annotationToJson**(`annotation`, `schema`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `annotation` | [`Annotation`](neuroglancer_annotation.md#annotation) |
| `schema` | [`AnnotationSchema`](../interfaces/neuroglancer_annotation.AnnotationSchema.md) |

#### Returns

`any`

#### Defined in

[src/neuroglancer/annotation/index.ts:835](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L835)

___

### ensureUniqueAnnotationPropertyIds

▸ **ensureUniqueAnnotationPropertyIds**(`properties`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `properties` | [`AnnotationPropertySpec`](neuroglancer_annotation.md#annotationpropertyspec)[] |

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/index.ts:394](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L394)

___

### fixAnnotationAfterStructuredCloning

▸ **fixAnnotationAfterStructuredCloning**(`obj`): ``null`` \| [`Annotation`](neuroglancer_annotation.md#annotation)

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | ``null`` \| [`Annotation`](neuroglancer_annotation.md#annotation) |

#### Returns

``null`` \| [`Annotation`](neuroglancer_annotation.md#annotation)

#### Defined in

[src/neuroglancer/annotation/index.ts:1489](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L1489)

___

### formatAnnotationPropertyValue

▸ **formatAnnotationPropertyValue**(`property`, `value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `property` | [`AnnotationPropertySpec`](neuroglancer_annotation.md#annotationpropertyspec) |
| `value` | `any` |

#### Returns

`string`

#### Defined in

[src/neuroglancer/annotation/index.ts:367](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L367)

___

### formatNumericProperty

▸ **formatNumericProperty**(`property`, `value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `property` | [`AnnotationNumericPropertySpec`](../interfaces/neuroglancer_annotation.AnnotationNumericPropertySpec.md) |
| `value` | `number` |

#### Returns

`string`

#### Defined in

[src/neuroglancer/annotation/index.ts:355](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L355)

___

### getPropertyOffsets

▸ **getPropertyOffsets**(`rank`, `propertySpecs`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rank` | `number` |
| `propertySpecs` | readonly [`Readonly`](neuroglancer_annotation_frontend_source._internal_.md#readonly)<[`AnnotationPropertySpec`](neuroglancer_annotation.md#annotationpropertyspec)\>[] |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `offsets` | `number`[] |
| `serializedBytes` | `number` |

#### Defined in

[src/neuroglancer/annotation/index.ts:297](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L297)

___

### isChildDummyAnnotation

▸ **isChildDummyAnnotation**(`annotation`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `annotation` | [`Annotation`](neuroglancer_annotation.md#annotation) |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/annotation/index.ts:293](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L293)

___

### isTypeCollection

▸ **isTypeCollection**(`annotation`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `annotation` | [`Annotation`](neuroglancer_annotation.md#annotation) |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/annotation/index.ts:289](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L289)

___

### makeAnnotationId

▸ **makeAnnotationId**(): `string`

#### Returns

`string`

#### Defined in

[src/neuroglancer/annotation/index.ts:1410](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L1410)

___

### makeDataBoundsBoundingBoxAnnotation

▸ **makeDataBoundsBoundingBoxAnnotation**(`box`): [`AxisAlignedBoundingBox`](../interfaces/neuroglancer_annotation.AxisAlignedBoundingBox.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `box` | [`BoundingBox`](../interfaces/neuroglancer_coordinate_transform.BoundingBox.md) |

#### Returns

[`AxisAlignedBoundingBox`](../interfaces/neuroglancer_annotation.AxisAlignedBoundingBox.md)

#### Defined in

[src/neuroglancer/annotation/index.ts:1414](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L1414)

___

### makeDataBoundsBoundingBoxAnnotationSet

▸ **makeDataBoundsBoundingBoxAnnotationSet**(`box`): [`AnnotationSource`](../classes/neuroglancer_annotation.AnnotationSource.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `box` | [`BoundingBox`](../interfaces/neuroglancer_coordinate_transform.BoundingBox.md) |

#### Returns

[`AnnotationSource`](../classes/neuroglancer_annotation.AnnotationSource.md)

#### Defined in

[src/neuroglancer/annotation/index.ts:1425](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L1425)

___

### parseAnnotationPropertyId

▸ **parseAnnotationPropertyId**(`obj`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `unknown` |

#### Returns

`string`

#### Defined in

[src/neuroglancer/annotation/index.ts:378](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L378)

___

### parseAnnotationPropertySpecs

▸ **parseAnnotationPropertySpecs**(`obj`): [`AnnotationPropertySpec`](neuroglancer_annotation.md#annotationpropertyspec)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `unknown` |

#### Returns

[`AnnotationPropertySpec`](neuroglancer_annotation.md#annotationpropertyspec)[]

#### Defined in

[src/neuroglancer/annotation/index.ts:451](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L451)

___

### parseAnnotationPropertyType

▸ **parseAnnotationPropertyType**(`obj`): ``"rgb"`` \| ``"rgba"`` \| ``"float32"`` \| ``"uint32"`` \| ``"int32"`` \| ``"uint16"`` \| ``"int16"`` \| ``"uint8"`` \| ``"int8"``

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `unknown` |

#### Returns

``"rgb"`` \| ``"rgba"`` \| ``"float32"`` \| ``"uint32"`` \| ``"int32"`` \| ``"uint16"`` \| ``"int16"`` \| ``"uint8"`` \| ``"int8"``

#### Defined in

[src/neuroglancer/annotation/index.ts:386](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L386)

___

### restoreAnnotation

▸ **restoreAnnotation**(`obj`, `schema`, `allowMissingId?`): [`Annotation`](neuroglancer_annotation.md#annotation)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `obj` | `any` | `undefined` |
| `schema` | [`AnnotationSchema`](../interfaces/neuroglancer_annotation.AnnotationSchema.md) | `undefined` |
| `allowMissingId` | `boolean` | `false` |

#### Returns

[`Annotation`](neuroglancer_annotation.md#annotation)

#### Defined in

[src/neuroglancer/annotation/index.ts:853](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L853)
