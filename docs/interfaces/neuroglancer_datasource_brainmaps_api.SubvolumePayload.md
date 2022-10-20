[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/datasource/brainmaps/api](../modules/neuroglancer_datasource_brainmaps_api.md) / SubvolumePayload

# Interface: SubvolumePayload

[neuroglancer/datasource/brainmaps/api](../modules/neuroglancer_datasource_brainmaps_api.md).SubvolumePayload

## Hierarchy

- [`ChangeStackAwarePayload`](neuroglancer_datasource_brainmaps_api.ChangeStackAwarePayload.md)

- [`GeometryAwarePayload`](neuroglancer_datasource_brainmaps_api.GeometryAwarePayload.md)

  ↳ **`SubvolumePayload`**

## Table of contents

### Properties

- [change\_spec](neuroglancer_datasource_brainmaps_api.SubvolumePayload.md#change_spec)
- [geometry](neuroglancer_datasource_brainmaps_api.SubvolumePayload.md#geometry)
- [image\_format\_options](neuroglancer_datasource_brainmaps_api.SubvolumePayload.md#image_format_options)
- [subvolume\_format](neuroglancer_datasource_brainmaps_api.SubvolumePayload.md#subvolume_format)

## Properties

### change\_spec

• `Optional` **change\_spec**: [`ChangeSpecPayload`](neuroglancer_datasource_brainmaps_api.ChangeSpecPayload.md)

#### Inherited from

[ChangeStackAwarePayload](neuroglancer_datasource_brainmaps_api.ChangeStackAwarePayload.md).[change_spec](neuroglancer_datasource_brainmaps_api.ChangeStackAwarePayload.md#change_spec)

#### Defined in

[src/neuroglancer/datasource/brainmaps/api.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/brainmaps/api.ts#L50)

___

### geometry

• **geometry**: [`GeometryPayload`](neuroglancer_datasource_brainmaps_api.GeometryPayload.md)

#### Inherited from

[GeometryAwarePayload](neuroglancer_datasource_brainmaps_api.GeometryAwarePayload.md).[geometry](neuroglancer_datasource_brainmaps_api.GeometryAwarePayload.md#geometry)

#### Defined in

[src/neuroglancer/datasource/brainmaps/api.ts:60](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/brainmaps/api.ts#L60)

___

### image\_format\_options

• `Optional` **image\_format\_options**: [`ImageFormatOptionsPayload`](neuroglancer_datasource_brainmaps_api.ImageFormatOptionsPayload.md)

#### Defined in

[src/neuroglancer/datasource/brainmaps/api.ts:70](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/brainmaps/api.ts#L70)

___

### subvolume\_format

• `Optional` **subvolume\_format**: ``"RAW"`` \| ``"SINGLE_IMAGE"``

#### Defined in

[src/neuroglancer/datasource/brainmaps/api.ts:71](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/brainmaps/api.ts#L71)
