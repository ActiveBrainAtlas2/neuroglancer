[neuroglancer](../README.md) / [Modules](../modules.md) / [image\_user\_layer](../modules/image_user_layer.md) / [<internal\>](../modules/image_user_layer._internal_.md) / AnnotationSource

# Class: AnnotationSource

[image_user_layer](../modules/image_user_layer.md).[<internal>](../modules/image_user_layer._internal_.md).AnnotationSource

## Hierarchy

- [`RefCounted`](axes_lines._internal_.RefCounted.md)

  ↳ **`AnnotationSource`**

## Implements

- [`AnnotationSourceSignals`](../interfaces/image_user_layer._internal_.AnnotationSourceSignals.md)

## Table of contents

### Constructors

- [constructor](image_user_layer._internal_.AnnotationSource.md#constructor)

### Properties

- [annotationMap](image_user_layer._internal_.AnnotationSource.md#annotationmap)
- [annotationPropertySerializer](image_user_layer._internal_.AnnotationSource.md#annotationpropertyserializer)
- [changed](image_user_layer._internal_.AnnotationSource.md#changed)
- [childAdded](image_user_layer._internal_.AnnotationSource.md#childadded)
- [childDeleted](image_user_layer._internal_.AnnotationSource.md#childdeleted)
- [childUpdated](image_user_layer._internal_.AnnotationSource.md#childupdated)
- [disposedStacks](image_user_layer._internal_.AnnotationSource.md#disposedstacks)
- [pending](image_user_layer._internal_.AnnotationSource.md#pending)
- [properties](image_user_layer._internal_.AnnotationSource.md#properties)
- [rank\_](image_user_layer._internal_.AnnotationSource.md#rank_)
- [readonly](image_user_layer._internal_.AnnotationSource.md#readonly)
- [refCount](image_user_layer._internal_.AnnotationSource.md#refcount)
- [references](image_user_layer._internal_.AnnotationSource.md#references)
- [relationships](image_user_layer._internal_.AnnotationSource.md#relationships)
- [wasDisposed](image_user_layer._internal_.AnnotationSource.md#wasdisposed)

### Accessors

- [rank](image_user_layer._internal_.AnnotationSource.md#rank)

### Methods

- [[iterator]](image_user_layer._internal_.AnnotationSource.md#[iterator])
- [add](image_user_layer._internal_.AnnotationSource.md#add)
- [addRef](image_user_layer._internal_.AnnotationSource.md#addref)
- [clear](image_user_layer._internal_.AnnotationSource.md#clear)
- [commit](image_user_layer._internal_.AnnotationSource.md#commit)
- [delete](image_user_layer._internal_.AnnotationSource.md#delete)
- [dispose](image_user_layer._internal_.AnnotationSource.md#dispose)
- [disposed](image_user_layer._internal_.AnnotationSource.md#disposed)
- [ensureUpdated](image_user_layer._internal_.AnnotationSource.md#ensureupdated)
- [get](image_user_layer._internal_.AnnotationSource.md#get)
- [getAllAnnsUnderRoot](image_user_layer._internal_.AnnotationSource.md#getallannsunderroot)
- [getAllAnnsUnderRootToDisplay](image_user_layer._internal_.AnnotationSource.md#getallannsunderroottodisplay)
- [getNonDummyAnnotationReference](image_user_layer._internal_.AnnotationSource.md#getnondummyannotationreference)
- [getReference](image_user_layer._internal_.AnnotationSource.md#getreference)
- [getTopMostAnnotationReference](image_user_layer._internal_.AnnotationSource.md#gettopmostannotationreference)
- [getUpdatedSourceVertex](image_user_layer._internal_.AnnotationSource.md#getupdatedsourcevertex)
- [hasNonSerializedProperties](image_user_layer._internal_.AnnotationSource.md#hasnonserializedproperties)
- [makeAllParentsVisible](image_user_layer._internal_.AnnotationSource.md#makeallparentsvisible)
- [refCountReachedZero](image_user_layer._internal_.AnnotationSource.md#refcountreachedzero)
- [registerCancellable](image_user_layer._internal_.AnnotationSource.md#registercancellable)
- [registerDisposer](image_user_layer._internal_.AnnotationSource.md#registerdisposer)
- [registerEventListener](image_user_layer._internal_.AnnotationSource.md#registereventlistener)
- [reset](image_user_layer._internal_.AnnotationSource.md#reset)
- [restoreState](image_user_layer._internal_.AnnotationSource.md#restorestate)
- [toJSON](image_user_layer._internal_.AnnotationSource.md#tojson)
- [unregisterDisposer](image_user_layer._internal_.AnnotationSource.md#unregisterdisposer)
- [update](image_user_layer._internal_.AnnotationSource.md#update)
- [updateColor](image_user_layer._internal_.AnnotationSource.md#updatecolor)
- [updateDescription](image_user_layer._internal_.AnnotationSource.md#updatedescription)

## Constructors

### constructor

• **new AnnotationSource**(`rank`, `relationships?`, `properties?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `rank` | `number` | `undefined` |
| `relationships` | readonly `string`[] | `[]` |
| `properties` | [`Readonly`](../modules/coordinate_transform._internal_.md#readonly)<[`AnnotationPropertySpec`](../modules/image_user_layer._internal_.md#annotationpropertyspec)\>[] | `[]` |

#### Overrides

[RefCounted](axes_lines._internal_.RefCounted.md).[constructor](axes_lines._internal_.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/annotation/index.ts:919](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/index.ts#L919)

## Properties

### annotationMap

• `Protected` **annotationMap**: `Map`<`string`, [`Annotation`](../modules/image_user_layer._internal_.md#annotation)\>

#### Defined in

[src/neuroglancer/annotation/index.ts:902](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/index.ts#L902)

___

### annotationPropertySerializer

• **annotationPropertySerializer**: [`AnnotationPropertySerializer`](image_user_layer._internal_.AnnotationPropertySerializer.md)

#### Defined in

[src/neuroglancer/annotation/index.ts:917](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/index.ts#L917)

___

### changed

• **changed**: [`NullarySignal`](coordinate_transform._internal_.NullarySignal.md)

#### Implementation of

[AnnotationSourceSignals](../interfaces/image_user_layer._internal_.AnnotationSourceSignals.md).[changed](../interfaces/image_user_layer._internal_.AnnotationSourceSignals.md#changed)

#### Defined in

[src/neuroglancer/annotation/index.ts:903](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/index.ts#L903)

___

### childAdded

• **childAdded**: [`Signal`](coordinate_transform._internal_.Signal.md)<(`annotation`: [`Annotation`](../modules/image_user_layer._internal_.md#annotation)) => `void`\>

#### Implementation of

[AnnotationSourceSignals](../interfaces/image_user_layer._internal_.AnnotationSourceSignals.md).[childAdded](../interfaces/image_user_layer._internal_.AnnotationSourceSignals.md#childadded)

#### Defined in

[src/neuroglancer/annotation/index.ts:905](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/index.ts#L905)

___

### childDeleted

• **childDeleted**: [`Signal`](coordinate_transform._internal_.Signal.md)<(`annotationId`: `string`) => `void`\>

#### Implementation of

[AnnotationSourceSignals](../interfaces/image_user_layer._internal_.AnnotationSourceSignals.md).[childDeleted](../interfaces/image_user_layer._internal_.AnnotationSourceSignals.md#childdeleted)

#### Defined in

[src/neuroglancer/annotation/index.ts:907](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/index.ts#L907)

___

### childUpdated

• **childUpdated**: [`Signal`](coordinate_transform._internal_.Signal.md)<(`annotation`: [`Annotation`](../modules/image_user_layer._internal_.md#annotation)) => `void`\>

#### Implementation of

[AnnotationSourceSignals](../interfaces/image_user_layer._internal_.AnnotationSourceSignals.md).[childUpdated](../interfaces/image_user_layer._internal_.AnnotationSourceSignals.md#childupdated)

#### Defined in

[src/neuroglancer/annotation/index.ts:906](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/index.ts#L906)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[disposedStacks](axes_lines._internal_.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L52)

___

### pending

• `Private` **pending**: `Set`<`string`\>

#### Defined in

[src/neuroglancer/annotation/index.ts:909](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/index.ts#L909)

___

### properties

• `Readonly` **properties**: [`Readonly`](../modules/coordinate_transform._internal_.md#readonly)<[`AnnotationPropertySpec`](../modules/image_user_layer._internal_.md#annotationpropertyspec)\>[] = `[]`

___

### rank\_

• `Protected` **rank\_**: `number`

#### Defined in

[src/neuroglancer/annotation/index.ts:911](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/index.ts#L911)

___

### readonly

• **readonly**: `boolean` = `false`

#### Defined in

[src/neuroglancer/annotation/index.ts:904](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/index.ts#L904)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[refCount](axes_lines._internal_.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L45)

___

### references

• **references**: `Map`<`string`, [`AnnotationReference`](image_user_layer._internal_.AnnotationReference.md)\>

#### Defined in

[src/neuroglancer/annotation/index.ts:1279](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/index.ts#L1279)

___

### relationships

• `Readonly` **relationships**: readonly `string`[] = `[]`

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[wasDisposed](axes_lines._internal_.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### rank

• `get` **rank**(): `number`

#### Returns

`number`

#### Defined in

[src/neuroglancer/annotation/index.ts:913](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/index.ts#L913)

## Methods

### [iterator]

▸ **[iterator]**(): [`IterableIterator`](../interfaces/axes_lines._internal_.IterableIterator.md)<[`Annotation`](../modules/image_user_layer._internal_.md#annotation)\>

#### Returns

[`IterableIterator`](../interfaces/axes_lines._internal_.IterableIterator.md)<[`Annotation`](../modules/image_user_layer._internal_.md#annotation)\>

#### Defined in

[src/neuroglancer/annotation/index.ts:1019](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/index.ts#L1019)

___

### add

▸ **add**(`annotation`, `commit?`, `parentRef?`, `index?`): [`AnnotationReference`](image_user_layer._internal_.AnnotationReference.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `annotation` | [`Annotation`](../modules/image_user_layer._internal_.md#annotation) | `undefined` |
| `commit` | `boolean` | `true` |
| `parentRef?` | [`AnnotationReference`](image_user_layer._internal_.AnnotationReference.md) | `undefined` |
| `index?` | `number` | `undefined` |

#### Returns

[`AnnotationReference`](image_user_layer._internal_.AnnotationReference.md)

#### Defined in

[src/neuroglancer/annotation/index.ts:931](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/index.ts#L931)

___

### addRef

▸ **addRef**(): [`AnnotationSource`](image_user_layer._internal_.AnnotationSource.md)

#### Returns

[`AnnotationSource`](image_user_layer._internal_.AnnotationSource.md)

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[addRef](axes_lines._internal_.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L48)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/index.ts:1297](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/index.ts#L1297)

___

### commit

▸ **commit**(`reference`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reference` | [`AnnotationReference`](image_user_layer._internal_.AnnotationReference.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/index.ts:971](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/index.ts#L971)

___

### delete

▸ **delete**(`reference`, `fromParent?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `reference` | [`AnnotationReference`](image_user_layer._internal_.AnnotationReference.md) | `undefined` |
| `fromParent` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/index.ts:1029](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/index.ts#L1029)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[dispose](axes_lines._internal_.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[disposed](axes_lines._internal_.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L75)

___

### ensureUpdated

▸ `Protected` **ensureUpdated**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/index.ts:1281](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/index.ts#L1281)

___

### get

▸ **get**(`id`): `undefined` \| [`Annotation`](../modules/image_user_layer._internal_.md#annotation)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`undefined` \| [`Annotation`](../modules/image_user_layer._internal_.md#annotation)

#### Defined in

[src/neuroglancer/annotation/index.ts:1024](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/index.ts#L1024)

___

### getAllAnnsUnderRoot

▸ `Private` **getAllAnnsUnderRoot**(`annotationId`): [`Annotation`](../modules/image_user_layer._internal_.md#annotation)[]

Takes an annotation and returns all descendants under that annotation

#### Parameters

| Name | Type |
| :------ | :------ |
| `annotationId` | `string` |

#### Returns

[`Annotation`](../modules/image_user_layer._internal_.md#annotation)[]

an array of descendants of this annotation.

#### Defined in

[src/neuroglancer/annotation/index.ts:1202](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/index.ts#L1202)

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

[src/neuroglancer/annotation/index.ts:1228](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/index.ts#L1228)

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

[src/neuroglancer/annotation/index.ts:1096](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/index.ts#L1096)

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

[src/neuroglancer/annotation/index.ts:1077](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/index.ts#L1077)

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

[src/neuroglancer/annotation/index.ts:1119](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/index.ts#L1119)

___

### getUpdatedSourceVertex

▸ **getUpdatedSourceVertex**(`ann`): [`Collection`](../interfaces/image_user_layer._internal_.Collection.md)

Update the source vertex if child's source vertex gets updated.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ann` | [`Collection`](../interfaces/image_user_layer._internal_.Collection.md) | Annotation which needs to be updated. |

#### Returns

[`Collection`](../interfaces/image_user_layer._internal_.Collection.md)

a new annotation with updated source vertex.

#### Defined in

[src/neuroglancer/annotation/index.ts:1138](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/index.ts#L1138)

___

### hasNonSerializedProperties

▸ **hasNonSerializedProperties**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/annotation/index.ts:927](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/index.ts#L927)

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

[src/neuroglancer/annotation/index.ts:1254](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/index.ts#L1254)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[refCountReachedZero](axes_lines._internal_.RefCounted.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L66)

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

[RefCounted](axes_lines._internal_.RefCounted.md).[registerCancellable](axes_lines._internal_.RefCounted.md#registercancellable)

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

[RefCounted](axes_lines._internal_.RefCounted.md).[registerDisposer](axes_lines._internal_.RefCounted.md#registerdisposer)

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

[RefCounted](axes_lines._internal_.RefCounted.md).[registerEventListener](axes_lines._internal_.RefCounted.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L95)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/index.ts:1323](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/index.ts#L1323)

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

[src/neuroglancer/annotation/index.ts:1303](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/index.ts#L1303)

___

### toJSON

▸ **toJSON**(): `any`[]

#### Returns

`any`[]

#### Defined in

[src/neuroglancer/annotation/index.ts:1283](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/index.ts#L1283)

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

[RefCounted](axes_lines._internal_.RefCounted.md).[unregisterDisposer](axes_lines._internal_.RefCounted.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L85)

___

### update

▸ **update**(`reference`, `annotation`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reference` | [`AnnotationReference`](image_user_layer._internal_.AnnotationReference.md) |
| `annotation` | [`Annotation`](../modules/image_user_layer._internal_.md#annotation) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/index.ts:984](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/index.ts#L984)

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

[src/neuroglancer/annotation/index.ts:1168](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/index.ts#L1168)

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

[src/neuroglancer/annotation/index.ts:1191](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/index.ts#L1191)
