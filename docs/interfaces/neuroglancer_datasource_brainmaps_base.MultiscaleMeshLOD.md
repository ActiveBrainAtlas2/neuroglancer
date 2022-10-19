[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/datasource/brainmaps/base](../modules/neuroglancer_datasource_brainmaps_base.md) / MultiscaleMeshLOD

# Interface: MultiscaleMeshLOD

[neuroglancer/datasource/brainmaps/base](../modules/neuroglancer_datasource_brainmaps_base.md).MultiscaleMeshLOD

## Table of contents

### Properties

- [gridShape](neuroglancer_datasource_brainmaps_base.MultiscaleMeshLOD.md#gridshape)
- [info](neuroglancer_datasource_brainmaps_base.MultiscaleMeshLOD.md#info)
- [relativeBlockShape](neuroglancer_datasource_brainmaps_base.MultiscaleMeshLOD.md#relativeblockshape)
- [scale](neuroglancer_datasource_brainmaps_base.MultiscaleMeshLOD.md#scale)

## Properties

### gridShape

• **gridShape**: `Uint32Array`

Size of chunk grid, in chunks.

#### Defined in

[src/neuroglancer/datasource/brainmaps/base.ts:64](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/brainmaps/base.ts#L64)

___

### info

• **info**: [`SingleMeshInfo`](neuroglancer_datasource_brainmaps_base.SingleMeshInfo.md)

#### Defined in

[src/neuroglancer/datasource/brainmaps/base.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/brainmaps/base.ts#L53)

___

### relativeBlockShape

• **relativeBlockShape**: [`vec3`](../classes/neuroglancer_util_geom.vec3.md)

Shape of the chunk for this level of detail, as a multiple of the base chunk shape.

#### Defined in

[src/neuroglancer/datasource/brainmaps/base.ts:59](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/brainmaps/base.ts#L59)

___

### scale

• **scale**: `number`

#### Defined in

[src/neuroglancer/datasource/brainmaps/base.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/brainmaps/base.ts#L54)
