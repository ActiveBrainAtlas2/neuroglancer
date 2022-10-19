[neuroglancer](../README.md) / [Modules](../modules.md) / [ui/layer\_side\_panel\_state](../modules/ui_layer_side_panel_state.md) / UserLayerSidePanelState

# Class: UserLayerSidePanelState

[ui/layer_side_panel_state](../modules/ui_layer_side_panel_state.md).UserLayerSidePanelState

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`UserLayerSidePanelState`**

## Table of contents

### Constructors

- [constructor](ui_layer_side_panel_state.UserLayerSidePanelState.md#constructor)

### Properties

- [disposedStacks](ui_layer_side_panel_state.UserLayerSidePanelState.md#disposedstacks)
- [explicitTabs](ui_layer_side_panel_state.UserLayerSidePanelState.md#explicittabs)
- [layer](ui_layer_side_panel_state.UserLayerSidePanelState.md#layer)
- [location](ui_layer_side_panel_state.UserLayerSidePanelState.md#location)
- [panels](ui_layer_side_panel_state.UserLayerSidePanelState.md#panels)
- [refCount](ui_layer_side_panel_state.UserLayerSidePanelState.md#refcount)
- [selectedTab](ui_layer_side_panel_state.UserLayerSidePanelState.md#selectedtab)
- [tabs](ui_layer_side_panel_state.UserLayerSidePanelState.md#tabs)
- [tabsChanged](ui_layer_side_panel_state.UserLayerSidePanelState.md#tabschanged)
- [wasDisposed](ui_layer_side_panel_state.UserLayerSidePanelState.md#wasdisposed)

### Methods

- [addRef](ui_layer_side_panel_state.UserLayerSidePanelState.md#addref)
- [dispose](ui_layer_side_panel_state.UserLayerSidePanelState.md#dispose)
- [disposed](ui_layer_side_panel_state.UserLayerSidePanelState.md#disposed)
- [initialize](ui_layer_side_panel_state.UserLayerSidePanelState.md#initialize)
- [mergeInto](ui_layer_side_panel_state.UserLayerSidePanelState.md#mergeinto)
- [moveTabTo](ui_layer_side_panel_state.UserLayerSidePanelState.md#movetabto)
- [normalizeTabs](ui_layer_side_panel_state.UserLayerSidePanelState.md#normalizetabs)
- [pin](ui_layer_side_panel_state.UserLayerSidePanelState.md#pin)
- [refCountReachedZero](ui_layer_side_panel_state.UserLayerSidePanelState.md#refcountreachedzero)
- [registerCancellable](ui_layer_side_panel_state.UserLayerSidePanelState.md#registercancellable)
- [registerDisposer](ui_layer_side_panel_state.UserLayerSidePanelState.md#registerdisposer)
- [registerEventListener](ui_layer_side_panel_state.UserLayerSidePanelState.md#registereventlistener)
- [splitOffTab](ui_layer_side_panel_state.UserLayerSidePanelState.md#splitofftab)
- [unpin](ui_layer_side_panel_state.UserLayerSidePanelState.md#unpin)
- [unregisterDisposer](ui_layer_side_panel_state.UserLayerSidePanelState.md#unregisterdisposer)

## Constructors

### constructor

• **new UserLayerSidePanelState**(`panels`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `panels` | [`UserLayerSidePanelsState`](ui_layer_side_panel_state.UserLayerSidePanelsState.md) |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/ui/layer_side_panel_state.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_side_panel_state.ts#L42)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### explicitTabs

• **explicitTabs**: `undefined` \| `Set`<`string`\>

#### Defined in

[src/neuroglancer/ui/layer_side_panel_state.ts:70](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_side_panel_state.ts#L70)

___

### layer

• **layer**: [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)

#### Defined in

[src/neuroglancer/ui/layer_side_panel_state.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_side_panel_state.ts#L40)

___

### location

• **location**: [`TrackableSidePanelLocation`](ui_side_panel_location.TrackableSidePanelLocation.md)

#### Defined in

[src/neuroglancer/ui/layer_side_panel_state.ts:41](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_side_panel_state.ts#L41)

___

### panels

• **panels**: [`UserLayerSidePanelsState`](ui_layer_side_panel_state.UserLayerSidePanelsState.md)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### selectedTab

• **selectedTab**: [`WatchableValue`](annotation_annotation_layer_state._internal_.WatchableValue.md)<`undefined` \| `string`\>

#### Defined in

[src/neuroglancer/ui/layer_side_panel_state.ts:69](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_side_panel_state.ts#L69)

___

### tabs

• **tabs**: `string`[] = `[]`

#### Defined in

[src/neuroglancer/ui/layer_side_panel_state.ts:71](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_side_panel_state.ts#L71)

___

### tabsChanged

• **tabsChanged**: [`Signal`](util_signal.Signal.md)<() => `void`\>

#### Defined in

[src/neuroglancer/ui/layer_side_panel_state.ts:68](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_side_panel_state.ts#L68)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`UserLayerSidePanelState`](ui_layer_side_panel_state.UserLayerSidePanelState.md)

#### Returns

[`UserLayerSidePanelState`](ui_layer_side_panel_state.UserLayerSidePanelState.md)

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[addRef](util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[dispose](util_disposable.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposed](util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L75)

___

### initialize

▸ **initialize**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/layer_side_panel_state.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_side_panel_state.ts#L46)

___

### mergeInto

▸ **mergeInto**(`target`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`UserLayerSidePanelState`](ui_layer_side_panel_state.UserLayerSidePanelState.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/layer_side_panel_state.ts:187](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_side_panel_state.ts#L187)

___

### moveTabTo

▸ **moveTabTo**(`tab`, `target`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tab` | `string` |
| `target` | [`UserLayerSidePanelState`](ui_layer_side_panel_state.UserLayerSidePanelState.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/layer_side_panel_state.ts:167](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_side_panel_state.ts#L167)

___

### normalizeTabs

▸ **normalizeTabs**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/layer_side_panel_state.ts:73](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_side_panel_state.ts#L73)

___

### pin

▸ **pin**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/layer_side_panel_state.ts:89](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_side_panel_state.ts#L89)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

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

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[registerEventListener](util_disposable.RefCounted.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L95)

___

### splitOffTab

▸ **splitOffTab**(`tab`, `location`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tab` | `string` |
| `location` | [`SidePanelLocation`](../interfaces/ui_side_panel_location.SidePanelLocation.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/layer_side_panel_state.ts:146](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_side_panel_state.ts#L146)

___

### unpin

▸ **unpin**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/layer_side_panel_state.ts:107](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_side_panel_state.ts#L107)

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

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[unregisterDisposer](util_disposable.RefCounted.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)
