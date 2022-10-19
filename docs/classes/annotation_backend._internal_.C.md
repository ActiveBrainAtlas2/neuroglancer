[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/backend](../modules/annotation_backend.md) / [<internal\>](../modules/annotation_backend._internal_.md) / C

# Class: C<TBase\>

[annotation/backend](../modules/annotation_backend.md).[<internal>](../modules/annotation_backend._internal_.md).C

## Type parameters

| Name | Type |
| :------ | :------ |
| `TBase` | extends `Object` |

## Hierarchy

- [`Base`](../modules/annotation_backend._internal_.md#base)

  ↳ **`C`**

## Table of contents

### Constructors

- [constructor](annotation_backend._internal_.C.md#constructor)

### Properties

- [backendOnly](annotation_backend._internal_.C.md#backendonly)
- [child0](annotation_backend._internal_.C.md#child0)
- [child1](annotation_backend._internal_.C.md#child1)
- [data](annotation_backend._internal_.C.md#data)
- [downloadCancellationToken](annotation_backend._internal_.C.md#downloadcancellationtoken)
- [error](annotation_backend._internal_.C.md#error)
- [isComputational](annotation_backend._internal_.C.md#iscomputational)
- [key](annotation_backend._internal_.C.md#key)
- [markGeneration](annotation_backend._internal_.C.md#markgeneration)
- [newPriority](annotation_backend._internal_.C.md#newpriority)
- [newPriorityTier](annotation_backend._internal_.C.md#newprioritytier)
- [newlyRequestedToFrontend](annotation_backend._internal_.C.md#newlyrequestedtofrontend)
- [next0](annotation_backend._internal_.C.md#next0)
- [next1](annotation_backend._internal_.C.md#next1)
- [prev0](annotation_backend._internal_.C.md#prev0)
- [prev1](annotation_backend._internal_.C.md#prev1)
- [priority](annotation_backend._internal_.C.md#priority)
- [priorityTier](annotation_backend._internal_.C.md#prioritytier)
- [requestedToFrontend](annotation_backend._internal_.C.md#requestedtofrontend)
- [source](annotation_backend._internal_.C.md#source)
- [prototype](annotation_backend._internal_.C.md#prototype)

### Accessors

- [chunkManager](annotation_backend._internal_.C.md#chunkmanager)
- [downloadSlots](annotation_backend._internal_.C.md#downloadslots)
- [gpuMemoryBytes](annotation_backend._internal_.C.md#gpumemorybytes)
- [queueManager](annotation_backend._internal_.C.md#queuemanager)
- [state](annotation_backend._internal_.C.md#state)
- [systemMemoryBytes](annotation_backend._internal_.C.md#systemmemorybytes)

### Methods

- [dispose](annotation_backend._internal_.C.md#dispose)
- [downloadFailed](annotation_backend._internal_.C.md#downloadfailed)
- [downloadSucceeded](annotation_backend._internal_.C.md#downloadsucceeded)
- [freeSystemMemory](annotation_backend._internal_.C.md#freesystemmemory)
- [initialize](annotation_backend._internal_.C.md#initialize)
- [registerListener](annotation_backend._internal_.C.md#registerlistener)
- [serialize](annotation_backend._internal_.C.md#serialize)
- [toString](annotation_backend._internal_.C.md#tostring)
- [unregisterListener](annotation_backend._internal_.C.md#unregisterlistener)
- [updatePriorityProperties](annotation_backend._internal_.C.md#updatepriorityproperties)

## Constructors

### constructor

• **new C**(...`args`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Inherited from

Base.constructor

#### Defined in

[src/neuroglancer/annotation/backend.ts:72](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/backend.ts#L72)

## Properties

### backendOnly

• **backendOnly**: `boolean` = `false`

#### Inherited from

Base.backendOnly

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L87)

___

### child0

• **child0**: ``null`` \| [`Chunk`](chunk_manager_backend.Chunk.md) = `null`

#### Inherited from

Base.child0

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L47)

___

### child1

• **child1**: ``null`` \| [`Chunk`](chunk_manager_backend.Chunk.md) = `null`

#### Inherited from

Base.child1

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L50)

___

### data

• **data**: `undefined` \| [`AnnotationGeometryData`](annotation_backend.AnnotationGeometryData.md)

#### Defined in

[src/neuroglancer/annotation/backend.ts:74](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/backend.ts#L74)

___

### downloadCancellationToken

• **downloadCancellationToken**: `undefined` \| [`CancellationTokenSource`](util_cancellation.CancellationTokenSource.md) = `undefined`

Cancellation token used to cancel the pending download.  Set to undefined except when state !==
DOWNLOADING.  This should not be accessed by code outside this module.

#### Inherited from

Base.downloadCancellationToken

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:96](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L96)

___

### error

• **error**: `any` = `null`

#### Inherited from

Base.error

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:60](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L60)

___

### isComputational

• **isComputational**: `boolean` = `false`

#### Inherited from

Base.isComputational

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:88](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L88)

___

### key

• **key**: ``null`` \| `string` = `null`

#### Inherited from

Base.key

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:56](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L56)

___

### markGeneration

• **markGeneration**: `number` = `-1`

#### Inherited from

Base.markGeneration

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:63](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L63)

___

### newPriority

• **newPriority**: `number` = `0`

Specifies updated priority within priority tier, not yet reflected in priority queue state.
Only meaningful if newPriorityTier in CHUNK_ORDERED_PRIORITY_TIERS.

#### Inherited from

Base.newPriority

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L75)

___

### newPriorityTier

• **newPriorityTier**: [`ChunkPriorityTier`](../enums/chunk_manager_base.ChunkPriorityTier.md) = `ChunkPriorityTier.RECENT`

Specifies updated priority tier, not yet reflected in priority queue state.

#### Inherited from

Base.newPriorityTier

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:82](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L82)

___

### newlyRequestedToFrontend

• **newlyRequestedToFrontend**: `boolean` = `false`

#### Inherited from

Base.newlyRequestedToFrontend

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:89](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L89)

___

### next0

• **next0**: ``null`` \| [`Chunk`](chunk_manager_backend.Chunk.md) = `null`

#### Inherited from

Base.next0

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L48)

___

### next1

• **next1**: ``null`` \| [`Chunk`](chunk_manager_backend.Chunk.md) = `null`

#### Inherited from

Base.next1

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:51](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L51)

___

### prev0

• **prev0**: ``null`` \| [`Chunk`](chunk_manager_backend.Chunk.md) = `null`

#### Inherited from

Base.prev0

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L49)

___

### prev1

• **prev1**: ``null`` \| [`Chunk`](chunk_manager_backend.Chunk.md) = `null`

#### Inherited from

Base.prev1

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L52)

___

### priority

• **priority**: `number` = `0`

Specifies existing priority within priority tier.  Only meaningful if priorityTier in
CHUNK_ORDERED_PRIORITY_TIERS.  Higher numbers mean higher priority.

#### Inherited from

Base.priority

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:69](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L69)

___

### priorityTier

• **priorityTier**: [`ChunkPriorityTier`](../enums/chunk_manager_base.ChunkPriorityTier.md) = `ChunkPriorityTier.RECENT`

#### Inherited from

Base.priorityTier

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:77](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L77)

___

### requestedToFrontend

• **requestedToFrontend**: `boolean` = `false`

#### Inherited from

Base.requestedToFrontend

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:90](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L90)

___

### source

• **source**: ``null`` \| [`ChunkSource`](chunk_manager_backend.ChunkSource.md) = `null`

#### Inherited from

Base.source

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L54)

___

### prototype

▪ `Static` **prototype**: `any`

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:306

## Accessors

### chunkManager

• `get` **chunkManager**(): [`ChunkManager`](chunk_manager_backend.ChunkManager.md)

#### Returns

[`ChunkManager`](chunk_manager_backend.ChunkManager.md)

#### Inherited from

Base.chunkManager

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:129](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L129)

___

### downloadSlots

• `get` **downloadSlots**(): `number`

#### Returns

`number`

#### Inherited from

Base.downloadSlots

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

Base.downloadSlots

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:201](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L201)

___

### gpuMemoryBytes

• `get` **gpuMemoryBytes**(): `number`

#### Returns

`number`

#### Inherited from

Base.gpuMemoryBytes

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

Base.gpuMemoryBytes

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:184](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L184)

___

### queueManager

• `get` **queueManager**(): [`ChunkQueueManager`](chunk_manager_backend.ChunkQueueManager.md)

#### Returns

[`ChunkQueueManager`](chunk_manager_backend.ChunkQueueManager.md)

#### Inherited from

Base.queueManager

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:133](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L133)

___

### state

• `get` **state**(): [`ChunkState`](../enums/chunk_manager_base.ChunkState.md)

#### Returns

[`ChunkState`](../enums/chunk_manager_base.ChunkState.md)

#### Inherited from

Base.state

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

Base.state

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:158](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L158)

___

### systemMemoryBytes

• `get` **systemMemoryBytes**(): `number`

#### Returns

`number`

#### Inherited from

Base.systemMemoryBytes

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

Base.systemMemoryBytes

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L171)

## Methods

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

Base.dispose

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

Base.downloadFailed

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:137](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L137)

___

### downloadSucceeded

▸ **downloadSucceeded**(): `void`

#### Returns

`void`

#### Overrides

Base.downloadSucceeded

#### Defined in

[src/neuroglancer/annotation/backend.ts:84](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/backend.ts#L84)

___

### freeSystemMemory

▸ **freeSystemMemory**(): `void`

#### Returns

`void`

#### Overrides

Base.freeSystemMemory

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

Base.initialize

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

Base.registerListener

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

Base.serialize

#### Defined in

[src/neuroglancer/annotation/backend.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/backend.ts#L75)

___

### toString

▸ **toString**(): ``null`` \| `string`

#### Returns

``null`` \| `string`

#### Inherited from

Base.toString

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

Base.unregisterListener

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

Base.updatePriorityProperties

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:116](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L116)
