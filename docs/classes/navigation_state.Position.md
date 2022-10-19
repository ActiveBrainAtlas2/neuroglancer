[neuroglancer](../README.md) / [Modules](../modules.md) / [navigation\_state](../modules/navigation_state.md) / Position

# Class: Position

[navigation_state](../modules/navigation_state.md).Position

## Hierarchy

- [`RefCounted`](axes_lines._internal_.RefCounted.md)

  ↳ **`Position`**

## Table of contents

### Constructors

- [constructor](navigation_state.Position.md#constructor)

### Properties

- [changed](navigation_state.Position.md#changed)
- [coordinateSpace](navigation_state.Position.md#coordinatespace)
- [coordinates\_](navigation_state.Position.md#coordinates_)
- [curCoordinateSpace](navigation_state.Position.md#curcoordinatespace)
- [disposedStacks](navigation_state.Position.md#disposedstacks)
- [refCount](navigation_state.Position.md#refcount)
- [wasDisposed](navigation_state.Position.md#wasdisposed)

### Accessors

- [legacyJsonView](navigation_state.Position.md#legacyjsonview)
- [valid](navigation_state.Position.md#valid)
- [value](navigation_state.Position.md#value)

### Methods

- [addRef](navigation_state.Position.md#addref)
- [assign](navigation_state.Position.md#assign)
- [dispose](navigation_state.Position.md#dispose)
- [disposed](navigation_state.Position.md#disposed)
- [handleCoordinateSpaceChanged](navigation_state.Position.md#handlecoordinatespacechanged)
- [refCountReachedZero](navigation_state.Position.md#refcountreachedzero)
- [registerCancellable](navigation_state.Position.md#registercancellable)
- [registerDisposer](navigation_state.Position.md#registerdisposer)
- [registerEventListener](navigation_state.Position.md#registereventlistener)
- [reset](navigation_state.Position.md#reset)
- [restoreState](navigation_state.Position.md#restorestate)
- [snapToVoxel](navigation_state.Position.md#snaptovoxel)
- [toJSON](navigation_state.Position.md#tojson)
- [unregisterDisposer](navigation_state.Position.md#unregisterdisposer)
- [addOffset](navigation_state.Position.md#addoffset)
- [getOffset](navigation_state.Position.md#getoffset)

## Constructors

### constructor

• **new Position**(`coordinateSpace`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `coordinateSpace` | [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<[`CoordinateSpace`](../interfaces/coordinate_transform.CoordinateSpace.md)\> |

#### Overrides

[RefCounted](axes_lines._internal_.RefCounted.md).[constructor](axes_lines._internal_.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/navigation_state.ts:141](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/navigation_state.ts#L141)

## Properties

### changed

• **changed**: [`NullarySignal`](coordinate_transform._internal_.NullarySignal.md)

#### Defined in

[src/neuroglancer/navigation_state.ts:140](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/navigation_state.ts#L140)

___

### coordinateSpace

• **coordinateSpace**: [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<[`CoordinateSpace`](../interfaces/coordinate_transform.CoordinateSpace.md)\>

___

### coordinates\_

• `Private` **coordinates\_**: `Float32Array` = `vector.kEmptyFloat32Vec`

#### Defined in

[src/neuroglancer/navigation_state.ts:138](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/navigation_state.ts#L138)

___

### curCoordinateSpace

• `Private` **curCoordinateSpace**: `undefined` \| [`CoordinateSpace`](../interfaces/coordinate_transform.CoordinateSpace.md)

#### Defined in

[src/neuroglancer/navigation_state.ts:139](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/navigation_state.ts#L139)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[disposedStacks](axes_lines._internal_.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L52)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[refCount](axes_lines._internal_.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[wasDisposed](axes_lines._internal_.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### legacyJsonView

• `get` **legacyJsonView**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `changed` | [`NullarySignal`](coordinate_transform._internal_.NullarySignal.md) |
| `reset` | () => `void` |
| `restoreState` | (`obj`: `unknown`) => `void` |
| `toJSON` | () => `undefined` \| `number`[] |

#### Defined in

[src/neuroglancer/navigation_state.ts:276](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/navigation_state.ts#L276)

___

### valid

• `get` **valid**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/navigation_state.ts:148](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/navigation_state.ts#L148)

___

### value

• `get` **value**(): `Float32Array`

Returns the position in voxels.

#### Returns

`Float32Array`

#### Defined in

[src/neuroglancer/navigation_state.ts:155](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/navigation_state.ts#L155)

• `set` **value**(`coordinates`): `void`

Returns the position in voxels.

#### Parameters

| Name | Type |
| :------ | :------ |
| `coordinates` | `Float32Array` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:166](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/navigation_state.ts#L166)

## Methods

### addRef

▸ **addRef**(): [`Position`](navigation_state.Position.md)

#### Returns

[`Position`](navigation_state.Position.md)

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[addRef](axes_lines._internal_.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L48)

___

### assign

▸ **assign**(`other`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Position`](navigation_state.Position.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:246](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/navigation_state.ts#L246)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[dispose](axes_lines._internal_.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[disposed](axes_lines._internal_.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L75)

___

### handleCoordinateSpaceChanged

▸ `Private` **handleCoordinateSpaceChanged**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:177](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/navigation_state.ts#L177)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[refCountReachedZero](axes_lines._internal_.RefCounted.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L66)

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

[RefCounted](axes_lines._internal_.RefCounted.md).[registerCancellable](axes_lines._internal_.RefCounted.md#registercancellable)

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L100)

___

### registerDisposer

▸ **registerDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/axes_lines._internal_.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[registerDisposer](axes_lines._internal_.RefCounted.md#registerdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L76)

___

### registerEventListener

▸ **registerEventListener**(`target`, `type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EventTarget`](../modules/axes_lines._internal_.md#eventtarget) |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/axes_lines._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](../interfaces/axes_lines._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[registerEventListener](axes_lines._internal_.RefCounted.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L95)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:160](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/navigation_state.ts#L160)

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

[src/neuroglancer/navigation_state.ts:225](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/navigation_state.ts#L225)

___

### snapToVoxel

▸ **snapToVoxel**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:236](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/navigation_state.ts#L236)

___

### toJSON

▸ **toJSON**(): `undefined` \| `number`[]

#### Returns

`undefined` \| `number`[]

#### Defined in

[src/neuroglancer/navigation_state.ts:217](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/navigation_state.ts#L217)

___

### unregisterDisposer

▸ **unregisterDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/axes_lines._internal_.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[unregisterDisposer](axes_lines._internal_.RefCounted.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L85)

___

### addOffset

▸ `Static` **addOffset**(`target`, `source`, `offset`, `scale?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `target` | [`Position`](navigation_state.Position.md) | `undefined` |
| `source` | [`Position`](navigation_state.Position.md) | `undefined` |
| `offset` | `undefined` \| `Float32Array` | `undefined` |
| `scale` | `number` | `1` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:266](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/navigation_state.ts#L266)

___

### getOffset

▸ `Static` **getOffset**(`a`, `b`): `undefined` \| `Float32Array`

Get the offset of `a` relative to `b`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Position`](navigation_state.Position.md) |
| `b` | [`Position`](navigation_state.Position.md) |

#### Returns

`undefined` \| `Float32Array`

#### Defined in

[src/neuroglancer/navigation_state.ts:257](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/navigation_state.ts#L257)
