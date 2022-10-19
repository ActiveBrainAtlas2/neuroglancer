[neuroglancer](../README.md) / [Modules](../modules.md) / [image\_user\_layer](../modules/image_user_layer.md) / [<internal\>](../modules/image_user_layer._internal_.md) / UserLayerSidePanelState

# Class: UserLayerSidePanelState

[image_user_layer](../modules/image_user_layer.md).[<internal>](../modules/image_user_layer._internal_.md).UserLayerSidePanelState

## Hierarchy

- [`RefCounted`](axes_lines._internal_.RefCounted.md)

  ↳ **`UserLayerSidePanelState`**

## Table of contents

### Constructors

- [constructor](image_user_layer._internal_.UserLayerSidePanelState.md#constructor)

### Properties

- [disposedStacks](image_user_layer._internal_.UserLayerSidePanelState.md#disposedstacks)
- [explicitTabs](image_user_layer._internal_.UserLayerSidePanelState.md#explicittabs)
- [layer](image_user_layer._internal_.UserLayerSidePanelState.md#layer)
- [location](image_user_layer._internal_.UserLayerSidePanelState.md#location)
- [panels](image_user_layer._internal_.UserLayerSidePanelState.md#panels)
- [refCount](image_user_layer._internal_.UserLayerSidePanelState.md#refcount)
- [selectedTab](image_user_layer._internal_.UserLayerSidePanelState.md#selectedtab)
- [tabs](image_user_layer._internal_.UserLayerSidePanelState.md#tabs)
- [tabsChanged](image_user_layer._internal_.UserLayerSidePanelState.md#tabschanged)
- [wasDisposed](image_user_layer._internal_.UserLayerSidePanelState.md#wasdisposed)

### Methods

- [addRef](image_user_layer._internal_.UserLayerSidePanelState.md#addref)
- [dispose](image_user_layer._internal_.UserLayerSidePanelState.md#dispose)
- [disposed](image_user_layer._internal_.UserLayerSidePanelState.md#disposed)
- [initialize](image_user_layer._internal_.UserLayerSidePanelState.md#initialize)
- [mergeInto](image_user_layer._internal_.UserLayerSidePanelState.md#mergeinto)
- [moveTabTo](image_user_layer._internal_.UserLayerSidePanelState.md#movetabto)
- [normalizeTabs](image_user_layer._internal_.UserLayerSidePanelState.md#normalizetabs)
- [pin](image_user_layer._internal_.UserLayerSidePanelState.md#pin)
- [refCountReachedZero](image_user_layer._internal_.UserLayerSidePanelState.md#refcountreachedzero)
- [registerCancellable](image_user_layer._internal_.UserLayerSidePanelState.md#registercancellable)
- [registerDisposer](image_user_layer._internal_.UserLayerSidePanelState.md#registerdisposer)
- [registerEventListener](image_user_layer._internal_.UserLayerSidePanelState.md#registereventlistener)
- [splitOffTab](image_user_layer._internal_.UserLayerSidePanelState.md#splitofftab)
- [unpin](image_user_layer._internal_.UserLayerSidePanelState.md#unpin)
- [unregisterDisposer](image_user_layer._internal_.UserLayerSidePanelState.md#unregisterdisposer)

## Constructors

### constructor

• **new UserLayerSidePanelState**(`panels`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `panels` | [`UserLayerSidePanelsState`](image_user_layer._internal_.UserLayerSidePanelsState.md) |

#### Overrides

[RefCounted](axes_lines._internal_.RefCounted.md).[constructor](axes_lines._internal_.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/ui/layer_side_panel_state.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/layer_side_panel_state.ts#L42)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[disposedStacks](axes_lines._internal_.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L52)

___

### explicitTabs

• **explicitTabs**: `undefined` \| `Set`<`string`\>

#### Defined in

[src/neuroglancer/ui/layer_side_panel_state.ts:70](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/layer_side_panel_state.ts#L70)

___

### layer

• **layer**: [`UserLayer`](layer.UserLayer.md)

#### Defined in

[src/neuroglancer/ui/layer_side_panel_state.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/layer_side_panel_state.ts#L40)

___

### location

• **location**: [`TrackableSidePanelLocation`](image_user_layer._internal_.TrackableSidePanelLocation.md)

#### Defined in

[src/neuroglancer/ui/layer_side_panel_state.ts:41](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/layer_side_panel_state.ts#L41)

___

### panels

• **panels**: [`UserLayerSidePanelsState`](image_user_layer._internal_.UserLayerSidePanelsState.md)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[refCount](axes_lines._internal_.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L45)

___

### selectedTab

• **selectedTab**: [`WatchableValue`](trackable_value.WatchableValue.md)<`undefined` \| `string`\>

#### Defined in

[src/neuroglancer/ui/layer_side_panel_state.ts:69](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/layer_side_panel_state.ts#L69)

___

### tabs

• **tabs**: `string`[] = `[]`

#### Defined in

[src/neuroglancer/ui/layer_side_panel_state.ts:71](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/layer_side_panel_state.ts#L71)

___

### tabsChanged

• **tabsChanged**: [`Signal`](coordinate_transform._internal_.Signal.md)<() => `void`\>

#### Defined in

[src/neuroglancer/ui/layer_side_panel_state.ts:68](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/layer_side_panel_state.ts#L68)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[wasDisposed](axes_lines._internal_.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`UserLayerSidePanelState`](image_user_layer._internal_.UserLayerSidePanelState.md)

#### Returns

[`UserLayerSidePanelState`](image_user_layer._internal_.UserLayerSidePanelState.md)

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

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[disposed](axes_lines._internal_.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L75)

___

### initialize

▸ **initialize**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/layer_side_panel_state.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/layer_side_panel_state.ts#L46)

___

### mergeInto

▸ **mergeInto**(`target`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`UserLayerSidePanelState`](image_user_layer._internal_.UserLayerSidePanelState.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/layer_side_panel_state.ts:187](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/layer_side_panel_state.ts#L187)

___

### moveTabTo

▸ **moveTabTo**(`tab`, `target`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tab` | `string` |
| `target` | [`UserLayerSidePanelState`](image_user_layer._internal_.UserLayerSidePanelState.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/layer_side_panel_state.ts:167](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/layer_side_panel_state.ts#L167)

___

### normalizeTabs

▸ **normalizeTabs**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/layer_side_panel_state.ts:73](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/layer_side_panel_state.ts#L73)

___

### pin

▸ **pin**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/layer_side_panel_state.ts:89](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/layer_side_panel_state.ts#L89)

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

### splitOffTab

▸ **splitOffTab**(`tab`, `location`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tab` | `string` |
| `location` | [`SidePanelLocation`](../interfaces/image_user_layer._internal_.SidePanelLocation.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/layer_side_panel_state.ts:146](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/layer_side_panel_state.ts#L146)

___

### unpin

▸ **unpin**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/layer_side_panel_state.ts:107](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/layer_side_panel_state.ts#L107)

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
