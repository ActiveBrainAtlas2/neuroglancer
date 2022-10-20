[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/datasource

# Module: neuroglancer/datasource

## Table of contents

### Modules

- [&lt;internal\&gt;](neuroglancer_datasource._internal_.md)

### Enumerations

- [LocalDataSource](../enums/neuroglancer_datasource.LocalDataSource.md)

### Classes

- [DataSourceProvider](../classes/neuroglancer_datasource.DataSourceProvider.md)
- [DataSourceProviderRegistry](../classes/neuroglancer_datasource.DataSourceProviderRegistry.md)
- [RedirectError](../classes/neuroglancer_datasource.RedirectError.md)

### Interfaces

- [CompleteUrlOptions](../interfaces/neuroglancer_datasource.CompleteUrlOptions.md)
- [CompleteUrlOptionsBase](../interfaces/neuroglancer_datasource.CompleteUrlOptionsBase.md)
- [ConvertLegacyUrlOptions](../interfaces/neuroglancer_datasource.ConvertLegacyUrlOptions.md)
- [ConvertLegacyUrlOptionsBase](../interfaces/neuroglancer_datasource.ConvertLegacyUrlOptionsBase.md)
- [DataSource](../interfaces/neuroglancer_datasource.DataSource.md)
- [DataSourceSpecification](../interfaces/neuroglancer_datasource.DataSourceSpecification.md)
- [DataSubsource](../interfaces/neuroglancer_datasource.DataSubsource.md)
- [DataSubsourceEntry](../interfaces/neuroglancer_datasource.DataSubsourceEntry.md)
- [DataSubsourceSpecification](../interfaces/neuroglancer_datasource.DataSubsourceSpecification.md)
- [GetDataSourceOptions](../interfaces/neuroglancer_datasource.GetDataSourceOptions.md)
- [GetDataSourceOptionsBase](../interfaces/neuroglancer_datasource.GetDataSourceOptionsBase.md)
- [NormalizeUrlOptions](../interfaces/neuroglancer_datasource.NormalizeUrlOptions.md)
- [NormalizeUrlOptionsBase](../interfaces/neuroglancer_datasource.NormalizeUrlOptionsBase.md)

### Type Aliases

- [CompletionResult](neuroglancer_datasource.md#completionresult)

### Variables

- [localAnnotationsUrl](neuroglancer_datasource.md#localannotationsurl)
- [localEquivalencesUrl](neuroglancer_datasource.md#localequivalencesurl)

### Functions

- [findSourceGroupBasedOnSeparator](neuroglancer_datasource.md#findsourcegroupbasedonseparator)
- [makeEmptyDataSourceSpecification](neuroglancer_datasource.md#makeemptydatasourcespecification)
- [suggestLayerNameBasedOnSeparator](neuroglancer_datasource.md#suggestlayernamebasedonseparator)

## Type Aliases

### CompletionResult

Ƭ **CompletionResult**: [`BasicCompletionResult`](../interfaces/neuroglancer_util_completion.BasicCompletionResult.md)<[`CompletionWithDescription`](../interfaces/neuroglancer_util_completion.CompletionWithDescription.md)\>

#### Defined in

[src/neuroglancer/datasource/index.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/index.ts#L34)

## Variables

### localAnnotationsUrl

• `Const` **localAnnotationsUrl**: ``"local://annotations"``

#### Defined in

[src/neuroglancer/datasource/index.ts:224](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/index.ts#L224)

___

### localEquivalencesUrl

• `Const` **localEquivalencesUrl**: ``"local://equivalences"``

#### Defined in

[src/neuroglancer/datasource/index.ts:225](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/index.ts#L225)

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

[src/neuroglancer/datasource/index.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/index.ts#L48)

___

### makeEmptyDataSourceSpecification

▸ **makeEmptyDataSourceSpecification**(): [`DataSourceSpecification`](../interfaces/neuroglancer_datasource.DataSourceSpecification.md)

#### Returns

[`DataSourceSpecification`](../interfaces/neuroglancer_datasource.DataSourceSpecification.md)

#### Defined in

[src/neuroglancer/datasource/index.ts:201](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/index.ts#L201)

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

[src/neuroglancer/datasource/index.ts:69](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/index.ts#L69)
