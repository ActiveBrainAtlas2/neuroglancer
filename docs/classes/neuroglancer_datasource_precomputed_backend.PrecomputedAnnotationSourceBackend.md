[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/datasource/precomputed/backend](../modules/neuroglancer_datasource_precomputed_backend.md) / PrecomputedAnnotationSourceBackend

# Class: PrecomputedAnnotationSourceBackend

[neuroglancer/datasource/precomputed/backend](../modules/neuroglancer_datasource_precomputed_backend.md).PrecomputedAnnotationSourceBackend

## Hierarchy

- `C`<[`AnnotationSourceParameters`](neuroglancer_datasource_precomputed_base.AnnotationSourceParameters.md), (...`args`: `any`[]) => `__class`<`any`, typeof [`AnnotationSource`](neuroglancer_annotation_backend.AnnotationSource.md)\> & typeof [`AnnotationSource`](neuroglancer_annotation_backend.AnnotationSource.md), `this`\> & `__class`<`any`, typeof [`AnnotationSource`](neuroglancer_annotation_backend.AnnotationSource.md), `this`\> & [`AnnotationSource`](neuroglancer_annotation_backend.AnnotationSource.md)<`this`\>

  ↳ **`PrecomputedAnnotationSourceBackend`**

## Table of contents

### Constructors

- [constructor](neuroglancer_datasource_precomputed_backend.PrecomputedAnnotationSourceBackend.md#constructor)

### Properties

- [RPC\_TYPE\_ID](neuroglancer_datasource_precomputed_backend.PrecomputedAnnotationSourceBackend.md#rpc_type_id)
- [annotationPropertySerializer](neuroglancer_datasource_precomputed_backend.PrecomputedAnnotationSourceBackend.md#annotationpropertyserializer)
- [byIdMinishardIndexSource](neuroglancer_datasource_precomputed_backend.PrecomputedAnnotationSourceBackend.md#byidminishardindexsource)
- [chunkManager](neuroglancer_datasource_precomputed_backend.PrecomputedAnnotationSourceBackend.md#chunkmanager)
- [credentialsProvider](neuroglancer_datasource_precomputed_backend.PrecomputedAnnotationSourceBackend.md#credentialsprovider)
- [disposedStacks](neuroglancer_datasource_precomputed_backend.PrecomputedAnnotationSourceBackend.md#disposedstacks)
- [isOwner](neuroglancer_datasource_precomputed_backend.PrecomputedAnnotationSourceBackend.md#isowner)
- [metadataChunkSource](neuroglancer_datasource_precomputed_backend.PrecomputedAnnotationSourceBackend.md#metadatachunksource)
- [parameters](neuroglancer_datasource_precomputed_backend.PrecomputedAnnotationSourceBackend.md#parameters)
- [refCount](neuroglancer_datasource_precomputed_backend.PrecomputedAnnotationSourceBackend.md#refcount)
- [referencedGeneration](neuroglancer_datasource_precomputed_backend.PrecomputedAnnotationSourceBackend.md#referencedgeneration)
- [references](neuroglancer_datasource_precomputed_backend.PrecomputedAnnotationSourceBackend.md#references)
- [relationshipIndexSource](neuroglancer_datasource_precomputed_backend.PrecomputedAnnotationSourceBackend.md#relationshipindexsource)
- [rpc](neuroglancer_datasource_precomputed_backend.PrecomputedAnnotationSourceBackend.md#rpc)
- [rpcId](neuroglancer_datasource_precomputed_backend.PrecomputedAnnotationSourceBackend.md#rpcid)
- [segmentFilteredSources](neuroglancer_datasource_precomputed_backend.PrecomputedAnnotationSourceBackend.md#segmentfilteredsources)
- [unreferencedGeneration](neuroglancer_datasource_precomputed_backend.PrecomputedAnnotationSourceBackend.md#unreferencedgeneration)
- [wasDisposed](neuroglancer_datasource_precomputed_backend.PrecomputedAnnotationSourceBackend.md#wasdisposed)

### Methods

- [add](neuroglancer_datasource_precomputed_backend.PrecomputedAnnotationSourceBackend.md#add)
- [addCounterpartRef](neuroglancer_datasource_precomputed_backend.PrecomputedAnnotationSourceBackend.md#addcounterpartref)
- [addRef](neuroglancer_datasource_precomputed_backend.PrecomputedAnnotationSourceBackend.md#addref)
- [counterpartRefCountReachedZero](neuroglancer_datasource_precomputed_backend.PrecomputedAnnotationSourceBackend.md#counterpartrefcountreachedzero)
- [delete](neuroglancer_datasource_precomputed_backend.PrecomputedAnnotationSourceBackend.md#delete)
- [dispose](neuroglancer_datasource_precomputed_backend.PrecomputedAnnotationSourceBackend.md#dispose)
- [disposed](neuroglancer_datasource_precomputed_backend.PrecomputedAnnotationSourceBackend.md#disposed)
- [downloadMetadata](neuroglancer_datasource_precomputed_backend.PrecomputedAnnotationSourceBackend.md#downloadmetadata)
- [downloadSegmentFilteredGeometry](neuroglancer_datasource_precomputed_backend.PrecomputedAnnotationSourceBackend.md#downloadsegmentfilteredgeometry)
- [initializeCounterpart](neuroglancer_datasource_precomputed_backend.PrecomputedAnnotationSourceBackend.md#initializecounterpart)
- [initializeSharedObject](neuroglancer_datasource_precomputed_backend.PrecomputedAnnotationSourceBackend.md#initializesharedobject)
- [ownerDispose](neuroglancer_datasource_precomputed_backend.PrecomputedAnnotationSourceBackend.md#ownerdispose)
- [refCountReachedZero](neuroglancer_datasource_precomputed_backend.PrecomputedAnnotationSourceBackend.md#refcountreachedzero)
- [registerCancellable](neuroglancer_datasource_precomputed_backend.PrecomputedAnnotationSourceBackend.md#registercancellable)
- [registerDisposer](neuroglancer_datasource_precomputed_backend.PrecomputedAnnotationSourceBackend.md#registerdisposer)
- [registerEventListener](neuroglancer_datasource_precomputed_backend.PrecomputedAnnotationSourceBackend.md#registereventlistener)
- [unregisterDisposer](neuroglancer_datasource_precomputed_backend.PrecomputedAnnotationSourceBackend.md#unregisterdisposer)
- [update](neuroglancer_datasource_precomputed_backend.PrecomputedAnnotationSourceBackend.md#update)

## Constructors

### constructor

• **new PrecomputedAnnotationSourceBackend**(`rpc`, `options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](neuroglancer_worker_rpc.RPC.md) |
| `options` | `any` |

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(AnnotationSource), AnnotationSourceParameters)).constructor

#### Defined in

[src/neuroglancer/annotation/backend.ts:176](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/backend.ts#L176)

## Properties

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

Should be set to a constant specifying the SharedObject type identifier on the prototype of
final derived owner classes.  It is not used on counterpart (non-owner) classes.

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(AnnotationSource), AnnotationSourceParameters)).RPC\_TYPE\_ID

#### Defined in

[src/neuroglancer/worker_rpc.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L245)

___

### annotationPropertySerializer

• **annotationPropertySerializer**: [`AnnotationPropertySerializer`](neuroglancer_annotation.AnnotationPropertySerializer.md)

#### Defined in

[src/neuroglancer/datasource/precomputed/backend.ts:751](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/precomputed/backend.ts#L751)

___

### byIdMinishardIndexSource

• `Private` **byIdMinishardIndexSource**: `undefined` \| [`MinishardIndexSource`](../interfaces/neuroglancer_datasource_precomputed_backend._internal_.MinishardIndexSource.md)

#### Defined in

[src/neuroglancer/datasource/precomputed/backend.ts:747](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/precomputed/backend.ts#L747)

___

### chunkManager

• **chunkManager**: [`ChunkManager`](neuroglancer_chunk_manager_backend.ChunkManager.md)

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(AnnotationSource), AnnotationSourceParameters)).chunkManager

#### Defined in

[src/neuroglancer/annotation/backend.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/backend.ts#L173)

___

### credentialsProvider

• **credentialsProvider**: `undefined` \| [`CredentialsProvider`](neuroglancer_credentials_provider.CredentialsProvider.md)<`any`\>

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(AnnotationSource), AnnotationSourceParameters)).credentialsProvider

#### Defined in

[src/neuroglancer/credentials_provider/shared_counterpart.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/credentials_provider/shared_counterpart.ts#L42)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(AnnotationSource), AnnotationSourceParameters)).disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(AnnotationSource), AnnotationSourceParameters)).isOwner

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L171)

___

### metadataChunkSource

• **metadataChunkSource**: [`AnnotationMetadataChunkSource`](neuroglancer_annotation_backend._internal_.AnnotationMetadataChunkSource.md)

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(AnnotationSource), AnnotationSourceParameters)).metadataChunkSource

#### Defined in

[src/neuroglancer/annotation/backend.ts:174](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/backend.ts#L174)

___

### parameters

• **parameters**: [`AnnotationSourceParameters`](neuroglancer_datasource_precomputed_base.AnnotationSourceParameters.md)

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(AnnotationSource), AnnotationSourceParameters)).parameters

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:1125](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L1125)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(AnnotationSource), AnnotationSourceParameters)).refCount

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### referencedGeneration

• **referencedGeneration**: `number`

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(AnnotationSource), AnnotationSourceParameters)).referencedGeneration

#### Defined in

[src/neuroglancer/worker_rpc.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L173)

___

### references

• **references**: `Set`<`string`\>

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(AnnotationSource), AnnotationSourceParameters)).references

#### Defined in

[src/neuroglancer/annotation/backend.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/backend.ts#L172)

___

### relationshipIndexSource

• `Private` **relationshipIndexSource**: (`undefined` \| [`MinishardIndexSource`](../interfaces/neuroglancer_datasource_precomputed_backend._internal_.MinishardIndexSource.md))[]

#### Defined in

[src/neuroglancer/datasource/precomputed/backend.ts:749](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/precomputed/backend.ts#L749)

___

### rpc

• **rpc**: ``null`` \| [`RPC`](neuroglancer_worker_rpc.RPC.md) = `null`

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(AnnotationSource), AnnotationSourceParameters)).rpc

#### Defined in

[src/neuroglancer/worker_rpc.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L169)

___

### rpcId

• **rpcId**: ``null`` \| `number` = `null`

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(AnnotationSource), AnnotationSourceParameters)).rpcId

#### Defined in

[src/neuroglancer/worker_rpc.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L170)

___

### segmentFilteredSources

• **segmentFilteredSources**: [`AnnotationSubsetGeometryChunkSource`](neuroglancer_annotation_backend._internal_.AnnotationSubsetGeometryChunkSource.md)[]

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(AnnotationSource), AnnotationSourceParameters)).segmentFilteredSources

#### Defined in

[src/neuroglancer/annotation/backend.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/backend.ts#L175)

___

### unreferencedGeneration

• **unreferencedGeneration**: `number`

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(AnnotationSource), AnnotationSourceParameters)).unreferencedGeneration

#### Defined in

[src/neuroglancer/worker_rpc.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L172)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(AnnotationSource), AnnotationSourceParameters)).wasDisposed

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Methods

### add

▸ **add**(`annotation`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `annotation` | [`Annotation`](../modules/neuroglancer_annotation.md#annotation) |

#### Returns

`Promise`<`string`\>

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(AnnotationSource), AnnotationSourceParameters)).add

#### Defined in

[src/neuroglancer/annotation/backend.ts:201](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/backend.ts#L201)

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

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(AnnotationSource), AnnotationSourceParameters)).addCounterpartRef

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`PrecomputedAnnotationSourceBackend`](neuroglancer_datasource_precomputed_backend.PrecomputedAnnotationSourceBackend.md)

#### Returns

[`PrecomputedAnnotationSourceBackend`](neuroglancer_datasource_precomputed_backend.PrecomputedAnnotationSourceBackend.md)

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(AnnotationSource), AnnotationSourceParameters)).addRef

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

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

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(AnnotationSource), AnnotationSourceParameters)).counterpartRefCountReachedZero

#### Defined in

[src/neuroglancer/worker_rpc.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L234)

___

### delete

▸ **delete**(`id`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<`void`\>

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(AnnotationSource), AnnotationSourceParameters)).delete

#### Defined in

[src/neuroglancer/annotation/backend.ts:205](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/backend.ts#L205)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(AnnotationSource), AnnotationSourceParameters)).dispose

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(AnnotationSource), AnnotationSourceParameters)).disposed

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L75)

___

### downloadMetadata

▸ **downloadMetadata**(`chunk`, `cancellationToken`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | [`AnnotationMetadataChunk`](neuroglancer_annotation_backend.AnnotationMetadataChunk.md) |
| `cancellationToken` | [`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md) |

#### Returns

`Promise`<`void`\>

#### Overrides

(WithParameters(WithSharedCredentialsProviderCounterpart&lt;SpecialProtocolCredentials\&gt;()(AnnotationSource), AnnotationSourceParameters)).downloadMetadata

#### Defined in

[src/neuroglancer/datasource/precomputed/backend.ts:766](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/precomputed/backend.ts#L766)

___

### downloadSegmentFilteredGeometry

▸ **downloadSegmentFilteredGeometry**(`chunk`, `relationshipIndex`, `cancellationToken`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | [`AnnotationSubsetGeometryChunk`](neuroglancer_annotation_backend.AnnotationSubsetGeometryChunk.md) |
| `relationshipIndex` | `number` |
| `cancellationToken` | [`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md) |

#### Returns

`Promise`<`void`\>

#### Overrides

(WithParameters(WithSharedCredentialsProviderCounterpart&lt;SpecialProtocolCredentials\&gt;()(AnnotationSource), AnnotationSourceParameters)).downloadSegmentFilteredGeometry

#### Defined in

[src/neuroglancer/datasource/precomputed/backend.ts:754](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/precomputed/backend.ts#L754)

___

### initializeCounterpart

▸ **initializeCounterpart**(`rpc`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](neuroglancer_worker_rpc.RPC.md) |
| `options` | `any` |

#### Returns

`void`

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(AnnotationSource), AnnotationSourceParameters)).initializeCounterpart

#### Defined in

[src/neuroglancer/worker_rpc.ts:182](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L182)

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

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(AnnotationSource), AnnotationSourceParameters)).initializeSharedObject

#### Defined in

[src/neuroglancer/worker_rpc.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L175)

___

### ownerDispose

▸ `Protected` **ownerDispose**(): `void`

Precondition: this.isOwner === true.

#### Returns

`void`

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(AnnotationSource), AnnotationSourceParameters)).ownerDispose

#### Defined in

[src/neuroglancer/worker_rpc.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L219)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(AnnotationSource), AnnotationSourceParameters)).refCountReachedZero

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

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(AnnotationSource), AnnotationSourceParameters)).registerCancellable

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

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(AnnotationSource), AnnotationSourceParameters)).registerDisposer

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

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(AnnotationSource), AnnotationSourceParameters)).registerEventListener

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L95)

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

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(AnnotationSource), AnnotationSourceParameters)).unregisterDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L85)

___

### update

▸ **update**(`id`, `newAnnotation`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `newAnnotation` | [`Annotation`](../modules/neuroglancer_annotation.md#annotation) |

#### Returns

`Promise`<`void`\>

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(AnnotationSource), AnnotationSourceParameters)).update

#### Defined in

[src/neuroglancer/annotation/backend.ts:209](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/backend.ts#L209)
