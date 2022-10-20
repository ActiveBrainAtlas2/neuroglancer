[neuroglancer](../README.md) / [Exports](../modules.md) / [main\_module](../modules/main_module.md) / [<internal\>](../modules/main_module._internal_.md) / PromiseLike

# Interface: PromiseLike<T\>

[main_module](../modules/main_module.md).[<internal>](../modules/main_module._internal_.md).PromiseLike

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Methods

- [then](main_module._internal_.PromiseLike.md#then)

## Methods

### then

▸ **then**<`TResult1`, `TResult2`\>(`onfulfilled?`, `onrejected?`): [`PromiseLike`](main_module._internal_.PromiseLike.md)<`TResult1` \| `TResult2`\>

Attaches callbacks for the resolution and/or rejection of the Promise.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResult1` | `T` |
| `TResult2` | `never` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `onfulfilled?` | ``null`` \| (`value`: `T`) => `TResult1` \| [`PromiseLike`](main_module._internal_.PromiseLike.md)<`TResult1`\> | The callback to execute when the Promise is resolved. |
| `onrejected?` | ``null`` \| (`reason`: `any`) => `TResult2` \| [`PromiseLike`](main_module._internal_.PromiseLike.md)<`TResult2`\> | The callback to execute when the Promise is rejected. |

#### Returns

[`PromiseLike`](main_module._internal_.PromiseLike.md)<`TResult1` \| `TResult2`\>

A Promise for the completion of which ever callback is executed.

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1495
