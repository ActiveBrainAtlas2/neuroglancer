[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/credentials\_provider/shared\_counterpart

# Module: neuroglancer/credentials\_provider/shared\_counterpart

## Table of contents

### Classes

- [SharedCredentialsProviderCounterpart](../classes/neuroglancer_credentials_provider_shared_counterpart.SharedCredentialsProviderCounterpart.md)

### Functions

- [WithSharedCredentialsProviderCounterpart](neuroglancer_credentials_provider_shared_counterpart.md#withsharedcredentialsprovidercounterpart)

## Functions

### WithSharedCredentialsProviderCounterpart

▸ **WithSharedCredentialsProviderCounterpart**<`Credentials`\>(): <TBase\>(`Base`: `TBase`) => (...`args`: `any`[]) => `__class`<`Credentials`, `TBase`\> & `TBase`

#### Type parameters

| Name |
| :------ |
| `Credentials` |

#### Returns

`fn`

▸ <`TBase`\>(`Base`): (...`args`: `any`[]) => `__class`<`Credentials`, `TBase`\> & `TBase`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TBase` | extends (...`args`: `any`[]) => [`SharedObjectCounterpart`](../classes/neuroglancer_worker_rpc.SharedObjectCounterpart.md) |

##### Parameters

| Name | Type |
| :------ | :------ |
| `Base` | `TBase` |

##### Returns

(...`args`: `any`[]) => `__class`<`Credentials`, `TBase`\> & `TBase`

#### Defined in

[src/neuroglancer/credentials_provider/shared_counterpart.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/credentials_provider/shared_counterpart.ts#L39)
