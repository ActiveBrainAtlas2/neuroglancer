[neuroglancer](../README.md) / [Modules](../modules.md) / [widget/multiline\_autocomplete](../modules/widget_multiline_autocomplete.md) / AutocompleteTextInput

# Class: AutocompleteTextInput

[widget/multiline_autocomplete](../modules/widget_multiline_autocomplete.md).AutocompleteTextInput

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`AutocompleteTextInput`**

  ↳↳ [`StateAutocomplete`](services_state_loader.StateAutocomplete.md)

  ↳↳ [`SourceUrlAutocomplete`](ui_layer_data_sources_tab._internal_.SourceUrlAutocomplete.md)

## Table of contents

### Constructors

- [constructor](widget_multiline_autocomplete.AutocompleteTextInput.md#constructor)

### Properties

- [activeCompletionCancellationToken](widget_multiline_autocomplete.AutocompleteTextInput.md#activecompletioncancellationtoken)
- [activeCompletionPromise](widget_multiline_autocomplete.AutocompleteTextInput.md#activecompletionpromise)
- [activeIndex](widget_multiline_autocomplete.AutocompleteTextInput.md#activeindex)
- [commonPrefix](widget_multiline_autocomplete.AutocompleteTextInput.md#commonprefix)
- [completer](widget_multiline_autocomplete.AutocompleteTextInput.md#completer)
- [completionDisabled](widget_multiline_autocomplete.AutocompleteTextInput.md#completiondisabled)
- [completionResult](widget_multiline_autocomplete.AutocompleteTextInput.md#completionresult)
- [completionsVirtualList](widget_multiline_autocomplete.AutocompleteTextInput.md#completionsvirtuallist)
- [completionsVisible](widget_multiline_autocomplete.AutocompleteTextInput.md#completionsvisible)
- [debouncedUpdateHintState](widget_multiline_autocomplete.AutocompleteTextInput.md#debouncedupdatehintstate)
- [disposedStacks](widget_multiline_autocomplete.AutocompleteTextInput.md#disposedstacks)
- [dropdownContentsStale](widget_multiline_autocomplete.AutocompleteTextInput.md#dropdowncontentsstale)
- [dropdownStyleStale](widget_multiline_autocomplete.AutocompleteTextInput.md#dropdownstylestale)
- [element](widget_multiline_autocomplete.AutocompleteTextInput.md#element)
- [hasFocus](widget_multiline_autocomplete.AutocompleteTextInput.md#hasfocus)
- [hasResultForDropdown](widget_multiline_autocomplete.AutocompleteTextInput.md#hasresultfordropdown)
- [hintElement](widget_multiline_autocomplete.AutocompleteTextInput.md#hintelement)
- [inputElement](widget_multiline_autocomplete.AutocompleteTextInput.md#inputelement)
- [onCommit](widget_multiline_autocomplete.AutocompleteTextInput.md#oncommit)
- [onInput](widget_multiline_autocomplete.AutocompleteTextInput.md#oninput)
- [prevInputValue](widget_multiline_autocomplete.AutocompleteTextInput.md#previnputvalue)
- [refCount](widget_multiline_autocomplete.AutocompleteTextInput.md#refcount)
- [resizeObserver](widget_multiline_autocomplete.AutocompleteTextInput.md#resizeobserver)
- [scheduleUpdateCompletions](widget_multiline_autocomplete.AutocompleteTextInput.md#scheduleupdatecompletions)
- [wasDisposed](widget_multiline_autocomplete.AutocompleteTextInput.md#wasdisposed)

### Accessors

- [placeholder](widget_multiline_autocomplete.AutocompleteTextInput.md#placeholder)
- [value](widget_multiline_autocomplete.AutocompleteTextInput.md#value)

### Methods

- [addRef](widget_multiline_autocomplete.AutocompleteTextInput.md#addref)
- [cancel](widget_multiline_autocomplete.AutocompleteTextInput.md#cancel)
- [cancelActiveCompletion](widget_multiline_autocomplete.AutocompleteTextInput.md#cancelactivecompletion)
- [clearCompletions](widget_multiline_autocomplete.AutocompleteTextInput.md#clearcompletions)
- [cycleActiveCompletion](widget_multiline_autocomplete.AutocompleteTextInput.md#cycleactivecompletion)
- [disableCompletion](widget_multiline_autocomplete.AutocompleteTextInput.md#disablecompletion)
- [dispose](widget_multiline_autocomplete.AutocompleteTextInput.md#dispose)
- [disposed](widget_multiline_autocomplete.AutocompleteTextInput.md#disposed)
- [getCompletedValue](widget_multiline_autocomplete.AutocompleteTextInput.md#getcompletedvalue)
- [getCompletedValueByIndex](widget_multiline_autocomplete.AutocompleteTextInput.md#getcompletedvaluebyindex)
- [getSelectionRange](widget_multiline_autocomplete.AutocompleteTextInput.md#getselectionrange)
- [handleDropdownClick](widget_multiline_autocomplete.AutocompleteTextInput.md#handledropdownclick)
- [hideCompletions](widget_multiline_autocomplete.AutocompleteTextInput.md#hidecompletions)
- [moveCaretToBeginningOfInput](widget_multiline_autocomplete.AutocompleteTextInput.md#movecarettobeginningofinput)
- [moveCaretToEndOfInput](widget_multiline_autocomplete.AutocompleteTextInput.md#movecarettoendofinput)
- [refCountReachedZero](widget_multiline_autocomplete.AutocompleteTextInput.md#refcountreachedzero)
- [registerCancellable](widget_multiline_autocomplete.AutocompleteTextInput.md#registercancellable)
- [registerDisposer](widget_multiline_autocomplete.AutocompleteTextInput.md#registerdisposer)
- [registerEventListener](widget_multiline_autocomplete.AutocompleteTextInput.md#registereventlistener)
- [resizeHandler](widget_multiline_autocomplete.AutocompleteTextInput.md#resizehandler)
- [selectActiveCompletion](widget_multiline_autocomplete.AutocompleteTextInput.md#selectactivecompletion)
- [selectCompletion](widget_multiline_autocomplete.AutocompleteTextInput.md#selectcompletion)
- [setActiveIndex](widget_multiline_autocomplete.AutocompleteTextInput.md#setactiveindex)
- [setCompletions](widget_multiline_autocomplete.AutocompleteTextInput.md#setcompletions)
- [setHintValue](widget_multiline_autocomplete.AutocompleteTextInput.md#sethintvalue)
- [setValueAndSelection](widget_multiline_autocomplete.AutocompleteTextInput.md#setvalueandselection)
- [shouldAttemptCompletion](widget_multiline_autocomplete.AutocompleteTextInput.md#shouldattemptcompletion)
- [shouldShowDropdown](widget_multiline_autocomplete.AutocompleteTextInput.md#shouldshowdropdown)
- [unregisterDisposer](widget_multiline_autocomplete.AutocompleteTextInput.md#unregisterdisposer)
- [updateDropdown](widget_multiline_autocomplete.AutocompleteTextInput.md#updatedropdown)
- [updateDropdownStyle](widget_multiline_autocomplete.AutocompleteTextInput.md#updatedropdownstyle)
- [updateHintState](widget_multiline_autocomplete.AutocompleteTextInput.md#updatehintstate)

## Constructors

### constructor

• **new AutocompleteTextInput**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.completer` | [`Completer`](../modules/widget_multiline_autocomplete.md#completer) |
| `options.delay?` | `number` |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/multiline_autocomplete.ts#L199)

## Properties

### activeCompletionCancellationToken

• `Private` **activeCompletionCancellationToken**: `undefined` \| [`CancellationTokenSource`](util_cancellation.CancellationTokenSource.md) = `undefined`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:97](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/multiline_autocomplete.ts#L97)

___

### activeCompletionPromise

• `Private` **activeCompletionPromise**: ``null`` \| `Promise`<[`CompletionResult`](../interfaces/widget_multiline_autocomplete.CompletionResult.md)\> = `null`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:96](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/multiline_autocomplete.ts#L96)

___

### activeIndex

• `Private` **activeIndex**: `number` = `-1`

Index of the active completion.  The active completion is displayed as the hint text and is
highlighted in the dropdown.

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:185](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/multiline_autocomplete.ts#L185)

___

### commonPrefix

• `Private` **commonPrefix**: `string` = `''`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:102](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/multiline_autocomplete.ts#L102)

___

### completer

• **completer**: [`Completer`](../modules/widget_multiline_autocomplete.md#completer)

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:190](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/multiline_autocomplete.ts#L190)

___

### completionDisabled

• `Private` **completionDisabled**: `number` = `-1`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:103](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/multiline_autocomplete.ts#L103)

___

### completionResult

• `Private` **completionResult**: ``null`` \| [`CompletionResult`](../interfaces/widget_multiline_autocomplete.CompletionResult.md) = `null`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:99](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/multiline_autocomplete.ts#L99)

___

### completionsVirtualList

• `Private` **completionsVirtualList**: `undefined` \| [`VirtualList`](widget_virtual_list.VirtualList.md) = `undefined`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:91](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/multiline_autocomplete.ts#L91)

___

### completionsVisible

• `Private` **completionsVisible**: `boolean` = `false`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/multiline_autocomplete.ts#L95)

___

### debouncedUpdateHintState

• `Private` **debouncedUpdateHintState**: [`DebouncedFunc`](../interfaces/annotation_annotation_layer_state._internal_.DebouncedFunc.md)<() => `void`\>

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:392](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/multiline_autocomplete.ts#L392)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### dropdownContentsStale

• `Private` **dropdownContentsStale**: `boolean` = `true`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/multiline_autocomplete.ts#L100)

___

### dropdownStyleStale

• `Private` **dropdownStyleStale**: `boolean` = `true`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:187](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/multiline_autocomplete.ts#L187)

___

### element

• **element**: [`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:88](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/multiline_autocomplete.ts#L88)

___

### hasFocus

• `Private` **hasFocus**: `boolean` = `false`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:98](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/multiline_autocomplete.ts#L98)

___

### hasResultForDropdown

• `Private` **hasResultForDropdown**: `boolean` = `false`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:101](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/multiline_autocomplete.ts#L101)

___

### hintElement

• **hintElement**: [`HTMLSpanElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlspanelement)

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:90](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/multiline_autocomplete.ts#L90)

___

### inputElement

• **inputElement**: [`HTMLSpanElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlspanelement)

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:89](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/multiline_autocomplete.ts#L89)

___

### onCommit

• **onCommit**: [`Signal`](util_signal.Signal.md)<(`value`: `string`, `explicit`: `boolean`) => `void`\>

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:92](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/multiline_autocomplete.ts#L92)

___

### onInput

• **onInput**: [`Signal`](util_signal.Signal.md)<(`value`: `string`) => `void`\>

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:93](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/multiline_autocomplete.ts#L93)

___

### prevInputValue

• `Private` **prevInputValue**: `undefined` \| `string` = `''`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:94](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/multiline_autocomplete.ts#L94)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### resizeObserver

• `Private` **resizeObserver**: [`ResizeObserver`](../modules/annotation_annotation_layer_state._internal_.md#resizeobserver)

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:197](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/multiline_autocomplete.ts#L197)

___

### scheduleUpdateCompletions

• `Private` **scheduleUpdateCompletions**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:189](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/multiline_autocomplete.ts#L189)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### placeholder

• `get` **placeholder**(): `string`

#### Returns

`string`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:113](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/multiline_autocomplete.ts#L113)

• `set` **placeholder**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:118](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/multiline_autocomplete.ts#L118)

___

### value

• `get` **value**(): `string`

#### Returns

`string`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:724](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/multiline_autocomplete.ts#L724)

• `set` **value**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:728](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/multiline_autocomplete.ts#L728)

## Methods

### addRef

▸ **addRef**(): [`AutocompleteTextInput`](widget_multiline_autocomplete.AutocompleteTextInput.md)

#### Returns

[`AutocompleteTextInput`](widget_multiline_autocomplete.AutocompleteTextInput.md)

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[addRef](util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### cancel

▸ **cancel**(): `boolean`

Called when user presses escape.  Does nothing here, but may be overridden in a subclass.

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:694](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/multiline_autocomplete.ts#L694)

___

### cancelActiveCompletion

▸ `Private` **cancelActiveCompletion**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:698](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/multiline_autocomplete.ts#L698)

___

### clearCompletions

▸ `Private` **clearCompletions**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:708](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/multiline_autocomplete.ts#L708)

___

### cycleActiveCompletion

▸ **cycleActiveCompletion**(`delta`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `delta` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:427](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/multiline_autocomplete.ts#L427)

___

### disableCompletion

▸ **disableCompletion**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:105](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/multiline_autocomplete.ts#L105)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[dispose](util_disposable.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[disposed](util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:736](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/multiline_autocomplete.ts#L736)

___

### getCompletedValue

▸ `Private` **getCompletedValue**(`completionValue`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `completionValue` | `string` |

#### Returns

`string`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:618](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/multiline_autocomplete.ts#L618)

___

### getCompletedValueByIndex

▸ `Private` **getCompletedValueByIndex**(`index`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`string`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:614](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/multiline_autocomplete.ts#L614)

___

### getSelectionRange

▸ `Private` **getSelectionRange**(): `undefined` \| { `begin`: `number` ; `end`: `number`  }

#### Returns

`undefined` \| { `begin`: `number` ; `end`: `number`  }

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:122](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/multiline_autocomplete.ts#L122)

___

### handleDropdownClick

▸ `Private` **handleDropdownClick**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`MouseEvent`](../modules/annotation_annotation_layer_state._internal_.md#mouseevent) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:412](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/multiline_autocomplete.ts#L412)

___

### hideCompletions

▸ **hideCompletions**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:386](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/multiline_autocomplete.ts#L386)

___

### moveCaretToBeginningOfInput

▸ `Private` **moveCaretToBeginningOfInput**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:625](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/multiline_autocomplete.ts#L625)

___

### moveCaretToEndOfInput

▸ `Private` **moveCaretToEndOfInput**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:638](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/multiline_autocomplete.ts#L638)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCountReachedZero](util_disposable.RefCounted.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L66)

___

### registerCancellable

▸ **registerCancellable**<`T`\>(`cancellable`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cancellable` | `T` |

#### Returns

`T`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[registerCancellable](util_disposable.RefCounted.md#registercancellable)

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L100)

___

### registerDisposer

▸ **registerDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/util_disposable.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[registerDisposer](util_disposable.RefCounted.md#registerdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L76)

___

### registerEventListener

▸ **registerEventListener**(`target`, `type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EventTarget`](../modules/annotation_annotation_layer_state._internal_.md#eventtarget) |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/annotation_annotation_layer_state._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](../interfaces/annotation_annotation_layer_state._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[registerEventListener](util_disposable.RefCounted.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L95)

___

### resizeHandler

▸ `Private` **resizeHandler**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/multiline_autocomplete.ts#L192)

___

### selectActiveCompletion

▸ **selectActiveCompletion**(`allowPrefix`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `allowPrefix` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:658](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/multiline_autocomplete.ts#L658)

___

### selectCompletion

▸ **selectCompletion**(`index`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:686](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/multiline_autocomplete.ts#L686)

___

### setActiveIndex

▸ `Private` **setActiveIndex**(`index`): `void`

This sets the active completion, which causes it to be highlighted and displayed as the hint.
Additionally, if the user hits tab then it is chosen.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:588](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/multiline_autocomplete.ts#L588)

___

### setCompletions

▸ `Private` **setCompletions**(`completionResult`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `completionResult` | [`CompletionResult`](../interfaces/widget_multiline_autocomplete.CompletionResult.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:519](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/multiline_autocomplete.ts#L519)

___

### setHintValue

▸ **setHintValue**(`hintValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `hintValue` | `string` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:562](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/multiline_autocomplete.ts#L562)

___

### setValueAndSelection

▸ **setValueAndSelection**(`value`, `selection?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `string` | `undefined` |
| `selection` | `undefined` \| { `begin`: `number` ; `end`: `number`  } | `undefined` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:136](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/multiline_autocomplete.ts#L136)

___

### shouldAttemptCompletion

▸ `Private` **shouldAttemptCompletion**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:377](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/multiline_autocomplete.ts#L377)

___

### shouldShowDropdown

▸ `Private` **shouldShowDropdown**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:445](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/multiline_autocomplete.ts#L445)

___

### unregisterDisposer

▸ **unregisterDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/util_disposable.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[unregisterDisposer](util_disposable.RefCounted.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)

___

### updateDropdown

▸ `Private` **updateDropdown**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:461](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/multiline_autocomplete.ts#L461)

___

### updateDropdownStyle

▸ `Private` **updateDropdownStyle**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:453](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/multiline_autocomplete.ts#L453)

___

### updateHintState

▸ `Private` **updateHintState**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:395](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/multiline_autocomplete.ts#L395)
