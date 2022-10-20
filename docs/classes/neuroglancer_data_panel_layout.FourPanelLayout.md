[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/data\_panel\_layout](../modules/neuroglancer_data_panel_layout.md) / FourPanelLayout

# Class: FourPanelLayout

[neuroglancer/data_panel_layout](../modules/neuroglancer_data_panel_layout.md).FourPanelLayout

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

  ↳ **`FourPanelLayout`**

## Table of contents

### Constructors

- [constructor](neuroglancer_data_panel_layout.FourPanelLayout.md#constructor)

### Properties

- [container](neuroglancer_data_panel_layout.FourPanelLayout.md#container)
- [disposedStacks](neuroglancer_data_panel_layout.FourPanelLayout.md#disposedstacks)
- [refCount](neuroglancer_data_panel_layout.FourPanelLayout.md#refcount)
- [rootElement](neuroglancer_data_panel_layout.FourPanelLayout.md#rootelement)
- [viewer](neuroglancer_data_panel_layout.FourPanelLayout.md#viewer)
- [wasDisposed](neuroglancer_data_panel_layout.FourPanelLayout.md#wasdisposed)

### Methods

- [addRef](neuroglancer_data_panel_layout.FourPanelLayout.md#addref)
- [dispose](neuroglancer_data_panel_layout.FourPanelLayout.md#dispose)
- [disposed](neuroglancer_data_panel_layout.FourPanelLayout.md#disposed)
- [refCountReachedZero](neuroglancer_data_panel_layout.FourPanelLayout.md#refcountreachedzero)
- [registerCancellable](neuroglancer_data_panel_layout.FourPanelLayout.md#registercancellable)
- [registerDisposer](neuroglancer_data_panel_layout.FourPanelLayout.md#registerdisposer)
- [registerEventListener](neuroglancer_data_panel_layout.FourPanelLayout.md#registereventlistener)
- [unregisterDisposer](neuroglancer_data_panel_layout.FourPanelLayout.md#unregisterdisposer)

## Constructors

### constructor

• **new FourPanelLayout**(`container`, `rootElement`, `viewer`, `crossSections`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`DataPanelLayoutContainer`](neuroglancer_data_panel_layout.DataPanelLayoutContainer.md) |
| `rootElement` | [`HTMLElement`](../modules/main_module._internal_.md#htmlelement) |
| `viewer` | [`ViewerUIState`](../interfaces/neuroglancer_data_panel_layout.ViewerUIState.md) |
| `crossSections` | [`CrossSectionSpecificationMap`](neuroglancer_data_panel_layout.CrossSectionSpecificationMap.md) |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/data_panel_layout.ts:249](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/data_panel_layout.ts#L249)

## Properties

### container

• **container**: [`DataPanelLayoutContainer`](neuroglancer_data_panel_layout.DataPanelLayoutContainer.md)

#### Defined in

[src/neuroglancer/data_panel_layout.ts:250](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/data_panel_layout.ts#L250)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### rootElement

• **rootElement**: [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/data_panel_layout.ts:250](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/data_panel_layout.ts#L250)

___

### viewer

• **viewer**: [`ViewerUIState`](../interfaces/neuroglancer_data_panel_layout.ViewerUIState.md)

#### Defined in

[src/neuroglancer/data_panel_layout.ts:251](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/data_panel_layout.ts#L251)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`FourPanelLayout`](neuroglancer_data_panel_layout.FourPanelLayout.md)

#### Returns

[`FourPanelLayout`](neuroglancer_data_panel_layout.FourPanelLayout.md)

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

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposed](neuroglancer_util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/data_panel_layout.ts:314](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/data_panel_layout.ts#L314)

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
