[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/navigation\_state](../modules/neuroglancer_navigation_state.md) / [<internal\>](../modules/neuroglancer_navigation_state._internal_.md) / LinkableState

# Interface: LinkableState<T\>

[neuroglancer/navigation_state](../modules/neuroglancer_navigation_state.md).[<internal>](../modules/neuroglancer_navigation_state._internal_.md).LinkableState

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

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`RefCounted`](../classes/neuroglancer_util_disposable.RefCounted.md)

- [`Trackable`](neuroglancer_util_trackable.Trackable.md)

  ↳ **`LinkableState`**

## Table of contents

### Properties

- [changed](neuroglancer_navigation_state._internal_.LinkableState.md#changed)
- [disposedStacks](neuroglancer_navigation_state._internal_.LinkableState.md#disposedstacks)
- [refCount](neuroglancer_navigation_state._internal_.LinkableState.md#refcount)
- [reset](neuroglancer_navigation_state._internal_.LinkableState.md#reset)
- [restoreState](neuroglancer_navigation_state._internal_.LinkableState.md#restorestate)
- [toJSON](neuroglancer_navigation_state._internal_.LinkableState.md#tojson)
- [wasDisposed](neuroglancer_navigation_state._internal_.LinkableState.md#wasdisposed)

### Methods

- [addRef](neuroglancer_navigation_state._internal_.LinkableState.md#addref)
- [assign](neuroglancer_navigation_state._internal_.LinkableState.md#assign)
- [dispose](neuroglancer_navigation_state._internal_.LinkableState.md#dispose)
- [disposed](neuroglancer_navigation_state._internal_.LinkableState.md#disposed)
- [refCountReachedZero](neuroglancer_navigation_state._internal_.LinkableState.md#refcountreachedzero)
- [registerCancellable](neuroglancer_navigation_state._internal_.LinkableState.md#registercancellable)
- [registerDisposer](neuroglancer_navigation_state._internal_.LinkableState.md#registerdisposer)
- [registerEventListener](neuroglancer_navigation_state._internal_.LinkableState.md#registereventlistener)
- [unregisterDisposer](neuroglancer_navigation_state._internal_.LinkableState.md#unregisterdisposer)

## Properties

### changed

• **changed**: [`NullaryReadonlySignal`](../modules/neuroglancer_util_signal.md#nullaryreadonlysignal)

#### Inherited from

[Trackable](neuroglancer_util_trackable.Trackable.md).[changed](neuroglancer_util_trackable.Trackable.md#changed)

#### Defined in

[src/neuroglancer/util/trackable.ts:37](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/trackable.ts#L37)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](../classes/neuroglancer_util_disposable.RefCounted.md).[disposedStacks](../classes/neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](../classes/neuroglancer_util_disposable.RefCounted.md).[refCount](../classes/neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### reset

• **reset**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Inherited from

[Trackable](neuroglancer_util_trackable.Trackable.md).[reset](neuroglancer_util_trackable.Trackable.md#reset)

#### Defined in

[src/neuroglancer/util/trackable.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/trackable.ts#L36)

___

### restoreState

• **restoreState**: (`x`: `any`) => `void`

#### Type declaration

▸ (`x`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `any` |

##### Returns

`void`

#### Inherited from

[Trackable](neuroglancer_util_trackable.Trackable.md).[restoreState](neuroglancer_util_trackable.Trackable.md#restorestate)

#### Defined in

[src/neuroglancer/util/trackable.ts:35](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/trackable.ts#L35)

___

### toJSON

• **toJSON**: () => `any`

#### Type declaration

▸ (): `any`

##### Returns

`any`

#### Inherited from

[Trackable](neuroglancer_util_trackable.Trackable.md).[toJSON](neuroglancer_util_trackable.Trackable.md#tojson)

#### Defined in

[src/neuroglancer/util/trackable.ts:38](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/trackable.ts#L38)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](../classes/neuroglancer_util_disposable.RefCounted.md).[wasDisposed](../classes/neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`LinkableState`](neuroglancer_navigation_state._internal_.LinkableState.md)<`T`\>

#### Returns

[`LinkableState`](neuroglancer_navigation_state._internal_.LinkableState.md)<`T`\>

#### Inherited from

[RefCounted](../classes/neuroglancer_util_disposable.RefCounted.md).[addRef](../classes/neuroglancer_util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

___

### assign

▸ **assign**(`other`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `T` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/navigation_state.ts:317](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/navigation_state.ts#L317)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](../classes/neuroglancer_util_disposable.RefCounted.md).[dispose](../classes/neuroglancer_util_disposable.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](../classes/neuroglancer_util_disposable.RefCounted.md).[disposed](../classes/neuroglancer_util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L75)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](../classes/neuroglancer_util_disposable.RefCounted.md).[refCountReachedZero](../classes/neuroglancer_util_disposable.RefCounted.md#refcountreachedzero)

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

[RefCounted](../classes/neuroglancer_util_disposable.RefCounted.md).[registerCancellable](../classes/neuroglancer_util_disposable.RefCounted.md#registercancellable)

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

[RefCounted](../classes/neuroglancer_util_disposable.RefCounted.md).[registerDisposer](../classes/neuroglancer_util_disposable.RefCounted.md#registerdisposer)

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
| `options?` | `boolean` \| [`AddEventListenerOptions`](main_module._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

[RefCounted](../classes/neuroglancer_util_disposable.RefCounted.md).[registerEventListener](../classes/neuroglancer_util_disposable.RefCounted.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L95)

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

[RefCounted](../classes/neuroglancer_util_disposable.RefCounted.md).[unregisterDisposer](../classes/neuroglancer_util_disposable.RefCounted.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L85)
