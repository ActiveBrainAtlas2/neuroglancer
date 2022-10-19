[neuroglancer](../README.md) / [Modules](../modules.md) / [services/state\_loader](../modules/services_state_loader.md) / StateAPI

# Class: StateAPI

[services/state_loader](../modules/services_state_loader.md).StateAPI

## Table of contents

### Constructors

- [constructor](services_state_loader.StateAPI.md#constructor)

### Methods

- [getState](services_state_loader.StateAPI.md#getstate)
- [getUser](services_state_loader.StateAPI.md#getuser)
- [newState](services_state_loader.StateAPI.md#newstate)
- [saveAnnotations](services_state_loader.StateAPI.md#saveannotations)
- [saveState](services_state_loader.StateAPI.md#savestate)
- [segmentVolume](services_state_loader.StateAPI.md#segmentvolume)

## Constructors

### constructor

• **new StateAPI**(`userUrl`, `stateUrl`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `userUrl` | `string` |
| `stateUrl` | `string` |

#### Defined in

[src/neuroglancer/services/state_loader.ts:125](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/services/state_loader.ts#L125)

## Methods

### getState

▸ **getState**(`stateID`): `Promise`<[`State`](../interfaces/services_state.State.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `stateID` | `string` \| `number` |

#### Returns

`Promise`<[`State`](../interfaces/services_state.State.md)\>

#### Defined in

[src/neuroglancer/services/state_loader.ts:141](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/services/state_loader.ts#L141)

___

### getUser

▸ **getUser**(): `Promise`<[`User`](../interfaces/services_user_loader.User.md)\>

#### Returns

`Promise`<[`User`](../interfaces/services_user_loader.User.md)\>

#### Defined in

[src/neuroglancer/services/state_loader.ts:127](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/services/state_loader.ts#L127)

___

### newState

▸ **newState**(`state`): `Promise`<[`State`](../interfaces/services_state.State.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`State`](../interfaces/services_state.State.md) |

#### Returns

`Promise`<[`State`](../interfaces/services_state.State.md)\>

#### Defined in

[src/neuroglancer/services/state_loader.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/services/state_loader.ts#L170)

___

### saveAnnotations

▸ **saveAnnotations**(`stateId`, `layerName`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `stateId` | `string` \| `number` |
| `layerName` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/neuroglancer/services/state_loader.ts:252](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/services/state_loader.ts#L252)

___

### saveState

▸ **saveState**(`stateID`, `state`): `Promise`<[`State`](../interfaces/services_state.State.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `stateID` | `string` \| `number` |
| `state` | [`State`](../interfaces/services_state.State.md) |

#### Returns

`Promise`<[`State`](../interfaces/services_state.State.md)\>

#### Defined in

[src/neuroglancer/services/state_loader.ts:205](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/services/state_loader.ts#L205)

___

### segmentVolume

▸ **segmentVolume**(`stateID`, `volumeId`): `Promise`<[`Segmentation`](../interfaces/services_state.Segmentation.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `stateID` | `string` \| `number` |
| `volumeId` | `string` |

#### Returns

`Promise`<[`Segmentation`](../interfaces/services_state.Segmentation.md)\>

#### Defined in

[src/neuroglancer/services/state_loader.ts:237](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/services/state_loader.ts#L237)
