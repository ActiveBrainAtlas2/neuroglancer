[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/widget/display\_dimensions\_widget](../modules/neuroglancer_widget_display_dimensions_widget.md) / DisplayDimensionsWidget

# Class: DisplayDimensionsWidget

[neuroglancer/widget/display_dimensions_widget](../modules/neuroglancer_widget_display_dimensions_widget.md).DisplayDimensionsWidget

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`DisplayDimensionsWidget`**

## Table of contents

### Constructors

- [constructor](neuroglancer_widget_display_dimensions_widget.DisplayDimensionsWidget.md#constructor)

### Properties

- [defaultCheckbox](neuroglancer_widget_display_dimensions_widget.DisplayDimensionsWidget.md#defaultcheckbox)
- [depthGridContainer](neuroglancer_widget_display_dimensions_widget.DisplayDimensionsWidget.md#depthgridcontainer)
- [depthRange](neuroglancer_widget_display_dimensions_widget.DisplayDimensionsWidget.md#depthrange)
- [dimensionElements](neuroglancer_widget_display_dimensions_widget.DisplayDimensionsWidget.md#dimensionelements)
- [dimensionGridContainer](neuroglancer_widget_display_dimensions_widget.DisplayDimensionsWidget.md#dimensiongridcontainer)
- [displayDimensionRenderInfo](neuroglancer_widget_display_dimensions_widget.DisplayDimensionsWidget.md#displaydimensionrenderinfo)
- [displayUnit](neuroglancer_widget_display_dimensions_widget.DisplayDimensionsWidget.md#displayunit)
- [disposedStacks](neuroglancer_widget_display_dimensions_widget.DisplayDimensionsWidget.md#disposedstacks)
- [element](neuroglancer_widget_display_dimensions_widget.DisplayDimensionsWidget.md#element)
- [refCount](neuroglancer_widget_display_dimensions_widget.DisplayDimensionsWidget.md#refcount)
- [scheduleUpdateView](neuroglancer_widget_display_dimensions_widget.DisplayDimensionsWidget.md#scheduleupdateview)
- [wasDisposed](neuroglancer_widget_display_dimensions_widget.DisplayDimensionsWidget.md#wasdisposed)
- [zoom](neuroglancer_widget_display_dimensions_widget.DisplayDimensionsWidget.md#zoom)

### Accessors

- [displayDimensions](neuroglancer_widget_display_dimensions_widget.DisplayDimensionsWidget.md#displaydimensions)
- [relativeDisplayScales](neuroglancer_widget_display_dimensions_widget.DisplayDimensionsWidget.md#relativedisplayscales)

### Methods

- [addRef](neuroglancer_widget_display_dimensions_widget.DisplayDimensionsWidget.md#addref)
- [dispose](neuroglancer_widget_display_dimensions_widget.DisplayDimensionsWidget.md#dispose)
- [disposed](neuroglancer_widget_display_dimensions_widget.DisplayDimensionsWidget.md#disposed)
- [refCountReachedZero](neuroglancer_widget_display_dimensions_widget.DisplayDimensionsWidget.md#refcountreachedzero)
- [registerCancellable](neuroglancer_widget_display_dimensions_widget.DisplayDimensionsWidget.md#registercancellable)
- [registerDisposer](neuroglancer_widget_display_dimensions_widget.DisplayDimensionsWidget.md#registerdisposer)
- [registerEventListener](neuroglancer_widget_display_dimensions_widget.DisplayDimensionsWidget.md#registereventlistener)
- [unregisterDisposer](neuroglancer_widget_display_dimensions_widget.DisplayDimensionsWidget.md#unregisterdisposer)
- [updateDefault](neuroglancer_widget_display_dimensions_widget.DisplayDimensionsWidget.md#updatedefault)
- [updateNameValidity](neuroglancer_widget_display_dimensions_widget.DisplayDimensionsWidget.md#updatenamevalidity)
- [updateNames](neuroglancer_widget_display_dimensions_widget.DisplayDimensionsWidget.md#updatenames)
- [updateScaleFactors](neuroglancer_widget_display_dimensions_widget.DisplayDimensionsWidget.md#updatescalefactors)
- [updateView](neuroglancer_widget_display_dimensions_widget.DisplayDimensionsWidget.md#updateview)
- [zoomDimension](neuroglancer_widget_display_dimensions_widget.DisplayDimensionsWidget.md#zoomdimension)

## Constructors

### constructor

• **new DisplayDimensionsWidget**(`displayDimensionRenderInfo`, `zoom`, `depthRange`, `displayUnit?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `displayDimensionRenderInfo` | [`WatchableDisplayDimensionRenderInfo`](neuroglancer_navigation_state.WatchableDisplayDimensionRenderInfo.md) | `undefined` |
| `zoom` | [`TrackableZoomInterface`](../modules/neuroglancer_navigation_state.md#trackablezoominterface) | `undefined` |
| `depthRange` | [`TrackableDepthRange`](neuroglancer_navigation_state.TrackableDepthRange.md) | `undefined` |
| `displayUnit` | `string` | `'px'` |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/widget/display_dimensions_widget.ts:230](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/display_dimensions_widget.ts#L230)

## Properties

### defaultCheckbox

• **defaultCheckbox**: [`HTMLInputElement`](../modules/main_module._internal_.md#htmlinputelement)

#### Defined in

[src/neuroglancer/widget/display_dimensions_widget.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/display_dimensions_widget.ts#L75)

___

### depthGridContainer

• **depthGridContainer**: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/widget/display_dimensions_widget.ts:73](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/display_dimensions_widget.ts#L73)

___

### depthRange

• **depthRange**: [`TrackableDepthRange`](neuroglancer_navigation_state.TrackableDepthRange.md)

___

### dimensionElements

• **dimensionElements**: [`DimensionWidget`](../interfaces/neuroglancer_widget_display_dimensions_widget._internal_.DimensionWidget.md)[]

#### Defined in

[src/neuroglancer/widget/display_dimensions_widget.ts:77](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/display_dimensions_widget.ts#L77)

___

### dimensionGridContainer

• **dimensionGridContainer**: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/widget/display_dimensions_widget.ts:72](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/display_dimensions_widget.ts#L72)

___

### displayDimensionRenderInfo

• **displayDimensionRenderInfo**: [`WatchableDisplayDimensionRenderInfo`](neuroglancer_navigation_state.WatchableDisplayDimensionRenderInfo.md)

___

### displayUnit

• **displayUnit**: `string` = `'px'`

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/widget/display_dimensions_widget.ts:70](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/display_dimensions_widget.ts#L70)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### scheduleUpdateView

• `Private` **scheduleUpdateView**: [`DebouncedFunction`](../interfaces/neuroglancer_util_animation_frame_debounce.DebouncedFunction.md)

#### Defined in

[src/neuroglancer/widget/display_dimensions_widget.ts:220](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/display_dimensions_widget.ts#L220)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

___

### zoom

• **zoom**: [`TrackableZoomInterface`](../modules/neuroglancer_navigation_state.md#trackablezoominterface)

## Accessors

### displayDimensions

• `get` **displayDimensions**(): [`TrackableDisplayDimensions`](neuroglancer_navigation_state.TrackableDisplayDimensions.md)

#### Returns

[`TrackableDisplayDimensions`](neuroglancer_navigation_state.TrackableDisplayDimensions.md)

#### Defined in

[src/neuroglancer/widget/display_dimensions_widget.ts:222](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/display_dimensions_widget.ts#L222)

___

### relativeDisplayScales

• `get` **relativeDisplayScales**(): [`TrackableRelativeDisplayScales`](neuroglancer_navigation_state.TrackableRelativeDisplayScales.md)

#### Returns

[`TrackableRelativeDisplayScales`](neuroglancer_navigation_state.TrackableRelativeDisplayScales.md)

#### Defined in

[src/neuroglancer/widget/display_dimensions_widget.ts:226](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/display_dimensions_widget.ts#L226)

## Methods

### addRef

▸ **addRef**(): [`DisplayDimensionsWidget`](neuroglancer_widget_display_dimensions_widget.DisplayDimensionsWidget.md)

#### Returns

[`DisplayDimensionsWidget`](neuroglancer_widget_display_dimensions_widget.DisplayDimensionsWidget.md)

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[addRef](neuroglancer_util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L48)

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

[src/neuroglancer/widget/display_dimensions_widget.ts:536](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/display_dimensions_widget.ts#L536)

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

### updateDefault

▸ `Private` **updateDefault**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/display_dimensions_widget.ts:458](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/display_dimensions_widget.ts#L458)

___

### updateNameValidity

▸ `Private` **updateNameValidity**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/display_dimensions_widget.ts:193](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/display_dimensions_widget.ts#L193)

___

### updateNames

▸ `Private` **updateNames**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/widget/display_dimensions_widget.ts:432](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/display_dimensions_widget.ts#L432)

___

### updateScaleFactors

▸ `Private` **updateScaleFactors**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/widget/display_dimensions_widget.ts:462](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/display_dimensions_widget.ts#L462)

___

### updateView

▸ `Private` **updateView**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/display_dimensions_widget.ts:483](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/display_dimensions_widget.ts#L483)

___

### zoomDimension

▸ `Private` **zoomDimension**(`i`, `sign`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `i` | `number` |
| `sign` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/display_dimensions_widget.ts:180](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/display_dimensions_widget.ts#L180)
