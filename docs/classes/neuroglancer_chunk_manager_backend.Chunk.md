[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/chunk\_manager/backend](../modules/neuroglancer_chunk_manager_backend.md) / Chunk

# Class: Chunk

[neuroglancer/chunk_manager/backend](../modules/neuroglancer_chunk_manager_backend.md).Chunk

**`License`**

Copyright 2016 Google Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

## Hierarchy

- **`Chunk`**

  ↳ [`AnnotationMetadataChunk`](neuroglancer_annotation_backend.AnnotationMetadataChunk.md)

  ↳ [`ManifestChunk`](neuroglancer_mesh_backend.ManifestChunk.md)

  ↳ [`FragmentChunk`](neuroglancer_mesh_backend.FragmentChunk.md)

  ↳ [`MultiscaleManifestChunk`](neuroglancer_mesh_backend.MultiscaleManifestChunk.md)

  ↳ [`MultiscaleFragmentChunk`](neuroglancer_mesh_backend.MultiscaleFragmentChunk.md)

  ↳ [`SingleMeshChunk`](neuroglancer_single_mesh_backend.SingleMeshChunk.md)

  ↳ [`SkeletonChunk`](neuroglancer_skeleton_backend.SkeletonChunk.md)

  ↳ [`SliceViewChunk`](neuroglancer_sliceview_backend.SliceViewChunk.md)

  ↳ [`GenericSharedDataChunk`](neuroglancer_chunk_manager_generic_file_source._internal_.GenericSharedDataChunk.md)

## Implements

- [`Disposable`](../interfaces/neuroglancer_util_disposable.Disposable.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_chunk_manager_backend.Chunk.md#constructor)

### Properties

- [backendOnly](neuroglancer_chunk_manager_backend.Chunk.md#backendonly)
- [child0](neuroglancer_chunk_manager_backend.Chunk.md#child0)
- [child1](neuroglancer_chunk_manager_backend.Chunk.md#child1)
- [downloadCancellationToken](neuroglancer_chunk_manager_backend.Chunk.md#downloadcancellationtoken)
- [downloadSlots\_](neuroglancer_chunk_manager_backend.Chunk.md#downloadslots_)
- [error](neuroglancer_chunk_manager_backend.Chunk.md#error)
- [gpuMemoryBytes\_](neuroglancer_chunk_manager_backend.Chunk.md#gpumemorybytes_)
- [isComputational](neuroglancer_chunk_manager_backend.Chunk.md#iscomputational)
- [key](neuroglancer_chunk_manager_backend.Chunk.md#key)
- [markGeneration](neuroglancer_chunk_manager_backend.Chunk.md#markgeneration)
- [newPriority](neuroglancer_chunk_manager_backend.Chunk.md#newpriority)
- [newPriorityTier](neuroglancer_chunk_manager_backend.Chunk.md#newprioritytier)
- [newlyRequestedToFrontend](neuroglancer_chunk_manager_backend.Chunk.md#newlyrequestedtofrontend)
- [next0](neuroglancer_chunk_manager_backend.Chunk.md#next0)
- [next1](neuroglancer_chunk_manager_backend.Chunk.md#next1)
- [prev0](neuroglancer_chunk_manager_backend.Chunk.md#prev0)
- [prev1](neuroglancer_chunk_manager_backend.Chunk.md#prev1)
- [priority](neuroglancer_chunk_manager_backend.Chunk.md#priority)
- [priorityTier](neuroglancer_chunk_manager_backend.Chunk.md#prioritytier)
- [requestedToFrontend](neuroglancer_chunk_manager_backend.Chunk.md#requestedtofrontend)
- [source](neuroglancer_chunk_manager_backend.Chunk.md#source)
- [state\_](neuroglancer_chunk_manager_backend.Chunk.md#state_)
- [systemMemoryBytes\_](neuroglancer_chunk_manager_backend.Chunk.md#systemmemorybytes_)

### Accessors

- [chunkManager](neuroglancer_chunk_manager_backend.Chunk.md#chunkmanager)
- [downloadSlots](neuroglancer_chunk_manager_backend.Chunk.md#downloadslots)
- [gpuMemoryBytes](neuroglancer_chunk_manager_backend.Chunk.md#gpumemorybytes)
- [queueManager](neuroglancer_chunk_manager_backend.Chunk.md#queuemanager)
- [state](neuroglancer_chunk_manager_backend.Chunk.md#state)
- [systemMemoryBytes](neuroglancer_chunk_manager_backend.Chunk.md#systemmemorybytes)

### Methods

- [dispose](neuroglancer_chunk_manager_backend.Chunk.md#dispose)
- [downloadFailed](neuroglancer_chunk_manager_backend.Chunk.md#downloadfailed)
- [downloadSucceeded](neuroglancer_chunk_manager_backend.Chunk.md#downloadsucceeded)
- [freeSystemMemory](neuroglancer_chunk_manager_backend.Chunk.md#freesystemmemory)
- [initialize](neuroglancer_chunk_manager_backend.Chunk.md#initialize)
- [registerListener](neuroglancer_chunk_manager_backend.Chunk.md#registerlistener)
- [serialize](neuroglancer_chunk_manager_backend.Chunk.md#serialize)
- [toString](neuroglancer_chunk_manager_backend.Chunk.md#tostring)
- [unregisterListener](neuroglancer_chunk_manager_backend.Chunk.md#unregisterlistener)
- [updatePriorityProperties](neuroglancer_chunk_manager_backend.Chunk.md#updatepriorityproperties)
- [priorityGreater](neuroglancer_chunk_manager_backend.Chunk.md#prioritygreater)
- [priorityLess](neuroglancer_chunk_manager_backend.Chunk.md#priorityless)

## Constructors

### constructor

• **new Chunk**()

## Properties

### backendOnly

• **backendOnly**: `boolean` = `false`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L87)

___

### child0

• **child0**: ``null`` \| [`Chunk`](neuroglancer_chunk_manager_backend.Chunk.md) = `null`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L47)

___

### child1

• **child1**: ``null`` \| [`Chunk`](neuroglancer_chunk_manager_backend.Chunk.md) = `null`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L50)

___

### downloadCancellationToken

• **downloadCancellationToken**: `undefined` \| [`CancellationTokenSource`](neuroglancer_util_cancellation.CancellationTokenSource.md) = `undefined`

Cancellation token used to cancel the pending download.  Set to undefined except when state !==
DOWNLOADING.  This should not be accessed by code outside this module.

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:96](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L96)

___

### downloadSlots\_

• `Private` **downloadSlots\_**: `number` = `1`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:86](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L86)

___

### error

• **error**: `any` = `null`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:60](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L60)

___

### gpuMemoryBytes\_

• `Private` **gpuMemoryBytes\_**: `number` = `0`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L85)

___

### isComputational

• **isComputational**: `boolean` = `false`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:88](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L88)

___

### key

• **key**: ``null`` \| `string` = `null`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:56](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L56)

___

### markGeneration

• **markGeneration**: `number` = `-1`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:63](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L63)

___

### newPriority

• **newPriority**: `number` = `0`

Specifies updated priority within priority tier, not yet reflected in priority queue state.
Only meaningful if newPriorityTier in CHUNK_ORDERED_PRIORITY_TIERS.

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L75)

___

### newPriorityTier

• **newPriorityTier**: [`ChunkPriorityTier`](../enums/neuroglancer_chunk_manager_base.ChunkPriorityTier.md) = `ChunkPriorityTier.RECENT`

Specifies updated priority tier, not yet reflected in priority queue state.

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:82](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L82)

___

### newlyRequestedToFrontend

• **newlyRequestedToFrontend**: `boolean` = `false`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:89](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L89)

___

### next0

• **next0**: ``null`` \| [`Chunk`](neuroglancer_chunk_manager_backend.Chunk.md) = `null`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L48)

___

### next1

• **next1**: ``null`` \| [`Chunk`](neuroglancer_chunk_manager_backend.Chunk.md) = `null`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:51](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L51)

___

### prev0

• **prev0**: ``null`` \| [`Chunk`](neuroglancer_chunk_manager_backend.Chunk.md) = `null`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L49)

___

### prev1

• **prev1**: ``null`` \| [`Chunk`](neuroglancer_chunk_manager_backend.Chunk.md) = `null`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L52)

___

### priority

• **priority**: `number` = `0`

Specifies existing priority within priority tier.  Only meaningful if priorityTier in
CHUNK_ORDERED_PRIORITY_TIERS.  Higher numbers mean higher priority.

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:69](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L69)

___

### priorityTier

• **priorityTier**: [`ChunkPriorityTier`](../enums/neuroglancer_chunk_manager_base.ChunkPriorityTier.md) = `ChunkPriorityTier.RECENT`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:77](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L77)

___

### requestedToFrontend

• **requestedToFrontend**: `boolean` = `false`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:90](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L90)

___

### source

• **source**: ``null`` \| [`ChunkSource`](neuroglancer_chunk_manager_backend.ChunkSource.md) = `null`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L54)

___

### state\_

• `Private` **state\_**: [`ChunkState`](../enums/neuroglancer_chunk_manager_base.ChunkState.md) = `ChunkState.NEW`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:58](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L58)

___

### systemMemoryBytes\_

• `Private` **systemMemoryBytes\_**: `number` = `0`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:84](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L84)

## Accessors

### chunkManager

• `get` **chunkManager**(): [`ChunkManager`](neuroglancer_chunk_manager_backend.ChunkManager.md)

#### Returns

[`ChunkManager`](neuroglancer_chunk_manager_backend.ChunkManager.md)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:129](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L129)

___

### downloadSlots

• `get` **downloadSlots**(): `number`

#### Returns

`number`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:197](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L197)

• `set` **downloadSlots**(`count`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:201](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L201)

___

### gpuMemoryBytes

• `get` **gpuMemoryBytes**(): `number`

#### Returns

`number`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:193](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L193)

• `set` **gpuMemoryBytes**(`bytes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:184](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L184)

___

### queueManager

• `get` **queueManager**(): [`ChunkQueueManager`](neuroglancer_chunk_manager_backend.ChunkQueueManager.md)

#### Returns

[`ChunkQueueManager`](neuroglancer_chunk_manager_backend.ChunkQueueManager.md)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:133](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L133)

___

### state

• `get` **state**(): [`ChunkState`](../enums/neuroglancer_chunk_manager_base.ChunkState.md)

#### Returns

[`ChunkState`](../enums/neuroglancer_chunk_manager_base.ChunkState.md)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:167](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L167)

• `set` **state**(`newState`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newState` | [`ChunkState`](../enums/neuroglancer_chunk_manager_base.ChunkState.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:158](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L158)

___

### systemMemoryBytes

• `get` **systemMemoryBytes**(): `number`

#### Returns

`number`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:180](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L180)

• `set` **systemMemoryBytes**(`bytes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L171)

## Methods

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Implementation of

Disposable.dispose

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

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:137](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L137)

___

### downloadSucceeded

▸ **downloadSucceeded**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:142](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L142)

___

### freeSystemMemory

▸ **freeSystemMemory**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:146](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L146)

___

### initialize

▸ **initialize**(`key`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:98](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L98)

___

### registerListener

▸ **registerListener**(`listener`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | [`ChunkStateListener`](../interfaces/neuroglancer_chunk_manager_backend.ChunkStateListener.md) |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:211](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L211)

___

### serialize

▸ **serialize**(`msg`, `_transfers`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `any` |
| `_transfers` | `any`[] |

#### Returns

`void`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:148](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L148)

___

### toString

▸ **toString**(): ``null`` \| `string`

#### Returns

``null`` \| `string`

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

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:225](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L225)
