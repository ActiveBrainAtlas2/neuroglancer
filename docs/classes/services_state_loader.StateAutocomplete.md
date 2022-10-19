[neuroglancer](../README.md) / [Modules](../modules.md) / [services/state\_loader](../modules/services_state_loader.md) / StateAutocomplete

# Class: StateAutocomplete

[services/state_loader](../modules/services_state_loader.md).StateAutocomplete

## Hierarchy

- [`AutocompleteTextInput`](widget_multiline_autocomplete.AutocompleteTextInput.md)

  ↳ **`StateAutocomplete`**

## Table of contents

### Constructors

- [constructor](services_state_loader.StateAutocomplete.md#constructor)

### Properties

- [\_allCompletions](services_state_loader.StateAutocomplete.md#_allcompletions)
- [completer](services_state_loader.StateAutocomplete.md#completer)
- [curCompletions](services_state_loader.StateAutocomplete.md#curcompletions)
- [disposedStacks](services_state_loader.StateAutocomplete.md#disposedstacks)
- [element](services_state_loader.StateAutocomplete.md#element)
- [hintElement](services_state_loader.StateAutocomplete.md#hintelement)
- [inputElement](services_state_loader.StateAutocomplete.md#inputelement)
- [onCommit](services_state_loader.StateAutocomplete.md#oncommit)
- [onInput](services_state_loader.StateAutocomplete.md#oninput)
- [refCount](services_state_loader.StateAutocomplete.md#refcount)
- [wasDisposed](services_state_loader.StateAutocomplete.md#wasdisposed)

### Accessors

- [allCompletions](services_state_loader.StateAutocomplete.md#allcompletions)
- [placeholder](services_state_loader.StateAutocomplete.md#placeholder)
- [value](services_state_loader.StateAutocomplete.md#value)

### Methods

- [addRef](services_state_loader.StateAutocomplete.md#addref)
- [cancel](services_state_loader.StateAutocomplete.md#cancel)
- [cycleActiveCompletion](services_state_loader.StateAutocomplete.md#cycleactivecompletion)
- [disableCompletion](services_state_loader.StateAutocomplete.md#disablecompletion)
- [disableCompletions](services_state_loader.StateAutocomplete.md#disablecompletions)
- [dispose](services_state_loader.StateAutocomplete.md#dispose)
- [disposed](services_state_loader.StateAutocomplete.md#disposed)
- [hideCompletions](services_state_loader.StateAutocomplete.md#hidecompletions)
- [refCountReachedZero](services_state_loader.StateAutocomplete.md#refcountreachedzero)
- [registerCancellable](services_state_loader.StateAutocomplete.md#registercancellable)
- [registerDisposer](services_state_loader.StateAutocomplete.md#registerdisposer)
- [registerEventListener](services_state_loader.StateAutocomplete.md#registereventlistener)
- [selectActiveCompletion](services_state_loader.StateAutocomplete.md#selectactivecompletion)
- [selectCompletion](services_state_loader.StateAutocomplete.md#selectcompletion)
- [setHintValue](services_state_loader.StateAutocomplete.md#sethintvalue)
- [setValueAndSelection](services_state_loader.StateAutocomplete.md#setvalueandselection)
- [unregisterDisposer](services_state_loader.StateAutocomplete.md#unregisterdisposer)

## Constructors

### constructor

• **new StateAutocomplete**(`viewer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `viewer` | [`Viewer`](datasource_state_share._internal_.Viewer.md) |

#### Overrides

[AutocompleteTextInput](widget_multiline_autocomplete.AutocompleteTextInput.md).[constructor](widget_multiline_autocomplete.AutocompleteTextInput.md#constructor)

#### Defined in

[src/neuroglancer/services/state_loader.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/services/state_loader.ts#L76)

## Properties

### \_allCompletions

• **\_allCompletions**: [`CompletionWithState`](../interfaces/services_state_loader._internal_.CompletionWithState.md)[] = `[]`

#### Defined in

[src/neuroglancer/services/state_loader.ts:73](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/services/state_loader.ts#L73)

___

### completer

• **completer**: [`Completer`](../modules/widget_multiline_autocomplete.md#completer)

#### Inherited from

[AutocompleteTextInput](widget_multiline_autocomplete.AutocompleteTextInput.md).[completer](widget_multiline_autocomplete.AutocompleteTextInput.md#completer)

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:190](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/multiline_autocomplete.ts#L190)

___

### curCompletions

• `Private` **curCompletions**: [`CompletionWithState`](../interfaces/services_state_loader._internal_.CompletionWithState.md)[] = `[]`

#### Defined in

[src/neuroglancer/services/state_loader.ts:74](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/services/state_loader.ts#L74)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[AutocompleteTextInput](widget_multiline_autocomplete.AutocompleteTextInput.md).[disposedStacks](widget_multiline_autocomplete.AutocompleteTextInput.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: [`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement)

#### Inherited from

[AutocompleteTextInput](widget_multiline_autocomplete.AutocompleteTextInput.md).[element](widget_multiline_autocomplete.AutocompleteTextInput.md#element)

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:88](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/multiline_autocomplete.ts#L88)

___

### hintElement

• **hintElement**: [`HTMLSpanElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlspanelement)

#### Inherited from

[AutocompleteTextInput](widget_multiline_autocomplete.AutocompleteTextInput.md).[hintElement](widget_multiline_autocomplete.AutocompleteTextInput.md#hintelement)

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:90](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/multiline_autocomplete.ts#L90)

___

### inputElement

• **inputElement**: [`HTMLSpanElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlspanelement)

#### Inherited from

[AutocompleteTextInput](widget_multiline_autocomplete.AutocompleteTextInput.md).[inputElement](widget_multiline_autocomplete.AutocompleteTextInput.md#inputelement)

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:89](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/multiline_autocomplete.ts#L89)

___

### onCommit

• **onCommit**: [`Signal`](util_signal.Signal.md)<(`value`: `string`, `explicit`: `boolean`) => `void`\>

#### Inherited from

[AutocompleteTextInput](widget_multiline_autocomplete.AutocompleteTextInput.md).[onCommit](widget_multiline_autocomplete.AutocompleteTextInput.md#oncommit)

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:92](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/multiline_autocomplete.ts#L92)

___

### onInput

• **onInput**: [`Signal`](util_signal.Signal.md)<(`value`: `string`) => `void`\>

#### Inherited from

[AutocompleteTextInput](widget_multiline_autocomplete.AutocompleteTextInput.md).[onInput](widget_multiline_autocomplete.AutocompleteTextInput.md#oninput)

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:93](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/multiline_autocomplete.ts#L93)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[AutocompleteTextInput](widget_multiline_autocomplete.AutocompleteTextInput.md).[refCount](widget_multiline_autocomplete.AutocompleteTextInput.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[AutocompleteTextInput](widget_multiline_autocomplete.AutocompleteTextInput.md).[wasDisposed](widget_multiline_autocomplete.AutocompleteTextInput.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### allCompletions

• `get` **allCompletions**(): [`CompletionWithState`](../interfaces/services_state_loader._internal_.CompletionWithState.md)[]

#### Returns

[`CompletionWithState`](../interfaces/services_state_loader._internal_.CompletionWithState.md)[]

#### Defined in

[src/neuroglancer/services/state_loader.ts:119](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/services/state_loader.ts#L119)

• `set` **allCompletions**(`results`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `results` | [`CompletionWithState`](../interfaces/services_state_loader._internal_.CompletionWithState.md)[] |

#### Returns

`void`

#### Defined in

[src/neuroglancer/services/state_loader.ts:115](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/services/state_loader.ts#L115)

___

### placeholder

• `get` **placeholder**(): `string`

#### Returns

`string`

#### Inherited from

AutocompleteTextInput.placeholder

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:113](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/multiline_autocomplete.ts#L113)

• `set` **placeholder**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Inherited from

AutocompleteTextInput.placeholder

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:118](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/multiline_autocomplete.ts#L118)

___

### value

• `get` **value**(): `string`

#### Returns

`string`

#### Inherited from

AutocompleteTextInput.value

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:724](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/multiline_autocomplete.ts#L724)

• `set` **value**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Inherited from

AutocompleteTextInput.value

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:728](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/multiline_autocomplete.ts#L728)

## Methods

### addRef

▸ **addRef**(): [`StateAutocomplete`](services_state_loader.StateAutocomplete.md)

#### Returns

[`StateAutocomplete`](services_state_loader.StateAutocomplete.md)

#### Inherited from

[AutocompleteTextInput](widget_multiline_autocomplete.AutocompleteTextInput.md).[addRef](widget_multiline_autocomplete.AutocompleteTextInput.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### cancel

▸ **cancel**(): `boolean`

Called when user presses escape.  Does nothing here, but may be overridden in a subclass.

#### Returns

`boolean`

#### Inherited from

[AutocompleteTextInput](widget_multiline_autocomplete.AutocompleteTextInput.md).[cancel](widget_multiline_autocomplete.AutocompleteTextInput.md#cancel)

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:694](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/multiline_autocomplete.ts#L694)

___

### cycleActiveCompletion

▸ **cycleActiveCompletion**(`delta`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `delta` | `number` |

#### Returns

`void`

#### Inherited from

[AutocompleteTextInput](widget_multiline_autocomplete.AutocompleteTextInput.md).[cycleActiveCompletion](widget_multiline_autocomplete.AutocompleteTextInput.md#cycleactivecompletion)

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:427](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/multiline_autocomplete.ts#L427)

___

### disableCompletion

▸ **disableCompletion**(): `void`

#### Returns

`void`

#### Inherited from

[AutocompleteTextInput](widget_multiline_autocomplete.AutocompleteTextInput.md).[disableCompletion](widget_multiline_autocomplete.AutocompleteTextInput.md#disablecompletion)

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:105](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/multiline_autocomplete.ts#L105)

___

### disableCompletions

▸ **disableCompletions**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/services/state_loader.ts:111](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/services/state_loader.ts#L111)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[AutocompleteTextInput](widget_multiline_autocomplete.AutocompleteTextInput.md).[dispose](widget_multiline_autocomplete.AutocompleteTextInput.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[AutocompleteTextInput](widget_multiline_autocomplete.AutocompleteTextInput.md).[disposed](widget_multiline_autocomplete.AutocompleteTextInput.md#disposed)

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:736](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/multiline_autocomplete.ts#L736)

___

### hideCompletions

▸ **hideCompletions**(): `void`

#### Returns

`void`

#### Inherited from

[AutocompleteTextInput](widget_multiline_autocomplete.AutocompleteTextInput.md).[hideCompletions](widget_multiline_autocomplete.AutocompleteTextInput.md#hidecompletions)

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:386](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/multiline_autocomplete.ts#L386)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[AutocompleteTextInput](widget_multiline_autocomplete.AutocompleteTextInput.md).[refCountReachedZero](widget_multiline_autocomplete.AutocompleteTextInput.md#refcountreachedzero)

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

[AutocompleteTextInput](widget_multiline_autocomplete.AutocompleteTextInput.md).[registerCancellable](widget_multiline_autocomplete.AutocompleteTextInput.md#registercancellable)

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

[AutocompleteTextInput](widget_multiline_autocomplete.AutocompleteTextInput.md).[registerDisposer](widget_multiline_autocomplete.AutocompleteTextInput.md#registerdisposer)

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

[AutocompleteTextInput](widget_multiline_autocomplete.AutocompleteTextInput.md).[registerEventListener](widget_multiline_autocomplete.AutocompleteTextInput.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L95)

___

### selectActiveCompletion

▸ **selectActiveCompletion**(`allowPrefix`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `allowPrefix` | `boolean` |

#### Returns

`boolean`

#### Inherited from

[AutocompleteTextInput](widget_multiline_autocomplete.AutocompleteTextInput.md).[selectActiveCompletion](widget_multiline_autocomplete.AutocompleteTextInput.md#selectactivecompletion)

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

#### Overrides

[AutocompleteTextInput](widget_multiline_autocomplete.AutocompleteTextInput.md).[selectCompletion](widget_multiline_autocomplete.AutocompleteTextInput.md#selectcompletion)

#### Defined in

[src/neuroglancer/services/state_loader.ts:99](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/services/state_loader.ts#L99)

___

### setHintValue

▸ **setHintValue**(`hintValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `hintValue` | `string` |

#### Returns

`void`

#### Inherited from

[AutocompleteTextInput](widget_multiline_autocomplete.AutocompleteTextInput.md).[setHintValue](widget_multiline_autocomplete.AutocompleteTextInput.md#sethintvalue)

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

#### Inherited from

[AutocompleteTextInput](widget_multiline_autocomplete.AutocompleteTextInput.md).[setValueAndSelection](widget_multiline_autocomplete.AutocompleteTextInput.md#setvalueandselection)

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:136](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/multiline_autocomplete.ts#L136)

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

[AutocompleteTextInput](widget_multiline_autocomplete.AutocompleteTextInput.md).[unregisterDisposer](widget_multiline_autocomplete.AutocompleteTextInput.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)
