[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/sliceview/volume/backend](../modules/neuroglancer_sliceview_volume_backend.md) / VolumeChunk

# Class: VolumeChunk

[neuroglancer/sliceview/volume/backend](../modules/neuroglancer_sliceview_volume_backend.md).VolumeChunk

## Hierarchy

- [`SliceViewChunk`](neuroglancer_sliceview_backend.SliceViewChunk.md)

  ↳ **`VolumeChunk`**

## Table of contents

### Constructors

- [constructor](neuroglancer_sliceview_volume_backend.VolumeChunk.md#constructor)

### Properties

- [backendOnly](neuroglancer_sliceview_volume_backend.VolumeChunk.md#backendonly)
- [child0](neuroglancer_sliceview_volume_backend.VolumeChunk.md#child0)
- [child1](neuroglancer_sliceview_volume_backend.VolumeChunk.md#child1)
- [chunkDataSize](neuroglancer_sliceview_volume_backend.VolumeChunk.md#chunkdatasize)
- [chunkGridPosition](neuroglancer_sliceview_volume_backend.VolumeChunk.md#chunkgridposition)
- [data](neuroglancer_sliceview_volume_backend.VolumeChunk.md#data)
- [downloadCancellationToken](neuroglancer_sliceview_volume_backend.VolumeChunk.md#downloadcancellationtoken)
- [error](neuroglancer_sliceview_volume_backend.VolumeChunk.md#error)
- [isComputational](neuroglancer_sliceview_volume_backend.VolumeChunk.md#iscomputational)
- [key](neuroglancer_sliceview_volume_backend.VolumeChunk.md#key)
- [markGeneration](neuroglancer_sliceview_volume_backend.VolumeChunk.md#markgeneration)
- [newPriority](neuroglancer_sliceview_volume_backend.VolumeChunk.md#newpriority)
- [newPriorityTier](neuroglancer_sliceview_volume_backend.VolumeChunk.md#newprioritytier)
- [newlyRequestedToFrontend](neuroglancer_sliceview_volume_backend.VolumeChunk.md#newlyrequestedtofrontend)
- [next0](neuroglancer_sliceview_volume_backend.VolumeChunk.md#next0)
- [next1](neuroglancer_sliceview_volume_backend.VolumeChunk.md#next1)
- [prev0](neuroglancer_sliceview_volume_backend.VolumeChunk.md#prev0)
- [prev1](neuroglancer_sliceview_volume_backend.VolumeChunk.md#prev1)
- [priority](neuroglancer_sliceview_volume_backend.VolumeChunk.md#priority)
- [priorityTier](neuroglancer_sliceview_volume_backend.VolumeChunk.md#prioritytier)
- [requestedToFrontend](neuroglancer_sliceview_volume_backend.VolumeChunk.md#requestedtofrontend)
- [source](neuroglancer_sliceview_volume_backend.VolumeChunk.md#source)

### Accessors

- [chunkManager](neuroglancer_sliceview_volume_backend.VolumeChunk.md#chunkmanager)
- [downloadSlots](neuroglancer_sliceview_volume_backend.VolumeChunk.md#downloadslots)
- [gpuMemoryBytes](neuroglancer_sliceview_volume_backend.VolumeChunk.md#gpumemorybytes)
- [queueManager](neuroglancer_sliceview_volume_backend.VolumeChunk.md#queuemanager)
- [state](neuroglancer_sliceview_volume_backend.VolumeChunk.md#state)
- [systemMemoryBytes](neuroglancer_sliceview_volume_backend.VolumeChunk.md#systemmemorybytes)

### Methods

- [dispose](neuroglancer_sliceview_volume_backend.VolumeChunk.md#dispose)
- [downloadFailed](neuroglancer_sliceview_volume_backend.VolumeChunk.md#downloadfailed)
- [downloadSucceeded](neuroglancer_sliceview_volume_backend.VolumeChunk.md#downloadsucceeded)
- [freeSystemMemory](neuroglancer_sliceview_volume_backend.VolumeChunk.md#freesystemmemory)
- [initialize](neuroglancer_sliceview_volume_backend.VolumeChunk.md#initialize)
- [initializeVolumeChunk](neuroglancer_sliceview_volume_backend.VolumeChunk.md#initializevolumechunk)
- [registerListener](neuroglancer_sliceview_volume_backend.VolumeChunk.md#registerlistener)
- [serialize](neuroglancer_sliceview_volume_backend.VolumeChunk.md#serialize)
- [toString](neuroglancer_sliceview_volume_backend.VolumeChunk.md#tostring)
- [unregisterListener](neuroglancer_sliceview_volume_backend.VolumeChunk.md#unregisterlistener)
- [updatePriorityProperties](neuroglancer_sliceview_volume_backend.VolumeChunk.md#updatepriorityproperties)
- [priorityGreater](neuroglancer_sliceview_volume_backend.VolumeChunk.md#prioritygreater)
- [priorityLess](neuroglancer_sliceview_volume_backend.VolumeChunk.md#priorityless)

## Constructors

### constructor

• **new VolumeChunk**()

#### Overrides

[SliceViewChunk](neuroglancer_sliceview_backend.SliceViewChunk.md).[constructor](neuroglancer_sliceview_backend.SliceViewChunk.md#constructor)

#### Defined in

[src/neuroglancer/sliceview/volume/backend.ts:27](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/volume/backend.ts#L27)

## Properties

### backendOnly

• **backendOnly**: `boolean` = `false`

#### Inherited from

[SliceViewChunk](neuroglancer_sliceview_backend.SliceViewChunk.md).[backendOnly](neuroglancer_sliceview_backend.SliceViewChunk.md#backendonly)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L87)

___

### child0

• **child0**: ``null`` \| [`Chunk`](neuroglancer_chunk_manager_backend.Chunk.md) = `null`

#### Inherited from

[SliceViewChunk](neuroglancer_sliceview_backend.SliceViewChunk.md).[child0](neuroglancer_sliceview_backend.SliceViewChunk.md#child0)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L47)

___

### child1

• **child1**: ``null`` \| [`Chunk`](neuroglancer_chunk_manager_backend.Chunk.md) = `null`

#### Inherited from

[SliceViewChunk](neuroglancer_sliceview_backend.SliceViewChunk.md).[child1](neuroglancer_sliceview_backend.SliceViewChunk.md#child1)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L50)

___

### chunkDataSize

• **chunkDataSize**: ``null`` \| `Uint32Array`

#### Defined in

[src/neuroglancer/sliceview/volume/backend.ts:26](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/volume/backend.ts#L26)

___

### chunkGridPosition

• **chunkGridPosition**: `Float32Array`

#### Inherited from

[SliceViewChunk](neuroglancer_sliceview_backend.SliceViewChunk.md).[chunkGridPosition](neuroglancer_sliceview_backend.SliceViewChunk.md#chunkgridposition)

#### Defined in

[src/neuroglancer/sliceview/backend.ts:269](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/backend.ts#L269)

___

### data

• **data**: ``null`` \| [`ArrayBufferView`](../interfaces/main_module._internal_.ArrayBufferView.md)

#### Defined in

[src/neuroglancer/sliceview/volume/backend.ts:25](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/volume/backend.ts#L25)

___

### downloadCancellationToken

• **downloadCancellationToken**: `undefined` \| [`CancellationTokenSource`](neuroglancer_util_cancellation.CancellationTokenSource.md) = `undefined`

Cancellation token used to cancel the pending download.  Set to undefined except when state !==
DOWNLOADING.  This should not be accessed by code outside this module.

#### Inherited from

[SliceViewChunk](neuroglancer_sliceview_backend.SliceViewChunk.md).[downloadCancellationToken](neuroglancer_sliceview_backend.SliceViewChunk.md#downloadcancellationtoken)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:96](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L96)

___

### error

• **error**: `any` = `null`

#### Inherited from

[SliceViewChunk](neuroglancer_sliceview_backend.SliceViewChunk.md).[error](neuroglancer_sliceview_backend.SliceViewChunk.md#error)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:60](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L60)

___

### isComputational

• **isComputational**: `boolean` = `false`

#### Inherited from

[SliceViewChunk](neuroglancer_sliceview_backend.SliceViewChunk.md).[isComputational](neuroglancer_sliceview_backend.SliceViewChunk.md#iscomputational)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:88](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L88)

___

### key

• **key**: ``null`` \| `string` = `null`

#### Inherited from

[SliceViewChunk](neuroglancer_sliceview_backend.SliceViewChunk.md).[key](neuroglancer_sliceview_backend.SliceViewChunk.md#key)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:56](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L56)

___

### markGeneration

• **markGeneration**: `number` = `-1`

#### Inherited from

[SliceViewChunk](neuroglancer_sliceview_backend.SliceViewChunk.md).[markGeneration](neuroglancer_sliceview_backend.SliceViewChunk.md#markgeneration)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:63](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L63)

___

### newPriority

• **newPriority**: `number` = `0`

Specifies updated priority within priority tier, not yet reflected in priority queue state.
Only meaningful if newPriorityTier in CHUNK_ORDERED_PRIORITY_TIERS.

#### Inherited from

[SliceViewChunk](neuroglancer_sliceview_backend.SliceViewChunk.md).[newPriority](neuroglancer_sliceview_backend.SliceViewChunk.md#newpriority)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L75)

___

### newPriorityTier

• **newPriorityTier**: [`ChunkPriorityTier`](../enums/neuroglancer_chunk_manager_base.ChunkPriorityTier.md) = `ChunkPriorityTier.RECENT`

Specifies updated priority tier, not yet reflected in priority queue state.

#### Inherited from

[SliceViewChunk](neuroglancer_sliceview_backend.SliceViewChunk.md).[newPriorityTier](neuroglancer_sliceview_backend.SliceViewChunk.md#newprioritytier)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:82](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L82)

___

### newlyRequestedToFrontend

• **newlyRequestedToFrontend**: `boolean` = `false`

#### Inherited from

[SliceViewChunk](neuroglancer_sliceview_backend.SliceViewChunk.md).[newlyRequestedToFrontend](neuroglancer_sliceview_backend.SliceViewChunk.md#newlyrequestedtofrontend)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:89](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L89)

___

### next0

• **next0**: ``null`` \| [`Chunk`](neuroglancer_chunk_manager_backend.Chunk.md) = `null`

#### Inherited from

[SliceViewChunk](neuroglancer_sliceview_backend.SliceViewChunk.md).[next0](neuroglancer_sliceview_backend.SliceViewChunk.md#next0)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L48)

___

### next1

• **next1**: ``null`` \| [`Chunk`](neuroglancer_chunk_manager_backend.Chunk.md) = `null`

#### Inherited from

[SliceViewChunk](neuroglancer_sliceview_backend.SliceViewChunk.md).[next1](neuroglancer_sliceview_backend.SliceViewChunk.md#next1)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:51](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L51)

___

### prev0

• **prev0**: ``null`` \| [`Chunk`](neuroglancer_chunk_manager_backend.Chunk.md) = `null`

#### Inherited from

[SliceViewChunk](neuroglancer_sliceview_backend.SliceViewChunk.md).[prev0](neuroglancer_sliceview_backend.SliceViewChunk.md#prev0)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L49)

___

### prev1

• **prev1**: ``null`` \| [`Chunk`](neuroglancer_chunk_manager_backend.Chunk.md) = `null`

#### Inherited from

[SliceViewChunk](neuroglancer_sliceview_backend.SliceViewChunk.md).[prev1](neuroglancer_sliceview_backend.SliceViewChunk.md#prev1)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L52)

___

### priority

• **priority**: `number` = `0`

Specifies existing priority within priority tier.  Only meaningful if priorityTier in
CHUNK_ORDERED_PRIORITY_TIERS.  Higher numbers mean higher priority.

#### Inherited from

[SliceViewChunk](neuroglancer_sliceview_backend.SliceViewChunk.md).[priority](neuroglancer_sliceview_backend.SliceViewChunk.md#priority)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:69](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L69)

___

### priorityTier

• **priorityTier**: [`ChunkPriorityTier`](../enums/neuroglancer_chunk_manager_base.ChunkPriorityTier.md) = `ChunkPriorityTier.RECENT`

#### Inherited from

[SliceViewChunk](neuroglancer_sliceview_backend.SliceViewChunk.md).[priorityTier](neuroglancer_sliceview_backend.SliceViewChunk.md#prioritytier)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:77](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L77)

___

### requestedToFrontend

• **requestedToFrontend**: `boolean` = `false`

#### Inherited from

[SliceViewChunk](neuroglancer_sliceview_backend.SliceViewChunk.md).[requestedToFrontend](neuroglancer_sliceview_backend.SliceViewChunk.md#requestedtofrontend)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:90](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L90)

___

### source

• **source**: ``null`` \| [`VolumeChunkSource`](neuroglancer_sliceview_volume_backend.VolumeChunkSource.md) = `null`

#### Overrides

[SliceViewChunk](neuroglancer_sliceview_backend.SliceViewChunk.md).[source](neuroglancer_sliceview_backend.SliceViewChunk.md#source)

#### Defined in

[src/neuroglancer/sliceview/volume/backend.ts:24](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/volume/backend.ts#L24)

## Accessors

### chunkManager

• `get` **chunkManager**(): [`ChunkManager`](neuroglancer_chunk_manager_backend.ChunkManager.md)

#### Returns

[`ChunkManager`](neuroglancer_chunk_manager_backend.ChunkManager.md)

#### Inherited from

SliceViewChunk.chunkManager

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:129](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L129)

___

### downloadSlots

• `get` **downloadSlots**(): `number`

#### Returns

`number`

#### Inherited from

SliceViewChunk.downloadSlots

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

SliceViewChunk.downloadSlots

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:201](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L201)

___

### gpuMemoryBytes

• `get` **gpuMemoryBytes**(): `number`

#### Returns

`number`

#### Inherited from

SliceViewChunk.gpuMemoryBytes

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

SliceViewChunk.gpuMemoryBytes

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:184](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L184)

___

### queueManager

• `get` **queueManager**(): [`ChunkQueueManager`](neuroglancer_chunk_manager_backend.ChunkQueueManager.md)

#### Returns

[`ChunkQueueManager`](neuroglancer_chunk_manager_backend.ChunkQueueManager.md)

#### Inherited from

SliceViewChunk.queueManager

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:133](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L133)

___

### state

• `get` **state**(): [`ChunkState`](../enums/neuroglancer_chunk_manager_base.ChunkState.md)

#### Returns

[`ChunkState`](../enums/neuroglancer_chunk_manager_base.ChunkState.md)

#### Inherited from

SliceViewChunk.state

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

SliceViewChunk.state

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:158](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L158)

___

### systemMemoryBytes

• `get` **systemMemoryBytes**(): `number`

#### Returns

`number`

#### Inherited from

SliceViewChunk.systemMemoryBytes

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

SliceViewChunk.systemMemoryBytes

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L171)

## Methods

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[SliceViewChunk](neuroglancer_sliceview_backend.SliceViewChunk.md).[dispose](neuroglancer_sliceview_backend.SliceViewChunk.md#dispose)

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

[SliceViewChunk](neuroglancer_sliceview_backend.SliceViewChunk.md).[downloadFailed](neuroglancer_sliceview_backend.SliceViewChunk.md#downloadfailed)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:137](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L137)

___

### downloadSucceeded

▸ **downloadSucceeded**(): `void`

#### Returns

`void`

#### Overrides

[SliceViewChunk](neuroglancer_sliceview_backend.SliceViewChunk.md).[downloadSucceeded](neuroglancer_sliceview_backend.SliceViewChunk.md#downloadsucceeded)

#### Defined in

[src/neuroglancer/sliceview/volume/backend.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/volume/backend.ts#L48)

___

### freeSystemMemory

▸ **freeSystemMemory**(): `void`

#### Returns

`void`

#### Overrides

[SliceViewChunk](neuroglancer_sliceview_backend.SliceViewChunk.md).[freeSystemMemory](neuroglancer_sliceview_backend.SliceViewChunk.md#freesystemmemory)

#### Defined in

[src/neuroglancer/sliceview/volume/backend.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/volume/backend.ts#L53)

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

[SliceViewChunk](neuroglancer_sliceview_backend.SliceViewChunk.md).[initialize](neuroglancer_sliceview_backend.SliceViewChunk.md#initialize)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:98](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L98)

___

### initializeVolumeChunk

▸ **initializeVolumeChunk**(`key`, `chunkGridPosition`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `chunkGridPosition` | [`vec3`](neuroglancer_util_geom.vec3.md) |

#### Returns

`void`

#### Overrides

[SliceViewChunk](neuroglancer_sliceview_backend.SliceViewChunk.md).[initializeVolumeChunk](neuroglancer_sliceview_backend.SliceViewChunk.md#initializevolumechunk)

#### Defined in

[src/neuroglancer/sliceview/volume/backend.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/volume/backend.ts#L31)

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

[SliceViewChunk](neuroglancer_sliceview_backend.SliceViewChunk.md).[registerListener](neuroglancer_sliceview_backend.SliceViewChunk.md#registerlistener)

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

#### Overrides

[SliceViewChunk](neuroglancer_sliceview_backend.SliceViewChunk.md).[serialize](neuroglancer_sliceview_backend.SliceViewChunk.md#serialize)

#### Defined in

[src/neuroglancer/sliceview/volume/backend.ts:37](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/volume/backend.ts#L37)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Inherited from

[SliceViewChunk](neuroglancer_sliceview_backend.SliceViewChunk.md).[toString](neuroglancer_sliceview_backend.SliceViewChunk.md#tostring)

#### Defined in

[src/neuroglancer/sliceview/backend.ts:292](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/backend.ts#L292)

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

[SliceViewChunk](neuroglancer_sliceview_backend.SliceViewChunk.md).[unregisterListener](neuroglancer_sliceview_backend.SliceViewChunk.md#unregisterlistener)

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

[SliceViewChunk](neuroglancer_sliceview_backend.SliceViewChunk.md).[updatePriorityProperties](neuroglancer_sliceview_backend.SliceViewChunk.md#updatepriorityproperties)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:116](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L116)

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

[SliceViewChunk](neuroglancer_sliceview_backend.SliceViewChunk.md).[priorityGreater](neuroglancer_sliceview_backend.SliceViewChunk.md#prioritygreater)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:229](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L229)

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

[SliceViewChunk](neuroglancer_sliceview_backend.SliceViewChunk.md).[priorityLess](neuroglancer_sliceview_backend.SliceViewChunk.md#priorityless)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:225](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L225)
