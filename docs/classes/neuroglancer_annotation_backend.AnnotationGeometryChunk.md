[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/annotation/backend](../modules/neuroglancer_annotation_backend.md) / AnnotationGeometryChunk

# Class: AnnotationGeometryChunk

[neuroglancer/annotation/backend](../modules/neuroglancer_annotation_backend.md).AnnotationGeometryChunk

## Hierarchy

- [`C`](neuroglancer_annotation_backend._internal_.C.md)<typeof [`SliceViewChunk`](neuroglancer_sliceview_backend.SliceViewChunk.md), `this`\> & [`SliceViewChunk`](neuroglancer_sliceview_backend.SliceViewChunk.md)<`this`\>

  ↳ **`AnnotationGeometryChunk`**

## Table of contents

### Constructors

- [constructor](neuroglancer_annotation_backend.AnnotationGeometryChunk.md#constructor)

### Properties

- [backendOnly](neuroglancer_annotation_backend.AnnotationGeometryChunk.md#backendonly)
- [child0](neuroglancer_annotation_backend.AnnotationGeometryChunk.md#child0)
- [child1](neuroglancer_annotation_backend.AnnotationGeometryChunk.md#child1)
- [chunkGridPosition](neuroglancer_annotation_backend.AnnotationGeometryChunk.md#chunkgridposition)
- [data](neuroglancer_annotation_backend.AnnotationGeometryChunk.md#data)
- [downloadCancellationToken](neuroglancer_annotation_backend.AnnotationGeometryChunk.md#downloadcancellationtoken)
- [error](neuroglancer_annotation_backend.AnnotationGeometryChunk.md#error)
- [isComputational](neuroglancer_annotation_backend.AnnotationGeometryChunk.md#iscomputational)
- [key](neuroglancer_annotation_backend.AnnotationGeometryChunk.md#key)
- [markGeneration](neuroglancer_annotation_backend.AnnotationGeometryChunk.md#markgeneration)
- [newPriority](neuroglancer_annotation_backend.AnnotationGeometryChunk.md#newpriority)
- [newPriorityTier](neuroglancer_annotation_backend.AnnotationGeometryChunk.md#newprioritytier)
- [newlyRequestedToFrontend](neuroglancer_annotation_backend.AnnotationGeometryChunk.md#newlyrequestedtofrontend)
- [next0](neuroglancer_annotation_backend.AnnotationGeometryChunk.md#next0)
- [next1](neuroglancer_annotation_backend.AnnotationGeometryChunk.md#next1)
- [prev0](neuroglancer_annotation_backend.AnnotationGeometryChunk.md#prev0)
- [prev1](neuroglancer_annotation_backend.AnnotationGeometryChunk.md#prev1)
- [priority](neuroglancer_annotation_backend.AnnotationGeometryChunk.md#priority)
- [priorityTier](neuroglancer_annotation_backend.AnnotationGeometryChunk.md#prioritytier)
- [requestedToFrontend](neuroglancer_annotation_backend.AnnotationGeometryChunk.md#requestedtofrontend)
- [source](neuroglancer_annotation_backend.AnnotationGeometryChunk.md#source)

### Accessors

- [chunkManager](neuroglancer_annotation_backend.AnnotationGeometryChunk.md#chunkmanager)
- [downloadSlots](neuroglancer_annotation_backend.AnnotationGeometryChunk.md#downloadslots)
- [gpuMemoryBytes](neuroglancer_annotation_backend.AnnotationGeometryChunk.md#gpumemorybytes)
- [queueManager](neuroglancer_annotation_backend.AnnotationGeometryChunk.md#queuemanager)
- [state](neuroglancer_annotation_backend.AnnotationGeometryChunk.md#state)
- [systemMemoryBytes](neuroglancer_annotation_backend.AnnotationGeometryChunk.md#systemmemorybytes)

### Methods

- [dispose](neuroglancer_annotation_backend.AnnotationGeometryChunk.md#dispose)
- [downloadFailed](neuroglancer_annotation_backend.AnnotationGeometryChunk.md#downloadfailed)
- [downloadSucceeded](neuroglancer_annotation_backend.AnnotationGeometryChunk.md#downloadsucceeded)
- [freeSystemMemory](neuroglancer_annotation_backend.AnnotationGeometryChunk.md#freesystemmemory)
- [initialize](neuroglancer_annotation_backend.AnnotationGeometryChunk.md#initialize)
- [initializeVolumeChunk](neuroglancer_annotation_backend.AnnotationGeometryChunk.md#initializevolumechunk)
- [registerListener](neuroglancer_annotation_backend.AnnotationGeometryChunk.md#registerlistener)
- [serialize](neuroglancer_annotation_backend.AnnotationGeometryChunk.md#serialize)
- [toString](neuroglancer_annotation_backend.AnnotationGeometryChunk.md#tostring)
- [unregisterListener](neuroglancer_annotation_backend.AnnotationGeometryChunk.md#unregisterlistener)
- [updatePriorityProperties](neuroglancer_annotation_backend.AnnotationGeometryChunk.md#updatepriorityproperties)
- [priorityGreater](neuroglancer_annotation_backend.AnnotationGeometryChunk.md#prioritygreater)
- [priorityLess](neuroglancer_annotation_backend.AnnotationGeometryChunk.md#priorityless)

## Constructors

### constructor

• **new AnnotationGeometryChunk**()

#### Inherited from

GeometryChunkMixin
(SliceViewChunk).constructor

#### Defined in

[src/neuroglancer/sliceview/backend.ts:272](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/backend.ts#L272)

## Properties

### backendOnly

• **backendOnly**: `boolean` = `false`

#### Inherited from

GeometryChunkMixin
(SliceViewChunk).backendOnly

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L87)

___

### child0

• **child0**: ``null`` \| [`Chunk`](neuroglancer_chunk_manager_backend.Chunk.md) = `null`

#### Inherited from

GeometryChunkMixin
(SliceViewChunk).child0

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L47)

___

### child1

• **child1**: ``null`` \| [`Chunk`](neuroglancer_chunk_manager_backend.Chunk.md) = `null`

#### Inherited from

GeometryChunkMixin
(SliceViewChunk).child1

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L50)

___

### chunkGridPosition

• **chunkGridPosition**: `Float32Array`

#### Inherited from

GeometryChunkMixin
(SliceViewChunk).chunkGridPosition

#### Defined in

[src/neuroglancer/sliceview/backend.ts:269](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/backend.ts#L269)

___

### data

• **data**: `undefined` \| [`AnnotationGeometryData`](neuroglancer_annotation_backend.AnnotationGeometryData.md)

#### Inherited from

GeometryChunkMixin
(SliceViewChunk).data

#### Defined in

[src/neuroglancer/annotation/backend.ts:74](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/backend.ts#L74)

___

### downloadCancellationToken

• **downloadCancellationToken**: `undefined` \| [`CancellationTokenSource`](neuroglancer_util_cancellation.CancellationTokenSource.md) = `undefined`

Cancellation token used to cancel the pending download.  Set to undefined except when state !==
DOWNLOADING.  This should not be accessed by code outside this module.

#### Inherited from

GeometryChunkMixin
(SliceViewChunk).downloadCancellationToken

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:96](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L96)

___

### error

• **error**: `any` = `null`

#### Inherited from

GeometryChunkMixin
(SliceViewChunk).error

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:60](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L60)

___

### isComputational

• **isComputational**: `boolean` = `false`

#### Inherited from

GeometryChunkMixin
(SliceViewChunk).isComputational

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:88](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L88)

___

### key

• **key**: ``null`` \| `string` = `null`

#### Inherited from

GeometryChunkMixin
(SliceViewChunk).key

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:56](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L56)

___

### markGeneration

• **markGeneration**: `number` = `-1`

#### Inherited from

GeometryChunkMixin
(SliceViewChunk).markGeneration

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:63](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L63)

___

### newPriority

• **newPriority**: `number` = `0`

Specifies updated priority within priority tier, not yet reflected in priority queue state.
Only meaningful if newPriorityTier in CHUNK_ORDERED_PRIORITY_TIERS.

#### Inherited from

GeometryChunkMixin
(SliceViewChunk).newPriority

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L75)

___

### newPriorityTier

• **newPriorityTier**: [`ChunkPriorityTier`](../enums/neuroglancer_chunk_manager_base.ChunkPriorityTier.md) = `ChunkPriorityTier.RECENT`

Specifies updated priority tier, not yet reflected in priority queue state.

#### Inherited from

GeometryChunkMixin
(SliceViewChunk).newPriorityTier

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:82](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L82)

___

### newlyRequestedToFrontend

• **newlyRequestedToFrontend**: `boolean` = `false`

#### Inherited from

GeometryChunkMixin
(SliceViewChunk).newlyRequestedToFrontend

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:89](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L89)

___

### next0

• **next0**: ``null`` \| [`Chunk`](neuroglancer_chunk_manager_backend.Chunk.md) = `null`

#### Inherited from

GeometryChunkMixin
(SliceViewChunk).next0

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L48)

___

### next1

• **next1**: ``null`` \| [`Chunk`](neuroglancer_chunk_manager_backend.Chunk.md) = `null`

#### Inherited from

GeometryChunkMixin
(SliceViewChunk).next1

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:51](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L51)

___

### prev0

• **prev0**: ``null`` \| [`Chunk`](neuroglancer_chunk_manager_backend.Chunk.md) = `null`

#### Inherited from

GeometryChunkMixin
(SliceViewChunk).prev0

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L49)

___

### prev1

• **prev1**: ``null`` \| [`Chunk`](neuroglancer_chunk_manager_backend.Chunk.md) = `null`

#### Inherited from

GeometryChunkMixin
(SliceViewChunk).prev1

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L52)

___

### priority

• **priority**: `number` = `0`

Specifies existing priority within priority tier.  Only meaningful if priorityTier in
CHUNK_ORDERED_PRIORITY_TIERS.  Higher numbers mean higher priority.

#### Inherited from

GeometryChunkMixin
(SliceViewChunk).priority

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:69](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L69)

___

### priorityTier

• **priorityTier**: [`ChunkPriorityTier`](../enums/neuroglancer_chunk_manager_base.ChunkPriorityTier.md) = `ChunkPriorityTier.RECENT`

#### Inherited from

GeometryChunkMixin
(SliceViewChunk).priorityTier

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:77](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L77)

___

### requestedToFrontend

• **requestedToFrontend**: `boolean` = `false`

#### Inherited from

GeometryChunkMixin
(SliceViewChunk).requestedToFrontend

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:90](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L90)

___

### source

• **source**: [`AnnotationGeometryChunkSourceBackend`](neuroglancer_annotation_backend.AnnotationGeometryChunkSourceBackend.md)

#### Overrides

GeometryChunkMixin
(SliceViewChunk).source

#### Defined in

[src/neuroglancer/annotation/backend.ts:99](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/backend.ts#L99)

## Accessors

### chunkManager

• `get` **chunkManager**(): [`ChunkManager`](neuroglancer_chunk_manager_backend.ChunkManager.md)

#### Returns

[`ChunkManager`](neuroglancer_chunk_manager_backend.ChunkManager.md)

#### Inherited from

GeometryChunkMixin
(SliceViewChunk).chunkManager

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:129](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L129)

___

### downloadSlots

• `get` **downloadSlots**(): `number`

#### Returns

`number`

#### Inherited from

GeometryChunkMixin
(SliceViewChunk).downloadSlots

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

GeometryChunkMixin
(SliceViewChunk).downloadSlots

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:201](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L201)

___

### gpuMemoryBytes

• `get` **gpuMemoryBytes**(): `number`

#### Returns

`number`

#### Inherited from

GeometryChunkMixin
(SliceViewChunk).gpuMemoryBytes

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

GeometryChunkMixin
(SliceViewChunk).gpuMemoryBytes

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:184](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L184)

___

### queueManager

• `get` **queueManager**(): [`ChunkQueueManager`](neuroglancer_chunk_manager_backend.ChunkQueueManager.md)

#### Returns

[`ChunkQueueManager`](neuroglancer_chunk_manager_backend.ChunkQueueManager.md)

#### Inherited from

GeometryChunkMixin
(SliceViewChunk).queueManager

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:133](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L133)

___

### state

• `get` **state**(): [`ChunkState`](../enums/neuroglancer_chunk_manager_base.ChunkState.md)

#### Returns

[`ChunkState`](../enums/neuroglancer_chunk_manager_base.ChunkState.md)

#### Inherited from

GeometryChunkMixin
(SliceViewChunk).state

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

GeometryChunkMixin
(SliceViewChunk).state

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:158](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L158)

___

### systemMemoryBytes

• `get` **systemMemoryBytes**(): `number`

#### Returns

`number`

#### Inherited from

GeometryChunkMixin
(SliceViewChunk).systemMemoryBytes

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

GeometryChunkMixin
(SliceViewChunk).systemMemoryBytes

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L171)

## Methods

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

GeometryChunkMixin
(SliceViewChunk).dispose

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

GeometryChunkMixin
(SliceViewChunk).downloadFailed

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:137](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L137)

___

### downloadSucceeded

▸ **downloadSucceeded**(): `void`

#### Returns

`void`

#### Inherited from

GeometryChunkMixin
(SliceViewChunk).downloadSucceeded

#### Defined in

[src/neuroglancer/annotation/backend.ts:84](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/backend.ts#L84)

___

### freeSystemMemory

▸ **freeSystemMemory**(): `void`

#### Returns

`void`

#### Inherited from

GeometryChunkMixin
(SliceViewChunk).freeSystemMemory

#### Defined in

[src/neuroglancer/annotation/backend.ts:90](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/backend.ts#L90)

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

GeometryChunkMixin
(SliceViewChunk).initialize

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:98](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L98)

___

### initializeVolumeChunk

▸ **initializeVolumeChunk**(`key`, `chunkGridPosition`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `chunkGridPosition` | `Float32Array` |

#### Returns

`void`

#### Inherited from

GeometryChunkMixin
(SliceViewChunk).initializeVolumeChunk

#### Defined in

[src/neuroglancer/sliceview/backend.ts:276](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/backend.ts#L276)

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

GeometryChunkMixin
(SliceViewChunk).registerListener

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

GeometryChunkMixin
(SliceViewChunk).serialize

#### Defined in

[src/neuroglancer/annotation/backend.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/backend.ts#L75)

___

### toString

▸ **toString**(): ``null`` \| `string`

#### Returns

``null`` \| `string`

#### Inherited from

GeometryChunkMixin
(SliceViewChunk).toString

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:154](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L154)

▸ **toString**(): `string`

#### Returns

`string`

#### Inherited from

GeometryChunkMixin
(SliceViewChunk).toString

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

GeometryChunkMixin
(SliceViewChunk).unregisterListener

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

GeometryChunkMixin
(SliceViewChunk).updatePriorityProperties

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

GeometryChunkMixin
(SliceViewChunk).priorityGreater

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

GeometryChunkMixin
(SliceViewChunk).priorityLess

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:225](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L225)
