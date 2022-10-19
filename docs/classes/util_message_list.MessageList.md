[neuroglancer](../README.md) / [Modules](../modules.md) / [util/message\_list](../modules/util_message_list.md) / MessageList

# Class: MessageList

[util/message_list](../modules/util_message_list.md).MessageList

## Table of contents

### Constructors

- [constructor](util_message_list.MessageList.md#constructor)

### Properties

- [changed](util_message_list.MessageList.md#changed)
- [children](util_message_list.MessageList.md#children)
- [messages](util_message_list.MessageList.md#messages)

### Methods

- [[iterator]](util_message_list.MessageList.md#[iterator])
- [addChild](util_message_list.MessageList.md#addchild)
- [addMessage](util_message_list.MessageList.md#addmessage)
- [clearMessages](util_message_list.MessageList.md#clearmessages)
- [isEmpty](util_message_list.MessageList.md#isempty)

## Constructors

### constructor

• **new MessageList**()

## Properties

### changed

• **changed**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/util/message_list.ts:35](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/message_list.ts#L35)

___

### children

• `Private` **children**: [`MessageList`](util_message_list.MessageList.md)[] = `[]`

#### Defined in

[src/neuroglancer/util/message_list.ts:38](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/message_list.ts#L38)

___

### messages

• `Private` **messages**: [`Message`](util_message_list.Message.md)[] = `[]`

#### Defined in

[src/neuroglancer/util/message_list.ts:37](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/message_list.ts#L37)

## Methods

### [iterator]

▸ **[iterator]**(): [`Iterator`](../interfaces/annotation_annotation_layer_state._internal_.Iterator.md)<[`Message`](util_message_list.Message.md), `any`, `undefined`\>

#### Returns

[`Iterator`](../interfaces/annotation_annotation_layer_state._internal_.Iterator.md)<[`Message`](util_message_list.Message.md), `any`, `undefined`\>

#### Defined in

[src/neuroglancer/util/message_list.ts:72](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/message_list.ts#L72)

___

### addChild

▸ **addChild**(`list`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `list` | [`MessageList`](util_message_list.MessageList.md) |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/neuroglancer/util/message_list.ts:56](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/message_list.ts#L56)

___

### addMessage

▸ **addMessage**(`message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](util_message_list.Message.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/message_list.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/message_list.ts#L40)

___

### clearMessages

▸ **clearMessages**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/message_list.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/message_list.ts#L45)

___

### isEmpty

▸ **isEmpty**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/util/message_list.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/message_list.ts#L52)
