[neuroglancer](../README.md) / [Modules](../modules.md) / [viewer](../modules/viewer.md) / [<internal\>](../modules/viewer._internal_.md) / TrackableViewerState

# Class: TrackableViewerState

[viewer](../modules/viewer.md).[<internal>](../modules/viewer._internal_.md).TrackableViewerState

## Hierarchy

- [`CompoundTrackable`](layer_group_viewer._internal_.CompoundTrackable.md)

  ↳ **`TrackableViewerState`**

## Table of contents

### Constructors

- [constructor](viewer._internal_.TrackableViewerState.md#constructor)

### Properties

- [changed](viewer._internal_.TrackableViewerState.md#changed)
- [children](viewer._internal_.TrackableViewerState.md#children)
- [disposedStacks](viewer._internal_.TrackableViewerState.md#disposedstacks)
- [refCount](viewer._internal_.TrackableViewerState.md#refcount)
- [viewer](viewer._internal_.TrackableViewerState.md#viewer)
- [wasDisposed](viewer._internal_.TrackableViewerState.md#wasdisposed)

### Methods

- [add](viewer._internal_.TrackableViewerState.md#add)
- [addRef](viewer._internal_.TrackableViewerState.md#addref)
- [baseJSON](viewer._internal_.TrackableViewerState.md#basejson)
- [dispose](viewer._internal_.TrackableViewerState.md#dispose)
- [disposed](viewer._internal_.TrackableViewerState.md#disposed)
- [refCountReachedZero](viewer._internal_.TrackableViewerState.md#refcountreachedzero)
- [registerCancellable](viewer._internal_.TrackableViewerState.md#registercancellable)
- [registerDisposer](viewer._internal_.TrackableViewerState.md#registerdisposer)
- [registerEventListener](viewer._internal_.TrackableViewerState.md#registereventlistener)
- [remove](viewer._internal_.TrackableViewerState.md#remove)
- [reset](viewer._internal_.TrackableViewerState.md#reset)
- [restoreState](viewer._internal_.TrackableViewerState.md#restorestate)
- [toJSON](viewer._internal_.TrackableViewerState.md#tojson)
- [unregisterDisposer](viewer._internal_.TrackableViewerState.md#unregisterdisposer)

## Constructors

### constructor

• **new TrackableViewerState**(`viewer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `viewer` | [`Viewer`](viewer.Viewer.md) |

#### Overrides

[CompoundTrackable](layer_group_viewer._internal_.CompoundTrackable.md).[constructor](layer_group_viewer._internal_.CompoundTrackable.md#constructor)

#### Defined in

[src/neuroglancer/viewer.ts:185](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/viewer.ts#L185)

## Properties

### changed

• **changed**: [`NullarySignal`](coordinate_transform._internal_.NullarySignal.md)

#### Inherited from

[CompoundTrackable](layer_group_viewer._internal_.CompoundTrackable.md).[changed](layer_group_viewer._internal_.CompoundTrackable.md#changed)

#### Defined in

[src/neuroglancer/util/trackable.ts:43](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/trackable.ts#L43)

___

### children

• **children**: `Map`<`string`, [`Trackable`](../interfaces/coordinate_transform._internal_.Trackable.md)\>

#### Inherited from

[CompoundTrackable](layer_group_viewer._internal_.CompoundTrackable.md).[children](layer_group_viewer._internal_.CompoundTrackable.md#children)

#### Defined in

[src/neuroglancer/util/trackable.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/trackable.ts#L42)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[CompoundTrackable](layer_group_viewer._internal_.CompoundTrackable.md).[disposedStacks](layer_group_viewer._internal_.CompoundTrackable.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L52)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[CompoundTrackable](layer_group_viewer._internal_.CompoundTrackable.md).[refCount](layer_group_viewer._internal_.CompoundTrackable.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L45)

___

### viewer

• **viewer**: [`Viewer`](viewer.Viewer.md)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[CompoundTrackable](layer_group_viewer._internal_.CompoundTrackable.md).[wasDisposed](layer_group_viewer._internal_.CompoundTrackable.md#wasdisposed)

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

#### Inherited from

[CompoundTrackable](layer_group_viewer._internal_.CompoundTrackable.md).[add](layer_group_viewer._internal_.CompoundTrackable.md#add)

#### Defined in

[src/neuroglancer/util/trackable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/trackable.ts#L45)

___

### addRef

▸ **addRef**(): [`TrackableViewerState`](viewer._internal_.TrackableViewerState.md)

#### Returns

[`TrackableViewerState`](viewer._internal_.TrackableViewerState.md)

#### Inherited from

[CompoundTrackable](layer_group_viewer._internal_.CompoundTrackable.md).[addRef](layer_group_viewer._internal_.CompoundTrackable.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L48)

___

### baseJSON

▸ **baseJSON**(): `Object`

#### Returns

`Object`

#### Inherited from

[CompoundTrackable](layer_group_viewer._internal_.CompoundTrackable.md).[baseJSON](layer_group_viewer._internal_.CompoundTrackable.md#basejson)

#### Defined in

[src/neuroglancer/util/trackable.ts:86](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/trackable.ts#L86)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[CompoundTrackable](layer_group_viewer._internal_.CompoundTrackable.md).[dispose](layer_group_viewer._internal_.CompoundTrackable.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[CompoundTrackable](layer_group_viewer._internal_.CompoundTrackable.md).[disposed](layer_group_viewer._internal_.CompoundTrackable.md#disposed)

#### Defined in

[src/neuroglancer/util/trackable.ts:69](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/trackable.ts#L69)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[CompoundTrackable](layer_group_viewer._internal_.CompoundTrackable.md).[refCountReachedZero](layer_group_viewer._internal_.CompoundTrackable.md#refcountreachedzero)

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

[CompoundTrackable](layer_group_viewer._internal_.CompoundTrackable.md).[registerCancellable](layer_group_viewer._internal_.CompoundTrackable.md#registercancellable)

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

[CompoundTrackable](layer_group_viewer._internal_.CompoundTrackable.md).[registerDisposer](layer_group_viewer._internal_.CompoundTrackable.md#registerdisposer)

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

[CompoundTrackable](layer_group_viewer._internal_.CompoundTrackable.md).[registerEventListener](layer_group_viewer._internal_.CompoundTrackable.md#registereventlistener)

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

#### Inherited from

[CompoundTrackable](layer_group_viewer._internal_.CompoundTrackable.md).[remove](layer_group_viewer._internal_.CompoundTrackable.md#remove)

#### Defined in

[src/neuroglancer/util/trackable.ts:58](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/trackable.ts#L58)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Inherited from

[CompoundTrackable](layer_group_viewer._internal_.CompoundTrackable.md).[reset](layer_group_viewer._internal_.CompoundTrackable.md#reset)

#### Defined in

[src/neuroglancer/util/trackable.ts:90](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/trackable.ts#L90)

___

### restoreState

▸ **restoreState**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

`void`

#### Overrides

[CompoundTrackable](layer_group_viewer._internal_.CompoundTrackable.md).[restoreState](layer_group_viewer._internal_.CompoundTrackable.md#restorestate)

#### Defined in

[src/neuroglancer/viewer.ts:225](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/viewer.ts#L225)

___

### toJSON

▸ **toJSON**(): `Object`

#### Returns

`Object`

#### Inherited from

[CompoundTrackable](layer_group_viewer._internal_.CompoundTrackable.md).[toJSON](layer_group_viewer._internal_.CompoundTrackable.md#tojson)

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

[CompoundTrackable](layer_group_viewer._internal_.CompoundTrackable.md).[unregisterDisposer](layer_group_viewer._internal_.CompoundTrackable.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L85)
