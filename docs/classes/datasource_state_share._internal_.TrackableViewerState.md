[neuroglancer](../README.md) / [Modules](../modules.md) / [datasource/state\_share](../modules/datasource_state_share.md) / [<internal\>](../modules/datasource_state_share._internal_.md) / TrackableViewerState

# Class: TrackableViewerState

[datasource/state_share](../modules/datasource_state_share.md).[<internal>](../modules/datasource_state_share._internal_.md).TrackableViewerState

## Hierarchy

- [`CompoundTrackable`](util_trackable.CompoundTrackable.md)

  ↳ **`TrackableViewerState`**

## Table of contents

### Constructors

- [constructor](datasource_state_share._internal_.TrackableViewerState.md#constructor)

### Properties

- [changed](datasource_state_share._internal_.TrackableViewerState.md#changed)
- [children](datasource_state_share._internal_.TrackableViewerState.md#children)
- [disposedStacks](datasource_state_share._internal_.TrackableViewerState.md#disposedstacks)
- [refCount](datasource_state_share._internal_.TrackableViewerState.md#refcount)
- [viewer](datasource_state_share._internal_.TrackableViewerState.md#viewer)
- [wasDisposed](datasource_state_share._internal_.TrackableViewerState.md#wasdisposed)

### Methods

- [add](datasource_state_share._internal_.TrackableViewerState.md#add)
- [addRef](datasource_state_share._internal_.TrackableViewerState.md#addref)
- [baseJSON](datasource_state_share._internal_.TrackableViewerState.md#basejson)
- [dispose](datasource_state_share._internal_.TrackableViewerState.md#dispose)
- [disposed](datasource_state_share._internal_.TrackableViewerState.md#disposed)
- [refCountReachedZero](datasource_state_share._internal_.TrackableViewerState.md#refcountreachedzero)
- [registerCancellable](datasource_state_share._internal_.TrackableViewerState.md#registercancellable)
- [registerDisposer](datasource_state_share._internal_.TrackableViewerState.md#registerdisposer)
- [registerEventListener](datasource_state_share._internal_.TrackableViewerState.md#registereventlistener)
- [remove](datasource_state_share._internal_.TrackableViewerState.md#remove)
- [reset](datasource_state_share._internal_.TrackableViewerState.md#reset)
- [restoreState](datasource_state_share._internal_.TrackableViewerState.md#restorestate)
- [toJSON](datasource_state_share._internal_.TrackableViewerState.md#tojson)
- [unregisterDisposer](datasource_state_share._internal_.TrackableViewerState.md#unregisterdisposer)

## Constructors

### constructor

• **new TrackableViewerState**(`viewer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `viewer` | [`Viewer`](datasource_state_share._internal_.Viewer.md) |

#### Overrides

[CompoundTrackable](util_trackable.CompoundTrackable.md).[constructor](util_trackable.CompoundTrackable.md#constructor)

#### Defined in

[src/neuroglancer/viewer.ts:185](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L185)

## Properties

### changed

• **changed**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Inherited from

[CompoundTrackable](util_trackable.CompoundTrackable.md).[changed](util_trackable.CompoundTrackable.md#changed)

#### Defined in

[src/neuroglancer/util/trackable.ts:43](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/trackable.ts#L43)

___

### children

• **children**: `Map`<`string`, [`Trackable`](../interfaces/util_trackable.Trackable.md)\>

#### Inherited from

[CompoundTrackable](util_trackable.CompoundTrackable.md).[children](util_trackable.CompoundTrackable.md#children)

#### Defined in

[src/neuroglancer/util/trackable.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/trackable.ts#L42)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[CompoundTrackable](util_trackable.CompoundTrackable.md).[disposedStacks](util_trackable.CompoundTrackable.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[CompoundTrackable](util_trackable.CompoundTrackable.md).[refCount](util_trackable.CompoundTrackable.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### viewer

• **viewer**: [`Viewer`](datasource_state_share._internal_.Viewer.md)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[CompoundTrackable](util_trackable.CompoundTrackable.md).[wasDisposed](util_trackable.CompoundTrackable.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Methods

### add

▸ **add**(`key`, `value`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | [`Trackable`](../interfaces/util_trackable.Trackable.md) |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Inherited from

[CompoundTrackable](util_trackable.CompoundTrackable.md).[add](util_trackable.CompoundTrackable.md#add)

#### Defined in

[src/neuroglancer/util/trackable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/trackable.ts#L45)

___

### addRef

▸ **addRef**(): [`TrackableViewerState`](datasource_state_share._internal_.TrackableViewerState.md)

#### Returns

[`TrackableViewerState`](datasource_state_share._internal_.TrackableViewerState.md)

#### Inherited from

[CompoundTrackable](util_trackable.CompoundTrackable.md).[addRef](util_trackable.CompoundTrackable.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### baseJSON

▸ **baseJSON**(): `Object`

#### Returns

`Object`

#### Inherited from

[CompoundTrackable](util_trackable.CompoundTrackable.md).[baseJSON](util_trackable.CompoundTrackable.md#basejson)

#### Defined in

[src/neuroglancer/util/trackable.ts:86](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/trackable.ts#L86)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[CompoundTrackable](util_trackable.CompoundTrackable.md).[dispose](util_trackable.CompoundTrackable.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[CompoundTrackable](util_trackable.CompoundTrackable.md).[disposed](util_trackable.CompoundTrackable.md#disposed)

#### Defined in

[src/neuroglancer/util/trackable.ts:69](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/trackable.ts#L69)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[CompoundTrackable](util_trackable.CompoundTrackable.md).[refCountReachedZero](util_trackable.CompoundTrackable.md#refcountreachedzero)

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

[CompoundTrackable](util_trackable.CompoundTrackable.md).[registerCancellable](util_trackable.CompoundTrackable.md#registercancellable)

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

[CompoundTrackable](util_trackable.CompoundTrackable.md).[registerDisposer](util_trackable.CompoundTrackable.md#registerdisposer)

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

[CompoundTrackable](util_trackable.CompoundTrackable.md).[registerEventListener](util_trackable.CompoundTrackable.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L95)

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

[CompoundTrackable](util_trackable.CompoundTrackable.md).[remove](util_trackable.CompoundTrackable.md#remove)

#### Defined in

[src/neuroglancer/util/trackable.ts:58](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/trackable.ts#L58)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Inherited from

[CompoundTrackable](util_trackable.CompoundTrackable.md).[reset](util_trackable.CompoundTrackable.md#reset)

#### Defined in

[src/neuroglancer/util/trackable.ts:90](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/trackable.ts#L90)

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

[CompoundTrackable](util_trackable.CompoundTrackable.md).[restoreState](util_trackable.CompoundTrackable.md#restorestate)

#### Defined in

[src/neuroglancer/viewer.ts:225](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L225)

___

### toJSON

▸ **toJSON**(): `Object`

#### Returns

`Object`

#### Inherited from

[CompoundTrackable](util_trackable.CompoundTrackable.md).[toJSON](util_trackable.CompoundTrackable.md#tojson)

#### Defined in

[src/neuroglancer/util/trackable.ts:78](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/trackable.ts#L78)

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

[CompoundTrackable](util_trackable.CompoundTrackable.md).[unregisterDisposer](util_trackable.CompoundTrackable.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)
