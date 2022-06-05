[neuroglancer](../README.md) / [Modules](../modules.md) / navigation\_state

# Module: navigation\_state

## Table of contents

### Enumerations

- [NavigationLinkType](../enums/navigation_state.NavigationLinkType.md)
- [NavigationSimpleLinkType](../enums/navigation_state.NavigationSimpleLinkType.md)

### Classes

- [DisplayPose](../classes/navigation_state.DisplayPose.md)
- [LinkedDepthRange](../classes/navigation_state.LinkedDepthRange.md)
- [LinkedDisplayDimensions](../classes/navigation_state.LinkedDisplayDimensions.md)
- [LinkedOrientationState](../classes/navigation_state.LinkedOrientationState.md)
- [LinkedPosition](../classes/navigation_state.LinkedPosition.md)
- [LinkedRelativeDisplayScales](../classes/navigation_state.LinkedRelativeDisplayScales.md)
- [LinkedZoomState](../classes/navigation_state.LinkedZoomState.md)
- [NavigationState](../classes/navigation_state.NavigationState.md)
- [OrientationState](../classes/navigation_state.OrientationState.md)
- [Position](../classes/navigation_state.Position.md)
- [TrackableCrossSectionZoom](../classes/navigation_state.TrackableCrossSectionZoom.md)
- [TrackableDepthRange](../classes/navigation_state.TrackableDepthRange.md)
- [TrackableDisplayDimensions](../classes/navigation_state.TrackableDisplayDimensions.md)
- [TrackableNavigationLink](../classes/navigation_state.TrackableNavigationLink.md)
- [TrackableNavigationSimpleLink](../classes/navigation_state.TrackableNavigationSimpleLink.md)
- [TrackableProjectionZoom](../classes/navigation_state.TrackableProjectionZoom.md)
- [TrackableRelativeDisplayScales](../classes/navigation_state.TrackableRelativeDisplayScales.md)
- [WatchableDisplayDimensionRenderInfo](../classes/navigation_state.WatchableDisplayDimensionRenderInfo.md)

### Interfaces

- [DisplayDimensionRenderInfo](../interfaces/navigation_state.DisplayDimensionRenderInfo.md)
- [DisplayDimensions](../interfaces/navigation_state.DisplayDimensions.md)
- [RelativeDisplayScales](../interfaces/navigation_state.RelativeDisplayScales.md)

### Type Aliases

- [TrackableZoomInterface](navigation_state.md#trackablezoominterface)

### Functions

- [displayDimensionRenderInfosEqual](navigation_state.md#displaydimensionrenderinfosequal)
- [linkedStateLegacyJsonView](navigation_state.md#linkedstatelegacyjsonview)

## Type Aliases

### TrackableZoomInterface

Ƭ **TrackableZoomInterface**: [`TrackableProjectionZoom`](../classes/navigation_state.TrackableProjectionZoom.md) \| [`TrackableCrossSectionZoom`](../classes/navigation_state.TrackableCrossSectionZoom.md)

#### Defined in

[src/neuroglancer/navigation_state.ts:1183](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/navigation_state.ts#L1183)

## Functions

### displayDimensionRenderInfosEqual

▸ **displayDimensionRenderInfosEqual**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`DisplayDimensionRenderInfo`](../interfaces/navigation_state.DisplayDimensionRenderInfo.md) |
| `b` | [`DisplayDimensionRenderInfo`](../interfaces/navigation_state.DisplayDimensionRenderInfo.md) |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/navigation_state.ts:751](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/navigation_state.ts#L751)

___

### linkedStateLegacyJsonView

▸ **linkedStateLegacyJsonView**<`T`\>(`linked`): `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `LinkableState`<`T`, `T`\> & { `legacyJsonView`: `Trackable`  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `linked` | `LinkedBase`<`T`, [`TrackableNavigationLink`](../classes/navigation_state.TrackableNavigationLink.md)\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `changed` | `NullaryReadonlySignal` |
| `reset` | () => `void` |
| `restoreState` | (`obj`: `unknown`) => `void` |
| `toJSON` | () => `undefined` \| { `link`: `undefined` \| `string` ; `value`: `any`  } |

#### Defined in

[src/neuroglancer/navigation_state.ts:1212](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/navigation_state.ts#L1212)
