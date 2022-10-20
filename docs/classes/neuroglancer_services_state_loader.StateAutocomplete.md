[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/services/state\_loader](../modules/neuroglancer_services_state_loader.md) / StateAutocomplete

# Class: StateAutocomplete

[neuroglancer/services/state_loader](../modules/neuroglancer_services_state_loader.md).StateAutocomplete

**`License`**

Copyright 2016 Google Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

## Hierarchy

- [`AutocompleteTextInput`](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md)

  ↳ **`StateAutocomplete`**

## Table of contents

### Constructors

- [constructor](neuroglancer_services_state_loader.StateAutocomplete.md#constructor)

### Properties

- [\_allCompletions](neuroglancer_services_state_loader.StateAutocomplete.md#_allcompletions)
- [completer](neuroglancer_services_state_loader.StateAutocomplete.md#completer)
- [curCompletions](neuroglancer_services_state_loader.StateAutocomplete.md#curcompletions)
- [disposedStacks](neuroglancer_services_state_loader.StateAutocomplete.md#disposedstacks)
- [element](neuroglancer_services_state_loader.StateAutocomplete.md#element)
- [hintElement](neuroglancer_services_state_loader.StateAutocomplete.md#hintelement)
- [inputElement](neuroglancer_services_state_loader.StateAutocomplete.md#inputelement)
- [onCommit](neuroglancer_services_state_loader.StateAutocomplete.md#oncommit)
- [onInput](neuroglancer_services_state_loader.StateAutocomplete.md#oninput)
- [refCount](neuroglancer_services_state_loader.StateAutocomplete.md#refcount)
- [viewer](neuroglancer_services_state_loader.StateAutocomplete.md#viewer)
- [wasDisposed](neuroglancer_services_state_loader.StateAutocomplete.md#wasdisposed)

### Accessors

- [allCompletions](neuroglancer_services_state_loader.StateAutocomplete.md#allcompletions)
- [placeholder](neuroglancer_services_state_loader.StateAutocomplete.md#placeholder)
- [value](neuroglancer_services_state_loader.StateAutocomplete.md#value)

### Methods

- [addRef](neuroglancer_services_state_loader.StateAutocomplete.md#addref)
- [cancel](neuroglancer_services_state_loader.StateAutocomplete.md#cancel)
- [cycleActiveCompletion](neuroglancer_services_state_loader.StateAutocomplete.md#cycleactivecompletion)
- [disableCompletion](neuroglancer_services_state_loader.StateAutocomplete.md#disablecompletion)
- [disableCompletions](neuroglancer_services_state_loader.StateAutocomplete.md#disablecompletions)
- [dispose](neuroglancer_services_state_loader.StateAutocomplete.md#dispose)
- [disposed](neuroglancer_services_state_loader.StateAutocomplete.md#disposed)
- [hideCompletions](neuroglancer_services_state_loader.StateAutocomplete.md#hidecompletions)
- [refCountReachedZero](neuroglancer_services_state_loader.StateAutocomplete.md#refcountreachedzero)
- [registerCancellable](neuroglancer_services_state_loader.StateAutocomplete.md#registercancellable)
- [registerDisposer](neuroglancer_services_state_loader.StateAutocomplete.md#registerdisposer)
- [registerEventListener](neuroglancer_services_state_loader.StateAutocomplete.md#registereventlistener)
- [selectActiveCompletion](neuroglancer_services_state_loader.StateAutocomplete.md#selectactivecompletion)
- [selectCompletion](neuroglancer_services_state_loader.StateAutocomplete.md#selectcompletion)
- [setHintValue](neuroglancer_services_state_loader.StateAutocomplete.md#sethintvalue)
- [setValueAndSelection](neuroglancer_services_state_loader.StateAutocomplete.md#setvalueandselection)
- [unregisterDisposer](neuroglancer_services_state_loader.StateAutocomplete.md#unregisterdisposer)

## Constructors

### constructor

• **new StateAutocomplete**(`viewer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `viewer` | [`Viewer`](neuroglancer_viewer.Viewer.md) |

#### Overrides

[AutocompleteTextInput](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md).[constructor](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#constructor)

#### Defined in

[src/neuroglancer/services/state_loader.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/services/state_loader.ts#L76)

## Properties

### \_allCompletions

• **\_allCompletions**: [`CompletionWithState`](../interfaces/neuroglancer_services_state_loader._internal_.CompletionWithState.md)[] = `[]`

#### Defined in

[src/neuroglancer/services/state_loader.ts:73](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/services/state_loader.ts#L73)

___

### completer

• **completer**: [`Completer`](../modules/neuroglancer_widget_multiline_autocomplete.md#completer)

#### Inherited from

[AutocompleteTextInput](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md).[completer](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#completer)

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:190](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/multiline_autocomplete.ts#L190)

___

### curCompletions

• `Private` **curCompletions**: [`CompletionWithState`](../interfaces/neuroglancer_services_state_loader._internal_.CompletionWithState.md)[] = `[]`

#### Defined in

[src/neuroglancer/services/state_loader.ts:74](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/services/state_loader.ts#L74)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[AutocompleteTextInput](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md).[disposedStacks](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Inherited from

[AutocompleteTextInput](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md).[element](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#element)

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:88](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/multiline_autocomplete.ts#L88)

___

### hintElement

• **hintElement**: [`HTMLSpanElement`](../modules/main_module._internal_.md#htmlspanelement)

#### Inherited from

[AutocompleteTextInput](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md).[hintElement](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#hintelement)

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:90](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/multiline_autocomplete.ts#L90)

___

### inputElement

• **inputElement**: [`HTMLSpanElement`](../modules/main_module._internal_.md#htmlspanelement)

#### Inherited from

[AutocompleteTextInput](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md).[inputElement](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#inputelement)

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:89](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/multiline_autocomplete.ts#L89)

___

### onCommit

• **onCommit**: [`Signal`](neuroglancer_util_signal.Signal.md)<(`value`: `string`, `explicit`: `boolean`) => `void`\>

#### Inherited from

[AutocompleteTextInput](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md).[onCommit](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#oncommit)

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:92](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/multiline_autocomplete.ts#L92)

___

### onInput

• **onInput**: [`Signal`](neuroglancer_util_signal.Signal.md)<(`value`: `string`) => `void`\>

#### Inherited from

[AutocompleteTextInput](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md).[onInput](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#oninput)

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:93](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/multiline_autocomplete.ts#L93)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[AutocompleteTextInput](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md).[refCount](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### viewer

• `Private` **viewer**: [`Viewer`](neuroglancer_viewer.Viewer.md)

#### Defined in

[src/neuroglancer/services/state_loader.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/services/state_loader.ts#L76)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[AutocompleteTextInput](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md).[wasDisposed](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### allCompletions

• `get` **allCompletions**(): [`CompletionWithState`](../interfaces/neuroglancer_services_state_loader._internal_.CompletionWithState.md)[]

#### Returns

[`CompletionWithState`](../interfaces/neuroglancer_services_state_loader._internal_.CompletionWithState.md)[]

#### Defined in

[src/neuroglancer/services/state_loader.ts:119](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/services/state_loader.ts#L119)

• `set` **allCompletions**(`results`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `results` | [`CompletionWithState`](../interfaces/neuroglancer_services_state_loader._internal_.CompletionWithState.md)[] |

#### Returns

`void`

#### Defined in

[src/neuroglancer/services/state_loader.ts:115](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/services/state_loader.ts#L115)

___

### placeholder

• `get` **placeholder**(): `string`

#### Returns

`string`

#### Inherited from

AutocompleteTextInput.placeholder

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:113](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/multiline_autocomplete.ts#L113)

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

[src/neuroglancer/widget/multiline_autocomplete.ts:118](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/multiline_autocomplete.ts#L118)

___

### value

• `get` **value**(): `string`

#### Returns

`string`

#### Inherited from

AutocompleteTextInput.value

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:724](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/multiline_autocomplete.ts#L724)

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

[src/neuroglancer/widget/multiline_autocomplete.ts:728](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/multiline_autocomplete.ts#L728)

## Methods

### addRef

▸ **addRef**(): [`StateAutocomplete`](neuroglancer_services_state_loader.StateAutocomplete.md)

#### Returns

[`StateAutocomplete`](neuroglancer_services_state_loader.StateAutocomplete.md)

#### Inherited from

[AutocompleteTextInput](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md).[addRef](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

___

### cancel

▸ **cancel**(): `boolean`

Called when user presses escape.  Does nothing here, but may be overridden in a subclass.

#### Returns

`boolean`

#### Inherited from

[AutocompleteTextInput](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md).[cancel](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#cancel)

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:694](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/multiline_autocomplete.ts#L694)

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

[AutocompleteTextInput](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md).[cycleActiveCompletion](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#cycleactivecompletion)

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:427](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/multiline_autocomplete.ts#L427)

___

### disableCompletion

▸ **disableCompletion**(): `void`

#### Returns

`void`

#### Inherited from

[AutocompleteTextInput](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md).[disableCompletion](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#disablecompletion)

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:105](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/multiline_autocomplete.ts#L105)

___

### disableCompletions

▸ **disableCompletions**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/services/state_loader.ts:111](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/services/state_loader.ts#L111)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[AutocompleteTextInput](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md).[dispose](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[AutocompleteTextInput](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md).[disposed](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#disposed)

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:736](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/multiline_autocomplete.ts#L736)

___

### hideCompletions

▸ **hideCompletions**(): `void`

#### Returns

`void`

#### Inherited from

[AutocompleteTextInput](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md).[hideCompletions](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#hidecompletions)

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:386](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/multiline_autocomplete.ts#L386)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[AutocompleteTextInput](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md).[refCountReachedZero](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L66)

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

[AutocompleteTextInput](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md).[registerCancellable](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#registercancellable)

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L100)

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

[AutocompleteTextInput](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md).[registerDisposer](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#registerdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L76)

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

[AutocompleteTextInput](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md).[registerEventListener](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L95)

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

[AutocompleteTextInput](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md).[selectActiveCompletion](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#selectactivecompletion)

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:658](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/multiline_autocomplete.ts#L658)

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

[AutocompleteTextInput](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md).[selectCompletion](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#selectcompletion)

#### Defined in

[src/neuroglancer/services/state_loader.ts:99](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/services/state_loader.ts#L99)

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

[AutocompleteTextInput](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md).[setHintValue](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#sethintvalue)

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:562](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/multiline_autocomplete.ts#L562)

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

[AutocompleteTextInput](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md).[setValueAndSelection](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#setvalueandselection)

#### Defined in

[src/neuroglancer/widget/multiline_autocomplete.ts:136](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/multiline_autocomplete.ts#L136)

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

[AutocompleteTextInput](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md).[unregisterDisposer](neuroglancer_widget_multiline_autocomplete.AutocompleteTextInput.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L85)
