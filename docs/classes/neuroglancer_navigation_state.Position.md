[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/navigation\_state](../modules/neuroglancer_navigation_state.md) / Position

# Class: Position

[neuroglancer/navigation_state](../modules/neuroglancer_navigation_state.md).Position

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`Position`**

## Table of contents

### Constructors

- [constructor](neuroglancer_navigation_state.Position.md#constructor)

### Properties

- [changed](neuroglancer_navigation_state.Position.md#changed)
- [coordinateSpace](neuroglancer_navigation_state.Position.md#coordinatespace)
- [coordinates\_](neuroglancer_navigation_state.Position.md#coordinates_)
- [curCoordinateSpace](neuroglancer_navigation_state.Position.md#curcoordinatespace)
- [disposedStacks](neuroglancer_navigation_state.Position.md#disposedstacks)
- [refCount](neuroglancer_navigation_state.Position.md#refcount)
- [wasDisposed](neuroglancer_navigation_state.Position.md#wasdisposed)

### Accessors

- [legacyJsonView](neuroglancer_navigation_state.Position.md#legacyjsonview)
- [valid](neuroglancer_navigation_state.Position.md#valid)
- [value](neuroglancer_navigation_state.Position.md#value)

### Methods

- [addRef](neuroglancer_navigation_state.Position.md#addref)
- [assign](neuroglancer_navigation_state.Position.md#assign)
- [dispose](neuroglancer_navigation_state.Position.md#dispose)
- [disposed](neuroglancer_navigation_state.Position.md#disposed)
- [handleCoordinateSpaceChanged](neuroglancer_navigation_state.Position.md#handlecoordinatespacechanged)
- [refCountReachedZero](neuroglancer_navigation_state.Position.md#refcountreachedzero)
- [registerCancellable](neuroglancer_navigation_state.Position.md#registercancellable)
- [registerDisposer](neuroglancer_navigation_state.Position.md#registerdisposer)
- [registerEventListener](neuroglancer_navigation_state.Position.md#registereventlistener)
- [reset](neuroglancer_navigation_state.Position.md#reset)
- [restoreState](neuroglancer_navigation_state.Position.md#restorestate)
- [snapToVoxel](neuroglancer_navigation_state.Position.md#snaptovoxel)
- [toJSON](neuroglancer_navigation_state.Position.md#tojson)
- [unregisterDisposer](neuroglancer_navigation_state.Position.md#unregisterdisposer)
- [addOffset](neuroglancer_navigation_state.Position.md#addoffset)
- [getOffset](neuroglancer_navigation_state.Position.md#getoffset)

## Constructors

### constructor

• **new Position**(`coordinateSpace`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `coordinateSpace` | [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<[`CoordinateSpace`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpace.md)\> |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/navigation_state.ts:141](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L141)

## Properties

### changed

• **changed**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/navigation_state.ts:140](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L140)

___

### coordinateSpace

• **coordinateSpace**: [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<[`CoordinateSpace`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpace.md)\>

___

### coordinates\_

• `Private` **coordinates\_**: `Float32Array` = `vector.kEmptyFloat32Vec`

#### Defined in

[src/neuroglancer/navigation_state.ts:138](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L138)

___

### curCoordinateSpace

• `Private` **curCoordinateSpace**: `undefined` \| [`CoordinateSpace`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpace.md)

#### Defined in

[src/neuroglancer/navigation_state.ts:139](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L139)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

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

## Accessors

### legacyJsonView

• `get` **legacyJsonView**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `changed` | [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md) |
| `reset` | () => `void` |
| `restoreState` | (`obj`: `unknown`) => `void` |
| `toJSON` | () => `undefined` \| `number`[] |

#### Defined in

[src/neuroglancer/navigation_state.ts:276](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L276)

___

### valid

• `get` **valid**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/navigation_state.ts:148](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L148)

___

### value

• `get` **value**(): `Float32Array`

Returns the position in voxels.

#### Returns

`Float32Array`

#### Defined in

[src/neuroglancer/navigation_state.ts:155](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L155)

• `set` **value**(`coordinates`): `void`

Returns the position in voxels.

#### Parameters

| Name | Type |
| :------ | :------ |
| `coordinates` | `Float32Array` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:166](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L166)

## Methods

### addRef

▸ **addRef**(): [`Position`](neuroglancer_navigation_state.Position.md)

#### Returns

[`Position`](neuroglancer_navigation_state.Position.md)

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[addRef](neuroglancer_util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L48)

___

### assign

▸ **assign**(`other`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Position`](neuroglancer_navigation_state.Position.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:246](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L246)

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

### handleCoordinateSpaceChanged

▸ `Private` **handleCoordinateSpaceChanged**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:177](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L177)

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

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:160](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L160)

___

### restoreState

▸ **restoreState**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:225](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L225)

___

### snapToVoxel

▸ **snapToVoxel**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:236](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L236)

___

### toJSON

▸ **toJSON**(): `undefined` \| `number`[]

#### Returns

`undefined` \| `number`[]

#### Defined in

[src/neuroglancer/navigation_state.ts:217](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L217)

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

### addOffset

▸ `Static` **addOffset**(`target`, `source`, `offset`, `scale?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `target` | [`Position`](neuroglancer_navigation_state.Position.md) | `undefined` |
| `source` | [`Position`](neuroglancer_navigation_state.Position.md) | `undefined` |
| `offset` | `undefined` \| `Float32Array` | `undefined` |
| `scale` | `number` | `1` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:266](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L266)

___

### getOffset

▸ `Static` **getOffset**(`a`, `b`): `undefined` \| `Float32Array`

Get the offset of `a` relative to `b`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Position`](neuroglancer_navigation_state.Position.md) |
| `b` | [`Position`](neuroglancer_navigation_state.Position.md) |

#### Returns

`undefined` \| `Float32Array`

#### Defined in

[src/neuroglancer/navigation_state.ts:257](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/navigation_state.ts#L257)
