[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/layer\_group\_viewer](../modules/neuroglancer_layer_group_viewer.md) / LinkedViewerNavigationState

# Class: LinkedViewerNavigationState

[neuroglancer/layer_group_viewer](../modules/neuroglancer_layer_group_viewer.md).LinkedViewerNavigationState

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`LinkedViewerNavigationState`**

## Table of contents

### Constructors

- [constructor](neuroglancer_layer_group_viewer.LinkedViewerNavigationState.md#constructor)

### Properties

- [crossSectionDepthRange](neuroglancer_layer_group_viewer.LinkedViewerNavigationState.md#crosssectiondepthrange)
- [crossSectionOrientation](neuroglancer_layer_group_viewer.LinkedViewerNavigationState.md#crosssectionorientation)
- [crossSectionScale](neuroglancer_layer_group_viewer.LinkedViewerNavigationState.md#crosssectionscale)
- [displayDimensionRenderInfo](neuroglancer_layer_group_viewer.LinkedViewerNavigationState.md#displaydimensionrenderinfo)
- [displayDimensions](neuroglancer_layer_group_viewer.LinkedViewerNavigationState.md#displaydimensions)
- [disposedStacks](neuroglancer_layer_group_viewer.LinkedViewerNavigationState.md#disposedstacks)
- [navigationState](neuroglancer_layer_group_viewer.LinkedViewerNavigationState.md#navigationstate)
- [position](neuroglancer_layer_group_viewer.LinkedViewerNavigationState.md#position)
- [projectionDepthRange](neuroglancer_layer_group_viewer.LinkedViewerNavigationState.md#projectiondepthrange)
- [projectionNavigationState](neuroglancer_layer_group_viewer.LinkedViewerNavigationState.md#projectionnavigationstate)
- [projectionOrientation](neuroglancer_layer_group_viewer.LinkedViewerNavigationState.md#projectionorientation)
- [projectionScale](neuroglancer_layer_group_viewer.LinkedViewerNavigationState.md#projectionscale)
- [refCount](neuroglancer_layer_group_viewer.LinkedViewerNavigationState.md#refcount)
- [relativeDisplayScales](neuroglancer_layer_group_viewer.LinkedViewerNavigationState.md#relativedisplayscales)
- [wasDisposed](neuroglancer_layer_group_viewer.LinkedViewerNavigationState.md#wasdisposed)

### Methods

- [addRef](neuroglancer_layer_group_viewer.LinkedViewerNavigationState.md#addref)
- [copyToParent](neuroglancer_layer_group_viewer.LinkedViewerNavigationState.md#copytoparent)
- [dispose](neuroglancer_layer_group_viewer.LinkedViewerNavigationState.md#dispose)
- [disposed](neuroglancer_layer_group_viewer.LinkedViewerNavigationState.md#disposed)
- [refCountReachedZero](neuroglancer_layer_group_viewer.LinkedViewerNavigationState.md#refcountreachedzero)
- [register](neuroglancer_layer_group_viewer.LinkedViewerNavigationState.md#register)
- [registerCancellable](neuroglancer_layer_group_viewer.LinkedViewerNavigationState.md#registercancellable)
- [registerDisposer](neuroglancer_layer_group_viewer.LinkedViewerNavigationState.md#registerdisposer)
- [registerEventListener](neuroglancer_layer_group_viewer.LinkedViewerNavigationState.md#registereventlistener)
- [unregisterDisposer](neuroglancer_layer_group_viewer.LinkedViewerNavigationState.md#unregisterdisposer)

## Constructors

### constructor

• **new LinkedViewerNavigationState**(`parent`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | `Object` |
| `parent.navigationState` | [`NavigationState`](neuroglancer_navigation_state.NavigationState.md)<[`TrackableZoomInterface`](../modules/neuroglancer_navigation_state.md#trackablezoominterface)\> |
| `parent.perspectiveNavigationState` | [`NavigationState`](neuroglancer_navigation_state.NavigationState.md)<[`TrackableZoomInterface`](../modules/neuroglancer_navigation_state.md#trackablezoominterface)\> |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:123](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer_group_viewer.ts#L123)

## Properties

### crossSectionDepthRange

• **crossSectionDepthRange**: [`LinkedDepthRange`](neuroglancer_navigation_state.LinkedDepthRange.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:117](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer_group_viewer.ts#L117)

___

### crossSectionOrientation

• **crossSectionOrientation**: [`LinkedOrientationState`](neuroglancer_navigation_state.LinkedOrientationState.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:113](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer_group_viewer.ts#L113)

___

### crossSectionScale

• **crossSectionScale**: [`LinkedZoomState`](neuroglancer_navigation_state.LinkedZoomState.md)<[`TrackableCrossSectionZoom`](neuroglancer_navigation_state.TrackableCrossSectionZoom.md)\>

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:114](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer_group_viewer.ts#L114)

___

### displayDimensionRenderInfo

• **displayDimensionRenderInfo**: [`WatchableDisplayDimensionRenderInfo`](neuroglancer_navigation_state.WatchableDisplayDimensionRenderInfo.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:112](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer_group_viewer.ts#L112)

___

### displayDimensions

• **displayDimensions**: [`LinkedDisplayDimensions`](neuroglancer_navigation_state.LinkedDisplayDimensions.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:111](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer_group_viewer.ts#L111)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### navigationState

• **navigationState**: [`NavigationState`](neuroglancer_navigation_state.NavigationState.md)<[`TrackableZoomInterface`](../modules/neuroglancer_navigation_state.md#trackablezoominterface)\>

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:120](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer_group_viewer.ts#L120)

___

### position

• **position**: [`LinkedPosition`](neuroglancer_navigation_state.LinkedPosition.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:109](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer_group_viewer.ts#L109)

___

### projectionDepthRange

• **projectionDepthRange**: [`LinkedDepthRange`](neuroglancer_navigation_state.LinkedDepthRange.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:118](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer_group_viewer.ts#L118)

___

### projectionNavigationState

• **projectionNavigationState**: [`NavigationState`](neuroglancer_navigation_state.NavigationState.md)<[`TrackableZoomInterface`](../modules/neuroglancer_navigation_state.md#trackablezoominterface)\>

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:121](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer_group_viewer.ts#L121)

___

### projectionOrientation

• **projectionOrientation**: [`LinkedOrientationState`](neuroglancer_navigation_state.LinkedOrientationState.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:115](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer_group_viewer.ts#L115)

___

### projectionScale

• **projectionScale**: [`LinkedZoomState`](neuroglancer_navigation_state.LinkedZoomState.md)<[`TrackableProjectionZoom`](neuroglancer_navigation_state.TrackableProjectionZoom.md)\>

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:116](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer_group_viewer.ts#L116)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### relativeDisplayScales

• **relativeDisplayScales**: [`LinkedRelativeDisplayScales`](neuroglancer_navigation_state.LinkedRelativeDisplayScales.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:110](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer_group_viewer.ts#L110)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`LinkedViewerNavigationState`](neuroglancer_layer_group_viewer.LinkedViewerNavigationState.md)

#### Returns

[`LinkedViewerNavigationState`](neuroglancer_layer_group_viewer.LinkedViewerNavigationState.md)

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[addRef](neuroglancer_util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L48)

___

### copyToParent

▸ **copyToParent**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:161](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer_group_viewer.ts#L161)

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

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposed](neuroglancer_util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L75)

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

### register

▸ **register**(`state`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`CompoundTrackable`](neuroglancer_util_trackable.CompoundTrackable.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer_group_viewer.ts#L175)

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
