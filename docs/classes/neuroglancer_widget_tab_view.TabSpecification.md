[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/widget/tab\_view](../modules/neuroglancer_widget_tab_view.md) / TabSpecification

# Class: TabSpecification

[neuroglancer/widget/tab_view](../modules/neuroglancer_widget_tab_view.md).TabSpecification

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

- [`OptionSpecification`](neuroglancer_widget_tab_view.OptionSpecification.md)<{ `getter`: () => [`Owned`](../modules/neuroglancer_util_disposable.md#owned)<[`Tab`](neuroglancer_widget_tab_view.Tab.md)\> ; `label`: `string` ; `order?`: `number`  }\>

  ↳ **`TabSpecification`**

## Table of contents

### Constructors

- [constructor](neuroglancer_widget_tab_view.TabSpecification.md#constructor)

### Properties

- [changed](neuroglancer_widget_tab_view.TabSpecification.md#changed)
- [disposedStacks](neuroglancer_widget_tab_view.TabSpecification.md#disposedstacks)
- [options](neuroglancer_widget_tab_view.TabSpecification.md#options)
- [optionsChanged](neuroglancer_widget_tab_view.TabSpecification.md#optionschanged)
- [ready\_](neuroglancer_widget_tab_view.TabSpecification.md#ready_)
- [refCount](neuroglancer_widget_tab_view.TabSpecification.md#refcount)
- [wasDisposed](neuroglancer_widget_tab_view.TabSpecification.md#wasdisposed)

### Accessors

- [default](neuroglancer_widget_tab_view.TabSpecification.md#default)
- [ready](neuroglancer_widget_tab_view.TabSpecification.md#ready)
- [validValue](neuroglancer_widget_tab_view.TabSpecification.md#validvalue)
- [value](neuroglancer_widget_tab_view.TabSpecification.md#value)

### Methods

- [add](neuroglancer_widget_tab_view.TabSpecification.md#add)
- [addRef](neuroglancer_widget_tab_view.TabSpecification.md#addref)
- [dispose](neuroglancer_widget_tab_view.TabSpecification.md#dispose)
- [disposed](neuroglancer_widget_tab_view.TabSpecification.md#disposed)
- [refCountReachedZero](neuroglancer_widget_tab_view.TabSpecification.md#refcountreachedzero)
- [registerCancellable](neuroglancer_widget_tab_view.TabSpecification.md#registercancellable)
- [registerDisposer](neuroglancer_widget_tab_view.TabSpecification.md#registerdisposer)
- [registerEventListener](neuroglancer_widget_tab_view.TabSpecification.md#registereventlistener)
- [reset](neuroglancer_widget_tab_view.TabSpecification.md#reset)
- [restoreState](neuroglancer_widget_tab_view.TabSpecification.md#restorestate)
- [toJSON](neuroglancer_widget_tab_view.TabSpecification.md#tojson)
- [unregisterDisposer](neuroglancer_widget_tab_view.TabSpecification.md#unregisterdisposer)

## Constructors

### constructor

• **new TabSpecification**()

#### Inherited from

[OptionSpecification](neuroglancer_widget_tab_view.OptionSpecification.md).[constructor](neuroglancer_widget_tab_view.OptionSpecification.md#constructor)

## Properties

### changed

• **changed**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Inherited from

[OptionSpecification](neuroglancer_widget_tab_view.OptionSpecification.md).[changed](neuroglancer_widget_tab_view.OptionSpecification.md#changed)

#### Defined in

[src/neuroglancer/widget/tab_view.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/tab_view.ts#L52)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[OptionSpecification](neuroglancer_widget_tab_view.OptionSpecification.md).[disposedStacks](neuroglancer_widget_tab_view.OptionSpecification.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### options

• **options**: `Map`<`string`, { `getter`: () => [`Tab`](neuroglancer_widget_tab_view.Tab.md) ; `label`: `string` ; `order?`: `number`  }\>

#### Inherited from

[OptionSpecification](neuroglancer_widget_tab_view.OptionSpecification.md).[options](neuroglancer_widget_tab_view.OptionSpecification.md#options)

#### Defined in

[src/neuroglancer/widget/tab_view.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/tab_view.ts#L53)

___

### optionsChanged

• **optionsChanged**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Inherited from

[OptionSpecification](neuroglancer_widget_tab_view.OptionSpecification.md).[optionsChanged](neuroglancer_widget_tab_view.OptionSpecification.md#optionschanged)

#### Defined in

[src/neuroglancer/widget/tab_view.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/tab_view.ts#L54)

___

### ready\_

• **ready\_**: `boolean` = `true`

#### Inherited from

[OptionSpecification](neuroglancer_widget_tab_view.OptionSpecification.md).[ready_](neuroglancer_widget_tab_view.OptionSpecification.md#ready_)

#### Defined in

[src/neuroglancer/widget/tab_view.ts:121](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/tab_view.ts#L121)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[OptionSpecification](neuroglancer_widget_tab_view.OptionSpecification.md).[refCount](neuroglancer_widget_tab_view.OptionSpecification.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[OptionSpecification](neuroglancer_widget_tab_view.OptionSpecification.md).[wasDisposed](neuroglancer_widget_tab_view.OptionSpecification.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### default

• `get` **default**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

OptionSpecification.default

#### Defined in

[src/neuroglancer/widget/tab_view.ts:74](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/tab_view.ts#L74)

• `set` **default**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| `string` |

#### Returns

`void`

#### Inherited from

OptionSpecification.default

#### Defined in

[src/neuroglancer/widget/tab_view.ts:67](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/tab_view.ts#L67)

___

### ready

• `get` **ready**(): `boolean`

When `ready` is `false`, the selected `value` may be set to an unknown option.

#### Returns

`boolean`

#### Inherited from

OptionSpecification.ready

#### Defined in

[src/neuroglancer/widget/tab_view.ts:126](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/tab_view.ts#L126)

• `set` **ready**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

OptionSpecification.ready

#### Defined in

[src/neuroglancer/widget/tab_view.ts:130](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/tab_view.ts#L130)

___

### validValue

• `get` **validValue**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

OptionSpecification.validValue

#### Defined in

[src/neuroglancer/widget/tab_view.ts:89](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/tab_view.ts#L89)

___

### value

• `get` **value**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

OptionSpecification.value

#### Defined in

[src/neuroglancer/widget/tab_view.ts:59](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/tab_view.ts#L59)

• `set` **value**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| `string` |

#### Returns

`void`

#### Inherited from

OptionSpecification.value

#### Defined in

[src/neuroglancer/widget/tab_view.ts:78](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/tab_view.ts#L78)

## Methods

### add

▸ **add**(`id`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `value` | `Object` |
| `value.getter` | () => [`Tab`](neuroglancer_widget_tab_view.Tab.md) |
| `value.label` | `string` |
| `value.order?` | `number` |

#### Returns

`void`

#### Inherited from

[OptionSpecification](neuroglancer_widget_tab_view.OptionSpecification.md).[add](neuroglancer_widget_tab_view.OptionSpecification.md#add)

#### Defined in

[src/neuroglancer/widget/tab_view.ts:97](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/tab_view.ts#L97)

___

### addRef

▸ **addRef**(): [`TabSpecification`](neuroglancer_widget_tab_view.TabSpecification.md)

#### Returns

[`TabSpecification`](neuroglancer_widget_tab_view.TabSpecification.md)

#### Inherited from

[OptionSpecification](neuroglancer_widget_tab_view.OptionSpecification.md).[addRef](neuroglancer_widget_tab_view.OptionSpecification.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[OptionSpecification](neuroglancer_widget_tab_view.OptionSpecification.md).[dispose](neuroglancer_widget_tab_view.OptionSpecification.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[OptionSpecification](neuroglancer_widget_tab_view.OptionSpecification.md).[disposed](neuroglancer_widget_tab_view.OptionSpecification.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L75)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[OptionSpecification](neuroglancer_widget_tab_view.OptionSpecification.md).[refCountReachedZero](neuroglancer_widget_tab_view.OptionSpecification.md#refcountreachedzero)

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

[OptionSpecification](neuroglancer_widget_tab_view.OptionSpecification.md).[registerCancellable](neuroglancer_widget_tab_view.OptionSpecification.md#registercancellable)

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

[OptionSpecification](neuroglancer_widget_tab_view.OptionSpecification.md).[registerDisposer](neuroglancer_widget_tab_view.OptionSpecification.md#registerdisposer)

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

[OptionSpecification](neuroglancer_widget_tab_view.OptionSpecification.md).[registerEventListener](neuroglancer_widget_tab_view.OptionSpecification.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L95)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Inherited from

[OptionSpecification](neuroglancer_widget_tab_view.OptionSpecification.md).[reset](neuroglancer_widget_tab_view.OptionSpecification.md#reset)

#### Defined in

[src/neuroglancer/widget/tab_view.ts:117](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/tab_view.ts#L117)

___

### restoreState

▸ **restoreState**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

`void`

#### Inherited from

[OptionSpecification](neuroglancer_widget_tab_view.OptionSpecification.md).[restoreState](neuroglancer_widget_tab_view.OptionSpecification.md#restorestate)

#### Defined in

[src/neuroglancer/widget/tab_view.ts:140](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/tab_view.ts#L140)

___

### toJSON

▸ **toJSON**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

[OptionSpecification](neuroglancer_widget_tab_view.OptionSpecification.md).[toJSON](neuroglancer_widget_tab_view.OptionSpecification.md#tojson)

#### Defined in

[src/neuroglancer/widget/tab_view.ts:109](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/tab_view.ts#L109)

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

[OptionSpecification](neuroglancer_widget_tab_view.OptionSpecification.md).[unregisterDisposer](neuroglancer_widget_tab_view.OptionSpecification.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L85)
