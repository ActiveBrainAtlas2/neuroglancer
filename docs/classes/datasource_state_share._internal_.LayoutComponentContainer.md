[neuroglancer](../README.md) / [Modules](../modules.md) / [datasource/state\_share](../modules/datasource_state_share.md) / [<internal\>](../modules/datasource_state_share._internal_.md) / LayoutComponentContainer

# Class: LayoutComponentContainer

[datasource/state_share](../modules/datasource_state_share.md).[<internal>](../modules/datasource_state_share._internal_.md).LayoutComponentContainer

Container for a LayoutComponent.  The contained LayoutComponent may change.

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`LayoutComponentContainer`**

## Table of contents

### Constructors

- [constructor](datasource_state_share._internal_.LayoutComponentContainer.md#constructor)

### Properties

- [changed](datasource_state_share._internal_.LayoutComponentContainer.md#changed)
- [componentValue](datasource_state_share._internal_.LayoutComponentContainer.md#componentvalue)
- [disposedStacks](datasource_state_share._internal_.LayoutComponentContainer.md#disposedstacks)
- [element](datasource_state_share._internal_.LayoutComponentContainer.md#element)
- [parent](datasource_state_share._internal_.LayoutComponentContainer.md#parent)
- [refCount](datasource_state_share._internal_.LayoutComponentContainer.md#refcount)
- [viewer](datasource_state_share._internal_.LayoutComponentContainer.md#viewer)
- [wasDisposed](datasource_state_share._internal_.LayoutComponentContainer.md#wasdisposed)

### Accessors

- [component](datasource_state_share._internal_.LayoutComponentContainer.md#component)

### Methods

- [addRef](datasource_state_share._internal_.LayoutComponentContainer.md#addref)
- [dispose](datasource_state_share._internal_.LayoutComponentContainer.md#dispose)
- [disposed](datasource_state_share._internal_.LayoutComponentContainer.md#disposed)
- [refCountReachedZero](datasource_state_share._internal_.LayoutComponentContainer.md#refcountreachedzero)
- [registerCancellable](datasource_state_share._internal_.LayoutComponentContainer.md#registercancellable)
- [registerDisposer](datasource_state_share._internal_.LayoutComponentContainer.md#registerdisposer)
- [registerEventListener](datasource_state_share._internal_.LayoutComponentContainer.md#registereventlistener)
- [setComponent](datasource_state_share._internal_.LayoutComponentContainer.md#setcomponent)
- [setSpecification](datasource_state_share._internal_.LayoutComponentContainer.md#setspecification)
- [split](datasource_state_share._internal_.LayoutComponentContainer.md#split)
- [toJSON](datasource_state_share._internal_.LayoutComponentContainer.md#tojson)
- [unregisterDisposer](datasource_state_share._internal_.LayoutComponentContainer.md#unregisterdisposer)
- [unsetComponent](datasource_state_share._internal_.LayoutComponentContainer.md#unsetcomponent)
- [getFromElement](datasource_state_share._internal_.LayoutComponentContainer.md#getfromelement)

## Constructors

### constructor

• **new LayoutComponentContainer**(`viewer`, `spec`, `parent`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `viewer` | [`Viewer`](datasource_state_share._internal_.Viewer.md) |
| `spec` | `any` |
| `parent` | `undefined` \| [`StackLayoutComponent`](datasource_state_share._internal_.StackLayoutComponent.md) |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:129](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_groups_layout.ts#L129)

## Properties

### changed

• **changed**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_groups_layout.ts#L48)

___

### componentValue

• `Private` **componentValue**: [`LayoutComponent`](../interfaces/datasource_state_share._internal_.LayoutComponent.md)

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_groups_layout.ts#L49)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: [`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:127](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_groups_layout.ts#L127)

___

### parent

• **parent**: `undefined` \| [`StackLayoutComponent`](datasource_state_share._internal_.StackLayoutComponent.md)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### viewer

• **viewer**: [`Viewer`](datasource_state_share._internal_.Viewer.md)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### component

• `get` **component**(): [`LayoutComponent`](../interfaces/datasource_state_share._internal_.LayoutComponent.md)

#### Returns

[`LayoutComponent`](../interfaces/datasource_state_share._internal_.LayoutComponent.md)

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:60](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_groups_layout.ts#L60)

## Methods

### addRef

▸ **addRef**(): [`LayoutComponentContainer`](datasource_state_share._internal_.LayoutComponentContainer.md)

#### Returns

[`LayoutComponentContainer`](datasource_state_share._internal_.LayoutComponentContainer.md)

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

[src/neuroglancer/layer_groups_layout.ts:240](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_groups_layout.ts#L240)

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

### setComponent

▸ `Private` **setComponent**(`component`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `component` | [`LayoutComponent`](../interfaces/datasource_state_share._internal_.LayoutComponent.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:64](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_groups_layout.ts#L64)

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

[src/neuroglancer/layer_groups_layout.ts:232](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_groups_layout.ts#L232)

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
| `existingContainer` | [`LayoutComponentContainer`](datasource_state_share._internal_.LayoutComponentContainer.md) |
| `newContainer` | [`LayoutComponentContainer`](datasource_state_share._internal_.LayoutComponentContainer.md) |

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:246](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_groups_layout.ts#L246)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:228](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_groups_layout.ts#L228)

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

### unsetComponent

▸ `Private` **unsetComponent**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:51](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_groups_layout.ts#L51)

___

### getFromElement

▸ `Static` **getFromElement**(`element`): [`LayoutComponentContainer`](datasource_state_share._internal_.LayoutComponentContainer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | [`Element`](../modules/annotation_annotation_layer_state._internal_.md#element) |

#### Returns

[`LayoutComponentContainer`](datasource_state_share._internal_.LayoutComponentContainer.md)

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:236](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_groups_layout.ts#L236)
