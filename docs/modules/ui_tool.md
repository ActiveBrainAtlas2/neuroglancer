[neuroglancer](../README.md) / [Modules](../modules.md) / ui/tool

# Module: ui/tool

**`license`**
Copyright 2018 Google Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

## Table of contents

### Classes

- [LayerToolBinder](../classes/ui_tool.LayerToolBinder.md)
- [LegacyTool](../classes/ui_tool.LegacyTool.md)
- [SelectedLegacyTool](../classes/ui_tool.SelectedLegacyTool.md)
- [Tool](../classes/ui_tool.Tool.md)
- [ToolActivation](../classes/ui_tool.ToolActivation.md)
- [ToolBinder](../classes/ui_tool.ToolBinder.md)
- [ToolBindingWidget](../classes/ui_tool.ToolBindingWidget.md)

### Type Aliases

- [InputEventMapBinder](ui_tool.md#inputeventmapbinder)
- [LegacyToolGetter](ui_tool.md#legacytoolgetter)
- [ToolGetter](ui_tool.md#toolgetter)

### Functions

- [addToolKeyBindHandlers](ui_tool.md#addtoolkeybindhandlers)
- [makeToolActivationStatusMessage](ui_tool.md#maketoolactivationstatusmessage)
- [makeToolActivationStatusMessageWithHeader](ui_tool.md#maketoolactivationstatusmessagewithheader)
- [makeToolButton](ui_tool.md#maketoolbutton)
- [registerLayerTool](ui_tool.md#registerlayertool)
- [registerLegacyTool](ui_tool.md#registerlegacytool)
- [registerTool](ui_tool.md#registertool)
- [restoreLegacyTool](ui_tool.md#restorelegacytool)
- [restoreTool](ui_tool.md#restoretool)

## Type Aliases

### InputEventMapBinder

Ƭ **InputEventMapBinder**: (`eventActionMap`: [`EventActionMap`](../classes/util_event_action_map.EventActionMap.md), `context`: [`RefCounted`](../classes/util_disposable.RefCounted.md)) => `void`

#### Type declaration

▸ (`eventActionMap`, `context`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `eventActionMap` | [`EventActionMap`](../classes/util_event_action_map.EventActionMap.md) |
| `context` | [`RefCounted`](../classes/util_disposable.RefCounted.md) |

##### Returns

`void`

#### Defined in

[src/neuroglancer/ui/tool.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L36)

___

### LegacyToolGetter

Ƭ **LegacyToolGetter**<`LayerType`\>: (`layer`: `LayerType`, `options`: `any`) => [`Owned`](util_disposable.md#owned)<[`LegacyTool`](../classes/ui_tool.LegacyTool.md)\> \| `undefined`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `LayerType` | extends [`UserLayer`](../classes/annotation_annotation_layer_state._internal_.UserLayer.md) = [`UserLayer`](../classes/annotation_annotation_layer_state._internal_.UserLayer.md) |

#### Type declaration

▸ (`layer`, `options`): [`Owned`](util_disposable.md#owned)<[`LegacyTool`](../classes/ui_tool.LegacyTool.md)\> \| `undefined`

##### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | `LayerType` |
| `options` | `any` |

##### Returns

[`Owned`](util_disposable.md#owned)<[`LegacyTool`](../classes/ui_tool.LegacyTool.md)\> \| `undefined`

#### Defined in

[src/neuroglancer/ui/tool.ts:138](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L138)

___

### ToolGetter

Ƭ **ToolGetter**<`LayerType`\>: (`layer`: `LayerType`, `options`: `any`) => [`Owned`](util_disposable.md#owned)<[`Tool`](../classes/ui_tool.Tool.md)\> \| `undefined`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `LayerType` | extends [`UserLayer`](../classes/annotation_annotation_layer_state._internal_.UserLayer.md) = [`UserLayer`](../classes/annotation_annotation_layer_state._internal_.UserLayer.md) |

#### Type declaration

▸ (`layer`, `options`): [`Owned`](util_disposable.md#owned)<[`Tool`](../classes/ui_tool.Tool.md)\> \| `undefined`

##### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | `LayerType` |
| `options` | `any` |

##### Returns

[`Owned`](util_disposable.md#owned)<[`Tool`](../classes/ui_tool.Tool.md)\> \| `undefined`

#### Defined in

[src/neuroglancer/ui/tool.ts:135](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L135)

## Functions

### addToolKeyBindHandlers

▸ **addToolKeyBindHandlers**(`context`, `element`, `bindKey`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`RefCounted`](../classes/util_disposable.RefCounted.md) |
| `element` | [`HTMLElement`](annotation_annotation_layer_state._internal_.md#htmlelement) |
| `bindKey` | (`key`: `string`) => `void` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/tool.ts:439](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L439)

___

### makeToolActivationStatusMessage

▸ **makeToolActivationStatusMessage**(`activation`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `activation` | [`ToolActivation`](../classes/ui_tool.ToolActivation.md)<[`Tool`](../classes/ui_tool.Tool.md)<[`UserLayer`](../classes/annotation_annotation_layer_state._internal_.UserLayer.md)\>\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `content` | [`HTMLDivElement`](annotation_annotation_layer_state._internal_.md#htmldivelement) |
| `message` | [`StatusMessage`](../classes/annotation_frontend_source._internal_.StatusMessage.md) |

#### Defined in

[src/neuroglancer/ui/tool.ts:491](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L491)

___

### makeToolActivationStatusMessageWithHeader

▸ **makeToolActivationStatusMessageWithHeader**(`activation`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `activation` | [`ToolActivation`](../classes/ui_tool.ToolActivation.md)<[`Tool`](../classes/ui_tool.Tool.md)<[`UserLayer`](../classes/annotation_annotation_layer_state._internal_.UserLayer.md)\>\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `body` | [`HTMLDivElement`](annotation_annotation_layer_state._internal_.md#htmldivelement) |
| `header` | [`HTMLDivElement`](annotation_annotation_layer_state._internal_.md#htmldivelement) |
| `message` | [`StatusMessage`](../classes/annotation_frontend_source._internal_.StatusMessage.md) |

#### Defined in

[src/neuroglancer/ui/tool.ts:508](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L508)

___

### makeToolButton

▸ **makeToolButton**(`context`, `layer`, `options`): [`HTMLDivElement`](annotation_annotation_layer_state._internal_.md#htmldivelement)

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`RefCounted`](../classes/util_disposable.RefCounted.md) |
| `layer` | [`UserLayer`](../classes/annotation_annotation_layer_state._internal_.UserLayer.md) |
| `options` | `Object` |
| `options.label` | `string` |
| `options.title?` | `string` |
| `options.toolJson` | `any` |

#### Returns

[`HTMLDivElement`](annotation_annotation_layer_state._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/ui/tool.ts:474](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L474)

___

### registerLayerTool

▸ **registerLayerTool**<`LayerType`\>(`layerType`, `type`, `getter`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `LayerType` | extends [`UserLayer`](../classes/annotation_annotation_layer_state._internal_.UserLayer.md)<`LayerType`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `layerType` | typeof [`UserLayer`](../classes/annotation_annotation_layer_state._internal_.UserLayer.md) & [`AnyConstructor`](util_mixin.md#anyconstructor)<[`UserLayer`](../classes/annotation_annotation_layer_state._internal_.UserLayer.md)\> & [`AnyConstructor`](util_mixin.md#anyconstructor)<`LayerType`\> |
| `type` | `string` |
| `getter` | [`ToolGetter`](ui_tool.md#toolgetter)<`LayerType`\> |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/tool.ts:153](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L153)

___

### registerLegacyTool

▸ **registerLegacyTool**(`type`, `getter`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `getter` | [`LegacyToolGetter`](ui_tool.md#legacytoolgetter)<[`UserLayer`](../classes/annotation_annotation_layer_state._internal_.UserLayer.md)\> |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/tool.ts:145](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L145)

___

### registerTool

▸ **registerTool**(`type`, `getter`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `getter` | [`ToolGetter`](ui_tool.md#toolgetter)<[`UserLayer`](../classes/annotation_annotation_layer_state._internal_.UserLayer.md)\> |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/tool.ts:149](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L149)

___

### restoreLegacyTool

▸ **restoreLegacyTool**(`layer`, `obj`): `undefined` \| [`LegacyTool`](../classes/ui_tool.LegacyTool.md)<[`UserLayer`](../classes/annotation_annotation_layer_state._internal_.UserLayer.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`UserLayer`](../classes/annotation_annotation_layer_state._internal_.UserLayer.md) |
| `obj` | `any` |

#### Returns

`undefined` \| [`LegacyTool`](../classes/ui_tool.LegacyTool.md)<[`UserLayer`](../classes/annotation_annotation_layer_state._internal_.UserLayer.md)\>

#### Defined in

[src/neuroglancer/ui/tool.ts:119](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L119)

___

### restoreTool

▸ **restoreTool**(`layer`, `obj`): `undefined` \| [`Tool`](../classes/ui_tool.Tool.md)<[`UserLayer`](../classes/annotation_annotation_layer_state._internal_.UserLayer.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`UserLayer`](../classes/annotation_annotation_layer_state._internal_.UserLayer.md) |
| `obj` | `any` |

#### Returns

`undefined` \| [`Tool`](../classes/ui_tool.Tool.md)<[`UserLayer`](../classes/annotation_annotation_layer_state._internal_.UserLayer.md)\>

#### Defined in

[src/neuroglancer/ui/tool.ts:97](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L97)
