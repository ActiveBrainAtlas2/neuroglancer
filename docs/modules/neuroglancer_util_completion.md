[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/util/completion

# Module: neuroglancer/util/completion

## Table of contents

### Interfaces

- [BasicCompletionResult](../interfaces/neuroglancer_util_completion.BasicCompletionResult.md)
- [Completion](../interfaces/neuroglancer_util_completion.Completion.md)
- [CompletionWithDescription](../interfaces/neuroglancer_util_completion.CompletionWithDescription.md)
- [QueryStringCompletionTableEntry](../interfaces/neuroglancer_util_completion.QueryStringCompletionTableEntry.md)

### Type Aliases

- [QueryStringCompletionTable](neuroglancer_util_completion.md#querystringcompletiontable)

### Variables

- [emptyCompletionResult](neuroglancer_util_completion.md#emptycompletionresult)

### Functions

- [applyCompletionOffset](neuroglancer_util_completion.md#applycompletionoffset)
- [completeQueryStringParameters](neuroglancer_util_completion.md#completequerystringparameters)
- [completeQueryStringParametersFromTable](neuroglancer_util_completion.md#completequerystringparametersfromtable)
- [getPrefixMatches](neuroglancer_util_completion.md#getprefixmatches)
- [getPrefixMatchesWithDescriptions](neuroglancer_util_completion.md#getprefixmatcheswithdescriptions)

## Type Aliases

### QueryStringCompletionTable

Ƭ **QueryStringCompletionTable**<`C`\>: readonly [`QueryStringCompletionTableEntry`](../interfaces/neuroglancer_util_completion.QueryStringCompletionTableEntry.md)<`C`\>[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Completion`](../interfaces/neuroglancer_util_completion.Completion.md) = [`Completion`](../interfaces/neuroglancer_util_completion.Completion.md) |

#### Defined in

[src/neuroglancer/util/completion.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/completion.ts#L95)

## Variables

### emptyCompletionResult

• `Const` **emptyCompletionResult**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `completions` | `never`[] |
| `offset` | `number` |

#### Defined in

[src/neuroglancer/util/completion.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/completion.ts#L32)

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

[src/neuroglancer/util/completion.ts:37](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/completion.ts#L37)

___

### completeQueryStringParameters

▸ **completeQueryStringParameters**<`T`\>(`queryString`, `keyCompleter`, `valueCompleter`): `Promise`<[`BasicCompletionResult`](../interfaces/neuroglancer_util_completion.BasicCompletionResult.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Completion`](../interfaces/neuroglancer_util_completion.Completion.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `queryString` | `string` |
| `keyCompleter` | (`value`: `string`) => `Promise`<[`BasicCompletionResult`](../interfaces/neuroglancer_util_completion.BasicCompletionResult.md)<`T`\>\> |
| `valueCompleter` | (`key`: `string`, `value`: `string`) => `Promise`<[`BasicCompletionResult`](../interfaces/neuroglancer_util_completion.BasicCompletionResult.md)<`T`\>\> |

#### Returns

`Promise`<[`BasicCompletionResult`](../interfaces/neuroglancer_util_completion.BasicCompletionResult.md)<`T`\>\>

#### Defined in

[src/neuroglancer/util/completion.ts:69](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/completion.ts#L69)

___

### completeQueryStringParametersFromTable

▸ **completeQueryStringParametersFromTable**<`C`\>(`queryString`, `table`): `Promise`<[`BasicCompletionResult`](../interfaces/neuroglancer_util_completion.BasicCompletionResult.md)<`C`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Completion`](../interfaces/neuroglancer_util_completion.Completion.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `queryString` | `string` |
| `table` | [`QueryStringCompletionTable`](neuroglancer_util_completion.md#querystringcompletiontable)<`C`\> |

#### Returns

`Promise`<[`BasicCompletionResult`](../interfaces/neuroglancer_util_completion.BasicCompletionResult.md)<`C`\>\>

#### Defined in

[src/neuroglancer/util/completion.ts:98](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/completion.ts#L98)

___

### getPrefixMatches

▸ **getPrefixMatches**(`prefix`, `options`): [`Completion`](../interfaces/neuroglancer_util_completion.Completion.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `prefix` | `string` |
| `options` | [`Iterable`](../interfaces/main_module._internal_.Iterable.md)<`string`\> |

#### Returns

[`Completion`](../interfaces/neuroglancer_util_completion.Completion.md)[]

#### Defined in

[src/neuroglancer/util/completion.ts:43](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/completion.ts#L43)

___

### getPrefixMatchesWithDescriptions

▸ **getPrefixMatchesWithDescriptions**<`T`\>(`prefix`, `options`, `getValue`, `getDescription`): [`CompletionWithDescription`](../interfaces/neuroglancer_util_completion.CompletionWithDescription.md)[]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `prefix` | `string` |
| `options` | [`Iterable`](../interfaces/main_module._internal_.Iterable.md)<`T`\> |
| `getValue` | (`x`: `T`) => `string` |
| `getDescription` | (`x`: `T`) => `undefined` \| `string` |

#### Returns

[`CompletionWithDescription`](../interfaces/neuroglancer_util_completion.CompletionWithDescription.md)[]

#### Defined in

[src/neuroglancer/util/completion.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/completion.ts#L54)
