[neuroglancer](../README.md) / [Modules](../modules.md) / [data\_panel\_layout](../modules/data_panel_layout.md) / DataPanelLayoutContainer

# Class: DataPanelLayoutContainer

[data_panel_layout](../modules/data_panel_layout.md).DataPanelLayoutContainer

## Hierarchy

- `RefCounted`

  ↳ **`DataPanelLayoutContainer`**

## Table of contents

### Constructors

- [constructor](data_panel_layout.DataPanelLayoutContainer.md#constructor)

### Properties

- [disposedStacks](data_panel_layout.DataPanelLayoutContainer.md#disposedstacks)
- [element](data_panel_layout.DataPanelLayoutContainer.md#element)
- [layout](data_panel_layout.DataPanelLayoutContainer.md#layout)
- [refCount](data_panel_layout.DataPanelLayoutContainer.md#refcount)
- [specification](data_panel_layout.DataPanelLayoutContainer.md#specification)
- [viewer](data_panel_layout.DataPanelLayoutContainer.md#viewer)
- [wasDisposed](data_panel_layout.DataPanelLayoutContainer.md#wasdisposed)

### Accessors

- [changed](data_panel_layout.DataPanelLayoutContainer.md#changed)
- [name](data_panel_layout.DataPanelLayoutContainer.md#name)

### Methods

- [addRef](data_panel_layout.DataPanelLayoutContainer.md#addref)
- [dispose](data_panel_layout.DataPanelLayoutContainer.md#dispose)
- [disposeLayout](data_panel_layout.DataPanelLayoutContainer.md#disposelayout)
- [disposed](data_panel_layout.DataPanelLayoutContainer.md#disposed)
- [refCountReachedZero](data_panel_layout.DataPanelLayoutContainer.md#refcountreachedzero)
- [registerCancellable](data_panel_layout.DataPanelLayoutContainer.md#registercancellable)
- [registerDisposer](data_panel_layout.DataPanelLayoutContainer.md#registerdisposer)
- [registerEventListener](data_panel_layout.DataPanelLayoutContainer.md#registereventlistener)
- [reset](data_panel_layout.DataPanelLayoutContainer.md#reset)
- [restoreState](data_panel_layout.DataPanelLayoutContainer.md#restorestate)
- [toJSON](data_panel_layout.DataPanelLayoutContainer.md#tojson)
- [unregisterDisposer](data_panel_layout.DataPanelLayoutContainer.md#unregisterdisposer)
- [updateLayout](data_panel_layout.DataPanelLayoutContainer.md#updatelayout)

## Constructors

### constructor

• **new DataPanelLayoutContainer**(`viewer`, `defaultLayout`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `viewer` | [`ViewerUIState`](../interfaces/data_panel_layout.ViewerUIState.md) |
| `defaultLayout` | `string` |

#### Overrides

RefCounted.constructor

#### Defined in

[src/neuroglancer/data_panel_layout.ts:624](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/data_panel_layout.ts#L624)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

RefCounted.disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: `HTMLDivElement`

#### Defined in

[src/neuroglancer/data_panel_layout.ts:612](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/data_panel_layout.ts#L612)

___

### layout

• `Private` **layout**: `undefined` \| [`DataDisplayLayout`](../interfaces/data_panel_layout.DataDisplayLayout.md)

#### Defined in

[src/neuroglancer/data_panel_layout.ts:615](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/data_panel_layout.ts#L615)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

RefCounted.refCount

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L45)

___

### specification

• **specification**: [`DataPanelLayoutSpecification`](data_panel_layout.DataPanelLayoutSpecification.md)

#### Defined in

[src/neuroglancer/data_panel_layout.ts:613](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/data_panel_layout.ts#L613)

___

### viewer

• **viewer**: [`ViewerUIState`](../interfaces/data_panel_layout.ViewerUIState.md)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

RefCounted.wasDisposed

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### changed

• `get` **changed**(): `NullarySignal`

#### Returns

`NullarySignal`

#### Defined in

[src/neuroglancer/data_panel_layout.ts:641](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/data_panel_layout.ts#L641)

___

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Defined in

[src/neuroglancer/data_panel_layout.ts:617](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/data_panel_layout.ts#L617)

• `set` **name**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/data_panel_layout.ts:620](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/data_panel_layout.ts#L620)

## Methods

### addRef

▸ **addRef**(): [`DataPanelLayoutContainer`](data_panel_layout.DataPanelLayoutContainer.md)

#### Returns

[`DataPanelLayoutContainer`](data_panel_layout.DataPanelLayoutContainer.md)

#### Inherited from

RefCounted.addRef

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

RefCounted.dispose

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L53)

___

### disposeLayout

▸ `Private` **disposeLayout**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/data_panel_layout.ts:653](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/data_panel_layout.ts#L653)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

RefCounted.disposed

#### Defined in

[src/neuroglancer/data_panel_layout.ts:665](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/data_panel_layout.ts#L665)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

RefCounted.refCountReachedZero

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L66)

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

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L100)

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

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L76)

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

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L95)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/data_panel_layout.ts:650](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/data_panel_layout.ts#L650)

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

[src/neuroglancer/data_panel_layout.ts:647](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/data_panel_layout.ts#L647)

___

### toJSON

▸ **toJSON**(): `string` \| { `crossSections`: `undefined` \| { `[key: string]`: `any`;  } ; `orthographicProjection`: `undefined` \| `boolean` = orthographicProjectionJson; `type`: `string` = type.value }

#### Returns

`string` \| { `crossSections`: `undefined` \| { `[key: string]`: `any`;  } ; `orthographicProjection`: `undefined` \| `boolean` = orthographicProjectionJson; `type`: `string` = type.value }

#### Defined in

[src/neuroglancer/data_panel_layout.ts:644](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/data_panel_layout.ts#L644)

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

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L85)

___

### updateLayout

▸ `Private` **updateLayout**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/data_panel_layout.ts:660](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/data_panel_layout.ts#L660)
