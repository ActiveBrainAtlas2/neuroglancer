[neuroglancer](../README.md) / [Modules](../modules.md) / [widget/multiline\_autocomplete](../modules/widget_multiline_autocomplete.md) / CompletionResult

# Interface: CompletionResult

[widget/multiline_autocomplete](../modules/widget_multiline_autocomplete.md).CompletionResult

## Hierarchy

- [`BasicCompletionResult`](util_completion.BasicCompletionResult.md)

  ↳ **`CompletionResult`**

## Table of contents

### Properties

- [completions](widget_multiline_autocomplete.CompletionResult.md#completions)
- [offset](widget_multiline_autocomplete.CompletionResult.md#offset)
- [selectSingleResult](widget_multiline_autocomplete.CompletionResult.md#selectsingleresult)
- [showSingleResult](widget_multiline_autocomplete.CompletionResult.md#showsingleresult)

### Methods

- [makeElement](widget_multiline_autocomplete.CompletionResult.md#makeelement)

## Properties

### completions

• **completions**: [`Completion`](util_completion.Completion.md)[]

#### Inherited from

[BasicCompletionResult](util_completion.BasicCompletionResult.md).[completions](util_completion.BasicCompletionResult.md#completions)

#### Defined in

[src/neuroglancer/util/completion.ts:28](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/completion.ts#L28)

___

### offset

• **offset**: `number`

#### Inherited from

[BasicCompletionResult](util_completion.BasicCompletionResult.md).[offset](util_completion.BasicCompletionResult.md#offset)

#### Defined in

[src/neuroglancer/util/completion.ts:29](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/completion.ts#L29)

___

### selectSingleResult

• `Optional` **selectSingleResult**: `boolean`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:38](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/multiline_autocomplete.ts#L38)

___

### showSingleResult

• `Optional` **showSingleResult**: `boolean`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:37](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/multiline_autocomplete.ts#L37)

## Methods

### makeElement

▸ `Optional` **makeElement**(`this`, `completion`): [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement)

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`CompletionResult`](widget_multiline_autocomplete.CompletionResult.md) |
| `completion` | [`Completion`](util_completion.Completion.md) |

#### Returns

[`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/multiline_autocomplete.ts#L39)
