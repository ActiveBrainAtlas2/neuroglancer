[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/util/trackable](../modules/neuroglancer_util_trackable.md) / PersistentCompoundTrackable

# Class: PersistentCompoundTrackable

[neuroglancer/util/trackable](../modules/neuroglancer_util_trackable.md).PersistentCompoundTrackable

**`License`**

Copyright 2016 Google Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

## Hierarchy

- [`CompoundTrackable`](neuroglancer_util_trackable.CompoundTrackable.md)

  ↳ **`PersistentCompoundTrackable`**

## Table of contents

### Constructors

- [constructor](neuroglancer_util_trackable.PersistentCompoundTrackable.md#constructor)

### Properties

- [changed](neuroglancer_util_trackable.PersistentCompoundTrackable.md#changed)
- [children](neuroglancer_util_trackable.PersistentCompoundTrackable.md#children)
- [disposedStacks](neuroglancer_util_trackable.PersistentCompoundTrackable.md#disposedstacks)
- [lastState](neuroglancer_util_trackable.PersistentCompoundTrackable.md#laststate)
- [refCount](neuroglancer_util_trackable.PersistentCompoundTrackable.md#refcount)
- [wasDisposed](neuroglancer_util_trackable.PersistentCompoundTrackable.md#wasdisposed)

### Methods

- [add](neuroglancer_util_trackable.PersistentCompoundTrackable.md#add)
- [addRef](neuroglancer_util_trackable.PersistentCompoundTrackable.md#addref)
- [baseJSON](neuroglancer_util_trackable.PersistentCompoundTrackable.md#basejson)
- [dispose](neuroglancer_util_trackable.PersistentCompoundTrackable.md#dispose)
- [disposed](neuroglancer_util_trackable.PersistentCompoundTrackable.md#disposed)
- [refCountReachedZero](neuroglancer_util_trackable.PersistentCompoundTrackable.md#refcountreachedzero)
- [registerCancellable](neuroglancer_util_trackable.PersistentCompoundTrackable.md#registercancellable)
- [registerDisposer](neuroglancer_util_trackable.PersistentCompoundTrackable.md#registerdisposer)
- [registerEventListener](neuroglancer_util_trackable.PersistentCompoundTrackable.md#registereventlistener)
- [remove](neuroglancer_util_trackable.PersistentCompoundTrackable.md#remove)
- [reset](neuroglancer_util_trackable.PersistentCompoundTrackable.md#reset)
- [restoreState](neuroglancer_util_trackable.PersistentCompoundTrackable.md#restorestate)
- [toJSON](neuroglancer_util_trackable.PersistentCompoundTrackable.md#tojson)
- [unregisterDisposer](neuroglancer_util_trackable.PersistentCompoundTrackable.md#unregisterdisposer)

## Constructors

### constructor

• **new PersistentCompoundTrackable**()

#### Inherited from

[CompoundTrackable](neuroglancer_util_trackable.CompoundTrackable.md).[constructor](neuroglancer_util_trackable.CompoundTrackable.md#constructor)

## Properties

### changed

• **changed**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Inherited from

[CompoundTrackable](neuroglancer_util_trackable.CompoundTrackable.md).[changed](neuroglancer_util_trackable.CompoundTrackable.md#changed)

#### Defined in

[src/neuroglancer/util/trackable.ts:43](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/trackable.ts#L43)

___

### children

• **children**: `Map`<`string`, [`Trackable`](../interfaces/neuroglancer_util_trackable.Trackable.md)\>

#### Inherited from

[CompoundTrackable](neuroglancer_util_trackable.CompoundTrackable.md).[children](neuroglancer_util_trackable.CompoundTrackable.md#children)

#### Defined in

[src/neuroglancer/util/trackable.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/trackable.ts#L42)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[CompoundTrackable](neuroglancer_util_trackable.CompoundTrackable.md).[disposedStacks](neuroglancer_util_trackable.CompoundTrackable.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### lastState

• **lastState**: `Object` = `{}`

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

[src/neuroglancer/util/trackable.ts:115](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/trackable.ts#L115)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[CompoundTrackable](neuroglancer_util_trackable.CompoundTrackable.md).[refCount](neuroglancer_util_trackable.CompoundTrackable.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[CompoundTrackable](neuroglancer_util_trackable.CompoundTrackable.md).[wasDisposed](neuroglancer_util_trackable.CompoundTrackable.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

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

#### Overrides

[CompoundTrackable](neuroglancer_util_trackable.CompoundTrackable.md).[add](neuroglancer_util_trackable.CompoundTrackable.md#add)

#### Defined in

[src/neuroglancer/util/trackable.ts:141](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/trackable.ts#L141)

___

### addRef

▸ **addRef**(): [`PersistentCompoundTrackable`](neuroglancer_util_trackable.PersistentCompoundTrackable.md)

#### Returns

[`PersistentCompoundTrackable`](neuroglancer_util_trackable.PersistentCompoundTrackable.md)

#### Inherited from

[CompoundTrackable](neuroglancer_util_trackable.CompoundTrackable.md).[addRef](neuroglancer_util_trackable.CompoundTrackable.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

___

### baseJSON

▸ **baseJSON**(): { `[key: string]`: `any`;  } & { `[key: string]`: `any`;  }

#### Returns

{ `[key: string]`: `any`;  } & { `[key: string]`: `any`;  }

#### Overrides

[CompoundTrackable](neuroglancer_util_trackable.CompoundTrackable.md).[baseJSON](neuroglancer_util_trackable.CompoundTrackable.md#basejson)

#### Defined in

[src/neuroglancer/util/trackable.ts:128](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/trackable.ts#L128)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[CompoundTrackable](neuroglancer_util_trackable.CompoundTrackable.md).[dispose](neuroglancer_util_trackable.CompoundTrackable.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[CompoundTrackable](neuroglancer_util_trackable.CompoundTrackable.md).[disposed](neuroglancer_util_trackable.CompoundTrackable.md#disposed)

#### Defined in

[src/neuroglancer/util/trackable.ts:69](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/trackable.ts#L69)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[CompoundTrackable](neuroglancer_util_trackable.CompoundTrackable.md).[refCountReachedZero](neuroglancer_util_trackable.CompoundTrackable.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L66)

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

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L100)

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

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L76)

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

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L95)

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

[src/neuroglancer/util/trackable.ts:58](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/trackable.ts#L58)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Overrides

[CompoundTrackable](neuroglancer_util_trackable.CompoundTrackable.md).[reset](neuroglancer_util_trackable.CompoundTrackable.md#reset)

#### Defined in

[src/neuroglancer/util/trackable.ts:123](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/trackable.ts#L123)

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

[CompoundTrackable](neuroglancer_util_trackable.CompoundTrackable.md).[restoreState](neuroglancer_util_trackable.CompoundTrackable.md#restorestate)

#### Defined in

[src/neuroglancer/util/trackable.ts:117](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/trackable.ts#L117)

___

### toJSON

▸ **toJSON**(): `Object`

#### Returns

`Object`

#### Overrides

[CompoundTrackable](neuroglancer_util_trackable.CompoundTrackable.md).[toJSON](neuroglancer_util_trackable.CompoundTrackable.md#tojson)

#### Defined in

[src/neuroglancer/util/trackable.ts:136](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/trackable.ts#L136)

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

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L85)
