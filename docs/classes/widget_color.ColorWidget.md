[neuroglancer](../README.md) / [Modules](../modules.md) / [widget/color](../modules/widget_color.md) / ColorWidget

# Class: ColorWidget<Color\>

[widget/color](../modules/widget_color.md).ColorWidget

## Type parameters

| Name | Type |
| :------ | :------ |
| `Color` | extends [`vec3`](util_geom.vec3.md) \| `undefined` = [`vec3`](util_geom.vec3.md) |

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`ColorWidget`**

## Table of contents

### Constructors

- [constructor](widget_color.ColorWidget.md#constructor)

### Properties

- [disposedStacks](widget_color.ColorWidget.md#disposedstacks)
- [element](widget_color.ColorWidget.md#element)
- [getDefaultColor](widget_color.ColorWidget.md#getdefaultcolor)
- [model](widget_color.ColorWidget.md#model)
- [refCount](widget_color.ColorWidget.md#refcount)
- [wasDisposed](widget_color.ColorWidget.md#wasdisposed)

### Methods

- [addRef](widget_color.ColorWidget.md#addref)
- [adjustHueViaWheel](widget_color.ColorWidget.md#adjusthueviawheel)
- [dispose](widget_color.ColorWidget.md#dispose)
- [disposed](widget_color.ColorWidget.md#disposed)
- [getRGB](widget_color.ColorWidget.md#getrgb)
- [refCountReachedZero](widget_color.ColorWidget.md#refcountreachedzero)
- [registerCancellable](widget_color.ColorWidget.md#registercancellable)
- [registerDisposer](widget_color.ColorWidget.md#registerdisposer)
- [registerEventListener](widget_color.ColorWidget.md#registereventlistener)
- [unregisterDisposer](widget_color.ColorWidget.md#unregisterdisposer)
- [updateModel](widget_color.ColorWidget.md#updatemodel)
- [updateView](widget_color.ColorWidget.md#updateview)

## Constructors

### constructor

• **new ColorWidget**<`Color`\>(`model`, `getDefaultColor?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Color` | extends `undefined` \| [`vec3`](util_geom.vec3.md) = [`vec3`](util_geom.vec3.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`Color`\> |
| `getDefaultColor` | () => [`vec3`](util_geom.vec3.md) |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/widget/color.ts:27](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/color.ts#L27)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: [`HTMLInputElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlinputelement)

#### Defined in

[src/neuroglancer/widget/color.ts:25](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/color.ts#L25)

___

### getDefaultColor

• **getDefaultColor**: () => [`vec3`](util_geom.vec3.md)

#### Type declaration

▸ (): [`vec3`](util_geom.vec3.md)

##### Returns

[`vec3`](util_geom.vec3.md)

___

### model

• **model**: [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`Color`\>

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`ColorWidget`](widget_color.ColorWidget.md)<`Color`\>

#### Returns

[`ColorWidget`](widget_color.ColorWidget.md)<`Color`\>

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[addRef](util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### adjustHueViaWheel

▸ **adjustHueViaWheel**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`WheelEvent`](../modules/annotation_annotation_layer_state._internal_.md#wheelevent) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/color.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/color.ts#L54)

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

### getRGB

▸ `Private` **getRGB**(): [`vec3`](util_geom.vec3.md)

#### Returns

[`vec3`](util_geom.vec3.md)

#### Defined in

[src/neuroglancer/widget/color.ts:44](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/color.ts#L44)

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

[src/neuroglancer/widget/color.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/color.ts#L50)

___

### updateView

▸ `Private` **updateView**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/color.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/color.ts#L47)
