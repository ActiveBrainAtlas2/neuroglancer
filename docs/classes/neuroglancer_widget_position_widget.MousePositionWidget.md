[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/widget/position\_widget](../modules/neuroglancer_widget_position_widget.md) / MousePositionWidget

# Class: MousePositionWidget

[neuroglancer/widget/position_widget](../modules/neuroglancer_widget_position_widget.md).MousePositionWidget

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

  ↳ **`MousePositionWidget`**

## Table of contents

### Constructors

- [constructor](neuroglancer_widget_position_widget.MousePositionWidget.md#constructor)

### Properties

- [coordinateSpace](neuroglancer_widget_position_widget.MousePositionWidget.md#coordinatespace)
- [disposedStacks](neuroglancer_widget_position_widget.MousePositionWidget.md#disposedstacks)
- [element](neuroglancer_widget_position_widget.MousePositionWidget.md#element)
- [mouseState](neuroglancer_widget_position_widget.MousePositionWidget.md#mousestate)
- [refCount](neuroglancer_widget_position_widget.MousePositionWidget.md#refcount)
- [tempPosition](neuroglancer_widget_position_widget.MousePositionWidget.md#tempposition)
- [wasDisposed](neuroglancer_widget_position_widget.MousePositionWidget.md#wasdisposed)

### Methods

- [addRef](neuroglancer_widget_position_widget.MousePositionWidget.md#addref)
- [dispose](neuroglancer_widget_position_widget.MousePositionWidget.md#dispose)
- [disposed](neuroglancer_widget_position_widget.MousePositionWidget.md#disposed)
- [refCountReachedZero](neuroglancer_widget_position_widget.MousePositionWidget.md#refcountreachedzero)
- [registerCancellable](neuroglancer_widget_position_widget.MousePositionWidget.md#registercancellable)
- [registerDisposer](neuroglancer_widget_position_widget.MousePositionWidget.md#registerdisposer)
- [registerEventListener](neuroglancer_widget_position_widget.MousePositionWidget.md#registereventlistener)
- [unregisterDisposer](neuroglancer_widget_position_widget.MousePositionWidget.md#unregisterdisposer)
- [updateView](neuroglancer_widget_position_widget.MousePositionWidget.md#updateview)

## Constructors

### constructor

• **new MousePositionWidget**(`element`, `mouseState`, `coordinateSpace`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | [`HTMLElement`](../modules/main_module._internal_.md#htmlelement) |
| `mouseState` | [`MouseSelectionState`](neuroglancer_layer.MouseSelectionState.md) |
| `coordinateSpace` | [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<`undefined` \| [`CoordinateSpace`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpace.md)\> |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/widget/position_widget.ts:998](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/position_widget.ts#L998)

## Properties

### coordinateSpace

• **coordinateSpace**: [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<`undefined` \| [`CoordinateSpace`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpace.md)\>

#### Defined in

[src/neuroglancer/widget/position_widget.ts:1000](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/position_widget.ts#L1000)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/widget/position_widget.ts:999](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/position_widget.ts#L999)

___

### mouseState

• **mouseState**: [`MouseSelectionState`](neuroglancer_layer.MouseSelectionState.md)

#### Defined in

[src/neuroglancer/widget/position_widget.ts:999](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/position_widget.ts#L999)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### tempPosition

• **tempPosition**: [`vec3`](neuroglancer_util_geom.vec3.md)

#### Defined in

[src/neuroglancer/widget/position_widget.ts:997](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/position_widget.ts#L997)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`MousePositionWidget`](neuroglancer_widget_position_widget.MousePositionWidget.md)

#### Returns

[`MousePositionWidget`](neuroglancer_widget_position_widget.MousePositionWidget.md)

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

[src/neuroglancer/widget/position_widget.ts:1021](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/position_widget.ts#L1021)

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

___

### updateView

▸ **updateView**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/position_widget.ts:1008](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/position_widget.ts#L1008)
