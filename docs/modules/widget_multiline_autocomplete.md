[neuroglancer](../README.md) / [Modules](../modules.md) / widget/multiline\_autocomplete

# Module: widget/multiline\_autocomplete

## Table of contents

### References

- [Completion](widget_multiline_autocomplete.md#completion)
- [CompletionWithDescription](widget_multiline_autocomplete.md#completionwithdescription)

### Classes

- [AutocompleteTextInput](../classes/widget_multiline_autocomplete.AutocompleteTextInput.md)

### Interfaces

- [CompletionResult](../interfaces/widget_multiline_autocomplete.CompletionResult.md)

### Type Aliases

- [Completer](widget_multiline_autocomplete.md#completer)

### Functions

- [makeCompletionElementWithDescription](widget_multiline_autocomplete.md#makecompletionelementwithdescription)
- [makeDefaultCompletionElement](widget_multiline_autocomplete.md#makedefaultcompletionelement)

## References

### Completion

Re-exports [Completion](../interfaces/util_completion.Completion.md)

___

### CompletionWithDescription

Re-exports [CompletionWithDescription](../interfaces/util_completion.CompletionWithDescription.md)

## Type Aliases

### Completer

Ƭ **Completer**: (`value`: `string`, `cancellationToken`: [`CancellationToken`](../interfaces/util_cancellation.CancellationToken.md)) => `Promise`<[`CompletionResult`](../interfaces/widget_multiline_autocomplete.CompletionResult.md)\> \| ``null``

#### Type declaration

▸ (`value`, `cancellationToken`): `Promise`<[`CompletionResult`](../interfaces/widget_multiline_autocomplete.CompletionResult.md)\> \| ``null``

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |
| `cancellationToken` | [`CancellationToken`](../interfaces/util_cancellation.CancellationToken.md) |

##### Returns

`Promise`<[`CompletionResult`](../interfaces/widget_multiline_autocomplete.CompletionResult.md)\> \| ``null``

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:82](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/multiline_autocomplete.ts#L82)

## Functions

### makeCompletionElementWithDescription

▸ **makeCompletionElementWithDescription**(`completion`): [`HTMLDivElement`](annotation_annotation_layer_state._internal_.md#htmldivelement)

#### Parameters

| Name | Type |
| :------ | :------ |
| `completion` | [`CompletionWithDescription`](../interfaces/util_completion.CompletionWithDescription.md) |

#### Returns

[`HTMLDivElement`](annotation_annotation_layer_state._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:61](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/multiline_autocomplete.ts#L61)

___

### makeDefaultCompletionElement

▸ **makeDefaultCompletionElement**(`completion`): [`HTMLDivElement`](annotation_annotation_layer_state._internal_.md#htmldivelement)

#### Parameters

| Name | Type |
| :------ | :------ |
| `completion` | [`Completion`](../interfaces/util_completion.Completion.md) |

#### Returns

[`HTMLDivElement`](annotation_annotation_layer_state._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/multiline_autocomplete.ts#L42)
