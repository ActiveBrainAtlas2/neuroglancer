[neuroglancer](../README.md) / [Modules](../modules.md) / [coordinate\_transform](coordinate_transform.md) / <internal\>

# Module: <internal\>

## Table of contents

### Classes

- [NullarySignal](../classes/coordinate_transform._internal_.NullarySignal.md)
- [Signal](../classes/coordinate_transform._internal_.Signal.md)

### Interfaces

- [BoundCoordinateSpace](../interfaces/coordinate_transform._internal_.BoundCoordinateSpace.md)
- [JsonRestorable](../interfaces/coordinate_transform._internal_.JsonRestorable.md)
- [ReadonlySignal](../interfaces/coordinate_transform._internal_.ReadonlySignal.md)
- [Trackable](../interfaces/coordinate_transform._internal_.Trackable.md)

### Type Aliases

- [NullaryReadonlySignal](coordinate_transform._internal_.md#nullaryreadonlysignal)
- [Readonly](coordinate_transform._internal_.md#readonly)
- [TypedArray](coordinate_transform._internal_.md#typedarray)

## Type Aliases

### NullaryReadonlySignal

Ƭ **NullaryReadonlySignal**: [`ReadonlySignal`](../interfaces/coordinate_transform._internal_.ReadonlySignal.md)<() => `void`\>

#### Defined in

[src/neuroglancer/util/signal.ts:118](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/signal.ts#L118)

___

### Readonly

Ƭ **Readonly**<`T`\>: { readonly [P in keyof T]: T[P] }

Make all properties in T readonly

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1551

___

### TypedArray

Ƭ **TypedArray**: `Int8Array` \| `Uint8Array` \| `Int16Array` \| `Uint16Array` \| `Int32Array` \| `Uint32Array` \| `Float32Array` \| `Float64Array`

#### Defined in

[src/neuroglancer/util/array.ts:63](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/array.ts#L63)
