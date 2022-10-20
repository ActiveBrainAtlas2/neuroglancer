[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/services/user\_loader](../modules/neuroglancer_services_user_loader.md) / UserLoader

# Class: UserLoader

[neuroglancer/services/user_loader](../modules/neuroglancer_services_user_loader.md).UserLoader

## Table of contents

### Constructors

- [constructor](neuroglancer_services_user_loader.UserLoader.md#constructor)

### Properties

- [element](neuroglancer_services_user_loader.UserLoader.md#element)
- [googleLoginButton](neuroglancer_services_user_loader.UserLoader.md#googleloginbutton)
- [localLoginButton](neuroglancer_services_user_loader.UserLoader.md#localloginbutton)
- [logoutButton](neuroglancer_services_user_loader.UserLoader.md#logoutbutton)
- [stateAPI](neuroglancer_services_user_loader.UserLoader.md#stateapi)
- [user](neuroglancer_services_user_loader.UserLoader.md#user)
- [userList](neuroglancer_services_user_loader.UserLoader.md#userlist)
- [users](neuroglancer_services_user_loader.UserLoader.md#users)

### Methods

- [googleLogin](neuroglancer_services_user_loader.UserLoader.md#googlelogin)
- [localLogin](neuroglancer_services_user_loader.UserLoader.md#locallogin)
- [loggedIn](neuroglancer_services_user_loader.UserLoader.md#loggedin)
- [logout](neuroglancer_services_user_loader.UserLoader.md#logout)
- [notLoggedIn](neuroglancer_services_user_loader.UserLoader.md#notloggedin)
- [updateUserList](neuroglancer_services_user_loader.UserLoader.md#updateuserlist)

## Constructors

### constructor

• **new UserLoader**()

#### Defined in

[src/neuroglancer/services/user_loader.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/services/user_loader.ts#L33)

## Properties

### element

• **element**: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/services/user_loader.ts:24](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/services/user_loader.ts#L24)

___

### googleLoginButton

• `Private` **googleLoginButton**: [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/services/user_loader.ts:26](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/services/user_loader.ts#L26)

___

### localLoginButton

• `Private` **localLoginButton**: [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/services/user_loader.ts:27](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/services/user_loader.ts#L27)

___

### logoutButton

• `Private` **logoutButton**: [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)

#### Defined in

[src/neuroglancer/services/user_loader.ts:28](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/services/user_loader.ts#L28)

___

### stateAPI

• `Private` **stateAPI**: [`StateAPI`](neuroglancer_services_state_loader.StateAPI.md)

#### Defined in

[src/neuroglancer/services/user_loader.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/services/user_loader.ts#L30)

___

### user

• `Private` **user**: [`User`](../interfaces/neuroglancer_services_user_loader.User.md)

#### Defined in

[src/neuroglancer/services/user_loader.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/services/user_loader.ts#L31)

___

### userList

• `Private` **userList**: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/services/user_loader.ts:25](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/services/user_loader.ts#L25)

___

### users

• `Private` **users**: `string`[]

#### Defined in

[src/neuroglancer/services/user_loader.ts:29](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/services/user_loader.ts#L29)

## Methods

### googleLogin

▸ `Private` **googleLogin**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/services/user_loader.ts:133](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/services/user_loader.ts#L133)

___

### localLogin

▸ `Private` **localLogin**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/services/user_loader.ts:139](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/services/user_loader.ts#L139)

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

[src/neuroglancer/services/user_loader.ts:108](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/services/user_loader.ts#L108)

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

[src/neuroglancer/services/user_loader.ts:145](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/services/user_loader.ts#L145)

___

### notLoggedIn

▸ `Private` **notLoggedIn**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/services/user_loader.ts:99](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/services/user_loader.ts#L99)

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

[src/neuroglancer/services/user_loader.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/services/user_loader.ts#L75)
