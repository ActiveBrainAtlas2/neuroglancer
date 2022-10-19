[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/data\_panel\_layout](../modules/neuroglancer_data_panel_layout.md) / DataDisplayLayout

# Interface: DataDisplayLayout

[neuroglancer/data_panel_layout](../modules/neuroglancer_data_panel_layout.md).DataDisplayLayout

## Hierarchy

- [`RefCounted`](../classes/neuroglancer_util_disposable.RefCounted.md)

  ↳ **`DataDisplayLayout`**

## Table of contents

### Properties

- [container](neuroglancer_data_panel_layout.DataDisplayLayout.md#container)
- [disposedStacks](neuroglancer_data_panel_layout.DataDisplayLayout.md#disposedstacks)
- [refCount](neuroglancer_data_panel_layout.DataDisplayLayout.md#refcount)
- [rootElement](neuroglancer_data_panel_layout.DataDisplayLayout.md#rootelement)
- [wasDisposed](neuroglancer_data_panel_layout.DataDisplayLayout.md#wasdisposed)

### Methods

- [addRef](neuroglancer_data_panel_layout.DataDisplayLayout.md#addref)
- [dispose](neuroglancer_data_panel_layout.DataDisplayLayout.md#dispose)
- [disposed](neuroglancer_data_panel_layout.DataDisplayLayout.md#disposed)
- [refCountReachedZero](neuroglancer_data_panel_layout.DataDisplayLayout.md#refcountreachedzero)
- [registerCancellable](neuroglancer_data_panel_layout.DataDisplayLayout.md#registercancellable)
- [registerDisposer](neuroglancer_data_panel_layout.DataDisplayLayout.md#registerdisposer)
- [registerEventListener](neuroglancer_data_panel_layout.DataDisplayLayout.md#registereventlistener)
- [unregisterDisposer](neuroglancer_data_panel_layout.DataDisplayLayout.md#unregisterdisposer)

## Properties

### container

• **container**: [`DataPanelLayoutContainer`](../classes/neuroglancer_data_panel_layout.DataPanelLayoutContainer.md)

#### Defined in

[src/neuroglancer/data_panel_layout.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/data_panel_layout.ts#L76)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](../classes/neuroglancer_util_disposable.RefCounted.md).[disposedStacks](../classes/neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](../classes/neuroglancer_util_disposable.RefCounted.md).[refCount](../classes/neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### rootElement

• **rootElement**: [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/data_panel_layout.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/data_panel_layout.ts#L75)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](../classes/neuroglancer_util_disposable.RefCounted.md).[wasDisposed](../classes/neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`DataDisplayLayout`](neuroglancer_data_panel_layout.DataDisplayLayout.md)

#### Returns

[`DataDisplayLayout`](neuroglancer_data_panel_layout.DataDisplayLayout.md)

#### Inherited from

[RefCounted](../classes/neuroglancer_util_disposable.RefCounted.md).[addRef](../classes/neuroglancer_util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](../classes/neuroglancer_util_disposable.RefCounted.md).[dispose](../classes/neuroglancer_util_disposable.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](../classes/neuroglancer_util_disposable.RefCounted.md).[disposed](../classes/neuroglancer_util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L75)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](../classes/neuroglancer_util_disposable.RefCounted.md).[refCountReachedZero](../classes/neuroglancer_util_disposable.RefCounted.md#refcountreachedzero)

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

[RefCounted](../classes/neuroglancer_util_disposable.RefCounted.md).[registerCancellable](../classes/neuroglancer_util_disposable.RefCounted.md#registercancellable)

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

[RefCounted](../classes/neuroglancer_util_disposable.RefCounted.md).[registerDisposer](../classes/neuroglancer_util_disposable.RefCounted.md#registerdisposer)

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
| `options?` | `boolean` \| [`AddEventListenerOptions`](main_module._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

[RefCounted](../classes/neuroglancer_util_disposable.RefCounted.md).[registerEventListener](../classes/neuroglancer_util_disposable.RefCounted.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L95)

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

[RefCounted](../classes/neuroglancer_util_disposable.RefCounted.md).[unregisterDisposer](../classes/neuroglancer_util_disposable.RefCounted.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L85)
