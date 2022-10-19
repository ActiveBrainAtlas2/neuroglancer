[neuroglancer](../README.md) / [Modules](../modules.md) / [layer\_group\_viewer](../modules/layer_group_viewer.md) / [<internal\>](../modules/layer_group_viewer._internal_.md) / LayerWidget

# Class: LayerWidget

[layer_group_viewer](../modules/layer_group_viewer.md).[<internal>](../modules/layer_group_viewer._internal_.md).LayerWidget

## Hierarchy

- [`RefCounted`](axes_lines._internal_.RefCounted.md)

  ↳ **`LayerWidget`**

## Table of contents

### Constructors

- [constructor](layer_group_viewer._internal_.LayerWidget.md#constructor)

### Properties

- [disposedStacks](layer_group_viewer._internal_.LayerWidget.md#disposedstacks)
- [element](layer_group_viewer._internal_.LayerWidget.md#element)
- [labelElement](layer_group_viewer._internal_.LayerWidget.md#labelelement)
- [labelElementText](layer_group_viewer._internal_.LayerWidget.md#labelelementtext)
- [layer](layer_group_viewer._internal_.LayerWidget.md#layer)
- [layerNumberElement](layer_group_viewer._internal_.LayerWidget.md#layernumberelement)
- [maxLength](layer_group_viewer._internal_.LayerWidget.md#maxlength)
- [panel](layer_group_viewer._internal_.LayerWidget.md#panel)
- [prefetchProgress](layer_group_viewer._internal_.LayerWidget.md#prefetchprogress)
- [prevValueText](layer_group_viewer._internal_.LayerWidget.md#prevvaluetext)
- [refCount](layer_group_viewer._internal_.LayerWidget.md#refcount)
- [valueElement](layer_group_viewer._internal_.LayerWidget.md#valueelement)
- [visibleProgress](layer_group_viewer._internal_.LayerWidget.md#visibleprogress)
- [wasDisposed](layer_group_viewer._internal_.LayerWidget.md#wasdisposed)

### Methods

- [addRef](layer_group_viewer._internal_.LayerWidget.md#addref)
- [dispose](layer_group_viewer._internal_.LayerWidget.md#dispose)
- [disposed](layer_group_viewer._internal_.LayerWidget.md#disposed)
- [refCountReachedZero](layer_group_viewer._internal_.LayerWidget.md#refcountreachedzero)
- [registerCancellable](layer_group_viewer._internal_.LayerWidget.md#registercancellable)
- [registerDisposer](layer_group_viewer._internal_.LayerWidget.md#registerdisposer)
- [registerEventListener](layer_group_viewer._internal_.LayerWidget.md#registereventlistener)
- [unregisterDisposer](layer_group_viewer._internal_.LayerWidget.md#unregisterdisposer)
- [update](layer_group_viewer._internal_.LayerWidget.md#update)

## Constructors

### constructor

• **new LayerWidget**(`layer`, `panel`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`ManagedUserLayer`](layer.ManagedUserLayer.md) |
| `panel` | [`LayerBar`](layer_group_viewer._internal_.LayerBar.md) |

#### Overrides

[RefCounted](axes_lines._internal_.RefCounted.md).[constructor](axes_lines._internal_.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:56](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/layer_bar.ts#L56)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[disposedStacks](axes_lines._internal_.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: [`HTMLDivElement`](../modules/axes_lines._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/layer_bar.ts#L46)

___

### labelElement

• **labelElement**: [`HTMLDivElement`](../modules/axes_lines._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/layer_bar.ts#L48)

___

### labelElementText

• **labelElementText**: [`Text`](../modules/axes_lines._internal_.md#text)

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:51](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/layer_bar.ts#L51)

___

### layer

• **layer**: [`ManagedUserLayer`](layer.ManagedUserLayer.md)

___

### layerNumberElement

• **layerNumberElement**: [`HTMLDivElement`](../modules/axes_lines._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/layer_bar.ts#L47)

___

### maxLength

• **maxLength**: `number` = `0`

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/layer_bar.ts#L53)

___

### panel

• **panel**: [`LayerBar`](layer_group_viewer._internal_.LayerBar.md)

___

### prefetchProgress

• **prefetchProgress**: [`HTMLDivElement`](../modules/axes_lines._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/layer_bar.ts#L50)

___

### prevValueText

• **prevValueText**: `string` = `''`

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/layer_bar.ts#L54)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[refCount](axes_lines._internal_.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L45)

___

### valueElement

• **valueElement**: [`HTMLDivElement`](../modules/axes_lines._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/layer_bar.ts#L52)

___

### visibleProgress

• **visibleProgress**: [`HTMLDivElement`](../modules/axes_lines._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/layer_bar.ts#L49)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[wasDisposed](axes_lines._internal_.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`LayerWidget`](layer_group_viewer._internal_.LayerWidget.md)

#### Returns

[`LayerWidget`](layer_group_viewer._internal_.LayerWidget.md)

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[addRef](axes_lines._internal_.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[dispose](axes_lines._internal_.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

[RefCounted](axes_lines._internal_.RefCounted.md).[disposed](axes_lines._internal_.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:160](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/layer_bar.ts#L160)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[refCountReachedZero](axes_lines._internal_.RefCounted.md#refcountreachedzero)

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

[RefCounted](axes_lines._internal_.RefCounted.md).[registerCancellable](axes_lines._internal_.RefCounted.md#registercancellable)

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

[RefCounted](axes_lines._internal_.RefCounted.md).[registerDisposer](axes_lines._internal_.RefCounted.md#registerdisposer)

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

[RefCounted](axes_lines._internal_.RefCounted.md).[registerEventListener](axes_lines._internal_.RefCounted.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L95)

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

[RefCounted](axes_lines._internal_.RefCounted.md).[unregisterDisposer](axes_lines._internal_.RefCounted.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L85)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/layer_bar.ts:145](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/layer_bar.ts#L145)
