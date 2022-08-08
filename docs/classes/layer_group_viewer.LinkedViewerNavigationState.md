[neuroglancer](../README.md) / [Modules](../modules.md) / [layer\_group\_viewer](../modules/layer_group_viewer.md) / LinkedViewerNavigationState

# Class: LinkedViewerNavigationState

[layer_group_viewer](../modules/layer_group_viewer.md).LinkedViewerNavigationState

## Hierarchy

- `RefCounted`

  ↳ **`LinkedViewerNavigationState`**

## Table of contents

### Constructors

- [constructor](layer_group_viewer.LinkedViewerNavigationState.md#constructor)

### Properties

- [crossSectionDepthRange](layer_group_viewer.LinkedViewerNavigationState.md#crosssectiondepthrange)
- [crossSectionOrientation](layer_group_viewer.LinkedViewerNavigationState.md#crosssectionorientation)
- [crossSectionScale](layer_group_viewer.LinkedViewerNavigationState.md#crosssectionscale)
- [displayDimensionRenderInfo](layer_group_viewer.LinkedViewerNavigationState.md#displaydimensionrenderinfo)
- [displayDimensions](layer_group_viewer.LinkedViewerNavigationState.md#displaydimensions)
- [disposedStacks](layer_group_viewer.LinkedViewerNavigationState.md#disposedstacks)
- [navigationState](layer_group_viewer.LinkedViewerNavigationState.md#navigationstate)
- [position](layer_group_viewer.LinkedViewerNavigationState.md#position)
- [projectionDepthRange](layer_group_viewer.LinkedViewerNavigationState.md#projectiondepthrange)
- [projectionNavigationState](layer_group_viewer.LinkedViewerNavigationState.md#projectionnavigationstate)
- [projectionOrientation](layer_group_viewer.LinkedViewerNavigationState.md#projectionorientation)
- [projectionScale](layer_group_viewer.LinkedViewerNavigationState.md#projectionscale)
- [refCount](layer_group_viewer.LinkedViewerNavigationState.md#refcount)
- [relativeDisplayScales](layer_group_viewer.LinkedViewerNavigationState.md#relativedisplayscales)
- [wasDisposed](layer_group_viewer.LinkedViewerNavigationState.md#wasdisposed)

### Methods

- [addRef](layer_group_viewer.LinkedViewerNavigationState.md#addref)
- [copyToParent](layer_group_viewer.LinkedViewerNavigationState.md#copytoparent)
- [dispose](layer_group_viewer.LinkedViewerNavigationState.md#dispose)
- [disposed](layer_group_viewer.LinkedViewerNavigationState.md#disposed)
- [refCountReachedZero](layer_group_viewer.LinkedViewerNavigationState.md#refcountreachedzero)
- [register](layer_group_viewer.LinkedViewerNavigationState.md#register)
- [registerCancellable](layer_group_viewer.LinkedViewerNavigationState.md#registercancellable)
- [registerDisposer](layer_group_viewer.LinkedViewerNavigationState.md#registerdisposer)
- [registerEventListener](layer_group_viewer.LinkedViewerNavigationState.md#registereventlistener)
- [unregisterDisposer](layer_group_viewer.LinkedViewerNavigationState.md#unregisterdisposer)

## Constructors

### constructor

• **new LinkedViewerNavigationState**(`parent`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | `Object` |
| `parent.navigationState` | [`NavigationState`](navigation_state.NavigationState.md)<[`TrackableZoomInterface`](../modules/navigation_state.md#trackablezoominterface)\> |
| `parent.perspectiveNavigationState` | [`NavigationState`](navigation_state.NavigationState.md)<[`TrackableZoomInterface`](../modules/navigation_state.md#trackablezoominterface)\> |

#### Overrides

RefCounted.constructor

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:123](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer_group_viewer.ts#L123)

## Properties

### crossSectionDepthRange

• **crossSectionDepthRange**: [`LinkedDepthRange`](navigation_state.LinkedDepthRange.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:117](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer_group_viewer.ts#L117)

___

### crossSectionOrientation

• **crossSectionOrientation**: [`LinkedOrientationState`](navigation_state.LinkedOrientationState.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:113](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer_group_viewer.ts#L113)

___

### crossSectionScale

• **crossSectionScale**: [`LinkedZoomState`](navigation_state.LinkedZoomState.md)<[`TrackableCrossSectionZoom`](navigation_state.TrackableCrossSectionZoom.md)\>

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:114](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer_group_viewer.ts#L114)

___

### displayDimensionRenderInfo

• **displayDimensionRenderInfo**: [`WatchableDisplayDimensionRenderInfo`](navigation_state.WatchableDisplayDimensionRenderInfo.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:112](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer_group_viewer.ts#L112)

___

### displayDimensions

• **displayDimensions**: [`LinkedDisplayDimensions`](navigation_state.LinkedDisplayDimensions.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:111](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer_group_viewer.ts#L111)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

RefCounted.disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L52)

___

### navigationState

• **navigationState**: [`NavigationState`](navigation_state.NavigationState.md)<[`TrackableZoomInterface`](../modules/navigation_state.md#trackablezoominterface)\>

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:120](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer_group_viewer.ts#L120)

___

### position

• **position**: [`LinkedPosition`](navigation_state.LinkedPosition.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:109](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer_group_viewer.ts#L109)

___

### projectionDepthRange

• **projectionDepthRange**: [`LinkedDepthRange`](navigation_state.LinkedDepthRange.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:118](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer_group_viewer.ts#L118)

___

### projectionNavigationState

• **projectionNavigationState**: [`NavigationState`](navigation_state.NavigationState.md)<[`TrackableZoomInterface`](../modules/navigation_state.md#trackablezoominterface)\>

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:121](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer_group_viewer.ts#L121)

___

### projectionOrientation

• **projectionOrientation**: [`LinkedOrientationState`](navigation_state.LinkedOrientationState.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:115](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer_group_viewer.ts#L115)

___

### projectionScale

• **projectionScale**: [`LinkedZoomState`](navigation_state.LinkedZoomState.md)<[`TrackableProjectionZoom`](navigation_state.TrackableProjectionZoom.md)\>

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:116](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer_group_viewer.ts#L116)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

RefCounted.refCount

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L45)

___

### relativeDisplayScales

• **relativeDisplayScales**: [`LinkedRelativeDisplayScales`](navigation_state.LinkedRelativeDisplayScales.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:110](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer_group_viewer.ts#L110)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

RefCounted.wasDisposed

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`LinkedViewerNavigationState`](layer_group_viewer.LinkedViewerNavigationState.md)

#### Returns

[`LinkedViewerNavigationState`](layer_group_viewer.LinkedViewerNavigationState.md)

#### Inherited from

RefCounted.addRef

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L48)

___

### copyToParent

▸ **copyToParent**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:161](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer_group_viewer.ts#L161)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

RefCounted.dispose

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

RefCounted.disposed

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L75)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

RefCounted.refCountReachedZero

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L66)

___

### register

▸ **register**(`state`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `CompoundTrackable` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/layer_group_viewer.ts#L175)

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

RefCounted.registerCancellable

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L100)

___

### registerDisposer

▸ **registerDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Disposer` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

RefCounted.registerDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L76)

___

### registerEventListener

▸ **registerEventListener**(`target`, `type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `EventTarget` |
| `type` | `string` |
| `listener` | `EventListenerOrEventListenerObject` |
| `options?` | `boolean` \| `AddEventListenerOptions` |

#### Returns

`void`

#### Inherited from

RefCounted.registerEventListener

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L95)

___

### unregisterDisposer

▸ **unregisterDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Disposer` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

RefCounted.unregisterDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L85)
