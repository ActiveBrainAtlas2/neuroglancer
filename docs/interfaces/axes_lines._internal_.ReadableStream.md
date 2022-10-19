[neuroglancer](../README.md) / [Modules](../modules.md) / [axes\_lines](../modules/axes_lines.md) / [<internal\>](../modules/axes_lines._internal_.md) / ReadableStream

# Interface: ReadableStream<R\>

[axes_lines](../modules/axes_lines.md).[<internal>](../modules/axes_lines._internal_.md).ReadableStream

This Streams API interface represents a readable stream of byte data. The Fetch API offers a concrete instance of a ReadableStream through the body property of a Response object.

## Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `any` |

## Table of contents

### Properties

- [locked](axes_lines._internal_.ReadableStream.md#locked)

### Methods

- [cancel](axes_lines._internal_.ReadableStream.md#cancel)
- [getReader](axes_lines._internal_.ReadableStream.md#getreader)
- [pipeThrough](axes_lines._internal_.ReadableStream.md#pipethrough)
- [pipeTo](axes_lines._internal_.ReadableStream.md#pipeto)
- [tee](axes_lines._internal_.ReadableStream.md#tee)

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

▸ **getReader**(): [`ReadableStreamDefaultReader`](../modules/axes_lines._internal_.md#readablestreamdefaultreader)<`R`\>

#### Returns

[`ReadableStreamDefaultReader`](../modules/axes_lines._internal_.md#readablestreamdefaultreader)<`R`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11482

___

### pipeThrough

▸ **pipeThrough**<`T`\>(`transform`, `options?`): [`ReadableStream`](../modules/axes_lines._internal_.md#readablestream)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | [`ReadableWritablePair`](axes_lines._internal_.ReadableWritablePair.md)<`T`, `R`\> |
| `options?` | [`StreamPipeOptions`](axes_lines._internal_.StreamPipeOptions.md) |

#### Returns

[`ReadableStream`](../modules/axes_lines._internal_.md#readablestream)<`T`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11483

___

### pipeTo

▸ **pipeTo**(`destination`, `options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination` | [`WritableStream`](../modules/axes_lines._internal_.md#writablestream)<`R`\> |
| `options?` | [`StreamPipeOptions`](axes_lines._internal_.StreamPipeOptions.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11484

___

### tee

▸ **tee**(): [[`ReadableStream`](../modules/axes_lines._internal_.md#readablestream)<`R`\>, [`ReadableStream`](../modules/axes_lines._internal_.md#readablestream)<`R`\>]

#### Returns

[[`ReadableStream`](../modules/axes_lines._internal_.md#readablestream)<`R`\>, [`ReadableStream`](../modules/axes_lines._internal_.md#readablestream)<`R`\>]

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11485
