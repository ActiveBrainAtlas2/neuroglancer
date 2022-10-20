[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/widget/coordinate\_transform](../modules/neuroglancer_widget_coordinate_transform.md) / CoordinateSpaceTransformWidget

# Class: CoordinateSpaceTransformWidget

[neuroglancer/widget/coordinate_transform](../modules/neuroglancer_widget_coordinate_transform.md).CoordinateSpaceTransformWidget

**`License`**

Copyright 2016 Google Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`CoordinateSpaceTransformWidget`**

## Table of contents

### Constructors

- [constructor](neuroglancer_widget_coordinate_transform.CoordinateSpaceTransformWidget.md#constructor)

### Properties

- [addOutputDimensionCell](neuroglancer_widget_coordinate_transform.CoordinateSpaceTransformWidget.md#addoutputdimensioncell)
- [addOutputDimensionIcon](neuroglancer_widget_coordinate_transform.CoordinateSpaceTransformWidget.md#addoutputdimensionicon)
- [addOutputDimensionInput](neuroglancer_widget_coordinate_transform.CoordinateSpaceTransformWidget.md#addoutputdimensioninput)
- [addSourceDimensionIcon](neuroglancer_widget_coordinate_transform.CoordinateSpaceTransformWidget.md#addsourcedimensionicon)
- [addingSourceDimension](neuroglancer_widget_coordinate_transform.CoordinateSpaceTransformWidget.md#addingsourcedimension)
- [coefficientContainer](neuroglancer_widget_coordinate_transform.CoordinateSpaceTransformWidget.md#coefficientcontainer)
- [coefficientElements](neuroglancer_widget_coordinate_transform.CoordinateSpaceTransformWidget.md#coefficientelements)
- [curRank](neuroglancer_widget_coordinate_transform.CoordinateSpaceTransformWidget.md#currank)
- [curSourceRank](neuroglancer_widget_coordinate_transform.CoordinateSpaceTransformWidget.md#cursourcerank)
- [curTransform](neuroglancer_widget_coordinate_transform.CoordinateSpaceTransformWidget.md#curtransform)
- [disposedStacks](neuroglancer_widget_coordinate_transform.CoordinateSpaceTransformWidget.md#disposedstacks)
- [element](neuroglancer_widget_coordinate_transform.CoordinateSpaceTransformWidget.md#element)
- [globalCombiner](neuroglancer_widget_coordinate_transform.CoordinateSpaceTransformWidget.md#globalcombiner)
- [inputBoundsElements](neuroglancer_widget_coordinate_transform.CoordinateSpaceTransformWidget.md#inputboundselements)
- [inputLowerBoundsContainer](neuroglancer_widget_coordinate_transform.CoordinateSpaceTransformWidget.md#inputlowerboundscontainer)
- [inputNameContainer](neuroglancer_widget_coordinate_transform.CoordinateSpaceTransformWidget.md#inputnamecontainer)
- [inputNameElements](neuroglancer_widget_coordinate_transform.CoordinateSpaceTransformWidget.md#inputnameelements)
- [inputScaleContainer](neuroglancer_widget_coordinate_transform.CoordinateSpaceTransformWidget.md#inputscalecontainer)
- [inputScaleElements](neuroglancer_widget_coordinate_transform.CoordinateSpaceTransformWidget.md#inputscaleelements)
- [inputScaleModified](neuroglancer_widget_coordinate_transform.CoordinateSpaceTransformWidget.md#inputscalemodified)
- [inputScaleSuggestionElements](neuroglancer_widget_coordinate_transform.CoordinateSpaceTransformWidget.md#inputscalesuggestionelements)
- [inputUpperBoundsContainer](neuroglancer_widget_coordinate_transform.CoordinateSpaceTransformWidget.md#inputupperboundscontainer)
- [localCombiner](neuroglancer_widget_coordinate_transform.CoordinateSpaceTransformWidget.md#localcombiner)
- [outputBoundsElements](neuroglancer_widget_coordinate_transform.CoordinateSpaceTransformWidget.md#outputboundselements)
- [outputNameContainer](neuroglancer_widget_coordinate_transform.CoordinateSpaceTransformWidget.md#outputnamecontainer)
- [outputNameElements](neuroglancer_widget_coordinate_transform.CoordinateSpaceTransformWidget.md#outputnameelements)
- [outputScaleContainer](neuroglancer_widget_coordinate_transform.CoordinateSpaceTransformWidget.md#outputscalecontainer)
- [outputScaleElements](neuroglancer_widget_coordinate_transform.CoordinateSpaceTransformWidget.md#outputscaleelements)
- [outputScaleModified](neuroglancer_widget_coordinate_transform.CoordinateSpaceTransformWidget.md#outputscalemodified)
- [outputScaleSuggestionElements](neuroglancer_widget_coordinate_transform.CoordinateSpaceTransformWidget.md#outputscalesuggestionelements)
- [refCount](neuroglancer_widget_coordinate_transform.CoordinateSpaceTransformWidget.md#refcount)
- [resetToDefaultButton](neuroglancer_widget_coordinate_transform.CoordinateSpaceTransformWidget.md#resettodefaultbutton)
- [resetToIdentityButton](neuroglancer_widget_coordinate_transform.CoordinateSpaceTransformWidget.md#resettoidentitybutton)
- [transform](neuroglancer_widget_coordinate_transform.CoordinateSpaceTransformWidget.md#transform)
- [translationContainer](neuroglancer_widget_coordinate_transform.CoordinateSpaceTransformWidget.md#translationcontainer)
- [wasDisposed](neuroglancer_widget_coordinate_transform.CoordinateSpaceTransformWidget.md#wasdisposed)

### Methods

- [addRef](neuroglancer_widget_coordinate_transform.CoordinateSpaceTransformWidget.md#addref)
- [dimensionRefCount](neuroglancer_widget_coordinate_transform.CoordinateSpaceTransformWidget.md#dimensionrefcount)
- [dispose](neuroglancer_widget_coordinate_transform.CoordinateSpaceTransformWidget.md#dispose)
- [disposed](neuroglancer_widget_coordinate_transform.CoordinateSpaceTransformWidget.md#disposed)
- [ensureViewRankUpdated](neuroglancer_widget_coordinate_transform.CoordinateSpaceTransformWidget.md#ensureviewrankupdated)
- [getElementByGridPosition](neuroglancer_widget_coordinate_transform.CoordinateSpaceTransformWidget.md#getelementbygridposition)
- [getElementGridPosition](neuroglancer_widget_coordinate_transform.CoordinateSpaceTransformWidget.md#getelementgridposition)
- [refCountReachedZero](neuroglancer_widget_coordinate_transform.CoordinateSpaceTransformWidget.md#refcountreachedzero)
- [registerCancellable](neuroglancer_widget_coordinate_transform.CoordinateSpaceTransformWidget.md#registercancellable)
- [registerDisposer](neuroglancer_widget_coordinate_transform.CoordinateSpaceTransformWidget.md#registerdisposer)
- [registerEventListener](neuroglancer_widget_coordinate_transform.CoordinateSpaceTransformWidget.md#registereventlistener)
- [unregisterDisposer](neuroglancer_widget_coordinate_transform.CoordinateSpaceTransformWidget.md#unregisterdisposer)
- [updateAddOutputDimensionCellStyle](neuroglancer_widget_coordinate_transform.CoordinateSpaceTransformWidget.md#updateaddoutputdimensioncellstyle)
- [updateCoefficientValidity](neuroglancer_widget_coordinate_transform.CoordinateSpaceTransformWidget.md#updatecoefficientvalidity)
- [updateModelInputScales](neuroglancer_widget_coordinate_transform.CoordinateSpaceTransformWidget.md#updatemodelinputscales)
- [updateModelOutputNames](neuroglancer_widget_coordinate_transform.CoordinateSpaceTransformWidget.md#updatemodeloutputnames)
- [updateModelOutputScales](neuroglancer_widget_coordinate_transform.CoordinateSpaceTransformWidget.md#updatemodeloutputscales)
- [updateModelTransform](neuroglancer_widget_coordinate_transform.CoordinateSpaceTransformWidget.md#updatemodeltransform)
- [updateOutputNameValidity](neuroglancer_widget_coordinate_transform.CoordinateSpaceTransformWidget.md#updateoutputnamevalidity)
- [updateResetButtonVisibility](neuroglancer_widget_coordinate_transform.CoordinateSpaceTransformWidget.md#updateresetbuttonvisibility)
- [updateScaleValidity](neuroglancer_widget_coordinate_transform.CoordinateSpaceTransformWidget.md#updatescalevalidity)
- [updateView](neuroglancer_widget_coordinate_transform.CoordinateSpaceTransformWidget.md#updateview)
- [updateViewInputScales](neuroglancer_widget_coordinate_transform.CoordinateSpaceTransformWidget.md#updateviewinputscales)
- [updateViewOutputNames](neuroglancer_widget_coordinate_transform.CoordinateSpaceTransformWidget.md#updateviewoutputnames)
- [updateViewOutputScales](neuroglancer_widget_coordinate_transform.CoordinateSpaceTransformWidget.md#updateviewoutputscales)
- [updateViewTransformCoefficients](neuroglancer_widget_coordinate_transform.CoordinateSpaceTransformWidget.md#updateviewtransformcoefficients)
- [updateWillBeDeletedAttributes](neuroglancer_widget_coordinate_transform.CoordinateSpaceTransformWidget.md#updatewillbedeletedattributes)

## Constructors

### constructor

• **new CoordinateSpaceTransformWidget**(`transform`, `localCombiner`, `globalCombiner`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | [`WatchableCoordinateSpaceTransform`](neuroglancer_coordinate_transform.WatchableCoordinateSpaceTransform.md) |
| `localCombiner` | [`CoordinateSpaceCombiner`](neuroglancer_coordinate_transform.CoordinateSpaceCombiner.md) |
| `globalCombiner` | [`CoordinateSpaceCombiner`](neuroglancer_coordinate_transform.CoordinateSpaceCombiner.md) |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/widget/coordinate_transform.ts:260](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/coordinate_transform.ts#L260)

## Properties

### addOutputDimensionCell

• `Private` **addOutputDimensionCell**: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/widget/coordinate_transform.ts:223](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/coordinate_transform.ts#L223)

___

### addOutputDimensionIcon

• `Private` **addOutputDimensionIcon**: [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/widget/coordinate_transform.ts:222](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/coordinate_transform.ts#L222)

___

### addOutputDimensionInput

• `Private` **addOutputDimensionInput**: [`HTMLInputElement`](../modules/main_module._internal_.md#htmlinputelement)

#### Defined in

[src/neuroglancer/widget/coordinate_transform.ts:224](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/coordinate_transform.ts#L224)

___

### addSourceDimensionIcon

• `Private` **addSourceDimensionIcon**: [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/widget/coordinate_transform.ts:221](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/coordinate_transform.ts#L221)

___

### addingSourceDimension

• `Private` **addingSourceDimension**: `boolean` = `false`

#### Defined in

[src/neuroglancer/widget/coordinate_transform.ts:230](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/coordinate_transform.ts#L230)

___

### coefficientContainer

• `Private` **coefficientContainer**: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/widget/coordinate_transform.ts:204](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/coordinate_transform.ts#L204)

___

### coefficientElements

• `Private` **coefficientElements**: [`HTMLInputElement`](../modules/main_module._internal_.md#htmlinputelement)[] = `[]`

#### Defined in

[src/neuroglancer/widget/coordinate_transform.ts:212](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/coordinate_transform.ts#L212)

___

### curRank

• `Private` **curRank**: `number` = `-1`

#### Defined in

[src/neuroglancer/widget/coordinate_transform.ts:228](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/coordinate_transform.ts#L228)

___

### curSourceRank

• `Private` **curSourceRank**: `number` = `-1`

#### Defined in

[src/neuroglancer/widget/coordinate_transform.ts:227](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/coordinate_transform.ts#L227)

___

### curTransform

• `Private` **curTransform**: `undefined` \| [`CoordinateSpaceTransform`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpaceTransform.md) = `undefined`

#### Defined in

[src/neuroglancer/widget/coordinate_transform.ts:229](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/coordinate_transform.ts#L229)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/widget/coordinate_transform.ts:203](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/coordinate_transform.ts#L203)

___

### globalCombiner

• **globalCombiner**: [`CoordinateSpaceCombiner`](neuroglancer_coordinate_transform.CoordinateSpaceCombiner.md)

#### Defined in

[src/neuroglancer/widget/coordinate_transform.ts:263](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/coordinate_transform.ts#L263)

___

### inputBoundsElements

• `Private` **inputBoundsElements**: { `lower`: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement) ; `upper`: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)  }[] = `[]`

#### Defined in

[src/neuroglancer/widget/coordinate_transform.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/coordinate_transform.ts#L219)

___

### inputLowerBoundsContainer

• `Private` **inputLowerBoundsContainer**: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/widget/coordinate_transform.ts:210](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/coordinate_transform.ts#L210)

___

### inputNameContainer

• `Private` **inputNameContainer**: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/widget/coordinate_transform.ts:208](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/coordinate_transform.ts#L208)

___

### inputNameElements

• `Private` **inputNameElements**: [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)[] = `[]`

#### Defined in

[src/neuroglancer/widget/coordinate_transform.ts:213](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/coordinate_transform.ts#L213)

___

### inputScaleContainer

• `Private` **inputScaleContainer**: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/widget/coordinate_transform.ts:209](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/coordinate_transform.ts#L209)

___

### inputScaleElements

• `Private` **inputScaleElements**: [`HTMLInputElement`](../modules/main_module._internal_.md#htmlinputelement)[] = `[]`

#### Defined in

[src/neuroglancer/widget/coordinate_transform.ts:218](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/coordinate_transform.ts#L218)

___

### inputScaleModified

• `Private` **inputScaleModified**: `boolean`[] = `[]`

#### Defined in

[src/neuroglancer/widget/coordinate_transform.ts:225](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/coordinate_transform.ts#L225)

___

### inputScaleSuggestionElements

• `Private` **inputScaleSuggestionElements**: [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)[] = `[]`

#### Defined in

[src/neuroglancer/widget/coordinate_transform.ts:217](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/coordinate_transform.ts#L217)

___

### inputUpperBoundsContainer

• `Private` **inputUpperBoundsContainer**: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/widget/coordinate_transform.ts:211](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/coordinate_transform.ts#L211)

___

### localCombiner

• **localCombiner**: [`CoordinateSpaceCombiner`](neuroglancer_coordinate_transform.CoordinateSpaceCombiner.md)

#### Defined in

[src/neuroglancer/widget/coordinate_transform.ts:262](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/coordinate_transform.ts#L262)

___

### outputBoundsElements

• `Private` **outputBoundsElements**: { `lower`: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement) ; `upper`: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)  }[] = `[]`

#### Defined in

[src/neuroglancer/widget/coordinate_transform.ts:220](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/coordinate_transform.ts#L220)

___

### outputNameContainer

• `Private` **outputNameContainer**: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/widget/coordinate_transform.ts:206](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/coordinate_transform.ts#L206)

___

### outputNameElements

• `Private` **outputNameElements**: [`HTMLInputElement`](../modules/main_module._internal_.md#htmlinputelement)[] = `[]`

#### Defined in

[src/neuroglancer/widget/coordinate_transform.ts:214](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/coordinate_transform.ts#L214)

___

### outputScaleContainer

• `Private` **outputScaleContainer**: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/widget/coordinate_transform.ts:207](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/coordinate_transform.ts#L207)

___

### outputScaleElements

• `Private` **outputScaleElements**: [`HTMLInputElement`](../modules/main_module._internal_.md#htmlinputelement)[] = `[]`

#### Defined in

[src/neuroglancer/widget/coordinate_transform.ts:215](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/coordinate_transform.ts#L215)

___

### outputScaleModified

• `Private` **outputScaleModified**: `boolean`[] = `[]`

#### Defined in

[src/neuroglancer/widget/coordinate_transform.ts:226](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/coordinate_transform.ts#L226)

___

### outputScaleSuggestionElements

• `Private` **outputScaleSuggestionElements**: [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)[] = `[]`

#### Defined in

[src/neuroglancer/widget/coordinate_transform.ts:216](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/coordinate_transform.ts#L216)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### resetToDefaultButton

• `Private` **resetToDefaultButton**: [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/widget/coordinate_transform.ts:241](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/coordinate_transform.ts#L241)

___

### resetToIdentityButton

• `Private` **resetToIdentityButton**: [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/widget/coordinate_transform.ts:231](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/coordinate_transform.ts#L231)

___

### transform

• **transform**: [`WatchableCoordinateSpaceTransform`](neuroglancer_coordinate_transform.WatchableCoordinateSpaceTransform.md)

#### Defined in

[src/neuroglancer/widget/coordinate_transform.ts:261](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/coordinate_transform.ts#L261)

___

### translationContainer

• `Private` **translationContainer**: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/widget/coordinate_transform.ts:205](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/coordinate_transform.ts#L205)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`CoordinateSpaceTransformWidget`](neuroglancer_widget_coordinate_transform.CoordinateSpaceTransformWidget.md)

#### Returns

[`CoordinateSpaceTransformWidget`](neuroglancer_widget_coordinate_transform.CoordinateSpaceTransformWidget.md)

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[addRef](neuroglancer_util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

___

### dimensionRefCount

▸ `Private` **dimensionRefCount**(`name`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`number`

#### Defined in

[src/neuroglancer/widget/coordinate_transform.ts:575](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/coordinate_transform.ts#L575)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[dispose](neuroglancer_util_disposable.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposed](neuroglancer_util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/widget/coordinate_transform.ts:1041](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/coordinate_transform.ts#L1041)

___

### ensureViewRankUpdated

▸ `Private` **ensureViewRankUpdated**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/coordinate_transform.ts:754](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/coordinate_transform.ts#L754)

___

### getElementByGridPosition

▸ `Private` **getElementByGridPosition**(`row`, `col`): ``null`` \| [`HTMLInputElement`](../modules/main_module._internal_.md#htmlinputelement)

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `col` | `number` |

#### Returns

``null`` \| [`HTMLInputElement`](../modules/main_module._internal_.md#htmlinputelement)

#### Defined in

[src/neuroglancer/widget/coordinate_transform.ts:557](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/coordinate_transform.ts#L557)

___

### getElementGridPosition

▸ `Private` **getElementGridPosition**(`element`): `undefined` \| { `col`: `number` = -2; `row`: `number` = i }

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | [`HTMLInputElement`](../modules/main_module._internal_.md#htmlinputelement) |

#### Returns

`undefined` \| { `col`: `number` = -2; `row`: `number` = i }

#### Defined in

[src/neuroglancer/widget/coordinate_transform.ts:528](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/coordinate_transform.ts#L528)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCountReachedZero](neuroglancer_util_disposable.RefCounted.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L66)

___

### registerCancellable

▸ **registerCancellable**<`T`\>(`cancellable`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cancellable` | `T` |

#### Returns

`T`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[registerCancellable](neuroglancer_util_disposable.RefCounted.md#registercancellable)

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L100)

___

### registerDisposer

▸ **registerDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/neuroglancer_util_disposable.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[registerDisposer](neuroglancer_util_disposable.RefCounted.md#registerdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L76)

___

### registerEventListener

▸ **registerEventListener**(`target`, `type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EventTarget`](../modules/main_module._internal_.md#eventtarget) |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/main_module._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](../interfaces/main_module._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[registerEventListener](neuroglancer_util_disposable.RefCounted.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L95)

___

### unregisterDisposer

▸ **unregisterDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/neuroglancer_util_disposable.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[unregisterDisposer](neuroglancer_util_disposable.RefCounted.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L85)

___

### updateAddOutputDimensionCellStyle

▸ `Private` **updateAddOutputDimensionCellStyle**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/coordinate_transform.ts:490](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/coordinate_transform.ts#L490)

___

### updateCoefficientValidity

▸ `Private` **updateCoefficientValidity**(`element`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | [`HTMLInputElement`](../modules/main_module._internal_.md#htmlinputelement) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/coordinate_transform.ts:523](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/coordinate_transform.ts#L523)

___

### updateModelInputScales

▸ `Private` **updateModelInputScales**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/widget/coordinate_transform.ts:580](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/coordinate_transform.ts#L580)

___

### updateModelOutputNames

▸ `Private` **updateModelOutputNames**(): `undefined` \| `boolean`

#### Returns

`undefined` \| `boolean`

#### Defined in

[src/neuroglancer/widget/coordinate_transform.ts:590](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/coordinate_transform.ts#L590)

___

### updateModelOutputScales

▸ `Private` **updateModelOutputScales**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/widget/coordinate_transform.ts:585](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/coordinate_transform.ts#L585)

___

### updateModelTransform

▸ `Private` **updateModelTransform**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/widget/coordinate_transform.ts:707](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/coordinate_transform.ts#L707)

___

### updateOutputNameValidity

▸ `Private` **updateOutputNameValidity**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/coordinate_transform.ts:498](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/coordinate_transform.ts#L498)

___

### updateResetButtonVisibility

▸ `Private` **updateResetButtonVisibility**(`coefficientsModified?`, `dimensionsModified?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `coefficientsModified` | `boolean` | `false` |
| `dimensionsModified` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/coordinate_transform.ts:1014](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/coordinate_transform.ts#L1014)

___

### updateScaleValidity

▸ `Private` **updateScaleValidity**(`element`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | [`HTMLInputElement`](../modules/main_module._internal_.md#htmlinputelement) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/coordinate_transform.ts:518](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/coordinate_transform.ts#L518)

___

### updateView

▸ **updateView**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/coordinate_transform.ts:1028](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/coordinate_transform.ts#L1028)

___

### updateViewInputScales

▸ `Private` **updateViewInputScales**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/coordinate_transform.ts:936](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/coordinate_transform.ts#L936)

___

### updateViewOutputNames

▸ `Private` **updateViewOutputNames**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/coordinate_transform.ts:726](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/coordinate_transform.ts#L726)

___

### updateViewOutputScales

▸ `Private` **updateViewOutputScales**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/coordinate_transform.ts:982](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/coordinate_transform.ts#L982)

___

### updateViewTransformCoefficients

▸ `Private` **updateViewTransformCoefficients**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/coordinate_transform.ts:741](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/coordinate_transform.ts#L741)

___

### updateWillBeDeletedAttributes

▸ `Private` **updateWillBeDeletedAttributes**(`dimensionWillBeDeleted?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimensionWillBeDeleted?` | `boolean`[] |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/coordinate_transform.ts:469](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/coordinate_transform.ts#L469)
