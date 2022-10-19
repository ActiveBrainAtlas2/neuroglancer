[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation](../modules/annotation.md) / AnnotationSource

# Class: AnnotationSource

[annotation](../modules/annotation.md).AnnotationSource

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`AnnotationSource`**

  ↳↳ [`LocalAnnotationSource`](annotation.LocalAnnotationSource.md)

## Implements

- [`AnnotationSourceSignals`](../interfaces/annotation.AnnotationSourceSignals.md)

## Table of contents

### Constructors

- [constructor](annotation.AnnotationSource.md#constructor)

### Properties

- [annotationMap](annotation.AnnotationSource.md#annotationmap)
- [annotationPropertySerializer](annotation.AnnotationSource.md#annotationpropertyserializer)
- [changed](annotation.AnnotationSource.md#changed)
- [childAdded](annotation.AnnotationSource.md#childadded)
- [childDeleted](annotation.AnnotationSource.md#childdeleted)
- [childUpdated](annotation.AnnotationSource.md#childupdated)
- [disposedStacks](annotation.AnnotationSource.md#disposedstacks)
- [pending](annotation.AnnotationSource.md#pending)
- [properties](annotation.AnnotationSource.md#properties)
- [rank\_](annotation.AnnotationSource.md#rank_)
- [readonly](annotation.AnnotationSource.md#readonly)
- [refCount](annotation.AnnotationSource.md#refcount)
- [references](annotation.AnnotationSource.md#references)
- [relationships](annotation.AnnotationSource.md#relationships)
- [wasDisposed](annotation.AnnotationSource.md#wasdisposed)

### Accessors

- [rank](annotation.AnnotationSource.md#rank)

### Methods

- [[iterator]](annotation.AnnotationSource.md#[iterator])
- [add](annotation.AnnotationSource.md#add)
- [addRef](annotation.AnnotationSource.md#addref)
- [clear](annotation.AnnotationSource.md#clear)
- [commit](annotation.AnnotationSource.md#commit)
- [delete](annotation.AnnotationSource.md#delete)
- [dispose](annotation.AnnotationSource.md#dispose)
- [disposed](annotation.AnnotationSource.md#disposed)
- [ensureUpdated](annotation.AnnotationSource.md#ensureupdated)
- [get](annotation.AnnotationSource.md#get)
- [getAllAnnsUnderRoot](annotation.AnnotationSource.md#getallannsunderroot)
- [getAllAnnsUnderRootToDisplay](annotation.AnnotationSource.md#getallannsunderroottodisplay)
- [getNonDummyAnnotationReference](annotation.AnnotationSource.md#getnondummyannotationreference)
- [getReference](annotation.AnnotationSource.md#getreference)
- [getTopMostAnnotationReference](annotation.AnnotationSource.md#gettopmostannotationreference)
- [getUpdatedSourceVertex](annotation.AnnotationSource.md#getupdatedsourcevertex)
- [hasNonSerializedProperties](annotation.AnnotationSource.md#hasnonserializedproperties)
- [makeAllParentsVisible](annotation.AnnotationSource.md#makeallparentsvisible)
- [refCountReachedZero](annotation.AnnotationSource.md#refcountreachedzero)
- [registerCancellable](annotation.AnnotationSource.md#registercancellable)
- [registerDisposer](annotation.AnnotationSource.md#registerdisposer)
- [registerEventListener](annotation.AnnotationSource.md#registereventlistener)
- [reset](annotation.AnnotationSource.md#reset)
- [restoreState](annotation.AnnotationSource.md#restorestate)
- [toJSON](annotation.AnnotationSource.md#tojson)
- [unregisterDisposer](annotation.AnnotationSource.md#unregisterdisposer)
- [update](annotation.AnnotationSource.md#update)
- [updateColor](annotation.AnnotationSource.md#updatecolor)
- [updateDescription](annotation.AnnotationSource.md#updatedescription)

## Constructors

### constructor

• **new AnnotationSource**(`rank`, `relationships?`, `properties?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `rank` | `number` | `undefined` |
| `relationships` | readonly `string`[] | `[]` |
| `properties` | [`Readonly`](../modules/annotation_annotation_layer_state._internal_.md#readonly)<[`AnnotationPropertySpec`](../modules/annotation.md#annotationpropertyspec)\>[] | `[]` |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/annotation/index.ts:919](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L919)

## Properties

### annotationMap

• `Protected` **annotationMap**: `Map`<`string`, [`Annotation`](../modules/annotation.md#annotation)\>

#### Defined in

[src/neuroglancer/annotation/index.ts:902](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L902)

___

### annotationPropertySerializer

• **annotationPropertySerializer**: [`AnnotationPropertySerializer`](annotation.AnnotationPropertySerializer.md)

#### Defined in

[src/neuroglancer/annotation/index.ts:917](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L917)

___

### changed

• **changed**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Implementation of

[AnnotationSourceSignals](../interfaces/annotation.AnnotationSourceSignals.md).[changed](../interfaces/annotation.AnnotationSourceSignals.md#changed)

#### Defined in

[src/neuroglancer/annotation/index.ts:903](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L903)

___

### childAdded

• **childAdded**: [`Signal`](util_signal.Signal.md)<(`annotation`: [`Annotation`](../modules/annotation.md#annotation)) => `void`\>

#### Implementation of

[AnnotationSourceSignals](../interfaces/annotation.AnnotationSourceSignals.md).[childAdded](../interfaces/annotation.AnnotationSourceSignals.md#childadded)

#### Defined in

[src/neuroglancer/annotation/index.ts:905](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L905)

___

### childDeleted

• **childDeleted**: [`Signal`](util_signal.Signal.md)<(`annotationId`: `string`) => `void`\>

#### Implementation of

[AnnotationSourceSignals](../interfaces/annotation.AnnotationSourceSignals.md).[childDeleted](../interfaces/annotation.AnnotationSourceSignals.md#childdeleted)

#### Defined in

[src/neuroglancer/annotation/index.ts:907](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L907)

___

### childUpdated

• **childUpdated**: [`Signal`](util_signal.Signal.md)<(`annotation`: [`Annotation`](../modules/annotation.md#annotation)) => `void`\>

#### Implementation of

[AnnotationSourceSignals](../interfaces/annotation.AnnotationSourceSignals.md).[childUpdated](../interfaces/annotation.AnnotationSourceSignals.md#childupdated)

#### Defined in

[src/neuroglancer/annotation/index.ts:906](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L906)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### pending

• `Private` **pending**: `Set`<`string`\>

#### Defined in

[src/neuroglancer/annotation/index.ts:909](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L909)

___

### properties

• `Readonly` **properties**: [`Readonly`](../modules/annotation_annotation_layer_state._internal_.md#readonly)<[`AnnotationPropertySpec`](../modules/annotation.md#annotationpropertyspec)\>[] = `[]`

___

### rank\_

• `Protected` **rank\_**: `number`

#### Defined in

[src/neuroglancer/annotation/index.ts:911](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L911)

___

### readonly

• **readonly**: `boolean` = `false`

#### Defined in

[src/neuroglancer/annotation/index.ts:904](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L904)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### references

• **references**: `Map`<`string`, [`AnnotationReference`](annotation.AnnotationReference.md)\>

#### Defined in

[src/neuroglancer/annotation/index.ts:1279](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L1279)

___

### relationships

• `Readonly` **relationships**: readonly `string`[] = `[]`

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### rank

• `get` **rank**(): `number`

#### Returns

`number`

#### Defined in

[src/neuroglancer/annotation/index.ts:913](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L913)

## Methods

### [iterator]

▸ **[iterator]**(): [`IterableIterator`](../interfaces/annotation_annotation_layer_state._internal_.IterableIterator.md)<[`Annotation`](../modules/annotation.md#annotation)\>

#### Returns

[`IterableIterator`](../interfaces/annotation_annotation_layer_state._internal_.IterableIterator.md)<[`Annotation`](../modules/annotation.md#annotation)\>

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

#### Defined in

[src/neuroglancer/annotation/index.ts:931](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L931)

___

### addRef

▸ **addRef**(): [`AnnotationSource`](annotation.AnnotationSource.md)

#### Returns

[`AnnotationSource`](annotation.AnnotationSource.md)

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[addRef](util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

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

#### Defined in

[src/neuroglancer/annotation/index.ts:1029](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L1029)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[dispose](util_disposable.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposed](util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L75)

___

### ensureUpdated

▸ `Protected` **ensureUpdated**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/index.ts:1281](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L1281)

___

### get

▸ **get**(`id`): `undefined` \| [`Annotation`](../modules/annotation.md#annotation)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`undefined` \| [`Annotation`](../modules/annotation.md#annotation)

#### Defined in

[src/neuroglancer/annotation/index.ts:1024](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L1024)

___

### getAllAnnsUnderRoot

▸ `Private` **getAllAnnsUnderRoot**(`annotationId`): [`Annotation`](../modules/annotation.md#annotation)[]

Takes an annotation and returns all descendants under that annotation

#### Parameters

| Name | Type |
| :------ | :------ |
| `annotationId` | `string` |

#### Returns

[`Annotation`](../modules/annotation.md#annotation)[]

an array of descendants of this annotation.

#### Defined in

[src/neuroglancer/annotation/index.ts:1202](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L1202)

___

### getAllAnnsUnderRootToDisplay

▸ `Private` **getAllAnnsUnderRootToDisplay**(`annotationId`, `visible?`): `void`

Makes sure that all descendants under this annotation which need to be visible
added to the annotations tab.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `annotationId` | `string` | `undefined` | annotation id of the input annotation |
| `visible` | `boolean` | `false` | if the current annotation is visible or not, default is false. |

#### Returns

`void`

void

#### Defined in

[src/neuroglancer/annotation/index.ts:1228](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L1228)

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

#### Defined in

[src/neuroglancer/annotation/index.ts:1138](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L1138)

___

### hasNonSerializedProperties

▸ **hasNonSerializedProperties**(): `boolean`

#### Returns

`boolean`

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

#### Defined in

[src/neuroglancer/annotation/index.ts:1254](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L1254)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCountReachedZero](util_disposable.RefCounted.md#refcountreachedzero)

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

[RefCounted](util_disposable.RefCounted.md).[registerCancellable](util_disposable.RefCounted.md#registercancellable)

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

[RefCounted](util_disposable.RefCounted.md).[registerDisposer](util_disposable.RefCounted.md#registerdisposer)

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

[RefCounted](util_disposable.RefCounted.md).[registerEventListener](util_disposable.RefCounted.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L95)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

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

#### Defined in

[src/neuroglancer/annotation/index.ts:1303](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L1303)

___

### toJSON

▸ **toJSON**(): `any`[]

#### Returns

`any`[]

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

[RefCounted](util_disposable.RefCounted.md).[unregisterDisposer](util_disposable.RefCounted.md#unregisterdisposer)

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

#### Defined in

[src/neuroglancer/annotation/index.ts:1191](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L1191)
