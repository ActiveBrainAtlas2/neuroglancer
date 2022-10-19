[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/layer\_groups\_layout](../modules/neuroglancer_layer_groups_layout.md) / LayoutComponentContainer

# Class: LayoutComponentContainer

[neuroglancer/layer_groups_layout](../modules/neuroglancer_layer_groups_layout.md).LayoutComponentContainer

Container for a LayoutComponent.  The contained LayoutComponent may change.

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`LayoutComponentContainer`**

## Table of contents

### Constructors

- [constructor](neuroglancer_layer_groups_layout.LayoutComponentContainer.md#constructor)

### Properties

- [changed](neuroglancer_layer_groups_layout.LayoutComponentContainer.md#changed)
- [componentValue](neuroglancer_layer_groups_layout.LayoutComponentContainer.md#componentvalue)
- [disposedStacks](neuroglancer_layer_groups_layout.LayoutComponentContainer.md#disposedstacks)
- [element](neuroglancer_layer_groups_layout.LayoutComponentContainer.md#element)
- [parent](neuroglancer_layer_groups_layout.LayoutComponentContainer.md#parent)
- [refCount](neuroglancer_layer_groups_layout.LayoutComponentContainer.md#refcount)
- [viewer](neuroglancer_layer_groups_layout.LayoutComponentContainer.md#viewer)
- [wasDisposed](neuroglancer_layer_groups_layout.LayoutComponentContainer.md#wasdisposed)

### Accessors

- [component](neuroglancer_layer_groups_layout.LayoutComponentContainer.md#component)

### Methods

- [addRef](neuroglancer_layer_groups_layout.LayoutComponentContainer.md#addref)
- [dispose](neuroglancer_layer_groups_layout.LayoutComponentContainer.md#dispose)
- [disposed](neuroglancer_layer_groups_layout.LayoutComponentContainer.md#disposed)
- [refCountReachedZero](neuroglancer_layer_groups_layout.LayoutComponentContainer.md#refcountreachedzero)
- [registerCancellable](neuroglancer_layer_groups_layout.LayoutComponentContainer.md#registercancellable)
- [registerDisposer](neuroglancer_layer_groups_layout.LayoutComponentContainer.md#registerdisposer)
- [registerEventListener](neuroglancer_layer_groups_layout.LayoutComponentContainer.md#registereventlistener)
- [setComponent](neuroglancer_layer_groups_layout.LayoutComponentContainer.md#setcomponent)
- [setSpecification](neuroglancer_layer_groups_layout.LayoutComponentContainer.md#setspecification)
- [split](neuroglancer_layer_groups_layout.LayoutComponentContainer.md#split)
- [toJSON](neuroglancer_layer_groups_layout.LayoutComponentContainer.md#tojson)
- [unregisterDisposer](neuroglancer_layer_groups_layout.LayoutComponentContainer.md#unregisterdisposer)
- [unsetComponent](neuroglancer_layer_groups_layout.LayoutComponentContainer.md#unsetcomponent)
- [getFromElement](neuroglancer_layer_groups_layout.LayoutComponentContainer.md#getfromelement)

## Constructors

### constructor

• **new LayoutComponentContainer**(`viewer`, `spec`, `parent`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `viewer` | [`Viewer`](neuroglancer_viewer.Viewer.md) |
| `spec` | `any` |
| `parent` | `undefined` \| [`StackLayoutComponent`](neuroglancer_layer_groups_layout.StackLayoutComponent.md) |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:129](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer_groups_layout.ts#L129)

## Properties

### changed

• **changed**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer_groups_layout.ts#L48)

___

### componentValue

• `Private` **componentValue**: [`LayoutComponent`](../interfaces/neuroglancer_layer_groups_layout._internal_.LayoutComponent.md)

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer_groups_layout.ts#L49)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:127](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer_groups_layout.ts#L127)

___

### parent

• **parent**: `undefined` \| [`StackLayoutComponent`](neuroglancer_layer_groups_layout.StackLayoutComponent.md)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### viewer

• **viewer**: [`Viewer`](neuroglancer_viewer.Viewer.md)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### component

• `get` **component**(): [`LayoutComponent`](../interfaces/neuroglancer_layer_groups_layout._internal_.LayoutComponent.md)

#### Returns

[`LayoutComponent`](../interfaces/neuroglancer_layer_groups_layout._internal_.LayoutComponent.md)

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:60](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer_groups_layout.ts#L60)

## Methods

### addRef

▸ **addRef**(): [`LayoutComponentContainer`](neuroglancer_layer_groups_layout.LayoutComponentContainer.md)

#### Returns

[`LayoutComponentContainer`](neuroglancer_layer_groups_layout.LayoutComponentContainer.md)

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

[src/neuroglancer/layer_groups_layout.ts:240](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer_groups_layout.ts#L240)

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

### setComponent

▸ `Private` **setComponent**(`component`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `component` | [`LayoutComponent`](../interfaces/neuroglancer_layer_groups_layout._internal_.LayoutComponent.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:64](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer_groups_layout.ts#L64)

___

### setSpecification

▸ **setSpecification**(`spec`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `spec` | `any` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:232](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer_groups_layout.ts#L232)

___

### split

▸ **split**(`side`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `side` | ``"left"`` \| ``"top"`` \| ``"bottom"`` \| ``"right"`` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `existingContainer` | [`LayoutComponentContainer`](neuroglancer_layer_groups_layout.LayoutComponentContainer.md) |
| `newContainer` | [`LayoutComponentContainer`](neuroglancer_layer_groups_layout.LayoutComponentContainer.md) |

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:246](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer_groups_layout.ts#L246)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:228](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer_groups_layout.ts#L228)

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

### unsetComponent

▸ `Private` **unsetComponent**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:51](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer_groups_layout.ts#L51)

___

### getFromElement

▸ `Static` **getFromElement**(`element`): [`LayoutComponentContainer`](neuroglancer_layer_groups_layout.LayoutComponentContainer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | [`Element`](../modules/main_module._internal_.md#element) |

#### Returns

[`LayoutComponentContainer`](neuroglancer_layer_groups_layout.LayoutComponentContainer.md)

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:236](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer_groups_layout.ts#L236)
