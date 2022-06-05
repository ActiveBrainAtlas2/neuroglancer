[neuroglancer](../README.md) / [Modules](../modules.md) / [layer](../modules/layer.md) / ManagedUserLayer

# Class: ManagedUserLayer

[layer](../modules/layer.md).ManagedUserLayer

## Hierarchy

- `RefCounted`

  ↳ **`ManagedUserLayer`**

## Table of contents

### Constructors

- [constructor](layer.ManagedUserLayer.md#constructor)

### Properties

- [archived](layer.ManagedUserLayer.md#archived)
- [containers](layer.ManagedUserLayer.md#containers)
- [disposedStacks](layer.ManagedUserLayer.md#disposedstacks)
- [layerChanged](layer.ManagedUserLayer.md#layerchanged)
- [layer\_](layer.ManagedUserLayer.md#layer_)
- [localCoordinateSpace](layer.ManagedUserLayer.md#localcoordinatespace)
- [localCoordinateSpaceCombiner](layer.ManagedUserLayer.md#localcoordinatespacecombiner)
- [localPosition](layer.ManagedUserLayer.md#localposition)
- [manager](layer.ManagedUserLayer.md#manager)
- [name\_](layer.ManagedUserLayer.md#name_)
- [nonArchivedLayerIndex](layer.ManagedUserLayer.md#nonarchivedlayerindex)
- [readyStateChanged](layer.ManagedUserLayer.md#readystatechanged)
- [refCount](layer.ManagedUserLayer.md#refcount)
- [specificationChanged](layer.ManagedUserLayer.md#specificationchanged)
- [unregisterUserLayer](layer.ManagedUserLayer.md#unregisteruserlayer)
- [visible](layer.ManagedUserLayer.md#visible)
- [wasDisposed](layer.ManagedUserLayer.md#wasdisposed)

### Accessors

- [layer](layer.ManagedUserLayer.md#layer)
- [name](layer.ManagedUserLayer.md#name)
- [pickEnabled](layer.ManagedUserLayer.md#pickenabled)
- [supportsPickOption](layer.ManagedUserLayer.md#supportspickoption)

### Methods

- [addRef](layer.ManagedUserLayer.md#addref)
- [dispose](layer.ManagedUserLayer.md#dispose)
- [disposed](layer.ManagedUserLayer.md#disposed)
- [isReady](layer.ManagedUserLayer.md#isready)
- [refCountReachedZero](layer.ManagedUserLayer.md#refcountreachedzero)
- [registerCancellable](layer.ManagedUserLayer.md#registercancellable)
- [registerDisposer](layer.ManagedUserLayer.md#registerdisposer)
- [registerEventListener](layer.ManagedUserLayer.md#registereventlistener)
- [setArchived](layer.ManagedUserLayer.md#setarchived)
- [setVisible](layer.ManagedUserLayer.md#setvisible)
- [toJSON](layer.ManagedUserLayer.md#tojson)
- [unregisterDisposer](layer.ManagedUserLayer.md#unregisterdisposer)

## Constructors

### constructor

• **new ManagedUserLayer**(`name`, `manager`)

If layer is not null, tranfers ownership of a reference.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `manager` | [`LayerListSpecification`](layer.LayerListSpecification.md) |

#### Overrides

RefCounted.constructor

#### Defined in

[src/neuroglancer/layer.ts:565](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/layer.ts#L565)

## Properties

### archived

• **archived**: `boolean` = `false`

#### Defined in

[src/neuroglancer/layer.ts:542](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/layer.ts#L542)

___

### containers

• **containers**: `Set`<[`LayerManager`](layer.LayerManager.md)\>

#### Defined in

[src/neuroglancer/layer.ts:492](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/layer.ts#L492)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

RefCounted.disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L52)

___

### layerChanged

• **layerChanged**: `NullarySignal`

#### Defined in

[src/neuroglancer/layer.ts:490](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/layer.ts#L490)

___

### layer\_

• `Private` **layer\_**: ``null`` \| [`UserLayer`](layer.UserLayer.md) = `null`

#### Defined in

[src/neuroglancer/layer.ts:493](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/layer.ts#L493)

___

### localCoordinateSpace

• **localCoordinateSpace**: [`TrackableCoordinateSpace`](coordinate_transform.TrackableCoordinateSpace.md)

#### Defined in

[src/neuroglancer/layer.ts:480](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/layer.ts#L480)

___

### localCoordinateSpaceCombiner

• **localCoordinateSpaceCombiner**: [`CoordinateSpaceCombiner`](coordinate_transform.CoordinateSpaceCombiner.md)

#### Defined in

[src/neuroglancer/layer.ts:481](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/layer.ts#L481)

___

### localPosition

• **localPosition**: [`Position`](navigation_state.Position.md)

#### Defined in

[src/neuroglancer/layer.ts:483](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/layer.ts#L483)

___

### manager

• **manager**: [`LayerListSpecification`](layer.LayerListSpecification.md)

___

### name\_

• `Private` **name\_**: `string`

#### Defined in

[src/neuroglancer/layer.ts:528](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/layer.ts#L528)

___

### nonArchivedLayerIndex

• **nonArchivedLayerIndex**: `number` = `-1`

#### Defined in

[src/neuroglancer/layer.ts:487](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/layer.ts#L487)

___

### readyStateChanged

• **readyStateChanged**: `NullarySignal`

#### Defined in

[src/neuroglancer/layer.ts:489](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/layer.ts#L489)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

RefCounted.refCount

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L45)

___

### specificationChanged

• **specificationChanged**: `NullarySignal`

#### Defined in

[src/neuroglancer/layer.ts:491](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/layer.ts#L491)

___

### unregisterUserLayer

• `Private` **unregisterUserLayer**: `undefined` \| () => `void`

#### Defined in

[src/neuroglancer/layer.ts:497](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/layer.ts#L497)

___

### visible

• **visible**: `boolean` = `true`

#### Defined in

[src/neuroglancer/layer.ts:541](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/layer.ts#L541)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

RefCounted.wasDisposed

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### layer

• `get` **layer**(): ``null`` \| [`UserLayer`](layer.UserLayer.md)

#### Returns

``null`` \| [`UserLayer`](layer.UserLayer.md)

#### Defined in

[src/neuroglancer/layer.ts:494](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/layer.ts#L494)

• `set` **layer**(`layer`): `void`

If layer is not null, tranfers ownership of a reference.

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | ``null`` \| [`UserLayer`](layer.UserLayer.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:502](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/layer.ts#L502)

___

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Defined in

[src/neuroglancer/layer.ts:530](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/layer.ts#L530)

• `set` **name**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:534](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/layer.ts#L534)

___

### pickEnabled

• `get` **pickEnabled**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/layer.ts:549](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/layer.ts#L549)

• `set` **pickEnabled**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:555](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/layer.ts#L555)

___

### supportsPickOption

• `get` **supportsPickOption**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/layer.ts:544](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/layer.ts#L544)

## Methods

### addRef

▸ **addRef**(): [`ManagedUserLayer`](layer.ManagedUserLayer.md)

#### Returns

[`ManagedUserLayer`](layer.ManagedUserLayer.md)

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

#### Overrides

RefCounted.disposed

#### Defined in

[src/neuroglancer/layer.ts:617](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/layer.ts#L617)

___

### isReady

▸ **isReady**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/layer.ts:523](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/layer.ts#L523)

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

### setArchived

▸ **setArchived**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:598](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/layer.ts#L598)

___

### setVisible

▸ **setVisible**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:587](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/layer.ts#L587)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Defined in

[src/neuroglancer/layer.ts:570](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/layer.ts#L570)

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
