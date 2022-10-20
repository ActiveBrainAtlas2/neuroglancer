[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/layer\_groups\_layout](../modules/neuroglancer_layer_groups_layout.md) / [<internal\>](../modules/neuroglancer_layer_groups_layout._internal_.md) / LayoutComponent

# Interface: LayoutComponent

[neuroglancer/layer_groups_layout](../modules/neuroglancer_layer_groups_layout.md).[<internal>](../modules/neuroglancer_layer_groups_layout._internal_.md).LayoutComponent

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

- [`RefCounted`](../classes/neuroglancer_util_disposable.RefCounted.md)

  ↳ **`LayoutComponent`**

## Implemented by

- [`SingletonLayerGroupViewer`](../classes/neuroglancer_layer_groups_layout.SingletonLayerGroupViewer.md)
- [`StackLayoutComponent`](../classes/neuroglancer_layer_groups_layout.StackLayoutComponent.md)

## Table of contents

### Properties

- [changed](neuroglancer_layer_groups_layout._internal_.LayoutComponent.md#changed)
- [disposedStacks](neuroglancer_layer_groups_layout._internal_.LayoutComponent.md#disposedstacks)
- [element](neuroglancer_layer_groups_layout._internal_.LayoutComponent.md#element)
- [refCount](neuroglancer_layer_groups_layout._internal_.LayoutComponent.md#refcount)
- [wasDisposed](neuroglancer_layer_groups_layout._internal_.LayoutComponent.md#wasdisposed)

### Methods

- [addRef](neuroglancer_layer_groups_layout._internal_.LayoutComponent.md#addref)
- [dispose](neuroglancer_layer_groups_layout._internal_.LayoutComponent.md#dispose)
- [disposed](neuroglancer_layer_groups_layout._internal_.LayoutComponent.md#disposed)
- [refCountReachedZero](neuroglancer_layer_groups_layout._internal_.LayoutComponent.md#refcountreachedzero)
- [registerCancellable](neuroglancer_layer_groups_layout._internal_.LayoutComponent.md#registercancellable)
- [registerDisposer](neuroglancer_layer_groups_layout._internal_.LayoutComponent.md#registerdisposer)
- [registerEventListener](neuroglancer_layer_groups_layout._internal_.LayoutComponent.md#registereventlistener)
- [toJSON](neuroglancer_layer_groups_layout._internal_.LayoutComponent.md#tojson)
- [unregisterDisposer](neuroglancer_layer_groups_layout._internal_.LayoutComponent.md#unregisterdisposer)

## Properties

### changed

• **changed**: [`NullarySignal`](../classes/neuroglancer_util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:38](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_groups_layout.ts#L38)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](../classes/neuroglancer_util_disposable.RefCounted.md).[disposedStacks](../classes/neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:37](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_groups_layout.ts#L37)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](../classes/neuroglancer_util_disposable.RefCounted.md).[refCount](../classes/neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](../classes/neuroglancer_util_disposable.RefCounted.md).[wasDisposed](../classes/neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`LayoutComponent`](neuroglancer_layer_groups_layout._internal_.LayoutComponent.md)

#### Returns

[`LayoutComponent`](neuroglancer_layer_groups_layout._internal_.LayoutComponent.md)

#### Inherited from

[RefCounted](../classes/neuroglancer_util_disposable.RefCounted.md).[addRef](../classes/neuroglancer_util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

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

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_groups_layout.ts#L39)

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
