[neuroglancer](../README.md) / [Modules](../modules.md) / [layer\_group\_viewer](../modules/layer_group_viewer.md) / [<internal\>](../modules/layer_group_viewer._internal_.md) / PositionWidget

# Class: PositionWidget

[layer_group_viewer](../modules/layer_group_viewer.md).[<internal>](../modules/layer_group_viewer._internal_.md).PositionWidget

## Hierarchy

- [`RefCounted`](axes_lines._internal_.RefCounted.md)

  ↳ **`PositionWidget`**

## Table of contents

### Constructors

- [constructor](layer_group_viewer._internal_.PositionWidget.md#constructor)

### Properties

- [combiner](layer_group_viewer._internal_.PositionWidget.md#combiner)
- [coordinateSpace](layer_group_viewer._internal_.PositionWidget.md#coordinatespace)
- [dimensionContainer](layer_group_viewer._internal_.PositionWidget.md#dimensioncontainer)
- [dimensionWidgetList](layer_group_viewer._internal_.PositionWidget.md#dimensionwidgetlist)
- [dimensionWidgets](layer_group_viewer._internal_.PositionWidget.md#dimensionwidgets)
- [disposedStacks](layer_group_viewer._internal_.PositionWidget.md#disposedstacks)
- [dragSource](layer_group_viewer._internal_.PositionWidget.md#dragsource)
- [element](layer_group_viewer._internal_.PositionWidget.md#element)
- [position](layer_group_viewer._internal_.PositionWidget.md#position)
- [refCount](layer_group_viewer._internal_.PositionWidget.md#refcount)
- [wasDisposed](layer_group_viewer._internal_.PositionWidget.md#wasdisposed)
- [widgetWithOpenDropdown](layer_group_viewer._internal_.PositionWidget.md#widgetwithopendropdown)

### Methods

- [addRef](layer_group_viewer._internal_.PositionWidget.md#addref)
- [adjustDimension](layer_group_viewer._internal_.PositionWidget.md#adjustdimension)
- [closeDropdown](layer_group_viewer._internal_.PositionWidget.md#closedropdown)
- [dispose](layer_group_viewer._internal_.PositionWidget.md#dispose)
- [disposed](layer_group_viewer._internal_.PositionWidget.md#disposed)
- [forceUpdateDimensions](layer_group_viewer._internal_.PositionWidget.md#forceupdatedimensions)
- [getPositionText](layer_group_viewer._internal_.PositionWidget.md#getpositiontext)
- [handleLeftRightMovement](layer_group_viewer._internal_.PositionWidget.md#handleleftrightmovement)
- [newDimension](layer_group_viewer._internal_.PositionWidget.md#newdimension)
- [openCoordinateArrayDropdown](layer_group_viewer._internal_.PositionWidget.md#opencoordinatearraydropdown)
- [openDropdown](layer_group_viewer._internal_.PositionWidget.md#opendropdown)
- [openRegularDropdown](layer_group_viewer._internal_.PositionWidget.md#openregulardropdown)
- [pasteString](layer_group_viewer._internal_.PositionWidget.md#pastestring)
- [refCountReachedZero](layer_group_viewer._internal_.PositionWidget.md#refcountreachedzero)
- [registerCancellable](layer_group_viewer._internal_.PositionWidget.md#registercancellable)
- [registerDisposer](layer_group_viewer._internal_.PositionWidget.md#registerdisposer)
- [registerEventListener](layer_group_viewer._internal_.PositionWidget.md#registereventlistener)
- [reorderDimensionTo](layer_group_viewer._internal_.PositionWidget.md#reorderdimensionto)
- [selectAdjacentCoordinate](layer_group_viewer._internal_.PositionWidget.md#selectadjacentcoordinate)
- [selectAdjacentField](layer_group_viewer._internal_.PositionWidget.md#selectadjacentfield)
- [unregisterDisposer](layer_group_viewer._internal_.PositionWidget.md#unregisterdisposer)
- [updateDimensions](layer_group_viewer._internal_.PositionWidget.md#updatedimensions)
- [updateDropdownVisibility](layer_group_viewer._internal_.PositionWidget.md#updatedropdownvisibility)
- [updateNameValidity](layer_group_viewer._internal_.PositionWidget.md#updatenamevalidity)
- [updateNames](layer_group_viewer._internal_.PositionWidget.md#updatenames)
- [updatePosition](layer_group_viewer._internal_.PositionWidget.md#updateposition)
- [updateScaleValidity](layer_group_viewer._internal_.PositionWidget.md#updatescalevalidity)
- [updateScales](layer_group_viewer._internal_.PositionWidget.md#updatescales)
- [updateView](layer_group_viewer._internal_.PositionWidget.md#updateview)

## Constructors

### constructor

• **new PositionWidget**(`position`, `combiner`, `__namedParameters?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | [`Position`](navigation_state.Position.md) |
| `combiner` | [`CoordinateSpaceCombiner`](coordinate_transform.CoordinateSpaceCombiner.md) |
| `__namedParameters` | `Object` |
| `__namedParameters.copyButton` | `undefined` \| `boolean` |

#### Overrides

[RefCounted](axes_lines._internal_.RefCounted.md).[constructor](axes_lines._internal_.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/widget/position_widget.ts:813](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/position_widget.ts#L813)

## Properties

### combiner

• **combiner**: [`CoordinateSpaceCombiner`](coordinate_transform.CoordinateSpaceCombiner.md)

___

### coordinateSpace

• `Private` **coordinateSpace**: `undefined` \| [`CoordinateSpace`](../interfaces/coordinate_transform.CoordinateSpace.md) = `undefined`

#### Defined in

[src/neuroglancer/widget/position_widget.ts:227](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/position_widget.ts#L227)

___

### dimensionContainer

• `Private` **dimensionContainer**: [`HTMLDivElement`](../modules/axes_lines._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/widget/position_widget.ts:226](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/position_widget.ts#L226)

___

### dimensionWidgetList

• `Private` **dimensionWidgetList**: [`DimensionWidget`](layer_group_viewer._internal_.DimensionWidget.md)[] = `[]`

#### Defined in

[src/neuroglancer/widget/position_widget.ts:230](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/position_widget.ts#L230)

___

### dimensionWidgets

• `Private` **dimensionWidgets**: `Map`<`number`, [`DimensionWidget`](layer_group_viewer._internal_.DimensionWidget.md)\>

#### Defined in

[src/neuroglancer/widget/position_widget.ts:229](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/position_widget.ts#L229)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[disposedStacks](axes_lines._internal_.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L52)

___

### dragSource

• `Private` **dragSource**: `undefined` \| [`DimensionWidget`](layer_group_viewer._internal_.DimensionWidget.md) = `undefined`

#### Defined in

[src/neuroglancer/widget/position_widget.ts:476](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/position_widget.ts#L476)

___

### element

• **element**: [`HTMLDivElement`](../modules/axes_lines._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/widget/position_widget.ts:225](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/position_widget.ts#L225)

___

### position

• **position**: [`Position`](navigation_state.Position.md)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[refCount](axes_lines._internal_.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[wasDisposed](axes_lines._internal_.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L46)

___

### widgetWithOpenDropdown

• `Private` **widgetWithOpenDropdown**: `undefined` \| [`DimensionWidget`](layer_group_viewer._internal_.DimensionWidget.md)

#### Defined in

[src/neuroglancer/widget/position_widget.ts:443](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/position_widget.ts#L443)

## Methods

### addRef

▸ **addRef**(): [`PositionWidget`](layer_group_viewer._internal_.PositionWidget.md)

#### Returns

[`PositionWidget`](layer_group_viewer._internal_.PositionWidget.md)

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[addRef](axes_lines._internal_.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L48)

___

### adjustDimension

▸ `Private` **adjustDimension**(`widget`, `adjustment`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `widget` | [`DimensionWidget`](layer_group_viewer._internal_.DimensionWidget.md) |
| `adjustment` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/position_widget.ts:862](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/position_widget.ts#L862)

___

### closeDropdown

▸ `Private` **closeDropdown**(`widget?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `widget` | `undefined` \| [`DimensionWidget`](layer_group_viewer._internal_.DimensionWidget.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/position_widget.ts:445](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/position_widget.ts#L445)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[dispose](axes_lines._internal_.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

[RefCounted](axes_lines._internal_.RefCounted.md).[disposed](axes_lines._internal_.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/widget/position_widget.ts:989](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/position_widget.ts#L989)

___

### forceUpdateDimensions

▸ `Private` **forceUpdateDimensions**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/position_widget.ts:695](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/position_widget.ts#L695)

___

### getPositionText

▸ `Private` **getPositionText**(): `string`

#### Returns

`string`

#### Defined in

[src/neuroglancer/widget/position_widget.ts:951](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/position_widget.ts#L951)

___

### handleLeftRightMovement

▸ `Private` **handleLeftRightMovement**(`event`, `widget`, `dir`, `getter`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`ActionEvent`](../interfaces/image_user_layer._internal_.ActionEvent.md)<[`Event`](../modules/axes_lines._internal_.md#event)\> |
| `widget` | [`DimensionWidget`](layer_group_viewer._internal_.DimensionWidget.md) |
| `dir` | `number` |
| `getter` | (`widget`: [`DimensionWidget`](layer_group_viewer._internal_.DimensionWidget.md)) => [`HTMLInputElement`](../modules/axes_lines._internal_.md#htmlinputelement) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/position_widget.ts:783](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/position_widget.ts#L783)

___

### newDimension

▸ `Private` **newDimension**(`coordinateSpace`, `initialDimensionIndex`): [`DimensionWidget`](layer_group_viewer._internal_.DimensionWidget.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `coordinateSpace` | [`CoordinateSpace`](../interfaces/coordinate_transform.CoordinateSpace.md) |
| `initialDimensionIndex` | `number` |

#### Returns

[`DimensionWidget`](layer_group_viewer._internal_.DimensionWidget.md)

#### Defined in

[src/neuroglancer/widget/position_widget.ts:492](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/position_widget.ts#L492)

___

### openCoordinateArrayDropdown

▸ `Private` **openCoordinateArrayDropdown**(`widget`, `dropdown`, `coordinateArray`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `widget` | [`DimensionWidget`](layer_group_viewer._internal_.DimensionWidget.md) |
| `dropdown` | [`HTMLDivElement`](../modules/axes_lines._internal_.md#htmldivelement) |
| `coordinateArray` | [`CoordinateArray`](../interfaces/coordinate_transform.CoordinateArray.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/position_widget.ts:367](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/position_widget.ts#L367)

___

### openDropdown

▸ `Private` **openDropdown**(`widget`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `widget` | [`DimensionWidget`](layer_group_viewer._internal_.DimensionWidget.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/position_widget.ts:400](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/position_widget.ts#L400)

___

### openRegularDropdown

▸ `Private` **openRegularDropdown**(`widget`, `dropdown`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `widget` | [`DimensionWidget`](layer_group_viewer._internal_.DimensionWidget.md) |
| `dropdown` | [`HTMLDivElement`](../modules/axes_lines._internal_.md#htmldivelement) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/position_widget.ts:232](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/position_widget.ts#L232)

___

### pasteString

▸ `Private` **pasteString**(`widget`, `s`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `widget` | [`DimensionWidget`](layer_group_viewer._internal_.DimensionWidget.md) |
| `s` | `string` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/position_widget.ts:452](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/position_widget.ts#L452)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[refCountReachedZero](axes_lines._internal_.RefCounted.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L66)

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

[RefCounted](axes_lines._internal_.RefCounted.md).[registerCancellable](axes_lines._internal_.RefCounted.md#registercancellable)

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L100)

___

### registerDisposer

▸ **registerDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/axes_lines._internal_.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[registerDisposer](axes_lines._internal_.RefCounted.md#registerdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L76)

___

### registerEventListener

▸ **registerEventListener**(`target`, `type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EventTarget`](../modules/axes_lines._internal_.md#eventtarget) |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/axes_lines._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](../interfaces/axes_lines._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[registerEventListener](axes_lines._internal_.RefCounted.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L95)

___

### reorderDimensionTo

▸ `Private` **reorderDimensionTo**(`targetIndex`, `sourceIndex`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetIndex` | `number` |
| `sourceIndex` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/position_widget.ts:478](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/position_widget.ts#L478)

___

### selectAdjacentCoordinate

▸ `Private` **selectAdjacentCoordinate**(`widget`, `dir`): `undefined` \| `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `widget` | [`DimensionWidget`](layer_group_viewer._internal_.DimensionWidget.md) |
| `dir` | `number` |

#### Returns

`undefined` \| `boolean`

#### Defined in

[src/neuroglancer/widget/position_widget.ts:779](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/position_widget.ts#L779)

___

### selectAdjacentField

▸ `Private` **selectAdjacentField**(`widget`, `dir`, `fieldGetter`): `undefined` \| `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `widget` | [`DimensionWidget`](layer_group_viewer._internal_.DimensionWidget.md) |
| `dir` | `number` |
| `fieldGetter` | (`widget`: [`DimensionWidget`](layer_group_viewer._internal_.DimensionWidget.md)) => [`HTMLInputElement`](../modules/axes_lines._internal_.md#htmlinputelement) |

#### Returns

`undefined` \| `boolean`

#### Defined in

[src/neuroglancer/widget/position_widget.ts:756](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/position_widget.ts#L756)

___

### unregisterDisposer

▸ **unregisterDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/axes_lines._internal_.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[unregisterDisposer](axes_lines._internal_.RefCounted.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L85)

___

### updateDimensions

▸ `Private` **updateDimensions**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/position_widget.ts:750](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/position_widget.ts#L750)

___

### updateDropdownVisibility

▸ `Private` **updateDropdownVisibility**(`widget`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `widget` | [`DimensionWidget`](layer_group_viewer._internal_.DimensionWidget.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/position_widget.ts:484](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/position_widget.ts#L484)

___

### updateNameValidity

▸ `Private` **updateNameValidity**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/position_widget.ts:797](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/position_widget.ts#L797)

___

### updateNames

▸ `Private` **updateNames**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/widget/position_widget.ts:907](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/position_widget.ts#L907)

___

### updatePosition

▸ `Private` **updatePosition**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/position_widget.ts:890](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/position_widget.ts#L890)

___

### updateScaleValidity

▸ `Private` **updateScaleValidity**(`widget`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `widget` | [`DimensionWidget`](layer_group_viewer._internal_.DimensionWidget.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/position_widget.ts:808](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/position_widget.ts#L808)

___

### updateScales

▸ `Private` **updateScales**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/widget/position_widget.ts:922](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/position_widget.ts#L922)

___

### updateView

▸ `Private` **updateView**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/position_widget.ts:960](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/position_widget.ts#L960)
