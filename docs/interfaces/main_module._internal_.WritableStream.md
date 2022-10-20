[neuroglancer](../README.md) / [Exports](../modules.md) / [main\_module](../modules/main_module.md) / [<internal\>](../modules/main_module._internal_.md) / WritableStream

# Interface: WritableStream<W\>

[main_module](../modules/main_module.md).[<internal>](../modules/main_module._internal_.md).WritableStream

This Streams API interface provides a standard abstraction for writing streaming data to a destination, known as a sink. This object comes with built-in backpressure and queuing.

## Type parameters

| Name | Type |
| :------ | :------ |
| `W` | `any` |

## Table of contents

### Properties

- [locked](main_module._internal_.WritableStream.md#locked)

### Methods

- [abort](main_module._internal_.WritableStream.md#abort)
- [close](main_module._internal_.WritableStream.md#close)
- [getWriter](main_module._internal_.WritableStream.md#getwriter)

## Properties

### locked

• `Readonly` **locked**: `boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16865

## Methods

### abort

▸ **abort**(`reason?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason?` | `any` |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16866

___

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16867

___

### getWriter

▸ **getWriter**(): [`WritableStreamDefaultWriter`](../modules/main_module._internal_.md#writablestreamdefaultwriter)<`W`\>

#### Returns

[`WritableStreamDefaultWriter`](../modules/main_module._internal_.md#writablestreamdefaultwriter)<`W`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16868
