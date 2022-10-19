[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/polygon](../modules/annotation_polygon.md) / [<internal\>](../modules/annotation_polygon._internal_.md) / RelativeDisplayScales

# Interface: RelativeDisplayScales

[annotation/polygon](../modules/annotation_polygon.md).[<internal>](../modules/annotation_polygon._internal_.md).RelativeDisplayScales

## Table of contents

### Properties

- [factors](annotation_polygon._internal_.RelativeDisplayScales.md#factors)

## Properties

### factors

• **factors**: `Float64Array`

Array of length `coordinateSpace.rank` specifying scale factors on top of (will be multiply by)
`coordinateSpace.scales` to use for display purposes.  This allows non-uniform zooming.

#### Defined in

[src/neuroglancer/navigation_state.ts:507](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L507)
