[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/polygon](../modules/annotation_polygon.md) / [<internal\>](../modules/annotation_polygon._internal_.md) / NavigationState

# Class: NavigationState<Zoom\>

[annotation/polygon](../modules/annotation_polygon.md).[<internal>](../modules/annotation_polygon._internal_.md).NavigationState

## Type parameters

| Name | Type |
| :------ | :------ |
| `Zoom` | extends [`TrackableZoomInterface`](../modules/annotation_polygon._internal_.md#trackablezoominterface) = [`TrackableZoomInterface`](../modules/annotation_polygon._internal_.md#trackablezoominterface) |

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`NavigationState`**

## Table of contents

### Constructors

- [constructor](annotation_polygon._internal_.NavigationState.md#constructor)

### Properties

- [changed](annotation_polygon._internal_.NavigationState.md#changed)
- [depthRange](annotation_polygon._internal_.NavigationState.md#depthrange)
- [disposedStacks](annotation_polygon._internal_.NavigationState.md#disposedstacks)
- [pose](annotation_polygon._internal_.NavigationState.md#pose)
- [refCount](annotation_polygon._internal_.NavigationState.md#refcount)
- [wasDisposed](annotation_polygon._internal_.NavigationState.md#wasdisposed)
- [zoomFactor](annotation_polygon._internal_.NavigationState.md#zoomfactor)

### Accessors

- [coordinateSpace](annotation_polygon._internal_.NavigationState.md#coordinatespace)
- [displayDimensionRenderInfo](annotation_polygon._internal_.NavigationState.md#displaydimensionrenderinfo)
- [displayDimensions](annotation_polygon._internal_.NavigationState.md#displaydimensions)
- [position](annotation_polygon._internal_.NavigationState.md#position)
- [relativeDepthRange](annotation_polygon._internal_.NavigationState.md#relativedepthrange)
- [relativeDisplayScales](annotation_polygon._internal_.NavigationState.md#relativedisplayscales)
- [valid](annotation_polygon._internal_.NavigationState.md#valid)

### Methods

- [addRef](annotation_polygon._internal_.NavigationState.md#addref)
- [dispose](annotation_polygon._internal_.NavigationState.md#dispose)
- [disposed](annotation_polygon._internal_.NavigationState.md#disposed)
- [refCountReachedZero](annotation_polygon._internal_.NavigationState.md#refcountreachedzero)
- [registerCancellable](annotation_polygon._internal_.NavigationState.md#registercancellable)
- [registerDisposer](annotation_polygon._internal_.NavigationState.md#registerdisposer)
- [registerEventListener](annotation_polygon._internal_.NavigationState.md#registereventlistener)
- [reset](annotation_polygon._internal_.NavigationState.md#reset)
- [toMat3](annotation_polygon._internal_.NavigationState.md#tomat3)
- [toMat4](annotation_polygon._internal_.NavigationState.md#tomat4)
- [unregisterDisposer](annotation_polygon._internal_.NavigationState.md#unregisterdisposer)
- [zoomBy](annotation_polygon._internal_.NavigationState.md#zoomby)

## Constructors

### constructor

• **new NavigationState**<`Zoom`\>(`pose`, `zoomFactor`, `depthRange`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Zoom` | extends [`TrackableZoomInterface`](../modules/annotation_polygon._internal_.md#trackablezoominterface) = [`TrackableZoomInterface`](../modules/annotation_polygon._internal_.md#trackablezoominterface) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `pose` | [`DisplayPose`](annotation_polygon._internal_.DisplayPose.md) |
| `zoomFactor` | `Zoom` |
| `depthRange` | [`TrackableDepthRange`](annotation_polygon._internal_.TrackableDepthRange.md) |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/navigation_state.ts:1504](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L1504)

## Properties

### changed

• **changed**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/navigation_state.ts:1502](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L1502)

___

### depthRange

• **depthRange**: [`TrackableDepthRange`](annotation_polygon._internal_.TrackableDepthRange.md)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### pose

• **pose**: [`DisplayPose`](annotation_polygon._internal_.DisplayPose.md)

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

___

### zoomFactor

• **zoomFactor**: `Zoom`

## Accessors

### coordinateSpace

• `get` **coordinateSpace**(): [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<[`CoordinateSpace`](../interfaces/annotation_annotation_layer_state._internal_.CoordinateSpace.md)\>

#### Returns

[`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<[`CoordinateSpace`](../interfaces/annotation_annotation_layer_state._internal_.CoordinateSpace.md)\>

#### Defined in

[src/neuroglancer/navigation_state.ts:1515](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L1515)

___

### displayDimensionRenderInfo

• `get` **displayDimensionRenderInfo**(): [`WatchableDisplayDimensionRenderInfo`](annotation_polygon._internal_.WatchableDisplayDimensionRenderInfo.md)

#### Returns

[`WatchableDisplayDimensionRenderInfo`](annotation_polygon._internal_.WatchableDisplayDimensionRenderInfo.md)

#### Defined in

[src/neuroglancer/navigation_state.ts:1536](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L1536)

___

### displayDimensions

• `get` **displayDimensions**(): [`TrackableDisplayDimensions`](annotation_polygon._internal_.TrackableDisplayDimensions.md)

#### Returns

[`TrackableDisplayDimensions`](annotation_polygon._internal_.TrackableDisplayDimensions.md)

#### Defined in

[src/neuroglancer/navigation_state.ts:1530](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L1530)

___

### position

• `get` **position**(): [`Position`](annotation_annotation_layer_state._internal_.Position.md)

#### Returns

[`Position`](annotation_annotation_layer_state._internal_.Position.md)

#### Defined in

[src/neuroglancer/navigation_state.ts:1527](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L1527)

___

### relativeDepthRange

• `get` **relativeDepthRange**(): `number`

#### Returns

`number`

#### Defined in

[src/neuroglancer/navigation_state.ts:1546](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L1546)

___

### relativeDisplayScales

• `get` **relativeDisplayScales**(): [`TrackableRelativeDisplayScales`](annotation_polygon._internal_.TrackableRelativeDisplayScales.md)

#### Returns

[`TrackableRelativeDisplayScales`](annotation_polygon._internal_.TrackableRelativeDisplayScales.md)

#### Defined in

[src/neuroglancer/navigation_state.ts:1533](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L1533)

___

### valid

• `get` **valid**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/navigation_state.ts:1556](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L1556)

## Methods

### addRef

▸ **addRef**(): [`NavigationState`](annotation_polygon._internal_.NavigationState.md)<`Zoom`\>

#### Returns

[`NavigationState`](annotation_polygon._internal_.NavigationState.md)<`Zoom`\>

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

### reset

▸ **reset**(): `void`

Resets everything.

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:1522](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L1522)

___

### toMat3

▸ **toMat3**(`mat`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mat` | [`mat3`](util_geom.mat3.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:1542](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L1542)

___

### toMat4

▸ **toMat4**(`mat`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mat` | [`mat4`](util_geom.mat4.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:1539](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L1539)

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

### zoomBy

▸ **zoomBy**(`factor`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `factor` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:1560](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L1560)
