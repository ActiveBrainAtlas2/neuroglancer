[neuroglancer](../README.md) / [Modules](../modules.md) / [image\_user\_layer](../modules/image_user_layer.md) / [<internal\>](../modules/image_user_layer._internal_.md) / SelectedLegacyTool

# Class: SelectedLegacyTool

[image_user_layer](../modules/image_user_layer.md).[<internal>](../modules/image_user_layer._internal_.md).SelectedLegacyTool

## Hierarchy

- [`RefCounted`](axes_lines._internal_.RefCounted.md)

  ↳ **`SelectedLegacyTool`**

## Implements

- [`TrackableValueInterface`](../interfaces/trackable_value.TrackableValueInterface.md)<[`LegacyTool`](image_user_layer._internal_.LegacyTool.md) \| `undefined`\>

## Table of contents

### Constructors

- [constructor](image_user_layer._internal_.SelectedLegacyTool.md#constructor)

### Properties

- [changed](image_user_layer._internal_.SelectedLegacyTool.md#changed)
- [disposedStacks](image_user_layer._internal_.SelectedLegacyTool.md#disposedstacks)
- [layer](image_user_layer._internal_.SelectedLegacyTool.md#layer)
- [refCount](image_user_layer._internal_.SelectedLegacyTool.md#refcount)
- [value\_](image_user_layer._internal_.SelectedLegacyTool.md#value_)
- [wasDisposed](image_user_layer._internal_.SelectedLegacyTool.md#wasdisposed)

### Accessors

- [value](image_user_layer._internal_.SelectedLegacyTool.md#value)

### Methods

- [addRef](image_user_layer._internal_.SelectedLegacyTool.md#addref)
- [dispose](image_user_layer._internal_.SelectedLegacyTool.md#dispose)
- [disposed](image_user_layer._internal_.SelectedLegacyTool.md#disposed)
- [refCountReachedZero](image_user_layer._internal_.SelectedLegacyTool.md#refcountreachedzero)
- [registerCancellable](image_user_layer._internal_.SelectedLegacyTool.md#registercancellable)
- [registerDisposer](image_user_layer._internal_.SelectedLegacyTool.md#registerdisposer)
- [registerEventListener](image_user_layer._internal_.SelectedLegacyTool.md#registereventlistener)
- [reset](image_user_layer._internal_.SelectedLegacyTool.md#reset)
- [restoreState](image_user_layer._internal_.SelectedLegacyTool.md#restorestate)
- [toJSON](image_user_layer._internal_.SelectedLegacyTool.md#tojson)
- [unregister](image_user_layer._internal_.SelectedLegacyTool.md#unregister)
- [unregisterDisposer](image_user_layer._internal_.SelectedLegacyTool.md#unregisterdisposer)

## Constructors

### constructor

• **new SelectedLegacyTool**(`layer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`UserLayer`](layer.UserLayer.md) |

#### Overrides

[RefCounted](axes_lines._internal_.RefCounted.md).[constructor](axes_lines._internal_.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/ui/tool.ts:210](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/tool.ts#L210)

## Properties

### changed

• **changed**: [`Signal`](coordinate_transform._internal_.Signal.md)<() => `void`\>

#### Implementation of

[TrackableValueInterface](../interfaces/trackable_value.TrackableValueInterface.md).[changed](../interfaces/trackable_value.TrackableValueInterface.md#changed)

#### Defined in

[src/neuroglancer/ui/tool.ts:166](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/tool.ts#L166)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[disposedStacks](axes_lines._internal_.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L52)

___

### layer

• **layer**: [`UserLayer`](layer.UserLayer.md)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[refCount](axes_lines._internal_.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L45)

___

### value\_

• `Private` **value\_**: `undefined` \| [`LegacyTool`](image_user_layer._internal_.LegacyTool.md)<[`UserLayer`](layer.UserLayer.md)\>

#### Defined in

[src/neuroglancer/ui/tool.ts:167](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/tool.ts#L167)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[wasDisposed](axes_lines._internal_.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### value

• `get` **value**(): `undefined` \| [`LegacyTool`](image_user_layer._internal_.LegacyTool.md)<[`UserLayer`](layer.UserLayer.md)\>

#### Returns

`undefined` \| [`LegacyTool`](image_user_layer._internal_.LegacyTool.md)<[`UserLayer`](layer.UserLayer.md)\>

#### Implementation of

[TrackableValueInterface](../interfaces/trackable_value.TrackableValueInterface.md).[value](../interfaces/trackable_value.TrackableValueInterface.md#value)

#### Defined in

[src/neuroglancer/ui/tool.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/tool.ts#L169)

• `set` **value**(`newValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newValue` | `undefined` \| [`LegacyTool`](image_user_layer._internal_.LegacyTool.md)<[`UserLayer`](layer.UserLayer.md)\> |

#### Returns

`void`

#### Implementation of

[TrackableValueInterface](../interfaces/trackable_value.TrackableValueInterface.md).[value](../interfaces/trackable_value.TrackableValueInterface.md#value)

#### Defined in

[src/neuroglancer/ui/tool.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/tool.ts#L173)

## Methods

### addRef

▸ **addRef**(): [`SelectedLegacyTool`](image_user_layer._internal_.SelectedLegacyTool.md)

#### Returns

[`SelectedLegacyTool`](image_user_layer._internal_.SelectedLegacyTool.md)

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

[src/neuroglancer/ui/tool.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/tool.ts#L192)

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

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Implementation of

[TrackableValueInterface](../interfaces/trackable_value.TrackableValueInterface.md).[reset](../interfaces/trackable_value.TrackableValueInterface.md#reset)

#### Defined in

[src/neuroglancer/ui/tool.ts:201](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/tool.ts#L201)

___

### restoreState

▸ **restoreState**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `unknown` |

#### Returns

`void`

#### Implementation of

[TrackableValueInterface](../interfaces/trackable_value.TrackableValueInterface.md).[restoreState](../interfaces/trackable_value.TrackableValueInterface.md#restorestate)

#### Defined in

[src/neuroglancer/ui/tool.ts:197](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/tool.ts#L197)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Implementation of

[TrackableValueInterface](../interfaces/trackable_value.TrackableValueInterface.md).[toJSON](../interfaces/trackable_value.TrackableValueInterface.md#tojson)

#### Defined in

[src/neuroglancer/ui/tool.ts:205](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/tool.ts#L205)

___

### unregister

▸ `Private` **unregister**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/tool.ts:183](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/tool.ts#L183)

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
