[neuroglancer](../README.md) / [Modules](../modules.md) / [viewer](../modules/viewer.md) / [<internal\>](../modules/viewer._internal_.md) / StateAutocomplete

# Class: StateAutocomplete

[viewer](../modules/viewer.md).[<internal>](../modules/viewer._internal_.md).StateAutocomplete

## Hierarchy

- [`AutocompleteTextInput`](viewer._internal_.AutocompleteTextInput.md)

  ↳ **`StateAutocomplete`**

## Table of contents

### Constructors

- [constructor](viewer._internal_.StateAutocomplete.md#constructor)

### Properties

- [\_allCompletions](viewer._internal_.StateAutocomplete.md#_allcompletions)
- [completer](viewer._internal_.StateAutocomplete.md#completer)
- [curCompletions](viewer._internal_.StateAutocomplete.md#curcompletions)
- [disposedStacks](viewer._internal_.StateAutocomplete.md#disposedstacks)
- [element](viewer._internal_.StateAutocomplete.md#element)
- [hintElement](viewer._internal_.StateAutocomplete.md#hintelement)
- [inputElement](viewer._internal_.StateAutocomplete.md#inputelement)
- [onCommit](viewer._internal_.StateAutocomplete.md#oncommit)
- [onInput](viewer._internal_.StateAutocomplete.md#oninput)
- [refCount](viewer._internal_.StateAutocomplete.md#refcount)
- [wasDisposed](viewer._internal_.StateAutocomplete.md#wasdisposed)

### Accessors

- [allCompletions](viewer._internal_.StateAutocomplete.md#allcompletions)
- [placeholder](viewer._internal_.StateAutocomplete.md#placeholder)
- [value](viewer._internal_.StateAutocomplete.md#value)

### Methods

- [addRef](viewer._internal_.StateAutocomplete.md#addref)
- [cancel](viewer._internal_.StateAutocomplete.md#cancel)
- [cycleActiveCompletion](viewer._internal_.StateAutocomplete.md#cycleactivecompletion)
- [disableCompletion](viewer._internal_.StateAutocomplete.md#disablecompletion)
- [disableCompletions](viewer._internal_.StateAutocomplete.md#disablecompletions)
- [dispose](viewer._internal_.StateAutocomplete.md#dispose)
- [disposed](viewer._internal_.StateAutocomplete.md#disposed)
- [hideCompletions](viewer._internal_.StateAutocomplete.md#hidecompletions)
- [refCountReachedZero](viewer._internal_.StateAutocomplete.md#refcountreachedzero)
- [registerCancellable](viewer._internal_.StateAutocomplete.md#registercancellable)
- [registerDisposer](viewer._internal_.StateAutocomplete.md#registerdisposer)
- [registerEventListener](viewer._internal_.StateAutocomplete.md#registereventlistener)
- [selectActiveCompletion](viewer._internal_.StateAutocomplete.md#selectactivecompletion)
- [selectCompletion](viewer._internal_.StateAutocomplete.md#selectcompletion)
- [setHintValue](viewer._internal_.StateAutocomplete.md#sethintvalue)
- [setValueAndSelection](viewer._internal_.StateAutocomplete.md#setvalueandselection)
- [unregisterDisposer](viewer._internal_.StateAutocomplete.md#unregisterdisposer)

## Constructors

### constructor

• **new StateAutocomplete**(`viewer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `viewer` | [`Viewer`](viewer.Viewer.md) |

#### Overrides

[AutocompleteTextInput](viewer._internal_.AutocompleteTextInput.md).[constructor](viewer._internal_.AutocompleteTextInput.md#constructor)

#### Defined in

[src/neuroglancer/services/state_loader.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/services/state_loader.ts#L76)

## Properties

### \_allCompletions

• **\_allCompletions**: [`CompletionWithState`](../interfaces/viewer._internal_.CompletionWithState.md)[] = `[]`

#### Defined in

[src/neuroglancer/services/state_loader.ts:73](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/services/state_loader.ts#L73)

___

### completer

• **completer**: [`Completer`](../modules/viewer._internal_.md#completer)

#### Inherited from

[AutocompleteTextInput](viewer._internal_.AutocompleteTextInput.md).[completer](viewer._internal_.AutocompleteTextInput.md#completer)

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:190](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/multiline_autocomplete.ts#L190)

___

### curCompletions

• `Private` **curCompletions**: [`CompletionWithState`](../interfaces/viewer._internal_.CompletionWithState.md)[] = `[]`

#### Defined in

[src/neuroglancer/services/state_loader.ts:74](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/services/state_loader.ts#L74)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[AutocompleteTextInput](viewer._internal_.AutocompleteTextInput.md).[disposedStacks](viewer._internal_.AutocompleteTextInput.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: [`HTMLDivElement`](../modules/axes_lines._internal_.md#htmldivelement)

#### Inherited from

[AutocompleteTextInput](viewer._internal_.AutocompleteTextInput.md).[element](viewer._internal_.AutocompleteTextInput.md#element)

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:88](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/multiline_autocomplete.ts#L88)

___

### hintElement

• **hintElement**: [`HTMLSpanElement`](../modules/axes_lines._internal_.md#htmlspanelement)

#### Inherited from

[AutocompleteTextInput](viewer._internal_.AutocompleteTextInput.md).[hintElement](viewer._internal_.AutocompleteTextInput.md#hintelement)

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:90](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/multiline_autocomplete.ts#L90)

___

### inputElement

• **inputElement**: [`HTMLSpanElement`](../modules/axes_lines._internal_.md#htmlspanelement)

#### Inherited from

[AutocompleteTextInput](viewer._internal_.AutocompleteTextInput.md).[inputElement](viewer._internal_.AutocompleteTextInput.md#inputelement)

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:89](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/multiline_autocomplete.ts#L89)

___

### onCommit

• **onCommit**: [`Signal`](coordinate_transform._internal_.Signal.md)<(`value`: `string`, `explicit`: `boolean`) => `void`\>

#### Inherited from

[AutocompleteTextInput](viewer._internal_.AutocompleteTextInput.md).[onCommit](viewer._internal_.AutocompleteTextInput.md#oncommit)

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:92](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/multiline_autocomplete.ts#L92)

___

### onInput

• **onInput**: [`Signal`](coordinate_transform._internal_.Signal.md)<(`value`: `string`) => `void`\>

#### Inherited from

[AutocompleteTextInput](viewer._internal_.AutocompleteTextInput.md).[onInput](viewer._internal_.AutocompleteTextInput.md#oninput)

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:93](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/multiline_autocomplete.ts#L93)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[AutocompleteTextInput](viewer._internal_.AutocompleteTextInput.md).[refCount](viewer._internal_.AutocompleteTextInput.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[AutocompleteTextInput](viewer._internal_.AutocompleteTextInput.md).[wasDisposed](viewer._internal_.AutocompleteTextInput.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### allCompletions

• `get` **allCompletions**(): [`CompletionWithState`](../interfaces/viewer._internal_.CompletionWithState.md)[]

#### Returns

[`CompletionWithState`](../interfaces/viewer._internal_.CompletionWithState.md)[]

#### Defined in

[src/neuroglancer/services/state_loader.ts:119](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/services/state_loader.ts#L119)

• `set` **allCompletions**(`results`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `results` | [`CompletionWithState`](../interfaces/viewer._internal_.CompletionWithState.md)[] |

#### Returns

`void`

#### Defined in

[src/neuroglancer/services/state_loader.ts:115](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/services/state_loader.ts#L115)

___

### placeholder

• `get` **placeholder**(): `string`

#### Returns

`string`

#### Inherited from

AutocompleteTextInput.placeholder

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:113](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/multiline_autocomplete.ts#L113)

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

[src/neuroglancer/widget/multiline_autocomplete.ts:118](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/multiline_autocomplete.ts#L118)

___

### value

• `get` **value**(): `string`

#### Returns

`string`

#### Inherited from

AutocompleteTextInput.value

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:724](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/multiline_autocomplete.ts#L724)

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

[src/neuroglancer/widget/multiline_autocomplete.ts:728](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/multiline_autocomplete.ts#L728)

## Methods

### addRef

▸ **addRef**(): [`StateAutocomplete`](viewer._internal_.StateAutocomplete.md)

#### Returns

[`StateAutocomplete`](viewer._internal_.StateAutocomplete.md)

#### Inherited from

[AutocompleteTextInput](viewer._internal_.AutocompleteTextInput.md).[addRef](viewer._internal_.AutocompleteTextInput.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L48)

___

### cancel

▸ **cancel**(): `boolean`

Called when user presses escape.  Does nothing here, but may be overridden in a subclass.

#### Returns

`boolean`

#### Inherited from

[AutocompleteTextInput](viewer._internal_.AutocompleteTextInput.md).[cancel](viewer._internal_.AutocompleteTextInput.md#cancel)

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:694](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/multiline_autocomplete.ts#L694)

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

[AutocompleteTextInput](viewer._internal_.AutocompleteTextInput.md).[cycleActiveCompletion](viewer._internal_.AutocompleteTextInput.md#cycleactivecompletion)

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:427](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/multiline_autocomplete.ts#L427)

___

### disableCompletion

▸ **disableCompletion**(): `void`

#### Returns

`void`

#### Inherited from

[AutocompleteTextInput](viewer._internal_.AutocompleteTextInput.md).[disableCompletion](viewer._internal_.AutocompleteTextInput.md#disablecompletion)

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:105](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/multiline_autocomplete.ts#L105)

___

### disableCompletions

▸ **disableCompletions**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/services/state_loader.ts:111](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/services/state_loader.ts#L111)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[AutocompleteTextInput](viewer._internal_.AutocompleteTextInput.md).[dispose](viewer._internal_.AutocompleteTextInput.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[AutocompleteTextInput](viewer._internal_.AutocompleteTextInput.md).[disposed](viewer._internal_.AutocompleteTextInput.md#disposed)

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:736](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/multiline_autocomplete.ts#L736)

___

### hideCompletions

▸ **hideCompletions**(): `void`

#### Returns

`void`

#### Inherited from

[AutocompleteTextInput](viewer._internal_.AutocompleteTextInput.md).[hideCompletions](viewer._internal_.AutocompleteTextInput.md#hidecompletions)

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:386](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/multiline_autocomplete.ts#L386)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[AutocompleteTextInput](viewer._internal_.AutocompleteTextInput.md).[refCountReachedZero](viewer._internal_.AutocompleteTextInput.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L66)

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

[AutocompleteTextInput](viewer._internal_.AutocompleteTextInput.md).[registerCancellable](viewer._internal_.AutocompleteTextInput.md#registercancellable)

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L100)

___

### registerDisposer

▸ **registerDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/axes_lines._internal_.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[AutocompleteTextInput](viewer._internal_.AutocompleteTextInput.md).[registerDisposer](viewer._internal_.AutocompleteTextInput.md#registerdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L76)

___

### registerEventListener

▸ **registerEventListener**(`target`, `type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EventTarget`](../modules/axes_lines._internal_.md#eventtarget) |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/axes_lines._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](../interfaces/axes_lines._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

[AutocompleteTextInput](viewer._internal_.AutocompleteTextInput.md).[registerEventListener](viewer._internal_.AutocompleteTextInput.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L95)

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

[AutocompleteTextInput](viewer._internal_.AutocompleteTextInput.md).[selectActiveCompletion](viewer._internal_.AutocompleteTextInput.md#selectactivecompletion)

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:658](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/multiline_autocomplete.ts#L658)

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

[AutocompleteTextInput](viewer._internal_.AutocompleteTextInput.md).[selectCompletion](viewer._internal_.AutocompleteTextInput.md#selectcompletion)

#### Defined in

[src/neuroglancer/services/state_loader.ts:99](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/services/state_loader.ts#L99)

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

[AutocompleteTextInput](viewer._internal_.AutocompleteTextInput.md).[setHintValue](viewer._internal_.AutocompleteTextInput.md#sethintvalue)

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:562](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/multiline_autocomplete.ts#L562)

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

[AutocompleteTextInput](viewer._internal_.AutocompleteTextInput.md).[setValueAndSelection](viewer._internal_.AutocompleteTextInput.md#setvalueandselection)

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:136](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/multiline_autocomplete.ts#L136)

___

### unregisterDisposer

▸ **unregisterDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/axes_lines._internal_.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[AutocompleteTextInput](viewer._internal_.AutocompleteTextInput.md).[unregisterDisposer](viewer._internal_.AutocompleteTextInput.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L85)
