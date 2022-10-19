[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/datasource/brainmaps/backend](../modules/neuroglancer_datasource_brainmaps_backend.md) / [<internal\>](../modules/neuroglancer_datasource_brainmaps_backend._internal_.md) / BrainmapsMultiscaleManifestChunk

# Interface: BrainmapsMultiscaleManifestChunk

[neuroglancer/datasource/brainmaps/backend](../modules/neuroglancer_datasource_brainmaps_backend.md).[<internal>](../modules/neuroglancer_datasource_brainmaps_backend._internal_.md).BrainmapsMultiscaleManifestChunk

## Hierarchy

- [`MultiscaleManifestChunk`](../classes/neuroglancer_mesh_backend.MultiscaleManifestChunk.md)

  ↳ **`BrainmapsMultiscaleManifestChunk`**

## Table of contents

### Properties

- [backendOnly](neuroglancer_datasource_brainmaps_backend._internal_.BrainmapsMultiscaleManifestChunk.md#backendonly)
- [child0](neuroglancer_datasource_brainmaps_backend._internal_.BrainmapsMultiscaleManifestChunk.md#child0)
- [child1](neuroglancer_datasource_brainmaps_backend._internal_.BrainmapsMultiscaleManifestChunk.md#child1)
- [downloadCancellationToken](neuroglancer_datasource_brainmaps_backend._internal_.BrainmapsMultiscaleManifestChunk.md#downloadcancellationtoken)
- [error](neuroglancer_datasource_brainmaps_backend._internal_.BrainmapsMultiscaleManifestChunk.md#error)
- [fragmentSupervoxelIds](neuroglancer_datasource_brainmaps_backend._internal_.BrainmapsMultiscaleManifestChunk.md#fragmentsupervoxelids)
- [isComputational](neuroglancer_datasource_brainmaps_backend._internal_.BrainmapsMultiscaleManifestChunk.md#iscomputational)
- [key](neuroglancer_datasource_brainmaps_backend._internal_.BrainmapsMultiscaleManifestChunk.md#key)
- [manifest](neuroglancer_datasource_brainmaps_backend._internal_.BrainmapsMultiscaleManifestChunk.md#manifest)
- [markGeneration](neuroglancer_datasource_brainmaps_backend._internal_.BrainmapsMultiscaleManifestChunk.md#markgeneration)
- [newPriority](neuroglancer_datasource_brainmaps_backend._internal_.BrainmapsMultiscaleManifestChunk.md#newpriority)
- [newPriorityTier](neuroglancer_datasource_brainmaps_backend._internal_.BrainmapsMultiscaleManifestChunk.md#newprioritytier)
- [newlyRequestedToFrontend](neuroglancer_datasource_brainmaps_backend._internal_.BrainmapsMultiscaleManifestChunk.md#newlyrequestedtofrontend)
- [next0](neuroglancer_datasource_brainmaps_backend._internal_.BrainmapsMultiscaleManifestChunk.md#next0)
- [next1](neuroglancer_datasource_brainmaps_backend._internal_.BrainmapsMultiscaleManifestChunk.md#next1)
- [objectId](neuroglancer_datasource_brainmaps_backend._internal_.BrainmapsMultiscaleManifestChunk.md#objectid)
- [prev0](neuroglancer_datasource_brainmaps_backend._internal_.BrainmapsMultiscaleManifestChunk.md#prev0)
- [prev1](neuroglancer_datasource_brainmaps_backend._internal_.BrainmapsMultiscaleManifestChunk.md#prev1)
- [priority](neuroglancer_datasource_brainmaps_backend._internal_.BrainmapsMultiscaleManifestChunk.md#priority)
- [priorityTier](neuroglancer_datasource_brainmaps_backend._internal_.BrainmapsMultiscaleManifestChunk.md#prioritytier)
- [requestedToFrontend](neuroglancer_datasource_brainmaps_backend._internal_.BrainmapsMultiscaleManifestChunk.md#requestedtofrontend)
- [source](neuroglancer_datasource_brainmaps_backend._internal_.BrainmapsMultiscaleManifestChunk.md#source)

### Accessors

- [chunkManager](neuroglancer_datasource_brainmaps_backend._internal_.BrainmapsMultiscaleManifestChunk.md#chunkmanager)
- [downloadSlots](neuroglancer_datasource_brainmaps_backend._internal_.BrainmapsMultiscaleManifestChunk.md#downloadslots)
- [gpuMemoryBytes](neuroglancer_datasource_brainmaps_backend._internal_.BrainmapsMultiscaleManifestChunk.md#gpumemorybytes)
- [queueManager](neuroglancer_datasource_brainmaps_backend._internal_.BrainmapsMultiscaleManifestChunk.md#queuemanager)
- [state](neuroglancer_datasource_brainmaps_backend._internal_.BrainmapsMultiscaleManifestChunk.md#state)
- [systemMemoryBytes](neuroglancer_datasource_brainmaps_backend._internal_.BrainmapsMultiscaleManifestChunk.md#systemmemorybytes)

### Methods

- [dispose](neuroglancer_datasource_brainmaps_backend._internal_.BrainmapsMultiscaleManifestChunk.md#dispose)
- [downloadFailed](neuroglancer_datasource_brainmaps_backend._internal_.BrainmapsMultiscaleManifestChunk.md#downloadfailed)
- [downloadSucceeded](neuroglancer_datasource_brainmaps_backend._internal_.BrainmapsMultiscaleManifestChunk.md#downloadsucceeded)
- [freeSystemMemory](neuroglancer_datasource_brainmaps_backend._internal_.BrainmapsMultiscaleManifestChunk.md#freesystemmemory)
- [initialize](neuroglancer_datasource_brainmaps_backend._internal_.BrainmapsMultiscaleManifestChunk.md#initialize)
- [initializeManifestChunk](neuroglancer_datasource_brainmaps_backend._internal_.BrainmapsMultiscaleManifestChunk.md#initializemanifestchunk)
- [registerListener](neuroglancer_datasource_brainmaps_backend._internal_.BrainmapsMultiscaleManifestChunk.md#registerlistener)
- [serialize](neuroglancer_datasource_brainmaps_backend._internal_.BrainmapsMultiscaleManifestChunk.md#serialize)
- [toString](neuroglancer_datasource_brainmaps_backend._internal_.BrainmapsMultiscaleManifestChunk.md#tostring)
- [unregisterListener](neuroglancer_datasource_brainmaps_backend._internal_.BrainmapsMultiscaleManifestChunk.md#unregisterlistener)
- [updatePriorityProperties](neuroglancer_datasource_brainmaps_backend._internal_.BrainmapsMultiscaleManifestChunk.md#updatepriorityproperties)

## Properties

### backendOnly

• **backendOnly**: `boolean` = `false`

#### Inherited from

[MultiscaleManifestChunk](../classes/neuroglancer_mesh_backend.MultiscaleManifestChunk.md).[backendOnly](../classes/neuroglancer_mesh_backend.MultiscaleManifestChunk.md#backendonly)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L87)

___

### child0

• **child0**: ``null`` \| [`Chunk`](../classes/neuroglancer_chunk_manager_backend.Chunk.md) = `null`

#### Inherited from

[MultiscaleManifestChunk](../classes/neuroglancer_mesh_backend.MultiscaleManifestChunk.md).[child0](../classes/neuroglancer_mesh_backend.MultiscaleManifestChunk.md#child0)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L47)

___

### child1

• **child1**: ``null`` \| [`Chunk`](../classes/neuroglancer_chunk_manager_backend.Chunk.md) = `null`

#### Inherited from

[MultiscaleManifestChunk](../classes/neuroglancer_mesh_backend.MultiscaleManifestChunk.md).[child1](../classes/neuroglancer_mesh_backend.MultiscaleManifestChunk.md#child1)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L50)

___

### downloadCancellationToken

• **downloadCancellationToken**: `undefined` \| [`CancellationTokenSource`](../classes/neuroglancer_util_cancellation.CancellationTokenSource.md) = `undefined`

Cancellation token used to cancel the pending download.  Set to undefined except when state !==
DOWNLOADING.  This should not be accessed by code outside this module.

#### Inherited from

[MultiscaleManifestChunk](../classes/neuroglancer_mesh_backend.MultiscaleManifestChunk.md).[downloadCancellationToken](../classes/neuroglancer_mesh_backend.MultiscaleManifestChunk.md#downloadcancellationtoken)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:96](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L96)

___

### error

• **error**: `any` = `null`

#### Inherited from

[MultiscaleManifestChunk](../classes/neuroglancer_mesh_backend.MultiscaleManifestChunk.md).[error](../classes/neuroglancer_mesh_backend.MultiscaleManifestChunk.md#error)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:60](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L60)

___

### fragmentSupervoxelIds

• **fragmentSupervoxelIds**: { `fragmentId`: `string` ; `supervoxelIds`: `string`[]  }[]

#### Defined in

[src/neuroglancer/datasource/brainmaps/backend.ts:150](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/brainmaps/backend.ts#L150)

___

### isComputational

• **isComputational**: `boolean` = `false`

#### Inherited from

[MultiscaleManifestChunk](../classes/neuroglancer_mesh_backend.MultiscaleManifestChunk.md).[isComputational](../classes/neuroglancer_mesh_backend.MultiscaleManifestChunk.md#iscomputational)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:88](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L88)

___

### key

• **key**: ``null`` \| `string` = `null`

#### Inherited from

[MultiscaleManifestChunk](../classes/neuroglancer_mesh_backend.MultiscaleManifestChunk.md).[key](../classes/neuroglancer_mesh_backend.MultiscaleManifestChunk.md#key)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:56](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L56)

___

### manifest

• **manifest**: `undefined` \| [`MultiscaleMeshManifest`](neuroglancer_mesh_multiscale.MultiscaleMeshManifest.md)

#### Inherited from

[MultiscaleManifestChunk](../classes/neuroglancer_mesh_backend.MultiscaleManifestChunk.md).[manifest](../classes/neuroglancer_mesh_backend.MultiscaleManifestChunk.md#manifest)

#### Defined in

[src/neuroglancer/mesh/backend.ts:404](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/mesh/backend.ts#L404)

___

### markGeneration

• **markGeneration**: `number` = `-1`

#### Inherited from

[MultiscaleManifestChunk](../classes/neuroglancer_mesh_backend.MultiscaleManifestChunk.md).[markGeneration](../classes/neuroglancer_mesh_backend.MultiscaleManifestChunk.md#markgeneration)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:63](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L63)

___

### newPriority

• **newPriority**: `number` = `0`

Specifies updated priority within priority tier, not yet reflected in priority queue state.
Only meaningful if newPriorityTier in CHUNK_ORDERED_PRIORITY_TIERS.

#### Inherited from

[MultiscaleManifestChunk](../classes/neuroglancer_mesh_backend.MultiscaleManifestChunk.md).[newPriority](../classes/neuroglancer_mesh_backend.MultiscaleManifestChunk.md#newpriority)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L75)

___

### newPriorityTier

• **newPriorityTier**: [`ChunkPriorityTier`](../enums/neuroglancer_chunk_manager_base.ChunkPriorityTier.md) = `ChunkPriorityTier.RECENT`

Specifies updated priority tier, not yet reflected in priority queue state.

#### Inherited from

[MultiscaleManifestChunk](../classes/neuroglancer_mesh_backend.MultiscaleManifestChunk.md).[newPriorityTier](../classes/neuroglancer_mesh_backend.MultiscaleManifestChunk.md#newprioritytier)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:82](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L82)

___

### newlyRequestedToFrontend

• **newlyRequestedToFrontend**: `boolean` = `false`

#### Inherited from

[MultiscaleManifestChunk](../classes/neuroglancer_mesh_backend.MultiscaleManifestChunk.md).[newlyRequestedToFrontend](../classes/neuroglancer_mesh_backend.MultiscaleManifestChunk.md#newlyrequestedtofrontend)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:89](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L89)

___

### next0

• **next0**: ``null`` \| [`Chunk`](../classes/neuroglancer_chunk_manager_backend.Chunk.md) = `null`

#### Inherited from

[MultiscaleManifestChunk](../classes/neuroglancer_mesh_backend.MultiscaleManifestChunk.md).[next0](../classes/neuroglancer_mesh_backend.MultiscaleManifestChunk.md#next0)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L48)

___

### next1

• **next1**: ``null`` \| [`Chunk`](../classes/neuroglancer_chunk_manager_backend.Chunk.md) = `null`

#### Inherited from

[MultiscaleManifestChunk](../classes/neuroglancer_mesh_backend.MultiscaleManifestChunk.md).[next1](../classes/neuroglancer_mesh_backend.MultiscaleManifestChunk.md#next1)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:51](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L51)

___

### objectId

• **objectId**: [`Uint64`](../classes/neuroglancer_util_uint64.Uint64.md)

#### Inherited from

[MultiscaleManifestChunk](../classes/neuroglancer_mesh_backend.MultiscaleManifestChunk.md).[objectId](../classes/neuroglancer_mesh_backend.MultiscaleManifestChunk.md#objectid)

#### Defined in

[src/neuroglancer/mesh/backend.ts:403](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/mesh/backend.ts#L403)

___

### prev0

• **prev0**: ``null`` \| [`Chunk`](../classes/neuroglancer_chunk_manager_backend.Chunk.md) = `null`

#### Inherited from

[MultiscaleManifestChunk](../classes/neuroglancer_mesh_backend.MultiscaleManifestChunk.md).[prev0](../classes/neuroglancer_mesh_backend.MultiscaleManifestChunk.md#prev0)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L49)

___

### prev1

• **prev1**: ``null`` \| [`Chunk`](../classes/neuroglancer_chunk_manager_backend.Chunk.md) = `null`

#### Inherited from

[MultiscaleManifestChunk](../classes/neuroglancer_mesh_backend.MultiscaleManifestChunk.md).[prev1](../classes/neuroglancer_mesh_backend.MultiscaleManifestChunk.md#prev1)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L52)

___

### priority

• **priority**: `number` = `0`

Specifies existing priority within priority tier.  Only meaningful if priorityTier in
CHUNK_ORDERED_PRIORITY_TIERS.  Higher numbers mean higher priority.

#### Inherited from

[MultiscaleManifestChunk](../classes/neuroglancer_mesh_backend.MultiscaleManifestChunk.md).[priority](../classes/neuroglancer_mesh_backend.MultiscaleManifestChunk.md#priority)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:69](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L69)

___

### priorityTier

• **priorityTier**: [`ChunkPriorityTier`](../enums/neuroglancer_chunk_manager_base.ChunkPriorityTier.md) = `ChunkPriorityTier.RECENT`

#### Inherited from

[MultiscaleManifestChunk](../classes/neuroglancer_mesh_backend.MultiscaleManifestChunk.md).[priorityTier](../classes/neuroglancer_mesh_backend.MultiscaleManifestChunk.md#prioritytier)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:77](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L77)

___

### requestedToFrontend

• **requestedToFrontend**: `boolean` = `false`

#### Inherited from

[MultiscaleManifestChunk](../classes/neuroglancer_mesh_backend.MultiscaleManifestChunk.md).[requestedToFrontend](../classes/neuroglancer_mesh_backend.MultiscaleManifestChunk.md#requestedtofrontend)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:90](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L90)

___

### source

• **source**: ``null`` \| [`ChunkSource`](../classes/neuroglancer_chunk_manager_backend.ChunkSource.md) = `null`

#### Inherited from

[MultiscaleManifestChunk](../classes/neuroglancer_mesh_backend.MultiscaleManifestChunk.md).[source](../classes/neuroglancer_mesh_backend.MultiscaleManifestChunk.md#source)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L54)

## Accessors

### chunkManager

• `get` **chunkManager**(): [`ChunkManager`](../classes/neuroglancer_chunk_manager_backend.ChunkManager.md)

#### Returns

[`ChunkManager`](../classes/neuroglancer_chunk_manager_backend.ChunkManager.md)

#### Inherited from

MultiscaleManifestChunk.chunkManager

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:129](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L129)

___

### downloadSlots

• `get` **downloadSlots**(): `number`

#### Returns

`number`

#### Inherited from

MultiscaleManifestChunk.downloadSlots

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:197](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L197)

• `set` **downloadSlots**(`count`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

`void`

#### Inherited from

MultiscaleManifestChunk.downloadSlots

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:201](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L201)

___

### gpuMemoryBytes

• `get` **gpuMemoryBytes**(): `number`

#### Returns

`number`

#### Inherited from

MultiscaleManifestChunk.gpuMemoryBytes

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:193](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L193)

• `set` **gpuMemoryBytes**(`bytes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `number` |

#### Returns

`void`

#### Inherited from

MultiscaleManifestChunk.gpuMemoryBytes

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:184](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L184)

___

### queueManager

• `get` **queueManager**(): [`ChunkQueueManager`](../classes/neuroglancer_chunk_manager_backend.ChunkQueueManager.md)

#### Returns

[`ChunkQueueManager`](../classes/neuroglancer_chunk_manager_backend.ChunkQueueManager.md)

#### Inherited from

MultiscaleManifestChunk.queueManager

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:133](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L133)

___

### state

• `get` **state**(): [`ChunkState`](../enums/neuroglancer_chunk_manager_base.ChunkState.md)

#### Returns

[`ChunkState`](../enums/neuroglancer_chunk_manager_base.ChunkState.md)

#### Inherited from

MultiscaleManifestChunk.state

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:167](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L167)

• `set` **state**(`newState`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newState` | [`ChunkState`](../enums/neuroglancer_chunk_manager_base.ChunkState.md) |

#### Returns

`void`

#### Inherited from

MultiscaleManifestChunk.state

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:158](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L158)

___

### systemMemoryBytes

• `get` **systemMemoryBytes**(): `number`

#### Returns

`number`

#### Inherited from

MultiscaleManifestChunk.systemMemoryBytes

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:180](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L180)

• `set` **systemMemoryBytes**(`bytes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `number` |

#### Returns

`void`

#### Inherited from

MultiscaleManifestChunk.systemMemoryBytes

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L171)

## Methods

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[MultiscaleManifestChunk](../classes/neuroglancer_mesh_backend.MultiscaleManifestChunk.md).[dispose](../classes/neuroglancer_mesh_backend.MultiscaleManifestChunk.md#dispose)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:124](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L124)

___

### downloadFailed

▸ **downloadFailed**(`error`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `any` |

#### Returns

`void`

#### Inherited from

[MultiscaleManifestChunk](../classes/neuroglancer_mesh_backend.MultiscaleManifestChunk.md).[downloadFailed](../classes/neuroglancer_mesh_backend.MultiscaleManifestChunk.md#downloadfailed)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:137](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L137)

___

### downloadSucceeded

▸ **downloadSucceeded**(): `void`

#### Returns

`void`

#### Inherited from

[MultiscaleManifestChunk](../classes/neuroglancer_mesh_backend.MultiscaleManifestChunk.md).[downloadSucceeded](../classes/neuroglancer_mesh_backend.MultiscaleManifestChunk.md#downloadsucceeded)

#### Defined in

[src/neuroglancer/mesh/backend.ts:425](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/mesh/backend.ts#L425)

___

### freeSystemMemory

▸ **freeSystemMemory**(): `void`

#### Returns

`void`

#### Inherited from

[MultiscaleManifestChunk](../classes/neuroglancer_mesh_backend.MultiscaleManifestChunk.md).[freeSystemMemory](../classes/neuroglancer_mesh_backend.MultiscaleManifestChunk.md#freesystemmemory)

#### Defined in

[src/neuroglancer/mesh/backend.ts:416](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/mesh/backend.ts#L416)

___

### initialize

▸ **initialize**(`key`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`void`

#### Inherited from

[MultiscaleManifestChunk](../classes/neuroglancer_mesh_backend.MultiscaleManifestChunk.md).[initialize](../classes/neuroglancer_mesh_backend.MultiscaleManifestChunk.md#initialize)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:98](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L98)

___

### initializeManifestChunk

▸ **initializeManifestChunk**(`key`, `objectId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `objectId` | [`Uint64`](../classes/neuroglancer_util_uint64.Uint64.md) |

#### Returns

`void`

#### Inherited from

[MultiscaleManifestChunk](../classes/neuroglancer_mesh_backend.MultiscaleManifestChunk.md).[initializeManifestChunk](../classes/neuroglancer_mesh_backend.MultiscaleManifestChunk.md#initializemanifestchunk)

#### Defined in

[src/neuroglancer/mesh/backend.ts:411](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/mesh/backend.ts#L411)

___

### registerListener

▸ **registerListener**(`listener`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | [`ChunkStateListener`](neuroglancer_chunk_manager_backend.ChunkStateListener.md) |

#### Returns

`boolean`

#### Inherited from

[MultiscaleManifestChunk](../classes/neuroglancer_mesh_backend.MultiscaleManifestChunk.md).[registerListener](../classes/neuroglancer_mesh_backend.MultiscaleManifestChunk.md#registerlistener)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:211](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L211)

___

### serialize

▸ **serialize**(`msg`, `transfers`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `any` |
| `transfers` | `any`[] |

#### Returns

`void`

#### Inherited from

[MultiscaleManifestChunk](../classes/neuroglancer_mesh_backend.MultiscaleManifestChunk.md).[serialize](../classes/neuroglancer_mesh_backend.MultiscaleManifestChunk.md#serialize)

#### Defined in

[src/neuroglancer/mesh/backend.ts:420](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/mesh/backend.ts#L420)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Inherited from

[MultiscaleManifestChunk](../classes/neuroglancer_mesh_backend.MultiscaleManifestChunk.md).[toString](../classes/neuroglancer_mesh_backend.MultiscaleManifestChunk.md#tostring)

#### Defined in

[src/neuroglancer/mesh/backend.ts:434](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/mesh/backend.ts#L434)

___

### unregisterListener

▸ **unregisterListener**(`listener`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | [`ChunkStateListener`](neuroglancer_chunk_manager_backend.ChunkStateListener.md) |

#### Returns

`boolean`

#### Inherited from

[MultiscaleManifestChunk](../classes/neuroglancer_mesh_backend.MultiscaleManifestChunk.md).[unregisterListener](../classes/neuroglancer_mesh_backend.MultiscaleManifestChunk.md#unregisterlistener)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:218](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L218)

___

### updatePriorityProperties

▸ **updatePriorityProperties**(): `void`

Sets this.priority{Tier,} to this.newPriority{Tier,}, and resets this.newPriorityTier to
ChunkPriorityTier.RECENT.

This does not actually update any queues to reflect this change.

#### Returns

`void`

#### Inherited from

[MultiscaleManifestChunk](../classes/neuroglancer_mesh_backend.MultiscaleManifestChunk.md).[updatePriorityProperties](../classes/neuroglancer_mesh_backend.MultiscaleManifestChunk.md#updatepriorityproperties)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:116](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L116)
