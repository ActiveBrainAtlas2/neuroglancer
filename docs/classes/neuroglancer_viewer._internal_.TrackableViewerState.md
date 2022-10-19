[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/viewer](../modules/neuroglancer_viewer.md) / [<internal\>](../modules/neuroglancer_viewer._internal_.md) / TrackableViewerState

# Class: TrackableViewerState

[neuroglancer/viewer](../modules/neuroglancer_viewer.md).[<internal>](../modules/neuroglancer_viewer._internal_.md).TrackableViewerState

## Hierarchy

- [`CompoundTrackable`](neuroglancer_util_trackable.CompoundTrackable.md)

  ↳ **`TrackableViewerState`**

## Table of contents

### Constructors

- [constructor](neuroglancer_viewer._internal_.TrackableViewerState.md#constructor)

### Properties

- [changed](neuroglancer_viewer._internal_.TrackableViewerState.md#changed)
- [children](neuroglancer_viewer._internal_.TrackableViewerState.md#children)
- [disposedStacks](neuroglancer_viewer._internal_.TrackableViewerState.md#disposedstacks)
- [refCount](neuroglancer_viewer._internal_.TrackableViewerState.md#refcount)
- [viewer](neuroglancer_viewer._internal_.TrackableViewerState.md#viewer)
- [wasDisposed](neuroglancer_viewer._internal_.TrackableViewerState.md#wasdisposed)

### Methods

- [add](neuroglancer_viewer._internal_.TrackableViewerState.md#add)
- [addRef](neuroglancer_viewer._internal_.TrackableViewerState.md#addref)
- [baseJSON](neuroglancer_viewer._internal_.TrackableViewerState.md#basejson)
- [dispose](neuroglancer_viewer._internal_.TrackableViewerState.md#dispose)
- [disposed](neuroglancer_viewer._internal_.TrackableViewerState.md#disposed)
- [refCountReachedZero](neuroglancer_viewer._internal_.TrackableViewerState.md#refcountreachedzero)
- [registerCancellable](neuroglancer_viewer._internal_.TrackableViewerState.md#registercancellable)
- [registerDisposer](neuroglancer_viewer._internal_.TrackableViewerState.md#registerdisposer)
- [registerEventListener](neuroglancer_viewer._internal_.TrackableViewerState.md#registereventlistener)
- [remove](neuroglancer_viewer._internal_.TrackableViewerState.md#remove)
- [reset](neuroglancer_viewer._internal_.TrackableViewerState.md#reset)
- [restoreState](neuroglancer_viewer._internal_.TrackableViewerState.md#restorestate)
- [toJSON](neuroglancer_viewer._internal_.TrackableViewerState.md#tojson)
- [unregisterDisposer](neuroglancer_viewer._internal_.TrackableViewerState.md#unregisterdisposer)

## Constructors

### constructor

• **new TrackableViewerState**(`viewer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `viewer` | [`Viewer`](neuroglancer_viewer.Viewer.md) |

#### Overrides

[CompoundTrackable](neuroglancer_util_trackable.CompoundTrackable.md).[constructor](neuroglancer_util_trackable.CompoundTrackable.md#constructor)

#### Defined in

[src/neuroglancer/viewer.ts:185](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L185)

## Properties

### changed

• **changed**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Inherited from

[CompoundTrackable](neuroglancer_util_trackable.CompoundTrackable.md).[changed](neuroglancer_util_trackable.CompoundTrackable.md#changed)

#### Defined in

[src/neuroglancer/util/trackable.ts:43](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/trackable.ts#L43)

___

### children

• **children**: `Map`<`string`, [`Trackable`](../interfaces/neuroglancer_util_trackable.Trackable.md)\>

#### Inherited from

[CompoundTrackable](neuroglancer_util_trackable.CompoundTrackable.md).[children](neuroglancer_util_trackable.CompoundTrackable.md#children)

#### Defined in

[src/neuroglancer/util/trackable.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/trackable.ts#L42)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[CompoundTrackable](neuroglancer_util_trackable.CompoundTrackable.md).[disposedStacks](neuroglancer_util_trackable.CompoundTrackable.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[CompoundTrackable](neuroglancer_util_trackable.CompoundTrackable.md).[refCount](neuroglancer_util_trackable.CompoundTrackable.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### viewer

• **viewer**: [`Viewer`](neuroglancer_viewer.Viewer.md)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[CompoundTrackable](neuroglancer_util_trackable.CompoundTrackable.md).[wasDisposed](neuroglancer_util_trackable.CompoundTrackable.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

## Methods

### add

▸ **add**(`key`, `value`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | [`Trackable`](../interfaces/neuroglancer_util_trackable.Trackable.md) |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Inherited from

[CompoundTrackable](neuroglancer_util_trackable.CompoundTrackable.md).[add](neuroglancer_util_trackable.CompoundTrackable.md#add)

#### Defined in

[src/neuroglancer/util/trackable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/trackable.ts#L45)

___

### addRef

▸ **addRef**(): [`TrackableViewerState`](neuroglancer_viewer._internal_.TrackableViewerState.md)

#### Returns

[`TrackableViewerState`](neuroglancer_viewer._internal_.TrackableViewerState.md)

#### Inherited from

[CompoundTrackable](neuroglancer_util_trackable.CompoundTrackable.md).[addRef](neuroglancer_util_trackable.CompoundTrackable.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L48)

___

### baseJSON

▸ **baseJSON**(): `Object`

#### Returns

`Object`

#### Inherited from

[CompoundTrackable](neuroglancer_util_trackable.CompoundTrackable.md).[baseJSON](neuroglancer_util_trackable.CompoundTrackable.md#basejson)

#### Defined in

[src/neuroglancer/util/trackable.ts:86](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/trackable.ts#L86)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[CompoundTrackable](neuroglancer_util_trackable.CompoundTrackable.md).[dispose](neuroglancer_util_trackable.CompoundTrackable.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[CompoundTrackable](neuroglancer_util_trackable.CompoundTrackable.md).[disposed](neuroglancer_util_trackable.CompoundTrackable.md#disposed)

#### Defined in

[src/neuroglancer/util/trackable.ts:69](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/trackable.ts#L69)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[CompoundTrackable](neuroglancer_util_trackable.CompoundTrackable.md).[refCountReachedZero](neuroglancer_util_trackable.CompoundTrackable.md#refcountreachedzero)

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

[CompoundTrackable](neuroglancer_util_trackable.CompoundTrackable.md).[registerCancellable](neuroglancer_util_trackable.CompoundTrackable.md#registercancellable)

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

[CompoundTrackable](neuroglancer_util_trackable.CompoundTrackable.md).[registerDisposer](neuroglancer_util_trackable.CompoundTrackable.md#registerdisposer)

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

[CompoundTrackable](neuroglancer_util_trackable.CompoundTrackable.md).[registerEventListener](neuroglancer_util_trackable.CompoundTrackable.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L95)

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

[CompoundTrackable](neuroglancer_util_trackable.CompoundTrackable.md).[remove](neuroglancer_util_trackable.CompoundTrackable.md#remove)

#### Defined in

[src/neuroglancer/util/trackable.ts:58](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/trackable.ts#L58)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Inherited from

[CompoundTrackable](neuroglancer_util_trackable.CompoundTrackable.md).[reset](neuroglancer_util_trackable.CompoundTrackable.md#reset)

#### Defined in

[src/neuroglancer/util/trackable.ts:90](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/trackable.ts#L90)

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

[CompoundTrackable](neuroglancer_util_trackable.CompoundTrackable.md).[restoreState](neuroglancer_util_trackable.CompoundTrackable.md#restorestate)

#### Defined in

[src/neuroglancer/viewer.ts:225](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer.ts#L225)

___

### toJSON

▸ **toJSON**(): `Object`

#### Returns

`Object`

#### Inherited from

[CompoundTrackable](neuroglancer_util_trackable.CompoundTrackable.md).[toJSON](neuroglancer_util_trackable.CompoundTrackable.md#tojson)

#### Defined in

[src/neuroglancer/util/trackable.ts:78](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/trackable.ts#L78)

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

[CompoundTrackable](neuroglancer_util_trackable.CompoundTrackable.md).[unregisterDisposer](neuroglancer_util_trackable.CompoundTrackable.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L85)
