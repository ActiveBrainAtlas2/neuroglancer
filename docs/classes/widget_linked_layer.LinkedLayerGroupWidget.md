[neuroglancer](../README.md) / [Modules](../modules.md) / [widget/linked\_layer](../modules/widget_linked_layer.md) / LinkedLayerGroupWidget

# Class: LinkedLayerGroupWidget

[widget/linked_layer](../modules/widget_linked_layer.md).LinkedLayerGroupWidget

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`LinkedLayerGroupWidget`**

## Table of contents

### Constructors

- [constructor](widget_linked_layer.LinkedLayerGroupWidget.md#constructor)

### Properties

- [disposedStacks](widget_linked_layer.LinkedLayerGroupWidget.md#disposedstacks)
- [element](widget_linked_layer.LinkedLayerGroupWidget.md#element)
- [group](widget_linked_layer.LinkedLayerGroupWidget.md#group)
- [label](widget_linked_layer.LinkedLayerGroupWidget.md#label)
- [linkedLayers](widget_linked_layer.LinkedLayerGroupWidget.md#linkedlayers)
- [refCount](widget_linked_layer.LinkedLayerGroupWidget.md#refcount)
- [selectElement](widget_linked_layer.LinkedLayerGroupWidget.md#selectelement)
- [topRow](widget_linked_layer.LinkedLayerGroupWidget.md#toprow)
- [unlinkButton](widget_linked_layer.LinkedLayerGroupWidget.md#unlinkbutton)
- [wasDisposed](widget_linked_layer.LinkedLayerGroupWidget.md#wasdisposed)

### Methods

- [addRef](widget_linked_layer.LinkedLayerGroupWidget.md#addref)
- [dispose](widget_linked_layer.LinkedLayerGroupWidget.md#dispose)
- [disposed](widget_linked_layer.LinkedLayerGroupWidget.md#disposed)
- [refCountReachedZero](widget_linked_layer.LinkedLayerGroupWidget.md#refcountreachedzero)
- [registerCancellable](widget_linked_layer.LinkedLayerGroupWidget.md#registercancellable)
- [registerDisposer](widget_linked_layer.LinkedLayerGroupWidget.md#registerdisposer)
- [registerEventListener](widget_linked_layer.LinkedLayerGroupWidget.md#registereventlistener)
- [unregisterDisposer](widget_linked_layer.LinkedLayerGroupWidget.md#unregisterdisposer)
- [updateModel](widget_linked_layer.LinkedLayerGroupWidget.md#updatemodel)
- [updateView](widget_linked_layer.LinkedLayerGroupWidget.md#updateview)

## Constructors

### constructor

• **new LinkedLayerGroupWidget**(`group`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `group` | [`LinkedLayerGroup`](segmentation_display_state_frontend._internal_.LinkedLayerGroup.md) |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/widget/linked_layer.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/linked_layer.ts#L32)

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

[src/neuroglancer/widget/linked_layer.ts:26](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/linked_layer.ts#L26)

___

### group

• **group**: [`LinkedLayerGroup`](segmentation_display_state_frontend._internal_.LinkedLayerGroup.md)

___

### label

• **label**: [`HTMLLabelElement`](../modules/annotation_annotation_layer_state._internal_.md#htmllabelelement)

#### Defined in

[src/neuroglancer/widget/linked_layer.ts:28](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/linked_layer.ts#L28)

___

### linkedLayers

• `Private` **linkedLayers**: [`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/widget/linked_layer.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/linked_layer.ts#L30)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### selectElement

• `Private` **selectElement**: `HTMLSelectElement`

#### Defined in

[src/neuroglancer/widget/linked_layer.ts:29](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/linked_layer.ts#L29)

___

### topRow

• **topRow**: [`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/widget/linked_layer.ts:27](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/linked_layer.ts#L27)

___

### unlinkButton

• `Private` **unlinkButton**: [`HTMLButtonElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlbuttonelement)

#### Defined in

[src/neuroglancer/widget/linked_layer.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/linked_layer.ts#L31)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`LinkedLayerGroupWidget`](widget_linked_layer.LinkedLayerGroupWidget.md)

#### Returns

[`LinkedLayerGroupWidget`](widget_linked_layer.LinkedLayerGroupWidget.md)

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

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposed](util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L75)

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

### updateModel

▸ `Private` **updateModel**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/linked_layer.ts:56](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/linked_layer.ts#L56)

___

### updateView

▸ `Private` **updateView**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/linked_layer.ts:65](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/linked_layer.ts#L65)
