[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/segmentation\_user\_layer](../modules/neuroglancer_segmentation_user_layer.md) / SegmentationUserLayerGroupState

# Class: SegmentationUserLayerGroupState

[neuroglancer/segmentation_user_layer](../modules/neuroglancer_segmentation_user_layer.md).SegmentationUserLayerGroupState

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`SegmentationUserLayerGroupState`**

## Implements

- [`SegmentationGroupState`](../interfaces/neuroglancer_segmentation_display_state_frontend.SegmentationGroupState.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_segmentation_user_layer.SegmentationUserLayerGroupState.md#constructor)

### Properties

- [disposedStacks](neuroglancer_segmentation_user_layer.SegmentationUserLayerGroupState.md#disposedstacks)
- [graph](neuroglancer_segmentation_user_layer.SegmentationUserLayerGroupState.md#graph)
- [hideSegmentZero](neuroglancer_segmentation_user_layer.SegmentationUserLayerGroupState.md#hidesegmentzero)
- [layer](neuroglancer_segmentation_user_layer.SegmentationUserLayerGroupState.md#layer)
- [localGraph](neuroglancer_segmentation_user_layer.SegmentationUserLayerGroupState.md#localgraph)
- [localSegmentEquivalences](neuroglancer_segmentation_user_layer.SegmentationUserLayerGroupState.md#localsegmentequivalences)
- [maxIdLength](neuroglancer_segmentation_user_layer.SegmentationUserLayerGroupState.md#maxidlength)
- [refCount](neuroglancer_segmentation_user_layer.SegmentationUserLayerGroupState.md#refcount)
- [segmentEquivalences](neuroglancer_segmentation_user_layer.SegmentationUserLayerGroupState.md#segmentequivalences)
- [segmentPropertyMap](neuroglancer_segmentation_user_layer.SegmentationUserLayerGroupState.md#segmentpropertymap)
- [segmentQuery](neuroglancer_segmentation_user_layer.SegmentationUserLayerGroupState.md#segmentquery)
- [specificationChanged](neuroglancer_segmentation_user_layer.SegmentationUserLayerGroupState.md#specificationchanged)
- [temporarySegmentEquivalences](neuroglancer_segmentation_user_layer.SegmentationUserLayerGroupState.md#temporarysegmentequivalences)
- [temporaryVisibleSegments](neuroglancer_segmentation_user_layer.SegmentationUserLayerGroupState.md#temporaryvisiblesegments)
- [useTemporarySegmentEquivalences](neuroglancer_segmentation_user_layer.SegmentationUserLayerGroupState.md#usetemporarysegmentequivalences)
- [useTemporaryVisibleSegments](neuroglancer_segmentation_user_layer.SegmentationUserLayerGroupState.md#usetemporaryvisiblesegments)
- [visibleSegments](neuroglancer_segmentation_user_layer.SegmentationUserLayerGroupState.md#visiblesegments)
- [wasDisposed](neuroglancer_segmentation_user_layer.SegmentationUserLayerGroupState.md#wasdisposed)

### Methods

- [addRef](neuroglancer_segmentation_user_layer.SegmentationUserLayerGroupState.md#addref)
- [assignFrom](neuroglancer_segmentation_user_layer.SegmentationUserLayerGroupState.md#assignfrom)
- [dispose](neuroglancer_segmentation_user_layer.SegmentationUserLayerGroupState.md#dispose)
- [disposed](neuroglancer_segmentation_user_layer.SegmentationUserLayerGroupState.md#disposed)
- [refCountReachedZero](neuroglancer_segmentation_user_layer.SegmentationUserLayerGroupState.md#refcountreachedzero)
- [registerCancellable](neuroglancer_segmentation_user_layer.SegmentationUserLayerGroupState.md#registercancellable)
- [registerDisposer](neuroglancer_segmentation_user_layer.SegmentationUserLayerGroupState.md#registerdisposer)
- [registerEventListener](neuroglancer_segmentation_user_layer.SegmentationUserLayerGroupState.md#registereventlistener)
- [restoreState](neuroglancer_segmentation_user_layer.SegmentationUserLayerGroupState.md#restorestate)
- [toJSON](neuroglancer_segmentation_user_layer.SegmentationUserLayerGroupState.md#tojson)
- [unregisterDisposer](neuroglancer_segmentation_user_layer.SegmentationUserLayerGroupState.md#unregisterdisposer)

## Constructors

### constructor

• **new SegmentationUserLayerGroupState**(`layer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`SegmentationUserLayer`](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md) |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:92](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L92)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### graph

• **graph**: [`WatchableValue`](neuroglancer_trackable_value.WatchableValue.md)<`undefined` \| [`SegmentationGraphSource`](neuroglancer_segmentation_graph_source.SegmentationGraphSource.md)\>

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:144](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L144)

___

### hideSegmentZero

• **hideSegmentZero**: [`TrackableBoolean`](neuroglancer_trackable_boolean.TrackableBoolean.md)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:151](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L151)

___

### layer

• **layer**: [`SegmentationUserLayer`](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md)

___

### localGraph

• **localGraph**: [`LocalSegmentationGraphSource`](neuroglancer_segmentation_graph_local.LocalSegmentationGraphSource.md)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:141](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L141)

___

### localSegmentEquivalences

• **localSegmentEquivalences**: `boolean` = `false`

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:149](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L149)

___

### maxIdLength

• **maxIdLength**: [`WatchableValue`](neuroglancer_trackable_value.WatchableValue.md)<`number`\>

Maximum length of base-10 representation of id seen.

#### Implementation of

[SegmentationGroupState](../interfaces/neuroglancer_segmentation_display_state_frontend.SegmentationGroupState.md).[maxIdLength](../interfaces/neuroglancer_segmentation_display_state_frontend.SegmentationGroupState.md#maxidlength)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:150](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L150)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### segmentEquivalences

• **segmentEquivalences**: [`SharedDisjointUint64Sets`](neuroglancer_shared_disjoint_sets.SharedDisjointUint64Sets.md)

#### Implementation of

[SegmentationGroupState](../interfaces/neuroglancer_segmentation_display_state_frontend.SegmentationGroupState.md).[segmentEquivalences](../interfaces/neuroglancer_segmentation_display_state_frontend.SegmentationGroupState.md#segmentequivalences)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:145](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L145)

___

### segmentPropertyMap

• **segmentPropertyMap**: [`WatchableValue`](neuroglancer_trackable_value.WatchableValue.md)<`undefined` \| [`PreprocessedSegmentPropertyMap`](neuroglancer_segmentation_display_state_property_map.PreprocessedSegmentPropertyMap.md)\>

#### Implementation of

[SegmentationGroupState](../interfaces/neuroglancer_segmentation_display_state_frontend.SegmentationGroupState.md).[segmentPropertyMap](../interfaces/neuroglancer_segmentation_display_state_frontend.SegmentationGroupState.md#segmentpropertymap)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:143](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L143)

___

### segmentQuery

• **segmentQuery**: [`TrackableValue`](neuroglancer_trackable_value.TrackableValue.md)<`string`\>

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:152](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L152)

___

### specificationChanged

• **specificationChanged**: [`Signal`](neuroglancer_util_signal.Signal.md)<() => `void`\>

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:91](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L91)

___

### temporarySegmentEquivalences

• **temporarySegmentEquivalences**: [`SharedDisjointUint64Sets`](neuroglancer_shared_disjoint_sets.SharedDisjointUint64Sets.md)

#### Implementation of

[SegmentationGroupState](../interfaces/neuroglancer_segmentation_display_state_frontend.SegmentationGroupState.md).[temporarySegmentEquivalences](../interfaces/neuroglancer_segmentation_display_state_frontend.SegmentationGroupState.md#temporarysegmentequivalences)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:156](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L156)

___

### temporaryVisibleSegments

• **temporaryVisibleSegments**: [`Uint64Set`](neuroglancer_uint64_set.Uint64Set.md)

#### Implementation of

[SegmentationGroupState](../interfaces/neuroglancer_segmentation_display_state_frontend.SegmentationGroupState.md).[temporaryVisibleSegments](../interfaces/neuroglancer_segmentation_display_state_frontend.SegmentationGroupState.md#temporaryvisiblesegments)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:154](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L154)

___

### useTemporarySegmentEquivalences

• **useTemporarySegmentEquivalences**: [`SharedWatchableValue`](neuroglancer_shared_watchable_value.SharedWatchableValue.md)<`boolean`\>

#### Implementation of

[SegmentationGroupState](../interfaces/neuroglancer_segmentation_display_state_frontend.SegmentationGroupState.md).[useTemporarySegmentEquivalences](../interfaces/neuroglancer_segmentation_display_state_frontend.SegmentationGroupState.md#usetemporarysegmentequivalences)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:161](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L161)

___

### useTemporaryVisibleSegments

• **useTemporaryVisibleSegments**: [`SharedWatchableValue`](neuroglancer_shared_watchable_value.SharedWatchableValue.md)<`boolean`\>

#### Implementation of

[SegmentationGroupState](../interfaces/neuroglancer_segmentation_display_state_frontend.SegmentationGroupState.md).[useTemporaryVisibleSegments](../interfaces/neuroglancer_segmentation_display_state_frontend.SegmentationGroupState.md#usetemporaryvisiblesegments)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:159](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L159)

___

### visibleSegments

• **visibleSegments**: [`Uint64Set`](neuroglancer_uint64_set.Uint64Set.md)

#### Implementation of

[SegmentationGroupState](../interfaces/neuroglancer_segmentation_display_state_frontend.SegmentationGroupState.md).[visibleSegments](../interfaces/neuroglancer_segmentation_display_state_frontend.SegmentationGroupState.md#visiblesegments)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:142](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L142)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`SegmentationUserLayerGroupState`](neuroglancer_segmentation_user_layer.SegmentationUserLayerGroupState.md)

#### Returns

[`SegmentationUserLayerGroupState`](neuroglancer_segmentation_user_layer.SegmentationUserLayerGroupState.md)

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[addRef](neuroglancer_util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L48)

___

### assignFrom

▸ **assignFrom**(`other`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`SegmentationUserLayerGroupState`](neuroglancer_segmentation_user_layer.SegmentationUserLayerGroupState.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:134](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L134)

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

### restoreState

▸ **restoreState**(`specification`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `specification` | `unknown` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L100)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:119](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L119)

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
