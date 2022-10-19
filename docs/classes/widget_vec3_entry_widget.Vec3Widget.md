[neuroglancer](../README.md) / [Modules](../modules.md) / [widget/vec3\_entry\_widget](../modules/widget_vec3_entry_widget.md) / Vec3Widget

# Class: Vec3Widget

[widget/vec3_entry_widget](../modules/widget_vec3_entry_widget.md).Vec3Widget

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`Vec3Widget`**

## Table of contents

### Constructors

- [constructor](widget_vec3_entry_widget.Vec3Widget.md#constructor)

### Properties

- [disposedStacks](widget_vec3_entry_widget.Vec3Widget.md#disposedstacks)
- [element](widget_vec3_entry_widget.Vec3Widget.md#element)
- [inputx](widget_vec3_entry_widget.Vec3Widget.md#inputx)
- [inputy](widget_vec3_entry_widget.Vec3Widget.md#inputy)
- [inputz](widget_vec3_entry_widget.Vec3Widget.md#inputz)
- [model](widget_vec3_entry_widget.Vec3Widget.md#model)
- [promptElement](widget_vec3_entry_widget.Vec3Widget.md#promptelement)
- [refCount](widget_vec3_entry_widget.Vec3Widget.md#refcount)
- [valueEntered](widget_vec3_entry_widget.Vec3Widget.md#valueentered)
- [wasDisposed](widget_vec3_entry_widget.Vec3Widget.md#wasdisposed)

### Methods

- [addRef](widget_vec3_entry_widget.Vec3Widget.md#addref)
- [dispose](widget_vec3_entry_widget.Vec3Widget.md#dispose)
- [disposed](widget_vec3_entry_widget.Vec3Widget.md#disposed)
- [getVec3Values](widget_vec3_entry_widget.Vec3Widget.md#getvec3values)
- [refCountReachedZero](widget_vec3_entry_widget.Vec3Widget.md#refcountreachedzero)
- [registerCancellable](widget_vec3_entry_widget.Vec3Widget.md#registercancellable)
- [registerDisposer](widget_vec3_entry_widget.Vec3Widget.md#registerdisposer)
- [registerEventListener](widget_vec3_entry_widget.Vec3Widget.md#registereventlistener)
- [unregisterDisposer](widget_vec3_entry_widget.Vec3Widget.md#unregisterdisposer)
- [updateInput](widget_vec3_entry_widget.Vec3Widget.md#updateinput)
- [verifyValue](widget_vec3_entry_widget.Vec3Widget.md#verifyvalue)

## Constructors

### constructor

• **new Vec3Widget**(`model`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | [`TrackableVec3`](widget_vec3_entry_widget._internal_.TrackableVec3.md) |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/widget/vec3_entry_widget.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/vec3_entry_widget.ts#L33)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: [`HTMLLabelElement`](../modules/annotation_annotation_layer_state._internal_.md#htmllabelelement)

#### Defined in

[src/neuroglancer/widget/vec3_entry_widget.ts:27](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/vec3_entry_widget.ts#L27)

___

### inputx

• **inputx**: [`HTMLInputElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlinputelement)

#### Defined in

[src/neuroglancer/widget/vec3_entry_widget.ts:28](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/vec3_entry_widget.ts#L28)

___

### inputy

• **inputy**: [`HTMLInputElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlinputelement)

#### Defined in

[src/neuroglancer/widget/vec3_entry_widget.ts:29](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/vec3_entry_widget.ts#L29)

___

### inputz

• **inputz**: [`HTMLInputElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlinputelement)

#### Defined in

[src/neuroglancer/widget/vec3_entry_widget.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/vec3_entry_widget.ts#L30)

___

### model

• **model**: [`TrackableVec3`](widget_vec3_entry_widget._internal_.TrackableVec3.md)

___

### promptElement

• **promptElement**: [`HTMLSpanElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlspanelement)

#### Defined in

[src/neuroglancer/widget/vec3_entry_widget.ts:26](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/vec3_entry_widget.ts#L26)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### valueEntered

• **valueEntered**: [`Signal`](util_signal.Signal.md)<(`value`: `number`) => `void`\>

#### Defined in

[src/neuroglancer/widget/vec3_entry_widget.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/vec3_entry_widget.ts#L31)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`Vec3Widget`](widget_vec3_entry_widget.Vec3Widget.md)

#### Returns

[`Vec3Widget`](widget_vec3_entry_widget.Vec3Widget.md)

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

[src/neuroglancer/widget/vec3_entry_widget.ts:80](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/vec3_entry_widget.ts#L80)

___

### getVec3Values

▸ **getVec3Values**(): [`vec3`](util_geom.vec3.md)

#### Returns

[`vec3`](util_geom.vec3.md)

#### Defined in

[src/neuroglancer/widget/vec3_entry_widget.ts:61](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/vec3_entry_widget.ts#L61)

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

### updateInput

▸ **updateInput**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/vec3_entry_widget.ts:74](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/vec3_entry_widget.ts#L74)

___

### verifyValue

▸ **verifyValue**(`value`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`number`

#### Defined in

[src/neuroglancer/widget/vec3_entry_widget.ts:70](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/vec3_entry_widget.ts#L70)
