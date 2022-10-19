[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/ui/layer\_side\_panel](../modules/neuroglancer_ui_layer_side_panel.md) / LayerSidePanelManager

# Class: LayerSidePanelManager

[neuroglancer/ui/layer_side_panel](../modules/neuroglancer_ui_layer_side_panel.md).LayerSidePanelManager

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`LayerSidePanelManager`**

## Table of contents

### Constructors

- [constructor](neuroglancer_ui_layer_side_panel.LayerSidePanelManager.md#constructor)

### Properties

- [disposedStacks](neuroglancer_ui_layer_side_panel.LayerSidePanelManager.md#disposedstacks)
- [generation](neuroglancer_ui_layer_side_panel.LayerSidePanelManager.md#generation)
- [layerSidePanels](neuroglancer_ui_layer_side_panel.LayerSidePanelManager.md#layersidepanels)
- [layersNeedUpdate](neuroglancer_ui_layer_side_panel.LayerSidePanelManager.md#layersneedupdate)
- [placeholderSelectedLayerPanel](neuroglancer_ui_layer_side_panel.LayerSidePanelManager.md#placeholderselectedlayerpanel)
- [refCount](neuroglancer_ui_layer_side_panel.LayerSidePanelManager.md#refcount)
- [selectedLayerState](neuroglancer_ui_layer_side_panel.LayerSidePanelManager.md#selectedlayerstate)
- [sidePanelManager](neuroglancer_ui_layer_side_panel.LayerSidePanelManager.md#sidepanelmanager)
- [wasDisposed](neuroglancer_ui_layer_side_panel.LayerSidePanelManager.md#wasdisposed)

### Methods

- [addRef](neuroglancer_ui_layer_side_panel.LayerSidePanelManager.md#addref)
- [dispose](neuroglancer_ui_layer_side_panel.LayerSidePanelManager.md#dispose)
- [disposed](neuroglancer_ui_layer_side_panel.LayerSidePanelManager.md#disposed)
- [getSelectedUserLayer](neuroglancer_ui_layer_side_panel.LayerSidePanelManager.md#getselecteduserlayer)
- [refCountReachedZero](neuroglancer_ui_layer_side_panel.LayerSidePanelManager.md#refcountreachedzero)
- [registerCancellable](neuroglancer_ui_layer_side_panel.LayerSidePanelManager.md#registercancellable)
- [registerDisposer](neuroglancer_ui_layer_side_panel.LayerSidePanelManager.md#registerdisposer)
- [registerEventListener](neuroglancer_ui_layer_side_panel.LayerSidePanelManager.md#registereventlistener)
- [unregisterDisposer](neuroglancer_ui_layer_side_panel.LayerSidePanelManager.md#unregisterdisposer)
- [update](neuroglancer_ui_layer_side_panel.LayerSidePanelManager.md#update)

## Constructors

### constructor

• **new LayerSidePanelManager**(`sidePanelManager`, `selectedLayerState`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sidePanelManager` | [`SidePanelManager`](neuroglancer_ui_side_panel.SidePanelManager.md) |
| `selectedLayerState` | [`SelectedLayerState`](neuroglancer_layer.SelectedLayerState.md) |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/ui/layer_side_panel.ts:314](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_side_panel.ts#L314)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### generation

• `Private` **generation**: `number` = `0`

#### Defined in

[src/neuroglancer/ui/layer_side_panel.ts:312](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_side_panel.ts#L312)

___

### layerSidePanels

• **layerSidePanels**: `Map`<[`UserLayerSidePanelState`](neuroglancer_ui_layer_side_panel_state.UserLayerSidePanelState.md), { `generation`: `number` ; `unregister`: () => `void`  }\>

#### Defined in

[src/neuroglancer/ui/layer_side_panel.ts:310](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_side_panel.ts#L310)

___

### layersNeedUpdate

• `Private` **layersNeedUpdate**: `boolean` = `true`

#### Defined in

[src/neuroglancer/ui/layer_side_panel.ts:313](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_side_panel.ts#L313)

___

### placeholderSelectedLayerPanel

• **placeholderSelectedLayerPanel**: `undefined` \| () => `void`

#### Defined in

[src/neuroglancer/ui/layer_side_panel.ts:309](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_side_panel.ts#L309)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### selectedLayerState

• **selectedLayerState**: [`SelectedLayerState`](neuroglancer_layer.SelectedLayerState.md)

___

### sidePanelManager

• **sidePanelManager**: [`SidePanelManager`](neuroglancer_ui_side_panel.SidePanelManager.md)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`LayerSidePanelManager`](neuroglancer_ui_layer_side_panel.LayerSidePanelManager.md)

#### Returns

[`LayerSidePanelManager`](neuroglancer_ui_layer_side_panel.LayerSidePanelManager.md)

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

[src/neuroglancer/ui/layer_side_panel.ts:386](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_side_panel.ts#L386)

___

### getSelectedUserLayer

▸ `Private` **getSelectedUserLayer**(): `undefined` \| [`UserLayer`](neuroglancer_layer.UserLayer.md)

#### Returns

`undefined` \| [`UserLayer`](neuroglancer_layer.UserLayer.md)

#### Defined in

[src/neuroglancer/ui/layer_side_panel.ts:326](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_side_panel.ts#L326)

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

___

### update

▸ `Private` **update**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/layer_side_panel.ts:330](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_side_panel.ts#L330)
