[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/ui/url\_hash\_binding](../modules/neuroglancer_ui_url_hash_binding.md) / UrlHashBinding

# Class: UrlHashBinding

[neuroglancer/ui/url_hash_binding](../modules/neuroglancer_ui_url_hash_binding.md).UrlHashBinding

An instance of this class manages a binding between a Trackable value and the URL hash state.
The binding is initialized in the constructor, and is removed when dispose is called.

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`UrlHashBinding`**

## Table of contents

### Constructors

- [constructor](neuroglancer_ui_url_hash_binding.UrlHashBinding.md#constructor)

### Properties

- [credentialsManager](neuroglancer_ui_url_hash_binding.UrlHashBinding.md#credentialsmanager)
- [disposedStacks](neuroglancer_ui_url_hash_binding.UrlHashBinding.md#disposedstacks)
- [multiUserMode](neuroglancer_ui_url_hash_binding.UrlHashBinding.md#multiusermode)
- [parseError](neuroglancer_ui_url_hash_binding.UrlHashBinding.md#parseerror)
- [prevUrlString](neuroglancer_ui_url_hash_binding.UrlHashBinding.md#prevurlstring)
- [refCount](neuroglancer_ui_url_hash_binding.UrlHashBinding.md#refcount)
- [root](neuroglancer_ui_url_hash_binding.UrlHashBinding.md#root)
- [stateAPI](neuroglancer_ui_url_hash_binding.UrlHashBinding.md#stateapi)
- [stateData](neuroglancer_ui_url_hash_binding.UrlHashBinding.md#statedata)
- [stateID](neuroglancer_ui_url_hash_binding.UrlHashBinding.md#stateid)
- [user](neuroglancer_ui_url_hash_binding.UrlHashBinding.md#user)
- [wasDisposed](neuroglancer_ui_url_hash_binding.UrlHashBinding.md#wasdisposed)

### Methods

- [addRef](neuroglancer_ui_url_hash_binding.UrlHashBinding.md#addref)
- [checkAndSetStateFromFirebase](neuroglancer_ui_url_hash_binding.UrlHashBinding.md#checkandsetstatefromfirebase)
- [dispose](neuroglancer_ui_url_hash_binding.UrlHashBinding.md#dispose)
- [disposed](neuroglancer_ui_url_hash_binding.UrlHashBinding.md#disposed)
- [refCountReachedZero](neuroglancer_ui_url_hash_binding.UrlHashBinding.md#refcountreachedzero)
- [registerCancellable](neuroglancer_ui_url_hash_binding.UrlHashBinding.md#registercancellable)
- [registerDisposer](neuroglancer_ui_url_hash_binding.UrlHashBinding.md#registerdisposer)
- [registerEventListener](neuroglancer_ui_url_hash_binding.UrlHashBinding.md#registereventlistener)
- [resetDatabaseState](neuroglancer_ui_url_hash_binding.UrlHashBinding.md#resetdatabasestate)
- [setStateRoot](neuroglancer_ui_url_hash_binding.UrlHashBinding.md#setstateroot)
- [setUrlHash](neuroglancer_ui_url_hash_binding.UrlHashBinding.md#seturlhash)
- [unregisterDisposer](neuroglancer_ui_url_hash_binding.UrlHashBinding.md#unregisterdisposer)
- [updateFromUrlHash](neuroglancer_ui_url_hash_binding.UrlHashBinding.md#updatefromurlhash)
- [updateStateData](neuroglancer_ui_url_hash_binding.UrlHashBinding.md#updatestatedata)

## Constructors

### constructor

• **new UrlHashBinding**(`root`, `credentialsManager`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `root` | [`Trackable`](../interfaces/neuroglancer_util_trackable.Trackable.md) |
| `credentialsManager` | [`CredentialsManager`](../interfaces/neuroglancer_credentials_provider.CredentialsManager.md) |
| `options` | [`UrlHashBindingOptions`](../interfaces/neuroglancer_ui_url_hash_binding.UrlHashBindingOptions.md) |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/ui/url_hash_binding.ts:67](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/url_hash_binding.ts#L67)

## Properties

### credentialsManager

• **credentialsManager**: [`CredentialsManager`](../interfaces/neuroglancer_credentials_provider.CredentialsManager.md)

#### Defined in

[src/neuroglancer/ui/url_hash_binding.ts:68](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/url_hash_binding.ts#L68)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### multiUserMode

• `Private` **multiUserMode**: `boolean`

#### Defined in

[src/neuroglancer/ui/url_hash_binding.ts:65](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/url_hash_binding.ts#L65)

___

### parseError

• **parseError**: [`WatchableValue`](neuroglancer_trackable_value.WatchableValue.md)<`undefined` \| [`Error`](../modules/main_module._internal_.md#error)\>

Most recent error parsing URL hash.

#### Defined in

[src/neuroglancer/ui/url_hash_binding.ts:55](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/url_hash_binding.ts#L55)

___

### prevUrlString

• `Private` **prevUrlString**: `undefined` \| `string`

Most recently parsed or set state string.

#### Defined in

[src/neuroglancer/ui/url_hash_binding.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/url_hash_binding.ts#L50)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### root

• **root**: [`Trackable`](../interfaces/neuroglancer_util_trackable.Trackable.md)

#### Defined in

[src/neuroglancer/ui/url_hash_binding.ts:68](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/url_hash_binding.ts#L68)

___

### stateAPI

• `Private` **stateAPI**: [`StateAPI`](neuroglancer_services_state_loader.StateAPI.md)

ActiveBrainAtlas fork:
Create ActiveBrainAtlas state API endpoint.

#### Defined in

[src/neuroglancer/ui/url_hash_binding.ts:61](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/url_hash_binding.ts#L61)

___

### stateData

• `Private` **stateData**: [`State`](../interfaces/neuroglancer_services_state.State.md)

#### Defined in

[src/neuroglancer/ui/url_hash_binding.ts:62](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/url_hash_binding.ts#L62)

___

### stateID

• `Private` **stateID**: ``null`` \| `string`

#### Defined in

[src/neuroglancer/ui/url_hash_binding.ts:63](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/url_hash_binding.ts#L63)

___

### user

• `Private` **user**: [`User`](../interfaces/neuroglancer_services_user_loader.User.md)

#### Defined in

[src/neuroglancer/ui/url_hash_binding.ts:64](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/url_hash_binding.ts#L64)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`UrlHashBinding`](neuroglancer_ui_url_hash_binding.UrlHashBinding.md)

#### Returns

[`UrlHashBinding`](neuroglancer_ui_url_hash_binding.UrlHashBinding.md)

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[addRef](neuroglancer_util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

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

[src/neuroglancer/ui/url_hash_binding.ts:212](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/url_hash_binding.ts#L212)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[dispose](neuroglancer_util_disposable.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposed](neuroglancer_util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L75)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCountReachedZero](neuroglancer_util_disposable.RefCounted.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L66)

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

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L100)

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

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L76)

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

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L95)

___

### resetDatabaseState

▸ **resetDatabaseState**(): `void`

This method is also used in state_loader.ts

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/url_hash_binding.ts:239](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/url_hash_binding.ts#L239)

___

### setStateRoot

▸ `Private` **setStateRoot**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/url_hash_binding.ts:195](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/url_hash_binding.ts#L195)

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

[src/neuroglancer/ui/url_hash_binding.ts:91](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/url_hash_binding.ts#L91)

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

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L85)

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

[src/neuroglancer/ui/url_hash_binding.ts:120](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/url_hash_binding.ts#L120)

___

### updateStateData

▸ `Private` **updateStateData**(`stateData`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `stateData` | [`State`](../interfaces/neuroglancer_services_state.State.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/url_hash_binding.ts:224](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/url_hash_binding.ts#L224)
