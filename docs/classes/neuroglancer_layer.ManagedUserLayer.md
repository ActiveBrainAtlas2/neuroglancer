[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/layer](../modules/neuroglancer_layer.md) / ManagedUserLayer

# Class: ManagedUserLayer

[neuroglancer/layer](../modules/neuroglancer_layer.md).ManagedUserLayer

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`ManagedUserLayer`**

## Table of contents

### Constructors

- [constructor](neuroglancer_layer.ManagedUserLayer.md#constructor)

### Properties

- [archived](neuroglancer_layer.ManagedUserLayer.md#archived)
- [containers](neuroglancer_layer.ManagedUserLayer.md#containers)
- [disposedStacks](neuroglancer_layer.ManagedUserLayer.md#disposedstacks)
- [layerChanged](neuroglancer_layer.ManagedUserLayer.md#layerchanged)
- [layer\_](neuroglancer_layer.ManagedUserLayer.md#layer_)
- [localCoordinateSpace](neuroglancer_layer.ManagedUserLayer.md#localcoordinatespace)
- [localCoordinateSpaceCombiner](neuroglancer_layer.ManagedUserLayer.md#localcoordinatespacecombiner)
- [localPosition](neuroglancer_layer.ManagedUserLayer.md#localposition)
- [manager](neuroglancer_layer.ManagedUserLayer.md#manager)
- [name\_](neuroglancer_layer.ManagedUserLayer.md#name_)
- [nonArchivedLayerIndex](neuroglancer_layer.ManagedUserLayer.md#nonarchivedlayerindex)
- [readyStateChanged](neuroglancer_layer.ManagedUserLayer.md#readystatechanged)
- [refCount](neuroglancer_layer.ManagedUserLayer.md#refcount)
- [specificationChanged](neuroglancer_layer.ManagedUserLayer.md#specificationchanged)
- [unregisterUserLayer](neuroglancer_layer.ManagedUserLayer.md#unregisteruserlayer)
- [visible](neuroglancer_layer.ManagedUserLayer.md#visible)
- [wasDisposed](neuroglancer_layer.ManagedUserLayer.md#wasdisposed)

### Accessors

- [layer](neuroglancer_layer.ManagedUserLayer.md#layer)
- [name](neuroglancer_layer.ManagedUserLayer.md#name)
- [pickEnabled](neuroglancer_layer.ManagedUserLayer.md#pickenabled)
- [supportsPickOption](neuroglancer_layer.ManagedUserLayer.md#supportspickoption)

### Methods

- [addRef](neuroglancer_layer.ManagedUserLayer.md#addref)
- [dispose](neuroglancer_layer.ManagedUserLayer.md#dispose)
- [disposed](neuroglancer_layer.ManagedUserLayer.md#disposed)
- [isReady](neuroglancer_layer.ManagedUserLayer.md#isready)
- [refCountReachedZero](neuroglancer_layer.ManagedUserLayer.md#refcountreachedzero)
- [registerCancellable](neuroglancer_layer.ManagedUserLayer.md#registercancellable)
- [registerDisposer](neuroglancer_layer.ManagedUserLayer.md#registerdisposer)
- [registerEventListener](neuroglancer_layer.ManagedUserLayer.md#registereventlistener)
- [setArchived](neuroglancer_layer.ManagedUserLayer.md#setarchived)
- [setVisible](neuroglancer_layer.ManagedUserLayer.md#setvisible)
- [toJSON](neuroglancer_layer.ManagedUserLayer.md#tojson)
- [unregisterDisposer](neuroglancer_layer.ManagedUserLayer.md#unregisterdisposer)

## Constructors

### constructor

• **new ManagedUserLayer**(`name`, `manager`)

If layer is not null, tranfers ownership of a reference.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `manager` | [`LayerListSpecification`](neuroglancer_layer.LayerListSpecification.md) |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/layer.ts:565](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L565)

## Properties

### archived

• **archived**: `boolean` = `false`

#### Defined in

[src/neuroglancer/layer.ts:542](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L542)

___

### containers

• **containers**: `Set`<[`LayerManager`](neuroglancer_layer.LayerManager.md)\>

#### Defined in

[src/neuroglancer/layer.ts:492](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L492)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### layerChanged

• **layerChanged**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/layer.ts:490](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L490)

___

### layer\_

• `Private` **layer\_**: ``null`` \| [`UserLayer`](neuroglancer_layer.UserLayer.md) = `null`

#### Defined in

[src/neuroglancer/layer.ts:493](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L493)

___

### localCoordinateSpace

• **localCoordinateSpace**: [`TrackableCoordinateSpace`](neuroglancer_coordinate_transform.TrackableCoordinateSpace.md)

#### Defined in

[src/neuroglancer/layer.ts:480](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L480)

___

### localCoordinateSpaceCombiner

• **localCoordinateSpaceCombiner**: [`CoordinateSpaceCombiner`](neuroglancer_coordinate_transform.CoordinateSpaceCombiner.md)

#### Defined in

[src/neuroglancer/layer.ts:481](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L481)

___

### localPosition

• **localPosition**: [`Position`](neuroglancer_navigation_state.Position.md)

#### Defined in

[src/neuroglancer/layer.ts:483](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L483)

___

### manager

• **manager**: [`LayerListSpecification`](neuroglancer_layer.LayerListSpecification.md)

___

### name\_

• `Private` **name\_**: `string`

#### Defined in

[src/neuroglancer/layer.ts:528](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L528)

___

### nonArchivedLayerIndex

• **nonArchivedLayerIndex**: `number` = `-1`

#### Defined in

[src/neuroglancer/layer.ts:487](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L487)

___

### readyStateChanged

• **readyStateChanged**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/layer.ts:489](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L489)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### specificationChanged

• **specificationChanged**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/layer.ts:491](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L491)

___

### unregisterUserLayer

• `Private` **unregisterUserLayer**: `undefined` \| () => `void`

#### Defined in

[src/neuroglancer/layer.ts:497](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L497)

___

### visible

• **visible**: `boolean` = `true`

#### Defined in

[src/neuroglancer/layer.ts:541](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L541)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### layer

• `get` **layer**(): ``null`` \| [`UserLayer`](neuroglancer_layer.UserLayer.md)

#### Returns

``null`` \| [`UserLayer`](neuroglancer_layer.UserLayer.md)

#### Defined in

[src/neuroglancer/layer.ts:494](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L494)

• `set` **layer**(`layer`): `void`

If layer is not null, tranfers ownership of a reference.

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | ``null`` \| [`UserLayer`](neuroglancer_layer.UserLayer.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:502](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L502)

___

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Defined in

[src/neuroglancer/layer.ts:530](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L530)

• `set` **name**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:534](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L534)

___

### pickEnabled

• `get` **pickEnabled**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/layer.ts:549](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L549)

• `set` **pickEnabled**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:555](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L555)

___

### supportsPickOption

• `get` **supportsPickOption**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/layer.ts:544](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L544)

## Methods

### addRef

▸ **addRef**(): [`ManagedUserLayer`](neuroglancer_layer.ManagedUserLayer.md)

#### Returns

[`ManagedUserLayer`](neuroglancer_layer.ManagedUserLayer.md)

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[addRef](neuroglancer_util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[dispose](neuroglancer_util_disposable.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposed](neuroglancer_util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/layer.ts:617](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L617)

___

### isReady

▸ **isReady**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/layer.ts:523](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L523)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCountReachedZero](neuroglancer_util_disposable.RefCounted.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L66)

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

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[registerCancellable](neuroglancer_util_disposable.RefCounted.md#registercancellable)

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L100)

___

### registerDisposer

▸ **registerDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/neuroglancer_util_disposable.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[registerDisposer](neuroglancer_util_disposable.RefCounted.md#registerdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L76)

___

### registerEventListener

▸ **registerEventListener**(`target`, `type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EventTarget`](../modules/main_module._internal_.md#eventtarget) |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/main_module._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](../interfaces/main_module._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[registerEventListener](neuroglancer_util_disposable.RefCounted.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L95)

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

[src/neuroglancer/layer.ts:598](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L598)

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

[src/neuroglancer/layer.ts:587](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L587)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Defined in

[src/neuroglancer/layer.ts:570](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer.ts#L570)

___

### unregisterDisposer

▸ **unregisterDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/neuroglancer_util_disposable.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[unregisterDisposer](neuroglancer_util_disposable.RefCounted.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L85)
