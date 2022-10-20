[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/widget/layer\_control](../modules/neuroglancer_widget_layer_control.md) / LayerControlTool

# Class: LayerControlTool<LayerType\>

[neuroglancer/widget/layer_control](../modules/neuroglancer_widget_layer_control.md).LayerControlTool

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

- [`Tool`](neuroglancer_ui_tool.Tool.md)<`LayerType`\>

  ↳ **`LayerControlTool`**

## Table of contents

### Constructors

- [constructor](neuroglancer_widget_layer_control.LayerControlTool.md#constructor)

### Properties

- [changed](neuroglancer_widget_layer_control.LayerControlTool.md#changed)
- [disposedStacks](neuroglancer_widget_layer_control.LayerControlTool.md#disposedstacks)
- [keyBinding](neuroglancer_widget_layer_control.LayerControlTool.md#keybinding)
- [layer](neuroglancer_widget_layer_control.LayerControlTool.md#layer)
- [options](neuroglancer_widget_layer_control.LayerControlTool.md#options)
- [refCount](neuroglancer_widget_layer_control.LayerControlTool.md#refcount)
- [toggle](neuroglancer_widget_layer_control.LayerControlTool.md#toggle)
- [wasDisposed](neuroglancer_widget_layer_control.LayerControlTool.md#wasdisposed)

### Accessors

- [description](neuroglancer_widget_layer_control.LayerControlTool.md#description)
- [mouseState](neuroglancer_widget_layer_control.LayerControlTool.md#mousestate)

### Methods

- [activate](neuroglancer_widget_layer_control.LayerControlTool.md#activate)
- [addRef](neuroglancer_widget_layer_control.LayerControlTool.md#addref)
- [dispose](neuroglancer_widget_layer_control.LayerControlTool.md#dispose)
- [disposed](neuroglancer_widget_layer_control.LayerControlTool.md#disposed)
- [refCountReachedZero](neuroglancer_widget_layer_control.LayerControlTool.md#refcountreachedzero)
- [registerCancellable](neuroglancer_widget_layer_control.LayerControlTool.md#registercancellable)
- [registerDisposer](neuroglancer_widget_layer_control.LayerControlTool.md#registerdisposer)
- [registerEventListener](neuroglancer_widget_layer_control.LayerControlTool.md#registereventlistener)
- [toJSON](neuroglancer_widget_layer_control.LayerControlTool.md#tojson)
- [unbind](neuroglancer_widget_layer_control.LayerControlTool.md#unbind)
- [unregisterDisposer](neuroglancer_widget_layer_control.LayerControlTool.md#unregisterdisposer)

## Constructors

### constructor

• **new LayerControlTool**<`LayerType`\>(`layer`, `options`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `LayerType` | extends [`UserLayer`](neuroglancer_layer.UserLayer.md)<`LayerType`\> = [`UserLayer`](neuroglancer_layer.UserLayer.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | `LayerType` |
| `options` | [`LayerControlDefinition`](../interfaces/neuroglancer_widget_layer_control.LayerControlDefinition.md)<`LayerType`, `unknown`\> |

#### Overrides

[Tool](neuroglancer_ui_tool.Tool.md).[constructor](neuroglancer_ui_tool.Tool.md#constructor)

#### Defined in

[src/neuroglancer/widget/layer_control.ts:79](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/layer_control.ts#L79)

## Properties

### changed

• **changed**: [`Signal`](neuroglancer_util_signal.Signal.md)<() => `void`\>

#### Inherited from

[Tool](neuroglancer_ui_tool.Tool.md).[changed](neuroglancer_ui_tool.Tool.md#changed)

#### Defined in

[src/neuroglancer/ui/tool.ts:56](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/tool.ts#L56)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[Tool](neuroglancer_ui_tool.Tool.md).[disposedStacks](neuroglancer_ui_tool.Tool.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### keyBinding

• **keyBinding**: `undefined` \| `string` = `undefined`

#### Inherited from

[Tool](neuroglancer_ui_tool.Tool.md).[keyBinding](neuroglancer_ui_tool.Tool.md#keybinding)

#### Defined in

[src/neuroglancer/ui/tool.ts:57](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/tool.ts#L57)

___

### layer

• **layer**: `LayerType`

#### Inherited from

[Tool](neuroglancer_ui_tool.Tool.md).[layer](neuroglancer_ui_tool.Tool.md#layer)

#### Defined in

[src/neuroglancer/ui/tool.ts:58](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/tool.ts#L58)

___

### options

• **options**: [`LayerControlDefinition`](../interfaces/neuroglancer_widget_layer_control.LayerControlDefinition.md)<`LayerType`, `unknown`\>

#### Defined in

[src/neuroglancer/widget/layer_control.ts:79](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/layer_control.ts#L79)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[Tool](neuroglancer_ui_tool.Tool.md).[refCount](neuroglancer_ui_tool.Tool.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### toggle

• **toggle**: `boolean` = `false`

#### Inherited from

[Tool](neuroglancer_ui_tool.Tool.md).[toggle](neuroglancer_ui_tool.Tool.md#toggle)

#### Defined in

[src/neuroglancer/ui/tool.ts:58](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/tool.ts#L58)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[Tool](neuroglancer_ui_tool.Tool.md).[wasDisposed](neuroglancer_ui_tool.Tool.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### description

• `get` **description**(): `string`

#### Returns

`string`

#### Overrides

Tool.description

#### Defined in

[src/neuroglancer/widget/layer_control.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/layer_control.ts#L95)

___

### mouseState

• `get` **mouseState**(): [`MouseSelectionState`](neuroglancer_layer.MouseSelectionState.md)

#### Returns

[`MouseSelectionState`](neuroglancer_layer.MouseSelectionState.md)

#### Inherited from

Tool.mouseState

#### Defined in

[src/neuroglancer/ui/tool.ts:61](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/tool.ts#L61)

## Methods

### activate

▸ **activate**(`activation`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `activation` | [`ToolActivation`](neuroglancer_ui_tool.ToolActivation.md)<[`LayerControlTool`](neuroglancer_widget_layer_control.LayerControlTool.md)<`LayerType`\>\> |

#### Returns

`void`

#### Overrides

[Tool](neuroglancer_ui_tool.Tool.md).[activate](neuroglancer_ui_tool.Tool.md#activate)

#### Defined in

[src/neuroglancer/widget/layer_control.ts:82](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/layer_control.ts#L82)

___

### addRef

▸ **addRef**(): [`LayerControlTool`](neuroglancer_widget_layer_control.LayerControlTool.md)<`LayerType`\>

#### Returns

[`LayerControlTool`](neuroglancer_widget_layer_control.LayerControlTool.md)<`LayerType`\>

#### Inherited from

[Tool](neuroglancer_ui_tool.Tool.md).[addRef](neuroglancer_ui_tool.Tool.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[Tool](neuroglancer_ui_tool.Tool.md).[dispose](neuroglancer_ui_tool.Tool.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[Tool](neuroglancer_ui_tool.Tool.md).[disposed](neuroglancer_ui_tool.Tool.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L75)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[Tool](neuroglancer_ui_tool.Tool.md).[refCountReachedZero](neuroglancer_ui_tool.Tool.md#refcountreachedzero)

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

[Tool](neuroglancer_ui_tool.Tool.md).[registerCancellable](neuroglancer_ui_tool.Tool.md#registercancellable)

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

[Tool](neuroglancer_ui_tool.Tool.md).[registerDisposer](neuroglancer_ui_tool.Tool.md#registerdisposer)

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

[Tool](neuroglancer_ui_tool.Tool.md).[registerEventListener](neuroglancer_ui_tool.Tool.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L95)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Overrides

[Tool](neuroglancer_ui_tool.Tool.md).[toJSON](neuroglancer_ui_tool.Tool.md#tojson)

#### Defined in

[src/neuroglancer/widget/layer_control.ts:99](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/layer_control.ts#L99)

___

### unbind

▸ **unbind**(): `void`

#### Returns

`void`

#### Inherited from

[Tool](neuroglancer_ui_tool.Tool.md).[unbind](neuroglancer_ui_tool.Tool.md#unbind)

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

[Tool](neuroglancer_ui_tool.Tool.md).[unregisterDisposer](neuroglancer_ui_tool.Tool.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L85)
