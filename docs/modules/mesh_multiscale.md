[neuroglancer](../README.md) / [Modules](../modules.md) / mesh/multiscale

# Module: mesh/multiscale

## Table of contents

### Interfaces

- [MultiscaleMeshManifest](../interfaces/mesh_multiscale.MultiscaleMeshManifest.md)

### Functions

- [getDesiredMultiscaleMeshChunks](mesh_multiscale.md#getdesiredmultiscalemeshchunks)
- [getMultiscaleChunksToDraw](mesh_multiscale.md#getmultiscalechunkstodraw)
- [getMultiscaleFragmentKey](mesh_multiscale.md#getmultiscalefragmentkey)
- [validateOctree](mesh_multiscale.md#validateoctree)

## Functions

### getDesiredMultiscaleMeshChunks

▸ **getDesiredMultiscaleMeshChunks**(`manifest`, `modelViewProjection`, `clippingPlanes`, `detailCutoff`, `viewportWidth`, `viewportHeight`, `callback`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `manifest` | [`MultiscaleMeshManifest`](../interfaces/mesh_multiscale.MultiscaleMeshManifest.md) | - |
| `modelViewProjection` | [`mat4`](../classes/util_geom.mat4.md) | - |
| `clippingPlanes` | `Float32Array` | - |
| `detailCutoff` | `number` | Factor by which the spatial resolution of the mesh may be worse than the     spatial resolution of a single viewport pixel.  For example, a value of 10 means that if a     given portion of the object will be rendered such that a pixel corresponds to 50 nm, then a     mesh level of detail down to 500 nm will be requested for that portion of the object. |
| `viewportWidth` | `number` | - |
| `viewportHeight` | `number` | - |
| `callback` | (`lod`: `number`, `row`: `number`, `renderScale`: `number`, `empty`: `number`) => `void` | - |

#### Returns

`void`

#### Defined in

[src/neuroglancer/mesh/multiscale.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/mesh/multiscale.ts#L85)

___

### getMultiscaleChunksToDraw

▸ **getMultiscaleChunksToDraw**(`manifest`, `modelViewProjection`, `clippingPlanes`, `detailCutoff`, `viewportWidth`, `viewportHeight`, `hasChunk`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `manifest` | [`MultiscaleMeshManifest`](../interfaces/mesh_multiscale.MultiscaleMeshManifest.md) |
| `modelViewProjection` | [`mat4`](../classes/util_geom.mat4.md) |
| `clippingPlanes` | `Float32Array` |
| `detailCutoff` | `number` |
| `viewportWidth` | `number` |
| `viewportHeight` | `number` |
| `hasChunk` | (`lod`: `number`, `row`: `number`, `renderScale`: `number`) => `boolean` |
| `callback` | (`lod`: `number`, `row`: `number`, `subChunkBegin`: `number`, `subChunkEnd`: `number`, `renderScale`: `number`) => `void` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/mesh/multiscale.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/mesh/multiscale.ts#L173)

___

### getMultiscaleFragmentKey

▸ **getMultiscaleFragmentKey**(`objectKey`, `lod`, `chunkIndex`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `objectKey` | `string` |
| `lod` | `number` |
| `chunkIndex` | `number` |

#### Returns

`string`

#### Defined in

[src/neuroglancer/mesh/multiscale.ts:304](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/mesh/multiscale.ts#L304)

___

### validateOctree

▸ **validateOctree**(`octree`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `octree` | `Uint32Array` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/mesh/multiscale.ts:268](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/mesh/multiscale.ts#L268)
