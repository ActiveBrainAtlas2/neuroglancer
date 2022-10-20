[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/util/message\_list](../modules/neuroglancer_util_message_list.md) / MessageList

# Class: MessageList

[neuroglancer/util/message_list](../modules/neuroglancer_util_message_list.md).MessageList

## Table of contents

### Constructors

- [constructor](neuroglancer_util_message_list.MessageList.md#constructor)

### Properties

- [changed](neuroglancer_util_message_list.MessageList.md#changed)
- [children](neuroglancer_util_message_list.MessageList.md#children)
- [messages](neuroglancer_util_message_list.MessageList.md#messages)

### Methods

- [[iterator]](neuroglancer_util_message_list.MessageList.md#[iterator])
- [addChild](neuroglancer_util_message_list.MessageList.md#addchild)
- [addMessage](neuroglancer_util_message_list.MessageList.md#addmessage)
- [clearMessages](neuroglancer_util_message_list.MessageList.md#clearmessages)
- [isEmpty](neuroglancer_util_message_list.MessageList.md#isempty)

## Constructors

### constructor

• **new MessageList**()

## Properties

### changed

• **changed**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/util/message_list.ts:35](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/message_list.ts#L35)

___

### children

• `Private` **children**: [`MessageList`](neuroglancer_util_message_list.MessageList.md)[] = `[]`

#### Defined in

[src/neuroglancer/util/message_list.ts:38](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/message_list.ts#L38)

___

### messages

• `Private` **messages**: [`Message`](neuroglancer_util_message_list.Message.md)[] = `[]`

#### Defined in

[src/neuroglancer/util/message_list.ts:37](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/message_list.ts#L37)

## Methods

### [iterator]

▸ **[iterator]**(): [`Iterator`](../interfaces/main_module._internal_.Iterator.md)<[`Message`](neuroglancer_util_message_list.Message.md), `any`, `undefined`\>

#### Returns

[`Iterator`](../interfaces/main_module._internal_.Iterator.md)<[`Message`](neuroglancer_util_message_list.Message.md), `any`, `undefined`\>

#### Defined in

[src/neuroglancer/util/message_list.ts:72](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/message_list.ts#L72)

___

### addChild

▸ **addChild**(`list`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `list` | [`MessageList`](neuroglancer_util_message_list.MessageList.md) |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/neuroglancer/util/message_list.ts:56](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/message_list.ts#L56)

___

### addMessage

▸ **addMessage**(`message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](neuroglancer_util_message_list.Message.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/message_list.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/message_list.ts#L40)

___

### clearMessages

▸ **clearMessages**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/message_list.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/message_list.ts#L45)

___

### isEmpty

▸ **isEmpty**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/util/message_list.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/message_list.ts#L52)
