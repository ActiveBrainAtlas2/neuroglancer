[neuroglancer](../README.md) / [Modules](../modules.md) / [services/state\_loader](../modules/services_state_loader.md) / StateLoader

# Class: StateLoader

[services/state_loader](../modules/services_state_loader.md).StateLoader

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`StateLoader`**

## Table of contents

### Constructors

- [constructor](services_state_loader.StateLoader.md#constructor)

### Properties

- [disposedStacks](services_state_loader.StateLoader.md#disposedstacks)
- [element](services_state_loader.StateLoader.md#element)
- [input](services_state_loader.StateLoader.md#input)
- [newButton](services_state_loader.StateLoader.md#newbutton)
- [refCount](services_state_loader.StateLoader.md#refcount)
- [resetButton](services_state_loader.StateLoader.md#resetbutton)
- [saveButton](services_state_loader.StateLoader.md#savebutton)
- [stateAPI](services_state_loader.StateLoader.md#stateapi)
- [stateID](services_state_loader.StateLoader.md#stateid)
- [user](services_state_loader.StateLoader.md#user)
- [viewer](services_state_loader.StateLoader.md#viewer)
- [wasDisposed](services_state_loader.StateLoader.md#wasdisposed)

### Methods

- [addRef](services_state_loader.StateLoader.md#addref)
- [dispose](services_state_loader.StateLoader.md#dispose)
- [disposed](services_state_loader.StateLoader.md#disposed)
- [getState](services_state_loader.StateLoader.md#getstate)
- [newState](services_state_loader.StateLoader.md#newstate)
- [refCountReachedZero](services_state_loader.StateLoader.md#refcountreachedzero)
- [registerCancellable](services_state_loader.StateLoader.md#registercancellable)
- [registerDisposer](services_state_loader.StateLoader.md#registerdisposer)
- [registerEventListener](services_state_loader.StateLoader.md#registereventlistener)
- [resetState](services_state_loader.StateLoader.md#resetstate)
- [saveAnnotations](services_state_loader.StateLoader.md#saveannotations)
- [saveState](services_state_loader.StateLoader.md#savestate)
- [segmentVolume](services_state_loader.StateLoader.md#segmentvolume)
- [unregisterDisposer](services_state_loader.StateLoader.md#unregisterdisposer)
- [validateState](services_state_loader.StateLoader.md#validatestate)

## Constructors

### constructor

• **new StateLoader**(`viewer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `viewer` | [`Viewer`](datasource_state_share._internal_.Viewer.md) |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/services/state_loader.ts:280](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/services/state_loader.ts#L280)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: [`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/services/state_loader.ts:270](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/services/state_loader.ts#L270)

___

### input

• `Private` **input**: [`StateAutocomplete`](services_state_loader.StateAutocomplete.md)

#### Defined in

[src/neuroglancer/services/state_loader.ts:273](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/services/state_loader.ts#L273)

___

### newButton

• `Private` **newButton**: [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/services/state_loader.ts:276](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/services/state_loader.ts#L276)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### resetButton

• `Private` **resetButton**: [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/services/state_loader.ts:274](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/services/state_loader.ts#L274)

___

### saveButton

• `Private` **saveButton**: [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/services/state_loader.ts:275](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/services/state_loader.ts#L275)

___

### stateAPI

• `Private` **stateAPI**: [`StateAPI`](services_state_loader.StateAPI.md)

#### Defined in

[src/neuroglancer/services/state_loader.ts:272](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/services/state_loader.ts#L272)

___

### stateID

• `Private` **stateID**: `number`

#### Defined in

[src/neuroglancer/services/state_loader.ts:278](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/services/state_loader.ts#L278)

___

### user

• `Private` **user**: [`User`](../interfaces/services_user_loader.User.md)

#### Defined in

[src/neuroglancer/services/state_loader.ts:277](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/services/state_loader.ts#L277)

___

### viewer

• **viewer**: [`Viewer`](datasource_state_share._internal_.Viewer.md)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`StateLoader`](services_state_loader.StateLoader.md)

#### Returns

[`StateLoader`](services_state_loader.StateLoader.md)

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

### getState

▸ `Private` **getState**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/services/state_loader.ts:336](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/services/state_loader.ts#L336)

___

### newState

▸ `Private` **newState**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/services/state_loader.ts:373](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/services/state_loader.ts#L373)

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

### resetState

▸ `Private` **resetState**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/services/state_loader.ts:461](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/services/state_loader.ts#L461)

___

### saveAnnotations

▸ **saveAnnotations**(`layerName`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `layerName` | `string` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/services/state_loader.ts:431](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/services/state_loader.ts#L431)

___

### saveState

▸ `Private` **saveState**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/services/state_loader.ts:350](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/services/state_loader.ts#L350)

___

### segmentVolume

▸ **segmentVolume**(`volumeId`, `successCallback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `volumeId` | `string` |
| `successCallback` | (`_`: [`Segmentation`](../interfaces/services_state.Segmentation.md)) => `void` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/services/state_loader.ts:399](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/services/state_loader.ts#L399)

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

___

### validateState

▸ `Private` **validateState**(`state`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | ``null`` \| [`State`](../interfaces/services_state.State.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/services/state_loader.ts:327](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/services/state_loader.ts#L327)
