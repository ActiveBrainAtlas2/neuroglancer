[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/frontend\_source](../modules/annotation_frontend_source.md) / MultiscaleAnnotationSource

# Class: MultiscaleAnnotationSource

[annotation/frontend_source](../modules/annotation_frontend_source.md).MultiscaleAnnotationSource

## Hierarchy

- [`SharedObject`](annotation_annotation_layer_state._internal_.SharedObject.md)

  ↳ **`MultiscaleAnnotationSource`**

## Implements

- [`MultiscaleSliceViewChunkSource`](sliceview_frontend.MultiscaleSliceViewChunkSource.md)<[`AnnotationGeometryChunkSource`](annotation_frontend_source.AnnotationGeometryChunkSource.md)\>
- [`AnnotationSourceSignals`](../interfaces/annotation.AnnotationSourceSignals.md)

## Table of contents

### Constructors

- [constructor](annotation_frontend_source.MultiscaleAnnotationSource.md#constructor)

### Properties

- [OPTIONS](annotation_frontend_source.MultiscaleAnnotationSource.md#options)
- [RPC\_TYPE\_ID](annotation_frontend_source.MultiscaleAnnotationSource.md#rpc_type_id)
- [annotationPropertySerializer](annotation_frontend_source.MultiscaleAnnotationSource.md#annotationpropertyserializer)
- [changed](annotation_frontend_source.MultiscaleAnnotationSource.md#changed)
- [childAdded](annotation_frontend_source.MultiscaleAnnotationSource.md#childadded)
- [childDeleted](annotation_frontend_source.MultiscaleAnnotationSource.md#childdeleted)
- [childUpdated](annotation_frontend_source.MultiscaleAnnotationSource.md#childupdated)
- [chunkManager](annotation_frontend_source.MultiscaleAnnotationSource.md#chunkmanager)
- [commitStatus](annotation_frontend_source.MultiscaleAnnotationSource.md#commitstatus)
- [disposedStacks](annotation_frontend_source.MultiscaleAnnotationSource.md#disposedstacks)
- [isOwner](annotation_frontend_source.MultiscaleAnnotationSource.md#isowner)
- [key](annotation_frontend_source.MultiscaleAnnotationSource.md#key)
- [localUpdates](annotation_frontend_source.MultiscaleAnnotationSource.md#localupdates)
- [metadataChunkSource](annotation_frontend_source.MultiscaleAnnotationSource.md#metadatachunksource)
- [numCommitsInProgress](annotation_frontend_source.MultiscaleAnnotationSource.md#numcommitsinprogress)
- [properties](annotation_frontend_source.MultiscaleAnnotationSource.md#properties)
- [rank](annotation_frontend_source.MultiscaleAnnotationSource.md#rank)
- [readonly](annotation_frontend_source.MultiscaleAnnotationSource.md#readonly)
- [refCount](annotation_frontend_source.MultiscaleAnnotationSource.md#refcount)
- [referencedGeneration](annotation_frontend_source.MultiscaleAnnotationSource.md#referencedgeneration)
- [references](annotation_frontend_source.MultiscaleAnnotationSource.md#references)
- [relationships](annotation_frontend_source.MultiscaleAnnotationSource.md#relationships)
- [rpc](annotation_frontend_source.MultiscaleAnnotationSource.md#rpc)
- [rpcId](annotation_frontend_source.MultiscaleAnnotationSource.md#rpcid)
- [segmentFilteredSources](annotation_frontend_source.MultiscaleAnnotationSource.md#segmentfilteredsources)
- [spatiallyIndexedSources](annotation_frontend_source.MultiscaleAnnotationSource.md#spatiallyindexedsources)
- [temporary](annotation_frontend_source.MultiscaleAnnotationSource.md#temporary)
- [unreferencedGeneration](annotation_frontend_source.MultiscaleAnnotationSource.md#unreferencedgeneration)
- [wasDisposed](annotation_frontend_source.MultiscaleAnnotationSource.md#wasdisposed)

### Methods

- [[iterator]](annotation_frontend_source.MultiscaleAnnotationSource.md#[iterator])
- [add](annotation_frontend_source.MultiscaleAnnotationSource.md#add)
- [addCounterpartRef](annotation_frontend_source.MultiscaleAnnotationSource.md#addcounterpartref)
- [addRef](annotation_frontend_source.MultiscaleAnnotationSource.md#addref)
- [applyLocalUpdate](annotation_frontend_source.MultiscaleAnnotationSource.md#applylocalupdate)
- [commit](annotation_frontend_source.MultiscaleAnnotationSource.md#commit)
- [counterpartRefCountReachedZero](annotation_frontend_source.MultiscaleAnnotationSource.md#counterpartrefcountreachedzero)
- [delete](annotation_frontend_source.MultiscaleAnnotationSource.md#delete)
- [dispose](annotation_frontend_source.MultiscaleAnnotationSource.md#dispose)
- [disposed](annotation_frontend_source.MultiscaleAnnotationSource.md#disposed)
- [forEachPossibleChunk](annotation_frontend_source.MultiscaleAnnotationSource.md#foreachpossiblechunk)
- [getNonDummyAnnotationReference](annotation_frontend_source.MultiscaleAnnotationSource.md#getnondummyannotationreference)
- [getReference](annotation_frontend_source.MultiscaleAnnotationSource.md#getreference)
- [getSources](annotation_frontend_source.MultiscaleAnnotationSource.md#getsources)
- [getTopMostAnnotationReference](annotation_frontend_source.MultiscaleAnnotationSource.md#gettopmostannotationreference)
- [handleFailedUpdate](annotation_frontend_source.MultiscaleAnnotationSource.md#handlefailedupdate)
- [handleSuccessfulUpdate](annotation_frontend_source.MultiscaleAnnotationSource.md#handlesuccessfulupdate)
- [hasNonSerializedProperties](annotation_frontend_source.MultiscaleAnnotationSource.md#hasnonserializedproperties)
- [initializeCounterpart](annotation_frontend_source.MultiscaleAnnotationSource.md#initializecounterpart)
- [initializeSharedObject](annotation_frontend_source.MultiscaleAnnotationSource.md#initializesharedobject)
- [makeAllParentsVisible](annotation_frontend_source.MultiscaleAnnotationSource.md#makeallparentsvisible)
- [notifyChanged](annotation_frontend_source.MultiscaleAnnotationSource.md#notifychanged)
- [ownerDispose](annotation_frontend_source.MultiscaleAnnotationSource.md#ownerdispose)
- [refCountReachedZero](annotation_frontend_source.MultiscaleAnnotationSource.md#refcountreachedzero)
- [registerCancellable](annotation_frontend_source.MultiscaleAnnotationSource.md#registercancellable)
- [registerDisposer](annotation_frontend_source.MultiscaleAnnotationSource.md#registerdisposer)
- [registerEventListener](annotation_frontend_source.MultiscaleAnnotationSource.md#registereventlistener)
- [revertLocalUpdate](annotation_frontend_source.MultiscaleAnnotationSource.md#revertlocalupdate)
- [sendCommitRequest](annotation_frontend_source.MultiscaleAnnotationSource.md#sendcommitrequest)
- [unregisterDisposer](annotation_frontend_source.MultiscaleAnnotationSource.md#unregisterdisposer)
- [update](annotation_frontend_source.MultiscaleAnnotationSource.md#update)
- [updateColor](annotation_frontend_source.MultiscaleAnnotationSource.md#updatecolor)
- [updateCommitsInProgress](annotation_frontend_source.MultiscaleAnnotationSource.md#updatecommitsinprogress)
- [updateDescription](annotation_frontend_source.MultiscaleAnnotationSource.md#updatedescription)
- [encodeOptions](annotation_frontend_source.MultiscaleAnnotationSource.md#encodeoptions)

## Constructors

### constructor

• **new MultiscaleAnnotationSource**(`chunkManager`, `options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkManager` | [`ChunkManager`](chunk_manager_frontend.ChunkManager.md) |
| `options` | `Object` |
| `options.properties` | [`Readonly`](../modules/annotation_annotation_layer_state._internal_.md#readonly)<[`AnnotationPropertySpec`](../modules/annotation.md#annotationpropertyspec)\>[] |
| `options.rank` | `number` |
| `options.relationships` | readonly `string`[] |

#### Overrides

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[constructor](annotation_annotation_layer_state._internal_.SharedObject.md#constructor)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:357](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L357)

## Properties

### OPTIONS

• **OPTIONS**: `Object`

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:347](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L347)

___

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

Should be set to a constant specifying the SharedObject type identifier on the prototype of
final derived owner classes.  It is not used on counterpart (non-owner) classes.

#### Inherited from

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[RPC_TYPE_ID](annotation_annotation_layer_state._internal_.SharedObject.md#rpc_type_id)

#### Defined in

[src/neuroglancer/worker_rpc.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L245)

___

### annotationPropertySerializer

• `Readonly` **annotationPropertySerializer**: [`AnnotationPropertySerializer`](annotation.AnnotationPropertySerializer.md)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:356](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L356)

___

### changed

• **changed**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Implementation of

[AnnotationSourceSignals](../interfaces/annotation.AnnotationSourceSignals.md).[changed](../interfaces/annotation.AnnotationSourceSignals.md#changed)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:803](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L803)

___

### childAdded

• **childAdded**: [`Signal`](util_signal.Signal.md)<(`annotation`: [`Annotation`](../modules/annotation.md#annotation)) => `void`\>

#### Implementation of

[AnnotationSourceSignals](../interfaces/annotation.AnnotationSourceSignals.md).[childAdded](../interfaces/annotation.AnnotationSourceSignals.md#childadded)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:806](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L806)

___

### childDeleted

• **childDeleted**: [`Signal`](util_signal.Signal.md)<(`annotationId`: `string`) => `void`\>

#### Implementation of

[AnnotationSourceSignals](../interfaces/annotation.AnnotationSourceSignals.md).[childDeleted](../interfaces/annotation.AnnotationSourceSignals.md#childdeleted)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:808](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L808)

___

### childUpdated

• **childUpdated**: [`Signal`](util_signal.Signal.md)<(`annotation`: [`Annotation`](../modules/annotation.md#annotation)) => `void`\>

#### Implementation of

[AnnotationSourceSignals](../interfaces/annotation.AnnotationSourceSignals.md).[childUpdated](../interfaces/annotation.AnnotationSourceSignals.md#childupdated)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:807](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L807)

___

### chunkManager

• **chunkManager**: [`ChunkManager`](chunk_manager_frontend.ChunkManager.md)

#### Implementation of

MultiscaleSliceViewChunkSource.chunkManager

___

### commitStatus

• `Private` **commitStatus**: `undefined` \| [`StatusMessage`](annotation_frontend_source._internal_.StatusMessage.md)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:746](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L746)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[disposedStacks](annotation_annotation_layer_state._internal_.SharedObject.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Inherited from

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[isOwner](annotation_annotation_layer_state._internal_.SharedObject.md#isowner)

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L171)

___

### key

• **key**: `any`

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:348](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L348)

___

### localUpdates

• **localUpdates**: `Map`<`string`, [`LocalUpdateUndoState`](../interfaces/annotation_frontend_source._internal_.LocalUpdateUndoState.md)\>

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:390](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L390)

___

### metadataChunkSource

• **metadataChunkSource**: [`AnnotationMetadataChunkSource`](annotation_frontend_source.AnnotationMetadataChunkSource.md)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:349](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L349)

___

### numCommitsInProgress

• `Private` **numCommitsInProgress**: `number` = `0`

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:744](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L744)

___

### properties

• `Readonly` **properties**: [`Readonly`](../modules/annotation_annotation_layer_state._internal_.md#readonly)<[`AnnotationPropertySpec`](../modules/annotation.md#annotationpropertyspec)\>[]

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:355](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L355)

___

### rank

• **rank**: `number`

#### Implementation of

MultiscaleSliceViewChunkSource.rank

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:353](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L353)

___

### readonly

• **readonly**: `boolean` = `false`

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:805](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L805)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[refCount](annotation_annotation_layer_state._internal_.SharedObject.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### referencedGeneration

• **referencedGeneration**: `number`

#### Inherited from

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[referencedGeneration](annotation_annotation_layer_state._internal_.SharedObject.md#referencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L173)

___

### references

• **references**: `Map`<`string`, [`AnnotationReference`](annotation.AnnotationReference.md)\>

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:388](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L388)

___

### relationships

• `Readonly` **relationships**: readonly `string`[]

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:354](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L354)

___

### rpc

• **rpc**: ``null`` \| [`RPC`](annotation_annotation_layer_state._internal_.RPC.md) = `null`

#### Inherited from

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[rpc](annotation_annotation_layer_state._internal_.SharedObject.md#rpc)

#### Defined in

[src/neuroglancer/worker_rpc.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L169)

___

### rpcId

• **rpcId**: ``null`` \| `number` = `null`

#### Inherited from

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[rpcId](annotation_annotation_layer_state._internal_.SharedObject.md#rpcid)

#### Defined in

[src/neuroglancer/worker_rpc.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L170)

___

### segmentFilteredSources

• **segmentFilteredSources**: [`AnnotationSubsetGeometryChunkSource`](annotation_frontend_source.AnnotationSubsetGeometryChunkSource.md)[]

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:351](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L351)

___

### spatiallyIndexedSources

• **spatiallyIndexedSources**: `Set`<[`AnnotationGeometryChunkSource`](annotation_frontend_source.AnnotationGeometryChunkSource.md)\>

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:352](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L352)

___

### temporary

• **temporary**: [`AnnotationGeometryChunk`](annotation_frontend_source.AnnotationGeometryChunk.md)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:386](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L386)

___

### unreferencedGeneration

• **unreferencedGeneration**: `number`

#### Inherited from

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[unreferencedGeneration](annotation_annotation_layer_state._internal_.SharedObject.md#unreferencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L172)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[wasDisposed](annotation_annotation_layer_state._internal_.SharedObject.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Methods

### [iterator]

▸ **[iterator]**(): [`Iterator`](../interfaces/annotation_annotation_layer_state._internal_.Iterator.md)<[`Annotation`](../modules/annotation.md#annotation), `any`, `undefined`\>

#### Returns

[`Iterator`](../interfaces/annotation_annotation_layer_state._internal_.Iterator.md)<[`Annotation`](../modules/annotation.md#annotation), `any`, `undefined`\>

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:804](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L804)

___

### add

▸ **add**(`annotation`, `commit?`): [`AnnotationReference`](annotation.AnnotationReference.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `annotation` | [`Annotation`](../modules/annotation.md#annotation) | `undefined` |
| `commit` | `boolean` | `true` |

#### Returns

[`AnnotationReference`](annotation.AnnotationReference.md)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:403](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L403)

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

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[addCounterpartRef](annotation_annotation_layer_state._internal_.SharedObject.md#addcounterpartref)

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`MultiscaleAnnotationSource`](annotation_frontend_source.MultiscaleAnnotationSource.md)

#### Returns

[`MultiscaleAnnotationSource`](annotation_frontend_source.MultiscaleAnnotationSource.md)

#### Inherited from

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[addRef](annotation_annotation_layer_state._internal_.SharedObject.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### applyLocalUpdate

▸ `Private` **applyLocalUpdate**(`reference`, `existing`, `commit`, `newAnnotation`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reference` | [`AnnotationReference`](annotation.AnnotationReference.md) |
| `existing` | `boolean` |
| `commit` | `boolean` |
| `newAnnotation` | ``null`` \| [`Annotation`](../modules/annotation.md#annotation) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:416](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L416)

___

### commit

▸ **commit**(`reference`): `void`

Must be called after `add` or `update` to commit the result.

#### Parameters

| Name | Type |
| :------ | :------ |
| `reference` | [`AnnotationReference`](annotation.AnnotationReference.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:508](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L508)

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

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[counterpartRefCountReachedZero](annotation_annotation_layer_state._internal_.SharedObject.md#counterpartrefcountreachedzero)

#### Defined in

[src/neuroglancer/worker_rpc.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L234)

___

### delete

▸ **delete**(`reference`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reference` | [`AnnotationReference`](annotation.AnnotationReference.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:483](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L483)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[dispose](annotation_annotation_layer_state._internal_.SharedObject.md#dispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[disposed](annotation_annotation_layer_state._internal_.SharedObject.md#disposed)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:748](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L748)

___

### forEachPossibleChunk

▸ `Private` **forEachPossibleChunk**(`annotation`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `annotation` | [`Annotation`](../modules/annotation.md#annotation) |
| `callback` | (`chunk`: [`AnnotationGeometryChunk`](annotation_frontend_source.AnnotationGeometryChunk.md) \| [`AnnotationSubsetGeometryChunk`](annotation_frontend_source.AnnotationSubsetGeometryChunk.md)) => `void` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:612](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L612)

___

### getNonDummyAnnotationReference

▸ **getNonDummyAnnotationReference**(`id`): [`AnnotationReference`](annotation.AnnotationReference.md)

Takes an annotation id as input and returns the parent if the annotation type is line and parent is polygon.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | annotation id |

#### Returns

[`AnnotationReference`](annotation.AnnotationReference.md)

Returns parent annotation id if annotation type is line otherwise returns the current id.

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:536](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L536)

___

### getReference

▸ **getReference**(`id`): [`AnnotationReference`](annotation.AnnotationReference.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

[`AnnotationReference`](annotation.AnnotationReference.md)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:512](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L512)

___

### getSources

▸ **getSources**(`_options`): [`SliceViewSingleResolutionSource`](../interfaces/sliceview_frontend.SliceViewSingleResolutionSource.md)<[`AnnotationGeometryChunkSource`](annotation_frontend_source.AnnotationGeometryChunkSource.md)\>[][]

#### Parameters

| Name | Type |
| :------ | :------ |
| `_options` | [`SliceViewSourceOptions`](../interfaces/sliceview_base.SliceViewSourceOptions.md) |

#### Returns

[`SliceViewSingleResolutionSource`](../interfaces/sliceview_frontend.SliceViewSingleResolutionSource.md)<[`AnnotationGeometryChunkSource`](annotation_frontend_source.AnnotationGeometryChunkSource.md)\>[][]

#### Implementation of

MultiscaleSliceViewChunkSource.getSources

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:381](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L381)

___

### getTopMostAnnotationReference

▸ **getTopMostAnnotationReference**(`id`): [`AnnotationReference`](annotation.AnnotationReference.md)

Takes an annotation id as input and finds the top most ancestor of it.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | annotation id input |

#### Returns

[`AnnotationReference`](annotation.AnnotationReference.md)

Reference to the top most ancestor of it.

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:564](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L564)

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

[src/neuroglancer/annotation/frontend_source.ts:768](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L768)

___

### handleSuccessfulUpdate

▸ **handleSuccessfulUpdate**(`id`, `newAnnotation`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `newAnnotation` | ``null`` \| [`Annotation`](../modules/annotation.md#annotation) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:703](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L703)

___

### hasNonSerializedProperties

▸ **hasNonSerializedProperties**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:377](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L377)

___

### initializeCounterpart

▸ **initializeCounterpart**(`rpc`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](annotation_annotation_layer_state._internal_.RPC.md) |
| `options` | `any` |

#### Returns

`void`

#### Overrides

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[initializeCounterpart](annotation_annotation_layer_state._internal_.SharedObject.md#initializecounterpart)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:392](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L392)

___

### initializeSharedObject

▸ **initializeSharedObject**(`rpc`, `rpcId?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](annotation_annotation_layer_state._internal_.RPC.md) |
| `rpcId` | `number` |

#### Returns

`void`

#### Inherited from

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[initializeSharedObject](annotation_annotation_layer_state._internal_.SharedObject.md#initializesharedobject)

#### Defined in

[src/neuroglancer/worker_rpc.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L175)

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

[src/neuroglancer/annotation/frontend_source.ts:555](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L555)

___

### notifyChanged

▸ `Private` **notifyChanged**(`id`, `annotation`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `annotation` | `undefined` \| [`Annotation`](../modules/annotation.md#annotation) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:492](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L492)

___

### ownerDispose

▸ `Protected` **ownerDispose**(): `void`

Precondition: this.isOwner === true.

#### Returns

`void`

#### Inherited from

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[ownerDispose](annotation_annotation_layer_state._internal_.SharedObject.md#ownerdispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L219)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[refCountReachedZero](annotation_annotation_layer_state._internal_.SharedObject.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/worker_rpc.ts:203](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L203)

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

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[registerCancellable](annotation_annotation_layer_state._internal_.SharedObject.md#registercancellable)

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L100)

___

### registerDisposer

▸ **registerDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/util_disposable.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[registerDisposer](annotation_annotation_layer_state._internal_.SharedObject.md#registerdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L76)

___

### registerEventListener

▸ **registerEventListener**(`target`, `type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EventTarget`](../modules/annotation_annotation_layer_state._internal_.md#eventtarget) |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/annotation_annotation_layer_state._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](../interfaces/annotation_annotation_layer_state._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[registerEventListener](annotation_annotation_layer_state._internal_.SharedObject.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L95)

___

### revertLocalUpdate

▸ `Private` **revertLocalUpdate**(`localUpdate`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `localUpdate` | [`LocalUpdateUndoState`](../interfaces/annotation_frontend_source._internal_.LocalUpdateUndoState.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:779](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L779)

___

### sendCommitRequest

▸ `Private` **sendCommitRequest**(`localUpdate`, `newAnnotation`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `localUpdate` | [`LocalUpdateUndoState`](../interfaces/annotation_frontend_source._internal_.LocalUpdateUndoState.md) |
| `newAnnotation` | ``null`` \| [`Annotation`](../modules/annotation.md#annotation) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:473](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L473)

___

### unregisterDisposer

▸ **unregisterDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/util_disposable.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[unregisterDisposer](annotation_annotation_layer_state._internal_.SharedObject.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)

___

### update

▸ **update**(`reference`, `newAnnotation`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reference` | [`AnnotationReference`](annotation.AnnotationReference.md) |
| `newAnnotation` | [`Annotation`](../modules/annotation.md#annotation) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:487](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L487)

___

### updateColor

▸ **updateColor**(`reference`, `color`): `void`

Takes a annotation reference and update the color of that annotation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `reference` | [`AnnotationReference`](annotation.AnnotationReference.md) |
| `color` | `number` |

#### Returns

`void`

void

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:583](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L583)

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

[src/neuroglancer/annotation/frontend_source.ts:755](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L755)

___

### updateDescription

▸ **updateDescription**(`reference`, `description`): `void`

Takes the annotation reference and updates its description with new string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `reference` | [`AnnotationReference`](annotation.AnnotationReference.md) |
| `description` | `undefined` \| `string` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:606](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L606)

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

[src/neuroglancer/annotation/frontend_source.ts:699](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L699)
