[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation](../modules/annotation.md) / AnnotationPropertyTypeHandler

# Interface: AnnotationPropertyTypeHandler

[annotation](../modules/annotation.md).AnnotationPropertyTypeHandler

## Table of contents

### Methods

- [alignment](annotation.AnnotationPropertyTypeHandler.md#alignment)
- [deserializeCode](annotation.AnnotationPropertyTypeHandler.md#deserializecode)
- [deserializeJson](annotation.AnnotationPropertyTypeHandler.md#deserializejson)
- [serializeCode](annotation.AnnotationPropertyTypeHandler.md#serializecode)
- [serializeJson](annotation.AnnotationPropertyTypeHandler.md#serializejson)
- [serializedBytes](annotation.AnnotationPropertyTypeHandler.md#serializedbytes)

## Methods

### alignment

▸ **alignment**(`rank`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rank` | `number` |

#### Returns

`number`

#### Defined in

[src/neuroglancer/annotation/index.ts:96](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L96)

___

### deserializeCode

▸ **deserializeCode**(`property`, `offset`, `rank`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `property` | `string` |
| `offset` | `string` |
| `rank` | `number` |

#### Returns

`string`

#### Defined in

[src/neuroglancer/annotation/index.ts:98](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L98)

___

### deserializeJson

▸ **deserializeJson**(`obj`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `unknown` |

#### Returns

`number`

#### Defined in

[src/neuroglancer/annotation/index.ts:99](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L99)

___

### serializeCode

▸ **serializeCode**(`property`, `offset`, `rank`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `property` | `string` |
| `offset` | `string` |
| `rank` | `number` |

#### Returns

`string`

#### Defined in

[src/neuroglancer/annotation/index.ts:97](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L97)

___

### serializeJson

▸ **serializeJson**(`value`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`any`

#### Defined in

[src/neuroglancer/annotation/index.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L100)

___

### serializedBytes

▸ **serializedBytes**(`rank`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rank` | `number` |

#### Returns

`number`

#### Defined in

[src/neuroglancer/annotation/index.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L95)
