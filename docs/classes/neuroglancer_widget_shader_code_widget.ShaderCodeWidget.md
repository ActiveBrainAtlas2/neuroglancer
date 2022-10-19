[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/widget/shader\_code\_widget](../modules/neuroglancer_widget_shader_code_widget.md) / ShaderCodeWidget

# Class: ShaderCodeWidget

[neuroglancer/widget/shader_code_widget](../modules/neuroglancer_widget_shader_code_widget.md).ShaderCodeWidget

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`ShaderCodeWidget`**

## Table of contents

### Constructors

- [constructor](neuroglancer_widget_shader_code_widget.ShaderCodeWidget.md#constructor)

### Properties

- [changingValue](neuroglancer_widget_shader_code_widget.ShaderCodeWidget.md#changingvalue)
- [debouncedValueUpdater](neuroglancer_widget_shader_code_widget.ShaderCodeWidget.md#debouncedvalueupdater)
- [disposedStacks](neuroglancer_widget_shader_code_widget.ShaderCodeWidget.md#disposedstacks)
- [refCount](neuroglancer_widget_shader_code_widget.ShaderCodeWidget.md#refcount)
- [state](neuroglancer_widget_shader_code_widget.ShaderCodeWidget.md#state)
- [textEditor](neuroglancer_widget_shader_code_widget.ShaderCodeWidget.md#texteditor)
- [wasDisposed](neuroglancer_widget_shader_code_widget.ShaderCodeWidget.md#wasdisposed)

### Accessors

- [element](neuroglancer_widget_shader_code_widget.ShaderCodeWidget.md#element)

### Methods

- [addRef](neuroglancer_widget_shader_code_widget.ShaderCodeWidget.md#addref)
- [dispose](neuroglancer_widget_shader_code_widget.ShaderCodeWidget.md#dispose)
- [disposed](neuroglancer_widget_shader_code_widget.ShaderCodeWidget.md#disposed)
- [refCountReachedZero](neuroglancer_widget_shader_code_widget.ShaderCodeWidget.md#refcountreachedzero)
- [registerCancellable](neuroglancer_widget_shader_code_widget.ShaderCodeWidget.md#registercancellable)
- [registerDisposer](neuroglancer_widget_shader_code_widget.ShaderCodeWidget.md#registerdisposer)
- [registerEventListener](neuroglancer_widget_shader_code_widget.ShaderCodeWidget.md#registereventlistener)
- [setValidState](neuroglancer_widget_shader_code_widget.ShaderCodeWidget.md#setvalidstate)
- [unregisterDisposer](neuroglancer_widget_shader_code_widget.ShaderCodeWidget.md#unregisterdisposer)
- [updateErrorState](neuroglancer_widget_shader_code_widget.ShaderCodeWidget.md#updateerrorstate)

## Constructors

### constructor

• **new ShaderCodeWidget**(`state`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`ShaderCodeState`](../interfaces/neuroglancer_widget_shader_code_widget._internal_.ShaderCodeState.md) |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/widget/shader_code_widget.ts:63](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/shader_code_widget.ts#L63)

## Properties

### changingValue

• `Private` **changingValue**: `boolean` = `false`

#### Defined in

[src/neuroglancer/widget/shader_code_widget.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/shader_code_widget.ts#L53)

___

### debouncedValueUpdater

• `Private` **debouncedValueUpdater**: [`DebouncedFunc`](../interfaces/neuroglancer_chunk_manager_backend._internal_.DebouncedFunc.md)<() => `void`\>

#### Defined in

[src/neuroglancer/widget/shader_code_widget.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/shader_code_widget.ts#L54)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### state

• **state**: [`ShaderCodeState`](../interfaces/neuroglancer_widget_shader_code_widget._internal_.ShaderCodeState.md)

___

### textEditor

• **textEditor**: `Editor`

#### Defined in

[src/neuroglancer/widget/shader_code_widget.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/shader_code_widget.ts#L49)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### element

• `get` **element**(): [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)

#### Returns

[`HTMLElement`](../modules/main_module._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/widget/shader_code_widget.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/shader_code_widget.ts#L50)

## Methods

### addRef

▸ **addRef**(): [`ShaderCodeWidget`](neuroglancer_widget_shader_code_widget.ShaderCodeWidget.md)

#### Returns

[`ShaderCodeWidget`](neuroglancer_widget_shader_code_widget.ShaderCodeWidget.md)

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[addRef](neuroglancer_util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[dispose](neuroglancer_util_disposable.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposed](neuroglancer_util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/widget/shader_code_widget.ts:168](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/shader_code_widget.ts#L168)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCountReachedZero](neuroglancer_util_disposable.RefCounted.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L66)

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

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[registerCancellable](neuroglancer_util_disposable.RefCounted.md#registercancellable)

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L100)

___

### registerDisposer

▸ **registerDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/neuroglancer_util_disposable.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[registerDisposer](neuroglancer_util_disposable.RefCounted.md#registerdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L76)

___

### registerEventListener

▸ **registerEventListener**(`target`, `type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EventTarget`](../modules/main_module._internal_.md#eventtarget) |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/main_module._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](../interfaces/main_module._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[registerEventListener](neuroglancer_util_disposable.RefCounted.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L95)

___

### setValidState

▸ **setValidState**(`valid?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `valid?` | `boolean` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/shader_code_widget.ts:157](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/shader_code_widget.ts#L157)

___

### unregisterDisposer

▸ **unregisterDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/neuroglancer_util_disposable.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[unregisterDisposer](neuroglancer_util_disposable.RefCounted.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L85)

___

### updateErrorState

▸ **updateErrorState**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/shader_code_widget.ts:101](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/shader_code_widget.ts#L101)
