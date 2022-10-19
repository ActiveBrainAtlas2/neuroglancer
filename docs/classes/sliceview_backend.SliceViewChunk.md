[neuroglancer](../README.md) / [Modules](../modules.md) / [sliceview/backend](../modules/sliceview_backend.md) / SliceViewChunk

# Class: SliceViewChunk

[sliceview/backend](../modules/sliceview_backend.md).SliceViewChunk

## Hierarchy

- [`Chunk`](chunk_manager_backend.Chunk.md)

  ↳ **`SliceViewChunk`**

## Table of contents

### Constructors

- [constructor](sliceview_backend.SliceViewChunk.md#constructor)

### Properties

- [backendOnly](sliceview_backend.SliceViewChunk.md#backendonly)
- [child0](sliceview_backend.SliceViewChunk.md#child0)
- [child1](sliceview_backend.SliceViewChunk.md#child1)
- [chunkGridPosition](sliceview_backend.SliceViewChunk.md#chunkgridposition)
- [downloadCancellationToken](sliceview_backend.SliceViewChunk.md#downloadcancellationtoken)
- [error](sliceview_backend.SliceViewChunk.md#error)
- [isComputational](sliceview_backend.SliceViewChunk.md#iscomputational)
- [key](sliceview_backend.SliceViewChunk.md#key)
- [markGeneration](sliceview_backend.SliceViewChunk.md#markgeneration)
- [newPriority](sliceview_backend.SliceViewChunk.md#newpriority)
- [newPriorityTier](sliceview_backend.SliceViewChunk.md#newprioritytier)
- [newlyRequestedToFrontend](sliceview_backend.SliceViewChunk.md#newlyrequestedtofrontend)
- [next0](sliceview_backend.SliceViewChunk.md#next0)
- [next1](sliceview_backend.SliceViewChunk.md#next1)
- [prev0](sliceview_backend.SliceViewChunk.md#prev0)
- [prev1](sliceview_backend.SliceViewChunk.md#prev1)
- [priority](sliceview_backend.SliceViewChunk.md#priority)
- [priorityTier](sliceview_backend.SliceViewChunk.md#prioritytier)
- [requestedToFrontend](sliceview_backend.SliceViewChunk.md#requestedtofrontend)
- [source](sliceview_backend.SliceViewChunk.md#source)

### Accessors

- [chunkManager](sliceview_backend.SliceViewChunk.md#chunkmanager)
- [downloadSlots](sliceview_backend.SliceViewChunk.md#downloadslots)
- [gpuMemoryBytes](sliceview_backend.SliceViewChunk.md#gpumemorybytes)
- [queueManager](sliceview_backend.SliceViewChunk.md#queuemanager)
- [state](sliceview_backend.SliceViewChunk.md#state)
- [systemMemoryBytes](sliceview_backend.SliceViewChunk.md#systemmemorybytes)

### Methods

- [dispose](sliceview_backend.SliceViewChunk.md#dispose)
- [downloadFailed](sliceview_backend.SliceViewChunk.md#downloadfailed)
- [downloadSucceeded](sliceview_backend.SliceViewChunk.md#downloadsucceeded)
- [freeSystemMemory](sliceview_backend.SliceViewChunk.md#freesystemmemory)
- [initialize](sliceview_backend.SliceViewChunk.md#initialize)
- [initializeVolumeChunk](sliceview_backend.SliceViewChunk.md#initializevolumechunk)
- [registerListener](sliceview_backend.SliceViewChunk.md#registerlistener)
- [serialize](sliceview_backend.SliceViewChunk.md#serialize)
- [toString](sliceview_backend.SliceViewChunk.md#tostring)
- [unregisterListener](sliceview_backend.SliceViewChunk.md#unregisterlistener)
- [updatePriorityProperties](sliceview_backend.SliceViewChunk.md#updatepriorityproperties)
- [priorityGreater](sliceview_backend.SliceViewChunk.md#prioritygreater)
- [priorityLess](sliceview_backend.SliceViewChunk.md#priorityless)

## Constructors

### constructor

• **new SliceViewChunk**()

#### Overrides

[Chunk](chunk_manager_backend.Chunk.md).[constructor](chunk_manager_backend.Chunk.md#constructor)

#### Defined in

[src/neuroglancer/sliceview/backend.ts:272](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/backend.ts#L272)

## Properties

### backendOnly

• **backendOnly**: `boolean` = `false`

#### Inherited from

[Chunk](chunk_manager_backend.Chunk.md).[backendOnly](chunk_manager_backend.Chunk.md#backendonly)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L87)

___

### child0

• **child0**: ``null`` \| [`Chunk`](chunk_manager_backend.Chunk.md) = `null`

#### Inherited from

[Chunk](chunk_manager_backend.Chunk.md).[child0](chunk_manager_backend.Chunk.md#child0)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L47)

___

### child1

• **child1**: ``null`` \| [`Chunk`](chunk_manager_backend.Chunk.md) = `null`

#### Inherited from

[Chunk](chunk_manager_backend.Chunk.md).[child1](chunk_manager_backend.Chunk.md#child1)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L50)

___

### chunkGridPosition

• **chunkGridPosition**: `Float32Array`

#### Defined in

[src/neuroglancer/sliceview/backend.ts:269](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/backend.ts#L269)

___

### downloadCancellationToken

• **downloadCancellationToken**: `undefined` \| [`CancellationTokenSource`](util_cancellation.CancellationTokenSource.md) = `undefined`

Cancellation token used to cancel the pending download.  Set to undefined except when state !==
DOWNLOADING.  This should not be accessed by code outside this module.

#### Inherited from

[Chunk](chunk_manager_backend.Chunk.md).[downloadCancellationToken](chunk_manager_backend.Chunk.md#downloadcancellationtoken)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:96](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L96)

___

### error

• **error**: `any` = `null`

#### Inherited from

[Chunk](chunk_manager_backend.Chunk.md).[error](chunk_manager_backend.Chunk.md#error)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:60](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L60)

___

### isComputational

• **isComputational**: `boolean` = `false`

#### Inherited from

[Chunk](chunk_manager_backend.Chunk.md).[isComputational](chunk_manager_backend.Chunk.md#iscomputational)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:88](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L88)

___

### key

• **key**: ``null`` \| `string` = `null`

#### Inherited from

[Chunk](chunk_manager_backend.Chunk.md).[key](chunk_manager_backend.Chunk.md#key)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:56](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L56)

___

### markGeneration

• **markGeneration**: `number` = `-1`

#### Inherited from

[Chunk](chunk_manager_backend.Chunk.md).[markGeneration](chunk_manager_backend.Chunk.md#markgeneration)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:63](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L63)

___

### newPriority

• **newPriority**: `number` = `0`

Specifies updated priority within priority tier, not yet reflected in priority queue state.
Only meaningful if newPriorityTier in CHUNK_ORDERED_PRIORITY_TIERS.

#### Inherited from

[Chunk](chunk_manager_backend.Chunk.md).[newPriority](chunk_manager_backend.Chunk.md#newpriority)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L75)

___

### newPriorityTier

• **newPriorityTier**: [`ChunkPriorityTier`](../enums/chunk_manager_base.ChunkPriorityTier.md) = `ChunkPriorityTier.RECENT`

Specifies updated priority tier, not yet reflected in priority queue state.

#### Inherited from

[Chunk](chunk_manager_backend.Chunk.md).[newPriorityTier](chunk_manager_backend.Chunk.md#newprioritytier)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:82](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L82)

___

### newlyRequestedToFrontend

• **newlyRequestedToFrontend**: `boolean` = `false`

#### Inherited from

[Chunk](chunk_manager_backend.Chunk.md).[newlyRequestedToFrontend](chunk_manager_backend.Chunk.md#newlyrequestedtofrontend)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:89](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L89)

___

### next0

• **next0**: ``null`` \| [`Chunk`](chunk_manager_backend.Chunk.md) = `null`

#### Inherited from

[Chunk](chunk_manager_backend.Chunk.md).[next0](chunk_manager_backend.Chunk.md#next0)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L48)

___

### next1

• **next1**: ``null`` \| [`Chunk`](chunk_manager_backend.Chunk.md) = `null`

#### Inherited from

[Chunk](chunk_manager_backend.Chunk.md).[next1](chunk_manager_backend.Chunk.md#next1)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:51](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L51)

___

### prev0

• **prev0**: ``null`` \| [`Chunk`](chunk_manager_backend.Chunk.md) = `null`

#### Inherited from

[Chunk](chunk_manager_backend.Chunk.md).[prev0](chunk_manager_backend.Chunk.md#prev0)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L49)

___

### prev1

• **prev1**: ``null`` \| [`Chunk`](chunk_manager_backend.Chunk.md) = `null`

#### Inherited from

[Chunk](chunk_manager_backend.Chunk.md).[prev1](chunk_manager_backend.Chunk.md#prev1)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L52)

___

### priority

• **priority**: `number` = `0`

Specifies existing priority within priority tier.  Only meaningful if priorityTier in
CHUNK_ORDERED_PRIORITY_TIERS.  Higher numbers mean higher priority.

#### Inherited from

[Chunk](chunk_manager_backend.Chunk.md).[priority](chunk_manager_backend.Chunk.md#priority)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:69](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L69)

___

### priorityTier

• **priorityTier**: [`ChunkPriorityTier`](../enums/chunk_manager_base.ChunkPriorityTier.md) = `ChunkPriorityTier.RECENT`

#### Inherited from

[Chunk](chunk_manager_backend.Chunk.md).[priorityTier](chunk_manager_backend.Chunk.md#prioritytier)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:77](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L77)

___

### requestedToFrontend

• **requestedToFrontend**: `boolean` = `false`

#### Inherited from

[Chunk](chunk_manager_backend.Chunk.md).[requestedToFrontend](chunk_manager_backend.Chunk.md#requestedtofrontend)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:90](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L90)

___

### source

• **source**: ``null`` \| [`SliceViewChunkSourceBackend`](sliceview_backend.SliceViewChunkSourceBackend.md)<[`SliceViewChunkSpecification`](../interfaces/sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>, [`SliceViewChunk`](sliceview_backend.SliceViewChunk.md)\> = `null`

#### Overrides

[Chunk](chunk_manager_backend.Chunk.md).[source](chunk_manager_backend.Chunk.md#source)

#### Defined in

[src/neuroglancer/sliceview/backend.ts:270](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/backend.ts#L270)

## Accessors

### chunkManager

• `get` **chunkManager**(): [`ChunkManager`](chunk_manager_backend.ChunkManager.md)

#### Returns

[`ChunkManager`](chunk_manager_backend.ChunkManager.md)

#### Inherited from

Chunk.chunkManager

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:129](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L129)

___

### downloadSlots

• `get` **downloadSlots**(): `number`

#### Returns

`number`

#### Inherited from

Chunk.downloadSlots

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

Chunk.downloadSlots

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:201](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L201)

___

### gpuMemoryBytes

• `get` **gpuMemoryBytes**(): `number`

#### Returns

`number`

#### Inherited from

Chunk.gpuMemoryBytes

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

Chunk.gpuMemoryBytes

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:184](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L184)

___

### queueManager

• `get` **queueManager**(): [`ChunkQueueManager`](chunk_manager_backend.ChunkQueueManager.md)

#### Returns

[`ChunkQueueManager`](chunk_manager_backend.ChunkQueueManager.md)

#### Inherited from

Chunk.queueManager

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:133](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L133)

___

### state

• `get` **state**(): [`ChunkState`](../enums/chunk_manager_base.ChunkState.md)

#### Returns

[`ChunkState`](../enums/chunk_manager_base.ChunkState.md)

#### Inherited from

Chunk.state

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

Chunk.state

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:158](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L158)

___

### systemMemoryBytes

• `get` **systemMemoryBytes**(): `number`

#### Returns

`number`

#### Inherited from

Chunk.systemMemoryBytes

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

Chunk.systemMemoryBytes

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L171)

## Methods

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[Chunk](chunk_manager_backend.Chunk.md).[dispose](chunk_manager_backend.Chunk.md#dispose)

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

[Chunk](chunk_manager_backend.Chunk.md).[downloadFailed](chunk_manager_backend.Chunk.md#downloadfailed)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:137](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L137)

___

### downloadSucceeded

▸ **downloadSucceeded**(): `void`

#### Returns

`void`

#### Overrides

[Chunk](chunk_manager_backend.Chunk.md).[downloadSucceeded](chunk_manager_backend.Chunk.md#downloadsucceeded)

#### Defined in

[src/neuroglancer/sliceview/backend.ts:286](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/backend.ts#L286)

___

### freeSystemMemory

▸ **freeSystemMemory**(): `void`

#### Returns

`void`

#### Overrides

[Chunk](chunk_manager_backend.Chunk.md).[freeSystemMemory](chunk_manager_backend.Chunk.md#freesystemmemory)

#### Defined in

[src/neuroglancer/sliceview/backend.ts:290](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/backend.ts#L290)

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

[Chunk](chunk_manager_backend.Chunk.md).[initialize](chunk_manager_backend.Chunk.md#initialize)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:98](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L98)

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

#### Defined in

[src/neuroglancer/sliceview/backend.ts:276](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/backend.ts#L276)

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

[Chunk](chunk_manager_backend.Chunk.md).[registerListener](chunk_manager_backend.Chunk.md#registerlistener)

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

#### Overrides

[Chunk](chunk_manager_backend.Chunk.md).[serialize](chunk_manager_backend.Chunk.md#serialize)

#### Defined in

[src/neuroglancer/sliceview/backend.ts:281](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/backend.ts#L281)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Overrides

[Chunk](chunk_manager_backend.Chunk.md).[toString](chunk_manager_backend.Chunk.md#tostring)

#### Defined in

[src/neuroglancer/sliceview/backend.ts:292](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/backend.ts#L292)

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

[Chunk](chunk_manager_backend.Chunk.md).[unregisterListener](chunk_manager_backend.Chunk.md#unregisterlistener)

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

[Chunk](chunk_manager_backend.Chunk.md).[updatePriorityProperties](chunk_manager_backend.Chunk.md#updatepriorityproperties)

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

[Chunk](chunk_manager_backend.Chunk.md).[priorityGreater](chunk_manager_backend.Chunk.md#prioritygreater)

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

[Chunk](chunk_manager_backend.Chunk.md).[priorityLess](chunk_manager_backend.Chunk.md#priorityless)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:225](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L225)
