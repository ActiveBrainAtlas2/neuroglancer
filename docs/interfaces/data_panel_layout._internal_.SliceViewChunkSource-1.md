[neuroglancer](../README.md) / [Modules](../modules.md) / [data\_panel\_layout](../modules/data_panel_layout.md) / [<internal\>](../modules/data_panel_layout._internal_.md) / SliceViewChunkSource

# Interface: SliceViewChunkSource<Spec\>

[data_panel_layout](../modules/data_panel_layout.md).[<internal>](../modules/data_panel_layout._internal_.md).SliceViewChunkSource

## Type parameters

| Name | Type |
| :------ | :------ |
| `Spec` | extends [`SliceViewChunkSpecification`](data_panel_layout._internal_.SliceViewChunkSpecification.md) = [`SliceViewChunkSpecification`](data_panel_layout._internal_.SliceViewChunkSpecification.md) |

## Hierarchy

- [`Disposable`](axes_lines._internal_.Disposable.md)

  ↳ **`SliceViewChunkSource`**

  ↳↳ [`VolumeChunkSource`](layer._internal_.VolumeChunkSource-1.md)

## Implemented by

- [`SliceViewChunkSource`](../classes/data_panel_layout._internal_.SliceViewChunkSource.md)

## Table of contents

### Properties

- [spec](data_panel_layout._internal_.SliceViewChunkSource-1.md#spec)

### Methods

- [dispose](data_panel_layout._internal_.SliceViewChunkSource-1.md#dispose)

## Properties

### spec

• **spec**: `Spec`

#### Defined in

[src/neuroglancer/sliceview/base.ts:674](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/base.ts#L674)

## Methods

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[Disposable](axes_lines._internal_.Disposable.md).[dispose](axes_lines._internal_.Disposable.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:17](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L17)
