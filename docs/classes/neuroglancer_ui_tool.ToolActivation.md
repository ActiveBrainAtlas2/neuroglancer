[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/ui/tool](../modules/neuroglancer_ui_tool.md) / ToolActivation

# Class: ToolActivation<ToolType\>

[neuroglancer/ui/tool](../modules/neuroglancer_ui_tool.md).ToolActivation

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

| Name | Type |
| :------ | :------ |
| `ToolType` | extends [`Tool`](neuroglancer_ui_tool.Tool.md) = [`Tool`](neuroglancer_ui_tool.Tool.md) |

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`ToolActivation`**

## Table of contents

### Constructors

- [constructor](neuroglancer_ui_tool.ToolActivation.md#constructor)

### Properties

- [disposedStacks](neuroglancer_ui_tool.ToolActivation.md#disposedstacks)
- [inputEventMapBinder](neuroglancer_ui_tool.ToolActivation.md#inputeventmapbinder)
- [refCount](neuroglancer_ui_tool.ToolActivation.md#refcount)
- [tool](neuroglancer_ui_tool.ToolActivation.md#tool)
- [wasDisposed](neuroglancer_ui_tool.ToolActivation.md#wasdisposed)

### Methods

- [addRef](neuroglancer_ui_tool.ToolActivation.md#addref)
- [bindAction](neuroglancer_ui_tool.ToolActivation.md#bindaction)
- [bindInputEventMap](neuroglancer_ui_tool.ToolActivation.md#bindinputeventmap)
- [cancel](neuroglancer_ui_tool.ToolActivation.md#cancel)
- [dispose](neuroglancer_ui_tool.ToolActivation.md#dispose)
- [disposed](neuroglancer_ui_tool.ToolActivation.md#disposed)
- [refCountReachedZero](neuroglancer_ui_tool.ToolActivation.md#refcountreachedzero)
- [registerCancellable](neuroglancer_ui_tool.ToolActivation.md#registercancellable)
- [registerDisposer](neuroglancer_ui_tool.ToolActivation.md#registerdisposer)
- [registerEventListener](neuroglancer_ui_tool.ToolActivation.md#registereventlistener)
- [unregisterDisposer](neuroglancer_ui_tool.ToolActivation.md#unregisterdisposer)

## Constructors

### constructor

• **new ToolActivation**<`ToolType`\>(`tool`, `inputEventMapBinder`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ToolType` | extends [`Tool`](neuroglancer_ui_tool.Tool.md)<[`UserLayer`](neuroglancer_layer.UserLayer.md), `ToolType`\> = [`Tool`](neuroglancer_ui_tool.Tool.md)<[`UserLayer`](neuroglancer_layer.UserLayer.md)\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `tool` | `ToolType` |
| `inputEventMapBinder` | [`InputEventMapBinder`](../modules/neuroglancer_ui_tool.md#inputeventmapbinder) |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/ui/tool.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/tool.ts#L39)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### inputEventMapBinder

• **inputEventMapBinder**: [`InputEventMapBinder`](../modules/neuroglancer_ui_tool.md#inputeventmapbinder)

#### Defined in

[src/neuroglancer/ui/tool.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/tool.ts#L39)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### tool

• **tool**: `ToolType`

#### Defined in

[src/neuroglancer/ui/tool.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/tool.ts#L39)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`ToolActivation`](neuroglancer_ui_tool.ToolActivation.md)<`ToolType`\>

#### Returns

[`ToolActivation`](neuroglancer_ui_tool.ToolActivation.md)<`ToolType`\>

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[addRef](neuroglancer_util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

___

### bindAction

▸ **bindAction**<`Info`\>(`action`, `listener`): `void`

#### Type parameters

| Name |
| :------ |
| `Info` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | `string` |
| `listener` | (`event`: [`ActionEvent`](../interfaces/neuroglancer_util_event_action_map.ActionEvent.md)<`Info`\>) => `void` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/tool.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/tool.ts#L42)

___

### bindInputEventMap

▸ **bindInputEventMap**(`inputEventMap`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputEventMap` | [`EventActionMap`](neuroglancer_util_event_action_map.EventActionMap.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/tool.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/tool.ts#L45)

___

### cancel

▸ **cancel**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/tool.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/tool.ts#L48)

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
