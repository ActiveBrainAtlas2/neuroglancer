[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/ui/tool](../modules/neuroglancer_ui_tool.md) / LayerToolBinder

# Class: LayerToolBinder

[neuroglancer/ui/tool](../modules/neuroglancer_ui_tool.md).LayerToolBinder

## Table of contents

### Constructors

- [constructor](neuroglancer_ui_tool.LayerToolBinder.md#constructor)

### Properties

- [bindings](neuroglancer_ui_tool.LayerToolBinder.md#bindings)
- [changed](neuroglancer_ui_tool.LayerToolBinder.md#changed)
- [jsonToKey](neuroglancer_ui_tool.LayerToolBinder.md#jsontokey)
- [layer](neuroglancer_ui_tool.LayerToolBinder.md#layer)

### Accessors

- [globalBinder](neuroglancer_ui_tool.LayerToolBinder.md#globalbinder)

### Methods

- [clear](neuroglancer_ui_tool.LayerToolBinder.md#clear)
- [get](neuroglancer_ui_tool.LayerToolBinder.md#get)
- [removeJsonString](neuroglancer_ui_tool.LayerToolBinder.md#removejsonstring)
- [reset](neuroglancer_ui_tool.LayerToolBinder.md#reset)
- [restoreState](neuroglancer_ui_tool.LayerToolBinder.md#restorestate)
- [set](neuroglancer_ui_tool.LayerToolBinder.md#set)
- [setJson](neuroglancer_ui_tool.LayerToolBinder.md#setjson)
- [toJSON](neuroglancer_ui_tool.LayerToolBinder.md#tojson)

## Constructors

### constructor

• **new LayerToolBinder**(`layer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`UserLayer`](neuroglancer_layer.UserLayer.md) |

#### Defined in

[src/neuroglancer/ui/tool.ts:348](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/tool.ts#L348)

## Properties

### bindings

• **bindings**: `Map`<`string`, [`Tool`](neuroglancer_ui_tool.Tool.md)<[`UserLayer`](neuroglancer_layer.UserLayer.md)\>\>

#### Defined in

[src/neuroglancer/ui/tool.ts:340](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/tool.ts#L340)

___

### changed

• **changed**: [`Signal`](neuroglancer_util_signal.Signal.md)<() => `void`\>

#### Defined in

[src/neuroglancer/ui/tool.ts:343](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/tool.ts#L343)

___

### jsonToKey

• **jsonToKey**: `Map`<`string`, `string`\>

#### Defined in

[src/neuroglancer/ui/tool.ts:342](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/tool.ts#L342)

___

### layer

• **layer**: [`UserLayer`](neuroglancer_layer.UserLayer.md)

## Accessors

### globalBinder

• `Private` `get` **globalBinder**(): [`ToolBinder`](neuroglancer_ui_tool.ToolBinder.md)

#### Returns

[`ToolBinder`](neuroglancer_ui_tool.ToolBinder.md)

#### Defined in

[src/neuroglancer/ui/tool.ts:345](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/tool.ts#L345)

## Methods

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/tool.ts:382](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/tool.ts#L382)

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

[src/neuroglancer/ui/tool.ts:352](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/tool.ts#L352)

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

[src/neuroglancer/ui/tool.ts:366](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/tool.ts#L366)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/tool.ts:397](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/tool.ts#L397)

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

[src/neuroglancer/ui/tool.ts:401](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/tool.ts#L401)

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

[src/neuroglancer/ui/tool.ts:356](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/tool.ts#L356)

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

[src/neuroglancer/ui/tool.ts:360](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/tool.ts#L360)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Defined in

[src/neuroglancer/ui/tool.ts:372](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/tool.ts#L372)
