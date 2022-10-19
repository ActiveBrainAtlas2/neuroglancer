[neuroglancer](../README.md) / [Modules](../modules.md) / [viewer](../modules/viewer.md) / [<internal\>](../modules/viewer._internal_.md) / CompletionResult

# Interface: CompletionResult

[viewer](../modules/viewer.md).[<internal>](../modules/viewer._internal_.md).CompletionResult

## Hierarchy

- [`BasicCompletionResult`](layer._internal_.BasicCompletionResult.md)

  ↳ **`CompletionResult`**

## Table of contents

### Properties

- [completions](viewer._internal_.CompletionResult.md#completions)
- [offset](viewer._internal_.CompletionResult.md#offset)
- [selectSingleResult](viewer._internal_.CompletionResult.md#selectsingleresult)
- [showSingleResult](viewer._internal_.CompletionResult.md#showsingleresult)

### Methods

- [makeElement](viewer._internal_.CompletionResult.md#makeelement)

## Properties

### completions

• **completions**: [`Completion`](layer._internal_.Completion.md)[]

#### Inherited from

[BasicCompletionResult](layer._internal_.BasicCompletionResult.md).[completions](layer._internal_.BasicCompletionResult.md#completions)

#### Defined in

[src/neuroglancer/util/completion.ts:28](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/completion.ts#L28)

___

### offset

• **offset**: `number`

#### Inherited from

[BasicCompletionResult](layer._internal_.BasicCompletionResult.md).[offset](layer._internal_.BasicCompletionResult.md#offset)

#### Defined in

[src/neuroglancer/util/completion.ts:29](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/completion.ts#L29)

___

### selectSingleResult

• `Optional` **selectSingleResult**: `boolean`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:38](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/multiline_autocomplete.ts#L38)

___

### showSingleResult

• `Optional` **showSingleResult**: `boolean`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:37](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/multiline_autocomplete.ts#L37)

## Methods

### makeElement

▸ `Optional` **makeElement**(`this`, `completion`): [`HTMLElement`](../modules/axes_lines._internal_.md#htmlelement)

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`CompletionResult`](viewer._internal_.CompletionResult.md) |
| `completion` | [`Completion`](layer._internal_.Completion.md) |

#### Returns

[`HTMLElement`](../modules/axes_lines._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/multiline_autocomplete.ts#L39)
