[neuroglancer](../README.md) / [Modules](../modules.md) / [navigation\_state](../modules/navigation_state.md) / NavigationState

# Class: NavigationState<Zoom\>

[navigation_state](../modules/navigation_state.md).NavigationState

## Type parameters

| Name | Type |
| :------ | :------ |
| `Zoom` | extends [`TrackableZoomInterface`](../modules/navigation_state.md#trackablezoominterface) = [`TrackableZoomInterface`](../modules/navigation_state.md#trackablezoominterface) |

## Hierarchy

- `RefCounted`

  ↳ **`NavigationState`**

## Table of contents

### Constructors

- [constructor](navigation_state.NavigationState.md#constructor)

### Properties

- [changed](navigation_state.NavigationState.md#changed)
- [depthRange](navigation_state.NavigationState.md#depthrange)
- [disposedStacks](navigation_state.NavigationState.md#disposedstacks)
- [pose](navigation_state.NavigationState.md#pose)
- [refCount](navigation_state.NavigationState.md#refcount)
- [wasDisposed](navigation_state.NavigationState.md#wasdisposed)
- [zoomFactor](navigation_state.NavigationState.md#zoomfactor)

### Accessors

- [coordinateSpace](navigation_state.NavigationState.md#coordinatespace)
- [displayDimensionRenderInfo](navigation_state.NavigationState.md#displaydimensionrenderinfo)
- [displayDimensions](navigation_state.NavigationState.md#displaydimensions)
- [position](navigation_state.NavigationState.md#position)
- [relativeDepthRange](navigation_state.NavigationState.md#relativedepthrange)
- [relativeDisplayScales](navigation_state.NavigationState.md#relativedisplayscales)
- [valid](navigation_state.NavigationState.md#valid)

### Methods

- [addRef](navigation_state.NavigationState.md#addref)
- [dispose](navigation_state.NavigationState.md#dispose)
- [disposed](navigation_state.NavigationState.md#disposed)
- [refCountReachedZero](navigation_state.NavigationState.md#refcountreachedzero)
- [registerCancellable](navigation_state.NavigationState.md#registercancellable)
- [registerDisposer](navigation_state.NavigationState.md#registerdisposer)
- [registerEventListener](navigation_state.NavigationState.md#registereventlistener)
- [reset](navigation_state.NavigationState.md#reset)
- [toMat3](navigation_state.NavigationState.md#tomat3)
- [toMat4](navigation_state.NavigationState.md#tomat4)
- [unregisterDisposer](navigation_state.NavigationState.md#unregisterdisposer)
- [zoomBy](navigation_state.NavigationState.md#zoomby)

## Constructors

### constructor

• **new NavigationState**<`Zoom`\>(`pose`, `zoomFactor`, `depthRange`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Zoom` | extends [`TrackableZoomInterface`](../modules/navigation_state.md#trackablezoominterface) = [`TrackableZoomInterface`](../modules/navigation_state.md#trackablezoominterface) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `pose` | [`DisplayPose`](navigation_state.DisplayPose.md) |
| `zoomFactor` | `Zoom` |
| `depthRange` | [`TrackableDepthRange`](navigation_state.TrackableDepthRange.md) |

#### Overrides

RefCounted.constructor

#### Defined in

[src/neuroglancer/navigation_state.ts:1504](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/navigation_state.ts#L1504)

## Properties

### changed

• **changed**: `NullarySignal`

#### Defined in

[src/neuroglancer/navigation_state.ts:1502](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/navigation_state.ts#L1502)

___

### depthRange

• **depthRange**: [`TrackableDepthRange`](navigation_state.TrackableDepthRange.md)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

RefCounted.disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L52)

___

### pose

• **pose**: [`DisplayPose`](navigation_state.DisplayPose.md)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

RefCounted.refCount

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

RefCounted.wasDisposed

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L46)

___

### zoomFactor

• **zoomFactor**: `Zoom`

## Accessors

### coordinateSpace

• `get` **coordinateSpace**(): [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<[`CoordinateSpace`](../interfaces/coordinate_transform.CoordinateSpace.md)\>

#### Returns

[`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<[`CoordinateSpace`](../interfaces/coordinate_transform.CoordinateSpace.md)\>

#### Defined in

[src/neuroglancer/navigation_state.ts:1515](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/navigation_state.ts#L1515)

___

### displayDimensionRenderInfo

• `get` **displayDimensionRenderInfo**(): [`WatchableDisplayDimensionRenderInfo`](navigation_state.WatchableDisplayDimensionRenderInfo.md)

#### Returns

[`WatchableDisplayDimensionRenderInfo`](navigation_state.WatchableDisplayDimensionRenderInfo.md)

#### Defined in

[src/neuroglancer/navigation_state.ts:1536](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/navigation_state.ts#L1536)

___

### displayDimensions

• `get` **displayDimensions**(): [`TrackableDisplayDimensions`](navigation_state.TrackableDisplayDimensions.md)

#### Returns

[`TrackableDisplayDimensions`](navigation_state.TrackableDisplayDimensions.md)

#### Defined in

[src/neuroglancer/navigation_state.ts:1530](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/navigation_state.ts#L1530)

___

### position

• `get` **position**(): [`Position`](navigation_state.Position.md)

#### Returns

[`Position`](navigation_state.Position.md)

#### Defined in

[src/neuroglancer/navigation_state.ts:1527](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/navigation_state.ts#L1527)

___

### relativeDepthRange

• `get` **relativeDepthRange**(): `number`

#### Returns

`number`

#### Defined in

[src/neuroglancer/navigation_state.ts:1546](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/navigation_state.ts#L1546)

___

### relativeDisplayScales

• `get` **relativeDisplayScales**(): [`TrackableRelativeDisplayScales`](navigation_state.TrackableRelativeDisplayScales.md)

#### Returns

[`TrackableRelativeDisplayScales`](navigation_state.TrackableRelativeDisplayScales.md)

#### Defined in

[src/neuroglancer/navigation_state.ts:1533](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/navigation_state.ts#L1533)

___

### valid

• `get` **valid**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/navigation_state.ts:1556](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/navigation_state.ts#L1556)

## Methods

### addRef

▸ **addRef**(): [`NavigationState`](navigation_state.NavigationState.md)<`Zoom`\>

#### Returns

[`NavigationState`](navigation_state.NavigationState.md)<`Zoom`\>

#### Inherited from

RefCounted.addRef

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

RefCounted.dispose

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

RefCounted.disposed

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L75)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

RefCounted.refCountReachedZero

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L66)

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

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L100)

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

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L76)

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

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L95)

___

### reset

▸ **reset**(): `void`

Resets everything.

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:1522](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/navigation_state.ts#L1522)

___

### toMat3

▸ **toMat3**(`mat`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mat` | `mat3` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:1542](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/navigation_state.ts#L1542)

___

### toMat4

▸ **toMat4**(`mat`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mat` | `mat4` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:1539](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/navigation_state.ts#L1539)

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

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L85)

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

[src/neuroglancer/navigation_state.ts:1560](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/navigation_state.ts#L1560)
