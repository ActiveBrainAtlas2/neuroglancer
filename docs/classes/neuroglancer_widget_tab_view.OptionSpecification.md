[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/widget/tab\_view](../modules/neuroglancer_widget_tab_view.md) / OptionSpecification

# Class: OptionSpecification<T\>

[neuroglancer/widget/tab_view](../modules/neuroglancer_widget_tab_view.md).OptionSpecification

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

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`OptionSpecification`**

  ↳↳ [`TabSpecification`](neuroglancer_widget_tab_view.TabSpecification.md)

## Implements

- [`Trackable`](../interfaces/neuroglancer_util_trackable.Trackable.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_widget_tab_view.OptionSpecification.md#constructor)

### Properties

- [changed](neuroglancer_widget_tab_view.OptionSpecification.md#changed)
- [defaultValue](neuroglancer_widget_tab_view.OptionSpecification.md#defaultvalue)
- [disposedStacks](neuroglancer_widget_tab_view.OptionSpecification.md#disposedstacks)
- [options](neuroglancer_widget_tab_view.OptionSpecification.md#options)
- [optionsChanged](neuroglancer_widget_tab_view.OptionSpecification.md#optionschanged)
- [ready\_](neuroglancer_widget_tab_view.OptionSpecification.md#ready_)
- [refCount](neuroglancer_widget_tab_view.OptionSpecification.md#refcount)
- [selectedValue](neuroglancer_widget_tab_view.OptionSpecification.md#selectedvalue)
- [wasDisposed](neuroglancer_widget_tab_view.OptionSpecification.md#wasdisposed)

### Accessors

- [default](neuroglancer_widget_tab_view.OptionSpecification.md#default)
- [ready](neuroglancer_widget_tab_view.OptionSpecification.md#ready)
- [validValue](neuroglancer_widget_tab_view.OptionSpecification.md#validvalue)
- [value](neuroglancer_widget_tab_view.OptionSpecification.md#value)

### Methods

- [add](neuroglancer_widget_tab_view.OptionSpecification.md#add)
- [addRef](neuroglancer_widget_tab_view.OptionSpecification.md#addref)
- [dispose](neuroglancer_widget_tab_view.OptionSpecification.md#dispose)
- [disposed](neuroglancer_widget_tab_view.OptionSpecification.md#disposed)
- [refCountReachedZero](neuroglancer_widget_tab_view.OptionSpecification.md#refcountreachedzero)
- [registerCancellable](neuroglancer_widget_tab_view.OptionSpecification.md#registercancellable)
- [registerDisposer](neuroglancer_widget_tab_view.OptionSpecification.md#registerdisposer)
- [registerEventListener](neuroglancer_widget_tab_view.OptionSpecification.md#registereventlistener)
- [reset](neuroglancer_widget_tab_view.OptionSpecification.md#reset)
- [restoreState](neuroglancer_widget_tab_view.OptionSpecification.md#restorestate)
- [toJSON](neuroglancer_widget_tab_view.OptionSpecification.md#tojson)
- [unregisterDisposer](neuroglancer_widget_tab_view.OptionSpecification.md#unregisterdisposer)

## Constructors

### constructor

• **new OptionSpecification**<`T`\>()

#### Type parameters

| Name |
| :------ |
| `T` |

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

## Properties

### changed

• **changed**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Implementation of

[Trackable](../interfaces/neuroglancer_util_trackable.Trackable.md).[changed](../interfaces/neuroglancer_util_trackable.Trackable.md#changed)

#### Defined in

[src/neuroglancer/widget/tab_view.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/tab_view.ts#L52)

___

### defaultValue

• `Private` **defaultValue**: `undefined` \| `string` = `undefined`

#### Defined in

[src/neuroglancer/widget/tab_view.ts:57](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/tab_view.ts#L57)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### options

• **options**: `Map`<`string`, `T`\>

#### Defined in

[src/neuroglancer/widget/tab_view.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/tab_view.ts#L53)

___

### optionsChanged

• **optionsChanged**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/widget/tab_view.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/tab_view.ts#L54)

___

### ready\_

• **ready\_**: `boolean` = `true`

#### Defined in

[src/neuroglancer/widget/tab_view.ts:121](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/tab_view.ts#L121)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### selectedValue

• `Private` **selectedValue**: `undefined` \| `string` = `undefined`

#### Defined in

[src/neuroglancer/widget/tab_view.ts:56](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/tab_view.ts#L56)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### default

• `get` **default**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[src/neuroglancer/widget/tab_view.ts:74](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/tab_view.ts#L74)

• `set` **default**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| `string` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/tab_view.ts:67](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/tab_view.ts#L67)

___

### ready

• `get` **ready**(): `boolean`

When `ready` is `false`, the selected `value` may be set to an unknown option.

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/widget/tab_view.ts:126](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/tab_view.ts#L126)

• `set` **ready**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/tab_view.ts:130](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/tab_view.ts#L130)

___

### validValue

• `get` **validValue**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[src/neuroglancer/widget/tab_view.ts:89](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/tab_view.ts#L89)

___

### value

• `get` **value**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[src/neuroglancer/widget/tab_view.ts:59](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/tab_view.ts#L59)

• `set` **value**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| `string` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/tab_view.ts:78](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/tab_view.ts#L78)

## Methods

### add

▸ **add**(`id`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `value` | `T` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/tab_view.ts:97](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/tab_view.ts#L97)

___

### addRef

▸ **addRef**(): [`OptionSpecification`](neuroglancer_widget_tab_view.OptionSpecification.md)<`T`\>

#### Returns

[`OptionSpecification`](neuroglancer_widget_tab_view.OptionSpecification.md)<`T`\>

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[addRef](neuroglancer_util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[dispose](neuroglancer_util_disposable.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposed](neuroglancer_util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L75)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCountReachedZero](neuroglancer_util_disposable.RefCounted.md#refcountreachedzero)

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

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[registerCancellable](neuroglancer_util_disposable.RefCounted.md#registercancellable)

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

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[registerDisposer](neuroglancer_util_disposable.RefCounted.md#registerdisposer)

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

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[registerEventListener](neuroglancer_util_disposable.RefCounted.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L95)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Implementation of

Trackable.reset

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

#### Implementation of

Trackable.restoreState

#### Defined in

[src/neuroglancer/widget/tab_view.ts:140](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/tab_view.ts#L140)

___

### toJSON

▸ **toJSON**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Implementation of

Trackable.toJSON

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

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[unregisterDisposer](neuroglancer_util_disposable.RefCounted.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L85)
