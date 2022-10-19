[neuroglancer](../README.md) / [Modules](../modules.md) / [axes\_lines](../modules/axes_lines.md) / [<internal\>](../modules/axes_lines._internal_.md) / WritableStreamDefaultWriter

# Interface: WritableStreamDefaultWriter<W\>

[axes_lines](../modules/axes_lines.md).[<internal>](../modules/axes_lines._internal_.md).WritableStreamDefaultWriter

This Streams API interface is the object returned by WritableStream.getWriter() and once created locks the < writer to the WritableStream ensuring that no other streams can write to the underlying sink.

## Type parameters

| Name | Type |
| :------ | :------ |
| `W` | `any` |

## Table of contents

### Properties

- [closed](axes_lines._internal_.WritableStreamDefaultWriter.md#closed)
- [desiredSize](axes_lines._internal_.WritableStreamDefaultWriter.md#desiredsize)
- [ready](axes_lines._internal_.WritableStreamDefaultWriter.md#ready)

### Methods

- [abort](axes_lines._internal_.WritableStreamDefaultWriter.md#abort)
- [close](axes_lines._internal_.WritableStreamDefaultWriter.md#close)
- [releaseLock](axes_lines._internal_.WritableStreamDefaultWriter.md#releaselock)
- [write](axes_lines._internal_.WritableStreamDefaultWriter.md#write)

## Properties

### closed

• `Readonly` **closed**: `Promise`<`undefined`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16888

___

### desiredSize

• `Readonly` **desiredSize**: ``null`` \| `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16889

___

### ready

• `Readonly` **ready**: `Promise`<`undefined`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16890

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

node_modules/typescript/lib/lib.dom.d.ts:16891

___

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16892

___

### releaseLock

▸ **releaseLock**(): `void`

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16893

___

### write

▸ **write**(`chunk?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk?` | `W` |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16894
