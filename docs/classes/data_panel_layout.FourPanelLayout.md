[neuroglancer](../README.md) / [Modules](../modules.md) / [data\_panel\_layout](../modules/data_panel_layout.md) / FourPanelLayout

# Class: FourPanelLayout

[data_panel_layout](../modules/data_panel_layout.md).FourPanelLayout

## Hierarchy

- `RefCounted`

  ↳ **`FourPanelLayout`**

## Table of contents

### Constructors

- [constructor](data_panel_layout.FourPanelLayout.md#constructor)

### Properties

- [container](data_panel_layout.FourPanelLayout.md#container)
- [disposedStacks](data_panel_layout.FourPanelLayout.md#disposedstacks)
- [refCount](data_panel_layout.FourPanelLayout.md#refcount)
- [rootElement](data_panel_layout.FourPanelLayout.md#rootelement)
- [viewer](data_panel_layout.FourPanelLayout.md#viewer)
- [wasDisposed](data_panel_layout.FourPanelLayout.md#wasdisposed)

### Methods

- [addRef](data_panel_layout.FourPanelLayout.md#addref)
- [dispose](data_panel_layout.FourPanelLayout.md#dispose)
- [disposed](data_panel_layout.FourPanelLayout.md#disposed)
- [refCountReachedZero](data_panel_layout.FourPanelLayout.md#refcountreachedzero)
- [registerCancellable](data_panel_layout.FourPanelLayout.md#registercancellable)
- [registerDisposer](data_panel_layout.FourPanelLayout.md#registerdisposer)
- [registerEventListener](data_panel_layout.FourPanelLayout.md#registereventlistener)
- [unregisterDisposer](data_panel_layout.FourPanelLayout.md#unregisterdisposer)

## Constructors

### constructor

• **new FourPanelLayout**(`container`, `rootElement`, `viewer`, `crossSections`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`DataPanelLayoutContainer`](data_panel_layout.DataPanelLayoutContainer.md) |
| `rootElement` | `HTMLElement` |
| `viewer` | [`ViewerUIState`](../interfaces/data_panel_layout.ViewerUIState.md) |
| `crossSections` | [`CrossSectionSpecificationMap`](data_panel_layout.CrossSectionSpecificationMap.md) |

#### Overrides

RefCounted.constructor

#### Defined in

[src/neuroglancer/data_panel_layout.ts:249](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/data_panel_layout.ts#L249)

## Properties

### container

• **container**: [`DataPanelLayoutContainer`](data_panel_layout.DataPanelLayoutContainer.md)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

RefCounted.disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L52)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

RefCounted.refCount

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L45)

___

### rootElement

• **rootElement**: `HTMLElement`

___

### viewer

• **viewer**: [`ViewerUIState`](../interfaces/data_panel_layout.ViewerUIState.md)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

RefCounted.wasDisposed

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`FourPanelLayout`](data_panel_layout.FourPanelLayout.md)

#### Returns

[`FourPanelLayout`](data_panel_layout.FourPanelLayout.md)

#### Inherited from

RefCounted.addRef

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

RefCounted.dispose

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

RefCounted.disposed

#### Defined in

[src/neuroglancer/data_panel_layout.ts:314](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/data_panel_layout.ts#L314)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

RefCounted.refCountReachedZero

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L66)

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

RefCounted.registerCancellable

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L100)

___

### registerDisposer

▸ **registerDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Disposer` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

RefCounted.registerDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L76)

___

### registerEventListener

▸ **registerEventListener**(`target`, `type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `EventTarget` |
| `type` | `string` |
| `listener` | `EventListenerOrEventListenerObject` |
| `options?` | `boolean` \| `AddEventListenerOptions` |

#### Returns

`void`

#### Inherited from

RefCounted.registerEventListener

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L95)

___

### unregisterDisposer

▸ **unregisterDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Disposer` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

RefCounted.unregisterDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L85)
