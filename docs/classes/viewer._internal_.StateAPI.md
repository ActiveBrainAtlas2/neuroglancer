[neuroglancer](../README.md) / [Modules](../modules.md) / [viewer](../modules/viewer.md) / [<internal\>](../modules/viewer._internal_.md) / StateAPI

# Class: StateAPI

[viewer](../modules/viewer.md).[<internal>](../modules/viewer._internal_.md).StateAPI

## Table of contents

### Constructors

- [constructor](viewer._internal_.StateAPI.md#constructor)

### Methods

- [getState](viewer._internal_.StateAPI.md#getstate)
- [getUser](viewer._internal_.StateAPI.md#getuser)
- [newState](viewer._internal_.StateAPI.md#newstate)
- [saveAnnotations](viewer._internal_.StateAPI.md#saveannotations)
- [saveState](viewer._internal_.StateAPI.md#savestate)
- [segmentVolume](viewer._internal_.StateAPI.md#segmentvolume)

## Constructors

### constructor

• **new StateAPI**(`userUrl`, `stateUrl`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `userUrl` | `string` |
| `stateUrl` | `string` |

#### Defined in

[src/neuroglancer/services/state_loader.ts:125](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/services/state_loader.ts#L125)

## Methods

### getState

▸ **getState**(`stateID`): `Promise`<[`State`](../interfaces/viewer._internal_.State.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `stateID` | `string` \| `number` |

#### Returns

`Promise`<[`State`](../interfaces/viewer._internal_.State.md)\>

#### Defined in

[src/neuroglancer/services/state_loader.ts:141](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/services/state_loader.ts#L141)

___

### getUser

▸ **getUser**(): `Promise`<[`User`](../interfaces/viewer._internal_.User.md)\>

#### Returns

`Promise`<[`User`](../interfaces/viewer._internal_.User.md)\>

#### Defined in

[src/neuroglancer/services/state_loader.ts:127](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/services/state_loader.ts#L127)

___

### newState

▸ **newState**(`state`): `Promise`<[`State`](../interfaces/viewer._internal_.State.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`State`](../interfaces/viewer._internal_.State.md) |

#### Returns

`Promise`<[`State`](../interfaces/viewer._internal_.State.md)\>

#### Defined in

[src/neuroglancer/services/state_loader.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/services/state_loader.ts#L170)

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

[src/neuroglancer/services/state_loader.ts:252](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/services/state_loader.ts#L252)

___

### saveState

▸ **saveState**(`stateID`, `state`): `Promise`<[`State`](../interfaces/viewer._internal_.State.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `stateID` | `string` \| `number` |
| `state` | [`State`](../interfaces/viewer._internal_.State.md) |

#### Returns

`Promise`<[`State`](../interfaces/viewer._internal_.State.md)\>

#### Defined in

[src/neuroglancer/services/state_loader.ts:205](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/services/state_loader.ts#L205)

___

### segmentVolume

▸ **segmentVolume**(`stateID`, `volumeId`): `Promise`<[`Segmentation`](../interfaces/viewer._internal_.Segmentation.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `stateID` | `string` \| `number` |
| `volumeId` | `string` |

#### Returns

`Promise`<[`Segmentation`](../interfaces/viewer._internal_.Segmentation.md)\>

#### Defined in

[src/neuroglancer/services/state_loader.ts:237](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/services/state_loader.ts#L237)
