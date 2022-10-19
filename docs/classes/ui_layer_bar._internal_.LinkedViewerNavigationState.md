[neuroglancer](../README.md) / [Modules](../modules.md) / [ui/layer\_bar](../modules/ui_layer_bar.md) / [<internal\>](../modules/ui_layer_bar._internal_.md) / LinkedViewerNavigationState

# Class: LinkedViewerNavigationState

[ui/layer_bar](../modules/ui_layer_bar.md).[<internal>](../modules/ui_layer_bar._internal_.md).LinkedViewerNavigationState

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`LinkedViewerNavigationState`**

## Table of contents

### Constructors

- [constructor](ui_layer_bar._internal_.LinkedViewerNavigationState.md#constructor)

### Properties

- [crossSectionDepthRange](ui_layer_bar._internal_.LinkedViewerNavigationState.md#crosssectiondepthrange)
- [crossSectionOrientation](ui_layer_bar._internal_.LinkedViewerNavigationState.md#crosssectionorientation)
- [crossSectionScale](ui_layer_bar._internal_.LinkedViewerNavigationState.md#crosssectionscale)
- [displayDimensionRenderInfo](ui_layer_bar._internal_.LinkedViewerNavigationState.md#displaydimensionrenderinfo)
- [displayDimensions](ui_layer_bar._internal_.LinkedViewerNavigationState.md#displaydimensions)
- [disposedStacks](ui_layer_bar._internal_.LinkedViewerNavigationState.md#disposedstacks)
- [navigationState](ui_layer_bar._internal_.LinkedViewerNavigationState.md#navigationstate)
- [position](ui_layer_bar._internal_.LinkedViewerNavigationState.md#position)
- [projectionDepthRange](ui_layer_bar._internal_.LinkedViewerNavigationState.md#projectiondepthrange)
- [projectionNavigationState](ui_layer_bar._internal_.LinkedViewerNavigationState.md#projectionnavigationstate)
- [projectionOrientation](ui_layer_bar._internal_.LinkedViewerNavigationState.md#projectionorientation)
- [projectionScale](ui_layer_bar._internal_.LinkedViewerNavigationState.md#projectionscale)
- [refCount](ui_layer_bar._internal_.LinkedViewerNavigationState.md#refcount)
- [relativeDisplayScales](ui_layer_bar._internal_.LinkedViewerNavigationState.md#relativedisplayscales)
- [wasDisposed](ui_layer_bar._internal_.LinkedViewerNavigationState.md#wasdisposed)

### Methods

- [addRef](ui_layer_bar._internal_.LinkedViewerNavigationState.md#addref)
- [copyToParent](ui_layer_bar._internal_.LinkedViewerNavigationState.md#copytoparent)
- [dispose](ui_layer_bar._internal_.LinkedViewerNavigationState.md#dispose)
- [disposed](ui_layer_bar._internal_.LinkedViewerNavigationState.md#disposed)
- [refCountReachedZero](ui_layer_bar._internal_.LinkedViewerNavigationState.md#refcountreachedzero)
- [register](ui_layer_bar._internal_.LinkedViewerNavigationState.md#register)
- [registerCancellable](ui_layer_bar._internal_.LinkedViewerNavigationState.md#registercancellable)
- [registerDisposer](ui_layer_bar._internal_.LinkedViewerNavigationState.md#registerdisposer)
- [registerEventListener](ui_layer_bar._internal_.LinkedViewerNavigationState.md#registereventlistener)
- [unregisterDisposer](ui_layer_bar._internal_.LinkedViewerNavigationState.md#unregisterdisposer)

## Constructors

### constructor

• **new LinkedViewerNavigationState**(`parent`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | `Object` |
| `parent.navigationState` | [`NavigationState`](annotation_polygon._internal_.NavigationState.md)<[`TrackableZoomInterface`](../modules/annotation_polygon._internal_.md#trackablezoominterface)\> |
| `parent.perspectiveNavigationState` | [`NavigationState`](annotation_polygon._internal_.NavigationState.md)<[`TrackableZoomInterface`](../modules/annotation_polygon._internal_.md#trackablezoominterface)\> |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:123](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_group_viewer.ts#L123)

## Properties

### crossSectionDepthRange

• **crossSectionDepthRange**: [`LinkedDepthRange`](ui_layer_bar._internal_.LinkedDepthRange.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:117](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_group_viewer.ts#L117)

___

### crossSectionOrientation

• **crossSectionOrientation**: [`LinkedOrientationState`](ui_layer_bar._internal_.LinkedOrientationState.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:113](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_group_viewer.ts#L113)

___

### crossSectionScale

• **crossSectionScale**: [`LinkedZoomState`](ui_layer_bar._internal_.LinkedZoomState.md)<[`TrackableCrossSectionZoom`](annotation_polygon._internal_.TrackableCrossSectionZoom.md)\>

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:114](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_group_viewer.ts#L114)

___

### displayDimensionRenderInfo

• **displayDimensionRenderInfo**: [`WatchableDisplayDimensionRenderInfo`](annotation_polygon._internal_.WatchableDisplayDimensionRenderInfo.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:112](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_group_viewer.ts#L112)

___

### displayDimensions

• **displayDimensions**: [`LinkedDisplayDimensions`](ui_layer_bar._internal_.LinkedDisplayDimensions.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:111](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_group_viewer.ts#L111)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### navigationState

• **navigationState**: [`NavigationState`](annotation_polygon._internal_.NavigationState.md)<[`TrackableZoomInterface`](../modules/annotation_polygon._internal_.md#trackablezoominterface)\>

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:120](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_group_viewer.ts#L120)

___

### position

• **position**: [`LinkedPosition`](ui_layer_bar._internal_.LinkedPosition.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:109](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_group_viewer.ts#L109)

___

### projectionDepthRange

• **projectionDepthRange**: [`LinkedDepthRange`](ui_layer_bar._internal_.LinkedDepthRange.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:118](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_group_viewer.ts#L118)

___

### projectionNavigationState

• **projectionNavigationState**: [`NavigationState`](annotation_polygon._internal_.NavigationState.md)<[`TrackableZoomInterface`](../modules/annotation_polygon._internal_.md#trackablezoominterface)\>

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:121](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_group_viewer.ts#L121)

___

### projectionOrientation

• **projectionOrientation**: [`LinkedOrientationState`](ui_layer_bar._internal_.LinkedOrientationState.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:115](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_group_viewer.ts#L115)

___

### projectionScale

• **projectionScale**: [`LinkedZoomState`](ui_layer_bar._internal_.LinkedZoomState.md)<[`TrackableProjectionZoom`](annotation_polygon._internal_.TrackableProjectionZoom.md)\>

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:116](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_group_viewer.ts#L116)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### relativeDisplayScales

• **relativeDisplayScales**: [`LinkedRelativeDisplayScales`](ui_layer_bar._internal_.LinkedRelativeDisplayScales.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:110](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_group_viewer.ts#L110)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`LinkedViewerNavigationState`](ui_layer_bar._internal_.LinkedViewerNavigationState.md)

#### Returns

[`LinkedViewerNavigationState`](ui_layer_bar._internal_.LinkedViewerNavigationState.md)

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[addRef](util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### copyToParent

▸ **copyToParent**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:161](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_group_viewer.ts#L161)

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

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCountReachedZero](util_disposable.RefCounted.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L66)

___

### register

▸ **register**(`state`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`CompoundTrackable`](util_trackable.CompoundTrackable.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_group_viewer.ts#L175)

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
