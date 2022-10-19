[neuroglancer](../README.md) / [Modules](../modules.md) / [viewer](../modules/viewer.md) / [<internal\>](../modules/viewer._internal_.md) / UrlHashBinding

# Class: UrlHashBinding

[viewer](../modules/viewer.md).[<internal>](../modules/viewer._internal_.md).UrlHashBinding

An instance of this class manages a binding between a Trackable value and the URL hash state.
The binding is initialized in the constructor, and is removed when dispose is called.

## Hierarchy

- [`RefCounted`](axes_lines._internal_.RefCounted.md)

  ↳ **`UrlHashBinding`**

## Table of contents

### Constructors

- [constructor](viewer._internal_.UrlHashBinding.md#constructor)

### Properties

- [credentialsManager](viewer._internal_.UrlHashBinding.md#credentialsmanager)
- [disposedStacks](viewer._internal_.UrlHashBinding.md#disposedstacks)
- [multiUserMode](viewer._internal_.UrlHashBinding.md#multiusermode)
- [parseError](viewer._internal_.UrlHashBinding.md#parseerror)
- [prevUrlString](viewer._internal_.UrlHashBinding.md#prevurlstring)
- [refCount](viewer._internal_.UrlHashBinding.md#refcount)
- [root](viewer._internal_.UrlHashBinding.md#root)
- [stateAPI](viewer._internal_.UrlHashBinding.md#stateapi)
- [stateData](viewer._internal_.UrlHashBinding.md#statedata)
- [stateID](viewer._internal_.UrlHashBinding.md#stateid)
- [user](viewer._internal_.UrlHashBinding.md#user)
- [wasDisposed](viewer._internal_.UrlHashBinding.md#wasdisposed)

### Methods

- [addRef](viewer._internal_.UrlHashBinding.md#addref)
- [checkAndSetStateFromFirebase](viewer._internal_.UrlHashBinding.md#checkandsetstatefromfirebase)
- [dispose](viewer._internal_.UrlHashBinding.md#dispose)
- [disposed](viewer._internal_.UrlHashBinding.md#disposed)
- [refCountReachedZero](viewer._internal_.UrlHashBinding.md#refcountreachedzero)
- [registerCancellable](viewer._internal_.UrlHashBinding.md#registercancellable)
- [registerDisposer](viewer._internal_.UrlHashBinding.md#registerdisposer)
- [registerEventListener](viewer._internal_.UrlHashBinding.md#registereventlistener)
- [resetDatabaseState](viewer._internal_.UrlHashBinding.md#resetdatabasestate)
- [setStateRoot](viewer._internal_.UrlHashBinding.md#setstateroot)
- [setUrlHash](viewer._internal_.UrlHashBinding.md#seturlhash)
- [unregisterDisposer](viewer._internal_.UrlHashBinding.md#unregisterdisposer)
- [updateFromUrlHash](viewer._internal_.UrlHashBinding.md#updatefromurlhash)
- [updateStateData](viewer._internal_.UrlHashBinding.md#updatestatedata)

## Constructors

### constructor

• **new UrlHashBinding**(`root`, `credentialsManager`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `root` | [`Trackable`](../interfaces/coordinate_transform._internal_.Trackable.md) |
| `credentialsManager` | [`CredentialsManager`](../interfaces/layer._internal_.CredentialsManager.md) |
| `options` | [`UrlHashBindingOptions`](../interfaces/viewer._internal_.UrlHashBindingOptions.md) |

#### Overrides

[RefCounted](axes_lines._internal_.RefCounted.md).[constructor](axes_lines._internal_.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/ui/url_hash_binding.ts:67](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/url_hash_binding.ts#L67)

## Properties

### credentialsManager

• **credentialsManager**: [`CredentialsManager`](../interfaces/layer._internal_.CredentialsManager.md)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[disposedStacks](axes_lines._internal_.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L52)

___

### multiUserMode

• `Private` **multiUserMode**: `boolean`

#### Defined in

[src/neuroglancer/ui/url_hash_binding.ts:65](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/url_hash_binding.ts#L65)

___

### parseError

• **parseError**: [`WatchableValue`](trackable_value.WatchableValue.md)<`undefined` \| [`Error`](../modules/axes_lines._internal_.md#error)\>

Most recent error parsing URL hash.

#### Defined in

[src/neuroglancer/ui/url_hash_binding.ts:55](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/url_hash_binding.ts#L55)

___

### prevUrlString

• `Private` **prevUrlString**: `undefined` \| `string`

Most recently parsed or set state string.

#### Defined in

[src/neuroglancer/ui/url_hash_binding.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/url_hash_binding.ts#L50)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[refCount](axes_lines._internal_.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L45)

___

### root

• **root**: [`Trackable`](../interfaces/coordinate_transform._internal_.Trackable.md)

___

### stateAPI

• `Private` **stateAPI**: [`StateAPI`](viewer._internal_.StateAPI.md)

ActiveBrainAtlas fork:
Create ActiveBrainAtlas state API endpoint.

#### Defined in

[src/neuroglancer/ui/url_hash_binding.ts:61](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/url_hash_binding.ts#L61)

___

### stateData

• `Private` **stateData**: [`State`](../interfaces/viewer._internal_.State.md)

#### Defined in

[src/neuroglancer/ui/url_hash_binding.ts:62](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/url_hash_binding.ts#L62)

___

### stateID

• `Private` **stateID**: ``null`` \| `string`

#### Defined in

[src/neuroglancer/ui/url_hash_binding.ts:63](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/url_hash_binding.ts#L63)

___

### user

• `Private` **user**: [`User`](../interfaces/viewer._internal_.User.md)

#### Defined in

[src/neuroglancer/ui/url_hash_binding.ts:64](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/url_hash_binding.ts#L64)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[wasDisposed](axes_lines._internal_.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`UrlHashBinding`](viewer._internal_.UrlHashBinding.md)

#### Returns

[`UrlHashBinding`](viewer._internal_.UrlHashBinding.md)

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[addRef](axes_lines._internal_.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L48)

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

[src/neuroglancer/ui/url_hash_binding.ts:212](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/url_hash_binding.ts#L212)

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

### resetDatabaseState

▸ **resetDatabaseState**(): `void`

This method is also used in state_loader.ts

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/url_hash_binding.ts:239](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/url_hash_binding.ts#L239)

___

### setStateRoot

▸ `Private` **setStateRoot**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/url_hash_binding.ts:195](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/url_hash_binding.ts#L195)

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

[src/neuroglancer/ui/url_hash_binding.ts:91](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/url_hash_binding.ts#L91)

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

[src/neuroglancer/ui/url_hash_binding.ts:120](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/url_hash_binding.ts#L120)

___

### updateStateData

▸ `Private` **updateStateData**(`stateData`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `stateData` | [`State`](../interfaces/viewer._internal_.State.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/url_hash_binding.ts:224](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/url_hash_binding.ts#L224)
