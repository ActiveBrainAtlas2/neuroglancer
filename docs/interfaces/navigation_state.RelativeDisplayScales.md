[neuroglancer](../README.md) / [Modules](../modules.md) / [navigation\_state](../modules/navigation_state.md) / RelativeDisplayScales

# Interface: RelativeDisplayScales

[navigation_state](../modules/navigation_state.md).RelativeDisplayScales

## Table of contents

### Properties

- [factors](navigation_state.RelativeDisplayScales.md#factors)

## Properties

### factors

• **factors**: `Float64Array`

Array of length `coordinateSpace.rank` specifying scale factors on top of (will be multiply by)
`coordinateSpace.scales` to use for display purposes.  This allows non-uniform zooming.

#### Defined in

[src/neuroglancer/navigation_state.ts:507](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/navigation_state.ts#L507)
