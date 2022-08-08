[neuroglancer](../README.md) / [Modules](../modules.md) / [navigation\_state](../modules/navigation_state.md) / TrackableDepthRange

# Class: TrackableDepthRange

[navigation_state](../modules/navigation_state.md).TrackableDepthRange

## Hierarchy

- `RefCounted`

  ↳ **`TrackableDepthRange`**

## Implements

- [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<`number`\>

## Table of contents

### Constructors

- [constructor](navigation_state.TrackableDepthRange.md#constructor)

### Properties

- [canonicalVoxelPhysicalSize](navigation_state.TrackableDepthRange.md#canonicalvoxelphysicalsize)
- [changed](navigation_state.TrackableDepthRange.md#changed)
- [defaultValue](navigation_state.TrackableDepthRange.md#defaultvalue)
- [displayDimensionRenderInfo](navigation_state.TrackableDepthRange.md#displaydimensionrenderinfo)
- [disposedStacks](navigation_state.TrackableDepthRange.md#disposedstacks)
- [refCount](navigation_state.TrackableDepthRange.md#refcount)
- [value\_](navigation_state.TrackableDepthRange.md#value_)
- [wasDisposed](navigation_state.TrackableDepthRange.md#wasdisposed)

### Accessors

- [value](navigation_state.TrackableDepthRange.md#value)

### Methods

- [addRef](navigation_state.TrackableDepthRange.md#addref)
- [assign](navigation_state.TrackableDepthRange.md#assign)
- [dispose](navigation_state.TrackableDepthRange.md#dispose)
- [disposed](navigation_state.TrackableDepthRange.md#disposed)
- [refCountReachedZero](navigation_state.TrackableDepthRange.md#refcountreachedzero)
- [registerCancellable](navigation_state.TrackableDepthRange.md#registercancellable)
- [registerDisposer](navigation_state.TrackableDepthRange.md#registerdisposer)
- [registerEventListener](navigation_state.TrackableDepthRange.md#registereventlistener)
- [reset](navigation_state.TrackableDepthRange.md#reset)
- [restoreState](navigation_state.TrackableDepthRange.md#restorestate)
- [setValueAbsolute](navigation_state.TrackableDepthRange.md#setvalueabsolute)
- [toJSON](navigation_state.TrackableDepthRange.md#tojson)
- [unregisterDisposer](navigation_state.TrackableDepthRange.md#unregisterdisposer)

## Constructors

### constructor

• **new TrackableDepthRange**(`defaultValue`, `displayDimensionRenderInfo`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaultValue` | `number` |
| `displayDimensionRenderInfo` | [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<[`DisplayDimensionRenderInfo`](../interfaces/navigation_state.DisplayDimensionRenderInfo.md)\> |

#### Overrides

RefCounted.constructor

#### Defined in

[src/neuroglancer/navigation_state.ts:1418](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/navigation_state.ts#L1418)

## Properties

### canonicalVoxelPhysicalSize

• **canonicalVoxelPhysicalSize**: `number`

#### Defined in

[src/neuroglancer/navigation_state.ts:1430](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/navigation_state.ts#L1430)

___

### changed

• **changed**: `NullarySignal`

#### Implementation of

[WatchableValueInterface](../interfaces/trackable_value.WatchableValueInterface.md).[changed](../interfaces/trackable_value.WatchableValueInterface.md#changed)

#### Defined in

[src/neuroglancer/navigation_state.ts:1416](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/navigation_state.ts#L1416)

___

### defaultValue

• `Readonly` **defaultValue**: `number`

___

### displayDimensionRenderInfo

• **displayDimensionRenderInfo**: [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<[`DisplayDimensionRenderInfo`](../interfaces/navigation_state.DisplayDimensionRenderInfo.md)\>

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

RefCounted.disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L52)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

RefCounted.refCount

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L45)

___

### value\_

• `Private` **value\_**: `number`

#### Defined in

[src/neuroglancer/navigation_state.ts:1429](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/navigation_state.ts#L1429)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

RefCounted.wasDisposed

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### value

• `get` **value**(): `number`

#### Returns

`number`

#### Implementation of

[WatchableValueInterface](../interfaces/trackable_value.WatchableValueInterface.md).[value](../interfaces/trackable_value.WatchableValueInterface.md#value)

#### Defined in

[src/neuroglancer/navigation_state.ts:1432](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/navigation_state.ts#L1432)

• `set` **value**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Implementation of

[WatchableValueInterface](../interfaces/trackable_value.WatchableValueInterface.md).[value](../interfaces/trackable_value.WatchableValueInterface.md#value)

#### Defined in

[src/neuroglancer/navigation_state.ts:1447](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/navigation_state.ts#L1447)

## Methods

### addRef

▸ **addRef**(): [`TrackableDepthRange`](navigation_state.TrackableDepthRange.md)

#### Returns

[`TrackableDepthRange`](navigation_state.TrackableDepthRange.md)

#### Inherited from

RefCounted.addRef

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L48)

___

### assign

▸ **assign**(`other`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`TrackableDepthRange`](navigation_state.TrackableDepthRange.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:1481](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/navigation_state.ts#L1481)

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

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:1461](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/navigation_state.ts#L1461)

___

### restoreState

▸ **restoreState**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `unknown` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:1465](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/navigation_state.ts#L1465)

___

### setValueAbsolute

▸ **setValueAbsolute**(`value`, `sourceCanonicalVoxelPhysicalSize`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `sourceCanonicalVoxelPhysicalSize` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:1473](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/navigation_state.ts#L1473)

___

### toJSON

▸ **toJSON**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Defined in

[src/neuroglancer/navigation_state.ts:1455](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/navigation_state.ts#L1455)

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
