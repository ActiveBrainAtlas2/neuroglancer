[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/data\_panel\_layout](../modules/neuroglancer_data_panel_layout.md) / CrossSectionSpecification

# Class: CrossSectionSpecification

[neuroglancer/data_panel_layout](../modules/neuroglancer_data_panel_layout.md).CrossSectionSpecification

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

  ↳ **`CrossSectionSpecification`**

## Implements

- [`Trackable`](../interfaces/neuroglancer_util_trackable.Trackable.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_data_panel_layout.CrossSectionSpecification.md#constructor)

### Properties

- [changed](neuroglancer_data_panel_layout.CrossSectionSpecification.md#changed)
- [disposedStacks](neuroglancer_data_panel_layout.CrossSectionSpecification.md#disposedstacks)
- [height](neuroglancer_data_panel_layout.CrossSectionSpecification.md#height)
- [navigationState](neuroglancer_data_panel_layout.CrossSectionSpecification.md#navigationstate)
- [orientation](neuroglancer_data_panel_layout.CrossSectionSpecification.md#orientation)
- [position](neuroglancer_data_panel_layout.CrossSectionSpecification.md#position)
- [refCount](neuroglancer_data_panel_layout.CrossSectionSpecification.md#refcount)
- [scale](neuroglancer_data_panel_layout.CrossSectionSpecification.md#scale)
- [wasDisposed](neuroglancer_data_panel_layout.CrossSectionSpecification.md#wasdisposed)
- [width](neuroglancer_data_panel_layout.CrossSectionSpecification.md#width)

### Methods

- [addRef](neuroglancer_data_panel_layout.CrossSectionSpecification.md#addref)
- [dispose](neuroglancer_data_panel_layout.CrossSectionSpecification.md#dispose)
- [disposed](neuroglancer_data_panel_layout.CrossSectionSpecification.md#disposed)
- [refCountReachedZero](neuroglancer_data_panel_layout.CrossSectionSpecification.md#refcountreachedzero)
- [registerCancellable](neuroglancer_data_panel_layout.CrossSectionSpecification.md#registercancellable)
- [registerDisposer](neuroglancer_data_panel_layout.CrossSectionSpecification.md#registerdisposer)
- [registerEventListener](neuroglancer_data_panel_layout.CrossSectionSpecification.md#registereventlistener)
- [reset](neuroglancer_data_panel_layout.CrossSectionSpecification.md#reset)
- [restoreState](neuroglancer_data_panel_layout.CrossSectionSpecification.md#restorestate)
- [toJSON](neuroglancer_data_panel_layout.CrossSectionSpecification.md#tojson)
- [unregisterDisposer](neuroglancer_data_panel_layout.CrossSectionSpecification.md#unregisterdisposer)

## Constructors

### constructor

• **new CrossSectionSpecification**(`parent`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`NavigationState`](neuroglancer_navigation_state.NavigationState.md)<[`TrackableZoomInterface`](../modules/neuroglancer_navigation_state.md#trackablezoominterface)\> |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/data_panel_layout.ts:476](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/data_panel_layout.ts#L476)

## Properties

### changed

• **changed**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Implementation of

[Trackable](../interfaces/neuroglancer_util_trackable.Trackable.md).[changed](../interfaces/neuroglancer_util_trackable.Trackable.md#changed)

#### Defined in

[src/neuroglancer/data_panel_layout.ts:475](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/data_panel_layout.ts#L475)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### height

• **height**: [`TrackableValue`](neuroglancer_trackable_value.TrackableValue.md)<`number`\>

#### Defined in

[src/neuroglancer/data_panel_layout.ts:470](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/data_panel_layout.ts#L470)

___

### navigationState

• **navigationState**: [`NavigationState`](neuroglancer_navigation_state.NavigationState.md)<[`TrackableZoomInterface`](../modules/neuroglancer_navigation_state.md#trackablezoominterface)\>

#### Defined in

[src/neuroglancer/data_panel_layout.ts:474](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/data_panel_layout.ts#L474)

___

### orientation

• **orientation**: [`LinkedOrientationState`](neuroglancer_navigation_state.LinkedOrientationState.md)

#### Defined in

[src/neuroglancer/data_panel_layout.ts:472](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/data_panel_layout.ts#L472)

___

### position

• **position**: [`LinkedPosition`](neuroglancer_navigation_state.LinkedPosition.md)

#### Defined in

[src/neuroglancer/data_panel_layout.ts:471](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/data_panel_layout.ts#L471)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### scale

• **scale**: [`LinkedZoomState`](neuroglancer_navigation_state.LinkedZoomState.md)<[`TrackableZoomInterface`](../modules/neuroglancer_navigation_state.md#trackablezoominterface)\>

#### Defined in

[src/neuroglancer/data_panel_layout.ts:473](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/data_panel_layout.ts#L473)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

___

### width

• **width**: [`TrackableValue`](neuroglancer_trackable_value.TrackableValue.md)<`number`\>

#### Defined in

[src/neuroglancer/data_panel_layout.ts:469](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/data_panel_layout.ts#L469)

## Methods

### addRef

▸ **addRef**(): [`CrossSectionSpecification`](neuroglancer_data_panel_layout.CrossSectionSpecification.md)

#### Returns

[`CrossSectionSpecification`](neuroglancer_data_panel_layout.CrossSectionSpecification.md)

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

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Implementation of

Trackable.reset

#### Defined in

[src/neuroglancer/data_panel_layout.ts:504](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/data_panel_layout.ts#L504)

___

### restoreState

▸ **restoreState**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

`void`

#### Implementation of

Trackable.restoreState

#### Defined in

[src/neuroglancer/data_panel_layout.ts:494](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/data_panel_layout.ts#L494)

___

### toJSON

▸ **toJSON**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `height` | `any` |
| `orientation` | `undefined` \| { `link`: `undefined` \| `string` ; `value`: `any`  } |
| `position` | `undefined` \| { `link`: `undefined` \| `string` ; `value`: `any`  } |
| `scale` | `undefined` \| { `link`: `undefined` \| `string` ; `value`: `any`  } |
| `width` | `any` |

#### Implementation of

Trackable.toJSON

#### Defined in

[src/neuroglancer/data_panel_layout.ts:512](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/data_panel_layout.ts#L512)

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
