[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation](../modules/annotation.md) / LocalAnnotationSource

# Class: LocalAnnotationSource

[annotation](../modules/annotation.md).LocalAnnotationSource

## Hierarchy

- [`AnnotationSource`](annotation.AnnotationSource.md)

  ↳ **`LocalAnnotationSource`**

## Table of contents

### Constructors

- [constructor](annotation.LocalAnnotationSource.md#constructor)

### Properties

- [annotationMap](annotation.LocalAnnotationSource.md#annotationmap)
- [annotationPropertySerializer](annotation.LocalAnnotationSource.md#annotationpropertyserializer)
- [changed](annotation.LocalAnnotationSource.md#changed)
- [childAdded](annotation.LocalAnnotationSource.md#childadded)
- [childDeleted](annotation.LocalAnnotationSource.md#childdeleted)
- [childUpdated](annotation.LocalAnnotationSource.md#childupdated)
- [curCoordinateTransform](annotation.LocalAnnotationSource.md#curcoordinatetransform)
- [disposedStacks](annotation.LocalAnnotationSource.md#disposedstacks)
- [properties](annotation.LocalAnnotationSource.md#properties)
- [rank\_](annotation.LocalAnnotationSource.md#rank_)
- [readonly](annotation.LocalAnnotationSource.md#readonly)
- [refCount](annotation.LocalAnnotationSource.md#refcount)
- [references](annotation.LocalAnnotationSource.md#references)
- [relationships](annotation.LocalAnnotationSource.md#relationships)
- [wasDisposed](annotation.LocalAnnotationSource.md#wasdisposed)
- [watchableTransform](annotation.LocalAnnotationSource.md#watchabletransform)

### Accessors

- [rank](annotation.LocalAnnotationSource.md#rank)

### Methods

- [[iterator]](annotation.LocalAnnotationSource.md#[iterator])
- [add](annotation.LocalAnnotationSource.md#add)
- [addRef](annotation.LocalAnnotationSource.md#addref)
- [clear](annotation.LocalAnnotationSource.md#clear)
- [commit](annotation.LocalAnnotationSource.md#commit)
- [delete](annotation.LocalAnnotationSource.md#delete)
- [dispose](annotation.LocalAnnotationSource.md#dispose)
- [disposed](annotation.LocalAnnotationSource.md#disposed)
- [ensureUpdated](annotation.LocalAnnotationSource.md#ensureupdated)
- [get](annotation.LocalAnnotationSource.md#get)
- [getNonDummyAnnotationReference](annotation.LocalAnnotationSource.md#getnondummyannotationreference)
- [getReference](annotation.LocalAnnotationSource.md#getreference)
- [getTopMostAnnotationReference](annotation.LocalAnnotationSource.md#gettopmostannotationreference)
- [getUpdatedSourceVertex](annotation.LocalAnnotationSource.md#getupdatedsourcevertex)
- [hasNonSerializedProperties](annotation.LocalAnnotationSource.md#hasnonserializedproperties)
- [makeAllParentsVisible](annotation.LocalAnnotationSource.md#makeallparentsvisible)
- [refCountReachedZero](annotation.LocalAnnotationSource.md#refcountreachedzero)
- [registerCancellable](annotation.LocalAnnotationSource.md#registercancellable)
- [registerDisposer](annotation.LocalAnnotationSource.md#registerdisposer)
- [registerEventListener](annotation.LocalAnnotationSource.md#registereventlistener)
- [reset](annotation.LocalAnnotationSource.md#reset)
- [restoreState](annotation.LocalAnnotationSource.md#restorestate)
- [toJSON](annotation.LocalAnnotationSource.md#tojson)
- [unregisterDisposer](annotation.LocalAnnotationSource.md#unregisterdisposer)
- [update](annotation.LocalAnnotationSource.md#update)
- [updateColor](annotation.LocalAnnotationSource.md#updatecolor)
- [updateDescription](annotation.LocalAnnotationSource.md#updatedescription)

## Constructors

### constructor

• **new LocalAnnotationSource**(`watchableTransform`, `properties`, `relationships`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `watchableTransform` | [`WatchableCoordinateSpaceTransform`](annotation_annotation_layer_state._internal_.WatchableCoordinateSpaceTransform.md) |
| `properties` | [`AnnotationPropertySpec`](../modules/annotation.md#annotationpropertyspec)[] |
| `relationships` | `string`[] |

#### Overrides

[AnnotationSource](annotation.AnnotationSource.md).[constructor](annotation.AnnotationSource.md#constructor)

#### Defined in

[src/neuroglancer/annotation/index.ts:1336](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L1336)

## Properties

### annotationMap

• `Protected` **annotationMap**: `Map`<`string`, [`Annotation`](../modules/annotation.md#annotation)\>

#### Inherited from

[AnnotationSource](annotation.AnnotationSource.md).[annotationMap](annotation.AnnotationSource.md#annotationmap)

#### Defined in

[src/neuroglancer/annotation/index.ts:902](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L902)

___

### annotationPropertySerializer

• **annotationPropertySerializer**: [`AnnotationPropertySerializer`](annotation.AnnotationPropertySerializer.md)

#### Inherited from

[AnnotationSource](annotation.AnnotationSource.md).[annotationPropertySerializer](annotation.AnnotationSource.md#annotationpropertyserializer)

#### Defined in

[src/neuroglancer/annotation/index.ts:917](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L917)

___

### changed

• **changed**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Inherited from

[AnnotationSource](annotation.AnnotationSource.md).[changed](annotation.AnnotationSource.md#changed)

#### Defined in

[src/neuroglancer/annotation/index.ts:903](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L903)

___

### childAdded

• **childAdded**: [`Signal`](util_signal.Signal.md)<(`annotation`: [`Annotation`](../modules/annotation.md#annotation)) => `void`\>

#### Inherited from

[AnnotationSource](annotation.AnnotationSource.md).[childAdded](annotation.AnnotationSource.md#childadded)

#### Defined in

[src/neuroglancer/annotation/index.ts:905](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L905)

___

### childDeleted

• **childDeleted**: [`Signal`](util_signal.Signal.md)<(`annotationId`: `string`) => `void`\>

#### Inherited from

[AnnotationSource](annotation.AnnotationSource.md).[childDeleted](annotation.AnnotationSource.md#childdeleted)

#### Defined in

[src/neuroglancer/annotation/index.ts:907](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L907)

___

### childUpdated

• **childUpdated**: [`Signal`](util_signal.Signal.md)<(`annotation`: [`Annotation`](../modules/annotation.md#annotation)) => `void`\>

#### Inherited from

[AnnotationSource](annotation.AnnotationSource.md).[childUpdated](annotation.AnnotationSource.md#childupdated)

#### Defined in

[src/neuroglancer/annotation/index.ts:906](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L906)

___

### curCoordinateTransform

• `Private` **curCoordinateTransform**: [`CoordinateSpaceTransform`](../interfaces/annotation_annotation_layer_state._internal_.CoordinateSpaceTransform.md)

#### Defined in

[src/neuroglancer/annotation/index.ts:1329](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L1329)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[AnnotationSource](annotation.AnnotationSource.md).[disposedStacks](annotation.AnnotationSource.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### properties

• `Readonly` **properties**: [`Readonly`](../modules/annotation_annotation_layer_state._internal_.md#readonly)<[`AnnotationPropertySpec`](../modules/annotation.md#annotationpropertyspec)\>[] = `[]`

#### Inherited from

[AnnotationSource](annotation.AnnotationSource.md).[properties](annotation.AnnotationSource.md#properties)

___

### rank\_

• `Protected` **rank\_**: `number`

#### Inherited from

[AnnotationSource](annotation.AnnotationSource.md).[rank_](annotation.AnnotationSource.md#rank_)

#### Defined in

[src/neuroglancer/annotation/index.ts:911](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L911)

___

### readonly

• **readonly**: `boolean` = `false`

#### Inherited from

[AnnotationSource](annotation.AnnotationSource.md).[readonly](annotation.AnnotationSource.md#readonly)

#### Defined in

[src/neuroglancer/annotation/index.ts:904](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L904)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[AnnotationSource](annotation.AnnotationSource.md).[refCount](annotation.AnnotationSource.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### references

• **references**: `Map`<`string`, [`AnnotationReference`](annotation.AnnotationReference.md)\>

#### Inherited from

[AnnotationSource](annotation.AnnotationSource.md).[references](annotation.AnnotationSource.md#references)

#### Defined in

[src/neuroglancer/annotation/index.ts:1279](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L1279)

___

### relationships

• `Readonly` **relationships**: readonly `string`[] = `[]`

#### Inherited from

[AnnotationSource](annotation.AnnotationSource.md).[relationships](annotation.AnnotationSource.md#relationships)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[AnnotationSource](annotation.AnnotationSource.md).[wasDisposed](annotation.AnnotationSource.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

___

### watchableTransform

• **watchableTransform**: [`WatchableCoordinateSpaceTransform`](annotation_annotation_layer_state._internal_.WatchableCoordinateSpaceTransform.md)

## Accessors

### rank

• `get` **rank**(): `number`

#### Returns

`number`

#### Overrides

AnnotationSource.rank

#### Defined in

[src/neuroglancer/annotation/index.ts:1331](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L1331)

## Methods

### [iterator]

▸ **[iterator]**(): [`IterableIterator`](../interfaces/annotation_annotation_layer_state._internal_.IterableIterator.md)<[`Annotation`](../modules/annotation.md#annotation)\>

#### Returns

[`IterableIterator`](../interfaces/annotation_annotation_layer_state._internal_.IterableIterator.md)<[`Annotation`](../modules/annotation.md#annotation)\>

#### Inherited from

[AnnotationSource](annotation.AnnotationSource.md).[[iterator]](annotation.AnnotationSource.md#[iterator])

#### Defined in

[src/neuroglancer/annotation/index.ts:1019](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L1019)

___

### add

▸ **add**(`annotation`, `commit?`, `parentRef?`, `index?`): [`AnnotationReference`](annotation.AnnotationReference.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `annotation` | [`Annotation`](../modules/annotation.md#annotation) | `undefined` |
| `commit` | `boolean` | `true` |
| `parentRef?` | [`AnnotationReference`](annotation.AnnotationReference.md) | `undefined` |
| `index?` | `number` | `undefined` |

#### Returns

[`AnnotationReference`](annotation.AnnotationReference.md)

#### Inherited from

[AnnotationSource](annotation.AnnotationSource.md).[add](annotation.AnnotationSource.md#add)

#### Defined in

[src/neuroglancer/annotation/index.ts:931](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L931)

___

### addRef

▸ **addRef**(): [`LocalAnnotationSource`](annotation.LocalAnnotationSource.md)

#### Returns

[`LocalAnnotationSource`](annotation.LocalAnnotationSource.md)

#### Inherited from

[AnnotationSource](annotation.AnnotationSource.md).[addRef](annotation.AnnotationSource.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Inherited from

[AnnotationSource](annotation.AnnotationSource.md).[clear](annotation.AnnotationSource.md#clear)

#### Defined in

[src/neuroglancer/annotation/index.ts:1297](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L1297)

___

### commit

▸ **commit**(`reference`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reference` | [`AnnotationReference`](annotation.AnnotationReference.md) |

#### Returns

`void`

#### Inherited from

[AnnotationSource](annotation.AnnotationSource.md).[commit](annotation.AnnotationSource.md#commit)

#### Defined in

[src/neuroglancer/annotation/index.ts:971](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L971)

___

### delete

▸ **delete**(`reference`, `fromParent?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `reference` | [`AnnotationReference`](annotation.AnnotationReference.md) | `undefined` |
| `fromParent` | `boolean` | `false` |

#### Returns

`void`

#### Inherited from

[AnnotationSource](annotation.AnnotationSource.md).[delete](annotation.AnnotationSource.md#delete)

#### Defined in

[src/neuroglancer/annotation/index.ts:1029](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L1029)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[AnnotationSource](annotation.AnnotationSource.md).[dispose](annotation.AnnotationSource.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[AnnotationSource](annotation.AnnotationSource.md).[disposed](annotation.AnnotationSource.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L75)

___

### ensureUpdated

▸ **ensureUpdated**(): `void`

#### Returns

`void`

#### Overrides

[AnnotationSource](annotation.AnnotationSource.md).[ensureUpdated](annotation.AnnotationSource.md#ensureupdated)

#### Defined in

[src/neuroglancer/annotation/index.ts:1344](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L1344)

___

### get

▸ **get**(`id`): `undefined` \| [`Annotation`](../modules/annotation.md#annotation)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`undefined` \| [`Annotation`](../modules/annotation.md#annotation)

#### Inherited from

[AnnotationSource](annotation.AnnotationSource.md).[get](annotation.AnnotationSource.md#get)

#### Defined in

[src/neuroglancer/annotation/index.ts:1024](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L1024)

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

#### Inherited from

[AnnotationSource](annotation.AnnotationSource.md).[getNonDummyAnnotationReference](annotation.AnnotationSource.md#getnondummyannotationreference)

#### Defined in

[src/neuroglancer/annotation/index.ts:1096](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L1096)

___

### getReference

▸ **getReference**(`id`): [`AnnotationReference`](annotation.AnnotationReference.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

[`AnnotationReference`](annotation.AnnotationReference.md)

#### Inherited from

[AnnotationSource](annotation.AnnotationSource.md).[getReference](annotation.AnnotationSource.md#getreference)

#### Defined in

[src/neuroglancer/annotation/index.ts:1077](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L1077)

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

#### Inherited from

[AnnotationSource](annotation.AnnotationSource.md).[getTopMostAnnotationReference](annotation.AnnotationSource.md#gettopmostannotationreference)

#### Defined in

[src/neuroglancer/annotation/index.ts:1119](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L1119)

___

### getUpdatedSourceVertex

▸ **getUpdatedSourceVertex**(`ann`): [`Collection`](../interfaces/annotation.Collection.md)

Update the source vertex if child's source vertex gets updated.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ann` | [`Collection`](../interfaces/annotation.Collection.md) | Annotation which needs to be updated. |

#### Returns

[`Collection`](../interfaces/annotation.Collection.md)

a new annotation with updated source vertex.

#### Inherited from

[AnnotationSource](annotation.AnnotationSource.md).[getUpdatedSourceVertex](annotation.AnnotationSource.md#getupdatedsourcevertex)

#### Defined in

[src/neuroglancer/annotation/index.ts:1138](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L1138)

___

### hasNonSerializedProperties

▸ **hasNonSerializedProperties**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[AnnotationSource](annotation.AnnotationSource.md).[hasNonSerializedProperties](annotation.AnnotationSource.md#hasnonserializedproperties)

#### Defined in

[src/neuroglancer/annotation/index.ts:927](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L927)

___

### makeAllParentsVisible

▸ **makeAllParentsVisible**(`annotationId`): `void`

Make all ancestors of the current annotation to be visible
in the annotations tab.

#### Parameters

| Name | Type |
| :------ | :------ |
| `annotationId` | `string` |

#### Returns

`void`

void

#### Inherited from

[AnnotationSource](annotation.AnnotationSource.md).[makeAllParentsVisible](annotation.AnnotationSource.md#makeallparentsvisible)

#### Defined in

[src/neuroglancer/annotation/index.ts:1254](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L1254)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[AnnotationSource](annotation.AnnotationSource.md).[refCountReachedZero](annotation.AnnotationSource.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L66)

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

[AnnotationSource](annotation.AnnotationSource.md).[registerCancellable](annotation.AnnotationSource.md#registercancellable)

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

[AnnotationSource](annotation.AnnotationSource.md).[registerDisposer](annotation.AnnotationSource.md#registerdisposer)

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

[AnnotationSource](annotation.AnnotationSource.md).[registerEventListener](annotation.AnnotationSource.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L95)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Inherited from

[AnnotationSource](annotation.AnnotationSource.md).[reset](annotation.AnnotationSource.md#reset)

#### Defined in

[src/neuroglancer/annotation/index.ts:1323](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L1323)

___

### restoreState

▸ **restoreState**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

`void`

#### Inherited from

[AnnotationSource](annotation.AnnotationSource.md).[restoreState](annotation.AnnotationSource.md#restorestate)

#### Defined in

[src/neuroglancer/annotation/index.ts:1303](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L1303)

___

### toJSON

▸ **toJSON**(): `any`[]

#### Returns

`any`[]

#### Inherited from

[AnnotationSource](annotation.AnnotationSource.md).[toJSON](annotation.AnnotationSource.md#tojson)

#### Defined in

[src/neuroglancer/annotation/index.ts:1283](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L1283)

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

[AnnotationSource](annotation.AnnotationSource.md).[unregisterDisposer](annotation.AnnotationSource.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)

___

### update

▸ **update**(`reference`, `annotation`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reference` | [`AnnotationReference`](annotation.AnnotationReference.md) |
| `annotation` | [`Annotation`](../modules/annotation.md#annotation) |

#### Returns

`void`

#### Inherited from

[AnnotationSource](annotation.AnnotationSource.md).[update](annotation.AnnotationSource.md#update)

#### Defined in

[src/neuroglancer/annotation/index.ts:984](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L984)

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

#### Inherited from

[AnnotationSource](annotation.AnnotationSource.md).[updateColor](annotation.AnnotationSource.md#updatecolor)

#### Defined in

[src/neuroglancer/annotation/index.ts:1168](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L1168)

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

#### Inherited from

[AnnotationSource](annotation.AnnotationSource.md).[updateDescription](annotation.AnnotationSource.md#updatedescription)

#### Defined in

[src/neuroglancer/annotation/index.ts:1191](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L1191)
