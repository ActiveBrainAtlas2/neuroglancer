[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/widget/fetch\_transformation](../modules/neuroglancer_widget_fetch_transformation.md) / FetchTransformationWidget

# Class: FetchTransformationWidget

[neuroglancer/widget/fetch_transformation](../modules/neuroglancer_widget_fetch_transformation.md).FetchTransformationWidget

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

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`FetchTransformationWidget`**

## Table of contents

### Constructors

- [constructor](neuroglancer_widget_fetch_transformation.FetchTransformationWidget.md#constructor)

### Properties

- [disposedStacks](neuroglancer_widget_fetch_transformation.FetchTransformationWidget.md#disposedstacks)
- [element](neuroglancer_widget_fetch_transformation.FetchTransformationWidget.md#element)
- [fetchButton](neuroglancer_widget_fetch_transformation.FetchTransformationWidget.md#fetchbutton)
- [fetchStackButton](neuroglancer_widget_fetch_transformation.FetchTransformationWidget.md#fetchstackbutton)
- [refCount](neuroglancer_widget_fetch_transformation.FetchTransformationWidget.md#refcount)
- [transform](neuroglancer_widget_fetch_transformation.FetchTransformationWidget.md#transform)
- [transformSelection](neuroglancer_widget_fetch_transformation.FetchTransformationWidget.md#transformselection)
- [transformSelectionDefault](neuroglancer_widget_fetch_transformation.FetchTransformationWidget.md#transformselectiondefault)
- [url](neuroglancer_widget_fetch_transformation.FetchTransformationWidget.md#url)
- [wasDisposed](neuroglancer_widget_fetch_transformation.FetchTransformationWidget.md#wasdisposed)

### Methods

- [addRef](neuroglancer_widget_fetch_transformation.FetchTransformationWidget.md#addref)
- [applyStackTransformation](neuroglancer_widget_fetch_transformation.FetchTransformationWidget.md#applystacktransformation)
- [applyTransformation](neuroglancer_widget_fetch_transformation.FetchTransformationWidget.md#applytransformation)
- [display](neuroglancer_widget_fetch_transformation.FetchTransformationWidget.md#display)
- [dispose](neuroglancer_widget_fetch_transformation.FetchTransformationWidget.md#dispose)
- [disposed](neuroglancer_widget_fetch_transformation.FetchTransformationWidget.md#disposed)
- [hide](neuroglancer_widget_fetch_transformation.FetchTransformationWidget.md#hide)
- [matchURL](neuroglancer_widget_fetch_transformation.FetchTransformationWidget.md#matchurl)
- [refCountReachedZero](neuroglancer_widget_fetch_transformation.FetchTransformationWidget.md#refcountreachedzero)
- [registerCancellable](neuroglancer_widget_fetch_transformation.FetchTransformationWidget.md#registercancellable)
- [registerDisposer](neuroglancer_widget_fetch_transformation.FetchTransformationWidget.md#registerdisposer)
- [registerEventListener](neuroglancer_widget_fetch_transformation.FetchTransformationWidget.md#registereventlistener)
- [setUpTransformList](neuroglancer_widget_fetch_transformation.FetchTransformationWidget.md#setuptransformlist)
- [unregisterDisposer](neuroglancer_widget_fetch_transformation.FetchTransformationWidget.md#unregisterdisposer)

## Constructors

### constructor

• **new FetchTransformationWidget**()

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/widget/fetch_transformation.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/fetch_transformation.ts#L46)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/widget/fetch_transformation.ts:38](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/fetch_transformation.ts#L38)

___

### fetchButton

• `Private` **fetchButton**: [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/widget/fetch_transformation.ts:41](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/fetch_transformation.ts#L41)

___

### fetchStackButton

• `Private` **fetchStackButton**: [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/widget/fetch_transformation.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/fetch_transformation.ts#L42)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### transform

• `Private` **transform**: [`WatchableCoordinateSpaceTransform`](neuroglancer_coordinate_transform.WatchableCoordinateSpaceTransform.md)

#### Defined in

[src/neuroglancer/widget/fetch_transformation.ts:43](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/fetch_transformation.ts#L43)

___

### transformSelection

• `Private` **transformSelection**: `HTMLSelectElement`

#### Defined in

[src/neuroglancer/widget/fetch_transformation.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/fetch_transformation.ts#L39)

___

### transformSelectionDefault

• `Private` **transformSelectionDefault**: `HTMLSelectElement`

#### Defined in

[src/neuroglancer/widget/fetch_transformation.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/fetch_transformation.ts#L40)

___

### url

• `Private` **url**: ``null`` \| `string` = `null`

#### Defined in

[src/neuroglancer/widget/fetch_transformation.ts:44](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/fetch_transformation.ts#L44)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`FetchTransformationWidget`](neuroglancer_widget_fetch_transformation.FetchTransformationWidget.md)

#### Returns

[`FetchTransformationWidget`](neuroglancer_widget_fetch_transformation.FetchTransformationWidget.md)

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[addRef](neuroglancer_util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

___

### applyStackTransformation

▸ **applyStackTransformation**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/neuroglancer/widget/fetch_transformation.ts:187](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/fetch_transformation.ts#L187)

___

### applyTransformation

▸ **applyTransformation**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/neuroglancer/widget/fetch_transformation.ts:151](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/fetch_transformation.ts#L151)

___

### display

▸ **display**(`transform`, `url`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | [`WatchableCoordinateSpaceTransform`](neuroglancer_coordinate_transform.WatchableCoordinateSpaceTransform.md) |
| `url` | `string` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/fetch_transformation.ts:80](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/fetch_transformation.ts#L80)

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

### hide

▸ **hide**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/fetch_transformation.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/fetch_transformation.ts#L87)

___

### matchURL

▸ `Private` **matchURL**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/fetch_transformation.ts:91](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/fetch_transformation.ts#L91)

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

### setUpTransformList

▸ **setUpTransformList**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/neuroglancer/widget/fetch_transformation.ts:109](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/fetch_transformation.ts#L109)

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
