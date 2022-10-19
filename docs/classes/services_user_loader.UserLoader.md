[neuroglancer](../README.md) / [Modules](../modules.md) / [services/user\_loader](../modules/services_user_loader.md) / UserLoader

# Class: UserLoader

[services/user_loader](../modules/services_user_loader.md).UserLoader

## Table of contents

### Constructors

- [constructor](services_user_loader.UserLoader.md#constructor)

### Properties

- [element](services_user_loader.UserLoader.md#element)
- [googleLoginButton](services_user_loader.UserLoader.md#googleloginbutton)
- [localLoginButton](services_user_loader.UserLoader.md#localloginbutton)
- [logoutButton](services_user_loader.UserLoader.md#logoutbutton)
- [stateAPI](services_user_loader.UserLoader.md#stateapi)
- [user](services_user_loader.UserLoader.md#user)
- [userList](services_user_loader.UserLoader.md#userlist)
- [users](services_user_loader.UserLoader.md#users)

### Methods

- [googleLogin](services_user_loader.UserLoader.md#googlelogin)
- [localLogin](services_user_loader.UserLoader.md#locallogin)
- [loggedIn](services_user_loader.UserLoader.md#loggedin)
- [logout](services_user_loader.UserLoader.md#logout)
- [notLoggedIn](services_user_loader.UserLoader.md#notloggedin)
- [updateUserList](services_user_loader.UserLoader.md#updateuserlist)

## Constructors

### constructor

• **new UserLoader**()

#### Defined in

[src/neuroglancer/services/user_loader.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/services/user_loader.ts#L33)

## Properties

### element

• **element**: [`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/services/user_loader.ts:24](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/services/user_loader.ts#L24)

___

### googleLoginButton

• `Private` **googleLoginButton**: [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/services/user_loader.ts:26](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/services/user_loader.ts#L26)

___

### localLoginButton

• `Private` **localLoginButton**: [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/services/user_loader.ts:27](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/services/user_loader.ts#L27)

___

### logoutButton

• `Private` **logoutButton**: [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/services/user_loader.ts:28](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/services/user_loader.ts#L28)

___

### stateAPI

• `Private` **stateAPI**: [`StateAPI`](services_state_loader.StateAPI.md)

#### Defined in

[src/neuroglancer/services/user_loader.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/services/user_loader.ts#L30)

___

### user

• `Private` **user**: [`User`](../interfaces/services_user_loader.User.md)

#### Defined in

[src/neuroglancer/services/user_loader.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/services/user_loader.ts#L31)

___

### userList

• `Private` **userList**: [`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/services/user_loader.ts:25](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/services/user_loader.ts#L25)

___

### users

• `Private` **users**: `string`[]

#### Defined in

[src/neuroglancer/services/user_loader.ts:29](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/services/user_loader.ts#L29)

## Methods

### googleLogin

▸ `Private` **googleLogin**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/services/user_loader.ts:133](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/services/user_loader.ts#L133)

___

### localLogin

▸ `Private` **localLogin**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/services/user_loader.ts:139](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/services/user_loader.ts#L139)

___

### loggedIn

▸ `Private` **loggedIn**(`stateID`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `stateID` | `string` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/services/user_loader.ts:108](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/services/user_loader.ts#L108)

___

### logout

▸ `Private` **logout**(`stateID`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `stateID` | `string` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/services/user_loader.ts:145](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/services/user_loader.ts#L145)

___

### notLoggedIn

▸ `Private` **notLoggedIn**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/services/user_loader.ts:99](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/services/user_loader.ts#L99)

___

### updateUserList

▸ `Private` **updateUserList**(`snapshot`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `snapshot` | `any` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/services/user_loader.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/services/user_loader.ts#L75)
