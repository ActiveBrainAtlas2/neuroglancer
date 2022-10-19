[neuroglancer](../README.md) / [Modules](../modules.md) / [data\_panel\_layout](../modules/data_panel_layout.md) / DataDisplayLayout

# Interface: DataDisplayLayout

[data_panel_layout](../modules/data_panel_layout.md).DataDisplayLayout

## Hierarchy

- [`RefCounted`](../classes/axes_lines._internal_.RefCounted.md)

  ↳ **`DataDisplayLayout`**

## Table of contents

### Properties

- [container](data_panel_layout.DataDisplayLayout.md#container)
- [disposedStacks](data_panel_layout.DataDisplayLayout.md#disposedstacks)
- [refCount](data_panel_layout.DataDisplayLayout.md#refcount)
- [rootElement](data_panel_layout.DataDisplayLayout.md#rootelement)
- [wasDisposed](data_panel_layout.DataDisplayLayout.md#wasdisposed)

### Methods

- [addRef](data_panel_layout.DataDisplayLayout.md#addref)
- [dispose](data_panel_layout.DataDisplayLayout.md#dispose)
- [disposed](data_panel_layout.DataDisplayLayout.md#disposed)
- [refCountReachedZero](data_panel_layout.DataDisplayLayout.md#refcountreachedzero)
- [registerCancellable](data_panel_layout.DataDisplayLayout.md#registercancellable)
- [registerDisposer](data_panel_layout.DataDisplayLayout.md#registerdisposer)
- [registerEventListener](data_panel_layout.DataDisplayLayout.md#registereventlistener)
- [unregisterDisposer](data_panel_layout.DataDisplayLayout.md#unregisterdisposer)

## Properties

### container

• **container**: [`DataPanelLayoutContainer`](../classes/data_panel_layout.DataPanelLayoutContainer.md)

#### Defined in

[src/neuroglancer/data_panel_layout.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/data_panel_layout.ts#L76)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](../classes/axes_lines._internal_.RefCounted.md).[disposedStacks](../classes/axes_lines._internal_.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L52)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](../classes/axes_lines._internal_.RefCounted.md).[refCount](../classes/axes_lines._internal_.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L45)

___

### rootElement

• **rootElement**: [`HTMLElement`](../modules/axes_lines._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/data_panel_layout.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/data_panel_layout.ts#L75)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](../classes/axes_lines._internal_.RefCounted.md).[wasDisposed](../classes/axes_lines._internal_.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`DataDisplayLayout`](data_panel_layout.DataDisplayLayout.md)

#### Returns

[`DataDisplayLayout`](data_panel_layout.DataDisplayLayout.md)

#### Inherited from

[RefCounted](../classes/axes_lines._internal_.RefCounted.md).[addRef](../classes/axes_lines._internal_.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](../classes/axes_lines._internal_.RefCounted.md).[dispose](../classes/axes_lines._internal_.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](../classes/axes_lines._internal_.RefCounted.md).[disposed](../classes/axes_lines._internal_.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L75)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](../classes/axes_lines._internal_.RefCounted.md).[refCountReachedZero](../classes/axes_lines._internal_.RefCounted.md#refcountreachedzero)

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

[RefCounted](../classes/axes_lines._internal_.RefCounted.md).[registerCancellable](../classes/axes_lines._internal_.RefCounted.md#registercancellable)

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

[RefCounted](../classes/axes_lines._internal_.RefCounted.md).[registerDisposer](../classes/axes_lines._internal_.RefCounted.md#registerdisposer)

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
| `options?` | `boolean` \| [`AddEventListenerOptions`](axes_lines._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

[RefCounted](../classes/axes_lines._internal_.RefCounted.md).[registerEventListener](../classes/axes_lines._internal_.RefCounted.md#registereventlistener)

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

[RefCounted](../classes/axes_lines._internal_.RefCounted.md).[unregisterDisposer](../classes/axes_lines._internal_.RefCounted.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L85)
