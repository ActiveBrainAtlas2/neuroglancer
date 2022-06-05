[neuroglancer](../README.md) / [Modules](../modules.md) / [status](../modules/status.md) / StatusMessage

# Class: StatusMessage

[status](../modules/status.md).StatusMessage

## Table of contents

### Constructors

- [constructor](status.StatusMessage.md#constructor)

### Properties

- [element](status.StatusMessage.md#element)
- [timer](status.StatusMessage.md#timer)

### Methods

- [dispose](status.StatusMessage.md#dispose)
- [setErrorMessage](status.StatusMessage.md#seterrormessage)
- [setHTML](status.StatusMessage.md#sethtml)
- [setText](status.StatusMessage.md#settext)
- [setVisible](status.StatusMessage.md#setvisible)
- [forPromise](status.StatusMessage.md#forpromise)
- [showMessage](status.StatusMessage.md#showmessage)
- [showTemporaryMessage](status.StatusMessage.md#showtemporarymessage)

## Constructors

### constructor

• **new StatusMessage**(`delay?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `delay` | [`Delay`](../modules/status.md#delay) | `false` |

#### Defined in

[src/neuroglancer/status.ts:28](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/status.ts#L28)

## Properties

### element

• **element**: `HTMLElement`

#### Defined in

[src/neuroglancer/status.ts:26](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/status.ts#L26)

___

### timer

• `Private` **timer**: ``null`` \| `number`

#### Defined in

[src/neuroglancer/status.ts:27](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/status.ts#L27)

## Methods

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/status.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/status.ts#L52)

___

### setErrorMessage

▸ **setErrorMessage**(`message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/status.ts:99](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/status.ts#L99)

___

### setHTML

▸ **setHTML**(`text`, `makeVisible?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `makeVisible?` | `boolean` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/status.ts:65](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/status.ts#L65)

___

### setText

▸ **setText**(`text`, `makeVisible?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `makeVisible?` | `boolean` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/status.ts:59](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/status.ts#L59)

___

### setVisible

▸ **setVisible**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/status.ts:71](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/status.ts#L71)

___

### forPromise

▸ `Static` **forPromise**<`T`\>(`promise`, `options`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `promise` | `Promise`<`T`\> |
| `options` | `Object` |
| `options.delay?` | [`Delay`](../modules/status.md#delay) |
| `options.errorPrefix` | `string` |
| `options.initialMessage` | `string` |

#### Returns

`Promise`<`T`\>

#### Defined in

[src/neuroglancer/status.ts:79](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/status.ts#L79)

___

### showMessage

▸ `Static` **showMessage**(`message`): [`StatusMessage`](status.StatusMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

[`StatusMessage`](status.StatusMessage.md)

#### Defined in

[src/neuroglancer/status.ts:109](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/status.ts#L109)

___

### showTemporaryMessage

▸ `Static` **showTemporaryMessage**(`message`, `closeAfter?`): [`StatusMessage`](status.StatusMessage.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `message` | `string` | `undefined` |
| `closeAfter` | `number` | `2000` |

#### Returns

[`StatusMessage`](status.StatusMessage.md)

#### Defined in

[src/neuroglancer/status.ts:116](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/status.ts#L116)
