[neuroglancer](../README.md) / [Modules](../modules.md) / [widget/layer\_control\_checkbox](../modules/widget_layer_control_checkbox.md) / [<internal\>](../modules/widget_layer_control_checkbox._internal_.md) / TrackableBooleanCheckbox

# Class: TrackableBooleanCheckbox

[widget/layer_control_checkbox](../modules/widget_layer_control_checkbox.md).[<internal>](../modules/widget_layer_control_checkbox._internal_.md).TrackableBooleanCheckbox

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`TrackableBooleanCheckbox`**

## Table of contents

### Constructors

- [constructor](widget_layer_control_checkbox._internal_.TrackableBooleanCheckbox.md#constructor)

### Properties

- [disposedStacks](widget_layer_control_checkbox._internal_.TrackableBooleanCheckbox.md#disposedstacks)
- [element](widget_layer_control_checkbox._internal_.TrackableBooleanCheckbox.md#element)
- [model](widget_layer_control_checkbox._internal_.TrackableBooleanCheckbox.md#model)
- [refCount](widget_layer_control_checkbox._internal_.TrackableBooleanCheckbox.md#refcount)
- [wasDisposed](widget_layer_control_checkbox._internal_.TrackableBooleanCheckbox.md#wasdisposed)

### Methods

- [addRef](widget_layer_control_checkbox._internal_.TrackableBooleanCheckbox.md#addref)
- [dispose](widget_layer_control_checkbox._internal_.TrackableBooleanCheckbox.md#dispose)
- [disposed](widget_layer_control_checkbox._internal_.TrackableBooleanCheckbox.md#disposed)
- [refCountReachedZero](widget_layer_control_checkbox._internal_.TrackableBooleanCheckbox.md#refcountreachedzero)
- [registerCancellable](widget_layer_control_checkbox._internal_.TrackableBooleanCheckbox.md#registercancellable)
- [registerDisposer](widget_layer_control_checkbox._internal_.TrackableBooleanCheckbox.md#registerdisposer)
- [registerEventListener](widget_layer_control_checkbox._internal_.TrackableBooleanCheckbox.md#registereventlistener)
- [unregisterDisposer](widget_layer_control_checkbox._internal_.TrackableBooleanCheckbox.md#unregisterdisposer)

## Constructors

### constructor

• **new TrackableBooleanCheckbox**(`model`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`boolean`\> |
| `options` | `Object` |
| `options.disableTitle?` | `string` |
| `options.enableTitle?` | `string` |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/trackable_boolean.ts:59](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/trackable_boolean.ts#L59)

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

[src/neuroglancer/trackable_boolean.ts:58](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/trackable_boolean.ts#L58)

___

### model

• **model**: [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`boolean`\>

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

▸ **addRef**(): [`TrackableBooleanCheckbox`](widget_layer_control_checkbox._internal_.TrackableBooleanCheckbox.md)

#### Returns

[`TrackableBooleanCheckbox`](widget_layer_control_checkbox._internal_.TrackableBooleanCheckbox.md)

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

[src/neuroglancer/trackable_boolean.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/trackable_boolean.ts#L87)

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
