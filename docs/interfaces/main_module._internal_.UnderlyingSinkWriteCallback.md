[neuroglancer](../README.md) / [Exports](../modules.md) / [main\_module](../modules/main_module.md) / [<internal\>](../modules/main_module._internal_.md) / UnderlyingSinkWriteCallback

# Interface: UnderlyingSinkWriteCallback<W\>

[main_module](../modules/main_module.md).[<internal>](../modules/main_module._internal_.md).UnderlyingSinkWriteCallback

## Type parameters

| Name |
| :------ |
| `W` |

## Callable

### UnderlyingSinkWriteCallback

▸ **UnderlyingSinkWriteCallback**(`chunk`, `controller`): `void` \| [`PromiseLike`](main_module._internal_.PromiseLike.md)<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `W` |
| `controller` | [`WritableStreamDefaultController`](../modules/main_module._internal_.md#writablestreamdefaultcontroller) |

#### Returns

`void` \| [`PromiseLike`](main_module._internal_.PromiseLike.md)<`void`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:17444
