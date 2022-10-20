[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/ui/tool

# Module: neuroglancer/ui/tool

## Table of contents

### Classes

- [LayerToolBinder](../classes/neuroglancer_ui_tool.LayerToolBinder.md)
- [LegacyTool](../classes/neuroglancer_ui_tool.LegacyTool.md)
- [SelectedLegacyTool](../classes/neuroglancer_ui_tool.SelectedLegacyTool.md)
- [Tool](../classes/neuroglancer_ui_tool.Tool.md)
- [ToolActivation](../classes/neuroglancer_ui_tool.ToolActivation.md)
- [ToolBinder](../classes/neuroglancer_ui_tool.ToolBinder.md)
- [ToolBindingWidget](../classes/neuroglancer_ui_tool.ToolBindingWidget.md)

### Type Aliases

- [InputEventMapBinder](neuroglancer_ui_tool.md#inputeventmapbinder)
- [LegacyToolGetter](neuroglancer_ui_tool.md#legacytoolgetter)
- [ToolGetter](neuroglancer_ui_tool.md#toolgetter)

### Functions

- [addToolKeyBindHandlers](neuroglancer_ui_tool.md#addtoolkeybindhandlers)
- [makeToolActivationStatusMessage](neuroglancer_ui_tool.md#maketoolactivationstatusmessage)
- [makeToolActivationStatusMessageWithHeader](neuroglancer_ui_tool.md#maketoolactivationstatusmessagewithheader)
- [makeToolButton](neuroglancer_ui_tool.md#maketoolbutton)
- [registerLayerTool](neuroglancer_ui_tool.md#registerlayertool)
- [registerLegacyTool](neuroglancer_ui_tool.md#registerlegacytool)
- [registerTool](neuroglancer_ui_tool.md#registertool)
- [restoreLegacyTool](neuroglancer_ui_tool.md#restorelegacytool)
- [restoreTool](neuroglancer_ui_tool.md#restoretool)

## Type Aliases

### InputEventMapBinder

Ƭ **InputEventMapBinder**: (`eventActionMap`: [`EventActionMap`](../classes/neuroglancer_util_event_action_map.EventActionMap.md), `context`: [`RefCounted`](../classes/neuroglancer_util_disposable.RefCounted.md)) => `void`

#### Type declaration

▸ (`eventActionMap`, `context`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `eventActionMap` | [`EventActionMap`](../classes/neuroglancer_util_event_action_map.EventActionMap.md) |
| `context` | [`RefCounted`](../classes/neuroglancer_util_disposable.RefCounted.md) |

##### Returns

`void`

#### Defined in

[src/neuroglancer/ui/tool.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/tool.ts#L36)

___

### LegacyToolGetter

Ƭ **LegacyToolGetter**<`LayerType`\>: (`layer`: `LayerType`, `options`: `any`) => [`Owned`](neuroglancer_util_disposable.md#owned)<[`LegacyTool`](../classes/neuroglancer_ui_tool.LegacyTool.md)\> \| `undefined`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `LayerType` | extends [`UserLayer`](../classes/neuroglancer_layer.UserLayer.md) = [`UserLayer`](../classes/neuroglancer_layer.UserLayer.md) |

#### Type declaration

▸ (`layer`, `options`): [`Owned`](neuroglancer_util_disposable.md#owned)<[`LegacyTool`](../classes/neuroglancer_ui_tool.LegacyTool.md)\> \| `undefined`

##### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | `LayerType` |
| `options` | `any` |

##### Returns

[`Owned`](neuroglancer_util_disposable.md#owned)<[`LegacyTool`](../classes/neuroglancer_ui_tool.LegacyTool.md)\> \| `undefined`

#### Defined in

[src/neuroglancer/ui/tool.ts:138](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/tool.ts#L138)

___

### ToolGetter

Ƭ **ToolGetter**<`LayerType`\>: (`layer`: `LayerType`, `options`: `any`) => [`Owned`](neuroglancer_util_disposable.md#owned)<[`Tool`](../classes/neuroglancer_ui_tool.Tool.md)\> \| `undefined`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `LayerType` | extends [`UserLayer`](../classes/neuroglancer_layer.UserLayer.md) = [`UserLayer`](../classes/neuroglancer_layer.UserLayer.md) |

#### Type declaration

▸ (`layer`, `options`): [`Owned`](neuroglancer_util_disposable.md#owned)<[`Tool`](../classes/neuroglancer_ui_tool.Tool.md)\> \| `undefined`

##### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | `LayerType` |
| `options` | `any` |

##### Returns

[`Owned`](neuroglancer_util_disposable.md#owned)<[`Tool`](../classes/neuroglancer_ui_tool.Tool.md)\> \| `undefined`

#### Defined in

[src/neuroglancer/ui/tool.ts:135](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/tool.ts#L135)

## Functions

### addToolKeyBindHandlers

▸ **addToolKeyBindHandlers**(`context`, `element`, `bindKey`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`RefCounted`](../classes/neuroglancer_util_disposable.RefCounted.md) |
| `element` | [`HTMLElement`](main_module._internal_.md#htmlelement) |
| `bindKey` | (`key`: `string`) => `void` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/tool.ts:439](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/tool.ts#L439)

___

### makeToolActivationStatusMessage

▸ **makeToolActivationStatusMessage**(`activation`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `activation` | [`ToolActivation`](../classes/neuroglancer_ui_tool.ToolActivation.md)<[`Tool`](../classes/neuroglancer_ui_tool.Tool.md)<[`UserLayer`](../classes/neuroglancer_layer.UserLayer.md)\>\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `content` | [`HTMLDivElement`](main_module._internal_.md#htmldivelement) |
| `message` | [`StatusMessage`](../classes/neuroglancer_status.StatusMessage.md) |

#### Defined in

[src/neuroglancer/ui/tool.ts:491](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/tool.ts#L491)

___

### makeToolActivationStatusMessageWithHeader

▸ **makeToolActivationStatusMessageWithHeader**(`activation`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `activation` | [`ToolActivation`](../classes/neuroglancer_ui_tool.ToolActivation.md)<[`Tool`](../classes/neuroglancer_ui_tool.Tool.md)<[`UserLayer`](../classes/neuroglancer_layer.UserLayer.md)\>\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `body` | [`HTMLDivElement`](main_module._internal_.md#htmldivelement) |
| `header` | [`HTMLDivElement`](main_module._internal_.md#htmldivelement) |
| `message` | [`StatusMessage`](../classes/neuroglancer_status.StatusMessage.md) |

#### Defined in

[src/neuroglancer/ui/tool.ts:508](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/tool.ts#L508)

___

### makeToolButton

▸ **makeToolButton**(`context`, `layer`, `options`): [`HTMLDivElement`](main_module._internal_.md#htmldivelement)

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`RefCounted`](../classes/neuroglancer_util_disposable.RefCounted.md) |
| `layer` | [`UserLayer`](../classes/neuroglancer_layer.UserLayer.md) |
| `options` | `Object` |
| `options.label` | `string` |
| `options.title?` | `string` |
| `options.toolJson` | `any` |

#### Returns

[`HTMLDivElement`](main_module._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/ui/tool.ts:474](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/tool.ts#L474)

___

### registerLayerTool

▸ **registerLayerTool**<`LayerType`\>(`layerType`, `type`, `getter`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `LayerType` | extends [`UserLayer`](../classes/neuroglancer_layer.UserLayer.md)<`LayerType`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `layerType` | typeof [`UserLayer`](../classes/neuroglancer_layer.UserLayer.md) & [`AnyConstructor`](neuroglancer_util_mixin.md#anyconstructor)<[`UserLayer`](../classes/neuroglancer_layer.UserLayer.md)\> & [`AnyConstructor`](neuroglancer_util_mixin.md#anyconstructor)<`LayerType`\> |
| `type` | `string` |
| `getter` | [`ToolGetter`](neuroglancer_ui_tool.md#toolgetter)<`LayerType`\> |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/tool.ts:153](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/tool.ts#L153)

___

### registerLegacyTool

▸ **registerLegacyTool**(`type`, `getter`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `getter` | [`LegacyToolGetter`](neuroglancer_ui_tool.md#legacytoolgetter)<[`UserLayer`](../classes/neuroglancer_layer.UserLayer.md)\> |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/tool.ts:145](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/tool.ts#L145)

___

### registerTool

▸ **registerTool**(`type`, `getter`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `getter` | [`ToolGetter`](neuroglancer_ui_tool.md#toolgetter)<[`UserLayer`](../classes/neuroglancer_layer.UserLayer.md)\> |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/tool.ts:149](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/tool.ts#L149)

___

### restoreLegacyTool

▸ **restoreLegacyTool**(`layer`, `obj`): `undefined` \| [`LegacyTool`](../classes/neuroglancer_ui_tool.LegacyTool.md)<[`UserLayer`](../classes/neuroglancer_layer.UserLayer.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`UserLayer`](../classes/neuroglancer_layer.UserLayer.md) |
| `obj` | `any` |

#### Returns

`undefined` \| [`LegacyTool`](../classes/neuroglancer_ui_tool.LegacyTool.md)<[`UserLayer`](../classes/neuroglancer_layer.UserLayer.md)\>

#### Defined in

[src/neuroglancer/ui/tool.ts:119](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/tool.ts#L119)

___

### restoreTool

▸ **restoreTool**(`layer`, `obj`): `undefined` \| [`Tool`](../classes/neuroglancer_ui_tool.Tool.md)<[`UserLayer`](../classes/neuroglancer_layer.UserLayer.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`UserLayer`](../classes/neuroglancer_layer.UserLayer.md) |
| `obj` | `any` |

#### Returns

`undefined` \| [`Tool`](../classes/neuroglancer_ui_tool.Tool.md)<[`UserLayer`](../classes/neuroglancer_layer.UserLayer.md)\>

#### Defined in

[src/neuroglancer/ui/tool.ts:97](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/tool.ts#L97)
