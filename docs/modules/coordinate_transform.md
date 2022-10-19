[neuroglancer](../README.md) / [Modules](../modules.md) / coordinate\_transform

# Module: coordinate\_transform

## Table of contents

### Modules

- [&lt;internal\&gt;](coordinate_transform._internal_.md)

### Classes

- [CoordinateSpaceCombiner](../classes/coordinate_transform.CoordinateSpaceCombiner.md)
- [TrackableCoordinateSpace](../classes/coordinate_transform.TrackableCoordinateSpace.md)
- [WatchableCoordinateSpaceTransform](../classes/coordinate_transform.WatchableCoordinateSpaceTransform.md)

### Interfaces

- [BoundingBox](../interfaces/coordinate_transform.BoundingBox.md)
- [CoordinateArray](../interfaces/coordinate_transform.CoordinateArray.md)
- [CoordinateSpace](../interfaces/coordinate_transform.CoordinateSpace.md)
- [CoordinateSpaceTransform](../interfaces/coordinate_transform.CoordinateSpaceTransform.md)
- [CoordinateTransformSpecification](../interfaces/coordinate_transform.CoordinateTransformSpecification.md)
- [TransformedBoundingBox](../interfaces/coordinate_transform.TransformedBoundingBox.md)

### Type Aliases

- [DimensionId](coordinate_transform.md#dimensionid)

### Variables

- [emptyInvalidCoordinateSpace](coordinate_transform.md#emptyinvalidcoordinatespace)
- [emptyValidCoordinateSpace](coordinate_transform.md#emptyvalidcoordinatespace)

### Functions

- [boundingBoxesEqual](coordinate_transform.md#boundingboxesequal)
- [computeCombinedBounds](coordinate_transform.md#computecombinedbounds)
- [computeCombinedLowerUpperBound](coordinate_transform.md#computecombinedlowerupperbound)
- [convertTransformOutputScales](coordinate_transform.md#converttransformoutputscales)
- [coordinateArraysEqual](coordinate_transform.md#coordinatearraysequal)
- [coordinateSpaceFromJson](coordinate_transform.md#coordinatespacefromjson)
- [coordinateSpaceToJson](coordinate_transform.md#coordinatespacetojson)
- [coordinateSpaceTransformsEquivalent](coordinate_transform.md#coordinatespacetransformsequivalent)
- [coordinateSpacesEqual](coordinate_transform.md#coordinatespacesequal)
- [coordinateTransformSpecificationFromJson](coordinate_transform.md#coordinatetransformspecificationfromjson)
- [coordinateTransformSpecificationFromLegacyJson](coordinate_transform.md#coordinatetransformspecificationfromlegacyjson)
- [coordinateTransformSpecificationToJson](coordinate_transform.md#coordinatetransformspecificationtojson)
- [dimensionNamesFromJson](coordinate_transform.md#dimensionnamesfromjson)
- [expectDimensionName](coordinate_transform.md#expectdimensionname)
- [extendTransformedBoundingBox](coordinate_transform.md#extendtransformedboundingbox)
- [extendTransformedBoundingBoxUpToRank](coordinate_transform.md#extendtransformedboundingboxuptorank)
- [getBoundingBoxCenter](coordinate_transform.md#getboundingboxcenter)
- [getCenterBound](coordinate_transform.md#getcenterbound)
- [getDefaultInputScale](coordinate_transform.md#getdefaultinputscale)
- [getDimensionNameValidity](coordinate_transform.md#getdimensionnamevalidity)
- [getInferredOutputScale](coordinate_transform.md#getinferredoutputscale)
- [getOutputSpaceWithTransformedBoundingBoxes](coordinate_transform.md#getoutputspacewithtransformedboundingboxes)
- [homogeneousTransformSubmatrix](coordinate_transform.md#homogeneoustransformsubmatrix)
- [insertDimensionAt](coordinate_transform.md#insertdimensionat)
- [isChannelDimension](coordinate_transform.md#ischanneldimension)
- [isGlobalDimension](coordinate_transform.md#isglobaldimension)
- [isLocalDimension](coordinate_transform.md#islocaldimension)
- [isLocalOrChannelDimension](coordinate_transform.md#islocalorchanneldimension)
- [isValidDimensionName](coordinate_transform.md#isvaliddimensionname)
- [makeCoordinateSpace](coordinate_transform.md#makecoordinatespace)
- [makeDimensionNameUnique](coordinate_transform.md#makedimensionnameunique)
- [makeIdentityTransform](coordinate_transform.md#makeidentitytransform)
- [makeIdentityTransformedBoundingBox](coordinate_transform.md#makeidentitytransformedboundingbox)
- [makeSingletonDimTransformedBoundingBox](coordinate_transform.md#makesingletondimtransformedboundingbox)
- [mergeCoordinateArrays](coordinate_transform.md#mergecoordinatearrays)
- [mergeOptionalCoordinateArrays](coordinate_transform.md#mergeoptionalcoordinatearrays)
- [newDimensionId](coordinate_transform.md#newdimensionid)
- [normalizeCoordinateArray](coordinate_transform.md#normalizecoordinatearray)
- [permuteCoordinateSpace](coordinate_transform.md#permutecoordinatespace)
- [permuteTransformedBoundingBox](coordinate_transform.md#permutetransformedboundingbox)
- [remapTransformInputSpace](coordinate_transform.md#remaptransforminputspace)
- [transformedBoundingBoxesEqual](coordinate_transform.md#transformedboundingboxesequal)
- [unitsFromJson](coordinate_transform.md#unitsfromjson)
- [validateDimensionNames](coordinate_transform.md#validatedimensionnames)

## Type Aliases

### DimensionId

Ƭ **DimensionId**: `number`

#### Defined in

[src/neuroglancer/coordinate_transform.ts:27](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/coordinate_transform.ts#L27)

## Variables

### emptyInvalidCoordinateSpace

• `Const` **emptyInvalidCoordinateSpace**: [`CoordinateSpace`](../interfaces/coordinate_transform.CoordinateSpace.md)

#### Defined in

[src/neuroglancer/coordinate_transform.ts:189](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/coordinate_transform.ts#L189)

___

### emptyValidCoordinateSpace

• `Const` **emptyValidCoordinateSpace**: [`CoordinateSpace`](../interfaces/coordinate_transform.CoordinateSpace.md)

#### Defined in

[src/neuroglancer/coordinate_transform.ts:197](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/coordinate_transform.ts#L197)

## Functions

### boundingBoxesEqual

▸ **boundingBoxesEqual**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`BoundingBox`](../interfaces/coordinate_transform.BoundingBox.md) |
| `b` | [`BoundingBox`](../interfaces/coordinate_transform.BoundingBox.md) |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/coordinate_transform.ts:84](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/coordinate_transform.ts#L84)

___

### computeCombinedBounds

▸ **computeCombinedBounds**(`boundingBoxes`, `outputRank`): [`BoundingBox`](../interfaces/coordinate_transform.BoundingBox.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `boundingBoxes` | readonly [`TransformedBoundingBox`](../interfaces/coordinate_transform.TransformedBoundingBox.md)[] |
| `outputRank` | `number` |

#### Returns

[`BoundingBox`](../interfaces/coordinate_transform.BoundingBox.md)

#### Defined in

[src/neuroglancer/coordinate_transform.ts:345](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/coordinate_transform.ts#L345)

___

### computeCombinedLowerUpperBound

▸ **computeCombinedLowerUpperBound**(`boundingBox`, `outputDimension`, `outputRank`): { `lower`: `number` ; `upper`: `number`  } \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `boundingBox` | [`TransformedBoundingBox`](../interfaces/coordinate_transform.TransformedBoundingBox.md) |
| `outputDimension` | `number` |
| `outputRank` | `number` |

#### Returns

{ `lower`: `number` ; `upper`: `number`  } \| `undefined`

#### Defined in

[src/neuroglancer/coordinate_transform.ts:320](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/coordinate_transform.ts#L320)

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

[src/neuroglancer/coordinate_transform.ts:573](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/coordinate_transform.ts#L573)

___

### coordinateArraysEqual

▸ **coordinateArraysEqual**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `undefined` \| [`CoordinateArray`](../interfaces/coordinate_transform.CoordinateArray.md) |
| `b` | `undefined` \| [`CoordinateArray`](../interfaces/coordinate_transform.CoordinateArray.md) |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/coordinate_transform.ts:88](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/coordinate_transform.ts#L88)

___

### coordinateSpaceFromJson

▸ **coordinateSpaceFromJson**(`obj`, `allowNumericalDimensions?`): [`CoordinateSpace`](../interfaces/coordinate_transform.CoordinateSpace.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `obj` | `any` | `undefined` |
| `allowNumericalDimensions` | `boolean` | `false` |

#### Returns

[`CoordinateSpace`](../interfaces/coordinate_transform.CoordinateSpace.md)

#### Defined in

[src/neuroglancer/coordinate_transform.ts:214](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/coordinate_transform.ts#L214)

___

### coordinateSpaceToJson

▸ **coordinateSpaceToJson**(`coordinateSpace`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `coordinateSpace` | [`CoordinateSpace`](../interfaces/coordinate_transform.CoordinateSpace.md) |

#### Returns

`any`

#### Defined in

[src/neuroglancer/coordinate_transform.ts:250](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/coordinate_transform.ts#L250)

___

### coordinateSpaceTransformsEquivalent

▸ **coordinateSpaceTransformsEquivalent**(`defaultTransform`, `transform`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaultTransform` | [`CoordinateSpaceTransform`](../interfaces/coordinate_transform.CoordinateSpaceTransform.md) |
| `transform` | [`CoordinateSpaceTransform`](../interfaces/coordinate_transform.CoordinateSpaceTransform.md) |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/coordinate_transform.ts:434](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/coordinate_transform.ts#L434)

___

### coordinateSpacesEqual

▸ **coordinateSpacesEqual**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`CoordinateSpace`](../interfaces/coordinate_transform.CoordinateSpace.md) |
| `b` | [`CoordinateSpace`](../interfaces/coordinate_transform.CoordinateSpace.md) |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/coordinate_transform.ts:136](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/coordinate_transform.ts#L136)

___

### coordinateTransformSpecificationFromJson

▸ **coordinateTransformSpecificationFromJson**(`j`): [`CoordinateTransformSpecification`](../interfaces/coordinate_transform.CoordinateTransformSpecification.md) \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `j` | `unknown` |

#### Returns

[`CoordinateTransformSpecification`](../interfaces/coordinate_transform.CoordinateTransformSpecification.md) \| `undefined`

#### Defined in

[src/neuroglancer/coordinate_transform.ts:1431](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/coordinate_transform.ts#L1431)

___

### coordinateTransformSpecificationFromLegacyJson

▸ **coordinateTransformSpecificationFromLegacyJson**(`obj`): [`CoordinateTransformSpecification`](../interfaces/coordinate_transform.CoordinateTransformSpecification.md) \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `unknown` |

#### Returns

[`CoordinateTransformSpecification`](../interfaces/coordinate_transform.CoordinateTransformSpecification.md) \| `undefined`

#### Defined in

[src/neuroglancer/coordinate_transform.ts:1379](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/coordinate_transform.ts#L1379)

___

### coordinateTransformSpecificationToJson

▸ **coordinateTransformSpecificationToJson**(`spec`): `undefined` \| { `inputDimensions`: `any` ; `matrix`: `undefined` \| `number`[][] = m; `outputDimensions`: `any` ; `sourceRank`: `undefined` \| `number`  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `spec` | `undefined` \| [`CoordinateTransformSpecification`](../interfaces/coordinate_transform.CoordinateTransformSpecification.md) |

#### Returns

`undefined` \| { `inputDimensions`: `any` ; `matrix`: `undefined` \| `number`[][] = m; `outputDimensions`: `any` ; `sourceRank`: `undefined` \| `number`  }

#### Defined in

[src/neuroglancer/coordinate_transform.ts:1471](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/coordinate_transform.ts#L1471)

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

[src/neuroglancer/coordinate_transform.ts:1065](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/coordinate_transform.ts#L1065)

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

[src/neuroglancer/coordinate_transform.ts:1057](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/coordinate_transform.ts#L1057)

___

### extendTransformedBoundingBox

▸ **extendTransformedBoundingBox**(`boundingBox`, `newOutputRank`, `newOutputDims`): [`TransformedBoundingBox`](../interfaces/coordinate_transform.TransformedBoundingBox.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `boundingBox` | [`TransformedBoundingBox`](../interfaces/coordinate_transform.TransformedBoundingBox.md) |
| `newOutputRank` | `number` |
| `newOutputDims` | readonly `number`[] |

#### Returns

[`TransformedBoundingBox`](../interfaces/coordinate_transform.TransformedBoundingBox.md)

#### Defined in

[src/neuroglancer/coordinate_transform.ts:367](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/coordinate_transform.ts#L367)

___

### extendTransformedBoundingBoxUpToRank

▸ **extendTransformedBoundingBoxUpToRank**(`boundingBox`, `oldOutputRank`, `newOutputRank`): [`TransformedBoundingBox`](../interfaces/coordinate_transform.TransformedBoundingBox.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `boundingBox` | [`TransformedBoundingBox`](../interfaces/coordinate_transform.TransformedBoundingBox.md) |
| `oldOutputRank` | `number` |
| `newOutputRank` | `number` |

#### Returns

[`TransformedBoundingBox`](../interfaces/coordinate_transform.TransformedBoundingBox.md)

#### Defined in

[src/neuroglancer/coordinate_transform.ts:395](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/coordinate_transform.ts#L395)

___

### getBoundingBoxCenter

▸ **getBoundingBoxCenter**(`out`, `bounds`): `Float32Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `out` | `Float32Array` |
| `bounds` | [`BoundingBox`](../interfaces/coordinate_transform.BoundingBox.md) |

#### Returns

`Float32Array`

#### Defined in

[src/neuroglancer/coordinate_transform.ts:297](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/coordinate_transform.ts#L297)

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

[src/neuroglancer/coordinate_transform.ts:291](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/coordinate_transform.ts#L291)

___

### getDefaultInputScale

▸ **getDefaultInputScale**(`transform`, `inputDim`): { `scale`: `number` ; `unit`: `string`  } \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | [`WatchableCoordinateSpaceTransform`](../classes/coordinate_transform.WatchableCoordinateSpaceTransform.md) |
| `inputDim` | `number` |

#### Returns

{ `scale`: `number` ; `unit`: `string`  } \| `undefined`

#### Defined in

[src/neuroglancer/coordinate_transform.ts:1552](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/coordinate_transform.ts#L1552)

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

[src/neuroglancer/coordinate_transform.ts:538](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/coordinate_transform.ts#L538)

___

### getInferredOutputScale

▸ **getInferredOutputScale**(`transform`, `outputDim`): { `scale`: `number` ; `unit`: `string`  } \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | [`CoordinateSpaceTransform`](../interfaces/coordinate_transform.CoordinateSpaceTransform.md) |
| `outputDim` | `number` |

#### Returns

{ `scale`: `number` ; `unit`: `string`  } \| `undefined`

#### Defined in

[src/neuroglancer/coordinate_transform.ts:1540](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/coordinate_transform.ts#L1540)

___

### getOutputSpaceWithTransformedBoundingBoxes

▸ **getOutputSpaceWithTransformedBoundingBoxes**(`inputSpace`, `transform`, `oldOutputSpace`): [`CoordinateSpace`](../interfaces/coordinate_transform.CoordinateSpace.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputSpace` | [`CoordinateSpace`](../interfaces/coordinate_transform.CoordinateSpace.md) |
| `transform` | `Float64Array` |
| `oldOutputSpace` | [`CoordinateSpace`](../interfaces/coordinate_transform.CoordinateSpace.md) |

#### Returns

[`CoordinateSpace`](../interfaces/coordinate_transform.CoordinateSpace.md)

#### Defined in

[src/neuroglancer/coordinate_transform.ts:503](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/coordinate_transform.ts#L503)

___

### homogeneousTransformSubmatrix

▸ **homogeneousTransformSubmatrix**<`T`\>(`constructor`, `oldTransform`, `oldRank`, `oldRows`, `oldCols`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TypedArray`](coordinate_transform._internal_.md#typedarray) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `constructor` | (`n`: `number`) => `T` |
| `oldTransform` | [`TypedArray`](coordinate_transform._internal_.md#typedarray) |
| `oldRank` | `number` |
| `oldRows` | readonly `number`[] |
| `oldCols` | readonly `number`[] |

#### Returns

`T`

#### Defined in

[src/neuroglancer/coordinate_transform.ts:1355](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/coordinate_transform.ts#L1355)

___

### insertDimensionAt

▸ **insertDimensionAt**(`existing`, `targetIndex`, `sourceIndex`): [`CoordinateSpace`](../interfaces/coordinate_transform.CoordinateSpace.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `existing` | [`CoordinateSpace`](../interfaces/coordinate_transform.CoordinateSpace.md) |
| `targetIndex` | `number` |
| `sourceIndex` | `number` |

#### Returns

[`CoordinateSpace`](../interfaces/coordinate_transform.CoordinateSpace.md)

#### Defined in

[src/neuroglancer/coordinate_transform.ts:1533](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/coordinate_transform.ts#L1533)

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

[src/neuroglancer/coordinate_transform.ts:565](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/coordinate_transform.ts#L565)

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

[src/neuroglancer/coordinate_transform.ts:569](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/coordinate_transform.ts#L569)

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

[src/neuroglancer/coordinate_transform.ts:557](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/coordinate_transform.ts#L557)

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

[src/neuroglancer/coordinate_transform.ts:561](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/coordinate_transform.ts#L561)

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

[src/neuroglancer/coordinate_transform.ts:520](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/coordinate_transform.ts#L520)

___

### makeCoordinateSpace

▸ **makeCoordinateSpace**(`space`): [`CoordinateSpace`](../interfaces/coordinate_transform.CoordinateSpace.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `space` | `Object` |
| `space.boundingBoxes?` | readonly [`TransformedBoundingBox`](../interfaces/coordinate_transform.TransformedBoundingBox.md)[] |
| `space.bounds?` | [`BoundingBox`](../interfaces/coordinate_transform.BoundingBox.md) |
| `space.coordinateArrays?` | (`undefined` \| [`CoordinateArray`](../interfaces/coordinate_transform.CoordinateArray.md))[] |
| `space.ids?` | readonly `number`[] |
| `space.names` | readonly `string`[] |
| `space.rank?` | `number` |
| `space.scales` | `Float64Array` |
| `space.timestamps?` | readonly `number`[] |
| `space.units` | readonly `string`[] |
| `space.valid?` | `boolean` |

#### Returns

[`CoordinateSpace`](../interfaces/coordinate_transform.CoordinateSpace.md)

#### Defined in

[src/neuroglancer/coordinate_transform.ts:153](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/coordinate_transform.ts#L153)

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

[src/neuroglancer/coordinate_transform.ts:622](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/coordinate_transform.ts#L622)

___

### makeIdentityTransform

▸ **makeIdentityTransform**(`inputSpace`): [`CoordinateSpaceTransform`](../interfaces/coordinate_transform.CoordinateSpaceTransform.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputSpace` | [`CoordinateSpace`](../interfaces/coordinate_transform.CoordinateSpace.md) |

#### Returns

[`CoordinateSpaceTransform`](../interfaces/coordinate_transform.CoordinateSpaceTransform.md)

#### Defined in

[src/neuroglancer/coordinate_transform.ts:450](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/coordinate_transform.ts#L450)

___

### makeIdentityTransformedBoundingBox

▸ **makeIdentityTransformedBoundingBox**(`box`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `box` | [`BoundingBox`](../interfaces/coordinate_transform.BoundingBox.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `box` | [`BoundingBox`](../interfaces/coordinate_transform.BoundingBox.md) |
| `transform` | `Float64Array` |

#### Defined in

[src/neuroglancer/coordinate_transform.ts:315](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/coordinate_transform.ts#L315)

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

[src/neuroglancer/coordinate_transform.ts:388](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/coordinate_transform.ts#L388)

___

### mergeCoordinateArrays

▸ **mergeCoordinateArrays**(`coordinateArrays`): [`CoordinateArray`](../interfaces/coordinate_transform.CoordinateArray.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `coordinateArrays` | readonly [`CoordinateArray`](../interfaces/coordinate_transform.CoordinateArray.md)[] |

#### Returns

[`CoordinateArray`](../interfaces/coordinate_transform.CoordinateArray.md)

#### Defined in

[src/neuroglancer/coordinate_transform.ts:106](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/coordinate_transform.ts#L106)

___

### mergeOptionalCoordinateArrays

▸ **mergeOptionalCoordinateArrays**(`coordinateArrays`): [`CoordinateArray`](../interfaces/coordinate_transform.CoordinateArray.md) \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `coordinateArrays` | readonly (`undefined` \| [`CoordinateArray`](../interfaces/coordinate_transform.CoordinateArray.md))[] |

#### Returns

[`CoordinateArray`](../interfaces/coordinate_transform.CoordinateArray.md) \| `undefined`

#### Defined in

[src/neuroglancer/coordinate_transform.ts:124](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/coordinate_transform.ts#L124)

___

### newDimensionId

▸ **newDimensionId**(): [`DimensionId`](coordinate_transform.md#dimensionid)

#### Returns

[`DimensionId`](coordinate_transform.md#dimensionid)

#### Defined in

[src/neuroglancer/coordinate_transform.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/coordinate_transform.ts#L31)

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

[src/neuroglancer/coordinate_transform.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/coordinate_transform.ts#L95)

___

### permuteCoordinateSpace

▸ **permuteCoordinateSpace**(`existing`, `newToOld`): [`CoordinateSpace`](../interfaces/coordinate_transform.CoordinateSpace.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `existing` | [`CoordinateSpace`](../interfaces/coordinate_transform.CoordinateSpace.md) |
| `newToOld` | readonly `number`[] |

#### Returns

[`CoordinateSpace`](../interfaces/coordinate_transform.CoordinateSpace.md)

#### Defined in

[src/neuroglancer/coordinate_transform.ts:1516](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/coordinate_transform.ts#L1516)

___

### permuteTransformedBoundingBox

▸ **permuteTransformedBoundingBox**(`boundingBox`, `newToOld`, `oldOutputRank`): [`TransformedBoundingBox`](../interfaces/coordinate_transform.TransformedBoundingBox.md) \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `boundingBox` | [`TransformedBoundingBox`](../interfaces/coordinate_transform.TransformedBoundingBox.md) |
| `newToOld` | readonly `number`[] |
| `oldOutputRank` | `number` |

#### Returns

[`TransformedBoundingBox`](../interfaces/coordinate_transform.TransformedBoundingBox.md) \| `undefined`

#### Defined in

[src/neuroglancer/coordinate_transform.ts:1495](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/coordinate_transform.ts#L1495)

___

### remapTransformInputSpace

▸ **remapTransformInputSpace**(`old`, `inputSpace`): [`CoordinateSpaceTransform`](../interfaces/coordinate_transform.CoordinateSpaceTransform.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `old` | [`CoordinateSpaceTransform`](../interfaces/coordinate_transform.CoordinateSpaceTransform.md) |
| `inputSpace` | [`CoordinateSpace`](../interfaces/coordinate_transform.CoordinateSpace.md) |

#### Returns

[`CoordinateSpaceTransform`](../interfaces/coordinate_transform.CoordinateSpaceTransform.md)

#### Defined in

[src/neuroglancer/coordinate_transform.ts:631](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/coordinate_transform.ts#L631)

___

### transformedBoundingBoxesEqual

▸ **transformedBoundingBoxesEqual**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`TransformedBoundingBox`](../interfaces/coordinate_transform.TransformedBoundingBox.md) |
| `b` | [`TransformedBoundingBox`](../interfaces/coordinate_transform.TransformedBoundingBox.md) |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/coordinate_transform.ts:131](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/coordinate_transform.ts#L131)

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

[src/neuroglancer/coordinate_transform.ts:145](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/coordinate_transform.ts#L145)

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

[src/neuroglancer/coordinate_transform.ts:528](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/coordinate_transform.ts#L528)
