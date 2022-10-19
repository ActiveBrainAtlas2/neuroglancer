[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/widget/multiline\_autocomplete](../modules/neuroglancer_widget_multiline_autocomplete.md) / CompletionResult

# Interface: CompletionResult

[neuroglancer/widget/multiline_autocomplete](../modules/neuroglancer_widget_multiline_autocomplete.md).CompletionResult

## Hierarchy

- [`BasicCompletionResult`](neuroglancer_util_completion.BasicCompletionResult.md)

  ↳ **`CompletionResult`**

## Table of contents

### Properties

- [completions](neuroglancer_widget_multiline_autocomplete.CompletionResult.md#completions)
- [offset](neuroglancer_widget_multiline_autocomplete.CompletionResult.md#offset)
- [selectSingleResult](neuroglancer_widget_multiline_autocomplete.CompletionResult.md#selectsingleresult)
- [showSingleResult](neuroglancer_widget_multiline_autocomplete.CompletionResult.md#showsingleresult)

### Methods

- [makeElement](neuroglancer_widget_multiline_autocomplete.CompletionResult.md#makeelement)

## Properties

### completions

• **completions**: [`Completion`](neuroglancer_util_completion.Completion.md)[]

#### Inherited from

[BasicCompletionResult](neuroglancer_util_completion.BasicCompletionResult.md).[completions](neuroglancer_util_completion.BasicCompletionResult.md#completions)

#### Defined in

[src/neuroglancer/util/completion.ts:28](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/completion.ts#L28)

___

### offset

• **offset**: `number`

#### Inherited from

[BasicCompletionResult](neuroglancer_util_completion.BasicCompletionResult.md).[offset](neuroglancer_util_completion.BasicCompletionResult.md#offset)

#### Defined in

[src/neuroglancer/util/completion.ts:29](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/completion.ts#L29)

___

### selectSingleResult

• `Optional` **selectSingleResult**: `boolean`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:38](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/multiline_autocomplete.ts#L38)

___

### showSingleResult

• `Optional` **showSingleResult**: `boolean`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:37](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/multiline_autocomplete.ts#L37)

## Methods

### makeElement

▸ `Optional` **makeElement**(`this`, `completion`): [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`CompletionResult`](neuroglancer_widget_multiline_autocomplete.CompletionResult.md) |
| `completion` | [`Completion`](neuroglancer_util_completion.Completion.md) |

#### Returns

[`HTMLElement`](../modules/main_module._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/multiline_autocomplete.ts#L39)
