[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/widget/position\_widget](../modules/neuroglancer_widget_position_widget.md) / PositionWidget

# Class: PositionWidget

[neuroglancer/widget/position_widget](../modules/neuroglancer_widget_position_widget.md).PositionWidget

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`PositionWidget`**

## Table of contents

### Constructors

- [constructor](neuroglancer_widget_position_widget.PositionWidget.md#constructor)

### Properties

- [combiner](neuroglancer_widget_position_widget.PositionWidget.md#combiner)
- [coordinateSpace](neuroglancer_widget_position_widget.PositionWidget.md#coordinatespace)
- [dimensionContainer](neuroglancer_widget_position_widget.PositionWidget.md#dimensioncontainer)
- [dimensionWidgetList](neuroglancer_widget_position_widget.PositionWidget.md#dimensionwidgetlist)
- [dimensionWidgets](neuroglancer_widget_position_widget.PositionWidget.md#dimensionwidgets)
- [disposedStacks](neuroglancer_widget_position_widget.PositionWidget.md#disposedstacks)
- [dragSource](neuroglancer_widget_position_widget.PositionWidget.md#dragsource)
- [element](neuroglancer_widget_position_widget.PositionWidget.md#element)
- [position](neuroglancer_widget_position_widget.PositionWidget.md#position)
- [refCount](neuroglancer_widget_position_widget.PositionWidget.md#refcount)
- [wasDisposed](neuroglancer_widget_position_widget.PositionWidget.md#wasdisposed)
- [widgetWithOpenDropdown](neuroglancer_widget_position_widget.PositionWidget.md#widgetwithopendropdown)

### Methods

- [addRef](neuroglancer_widget_position_widget.PositionWidget.md#addref)
- [adjustDimension](neuroglancer_widget_position_widget.PositionWidget.md#adjustdimension)
- [closeDropdown](neuroglancer_widget_position_widget.PositionWidget.md#closedropdown)
- [dispose](neuroglancer_widget_position_widget.PositionWidget.md#dispose)
- [disposed](neuroglancer_widget_position_widget.PositionWidget.md#disposed)
- [forceUpdateDimensions](neuroglancer_widget_position_widget.PositionWidget.md#forceupdatedimensions)
- [getPositionText](neuroglancer_widget_position_widget.PositionWidget.md#getpositiontext)
- [handleLeftRightMovement](neuroglancer_widget_position_widget.PositionWidget.md#handleleftrightmovement)
- [newDimension](neuroglancer_widget_position_widget.PositionWidget.md#newdimension)
- [openCoordinateArrayDropdown](neuroglancer_widget_position_widget.PositionWidget.md#opencoordinatearraydropdown)
- [openDropdown](neuroglancer_widget_position_widget.PositionWidget.md#opendropdown)
- [openRegularDropdown](neuroglancer_widget_position_widget.PositionWidget.md#openregulardropdown)
- [pasteString](neuroglancer_widget_position_widget.PositionWidget.md#pastestring)
- [refCountReachedZero](neuroglancer_widget_position_widget.PositionWidget.md#refcountreachedzero)
- [registerCancellable](neuroglancer_widget_position_widget.PositionWidget.md#registercancellable)
- [registerDisposer](neuroglancer_widget_position_widget.PositionWidget.md#registerdisposer)
- [registerEventListener](neuroglancer_widget_position_widget.PositionWidget.md#registereventlistener)
- [reorderDimensionTo](neuroglancer_widget_position_widget.PositionWidget.md#reorderdimensionto)
- [selectAdjacentCoordinate](neuroglancer_widget_position_widget.PositionWidget.md#selectadjacentcoordinate)
- [selectAdjacentField](neuroglancer_widget_position_widget.PositionWidget.md#selectadjacentfield)
- [unregisterDisposer](neuroglancer_widget_position_widget.PositionWidget.md#unregisterdisposer)
- [updateDimensions](neuroglancer_widget_position_widget.PositionWidget.md#updatedimensions)
- [updateDropdownVisibility](neuroglancer_widget_position_widget.PositionWidget.md#updatedropdownvisibility)
- [updateNameValidity](neuroglancer_widget_position_widget.PositionWidget.md#updatenamevalidity)
- [updateNames](neuroglancer_widget_position_widget.PositionWidget.md#updatenames)
- [updatePosition](neuroglancer_widget_position_widget.PositionWidget.md#updateposition)
- [updateScaleValidity](neuroglancer_widget_position_widget.PositionWidget.md#updatescalevalidity)
- [updateScales](neuroglancer_widget_position_widget.PositionWidget.md#updatescales)
- [updateView](neuroglancer_widget_position_widget.PositionWidget.md#updateview)

## Constructors

### constructor

• **new PositionWidget**(`position`, `combiner`, `__namedParameters?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | [`Position`](neuroglancer_navigation_state.Position.md) |
| `combiner` | [`CoordinateSpaceCombiner`](neuroglancer_coordinate_transform.CoordinateSpaceCombiner.md) |
| `__namedParameters` | `Object` |
| `__namedParameters.copyButton` | `undefined` \| `boolean` |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/widget/position_widget.ts:813](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/position_widget.ts#L813)

## Properties

### combiner

• **combiner**: [`CoordinateSpaceCombiner`](neuroglancer_coordinate_transform.CoordinateSpaceCombiner.md)

___

### coordinateSpace

• `Private` **coordinateSpace**: `undefined` \| [`CoordinateSpace`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpace.md) = `undefined`

#### Defined in

[src/neuroglancer/widget/position_widget.ts:227](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/position_widget.ts#L227)

___

### dimensionContainer

• `Private` **dimensionContainer**: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/widget/position_widget.ts:226](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/position_widget.ts#L226)

___

### dimensionWidgetList

• `Private` **dimensionWidgetList**: [`DimensionWidget`](neuroglancer_widget_position_widget._internal_.DimensionWidget.md)[] = `[]`

#### Defined in

[src/neuroglancer/widget/position_widget.ts:230](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/position_widget.ts#L230)

___

### dimensionWidgets

• `Private` **dimensionWidgets**: `Map`<`number`, [`DimensionWidget`](neuroglancer_widget_position_widget._internal_.DimensionWidget.md)\>

#### Defined in

[src/neuroglancer/widget/position_widget.ts:229](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/position_widget.ts#L229)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### dragSource

• `Private` **dragSource**: `undefined` \| [`DimensionWidget`](neuroglancer_widget_position_widget._internal_.DimensionWidget.md) = `undefined`

#### Defined in

[src/neuroglancer/widget/position_widget.ts:476](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/position_widget.ts#L476)

___

### element

• **element**: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/widget/position_widget.ts:225](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/position_widget.ts#L225)

___

### position

• **position**: [`Position`](neuroglancer_navigation_state.Position.md)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

___

### widgetWithOpenDropdown

• `Private` **widgetWithOpenDropdown**: `undefined` \| [`DimensionWidget`](neuroglancer_widget_position_widget._internal_.DimensionWidget.md)

#### Defined in

[src/neuroglancer/widget/position_widget.ts:443](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/position_widget.ts#L443)

## Methods

### addRef

▸ **addRef**(): [`PositionWidget`](neuroglancer_widget_position_widget.PositionWidget.md)

#### Returns

[`PositionWidget`](neuroglancer_widget_position_widget.PositionWidget.md)

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[addRef](neuroglancer_util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L48)

___

### adjustDimension

▸ `Private` **adjustDimension**(`widget`, `adjustment`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `widget` | [`DimensionWidget`](neuroglancer_widget_position_widget._internal_.DimensionWidget.md) |
| `adjustment` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/position_widget.ts:862](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/position_widget.ts#L862)

___

### closeDropdown

▸ `Private` **closeDropdown**(`widget?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `widget` | `undefined` \| [`DimensionWidget`](neuroglancer_widget_position_widget._internal_.DimensionWidget.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/position_widget.ts:445](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/position_widget.ts#L445)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[dispose](neuroglancer_util_disposable.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposed](neuroglancer_util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/widget/position_widget.ts:989](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/position_widget.ts#L989)

___

### forceUpdateDimensions

▸ `Private` **forceUpdateDimensions**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/position_widget.ts:695](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/position_widget.ts#L695)

___

### getPositionText

▸ `Private` **getPositionText**(): `string`

#### Returns

`string`

#### Defined in

[src/neuroglancer/widget/position_widget.ts:951](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/position_widget.ts#L951)

___

### handleLeftRightMovement

▸ `Private` **handleLeftRightMovement**(`event`, `widget`, `dir`, `getter`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`ActionEvent`](../interfaces/neuroglancer_util_event_action_map.ActionEvent.md)<[`Event`](../modules/main_module._internal_.md#event)\> |
| `widget` | [`DimensionWidget`](neuroglancer_widget_position_widget._internal_.DimensionWidget.md) |
| `dir` | `number` |
| `getter` | (`widget`: [`DimensionWidget`](neuroglancer_widget_position_widget._internal_.DimensionWidget.md)) => [`HTMLInputElement`](../modules/main_module._internal_.md#htmlinputelement) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/position_widget.ts:783](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/position_widget.ts#L783)

___

### newDimension

▸ `Private` **newDimension**(`coordinateSpace`, `initialDimensionIndex`): [`DimensionWidget`](neuroglancer_widget_position_widget._internal_.DimensionWidget.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `coordinateSpace` | [`CoordinateSpace`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpace.md) |
| `initialDimensionIndex` | `number` |

#### Returns

[`DimensionWidget`](neuroglancer_widget_position_widget._internal_.DimensionWidget.md)

#### Defined in

[src/neuroglancer/widget/position_widget.ts:492](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/position_widget.ts#L492)

___

### openCoordinateArrayDropdown

▸ `Private` **openCoordinateArrayDropdown**(`widget`, `dropdown`, `coordinateArray`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `widget` | [`DimensionWidget`](neuroglancer_widget_position_widget._internal_.DimensionWidget.md) |
| `dropdown` | [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement) |
| `coordinateArray` | [`CoordinateArray`](../interfaces/neuroglancer_coordinate_transform.CoordinateArray.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/position_widget.ts:367](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/position_widget.ts#L367)

___

### openDropdown

▸ `Private` **openDropdown**(`widget`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `widget` | [`DimensionWidget`](neuroglancer_widget_position_widget._internal_.DimensionWidget.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/position_widget.ts:400](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/position_widget.ts#L400)

___

### openRegularDropdown

▸ `Private` **openRegularDropdown**(`widget`, `dropdown`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `widget` | [`DimensionWidget`](neuroglancer_widget_position_widget._internal_.DimensionWidget.md) |
| `dropdown` | [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/position_widget.ts:232](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/position_widget.ts#L232)

___

### pasteString

▸ `Private` **pasteString**(`widget`, `s`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `widget` | [`DimensionWidget`](neuroglancer_widget_position_widget._internal_.DimensionWidget.md) |
| `s` | `string` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/position_widget.ts:452](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/position_widget.ts#L452)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCountReachedZero](neuroglancer_util_disposable.RefCounted.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L66)

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

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L100)

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

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L76)

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

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L95)

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

[src/neuroglancer/widget/position_widget.ts:478](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/position_widget.ts#L478)

___

### selectAdjacentCoordinate

▸ `Private` **selectAdjacentCoordinate**(`widget`, `dir`): `undefined` \| `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `widget` | [`DimensionWidget`](neuroglancer_widget_position_widget._internal_.DimensionWidget.md) |
| `dir` | `number` |

#### Returns

`undefined` \| `boolean`

#### Defined in

[src/neuroglancer/widget/position_widget.ts:779](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/position_widget.ts#L779)

___

### selectAdjacentField

▸ `Private` **selectAdjacentField**(`widget`, `dir`, `fieldGetter`): `undefined` \| `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `widget` | [`DimensionWidget`](neuroglancer_widget_position_widget._internal_.DimensionWidget.md) |
| `dir` | `number` |
| `fieldGetter` | (`widget`: [`DimensionWidget`](neuroglancer_widget_position_widget._internal_.DimensionWidget.md)) => [`HTMLInputElement`](../modules/main_module._internal_.md#htmlinputelement) |

#### Returns

`undefined` \| `boolean`

#### Defined in

[src/neuroglancer/widget/position_widget.ts:756](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/position_widget.ts#L756)

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

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L85)

___

### updateDimensions

▸ `Private` **updateDimensions**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/position_widget.ts:750](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/position_widget.ts#L750)

___

### updateDropdownVisibility

▸ `Private` **updateDropdownVisibility**(`widget`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `widget` | [`DimensionWidget`](neuroglancer_widget_position_widget._internal_.DimensionWidget.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/position_widget.ts:484](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/position_widget.ts#L484)

___

### updateNameValidity

▸ `Private` **updateNameValidity**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/position_widget.ts:797](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/position_widget.ts#L797)

___

### updateNames

▸ `Private` **updateNames**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/widget/position_widget.ts:907](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/position_widget.ts#L907)

___

### updatePosition

▸ `Private` **updatePosition**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/position_widget.ts:890](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/position_widget.ts#L890)

___

### updateScaleValidity

▸ `Private` **updateScaleValidity**(`widget`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `widget` | [`DimensionWidget`](neuroglancer_widget_position_widget._internal_.DimensionWidget.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/position_widget.ts:808](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/position_widget.ts#L808)

___

### updateScales

▸ `Private` **updateScales**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/widget/position_widget.ts:922](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/position_widget.ts#L922)

___

### updateView

▸ `Private` **updateView**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/position_widget.ts:960](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/position_widget.ts#L960)
