[neuroglancer](../README.md) / [Exports](../modules.md) / [main\_module](../modules/main_module.md) / [<internal\>](../modules/main_module._internal_.md) / ReadableStream

# Interface: ReadableStream<R\>

[main_module](../modules/main_module.md).[<internal>](../modules/main_module._internal_.md).ReadableStream

This Streams API interface represents a readable stream of byte data. The Fetch API offers a concrete instance of a ReadableStream through the body property of a Response object.

## Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `any` |

## Table of contents

### Properties

- [locked](main_module._internal_.ReadableStream.md#locked)

### Methods

- [cancel](main_module._internal_.ReadableStream.md#cancel)
- [getReader](main_module._internal_.ReadableStream.md#getreader)
- [pipeThrough](main_module._internal_.ReadableStream.md#pipethrough)
- [pipeTo](main_module._internal_.ReadableStream.md#pipeto)
- [tee](main_module._internal_.ReadableStream.md#tee)

## Properties

### locked

• `Readonly` **locked**: `boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11480

## Methods

### cancel

▸ **cancel**(`reason?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason?` | `any` |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11481

___

### getReader

▸ **getReader**(): [`ReadableStreamDefaultReader`](../modules/main_module._internal_.md#readablestreamdefaultreader)<`R`\>

#### Returns

[`ReadableStreamDefaultReader`](../modules/main_module._internal_.md#readablestreamdefaultreader)<`R`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11482

___

### pipeThrough

▸ **pipeThrough**<`T`\>(`transform`, `options?`): [`ReadableStream`](../modules/main_module._internal_.md#readablestream)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | [`ReadableWritablePair`](main_module._internal_.ReadableWritablePair.md)<`T`, `R`\> |
| `options?` | [`StreamPipeOptions`](main_module._internal_.StreamPipeOptions.md) |

#### Returns

[`ReadableStream`](../modules/main_module._internal_.md#readablestream)<`T`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11483

___

### pipeTo

▸ **pipeTo**(`destination`, `options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination` | [`WritableStream`](../modules/main_module._internal_.md#writablestream)<`R`\> |
| `options?` | [`StreamPipeOptions`](main_module._internal_.StreamPipeOptions.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11484

___

### tee

▸ **tee**(): [[`ReadableStream`](../modules/main_module._internal_.md#readablestream)<`R`\>, [`ReadableStream`](../modules/main_module._internal_.md#readablestream)<`R`\>]

#### Returns

[[`ReadableStream`](../modules/main_module._internal_.md#readablestream)<`R`\>, [`ReadableStream`](../modules/main_module._internal_.md#readablestream)<`R`\>]

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11485
