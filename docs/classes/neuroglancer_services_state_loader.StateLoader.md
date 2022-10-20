[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/services/state\_loader](../modules/neuroglancer_services_state_loader.md) / StateLoader

# Class: StateLoader

[neuroglancer/services/state_loader](../modules/neuroglancer_services_state_loader.md).StateLoader

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

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`StateLoader`**

## Table of contents

### Constructors

- [constructor](neuroglancer_services_state_loader.StateLoader.md#constructor)

### Properties

- [disposedStacks](neuroglancer_services_state_loader.StateLoader.md#disposedstacks)
- [element](neuroglancer_services_state_loader.StateLoader.md#element)
- [input](neuroglancer_services_state_loader.StateLoader.md#input)
- [newButton](neuroglancer_services_state_loader.StateLoader.md#newbutton)
- [refCount](neuroglancer_services_state_loader.StateLoader.md#refcount)
- [resetButton](neuroglancer_services_state_loader.StateLoader.md#resetbutton)
- [saveButton](neuroglancer_services_state_loader.StateLoader.md#savebutton)
- [stateAPI](neuroglancer_services_state_loader.StateLoader.md#stateapi)
- [stateID](neuroglancer_services_state_loader.StateLoader.md#stateid)
- [user](neuroglancer_services_state_loader.StateLoader.md#user)
- [viewer](neuroglancer_services_state_loader.StateLoader.md#viewer)
- [wasDisposed](neuroglancer_services_state_loader.StateLoader.md#wasdisposed)

### Methods

- [addRef](neuroglancer_services_state_loader.StateLoader.md#addref)
- [dispose](neuroglancer_services_state_loader.StateLoader.md#dispose)
- [disposed](neuroglancer_services_state_loader.StateLoader.md#disposed)
- [getState](neuroglancer_services_state_loader.StateLoader.md#getstate)
- [newState](neuroglancer_services_state_loader.StateLoader.md#newstate)
- [refCountReachedZero](neuroglancer_services_state_loader.StateLoader.md#refcountreachedzero)
- [registerCancellable](neuroglancer_services_state_loader.StateLoader.md#registercancellable)
- [registerDisposer](neuroglancer_services_state_loader.StateLoader.md#registerdisposer)
- [registerEventListener](neuroglancer_services_state_loader.StateLoader.md#registereventlistener)
- [resetState](neuroglancer_services_state_loader.StateLoader.md#resetstate)
- [saveAnnotations](neuroglancer_services_state_loader.StateLoader.md#saveannotations)
- [saveState](neuroglancer_services_state_loader.StateLoader.md#savestate)
- [segmentVolume](neuroglancer_services_state_loader.StateLoader.md#segmentvolume)
- [unregisterDisposer](neuroglancer_services_state_loader.StateLoader.md#unregisterdisposer)
- [validateState](neuroglancer_services_state_loader.StateLoader.md#validatestate)

## Constructors

### constructor

• **new StateLoader**(`viewer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `viewer` | [`Viewer`](neuroglancer_viewer.Viewer.md) |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/services/state_loader.ts:280](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/services/state_loader.ts#L280)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/services/state_loader.ts:270](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/services/state_loader.ts#L270)

___

### input

• `Private` **input**: [`StateAutocomplete`](neuroglancer_services_state_loader.StateAutocomplete.md)

#### Defined in

[src/neuroglancer/services/state_loader.ts:273](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/services/state_loader.ts#L273)

___

### newButton

• `Private` **newButton**: [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/services/state_loader.ts:276](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/services/state_loader.ts#L276)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### resetButton

• `Private` **resetButton**: [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/services/state_loader.ts:274](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/services/state_loader.ts#L274)

___

### saveButton

• `Private` **saveButton**: [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/services/state_loader.ts:275](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/services/state_loader.ts#L275)

___

### stateAPI

• `Private` **stateAPI**: [`StateAPI`](neuroglancer_services_state_loader.StateAPI.md)

#### Defined in

[src/neuroglancer/services/state_loader.ts:272](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/services/state_loader.ts#L272)

___

### stateID

• `Private` **stateID**: `number`

#### Defined in

[src/neuroglancer/services/state_loader.ts:278](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/services/state_loader.ts#L278)

___

### user

• `Private` **user**: [`User`](../interfaces/neuroglancer_services_user_loader.User.md)

#### Defined in

[src/neuroglancer/services/state_loader.ts:277](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/services/state_loader.ts#L277)

___

### viewer

• **viewer**: [`Viewer`](neuroglancer_viewer.Viewer.md)

#### Defined in

[src/neuroglancer/services/state_loader.ts:280](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/services/state_loader.ts#L280)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`StateLoader`](neuroglancer_services_state_loader.StateLoader.md)

#### Returns

[`StateLoader`](neuroglancer_services_state_loader.StateLoader.md)

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[addRef](neuroglancer_util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[dispose](neuroglancer_util_disposable.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposed](neuroglancer_util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L75)

___

### getState

▸ `Private` **getState**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/services/state_loader.ts:336](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/services/state_loader.ts#L336)

___

### newState

▸ `Private` **newState**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/services/state_loader.ts:373](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/services/state_loader.ts#L373)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCountReachedZero](neuroglancer_util_disposable.RefCounted.md#refcountreachedzero)

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

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[registerCancellable](neuroglancer_util_disposable.RefCounted.md#registercancellable)

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

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[registerDisposer](neuroglancer_util_disposable.RefCounted.md#registerdisposer)

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

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[registerEventListener](neuroglancer_util_disposable.RefCounted.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L95)

___

### resetState

▸ `Private` **resetState**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/services/state_loader.ts:461](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/services/state_loader.ts#L461)

___

### saveAnnotations

▸ **saveAnnotations**(`layerName`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `layerName` | `string` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/services/state_loader.ts:431](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/services/state_loader.ts#L431)

___

### saveState

▸ `Private` **saveState**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/services/state_loader.ts:350](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/services/state_loader.ts#L350)

___

### segmentVolume

▸ **segmentVolume**(`volumeId`, `successCallback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `volumeId` | `string` |
| `successCallback` | (`_`: [`Segmentation`](../interfaces/neuroglancer_services_state.Segmentation.md)) => `void` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/services/state_loader.ts:399](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/services/state_loader.ts#L399)

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

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L85)

___

### validateState

▸ `Private` **validateState**(`state`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | ``null`` \| [`State`](../interfaces/neuroglancer_services_state.State.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/services/state_loader.ts:327](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/services/state_loader.ts#L327)
