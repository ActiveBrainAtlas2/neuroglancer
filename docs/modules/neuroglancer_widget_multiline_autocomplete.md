[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/widget/multiline\_autocomplete

# Module: neuroglancer/widget/multiline\_autocomplete

## Table of contents

### References

- [Completion](neuroglancer_widget_multiline_autocomplete.md#completion)
- [CompletionWithDescription](neuroglancer_widget_multiline_autocomplete.md#completionwithdescription)

### Classes

- [AutocompleteTextInput](../classes/neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md)

### Interfaces

- [CompletionResult](../interfaces/neuroglancer_widget_multiline_autocomplete.CompletionResult.md)

### Type Aliases

- [Completer](neuroglancer_widget_multiline_autocomplete.md#completer)

### Functions

- [makeCompletionElementWithDescription](neuroglancer_widget_multiline_autocomplete.md#makecompletionelementwithdescription)
- [makeDefaultCompletionElement](neuroglancer_widget_multiline_autocomplete.md#makedefaultcompletionelement)

## References

### Completion

Re-exports [Completion](../interfaces/neuroglancer_util_completion.Completion.md)

___

### CompletionWithDescription

Re-exports [CompletionWithDescription](../interfaces/neuroglancer_util_completion.CompletionWithDescription.md)

## Type Aliases

### Completer

Ƭ **Completer**: (`value`: `string`, `cancellationToken`: [`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md)) => `Promise`<[`CompletionResult`](../interfaces/neuroglancer_widget_multiline_autocomplete.CompletionResult.md)\> \| ``null``

#### Type declaration

▸ (`value`, `cancellationToken`): `Promise`<[`CompletionResult`](../interfaces/neuroglancer_widget_multiline_autocomplete.CompletionResult.md)\> \| ``null``

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |
| `cancellationToken` | [`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md) |

##### Returns

`Promise`<[`CompletionResult`](../interfaces/neuroglancer_widget_multiline_autocomplete.CompletionResult.md)\> \| ``null``

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:82](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/multiline_autocomplete.ts#L82)

## Functions

### makeCompletionElementWithDescription

▸ **makeCompletionElementWithDescription**(`completion`): [`HTMLDivElement`](main_module._internal_.md#htmldivelement)

#### Parameters

| Name | Type |
| :------ | :------ |
| `completion` | [`CompletionWithDescription`](../interfaces/neuroglancer_util_completion.CompletionWithDescription.md) |

#### Returns

[`HTMLDivElement`](main_module._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:61](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/multiline_autocomplete.ts#L61)

___

### makeDefaultCompletionElement

▸ **makeDefaultCompletionElement**(`completion`): [`HTMLDivElement`](main_module._internal_.md#htmldivelement)

#### Parameters

| Name | Type |
| :------ | :------ |
| `completion` | [`Completion`](../interfaces/neuroglancer_util_completion.Completion.md) |

#### Returns

[`HTMLDivElement`](main_module._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/multiline_autocomplete.ts#L42)
