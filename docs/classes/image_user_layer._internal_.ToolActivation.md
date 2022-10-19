[neuroglancer](../README.md) / [Modules](../modules.md) / [image\_user\_layer](../modules/image_user_layer.md) / [<internal\>](../modules/image_user_layer._internal_.md) / ToolActivation

# Class: ToolActivation<ToolType\>

[image_user_layer](../modules/image_user_layer.md).[<internal>](../modules/image_user_layer._internal_.md).ToolActivation

## Type parameters

| Name | Type |
| :------ | :------ |
| `ToolType` | extends [`Tool`](image_user_layer._internal_.Tool.md) = [`Tool`](image_user_layer._internal_.Tool.md) |

## Hierarchy

- [`RefCounted`](axes_lines._internal_.RefCounted.md)

  ↳ **`ToolActivation`**

## Table of contents

### Constructors

- [constructor](image_user_layer._internal_.ToolActivation.md#constructor)

### Properties

- [disposedStacks](image_user_layer._internal_.ToolActivation.md#disposedstacks)
- [inputEventMapBinder](image_user_layer._internal_.ToolActivation.md#inputeventmapbinder)
- [refCount](image_user_layer._internal_.ToolActivation.md#refcount)
- [tool](image_user_layer._internal_.ToolActivation.md#tool)
- [wasDisposed](image_user_layer._internal_.ToolActivation.md#wasdisposed)

### Methods

- [addRef](image_user_layer._internal_.ToolActivation.md#addref)
- [bindAction](image_user_layer._internal_.ToolActivation.md#bindaction)
- [bindInputEventMap](image_user_layer._internal_.ToolActivation.md#bindinputeventmap)
- [cancel](image_user_layer._internal_.ToolActivation.md#cancel)
- [dispose](image_user_layer._internal_.ToolActivation.md#dispose)
- [disposed](image_user_layer._internal_.ToolActivation.md#disposed)
- [refCountReachedZero](image_user_layer._internal_.ToolActivation.md#refcountreachedzero)
- [registerCancellable](image_user_layer._internal_.ToolActivation.md#registercancellable)
- [registerDisposer](image_user_layer._internal_.ToolActivation.md#registerdisposer)
- [registerEventListener](image_user_layer._internal_.ToolActivation.md#registereventlistener)
- [unregisterDisposer](image_user_layer._internal_.ToolActivation.md#unregisterdisposer)

## Constructors

### constructor

• **new ToolActivation**<`ToolType`\>(`tool`, `inputEventMapBinder`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ToolType` | extends [`Tool`](image_user_layer._internal_.Tool.md)<[`UserLayer`](layer.UserLayer.md), `ToolType`\> = [`Tool`](image_user_layer._internal_.Tool.md)<[`UserLayer`](layer.UserLayer.md)\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `tool` | `ToolType` |
| `inputEventMapBinder` | [`InputEventMapBinder`](../modules/image_user_layer._internal_.md#inputeventmapbinder) |

#### Overrides

[RefCounted](axes_lines._internal_.RefCounted.md).[constructor](axes_lines._internal_.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/ui/tool.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/tool.ts#L39)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[disposedStacks](axes_lines._internal_.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L52)

___

### inputEventMapBinder

• **inputEventMapBinder**: [`InputEventMapBinder`](../modules/image_user_layer._internal_.md#inputeventmapbinder)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[refCount](axes_lines._internal_.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L45)

___

### tool

• **tool**: `ToolType`

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[wasDisposed](axes_lines._internal_.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`ToolActivation`](image_user_layer._internal_.ToolActivation.md)<`ToolType`\>

#### Returns

[`ToolActivation`](image_user_layer._internal_.ToolActivation.md)<`ToolType`\>

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[addRef](axes_lines._internal_.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L48)

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
| `listener` | (`event`: [`ActionEvent`](../interfaces/image_user_layer._internal_.ActionEvent.md)<`Info`\>) => `void` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/tool.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/tool.ts#L42)

___

### bindInputEventMap

▸ **bindInputEventMap**(`inputEventMap`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputEventMap` | [`EventActionMap`](data_panel_layout._internal_.EventActionMap.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/tool.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/tool.ts#L45)

___

### cancel

▸ **cancel**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/tool.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/tool.ts#L48)

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

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[disposed](axes_lines._internal_.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L75)

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
