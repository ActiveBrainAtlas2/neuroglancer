[neuroglancer](../README.md) / [Modules](../modules.md) / [data\_panel\_layout](../modules/data_panel_layout.md) / DataPanelLayoutSpecification

# Class: DataPanelLayoutSpecification

[data_panel_layout](../modules/data_panel_layout.md).DataPanelLayoutSpecification

## Hierarchy

- `RefCounted`

  ↳ **`DataPanelLayoutSpecification`**

## Implements

- `Trackable`

## Table of contents

### Constructors

- [constructor](data_panel_layout.DataPanelLayoutSpecification.md#constructor)

### Properties

- [changed](data_panel_layout.DataPanelLayoutSpecification.md#changed)
- [crossSections](data_panel_layout.DataPanelLayoutSpecification.md#crosssections)
- [disposedStacks](data_panel_layout.DataPanelLayoutSpecification.md#disposedstacks)
- [orthographicProjection](data_panel_layout.DataPanelLayoutSpecification.md#orthographicprojection)
- [refCount](data_panel_layout.DataPanelLayoutSpecification.md#refcount)
- [type](data_panel_layout.DataPanelLayoutSpecification.md#type)
- [wasDisposed](data_panel_layout.DataPanelLayoutSpecification.md#wasdisposed)

### Methods

- [addRef](data_panel_layout.DataPanelLayoutSpecification.md#addref)
- [dispose](data_panel_layout.DataPanelLayoutSpecification.md#dispose)
- [disposed](data_panel_layout.DataPanelLayoutSpecification.md#disposed)
- [refCountReachedZero](data_panel_layout.DataPanelLayoutSpecification.md#refcountreachedzero)
- [registerCancellable](data_panel_layout.DataPanelLayoutSpecification.md#registercancellable)
- [registerDisposer](data_panel_layout.DataPanelLayoutSpecification.md#registerdisposer)
- [registerEventListener](data_panel_layout.DataPanelLayoutSpecification.md#registereventlistener)
- [reset](data_panel_layout.DataPanelLayoutSpecification.md#reset)
- [restoreState](data_panel_layout.DataPanelLayoutSpecification.md#restorestate)
- [toJSON](data_panel_layout.DataPanelLayoutSpecification.md#tojson)
- [unregisterDisposer](data_panel_layout.DataPanelLayoutSpecification.md#unregisterdisposer)

## Constructors

### constructor

• **new DataPanelLayoutSpecification**(`parentNavigationState`, `defaultLayout`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parentNavigationState` | [`NavigationState`](navigation_state.NavigationState.md)<[`TrackableZoomInterface`](../modules/navigation_state.md#trackablezoominterface)\> |
| `defaultLayout` | `string` |

#### Overrides

RefCounted.constructor

#### Defined in

[src/neuroglancer/data_panel_layout.ts:565](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/data_panel_layout.ts#L565)

## Properties

### changed

• **changed**: `NullarySignal`

#### Implementation of

Trackable.changed

#### Defined in

[src/neuroglancer/data_panel_layout.ts:560](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/data_panel_layout.ts#L560)

___

### crossSections

• **crossSections**: [`CrossSectionSpecificationMap`](data_panel_layout.CrossSectionSpecificationMap.md)

#### Defined in

[src/neuroglancer/data_panel_layout.ts:562](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/data_panel_layout.ts#L562)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

RefCounted.disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L52)

___

### orthographicProjection

• **orthographicProjection**: [`TrackableBoolean`](trackable_boolean.TrackableBoolean.md)

#### Defined in

[src/neuroglancer/data_panel_layout.ts:563](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/data_panel_layout.ts#L563)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

RefCounted.refCount

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L45)

___

### type

• **type**: [`TrackableValue`](trackable_value.TrackableValue.md)<`string`\>

#### Defined in

[src/neuroglancer/data_panel_layout.ts:561](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/data_panel_layout.ts#L561)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

RefCounted.wasDisposed

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`DataPanelLayoutSpecification`](data_panel_layout.DataPanelLayoutSpecification.md)

#### Returns

[`DataPanelLayoutSpecification`](data_panel_layout.DataPanelLayoutSpecification.md)

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

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

RefCounted.disposed

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L75)

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

#### Implementation of

Trackable.reset

#### Defined in

[src/neuroglancer/data_panel_layout.ts:576](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/data_panel_layout.ts#L576)

___

### restoreState

▸ **restoreState**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

`void`

#### Implementation of

Trackable.restoreState

#### Defined in

[src/neuroglancer/data_panel_layout.ts:582](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/data_panel_layout.ts#L582)

___

### toJSON

▸ **toJSON**(): `string` \| { `crossSections`: `undefined` \| { `[key: string]`: `any`;  } ; `orthographicProjection`: `undefined` \| `boolean` = orthographicProjectionJson; `type`: `string` = type.value }

#### Returns

`string` \| { `crossSections`: `undefined` \| { `[key: string]`: `any`;  } ; `orthographicProjection`: `undefined` \| `boolean` = orthographicProjectionJson; `type`: `string` = type.value }

#### Implementation of

Trackable.toJSON

#### Defined in

[src/neuroglancer/data_panel_layout.ts:597](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/data_panel_layout.ts#L597)

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
