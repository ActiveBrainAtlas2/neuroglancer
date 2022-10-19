[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/ui/layer\_side\_panel\_state](../modules/neuroglancer_ui_layer_side_panel_state.md) / UserLayerSidePanelState

# Class: UserLayerSidePanelState

[neuroglancer/ui/layer_side_panel_state](../modules/neuroglancer_ui_layer_side_panel_state.md).UserLayerSidePanelState

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`UserLayerSidePanelState`**

## Table of contents

### Constructors

- [constructor](neuroglancer_ui_layer_side_panel_state.UserLayerSidePanelState.md#constructor)

### Properties

- [disposedStacks](neuroglancer_ui_layer_side_panel_state.UserLayerSidePanelState.md#disposedstacks)
- [explicitTabs](neuroglancer_ui_layer_side_panel_state.UserLayerSidePanelState.md#explicittabs)
- [layer](neuroglancer_ui_layer_side_panel_state.UserLayerSidePanelState.md#layer)
- [location](neuroglancer_ui_layer_side_panel_state.UserLayerSidePanelState.md#location)
- [panels](neuroglancer_ui_layer_side_panel_state.UserLayerSidePanelState.md#panels)
- [refCount](neuroglancer_ui_layer_side_panel_state.UserLayerSidePanelState.md#refcount)
- [selectedTab](neuroglancer_ui_layer_side_panel_state.UserLayerSidePanelState.md#selectedtab)
- [tabs](neuroglancer_ui_layer_side_panel_state.UserLayerSidePanelState.md#tabs)
- [tabsChanged](neuroglancer_ui_layer_side_panel_state.UserLayerSidePanelState.md#tabschanged)
- [wasDisposed](neuroglancer_ui_layer_side_panel_state.UserLayerSidePanelState.md#wasdisposed)

### Methods

- [addRef](neuroglancer_ui_layer_side_panel_state.UserLayerSidePanelState.md#addref)
- [dispose](neuroglancer_ui_layer_side_panel_state.UserLayerSidePanelState.md#dispose)
- [disposed](neuroglancer_ui_layer_side_panel_state.UserLayerSidePanelState.md#disposed)
- [initialize](neuroglancer_ui_layer_side_panel_state.UserLayerSidePanelState.md#initialize)
- [mergeInto](neuroglancer_ui_layer_side_panel_state.UserLayerSidePanelState.md#mergeinto)
- [moveTabTo](neuroglancer_ui_layer_side_panel_state.UserLayerSidePanelState.md#movetabto)
- [normalizeTabs](neuroglancer_ui_layer_side_panel_state.UserLayerSidePanelState.md#normalizetabs)
- [pin](neuroglancer_ui_layer_side_panel_state.UserLayerSidePanelState.md#pin)
- [refCountReachedZero](neuroglancer_ui_layer_side_panel_state.UserLayerSidePanelState.md#refcountreachedzero)
- [registerCancellable](neuroglancer_ui_layer_side_panel_state.UserLayerSidePanelState.md#registercancellable)
- [registerDisposer](neuroglancer_ui_layer_side_panel_state.UserLayerSidePanelState.md#registerdisposer)
- [registerEventListener](neuroglancer_ui_layer_side_panel_state.UserLayerSidePanelState.md#registereventlistener)
- [splitOffTab](neuroglancer_ui_layer_side_panel_state.UserLayerSidePanelState.md#splitofftab)
- [unpin](neuroglancer_ui_layer_side_panel_state.UserLayerSidePanelState.md#unpin)
- [unregisterDisposer](neuroglancer_ui_layer_side_panel_state.UserLayerSidePanelState.md#unregisterdisposer)

## Constructors

### constructor

• **new UserLayerSidePanelState**(`panels`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `panels` | [`UserLayerSidePanelsState`](neuroglancer_ui_layer_side_panel_state.UserLayerSidePanelsState.md) |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/ui/layer_side_panel_state.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_side_panel_state.ts#L42)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### explicitTabs

• **explicitTabs**: `undefined` \| `Set`<`string`\>

#### Defined in

[src/neuroglancer/ui/layer_side_panel_state.ts:70](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_side_panel_state.ts#L70)

___

### layer

• **layer**: [`UserLayer`](neuroglancer_layer.UserLayer.md)

#### Defined in

[src/neuroglancer/ui/layer_side_panel_state.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_side_panel_state.ts#L40)

___

### location

• **location**: [`TrackableSidePanelLocation`](neuroglancer_ui_side_panel_location.TrackableSidePanelLocation.md)

#### Defined in

[src/neuroglancer/ui/layer_side_panel_state.ts:41](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_side_panel_state.ts#L41)

___

### panels

• **panels**: [`UserLayerSidePanelsState`](neuroglancer_ui_layer_side_panel_state.UserLayerSidePanelsState.md)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### selectedTab

• **selectedTab**: [`WatchableValue`](neuroglancer_trackable_value.WatchableValue.md)<`undefined` \| `string`\>

#### Defined in

[src/neuroglancer/ui/layer_side_panel_state.ts:69](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_side_panel_state.ts#L69)

___

### tabs

• **tabs**: `string`[] = `[]`

#### Defined in

[src/neuroglancer/ui/layer_side_panel_state.ts:71](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_side_panel_state.ts#L71)

___

### tabsChanged

• **tabsChanged**: [`Signal`](neuroglancer_util_signal.Signal.md)<() => `void`\>

#### Defined in

[src/neuroglancer/ui/layer_side_panel_state.ts:68](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_side_panel_state.ts#L68)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`UserLayerSidePanelState`](neuroglancer_ui_layer_side_panel_state.UserLayerSidePanelState.md)

#### Returns

[`UserLayerSidePanelState`](neuroglancer_ui_layer_side_panel_state.UserLayerSidePanelState.md)

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

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposed](neuroglancer_util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L75)

___

### initialize

▸ **initialize**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/layer_side_panel_state.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_side_panel_state.ts#L46)

___

### mergeInto

▸ **mergeInto**(`target`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`UserLayerSidePanelState`](neuroglancer_ui_layer_side_panel_state.UserLayerSidePanelState.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/layer_side_panel_state.ts:187](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_side_panel_state.ts#L187)

___

### moveTabTo

▸ **moveTabTo**(`tab`, `target`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tab` | `string` |
| `target` | [`UserLayerSidePanelState`](neuroglancer_ui_layer_side_panel_state.UserLayerSidePanelState.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/layer_side_panel_state.ts:167](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_side_panel_state.ts#L167)

___

### normalizeTabs

▸ **normalizeTabs**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/layer_side_panel_state.ts:73](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_side_panel_state.ts#L73)

___

### pin

▸ **pin**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/layer_side_panel_state.ts:89](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_side_panel_state.ts#L89)

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

### splitOffTab

▸ **splitOffTab**(`tab`, `location`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tab` | `string` |
| `location` | [`SidePanelLocation`](../interfaces/neuroglancer_ui_side_panel_location.SidePanelLocation.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/layer_side_panel_state.ts:146](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_side_panel_state.ts#L146)

___

### unpin

▸ **unpin**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/layer_side_panel_state.ts:107](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/layer_side_panel_state.ts#L107)

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
