[neuroglancer](../README.md) / [Modules](../modules.md) / [ui/url\_hash\_binding](../modules/ui_url_hash_binding.md) / UrlHashBinding

# Class: UrlHashBinding

[ui/url_hash_binding](../modules/ui_url_hash_binding.md).UrlHashBinding

An instance of this class manages a binding between a Trackable value and the URL hash state.
The binding is initialized in the constructor, and is removed when dispose is called.

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`UrlHashBinding`**

## Table of contents

### Constructors

- [constructor](ui_url_hash_binding.UrlHashBinding.md#constructor)

### Properties

- [credentialsManager](ui_url_hash_binding.UrlHashBinding.md#credentialsmanager)
- [disposedStacks](ui_url_hash_binding.UrlHashBinding.md#disposedstacks)
- [multiUserMode](ui_url_hash_binding.UrlHashBinding.md#multiusermode)
- [parseError](ui_url_hash_binding.UrlHashBinding.md#parseerror)
- [prevUrlString](ui_url_hash_binding.UrlHashBinding.md#prevurlstring)
- [refCount](ui_url_hash_binding.UrlHashBinding.md#refcount)
- [root](ui_url_hash_binding.UrlHashBinding.md#root)
- [stateAPI](ui_url_hash_binding.UrlHashBinding.md#stateapi)
- [stateData](ui_url_hash_binding.UrlHashBinding.md#statedata)
- [stateID](ui_url_hash_binding.UrlHashBinding.md#stateid)
- [user](ui_url_hash_binding.UrlHashBinding.md#user)
- [wasDisposed](ui_url_hash_binding.UrlHashBinding.md#wasdisposed)

### Methods

- [addRef](ui_url_hash_binding.UrlHashBinding.md#addref)
- [checkAndSetStateFromFirebase](ui_url_hash_binding.UrlHashBinding.md#checkandsetstatefromfirebase)
- [dispose](ui_url_hash_binding.UrlHashBinding.md#dispose)
- [disposed](ui_url_hash_binding.UrlHashBinding.md#disposed)
- [refCountReachedZero](ui_url_hash_binding.UrlHashBinding.md#refcountreachedzero)
- [registerCancellable](ui_url_hash_binding.UrlHashBinding.md#registercancellable)
- [registerDisposer](ui_url_hash_binding.UrlHashBinding.md#registerdisposer)
- [registerEventListener](ui_url_hash_binding.UrlHashBinding.md#registereventlistener)
- [resetDatabaseState](ui_url_hash_binding.UrlHashBinding.md#resetdatabasestate)
- [setStateRoot](ui_url_hash_binding.UrlHashBinding.md#setstateroot)
- [setUrlHash](ui_url_hash_binding.UrlHashBinding.md#seturlhash)
- [unregisterDisposer](ui_url_hash_binding.UrlHashBinding.md#unregisterdisposer)
- [updateFromUrlHash](ui_url_hash_binding.UrlHashBinding.md#updatefromurlhash)
- [updateStateData](ui_url_hash_binding.UrlHashBinding.md#updatestatedata)

## Constructors

### constructor

• **new UrlHashBinding**(`root`, `credentialsManager`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `root` | [`Trackable`](../interfaces/util_trackable.Trackable.md) |
| `credentialsManager` | [`CredentialsManager`](../interfaces/credentials_provider.CredentialsManager.md) |
| `options` | [`UrlHashBindingOptions`](../interfaces/ui_url_hash_binding.UrlHashBindingOptions.md) |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/ui/url_hash_binding.ts:67](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/url_hash_binding.ts#L67)

## Properties

### credentialsManager

• **credentialsManager**: [`CredentialsManager`](../interfaces/credentials_provider.CredentialsManager.md)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### multiUserMode

• `Private` **multiUserMode**: `boolean`

#### Defined in

[src/neuroglancer/ui/url_hash_binding.ts:65](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/url_hash_binding.ts#L65)

___

### parseError

• **parseError**: [`WatchableValue`](annotation_annotation_layer_state._internal_.WatchableValue.md)<`undefined` \| [`Error`](../modules/annotation_annotation_layer_state._internal_.md#error)\>

Most recent error parsing URL hash.

#### Defined in

[src/neuroglancer/ui/url_hash_binding.ts:55](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/url_hash_binding.ts#L55)

___

### prevUrlString

• `Private` **prevUrlString**: `undefined` \| `string`

Most recently parsed or set state string.

#### Defined in

[src/neuroglancer/ui/url_hash_binding.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/url_hash_binding.ts#L50)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### root

• **root**: [`Trackable`](../interfaces/util_trackable.Trackable.md)

___

### stateAPI

• `Private` **stateAPI**: [`StateAPI`](services_state_loader.StateAPI.md)

ActiveBrainAtlas fork:
Create ActiveBrainAtlas state API endpoint.

#### Defined in

[src/neuroglancer/ui/url_hash_binding.ts:61](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/url_hash_binding.ts#L61)

___

### stateData

• `Private` **stateData**: [`State`](../interfaces/services_state.State.md)

#### Defined in

[src/neuroglancer/ui/url_hash_binding.ts:62](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/url_hash_binding.ts#L62)

___

### stateID

• `Private` **stateID**: ``null`` \| `string`

#### Defined in

[src/neuroglancer/ui/url_hash_binding.ts:63](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/url_hash_binding.ts#L63)

___

### user

• `Private` **user**: [`User`](../interfaces/services_user_loader.User.md)

#### Defined in

[src/neuroglancer/ui/url_hash_binding.ts:64](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/url_hash_binding.ts#L64)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`UrlHashBinding`](ui_url_hash_binding.UrlHashBinding.md)

#### Returns

[`UrlHashBinding`](ui_url_hash_binding.UrlHashBinding.md)

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[addRef](util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### checkAndSetStateFromFirebase

▸ `Private` **checkAndSetStateFromFirebase**(): `void`

ActiveBrainAtlas fork:
Update the local state upon a firebase update.
This is called only in the multi user mode so we know
there is a stateID and multiUser=1

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/url_hash_binding.ts:212](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/url_hash_binding.ts#L212)

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

### resetDatabaseState

▸ **resetDatabaseState**(): `void`

This method is also used in state_loader.ts

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/url_hash_binding.ts:239](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/url_hash_binding.ts#L239)

___

### setStateRoot

▸ `Private` **setStateRoot**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/url_hash_binding.ts:195](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/url_hash_binding.ts#L195)

___

### setUrlHash

▸ `Private` **setUrlHash**(): `void`

ActiveBrainAtlas fork:
Do not change URL when the current state changes.
Instead, when the current state change in the multi-user mode,
push the update to Firebase.

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/url_hash_binding.ts:91](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/url_hash_binding.ts#L91)

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

### updateFromUrlHash

▸ **updateFromUrlHash**(): `void`

ActiveBrainAtlas fork:
Fetch the state from ActiveBrainAtlas server according to the GET parameter `id`.
The user mode is determined by the GET parameter `multi`:
0 - single user mode; 1 - multi user mode.
This is called upon initial load of the page.
This is called from src/main_python.ts

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/url_hash_binding.ts:120](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/url_hash_binding.ts#L120)

___

### updateStateData

▸ `Private` **updateStateData**(`stateData`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `stateData` | [`State`](../interfaces/services_state.State.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/url_hash_binding.ts:224](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/url_hash_binding.ts#L224)
