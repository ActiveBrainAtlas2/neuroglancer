[neuroglancer](../README.md) / [Modules](../modules.md) / util/signal\_binding\_updater

# Module: util/signal\_binding\_updater

## Table of contents

### Interfaces

- [SignalBindingUpdater](../interfaces/util_signal_binding_updater.SignalBindingUpdater.md)

### Functions

- [addSignalBinding](util_signal_binding_updater.md#addsignalbinding)
- [removeSignalBinding](util_signal_binding_updater.md#removesignalbinding)

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
| `signal` | [`Signal`](../classes/util_signal.Signal.md)<`T`\> |
| `handler` | `T` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/signal_binding_updater.ts:23](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/signal_binding_updater.ts#L23)

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
| `signal` | [`Signal`](../classes/util_signal.Signal.md)<`T`\> |
| `handler` | `T` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/signal_binding_updater.ts:19](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/signal_binding_updater.ts#L19)
