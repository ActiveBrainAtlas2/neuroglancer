[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/ui/tool](../modules/neuroglancer_ui_tool.md) / ToolBinder

# Class: ToolBinder

[neuroglancer/ui/tool](../modules/neuroglancer_ui_tool.md).ToolBinder

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

  ↳ **`ToolBinder`**

## Table of contents

### Constructors

- [constructor](neuroglancer_ui_tool.ToolBinder.md#constructor)

### Properties

- [activeTool\_](neuroglancer_ui_tool.ToolBinder.md#activetool_)
- [bindings](neuroglancer_ui_tool.ToolBinder.md#bindings)
- [changed](neuroglancer_ui_tool.ToolBinder.md#changed)
- [debounceDeactivate](neuroglancer_ui_tool.ToolBinder.md#debouncedeactivate)
- [debounceReactivate](neuroglancer_ui_tool.ToolBinder.md#debouncereactivate)
- [disposedStacks](neuroglancer_ui_tool.ToolBinder.md#disposedstacks)
- [inputEventMapBinder](neuroglancer_ui_tool.ToolBinder.md#inputeventmapbinder)
- [queuedTool](neuroglancer_ui_tool.ToolBinder.md#queuedtool)
- [refCount](neuroglancer_ui_tool.ToolBinder.md#refcount)
- [wasDisposed](neuroglancer_ui_tool.ToolBinder.md#wasdisposed)

### Methods

- [activate](neuroglancer_ui_tool.ToolBinder.md#activate)
- [addRef](neuroglancer_ui_tool.ToolBinder.md#addref)
- [deactivate\_](neuroglancer_ui_tool.ToolBinder.md#deactivate_)
- [destroyTool](neuroglancer_ui_tool.ToolBinder.md#destroytool)
- [dispose](neuroglancer_ui_tool.ToolBinder.md#dispose)
- [disposed](neuroglancer_ui_tool.ToolBinder.md#disposed)
- [get](neuroglancer_ui_tool.ToolBinder.md#get)
- [reactivateQueuedTool](neuroglancer_ui_tool.ToolBinder.md#reactivatequeuedtool)
- [refCountReachedZero](neuroglancer_ui_tool.ToolBinder.md#refcountreachedzero)
- [registerCancellable](neuroglancer_ui_tool.ToolBinder.md#registercancellable)
- [registerDisposer](neuroglancer_ui_tool.ToolBinder.md#registerdisposer)
- [registerEventListener](neuroglancer_ui_tool.ToolBinder.md#registereventlistener)
- [set](neuroglancer_ui_tool.ToolBinder.md#set)
- [unregisterDisposer](neuroglancer_ui_tool.ToolBinder.md#unregisterdisposer)

## Constructors

### constructor

• **new ToolBinder**(`inputEventMapBinder`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputEventMapBinder` | [`InputEventMapBinder`](../modules/neuroglancer_ui_tool.md#inputeventmapbinder) |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/ui/tool.ts:223](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/tool.ts#L223)

## Properties

### activeTool\_

• **activeTool\_**: `undefined` \| [`ToolActivation`](neuroglancer_ui_tool.ToolActivation.md)<[`Tool`](neuroglancer_ui_tool.Tool.md)<[`UserLayer`](neuroglancer_layer.UserLayer.md)\>\>

#### Defined in

[src/neuroglancer/ui/tool.ts:218](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/tool.ts#L218)

___

### bindings

• **bindings**: `Map`<`string`, [`Tool`](neuroglancer_ui_tool.Tool.md)<[`UserLayer`](neuroglancer_layer.UserLayer.md)\>\>

#### Defined in

[src/neuroglancer/ui/tool.ts:216](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/tool.ts#L216)

___

### changed

• **changed**: [`Signal`](neuroglancer_util_signal.Signal.md)<() => `void`\>

#### Defined in

[src/neuroglancer/ui/tool.ts:217](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/tool.ts#L217)

___

### debounceDeactivate

• `Private` **debounceDeactivate**: [`DebouncedFunc`](../interfaces/neuroglancer_chunk_manager_backend._internal_.DebouncedFunc.md)<() => `void`\>

#### Defined in

[src/neuroglancer/ui/tool.ts:220](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/tool.ts#L220)

___

### debounceReactivate

• `Private` **debounceReactivate**: [`DebouncedFunc`](../interfaces/neuroglancer_chunk_manager_backend._internal_.DebouncedFunc.md)<() => `void`\>

#### Defined in

[src/neuroglancer/ui/tool.ts:221](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/tool.ts#L221)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### inputEventMapBinder

• `Private` **inputEventMapBinder**: [`InputEventMapBinder`](../modules/neuroglancer_ui_tool.md#inputeventmapbinder)

#### Defined in

[src/neuroglancer/ui/tool.ts:223](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/tool.ts#L223)

___

### queuedTool

• `Private` **queuedTool**: `undefined` \| [`Tool`](neuroglancer_ui_tool.Tool.md)<[`UserLayer`](neuroglancer_layer.UserLayer.md)\>

#### Defined in

[src/neuroglancer/ui/tool.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/tool.ts#L219)

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

### activate

▸ **activate**(`key`): `undefined` \| [`Tool`](neuroglancer_ui_tool.Tool.md)<[`UserLayer`](neuroglancer_layer.UserLayer.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`undefined` \| [`Tool`](neuroglancer_ui_tool.Tool.md)<[`UserLayer`](neuroglancer_layer.UserLayer.md)\>

#### Defined in

[src/neuroglancer/ui/tool.ts:264](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/tool.ts#L264)

___

### addRef

▸ **addRef**(): [`ToolBinder`](neuroglancer_ui_tool.ToolBinder.md)

#### Returns

[`ToolBinder`](neuroglancer_ui_tool.ToolBinder.md)

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[addRef](neuroglancer_util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

___

### deactivate\_

▸ **deactivate_**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/tool.ts:328](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/tool.ts#L328)

___

### destroyTool

▸ **destroyTool**(`tool`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tool` | [`Tool`](neuroglancer_ui_tool.Tool.md)<[`UserLayer`](neuroglancer_layer.UserLayer.md)\> |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/tool.ts:313](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/tool.ts#L313)

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

[src/neuroglancer/ui/tool.ts:323](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/tool.ts#L323)

___

### get

▸ **get**(`key`): `undefined` \| [`Tool`](neuroglancer_ui_tool.Tool.md)<[`UserLayer`](neuroglancer_layer.UserLayer.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`undefined` \| [`Tool`](neuroglancer_ui_tool.Tool.md)<[`UserLayer`](neuroglancer_layer.UserLayer.md)\>

#### Defined in

[src/neuroglancer/ui/tool.ts:227](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/tool.ts#L227)

___

### reactivateQueuedTool

▸ `Private` **reactivateQueuedTool**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/tool.ts:304](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/tool.ts#L304)

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

### set

▸ **set**(`key`, `tool`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `tool` | `undefined` \| [`Tool`](neuroglancer_ui_tool.Tool.md)<[`UserLayer`](neuroglancer_layer.UserLayer.md)\> |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/tool.ts:231](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/tool.ts#L231)

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
