[neuroglancer](../README.md) / [Modules](../modules.md) / [image\_user\_layer](../modules/image_user_layer.md) / [<internal\>](../modules/image_user_layer._internal_.md) / MultiscaleAnnotationSource

# Class: MultiscaleAnnotationSource

[image_user_layer](../modules/image_user_layer.md).[<internal>](../modules/image_user_layer._internal_.md).MultiscaleAnnotationSource

## Hierarchy

- [`SharedObject`](worker_rpc.SharedObject.md)

  ↳ **`MultiscaleAnnotationSource`**

## Implements

- [`MultiscaleSliceViewChunkSource`](data_panel_layout._internal_.MultiscaleSliceViewChunkSource.md)<[`AnnotationGeometryChunkSource`](image_user_layer._internal_.AnnotationGeometryChunkSource.md)\>
- [`AnnotationSourceSignals`](../interfaces/image_user_layer._internal_.AnnotationSourceSignals.md)

## Table of contents

### Constructors

- [constructor](image_user_layer._internal_.MultiscaleAnnotationSource.md#constructor)

### Properties

- [OPTIONS](image_user_layer._internal_.MultiscaleAnnotationSource.md#options)
- [RPC\_TYPE\_ID](image_user_layer._internal_.MultiscaleAnnotationSource.md#rpc_type_id)
- [annotationPropertySerializer](image_user_layer._internal_.MultiscaleAnnotationSource.md#annotationpropertyserializer)
- [changed](image_user_layer._internal_.MultiscaleAnnotationSource.md#changed)
- [childAdded](image_user_layer._internal_.MultiscaleAnnotationSource.md#childadded)
- [childDeleted](image_user_layer._internal_.MultiscaleAnnotationSource.md#childdeleted)
- [childUpdated](image_user_layer._internal_.MultiscaleAnnotationSource.md#childupdated)
- [chunkManager](image_user_layer._internal_.MultiscaleAnnotationSource.md#chunkmanager)
- [commitStatus](image_user_layer._internal_.MultiscaleAnnotationSource.md#commitstatus)
- [disposedStacks](image_user_layer._internal_.MultiscaleAnnotationSource.md#disposedstacks)
- [isOwner](image_user_layer._internal_.MultiscaleAnnotationSource.md#isowner)
- [key](image_user_layer._internal_.MultiscaleAnnotationSource.md#key)
- [localUpdates](image_user_layer._internal_.MultiscaleAnnotationSource.md#localupdates)
- [metadataChunkSource](image_user_layer._internal_.MultiscaleAnnotationSource.md#metadatachunksource)
- [numCommitsInProgress](image_user_layer._internal_.MultiscaleAnnotationSource.md#numcommitsinprogress)
- [properties](image_user_layer._internal_.MultiscaleAnnotationSource.md#properties)
- [rank](image_user_layer._internal_.MultiscaleAnnotationSource.md#rank)
- [readonly](image_user_layer._internal_.MultiscaleAnnotationSource.md#readonly)
- [refCount](image_user_layer._internal_.MultiscaleAnnotationSource.md#refcount)
- [referencedGeneration](image_user_layer._internal_.MultiscaleAnnotationSource.md#referencedgeneration)
- [references](image_user_layer._internal_.MultiscaleAnnotationSource.md#references)
- [relationships](image_user_layer._internal_.MultiscaleAnnotationSource.md#relationships)
- [rpc](image_user_layer._internal_.MultiscaleAnnotationSource.md#rpc)
- [rpcId](image_user_layer._internal_.MultiscaleAnnotationSource.md#rpcid)
- [segmentFilteredSources](image_user_layer._internal_.MultiscaleAnnotationSource.md#segmentfilteredsources)
- [spatiallyIndexedSources](image_user_layer._internal_.MultiscaleAnnotationSource.md#spatiallyindexedsources)
- [temporary](image_user_layer._internal_.MultiscaleAnnotationSource.md#temporary)
- [unreferencedGeneration](image_user_layer._internal_.MultiscaleAnnotationSource.md#unreferencedgeneration)
- [wasDisposed](image_user_layer._internal_.MultiscaleAnnotationSource.md#wasdisposed)

### Methods

- [[iterator]](image_user_layer._internal_.MultiscaleAnnotationSource.md#[iterator])
- [add](image_user_layer._internal_.MultiscaleAnnotationSource.md#add)
- [addCounterpartRef](image_user_layer._internal_.MultiscaleAnnotationSource.md#addcounterpartref)
- [addRef](image_user_layer._internal_.MultiscaleAnnotationSource.md#addref)
- [applyLocalUpdate](image_user_layer._internal_.MultiscaleAnnotationSource.md#applylocalupdate)
- [commit](image_user_layer._internal_.MultiscaleAnnotationSource.md#commit)
- [counterpartRefCountReachedZero](image_user_layer._internal_.MultiscaleAnnotationSource.md#counterpartrefcountreachedzero)
- [delete](image_user_layer._internal_.MultiscaleAnnotationSource.md#delete)
- [dispose](image_user_layer._internal_.MultiscaleAnnotationSource.md#dispose)
- [disposed](image_user_layer._internal_.MultiscaleAnnotationSource.md#disposed)
- [forEachPossibleChunk](image_user_layer._internal_.MultiscaleAnnotationSource.md#foreachpossiblechunk)
- [getNonDummyAnnotationReference](image_user_layer._internal_.MultiscaleAnnotationSource.md#getnondummyannotationreference)
- [getReference](image_user_layer._internal_.MultiscaleAnnotationSource.md#getreference)
- [getSources](image_user_layer._internal_.MultiscaleAnnotationSource.md#getsources)
- [getTopMostAnnotationReference](image_user_layer._internal_.MultiscaleAnnotationSource.md#gettopmostannotationreference)
- [handleFailedUpdate](image_user_layer._internal_.MultiscaleAnnotationSource.md#handlefailedupdate)
- [handleSuccessfulUpdate](image_user_layer._internal_.MultiscaleAnnotationSource.md#handlesuccessfulupdate)
- [hasNonSerializedProperties](image_user_layer._internal_.MultiscaleAnnotationSource.md#hasnonserializedproperties)
- [initializeCounterpart](image_user_layer._internal_.MultiscaleAnnotationSource.md#initializecounterpart)
- [initializeSharedObject](image_user_layer._internal_.MultiscaleAnnotationSource.md#initializesharedobject)
- [makeAllParentsVisible](image_user_layer._internal_.MultiscaleAnnotationSource.md#makeallparentsvisible)
- [notifyChanged](image_user_layer._internal_.MultiscaleAnnotationSource.md#notifychanged)
- [ownerDispose](image_user_layer._internal_.MultiscaleAnnotationSource.md#ownerdispose)
- [refCountReachedZero](image_user_layer._internal_.MultiscaleAnnotationSource.md#refcountreachedzero)
- [registerCancellable](image_user_layer._internal_.MultiscaleAnnotationSource.md#registercancellable)
- [registerDisposer](image_user_layer._internal_.MultiscaleAnnotationSource.md#registerdisposer)
- [registerEventListener](image_user_layer._internal_.MultiscaleAnnotationSource.md#registereventlistener)
- [revertLocalUpdate](image_user_layer._internal_.MultiscaleAnnotationSource.md#revertlocalupdate)
- [sendCommitRequest](image_user_layer._internal_.MultiscaleAnnotationSource.md#sendcommitrequest)
- [unregisterDisposer](image_user_layer._internal_.MultiscaleAnnotationSource.md#unregisterdisposer)
- [update](image_user_layer._internal_.MultiscaleAnnotationSource.md#update)
- [updateColor](image_user_layer._internal_.MultiscaleAnnotationSource.md#updatecolor)
- [updateCommitsInProgress](image_user_layer._internal_.MultiscaleAnnotationSource.md#updatecommitsinprogress)
- [updateDescription](image_user_layer._internal_.MultiscaleAnnotationSource.md#updatedescription)
- [encodeOptions](image_user_layer._internal_.MultiscaleAnnotationSource.md#encodeoptions)

## Constructors

### constructor

• **new MultiscaleAnnotationSource**(`chunkManager`, `options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkManager` | [`ChunkManager`](data_panel_layout._internal_.ChunkManager.md) |
| `options` | `Object` |
| `options.properties` | [`Readonly`](../modules/coordinate_transform._internal_.md#readonly)<[`AnnotationPropertySpec`](../modules/image_user_layer._internal_.md#annotationpropertyspec)\>[] |
| `options.rank` | `number` |
| `options.relationships` | readonly `string`[] |

#### Overrides

[SharedObject](worker_rpc.SharedObject.md).[constructor](worker_rpc.SharedObject.md#constructor)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:357](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/frontend_source.ts#L357)

## Properties

### OPTIONS

• **OPTIONS**: `Object`

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:347](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/frontend_source.ts#L347)

___

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

Should be set to a constant specifying the SharedObject type identifier on the prototype of
final derived owner classes.  It is not used on counterpart (non-owner) classes.

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[RPC_TYPE_ID](worker_rpc.SharedObject.md#rpc_type_id)

#### Defined in

[src/neuroglancer/worker_rpc.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L245)

___

### annotationPropertySerializer

• `Readonly` **annotationPropertySerializer**: [`AnnotationPropertySerializer`](image_user_layer._internal_.AnnotationPropertySerializer.md)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:356](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/frontend_source.ts#L356)

___

### changed

• **changed**: [`NullarySignal`](coordinate_transform._internal_.NullarySignal.md)

#### Implementation of

[AnnotationSourceSignals](../interfaces/image_user_layer._internal_.AnnotationSourceSignals.md).[changed](../interfaces/image_user_layer._internal_.AnnotationSourceSignals.md#changed)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:803](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/frontend_source.ts#L803)

___

### childAdded

• **childAdded**: [`Signal`](coordinate_transform._internal_.Signal.md)<(`annotation`: [`Annotation`](../modules/image_user_layer._internal_.md#annotation)) => `void`\>

#### Implementation of

[AnnotationSourceSignals](../interfaces/image_user_layer._internal_.AnnotationSourceSignals.md).[childAdded](../interfaces/image_user_layer._internal_.AnnotationSourceSignals.md#childadded)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:806](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/frontend_source.ts#L806)

___

### childDeleted

• **childDeleted**: [`Signal`](coordinate_transform._internal_.Signal.md)<(`annotationId`: `string`) => `void`\>

#### Implementation of

[AnnotationSourceSignals](../interfaces/image_user_layer._internal_.AnnotationSourceSignals.md).[childDeleted](../interfaces/image_user_layer._internal_.AnnotationSourceSignals.md#childdeleted)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:808](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/frontend_source.ts#L808)

___

### childUpdated

• **childUpdated**: [`Signal`](coordinate_transform._internal_.Signal.md)<(`annotation`: [`Annotation`](../modules/image_user_layer._internal_.md#annotation)) => `void`\>

#### Implementation of

[AnnotationSourceSignals](../interfaces/image_user_layer._internal_.AnnotationSourceSignals.md).[childUpdated](../interfaces/image_user_layer._internal_.AnnotationSourceSignals.md#childupdated)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:807](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/frontend_source.ts#L807)

___

### chunkManager

• **chunkManager**: [`ChunkManager`](data_panel_layout._internal_.ChunkManager.md)

#### Implementation of

MultiscaleSliceViewChunkSource.chunkManager

___

### commitStatus

• `Private` **commitStatus**: `undefined` \| [`StatusMessage`](status.StatusMessage.md)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:746](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/frontend_source.ts#L746)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[disposedStacks](worker_rpc.SharedObject.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L52)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[isOwner](worker_rpc.SharedObject.md#isowner)

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L171)

___

### key

• **key**: `any`

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:348](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/frontend_source.ts#L348)

___

### localUpdates

• **localUpdates**: `Map`<`string`, [`LocalUpdateUndoState`](../interfaces/image_user_layer._internal_.LocalUpdateUndoState.md)\>

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:390](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/frontend_source.ts#L390)

___

### metadataChunkSource

• **metadataChunkSource**: [`AnnotationMetadataChunkSource`](image_user_layer._internal_.AnnotationMetadataChunkSource.md)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:349](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/frontend_source.ts#L349)

___

### numCommitsInProgress

• `Private` **numCommitsInProgress**: `number` = `0`

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:744](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/frontend_source.ts#L744)

___

### properties

• `Readonly` **properties**: [`Readonly`](../modules/coordinate_transform._internal_.md#readonly)<[`AnnotationPropertySpec`](../modules/image_user_layer._internal_.md#annotationpropertyspec)\>[]

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:355](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/frontend_source.ts#L355)

___

### rank

• **rank**: `number`

#### Implementation of

MultiscaleSliceViewChunkSource.rank

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:353](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/frontend_source.ts#L353)

___

### readonly

• **readonly**: `boolean` = `false`

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:805](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/frontend_source.ts#L805)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[refCount](worker_rpc.SharedObject.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L45)

___

### referencedGeneration

• **referencedGeneration**: `number`

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[referencedGeneration](worker_rpc.SharedObject.md#referencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L173)

___

### references

• **references**: `Map`<`string`, [`AnnotationReference`](image_user_layer._internal_.AnnotationReference.md)\>

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:388](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/frontend_source.ts#L388)

___

### relationships

• `Readonly` **relationships**: readonly `string`[]

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:354](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/frontend_source.ts#L354)

___

### rpc

• **rpc**: ``null`` \| [`RPC`](worker_rpc.RPC.md) = `null`

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[rpc](worker_rpc.SharedObject.md#rpc)

#### Defined in

[src/neuroglancer/worker_rpc.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L169)

___

### rpcId

• **rpcId**: ``null`` \| `number` = `null`

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[rpcId](worker_rpc.SharedObject.md#rpcid)

#### Defined in

[src/neuroglancer/worker_rpc.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L170)

___

### segmentFilteredSources

• **segmentFilteredSources**: [`AnnotationSubsetGeometryChunkSource`](image_user_layer._internal_.AnnotationSubsetGeometryChunkSource.md)[]

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:351](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/frontend_source.ts#L351)

___

### spatiallyIndexedSources

• **spatiallyIndexedSources**: `Set`<[`AnnotationGeometryChunkSource`](image_user_layer._internal_.AnnotationGeometryChunkSource.md)\>

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:352](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/frontend_source.ts#L352)

___

### temporary

• **temporary**: [`AnnotationGeometryChunk`](image_user_layer._internal_.AnnotationGeometryChunk.md)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:386](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/frontend_source.ts#L386)

___

### unreferencedGeneration

• **unreferencedGeneration**: `number`

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[unreferencedGeneration](worker_rpc.SharedObject.md#unreferencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L172)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[wasDisposed](worker_rpc.SharedObject.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L46)

## Methods

### [iterator]

▸ **[iterator]**(): [`Iterator`](../interfaces/axes_lines._internal_.Iterator.md)<[`Annotation`](../modules/image_user_layer._internal_.md#annotation), `any`, `undefined`\>

#### Returns

[`Iterator`](../interfaces/axes_lines._internal_.Iterator.md)<[`Annotation`](../modules/image_user_layer._internal_.md#annotation), `any`, `undefined`\>

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:804](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/frontend_source.ts#L804)

___

### add

▸ **add**(`annotation`, `commit?`): [`AnnotationReference`](image_user_layer._internal_.AnnotationReference.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `annotation` | [`Annotation`](../modules/image_user_layer._internal_.md#annotation) | `undefined` |
| `commit` | `boolean` | `true` |

#### Returns

[`AnnotationReference`](image_user_layer._internal_.AnnotationReference.md)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:403](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/frontend_source.ts#L403)

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

[SharedObject](worker_rpc.SharedObject.md).[addCounterpartRef](worker_rpc.SharedObject.md#addcounterpartref)

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`MultiscaleAnnotationSource`](image_user_layer._internal_.MultiscaleAnnotationSource.md)

#### Returns

[`MultiscaleAnnotationSource`](image_user_layer._internal_.MultiscaleAnnotationSource.md)

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[addRef](worker_rpc.SharedObject.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L48)

___

### applyLocalUpdate

▸ `Private` **applyLocalUpdate**(`reference`, `existing`, `commit`, `newAnnotation`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reference` | [`AnnotationReference`](image_user_layer._internal_.AnnotationReference.md) |
| `existing` | `boolean` |
| `commit` | `boolean` |
| `newAnnotation` | ``null`` \| [`Annotation`](../modules/image_user_layer._internal_.md#annotation) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:416](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/frontend_source.ts#L416)

___

### commit

▸ **commit**(`reference`): `void`

Must be called after `add` or `update` to commit the result.

#### Parameters

| Name | Type |
| :------ | :------ |
| `reference` | [`AnnotationReference`](image_user_layer._internal_.AnnotationReference.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:508](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/frontend_source.ts#L508)

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

[SharedObject](worker_rpc.SharedObject.md).[counterpartRefCountReachedZero](worker_rpc.SharedObject.md#counterpartrefcountreachedzero)

#### Defined in

[src/neuroglancer/worker_rpc.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L234)

___

### delete

▸ **delete**(`reference`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reference` | [`AnnotationReference`](image_user_layer._internal_.AnnotationReference.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:483](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/frontend_source.ts#L483)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[dispose](worker_rpc.SharedObject.md#dispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

[SharedObject](worker_rpc.SharedObject.md).[disposed](worker_rpc.SharedObject.md#disposed)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:748](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/frontend_source.ts#L748)

___

### forEachPossibleChunk

▸ `Private` **forEachPossibleChunk**(`annotation`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `annotation` | [`Annotation`](../modules/image_user_layer._internal_.md#annotation) |
| `callback` | (`chunk`: [`AnnotationGeometryChunk`](image_user_layer._internal_.AnnotationGeometryChunk.md) \| [`AnnotationSubsetGeometryChunk`](image_user_layer._internal_.AnnotationSubsetGeometryChunk.md)) => `void` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:612](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/frontend_source.ts#L612)

___

### getNonDummyAnnotationReference

▸ **getNonDummyAnnotationReference**(`id`): [`AnnotationReference`](image_user_layer._internal_.AnnotationReference.md)

Takes an annotation id as input and returns the parent if the annotation type is line and parent is polygon.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | annotation id |

#### Returns

[`AnnotationReference`](image_user_layer._internal_.AnnotationReference.md)

Returns parent annotation id if annotation type is line otherwise returns the current id.

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:536](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/frontend_source.ts#L536)

___

### getReference

▸ **getReference**(`id`): [`AnnotationReference`](image_user_layer._internal_.AnnotationReference.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

[`AnnotationReference`](image_user_layer._internal_.AnnotationReference.md)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:512](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/frontend_source.ts#L512)

___

### getSources

▸ **getSources**(`_options`): [`SliceViewSingleResolutionSource`](../interfaces/data_panel_layout._internal_.SliceViewSingleResolutionSource.md)<[`AnnotationGeometryChunkSource`](image_user_layer._internal_.AnnotationGeometryChunkSource.md)\>[][]

#### Parameters

| Name | Type |
| :------ | :------ |
| `_options` | [`SliceViewSourceOptions`](../interfaces/data_panel_layout._internal_.SliceViewSourceOptions.md) |

#### Returns

[`SliceViewSingleResolutionSource`](../interfaces/data_panel_layout._internal_.SliceViewSingleResolutionSource.md)<[`AnnotationGeometryChunkSource`](image_user_layer._internal_.AnnotationGeometryChunkSource.md)\>[][]

#### Implementation of

MultiscaleSliceViewChunkSource.getSources

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:381](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/frontend_source.ts#L381)

___

### getTopMostAnnotationReference

▸ **getTopMostAnnotationReference**(`id`): [`AnnotationReference`](image_user_layer._internal_.AnnotationReference.md)

Takes an annotation id as input and finds the top most ancestor of it.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | annotation id input |

#### Returns

[`AnnotationReference`](image_user_layer._internal_.AnnotationReference.md)

Reference to the top most ancestor of it.

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:564](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/frontend_source.ts#L564)

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

[src/neuroglancer/annotation/frontend_source.ts:768](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/frontend_source.ts#L768)

___

### handleSuccessfulUpdate

▸ **handleSuccessfulUpdate**(`id`, `newAnnotation`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `newAnnotation` | ``null`` \| [`Annotation`](../modules/image_user_layer._internal_.md#annotation) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:703](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/frontend_source.ts#L703)

___

### hasNonSerializedProperties

▸ **hasNonSerializedProperties**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:377](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/frontend_source.ts#L377)

___

### initializeCounterpart

▸ **initializeCounterpart**(`rpc`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](worker_rpc.RPC.md) |
| `options` | `any` |

#### Returns

`void`

#### Overrides

[SharedObject](worker_rpc.SharedObject.md).[initializeCounterpart](worker_rpc.SharedObject.md#initializecounterpart)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:392](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/frontend_source.ts#L392)

___

### initializeSharedObject

▸ **initializeSharedObject**(`rpc`, `rpcId?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](worker_rpc.RPC.md) |
| `rpcId` | `number` |

#### Returns

`void`

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[initializeSharedObject](worker_rpc.SharedObject.md#initializesharedobject)

#### Defined in

[src/neuroglancer/worker_rpc.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L175)

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

[src/neuroglancer/annotation/frontend_source.ts:555](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/frontend_source.ts#L555)

___

### notifyChanged

▸ `Private` **notifyChanged**(`id`, `annotation`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `annotation` | `undefined` \| [`Annotation`](../modules/image_user_layer._internal_.md#annotation) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:492](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/frontend_source.ts#L492)

___

### ownerDispose

▸ `Protected` **ownerDispose**(): `void`

Precondition: this.isOwner === true.

#### Returns

`void`

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[ownerDispose](worker_rpc.SharedObject.md#ownerdispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L219)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[refCountReachedZero](worker_rpc.SharedObject.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/worker_rpc.ts:203](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L203)

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

[SharedObject](worker_rpc.SharedObject.md).[registerCancellable](worker_rpc.SharedObject.md#registercancellable)

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L100)

___

### registerDisposer

▸ **registerDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/axes_lines._internal_.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[registerDisposer](worker_rpc.SharedObject.md#registerdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L76)

___

### registerEventListener

▸ **registerEventListener**(`target`, `type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EventTarget`](../modules/axes_lines._internal_.md#eventtarget) |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/axes_lines._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](../interfaces/axes_lines._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[registerEventListener](worker_rpc.SharedObject.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L95)

___

### revertLocalUpdate

▸ `Private` **revertLocalUpdate**(`localUpdate`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `localUpdate` | [`LocalUpdateUndoState`](../interfaces/image_user_layer._internal_.LocalUpdateUndoState.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:779](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/frontend_source.ts#L779)

___

### sendCommitRequest

▸ `Private` **sendCommitRequest**(`localUpdate`, `newAnnotation`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `localUpdate` | [`LocalUpdateUndoState`](../interfaces/image_user_layer._internal_.LocalUpdateUndoState.md) |
| `newAnnotation` | ``null`` \| [`Annotation`](../modules/image_user_layer._internal_.md#annotation) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:473](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/frontend_source.ts#L473)

___

### unregisterDisposer

▸ **unregisterDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/axes_lines._internal_.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[unregisterDisposer](worker_rpc.SharedObject.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L85)

___

### update

▸ **update**(`reference`, `newAnnotation`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reference` | [`AnnotationReference`](image_user_layer._internal_.AnnotationReference.md) |
| `newAnnotation` | [`Annotation`](../modules/image_user_layer._internal_.md#annotation) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:487](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/frontend_source.ts#L487)

___

### updateColor

▸ **updateColor**(`reference`, `color`): `void`

Takes a annotation reference and update the color of that annotation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `reference` | [`AnnotationReference`](image_user_layer._internal_.AnnotationReference.md) |
| `color` | `number` |

#### Returns

`void`

void

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:583](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/frontend_source.ts#L583)

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

[src/neuroglancer/annotation/frontend_source.ts:755](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/frontend_source.ts#L755)

___

### updateDescription

▸ **updateDescription**(`reference`, `description`): `void`

Takes the annotation reference and updates its description with new string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `reference` | [`AnnotationReference`](image_user_layer._internal_.AnnotationReference.md) |
| `description` | `undefined` \| `string` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:606](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/frontend_source.ts#L606)

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

[src/neuroglancer/annotation/frontend_source.ts:699](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/frontend_source.ts#L699)
