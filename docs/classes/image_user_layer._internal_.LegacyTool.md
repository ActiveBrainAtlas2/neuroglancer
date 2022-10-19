[neuroglancer](../README.md) / [Modules](../modules.md) / [image\_user\_layer](../modules/image_user_layer.md) / [<internal\>](../modules/image_user_layer._internal_.md) / LegacyTool

# Class: LegacyTool<LayerType\>

[image_user_layer](../modules/image_user_layer.md).[<internal>](../modules/image_user_layer._internal_.md).LegacyTool

## Type parameters

| Name | Type |
| :------ | :------ |
| `LayerType` | extends [`UserLayer`](layer.UserLayer.md) = [`UserLayer`](layer.UserLayer.md) |

## Hierarchy

- [`RefCounted`](axes_lines._internal_.RefCounted.md)

  ↳ **`LegacyTool`**

## Table of contents

### Constructors

- [constructor](image_user_layer._internal_.LegacyTool.md#constructor)

### Properties

- [changed](image_user_layer._internal_.LegacyTool.md#changed)
- [description](image_user_layer._internal_.LegacyTool.md#description)
- [disposedStacks](image_user_layer._internal_.LegacyTool.md#disposedstacks)
- [layer](image_user_layer._internal_.LegacyTool.md#layer)
- [refCount](image_user_layer._internal_.LegacyTool.md#refcount)
- [wasDisposed](image_user_layer._internal_.LegacyTool.md#wasdisposed)

### Accessors

- [mouseState](image_user_layer._internal_.LegacyTool.md#mousestate)

### Methods

- [addRef](image_user_layer._internal_.LegacyTool.md#addref)
- [deactivate](image_user_layer._internal_.LegacyTool.md#deactivate)
- [dispose](image_user_layer._internal_.LegacyTool.md#dispose)
- [disposed](image_user_layer._internal_.LegacyTool.md#disposed)
- [refCountReachedZero](image_user_layer._internal_.LegacyTool.md#refcountreachedzero)
- [registerCancellable](image_user_layer._internal_.LegacyTool.md#registercancellable)
- [registerDisposer](image_user_layer._internal_.LegacyTool.md#registerdisposer)
- [registerEventListener](image_user_layer._internal_.LegacyTool.md#registereventlistener)
- [setActive](image_user_layer._internal_.LegacyTool.md#setactive)
- [toJSON](image_user_layer._internal_.LegacyTool.md#tojson)
- [trigger](image_user_layer._internal_.LegacyTool.md#trigger)
- [unbind](image_user_layer._internal_.LegacyTool.md#unbind)
- [unregisterDisposer](image_user_layer._internal_.LegacyTool.md#unregisterdisposer)

## Constructors

### constructor

• **new LegacyTool**<`LayerType`\>(`layer`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `LayerType` | extends [`UserLayer`](layer.UserLayer.md)<`LayerType`\> = [`UserLayer`](layer.UserLayer.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | `LayerType` |

#### Overrides

[RefCounted](axes_lines._internal_.RefCounted.md).[constructor](axes_lines._internal_.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/ui/tool.ts:78](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/tool.ts#L78)

## Properties

### changed

• **changed**: [`Signal`](coordinate_transform._internal_.Signal.md)<() => `void`\>

#### Defined in

[src/neuroglancer/ui/tool.ts:77](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/tool.ts#L77)

___

### description

• `Abstract` **description**: `string`

#### Defined in

[src/neuroglancer/ui/tool.ts:88](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/tool.ts#L88)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[disposedStacks](axes_lines._internal_.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L52)

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

[src/neuroglancer/ui/tool.ts:81](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/tool.ts#L81)

## Methods

### addRef

▸ **addRef**(): [`LegacyTool`](image_user_layer._internal_.LegacyTool.md)<`LayerType`\>

#### Returns

[`LegacyTool`](image_user_layer._internal_.LegacyTool.md)<`LayerType`\>

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[addRef](axes_lines._internal_.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L48)

___

### deactivate

▸ **deactivate**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/tool.ts:86](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/tool.ts#L86)

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

### setActive

▸ **setActive**(`_value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/tool.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/tool.ts#L87)

___

### toJSON

▸ `Abstract` **toJSON**(): `any`

#### Returns

`any`

#### Defined in

[src/neuroglancer/ui/tool.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/tool.ts#L85)

___

### trigger

▸ `Abstract` **trigger**(`mouseState`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mouseState` | [`MouseSelectionState`](layer.MouseSelectionState.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/tool.ts:84](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/tool.ts#L84)

___

### unbind

▸ **unbind**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/tool.ts:89](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/tool.ts#L89)

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
