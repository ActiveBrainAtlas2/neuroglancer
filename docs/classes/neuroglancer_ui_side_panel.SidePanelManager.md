[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/ui/side\_panel](../modules/neuroglancer_ui_side_panel.md) / SidePanelManager

# Class: SidePanelManager

[neuroglancer/ui/side_panel](../modules/neuroglancer_ui_side_panel.md).SidePanelManager

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`SidePanelManager`**

## Table of contents

### Constructors

- [constructor](neuroglancer_ui_side_panel.SidePanelManager.md#constructor)

### Properties

- [beforeRender](neuroglancer_ui_side_panel.SidePanelManager.md#beforerender)
- [center](neuroglancer_ui_side_panel.SidePanelManager.md#center)
- [centerColumn](neuroglancer_ui_side_panel.SidePanelManager.md#centercolumn)
- [display](neuroglancer_ui_side_panel.SidePanelManager.md#display)
- [disposedStacks](neuroglancer_ui_side_panel.SidePanelManager.md#disposedstacks)
- [dragSource](neuroglancer_ui_side_panel.SidePanelManager.md#dragsource)
- [element](neuroglancer_ui_side_panel.SidePanelManager.md#element)
- [layoutNeedsUpdate](neuroglancer_ui_side_panel.SidePanelManager.md#layoutneedsupdate)
- [refCount](neuroglancer_ui_side_panel.SidePanelManager.md#refcount)
- [registeredPanels](neuroglancer_ui_side_panel.SidePanelManager.md#registeredpanels)
- [sides](neuroglancer_ui_side_panel.SidePanelManager.md#sides)
- [visibility](neuroglancer_ui_side_panel.SidePanelManager.md#visibility)
- [wasDisposed](neuroglancer_ui_side_panel.SidePanelManager.md#wasdisposed)

### Accessors

- [visible](neuroglancer_ui_side_panel.SidePanelManager.md#visible)

### Methods

- [addRef](neuroglancer_ui_side_panel.SidePanelManager.md#addref)
- [dispose](neuroglancer_ui_side_panel.SidePanelManager.md#dispose)
- [disposed](neuroglancer_ui_side_panel.SidePanelManager.md#disposed)
- [endDrag](neuroglancer_ui_side_panel.SidePanelManager.md#enddrag)
- [hasDroppablePanel](neuroglancer_ui_side_panel.SidePanelManager.md#hasdroppablepanel)
- [invalidateLayout](neuroglancer_ui_side_panel.SidePanelManager.md#invalidatelayout)
- [makeCrossGutter](neuroglancer_ui_side_panel.SidePanelManager.md#makecrossgutter)
- [makeDropZone](neuroglancer_ui_side_panel.SidePanelManager.md#makedropzone)
- [makeFlexGutter](neuroglancer_ui_side_panel.SidePanelManager.md#makeflexgutter)
- [makeSidePanelSideState](neuroglancer_ui_side_panel.SidePanelManager.md#makesidepanelsidestate)
- [refCountReachedZero](neuroglancer_ui_side_panel.SidePanelManager.md#refcountreachedzero)
- [registerCancellable](neuroglancer_ui_side_panel.SidePanelManager.md#registercancellable)
- [registerDisposer](neuroglancer_ui_side_panel.SidePanelManager.md#registerdisposer)
- [registerEventListener](neuroglancer_ui_side_panel.SidePanelManager.md#registereventlistener)
- [registerPanel](neuroglancer_ui_side_panel.SidePanelManager.md#registerpanel)
- [render](neuroglancer_ui_side_panel.SidePanelManager.md#render)
- [renderSide](neuroglancer_ui_side_panel.SidePanelManager.md#renderside)
- [startDrag](neuroglancer_ui_side_panel.SidePanelManager.md#startdrag)
- [unregisterDisposer](neuroglancer_ui_side_panel.SidePanelManager.md#unregisterdisposer)
- [unregisterPanel](neuroglancer_ui_side_panel.SidePanelManager.md#unregisterpanel)

## Constructors

### constructor

• **new SidePanelManager**(`display`, `center`, `visibility?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `display` | [`DisplayContext`](neuroglancer_display_context.DisplayContext.md) |
| `center` | [`HTMLElement`](../modules/main_module._internal_.md#htmlelement) |
| `visibility` | [`WatchableVisibilityPriority`](neuroglancer_visibility_priority_frontend.WatchableVisibilityPriority.md) |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/ui/side_panel.ts:214](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/side_panel.ts#L214)

## Properties

### beforeRender

• **beforeRender**: [`Signal`](neuroglancer_util_signal.Signal.md)<() => `void`\>

#### Defined in

[src/neuroglancer/ui/side_panel.ts:200](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/side_panel.ts#L200)

___

### center

• **center**: [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)

___

### centerColumn

• **centerColumn**: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/ui/side_panel.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/side_panel.ts#L199)

___

### display

• **display**: [`DisplayContext`](neuroglancer_display_context.DisplayContext.md)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### dragSource

• **dragSource**: `undefined` \| [`DragSource`](../interfaces/neuroglancer_ui_side_panel.DragSource.md)

#### Defined in

[src/neuroglancer/ui/side_panel.ts:208](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/side_panel.ts#L208)

___

### element

• **element**: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/ui/side_panel.ts:198](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/side_panel.ts#L198)

___

### layoutNeedsUpdate

• `Private` **layoutNeedsUpdate**: `boolean` = `false`

#### Defined in

[src/neuroglancer/ui/side_panel.ts:209](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/side_panel.ts#L209)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### registeredPanels

• `Private` **registeredPanels**: `Set`<[`RegisteredSidePanel`](../interfaces/neuroglancer_ui_side_panel.RegisteredSidePanel.md)\>

#### Defined in

[src/neuroglancer/ui/side_panel.ts:207](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/side_panel.ts#L207)

___

### sides

• `Private` **sides**: [`Record`](../modules/main_module._internal_.md#record)<[`Side`](../modules/neuroglancer_ui_side_panel_location.md#side), [`SidePanelSideState`](../interfaces/neuroglancer_ui_side_panel._internal_.SidePanelSideState.md)\>

#### Defined in

[src/neuroglancer/ui/side_panel.ts:201](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/side_panel.ts#L201)

___

### visibility

• **visibility**: [`WatchableVisibilityPriority`](neuroglancer_visibility_priority_frontend.WatchableVisibilityPriority.md)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/ui/side_panel.ts:211](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/side_panel.ts#L211)

## Methods

### addRef

▸ **addRef**(): [`SidePanelManager`](neuroglancer_ui_side_panel.SidePanelManager.md)

#### Returns

[`SidePanelManager`](neuroglancer_ui_side_panel.SidePanelManager.md)

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

[src/neuroglancer/ui/side_panel.ts:338](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/side_panel.ts#L338)

___

### endDrag

▸ **endDrag**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/side_panel.ts:265](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/side_panel.ts#L265)

___

### hasDroppablePanel

▸ **hasDroppablePanel**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/ui/side_panel.ts:246](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/side_panel.ts#L246)

___

### invalidateLayout

▸ **invalidateLayout**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/side_panel.ts:345](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/side_panel.ts#L345)

___

### makeCrossGutter

▸ `Private` **makeCrossGutter**(`side`, `crossIndex`): [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Parameters

| Name | Type |
| :------ | :------ |
| `side` | [`Side`](../modules/neuroglancer_ui_side_panel_location.md#side) |
| `crossIndex` | `number` |

#### Returns

[`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/ui/side_panel.ts:378](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/side_panel.ts#L378)

___

### makeDropZone

▸ `Private` **makeDropZone**(`side`, `crossIndex`, `flexIndex`, `zoneSide`, `centered?`): [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `side` | [`Side`](../modules/neuroglancer_ui_side_panel_location.md#side) | `undefined` |
| `crossIndex` | `number` | `undefined` |
| `flexIndex` | `number` | `undefined` |
| `zoneSide` | [`Side`](../modules/neuroglancer_ui_side_panel_location.md#side) | `undefined` |
| `centered` | `boolean` | `false` |

#### Returns

[`HTMLElement`](../modules/main_module._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/ui/side_panel.ts:270](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/side_panel.ts#L270)

___

### makeFlexGutter

▸ `Private` **makeFlexGutter**(`side`, `crossIndex`, `flexIndex`): [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Parameters

| Name | Type |
| :------ | :------ |
| `side` | [`Side`](../modules/neuroglancer_ui_side_panel_location.md#side) |
| `crossIndex` | `number` |
| `flexIndex` | `number` |

#### Returns

[`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/ui/side_panel.ts:421](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/side_panel.ts#L421)

___

### makeSidePanelSideState

▸ `Private` **makeSidePanelSideState**(`side`): [`SidePanelSideState`](../interfaces/neuroglancer_ui_side_panel._internal_.SidePanelSideState.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `side` | [`Side`](../modules/neuroglancer_ui_side_panel_location.md#side) |

#### Returns

[`SidePanelSideState`](../interfaces/neuroglancer_ui_side_panel._internal_.SidePanelSideState.md)

#### Defined in

[src/neuroglancer/ui/side_panel.ts:237](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/side_panel.ts#L237)

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

### registerPanel

▸ **registerPanel**(`registeredPanel`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `registeredPanel` | [`RegisteredSidePanel`](../interfaces/neuroglancer_ui_side_panel.RegisteredSidePanel.md) |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/neuroglancer/ui/side_panel.ts:322](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/side_panel.ts#L322)

___

### render

▸ **render**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/side_panel.ts:350](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/side_panel.ts#L350)

___

### renderSide

▸ `Private` **renderSide**(`side`, `flexGroups`, `panels`): [`Generator`](../interfaces/neuroglancer_chunk_manager_backend._internal_.Generator.md)<[`HTMLElement`](../modules/main_module._internal_.md#htmlelement), `void`, `unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `side` | [`Side`](../modules/neuroglancer_ui_side_panel_location.md#side) |
| `flexGroups` | [`SidePanelFlex`](../interfaces/neuroglancer_ui_side_panel._internal_.SidePanelFlex.md)[] |
| `panels` | [`RegisteredSidePanel`](../interfaces/neuroglancer_ui_side_panel.RegisteredSidePanel.md)[] |

#### Returns

[`Generator`](../interfaces/neuroglancer_chunk_manager_backend._internal_.Generator.md)<[`HTMLElement`](../modules/main_module._internal_.md#htmlelement), `void`, `unknown`\>

#### Defined in

[src/neuroglancer/ui/side_panel.ts:496](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/side_panel.ts#L496)

___

### startDrag

▸ **startDrag**(`dragSource`, `event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dragSource` | [`DragSource`](../interfaces/neuroglancer_ui_side_panel.DragSource.md) |
| `event` | [`DragEvent`](../modules/main_module._internal_.md#dragevent) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/side_panel.ts:250](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/side_panel.ts#L250)

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

### unregisterPanel

▸ **unregisterPanel**(`registeredPanel`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `registeredPanel` | [`RegisteredSidePanel`](../interfaces/neuroglancer_ui_side_panel.RegisteredSidePanel.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/side_panel.ts:331](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/side_panel.ts#L331)
