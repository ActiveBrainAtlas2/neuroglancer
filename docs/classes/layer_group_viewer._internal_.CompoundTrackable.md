[neuroglancer](../README.md) / [Modules](../modules.md) / [layer\_group\_viewer](../modules/layer_group_viewer.md) / [<internal\>](../modules/layer_group_viewer._internal_.md) / CompoundTrackable

# Class: CompoundTrackable

[layer_group_viewer](../modules/layer_group_viewer.md).[<internal>](../modules/layer_group_viewer._internal_.md).CompoundTrackable

## Hierarchy

- [`RefCounted`](axes_lines._internal_.RefCounted.md)

  ↳ **`CompoundTrackable`**

  ↳↳ [`TrackableViewerState`](viewer._internal_.TrackableViewerState.md)

## Implements

- [`Trackable`](../interfaces/coordinate_transform._internal_.Trackable.md)

## Table of contents

### Constructors

- [constructor](layer_group_viewer._internal_.CompoundTrackable.md#constructor)

### Properties

- [changed](layer_group_viewer._internal_.CompoundTrackable.md#changed)
- [children](layer_group_viewer._internal_.CompoundTrackable.md#children)
- [disposedStacks](layer_group_viewer._internal_.CompoundTrackable.md#disposedstacks)
- [refCount](layer_group_viewer._internal_.CompoundTrackable.md#refcount)
- [wasDisposed](layer_group_viewer._internal_.CompoundTrackable.md#wasdisposed)

### Methods

- [add](layer_group_viewer._internal_.CompoundTrackable.md#add)
- [addRef](layer_group_viewer._internal_.CompoundTrackable.md#addref)
- [baseJSON](layer_group_viewer._internal_.CompoundTrackable.md#basejson)
- [dispose](layer_group_viewer._internal_.CompoundTrackable.md#dispose)
- [disposed](layer_group_viewer._internal_.CompoundTrackable.md#disposed)
- [refCountReachedZero](layer_group_viewer._internal_.CompoundTrackable.md#refcountreachedzero)
- [registerCancellable](layer_group_viewer._internal_.CompoundTrackable.md#registercancellable)
- [registerDisposer](layer_group_viewer._internal_.CompoundTrackable.md#registerdisposer)
- [registerEventListener](layer_group_viewer._internal_.CompoundTrackable.md#registereventlistener)
- [remove](layer_group_viewer._internal_.CompoundTrackable.md#remove)
- [reset](layer_group_viewer._internal_.CompoundTrackable.md#reset)
- [restoreState](layer_group_viewer._internal_.CompoundTrackable.md#restorestate)
- [toJSON](layer_group_viewer._internal_.CompoundTrackable.md#tojson)
- [unregisterDisposer](layer_group_viewer._internal_.CompoundTrackable.md#unregisterdisposer)

## Constructors

### constructor

• **new CompoundTrackable**()

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[constructor](axes_lines._internal_.RefCounted.md#constructor)

## Properties

### changed

• **changed**: [`NullarySignal`](coordinate_transform._internal_.NullarySignal.md)

#### Implementation of

[Trackable](../interfaces/coordinate_transform._internal_.Trackable.md).[changed](../interfaces/coordinate_transform._internal_.Trackable.md#changed)

#### Defined in

[src/neuroglancer/util/trackable.ts:43](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/trackable.ts#L43)

___

### children

• **children**: `Map`<`string`, [`Trackable`](../interfaces/coordinate_transform._internal_.Trackable.md)\>

#### Defined in

[src/neuroglancer/util/trackable.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/trackable.ts#L42)

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

## Methods

### add

▸ **add**(`key`, `value`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | [`Trackable`](../interfaces/coordinate_transform._internal_.Trackable.md) |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/neuroglancer/util/trackable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/trackable.ts#L45)

___

### addRef

▸ **addRef**(): [`CompoundTrackable`](layer_group_viewer._internal_.CompoundTrackable.md)

#### Returns

[`CompoundTrackable`](layer_group_viewer._internal_.CompoundTrackable.md)

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[addRef](axes_lines._internal_.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L48)

___

### baseJSON

▸ **baseJSON**(): `Object`

#### Returns

`Object`

#### Defined in

[src/neuroglancer/util/trackable.ts:86](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/trackable.ts#L86)

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

#### Overrides

[RefCounted](axes_lines._internal_.RefCounted.md).[disposed](axes_lines._internal_.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/trackable.ts:69](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/trackable.ts#L69)

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

### remove

▸ **remove**(`key`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/trackable.ts:58](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/trackable.ts#L58)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Implementation of

[Trackable](../interfaces/coordinate_transform._internal_.Trackable.md).[reset](../interfaces/coordinate_transform._internal_.Trackable.md#reset)

#### Defined in

[src/neuroglancer/util/trackable.ts:90](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/trackable.ts#L90)

___

### restoreState

▸ **restoreState**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `any` |

#### Returns

`void`

#### Implementation of

[Trackable](../interfaces/coordinate_transform._internal_.Trackable.md).[restoreState](../interfaces/coordinate_transform._internal_.Trackable.md#restorestate)

#### Defined in

[src/neuroglancer/util/trackable.ts:96](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/trackable.ts#L96)

___

### toJSON

▸ **toJSON**(): `Object`

#### Returns

`Object`

#### Implementation of

[Trackable](../interfaces/coordinate_transform._internal_.Trackable.md).[toJSON](../interfaces/coordinate_transform._internal_.Trackable.md#tojson)

#### Defined in

[src/neuroglancer/util/trackable.ts:78](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/trackable.ts#L78)

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
