[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/annotation](../modules/neuroglancer_annotation.md) / LocalAnnotationSource

# Class: LocalAnnotationSource

[neuroglancer/annotation](../modules/neuroglancer_annotation.md).LocalAnnotationSource

## Hierarchy

- [`AnnotationSource`](neuroglancer_annotation.AnnotationSource.md)

  ↳ **`LocalAnnotationSource`**

## Table of contents

### Constructors

- [constructor](neuroglancer_annotation.LocalAnnotationSource.md#constructor)

### Properties

- [annotationMap](neuroglancer_annotation.LocalAnnotationSource.md#annotationmap)
- [annotationPropertySerializer](neuroglancer_annotation.LocalAnnotationSource.md#annotationpropertyserializer)
- [changed](neuroglancer_annotation.LocalAnnotationSource.md#changed)
- [childAdded](neuroglancer_annotation.LocalAnnotationSource.md#childadded)
- [childDeleted](neuroglancer_annotation.LocalAnnotationSource.md#childdeleted)
- [childUpdated](neuroglancer_annotation.LocalAnnotationSource.md#childupdated)
- [curCoordinateTransform](neuroglancer_annotation.LocalAnnotationSource.md#curcoordinatetransform)
- [disposedStacks](neuroglancer_annotation.LocalAnnotationSource.md#disposedstacks)
- [properties](neuroglancer_annotation.LocalAnnotationSource.md#properties)
- [rank\_](neuroglancer_annotation.LocalAnnotationSource.md#rank_)
- [readonly](neuroglancer_annotation.LocalAnnotationSource.md#readonly)
- [refCount](neuroglancer_annotation.LocalAnnotationSource.md#refcount)
- [references](neuroglancer_annotation.LocalAnnotationSource.md#references)
- [relationships](neuroglancer_annotation.LocalAnnotationSource.md#relationships)
- [wasDisposed](neuroglancer_annotation.LocalAnnotationSource.md#wasdisposed)
- [watchableTransform](neuroglancer_annotation.LocalAnnotationSource.md#watchabletransform)

### Accessors

- [rank](neuroglancer_annotation.LocalAnnotationSource.md#rank)

### Methods

- [[iterator]](neuroglancer_annotation.LocalAnnotationSource.md#[iterator])
- [add](neuroglancer_annotation.LocalAnnotationSource.md#add)
- [addRef](neuroglancer_annotation.LocalAnnotationSource.md#addref)
- [clear](neuroglancer_annotation.LocalAnnotationSource.md#clear)
- [commit](neuroglancer_annotation.LocalAnnotationSource.md#commit)
- [delete](neuroglancer_annotation.LocalAnnotationSource.md#delete)
- [dispose](neuroglancer_annotation.LocalAnnotationSource.md#dispose)
- [disposed](neuroglancer_annotation.LocalAnnotationSource.md#disposed)
- [ensureUpdated](neuroglancer_annotation.LocalAnnotationSource.md#ensureupdated)
- [get](neuroglancer_annotation.LocalAnnotationSource.md#get)
- [getNonDummyAnnotationReference](neuroglancer_annotation.LocalAnnotationSource.md#getnondummyannotationreference)
- [getReference](neuroglancer_annotation.LocalAnnotationSource.md#getreference)
- [getTopMostAnnotationReference](neuroglancer_annotation.LocalAnnotationSource.md#gettopmostannotationreference)
- [getUpdatedSourceVertex](neuroglancer_annotation.LocalAnnotationSource.md#getupdatedsourcevertex)
- [hasNonSerializedProperties](neuroglancer_annotation.LocalAnnotationSource.md#hasnonserializedproperties)
- [makeAllParentsVisible](neuroglancer_annotation.LocalAnnotationSource.md#makeallparentsvisible)
- [refCountReachedZero](neuroglancer_annotation.LocalAnnotationSource.md#refcountreachedzero)
- [registerCancellable](neuroglancer_annotation.LocalAnnotationSource.md#registercancellable)
- [registerDisposer](neuroglancer_annotation.LocalAnnotationSource.md#registerdisposer)
- [registerEventListener](neuroglancer_annotation.LocalAnnotationSource.md#registereventlistener)
- [reset](neuroglancer_annotation.LocalAnnotationSource.md#reset)
- [restoreState](neuroglancer_annotation.LocalAnnotationSource.md#restorestate)
- [toJSON](neuroglancer_annotation.LocalAnnotationSource.md#tojson)
- [unregisterDisposer](neuroglancer_annotation.LocalAnnotationSource.md#unregisterdisposer)
- [update](neuroglancer_annotation.LocalAnnotationSource.md#update)
- [updateColor](neuroglancer_annotation.LocalAnnotationSource.md#updatecolor)
- [updateDescription](neuroglancer_annotation.LocalAnnotationSource.md#updatedescription)

## Constructors

### constructor

• **new LocalAnnotationSource**(`watchableTransform`, `properties`, `relationships`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `watchableTransform` | [`WatchableCoordinateSpaceTransform`](neuroglancer_coordinate_transform.WatchableCoordinateSpaceTransform.md) |
| `properties` | [`AnnotationPropertySpec`](../modules/neuroglancer_annotation.md#annotationpropertyspec)[] |
| `relationships` | `string`[] |

#### Overrides

[AnnotationSource](neuroglancer_annotation.AnnotationSource.md).[constructor](neuroglancer_annotation.AnnotationSource.md#constructor)

#### Defined in

[src/neuroglancer/annotation/index.ts:1336](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L1336)

## Properties

### annotationMap

• `Protected` **annotationMap**: `Map`<`string`, [`Annotation`](../modules/neuroglancer_annotation.md#annotation)\>

#### Inherited from

[AnnotationSource](neuroglancer_annotation.AnnotationSource.md).[annotationMap](neuroglancer_annotation.AnnotationSource.md#annotationmap)

#### Defined in

[src/neuroglancer/annotation/index.ts:902](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L902)

___

### annotationPropertySerializer

• **annotationPropertySerializer**: [`AnnotationPropertySerializer`](neuroglancer_annotation.AnnotationPropertySerializer.md)

#### Inherited from

[AnnotationSource](neuroglancer_annotation.AnnotationSource.md).[annotationPropertySerializer](neuroglancer_annotation.AnnotationSource.md#annotationpropertyserializer)

#### Defined in

[src/neuroglancer/annotation/index.ts:917](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L917)

___

### changed

• **changed**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Inherited from

[AnnotationSource](neuroglancer_annotation.AnnotationSource.md).[changed](neuroglancer_annotation.AnnotationSource.md#changed)

#### Defined in

[src/neuroglancer/annotation/index.ts:903](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L903)

___

### childAdded

• **childAdded**: [`Signal`](neuroglancer_util_signal.Signal.md)<(`annotation`: [`Annotation`](../modules/neuroglancer_annotation.md#annotation)) => `void`\>

#### Inherited from

[AnnotationSource](neuroglancer_annotation.AnnotationSource.md).[childAdded](neuroglancer_annotation.AnnotationSource.md#childadded)

#### Defined in

[src/neuroglancer/annotation/index.ts:905](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L905)

___

### childDeleted

• **childDeleted**: [`Signal`](neuroglancer_util_signal.Signal.md)<(`annotationId`: `string`) => `void`\>

#### Inherited from

[AnnotationSource](neuroglancer_annotation.AnnotationSource.md).[childDeleted](neuroglancer_annotation.AnnotationSource.md#childdeleted)

#### Defined in

[src/neuroglancer/annotation/index.ts:907](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L907)

___

### childUpdated

• **childUpdated**: [`Signal`](neuroglancer_util_signal.Signal.md)<(`annotation`: [`Annotation`](../modules/neuroglancer_annotation.md#annotation)) => `void`\>

#### Inherited from

[AnnotationSource](neuroglancer_annotation.AnnotationSource.md).[childUpdated](neuroglancer_annotation.AnnotationSource.md#childupdated)

#### Defined in

[src/neuroglancer/annotation/index.ts:906](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L906)

___

### curCoordinateTransform

• `Private` **curCoordinateTransform**: [`CoordinateSpaceTransform`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpaceTransform.md)

#### Defined in

[src/neuroglancer/annotation/index.ts:1329](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L1329)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[AnnotationSource](neuroglancer_annotation.AnnotationSource.md).[disposedStacks](neuroglancer_annotation.AnnotationSource.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### properties

• `Readonly` **properties**: [`Readonly`](../modules/neuroglancer_annotation_frontend_source._internal_.md#readonly)<[`AnnotationPropertySpec`](../modules/neuroglancer_annotation.md#annotationpropertyspec)\>[] = `[]`

#### Inherited from

[AnnotationSource](neuroglancer_annotation.AnnotationSource.md).[properties](neuroglancer_annotation.AnnotationSource.md#properties)

___

### rank\_

• `Protected` **rank\_**: `number`

#### Inherited from

[AnnotationSource](neuroglancer_annotation.AnnotationSource.md).[rank_](neuroglancer_annotation.AnnotationSource.md#rank_)

#### Defined in

[src/neuroglancer/annotation/index.ts:911](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L911)

___

### readonly

• **readonly**: `boolean` = `false`

#### Inherited from

[AnnotationSource](neuroglancer_annotation.AnnotationSource.md).[readonly](neuroglancer_annotation.AnnotationSource.md#readonly)

#### Defined in

[src/neuroglancer/annotation/index.ts:904](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L904)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[AnnotationSource](neuroglancer_annotation.AnnotationSource.md).[refCount](neuroglancer_annotation.AnnotationSource.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### references

• **references**: `Map`<`string`, [`AnnotationReference`](neuroglancer_annotation.AnnotationReference.md)\>

#### Inherited from

[AnnotationSource](neuroglancer_annotation.AnnotationSource.md).[references](neuroglancer_annotation.AnnotationSource.md#references)

#### Defined in

[src/neuroglancer/annotation/index.ts:1279](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L1279)

___

### relationships

• `Readonly` **relationships**: readonly `string`[] = `[]`

#### Inherited from

[AnnotationSource](neuroglancer_annotation.AnnotationSource.md).[relationships](neuroglancer_annotation.AnnotationSource.md#relationships)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[AnnotationSource](neuroglancer_annotation.AnnotationSource.md).[wasDisposed](neuroglancer_annotation.AnnotationSource.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

___

### watchableTransform

• **watchableTransform**: [`WatchableCoordinateSpaceTransform`](neuroglancer_coordinate_transform.WatchableCoordinateSpaceTransform.md)

## Accessors

### rank

• `get` **rank**(): `number`

#### Returns

`number`

#### Overrides

AnnotationSource.rank

#### Defined in

[src/neuroglancer/annotation/index.ts:1331](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L1331)

## Methods

### [iterator]

▸ **[iterator]**(): [`IterableIterator`](../interfaces/main_module._internal_.IterableIterator.md)<[`Annotation`](../modules/neuroglancer_annotation.md#annotation)\>

#### Returns

[`IterableIterator`](../interfaces/main_module._internal_.IterableIterator.md)<[`Annotation`](../modules/neuroglancer_annotation.md#annotation)\>

#### Inherited from

[AnnotationSource](neuroglancer_annotation.AnnotationSource.md).[[iterator]](neuroglancer_annotation.AnnotationSource.md#[iterator])

#### Defined in

[src/neuroglancer/annotation/index.ts:1019](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L1019)

___

### add

▸ **add**(`annotation`, `commit?`, `parentRef?`, `index?`): [`AnnotationReference`](neuroglancer_annotation.AnnotationReference.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `annotation` | [`Annotation`](../modules/neuroglancer_annotation.md#annotation) | `undefined` |
| `commit` | `boolean` | `true` |
| `parentRef?` | [`AnnotationReference`](neuroglancer_annotation.AnnotationReference.md) | `undefined` |
| `index?` | `number` | `undefined` |

#### Returns

[`AnnotationReference`](neuroglancer_annotation.AnnotationReference.md)

#### Inherited from

[AnnotationSource](neuroglancer_annotation.AnnotationSource.md).[add](neuroglancer_annotation.AnnotationSource.md#add)

#### Defined in

[src/neuroglancer/annotation/index.ts:931](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L931)

___

### addRef

▸ **addRef**(): [`LocalAnnotationSource`](neuroglancer_annotation.LocalAnnotationSource.md)

#### Returns

[`LocalAnnotationSource`](neuroglancer_annotation.LocalAnnotationSource.md)

#### Inherited from

[AnnotationSource](neuroglancer_annotation.AnnotationSource.md).[addRef](neuroglancer_annotation.AnnotationSource.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L48)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Inherited from

[AnnotationSource](neuroglancer_annotation.AnnotationSource.md).[clear](neuroglancer_annotation.AnnotationSource.md#clear)

#### Defined in

[src/neuroglancer/annotation/index.ts:1297](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L1297)

___

### commit

▸ **commit**(`reference`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reference` | [`AnnotationReference`](neuroglancer_annotation.AnnotationReference.md) |

#### Returns

`void`

#### Inherited from

[AnnotationSource](neuroglancer_annotation.AnnotationSource.md).[commit](neuroglancer_annotation.AnnotationSource.md#commit)

#### Defined in

[src/neuroglancer/annotation/index.ts:971](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L971)

___

### delete

▸ **delete**(`reference`, `fromParent?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `reference` | [`AnnotationReference`](neuroglancer_annotation.AnnotationReference.md) | `undefined` |
| `fromParent` | `boolean` | `false` |

#### Returns

`void`

#### Inherited from

[AnnotationSource](neuroglancer_annotation.AnnotationSource.md).[delete](neuroglancer_annotation.AnnotationSource.md#delete)

#### Defined in

[src/neuroglancer/annotation/index.ts:1029](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L1029)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[AnnotationSource](neuroglancer_annotation.AnnotationSource.md).[dispose](neuroglancer_annotation.AnnotationSource.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[AnnotationSource](neuroglancer_annotation.AnnotationSource.md).[disposed](neuroglancer_annotation.AnnotationSource.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L75)

___

### ensureUpdated

▸ **ensureUpdated**(): `void`

#### Returns

`void`

#### Overrides

[AnnotationSource](neuroglancer_annotation.AnnotationSource.md).[ensureUpdated](neuroglancer_annotation.AnnotationSource.md#ensureupdated)

#### Defined in

[src/neuroglancer/annotation/index.ts:1344](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L1344)

___

### get

▸ **get**(`id`): `undefined` \| [`Annotation`](../modules/neuroglancer_annotation.md#annotation)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`undefined` \| [`Annotation`](../modules/neuroglancer_annotation.md#annotation)

#### Inherited from

[AnnotationSource](neuroglancer_annotation.AnnotationSource.md).[get](neuroglancer_annotation.AnnotationSource.md#get)

#### Defined in

[src/neuroglancer/annotation/index.ts:1024](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L1024)

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

[AnnotationSource](neuroglancer_annotation.AnnotationSource.md).[getNonDummyAnnotationReference](neuroglancer_annotation.AnnotationSource.md#getnondummyannotationreference)

#### Defined in

[src/neuroglancer/annotation/index.ts:1096](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L1096)

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

[AnnotationSource](neuroglancer_annotation.AnnotationSource.md).[getReference](neuroglancer_annotation.AnnotationSource.md#getreference)

#### Defined in

[src/neuroglancer/annotation/index.ts:1077](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L1077)

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

[AnnotationSource](neuroglancer_annotation.AnnotationSource.md).[getTopMostAnnotationReference](neuroglancer_annotation.AnnotationSource.md#gettopmostannotationreference)

#### Defined in

[src/neuroglancer/annotation/index.ts:1119](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L1119)

___

### getUpdatedSourceVertex

▸ **getUpdatedSourceVertex**(`ann`): [`Collection`](../interfaces/neuroglancer_annotation.Collection.md)

Update the source vertex if child's source vertex gets updated.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ann` | [`Collection`](../interfaces/neuroglancer_annotation.Collection.md) | Annotation which needs to be updated. |

#### Returns

[`Collection`](../interfaces/neuroglancer_annotation.Collection.md)

a new annotation with updated source vertex.

#### Inherited from

[AnnotationSource](neuroglancer_annotation.AnnotationSource.md).[getUpdatedSourceVertex](neuroglancer_annotation.AnnotationSource.md#getupdatedsourcevertex)

#### Defined in

[src/neuroglancer/annotation/index.ts:1138](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L1138)

___

### hasNonSerializedProperties

▸ **hasNonSerializedProperties**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[AnnotationSource](neuroglancer_annotation.AnnotationSource.md).[hasNonSerializedProperties](neuroglancer_annotation.AnnotationSource.md#hasnonserializedproperties)

#### Defined in

[src/neuroglancer/annotation/index.ts:927](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L927)

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

[AnnotationSource](neuroglancer_annotation.AnnotationSource.md).[makeAllParentsVisible](neuroglancer_annotation.AnnotationSource.md#makeallparentsvisible)

#### Defined in

[src/neuroglancer/annotation/index.ts:1254](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L1254)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[AnnotationSource](neuroglancer_annotation.AnnotationSource.md).[refCountReachedZero](neuroglancer_annotation.AnnotationSource.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L66)

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

[AnnotationSource](neuroglancer_annotation.AnnotationSource.md).[registerCancellable](neuroglancer_annotation.AnnotationSource.md#registercancellable)

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

[AnnotationSource](neuroglancer_annotation.AnnotationSource.md).[registerDisposer](neuroglancer_annotation.AnnotationSource.md#registerdisposer)

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

[AnnotationSource](neuroglancer_annotation.AnnotationSource.md).[registerEventListener](neuroglancer_annotation.AnnotationSource.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L95)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Inherited from

[AnnotationSource](neuroglancer_annotation.AnnotationSource.md).[reset](neuroglancer_annotation.AnnotationSource.md#reset)

#### Defined in

[src/neuroglancer/annotation/index.ts:1323](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L1323)

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

[AnnotationSource](neuroglancer_annotation.AnnotationSource.md).[restoreState](neuroglancer_annotation.AnnotationSource.md#restorestate)

#### Defined in

[src/neuroglancer/annotation/index.ts:1303](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L1303)

___

### toJSON

▸ **toJSON**(): `any`[]

#### Returns

`any`[]

#### Inherited from

[AnnotationSource](neuroglancer_annotation.AnnotationSource.md).[toJSON](neuroglancer_annotation.AnnotationSource.md#tojson)

#### Defined in

[src/neuroglancer/annotation/index.ts:1283](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L1283)

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

[AnnotationSource](neuroglancer_annotation.AnnotationSource.md).[unregisterDisposer](neuroglancer_annotation.AnnotationSource.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L85)

___

### update

▸ **update**(`reference`, `annotation`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reference` | [`AnnotationReference`](neuroglancer_annotation.AnnotationReference.md) |
| `annotation` | [`Annotation`](../modules/neuroglancer_annotation.md#annotation) |

#### Returns

`void`

#### Inherited from

[AnnotationSource](neuroglancer_annotation.AnnotationSource.md).[update](neuroglancer_annotation.AnnotationSource.md#update)

#### Defined in

[src/neuroglancer/annotation/index.ts:984](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L984)

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

[AnnotationSource](neuroglancer_annotation.AnnotationSource.md).[updateColor](neuroglancer_annotation.AnnotationSource.md#updatecolor)

#### Defined in

[src/neuroglancer/annotation/index.ts:1168](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L1168)

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

[AnnotationSource](neuroglancer_annotation.AnnotationSource.md).[updateDescription](neuroglancer_annotation.AnnotationSource.md#updatedescription)

#### Defined in

[src/neuroglancer/annotation/index.ts:1191](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L1191)
