[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/mesh/backend](../modules/neuroglancer_mesh_backend.md) / FragmentChunk

# Class: FragmentChunk

[neuroglancer/mesh/backend](../modules/neuroglancer_mesh_backend.md).FragmentChunk

Chunk that contains the mesh for a single fragment of a single object.

## Hierarchy

- [`Chunk`](neuroglancer_chunk_manager_backend.Chunk.md)

  ↳ **`FragmentChunk`**

## Table of contents

### Constructors

- [constructor](neuroglancer_mesh_backend.FragmentChunk.md#constructor)

### Properties

- [backendOnly](neuroglancer_mesh_backend.FragmentChunk.md#backendonly)
- [child0](neuroglancer_mesh_backend.FragmentChunk.md#child0)
- [child1](neuroglancer_mesh_backend.FragmentChunk.md#child1)
- [downloadCancellationToken](neuroglancer_mesh_backend.FragmentChunk.md#downloadcancellationtoken)
- [error](neuroglancer_mesh_backend.FragmentChunk.md#error)
- [fragmentId](neuroglancer_mesh_backend.FragmentChunk.md#fragmentid)
- [isComputational](neuroglancer_mesh_backend.FragmentChunk.md#iscomputational)
- [key](neuroglancer_mesh_backend.FragmentChunk.md#key)
- [manifestChunk](neuroglancer_mesh_backend.FragmentChunk.md#manifestchunk)
- [markGeneration](neuroglancer_mesh_backend.FragmentChunk.md#markgeneration)
- [meshData](neuroglancer_mesh_backend.FragmentChunk.md#meshdata)
- [newPriority](neuroglancer_mesh_backend.FragmentChunk.md#newpriority)
- [newPriorityTier](neuroglancer_mesh_backend.FragmentChunk.md#newprioritytier)
- [newlyRequestedToFrontend](neuroglancer_mesh_backend.FragmentChunk.md#newlyrequestedtofrontend)
- [next0](neuroglancer_mesh_backend.FragmentChunk.md#next0)
- [next1](neuroglancer_mesh_backend.FragmentChunk.md#next1)
- [prev0](neuroglancer_mesh_backend.FragmentChunk.md#prev0)
- [prev1](neuroglancer_mesh_backend.FragmentChunk.md#prev1)
- [priority](neuroglancer_mesh_backend.FragmentChunk.md#priority)
- [priorityTier](neuroglancer_mesh_backend.FragmentChunk.md#prioritytier)
- [requestedToFrontend](neuroglancer_mesh_backend.FragmentChunk.md#requestedtofrontend)
- [source](neuroglancer_mesh_backend.FragmentChunk.md#source)

### Accessors

- [chunkManager](neuroglancer_mesh_backend.FragmentChunk.md#chunkmanager)
- [downloadSlots](neuroglancer_mesh_backend.FragmentChunk.md#downloadslots)
- [gpuMemoryBytes](neuroglancer_mesh_backend.FragmentChunk.md#gpumemorybytes)
- [queueManager](neuroglancer_mesh_backend.FragmentChunk.md#queuemanager)
- [state](neuroglancer_mesh_backend.FragmentChunk.md#state)
- [systemMemoryBytes](neuroglancer_mesh_backend.FragmentChunk.md#systemmemorybytes)

### Methods

- [dispose](neuroglancer_mesh_backend.FragmentChunk.md#dispose)
- [downloadFailed](neuroglancer_mesh_backend.FragmentChunk.md#downloadfailed)
- [downloadSucceeded](neuroglancer_mesh_backend.FragmentChunk.md#downloadsucceeded)
- [freeSystemMemory](neuroglancer_mesh_backend.FragmentChunk.md#freesystemmemory)
- [initialize](neuroglancer_mesh_backend.FragmentChunk.md#initialize)
- [initializeFragmentChunk](neuroglancer_mesh_backend.FragmentChunk.md#initializefragmentchunk)
- [registerListener](neuroglancer_mesh_backend.FragmentChunk.md#registerlistener)
- [serialize](neuroglancer_mesh_backend.FragmentChunk.md#serialize)
- [toString](neuroglancer_mesh_backend.FragmentChunk.md#tostring)
- [unregisterListener](neuroglancer_mesh_backend.FragmentChunk.md#unregisterlistener)
- [updatePriorityProperties](neuroglancer_mesh_backend.FragmentChunk.md#updatepriorityproperties)
- [priorityGreater](neuroglancer_mesh_backend.FragmentChunk.md#prioritygreater)
- [priorityLess](neuroglancer_mesh_backend.FragmentChunk.md#priorityless)

## Constructors

### constructor

• **new FragmentChunk**()

#### Overrides

[Chunk](neuroglancer_chunk_manager_backend.Chunk.md).[constructor](neuroglancer_chunk_manager_backend.Chunk.md#constructor)

#### Defined in

[src/neuroglancer/mesh/backend.ts:121](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/mesh/backend.ts#L121)

## Properties

### backendOnly

• **backendOnly**: `boolean` = `false`

#### Inherited from

[Chunk](neuroglancer_chunk_manager_backend.Chunk.md).[backendOnly](neuroglancer_chunk_manager_backend.Chunk.md#backendonly)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L87)

___

### child0

• **child0**: ``null`` \| [`Chunk`](neuroglancer_chunk_manager_backend.Chunk.md) = `null`

#### Inherited from

[Chunk](neuroglancer_chunk_manager_backend.Chunk.md).[child0](neuroglancer_chunk_manager_backend.Chunk.md#child0)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L47)

___

### child1

• **child1**: ``null`` \| [`Chunk`](neuroglancer_chunk_manager_backend.Chunk.md) = `null`

#### Inherited from

[Chunk](neuroglancer_chunk_manager_backend.Chunk.md).[child1](neuroglancer_chunk_manager_backend.Chunk.md#child1)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L50)

___

### downloadCancellationToken

• **downloadCancellationToken**: `undefined` \| [`CancellationTokenSource`](neuroglancer_util_cancellation.CancellationTokenSource.md) = `undefined`

Cancellation token used to cancel the pending download.  Set to undefined except when state !==
DOWNLOADING.  This should not be accessed by code outside this module.

#### Inherited from

[Chunk](neuroglancer_chunk_manager_backend.Chunk.md).[downloadCancellationToken](neuroglancer_chunk_manager_backend.Chunk.md#downloadcancellationtoken)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:96](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L96)

___

### error

• **error**: `any` = `null`

#### Inherited from

[Chunk](neuroglancer_chunk_manager_backend.Chunk.md).[error](neuroglancer_chunk_manager_backend.Chunk.md#error)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:60](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L60)

___

### fragmentId

• **fragmentId**: ``null`` \| `string` = `null`

#### Defined in

[src/neuroglancer/mesh/backend.ts:119](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/mesh/backend.ts#L119)

___

### isComputational

• **isComputational**: `boolean` = `false`

#### Inherited from

[Chunk](neuroglancer_chunk_manager_backend.Chunk.md).[isComputational](neuroglancer_chunk_manager_backend.Chunk.md#iscomputational)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:88](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L88)

___

### key

• **key**: ``null`` \| `string` = `null`

#### Inherited from

[Chunk](neuroglancer_chunk_manager_backend.Chunk.md).[key](neuroglancer_chunk_manager_backend.Chunk.md#key)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:56](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L56)

___

### manifestChunk

• **manifestChunk**: ``null`` \| [`ManifestChunk`](neuroglancer_mesh_backend.ManifestChunk.md) = `null`

#### Defined in

[src/neuroglancer/mesh/backend.ts:118](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/mesh/backend.ts#L118)

___

### markGeneration

• **markGeneration**: `number` = `-1`

#### Inherited from

[Chunk](neuroglancer_chunk_manager_backend.Chunk.md).[markGeneration](neuroglancer_chunk_manager_backend.Chunk.md#markgeneration)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:63](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L63)

___

### meshData

• **meshData**: ``null`` \| [`EncodedMeshData`](../interfaces/neuroglancer_mesh_base.EncodedMeshData.md) = `null`

#### Defined in

[src/neuroglancer/mesh/backend.ts:120](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/mesh/backend.ts#L120)

___

### newPriority

• **newPriority**: `number` = `0`

Specifies updated priority within priority tier, not yet reflected in priority queue state.
Only meaningful if newPriorityTier in CHUNK_ORDERED_PRIORITY_TIERS.

#### Inherited from

[Chunk](neuroglancer_chunk_manager_backend.Chunk.md).[newPriority](neuroglancer_chunk_manager_backend.Chunk.md#newpriority)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L75)

___

### newPriorityTier

• **newPriorityTier**: [`ChunkPriorityTier`](../enums/neuroglancer_chunk_manager_base.ChunkPriorityTier.md) = `ChunkPriorityTier.RECENT`

Specifies updated priority tier, not yet reflected in priority queue state.

#### Inherited from

[Chunk](neuroglancer_chunk_manager_backend.Chunk.md).[newPriorityTier](neuroglancer_chunk_manager_backend.Chunk.md#newprioritytier)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:82](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L82)

___

### newlyRequestedToFrontend

• **newlyRequestedToFrontend**: `boolean` = `false`

#### Inherited from

[Chunk](neuroglancer_chunk_manager_backend.Chunk.md).[newlyRequestedToFrontend](neuroglancer_chunk_manager_backend.Chunk.md#newlyrequestedtofrontend)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:89](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L89)

___

### next0

• **next0**: ``null`` \| [`Chunk`](neuroglancer_chunk_manager_backend.Chunk.md) = `null`

#### Inherited from

[Chunk](neuroglancer_chunk_manager_backend.Chunk.md).[next0](neuroglancer_chunk_manager_backend.Chunk.md#next0)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L48)

___

### next1

• **next1**: ``null`` \| [`Chunk`](neuroglancer_chunk_manager_backend.Chunk.md) = `null`

#### Inherited from

[Chunk](neuroglancer_chunk_manager_backend.Chunk.md).[next1](neuroglancer_chunk_manager_backend.Chunk.md#next1)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:51](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L51)

___

### prev0

• **prev0**: ``null`` \| [`Chunk`](neuroglancer_chunk_manager_backend.Chunk.md) = `null`

#### Inherited from

[Chunk](neuroglancer_chunk_manager_backend.Chunk.md).[prev0](neuroglancer_chunk_manager_backend.Chunk.md#prev0)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L49)

___

### prev1

• **prev1**: ``null`` \| [`Chunk`](neuroglancer_chunk_manager_backend.Chunk.md) = `null`

#### Inherited from

[Chunk](neuroglancer_chunk_manager_backend.Chunk.md).[prev1](neuroglancer_chunk_manager_backend.Chunk.md#prev1)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L52)

___

### priority

• **priority**: `number` = `0`

Specifies existing priority within priority tier.  Only meaningful if priorityTier in
CHUNK_ORDERED_PRIORITY_TIERS.  Higher numbers mean higher priority.

#### Inherited from

[Chunk](neuroglancer_chunk_manager_backend.Chunk.md).[priority](neuroglancer_chunk_manager_backend.Chunk.md#priority)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:69](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L69)

___

### priorityTier

• **priorityTier**: [`ChunkPriorityTier`](../enums/neuroglancer_chunk_manager_base.ChunkPriorityTier.md) = `ChunkPriorityTier.RECENT`

#### Inherited from

[Chunk](neuroglancer_chunk_manager_backend.Chunk.md).[priorityTier](neuroglancer_chunk_manager_backend.Chunk.md#prioritytier)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:77](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L77)

___

### requestedToFrontend

• **requestedToFrontend**: `boolean` = `false`

#### Inherited from

[Chunk](neuroglancer_chunk_manager_backend.Chunk.md).[requestedToFrontend](neuroglancer_chunk_manager_backend.Chunk.md#requestedtofrontend)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:90](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L90)

___

### source

• **source**: ``null`` \| [`ChunkSource`](neuroglancer_chunk_manager_backend.ChunkSource.md) = `null`

#### Inherited from

[Chunk](neuroglancer_chunk_manager_backend.Chunk.md).[source](neuroglancer_chunk_manager_backend.Chunk.md#source)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L54)

## Accessors

### chunkManager

• `get` **chunkManager**(): [`ChunkManager`](neuroglancer_chunk_manager_backend.ChunkManager.md)

#### Returns

[`ChunkManager`](neuroglancer_chunk_manager_backend.ChunkManager.md)

#### Inherited from

Chunk.chunkManager

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:129](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L129)

___

### downloadSlots

• `get` **downloadSlots**(): `number`

#### Returns

`number`

#### Inherited from

Chunk.downloadSlots

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:197](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L197)

• `set` **downloadSlots**(`count`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

`void`

#### Inherited from

Chunk.downloadSlots

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:201](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L201)

___

### gpuMemoryBytes

• `get` **gpuMemoryBytes**(): `number`

#### Returns

`number`

#### Inherited from

Chunk.gpuMemoryBytes

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:193](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L193)

• `set` **gpuMemoryBytes**(`bytes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `number` |

#### Returns

`void`

#### Inherited from

Chunk.gpuMemoryBytes

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:184](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L184)

___

### queueManager

• `get` **queueManager**(): [`ChunkQueueManager`](neuroglancer_chunk_manager_backend.ChunkQueueManager.md)

#### Returns

[`ChunkQueueManager`](neuroglancer_chunk_manager_backend.ChunkQueueManager.md)

#### Inherited from

Chunk.queueManager

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:133](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L133)

___

### state

• `get` **state**(): [`ChunkState`](../enums/neuroglancer_chunk_manager_base.ChunkState.md)

#### Returns

[`ChunkState`](../enums/neuroglancer_chunk_manager_base.ChunkState.md)

#### Inherited from

Chunk.state

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:167](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L167)

• `set` **state**(`newState`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newState` | [`ChunkState`](../enums/neuroglancer_chunk_manager_base.ChunkState.md) |

#### Returns

`void`

#### Inherited from

Chunk.state

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:158](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L158)

___

### systemMemoryBytes

• `get` **systemMemoryBytes**(): `number`

#### Returns

`number`

#### Inherited from

Chunk.systemMemoryBytes

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:180](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L180)

• `set` **systemMemoryBytes**(`bytes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `number` |

#### Returns

`void`

#### Inherited from

Chunk.systemMemoryBytes

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L171)

## Methods

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[Chunk](neuroglancer_chunk_manager_backend.Chunk.md).[dispose](neuroglancer_chunk_manager_backend.Chunk.md#dispose)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:124](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L124)

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

[Chunk](neuroglancer_chunk_manager_backend.Chunk.md).[downloadFailed](neuroglancer_chunk_manager_backend.Chunk.md#downloadfailed)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:137](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L137)

___

### downloadSucceeded

▸ **downloadSucceeded**(): `void`

#### Returns

`void`

#### Overrides

[Chunk](neuroglancer_chunk_manager_backend.Chunk.md).[downloadSucceeded](neuroglancer_chunk_manager_backend.Chunk.md#downloadsucceeded)

#### Defined in

[src/neuroglancer/mesh/backend.ts:139](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/mesh/backend.ts#L139)

___

### freeSystemMemory

▸ **freeSystemMemory**(): `void`

#### Returns

`void`

#### Overrides

[Chunk](neuroglancer_chunk_manager_backend.Chunk.md).[freeSystemMemory](neuroglancer_chunk_manager_backend.Chunk.md#freesystemmemory)

#### Defined in

[src/neuroglancer/mesh/backend.ts:129](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/mesh/backend.ts#L129)

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

[Chunk](neuroglancer_chunk_manager_backend.Chunk.md).[initialize](neuroglancer_chunk_manager_backend.Chunk.md#initialize)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:98](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L98)

___

### initializeFragmentChunk

▸ **initializeFragmentChunk**(`key`, `manifestChunk`, `fragmentId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `manifestChunk` | [`ManifestChunk`](neuroglancer_mesh_backend.ManifestChunk.md) |
| `fragmentId` | `string` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/mesh/backend.ts:124](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/mesh/backend.ts#L124)

___

### registerListener

▸ **registerListener**(`listener`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | [`ChunkStateListener`](../interfaces/neuroglancer_chunk_manager_backend.ChunkStateListener.md) |

#### Returns

`boolean`

#### Inherited from

[Chunk](neuroglancer_chunk_manager_backend.Chunk.md).[registerListener](neuroglancer_chunk_manager_backend.Chunk.md#registerlistener)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:211](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L211)

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

#### Overrides

[Chunk](neuroglancer_chunk_manager_backend.Chunk.md).[serialize](neuroglancer_chunk_manager_backend.Chunk.md#serialize)

#### Defined in

[src/neuroglancer/mesh/backend.ts:134](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/mesh/backend.ts#L134)

___

### toString

▸ **toString**(): ``null`` \| `string`

#### Returns

``null`` \| `string`

#### Inherited from

[Chunk](neuroglancer_chunk_manager_backend.Chunk.md).[toString](neuroglancer_chunk_manager_backend.Chunk.md#tostring)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:154](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L154)

___

### unregisterListener

▸ **unregisterListener**(`listener`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | [`ChunkStateListener`](../interfaces/neuroglancer_chunk_manager_backend.ChunkStateListener.md) |

#### Returns

`boolean`

#### Inherited from

[Chunk](neuroglancer_chunk_manager_backend.Chunk.md).[unregisterListener](neuroglancer_chunk_manager_backend.Chunk.md#unregisterlistener)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:218](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L218)

___

### updatePriorityProperties

▸ **updatePriorityProperties**(): `void`

Sets this.priority{Tier,} to this.newPriority{Tier,}, and resets this.newPriorityTier to
ChunkPriorityTier.RECENT.

This does not actually update any queues to reflect this change.

#### Returns

`void`

#### Inherited from

[Chunk](neuroglancer_chunk_manager_backend.Chunk.md).[updatePriorityProperties](neuroglancer_chunk_manager_backend.Chunk.md#updatepriorityproperties)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:116](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L116)

___

### priorityGreater

▸ `Static` **priorityGreater**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Chunk`](neuroglancer_chunk_manager_backend.Chunk.md) |
| `b` | [`Chunk`](neuroglancer_chunk_manager_backend.Chunk.md) |

#### Returns

`boolean`

#### Inherited from

[Chunk](neuroglancer_chunk_manager_backend.Chunk.md).[priorityGreater](neuroglancer_chunk_manager_backend.Chunk.md#prioritygreater)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:229](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L229)

___

### priorityLess

▸ `Static` **priorityLess**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Chunk`](neuroglancer_chunk_manager_backend.Chunk.md) |
| `b` | [`Chunk`](neuroglancer_chunk_manager_backend.Chunk.md) |

#### Returns

`boolean`

#### Inherited from

[Chunk](neuroglancer_chunk_manager_backend.Chunk.md).[priorityLess](neuroglancer_chunk_manager_backend.Chunk.md#priorityless)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:225](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L225)
