[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/annotation/frontend\_source](../modules/neuroglancer_annotation_frontend_source.md) / MultiscaleAnnotationSource

# Class: MultiscaleAnnotationSource

[neuroglancer/annotation/frontend_source](../modules/neuroglancer_annotation_frontend_source.md).MultiscaleAnnotationSource

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

- [`SharedObject`](neuroglancer_worker_rpc.SharedObject.md)

  ↳ **`MultiscaleAnnotationSource`**

## Implements

- [`MultiscaleSliceViewChunkSource`](neuroglancer_sliceview_frontend.MultiscaleSliceViewChunkSource.md)<[`AnnotationGeometryChunkSource`](neuroglancer_annotation_frontend_source.AnnotationGeometryChunkSource.md)\>
- [`AnnotationSourceSignals`](../interfaces/neuroglancer_annotation.AnnotationSourceSignals.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_annotation_frontend_source.MultiscaleAnnotationSource.md#constructor)

### Properties

- [OPTIONS](neuroglancer_annotation_frontend_source.MultiscaleAnnotationSource.md#options)
- [RPC\_TYPE\_ID](neuroglancer_annotation_frontend_source.MultiscaleAnnotationSource.md#rpc_type_id)
- [annotationPropertySerializer](neuroglancer_annotation_frontend_source.MultiscaleAnnotationSource.md#annotationpropertyserializer)
- [changed](neuroglancer_annotation_frontend_source.MultiscaleAnnotationSource.md#changed)
- [childAdded](neuroglancer_annotation_frontend_source.MultiscaleAnnotationSource.md#childadded)
- [childDeleted](neuroglancer_annotation_frontend_source.MultiscaleAnnotationSource.md#childdeleted)
- [childUpdated](neuroglancer_annotation_frontend_source.MultiscaleAnnotationSource.md#childupdated)
- [chunkManager](neuroglancer_annotation_frontend_source.MultiscaleAnnotationSource.md#chunkmanager)
- [commitStatus](neuroglancer_annotation_frontend_source.MultiscaleAnnotationSource.md#commitstatus)
- [disposedStacks](neuroglancer_annotation_frontend_source.MultiscaleAnnotationSource.md#disposedstacks)
- [isOwner](neuroglancer_annotation_frontend_source.MultiscaleAnnotationSource.md#isowner)
- [key](neuroglancer_annotation_frontend_source.MultiscaleAnnotationSource.md#key)
- [localUpdates](neuroglancer_annotation_frontend_source.MultiscaleAnnotationSource.md#localupdates)
- [metadataChunkSource](neuroglancer_annotation_frontend_source.MultiscaleAnnotationSource.md#metadatachunksource)
- [numCommitsInProgress](neuroglancer_annotation_frontend_source.MultiscaleAnnotationSource.md#numcommitsinprogress)
- [properties](neuroglancer_annotation_frontend_source.MultiscaleAnnotationSource.md#properties)
- [rank](neuroglancer_annotation_frontend_source.MultiscaleAnnotationSource.md#rank)
- [readonly](neuroglancer_annotation_frontend_source.MultiscaleAnnotationSource.md#readonly)
- [refCount](neuroglancer_annotation_frontend_source.MultiscaleAnnotationSource.md#refcount)
- [referencedGeneration](neuroglancer_annotation_frontend_source.MultiscaleAnnotationSource.md#referencedgeneration)
- [references](neuroglancer_annotation_frontend_source.MultiscaleAnnotationSource.md#references)
- [relationships](neuroglancer_annotation_frontend_source.MultiscaleAnnotationSource.md#relationships)
- [rpc](neuroglancer_annotation_frontend_source.MultiscaleAnnotationSource.md#rpc)
- [rpcId](neuroglancer_annotation_frontend_source.MultiscaleAnnotationSource.md#rpcid)
- [segmentFilteredSources](neuroglancer_annotation_frontend_source.MultiscaleAnnotationSource.md#segmentfilteredsources)
- [spatiallyIndexedSources](neuroglancer_annotation_frontend_source.MultiscaleAnnotationSource.md#spatiallyindexedsources)
- [temporary](neuroglancer_annotation_frontend_source.MultiscaleAnnotationSource.md#temporary)
- [unreferencedGeneration](neuroglancer_annotation_frontend_source.MultiscaleAnnotationSource.md#unreferencedgeneration)
- [wasDisposed](neuroglancer_annotation_frontend_source.MultiscaleAnnotationSource.md#wasdisposed)

### Methods

- [[iterator]](neuroglancer_annotation_frontend_source.MultiscaleAnnotationSource.md#[iterator])
- [add](neuroglancer_annotation_frontend_source.MultiscaleAnnotationSource.md#add)
- [addCounterpartRef](neuroglancer_annotation_frontend_source.MultiscaleAnnotationSource.md#addcounterpartref)
- [addRef](neuroglancer_annotation_frontend_source.MultiscaleAnnotationSource.md#addref)
- [applyLocalUpdate](neuroglancer_annotation_frontend_source.MultiscaleAnnotationSource.md#applylocalupdate)
- [commit](neuroglancer_annotation_frontend_source.MultiscaleAnnotationSource.md#commit)
- [counterpartRefCountReachedZero](neuroglancer_annotation_frontend_source.MultiscaleAnnotationSource.md#counterpartrefcountreachedzero)
- [delete](neuroglancer_annotation_frontend_source.MultiscaleAnnotationSource.md#delete)
- [dispose](neuroglancer_annotation_frontend_source.MultiscaleAnnotationSource.md#dispose)
- [disposed](neuroglancer_annotation_frontend_source.MultiscaleAnnotationSource.md#disposed)
- [forEachPossibleChunk](neuroglancer_annotation_frontend_source.MultiscaleAnnotationSource.md#foreachpossiblechunk)
- [getNonDummyAnnotationReference](neuroglancer_annotation_frontend_source.MultiscaleAnnotationSource.md#getnondummyannotationreference)
- [getReference](neuroglancer_annotation_frontend_source.MultiscaleAnnotationSource.md#getreference)
- [getSources](neuroglancer_annotation_frontend_source.MultiscaleAnnotationSource.md#getsources)
- [getTopMostAnnotationReference](neuroglancer_annotation_frontend_source.MultiscaleAnnotationSource.md#gettopmostannotationreference)
- [handleFailedUpdate](neuroglancer_annotation_frontend_source.MultiscaleAnnotationSource.md#handlefailedupdate)
- [handleSuccessfulUpdate](neuroglancer_annotation_frontend_source.MultiscaleAnnotationSource.md#handlesuccessfulupdate)
- [hasNonSerializedProperties](neuroglancer_annotation_frontend_source.MultiscaleAnnotationSource.md#hasnonserializedproperties)
- [initializeCounterpart](neuroglancer_annotation_frontend_source.MultiscaleAnnotationSource.md#initializecounterpart)
- [initializeSharedObject](neuroglancer_annotation_frontend_source.MultiscaleAnnotationSource.md#initializesharedobject)
- [makeAllParentsVisible](neuroglancer_annotation_frontend_source.MultiscaleAnnotationSource.md#makeallparentsvisible)
- [notifyChanged](neuroglancer_annotation_frontend_source.MultiscaleAnnotationSource.md#notifychanged)
- [ownerDispose](neuroglancer_annotation_frontend_source.MultiscaleAnnotationSource.md#ownerdispose)
- [refCountReachedZero](neuroglancer_annotation_frontend_source.MultiscaleAnnotationSource.md#refcountreachedzero)
- [registerCancellable](neuroglancer_annotation_frontend_source.MultiscaleAnnotationSource.md#registercancellable)
- [registerDisposer](neuroglancer_annotation_frontend_source.MultiscaleAnnotationSource.md#registerdisposer)
- [registerEventListener](neuroglancer_annotation_frontend_source.MultiscaleAnnotationSource.md#registereventlistener)
- [revertLocalUpdate](neuroglancer_annotation_frontend_source.MultiscaleAnnotationSource.md#revertlocalupdate)
- [sendCommitRequest](neuroglancer_annotation_frontend_source.MultiscaleAnnotationSource.md#sendcommitrequest)
- [unregisterDisposer](neuroglancer_annotation_frontend_source.MultiscaleAnnotationSource.md#unregisterdisposer)
- [update](neuroglancer_annotation_frontend_source.MultiscaleAnnotationSource.md#update)
- [updateColor](neuroglancer_annotation_frontend_source.MultiscaleAnnotationSource.md#updatecolor)
- [updateCommitsInProgress](neuroglancer_annotation_frontend_source.MultiscaleAnnotationSource.md#updatecommitsinprogress)
- [updateDescription](neuroglancer_annotation_frontend_source.MultiscaleAnnotationSource.md#updatedescription)
- [encodeOptions](neuroglancer_annotation_frontend_source.MultiscaleAnnotationSource.md#encodeoptions)

## Constructors

### constructor

• **new MultiscaleAnnotationSource**(`chunkManager`, `options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkManager` | [`ChunkManager`](neuroglancer_chunk_manager_frontend.ChunkManager.md) |
| `options` | `Object` |
| `options.properties` | [`Readonly`](../modules/neuroglancer_annotation_frontend_source._internal_.md#readonly)<[`AnnotationPropertySpec`](../modules/neuroglancer_annotation.md#annotationpropertyspec)\>[] |
| `options.rank` | `number` |
| `options.relationships` | readonly `string`[] |

#### Overrides

[SharedObject](neuroglancer_worker_rpc.SharedObject.md).[constructor](neuroglancer_worker_rpc.SharedObject.md#constructor)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:357](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/frontend_source.ts#L357)

## Properties

### OPTIONS

• **OPTIONS**: `Object`

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:347](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/frontend_source.ts#L347)

___

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

Should be set to a constant specifying the SharedObject type identifier on the prototype of
final derived owner classes.  It is not used on counterpart (non-owner) classes.

#### Inherited from

[SharedObject](neuroglancer_worker_rpc.SharedObject.md).[RPC_TYPE_ID](neuroglancer_worker_rpc.SharedObject.md#rpc_type_id)

#### Defined in

[src/neuroglancer/worker_rpc.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L245)

___

### annotationPropertySerializer

• `Readonly` **annotationPropertySerializer**: [`AnnotationPropertySerializer`](neuroglancer_annotation.AnnotationPropertySerializer.md)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:356](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/frontend_source.ts#L356)

___

### changed

• **changed**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Implementation of

[AnnotationSourceSignals](../interfaces/neuroglancer_annotation.AnnotationSourceSignals.md).[changed](../interfaces/neuroglancer_annotation.AnnotationSourceSignals.md#changed)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:803](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/frontend_source.ts#L803)

___

### childAdded

• **childAdded**: [`Signal`](neuroglancer_util_signal.Signal.md)<(`annotation`: [`Annotation`](../modules/neuroglancer_annotation.md#annotation)) => `void`\>

#### Implementation of

[AnnotationSourceSignals](../interfaces/neuroglancer_annotation.AnnotationSourceSignals.md).[childAdded](../interfaces/neuroglancer_annotation.AnnotationSourceSignals.md#childadded)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:806](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/frontend_source.ts#L806)

___

### childDeleted

• **childDeleted**: [`Signal`](neuroglancer_util_signal.Signal.md)<(`annotationId`: `string`) => `void`\>

#### Implementation of

[AnnotationSourceSignals](../interfaces/neuroglancer_annotation.AnnotationSourceSignals.md).[childDeleted](../interfaces/neuroglancer_annotation.AnnotationSourceSignals.md#childdeleted)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:808](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/frontend_source.ts#L808)

___

### childUpdated

• **childUpdated**: [`Signal`](neuroglancer_util_signal.Signal.md)<(`annotation`: [`Annotation`](../modules/neuroglancer_annotation.md#annotation)) => `void`\>

#### Implementation of

[AnnotationSourceSignals](../interfaces/neuroglancer_annotation.AnnotationSourceSignals.md).[childUpdated](../interfaces/neuroglancer_annotation.AnnotationSourceSignals.md#childupdated)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:807](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/frontend_source.ts#L807)

___

### chunkManager

• **chunkManager**: [`ChunkManager`](neuroglancer_chunk_manager_frontend.ChunkManager.md)

#### Implementation of

[MultiscaleSliceViewChunkSource](neuroglancer_sliceview_frontend.MultiscaleSliceViewChunkSource.md).[chunkManager](neuroglancer_sliceview_frontend.MultiscaleSliceViewChunkSource.md#chunkmanager)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:357](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/frontend_source.ts#L357)

___

### commitStatus

• `Private` **commitStatus**: `undefined` \| [`StatusMessage`](neuroglancer_status.StatusMessage.md)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:746](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/frontend_source.ts#L746)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[SharedObject](neuroglancer_worker_rpc.SharedObject.md).[disposedStacks](neuroglancer_worker_rpc.SharedObject.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Inherited from

[SharedObject](neuroglancer_worker_rpc.SharedObject.md).[isOwner](neuroglancer_worker_rpc.SharedObject.md#isowner)

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L171)

___

### key

• **key**: `any`

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:348](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/frontend_source.ts#L348)

___

### localUpdates

• **localUpdates**: `Map`<`string`, [`LocalUpdateUndoState`](../interfaces/neuroglancer_annotation_frontend_source._internal_.LocalUpdateUndoState.md)\>

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:390](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/frontend_source.ts#L390)

___

### metadataChunkSource

• **metadataChunkSource**: [`AnnotationMetadataChunkSource`](neuroglancer_annotation_frontend_source.AnnotationMetadataChunkSource.md)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:349](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/frontend_source.ts#L349)

___

### numCommitsInProgress

• `Private` **numCommitsInProgress**: `number` = `0`

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:744](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/frontend_source.ts#L744)

___

### properties

• `Readonly` **properties**: [`Readonly`](../modules/neuroglancer_annotation_frontend_source._internal_.md#readonly)<[`AnnotationPropertySpec`](../modules/neuroglancer_annotation.md#annotationpropertyspec)\>[]

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:355](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/frontend_source.ts#L355)

___

### rank

• **rank**: `number`

#### Implementation of

[MultiscaleSliceViewChunkSource](neuroglancer_sliceview_frontend.MultiscaleSliceViewChunkSource.md).[rank](neuroglancer_sliceview_frontend.MultiscaleSliceViewChunkSource.md#rank)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:353](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/frontend_source.ts#L353)

___

### readonly

• **readonly**: `boolean` = `false`

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:805](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/frontend_source.ts#L805)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[SharedObject](neuroglancer_worker_rpc.SharedObject.md).[refCount](neuroglancer_worker_rpc.SharedObject.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### referencedGeneration

• **referencedGeneration**: `number`

#### Inherited from

[SharedObject](neuroglancer_worker_rpc.SharedObject.md).[referencedGeneration](neuroglancer_worker_rpc.SharedObject.md#referencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L173)

___

### references

• **references**: `Map`<`string`, [`AnnotationReference`](neuroglancer_annotation.AnnotationReference.md)\>

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:388](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/frontend_source.ts#L388)

___

### relationships

• `Readonly` **relationships**: readonly `string`[]

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:354](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/frontend_source.ts#L354)

___

### rpc

• **rpc**: ``null`` \| [`RPC`](neuroglancer_worker_rpc.RPC.md) = `null`

#### Inherited from

[SharedObject](neuroglancer_worker_rpc.SharedObject.md).[rpc](neuroglancer_worker_rpc.SharedObject.md#rpc)

#### Defined in

[src/neuroglancer/worker_rpc.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L169)

___

### rpcId

• **rpcId**: ``null`` \| `number` = `null`

#### Inherited from

[SharedObject](neuroglancer_worker_rpc.SharedObject.md).[rpcId](neuroglancer_worker_rpc.SharedObject.md#rpcid)

#### Defined in

[src/neuroglancer/worker_rpc.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L170)

___

### segmentFilteredSources

• **segmentFilteredSources**: [`AnnotationSubsetGeometryChunkSource`](neuroglancer_annotation_frontend_source.AnnotationSubsetGeometryChunkSource.md)[]

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:351](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/frontend_source.ts#L351)

___

### spatiallyIndexedSources

• **spatiallyIndexedSources**: `Set`<[`AnnotationGeometryChunkSource`](neuroglancer_annotation_frontend_source.AnnotationGeometryChunkSource.md)\>

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:352](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/frontend_source.ts#L352)

___

### temporary

• **temporary**: [`AnnotationGeometryChunk`](neuroglancer_annotation_frontend_source.AnnotationGeometryChunk.md)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:386](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/frontend_source.ts#L386)

___

### unreferencedGeneration

• **unreferencedGeneration**: `number`

#### Inherited from

[SharedObject](neuroglancer_worker_rpc.SharedObject.md).[unreferencedGeneration](neuroglancer_worker_rpc.SharedObject.md#unreferencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L172)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[SharedObject](neuroglancer_worker_rpc.SharedObject.md).[wasDisposed](neuroglancer_worker_rpc.SharedObject.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Methods

### [iterator]

▸ **[iterator]**(): [`Iterator`](../interfaces/main_module._internal_.Iterator.md)<[`Annotation`](../modules/neuroglancer_annotation.md#annotation), `any`, `undefined`\>

#### Returns

[`Iterator`](../interfaces/main_module._internal_.Iterator.md)<[`Annotation`](../modules/neuroglancer_annotation.md#annotation), `any`, `undefined`\>

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:804](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/frontend_source.ts#L804)

___

### add

▸ **add**(`annotation`, `commit?`): [`AnnotationReference`](neuroglancer_annotation.AnnotationReference.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `annotation` | [`Annotation`](../modules/neuroglancer_annotation.md#annotation) | `undefined` |
| `commit` | `boolean` | `true` |

#### Returns

[`AnnotationReference`](neuroglancer_annotation.AnnotationReference.md)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:403](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/frontend_source.ts#L403)

___

### addCounterpartRef

▸ **addCounterpartRef**(): `Object`

Precondition: this.isOwner === true.

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `gen` | `number` |
| `id` | ``null`` \| `number` |

#### Inherited from

[SharedObject](neuroglancer_worker_rpc.SharedObject.md).[addCounterpartRef](neuroglancer_worker_rpc.SharedObject.md#addcounterpartref)

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`MultiscaleAnnotationSource`](neuroglancer_annotation_frontend_source.MultiscaleAnnotationSource.md)

#### Returns

[`MultiscaleAnnotationSource`](neuroglancer_annotation_frontend_source.MultiscaleAnnotationSource.md)

#### Inherited from

[SharedObject](neuroglancer_worker_rpc.SharedObject.md).[addRef](neuroglancer_worker_rpc.SharedObject.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

___

### applyLocalUpdate

▸ `Private` **applyLocalUpdate**(`reference`, `existing`, `commit`, `newAnnotation`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reference` | [`AnnotationReference`](neuroglancer_annotation.AnnotationReference.md) |
| `existing` | `boolean` |
| `commit` | `boolean` |
| `newAnnotation` | ``null`` \| [`Annotation`](../modules/neuroglancer_annotation.md#annotation) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:416](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/frontend_source.ts#L416)

___

### commit

▸ **commit**(`reference`): `void`

Must be called after `add` or `update` to commit the result.

#### Parameters

| Name | Type |
| :------ | :------ |
| `reference` | [`AnnotationReference`](neuroglancer_annotation.AnnotationReference.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:508](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/frontend_source.ts#L508)

___

### counterpartRefCountReachedZero

▸ **counterpartRefCountReachedZero**(`generation`): `void`

Precondition: this.isOwner === true.

This should be called when the counterpart's refCount is decremented and reaches zero.

#### Parameters

| Name | Type |
| :------ | :------ |
| `generation` | `number` |

#### Returns

`void`

#### Inherited from

[SharedObject](neuroglancer_worker_rpc.SharedObject.md).[counterpartRefCountReachedZero](neuroglancer_worker_rpc.SharedObject.md#counterpartrefcountreachedzero)

#### Defined in

[src/neuroglancer/worker_rpc.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L234)

___

### delete

▸ **delete**(`reference`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reference` | [`AnnotationReference`](neuroglancer_annotation.AnnotationReference.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:483](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/frontend_source.ts#L483)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[SharedObject](neuroglancer_worker_rpc.SharedObject.md).[dispose](neuroglancer_worker_rpc.SharedObject.md#dispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

[SharedObject](neuroglancer_worker_rpc.SharedObject.md).[disposed](neuroglancer_worker_rpc.SharedObject.md#disposed)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:748](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/frontend_source.ts#L748)

___

### forEachPossibleChunk

▸ `Private` **forEachPossibleChunk**(`annotation`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `annotation` | [`Annotation`](../modules/neuroglancer_annotation.md#annotation) |
| `callback` | (`chunk`: [`AnnotationGeometryChunk`](neuroglancer_annotation_frontend_source.AnnotationGeometryChunk.md) \| [`AnnotationSubsetGeometryChunk`](neuroglancer_annotation_frontend_source.AnnotationSubsetGeometryChunk.md)) => `void` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:612](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/frontend_source.ts#L612)

___

### getNonDummyAnnotationReference

▸ **getNonDummyAnnotationReference**(`id`): [`AnnotationReference`](neuroglancer_annotation.AnnotationReference.md)

Takes an annotation id as input and returns the parent if the annotation type is line and parent is polygon.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | annotation id |

#### Returns

[`AnnotationReference`](neuroglancer_annotation.AnnotationReference.md)

Returns parent annotation id if annotation type is line otherwise returns the current id.

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:536](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/frontend_source.ts#L536)

___

### getReference

▸ **getReference**(`id`): [`AnnotationReference`](neuroglancer_annotation.AnnotationReference.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

[`AnnotationReference`](neuroglancer_annotation.AnnotationReference.md)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:512](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/frontend_source.ts#L512)

___

### getSources

▸ **getSources**(`_options`): [`SliceViewSingleResolutionSource`](../interfaces/neuroglancer_sliceview_frontend.SliceViewSingleResolutionSource.md)<[`AnnotationGeometryChunkSource`](neuroglancer_annotation_frontend_source.AnnotationGeometryChunkSource.md)\>[][]

#### Parameters

| Name | Type |
| :------ | :------ |
| `_options` | [`SliceViewSourceOptions`](../interfaces/neuroglancer_sliceview_base.SliceViewSourceOptions.md) |

#### Returns

[`SliceViewSingleResolutionSource`](../interfaces/neuroglancer_sliceview_frontend.SliceViewSingleResolutionSource.md)<[`AnnotationGeometryChunkSource`](neuroglancer_annotation_frontend_source.AnnotationGeometryChunkSource.md)\>[][]

Chunk sources for each scale, ordered by increasing minVoxelSize.  Outer array indexes
over alternative chunk orientations.  The inner array indexes over scale.

Every chunk source must have rank equal to `this.rank`.

#### Implementation of

[MultiscaleSliceViewChunkSource](neuroglancer_sliceview_frontend.MultiscaleSliceViewChunkSource.md).[getSources](neuroglancer_sliceview_frontend.MultiscaleSliceViewChunkSource.md#getsources)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:381](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/frontend_source.ts#L381)

___

### getTopMostAnnotationReference

▸ **getTopMostAnnotationReference**(`id`): [`AnnotationReference`](neuroglancer_annotation.AnnotationReference.md)

Takes an annotation id as input and finds the top most ancestor of it.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | annotation id input |

#### Returns

[`AnnotationReference`](neuroglancer_annotation.AnnotationReference.md)

Reference to the top most ancestor of it.

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:564](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/frontend_source.ts#L564)

___

### handleFailedUpdate

▸ **handleFailedUpdate**(`id`, `message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `message` | `string` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:768](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/frontend_source.ts#L768)

___

### handleSuccessfulUpdate

▸ **handleSuccessfulUpdate**(`id`, `newAnnotation`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `newAnnotation` | ``null`` \| [`Annotation`](../modules/neuroglancer_annotation.md#annotation) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:703](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/frontend_source.ts#L703)

___

### hasNonSerializedProperties

▸ **hasNonSerializedProperties**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:377](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/frontend_source.ts#L377)

___

### initializeCounterpart

▸ **initializeCounterpart**(`rpc`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](neuroglancer_worker_rpc.RPC.md) |
| `options` | `any` |

#### Returns

`void`

#### Overrides

[SharedObject](neuroglancer_worker_rpc.SharedObject.md).[initializeCounterpart](neuroglancer_worker_rpc.SharedObject.md#initializecounterpart)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:392](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/frontend_source.ts#L392)

___

### initializeSharedObject

▸ **initializeSharedObject**(`rpc`, `rpcId?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](neuroglancer_worker_rpc.RPC.md) |
| `rpcId` | `number` |

#### Returns

`void`

#### Inherited from

[SharedObject](neuroglancer_worker_rpc.SharedObject.md).[initializeSharedObject](neuroglancer_worker_rpc.SharedObject.md#initializesharedobject)

#### Defined in

[src/neuroglancer/worker_rpc.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L175)

___

### makeAllParentsVisible

▸ **makeAllParentsVisible**(`annotationId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `annotationId` | `string` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:555](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/frontend_source.ts#L555)

___

### notifyChanged

▸ `Private` **notifyChanged**(`id`, `annotation`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `annotation` | `undefined` \| [`Annotation`](../modules/neuroglancer_annotation.md#annotation) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:492](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/frontend_source.ts#L492)

___

### ownerDispose

▸ `Protected` **ownerDispose**(): `void`

Precondition: this.isOwner === true.

#### Returns

`void`

#### Inherited from

[SharedObject](neuroglancer_worker_rpc.SharedObject.md).[ownerDispose](neuroglancer_worker_rpc.SharedObject.md#ownerdispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L219)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[SharedObject](neuroglancer_worker_rpc.SharedObject.md).[refCountReachedZero](neuroglancer_worker_rpc.SharedObject.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/worker_rpc.ts:203](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L203)

___

### registerCancellable

▸ **registerCancellable**<`T`\>(`cancellable`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cancellable` | `T` |

#### Returns

`T`

#### Inherited from

[SharedObject](neuroglancer_worker_rpc.SharedObject.md).[registerCancellable](neuroglancer_worker_rpc.SharedObject.md#registercancellable)

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L100)

___

### registerDisposer

▸ **registerDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/neuroglancer_util_disposable.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[SharedObject](neuroglancer_worker_rpc.SharedObject.md).[registerDisposer](neuroglancer_worker_rpc.SharedObject.md#registerdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L76)

___

### registerEventListener

▸ **registerEventListener**(`target`, `type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EventTarget`](../modules/main_module._internal_.md#eventtarget) |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/main_module._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](../interfaces/main_module._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

[SharedObject](neuroglancer_worker_rpc.SharedObject.md).[registerEventListener](neuroglancer_worker_rpc.SharedObject.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L95)

___

### revertLocalUpdate

▸ `Private` **revertLocalUpdate**(`localUpdate`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `localUpdate` | [`LocalUpdateUndoState`](../interfaces/neuroglancer_annotation_frontend_source._internal_.LocalUpdateUndoState.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:779](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/frontend_source.ts#L779)

___

### sendCommitRequest

▸ `Private` **sendCommitRequest**(`localUpdate`, `newAnnotation`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `localUpdate` | [`LocalUpdateUndoState`](../interfaces/neuroglancer_annotation_frontend_source._internal_.LocalUpdateUndoState.md) |
| `newAnnotation` | ``null`` \| [`Annotation`](../modules/neuroglancer_annotation.md#annotation) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:473](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/frontend_source.ts#L473)

___

### unregisterDisposer

▸ **unregisterDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/neuroglancer_util_disposable.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[SharedObject](neuroglancer_worker_rpc.SharedObject.md).[unregisterDisposer](neuroglancer_worker_rpc.SharedObject.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L85)

___

### update

▸ **update**(`reference`, `newAnnotation`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reference` | [`AnnotationReference`](neuroglancer_annotation.AnnotationReference.md) |
| `newAnnotation` | [`Annotation`](../modules/neuroglancer_annotation.md#annotation) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:487](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/frontend_source.ts#L487)

___

### updateColor

▸ **updateColor**(`reference`, `color`): `void`

Takes a annotation reference and update the color of that annotation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `reference` | [`AnnotationReference`](neuroglancer_annotation.AnnotationReference.md) |
| `color` | `number` |

#### Returns

`void`

void

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:583](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/frontend_source.ts#L583)

___

### updateCommitsInProgress

▸ `Private` **updateCommitsInProgress**(`amount`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:755](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/frontend_source.ts#L755)

___

### updateDescription

▸ **updateDescription**(`reference`, `description`): `void`

Takes the annotation reference and updates its description with new string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `reference` | [`AnnotationReference`](neuroglancer_annotation.AnnotationReference.md) |
| `description` | `undefined` \| `string` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:606](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/frontend_source.ts#L606)

___

### encodeOptions

▸ `Static` **encodeOptions**(`_options`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_options` | `Object` |

#### Returns

`Object`

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:699](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/frontend_source.ts#L699)
