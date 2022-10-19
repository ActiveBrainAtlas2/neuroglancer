[neuroglancer](../README.md) / [Modules](../modules.md) / [data\_panel\_layout](../modules/data_panel_layout.md) / [<internal\>](../modules/data_panel_layout._internal_.md) / MessageList

# Class: MessageList

[data_panel_layout](../modules/data_panel_layout.md).[<internal>](../modules/data_panel_layout._internal_.md).MessageList

## Table of contents

### Constructors

- [constructor](data_panel_layout._internal_.MessageList.md#constructor)

### Properties

- [changed](data_panel_layout._internal_.MessageList.md#changed)
- [children](data_panel_layout._internal_.MessageList.md#children)
- [messages](data_panel_layout._internal_.MessageList.md#messages)

### Methods

- [[iterator]](data_panel_layout._internal_.MessageList.md#[iterator])
- [addChild](data_panel_layout._internal_.MessageList.md#addchild)
- [addMessage](data_panel_layout._internal_.MessageList.md#addmessage)
- [clearMessages](data_panel_layout._internal_.MessageList.md#clearmessages)
- [isEmpty](data_panel_layout._internal_.MessageList.md#isempty)

## Constructors

### constructor

• **new MessageList**()

## Properties

### changed

• **changed**: [`NullarySignal`](coordinate_transform._internal_.NullarySignal.md)

#### Defined in

[src/neuroglancer/util/message_list.ts:35](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/message_list.ts#L35)

___

### children

• `Private` **children**: [`MessageList`](data_panel_layout._internal_.MessageList.md)[] = `[]`

#### Defined in

[src/neuroglancer/util/message_list.ts:38](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/message_list.ts#L38)

___

### messages

• `Private` **messages**: [`Message`](data_panel_layout._internal_.Message.md)[] = `[]`

#### Defined in

[src/neuroglancer/util/message_list.ts:37](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/message_list.ts#L37)

## Methods

### [iterator]

▸ **[iterator]**(): [`Iterator`](../interfaces/axes_lines._internal_.Iterator.md)<[`Message`](data_panel_layout._internal_.Message.md), `any`, `undefined`\>

#### Returns

[`Iterator`](../interfaces/axes_lines._internal_.Iterator.md)<[`Message`](data_panel_layout._internal_.Message.md), `any`, `undefined`\>

#### Defined in

[src/neuroglancer/util/message_list.ts:72](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/message_list.ts#L72)

___

### addChild

▸ **addChild**(`list`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `list` | [`MessageList`](data_panel_layout._internal_.MessageList.md) |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/neuroglancer/util/message_list.ts:56](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/message_list.ts#L56)

___

### addMessage

▸ **addMessage**(`message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](data_panel_layout._internal_.Message.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/message_list.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/message_list.ts#L40)

___

### clearMessages

▸ **clearMessages**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/message_list.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/message_list.ts#L45)

___

### isEmpty

▸ **isEmpty**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/util/message_list.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/message_list.ts#L52)
