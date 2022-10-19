[neuroglancer](../README.md) / [Modules](../modules.md) / [widget/channel\_dimensions\_widget](../modules/widget_channel_dimensions_widget.md) / ChannelDimensionsWidget

# Class: ChannelDimensionsWidget

[widget/channel_dimensions_widget](../modules/widget_channel_dimensions_widget.md).ChannelDimensionsWidget

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`ChannelDimensionsWidget`**

## Table of contents

### Constructors

- [constructor](widget_channel_dimensions_widget.ChannelDimensionsWidget.md#constructor)

### Properties

- [combiner](widget_channel_dimensions_widget.ChannelDimensionsWidget.md#combiner)
- [coordinateSpace](widget_channel_dimensions_widget.ChannelDimensionsWidget.md#coordinatespace)
- [curCoordinateSpace](widget_channel_dimensions_widget.ChannelDimensionsWidget.md#curcoordinatespace)
- [dimensionWidgets](widget_channel_dimensions_widget.ChannelDimensionsWidget.md#dimensionwidgets)
- [disposedStacks](widget_channel_dimensions_widget.ChannelDimensionsWidget.md#disposedstacks)
- [dragSource](widget_channel_dimensions_widget.ChannelDimensionsWidget.md#dragsource)
- [element](widget_channel_dimensions_widget.ChannelDimensionsWidget.md#element)
- [refCount](widget_channel_dimensions_widget.ChannelDimensionsWidget.md#refcount)
- [wasDisposed](widget_channel_dimensions_widget.ChannelDimensionsWidget.md#wasdisposed)

### Methods

- [addRef](widget_channel_dimensions_widget.ChannelDimensionsWidget.md#addref)
- [dispose](widget_channel_dimensions_widget.ChannelDimensionsWidget.md#dispose)
- [disposed](widget_channel_dimensions_widget.ChannelDimensionsWidget.md#disposed)
- [forceUpdateView](widget_channel_dimensions_widget.ChannelDimensionsWidget.md#forceupdateview)
- [makeNewDimensionWidget](widget_channel_dimensions_widget.ChannelDimensionsWidget.md#makenewdimensionwidget)
- [refCountReachedZero](widget_channel_dimensions_widget.ChannelDimensionsWidget.md#refcountreachedzero)
- [registerCancellable](widget_channel_dimensions_widget.ChannelDimensionsWidget.md#registercancellable)
- [registerDisposer](widget_channel_dimensions_widget.ChannelDimensionsWidget.md#registerdisposer)
- [registerEventListener](widget_channel_dimensions_widget.ChannelDimensionsWidget.md#registereventlistener)
- [reorderDimensionTo](widget_channel_dimensions_widget.ChannelDimensionsWidget.md#reorderdimensionto)
- [selectAdjacentField](widget_channel_dimensions_widget.ChannelDimensionsWidget.md#selectadjacentfield)
- [unregisterDisposer](widget_channel_dimensions_widget.ChannelDimensionsWidget.md#unregisterdisposer)
- [updateNameValidity](widget_channel_dimensions_widget.ChannelDimensionsWidget.md#updatenamevalidity)
- [updateNames](widget_channel_dimensions_widget.ChannelDimensionsWidget.md#updatenames)
- [updateView](widget_channel_dimensions_widget.ChannelDimensionsWidget.md#updateview)

## Constructors

### constructor

• **new ChannelDimensionsWidget**(`combiner`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `combiner` | [`CoordinateSpaceCombiner`](annotation_annotation_layer_state._internal_.CoordinateSpaceCombiner.md) |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/widget/channel_dimensions_widget.ts:84](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/channel_dimensions_widget.ts#L84)

## Properties

### combiner

• **combiner**: [`CoordinateSpaceCombiner`](annotation_annotation_layer_state._internal_.CoordinateSpaceCombiner.md)

___

### coordinateSpace

• **coordinateSpace**: [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<[`CoordinateSpace`](../interfaces/annotation_annotation_layer_state._internal_.CoordinateSpace.md)\>

#### Defined in

[src/neuroglancer/widget/channel_dimensions_widget.ts:82](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/channel_dimensions_widget.ts#L82)

___

### curCoordinateSpace

• `Private` **curCoordinateSpace**: `undefined` \| [`CoordinateSpace`](../interfaces/annotation_annotation_layer_state._internal_.CoordinateSpace.md) = `undefined`

#### Defined in

[src/neuroglancer/widget/channel_dimensions_widget.ts:74](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/channel_dimensions_widget.ts#L74)

___

### dimensionWidgets

• `Private` **dimensionWidgets**: [`DimensionWidget`](widget_channel_dimensions_widget._internal_.DimensionWidget.md)[] = `[]`

#### Defined in

[src/neuroglancer/widget/channel_dimensions_widget.ts:73](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/channel_dimensions_widget.ts#L73)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### dragSource

• `Private` **dragSource**: `undefined` \| [`DimensionWidget`](widget_channel_dimensions_widget._internal_.DimensionWidget.md) = `undefined`

#### Defined in

[src/neuroglancer/widget/channel_dimensions_widget.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/channel_dimensions_widget.ts#L75)

___

### element

• **element**: [`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/widget/channel_dimensions_widget.ts:72](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/channel_dimensions_widget.ts#L72)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`ChannelDimensionsWidget`](widget_channel_dimensions_widget.ChannelDimensionsWidget.md)

#### Returns

[`ChannelDimensionsWidget`](widget_channel_dimensions_widget.ChannelDimensionsWidget.md)

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

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposed](util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L75)

___

### forceUpdateView

▸ `Private` **forceUpdateView**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/channel_dimensions_widget.ts:188](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/channel_dimensions_widget.ts#L188)

___

### makeNewDimensionWidget

▸ `Private` **makeNewDimensionWidget**(`id`): [`DimensionWidget`](widget_channel_dimensions_widget._internal_.DimensionWidget.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

[`DimensionWidget`](widget_channel_dimensions_widget._internal_.DimensionWidget.md)

#### Defined in

[src/neuroglancer/widget/channel_dimensions_widget.ts:103](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/channel_dimensions_widget.ts#L103)

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

[src/neuroglancer/widget/channel_dimensions_widget.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/channel_dimensions_widget.ts#L76)

___

### selectAdjacentField

▸ `Private` **selectAdjacentField**(`event`, `widget`, `dir`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event) |
| `widget` | [`DimensionWidget`](widget_channel_dimensions_widget._internal_.DimensionWidget.md) |
| `dir` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/channel_dimensions_widget.ts:151](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/channel_dimensions_widget.ts#L151)

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

### updateNameValidity

▸ `Private` **updateNameValidity**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/channel_dimensions_widget.ts:178](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/channel_dimensions_widget.ts#L178)

___

### updateNames

▸ `Private` **updateNames**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/widget/channel_dimensions_widget.ts:164](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/channel_dimensions_widget.ts#L164)

___

### updateView

▸ `Private` **updateView**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/channel_dimensions_widget.ts:193](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/channel_dimensions_widget.ts#L193)
