[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/navigation\_state](../modules/neuroglancer_navigation_state.md) / NavigationState

# Class: NavigationState<Zoom\>

[neuroglancer/navigation_state](../modules/neuroglancer_navigation_state.md).NavigationState

## Type parameters

| Name | Type |
| :------ | :------ |
| `Zoom` | extends [`TrackableZoomInterface`](../modules/neuroglancer_navigation_state.md#trackablezoominterface) = [`TrackableZoomInterface`](../modules/neuroglancer_navigation_state.md#trackablezoominterface) |

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`NavigationState`**

## Table of contents

### Constructors

- [constructor](neuroglancer_navigation_state.NavigationState.md#constructor)

### Properties

- [changed](neuroglancer_navigation_state.NavigationState.md#changed)
- [depthRange](neuroglancer_navigation_state.NavigationState.md#depthrange)
- [disposedStacks](neuroglancer_navigation_state.NavigationState.md#disposedstacks)
- [pose](neuroglancer_navigation_state.NavigationState.md#pose)
- [refCount](neuroglancer_navigation_state.NavigationState.md#refcount)
- [wasDisposed](neuroglancer_navigation_state.NavigationState.md#wasdisposed)
- [zoomFactor](neuroglancer_navigation_state.NavigationState.md#zoomfactor)

### Accessors

- [coordinateSpace](neuroglancer_navigation_state.NavigationState.md#coordinatespace)
- [displayDimensionRenderInfo](neuroglancer_navigation_state.NavigationState.md#displaydimensionrenderinfo)
- [displayDimensions](neuroglancer_navigation_state.NavigationState.md#displaydimensions)
- [position](neuroglancer_navigation_state.NavigationState.md#position)
- [relativeDepthRange](neuroglancer_navigation_state.NavigationState.md#relativedepthrange)
- [relativeDisplayScales](neuroglancer_navigation_state.NavigationState.md#relativedisplayscales)
- [valid](neuroglancer_navigation_state.NavigationState.md#valid)

### Methods

- [addRef](neuroglancer_navigation_state.NavigationState.md#addref)
- [dispose](neuroglancer_navigation_state.NavigationState.md#dispose)
- [disposed](neuroglancer_navigation_state.NavigationState.md#disposed)
- [refCountReachedZero](neuroglancer_navigation_state.NavigationState.md#refcountreachedzero)
- [registerCancellable](neuroglancer_navigation_state.NavigationState.md#registercancellable)
- [registerDisposer](neuroglancer_navigation_state.NavigationState.md#registerdisposer)
- [registerEventListener](neuroglancer_navigation_state.NavigationState.md#registereventlistener)
- [reset](neuroglancer_navigation_state.NavigationState.md#reset)
- [toMat3](neuroglancer_navigation_state.NavigationState.md#tomat3)
- [toMat4](neuroglancer_navigation_state.NavigationState.md#tomat4)
- [unregisterDisposer](neuroglancer_navigation_state.NavigationState.md#unregisterdisposer)
- [zoomBy](neuroglancer_navigation_state.NavigationState.md#zoomby)

## Constructors

### constructor

• **new NavigationState**<`Zoom`\>(`pose`, `zoomFactor`, `depthRange`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Zoom` | extends [`TrackableZoomInterface`](../modules/neuroglancer_navigation_state.md#trackablezoominterface) = [`TrackableZoomInterface`](../modules/neuroglancer_navigation_state.md#trackablezoominterface) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `pose` | [`DisplayPose`](neuroglancer_navigation_state.DisplayPose.md) |
| `zoomFactor` | `Zoom` |
| `depthRange` | [`TrackableDepthRange`](neuroglancer_navigation_state.TrackableDepthRange.md) |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/navigation_state.ts:1504](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L1504)

## Properties

### changed

• **changed**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/navigation_state.ts:1502](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L1502)

___

### depthRange

• **depthRange**: [`TrackableDepthRange`](neuroglancer_navigation_state.TrackableDepthRange.md)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### pose

• **pose**: [`DisplayPose`](neuroglancer_navigation_state.DisplayPose.md)

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

### zoomFactor

• **zoomFactor**: `Zoom`

## Accessors

### coordinateSpace

• `get` **coordinateSpace**(): [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<[`CoordinateSpace`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpace.md)\>

#### Returns

[`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<[`CoordinateSpace`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpace.md)\>

#### Defined in

[src/neuroglancer/navigation_state.ts:1515](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L1515)

___

### displayDimensionRenderInfo

• `get` **displayDimensionRenderInfo**(): [`WatchableDisplayDimensionRenderInfo`](neuroglancer_navigation_state.WatchableDisplayDimensionRenderInfo.md)

#### Returns

[`WatchableDisplayDimensionRenderInfo`](neuroglancer_navigation_state.WatchableDisplayDimensionRenderInfo.md)

#### Defined in

[src/neuroglancer/navigation_state.ts:1536](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L1536)

___

### displayDimensions

• `get` **displayDimensions**(): [`TrackableDisplayDimensions`](neuroglancer_navigation_state.TrackableDisplayDimensions.md)

#### Returns

[`TrackableDisplayDimensions`](neuroglancer_navigation_state.TrackableDisplayDimensions.md)

#### Defined in

[src/neuroglancer/navigation_state.ts:1530](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L1530)

___

### position

• `get` **position**(): [`Position`](neuroglancer_navigation_state.Position.md)

#### Returns

[`Position`](neuroglancer_navigation_state.Position.md)

#### Defined in

[src/neuroglancer/navigation_state.ts:1527](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L1527)

___

### relativeDepthRange

• `get` **relativeDepthRange**(): `number`

#### Returns

`number`

#### Defined in

[src/neuroglancer/navigation_state.ts:1546](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L1546)

___

### relativeDisplayScales

• `get` **relativeDisplayScales**(): [`TrackableRelativeDisplayScales`](neuroglancer_navigation_state.TrackableRelativeDisplayScales.md)

#### Returns

[`TrackableRelativeDisplayScales`](neuroglancer_navigation_state.TrackableRelativeDisplayScales.md)

#### Defined in

[src/neuroglancer/navigation_state.ts:1533](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L1533)

___

### valid

• `get` **valid**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/navigation_state.ts:1556](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L1556)

## Methods

### addRef

▸ **addRef**(): [`NavigationState`](neuroglancer_navigation_state.NavigationState.md)<`Zoom`\>

#### Returns

[`NavigationState`](neuroglancer_navigation_state.NavigationState.md)<`Zoom`\>

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

### reset

▸ **reset**(): `void`

Resets everything.

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:1522](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L1522)

___

### toMat3

▸ **toMat3**(`mat`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mat` | [`mat3`](neuroglancer_util_geom.mat3.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:1542](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L1542)

___

### toMat4

▸ **toMat4**(`mat`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mat` | [`mat4`](neuroglancer_util_geom.mat4.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:1539](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L1539)

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

### zoomBy

▸ **zoomBy**(`factor`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `factor` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:1560](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L1560)
