[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/datasource](../modules/neuroglancer_datasource.md) / DataSubsourceEntry

# Interface: DataSubsourceEntry

[neuroglancer/datasource](../modules/neuroglancer_datasource.md).DataSubsourceEntry

## Table of contents

### Properties

- [default](neuroglancer_datasource.DataSubsourceEntry.md#default)
- [id](neuroglancer_datasource.DataSubsourceEntry.md#id)
- [modelSubspaceDimensionIndices](neuroglancer_datasource.DataSubsourceEntry.md#modelsubspacedimensionindices)
- [subsource](neuroglancer_datasource.DataSubsourceEntry.md#subsource)
- [subsourceToModelSubspaceTransform](neuroglancer_datasource.DataSubsourceEntry.md#subsourcetomodelsubspacetransform)

## Properties

### default

• **default**: `boolean`

Specifies whether this associated data source is enabled by default.

#### Defined in

[src/neuroglancer/datasource/index.ts:168](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/index.ts#L168)

___

### id

• **id**: `string`

Unique identifier (within the group) for this subsource.  Stored in the JSON state
representation to indicate which subsources are enabled.  The empty string `""` should be used
for the first/primary subsource.

#### Defined in

[src/neuroglancer/datasource/index.ts:146](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/index.ts#L146)

___

### modelSubspaceDimensionIndices

• `Optional` **modelSubspaceDimensionIndices**: `number`[]

Specifies the model dimensions corresponding to this subsource.  If unspecified, defaults to
`[0, ..., modelSpace.rank)`.

#### Defined in

[src/neuroglancer/datasource/index.ts:163](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/index.ts#L163)

___

### subsource

• **subsource**: [`DataSubsource`](neuroglancer_datasource.DataSubsource.md)

#### Defined in

[src/neuroglancer/datasource/index.ts:148](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/index.ts#L148)

___

### subsourceToModelSubspaceTransform

• `Optional` **subsourceToModelSubspaceTransform**: `Float32Array`

Homoegeneous transformation from the subsource to the model subspace corresponding to
`modelSubspceDimensionIndices`.  The rank is equal to the length of
`modelSubspaceDimensionIndices`.  If this is greater than the subsource rank, the subsource
coordinate space is implicitly padded at the end with additional dummy dimensions with a range
of `[0, 1]`.  If unspecified, defaults to the identity transform.

#### Defined in

[src/neuroglancer/datasource/index.ts:157](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/index.ts#L157)
