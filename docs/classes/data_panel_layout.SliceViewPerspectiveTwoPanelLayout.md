[neuroglancer](../README.md) / [Modules](../modules.md) / [data\_panel\_layout](../modules/data_panel_layout.md) / SliceViewPerspectiveTwoPanelLayout

# Class: SliceViewPerspectiveTwoPanelLayout

[data_panel_layout](../modules/data_panel_layout.md).SliceViewPerspectiveTwoPanelLayout

## Hierarchy

- [`RefCounted`](axes_lines._internal_.RefCounted.md)

  ↳ **`SliceViewPerspectiveTwoPanelLayout`**

## Table of contents

### Constructors

- [constructor](data_panel_layout.SliceViewPerspectiveTwoPanelLayout.md#constructor)

### Properties

- [container](data_panel_layout.SliceViewPerspectiveTwoPanelLayout.md#container)
- [direction](data_panel_layout.SliceViewPerspectiveTwoPanelLayout.md#direction)
- [disposedStacks](data_panel_layout.SliceViewPerspectiveTwoPanelLayout.md#disposedstacks)
- [refCount](data_panel_layout.SliceViewPerspectiveTwoPanelLayout.md#refcount)
- [rootElement](data_panel_layout.SliceViewPerspectiveTwoPanelLayout.md#rootelement)
- [viewer](data_panel_layout.SliceViewPerspectiveTwoPanelLayout.md#viewer)
- [wasDisposed](data_panel_layout.SliceViewPerspectiveTwoPanelLayout.md#wasdisposed)

### Methods

- [addRef](data_panel_layout.SliceViewPerspectiveTwoPanelLayout.md#addref)
- [dispose](data_panel_layout.SliceViewPerspectiveTwoPanelLayout.md#dispose)
- [disposed](data_panel_layout.SliceViewPerspectiveTwoPanelLayout.md#disposed)
- [refCountReachedZero](data_panel_layout.SliceViewPerspectiveTwoPanelLayout.md#refcountreachedzero)
- [registerCancellable](data_panel_layout.SliceViewPerspectiveTwoPanelLayout.md#registercancellable)
- [registerDisposer](data_panel_layout.SliceViewPerspectiveTwoPanelLayout.md#registerdisposer)
- [registerEventListener](data_panel_layout.SliceViewPerspectiveTwoPanelLayout.md#registereventlistener)
- [unregisterDisposer](data_panel_layout.SliceViewPerspectiveTwoPanelLayout.md#unregisterdisposer)

## Constructors

### constructor

• **new SliceViewPerspectiveTwoPanelLayout**(`container`, `rootElement`, `viewer`, `direction`, `axes`, `crossSections`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`DataPanelLayoutContainer`](data_panel_layout.DataPanelLayoutContainer.md) |
| `rootElement` | [`HTMLElement`](../modules/axes_lines._internal_.md#htmlelement) |
| `viewer` | [`ViewerUIState`](../interfaces/data_panel_layout.ViewerUIState.md) |
| `direction` | ``"row"`` \| ``"column"`` |
| `axes` | [`NamedAxes`](../modules/data_panel_layout._internal_.md#namedaxes) |
| `crossSections` | [`CrossSectionSpecificationMap`](data_panel_layout.CrossSectionSpecificationMap.md) |

#### Overrides

[RefCounted](axes_lines._internal_.RefCounted.md).[constructor](axes_lines._internal_.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/data_panel_layout.ts:321](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/data_panel_layout.ts#L321)

## Properties

### container

• **container**: [`DataPanelLayoutContainer`](data_panel_layout.DataPanelLayoutContainer.md)

___

### direction

• **direction**: ``"row"`` \| ``"column"``

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[disposedStacks](axes_lines._internal_.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L52)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[refCount](axes_lines._internal_.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L45)

___

### rootElement

• **rootElement**: [`HTMLElement`](../modules/axes_lines._internal_.md#htmlelement)

___

### viewer

• **viewer**: [`ViewerUIState`](../interfaces/data_panel_layout.ViewerUIState.md)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[wasDisposed](axes_lines._internal_.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`SliceViewPerspectiveTwoPanelLayout`](data_panel_layout.SliceViewPerspectiveTwoPanelLayout.md)

#### Returns

[`SliceViewPerspectiveTwoPanelLayout`](data_panel_layout.SliceViewPerspectiveTwoPanelLayout.md)

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

[src/neuroglancer/data_panel_layout.ts:363](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/data_panel_layout.ts#L363)

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
