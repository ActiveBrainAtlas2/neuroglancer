[neuroglancer](../README.md) / [Modules](../modules.md) / [widget/display\_dimensions\_widget](../modules/widget_display_dimensions_widget.md) / DisplayDimensionsWidget

# Class: DisplayDimensionsWidget

[widget/display_dimensions_widget](../modules/widget_display_dimensions_widget.md).DisplayDimensionsWidget

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`DisplayDimensionsWidget`**

## Table of contents

### Constructors

- [constructor](widget_display_dimensions_widget.DisplayDimensionsWidget.md#constructor)

### Properties

- [defaultCheckbox](widget_display_dimensions_widget.DisplayDimensionsWidget.md#defaultcheckbox)
- [depthGridContainer](widget_display_dimensions_widget.DisplayDimensionsWidget.md#depthgridcontainer)
- [depthRange](widget_display_dimensions_widget.DisplayDimensionsWidget.md#depthrange)
- [dimensionElements](widget_display_dimensions_widget.DisplayDimensionsWidget.md#dimensionelements)
- [dimensionGridContainer](widget_display_dimensions_widget.DisplayDimensionsWidget.md#dimensiongridcontainer)
- [displayDimensionRenderInfo](widget_display_dimensions_widget.DisplayDimensionsWidget.md#displaydimensionrenderinfo)
- [displayUnit](widget_display_dimensions_widget.DisplayDimensionsWidget.md#displayunit)
- [disposedStacks](widget_display_dimensions_widget.DisplayDimensionsWidget.md#disposedstacks)
- [element](widget_display_dimensions_widget.DisplayDimensionsWidget.md#element)
- [refCount](widget_display_dimensions_widget.DisplayDimensionsWidget.md#refcount)
- [scheduleUpdateView](widget_display_dimensions_widget.DisplayDimensionsWidget.md#scheduleupdateview)
- [wasDisposed](widget_display_dimensions_widget.DisplayDimensionsWidget.md#wasdisposed)
- [zoom](widget_display_dimensions_widget.DisplayDimensionsWidget.md#zoom)

### Accessors

- [displayDimensions](widget_display_dimensions_widget.DisplayDimensionsWidget.md#displaydimensions)
- [relativeDisplayScales](widget_display_dimensions_widget.DisplayDimensionsWidget.md#relativedisplayscales)

### Methods

- [addRef](widget_display_dimensions_widget.DisplayDimensionsWidget.md#addref)
- [dispose](widget_display_dimensions_widget.DisplayDimensionsWidget.md#dispose)
- [disposed](widget_display_dimensions_widget.DisplayDimensionsWidget.md#disposed)
- [refCountReachedZero](widget_display_dimensions_widget.DisplayDimensionsWidget.md#refcountreachedzero)
- [registerCancellable](widget_display_dimensions_widget.DisplayDimensionsWidget.md#registercancellable)
- [registerDisposer](widget_display_dimensions_widget.DisplayDimensionsWidget.md#registerdisposer)
- [registerEventListener](widget_display_dimensions_widget.DisplayDimensionsWidget.md#registereventlistener)
- [unregisterDisposer](widget_display_dimensions_widget.DisplayDimensionsWidget.md#unregisterdisposer)
- [updateDefault](widget_display_dimensions_widget.DisplayDimensionsWidget.md#updatedefault)
- [updateNameValidity](widget_display_dimensions_widget.DisplayDimensionsWidget.md#updatenamevalidity)
- [updateNames](widget_display_dimensions_widget.DisplayDimensionsWidget.md#updatenames)
- [updateScaleFactors](widget_display_dimensions_widget.DisplayDimensionsWidget.md#updatescalefactors)
- [updateView](widget_display_dimensions_widget.DisplayDimensionsWidget.md#updateview)
- [zoomDimension](widget_display_dimensions_widget.DisplayDimensionsWidget.md#zoomdimension)

## Constructors

### constructor

• **new DisplayDimensionsWidget**(`displayDimensionRenderInfo`, `zoom`, `depthRange`, `displayUnit?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `displayDimensionRenderInfo` | [`WatchableDisplayDimensionRenderInfo`](annotation_polygon._internal_.WatchableDisplayDimensionRenderInfo.md) | `undefined` |
| `zoom` | [`TrackableZoomInterface`](../modules/annotation_polygon._internal_.md#trackablezoominterface) | `undefined` |
| `depthRange` | [`TrackableDepthRange`](annotation_polygon._internal_.TrackableDepthRange.md) | `undefined` |
| `displayUnit` | `string` | `'px'` |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/widget/display_dimensions_widget.ts:230](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/display_dimensions_widget.ts#L230)

## Properties

### defaultCheckbox

• **defaultCheckbox**: [`HTMLInputElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlinputelement)

#### Defined in

[src/neuroglancer/widget/display_dimensions_widget.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/display_dimensions_widget.ts#L75)

___

### depthGridContainer

• **depthGridContainer**: [`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/widget/display_dimensions_widget.ts:73](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/display_dimensions_widget.ts#L73)

___

### depthRange

• **depthRange**: [`TrackableDepthRange`](annotation_polygon._internal_.TrackableDepthRange.md)

___

### dimensionElements

• **dimensionElements**: [`DimensionWidget`](../interfaces/widget_display_dimensions_widget._internal_.DimensionWidget.md)[]

#### Defined in

[src/neuroglancer/widget/display_dimensions_widget.ts:77](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/display_dimensions_widget.ts#L77)

___

### dimensionGridContainer

• **dimensionGridContainer**: [`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/widget/display_dimensions_widget.ts:72](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/display_dimensions_widget.ts#L72)

___

### displayDimensionRenderInfo

• **displayDimensionRenderInfo**: [`WatchableDisplayDimensionRenderInfo`](annotation_polygon._internal_.WatchableDisplayDimensionRenderInfo.md)

___

### displayUnit

• **displayUnit**: `string` = `'px'`

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: [`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/widget/display_dimensions_widget.ts:70](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/display_dimensions_widget.ts#L70)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### scheduleUpdateView

• `Private` **scheduleUpdateView**: [`DebouncedFunction`](../interfaces/util_animation_frame_debounce.DebouncedFunction.md)

#### Defined in

[src/neuroglancer/widget/display_dimensions_widget.ts:220](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/display_dimensions_widget.ts#L220)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

___

### zoom

• **zoom**: [`TrackableZoomInterface`](../modules/annotation_polygon._internal_.md#trackablezoominterface)

## Accessors

### displayDimensions

• `get` **displayDimensions**(): [`TrackableDisplayDimensions`](annotation_polygon._internal_.TrackableDisplayDimensions.md)

#### Returns

[`TrackableDisplayDimensions`](annotation_polygon._internal_.TrackableDisplayDimensions.md)

#### Defined in

[src/neuroglancer/widget/display_dimensions_widget.ts:222](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/display_dimensions_widget.ts#L222)

___

### relativeDisplayScales

• `get` **relativeDisplayScales**(): [`TrackableRelativeDisplayScales`](annotation_polygon._internal_.TrackableRelativeDisplayScales.md)

#### Returns

[`TrackableRelativeDisplayScales`](annotation_polygon._internal_.TrackableRelativeDisplayScales.md)

#### Defined in

[src/neuroglancer/widget/display_dimensions_widget.ts:226](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/display_dimensions_widget.ts#L226)

## Methods

### addRef

▸ **addRef**(): [`DisplayDimensionsWidget`](widget_display_dimensions_widget.DisplayDimensionsWidget.md)

#### Returns

[`DisplayDimensionsWidget`](widget_display_dimensions_widget.DisplayDimensionsWidget.md)

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[addRef](util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[dispose](util_disposable.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[disposed](util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/widget/display_dimensions_widget.ts:536](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/display_dimensions_widget.ts#L536)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCountReachedZero](util_disposable.RefCounted.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L66)

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

[RefCounted](util_disposable.RefCounted.md).[registerCancellable](util_disposable.RefCounted.md#registercancellable)

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L100)

___

### registerDisposer

▸ **registerDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/util_disposable.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[registerDisposer](util_disposable.RefCounted.md#registerdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L76)

___

### registerEventListener

▸ **registerEventListener**(`target`, `type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EventTarget`](../modules/annotation_annotation_layer_state._internal_.md#eventtarget) |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/annotation_annotation_layer_state._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](../interfaces/annotation_annotation_layer_state._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[registerEventListener](util_disposable.RefCounted.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L95)

___

### unregisterDisposer

▸ **unregisterDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/util_disposable.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[unregisterDisposer](util_disposable.RefCounted.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)

___

### updateDefault

▸ `Private` **updateDefault**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/display_dimensions_widget.ts:458](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/display_dimensions_widget.ts#L458)

___

### updateNameValidity

▸ `Private` **updateNameValidity**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/display_dimensions_widget.ts:193](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/display_dimensions_widget.ts#L193)

___

### updateNames

▸ `Private` **updateNames**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/widget/display_dimensions_widget.ts:432](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/display_dimensions_widget.ts#L432)

___

### updateScaleFactors

▸ `Private` **updateScaleFactors**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/widget/display_dimensions_widget.ts:462](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/display_dimensions_widget.ts#L462)

___

### updateView

▸ `Private` **updateView**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/display_dimensions_widget.ts:483](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/display_dimensions_widget.ts#L483)

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

[src/neuroglancer/widget/display_dimensions_widget.ts:180](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/display_dimensions_widget.ts#L180)
