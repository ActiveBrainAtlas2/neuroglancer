[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/datasource/brainmaps/frontend](../modules/neuroglancer_datasource_brainmaps_frontend.md) / MultiscaleVolumeInfo

# Class: MultiscaleVolumeInfo

[neuroglancer/datasource/brainmaps/frontend](../modules/neuroglancer_datasource_brainmaps_frontend.md).MultiscaleVolumeInfo

## Table of contents

### Constructors

- [constructor](neuroglancer_datasource_brainmaps_frontend.MultiscaleVolumeInfo.md#constructor)

### Properties

- [box](neuroglancer_datasource_brainmaps_frontend.MultiscaleVolumeInfo.md#box)
- [dataType](neuroglancer_datasource_brainmaps_frontend.MultiscaleVolumeInfo.md#datatype)
- [numChannels](neuroglancer_datasource_brainmaps_frontend.MultiscaleVolumeInfo.md#numchannels)
- [scales](neuroglancer_datasource_brainmaps_frontend.MultiscaleVolumeInfo.md#scales)

### Methods

- [getModelSpace](neuroglancer_datasource_brainmaps_frontend.MultiscaleVolumeInfo.md#getmodelspace)

## Constructors

### constructor

• **new MultiscaleVolumeInfo**(`volumeInfoResponse`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `volumeInfoResponse` | `any` |

#### Defined in

[src/neuroglancer/datasource/brainmaps/frontend.ts:233](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/brainmaps/frontend.ts#L233)

## Properties

### box

• **box**: [`BoundingBox`](../interfaces/neuroglancer_coordinate_transform.BoundingBox.md)

#### Defined in

[src/neuroglancer/datasource/brainmaps/frontend.ts:231](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/brainmaps/frontend.ts#L231)

___

### dataType

• **dataType**: [`DataType`](../enums/neuroglancer_util_data_type.DataType.md)

#### Defined in

[src/neuroglancer/datasource/brainmaps/frontend.ts:230](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/brainmaps/frontend.ts#L230)

___

### numChannels

• **numChannels**: `number`

#### Defined in

[src/neuroglancer/datasource/brainmaps/frontend.ts:229](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/brainmaps/frontend.ts#L229)

___

### scales

• **scales**: [`VolumeInfo`](neuroglancer_datasource_brainmaps_frontend.VolumeInfo.md)[]

#### Defined in

[src/neuroglancer/datasource/brainmaps/frontend.ts:228](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/brainmaps/frontend.ts#L228)

## Methods

### getModelSpace

▸ **getModelSpace**(`channelDimension?`): [`CoordinateSpace`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpace.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `channelDimension` | `boolean` | `false` |

#### Returns

[`CoordinateSpace`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpace.md)

#### Defined in

[src/neuroglancer/datasource/brainmaps/frontend.ts:267](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/brainmaps/frontend.ts#L267)
