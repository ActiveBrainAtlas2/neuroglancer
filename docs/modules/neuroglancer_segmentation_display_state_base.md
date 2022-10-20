[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/segmentation\_display\_state/base

# Module: neuroglancer/segmentation\_display\_state/base

## Table of contents

### Interfaces

- [IndexedSegmentProperty](../interfaces/neuroglancer_segmentation_display_state_base.IndexedSegmentProperty.md)
- [VisibleSegmentsState](../interfaces/neuroglancer_segmentation_display_state_base.VisibleSegmentsState.md)

### Variables

- [VISIBLE\_SEGMENTS\_STATE\_PROPERTIES](neuroglancer_segmentation_display_state_base.md#visible_segments_state_properties)

### Functions

- [forEachVisibleSegment](neuroglancer_segmentation_display_state_base.md#foreachvisiblesegment)
- [getObjectKey](neuroglancer_segmentation_display_state_base.md#getobjectkey)
- [getSegmentEquivalences](neuroglancer_segmentation_display_state_base.md#getsegmentequivalences)
- [getVisibleSegments](neuroglancer_segmentation_display_state_base.md#getvisiblesegments)
- [onTemporaryVisibleSegmentsStateChanged](neuroglancer_segmentation_display_state_base.md#ontemporaryvisiblesegmentsstatechanged)
- [onVisibleSegmentsStateChanged](neuroglancer_segmentation_display_state_base.md#onvisiblesegmentsstatechanged)

## Variables

### VISIBLE\_SEGMENTS\_STATE\_PROPERTIES

• `Const` **VISIBLE\_SEGMENTS\_STATE\_PROPERTIES**: keyof [`VisibleSegmentsState`](../interfaces/neuroglancer_segmentation_display_state_base.VisibleSegmentsState.md)[]

#### Defined in

[src/neuroglancer/segmentation_display_state/base.ts:35](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/base.ts#L35)

## Functions

### forEachVisibleSegment

▸ **forEachVisibleSegment**(`state`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`VisibleSegmentsState`](../interfaces/neuroglancer_segmentation_display_state_base.VisibleSegmentsState.md) |
| `callback` | (`objectId`: [`Uint64`](../classes/neuroglancer_util_uint64.Uint64.md), `rootObjectId`: [`Uint64`](../classes/neuroglancer_util_uint64.Uint64.md)) => `void` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/segmentation_display_state/base.ts:80](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/base.ts#L80)

___

### getObjectKey

▸ **getObjectKey**(`objectId`): `string`

Returns a string key for identifying a uint64 object id.  This is faster than
Uint64.prototype.toString().

#### Parameters

| Name | Type |
| :------ | :------ |
| `objectId` | [`Uint64`](../classes/neuroglancer_util_uint64.Uint64.md) |

#### Returns

`string`

#### Defined in

[src/neuroglancer/segmentation_display_state/base.ts:62](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/base.ts#L62)

___

### getSegmentEquivalences

▸ **getSegmentEquivalences**(`state`): [`SharedDisjointUint64Sets`](../classes/neuroglancer_shared_disjoint_sets.SharedDisjointUint64Sets.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`VisibleSegmentsState`](../interfaces/neuroglancer_segmentation_display_state_base.VisibleSegmentsState.md) |

#### Returns

[`SharedDisjointUint64Sets`](../classes/neuroglancer_shared_disjoint_sets.SharedDisjointUint64Sets.md)

#### Defined in

[src/neuroglancer/segmentation_display_state/base.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/base.ts#L75)

___

### getVisibleSegments

▸ **getVisibleSegments**(`state`): [`Uint64Set`](../classes/neuroglancer_uint64_set.Uint64Set.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`VisibleSegmentsState`](../interfaces/neuroglancer_segmentation_display_state_base.VisibleSegmentsState.md) |

#### Returns

[`Uint64Set`](../classes/neuroglancer_uint64_set.Uint64Set.md)

#### Defined in

[src/neuroglancer/segmentation_display_state/base.ts:70](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/base.ts#L70)

___

### onTemporaryVisibleSegmentsStateChanged

▸ **onTemporaryVisibleSegmentsStateChanged**(`context`, `state`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`RefCounted`](../classes/neuroglancer_util_disposable.RefCounted.md) |
| `state` | [`VisibleSegmentsState`](../interfaces/neuroglancer_segmentation_display_state_base.VisibleSegmentsState.md) |
| `callback` | () => `void` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/segmentation_display_state/base.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/base.ts#L50)

___

### onVisibleSegmentsStateChanged

▸ **onVisibleSegmentsStateChanged**(`context`, `state`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`RefCounted`](../classes/neuroglancer_util_disposable.RefCounted.md) |
| `state` | [`VisibleSegmentsState`](../interfaces/neuroglancer_segmentation_display_state_base.VisibleSegmentsState.md) |
| `callback` | () => `void` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/segmentation_display_state/base.ts:44](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/base.ts#L44)
