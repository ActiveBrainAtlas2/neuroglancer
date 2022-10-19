[neuroglancer](../README.md) / [Modules](../modules.md) / [ui/tool](../modules/ui_tool.md) / ToolActivation

# Class: ToolActivation<ToolType\>

[ui/tool](../modules/ui_tool.md).ToolActivation

## Type parameters

| Name | Type |
| :------ | :------ |
| `ToolType` | extends [`Tool`](ui_tool.Tool.md) = [`Tool`](ui_tool.Tool.md) |

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`ToolActivation`**

## Table of contents

### Constructors

- [constructor](ui_tool.ToolActivation.md#constructor)

### Properties

- [disposedStacks](ui_tool.ToolActivation.md#disposedstacks)
- [inputEventMapBinder](ui_tool.ToolActivation.md#inputeventmapbinder)
- [refCount](ui_tool.ToolActivation.md#refcount)
- [tool](ui_tool.ToolActivation.md#tool)
- [wasDisposed](ui_tool.ToolActivation.md#wasdisposed)

### Methods

- [addRef](ui_tool.ToolActivation.md#addref)
- [bindAction](ui_tool.ToolActivation.md#bindaction)
- [bindInputEventMap](ui_tool.ToolActivation.md#bindinputeventmap)
- [cancel](ui_tool.ToolActivation.md#cancel)
- [dispose](ui_tool.ToolActivation.md#dispose)
- [disposed](ui_tool.ToolActivation.md#disposed)
- [refCountReachedZero](ui_tool.ToolActivation.md#refcountreachedzero)
- [registerCancellable](ui_tool.ToolActivation.md#registercancellable)
- [registerDisposer](ui_tool.ToolActivation.md#registerdisposer)
- [registerEventListener](ui_tool.ToolActivation.md#registereventlistener)
- [unregisterDisposer](ui_tool.ToolActivation.md#unregisterdisposer)

## Constructors

### constructor

• **new ToolActivation**<`ToolType`\>(`tool`, `inputEventMapBinder`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ToolType` | extends [`Tool`](ui_tool.Tool.md)<[`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md), `ToolType`\> = [`Tool`](ui_tool.Tool.md)<[`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `tool` | `ToolType` |
| `inputEventMapBinder` | [`InputEventMapBinder`](../modules/ui_tool.md#inputeventmapbinder) |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/ui/tool.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L39)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### inputEventMapBinder

• **inputEventMapBinder**: [`InputEventMapBinder`](../modules/ui_tool.md#inputeventmapbinder)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### tool

• **tool**: `ToolType`

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`ToolActivation`](ui_tool.ToolActivation.md)<`ToolType`\>

#### Returns

[`ToolActivation`](ui_tool.ToolActivation.md)<`ToolType`\>

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[addRef](util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### bindAction

▸ **bindAction**<`Info`\>(`action`, `listener`): `void`

#### Type parameters

| Name |
| :------ |
| `Info` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | `string` |
| `listener` | (`event`: [`ActionEvent`](../interfaces/util_event_action_map.ActionEvent.md)<`Info`\>) => `void` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/tool.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L42)

___

### bindInputEventMap

▸ **bindInputEventMap**(`inputEventMap`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputEventMap` | [`EventActionMap`](util_event_action_map.EventActionMap.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/tool.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L45)

___

### cancel

▸ **cancel**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/tool.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L48)

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
