[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/datasource/brainmaps/base](../modules/neuroglancer_datasource_brainmaps_base.md) / ChangeSpec

# Class: ChangeSpec

[neuroglancer/datasource/brainmaps/base](../modules/neuroglancer_datasource_brainmaps_base.md).ChangeSpec

## Table of contents

### Constructors

- [constructor](neuroglancer_datasource_brainmaps_base.ChangeSpec.md#constructor)

### Properties

- [changeStackId](neuroglancer_datasource_brainmaps_base.ChangeSpec.md#changestackid)
- [skipEquivalences](neuroglancer_datasource_brainmaps_base.ChangeSpec.md#skipequivalences)
- [timeStamp](neuroglancer_datasource_brainmaps_base.ChangeSpec.md#timestamp)

## Constructors

### constructor

• **new ChangeSpec**()

## Properties

### changeStackId

• **changeStackId**: `string`

#### Defined in

[src/neuroglancer/datasource/brainmaps/base.ts:27](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/brainmaps/base.ts#L27)

___

### skipEquivalences

• `Optional` **skipEquivalences**: `boolean`

#### Defined in

[src/neuroglancer/datasource/brainmaps/base.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/brainmaps/base.ts#L33)

___

### timeStamp

• `Optional` **timeStamp**: `number`

Apply changes prior to this timestamp (in milliseconds since epoch).  If 0, no changes should
be applied.  If negative, all changes should be applied.

#### Defined in

[src/neuroglancer/datasource/brainmaps/base.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/brainmaps/base.ts#L32)
