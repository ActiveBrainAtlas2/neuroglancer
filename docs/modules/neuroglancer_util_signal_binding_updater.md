[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/util/signal\_binding\_updater

# Module: neuroglancer/util/signal\_binding\_updater

## Table of contents

### Interfaces

- [SignalBindingUpdater](../interfaces/neuroglancer_util_signal_binding_updater.SignalBindingUpdater.md)

### Functions

- [addSignalBinding](neuroglancer_util_signal_binding_updater.md#addsignalbinding)
- [removeSignalBinding](neuroglancer_util_signal_binding_updater.md#removesignalbinding)

## Functions

### addSignalBinding

▸ **addSignalBinding**<`T`\>(`signal`, `handler`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Function` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `signal` | [`Signal`](../classes/neuroglancer_util_signal.Signal.md)<`T`\> |
| `handler` | `T` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/signal_binding_updater.ts:23](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/signal_binding_updater.ts#L23)

___

### removeSignalBinding

▸ **removeSignalBinding**<`T`\>(`signal`, `handler`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Function` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `signal` | [`Signal`](../classes/neuroglancer_util_signal.Signal.md)<`T`\> |
| `handler` | `T` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/signal_binding_updater.ts:19](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/signal_binding_updater.ts#L19)
