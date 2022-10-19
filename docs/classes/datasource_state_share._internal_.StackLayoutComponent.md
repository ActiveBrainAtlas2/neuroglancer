[neuroglancer](../README.md) / [Modules](../modules.md) / [datasource/state\_share](../modules/datasource_state_share.md) / [<internal\>](../modules/datasource_state_share._internal_.md) / StackLayoutComponent

# Class: StackLayoutComponent

[datasource/state_share](../modules/datasource_state_share.md).[<internal>](../modules/datasource_state_share._internal_.md).StackLayoutComponent

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`StackLayoutComponent`**

## Implements

- [`LayoutComponent`](../interfaces/datasource_state_share._internal_.LayoutComponent.md)

## Table of contents

### Constructors

- [constructor](datasource_state_share._internal_.StackLayoutComponent.md#constructor)

### Properties

- [changed](datasource_state_share._internal_.StackLayoutComponent.md#changed)
- [container](datasource_state_share._internal_.StackLayoutComponent.md#container)
- [direction](datasource_state_share._internal_.StackLayoutComponent.md#direction)
- [disposedStacks](datasource_state_share._internal_.StackLayoutComponent.md#disposedstacks)
- [element](datasource_state_share._internal_.StackLayoutComponent.md#element)
- [refCount](datasource_state_share._internal_.StackLayoutComponent.md#refcount)
- [wasDisposed](datasource_state_share._internal_.StackLayoutComponent.md#wasdisposed)

### Accessors

- [length](datasource_state_share._internal_.StackLayoutComponent.md#length)
- [viewer](datasource_state_share._internal_.StackLayoutComponent.md#viewer)

### Methods

- [[iterator]](datasource_state_share._internal_.StackLayoutComponent.md#[iterator])
- [addRef](datasource_state_share._internal_.StackLayoutComponent.md#addref)
- [clear](datasource_state_share._internal_.StackLayoutComponent.md#clear)
- [dispose](datasource_state_share._internal_.StackLayoutComponent.md#dispose)
- [disposed](datasource_state_share._internal_.StackLayoutComponent.md#disposed)
- [get](datasource_state_share._internal_.StackLayoutComponent.md#get)
- [insertChild](datasource_state_share._internal_.StackLayoutComponent.md#insertchild)
- [makeDropPlaceholder](datasource_state_share._internal_.StackLayoutComponent.md#makedropplaceholder)
- [refCountReachedZero](datasource_state_share._internal_.StackLayoutComponent.md#refcountreachedzero)
- [registerCancellable](datasource_state_share._internal_.StackLayoutComponent.md#registercancellable)
- [registerDisposer](datasource_state_share._internal_.StackLayoutComponent.md#registerdisposer)
- [registerEventListener](datasource_state_share._internal_.StackLayoutComponent.md#registereventlistener)
- [toJSON](datasource_state_share._internal_.StackLayoutComponent.md#tojson)
- [unregisterDisposer](datasource_state_share._internal_.StackLayoutComponent.md#unregisterdisposer)

## Constructors

### constructor

• **new StackLayoutComponent**(`element`, `direction`, `children`, `container`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement) |
| `direction` | ``"row"`` \| ``"column"`` |
| `children` | `any`[] |
| `container` | [`LayoutComponentContainer`](datasource_state_share._internal_.LayoutComponentContainer.md) |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:451](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_groups_layout.ts#L451)

## Properties

### changed

• **changed**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Implementation of

[LayoutComponent](../interfaces/datasource_state_share._internal_.LayoutComponent.md).[changed](../interfaces/datasource_state_share._internal_.LayoutComponent.md#changed)

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:423](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_groups_layout.ts#L423)

___

### container

• **container**: [`LayoutComponentContainer`](datasource_state_share._internal_.LayoutComponentContainer.md)

___

### direction

• **direction**: ``"row"`` \| ``"column"``

___

### disposedStacks

• **disposedStacks**: `any`

#### Implementation of

[LayoutComponent](../interfaces/datasource_state_share._internal_.LayoutComponent.md).[disposedStacks](../interfaces/datasource_state_share._internal_.LayoutComponent.md#disposedstacks)

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement)

#### Implementation of

[LayoutComponent](../interfaces/datasource_state_share._internal_.LayoutComponent.md).[element](../interfaces/datasource_state_share._internal_.LayoutComponent.md#element)

___

### refCount

• **refCount**: `number` = `1`

#### Implementation of

[LayoutComponent](../interfaces/datasource_state_share._internal_.LayoutComponent.md).[refCount](../interfaces/datasource_state_share._internal_.LayoutComponent.md#refcount)

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Implementation of

[LayoutComponent](../interfaces/datasource_state_share._internal_.LayoutComponent.md).[wasDisposed](../interfaces/datasource_state_share._internal_.LayoutComponent.md#wasdisposed)

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### length

• `get` **length**(): `number`

#### Returns

`number`

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:425](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_groups_layout.ts#L425)

___

### viewer

• `get` **viewer**(): [`Viewer`](datasource_state_share._internal_.Viewer.md)

#### Returns

[`Viewer`](datasource_state_share._internal_.Viewer.md)

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:447](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_groups_layout.ts#L447)

## Methods

### [iterator]

▸ **[iterator]**(): [`Generator`](../interfaces/annotation_annotation_layer_state._internal_.Generator.md)<[`LayoutComponentContainer`](datasource_state_share._internal_.LayoutComponentContainer.md), `void`, `unknown`\>

#### Returns

[`Generator`](../interfaces/annotation_annotation_layer_state._internal_.Generator.md)<[`LayoutComponentContainer`](datasource_state_share._internal_.LayoutComponentContainer.md), `void`, `unknown`\>

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:496](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_groups_layout.ts#L496)

___

### addRef

▸ **addRef**(): [`StackLayoutComponent`](datasource_state_share._internal_.StackLayoutComponent.md)

#### Returns

[`StackLayoutComponent`](datasource_state_share._internal_.StackLayoutComponent.md)

#### Implementation of

[LayoutComponent](../interfaces/datasource_state_share._internal_.LayoutComponent.md).[addRef](../interfaces/datasource_state_share._internal_.LayoutComponent.md#addref)

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[addRef](util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:490](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_groups_layout.ts#L490)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Implementation of

[LayoutComponent](../interfaces/datasource_state_share._internal_.LayoutComponent.md).[dispose](../interfaces/datasource_state_share._internal_.LayoutComponent.md#dispose)

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[dispose](util_disposable.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Implementation of

[LayoutComponent](../interfaces/datasource_state_share._internal_.LayoutComponent.md).[disposed](../interfaces/datasource_state_share._internal_.LayoutComponent.md#disposed)

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[disposed](util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:485](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_groups_layout.ts#L485)

___

### get

▸ **get**(`index`): [`LayoutComponentContainer`](datasource_state_share._internal_.LayoutComponentContainer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

[`LayoutComponentContainer`](datasource_state_share._internal_.LayoutComponentContainer.md)

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:465](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_groups_layout.ts#L465)

___

### insertChild

▸ **insertChild**(`spec`, `before?`): [`LayoutComponentContainer`](datasource_state_share._internal_.LayoutComponentContainer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `spec` | `any` |
| `before?` | [`LayoutComponentContainer`](datasource_state_share._internal_.LayoutComponentContainer.md) |

#### Returns

[`LayoutComponentContainer`](datasource_state_share._internal_.LayoutComponentContainer.md)

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:469](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_groups_layout.ts#L469)

___

### makeDropPlaceholder

▸ `Private` **makeDropPlaceholder**(`refCounted`): [`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement)

#### Parameters

| Name | Type |
| :------ | :------ |
| `refCounted` | [`RefCounted`](util_disposable.RefCounted.md) |

#### Returns

[`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:429](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_groups_layout.ts#L429)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Implementation of

[LayoutComponent](../interfaces/datasource_state_share._internal_.LayoutComponent.md).[refCountReachedZero](../interfaces/datasource_state_share._internal_.LayoutComponent.md#refcountreachedzero)

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

#### Implementation of

[LayoutComponent](../interfaces/datasource_state_share._internal_.LayoutComponent.md).[registerCancellable](../interfaces/datasource_state_share._internal_.LayoutComponent.md#registercancellable)

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

#### Implementation of

[LayoutComponent](../interfaces/datasource_state_share._internal_.LayoutComponent.md).[registerDisposer](../interfaces/datasource_state_share._internal_.LayoutComponent.md#registerdisposer)

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

#### Implementation of

[LayoutComponent](../interfaces/datasource_state_share._internal_.LayoutComponent.md).[registerEventListener](../interfaces/datasource_state_share._internal_.LayoutComponent.md#registereventlistener)

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[registerEventListener](util_disposable.RefCounted.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L95)

___

### toJSON

▸ **toJSON**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `children` | `any`[] |
| `type` | ``"row"`` \| ``"column"`` |

#### Implementation of

[LayoutComponent](../interfaces/datasource_state_share._internal_.LayoutComponent.md).[toJSON](../interfaces/datasource_state_share._internal_.LayoutComponent.md#tojson)

#### Defined in

[src/neuroglancer/layer_groups_layout.ts:503](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer_groups_layout.ts#L503)

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

#### Implementation of

[LayoutComponent](../interfaces/datasource_state_share._internal_.LayoutComponent.md).[unregisterDisposer](../interfaces/datasource_state_share._internal_.LayoutComponent.md#unregisterdisposer)

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[unregisterDisposer](util_disposable.RefCounted.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)
