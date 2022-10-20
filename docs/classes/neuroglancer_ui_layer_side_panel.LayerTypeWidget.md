[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/ui/layer\_side\_panel](../modules/neuroglancer_ui_layer_side_panel.md) / LayerTypeWidget

# Class: LayerTypeWidget

[neuroglancer/ui/layer_side_panel](../modules/neuroglancer_ui_layer_side_panel.md).LayerTypeWidget

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

  ↳ **`LayerTypeWidget`**

## Table of contents

### Constructors

- [constructor](neuroglancer_ui_layer_side_panel.LayerTypeWidget.md#constructor)

### Properties

- [disposedStacks](neuroglancer_ui_layer_side_panel.LayerTypeWidget.md#disposedstacks)
- [element](neuroglancer_ui_layer_side_panel.LayerTypeWidget.md#element)
- [layer](neuroglancer_ui_layer_side_panel.LayerTypeWidget.md#layer)
- [measureElement](neuroglancer_ui_layer_side_panel.LayerTypeWidget.md#measureelement)
- [refCount](neuroglancer_ui_layer_side_panel.LayerTypeWidget.md#refcount)
- [wasDisposed](neuroglancer_ui_layer_side_panel.LayerTypeWidget.md#wasdisposed)

### Methods

- [addRef](neuroglancer_ui_layer_side_panel.LayerTypeWidget.md#addref)
- [dispose](neuroglancer_ui_layer_side_panel.LayerTypeWidget.md#dispose)
- [disposed](neuroglancer_ui_layer_side_panel.LayerTypeWidget.md#disposed)
- [refCountReachedZero](neuroglancer_ui_layer_side_panel.LayerTypeWidget.md#refcountreachedzero)
- [registerCancellable](neuroglancer_ui_layer_side_panel.LayerTypeWidget.md#registercancellable)
- [registerDisposer](neuroglancer_ui_layer_side_panel.LayerTypeWidget.md#registerdisposer)
- [registerEventListener](neuroglancer_ui_layer_side_panel.LayerTypeWidget.md#registereventlistener)
- [unregisterDisposer](neuroglancer_ui_layer_side_panel.LayerTypeWidget.md#unregisterdisposer)
- [updateView](neuroglancer_ui_layer_side_panel.LayerTypeWidget.md#updateview)

## Constructors

### constructor

• **new LayerTypeWidget**(`layer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`UserLayer`](neuroglancer_layer.UserLayer.md) |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/ui/layer_side_panel.ts:77](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/layer_side_panel.ts#L77)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: `HTMLSelectElement`

#### Defined in

[src/neuroglancer/ui/layer_side_panel.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/layer_side_panel.ts#L75)

___

### layer

• **layer**: [`UserLayer`](neuroglancer_layer.UserLayer.md)

#### Defined in

[src/neuroglancer/ui/layer_side_panel.ts:77](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/layer_side_panel.ts#L77)

___

### measureElement

• `Private` **measureElement**: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/ui/layer_side_panel.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/layer_side_panel.ts#L76)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`LayerTypeWidget`](neuroglancer_ui_layer_side_panel.LayerTypeWidget.md)

#### Returns

[`LayerTypeWidget`](neuroglancer_ui_layer_side_panel.LayerTypeWidget.md)

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

[src/neuroglancer/ui/layer_side_panel.ts:107](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/layer_side_panel.ts#L107)

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

▸ `Private` **updateView**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/layer_side_panel.ts:99](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/layer_side_panel.ts#L99)
