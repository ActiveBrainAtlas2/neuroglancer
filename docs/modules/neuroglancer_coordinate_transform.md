[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/coordinate\_transform

# Module: neuroglancer/coordinate\_transform

## Table of contents

### Modules

- [&lt;internal\&gt;](neuroglancer_coordinate_transform._internal_.md)

### Classes

- [CoordinateSpaceCombiner](../classes/neuroglancer_coordinate_transform.CoordinateSpaceCombiner.md)
- [TrackableCoordinateSpace](../classes/neuroglancer_coordinate_transform.TrackableCoordinateSpace.md)
- [WatchableCoordinateSpaceTransform](../classes/neuroglancer_coordinate_transform.WatchableCoordinateSpaceTransform.md)

### Interfaces

- [BoundingBox](../interfaces/neuroglancer_coordinate_transform.BoundingBox.md)
- [CoordinateArray](../interfaces/neuroglancer_coordinate_transform.CoordinateArray.md)
- [CoordinateSpace](../interfaces/neuroglancer_coordinate_transform.CoordinateSpace.md)
- [CoordinateSpaceTransform](../interfaces/neuroglancer_coordinate_transform.CoordinateSpaceTransform.md)
- [CoordinateTransformSpecification](../interfaces/neuroglancer_coordinate_transform.CoordinateTransformSpecification.md)
- [TransformedBoundingBox](../interfaces/neuroglancer_coordinate_transform.TransformedBoundingBox.md)

### Type Aliases

- [DimensionId](neuroglancer_coordinate_transform.md#dimensionid)

### Variables

- [emptyInvalidCoordinateSpace](neuroglancer_coordinate_transform.md#emptyinvalidcoordinatespace)
- [emptyValidCoordinateSpace](neuroglancer_coordinate_transform.md#emptyvalidcoordinatespace)

### Functions

- [boundingBoxesEqual](neuroglancer_coordinate_transform.md#boundingboxesequal)
- [computeCombinedBounds](neuroglancer_coordinate_transform.md#computecombinedbounds)
- [computeCombinedLowerUpperBound](neuroglancer_coordinate_transform.md#computecombinedlowerupperbound)
- [convertTransformOutputScales](neuroglancer_coordinate_transform.md#converttransformoutputscales)
- [coordinateArraysEqual](neuroglancer_coordinate_transform.md#coordinatearraysequal)
- [coordinateSpaceFromJson](neuroglancer_coordinate_transform.md#coordinatespacefromjson)
- [coordinateSpaceToJson](neuroglancer_coordinate_transform.md#coordinatespacetojson)
- [coordinateSpaceTransformsEquivalent](neuroglancer_coordinate_transform.md#coordinatespacetransformsequivalent)
- [coordinateSpacesEqual](neuroglancer_coordinate_transform.md#coordinatespacesequal)
- [coordinateTransformSpecificationFromJson](neuroglancer_coordinate_transform.md#coordinatetransformspecificationfromjson)
- [coordinateTransformSpecificationFromLegacyJson](neuroglancer_coordinate_transform.md#coordinatetransformspecificationfromlegacyjson)
- [coordinateTransformSpecificationToJson](neuroglancer_coordinate_transform.md#coordinatetransformspecificationtojson)
- [dimensionNamesFromJson](neuroglancer_coordinate_transform.md#dimensionnamesfromjson)
- [expectDimensionName](neuroglancer_coordinate_transform.md#expectdimensionname)
- [extendTransformedBoundingBox](neuroglancer_coordinate_transform.md#extendtransformedboundingbox)
- [extendTransformedBoundingBoxUpToRank](neuroglancer_coordinate_transform.md#extendtransformedboundingboxuptorank)
- [getBoundingBoxCenter](neuroglancer_coordinate_transform.md#getboundingboxcenter)
- [getCenterBound](neuroglancer_coordinate_transform.md#getcenterbound)
- [getDefaultInputScale](neuroglancer_coordinate_transform.md#getdefaultinputscale)
- [getDimensionNameValidity](neuroglancer_coordinate_transform.md#getdimensionnamevalidity)
- [getInferredOutputScale](neuroglancer_coordinate_transform.md#getinferredoutputscale)
- [getOutputSpaceWithTransformedBoundingBoxes](neuroglancer_coordinate_transform.md#getoutputspacewithtransformedboundingboxes)
- [homogeneousTransformSubmatrix](neuroglancer_coordinate_transform.md#homogeneoustransformsubmatrix)
- [insertDimensionAt](neuroglancer_coordinate_transform.md#insertdimensionat)
- [isChannelDimension](neuroglancer_coordinate_transform.md#ischanneldimension)
- [isGlobalDimension](neuroglancer_coordinate_transform.md#isglobaldimension)
- [isLocalDimension](neuroglancer_coordinate_transform.md#islocaldimension)
- [isLocalOrChannelDimension](neuroglancer_coordinate_transform.md#islocalorchanneldimension)
- [isValidDimensionName](neuroglancer_coordinate_transform.md#isvaliddimensionname)
- [makeCoordinateSpace](neuroglancer_coordinate_transform.md#makecoordinatespace)
- [makeDimensionNameUnique](neuroglancer_coordinate_transform.md#makedimensionnameunique)
- [makeIdentityTransform](neuroglancer_coordinate_transform.md#makeidentitytransform)
- [makeIdentityTransformedBoundingBox](neuroglancer_coordinate_transform.md#makeidentitytransformedboundingbox)
- [makeSingletonDimTransformedBoundingBox](neuroglancer_coordinate_transform.md#makesingletondimtransformedboundingbox)
- [mergeCoordinateArrays](neuroglancer_coordinate_transform.md#mergecoordinatearrays)
- [mergeOptionalCoordinateArrays](neuroglancer_coordinate_transform.md#mergeoptionalcoordinatearrays)
- [newDimensionId](neuroglancer_coordinate_transform.md#newdimensionid)
- [normalizeCoordinateArray](neuroglancer_coordinate_transform.md#normalizecoordinatearray)
- [permuteCoordinateSpace](neuroglancer_coordinate_transform.md#permutecoordinatespace)
- [permuteTransformedBoundingBox](neuroglancer_coordinate_transform.md#permutetransformedboundingbox)
- [remapTransformInputSpace](neuroglancer_coordinate_transform.md#remaptransforminputspace)
- [transformedBoundingBoxesEqual](neuroglancer_coordinate_transform.md#transformedboundingboxesequal)
- [unitsFromJson](neuroglancer_coordinate_transform.md#unitsfromjson)
- [validateDimensionNames](neuroglancer_coordinate_transform.md#validatedimensionnames)

## Type Aliases

### DimensionId

Ƭ **DimensionId**: `number`

#### Defined in

[src/neuroglancer/coordinate_transform.ts:27](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/coordinate_transform.ts#L27)

## Variables

### emptyInvalidCoordinateSpace

• `Const` **emptyInvalidCoordinateSpace**: [`CoordinateSpace`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpace.md)

#### Defined in

[src/neuroglancer/coordinate_transform.ts:189](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/coordinate_transform.ts#L189)

___

### emptyValidCoordinateSpace

• `Const` **emptyValidCoordinateSpace**: [`CoordinateSpace`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpace.md)

#### Defined in

[src/neuroglancer/coordinate_transform.ts:197](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/coordinate_transform.ts#L197)

## Functions

### boundingBoxesEqual

▸ **boundingBoxesEqual**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`BoundingBox`](../interfaces/neuroglancer_coordinate_transform.BoundingBox.md) |
| `b` | [`BoundingBox`](../interfaces/neuroglancer_coordinate_transform.BoundingBox.md) |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/coordinate_transform.ts:84](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/coordinate_transform.ts#L84)

___

### computeCombinedBounds

▸ **computeCombinedBounds**(`boundingBoxes`, `outputRank`): [`BoundingBox`](../interfaces/neuroglancer_coordinate_transform.BoundingBox.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `boundingBoxes` | readonly [`TransformedBoundingBox`](../interfaces/neuroglancer_coordinate_transform.TransformedBoundingBox.md)[] |
| `outputRank` | `number` |

#### Returns

[`BoundingBox`](../interfaces/neuroglancer_coordinate_transform.BoundingBox.md)

#### Defined in

[src/neuroglancer/coordinate_transform.ts:345](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/coordinate_transform.ts#L345)

___

### computeCombinedLowerUpperBound

▸ **computeCombinedLowerUpperBound**(`boundingBox`, `outputDimension`, `outputRank`): { `lower`: `number` ; `upper`: `number`  } \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `boundingBox` | [`TransformedBoundingBox`](../interfaces/neuroglancer_coordinate_transform.TransformedBoundingBox.md) |
| `outputDimension` | `number` |
| `outputRank` | `number` |

#### Returns

{ `lower`: `number` ; `upper`: `number`  } \| `undefined`

#### Defined in

[src/neuroglancer/coordinate_transform.ts:320](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/coordinate_transform.ts#L320)

___

### convertTransformOutputScales

▸ **convertTransformOutputScales**(`existingTransform`, `existingOutputScales`, `newOutputScales`): `Float64Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `existingTransform` | `Float64Array` |
| `existingOutputScales` | `Float64Array` |
| `newOutputScales` | `Float64Array` |

#### Returns

`Float64Array`

#### Defined in

[src/neuroglancer/coordinate_transform.ts:573](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/coordinate_transform.ts#L573)

___

### coordinateArraysEqual

▸ **coordinateArraysEqual**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `undefined` \| [`CoordinateArray`](../interfaces/neuroglancer_coordinate_transform.CoordinateArray.md) |
| `b` | `undefined` \| [`CoordinateArray`](../interfaces/neuroglancer_coordinate_transform.CoordinateArray.md) |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/coordinate_transform.ts:88](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/coordinate_transform.ts#L88)

___

### coordinateSpaceFromJson

▸ **coordinateSpaceFromJson**(`obj`, `allowNumericalDimensions?`): [`CoordinateSpace`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpace.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `obj` | `any` | `undefined` |
| `allowNumericalDimensions` | `boolean` | `false` |

#### Returns

[`CoordinateSpace`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpace.md)

#### Defined in

[src/neuroglancer/coordinate_transform.ts:214](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/coordinate_transform.ts#L214)

___

### coordinateSpaceToJson

▸ **coordinateSpaceToJson**(`coordinateSpace`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `coordinateSpace` | [`CoordinateSpace`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpace.md) |

#### Returns

`any`

#### Defined in

[src/neuroglancer/coordinate_transform.ts:250](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/coordinate_transform.ts#L250)

___

### coordinateSpaceTransformsEquivalent

▸ **coordinateSpaceTransformsEquivalent**(`defaultTransform`, `transform`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaultTransform` | [`CoordinateSpaceTransform`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpaceTransform.md) |
| `transform` | [`CoordinateSpaceTransform`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpaceTransform.md) |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/coordinate_transform.ts:434](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/coordinate_transform.ts#L434)

___

### coordinateSpacesEqual

▸ **coordinateSpacesEqual**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`CoordinateSpace`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpace.md) |
| `b` | [`CoordinateSpace`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpace.md) |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/coordinate_transform.ts:136](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/coordinate_transform.ts#L136)

___

### coordinateTransformSpecificationFromJson

▸ **coordinateTransformSpecificationFromJson**(`j`): [`CoordinateTransformSpecification`](../interfaces/neuroglancer_coordinate_transform.CoordinateTransformSpecification.md) \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `j` | `unknown` |

#### Returns

[`CoordinateTransformSpecification`](../interfaces/neuroglancer_coordinate_transform.CoordinateTransformSpecification.md) \| `undefined`

#### Defined in

[src/neuroglancer/coordinate_transform.ts:1431](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/coordinate_transform.ts#L1431)

___

### coordinateTransformSpecificationFromLegacyJson

▸ **coordinateTransformSpecificationFromLegacyJson**(`obj`): [`CoordinateTransformSpecification`](../interfaces/neuroglancer_coordinate_transform.CoordinateTransformSpecification.md) \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `unknown` |

#### Returns

[`CoordinateTransformSpecification`](../interfaces/neuroglancer_coordinate_transform.CoordinateTransformSpecification.md) \| `undefined`

#### Defined in

[src/neuroglancer/coordinate_transform.ts:1379](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/coordinate_transform.ts#L1379)

___

### coordinateTransformSpecificationToJson

▸ **coordinateTransformSpecificationToJson**(`spec`): `undefined` \| { `inputDimensions`: `any` ; `matrix`: `undefined` \| `number`[][] = m; `outputDimensions`: `any` ; `sourceRank`: `undefined` \| `number`  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `spec` | `undefined` \| [`CoordinateTransformSpecification`](../interfaces/neuroglancer_coordinate_transform.CoordinateTransformSpecification.md) |

#### Returns

`undefined` \| { `inputDimensions`: `any` ; `matrix`: `undefined` \| `number`[][] = m; `outputDimensions`: `any` ; `sourceRank`: `undefined` \| `number`  }

#### Defined in

[src/neuroglancer/coordinate_transform.ts:1471](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/coordinate_transform.ts#L1471)

___

### dimensionNamesFromJson

▸ **dimensionNamesFromJson**(`obj`, `allowNumericalNames?`): `string`[]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `obj` | `any` | `undefined` |
| `allowNumericalNames` | `boolean` | `false` |

#### Returns

`string`[]

#### Defined in

[src/neuroglancer/coordinate_transform.ts:1065](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/coordinate_transform.ts#L1065)

___

### expectDimensionName

▸ **expectDimensionName**(`obj`, `allowNumericalNames?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `obj` | `unknown` | `undefined` |
| `allowNumericalNames` | `boolean` | `false` |

#### Returns

`string`

#### Defined in

[src/neuroglancer/coordinate_transform.ts:1057](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/coordinate_transform.ts#L1057)

___

### extendTransformedBoundingBox

▸ **extendTransformedBoundingBox**(`boundingBox`, `newOutputRank`, `newOutputDims`): [`TransformedBoundingBox`](../interfaces/neuroglancer_coordinate_transform.TransformedBoundingBox.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `boundingBox` | [`TransformedBoundingBox`](../interfaces/neuroglancer_coordinate_transform.TransformedBoundingBox.md) |
| `newOutputRank` | `number` |
| `newOutputDims` | readonly `number`[] |

#### Returns

[`TransformedBoundingBox`](../interfaces/neuroglancer_coordinate_transform.TransformedBoundingBox.md)

#### Defined in

[src/neuroglancer/coordinate_transform.ts:367](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/coordinate_transform.ts#L367)

___

### extendTransformedBoundingBoxUpToRank

▸ **extendTransformedBoundingBoxUpToRank**(`boundingBox`, `oldOutputRank`, `newOutputRank`): [`TransformedBoundingBox`](../interfaces/neuroglancer_coordinate_transform.TransformedBoundingBox.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `boundingBox` | [`TransformedBoundingBox`](../interfaces/neuroglancer_coordinate_transform.TransformedBoundingBox.md) |
| `oldOutputRank` | `number` |
| `newOutputRank` | `number` |

#### Returns

[`TransformedBoundingBox`](../interfaces/neuroglancer_coordinate_transform.TransformedBoundingBox.md)

#### Defined in

[src/neuroglancer/coordinate_transform.ts:395](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/coordinate_transform.ts#L395)

___

### getBoundingBoxCenter

▸ **getBoundingBoxCenter**(`out`, `bounds`): `Float32Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `out` | `Float32Array` |
| `bounds` | [`BoundingBox`](../interfaces/neuroglancer_coordinate_transform.BoundingBox.md) |

#### Returns

`Float32Array`

#### Defined in

[src/neuroglancer/coordinate_transform.ts:297](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/coordinate_transform.ts#L297)

___

### getCenterBound

▸ **getCenterBound**(`lower`, `upper`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lower` | `number` |
| `upper` | `number` |

#### Returns

`number`

#### Defined in

[src/neuroglancer/coordinate_transform.ts:291](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/coordinate_transform.ts#L291)

___

### getDefaultInputScale

▸ **getDefaultInputScale**(`transform`, `inputDim`): { `scale`: `number` ; `unit`: `string`  } \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | [`WatchableCoordinateSpaceTransform`](../classes/neuroglancer_coordinate_transform.WatchableCoordinateSpaceTransform.md) |
| `inputDim` | `number` |

#### Returns

{ `scale`: `number` ; `unit`: `string`  } \| `undefined`

#### Defined in

[src/neuroglancer/coordinate_transform.ts:1552](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/coordinate_transform.ts#L1552)

___

### getDimensionNameValidity

▸ **getDimensionNameValidity**(`names`): `boolean`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `names` | readonly `string`[] |

#### Returns

`boolean`[]

#### Defined in

[src/neuroglancer/coordinate_transform.ts:538](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/coordinate_transform.ts#L538)

___

### getInferredOutputScale

▸ **getInferredOutputScale**(`transform`, `outputDim`): { `scale`: `number` ; `unit`: `string`  } \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | [`CoordinateSpaceTransform`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpaceTransform.md) |
| `outputDim` | `number` |

#### Returns

{ `scale`: `number` ; `unit`: `string`  } \| `undefined`

#### Defined in

[src/neuroglancer/coordinate_transform.ts:1540](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/coordinate_transform.ts#L1540)

___

### getOutputSpaceWithTransformedBoundingBoxes

▸ **getOutputSpaceWithTransformedBoundingBoxes**(`inputSpace`, `transform`, `oldOutputSpace`): [`CoordinateSpace`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpace.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputSpace` | [`CoordinateSpace`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpace.md) |
| `transform` | `Float64Array` |
| `oldOutputSpace` | [`CoordinateSpace`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpace.md) |

#### Returns

[`CoordinateSpace`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpace.md)

#### Defined in

[src/neuroglancer/coordinate_transform.ts:503](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/coordinate_transform.ts#L503)

___

### homogeneousTransformSubmatrix

▸ **homogeneousTransformSubmatrix**<`T`\>(`constructor`, `oldTransform`, `oldRank`, `oldRows`, `oldCols`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TypedArray`](neuroglancer_util_array.md#typedarray) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `constructor` | (`n`: `number`) => `T` |
| `oldTransform` | [`TypedArray`](neuroglancer_util_array.md#typedarray) |
| `oldRank` | `number` |
| `oldRows` | readonly `number`[] |
| `oldCols` | readonly `number`[] |

#### Returns

`T`

#### Defined in

[src/neuroglancer/coordinate_transform.ts:1355](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/coordinate_transform.ts#L1355)

___

### insertDimensionAt

▸ **insertDimensionAt**(`existing`, `targetIndex`, `sourceIndex`): [`CoordinateSpace`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpace.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `existing` | [`CoordinateSpace`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpace.md) |
| `targetIndex` | `number` |
| `sourceIndex` | `number` |

#### Returns

[`CoordinateSpace`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpace.md)

#### Defined in

[src/neuroglancer/coordinate_transform.ts:1533](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/coordinate_transform.ts#L1533)

___

### isChannelDimension

▸ **isChannelDimension**(`name`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/coordinate_transform.ts:565](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/coordinate_transform.ts#L565)

___

### isGlobalDimension

▸ **isGlobalDimension**(`name`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/coordinate_transform.ts:569](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/coordinate_transform.ts#L569)

___

### isLocalDimension

▸ **isLocalDimension**(`name`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/coordinate_transform.ts:557](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/coordinate_transform.ts#L557)

___

### isLocalOrChannelDimension

▸ **isLocalOrChannelDimension**(`name`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/coordinate_transform.ts:561](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/coordinate_transform.ts#L561)

___

### isValidDimensionName

▸ **isValidDimensionName**(`name`, `allowNumericalNames?`): `boolean`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `undefined` |
| `allowNumericalNames` | `boolean` | `false` |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/coordinate_transform.ts:520](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/coordinate_transform.ts#L520)

___

### makeCoordinateSpace

▸ **makeCoordinateSpace**(`space`): [`CoordinateSpace`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpace.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `space` | `Object` |
| `space.boundingBoxes?` | readonly [`TransformedBoundingBox`](../interfaces/neuroglancer_coordinate_transform.TransformedBoundingBox.md)[] |
| `space.bounds?` | [`BoundingBox`](../interfaces/neuroglancer_coordinate_transform.BoundingBox.md) |
| `space.coordinateArrays?` | (`undefined` \| [`CoordinateArray`](../interfaces/neuroglancer_coordinate_transform.CoordinateArray.md))[] |
| `space.ids?` | readonly `number`[] |
| `space.names` | readonly `string`[] |
| `space.rank?` | `number` |
| `space.scales` | `Float64Array` |
| `space.timestamps?` | readonly `number`[] |
| `space.units` | readonly `string`[] |
| `space.valid?` | `boolean` |

#### Returns

[`CoordinateSpace`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpace.md)

#### Defined in

[src/neuroglancer/coordinate_transform.ts:153](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/coordinate_transform.ts#L153)

___

### makeDimensionNameUnique

▸ **makeDimensionNameUnique**(`name`, `existingNames`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `existingNames` | readonly `string`[] |

#### Returns

`string`

#### Defined in

[src/neuroglancer/coordinate_transform.ts:622](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/coordinate_transform.ts#L622)

___

### makeIdentityTransform

▸ **makeIdentityTransform**(`inputSpace`): [`CoordinateSpaceTransform`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpaceTransform.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputSpace` | [`CoordinateSpace`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpace.md) |

#### Returns

[`CoordinateSpaceTransform`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpaceTransform.md)

#### Defined in

[src/neuroglancer/coordinate_transform.ts:450](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/coordinate_transform.ts#L450)

___

### makeIdentityTransformedBoundingBox

▸ **makeIdentityTransformedBoundingBox**(`box`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `box` | [`BoundingBox`](../interfaces/neuroglancer_coordinate_transform.BoundingBox.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `box` | [`BoundingBox`](../interfaces/neuroglancer_coordinate_transform.BoundingBox.md) |
| `transform` | `Float64Array` |

#### Defined in

[src/neuroglancer/coordinate_transform.ts:315](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/coordinate_transform.ts#L315)

___

### makeSingletonDimTransformedBoundingBox

▸ **makeSingletonDimTransformedBoundingBox**(`outputRank`, `outputDim`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `outputRank` | `number` |
| `outputDim` | `number` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `box` | { `lowerBounds`: `Float64Array` ; `upperBounds`: `Float64Array`  } |
| `box.lowerBounds` | `Float64Array` |
| `box.upperBounds` | `Float64Array` |
| `transform` | `Float64Array` |

#### Defined in

[src/neuroglancer/coordinate_transform.ts:388](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/coordinate_transform.ts#L388)

___

### mergeCoordinateArrays

▸ **mergeCoordinateArrays**(`coordinateArrays`): [`CoordinateArray`](../interfaces/neuroglancer_coordinate_transform.CoordinateArray.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `coordinateArrays` | readonly [`CoordinateArray`](../interfaces/neuroglancer_coordinate_transform.CoordinateArray.md)[] |

#### Returns

[`CoordinateArray`](../interfaces/neuroglancer_coordinate_transform.CoordinateArray.md)

#### Defined in

[src/neuroglancer/coordinate_transform.ts:106](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/coordinate_transform.ts#L106)

___

### mergeOptionalCoordinateArrays

▸ **mergeOptionalCoordinateArrays**(`coordinateArrays`): [`CoordinateArray`](../interfaces/neuroglancer_coordinate_transform.CoordinateArray.md) \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `coordinateArrays` | readonly (`undefined` \| [`CoordinateArray`](../interfaces/neuroglancer_coordinate_transform.CoordinateArray.md))[] |

#### Returns

[`CoordinateArray`](../interfaces/neuroglancer_coordinate_transform.CoordinateArray.md) \| `undefined`

#### Defined in

[src/neuroglancer/coordinate_transform.ts:124](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/coordinate_transform.ts#L124)

___

### newDimensionId

▸ **newDimensionId**(): [`DimensionId`](neuroglancer_coordinate_transform.md#dimensionid)

#### Returns

[`DimensionId`](neuroglancer_coordinate_transform.md#dimensionid)

#### Defined in

[src/neuroglancer/coordinate_transform.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/coordinate_transform.ts#L31)

___

### normalizeCoordinateArray

▸ **normalizeCoordinateArray**(`coordinates`, `labels`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `coordinates` | `number`[] |
| `labels` | `string`[] |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `coordinates` | `number`[] |
| `labels` | `string`[] |

#### Defined in

[src/neuroglancer/coordinate_transform.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/coordinate_transform.ts#L95)

___

### permuteCoordinateSpace

▸ **permuteCoordinateSpace**(`existing`, `newToOld`): [`CoordinateSpace`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpace.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `existing` | [`CoordinateSpace`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpace.md) |
| `newToOld` | readonly `number`[] |

#### Returns

[`CoordinateSpace`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpace.md)

#### Defined in

[src/neuroglancer/coordinate_transform.ts:1516](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/coordinate_transform.ts#L1516)

___

### permuteTransformedBoundingBox

▸ **permuteTransformedBoundingBox**(`boundingBox`, `newToOld`, `oldOutputRank`): [`TransformedBoundingBox`](../interfaces/neuroglancer_coordinate_transform.TransformedBoundingBox.md) \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `boundingBox` | [`TransformedBoundingBox`](../interfaces/neuroglancer_coordinate_transform.TransformedBoundingBox.md) |
| `newToOld` | readonly `number`[] |
| `oldOutputRank` | `number` |

#### Returns

[`TransformedBoundingBox`](../interfaces/neuroglancer_coordinate_transform.TransformedBoundingBox.md) \| `undefined`

#### Defined in

[src/neuroglancer/coordinate_transform.ts:1495](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/coordinate_transform.ts#L1495)

___

### remapTransformInputSpace

▸ **remapTransformInputSpace**(`old`, `inputSpace`): [`CoordinateSpaceTransform`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpaceTransform.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `old` | [`CoordinateSpaceTransform`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpaceTransform.md) |
| `inputSpace` | [`CoordinateSpace`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpace.md) |

#### Returns

[`CoordinateSpaceTransform`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpaceTransform.md)

#### Defined in

[src/neuroglancer/coordinate_transform.ts:631](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/coordinate_transform.ts#L631)

___

### transformedBoundingBoxesEqual

▸ **transformedBoundingBoxesEqual**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`TransformedBoundingBox`](../interfaces/neuroglancer_coordinate_transform.TransformedBoundingBox.md) |
| `b` | [`TransformedBoundingBox`](../interfaces/neuroglancer_coordinate_transform.TransformedBoundingBox.md) |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/coordinate_transform.ts:131](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/coordinate_transform.ts#L131)

___

### unitsFromJson

▸ **unitsFromJson**(`units`, `scaleExponents`, `obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `units` | `string`[] |
| `scaleExponents` | `Float64Array` |
| `obj` | `any` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/coordinate_transform.ts:145](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/coordinate_transform.ts#L145)

___

### validateDimensionNames

▸ **validateDimensionNames**(`names`, `allowNumericalNames?`): `boolean`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `names` | `string`[] | `undefined` |
| `allowNumericalNames` | `boolean` | `false` |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/coordinate_transform.ts:528](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/coordinate_transform.ts#L528)
