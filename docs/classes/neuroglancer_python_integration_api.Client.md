[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/python\_integration/api](../modules/neuroglancer_python_integration_api.md) / Client

# Class: Client

[neuroglancer/python_integration/api](../modules/neuroglancer_python_integration_api.md).Client

## Table of contents

### Constructors

- [constructor](neuroglancer_python_integration_api.Client.md#constructor)

### Properties

- [clientId](neuroglancer_python_integration_api.Client.md#clientid)
- [urls](neuroglancer_python_integration_api.Client.md#urls)

### Methods

- [sendActionNotification](neuroglancer_python_integration_api.Client.md#sendactionnotification)

## Constructors

### constructor

• **new Client**()

## Properties

### clientId

• **clientId**: `string`

#### Defined in

[src/neuroglancer/python_integration/api.ts:187](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/python_integration/api.ts#L187)

___

### urls

• **urls**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `action` | `string` |
| `credentials` | `string` |
| `events` | `string` |
| `socket` | `string` |
| `state` | `string` |

#### Defined in

[src/neuroglancer/python_integration/api.ts:186](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/python_integration/api.ts#L186)

## Methods

### sendActionNotification

▸ **sendActionNotification**(`action`, `state`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | `string` |
| `state` | `any` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/python_integration/api.ts:189](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/python_integration/api.ts#L189)
