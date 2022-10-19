[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/datasource/brainmaps/frontend

# Module: neuroglancer/datasource/brainmaps/frontend

## Table of contents

### Modules

- [&lt;internal\&gt;](neuroglancer_datasource_brainmaps_frontend._internal_.md)

### Classes

- [BrainmapsAnnotationSource](../classes/neuroglancer_datasource_brainmaps_frontend.BrainmapsAnnotationSource.md)
- [BrainmapsDataSource](../classes/neuroglancer_datasource_brainmaps_frontend.BrainmapsDataSource.md)
- [BrainmapsSkeletonSource](../classes/neuroglancer_datasource_brainmaps_frontend.BrainmapsSkeletonSource.md)
- [MultiscaleVolumeChunkSource](../classes/neuroglancer_datasource_brainmaps_frontend.MultiscaleVolumeChunkSource.md)
- [MultiscaleVolumeInfo](../classes/neuroglancer_datasource_brainmaps_frontend.MultiscaleVolumeInfo.md)
- [VolumeInfo](../classes/neuroglancer_datasource_brainmaps_frontend.VolumeInfo.md)
- [VolumeList](../classes/neuroglancer_datasource_brainmaps_frontend.VolumeList.md)

### Interfaces

- [GetBrainmapsVolumeOptions](../interfaces/neuroglancer_datasource_brainmaps_frontend.GetBrainmapsVolumeOptions.md)

### Variables

- [productionInstance](neuroglancer_datasource_brainmaps_frontend.md#productioninstance)

### Functions

- [parseChangeStackList](neuroglancer_datasource_brainmaps_frontend.md#parsechangestacklist)
- [parseVolumeKey](neuroglancer_datasource_brainmaps_frontend.md#parsevolumekey)

## Variables

### productionInstance

• `Const` **productionInstance**: [`BrainmapsInstance`](../interfaces/neuroglancer_datasource_brainmaps_api.BrainmapsInstance.md)

#### Defined in

[src/neuroglancer/datasource/brainmaps/frontend.ts:932](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/brainmaps/frontend.ts#L932)

## Functions

### parseChangeStackList

▸ **parseChangeStackList**(`x`): `undefined` \| `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `any` |

#### Returns

`undefined` \| `string`[]

#### Defined in

[src/neuroglancer/datasource/brainmaps/frontend.ts:519](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/brainmaps/frontend.ts#L519)

___

### parseVolumeKey

▸ **parseVolumeKey**(`key`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `changeSpec` | [`ChangeSpec`](../classes/neuroglancer_datasource_brainmaps_base.ChangeSpec.md) \| `undefined` |
| `meshName` | `string` \| `undefined` |
| `parameters` | `any` |
| `volumeId` | `string` |

#### Defined in

[src/neuroglancer/datasource/brainmaps/frontend.ts:413](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/brainmaps/frontend.ts#L413)
