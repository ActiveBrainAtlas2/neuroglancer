[neuroglancer](../README.md) / [Modules](../modules.md) / [viewer](../modules/viewer.md) / [<internal\>](../modules/viewer._internal_.md) / StateLoader

# Class: StateLoader

[viewer](../modules/viewer.md).[<internal>](../modules/viewer._internal_.md).StateLoader

## Hierarchy

- [`RefCounted`](axes_lines._internal_.RefCounted.md)

  ↳ **`StateLoader`**

## Table of contents

### Constructors

- [constructor](viewer._internal_.StateLoader.md#constructor)

### Properties

- [disposedStacks](viewer._internal_.StateLoader.md#disposedstacks)
- [element](viewer._internal_.StateLoader.md#element)
- [input](viewer._internal_.StateLoader.md#input)
- [newButton](viewer._internal_.StateLoader.md#newbutton)
- [refCount](viewer._internal_.StateLoader.md#refcount)
- [resetButton](viewer._internal_.StateLoader.md#resetbutton)
- [saveButton](viewer._internal_.StateLoader.md#savebutton)
- [stateAPI](viewer._internal_.StateLoader.md#stateapi)
- [stateID](viewer._internal_.StateLoader.md#stateid)
- [user](viewer._internal_.StateLoader.md#user)
- [viewer](viewer._internal_.StateLoader.md#viewer)
- [wasDisposed](viewer._internal_.StateLoader.md#wasdisposed)

### Methods

- [addRef](viewer._internal_.StateLoader.md#addref)
- [dispose](viewer._internal_.StateLoader.md#dispose)
- [disposed](viewer._internal_.StateLoader.md#disposed)
- [getState](viewer._internal_.StateLoader.md#getstate)
- [newState](viewer._internal_.StateLoader.md#newstate)
- [refCountReachedZero](viewer._internal_.StateLoader.md#refcountreachedzero)
- [registerCancellable](viewer._internal_.StateLoader.md#registercancellable)
- [registerDisposer](viewer._internal_.StateLoader.md#registerdisposer)
- [registerEventListener](viewer._internal_.StateLoader.md#registereventlistener)
- [resetState](viewer._internal_.StateLoader.md#resetstate)
- [saveAnnotations](viewer._internal_.StateLoader.md#saveannotations)
- [saveState](viewer._internal_.StateLoader.md#savestate)
- [segmentVolume](viewer._internal_.StateLoader.md#segmentvolume)
- [unregisterDisposer](viewer._internal_.StateLoader.md#unregisterdisposer)
- [validateState](viewer._internal_.StateLoader.md#validatestate)

## Constructors

### constructor

• **new StateLoader**(`viewer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `viewer` | [`Viewer`](viewer.Viewer.md) |

#### Overrides

[RefCounted](axes_lines._internal_.RefCounted.md).[constructor](axes_lines._internal_.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/services/state_loader.ts:280](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/services/state_loader.ts#L280)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[disposedStacks](axes_lines._internal_.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: [`HTMLDivElement`](../modules/axes_lines._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/services/state_loader.ts:270](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/services/state_loader.ts#L270)

___

### input

• `Private` **input**: [`StateAutocomplete`](viewer._internal_.StateAutocomplete.md)

#### Defined in

[src/neuroglancer/services/state_loader.ts:273](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/services/state_loader.ts#L273)

___

### newButton

• `Private` **newButton**: [`HTMLElement`](../modules/axes_lines._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/services/state_loader.ts:276](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/services/state_loader.ts#L276)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[refCount](axes_lines._internal_.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L45)

___

### resetButton

• `Private` **resetButton**: [`HTMLElement`](../modules/axes_lines._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/services/state_loader.ts:274](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/services/state_loader.ts#L274)

___

### saveButton

• `Private` **saveButton**: [`HTMLElement`](../modules/axes_lines._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/services/state_loader.ts:275](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/services/state_loader.ts#L275)

___

### stateAPI

• `Private` **stateAPI**: [`StateAPI`](viewer._internal_.StateAPI.md)

#### Defined in

[src/neuroglancer/services/state_loader.ts:272](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/services/state_loader.ts#L272)

___

### stateID

• `Private` **stateID**: `number`

#### Defined in

[src/neuroglancer/services/state_loader.ts:278](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/services/state_loader.ts#L278)

___

### user

• `Private` **user**: [`User`](../interfaces/viewer._internal_.User.md)

#### Defined in

[src/neuroglancer/services/state_loader.ts:277](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/services/state_loader.ts#L277)

___

### viewer

• **viewer**: [`Viewer`](viewer.Viewer.md)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[wasDisposed](axes_lines._internal_.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`StateLoader`](viewer._internal_.StateLoader.md)

#### Returns

[`StateLoader`](viewer._internal_.StateLoader.md)

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

### getState

▸ `Private` **getState**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/services/state_loader.ts:336](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/services/state_loader.ts#L336)

___

### newState

▸ `Private` **newState**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/services/state_loader.ts:373](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/services/state_loader.ts#L373)

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

### resetState

▸ `Private` **resetState**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/services/state_loader.ts:461](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/services/state_loader.ts#L461)

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

[src/neuroglancer/services/state_loader.ts:431](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/services/state_loader.ts#L431)

___

### saveState

▸ `Private` **saveState**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/services/state_loader.ts:350](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/services/state_loader.ts#L350)

___

### segmentVolume

▸ **segmentVolume**(`volumeId`, `successCallback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `volumeId` | `string` |
| `successCallback` | (`_`: [`Segmentation`](../interfaces/viewer._internal_.Segmentation.md)) => `void` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/services/state_loader.ts:399](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/services/state_loader.ts#L399)

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

### validateState

▸ `Private` **validateState**(`state`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | ``null`` \| [`State`](../interfaces/viewer._internal_.State.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/services/state_loader.ts:327](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/services/state_loader.ts#L327)
