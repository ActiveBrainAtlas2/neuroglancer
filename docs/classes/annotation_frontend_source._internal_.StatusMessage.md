[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/frontend\_source](../modules/annotation_frontend_source.md) / [<internal\>](../modules/annotation_frontend_source._internal_.md) / StatusMessage

# Class: StatusMessage

[annotation/frontend_source](../modules/annotation_frontend_source.md).[<internal>](../modules/annotation_frontend_source._internal_.md).StatusMessage

## Table of contents

### Constructors

- [constructor](annotation_frontend_source._internal_.StatusMessage.md#constructor)

### Properties

- [element](annotation_frontend_source._internal_.StatusMessage.md#element)
- [timer](annotation_frontend_source._internal_.StatusMessage.md#timer)

### Methods

- [dispose](annotation_frontend_source._internal_.StatusMessage.md#dispose)
- [setErrorMessage](annotation_frontend_source._internal_.StatusMessage.md#seterrormessage)
- [setHTML](annotation_frontend_source._internal_.StatusMessage.md#sethtml)
- [setText](annotation_frontend_source._internal_.StatusMessage.md#settext)
- [setVisible](annotation_frontend_source._internal_.StatusMessage.md#setvisible)
- [forPromise](annotation_frontend_source._internal_.StatusMessage.md#forpromise)
- [showMessage](annotation_frontend_source._internal_.StatusMessage.md#showmessage)
- [showTemporaryMessage](annotation_frontend_source._internal_.StatusMessage.md#showtemporarymessage)

## Constructors

### constructor

• **new StatusMessage**(`delay?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `delay` | [`Delay`](../modules/annotation_frontend_source._internal_.md#delay) | `false` |

#### Defined in

[src/neuroglancer/status.ts:28](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/status.ts#L28)

## Properties

### element

• **element**: [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/status.ts:26](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/status.ts#L26)

___

### timer

• `Private` **timer**: ``null`` \| `number`

#### Defined in

[src/neuroglancer/status.ts:27](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/status.ts#L27)

## Methods

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/status.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/status.ts#L52)

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

[src/neuroglancer/status.ts:99](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/status.ts#L99)

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

[src/neuroglancer/status.ts:65](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/status.ts#L65)

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

[src/neuroglancer/status.ts:59](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/status.ts#L59)

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

[src/neuroglancer/status.ts:71](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/status.ts#L71)

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
| `options.delay?` | [`Delay`](../modules/annotation_frontend_source._internal_.md#delay) |
| `options.errorPrefix` | `string` |
| `options.initialMessage` | `string` |

#### Returns

`Promise`<`T`\>

#### Defined in

[src/neuroglancer/status.ts:79](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/status.ts#L79)

___

### showMessage

▸ `Static` **showMessage**(`message`): [`StatusMessage`](annotation_frontend_source._internal_.StatusMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

[`StatusMessage`](annotation_frontend_source._internal_.StatusMessage.md)

#### Defined in

[src/neuroglancer/status.ts:109](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/status.ts#L109)

___

### showTemporaryMessage

▸ `Static` **showTemporaryMessage**(`message`, `closeAfter?`): [`StatusMessage`](annotation_frontend_source._internal_.StatusMessage.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `message` | `string` | `undefined` |
| `closeAfter` | `number` | `2000` |

#### Returns

[`StatusMessage`](annotation_frontend_source._internal_.StatusMessage.md)

#### Defined in

[src/neuroglancer/status.ts:117](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/status.ts#L117)
