[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/annotation](../modules/neuroglancer_annotation.md) / AnnotationSource

# Class: AnnotationSource

[neuroglancer/annotation](../modules/neuroglancer_annotation.md).AnnotationSource

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`AnnotationSource`**

  ↳↳ [`LocalAnnotationSource`](neuroglancer_annotation.LocalAnnotationSource.md)

## Implements

- [`AnnotationSourceSignals`](../interfaces/neuroglancer_annotation.AnnotationSourceSignals.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_annotation.AnnotationSource.md#constructor)

### Properties

- [annotationMap](neuroglancer_annotation.AnnotationSource.md#annotationmap)
- [annotationPropertySerializer](neuroglancer_annotation.AnnotationSource.md#annotationpropertyserializer)
- [changed](neuroglancer_annotation.AnnotationSource.md#changed)
- [childAdded](neuroglancer_annotation.AnnotationSource.md#childadded)
- [childDeleted](neuroglancer_annotation.AnnotationSource.md#childdeleted)
- [childUpdated](neuroglancer_annotation.AnnotationSource.md#childupdated)
- [disposedStacks](neuroglancer_annotation.AnnotationSource.md#disposedstacks)
- [pending](neuroglancer_annotation.AnnotationSource.md#pending)
- [properties](neuroglancer_annotation.AnnotationSource.md#properties)
- [rank\_](neuroglancer_annotation.AnnotationSource.md#rank_)
- [readonly](neuroglancer_annotation.AnnotationSource.md#readonly)
- [refCount](neuroglancer_annotation.AnnotationSource.md#refcount)
- [references](neuroglancer_annotation.AnnotationSource.md#references)
- [relationships](neuroglancer_annotation.AnnotationSource.md#relationships)
- [wasDisposed](neuroglancer_annotation.AnnotationSource.md#wasdisposed)

### Accessors

- [rank](neuroglancer_annotation.AnnotationSource.md#rank)

### Methods

- [[iterator]](neuroglancer_annotation.AnnotationSource.md#[iterator])
- [add](neuroglancer_annotation.AnnotationSource.md#add)
- [addRef](neuroglancer_annotation.AnnotationSource.md#addref)
- [clear](neuroglancer_annotation.AnnotationSource.md#clear)
- [commit](neuroglancer_annotation.AnnotationSource.md#commit)
- [delete](neuroglancer_annotation.AnnotationSource.md#delete)
- [dispose](neuroglancer_annotation.AnnotationSource.md#dispose)
- [disposed](neuroglancer_annotation.AnnotationSource.md#disposed)
- [ensureUpdated](neuroglancer_annotation.AnnotationSource.md#ensureupdated)
- [get](neuroglancer_annotation.AnnotationSource.md#get)
- [getAllAnnsUnderRoot](neuroglancer_annotation.AnnotationSource.md#getallannsunderroot)
- [getAllAnnsUnderRootToDisplay](neuroglancer_annotation.AnnotationSource.md#getallannsunderroottodisplay)
- [getNonDummyAnnotationReference](neuroglancer_annotation.AnnotationSource.md#getnondummyannotationreference)
- [getReference](neuroglancer_annotation.AnnotationSource.md#getreference)
- [getTopMostAnnotationReference](neuroglancer_annotation.AnnotationSource.md#gettopmostannotationreference)
- [getUpdatedSourceVertex](neuroglancer_annotation.AnnotationSource.md#getupdatedsourcevertex)
- [hasNonSerializedProperties](neuroglancer_annotation.AnnotationSource.md#hasnonserializedproperties)
- [makeAllParentsVisible](neuroglancer_annotation.AnnotationSource.md#makeallparentsvisible)
- [refCountReachedZero](neuroglancer_annotation.AnnotationSource.md#refcountreachedzero)
- [registerCancellable](neuroglancer_annotation.AnnotationSource.md#registercancellable)
- [registerDisposer](neuroglancer_annotation.AnnotationSource.md#registerdisposer)
- [registerEventListener](neuroglancer_annotation.AnnotationSource.md#registereventlistener)
- [reset](neuroglancer_annotation.AnnotationSource.md#reset)
- [restoreState](neuroglancer_annotation.AnnotationSource.md#restorestate)
- [toJSON](neuroglancer_annotation.AnnotationSource.md#tojson)
- [unregisterDisposer](neuroglancer_annotation.AnnotationSource.md#unregisterdisposer)
- [update](neuroglancer_annotation.AnnotationSource.md#update)
- [updateColor](neuroglancer_annotation.AnnotationSource.md#updatecolor)
- [updateDescription](neuroglancer_annotation.AnnotationSource.md#updatedescription)

## Constructors

### constructor

• **new AnnotationSource**(`rank`, `relationships?`, `properties?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `rank` | `number` | `undefined` |
| `relationships` | readonly `string`[] | `[]` |
| `properties` | [`Readonly`](../modules/neuroglancer_annotation_frontend_source._internal_.md#readonly)<[`AnnotationPropertySpec`](../modules/neuroglancer_annotation.md#annotationpropertyspec)\>[] | `[]` |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/annotation/index.ts:919](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L919)

## Properties

### annotationMap

• `Protected` **annotationMap**: `Map`<`string`, [`Annotation`](../modules/neuroglancer_annotation.md#annotation)\>

#### Defined in

[src/neuroglancer/annotation/index.ts:902](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L902)

___

### annotationPropertySerializer

• **annotationPropertySerializer**: [`AnnotationPropertySerializer`](neuroglancer_annotation.AnnotationPropertySerializer.md)

#### Defined in

[src/neuroglancer/annotation/index.ts:917](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L917)

___

### changed

• **changed**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Implementation of

[AnnotationSourceSignals](../interfaces/neuroglancer_annotation.AnnotationSourceSignals.md).[changed](../interfaces/neuroglancer_annotation.AnnotationSourceSignals.md#changed)

#### Defined in

[src/neuroglancer/annotation/index.ts:903](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L903)

___

### childAdded

• **childAdded**: [`Signal`](neuroglancer_util_signal.Signal.md)<(`annotation`: [`Annotation`](../modules/neuroglancer_annotation.md#annotation)) => `void`\>

#### Implementation of

[AnnotationSourceSignals](../interfaces/neuroglancer_annotation.AnnotationSourceSignals.md).[childAdded](../interfaces/neuroglancer_annotation.AnnotationSourceSignals.md#childadded)

#### Defined in

[src/neuroglancer/annotation/index.ts:905](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L905)

___

### childDeleted

• **childDeleted**: [`Signal`](neuroglancer_util_signal.Signal.md)<(`annotationId`: `string`) => `void`\>

#### Implementation of

[AnnotationSourceSignals](../interfaces/neuroglancer_annotation.AnnotationSourceSignals.md).[childDeleted](../interfaces/neuroglancer_annotation.AnnotationSourceSignals.md#childdeleted)

#### Defined in

[src/neuroglancer/annotation/index.ts:907](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L907)

___

### childUpdated

• **childUpdated**: [`Signal`](neuroglancer_util_signal.Signal.md)<(`annotation`: [`Annotation`](../modules/neuroglancer_annotation.md#annotation)) => `void`\>

#### Implementation of

[AnnotationSourceSignals](../interfaces/neuroglancer_annotation.AnnotationSourceSignals.md).[childUpdated](../interfaces/neuroglancer_annotation.AnnotationSourceSignals.md#childupdated)

#### Defined in

[src/neuroglancer/annotation/index.ts:906](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L906)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### pending

• `Private` **pending**: `Set`<`string`\>

#### Defined in

[src/neuroglancer/annotation/index.ts:909](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L909)

___

### properties

• `Readonly` **properties**: [`Readonly`](../modules/neuroglancer_annotation_frontend_source._internal_.md#readonly)<[`AnnotationPropertySpec`](../modules/neuroglancer_annotation.md#annotationpropertyspec)\>[] = `[]`

___

### rank\_

• `Protected` **rank\_**: `number`

#### Defined in

[src/neuroglancer/annotation/index.ts:911](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L911)

___

### readonly

• **readonly**: `boolean` = `false`

#### Defined in

[src/neuroglancer/annotation/index.ts:904](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L904)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### references

• **references**: `Map`<`string`, [`AnnotationReference`](neuroglancer_annotation.AnnotationReference.md)\>

#### Defined in

[src/neuroglancer/annotation/index.ts:1279](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L1279)

___

### relationships

• `Readonly` **relationships**: readonly `string`[] = `[]`

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### rank

• `get` **rank**(): `number`

#### Returns

`number`

#### Defined in

[src/neuroglancer/annotation/index.ts:913](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L913)

## Methods

### [iterator]

▸ **[iterator]**(): [`IterableIterator`](../interfaces/main_module._internal_.IterableIterator.md)<[`Annotation`](../modules/neuroglancer_annotation.md#annotation)\>

#### Returns

[`IterableIterator`](../interfaces/main_module._internal_.IterableIterator.md)<[`Annotation`](../modules/neuroglancer_annotation.md#annotation)\>

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

#### Defined in

[src/neuroglancer/annotation/index.ts:931](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L931)

___

### addRef

▸ **addRef**(): [`AnnotationSource`](neuroglancer_annotation.AnnotationSource.md)

#### Returns

[`AnnotationSource`](neuroglancer_annotation.AnnotationSource.md)

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[addRef](neuroglancer_util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L48)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

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

#### Defined in

[src/neuroglancer/annotation/index.ts:1029](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L1029)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[dispose](neuroglancer_util_disposable.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposed](neuroglancer_util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L75)

___

### ensureUpdated

▸ `Protected` **ensureUpdated**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/index.ts:1281](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L1281)

___

### get

▸ **get**(`id`): `undefined` \| [`Annotation`](../modules/neuroglancer_annotation.md#annotation)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`undefined` \| [`Annotation`](../modules/neuroglancer_annotation.md#annotation)

#### Defined in

[src/neuroglancer/annotation/index.ts:1024](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L1024)

___

### getAllAnnsUnderRoot

▸ `Private` **getAllAnnsUnderRoot**(`annotationId`): [`Annotation`](../modules/neuroglancer_annotation.md#annotation)[]

Takes an annotation and returns all descendants under that annotation

#### Parameters

| Name | Type |
| :------ | :------ |
| `annotationId` | `string` |

#### Returns

[`Annotation`](../modules/neuroglancer_annotation.md#annotation)[]

an array of descendants of this annotation.

#### Defined in

[src/neuroglancer/annotation/index.ts:1202](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L1202)

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

[src/neuroglancer/annotation/index.ts:1228](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L1228)

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

#### Defined in

[src/neuroglancer/annotation/index.ts:1138](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L1138)

___

### hasNonSerializedProperties

▸ **hasNonSerializedProperties**(): `boolean`

#### Returns

`boolean`

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

#### Defined in

[src/neuroglancer/annotation/index.ts:1254](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L1254)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCountReachedZero](neuroglancer_util_disposable.RefCounted.md#refcountreachedzero)

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

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[registerCancellable](neuroglancer_util_disposable.RefCounted.md#registercancellable)

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

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[registerDisposer](neuroglancer_util_disposable.RefCounted.md#registerdisposer)

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

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[registerEventListener](neuroglancer_util_disposable.RefCounted.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L95)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

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

#### Defined in

[src/neuroglancer/annotation/index.ts:1303](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L1303)

___

### toJSON

▸ **toJSON**(): `any`[]

#### Returns

`any`[]

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

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[unregisterDisposer](neuroglancer_util_disposable.RefCounted.md#unregisterdisposer)

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

#### Defined in

[src/neuroglancer/annotation/index.ts:1191](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L1191)
