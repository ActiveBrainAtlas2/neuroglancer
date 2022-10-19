[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/navigation\_state

# Module: neuroglancer/navigation\_state

## Table of contents

### Modules

- [&lt;internal\&gt;](neuroglancer_navigation_state._internal_.md)

### Enumerations

- [NavigationLinkType](../enums/neuroglancer_navigation_state.NavigationLinkType.md)
- [NavigationSimpleLinkType](../enums/neuroglancer_navigation_state.NavigationSimpleLinkType.md)

### Classes

- [DisplayPose](../classes/neuroglancer_navigation_state.DisplayPose.md)
- [LinkedDepthRange](../classes/neuroglancer_navigation_state.LinkedDepthRange.md)
- [LinkedDisplayDimensions](../classes/neuroglancer_navigation_state.LinkedDisplayDimensions.md)
- [LinkedOrientationState](../classes/neuroglancer_navigation_state.LinkedOrientationState.md)
- [LinkedPosition](../classes/neuroglancer_navigation_state.LinkedPosition.md)
- [LinkedRelativeDisplayScales](../classes/neuroglancer_navigation_state.LinkedRelativeDisplayScales.md)
- [LinkedZoomState](../classes/neuroglancer_navigation_state.LinkedZoomState.md)
- [NavigationState](../classes/neuroglancer_navigation_state.NavigationState.md)
- [OrientationState](../classes/neuroglancer_navigation_state.OrientationState.md)
- [Position](../classes/neuroglancer_navigation_state.Position.md)
- [TrackableCrossSectionZoom](../classes/neuroglancer_navigation_state.TrackableCrossSectionZoom.md)
- [TrackableDepthRange](../classes/neuroglancer_navigation_state.TrackableDepthRange.md)
- [TrackableDisplayDimensions](../classes/neuroglancer_navigation_state.TrackableDisplayDimensions.md)
- [TrackableNavigationLink](../classes/neuroglancer_navigation_state.TrackableNavigationLink.md)
- [TrackableNavigationSimpleLink](../classes/neuroglancer_navigation_state.TrackableNavigationSimpleLink.md)
- [TrackableProjectionZoom](../classes/neuroglancer_navigation_state.TrackableProjectionZoom.md)
- [TrackableRelativeDisplayScales](../classes/neuroglancer_navigation_state.TrackableRelativeDisplayScales.md)
- [WatchableDisplayDimensionRenderInfo](../classes/neuroglancer_navigation_state.WatchableDisplayDimensionRenderInfo.md)

### Interfaces

- [DisplayDimensionRenderInfo](../interfaces/neuroglancer_navigation_state.DisplayDimensionRenderInfo.md)
- [DisplayDimensions](../interfaces/neuroglancer_navigation_state.DisplayDimensions.md)
- [RelativeDisplayScales](../interfaces/neuroglancer_navigation_state.RelativeDisplayScales.md)

### Type Aliases

- [TrackableZoomInterface](neuroglancer_navigation_state.md#trackablezoominterface)

### Functions

- [displayDimensionRenderInfosEqual](neuroglancer_navigation_state.md#displaydimensionrenderinfosequal)
- [linkedStateLegacyJsonView](neuroglancer_navigation_state.md#linkedstatelegacyjsonview)

## Type Aliases

### TrackableZoomInterface

Ƭ **TrackableZoomInterface**: [`TrackableProjectionZoom`](../classes/neuroglancer_navigation_state.TrackableProjectionZoom.md) \| [`TrackableCrossSectionZoom`](../classes/neuroglancer_navigation_state.TrackableCrossSectionZoom.md)

#### Defined in

[src/neuroglancer/navigation_state.ts:1183](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L1183)

## Functions

### displayDimensionRenderInfosEqual

▸ **displayDimensionRenderInfosEqual**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`DisplayDimensionRenderInfo`](../interfaces/neuroglancer_navigation_state.DisplayDimensionRenderInfo.md) |
| `b` | [`DisplayDimensionRenderInfo`](../interfaces/neuroglancer_navigation_state.DisplayDimensionRenderInfo.md) |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/navigation_state.ts:751](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L751)

___

### linkedStateLegacyJsonView

▸ **linkedStateLegacyJsonView**<`T`\>(`linked`): `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`LinkableState`](../interfaces/neuroglancer_navigation_state._internal_.LinkableState.md)<`T`, `T`\> & { `legacyJsonView`: [`Trackable`](../interfaces/neuroglancer_util_trackable.Trackable.md)  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `linked` | [`LinkedBase`](../classes/neuroglancer_navigation_state._internal_.LinkedBase.md)<`T`, [`TrackableNavigationLink`](../classes/neuroglancer_navigation_state.TrackableNavigationLink.md)\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `changed` | [`NullaryReadonlySignal`](neuroglancer_util_signal.md#nullaryreadonlysignal) |
| `reset` | () => `void` |
| `restoreState` | (`obj`: `unknown`) => `void` |
| `toJSON` | () => `undefined` \| { `link`: `undefined` \| `string` ; `value`: `any`  } |

#### Defined in

[src/neuroglancer/navigation_state.ts:1212](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L1212)
