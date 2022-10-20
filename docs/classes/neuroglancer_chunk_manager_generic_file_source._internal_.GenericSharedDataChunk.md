[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/chunk\_manager/generic\_file\_source](../modules/neuroglancer_chunk_manager_generic_file_source.md) / [<internal\>](../modules/neuroglancer_chunk_manager_generic_file_source._internal_.md) / GenericSharedDataChunk

# Class: GenericSharedDataChunk<Key, Data\>

[neuroglancer/chunk_manager/generic_file_source](../modules/neuroglancer_chunk_manager_generic_file_source.md).[<internal>](../modules/neuroglancer_chunk_manager_generic_file_source._internal_.md).GenericSharedDataChunk

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

## Type parameters

| Name |
| :------ |
| `Key` |
| `Data` |

## Hierarchy

- [`Chunk`](neuroglancer_chunk_manager_backend.Chunk.md)

  ↳ **`GenericSharedDataChunk`**

## Table of contents

### Constructors

- [constructor](neuroglancer_chunk_manager_generic_file_source._internal_.GenericSharedDataChunk.md#constructor)

### Properties

- [backendOnly](neuroglancer_chunk_manager_generic_file_source._internal_.GenericSharedDataChunk.md#backendonly)
- [child0](neuroglancer_chunk_manager_generic_file_source._internal_.GenericSharedDataChunk.md#child0)
- [child1](neuroglancer_chunk_manager_generic_file_source._internal_.GenericSharedDataChunk.md#child1)
- [data](neuroglancer_chunk_manager_generic_file_source._internal_.GenericSharedDataChunk.md#data)
- [decodedKey](neuroglancer_chunk_manager_generic_file_source._internal_.GenericSharedDataChunk.md#decodedkey)
- [downloadCancellationToken](neuroglancer_chunk_manager_generic_file_source._internal_.GenericSharedDataChunk.md#downloadcancellationtoken)
- [error](neuroglancer_chunk_manager_generic_file_source._internal_.GenericSharedDataChunk.md#error)
- [isComputational](neuroglancer_chunk_manager_generic_file_source._internal_.GenericSharedDataChunk.md#iscomputational)
- [key](neuroglancer_chunk_manager_generic_file_source._internal_.GenericSharedDataChunk.md#key)
- [markGeneration](neuroglancer_chunk_manager_generic_file_source._internal_.GenericSharedDataChunk.md#markgeneration)
- [newPriority](neuroglancer_chunk_manager_generic_file_source._internal_.GenericSharedDataChunk.md#newpriority)
- [newPriorityTier](neuroglancer_chunk_manager_generic_file_source._internal_.GenericSharedDataChunk.md#newprioritytier)
- [newlyRequestedToFrontend](neuroglancer_chunk_manager_generic_file_source._internal_.GenericSharedDataChunk.md#newlyrequestedtofrontend)
- [next0](neuroglancer_chunk_manager_generic_file_source._internal_.GenericSharedDataChunk.md#next0)
- [next1](neuroglancer_chunk_manager_generic_file_source._internal_.GenericSharedDataChunk.md#next1)
- [prev0](neuroglancer_chunk_manager_generic_file_source._internal_.GenericSharedDataChunk.md#prev0)
- [prev1](neuroglancer_chunk_manager_generic_file_source._internal_.GenericSharedDataChunk.md#prev1)
- [priority](neuroglancer_chunk_manager_generic_file_source._internal_.GenericSharedDataChunk.md#priority)
- [priorityTier](neuroglancer_chunk_manager_generic_file_source._internal_.GenericSharedDataChunk.md#prioritytier)
- [requestedToFrontend](neuroglancer_chunk_manager_generic_file_source._internal_.GenericSharedDataChunk.md#requestedtofrontend)
- [requesters](neuroglancer_chunk_manager_generic_file_source._internal_.GenericSharedDataChunk.md#requesters)
- [source](neuroglancer_chunk_manager_generic_file_source._internal_.GenericSharedDataChunk.md#source)

### Accessors

- [chunkManager](neuroglancer_chunk_manager_generic_file_source._internal_.GenericSharedDataChunk.md#chunkmanager)
- [downloadSlots](neuroglancer_chunk_manager_generic_file_source._internal_.GenericSharedDataChunk.md#downloadslots)
- [gpuMemoryBytes](neuroglancer_chunk_manager_generic_file_source._internal_.GenericSharedDataChunk.md#gpumemorybytes)
- [queueManager](neuroglancer_chunk_manager_generic_file_source._internal_.GenericSharedDataChunk.md#queuemanager)
- [state](neuroglancer_chunk_manager_generic_file_source._internal_.GenericSharedDataChunk.md#state)
- [systemMemoryBytes](neuroglancer_chunk_manager_generic_file_source._internal_.GenericSharedDataChunk.md#systemmemorybytes)

### Methods

- [dispose](neuroglancer_chunk_manager_generic_file_source._internal_.GenericSharedDataChunk.md#dispose)
- [downloadFailed](neuroglancer_chunk_manager_generic_file_source._internal_.GenericSharedDataChunk.md#downloadfailed)
- [downloadSucceeded](neuroglancer_chunk_manager_generic_file_source._internal_.GenericSharedDataChunk.md#downloadsucceeded)
- [freeSystemMemory](neuroglancer_chunk_manager_generic_file_source._internal_.GenericSharedDataChunk.md#freesystemmemory)
- [initialize](neuroglancer_chunk_manager_generic_file_source._internal_.GenericSharedDataChunk.md#initialize)
- [registerListener](neuroglancer_chunk_manager_generic_file_source._internal_.GenericSharedDataChunk.md#registerlistener)
- [serialize](neuroglancer_chunk_manager_generic_file_source._internal_.GenericSharedDataChunk.md#serialize)
- [toString](neuroglancer_chunk_manager_generic_file_source._internal_.GenericSharedDataChunk.md#tostring)
- [unregisterListener](neuroglancer_chunk_manager_generic_file_source._internal_.GenericSharedDataChunk.md#unregisterlistener)
- [updatePriorityProperties](neuroglancer_chunk_manager_generic_file_source._internal_.GenericSharedDataChunk.md#updatepriorityproperties)
- [priorityGreater](neuroglancer_chunk_manager_generic_file_source._internal_.GenericSharedDataChunk.md#prioritygreater)
- [priorityLess](neuroglancer_chunk_manager_generic_file_source._internal_.GenericSharedDataChunk.md#priorityless)

## Constructors

### constructor

• **new GenericSharedDataChunk**<`Key`, `Data`\>()

#### Type parameters

| Name |
| :------ |
| `Key` |
| `Data` |

#### Inherited from

[Chunk](neuroglancer_chunk_manager_backend.Chunk.md).[constructor](neuroglancer_chunk_manager_backend.Chunk.md#constructor)

## Properties

### backendOnly

• **backendOnly**: `boolean` = `true`

#### Overrides

[Chunk](neuroglancer_chunk_manager_backend.Chunk.md).[backendOnly](neuroglancer_chunk_manager_backend.Chunk.md#backendonly)

#### Defined in

[src/neuroglancer/chunk_manager/generic_file_source.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/generic_file_source.ts#L45)

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

### data

• `Optional` **data**: `Data`

#### Defined in

[src/neuroglancer/chunk_manager/generic_file_source.ts:43](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/generic_file_source.ts#L43)

___

### decodedKey

• `Optional` **decodedKey**: `Key`

#### Defined in

[src/neuroglancer/chunk_manager/generic_file_source.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/generic_file_source.ts#L42)

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

### requesters

• `Optional` **requesters**: `Set`<[`FileDataRequester`](../interfaces/neuroglancer_chunk_manager_generic_file_source._internal_.FileDataRequester.md)<`Data`\>\>

#### Defined in

[src/neuroglancer/chunk_manager/generic_file_source.ts:44](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/generic_file_source.ts#L44)

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

#### Overrides

[Chunk](neuroglancer_chunk_manager_backend.Chunk.md).[downloadFailed](neuroglancer_chunk_manager_backend.Chunk.md#downloadfailed)

#### Defined in

[src/neuroglancer/chunk_manager/generic_file_source.ts:61](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/generic_file_source.ts#L61)

___

### downloadSucceeded

▸ **downloadSucceeded**(): `void`

#### Returns

`void`

#### Overrides

[Chunk](neuroglancer_chunk_manager_backend.Chunk.md).[downloadSucceeded](neuroglancer_chunk_manager_backend.Chunk.md#downloadsucceeded)

#### Defined in

[src/neuroglancer/chunk_manager/generic_file_source.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/generic_file_source.ts#L52)

___

### freeSystemMemory

▸ **freeSystemMemory**(): `void`

#### Returns

`void`

#### Overrides

[Chunk](neuroglancer_chunk_manager_backend.Chunk.md).[freeSystemMemory](neuroglancer_chunk_manager_backend.Chunk.md#freesystemmemory)

#### Defined in

[src/neuroglancer/chunk_manager/generic_file_source.ts:70](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/generic_file_source.ts#L70)

___

### initialize

▸ **initialize**(`key`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`void`

#### Overrides

[Chunk](neuroglancer_chunk_manager_backend.Chunk.md).[initialize](neuroglancer_chunk_manager_backend.Chunk.md#initialize)

#### Defined in

[src/neuroglancer/chunk_manager/generic_file_source.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/generic_file_source.ts#L47)

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

▸ **serialize**(`msg`, `_transfers`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `any` |
| `_transfers` | `any`[] |

#### Returns

`void`

#### Inherited from

[Chunk](neuroglancer_chunk_manager_backend.Chunk.md).[serialize](neuroglancer_chunk_manager_backend.Chunk.md#serialize)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:148](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L148)

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
