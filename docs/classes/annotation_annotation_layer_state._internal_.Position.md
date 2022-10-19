[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / Position

# Class: Position

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).Position

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`Position`**

## Table of contents

### Constructors

- [constructor](annotation_annotation_layer_state._internal_.Position.md#constructor)

### Properties

- [changed](annotation_annotation_layer_state._internal_.Position.md#changed)
- [coordinateSpace](annotation_annotation_layer_state._internal_.Position.md#coordinatespace)
- [coordinates\_](annotation_annotation_layer_state._internal_.Position.md#coordinates_)
- [curCoordinateSpace](annotation_annotation_layer_state._internal_.Position.md#curcoordinatespace)
- [disposedStacks](annotation_annotation_layer_state._internal_.Position.md#disposedstacks)
- [refCount](annotation_annotation_layer_state._internal_.Position.md#refcount)
- [wasDisposed](annotation_annotation_layer_state._internal_.Position.md#wasdisposed)

### Accessors

- [legacyJsonView](annotation_annotation_layer_state._internal_.Position.md#legacyjsonview)
- [valid](annotation_annotation_layer_state._internal_.Position.md#valid)
- [value](annotation_annotation_layer_state._internal_.Position.md#value)

### Methods

- [addRef](annotation_annotation_layer_state._internal_.Position.md#addref)
- [assign](annotation_annotation_layer_state._internal_.Position.md#assign)
- [dispose](annotation_annotation_layer_state._internal_.Position.md#dispose)
- [disposed](annotation_annotation_layer_state._internal_.Position.md#disposed)
- [handleCoordinateSpaceChanged](annotation_annotation_layer_state._internal_.Position.md#handlecoordinatespacechanged)
- [refCountReachedZero](annotation_annotation_layer_state._internal_.Position.md#refcountreachedzero)
- [registerCancellable](annotation_annotation_layer_state._internal_.Position.md#registercancellable)
- [registerDisposer](annotation_annotation_layer_state._internal_.Position.md#registerdisposer)
- [registerEventListener](annotation_annotation_layer_state._internal_.Position.md#registereventlistener)
- [reset](annotation_annotation_layer_state._internal_.Position.md#reset)
- [restoreState](annotation_annotation_layer_state._internal_.Position.md#restorestate)
- [snapToVoxel](annotation_annotation_layer_state._internal_.Position.md#snaptovoxel)
- [toJSON](annotation_annotation_layer_state._internal_.Position.md#tojson)
- [unregisterDisposer](annotation_annotation_layer_state._internal_.Position.md#unregisterdisposer)
- [addOffset](annotation_annotation_layer_state._internal_.Position.md#addoffset)
- [getOffset](annotation_annotation_layer_state._internal_.Position.md#getoffset)

## Constructors

### constructor

• **new Position**(`coordinateSpace`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `coordinateSpace` | [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<[`CoordinateSpace`](../interfaces/annotation_annotation_layer_state._internal_.CoordinateSpace.md)\> |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/navigation_state.ts:141](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L141)

## Properties

### changed

• **changed**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/navigation_state.ts:140](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L140)

___

### coordinateSpace

• **coordinateSpace**: [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<[`CoordinateSpace`](../interfaces/annotation_annotation_layer_state._internal_.CoordinateSpace.md)\>

___

### coordinates\_

• `Private` **coordinates\_**: `Float32Array` = `vector.kEmptyFloat32Vec`

#### Defined in

[src/neuroglancer/navigation_state.ts:138](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L138)

___

### curCoordinateSpace

• `Private` **curCoordinateSpace**: `undefined` \| [`CoordinateSpace`](../interfaces/annotation_annotation_layer_state._internal_.CoordinateSpace.md)

#### Defined in

[src/neuroglancer/navigation_state.ts:139](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L139)

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

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### legacyJsonView

• `get` **legacyJsonView**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `changed` | [`NullarySignal`](util_signal.NullarySignal.md) |
| `reset` | () => `void` |
| `restoreState` | (`obj`: `unknown`) => `void` |
| `toJSON` | () => `undefined` \| `number`[] |

#### Defined in

[src/neuroglancer/navigation_state.ts:276](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L276)

___

### valid

• `get` **valid**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/navigation_state.ts:148](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L148)

___

### value

• `get` **value**(): `Float32Array`

Returns the position in voxels.

#### Returns

`Float32Array`

#### Defined in

[src/neuroglancer/navigation_state.ts:155](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L155)

• `set` **value**(`coordinates`): `void`

Returns the position in voxels.

#### Parameters

| Name | Type |
| :------ | :------ |
| `coordinates` | `Float32Array` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:166](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L166)

## Methods

### addRef

▸ **addRef**(): [`Position`](annotation_annotation_layer_state._internal_.Position.md)

#### Returns

[`Position`](annotation_annotation_layer_state._internal_.Position.md)

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[addRef](util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### assign

▸ **assign**(`other`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Position`](annotation_annotation_layer_state._internal_.Position.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:246](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L246)

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

### handleCoordinateSpaceChanged

▸ `Private` **handleCoordinateSpaceChanged**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:177](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L177)

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

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:160](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L160)

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

[src/neuroglancer/navigation_state.ts:225](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L225)

___

### snapToVoxel

▸ **snapToVoxel**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:236](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L236)

___

### toJSON

▸ **toJSON**(): `undefined` \| `number`[]

#### Returns

`undefined` \| `number`[]

#### Defined in

[src/neuroglancer/navigation_state.ts:217](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L217)

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

### addOffset

▸ `Static` **addOffset**(`target`, `source`, `offset`, `scale?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `target` | [`Position`](annotation_annotation_layer_state._internal_.Position.md) | `undefined` |
| `source` | [`Position`](annotation_annotation_layer_state._internal_.Position.md) | `undefined` |
| `offset` | `undefined` \| `Float32Array` | `undefined` |
| `scale` | `number` | `1` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:266](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L266)

___

### getOffset

▸ `Static` **getOffset**(`a`, `b`): `undefined` \| `Float32Array`

Get the offset of `a` relative to `b`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Position`](annotation_annotation_layer_state._internal_.Position.md) |
| `b` | [`Position`](annotation_annotation_layer_state._internal_.Position.md) |

#### Returns

`undefined` \| `Float32Array`

#### Defined in

[src/neuroglancer/navigation_state.ts:257](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L257)
