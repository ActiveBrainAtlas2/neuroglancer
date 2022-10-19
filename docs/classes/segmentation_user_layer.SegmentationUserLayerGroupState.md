[neuroglancer](../README.md) / [Modules](../modules.md) / [segmentation\_user\_layer](../modules/segmentation_user_layer.md) / SegmentationUserLayerGroupState

# Class: SegmentationUserLayerGroupState

[segmentation_user_layer](../modules/segmentation_user_layer.md).SegmentationUserLayerGroupState

## Hierarchy

- [`RefCounted`](axes_lines._internal_.RefCounted.md)

  ↳ **`SegmentationUserLayerGroupState`**

## Implements

- [`SegmentationGroupState`](../interfaces/image_user_layer._internal_.SegmentationGroupState.md)

## Table of contents

### Constructors

- [constructor](segmentation_user_layer.SegmentationUserLayerGroupState.md#constructor)

### Properties

- [disposedStacks](segmentation_user_layer.SegmentationUserLayerGroupState.md#disposedstacks)
- [graph](segmentation_user_layer.SegmentationUserLayerGroupState.md#graph)
- [hideSegmentZero](segmentation_user_layer.SegmentationUserLayerGroupState.md#hidesegmentzero)
- [layer](segmentation_user_layer.SegmentationUserLayerGroupState.md#layer)
- [localGraph](segmentation_user_layer.SegmentationUserLayerGroupState.md#localgraph)
- [localSegmentEquivalences](segmentation_user_layer.SegmentationUserLayerGroupState.md#localsegmentequivalences)
- [maxIdLength](segmentation_user_layer.SegmentationUserLayerGroupState.md#maxidlength)
- [refCount](segmentation_user_layer.SegmentationUserLayerGroupState.md#refcount)
- [segmentEquivalences](segmentation_user_layer.SegmentationUserLayerGroupState.md#segmentequivalences)
- [segmentPropertyMap](segmentation_user_layer.SegmentationUserLayerGroupState.md#segmentpropertymap)
- [segmentQuery](segmentation_user_layer.SegmentationUserLayerGroupState.md#segmentquery)
- [specificationChanged](segmentation_user_layer.SegmentationUserLayerGroupState.md#specificationchanged)
- [temporarySegmentEquivalences](segmentation_user_layer.SegmentationUserLayerGroupState.md#temporarysegmentequivalences)
- [temporaryVisibleSegments](segmentation_user_layer.SegmentationUserLayerGroupState.md#temporaryvisiblesegments)
- [useTemporarySegmentEquivalences](segmentation_user_layer.SegmentationUserLayerGroupState.md#usetemporarysegmentequivalences)
- [useTemporaryVisibleSegments](segmentation_user_layer.SegmentationUserLayerGroupState.md#usetemporaryvisiblesegments)
- [visibleSegments](segmentation_user_layer.SegmentationUserLayerGroupState.md#visiblesegments)
- [wasDisposed](segmentation_user_layer.SegmentationUserLayerGroupState.md#wasdisposed)

### Methods

- [addRef](segmentation_user_layer.SegmentationUserLayerGroupState.md#addref)
- [assignFrom](segmentation_user_layer.SegmentationUserLayerGroupState.md#assignfrom)
- [dispose](segmentation_user_layer.SegmentationUserLayerGroupState.md#dispose)
- [disposed](segmentation_user_layer.SegmentationUserLayerGroupState.md#disposed)
- [refCountReachedZero](segmentation_user_layer.SegmentationUserLayerGroupState.md#refcountreachedzero)
- [registerCancellable](segmentation_user_layer.SegmentationUserLayerGroupState.md#registercancellable)
- [registerDisposer](segmentation_user_layer.SegmentationUserLayerGroupState.md#registerdisposer)
- [registerEventListener](segmentation_user_layer.SegmentationUserLayerGroupState.md#registereventlistener)
- [restoreState](segmentation_user_layer.SegmentationUserLayerGroupState.md#restorestate)
- [toJSON](segmentation_user_layer.SegmentationUserLayerGroupState.md#tojson)
- [unregisterDisposer](segmentation_user_layer.SegmentationUserLayerGroupState.md#unregisterdisposer)

## Constructors

### constructor

• **new SegmentationUserLayerGroupState**(`layer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`SegmentationUserLayer`](segmentation_user_layer.SegmentationUserLayer.md) |

#### Overrides

[RefCounted](axes_lines._internal_.RefCounted.md).[constructor](axes_lines._internal_.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:92](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_user_layer.ts#L92)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[disposedStacks](axes_lines._internal_.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L52)

___

### graph

• **graph**: [`WatchableValue`](trackable_value.WatchableValue.md)<`undefined` \| [`SegmentationGraphSource`](layer._internal_.SegmentationGraphSource.md)\>

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:144](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_user_layer.ts#L144)

___

### hideSegmentZero

• **hideSegmentZero**: [`TrackableBoolean`](trackable_boolean.TrackableBoolean.md)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:151](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_user_layer.ts#L151)

___

### layer

• **layer**: [`SegmentationUserLayer`](segmentation_user_layer.SegmentationUserLayer.md)

___

### localGraph

• **localGraph**: [`LocalSegmentationGraphSource`](segmentation_user_layer._internal_.LocalSegmentationGraphSource.md)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:141](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_user_layer.ts#L141)

___

### localSegmentEquivalences

• **localSegmentEquivalences**: `boolean` = `false`

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:149](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_user_layer.ts#L149)

___

### maxIdLength

• **maxIdLength**: [`WatchableValue`](trackable_value.WatchableValue.md)<`number`\>

Maximum length of base-10 representation of id seen.

#### Implementation of

[SegmentationGroupState](../interfaces/image_user_layer._internal_.SegmentationGroupState.md).[maxIdLength](../interfaces/image_user_layer._internal_.SegmentationGroupState.md#maxidlength)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:150](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_user_layer.ts#L150)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[refCount](axes_lines._internal_.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L45)

___

### segmentEquivalences

• **segmentEquivalences**: [`SharedDisjointUint64Sets`](shared_disjoint_sets.SharedDisjointUint64Sets.md)

#### Implementation of

[SegmentationGroupState](../interfaces/image_user_layer._internal_.SegmentationGroupState.md).[segmentEquivalences](../interfaces/image_user_layer._internal_.SegmentationGroupState.md#segmentequivalences)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:145](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_user_layer.ts#L145)

___

### segmentPropertyMap

• **segmentPropertyMap**: [`WatchableValue`](trackable_value.WatchableValue.md)<`undefined` \| [`PreprocessedSegmentPropertyMap`](image_user_layer._internal_.PreprocessedSegmentPropertyMap.md)\>

#### Implementation of

[SegmentationGroupState](../interfaces/image_user_layer._internal_.SegmentationGroupState.md).[segmentPropertyMap](../interfaces/image_user_layer._internal_.SegmentationGroupState.md#segmentpropertymap)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:143](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_user_layer.ts#L143)

___

### segmentQuery

• **segmentQuery**: [`TrackableValue`](trackable_value.TrackableValue.md)<`string`\>

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:152](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_user_layer.ts#L152)

___

### specificationChanged

• **specificationChanged**: [`Signal`](coordinate_transform._internal_.Signal.md)<() => `void`\>

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:91](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_user_layer.ts#L91)

___

### temporarySegmentEquivalences

• **temporarySegmentEquivalences**: [`SharedDisjointUint64Sets`](shared_disjoint_sets.SharedDisjointUint64Sets.md)

#### Implementation of

[SegmentationGroupState](../interfaces/image_user_layer._internal_.SegmentationGroupState.md).[temporarySegmentEquivalences](../interfaces/image_user_layer._internal_.SegmentationGroupState.md#temporarysegmentequivalences)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:156](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_user_layer.ts#L156)

___

### temporaryVisibleSegments

• **temporaryVisibleSegments**: [`Uint64Set`](uint64_set.Uint64Set.md)

#### Implementation of

[SegmentationGroupState](../interfaces/image_user_layer._internal_.SegmentationGroupState.md).[temporaryVisibleSegments](../interfaces/image_user_layer._internal_.SegmentationGroupState.md#temporaryvisiblesegments)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:154](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_user_layer.ts#L154)

___

### useTemporarySegmentEquivalences

• **useTemporarySegmentEquivalences**: [`SharedWatchableValue`](shared_watchable_value.SharedWatchableValue.md)<`boolean`\>

#### Implementation of

[SegmentationGroupState](../interfaces/image_user_layer._internal_.SegmentationGroupState.md).[useTemporarySegmentEquivalences](../interfaces/image_user_layer._internal_.SegmentationGroupState.md#usetemporarysegmentequivalences)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:161](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_user_layer.ts#L161)

___

### useTemporaryVisibleSegments

• **useTemporaryVisibleSegments**: [`SharedWatchableValue`](shared_watchable_value.SharedWatchableValue.md)<`boolean`\>

#### Implementation of

[SegmentationGroupState](../interfaces/image_user_layer._internal_.SegmentationGroupState.md).[useTemporaryVisibleSegments](../interfaces/image_user_layer._internal_.SegmentationGroupState.md#usetemporaryvisiblesegments)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:159](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_user_layer.ts#L159)

___

### visibleSegments

• **visibleSegments**: [`Uint64Set`](uint64_set.Uint64Set.md)

#### Implementation of

[SegmentationGroupState](../interfaces/image_user_layer._internal_.SegmentationGroupState.md).[visibleSegments](../interfaces/image_user_layer._internal_.SegmentationGroupState.md#visiblesegments)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:142](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_user_layer.ts#L142)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[wasDisposed](axes_lines._internal_.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`SegmentationUserLayerGroupState`](segmentation_user_layer.SegmentationUserLayerGroupState.md)

#### Returns

[`SegmentationUserLayerGroupState`](segmentation_user_layer.SegmentationUserLayerGroupState.md)

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[addRef](axes_lines._internal_.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L48)

___

### assignFrom

▸ **assignFrom**(`other`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`SegmentationUserLayerGroupState`](segmentation_user_layer.SegmentationUserLayerGroupState.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:134](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_user_layer.ts#L134)

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

### restoreState

▸ **restoreState**(`specification`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `specification` | `unknown` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_user_layer.ts#L100)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:119](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_user_layer.ts#L119)

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
