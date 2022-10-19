[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/data\_panel\_layout](../modules/neuroglancer_data_panel_layout.md) / SliceViewPerspectiveTwoPanelLayout

# Class: SliceViewPerspectiveTwoPanelLayout

[neuroglancer/data_panel_layout](../modules/neuroglancer_data_panel_layout.md).SliceViewPerspectiveTwoPanelLayout

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`SliceViewPerspectiveTwoPanelLayout`**

## Table of contents

### Constructors

- [constructor](neuroglancer_data_panel_layout.SliceViewPerspectiveTwoPanelLayout.md#constructor)

### Properties

- [container](neuroglancer_data_panel_layout.SliceViewPerspectiveTwoPanelLayout.md#container)
- [direction](neuroglancer_data_panel_layout.SliceViewPerspectiveTwoPanelLayout.md#direction)
- [disposedStacks](neuroglancer_data_panel_layout.SliceViewPerspectiveTwoPanelLayout.md#disposedstacks)
- [refCount](neuroglancer_data_panel_layout.SliceViewPerspectiveTwoPanelLayout.md#refcount)
- [rootElement](neuroglancer_data_panel_layout.SliceViewPerspectiveTwoPanelLayout.md#rootelement)
- [viewer](neuroglancer_data_panel_layout.SliceViewPerspectiveTwoPanelLayout.md#viewer)
- [wasDisposed](neuroglancer_data_panel_layout.SliceViewPerspectiveTwoPanelLayout.md#wasdisposed)

### Methods

- [addRef](neuroglancer_data_panel_layout.SliceViewPerspectiveTwoPanelLayout.md#addref)
- [dispose](neuroglancer_data_panel_layout.SliceViewPerspectiveTwoPanelLayout.md#dispose)
- [disposed](neuroglancer_data_panel_layout.SliceViewPerspectiveTwoPanelLayout.md#disposed)
- [refCountReachedZero](neuroglancer_data_panel_layout.SliceViewPerspectiveTwoPanelLayout.md#refcountreachedzero)
- [registerCancellable](neuroglancer_data_panel_layout.SliceViewPerspectiveTwoPanelLayout.md#registercancellable)
- [registerDisposer](neuroglancer_data_panel_layout.SliceViewPerspectiveTwoPanelLayout.md#registerdisposer)
- [registerEventListener](neuroglancer_data_panel_layout.SliceViewPerspectiveTwoPanelLayout.md#registereventlistener)
- [unregisterDisposer](neuroglancer_data_panel_layout.SliceViewPerspectiveTwoPanelLayout.md#unregisterdisposer)

## Constructors

### constructor

• **new SliceViewPerspectiveTwoPanelLayout**(`container`, `rootElement`, `viewer`, `direction`, `axes`, `crossSections`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`DataPanelLayoutContainer`](neuroglancer_data_panel_layout.DataPanelLayoutContainer.md) |
| `rootElement` | [`HTMLElement`](../modules/main_module._internal_.md#htmlelement) |
| `viewer` | [`ViewerUIState`](../interfaces/neuroglancer_data_panel_layout.ViewerUIState.md) |
| `direction` | ``"row"`` \| ``"column"`` |
| `axes` | [`NamedAxes`](../modules/neuroglancer_data_panel_layout._internal_.md#namedaxes) |
| `crossSections` | [`CrossSectionSpecificationMap`](neuroglancer_data_panel_layout.CrossSectionSpecificationMap.md) |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/data_panel_layout.ts:321](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/data_panel_layout.ts#L321)

## Properties

### container

• **container**: [`DataPanelLayoutContainer`](neuroglancer_data_panel_layout.DataPanelLayoutContainer.md)

___

### direction

• **direction**: ``"row"`` \| ``"column"``

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

### rootElement

• **rootElement**: [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)

___

### viewer

• **viewer**: [`ViewerUIState`](../interfaces/neuroglancer_data_panel_layout.ViewerUIState.md)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`SliceViewPerspectiveTwoPanelLayout`](neuroglancer_data_panel_layout.SliceViewPerspectiveTwoPanelLayout.md)

#### Returns

[`SliceViewPerspectiveTwoPanelLayout`](neuroglancer_data_panel_layout.SliceViewPerspectiveTwoPanelLayout.md)

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

[src/neuroglancer/data_panel_layout.ts:363](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/data_panel_layout.ts#L363)

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
