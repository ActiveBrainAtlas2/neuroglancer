[neuroglancer](../README.md) / [Modules](../modules.md) / [ui/tool](../modules/ui_tool.md) / LayerToolBinder

# Class: LayerToolBinder

[ui/tool](../modules/ui_tool.md).LayerToolBinder

## Table of contents

### Constructors

- [constructor](ui_tool.LayerToolBinder.md#constructor)

### Properties

- [bindings](ui_tool.LayerToolBinder.md#bindings)
- [changed](ui_tool.LayerToolBinder.md#changed)
- [jsonToKey](ui_tool.LayerToolBinder.md#jsontokey)
- [layer](ui_tool.LayerToolBinder.md#layer)

### Accessors

- [globalBinder](ui_tool.LayerToolBinder.md#globalbinder)

### Methods

- [clear](ui_tool.LayerToolBinder.md#clear)
- [get](ui_tool.LayerToolBinder.md#get)
- [removeJsonString](ui_tool.LayerToolBinder.md#removejsonstring)
- [reset](ui_tool.LayerToolBinder.md#reset)
- [restoreState](ui_tool.LayerToolBinder.md#restorestate)
- [set](ui_tool.LayerToolBinder.md#set)
- [setJson](ui_tool.LayerToolBinder.md#setjson)
- [toJSON](ui_tool.LayerToolBinder.md#tojson)

## Constructors

### constructor

• **new LayerToolBinder**(`layer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md) |

#### Defined in

[src/neuroglancer/ui/tool.ts:348](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L348)

## Properties

### bindings

• **bindings**: `Map`<`string`, [`Tool`](ui_tool.Tool.md)<[`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)\>\>

#### Defined in

[src/neuroglancer/ui/tool.ts:340](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L340)

___

### changed

• **changed**: [`Signal`](util_signal.Signal.md)<() => `void`\>

#### Defined in

[src/neuroglancer/ui/tool.ts:343](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L343)

___

### jsonToKey

• **jsonToKey**: `Map`<`string`, `string`\>

#### Defined in

[src/neuroglancer/ui/tool.ts:342](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L342)

___

### layer

• **layer**: [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)

## Accessors

### globalBinder

• `Private` `get` **globalBinder**(): [`ToolBinder`](ui_tool.ToolBinder.md)

#### Returns

[`ToolBinder`](ui_tool.ToolBinder.md)

#### Defined in

[src/neuroglancer/ui/tool.ts:345](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L345)

## Methods

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/tool.ts:382](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L382)

___

### get

▸ **get**(`key`): `undefined` \| [`Tool`](ui_tool.Tool.md)<[`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`undefined` \| [`Tool`](ui_tool.Tool.md)<[`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)\>

#### Defined in

[src/neuroglancer/ui/tool.ts:352](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L352)

___

### removeJsonString

▸ **removeJsonString**(`toolJsonString`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `toolJsonString` | `string` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/tool.ts:366](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L366)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/tool.ts:397](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L397)

___

### restoreState

▸ **restoreState**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/tool.ts:401](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L401)

___

### set

▸ **set**(`key`, `tool`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `tool` | `undefined` \| [`Tool`](ui_tool.Tool.md)<[`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)\> |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/tool.ts:356](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L356)

___

### setJson

▸ **setJson**(`key`, `toolJson`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `toolJson` | `any` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/tool.ts:360](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L360)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Defined in

[src/neuroglancer/ui/tool.ts:372](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L372)
