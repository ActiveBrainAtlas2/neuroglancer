[neuroglancer](../README.md) / [Modules](../modules.md) / [image\_user\_layer](../modules/image_user_layer.md) / [<internal\>](../modules/image_user_layer._internal_.md) / Tool

# Class: Tool<LayerType\>

[image_user_layer](../modules/image_user_layer.md).[<internal>](../modules/image_user_layer._internal_.md).Tool

## Type parameters

| Name | Type |
| :------ | :------ |
| `LayerType` | extends [`UserLayer`](layer.UserLayer.md) = [`UserLayer`](layer.UserLayer.md) |

## Hierarchy

- [`RefCounted`](axes_lines._internal_.RefCounted.md)

  ↳ **`Tool`**

  ↳↳ [`LayerControlTool`](segmentation_user_layer._internal_.LayerControlTool.md)

## Table of contents

### Constructors

- [constructor](image_user_layer._internal_.Tool.md#constructor)

### Properties

- [changed](image_user_layer._internal_.Tool.md#changed)
- [description](image_user_layer._internal_.Tool.md#description)
- [disposedStacks](image_user_layer._internal_.Tool.md#disposedstacks)
- [keyBinding](image_user_layer._internal_.Tool.md#keybinding)
- [layer](image_user_layer._internal_.Tool.md#layer)
- [refCount](image_user_layer._internal_.Tool.md#refcount)
- [toggle](image_user_layer._internal_.Tool.md#toggle)
- [wasDisposed](image_user_layer._internal_.Tool.md#wasdisposed)

### Accessors

- [mouseState](image_user_layer._internal_.Tool.md#mousestate)

### Methods

- [activate](image_user_layer._internal_.Tool.md#activate)
- [addRef](image_user_layer._internal_.Tool.md#addref)
- [dispose](image_user_layer._internal_.Tool.md#dispose)
- [disposed](image_user_layer._internal_.Tool.md#disposed)
- [refCountReachedZero](image_user_layer._internal_.Tool.md#refcountreachedzero)
- [registerCancellable](image_user_layer._internal_.Tool.md#registercancellable)
- [registerDisposer](image_user_layer._internal_.Tool.md#registerdisposer)
- [registerEventListener](image_user_layer._internal_.Tool.md#registereventlistener)
- [toJSON](image_user_layer._internal_.Tool.md#tojson)
- [unbind](image_user_layer._internal_.Tool.md#unbind)
- [unregisterDisposer](image_user_layer._internal_.Tool.md#unregisterdisposer)

## Constructors

### constructor

• **new Tool**<`LayerType`\>(`layer`, `toggle?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `LayerType` | extends [`UserLayer`](layer.UserLayer.md)<`LayerType`\> = [`UserLayer`](layer.UserLayer.md) |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `layer` | `LayerType` | `undefined` |
| `toggle` | `boolean` | `false` |

#### Overrides

[RefCounted](axes_lines._internal_.RefCounted.md).[constructor](axes_lines._internal_.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/ui/tool.ts:58](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/tool.ts#L58)

## Properties

### changed

• **changed**: [`Signal`](coordinate_transform._internal_.Signal.md)<() => `void`\>

#### Defined in

[src/neuroglancer/ui/tool.ts:56](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/tool.ts#L56)

___

### description

• `Abstract` **description**: `string`

#### Defined in

[src/neuroglancer/ui/tool.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/tool.ts#L66)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[disposedStacks](axes_lines._internal_.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L52)

___

### keyBinding

• **keyBinding**: `undefined` \| `string` = `undefined`

#### Defined in

[src/neuroglancer/ui/tool.ts:57](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/tool.ts#L57)

___

### layer

• **layer**: `LayerType`

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[refCount](axes_lines._internal_.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L45)

___

### toggle

• **toggle**: `boolean` = `false`

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[wasDisposed](axes_lines._internal_.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### mouseState

• `get` **mouseState**(): [`MouseSelectionState`](layer.MouseSelectionState.md)

#### Returns

[`MouseSelectionState`](layer.MouseSelectionState.md)

#### Defined in

[src/neuroglancer/ui/tool.ts:61](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/tool.ts#L61)

## Methods

### activate

▸ `Abstract` **activate**(`activation`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `activation` | [`ToolActivation`](image_user_layer._internal_.ToolActivation.md)<[`Tool`](image_user_layer._internal_.Tool.md)<`LayerType`\>\> |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/tool.ts:64](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/tool.ts#L64)

___

### addRef

▸ **addRef**(): [`Tool`](image_user_layer._internal_.Tool.md)<`LayerType`\>

#### Returns

[`Tool`](image_user_layer._internal_.Tool.md)<`LayerType`\>

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

### toJSON

▸ `Abstract` **toJSON**(): `any`

#### Returns

`any`

#### Defined in

[src/neuroglancer/ui/tool.ts:65](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/tool.ts#L65)

___

### unbind

▸ **unbind**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/tool.ts:67](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/tool.ts#L67)

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
