[neuroglancer](../README.md) / [Modules](../modules.md) / [ui/layer\_bar](../modules/ui_layer_bar.md) / [<internal\>](../modules/ui_layer_bar._internal_.md) / LayerWidget

# Class: LayerWidget

[ui/layer_bar](../modules/ui_layer_bar.md).[<internal>](../modules/ui_layer_bar._internal_.md).LayerWidget

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`LayerWidget`**

## Table of contents

### Constructors

- [constructor](ui_layer_bar._internal_.LayerWidget.md#constructor)

### Properties

- [disposedStacks](ui_layer_bar._internal_.LayerWidget.md#disposedstacks)
- [element](ui_layer_bar._internal_.LayerWidget.md#element)
- [labelElement](ui_layer_bar._internal_.LayerWidget.md#labelelement)
- [labelElementText](ui_layer_bar._internal_.LayerWidget.md#labelelementtext)
- [layer](ui_layer_bar._internal_.LayerWidget.md#layer)
- [layerNumberElement](ui_layer_bar._internal_.LayerWidget.md#layernumberelement)
- [maxLength](ui_layer_bar._internal_.LayerWidget.md#maxlength)
- [panel](ui_layer_bar._internal_.LayerWidget.md#panel)
- [prefetchProgress](ui_layer_bar._internal_.LayerWidget.md#prefetchprogress)
- [prevValueText](ui_layer_bar._internal_.LayerWidget.md#prevvaluetext)
- [refCount](ui_layer_bar._internal_.LayerWidget.md#refcount)
- [valueElement](ui_layer_bar._internal_.LayerWidget.md#valueelement)
- [visibleProgress](ui_layer_bar._internal_.LayerWidget.md#visibleprogress)
- [wasDisposed](ui_layer_bar._internal_.LayerWidget.md#wasdisposed)

### Methods

- [addRef](ui_layer_bar._internal_.LayerWidget.md#addref)
- [dispose](ui_layer_bar._internal_.LayerWidget.md#dispose)
- [disposed](ui_layer_bar._internal_.LayerWidget.md#disposed)
- [refCountReachedZero](ui_layer_bar._internal_.LayerWidget.md#refcountreachedzero)
- [registerCancellable](ui_layer_bar._internal_.LayerWidget.md#registercancellable)
- [registerDisposer](ui_layer_bar._internal_.LayerWidget.md#registerdisposer)
- [registerEventListener](ui_layer_bar._internal_.LayerWidget.md#registereventlistener)
- [unregisterDisposer](ui_layer_bar._internal_.LayerWidget.md#unregisterdisposer)
- [update](ui_layer_bar._internal_.LayerWidget.md#update)

## Constructors

### constructor

• **new LayerWidget**(`layer`, `panel`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`ManagedUserLayer`](annotation_annotation_layer_state._internal_.ManagedUserLayer.md) |
| `panel` | [`LayerBar`](ui_layer_bar.LayerBar.md) |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:56](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_bar.ts#L56)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: [`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_bar.ts#L46)

___

### labelElement

• **labelElement**: [`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_bar.ts#L48)

___

### labelElementText

• **labelElementText**: [`Text`](../modules/annotation_annotation_layer_state._internal_.md#text)

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:51](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_bar.ts#L51)

___

### layer

• **layer**: [`ManagedUserLayer`](annotation_annotation_layer_state._internal_.ManagedUserLayer.md)

___

### layerNumberElement

• **layerNumberElement**: [`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_bar.ts#L47)

___

### maxLength

• **maxLength**: `number` = `0`

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_bar.ts#L53)

___

### panel

• **panel**: [`LayerBar`](ui_layer_bar.LayerBar.md)

___

### prefetchProgress

• **prefetchProgress**: [`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_bar.ts#L50)

___

### prevValueText

• **prevValueText**: `string` = `''`

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_bar.ts#L54)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### valueElement

• **valueElement**: [`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_bar.ts#L52)

___

### visibleProgress

• **visibleProgress**: [`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_bar.ts#L49)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`LayerWidget`](ui_layer_bar._internal_.LayerWidget.md)

#### Returns

[`LayerWidget`](ui_layer_bar._internal_.LayerWidget.md)

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[addRef](util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

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

[src/neuroglancer/ui/layer_bar.ts:160](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_bar.ts#L160)

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

### update

▸ **update**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:145](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_bar.ts#L145)
