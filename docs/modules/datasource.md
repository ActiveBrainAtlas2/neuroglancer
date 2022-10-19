[neuroglancer](../README.md) / [Modules](../modules.md) / datasource

# Module: datasource

## Table of contents

### Modules

- [&lt;internal\&gt;](datasource._internal_.md)

### Enumerations

- [LocalDataSource](../enums/datasource.LocalDataSource.md)

### Classes

- [DataSourceProvider](../classes/datasource.DataSourceProvider.md)
- [DataSourceProviderRegistry](../classes/datasource.DataSourceProviderRegistry.md)
- [RedirectError](../classes/datasource.RedirectError.md)

### Interfaces

- [CompleteUrlOptions](../interfaces/datasource.CompleteUrlOptions.md)
- [CompleteUrlOptionsBase](../interfaces/datasource.CompleteUrlOptionsBase.md)
- [ConvertLegacyUrlOptions](../interfaces/datasource.ConvertLegacyUrlOptions.md)
- [ConvertLegacyUrlOptionsBase](../interfaces/datasource.ConvertLegacyUrlOptionsBase.md)
- [DataSource](../interfaces/datasource.DataSource.md)
- [DataSourceSpecification](../interfaces/datasource.DataSourceSpecification.md)
- [DataSubsource](../interfaces/datasource.DataSubsource.md)
- [DataSubsourceEntry](../interfaces/datasource.DataSubsourceEntry.md)
- [DataSubsourceSpecification](../interfaces/datasource.DataSubsourceSpecification.md)
- [GetDataSourceOptions](../interfaces/datasource.GetDataSourceOptions.md)
- [GetDataSourceOptionsBase](../interfaces/datasource.GetDataSourceOptionsBase.md)
- [NormalizeUrlOptions](../interfaces/datasource.NormalizeUrlOptions.md)
- [NormalizeUrlOptionsBase](../interfaces/datasource.NormalizeUrlOptionsBase.md)

### Type Aliases

- [CompletionResult](datasource.md#completionresult)

### Variables

- [localAnnotationsUrl](datasource.md#localannotationsurl)
- [localEquivalencesUrl](datasource.md#localequivalencesurl)

### Functions

- [findSourceGroupBasedOnSeparator](datasource.md#findsourcegroupbasedonseparator)
- [makeEmptyDataSourceSpecification](datasource.md#makeemptydatasourcespecification)
- [suggestLayerNameBasedOnSeparator](datasource.md#suggestlayernamebasedonseparator)

## Type Aliases

### CompletionResult

Ƭ **CompletionResult**: [`BasicCompletionResult`](../interfaces/util_completion.BasicCompletionResult.md)<[`CompletionWithDescription`](../interfaces/util_completion.CompletionWithDescription.md)\>

#### Defined in

[src/neuroglancer/datasource/index.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/datasource/index.ts#L34)

## Variables

### localAnnotationsUrl

• `Const` **localAnnotationsUrl**: ``"local://annotations"``

#### Defined in

[src/neuroglancer/datasource/index.ts:224](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/datasource/index.ts#L224)

___

### localEquivalencesUrl

• `Const` **localEquivalencesUrl**: ``"local://equivalences"``

#### Defined in

[src/neuroglancer/datasource/index.ts:225](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/datasource/index.ts#L225)

## Functions

### findSourceGroupBasedOnSeparator

▸ **findSourceGroupBasedOnSeparator**(`path`, `separator?`): `number`

Returns the length of the prefix of path that corresponds to the "group", according to the
specified separator.

If the separator is not specified, gueses whether it is '/' or ':'.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `separator?` | `string` |

#### Returns

`number`

#### Defined in

[src/neuroglancer/datasource/index.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/datasource/index.ts#L48)

___

### makeEmptyDataSourceSpecification

▸ **makeEmptyDataSourceSpecification**(): [`DataSourceSpecification`](../interfaces/datasource.DataSourceSpecification.md)

#### Returns

[`DataSourceSpecification`](../interfaces/datasource.DataSourceSpecification.md)

#### Defined in

[src/neuroglancer/datasource/index.ts:201](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/datasource/index.ts#L201)

___

### suggestLayerNameBasedOnSeparator

▸ **suggestLayerNameBasedOnSeparator**(`path`, `separator?`): `string`

Returns the last "component" of path, according to the specified separator.
If the separator is not specified, gueses whether it is '/' or ':'.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `separator?` | `string` |

#### Returns

`string`

#### Defined in

[src/neuroglancer/datasource/index.ts:69](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/datasource/index.ts#L69)
