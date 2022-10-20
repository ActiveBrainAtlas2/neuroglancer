[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/annotation/backend](../modules/neuroglancer_annotation_backend.md) / AnnotationMetadataChunk

# Class: AnnotationMetadataChunk

[neuroglancer/annotation/backend](../modules/neuroglancer_annotation_backend.md).AnnotationMetadataChunk

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

- [`Chunk`](neuroglancer_chunk_manager_backend.Chunk.md)

  ↳ **`AnnotationMetadataChunk`**

## Table of contents

### Constructors

- [constructor](neuroglancer_annotation_backend.AnnotationMetadataChunk.md#constructor)

### Properties

- [annotation](neuroglancer_annotation_backend.AnnotationMetadataChunk.md#annotation)
- [backendOnly](neuroglancer_annotation_backend.AnnotationMetadataChunk.md#backendonly)
- [child0](neuroglancer_annotation_backend.AnnotationMetadataChunk.md#child0)
- [child1](neuroglancer_annotation_backend.AnnotationMetadataChunk.md#child1)
- [downloadCancellationToken](neuroglancer_annotation_backend.AnnotationMetadataChunk.md#downloadcancellationtoken)
- [error](neuroglancer_annotation_backend.AnnotationMetadataChunk.md#error)
- [isComputational](neuroglancer_annotation_backend.AnnotationMetadataChunk.md#iscomputational)
- [key](neuroglancer_annotation_backend.AnnotationMetadataChunk.md#key)
- [markGeneration](neuroglancer_annotation_backend.AnnotationMetadataChunk.md#markgeneration)
- [newPriority](neuroglancer_annotation_backend.AnnotationMetadataChunk.md#newpriority)
- [newPriorityTier](neuroglancer_annotation_backend.AnnotationMetadataChunk.md#newprioritytier)
- [newlyRequestedToFrontend](neuroglancer_annotation_backend.AnnotationMetadataChunk.md#newlyrequestedtofrontend)
- [next0](neuroglancer_annotation_backend.AnnotationMetadataChunk.md#next0)
- [next1](neuroglancer_annotation_backend.AnnotationMetadataChunk.md#next1)
- [prev0](neuroglancer_annotation_backend.AnnotationMetadataChunk.md#prev0)
- [prev1](neuroglancer_annotation_backend.AnnotationMetadataChunk.md#prev1)
- [priority](neuroglancer_annotation_backend.AnnotationMetadataChunk.md#priority)
- [priorityTier](neuroglancer_annotation_backend.AnnotationMetadataChunk.md#prioritytier)
- [requestedToFrontend](neuroglancer_annotation_backend.AnnotationMetadataChunk.md#requestedtofrontend)
- [source](neuroglancer_annotation_backend.AnnotationMetadataChunk.md#source)

### Accessors

- [chunkManager](neuroglancer_annotation_backend.AnnotationMetadataChunk.md#chunkmanager)
- [downloadSlots](neuroglancer_annotation_backend.AnnotationMetadataChunk.md#downloadslots)
- [gpuMemoryBytes](neuroglancer_annotation_backend.AnnotationMetadataChunk.md#gpumemorybytes)
- [queueManager](neuroglancer_annotation_backend.AnnotationMetadataChunk.md#queuemanager)
- [state](neuroglancer_annotation_backend.AnnotationMetadataChunk.md#state)
- [systemMemoryBytes](neuroglancer_annotation_backend.AnnotationMetadataChunk.md#systemmemorybytes)

### Methods

- [dispose](neuroglancer_annotation_backend.AnnotationMetadataChunk.md#dispose)
- [downloadFailed](neuroglancer_annotation_backend.AnnotationMetadataChunk.md#downloadfailed)
- [downloadSucceeded](neuroglancer_annotation_backend.AnnotationMetadataChunk.md#downloadsucceeded)
- [freeSystemMemory](neuroglancer_annotation_backend.AnnotationMetadataChunk.md#freesystemmemory)
- [initialize](neuroglancer_annotation_backend.AnnotationMetadataChunk.md#initialize)
- [registerListener](neuroglancer_annotation_backend.AnnotationMetadataChunk.md#registerlistener)
- [serialize](neuroglancer_annotation_backend.AnnotationMetadataChunk.md#serialize)
- [toString](neuroglancer_annotation_backend.AnnotationMetadataChunk.md#tostring)
- [unregisterListener](neuroglancer_annotation_backend.AnnotationMetadataChunk.md#unregisterlistener)
- [updatePriorityProperties](neuroglancer_annotation_backend.AnnotationMetadataChunk.md#updatepriorityproperties)
- [priorityGreater](neuroglancer_annotation_backend.AnnotationMetadataChunk.md#prioritygreater)
- [priorityLess](neuroglancer_annotation_backend.AnnotationMetadataChunk.md#priorityless)

## Constructors

### constructor

• **new AnnotationMetadataChunk**()

#### Inherited from

[Chunk](neuroglancer_chunk_manager_backend.Chunk.md).[constructor](neuroglancer_chunk_manager_backend.Chunk.md#constructor)

## Properties

### annotation

• **annotation**: `undefined` \| ``null`` \| [`Annotation`](../modules/neuroglancer_annotation.md#annotation)

#### Defined in

[src/neuroglancer/annotation/backend.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/backend.ts#L39)

___

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

### markGeneration

• **markGeneration**: `number` = `-1`

#### Inherited from

[Chunk](neuroglancer_chunk_manager_backend.Chunk.md).[markGeneration](neuroglancer_chunk_manager_backend.Chunk.md#markgeneration)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:63](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L63)

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

[src/neuroglancer/annotation/backend.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/backend.ts#L47)

___

### freeSystemMemory

▸ **freeSystemMemory**(): `void`

#### Returns

`void`

#### Overrides

[Chunk](neuroglancer_chunk_manager_backend.Chunk.md).[freeSystemMemory](neuroglancer_chunk_manager_backend.Chunk.md#freesystemmemory)

#### Defined in

[src/neuroglancer/annotation/backend.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/backend.ts#L40)

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

[src/neuroglancer/annotation/backend.ts:43](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/backend.ts#L43)

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
