[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/backend](../modules/annotation_backend.md) / AnnotationSubsetGeometryChunk

# Class: AnnotationSubsetGeometryChunk

[annotation/backend](../modules/annotation_backend.md).AnnotationSubsetGeometryChunk

## Hierarchy

- [`C`](annotation_backend._internal_.C.md)<typeof [`Chunk`](chunk_manager_backend.Chunk.md), `this`\> & [`Chunk`](chunk_manager_backend.Chunk.md)<`this`\>

  ↳ **`AnnotationSubsetGeometryChunk`**

## Table of contents

### Constructors

- [constructor](annotation_backend.AnnotationSubsetGeometryChunk.md#constructor)

### Properties

- [backendOnly](annotation_backend.AnnotationSubsetGeometryChunk.md#backendonly)
- [child0](annotation_backend.AnnotationSubsetGeometryChunk.md#child0)
- [child1](annotation_backend.AnnotationSubsetGeometryChunk.md#child1)
- [data](annotation_backend.AnnotationSubsetGeometryChunk.md#data)
- [downloadCancellationToken](annotation_backend.AnnotationSubsetGeometryChunk.md#downloadcancellationtoken)
- [error](annotation_backend.AnnotationSubsetGeometryChunk.md#error)
- [isComputational](annotation_backend.AnnotationSubsetGeometryChunk.md#iscomputational)
- [key](annotation_backend.AnnotationSubsetGeometryChunk.md#key)
- [markGeneration](annotation_backend.AnnotationSubsetGeometryChunk.md#markgeneration)
- [newPriority](annotation_backend.AnnotationSubsetGeometryChunk.md#newpriority)
- [newPriorityTier](annotation_backend.AnnotationSubsetGeometryChunk.md#newprioritytier)
- [newlyRequestedToFrontend](annotation_backend.AnnotationSubsetGeometryChunk.md#newlyrequestedtofrontend)
- [next0](annotation_backend.AnnotationSubsetGeometryChunk.md#next0)
- [next1](annotation_backend.AnnotationSubsetGeometryChunk.md#next1)
- [objectId](annotation_backend.AnnotationSubsetGeometryChunk.md#objectid)
- [prev0](annotation_backend.AnnotationSubsetGeometryChunk.md#prev0)
- [prev1](annotation_backend.AnnotationSubsetGeometryChunk.md#prev1)
- [priority](annotation_backend.AnnotationSubsetGeometryChunk.md#priority)
- [priorityTier](annotation_backend.AnnotationSubsetGeometryChunk.md#prioritytier)
- [requestedToFrontend](annotation_backend.AnnotationSubsetGeometryChunk.md#requestedtofrontend)
- [source](annotation_backend.AnnotationSubsetGeometryChunk.md#source)

### Accessors

- [chunkManager](annotation_backend.AnnotationSubsetGeometryChunk.md#chunkmanager)
- [downloadSlots](annotation_backend.AnnotationSubsetGeometryChunk.md#downloadslots)
- [gpuMemoryBytes](annotation_backend.AnnotationSubsetGeometryChunk.md#gpumemorybytes)
- [queueManager](annotation_backend.AnnotationSubsetGeometryChunk.md#queuemanager)
- [state](annotation_backend.AnnotationSubsetGeometryChunk.md#state)
- [systemMemoryBytes](annotation_backend.AnnotationSubsetGeometryChunk.md#systemmemorybytes)

### Methods

- [dispose](annotation_backend.AnnotationSubsetGeometryChunk.md#dispose)
- [downloadFailed](annotation_backend.AnnotationSubsetGeometryChunk.md#downloadfailed)
- [downloadSucceeded](annotation_backend.AnnotationSubsetGeometryChunk.md#downloadsucceeded)
- [freeSystemMemory](annotation_backend.AnnotationSubsetGeometryChunk.md#freesystemmemory)
- [initialize](annotation_backend.AnnotationSubsetGeometryChunk.md#initialize)
- [registerListener](annotation_backend.AnnotationSubsetGeometryChunk.md#registerlistener)
- [serialize](annotation_backend.AnnotationSubsetGeometryChunk.md#serialize)
- [toString](annotation_backend.AnnotationSubsetGeometryChunk.md#tostring)
- [unregisterListener](annotation_backend.AnnotationSubsetGeometryChunk.md#unregisterlistener)
- [updatePriorityProperties](annotation_backend.AnnotationSubsetGeometryChunk.md#updatepriorityproperties)
- [priorityGreater](annotation_backend.AnnotationSubsetGeometryChunk.md#prioritygreater)
- [priorityLess](annotation_backend.AnnotationSubsetGeometryChunk.md#priorityless)

## Constructors

### constructor

• **new AnnotationSubsetGeometryChunk**()

#### Inherited from

GeometryChunkMixin
(Chunk).constructor

## Properties

### backendOnly

• **backendOnly**: `boolean` = `false`

#### Inherited from

GeometryChunkMixin
(Chunk).backendOnly

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L87)

___

### child0

• **child0**: ``null`` \| [`Chunk`](chunk_manager_backend.Chunk.md) = `null`

#### Inherited from

GeometryChunkMixin
(Chunk).child0

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L47)

___

### child1

• **child1**: ``null`` \| [`Chunk`](chunk_manager_backend.Chunk.md) = `null`

#### Inherited from

GeometryChunkMixin
(Chunk).child1

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L50)

___

### data

• **data**: `undefined` \| [`AnnotationGeometryData`](annotation_backend.AnnotationGeometryData.md)

#### Inherited from

GeometryChunkMixin
(Chunk).data

#### Defined in

[src/neuroglancer/annotation/backend.ts:74](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/backend.ts#L74)

___

### downloadCancellationToken

• **downloadCancellationToken**: `undefined` \| [`CancellationTokenSource`](util_cancellation.CancellationTokenSource.md) = `undefined`

Cancellation token used to cancel the pending download.  Set to undefined except when state !==
DOWNLOADING.  This should not be accessed by code outside this module.

#### Inherited from

GeometryChunkMixin
(Chunk).downloadCancellationToken

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:96](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L96)

___

### error

• **error**: `any` = `null`

#### Inherited from

GeometryChunkMixin
(Chunk).error

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:60](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L60)

___

### isComputational

• **isComputational**: `boolean` = `false`

#### Inherited from

GeometryChunkMixin
(Chunk).isComputational

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:88](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L88)

___

### key

• **key**: ``null`` \| `string` = `null`

#### Inherited from

GeometryChunkMixin
(Chunk).key

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:56](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L56)

___

### markGeneration

• **markGeneration**: `number` = `-1`

#### Inherited from

GeometryChunkMixin
(Chunk).markGeneration

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:63](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L63)

___

### newPriority

• **newPriority**: `number` = `0`

Specifies updated priority within priority tier, not yet reflected in priority queue state.
Only meaningful if newPriorityTier in CHUNK_ORDERED_PRIORITY_TIERS.

#### Inherited from

GeometryChunkMixin
(Chunk).newPriority

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L75)

___

### newPriorityTier

• **newPriorityTier**: [`ChunkPriorityTier`](../enums/chunk_manager_base.ChunkPriorityTier.md) = `ChunkPriorityTier.RECENT`

Specifies updated priority tier, not yet reflected in priority queue state.

#### Inherited from

GeometryChunkMixin
(Chunk).newPriorityTier

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:82](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L82)

___

### newlyRequestedToFrontend

• **newlyRequestedToFrontend**: `boolean` = `false`

#### Inherited from

GeometryChunkMixin
(Chunk).newlyRequestedToFrontend

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:89](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L89)

___

### next0

• **next0**: ``null`` \| [`Chunk`](chunk_manager_backend.Chunk.md) = `null`

#### Inherited from

GeometryChunkMixin
(Chunk).next0

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L48)

___

### next1

• **next1**: ``null`` \| [`Chunk`](chunk_manager_backend.Chunk.md) = `null`

#### Inherited from

GeometryChunkMixin
(Chunk).next1

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:51](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L51)

___

### objectId

• **objectId**: [`Uint64`](util_uint64.Uint64.md)

#### Defined in

[src/neuroglancer/annotation/backend.ts:105](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/backend.ts#L105)

___

### prev0

• **prev0**: ``null`` \| [`Chunk`](chunk_manager_backend.Chunk.md) = `null`

#### Inherited from

GeometryChunkMixin
(Chunk).prev0

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L49)

___

### prev1

• **prev1**: ``null`` \| [`Chunk`](chunk_manager_backend.Chunk.md) = `null`

#### Inherited from

GeometryChunkMixin
(Chunk).prev1

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L52)

___

### priority

• **priority**: `number` = `0`

Specifies existing priority within priority tier.  Only meaningful if priorityTier in
CHUNK_ORDERED_PRIORITY_TIERS.  Higher numbers mean higher priority.

#### Inherited from

GeometryChunkMixin
(Chunk).priority

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:69](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L69)

___

### priorityTier

• **priorityTier**: [`ChunkPriorityTier`](../enums/chunk_manager_base.ChunkPriorityTier.md) = `ChunkPriorityTier.RECENT`

#### Inherited from

GeometryChunkMixin
(Chunk).priorityTier

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:77](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L77)

___

### requestedToFrontend

• **requestedToFrontend**: `boolean` = `false`

#### Inherited from

GeometryChunkMixin
(Chunk).requestedToFrontend

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:90](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L90)

___

### source

• **source**: [`AnnotationSubsetGeometryChunkSource`](annotation_backend._internal_.AnnotationSubsetGeometryChunkSource.md)

#### Overrides

GeometryChunkMixin
(Chunk).source

#### Defined in

[src/neuroglancer/annotation/backend.ts:104](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/backend.ts#L104)

## Accessors

### chunkManager

• `get` **chunkManager**(): [`ChunkManager`](chunk_manager_backend.ChunkManager.md)

#### Returns

[`ChunkManager`](chunk_manager_backend.ChunkManager.md)

#### Inherited from

GeometryChunkMixin
(Chunk).chunkManager

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:129](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L129)

___

### downloadSlots

• `get` **downloadSlots**(): `number`

#### Returns

`number`

#### Inherited from

GeometryChunkMixin
(Chunk).downloadSlots

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:197](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L197)

• `set` **downloadSlots**(`count`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

`void`

#### Inherited from

GeometryChunkMixin
(Chunk).downloadSlots

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:201](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L201)

___

### gpuMemoryBytes

• `get` **gpuMemoryBytes**(): `number`

#### Returns

`number`

#### Inherited from

GeometryChunkMixin
(Chunk).gpuMemoryBytes

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:193](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L193)

• `set` **gpuMemoryBytes**(`bytes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `number` |

#### Returns

`void`

#### Inherited from

GeometryChunkMixin
(Chunk).gpuMemoryBytes

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:184](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L184)

___

### queueManager

• `get` **queueManager**(): [`ChunkQueueManager`](chunk_manager_backend.ChunkQueueManager.md)

#### Returns

[`ChunkQueueManager`](chunk_manager_backend.ChunkQueueManager.md)

#### Inherited from

GeometryChunkMixin
(Chunk).queueManager

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:133](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L133)

___

### state

• `get` **state**(): [`ChunkState`](../enums/chunk_manager_base.ChunkState.md)

#### Returns

[`ChunkState`](../enums/chunk_manager_base.ChunkState.md)

#### Inherited from

GeometryChunkMixin
(Chunk).state

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:167](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L167)

• `set` **state**(`newState`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newState` | [`ChunkState`](../enums/chunk_manager_base.ChunkState.md) |

#### Returns

`void`

#### Inherited from

GeometryChunkMixin
(Chunk).state

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:158](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L158)

___

### systemMemoryBytes

• `get` **systemMemoryBytes**(): `number`

#### Returns

`number`

#### Inherited from

GeometryChunkMixin
(Chunk).systemMemoryBytes

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:180](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L180)

• `set` **systemMemoryBytes**(`bytes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `number` |

#### Returns

`void`

#### Inherited from

GeometryChunkMixin
(Chunk).systemMemoryBytes

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L171)

## Methods

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

GeometryChunkMixin
(Chunk).dispose

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:124](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L124)

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
(Chunk).downloadFailed

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:137](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L137)

___

### downloadSucceeded

▸ **downloadSucceeded**(): `void`

#### Returns

`void`

#### Inherited from

GeometryChunkMixin
(Chunk).downloadSucceeded

#### Defined in

[src/neuroglancer/annotation/backend.ts:84](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/backend.ts#L84)

___

### freeSystemMemory

▸ **freeSystemMemory**(): `void`

#### Returns

`void`

#### Inherited from

GeometryChunkMixin
(Chunk).freeSystemMemory

#### Defined in

[src/neuroglancer/annotation/backend.ts:90](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/backend.ts#L90)

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
(Chunk).initialize

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:98](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L98)

___

### registerListener

▸ **registerListener**(`listener`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | [`ChunkStateListener`](../interfaces/chunk_manager_backend.ChunkStateListener.md) |

#### Returns

`boolean`

#### Inherited from

GeometryChunkMixin
(Chunk).registerListener

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:211](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L211)

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
(Chunk).serialize

#### Defined in

[src/neuroglancer/annotation/backend.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/backend.ts#L75)

___

### toString

▸ **toString**(): ``null`` \| `string`

#### Returns

``null`` \| `string`

#### Inherited from

GeometryChunkMixin
(Chunk).toString

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:154](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L154)

___

### unregisterListener

▸ **unregisterListener**(`listener`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | [`ChunkStateListener`](../interfaces/chunk_manager_backend.ChunkStateListener.md) |

#### Returns

`boolean`

#### Inherited from

GeometryChunkMixin
(Chunk).unregisterListener

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:218](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L218)

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
(Chunk).updatePriorityProperties

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:116](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L116)

___

### priorityGreater

▸ `Static` **priorityGreater**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Chunk`](chunk_manager_backend.Chunk.md) |
| `b` | [`Chunk`](chunk_manager_backend.Chunk.md) |

#### Returns

`boolean`

#### Inherited from

GeometryChunkMixin
(Chunk).priorityGreater

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:229](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L229)

___

### priorityLess

▸ `Static` **priorityLess**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Chunk`](chunk_manager_backend.Chunk.md) |
| `b` | [`Chunk`](chunk_manager_backend.Chunk.md) |

#### Returns

`boolean`

#### Inherited from

GeometryChunkMixin
(Chunk).priorityLess

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:225](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L225)
