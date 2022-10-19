[neuroglancer](../README.md) / [Modules](../modules.md) / [segmentation\_display\_state/frontend](../modules/segmentation_display_state_frontend.md) / [<internal\>](../modules/segmentation_display_state_frontend._internal_.md) / SegmentationUserLayerGroupState

# Class: SegmentationUserLayerGroupState

[segmentation_display_state/frontend](../modules/segmentation_display_state_frontend.md).[<internal>](../modules/segmentation_display_state_frontend._internal_.md).SegmentationUserLayerGroupState

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`SegmentationUserLayerGroupState`**

## Implements

- [`SegmentationGroupState`](../interfaces/segmentation_display_state_frontend.SegmentationGroupState.md)

## Table of contents

### Constructors

- [constructor](segmentation_display_state_frontend._internal_.SegmentationUserLayerGroupState.md#constructor)

### Properties

- [disposedStacks](segmentation_display_state_frontend._internal_.SegmentationUserLayerGroupState.md#disposedstacks)
- [graph](segmentation_display_state_frontend._internal_.SegmentationUserLayerGroupState.md#graph)
- [hideSegmentZero](segmentation_display_state_frontend._internal_.SegmentationUserLayerGroupState.md#hidesegmentzero)
- [layer](segmentation_display_state_frontend._internal_.SegmentationUserLayerGroupState.md#layer)
- [localGraph](segmentation_display_state_frontend._internal_.SegmentationUserLayerGroupState.md#localgraph)
- [localSegmentEquivalences](segmentation_display_state_frontend._internal_.SegmentationUserLayerGroupState.md#localsegmentequivalences)
- [maxIdLength](segmentation_display_state_frontend._internal_.SegmentationUserLayerGroupState.md#maxidlength)
- [refCount](segmentation_display_state_frontend._internal_.SegmentationUserLayerGroupState.md#refcount)
- [segmentEquivalences](segmentation_display_state_frontend._internal_.SegmentationUserLayerGroupState.md#segmentequivalences)
- [segmentPropertyMap](segmentation_display_state_frontend._internal_.SegmentationUserLayerGroupState.md#segmentpropertymap)
- [segmentQuery](segmentation_display_state_frontend._internal_.SegmentationUserLayerGroupState.md#segmentquery)
- [specificationChanged](segmentation_display_state_frontend._internal_.SegmentationUserLayerGroupState.md#specificationchanged)
- [temporarySegmentEquivalences](segmentation_display_state_frontend._internal_.SegmentationUserLayerGroupState.md#temporarysegmentequivalences)
- [temporaryVisibleSegments](segmentation_display_state_frontend._internal_.SegmentationUserLayerGroupState.md#temporaryvisiblesegments)
- [useTemporarySegmentEquivalences](segmentation_display_state_frontend._internal_.SegmentationUserLayerGroupState.md#usetemporarysegmentequivalences)
- [useTemporaryVisibleSegments](segmentation_display_state_frontend._internal_.SegmentationUserLayerGroupState.md#usetemporaryvisiblesegments)
- [visibleSegments](segmentation_display_state_frontend._internal_.SegmentationUserLayerGroupState.md#visiblesegments)
- [wasDisposed](segmentation_display_state_frontend._internal_.SegmentationUserLayerGroupState.md#wasdisposed)

### Methods

- [addRef](segmentation_display_state_frontend._internal_.SegmentationUserLayerGroupState.md#addref)
- [assignFrom](segmentation_display_state_frontend._internal_.SegmentationUserLayerGroupState.md#assignfrom)
- [dispose](segmentation_display_state_frontend._internal_.SegmentationUserLayerGroupState.md#dispose)
- [disposed](segmentation_display_state_frontend._internal_.SegmentationUserLayerGroupState.md#disposed)
- [refCountReachedZero](segmentation_display_state_frontend._internal_.SegmentationUserLayerGroupState.md#refcountreachedzero)
- [registerCancellable](segmentation_display_state_frontend._internal_.SegmentationUserLayerGroupState.md#registercancellable)
- [registerDisposer](segmentation_display_state_frontend._internal_.SegmentationUserLayerGroupState.md#registerdisposer)
- [registerEventListener](segmentation_display_state_frontend._internal_.SegmentationUserLayerGroupState.md#registereventlistener)
- [restoreState](segmentation_display_state_frontend._internal_.SegmentationUserLayerGroupState.md#restorestate)
- [toJSON](segmentation_display_state_frontend._internal_.SegmentationUserLayerGroupState.md#tojson)
- [unregisterDisposer](segmentation_display_state_frontend._internal_.SegmentationUserLayerGroupState.md#unregisterdisposer)

## Constructors

### constructor

• **new SegmentationUserLayerGroupState**(`layer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`SegmentationUserLayer`](segmentation_display_state_frontend._internal_.SegmentationUserLayer.md) |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:92](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_user_layer.ts#L92)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### graph

• **graph**: [`WatchableValue`](annotation_annotation_layer_state._internal_.WatchableValue.md)<`undefined` \| [`SegmentationGraphSource`](segmentation_graph_source.SegmentationGraphSource.md)\>

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:144](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_user_layer.ts#L144)

___

### hideSegmentZero

• **hideSegmentZero**: [`TrackableBoolean`](annotation_annotation_layer_state._internal_.TrackableBoolean.md)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:151](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_user_layer.ts#L151)

___

### layer

• **layer**: [`SegmentationUserLayer`](segmentation_display_state_frontend._internal_.SegmentationUserLayer.md)

___

### localGraph

• **localGraph**: [`LocalSegmentationGraphSource`](segmentation_graph_local.LocalSegmentationGraphSource.md)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:141](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_user_layer.ts#L141)

___

### localSegmentEquivalences

• **localSegmentEquivalences**: `boolean` = `false`

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:149](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_user_layer.ts#L149)

___

### maxIdLength

• **maxIdLength**: [`WatchableValue`](annotation_annotation_layer_state._internal_.WatchableValue.md)<`number`\>

Maximum length of base-10 representation of id seen.

#### Implementation of

[SegmentationGroupState](../interfaces/segmentation_display_state_frontend.SegmentationGroupState.md).[maxIdLength](../interfaces/segmentation_display_state_frontend.SegmentationGroupState.md#maxidlength)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:150](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_user_layer.ts#L150)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### segmentEquivalences

• **segmentEquivalences**: [`SharedDisjointUint64Sets`](mesh_backend._internal_.SharedDisjointUint64Sets.md)

#### Implementation of

[SegmentationGroupState](../interfaces/segmentation_display_state_frontend.SegmentationGroupState.md).[segmentEquivalences](../interfaces/segmentation_display_state_frontend.SegmentationGroupState.md#segmentequivalences)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:145](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_user_layer.ts#L145)

___

### segmentPropertyMap

• **segmentPropertyMap**: [`WatchableValue`](annotation_annotation_layer_state._internal_.WatchableValue.md)<`undefined` \| [`PreprocessedSegmentPropertyMap`](segmentation_display_state_property_map.PreprocessedSegmentPropertyMap.md)\>

#### Implementation of

[SegmentationGroupState](../interfaces/segmentation_display_state_frontend.SegmentationGroupState.md).[segmentPropertyMap](../interfaces/segmentation_display_state_frontend.SegmentationGroupState.md#segmentpropertymap)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:143](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_user_layer.ts#L143)

___

### segmentQuery

• **segmentQuery**: [`TrackableValue`](annotation_annotation_layer_state._internal_.TrackableValue.md)<`string`\>

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:152](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_user_layer.ts#L152)

___

### specificationChanged

• **specificationChanged**: [`Signal`](util_signal.Signal.md)<() => `void`\>

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:91](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_user_layer.ts#L91)

___

### temporarySegmentEquivalences

• **temporarySegmentEquivalences**: [`SharedDisjointUint64Sets`](mesh_backend._internal_.SharedDisjointUint64Sets.md)

#### Implementation of

[SegmentationGroupState](../interfaces/segmentation_display_state_frontend.SegmentationGroupState.md).[temporarySegmentEquivalences](../interfaces/segmentation_display_state_frontend.SegmentationGroupState.md#temporarysegmentequivalences)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:156](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_user_layer.ts#L156)

___

### temporaryVisibleSegments

• **temporaryVisibleSegments**: [`Uint64Set`](mesh_backend._internal_.Uint64Set.md)

#### Implementation of

[SegmentationGroupState](../interfaces/segmentation_display_state_frontend.SegmentationGroupState.md).[temporaryVisibleSegments](../interfaces/segmentation_display_state_frontend.SegmentationGroupState.md#temporaryvisiblesegments)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:154](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_user_layer.ts#L154)

___

### useTemporarySegmentEquivalences

• **useTemporarySegmentEquivalences**: [`SharedWatchableValue`](chunk_manager_backend._internal_.SharedWatchableValue.md)<`boolean`\>

#### Implementation of

[SegmentationGroupState](../interfaces/segmentation_display_state_frontend.SegmentationGroupState.md).[useTemporarySegmentEquivalences](../interfaces/segmentation_display_state_frontend.SegmentationGroupState.md#usetemporarysegmentequivalences)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:161](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_user_layer.ts#L161)

___

### useTemporaryVisibleSegments

• **useTemporaryVisibleSegments**: [`SharedWatchableValue`](chunk_manager_backend._internal_.SharedWatchableValue.md)<`boolean`\>

#### Implementation of

[SegmentationGroupState](../interfaces/segmentation_display_state_frontend.SegmentationGroupState.md).[useTemporaryVisibleSegments](../interfaces/segmentation_display_state_frontend.SegmentationGroupState.md#usetemporaryvisiblesegments)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:159](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_user_layer.ts#L159)

___

### visibleSegments

• **visibleSegments**: [`Uint64Set`](mesh_backend._internal_.Uint64Set.md)

#### Implementation of

[SegmentationGroupState](../interfaces/segmentation_display_state_frontend.SegmentationGroupState.md).[visibleSegments](../interfaces/segmentation_display_state_frontend.SegmentationGroupState.md#visiblesegments)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:142](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_user_layer.ts#L142)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`SegmentationUserLayerGroupState`](segmentation_display_state_frontend._internal_.SegmentationUserLayerGroupState.md)

#### Returns

[`SegmentationUserLayerGroupState`](segmentation_display_state_frontend._internal_.SegmentationUserLayerGroupState.md)

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[addRef](util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### assignFrom

▸ **assignFrom**(`other`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`SegmentationUserLayerGroupState`](segmentation_display_state_frontend._internal_.SegmentationUserLayerGroupState.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:134](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_user_layer.ts#L134)

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

### restoreState

▸ **restoreState**(`specification`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `specification` | `unknown` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_user_layer.ts#L100)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:119](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_user_layer.ts#L119)

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
