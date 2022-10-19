[neuroglancer](../README.md) / [Modules](../modules.md) / [util/trackable](../modules/util_trackable.md) / PersistentCompoundTrackable

# Class: PersistentCompoundTrackable

[util/trackable](../modules/util_trackable.md).PersistentCompoundTrackable

## Hierarchy

- [`CompoundTrackable`](util_trackable.CompoundTrackable.md)

  ↳ **`PersistentCompoundTrackable`**

## Table of contents

### Constructors

- [constructor](util_trackable.PersistentCompoundTrackable.md#constructor)

### Properties

- [changed](util_trackable.PersistentCompoundTrackable.md#changed)
- [children](util_trackable.PersistentCompoundTrackable.md#children)
- [disposedStacks](util_trackable.PersistentCompoundTrackable.md#disposedstacks)
- [lastState](util_trackable.PersistentCompoundTrackable.md#laststate)
- [refCount](util_trackable.PersistentCompoundTrackable.md#refcount)
- [wasDisposed](util_trackable.PersistentCompoundTrackable.md#wasdisposed)

### Methods

- [add](util_trackable.PersistentCompoundTrackable.md#add)
- [addRef](util_trackable.PersistentCompoundTrackable.md#addref)
- [baseJSON](util_trackable.PersistentCompoundTrackable.md#basejson)
- [dispose](util_trackable.PersistentCompoundTrackable.md#dispose)
- [disposed](util_trackable.PersistentCompoundTrackable.md#disposed)
- [refCountReachedZero](util_trackable.PersistentCompoundTrackable.md#refcountreachedzero)
- [registerCancellable](util_trackable.PersistentCompoundTrackable.md#registercancellable)
- [registerDisposer](util_trackable.PersistentCompoundTrackable.md#registerdisposer)
- [registerEventListener](util_trackable.PersistentCompoundTrackable.md#registereventlistener)
- [remove](util_trackable.PersistentCompoundTrackable.md#remove)
- [reset](util_trackable.PersistentCompoundTrackable.md#reset)
- [restoreState](util_trackable.PersistentCompoundTrackable.md#restorestate)
- [toJSON](util_trackable.PersistentCompoundTrackable.md#tojson)
- [unregisterDisposer](util_trackable.PersistentCompoundTrackable.md#unregisterdisposer)

## Constructors

### constructor

• **new PersistentCompoundTrackable**()

#### Inherited from

[CompoundTrackable](util_trackable.CompoundTrackable.md).[constructor](util_trackable.CompoundTrackable.md#constructor)

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

### lastState

• **lastState**: `Object` = `{}`

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

[src/neuroglancer/util/trackable.ts:115](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/trackable.ts#L115)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[CompoundTrackable](util_trackable.CompoundTrackable.md).[refCount](util_trackable.CompoundTrackable.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

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

#### Overrides

[CompoundTrackable](util_trackable.CompoundTrackable.md).[add](util_trackable.CompoundTrackable.md#add)

#### Defined in

[src/neuroglancer/util/trackable.ts:141](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/trackable.ts#L141)

___

### addRef

▸ **addRef**(): [`PersistentCompoundTrackable`](util_trackable.PersistentCompoundTrackable.md)

#### Returns

[`PersistentCompoundTrackable`](util_trackable.PersistentCompoundTrackable.md)

#### Inherited from

[CompoundTrackable](util_trackable.CompoundTrackable.md).[addRef](util_trackable.CompoundTrackable.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### baseJSON

▸ **baseJSON**(): { `[key: string]`: `any`;  } & { `[key: string]`: `any`;  }

#### Returns

{ `[key: string]`: `any`;  } & { `[key: string]`: `any`;  }

#### Overrides

[CompoundTrackable](util_trackable.CompoundTrackable.md).[baseJSON](util_trackable.CompoundTrackable.md#basejson)

#### Defined in

[src/neuroglancer/util/trackable.ts:128](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/trackable.ts#L128)

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

#### Overrides

[CompoundTrackable](util_trackable.CompoundTrackable.md).[reset](util_trackable.CompoundTrackable.md#reset)

#### Defined in

[src/neuroglancer/util/trackable.ts:123](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/trackable.ts#L123)

___

### restoreState

▸ **restoreState**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `any` |

#### Returns

`void`

#### Overrides

[CompoundTrackable](util_trackable.CompoundTrackable.md).[restoreState](util_trackable.CompoundTrackable.md#restorestate)

#### Defined in

[src/neuroglancer/util/trackable.ts:117](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/trackable.ts#L117)

___

### toJSON

▸ **toJSON**(): `Object`

#### Returns

`Object`

#### Overrides

[CompoundTrackable](util_trackable.CompoundTrackable.md).[toJSON](util_trackable.CompoundTrackable.md#tojson)

#### Defined in

[src/neuroglancer/util/trackable.ts:136](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/trackable.ts#L136)

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
