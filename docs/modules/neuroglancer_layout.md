[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/layout

# Module: neuroglancer/layout

## Table of contents

### Interfaces

- [Handler](../interfaces/neuroglancer_layout.Handler.md)

### Functions

- [box](neuroglancer_layout.md#box)
- [withAttributes](neuroglancer_layout.md#withattributes)
- [withFlex](neuroglancer_layout.md#withflex)
- [withStyle](neuroglancer_layout.md#withstyle)

## Functions

### box

▸ **box**(`flexDirection`, `spec`): (`container`: [`HTMLElement`](main_module._internal_.md#htmlelement)) => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `flexDirection` | `string` |
| `spec` | [`Handler`](../interfaces/neuroglancer_layout.Handler.md)[] |

#### Returns

`fn`

▸ (`container`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`HTMLElement`](main_module._internal_.md#htmlelement) |

##### Returns

`void`

#### Defined in

[src/neuroglancer/layout.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layout.ts#L39)

___

### withAttributes

▸ **withAttributes**(`attributes`, `handler`): (`element`: [`HTMLElement`](main_module._internal_.md#htmlelement)) => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attributes` | `Object` |
| `handler` | [`Handler`](../interfaces/neuroglancer_layout.Handler.md) |

#### Returns

`fn`

▸ (`element`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `element` | [`HTMLElement`](main_module._internal_.md#htmlelement) |

##### Returns

`void`

#### Defined in

[src/neuroglancer/layout.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layout.ts#L32)

___

### withFlex

▸ **withFlex**(`value`, `handler`): (`element`: [`HTMLElement`](main_module._internal_.md#htmlelement)) => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `handler` | [`Handler`](../interfaces/neuroglancer_layout.Handler.md) |

#### Returns

`fn`

▸ (`element`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `element` | [`HTMLElement`](main_module._internal_.md#htmlelement) |

##### Returns

`void`

#### Defined in

[src/neuroglancer/layout.ts:19](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layout.ts#L19)

___

### withStyle

▸ **withStyle**(`style`, `handler`): (`element`: [`HTMLElement`](main_module._internal_.md#htmlelement)) => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `style` | `Object` |
| `handler` | [`Handler`](../interfaces/neuroglancer_layout.Handler.md) |

#### Returns

`fn`

▸ (`element`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `element` | [`HTMLElement`](main_module._internal_.md#htmlelement) |

##### Returns

`void`

#### Defined in

[src/neuroglancer/layout.ts:25](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layout.ts#L25)
