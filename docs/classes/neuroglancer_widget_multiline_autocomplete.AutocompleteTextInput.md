[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/widget/multiline\_autocomplete](../modules/neuroglancer_widget_multiline_autocomplete.md) / AutocompleteTextInput

# Class: AutocompleteTextInput

[neuroglancer/widget/multiline_autocomplete](../modules/neuroglancer_widget_multiline_autocomplete.md).AutocompleteTextInput

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`AutocompleteTextInput`**

  ↳↳ [`StateAutocomplete`](neuroglancer_services_state_loader.StateAutocomplete.md)

  ↳↳ [`SourceUrlAutocomplete`](neuroglancer_ui_layer_data_sources_tab._internal_.SourceUrlAutocomplete.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#constructor)

### Properties

- [activeCompletionCancellationToken](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#activecompletioncancellationtoken)
- [activeCompletionPromise](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#activecompletionpromise)
- [activeIndex](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#activeindex)
- [commonPrefix](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#commonprefix)
- [completer](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#completer)
- [completionDisabled](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#completiondisabled)
- [completionResult](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#completionresult)
- [completionsVirtualList](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#completionsvirtuallist)
- [completionsVisible](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#completionsvisible)
- [debouncedUpdateHintState](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#debouncedupdatehintstate)
- [disposedStacks](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#disposedstacks)
- [dropdownContentsStale](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#dropdowncontentsstale)
- [dropdownStyleStale](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#dropdownstylestale)
- [element](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#element)
- [hasFocus](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#hasfocus)
- [hasResultForDropdown](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#hasresultfordropdown)
- [hintElement](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#hintelement)
- [inputElement](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#inputelement)
- [onCommit](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#oncommit)
- [onInput](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#oninput)
- [prevInputValue](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#previnputvalue)
- [refCount](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#refcount)
- [resizeObserver](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#resizeobserver)
- [scheduleUpdateCompletions](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#scheduleupdatecompletions)
- [wasDisposed](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#wasdisposed)

### Accessors

- [placeholder](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#placeholder)
- [value](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#value)

### Methods

- [addRef](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#addref)
- [cancel](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#cancel)
- [cancelActiveCompletion](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#cancelactivecompletion)
- [clearCompletions](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#clearcompletions)
- [cycleActiveCompletion](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#cycleactivecompletion)
- [disableCompletion](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#disablecompletion)
- [dispose](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#dispose)
- [disposed](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#disposed)
- [getCompletedValue](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#getcompletedvalue)
- [getCompletedValueByIndex](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#getcompletedvaluebyindex)
- [getSelectionRange](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#getselectionrange)
- [handleDropdownClick](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#handledropdownclick)
- [hideCompletions](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#hidecompletions)
- [moveCaretToBeginningOfInput](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#movecarettobeginningofinput)
- [moveCaretToEndOfInput](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#movecarettoendofinput)
- [refCountReachedZero](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#refcountreachedzero)
- [registerCancellable](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#registercancellable)
- [registerDisposer](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#registerdisposer)
- [registerEventListener](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#registereventlistener)
- [resizeHandler](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#resizehandler)
- [selectActiveCompletion](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#selectactivecompletion)
- [selectCompletion](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#selectcompletion)
- [setActiveIndex](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#setactiveindex)
- [setCompletions](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#setcompletions)
- [setHintValue](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#sethintvalue)
- [setValueAndSelection](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#setvalueandselection)
- [shouldAttemptCompletion](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#shouldattemptcompletion)
- [shouldShowDropdown](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#shouldshowdropdown)
- [unregisterDisposer](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#unregisterdisposer)
- [updateDropdown](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#updatedropdown)
- [updateDropdownStyle](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#updatedropdownstyle)
- [updateHintState](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#updatehintstate)

## Constructors

### constructor

• **new AutocompleteTextInput**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.completer` | [`Completer`](../modules/neuroglancer_widget_multiline_autocomplete.md#completer) |
| `options.delay?` | `number` |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/multiline_autocomplete.ts#L199)

## Properties

### activeCompletionCancellationToken

• `Private` **activeCompletionCancellationToken**: `undefined` \| [`CancellationTokenSource`](neuroglancer_util_cancellation.CancellationTokenSource.md) = `undefined`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:97](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/multiline_autocomplete.ts#L97)

___

### activeCompletionPromise

• `Private` **activeCompletionPromise**: ``null`` \| `Promise`<[`CompletionResult`](../interfaces/neuroglancer_widget_multiline_autocomplete.CompletionResult.md)\> = `null`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:96](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/multiline_autocomplete.ts#L96)

___

### activeIndex

• `Private` **activeIndex**: `number` = `-1`

Index of the active completion.  The active completion is displayed as the hint text and is
highlighted in the dropdown.

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:185](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/multiline_autocomplete.ts#L185)

___

### commonPrefix

• `Private` **commonPrefix**: `string` = `''`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:102](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/multiline_autocomplete.ts#L102)

___

### completer

• **completer**: [`Completer`](../modules/neuroglancer_widget_multiline_autocomplete.md#completer)

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:190](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/multiline_autocomplete.ts#L190)

___

### completionDisabled

• `Private` **completionDisabled**: `number` = `-1`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:103](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/multiline_autocomplete.ts#L103)

___

### completionResult

• `Private` **completionResult**: ``null`` \| [`CompletionResult`](../interfaces/neuroglancer_widget_multiline_autocomplete.CompletionResult.md) = `null`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:99](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/multiline_autocomplete.ts#L99)

___

### completionsVirtualList

• `Private` **completionsVirtualList**: `undefined` \| [`VirtualList`](neuroglancer_widget_virtual_list.VirtualList.md) = `undefined`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:91](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/multiline_autocomplete.ts#L91)

___

### completionsVisible

• `Private` **completionsVisible**: `boolean` = `false`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/multiline_autocomplete.ts#L95)

___

### debouncedUpdateHintState

• `Private` **debouncedUpdateHintState**: [`DebouncedFunc`](../interfaces/neuroglancer_chunk_manager_backend._internal_.DebouncedFunc.md)<() => `void`\>

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:392](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/multiline_autocomplete.ts#L392)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### dropdownContentsStale

• `Private` **dropdownContentsStale**: `boolean` = `true`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/multiline_autocomplete.ts#L100)

___

### dropdownStyleStale

• `Private` **dropdownStyleStale**: `boolean` = `true`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:187](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/multiline_autocomplete.ts#L187)

___

### element

• **element**: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:88](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/multiline_autocomplete.ts#L88)

___

### hasFocus

• `Private` **hasFocus**: `boolean` = `false`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:98](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/multiline_autocomplete.ts#L98)

___

### hasResultForDropdown

• `Private` **hasResultForDropdown**: `boolean` = `false`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:101](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/multiline_autocomplete.ts#L101)

___

### hintElement

• **hintElement**: [`HTMLSpanElement`](../modules/main_module._internal_.md#htmlspanelement)

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:90](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/multiline_autocomplete.ts#L90)

___

### inputElement

• **inputElement**: [`HTMLSpanElement`](../modules/main_module._internal_.md#htmlspanelement)

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:89](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/multiline_autocomplete.ts#L89)

___

### onCommit

• **onCommit**: [`Signal`](neuroglancer_util_signal.Signal.md)<(`value`: `string`, `explicit`: `boolean`) => `void`\>

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:92](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/multiline_autocomplete.ts#L92)

___

### onInput

• **onInput**: [`Signal`](neuroglancer_util_signal.Signal.md)<(`value`: `string`) => `void`\>

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:93](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/multiline_autocomplete.ts#L93)

___

### prevInputValue

• `Private` **prevInputValue**: `undefined` \| `string` = `''`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:94](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/multiline_autocomplete.ts#L94)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### resizeObserver

• `Private` **resizeObserver**: [`ResizeObserver`](../modules/neuroglancer_display_context._internal_.md#resizeobserver)

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:197](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/multiline_autocomplete.ts#L197)

___

### scheduleUpdateCompletions

• `Private` **scheduleUpdateCompletions**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:189](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/multiline_autocomplete.ts#L189)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### placeholder

• `get` **placeholder**(): `string`

#### Returns

`string`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:113](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/multiline_autocomplete.ts#L113)

• `set` **placeholder**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:118](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/multiline_autocomplete.ts#L118)

___

### value

• `get` **value**(): `string`

#### Returns

`string`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:724](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/multiline_autocomplete.ts#L724)

• `set` **value**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:728](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/multiline_autocomplete.ts#L728)

## Methods

### addRef

▸ **addRef**(): [`AutocompleteTextInput`](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md)

#### Returns

[`AutocompleteTextInput`](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md)

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[addRef](neuroglancer_util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L48)

___

### cancel

▸ **cancel**(): `boolean`

Called when user presses escape.  Does nothing here, but may be overridden in a subclass.

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:694](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/multiline_autocomplete.ts#L694)

___

### cancelActiveCompletion

▸ `Private` **cancelActiveCompletion**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:698](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/multiline_autocomplete.ts#L698)

___

### clearCompletions

▸ `Private` **clearCompletions**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:708](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/multiline_autocomplete.ts#L708)

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

[src/neuroglancer/widget/multiline_autocomplete.ts:427](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/multiline_autocomplete.ts#L427)

___

### disableCompletion

▸ **disableCompletion**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:105](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/multiline_autocomplete.ts#L105)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[dispose](neuroglancer_util_disposable.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposed](neuroglancer_util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:736](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/multiline_autocomplete.ts#L736)

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

[src/neuroglancer/widget/multiline_autocomplete.ts:618](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/multiline_autocomplete.ts#L618)

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

[src/neuroglancer/widget/multiline_autocomplete.ts:614](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/multiline_autocomplete.ts#L614)

___

### getSelectionRange

▸ `Private` **getSelectionRange**(): `undefined` \| { `begin`: `number` ; `end`: `number`  }

#### Returns

`undefined` \| { `begin`: `number` ; `end`: `number`  }

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:122](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/multiline_autocomplete.ts#L122)

___

### handleDropdownClick

▸ `Private` **handleDropdownClick**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`MouseEvent`](../modules/main_module._internal_.md#mouseevent) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:412](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/multiline_autocomplete.ts#L412)

___

### hideCompletions

▸ **hideCompletions**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:386](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/multiline_autocomplete.ts#L386)

___

### moveCaretToBeginningOfInput

▸ `Private` **moveCaretToBeginningOfInput**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:625](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/multiline_autocomplete.ts#L625)

___

### moveCaretToEndOfInput

▸ `Private` **moveCaretToEndOfInput**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:638](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/multiline_autocomplete.ts#L638)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCountReachedZero](neuroglancer_util_disposable.RefCounted.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L66)

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

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[registerCancellable](neuroglancer_util_disposable.RefCounted.md#registercancellable)

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L100)

___

### registerDisposer

▸ **registerDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/neuroglancer_util_disposable.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[registerDisposer](neuroglancer_util_disposable.RefCounted.md#registerdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L76)

___

### registerEventListener

▸ **registerEventListener**(`target`, `type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EventTarget`](../modules/main_module._internal_.md#eventtarget) |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/main_module._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](../interfaces/main_module._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[registerEventListener](neuroglancer_util_disposable.RefCounted.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L95)

___

### resizeHandler

▸ `Private` **resizeHandler**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/multiline_autocomplete.ts#L192)

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

[src/neuroglancer/widget/multiline_autocomplete.ts:658](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/multiline_autocomplete.ts#L658)

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

[src/neuroglancer/widget/multiline_autocomplete.ts:686](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/multiline_autocomplete.ts#L686)

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

[src/neuroglancer/widget/multiline_autocomplete.ts:588](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/multiline_autocomplete.ts#L588)

___

### setCompletions

▸ `Private` **setCompletions**(`completionResult`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `completionResult` | [`CompletionResult`](../interfaces/neuroglancer_widget_multiline_autocomplete.CompletionResult.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:519](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/multiline_autocomplete.ts#L519)

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

[src/neuroglancer/widget/multiline_autocomplete.ts:562](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/multiline_autocomplete.ts#L562)

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

[src/neuroglancer/widget/multiline_autocomplete.ts:136](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/multiline_autocomplete.ts#L136)

___

### shouldAttemptCompletion

▸ `Private` **shouldAttemptCompletion**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:377](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/multiline_autocomplete.ts#L377)

___

### shouldShowDropdown

▸ `Private` **shouldShowDropdown**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:445](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/multiline_autocomplete.ts#L445)

___

### unregisterDisposer

▸ **unregisterDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/neuroglancer_util_disposable.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[unregisterDisposer](neuroglancer_util_disposable.RefCounted.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L85)

___

### updateDropdown

▸ `Private` **updateDropdown**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:461](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/multiline_autocomplete.ts#L461)

___

### updateDropdownStyle

▸ `Private` **updateDropdownStyle**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:453](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/multiline_autocomplete.ts#L453)

___

### updateHintState

▸ `Private` **updateHintState**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:395](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/multiline_autocomplete.ts#L395)
