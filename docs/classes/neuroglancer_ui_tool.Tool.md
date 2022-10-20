[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/ui/tool](../modules/neuroglancer_ui_tool.md) / Tool

# Class: Tool<LayerType\>

[neuroglancer/ui/tool](../modules/neuroglancer_ui_tool.md).Tool

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
| `LayerType` | extends [`UserLayer`](neuroglancer_layer.UserLayer.md) = [`UserLayer`](neuroglancer_layer.UserLayer.md) |

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`Tool`**

  ↳↳ [`SelectSegmentsTool`](neuroglancer_ui_segment_select_tools.SelectSegmentsTool.md)

  ↳↳ [`MergeSegmentsTool`](neuroglancer_ui_segment_split_merge_tools.MergeSegmentsTool.md)

  ↳↳ [`SplitSegmentsTool`](neuroglancer_ui_segment_split_merge_tools.SplitSegmentsTool.md)

  ↳↳ [`LayerControlTool`](neuroglancer_widget_layer_control.LayerControlTool.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_ui_tool.Tool.md#constructor)

### Properties

- [changed](neuroglancer_ui_tool.Tool.md#changed)
- [description](neuroglancer_ui_tool.Tool.md#description)
- [disposedStacks](neuroglancer_ui_tool.Tool.md#disposedstacks)
- [keyBinding](neuroglancer_ui_tool.Tool.md#keybinding)
- [layer](neuroglancer_ui_tool.Tool.md#layer)
- [refCount](neuroglancer_ui_tool.Tool.md#refcount)
- [toggle](neuroglancer_ui_tool.Tool.md#toggle)
- [wasDisposed](neuroglancer_ui_tool.Tool.md#wasdisposed)

### Accessors

- [mouseState](neuroglancer_ui_tool.Tool.md#mousestate)

### Methods

- [activate](neuroglancer_ui_tool.Tool.md#activate)
- [addRef](neuroglancer_ui_tool.Tool.md#addref)
- [dispose](neuroglancer_ui_tool.Tool.md#dispose)
- [disposed](neuroglancer_ui_tool.Tool.md#disposed)
- [refCountReachedZero](neuroglancer_ui_tool.Tool.md#refcountreachedzero)
- [registerCancellable](neuroglancer_ui_tool.Tool.md#registercancellable)
- [registerDisposer](neuroglancer_ui_tool.Tool.md#registerdisposer)
- [registerEventListener](neuroglancer_ui_tool.Tool.md#registereventlistener)
- [toJSON](neuroglancer_ui_tool.Tool.md#tojson)
- [unbind](neuroglancer_ui_tool.Tool.md#unbind)
- [unregisterDisposer](neuroglancer_ui_tool.Tool.md#unregisterdisposer)

## Constructors

### constructor

• **new Tool**<`LayerType`\>(`layer`, `toggle?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `LayerType` | extends [`UserLayer`](neuroglancer_layer.UserLayer.md)<`LayerType`\> = [`UserLayer`](neuroglancer_layer.UserLayer.md) |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `layer` | `LayerType` | `undefined` |
| `toggle` | `boolean` | `false` |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/ui/tool.ts:58](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/tool.ts#L58)

## Properties

### changed

• **changed**: [`Signal`](neuroglancer_util_signal.Signal.md)<() => `void`\>

#### Defined in

[src/neuroglancer/ui/tool.ts:56](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/tool.ts#L56)

___

### description

• `Abstract` **description**: `string`

#### Defined in

[src/neuroglancer/ui/tool.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/tool.ts#L66)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### keyBinding

• **keyBinding**: `undefined` \| `string` = `undefined`

#### Defined in

[src/neuroglancer/ui/tool.ts:57](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/tool.ts#L57)

___

### layer

• **layer**: `LayerType`

#### Defined in

[src/neuroglancer/ui/tool.ts:58](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/tool.ts#L58)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### toggle

• **toggle**: `boolean` = `false`

#### Defined in

[src/neuroglancer/ui/tool.ts:58](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/tool.ts#L58)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### mouseState

• `get` **mouseState**(): [`MouseSelectionState`](neuroglancer_layer.MouseSelectionState.md)

#### Returns

[`MouseSelectionState`](neuroglancer_layer.MouseSelectionState.md)

#### Defined in

[src/neuroglancer/ui/tool.ts:61](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/tool.ts#L61)

## Methods

### activate

▸ `Abstract` **activate**(`activation`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `activation` | [`ToolActivation`](neuroglancer_ui_tool.ToolActivation.md)<[`Tool`](neuroglancer_ui_tool.Tool.md)<`LayerType`\>\> |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/tool.ts:64](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/tool.ts#L64)

___

### addRef

▸ **addRef**(): [`Tool`](neuroglancer_ui_tool.Tool.md)<`LayerType`\>

#### Returns

[`Tool`](neuroglancer_ui_tool.Tool.md)<`LayerType`\>

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

### toJSON

▸ `Abstract` **toJSON**(): `any`

#### Returns

`any`

#### Defined in

[src/neuroglancer/ui/tool.ts:65](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/tool.ts#L65)

___

### unbind

▸ **unbind**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/tool.ts:67](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/tool.ts#L67)

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
