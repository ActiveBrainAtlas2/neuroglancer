[neuroglancer](../README.md) / [Modules](../modules.md) / annotation

# Module: annotation

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

- [AnnotationType](../enums/annotation.AnnotationType.md)

### Classes

- [AnnotationPropertySerializer](../classes/annotation.AnnotationPropertySerializer.md)
- [AnnotationReference](../classes/annotation.AnnotationReference.md)
- [AnnotationSerializer](../classes/annotation.AnnotationSerializer.md)
- [AnnotationSource](../classes/annotation.AnnotationSource.md)
- [LocalAnnotationSource](../classes/annotation.LocalAnnotationSource.md)

### Interfaces

- [AnnotationBase](../interfaces/annotation.AnnotationBase.md)
- [AnnotationColorPropertySpec](../interfaces/annotation.AnnotationColorPropertySpec.md)
- [AnnotationNumericPropertySpec](../interfaces/annotation.AnnotationNumericPropertySpec.md)
- [AnnotationPropertySpecBase](../interfaces/annotation.AnnotationPropertySpecBase.md)
- [AnnotationPropertyTypeHandler](../interfaces/annotation.AnnotationPropertyTypeHandler.md)
- [AnnotationSchema](../interfaces/annotation.AnnotationSchema.md)
- [AnnotationSourceSignals](../interfaces/annotation.AnnotationSourceSignals.md)
- [AnnotationTypeHandler](../interfaces/annotation.AnnotationTypeHandler.md)
- [AxisAlignedBoundingBox](../interfaces/annotation.AxisAlignedBoundingBox.md)
- [Cell](../interfaces/annotation.Cell.md)
- [Collection](../interfaces/annotation.Collection.md)
- [Com](../interfaces/annotation.Com.md)
- [Ellipsoid](../interfaces/annotation.Ellipsoid.md)
- [Line](../interfaces/annotation.Line.md)
- [Point](../interfaces/annotation.Point.md)
- [Polygon](../interfaces/annotation.Polygon.md)
- [SerializedAnnotations](../interfaces/annotation.SerializedAnnotations.md)
- [Volume](../interfaces/annotation.Volume.md)

### Type Aliases

- [Annotation](annotation.md#annotation)
- [AnnotationId](annotation.md#annotationid)
- [AnnotationPropertySpec](annotation.md#annotationpropertyspec)

### Variables

- [DATA\_BOUNDS\_DESCRIPTION](annotation.md#data_bounds_description)
- [annotationPropertyTypeHandlers](annotation.md#annotationpropertytypehandlers)
- [annotationTypeHandlers](annotation.md#annotationtypehandlers)
- [annotationTypes](annotation.md#annotationtypes)

### Functions

- [annotationPropertySpecsToJson](annotation.md#annotationpropertyspecstojson)
- [annotationToJson](annotation.md#annotationtojson)
- [ensureUniqueAnnotationPropertyIds](annotation.md#ensureuniqueannotationpropertyids)
- [fixAnnotationAfterStructuredCloning](annotation.md#fixannotationafterstructuredcloning)
- [formatAnnotationPropertyValue](annotation.md#formatannotationpropertyvalue)
- [formatNumericProperty](annotation.md#formatnumericproperty)
- [getPropertyOffsets](annotation.md#getpropertyoffsets)
- [isChildDummyAnnotation](annotation.md#ischilddummyannotation)
- [isTypeCollection](annotation.md#istypecollection)
- [makeAnnotationId](annotation.md#makeannotationid)
- [makeDataBoundsBoundingBoxAnnotation](annotation.md#makedataboundsboundingboxannotation)
- [makeDataBoundsBoundingBoxAnnotationSet](annotation.md#makedataboundsboundingboxannotationset)
- [parseAnnotationPropertyId](annotation.md#parseannotationpropertyid)
- [parseAnnotationPropertySpecs](annotation.md#parseannotationpropertyspecs)
- [parseAnnotationPropertyType](annotation.md#parseannotationpropertytype)
- [restoreAnnotation](annotation.md#restoreannotation)

## Type Aliases

### Annotation

Ƭ **Annotation**: [`Line`](../interfaces/annotation.Line.md) \| [`Point`](../interfaces/annotation.Point.md) \| [`AxisAlignedBoundingBox`](../interfaces/annotation.AxisAlignedBoundingBox.md) \| [`Ellipsoid`](../interfaces/annotation.Ellipsoid.md) \| [`Polygon`](../interfaces/annotation.Polygon.md) \| [`Volume`](../interfaces/annotation.Volume.md) \| [`Com`](../interfaces/annotation.Com.md) \| [`Cell`](../interfaces/annotation.Cell.md)

#### Defined in

[src/neuroglancer/annotation/index.ts:522](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L522)

___

### AnnotationId

Ƭ **AnnotationId**: `string`

#### Defined in

[src/neuroglancer/annotation/index.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L34)

___

### AnnotationPropertySpec

Ƭ **AnnotationPropertySpec**: [`AnnotationColorPropertySpec`](../interfaces/annotation.AnnotationColorPropertySpec.md) \| [`AnnotationNumericPropertySpec`](../interfaces/annotation.AnnotationNumericPropertySpec.md)

#### Defined in

[src/neuroglancer/annotation/index.ts:92](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L92)

## Variables

### DATA\_BOUNDS\_DESCRIPTION

• `Const` **DATA\_BOUNDS\_DESCRIPTION**: ``"Data Bounds"``

#### Defined in

[src/neuroglancer/annotation/index.ts:1408](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L1408)

___

### annotationPropertyTypeHandlers

• `Const` **annotationPropertyTypeHandlers**: { [K in AnnotationPropertySpec["type"]]: AnnotationPropertyTypeHandler }

#### Defined in

[src/neuroglancer/annotation/index.ts:103](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L103)

___

### annotationTypeHandlers

• `Const` **annotationTypeHandlers**: [`Record`](annotation_annotation_layer_state._internal_.md#record)<[`AnnotationType`](../enums/annotation.AnnotationType.md), [`AnnotationTypeHandler`](../interfaces/annotation.AnnotationTypeHandler.md)\>

#### Defined in

[src/neuroglancer/annotation/index.ts:572](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L572)

___

### annotationTypes

• `Const` **annotationTypes**: [`AnnotationType`](../enums/annotation.AnnotationType.md)[]

#### Defined in

[src/neuroglancer/annotation/index.ts:61](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L61)

## Functions

### annotationPropertySpecsToJson

▸ **annotationPropertySpecsToJson**(`specs`): `undefined` \| { `default`: `any` ; `description`: `undefined` \| `string` = spec.description; `id`: `string` = spec.identifier; `type`: ``"rgb"`` \| ``"rgba"`` \| ``"float32"`` \| ``"uint32"`` \| ``"int32"`` \| ``"uint16"`` \| ``"int16"`` \| ``"uint8"`` \| ``"int8"`` = spec.type }[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `specs` | `undefined` \| [`AnnotationPropertySpec`](annotation.md#annotationpropertyspec)[] |

#### Returns

`undefined` \| { `default`: `any` ; `description`: `undefined` \| `string` = spec.description; `id`: `string` = spec.identifier; `type`: ``"rgb"`` \| ``"rgba"`` \| ``"float32"`` \| ``"uint32"`` \| ``"int32"`` \| ``"uint16"`` \| ``"int16"`` \| ``"uint8"`` \| ``"int8"`` = spec.type }[]

#### Defined in

[src/neuroglancer/annotation/index.ts:446](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L446)

___

### annotationToJson

▸ **annotationToJson**(`annotation`, `schema`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `annotation` | [`Annotation`](annotation.md#annotation) |
| `schema` | [`AnnotationSchema`](../interfaces/annotation.AnnotationSchema.md) |

#### Returns

`any`

#### Defined in

[src/neuroglancer/annotation/index.ts:835](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L835)

___

### ensureUniqueAnnotationPropertyIds

▸ **ensureUniqueAnnotationPropertyIds**(`properties`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `properties` | [`AnnotationPropertySpec`](annotation.md#annotationpropertyspec)[] |

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/index.ts:394](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L394)

___

### fixAnnotationAfterStructuredCloning

▸ **fixAnnotationAfterStructuredCloning**(`obj`): ``null`` \| [`Annotation`](annotation.md#annotation)

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | ``null`` \| [`Annotation`](annotation.md#annotation) |

#### Returns

``null`` \| [`Annotation`](annotation.md#annotation)

#### Defined in

[src/neuroglancer/annotation/index.ts:1489](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L1489)

___

### formatAnnotationPropertyValue

▸ **formatAnnotationPropertyValue**(`property`, `value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `property` | [`AnnotationPropertySpec`](annotation.md#annotationpropertyspec) |
| `value` | `any` |

#### Returns

`string`

#### Defined in

[src/neuroglancer/annotation/index.ts:367](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L367)

___

### formatNumericProperty

▸ **formatNumericProperty**(`property`, `value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `property` | [`AnnotationNumericPropertySpec`](../interfaces/annotation.AnnotationNumericPropertySpec.md) |
| `value` | `number` |

#### Returns

`string`

#### Defined in

[src/neuroglancer/annotation/index.ts:355](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L355)

___

### getPropertyOffsets

▸ **getPropertyOffsets**(`rank`, `propertySpecs`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rank` | `number` |
| `propertySpecs` | readonly [`Readonly`](annotation_annotation_layer_state._internal_.md#readonly)<[`AnnotationPropertySpec`](annotation.md#annotationpropertyspec)\>[] |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `offsets` | `number`[] |
| `serializedBytes` | `number` |

#### Defined in

[src/neuroglancer/annotation/index.ts:297](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L297)

___

### isChildDummyAnnotation

▸ **isChildDummyAnnotation**(`annotation`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `annotation` | [`Annotation`](annotation.md#annotation) |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/annotation/index.ts:293](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L293)

___

### isTypeCollection

▸ **isTypeCollection**(`annotation`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `annotation` | [`Annotation`](annotation.md#annotation) |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/annotation/index.ts:289](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L289)

___

### makeAnnotationId

▸ **makeAnnotationId**(): `string`

#### Returns

`string`

#### Defined in

[src/neuroglancer/annotation/index.ts:1410](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L1410)

___

### makeDataBoundsBoundingBoxAnnotation

▸ **makeDataBoundsBoundingBoxAnnotation**(`box`): [`AxisAlignedBoundingBox`](../interfaces/annotation.AxisAlignedBoundingBox.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `box` | [`BoundingBox`](../interfaces/annotation_annotation_layer_state._internal_.BoundingBox.md) |

#### Returns

[`AxisAlignedBoundingBox`](../interfaces/annotation.AxisAlignedBoundingBox.md)

#### Defined in

[src/neuroglancer/annotation/index.ts:1414](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L1414)

___

### makeDataBoundsBoundingBoxAnnotationSet

▸ **makeDataBoundsBoundingBoxAnnotationSet**(`box`): [`AnnotationSource`](../classes/annotation.AnnotationSource.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `box` | [`BoundingBox`](../interfaces/annotation_annotation_layer_state._internal_.BoundingBox.md) |

#### Returns

[`AnnotationSource`](../classes/annotation.AnnotationSource.md)

#### Defined in

[src/neuroglancer/annotation/index.ts:1425](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L1425)

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

[src/neuroglancer/annotation/index.ts:378](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L378)

___

### parseAnnotationPropertySpecs

▸ **parseAnnotationPropertySpecs**(`obj`): [`AnnotationPropertySpec`](annotation.md#annotationpropertyspec)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `unknown` |

#### Returns

[`AnnotationPropertySpec`](annotation.md#annotationpropertyspec)[]

#### Defined in

[src/neuroglancer/annotation/index.ts:451](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L451)

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

[src/neuroglancer/annotation/index.ts:386](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L386)

___

### restoreAnnotation

▸ **restoreAnnotation**(`obj`, `schema`, `allowMissingId?`): [`Annotation`](annotation.md#annotation)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `obj` | `any` | `undefined` |
| `schema` | [`AnnotationSchema`](../interfaces/annotation.AnnotationSchema.md) | `undefined` |
| `allowMissingId` | `boolean` | `false` |

#### Returns

[`Annotation`](annotation.md#annotation)

#### Defined in

[src/neuroglancer/annotation/index.ts:853](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L853)
