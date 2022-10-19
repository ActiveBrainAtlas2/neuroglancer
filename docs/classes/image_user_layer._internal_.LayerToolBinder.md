[neuroglancer](../README.md) / [Modules](../modules.md) / [image\_user\_layer](../modules/image_user_layer.md) / [<internal\>](../modules/image_user_layer._internal_.md) / LayerToolBinder

# Class: LayerToolBinder

[image_user_layer](../modules/image_user_layer.md).[<internal>](../modules/image_user_layer._internal_.md).LayerToolBinder

## Table of contents

### Constructors

- [constructor](image_user_layer._internal_.LayerToolBinder.md#constructor)

### Properties

- [bindings](image_user_layer._internal_.LayerToolBinder.md#bindings)
- [changed](image_user_layer._internal_.LayerToolBinder.md#changed)
- [jsonToKey](image_user_layer._internal_.LayerToolBinder.md#jsontokey)
- [layer](image_user_layer._internal_.LayerToolBinder.md#layer)

### Accessors

- [globalBinder](image_user_layer._internal_.LayerToolBinder.md#globalbinder)

### Methods

- [clear](image_user_layer._internal_.LayerToolBinder.md#clear)
- [get](image_user_layer._internal_.LayerToolBinder.md#get)
- [removeJsonString](image_user_layer._internal_.LayerToolBinder.md#removejsonstring)
- [reset](image_user_layer._internal_.LayerToolBinder.md#reset)
- [restoreState](image_user_layer._internal_.LayerToolBinder.md#restorestate)
- [set](image_user_layer._internal_.LayerToolBinder.md#set)
- [setJson](image_user_layer._internal_.LayerToolBinder.md#setjson)
- [toJSON](image_user_layer._internal_.LayerToolBinder.md#tojson)

## Constructors

### constructor

• **new LayerToolBinder**(`layer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`UserLayer`](layer.UserLayer.md) |

#### Defined in

[src/neuroglancer/ui/tool.ts:348](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/tool.ts#L348)

## Properties

### bindings

• **bindings**: `Map`<`string`, [`Tool`](image_user_layer._internal_.Tool.md)<[`UserLayer`](layer.UserLayer.md)\>\>

#### Defined in

[src/neuroglancer/ui/tool.ts:340](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/tool.ts#L340)

___

### changed

• **changed**: [`Signal`](coordinate_transform._internal_.Signal.md)<() => `void`\>

#### Defined in

[src/neuroglancer/ui/tool.ts:343](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/tool.ts#L343)

___

### jsonToKey

• **jsonToKey**: `Map`<`string`, `string`\>

#### Defined in

[src/neuroglancer/ui/tool.ts:342](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/tool.ts#L342)

___

### layer

• **layer**: [`UserLayer`](layer.UserLayer.md)

## Accessors

### globalBinder

• `Private` `get` **globalBinder**(): [`ToolBinder`](image_user_layer._internal_.ToolBinder.md)

#### Returns

[`ToolBinder`](image_user_layer._internal_.ToolBinder.md)

#### Defined in

[src/neuroglancer/ui/tool.ts:345](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/tool.ts#L345)

## Methods

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/tool.ts:382](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/tool.ts#L382)

___

### get

▸ **get**(`key`): `undefined` \| [`Tool`](image_user_layer._internal_.Tool.md)<[`UserLayer`](layer.UserLayer.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`undefined` \| [`Tool`](image_user_layer._internal_.Tool.md)<[`UserLayer`](layer.UserLayer.md)\>

#### Defined in

[src/neuroglancer/ui/tool.ts:352](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/tool.ts#L352)

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

[src/neuroglancer/ui/tool.ts:366](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/tool.ts#L366)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/tool.ts:397](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/tool.ts#L397)

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

[src/neuroglancer/ui/tool.ts:401](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/tool.ts#L401)

___

### set

▸ **set**(`key`, `tool`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `tool` | `undefined` \| [`Tool`](image_user_layer._internal_.Tool.md)<[`UserLayer`](layer.UserLayer.md)\> |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/tool.ts:356](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/tool.ts#L356)

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

[src/neuroglancer/ui/tool.ts:360](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/tool.ts#L360)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Defined in

[src/neuroglancer/ui/tool.ts:372](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/tool.ts#L372)
