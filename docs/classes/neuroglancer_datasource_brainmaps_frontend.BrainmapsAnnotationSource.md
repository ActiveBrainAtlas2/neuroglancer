[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/datasource/brainmaps/frontend](../modules/neuroglancer_datasource_brainmaps_frontend.md) / BrainmapsAnnotationSource

# Class: BrainmapsAnnotationSource

[neuroglancer/datasource/brainmaps/frontend](../modules/neuroglancer_datasource_brainmaps_frontend.md).BrainmapsAnnotationSource

## Hierarchy

- [`MultiscaleAnnotationSourceBase`](../modules/neuroglancer_datasource_brainmaps_frontend._internal_.md#multiscaleannotationsourcebase)

  ↳ **`BrainmapsAnnotationSource`**

## Table of contents

### Constructors

- [constructor](neuroglancer_datasource_brainmaps_frontend.BrainmapsAnnotationSource.md#constructor)

### Properties

- [OPTIONS](neuroglancer_datasource_brainmaps_frontend.BrainmapsAnnotationSource.md#options)
- [RPC\_TYPE\_ID](neuroglancer_datasource_brainmaps_frontend.BrainmapsAnnotationSource.md#rpc_type_id)
- [annotationPropertySerializer](neuroglancer_datasource_brainmaps_frontend.BrainmapsAnnotationSource.md#annotationpropertyserializer)
- [changed](neuroglancer_datasource_brainmaps_frontend.BrainmapsAnnotationSource.md#changed)
- [childAdded](neuroglancer_datasource_brainmaps_frontend.BrainmapsAnnotationSource.md#childadded)
- [childDeleted](neuroglancer_datasource_brainmaps_frontend.BrainmapsAnnotationSource.md#childdeleted)
- [childUpdated](neuroglancer_datasource_brainmaps_frontend.BrainmapsAnnotationSource.md#childupdated)
- [chunkManager](neuroglancer_datasource_brainmaps_frontend.BrainmapsAnnotationSource.md#chunkmanager)
- [credentialsProvider](neuroglancer_datasource_brainmaps_frontend.BrainmapsAnnotationSource.md#credentialsprovider)
- [disposedStacks](neuroglancer_datasource_brainmaps_frontend.BrainmapsAnnotationSource.md#disposedstacks)
- [isOwner](neuroglancer_datasource_brainmaps_frontend.BrainmapsAnnotationSource.md#isowner)
- [key](neuroglancer_datasource_brainmaps_frontend.BrainmapsAnnotationSource.md#key)
- [localUpdates](neuroglancer_datasource_brainmaps_frontend.BrainmapsAnnotationSource.md#localupdates)
- [metadataChunkSource](neuroglancer_datasource_brainmaps_frontend.BrainmapsAnnotationSource.md#metadatachunksource)
- [parameters](neuroglancer_datasource_brainmaps_frontend.BrainmapsAnnotationSource.md#parameters)
- [properties](neuroglancer_datasource_brainmaps_frontend.BrainmapsAnnotationSource.md#properties)
- [rank](neuroglancer_datasource_brainmaps_frontend.BrainmapsAnnotationSource.md#rank)
- [readonly](neuroglancer_datasource_brainmaps_frontend.BrainmapsAnnotationSource.md#readonly)
- [refCount](neuroglancer_datasource_brainmaps_frontend.BrainmapsAnnotationSource.md#refcount)
- [referencedGeneration](neuroglancer_datasource_brainmaps_frontend.BrainmapsAnnotationSource.md#referencedgeneration)
- [references](neuroglancer_datasource_brainmaps_frontend.BrainmapsAnnotationSource.md#references)
- [relationships](neuroglancer_datasource_brainmaps_frontend.BrainmapsAnnotationSource.md#relationships)
- [rpc](neuroglancer_datasource_brainmaps_frontend.BrainmapsAnnotationSource.md#rpc)
- [rpcId](neuroglancer_datasource_brainmaps_frontend.BrainmapsAnnotationSource.md#rpcid)
- [segmentFilteredSources](neuroglancer_datasource_brainmaps_frontend.BrainmapsAnnotationSource.md#segmentfilteredsources)
- [spatiallyIndexedSources](neuroglancer_datasource_brainmaps_frontend.BrainmapsAnnotationSource.md#spatiallyindexedsources)
- [temporary](neuroglancer_datasource_brainmaps_frontend.BrainmapsAnnotationSource.md#temporary)
- [unreferencedGeneration](neuroglancer_datasource_brainmaps_frontend.BrainmapsAnnotationSource.md#unreferencedgeneration)
- [wasDisposed](neuroglancer_datasource_brainmaps_frontend.BrainmapsAnnotationSource.md#wasdisposed)

### Methods

- [[iterator]](neuroglancer_datasource_brainmaps_frontend.BrainmapsAnnotationSource.md#[iterator])
- [add](neuroglancer_datasource_brainmaps_frontend.BrainmapsAnnotationSource.md#add)
- [addCounterpartRef](neuroglancer_datasource_brainmaps_frontend.BrainmapsAnnotationSource.md#addcounterpartref)
- [addRef](neuroglancer_datasource_brainmaps_frontend.BrainmapsAnnotationSource.md#addref)
- [commit](neuroglancer_datasource_brainmaps_frontend.BrainmapsAnnotationSource.md#commit)
- [counterpartRefCountReachedZero](neuroglancer_datasource_brainmaps_frontend.BrainmapsAnnotationSource.md#counterpartrefcountreachedzero)
- [delete](neuroglancer_datasource_brainmaps_frontend.BrainmapsAnnotationSource.md#delete)
- [dispose](neuroglancer_datasource_brainmaps_frontend.BrainmapsAnnotationSource.md#dispose)
- [disposed](neuroglancer_datasource_brainmaps_frontend.BrainmapsAnnotationSource.md#disposed)
- [getNonDummyAnnotationReference](neuroglancer_datasource_brainmaps_frontend.BrainmapsAnnotationSource.md#getnondummyannotationreference)
- [getReference](neuroglancer_datasource_brainmaps_frontend.BrainmapsAnnotationSource.md#getreference)
- [getSources](neuroglancer_datasource_brainmaps_frontend.BrainmapsAnnotationSource.md#getsources)
- [getTopMostAnnotationReference](neuroglancer_datasource_brainmaps_frontend.BrainmapsAnnotationSource.md#gettopmostannotationreference)
- [handleFailedUpdate](neuroglancer_datasource_brainmaps_frontend.BrainmapsAnnotationSource.md#handlefailedupdate)
- [handleSuccessfulUpdate](neuroglancer_datasource_brainmaps_frontend.BrainmapsAnnotationSource.md#handlesuccessfulupdate)
- [hasNonSerializedProperties](neuroglancer_datasource_brainmaps_frontend.BrainmapsAnnotationSource.md#hasnonserializedproperties)
- [initializeCounterpart](neuroglancer_datasource_brainmaps_frontend.BrainmapsAnnotationSource.md#initializecounterpart)
- [initializeSharedObject](neuroglancer_datasource_brainmaps_frontend.BrainmapsAnnotationSource.md#initializesharedobject)
- [makeAllParentsVisible](neuroglancer_datasource_brainmaps_frontend.BrainmapsAnnotationSource.md#makeallparentsvisible)
- [ownerDispose](neuroglancer_datasource_brainmaps_frontend.BrainmapsAnnotationSource.md#ownerdispose)
- [refCountReachedZero](neuroglancer_datasource_brainmaps_frontend.BrainmapsAnnotationSource.md#refcountreachedzero)
- [registerCancellable](neuroglancer_datasource_brainmaps_frontend.BrainmapsAnnotationSource.md#registercancellable)
- [registerDisposer](neuroglancer_datasource_brainmaps_frontend.BrainmapsAnnotationSource.md#registerdisposer)
- [registerEventListener](neuroglancer_datasource_brainmaps_frontend.BrainmapsAnnotationSource.md#registereventlistener)
- [unregisterDisposer](neuroglancer_datasource_brainmaps_frontend.BrainmapsAnnotationSource.md#unregisterdisposer)
- [update](neuroglancer_datasource_brainmaps_frontend.BrainmapsAnnotationSource.md#update)
- [updateColor](neuroglancer_datasource_brainmaps_frontend.BrainmapsAnnotationSource.md#updatecolor)
- [updateDescription](neuroglancer_datasource_brainmaps_frontend.BrainmapsAnnotationSource.md#updatedescription)
- [encodeOptions](neuroglancer_datasource_brainmaps_frontend.BrainmapsAnnotationSource.md#encodeoptions)

## Constructors

### constructor

• **new BrainmapsAnnotationSource**(`chunkManager`, `options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkManager` | [`ChunkManager`](neuroglancer_chunk_manager_frontend.ChunkManager.md) |
| `options` | `Object` |
| `options.credentialsProvider` | [`CredentialsProvider`](neuroglancer_credentials_provider.CredentialsProvider.md)<[`OAuth2Credentials`](../interfaces/neuroglancer_credentials_provider_oauth2.OAuth2Credentials.md)\> |
| `options.parameters` | [`AnnotationSourceParameters`](neuroglancer_datasource_brainmaps_base.AnnotationSourceParameters.md) |

#### Overrides

MultiscaleAnnotationSourceBase.constructor

#### Defined in

[src/neuroglancer/datasource/brainmaps/frontend.ts:532](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/brainmaps/frontend.ts#L532)

## Properties

### OPTIONS

• **OPTIONS**: { `credentialsProvider`: [`CredentialsProvider`](neuroglancer_credentials_provider.CredentialsProvider.md)<[`OAuth2Credentials`](../interfaces/neuroglancer_credentials_provider_oauth2.OAuth2Credentials.md)\>  } & { `parameters`: [`AnnotationSourceParameters`](neuroglancer_datasource_brainmaps_base.AnnotationSourceParameters.md)  }

#### Inherited from

MultiscaleAnnotationSourceBase.OPTIONS

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:416](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/frontend.ts#L416)

___

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

Should be set to a constant specifying the SharedObject type identifier on the prototype of
final derived owner classes.  It is not used on counterpart (non-owner) classes.

#### Inherited from

MultiscaleAnnotationSourceBase.RPC\_TYPE\_ID

#### Defined in

[src/neuroglancer/worker_rpc.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L245)

___

### annotationPropertySerializer

• `Readonly` **annotationPropertySerializer**: [`AnnotationPropertySerializer`](neuroglancer_annotation.AnnotationPropertySerializer.md)

#### Inherited from

MultiscaleAnnotationSourceBase.annotationPropertySerializer

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:356](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/frontend_source.ts#L356)

___

### changed

• **changed**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Inherited from

MultiscaleAnnotationSourceBase.changed

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:803](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/frontend_source.ts#L803)

___

### childAdded

• **childAdded**: [`Signal`](neuroglancer_util_signal.Signal.md)<(`annotation`: [`Annotation`](../modules/neuroglancer_annotation.md#annotation)) => `void`\>

#### Inherited from

MultiscaleAnnotationSourceBase.childAdded

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:806](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/frontend_source.ts#L806)

___

### childDeleted

• **childDeleted**: [`Signal`](neuroglancer_util_signal.Signal.md)<(`annotationId`: `string`) => `void`\>

#### Inherited from

MultiscaleAnnotationSourceBase.childDeleted

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:808](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/frontend_source.ts#L808)

___

### childUpdated

• **childUpdated**: [`Signal`](neuroglancer_util_signal.Signal.md)<(`annotation`: [`Annotation`](../modules/neuroglancer_annotation.md#annotation)) => `void`\>

#### Inherited from

MultiscaleAnnotationSourceBase.childUpdated

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:807](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/frontend_source.ts#L807)

___

### chunkManager

• **chunkManager**: [`ChunkManager`](neuroglancer_chunk_manager_frontend.ChunkManager.md)

#### Inherited from

MultiscaleAnnotationSourceBase.chunkManager

#### Defined in

[src/neuroglancer/credentials_provider/chunk_source_frontend.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/credentials_provider/chunk_source_frontend.ts#L48)

___

### credentialsProvider

• **credentialsProvider**: [`CredentialsProvider`](neuroglancer_credentials_provider.CredentialsProvider.md)<[`OAuth2Credentials`](../interfaces/neuroglancer_credentials_provider_oauth2.OAuth2Credentials.md)\>

#### Overrides

MultiscaleAnnotationSourceBase.credentialsProvider

#### Defined in

[src/neuroglancer/datasource/brainmaps/frontend.ts:531](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/brainmaps/frontend.ts#L531)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

MultiscaleAnnotationSourceBase.disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Inherited from

MultiscaleAnnotationSourceBase.isOwner

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L171)

___

### key

• **key**: `any`

#### Overrides

MultiscaleAnnotationSourceBase.key

#### Defined in

[src/neuroglancer/datasource/brainmaps/frontend.ts:529](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/brainmaps/frontend.ts#L529)

___

### localUpdates

• **localUpdates**: `Map`<`string`, [`LocalUpdateUndoState`](../interfaces/neuroglancer_annotation_frontend_source._internal_.LocalUpdateUndoState.md)\>

#### Inherited from

MultiscaleAnnotationSourceBase.localUpdates

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:390](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/frontend_source.ts#L390)

___

### metadataChunkSource

• **metadataChunkSource**: [`AnnotationMetadataChunkSource`](neuroglancer_annotation_frontend_source.AnnotationMetadataChunkSource.md)

#### Inherited from

MultiscaleAnnotationSourceBase.metadataChunkSource

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:349](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/frontend_source.ts#L349)

___

### parameters

• **parameters**: [`AnnotationSourceParameters`](neuroglancer_datasource_brainmaps_base.AnnotationSourceParameters.md)

#### Overrides

MultiscaleAnnotationSourceBase.parameters

#### Defined in

[src/neuroglancer/datasource/brainmaps/frontend.ts:530](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/brainmaps/frontend.ts#L530)

___

### properties

• `Readonly` **properties**: [`Readonly`](../modules/neuroglancer_annotation_frontend_source._internal_.md#readonly)<[`AnnotationPropertySpec`](../modules/neuroglancer_annotation.md#annotationpropertyspec)\>[]

#### Inherited from

MultiscaleAnnotationSourceBase.properties

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:355](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/frontend_source.ts#L355)

___

### rank

• **rank**: `number`

#### Inherited from

MultiscaleAnnotationSourceBase.rank

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:353](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/frontend_source.ts#L353)

___

### readonly

• **readonly**: `boolean` = `false`

#### Inherited from

MultiscaleAnnotationSourceBase.readonly

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:805](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/frontend_source.ts#L805)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

MultiscaleAnnotationSourceBase.refCount

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### referencedGeneration

• **referencedGeneration**: `number`

#### Inherited from

MultiscaleAnnotationSourceBase.referencedGeneration

#### Defined in

[src/neuroglancer/worker_rpc.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L173)

___

### references

• **references**: `Map`<`string`, [`AnnotationReference`](neuroglancer_annotation.AnnotationReference.md)\>

#### Inherited from

MultiscaleAnnotationSourceBase.references

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:388](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/frontend_source.ts#L388)

___

### relationships

• `Readonly` **relationships**: readonly `string`[]

#### Inherited from

MultiscaleAnnotationSourceBase.relationships

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:354](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/frontend_source.ts#L354)

___

### rpc

• **rpc**: ``null`` \| [`RPC`](neuroglancer_worker_rpc.RPC.md) = `null`

#### Inherited from

MultiscaleAnnotationSourceBase.rpc

#### Defined in

[src/neuroglancer/worker_rpc.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L169)

___

### rpcId

• **rpcId**: ``null`` \| `number` = `null`

#### Inherited from

MultiscaleAnnotationSourceBase.rpcId

#### Defined in

[src/neuroglancer/worker_rpc.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L170)

___

### segmentFilteredSources

• **segmentFilteredSources**: [`AnnotationSubsetGeometryChunkSource`](neuroglancer_annotation_frontend_source.AnnotationSubsetGeometryChunkSource.md)[]

#### Inherited from

MultiscaleAnnotationSourceBase.segmentFilteredSources

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:351](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/frontend_source.ts#L351)

___

### spatiallyIndexedSources

• **spatiallyIndexedSources**: `Set`<[`AnnotationGeometryChunkSource`](neuroglancer_annotation_frontend_source.AnnotationGeometryChunkSource.md)\>

#### Inherited from

MultiscaleAnnotationSourceBase.spatiallyIndexedSources

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:352](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/frontend_source.ts#L352)

___

### temporary

• **temporary**: [`AnnotationGeometryChunk`](neuroglancer_annotation_frontend_source.AnnotationGeometryChunk.md)

#### Inherited from

MultiscaleAnnotationSourceBase.temporary

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:386](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/frontend_source.ts#L386)

___

### unreferencedGeneration

• **unreferencedGeneration**: `number`

#### Inherited from

MultiscaleAnnotationSourceBase.unreferencedGeneration

#### Defined in

[src/neuroglancer/worker_rpc.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L172)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

MultiscaleAnnotationSourceBase.wasDisposed

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

## Methods

### [iterator]

▸ **[iterator]**(): [`Iterator`](../interfaces/main_module._internal_.Iterator.md)<[`Annotation`](../modules/neuroglancer_annotation.md#annotation), `any`, `undefined`\>

#### Returns

[`Iterator`](../interfaces/main_module._internal_.Iterator.md)<[`Annotation`](../modules/neuroglancer_annotation.md#annotation), `any`, `undefined`\>

#### Inherited from

MultiscaleAnnotationSourceBase.\_\_@iterator@87

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:804](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/frontend_source.ts#L804)

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

#### Inherited from

MultiscaleAnnotationSourceBase.add

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:403](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/frontend_source.ts#L403)

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

MultiscaleAnnotationSourceBase.addCounterpartRef

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`BrainmapsAnnotationSource`](neuroglancer_datasource_brainmaps_frontend.BrainmapsAnnotationSource.md)

#### Returns

[`BrainmapsAnnotationSource`](neuroglancer_datasource_brainmaps_frontend.BrainmapsAnnotationSource.md)

#### Inherited from

MultiscaleAnnotationSourceBase.addRef

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L48)

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

#### Inherited from

MultiscaleAnnotationSourceBase.commit

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:508](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/frontend_source.ts#L508)

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

MultiscaleAnnotationSourceBase.counterpartRefCountReachedZero

#### Defined in

[src/neuroglancer/worker_rpc.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L234)

___

### delete

▸ **delete**(`reference`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reference` | [`AnnotationReference`](neuroglancer_annotation.AnnotationReference.md) |

#### Returns

`void`

#### Inherited from

MultiscaleAnnotationSourceBase.delete

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:483](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/frontend_source.ts#L483)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

MultiscaleAnnotationSourceBase.dispose

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

MultiscaleAnnotationSourceBase.disposed

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L75)

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

#### Inherited from

MultiscaleAnnotationSourceBase.getNonDummyAnnotationReference

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:536](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/frontend_source.ts#L536)

___

### getReference

▸ **getReference**(`id`): [`AnnotationReference`](neuroglancer_annotation.AnnotationReference.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

[`AnnotationReference`](neuroglancer_annotation.AnnotationReference.md)

#### Inherited from

MultiscaleAnnotationSourceBase.getReference

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:512](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/frontend_source.ts#L512)

___

### getSources

▸ **getSources**(): [`SliceViewSingleResolutionSource`](../interfaces/neuroglancer_sliceview_frontend.SliceViewSingleResolutionSource.md)<[`AnnotationGeometryChunkSource`](neuroglancer_annotation_frontend_source.AnnotationGeometryChunkSource.md)\>[][]

#### Returns

[`SliceViewSingleResolutionSource`](../interfaces/neuroglancer_sliceview_frontend.SliceViewSingleResolutionSource.md)<[`AnnotationGeometryChunkSource`](neuroglancer_annotation_frontend_source.AnnotationGeometryChunkSource.md)\>[][]

#### Overrides

MultiscaleAnnotationSourceBase.getSources

#### Defined in

[src/neuroglancer/datasource/brainmaps/frontend.ts:550](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/brainmaps/frontend.ts#L550)

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

#### Inherited from

MultiscaleAnnotationSourceBase.getTopMostAnnotationReference

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:564](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/frontend_source.ts#L564)

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

#### Inherited from

MultiscaleAnnotationSourceBase.handleFailedUpdate

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:768](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/frontend_source.ts#L768)

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

#### Inherited from

MultiscaleAnnotationSourceBase.handleSuccessfulUpdate

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:703](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/frontend_source.ts#L703)

___

### hasNonSerializedProperties

▸ **hasNonSerializedProperties**(): `boolean`

#### Returns

`boolean`

#### Overrides

MultiscaleAnnotationSourceBase.hasNonSerializedProperties

#### Defined in

[src/neuroglancer/datasource/brainmaps/frontend.ts:545](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/brainmaps/frontend.ts#L545)

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

#### Inherited from

MultiscaleAnnotationSourceBase.initializeCounterpart

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:423](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/frontend.ts#L423)

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

MultiscaleAnnotationSourceBase.initializeSharedObject

#### Defined in

[src/neuroglancer/worker_rpc.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L175)

___

### makeAllParentsVisible

▸ **makeAllParentsVisible**(`annotationId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `annotationId` | `string` |

#### Returns

`void`

#### Inherited from

MultiscaleAnnotationSourceBase.makeAllParentsVisible

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:555](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/frontend_source.ts#L555)

___

### ownerDispose

▸ `Protected` **ownerDispose**(): `void`

Precondition: this.isOwner === true.

#### Returns

`void`

#### Inherited from

MultiscaleAnnotationSourceBase.ownerDispose

#### Defined in

[src/neuroglancer/worker_rpc.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L219)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

MultiscaleAnnotationSourceBase.refCountReachedZero

#### Defined in

[src/neuroglancer/worker_rpc.ts:203](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L203)

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

MultiscaleAnnotationSourceBase.registerCancellable

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L100)

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

MultiscaleAnnotationSourceBase.registerDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L76)

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

MultiscaleAnnotationSourceBase.registerEventListener

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L95)

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

MultiscaleAnnotationSourceBase.unregisterDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L85)

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

#### Inherited from

MultiscaleAnnotationSourceBase.update

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:487](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/frontend_source.ts#L487)

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

#### Inherited from

MultiscaleAnnotationSourceBase.updateColor

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:583](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/frontend_source.ts#L583)

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

#### Inherited from

MultiscaleAnnotationSourceBase.updateDescription

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:606](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/frontend_source.ts#L606)

___

### encodeOptions

▸ `Static` **encodeOptions**(`options`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`WithParametersOptions`](../modules/neuroglancer_chunk_manager_frontend._internal_.md#withparametersoptions) |

#### Returns

`any`

#### Inherited from

MultiscaleAnnotationSourceBase.encodeOptions

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:427](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/frontend.ts#L427)

▸ `Static` **encodeOptions**(`options`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.credentialsProvider` | [`CredentialsProvider`](neuroglancer_credentials_provider.CredentialsProvider.md)<[`OAuth2Credentials`](../interfaces/neuroglancer_credentials_provider_oauth2.OAuth2Credentials.md)\> |

#### Returns

`any`

#### Inherited from

MultiscaleAnnotationSourceBase.encodeOptions

#### Defined in

[src/neuroglancer/credentials_provider/chunk_source_frontend.ts:67](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/credentials_provider/chunk_source_frontend.ts#L67)

▸ `Static` **encodeOptions**(`_options`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_options` | `Object` |

#### Returns

`Object`

#### Inherited from

MultiscaleAnnotationSourceBase.encodeOptions

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:699](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/frontend_source.ts#L699)
