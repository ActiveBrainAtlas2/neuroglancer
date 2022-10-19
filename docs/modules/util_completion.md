[neuroglancer](../README.md) / [Modules](../modules.md) / util/completion

# Module: util/completion

## Table of contents

### Interfaces

- [BasicCompletionResult](../interfaces/util_completion.BasicCompletionResult.md)
- [Completion](../interfaces/util_completion.Completion.md)
- [CompletionWithDescription](../interfaces/util_completion.CompletionWithDescription.md)
- [QueryStringCompletionTableEntry](../interfaces/util_completion.QueryStringCompletionTableEntry.md)

### Type Aliases

- [QueryStringCompletionTable](util_completion.md#querystringcompletiontable)

### Variables

- [emptyCompletionResult](util_completion.md#emptycompletionresult)

### Functions

- [applyCompletionOffset](util_completion.md#applycompletionoffset)
- [completeQueryStringParameters](util_completion.md#completequerystringparameters)
- [completeQueryStringParametersFromTable](util_completion.md#completequerystringparametersfromtable)
- [getPrefixMatches](util_completion.md#getprefixmatches)
- [getPrefixMatchesWithDescriptions](util_completion.md#getprefixmatcheswithdescriptions)

## Type Aliases

### QueryStringCompletionTable

Ƭ **QueryStringCompletionTable**<`C`\>: readonly [`QueryStringCompletionTableEntry`](../interfaces/util_completion.QueryStringCompletionTableEntry.md)<`C`\>[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Completion`](../interfaces/util_completion.Completion.md) = [`Completion`](../interfaces/util_completion.Completion.md) |

#### Defined in

[src/neuroglancer/util/completion.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/completion.ts#L95)

## Variables

### emptyCompletionResult

• `Const` **emptyCompletionResult**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `completions` | `never`[] |
| `offset` | `number` |

#### Defined in

[src/neuroglancer/util/completion.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/completion.ts#L32)

## Functions

### applyCompletionOffset

▸ **applyCompletionOffset**<`T`\>(`offset`, `completionResult`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset` | `number` |
| `completionResult` | `T` |

#### Returns

`T`

#### Defined in

[src/neuroglancer/util/completion.ts:37](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/completion.ts#L37)

___

### completeQueryStringParameters

▸ **completeQueryStringParameters**<`T`\>(`queryString`, `keyCompleter`, `valueCompleter`): `Promise`<[`BasicCompletionResult`](../interfaces/util_completion.BasicCompletionResult.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Completion`](../interfaces/util_completion.Completion.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `queryString` | `string` |
| `keyCompleter` | (`value`: `string`) => `Promise`<[`BasicCompletionResult`](../interfaces/util_completion.BasicCompletionResult.md)<`T`\>\> |
| `valueCompleter` | (`key`: `string`, `value`: `string`) => `Promise`<[`BasicCompletionResult`](../interfaces/util_completion.BasicCompletionResult.md)<`T`\>\> |

#### Returns

`Promise`<[`BasicCompletionResult`](../interfaces/util_completion.BasicCompletionResult.md)<`T`\>\>

#### Defined in

[src/neuroglancer/util/completion.ts:69](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/completion.ts#L69)

___

### completeQueryStringParametersFromTable

▸ **completeQueryStringParametersFromTable**<`C`\>(`queryString`, `table`): `Promise`<[`BasicCompletionResult`](../interfaces/util_completion.BasicCompletionResult.md)<`C`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Completion`](../interfaces/util_completion.Completion.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `queryString` | `string` |
| `table` | [`QueryStringCompletionTable`](util_completion.md#querystringcompletiontable)<`C`\> |

#### Returns

`Promise`<[`BasicCompletionResult`](../interfaces/util_completion.BasicCompletionResult.md)<`C`\>\>

#### Defined in

[src/neuroglancer/util/completion.ts:98](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/completion.ts#L98)

___

### getPrefixMatches

▸ **getPrefixMatches**(`prefix`, `options`): [`Completion`](../interfaces/util_completion.Completion.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `prefix` | `string` |
| `options` | [`Iterable`](../interfaces/annotation_annotation_layer_state._internal_.Iterable.md)<`string`\> |

#### Returns

[`Completion`](../interfaces/util_completion.Completion.md)[]

#### Defined in

[src/neuroglancer/util/completion.ts:43](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/completion.ts#L43)

___

### getPrefixMatchesWithDescriptions

▸ **getPrefixMatchesWithDescriptions**<`T`\>(`prefix`, `options`, `getValue`, `getDescription`): [`CompletionWithDescription`](../interfaces/util_completion.CompletionWithDescription.md)[]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `prefix` | `string` |
| `options` | [`Iterable`](../interfaces/annotation_annotation_layer_state._internal_.Iterable.md)<`T`\> |
| `getValue` | (`x`: `T`) => `string` |
| `getDescription` | (`x`: `T`) => `undefined` \| `string` |

#### Returns

[`CompletionWithDescription`](../interfaces/util_completion.CompletionWithDescription.md)[]

#### Defined in

[src/neuroglancer/util/completion.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/completion.ts#L54)
