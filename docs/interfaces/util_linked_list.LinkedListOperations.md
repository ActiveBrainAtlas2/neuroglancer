[neuroglancer](../README.md) / [Modules](../modules.md) / [util/linked\_list](../modules/util_linked_list.md) / LinkedListOperations

# Interface: LinkedListOperations<T\>

[util/linked_list](../modules/util_linked_list.md).LinkedListOperations

**`license`**
Copyright 2016 Google Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Methods

- [back](util_linked_list.LinkedListOperations.md#back)
- [front](util_linked_list.LinkedListOperations.md#front)
- [initializeHead](util_linked_list.LinkedListOperations.md#initializehead)
- [insertAfter](util_linked_list.LinkedListOperations.md#insertafter)
- [insertBefore](util_linked_list.LinkedListOperations.md#insertbefore)
- [iterator](util_linked_list.LinkedListOperations.md#iterator)
- [pop](util_linked_list.LinkedListOperations.md#pop)
- [reverseIterator](util_linked_list.LinkedListOperations.md#reverseiterator)

## Methods

### back

▸ **back**(`head`): ``null`` \| `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `head` | `T` |

#### Returns

``null`` \| `T`

#### Defined in

[src/neuroglancer/util/linked_list.ts:22](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/linked_list.ts#L22)

___

### front

▸ **front**(`head`): ``null`` \| `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `head` | `T` |

#### Returns

``null`` \| `T`

#### Defined in

[src/neuroglancer/util/linked_list.ts:21](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/linked_list.ts#L21)

___

### initializeHead

▸ **initializeHead**(`head`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `head` | `T` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/linked_list.ts:25](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/linked_list.ts#L25)

___

### insertAfter

▸ **insertAfter**(`head`, `x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `head` | `T` |
| `x` | `T` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/linked_list.ts:18](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/linked_list.ts#L18)

___

### insertBefore

▸ **insertBefore**(`head`, `x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `head` | `T` |
| `x` | `T` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/linked_list.ts:20](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/linked_list.ts#L20)

___

### iterator

▸ **iterator**(`head`): [`Iterator`](annotation_annotation_layer_state._internal_.Iterator.md)<`T`, `any`, `undefined`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `head` | `T` |

#### Returns

[`Iterator`](annotation_annotation_layer_state._internal_.Iterator.md)<`T`, `any`, `undefined`\>

#### Defined in

[src/neuroglancer/util/linked_list.ts:23](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/linked_list.ts#L23)

___

### pop

▸ **pop**(`head`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `head` | `T` |

#### Returns

`T`

#### Defined in

[src/neuroglancer/util/linked_list.ts:19](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/linked_list.ts#L19)

___

### reverseIterator

▸ **reverseIterator**(`head`): [`Iterator`](annotation_annotation_layer_state._internal_.Iterator.md)<`T`, `any`, `undefined`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `head` | `T` |

#### Returns

[`Iterator`](annotation_annotation_layer_state._internal_.Iterator.md)<`T`, `any`, `undefined`\>

#### Defined in

[src/neuroglancer/util/linked_list.ts:24](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/linked_list.ts#L24)
