[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / ReadableStream

# Interface: ReadableStream<R\>

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).ReadableStream

This Streams API interface represents a readable stream of byte data. The Fetch API offers a concrete instance of a ReadableStream through the body property of a Response object.

## Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `any` |

## Table of contents

### Properties

- [locked](annotation_annotation_layer_state._internal_.ReadableStream.md#locked)

### Methods

- [cancel](annotation_annotation_layer_state._internal_.ReadableStream.md#cancel)
- [getReader](annotation_annotation_layer_state._internal_.ReadableStream.md#getreader)
- [pipeThrough](annotation_annotation_layer_state._internal_.ReadableStream.md#pipethrough)
- [pipeTo](annotation_annotation_layer_state._internal_.ReadableStream.md#pipeto)
- [tee](annotation_annotation_layer_state._internal_.ReadableStream.md#tee)

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

▸ **getReader**(): [`ReadableStreamDefaultReader`](../modules/annotation_annotation_layer_state._internal_.md#readablestreamdefaultreader)<`R`\>

#### Returns

[`ReadableStreamDefaultReader`](../modules/annotation_annotation_layer_state._internal_.md#readablestreamdefaultreader)<`R`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11482

___

### pipeThrough

▸ **pipeThrough**<`T`\>(`transform`, `options?`): [`ReadableStream`](../modules/annotation_annotation_layer_state._internal_.md#readablestream)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | [`ReadableWritablePair`](annotation_annotation_layer_state._internal_.ReadableWritablePair.md)<`T`, `R`\> |
| `options?` | [`StreamPipeOptions`](annotation_annotation_layer_state._internal_.StreamPipeOptions.md) |

#### Returns

[`ReadableStream`](../modules/annotation_annotation_layer_state._internal_.md#readablestream)<`T`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11483

___

### pipeTo

▸ **pipeTo**(`destination`, `options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination` | [`WritableStream`](../modules/annotation_annotation_layer_state._internal_.md#writablestream)<`R`\> |
| `options?` | [`StreamPipeOptions`](annotation_annotation_layer_state._internal_.StreamPipeOptions.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11484

___

### tee

▸ **tee**(): [[`ReadableStream`](../modules/annotation_annotation_layer_state._internal_.md#readablestream)<`R`\>, [`ReadableStream`](../modules/annotation_annotation_layer_state._internal_.md#readablestream)<`R`\>]

#### Returns

[[`ReadableStream`](../modules/annotation_annotation_layer_state._internal_.md#readablestream)<`R`\>, [`ReadableStream`](../modules/annotation_annotation_layer_state._internal_.md#readablestream)<`R`\>]

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11485
