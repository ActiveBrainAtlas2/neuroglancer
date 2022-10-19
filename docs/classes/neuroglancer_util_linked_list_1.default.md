[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/util/linked\_list.1](../modules/neuroglancer_util_linked_list_1.md) / default

# Class: default

[neuroglancer/util/linked_list.1](../modules/neuroglancer_util_linked_list_1.md).default

## Table of contents

### Constructors

- [constructor](neuroglancer_util_linked_list_1.default.md#constructor)

### Methods

- [back](neuroglancer_util_linked_list_1.default.md#back)
- [front](neuroglancer_util_linked_list_1.default.md#front)
- [initializeHead](neuroglancer_util_linked_list_1.default.md#initializehead)
- [insertAfter](neuroglancer_util_linked_list_1.default.md#insertafter)
- [insertBefore](neuroglancer_util_linked_list_1.default.md#insertbefore)
- [iterator](neuroglancer_util_linked_list_1.default.md#iterator)
- [pop](neuroglancer_util_linked_list_1.default.md#pop)
- [reverseIterator](neuroglancer_util_linked_list_1.default.md#reverseiterator)

## Constructors

### constructor

• **new default**()

## Methods

### back

▸ `Static` **back**<`T`\>(`head`): ``null`` \| `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Node`](../interfaces/neuroglancer_util_linked_list_1._internal_.Node.md)<`T`, `T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `head` | `T` |

#### Returns

``null`` \| `T`

#### Defined in

[src/neuroglancer/util/linked_list.1.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/linked_list.1.ts#L45)

___

### front

▸ `Static` **front**<`T`\>(`head`): ``null`` \| `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Node`](../interfaces/neuroglancer_util_linked_list_1._internal_.Node.md)<`T`, `T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `head` | `T` |

#### Returns

``null`` \| `T`

#### Defined in

[src/neuroglancer/util/linked_list.1.ts:38](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/linked_list.1.ts#L38)

___

### initializeHead

▸ `Static` **initializeHead**<`T`\>(`head`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Node`](../interfaces/neuroglancer_util_linked_list_1._internal_.Node.md)<`T`, `T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `head` | `T` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/linked_list.1.ts:71](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/linked_list.1.ts#L71)

___

### insertAfter

▸ `Static` **insertAfter**<`T`\>(`head`, `x`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Node`](../interfaces/neuroglancer_util_linked_list_1._internal_.Node.md)<`T`, `T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `head` | `T` |
| `x` | `T` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/linked_list.1.ts:24](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/linked_list.1.ts#L24)

___

### insertBefore

▸ `Static` **insertBefore**<`T`\>(`head`, `x`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Node`](../interfaces/neuroglancer_util_linked_list_1._internal_.Node.md)<`T`, `T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `head` | `T` |
| `x` | `T` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/linked_list.1.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/linked_list.1.ts#L31)

___

### iterator

▸ `Static` **iterator**<`T`\>(`head`): [`Generator`](../interfaces/neuroglancer_chunk_manager_backend._internal_.Generator.md)<`T`, `void`, `unknown`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Node`](../interfaces/neuroglancer_util_linked_list_1._internal_.Node.md)<`T`, `T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `head` | `T` |

#### Returns

[`Generator`](../interfaces/neuroglancer_chunk_manager_backend._internal_.Generator.md)<`T`, `void`, `unknown`\>

#### Defined in

[src/neuroglancer/util/linked_list.1.ts:61](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/linked_list.1.ts#L61)

___

### pop

▸ `Static` **pop**<`T`\>(`x`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Node`](../interfaces/neuroglancer_util_linked_list_1._internal_.Node.md)<`T`, `T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `T` |

#### Returns

`T`

#### Defined in

[src/neuroglancer/util/linked_list.1.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/linked_list.1.ts#L52)

___

### reverseIterator

▸ `Static` **reverseIterator**<`T`\>(`head`): [`Generator`](../interfaces/neuroglancer_chunk_manager_backend._internal_.Generator.md)<`T`, `void`, `unknown`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Node`](../interfaces/neuroglancer_util_linked_list_1._internal_.Node.md)<`T`, `T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `head` | `T` |

#### Returns

[`Generator`](../interfaces/neuroglancer_chunk_manager_backend._internal_.Generator.md)<`T`, `void`, `unknown`\>

#### Defined in

[src/neuroglancer/util/linked_list.1.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/linked_list.1.ts#L66)
