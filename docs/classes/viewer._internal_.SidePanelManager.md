[neuroglancer](../README.md) / [Modules](../modules.md) / [viewer](../modules/viewer.md) / [<internal\>](../modules/viewer._internal_.md) / SidePanelManager

# Class: SidePanelManager

[viewer](../modules/viewer.md).[<internal>](../modules/viewer._internal_.md).SidePanelManager

## Hierarchy

- [`RefCounted`](axes_lines._internal_.RefCounted.md)

  ↳ **`SidePanelManager`**

## Table of contents

### Constructors

- [constructor](viewer._internal_.SidePanelManager.md#constructor)

### Properties

- [beforeRender](viewer._internal_.SidePanelManager.md#beforerender)
- [center](viewer._internal_.SidePanelManager.md#center)
- [centerColumn](viewer._internal_.SidePanelManager.md#centercolumn)
- [display](viewer._internal_.SidePanelManager.md#display)
- [disposedStacks](viewer._internal_.SidePanelManager.md#disposedstacks)
- [dragSource](viewer._internal_.SidePanelManager.md#dragsource)
- [element](viewer._internal_.SidePanelManager.md#element)
- [layoutNeedsUpdate](viewer._internal_.SidePanelManager.md#layoutneedsupdate)
- [refCount](viewer._internal_.SidePanelManager.md#refcount)
- [registeredPanels](viewer._internal_.SidePanelManager.md#registeredpanels)
- [sides](viewer._internal_.SidePanelManager.md#sides)
- [visibility](viewer._internal_.SidePanelManager.md#visibility)
- [wasDisposed](viewer._internal_.SidePanelManager.md#wasdisposed)

### Accessors

- [visible](viewer._internal_.SidePanelManager.md#visible)

### Methods

- [addRef](viewer._internal_.SidePanelManager.md#addref)
- [dispose](viewer._internal_.SidePanelManager.md#dispose)
- [disposed](viewer._internal_.SidePanelManager.md#disposed)
- [endDrag](viewer._internal_.SidePanelManager.md#enddrag)
- [hasDroppablePanel](viewer._internal_.SidePanelManager.md#hasdroppablepanel)
- [invalidateLayout](viewer._internal_.SidePanelManager.md#invalidatelayout)
- [makeCrossGutter](viewer._internal_.SidePanelManager.md#makecrossgutter)
- [makeDropZone](viewer._internal_.SidePanelManager.md#makedropzone)
- [makeFlexGutter](viewer._internal_.SidePanelManager.md#makeflexgutter)
- [makeSidePanelSideState](viewer._internal_.SidePanelManager.md#makesidepanelsidestate)
- [refCountReachedZero](viewer._internal_.SidePanelManager.md#refcountreachedzero)
- [registerCancellable](viewer._internal_.SidePanelManager.md#registercancellable)
- [registerDisposer](viewer._internal_.SidePanelManager.md#registerdisposer)
- [registerEventListener](viewer._internal_.SidePanelManager.md#registereventlistener)
- [registerPanel](viewer._internal_.SidePanelManager.md#registerpanel)
- [render](viewer._internal_.SidePanelManager.md#render)
- [renderSide](viewer._internal_.SidePanelManager.md#renderside)
- [startDrag](viewer._internal_.SidePanelManager.md#startdrag)
- [unregisterDisposer](viewer._internal_.SidePanelManager.md#unregisterdisposer)
- [unregisterPanel](viewer._internal_.SidePanelManager.md#unregisterpanel)

## Constructors

### constructor

• **new SidePanelManager**(`display`, `center`, `visibility?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `display` | [`DisplayContext`](display_context.DisplayContext.md) |
| `center` | [`HTMLElement`](../modules/axes_lines._internal_.md#htmlelement) |
| `visibility` | [`WatchableVisibilityPriority`](data_panel_layout._internal_.WatchableVisibilityPriority.md) |

#### Overrides

[RefCounted](axes_lines._internal_.RefCounted.md).[constructor](axes_lines._internal_.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/ui/side_panel.ts:214](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/side_panel.ts#L214)

## Properties

### beforeRender

• **beforeRender**: [`Signal`](coordinate_transform._internal_.Signal.md)<() => `void`\>

#### Defined in

[src/neuroglancer/ui/side_panel.ts:200](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/side_panel.ts#L200)

___

### center

• **center**: [`HTMLElement`](../modules/axes_lines._internal_.md#htmlelement)

___

### centerColumn

• **centerColumn**: [`HTMLDivElement`](../modules/axes_lines._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/ui/side_panel.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/side_panel.ts#L199)

___

### display

• **display**: [`DisplayContext`](display_context.DisplayContext.md)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[disposedStacks](axes_lines._internal_.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L52)

___

### dragSource

• **dragSource**: `undefined` \| [`DragSource`](../interfaces/viewer._internal_.DragSource.md)

#### Defined in

[src/neuroglancer/ui/side_panel.ts:208](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/side_panel.ts#L208)

___

### element

• **element**: [`HTMLDivElement`](../modules/axes_lines._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/ui/side_panel.ts:198](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/side_panel.ts#L198)

___

### layoutNeedsUpdate

• `Private` **layoutNeedsUpdate**: `boolean` = `false`

#### Defined in

[src/neuroglancer/ui/side_panel.ts:209](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/side_panel.ts#L209)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[refCount](axes_lines._internal_.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L45)

___

### registeredPanels

• `Private` **registeredPanels**: `Set`<[`RegisteredSidePanel`](../interfaces/viewer._internal_.RegisteredSidePanel.md)\>

#### Defined in

[src/neuroglancer/ui/side_panel.ts:207](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/side_panel.ts#L207)

___

### sides

• `Private` **sides**: [`Record`](../modules/axes_lines._internal_.md#record)<[`Side`](../modules/image_user_layer._internal_.md#side), [`SidePanelSideState`](../interfaces/viewer._internal_.SidePanelSideState.md)\>

#### Defined in

[src/neuroglancer/ui/side_panel.ts:201](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/side_panel.ts#L201)

___

### visibility

• **visibility**: [`WatchableVisibilityPriority`](data_panel_layout._internal_.WatchableVisibilityPriority.md)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[wasDisposed](axes_lines._internal_.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/ui/side_panel.ts:211](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/side_panel.ts#L211)

## Methods

### addRef

▸ **addRef**(): [`SidePanelManager`](viewer._internal_.SidePanelManager.md)

#### Returns

[`SidePanelManager`](viewer._internal_.SidePanelManager.md)

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

[src/neuroglancer/ui/side_panel.ts:338](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/side_panel.ts#L338)

___

### endDrag

▸ **endDrag**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/side_panel.ts:265](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/side_panel.ts#L265)

___

### hasDroppablePanel

▸ **hasDroppablePanel**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/ui/side_panel.ts:246](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/side_panel.ts#L246)

___

### invalidateLayout

▸ **invalidateLayout**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/side_panel.ts:345](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/side_panel.ts#L345)

___

### makeCrossGutter

▸ `Private` **makeCrossGutter**(`side`, `crossIndex`): [`HTMLDivElement`](../modules/axes_lines._internal_.md#htmldivelement)

#### Parameters

| Name | Type |
| :------ | :------ |
| `side` | [`Side`](../modules/image_user_layer._internal_.md#side) |
| `crossIndex` | `number` |

#### Returns

[`HTMLDivElement`](../modules/axes_lines._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/ui/side_panel.ts:378](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/side_panel.ts#L378)

___

### makeDropZone

▸ `Private` **makeDropZone**(`side`, `crossIndex`, `flexIndex`, `zoneSide`, `centered?`): [`HTMLElement`](../modules/axes_lines._internal_.md#htmlelement)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `side` | [`Side`](../modules/image_user_layer._internal_.md#side) | `undefined` |
| `crossIndex` | `number` | `undefined` |
| `flexIndex` | `number` | `undefined` |
| `zoneSide` | [`Side`](../modules/image_user_layer._internal_.md#side) | `undefined` |
| `centered` | `boolean` | `false` |

#### Returns

[`HTMLElement`](../modules/axes_lines._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/ui/side_panel.ts:270](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/side_panel.ts#L270)

___

### makeFlexGutter

▸ `Private` **makeFlexGutter**(`side`, `crossIndex`, `flexIndex`): [`HTMLDivElement`](../modules/axes_lines._internal_.md#htmldivelement)

#### Parameters

| Name | Type |
| :------ | :------ |
| `side` | [`Side`](../modules/image_user_layer._internal_.md#side) |
| `crossIndex` | `number` |
| `flexIndex` | `number` |

#### Returns

[`HTMLDivElement`](../modules/axes_lines._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/ui/side_panel.ts:421](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/side_panel.ts#L421)

___

### makeSidePanelSideState

▸ `Private` **makeSidePanelSideState**(`side`): [`SidePanelSideState`](../interfaces/viewer._internal_.SidePanelSideState.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `side` | [`Side`](../modules/image_user_layer._internal_.md#side) |

#### Returns

[`SidePanelSideState`](../interfaces/viewer._internal_.SidePanelSideState.md)

#### Defined in

[src/neuroglancer/ui/side_panel.ts:237](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/side_panel.ts#L237)

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

### registerPanel

▸ **registerPanel**(`registeredPanel`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `registeredPanel` | [`RegisteredSidePanel`](../interfaces/viewer._internal_.RegisteredSidePanel.md) |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/neuroglancer/ui/side_panel.ts:322](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/side_panel.ts#L322)

___

### render

▸ **render**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/side_panel.ts:350](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/side_panel.ts#L350)

___

### renderSide

▸ `Private` **renderSide**(`side`, `flexGroups`, `panels`): [`Generator`](../interfaces/layer._internal_.Generator.md)<[`HTMLElement`](../modules/axes_lines._internal_.md#htmlelement), `void`, `unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `side` | [`Side`](../modules/image_user_layer._internal_.md#side) |
| `flexGroups` | [`SidePanelFlex`](../interfaces/viewer._internal_.SidePanelFlex.md)[] |
| `panels` | [`RegisteredSidePanel`](../interfaces/viewer._internal_.RegisteredSidePanel.md)[] |

#### Returns

[`Generator`](../interfaces/layer._internal_.Generator.md)<[`HTMLElement`](../modules/axes_lines._internal_.md#htmlelement), `void`, `unknown`\>

#### Defined in

[src/neuroglancer/ui/side_panel.ts:496](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/side_panel.ts#L496)

___

### startDrag

▸ **startDrag**(`dragSource`, `event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dragSource` | [`DragSource`](../interfaces/viewer._internal_.DragSource.md) |
| `event` | [`DragEvent`](../modules/axes_lines._internal_.md#dragevent) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/side_panel.ts:250](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/side_panel.ts#L250)

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

___

### unregisterPanel

▸ **unregisterPanel**(`registeredPanel`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `registeredPanel` | [`RegisteredSidePanel`](../interfaces/viewer._internal_.RegisteredSidePanel.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/side_panel.ts:331](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/side_panel.ts#L331)
