[neuroglancer](../README.md) / [Modules](../modules.md) / [layer](../modules/layer.md) / LayerReference

# Class: LayerReference

[layer](../modules/layer.md).LayerReference

## Hierarchy

- `RefCounted`

  ↳ **`LayerReference`**

## Implements

- `Trackable`

## Table of contents

### Constructors

- [constructor](layer.LayerReference.md#constructor)

### Properties

- [changed](layer.LayerReference.md#changed)
- [disposedStacks](layer.LayerReference.md#disposedstacks)
- [filter](layer.LayerReference.md#filter)
- [layerManager](layer.LayerReference.md#layermanager)
- [layerName\_](layer.LayerReference.md#layername_)
- [layer\_](layer.LayerReference.md#layer_)
- [refCount](layer.LayerReference.md#refcount)
- [validate](layer.LayerReference.md#validate)
- [wasDisposed](layer.LayerReference.md#wasdisposed)

### Accessors

- [layer](layer.LayerReference.md#layer)
- [layerName](layer.LayerReference.md#layername)

### Methods

- [addRef](layer.LayerReference.md#addref)
- [dispose](layer.LayerReference.md#dispose)
- [disposed](layer.LayerReference.md#disposed)
- [refCountReachedZero](layer.LayerReference.md#refcountreachedzero)
- [registerCancellable](layer.LayerReference.md#registercancellable)
- [registerDisposer](layer.LayerReference.md#registerdisposer)
- [registerEventListener](layer.LayerReference.md#registereventlistener)
- [reset](layer.LayerReference.md#reset)
- [restoreState](layer.LayerReference.md#restorestate)
- [toJSON](layer.LayerReference.md#tojson)
- [unregisterDisposer](layer.LayerReference.md#unregisterdisposer)

## Constructors

### constructor

• **new LayerReference**(`layerManager`, `filter`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layerManager` | [`LayerManager`](layer.LayerManager.md) |
| `filter` | (`layer`: [`ManagedUserLayer`](layer.ManagedUserLayer.md)) => `boolean` |

#### Overrides

RefCounted.constructor

#### Defined in

[src/neuroglancer/layer.ts:1525](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/layer.ts#L1525)

## Properties

### changed

• **changed**: `NullarySignal`

#### Implementation of

Trackable.changed

#### Defined in

[src/neuroglancer/layer.ts:1524](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/layer.ts#L1524)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

RefCounted.disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L52)

___

### filter

• **filter**: (`layer`: [`ManagedUserLayer`](layer.ManagedUserLayer.md)) => `boolean`

#### Type declaration

▸ (`layer`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`ManagedUserLayer`](layer.ManagedUserLayer.md) |

##### Returns

`boolean`

___

### layerManager

• **layerManager**: [`LayerManager`](layer.LayerManager.md)

___

### layerName\_

• `Private` **layerName\_**: `undefined` \| `string`

#### Defined in

[src/neuroglancer/layer.ts:1522](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/layer.ts#L1522)

___

### layer\_

• `Private` **layer\_**: `undefined` \| [`ManagedUserLayer`](layer.ManagedUserLayer.md)

#### Defined in

[src/neuroglancer/layer.ts:1523](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/layer.ts#L1523)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

RefCounted.refCount

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L45)

___

### validate

• `Private` **validate**: `DebouncedFunc`<() => `void`\>

#### Defined in

[src/neuroglancer/layer.ts:1580](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/layer.ts#L1580)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

RefCounted.wasDisposed

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### layer

• `get` **layer**(): `undefined` \| [`ManagedUserLayer`](layer.ManagedUserLayer.md)

#### Returns

`undefined` \| [`ManagedUserLayer`](layer.ManagedUserLayer.md)

#### Defined in

[src/neuroglancer/layer.ts:1548](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/layer.ts#L1548)

• `set` **layer**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| [`ManagedUserLayer`](layer.ManagedUserLayer.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:1556](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/layer.ts#L1556)

___

### layerName

• `get` **layerName**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[src/neuroglancer/layer.ts:1552](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/layer.ts#L1552)

• `set` **layerName**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| `string` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:1570](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/layer.ts#L1570)

## Methods

### addRef

▸ **addRef**(): [`LayerReference`](layer.LayerReference.md)

#### Returns

[`LayerReference`](layer.LayerReference.md)

#### Inherited from

RefCounted.addRef

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

RefCounted.dispose

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

RefCounted.disposed

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L75)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

RefCounted.refCountReachedZero

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L66)

___

### registerCancellable

▸ **registerCancellable**<`T`\>(`cancellable`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cancellable` | `T` |

#### Returns

`T`

#### Inherited from

RefCounted.registerCancellable

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L100)

___

### registerDisposer

▸ **registerDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Disposer` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

RefCounted.registerDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L76)

___

### registerEventListener

▸ **registerEventListener**(`target`, `type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `EventTarget` |
| `type` | `string` |
| `listener` | `EventListenerOrEventListenerObject` |
| `options?` | `boolean` \| `AddEventListenerOptions` |

#### Returns

`void`

#### Inherited from

RefCounted.registerEventListener

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L95)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Implementation of

Trackable.reset

#### Defined in

[src/neuroglancer/layer.ts:1608](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/layer.ts#L1608)

___

### restoreState

▸ **restoreState**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

`void`

#### Implementation of

Trackable.restoreState

#### Defined in

[src/neuroglancer/layer.ts:1595](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/layer.ts#L1595)

___

### toJSON

▸ **toJSON**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Implementation of

Trackable.toJSON

#### Defined in

[src/neuroglancer/layer.ts:1600](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/layer.ts#L1600)

___

### unregisterDisposer

▸ **unregisterDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Disposer` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

RefCounted.unregisterDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L85)
