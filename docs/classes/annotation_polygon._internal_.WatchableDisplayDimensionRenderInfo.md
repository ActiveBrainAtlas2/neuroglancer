[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/polygon](../modules/annotation_polygon.md) / [<internal\>](../modules/annotation_polygon._internal_.md) / WatchableDisplayDimensionRenderInfo

# Class: WatchableDisplayDimensionRenderInfo

[annotation/polygon](../modules/annotation_polygon.md).[<internal>](../modules/annotation_polygon._internal_.md).WatchableDisplayDimensionRenderInfo

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`WatchableDisplayDimensionRenderInfo`**

## Table of contents

### Constructors

- [constructor](annotation_polygon._internal_.WatchableDisplayDimensionRenderInfo.md#constructor)

### Properties

- [changed](annotation_polygon._internal_.WatchableDisplayDimensionRenderInfo.md#changed)
- [curCoordinateSpace](annotation_polygon._internal_.WatchableDisplayDimensionRenderInfo.md#curcoordinatespace)
- [curDisplayDimensions](annotation_polygon._internal_.WatchableDisplayDimensionRenderInfo.md#curdisplaydimensions)
- [curRelativeDisplayScales](annotation_polygon._internal_.WatchableDisplayDimensionRenderInfo.md#currelativedisplayscales)
- [displayDimensions](annotation_polygon._internal_.WatchableDisplayDimensionRenderInfo.md#displaydimensions)
- [disposedStacks](annotation_polygon._internal_.WatchableDisplayDimensionRenderInfo.md#disposedstacks)
- [refCount](annotation_polygon._internal_.WatchableDisplayDimensionRenderInfo.md#refcount)
- [relativeDisplayScales](annotation_polygon._internal_.WatchableDisplayDimensionRenderInfo.md#relativedisplayscales)
- [value\_](annotation_polygon._internal_.WatchableDisplayDimensionRenderInfo.md#value_)
- [wasDisposed](annotation_polygon._internal_.WatchableDisplayDimensionRenderInfo.md#wasdisposed)

### Accessors

- [value](annotation_polygon._internal_.WatchableDisplayDimensionRenderInfo.md#value)

### Methods

- [addRef](annotation_polygon._internal_.WatchableDisplayDimensionRenderInfo.md#addref)
- [dispose](annotation_polygon._internal_.WatchableDisplayDimensionRenderInfo.md#dispose)
- [disposed](annotation_polygon._internal_.WatchableDisplayDimensionRenderInfo.md#disposed)
- [refCountReachedZero](annotation_polygon._internal_.WatchableDisplayDimensionRenderInfo.md#refcountreachedzero)
- [registerCancellable](annotation_polygon._internal_.WatchableDisplayDimensionRenderInfo.md#registercancellable)
- [registerDisposer](annotation_polygon._internal_.WatchableDisplayDimensionRenderInfo.md#registerdisposer)
- [registerEventListener](annotation_polygon._internal_.WatchableDisplayDimensionRenderInfo.md#registereventlistener)
- [unregisterDisposer](annotation_polygon._internal_.WatchableDisplayDimensionRenderInfo.md#unregisterdisposer)

## Constructors

### constructor

• **new WatchableDisplayDimensionRenderInfo**(`relativeDisplayScales`, `displayDimensions`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `relativeDisplayScales` | [`TrackableRelativeDisplayScales`](annotation_polygon._internal_.TrackableRelativeDisplayScales.md) |
| `displayDimensions` | [`TrackableDisplayDimensions`](annotation_polygon._internal_.TrackableDisplayDimensions.md) |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/navigation_state.ts:793](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L793)

## Properties

### changed

• **changed**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/navigation_state.ts:763](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L763)

___

### curCoordinateSpace

• `Private` **curCoordinateSpace**: [`CoordinateSpace`](../interfaces/annotation_annotation_layer_state._internal_.CoordinateSpace.md)

#### Defined in

[src/neuroglancer/navigation_state.ts:766](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L766)

___

### curDisplayDimensions

• `Private` **curDisplayDimensions**: [`DisplayDimensions`](../interfaces/annotation_annotation_layer_state._internal_.DisplayDimensions.md)

#### Defined in

[src/neuroglancer/navigation_state.ts:765](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L765)

___

### curRelativeDisplayScales

• `Private` **curRelativeDisplayScales**: [`RelativeDisplayScales`](../interfaces/annotation_polygon._internal_.RelativeDisplayScales.md)

#### Defined in

[src/neuroglancer/navigation_state.ts:764](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L764)

___

### displayDimensions

• **displayDimensions**: [`TrackableDisplayDimensions`](annotation_polygon._internal_.TrackableDisplayDimensions.md)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### relativeDisplayScales

• **relativeDisplayScales**: [`TrackableRelativeDisplayScales`](annotation_polygon._internal_.TrackableRelativeDisplayScales.md)

___

### value\_

• `Private` **value\_**: [`DisplayDimensionRenderInfo`](../interfaces/annotation_base._internal_.DisplayDimensionRenderInfo.md)

#### Defined in

[src/neuroglancer/navigation_state.ts:767](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L767)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### value

• `get` **value**(): [`DisplayDimensionRenderInfo`](../interfaces/annotation_base._internal_.DisplayDimensionRenderInfo.md)

#### Returns

[`DisplayDimensionRenderInfo`](../interfaces/annotation_base._internal_.DisplayDimensionRenderInfo.md)

#### Defined in

[src/neuroglancer/navigation_state.ts:769](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L769)

## Methods

### addRef

▸ **addRef**(): [`WatchableDisplayDimensionRenderInfo`](annotation_polygon._internal_.WatchableDisplayDimensionRenderInfo.md)

#### Returns

[`WatchableDisplayDimensionRenderInfo`](annotation_polygon._internal_.WatchableDisplayDimensionRenderInfo.md)

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
