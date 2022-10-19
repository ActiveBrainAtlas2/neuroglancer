[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/data\_panel\_layout](../modules/neuroglancer_data_panel_layout.md) / DataPanelLayoutContainer

# Class: DataPanelLayoutContainer

[neuroglancer/data_panel_layout](../modules/neuroglancer_data_panel_layout.md).DataPanelLayoutContainer

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`DataPanelLayoutContainer`**

## Table of contents

### Constructors

- [constructor](neuroglancer_data_panel_layout.DataPanelLayoutContainer.md#constructor)

### Properties

- [disposedStacks](neuroglancer_data_panel_layout.DataPanelLayoutContainer.md#disposedstacks)
- [element](neuroglancer_data_panel_layout.DataPanelLayoutContainer.md#element)
- [layout](neuroglancer_data_panel_layout.DataPanelLayoutContainer.md#layout)
- [refCount](neuroglancer_data_panel_layout.DataPanelLayoutContainer.md#refcount)
- [specification](neuroglancer_data_panel_layout.DataPanelLayoutContainer.md#specification)
- [viewer](neuroglancer_data_panel_layout.DataPanelLayoutContainer.md#viewer)
- [wasDisposed](neuroglancer_data_panel_layout.DataPanelLayoutContainer.md#wasdisposed)

### Accessors

- [changed](neuroglancer_data_panel_layout.DataPanelLayoutContainer.md#changed)
- [name](neuroglancer_data_panel_layout.DataPanelLayoutContainer.md#name)

### Methods

- [addRef](neuroglancer_data_panel_layout.DataPanelLayoutContainer.md#addref)
- [dispose](neuroglancer_data_panel_layout.DataPanelLayoutContainer.md#dispose)
- [disposeLayout](neuroglancer_data_panel_layout.DataPanelLayoutContainer.md#disposelayout)
- [disposed](neuroglancer_data_panel_layout.DataPanelLayoutContainer.md#disposed)
- [refCountReachedZero](neuroglancer_data_panel_layout.DataPanelLayoutContainer.md#refcountreachedzero)
- [registerCancellable](neuroglancer_data_panel_layout.DataPanelLayoutContainer.md#registercancellable)
- [registerDisposer](neuroglancer_data_panel_layout.DataPanelLayoutContainer.md#registerdisposer)
- [registerEventListener](neuroglancer_data_panel_layout.DataPanelLayoutContainer.md#registereventlistener)
- [reset](neuroglancer_data_panel_layout.DataPanelLayoutContainer.md#reset)
- [restoreState](neuroglancer_data_panel_layout.DataPanelLayoutContainer.md#restorestate)
- [toJSON](neuroglancer_data_panel_layout.DataPanelLayoutContainer.md#tojson)
- [unregisterDisposer](neuroglancer_data_panel_layout.DataPanelLayoutContainer.md#unregisterdisposer)
- [updateLayout](neuroglancer_data_panel_layout.DataPanelLayoutContainer.md#updatelayout)

## Constructors

### constructor

• **new DataPanelLayoutContainer**(`viewer`, `defaultLayout`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `viewer` | [`ViewerUIState`](../interfaces/neuroglancer_data_panel_layout.ViewerUIState.md) |
| `defaultLayout` | `string` |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/data_panel_layout.ts:624](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/data_panel_layout.ts#L624)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/data_panel_layout.ts:612](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/data_panel_layout.ts#L612)

___

### layout

• `Private` **layout**: `undefined` \| [`DataDisplayLayout`](../interfaces/neuroglancer_data_panel_layout.DataDisplayLayout.md)

#### Defined in

[src/neuroglancer/data_panel_layout.ts:615](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/data_panel_layout.ts#L615)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### specification

• **specification**: [`DataPanelLayoutSpecification`](neuroglancer_data_panel_layout.DataPanelLayoutSpecification.md)

#### Defined in

[src/neuroglancer/data_panel_layout.ts:613](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/data_panel_layout.ts#L613)

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

## Accessors

### changed

• `get` **changed**(): [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Returns

[`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/data_panel_layout.ts:641](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/data_panel_layout.ts#L641)

___

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Defined in

[src/neuroglancer/data_panel_layout.ts:617](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/data_panel_layout.ts#L617)

• `set` **name**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/data_panel_layout.ts:620](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/data_panel_layout.ts#L620)

## Methods

### addRef

▸ **addRef**(): [`DataPanelLayoutContainer`](neuroglancer_data_panel_layout.DataPanelLayoutContainer.md)

#### Returns

[`DataPanelLayoutContainer`](neuroglancer_data_panel_layout.DataPanelLayoutContainer.md)

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

### disposeLayout

▸ `Private` **disposeLayout**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/data_panel_layout.ts:653](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/data_panel_layout.ts#L653)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposed](neuroglancer_util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/data_panel_layout.ts:665](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/data_panel_layout.ts#L665)

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

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/data_panel_layout.ts:650](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/data_panel_layout.ts#L650)

___

### restoreState

▸ **restoreState**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/data_panel_layout.ts:647](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/data_panel_layout.ts#L647)

___

### toJSON

▸ **toJSON**(): `string` \| { `crossSections`: `undefined` \| { `[key: string]`: `any`;  } ; `orthographicProjection`: `undefined` \| `boolean` = orthographicProjectionJson; `type`: `string` = type.value }

#### Returns

`string` \| { `crossSections`: `undefined` \| { `[key: string]`: `any`;  } ; `orthographicProjection`: `undefined` \| `boolean` = orthographicProjectionJson; `type`: `string` = type.value }

#### Defined in

[src/neuroglancer/data_panel_layout.ts:644](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/data_panel_layout.ts#L644)

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

### updateLayout

▸ `Private` **updateLayout**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/data_panel_layout.ts:660](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/data_panel_layout.ts#L660)
