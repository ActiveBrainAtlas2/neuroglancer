[neuroglancer](../README.md) / [Modules](../modules.md) / layout

# Module: layout

## Table of contents

### Interfaces

- [Handler](../interfaces/layout.Handler.md)

### Functions

- [box](layout.md#box)
- [withAttributes](layout.md#withattributes)
- [withFlex](layout.md#withflex)
- [withStyle](layout.md#withstyle)

## Functions

### box

▸ **box**(`flexDirection`, `spec`): (`container`: `HTMLElement`) => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `flexDirection` | `string` |
| `spec` | [`Handler`](../interfaces/layout.Handler.md)[] |

#### Returns

`fn`

▸ (`container`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `container` | `HTMLElement` |

##### Returns

`void`

#### Defined in

[src/neuroglancer/layout.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layout.ts#L39)

___

### withAttributes

▸ **withAttributes**(`attributes`, `handler`): (`element`: `HTMLElement`) => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attributes` | `Object` |
| `handler` | [`Handler`](../interfaces/layout.Handler.md) |

#### Returns

`fn`

▸ (`element`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `HTMLElement` |

##### Returns

`void`

#### Defined in

[src/neuroglancer/layout.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layout.ts#L32)

___

### withFlex

▸ **withFlex**(`value`, `handler`): (`element`: `HTMLElement`) => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `handler` | [`Handler`](../interfaces/layout.Handler.md) |

#### Returns

`fn`

▸ (`element`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `HTMLElement` |

##### Returns

`void`

#### Defined in

[src/neuroglancer/layout.ts:19](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layout.ts#L19)

___

### withStyle

▸ **withStyle**(`style`, `handler`): (`element`: `HTMLElement`) => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `style` | `Object` |
| `handler` | [`Handler`](../interfaces/layout.Handler.md) |

#### Returns

`fn`

▸ (`element`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `HTMLElement` |

##### Returns

`void`

#### Defined in

[src/neuroglancer/layout.ts:25](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layout.ts#L25)
