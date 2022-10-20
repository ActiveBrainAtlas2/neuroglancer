[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/datasource/precomputed/base](../modules/neuroglancer_datasource_precomputed_base.md) / AnnotationSourceParameters

# Class: AnnotationSourceParameters

[neuroglancer/datasource/precomputed/base](../modules/neuroglancer_datasource_precomputed_base.md).AnnotationSourceParameters

## Table of contents

### Constructors

- [constructor](neuroglancer_datasource_precomputed_base.AnnotationSourceParameters.md#constructor)

### Properties

- [byId](neuroglancer_datasource_precomputed_base.AnnotationSourceParameters.md#byid)
- [properties](neuroglancer_datasource_precomputed_base.AnnotationSourceParameters.md#properties)
- [rank](neuroglancer_datasource_precomputed_base.AnnotationSourceParameters.md#rank)
- [relationships](neuroglancer_datasource_precomputed_base.AnnotationSourceParameters.md#relationships)
- [type](neuroglancer_datasource_precomputed_base.AnnotationSourceParameters.md#type)
- [RPC\_ID](neuroglancer_datasource_precomputed_base.AnnotationSourceParameters.md#rpc_id)

## Constructors

### constructor

• **new AnnotationSourceParameters**()

## Properties

### byId

• **byId**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `sharding` | `undefined` \| [`ShardingParameters`](../interfaces/neuroglancer_datasource_precomputed_base.ShardingParameters.md) |
| `url` | `string` |

#### Defined in

[src/neuroglancer/datasource/precomputed/base.ts:101](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/precomputed/base.ts#L101)

___

### properties

• **properties**: [`AnnotationPropertySpec`](../modules/neuroglancer_annotation.md#annotationpropertyspec)[]

#### Defined in

[src/neuroglancer/datasource/precomputed/base.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/precomputed/base.ts#L100)

___

### rank

• **rank**: `number`

#### Defined in

[src/neuroglancer/datasource/precomputed/base.ts:98](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/precomputed/base.ts#L98)

___

### relationships

• **relationships**: { `name`: `string` ; `sharding`: `undefined` \| [`ShardingParameters`](../interfaces/neuroglancer_datasource_precomputed_base.ShardingParameters.md) ; `url`: `string`  }[]

#### Defined in

[src/neuroglancer/datasource/precomputed/base.ts:99](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/precomputed/base.ts#L99)

___

### type

• **type**: [`AnnotationType`](../enums/neuroglancer_annotation.AnnotationType.md)

#### Defined in

[src/neuroglancer/datasource/precomputed/base.ts:102](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/precomputed/base.ts#L102)

___

### RPC\_ID

▪ `Static` **RPC\_ID**: `string` = `'precomputed/AnnotationSource'`

#### Defined in

[src/neuroglancer/datasource/precomputed/base.ts:103](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/precomputed/base.ts#L103)
