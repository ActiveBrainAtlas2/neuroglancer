[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / ManagedUserLayer

# Class: ManagedUserLayer

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).ManagedUserLayer

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`ManagedUserLayer`**

## Table of contents

### Constructors

- [constructor](annotation_annotation_layer_state._internal_.ManagedUserLayer.md#constructor)

### Properties

- [archived](annotation_annotation_layer_state._internal_.ManagedUserLayer.md#archived)
- [containers](annotation_annotation_layer_state._internal_.ManagedUserLayer.md#containers)
- [disposedStacks](annotation_annotation_layer_state._internal_.ManagedUserLayer.md#disposedstacks)
- [layerChanged](annotation_annotation_layer_state._internal_.ManagedUserLayer.md#layerchanged)
- [layer\_](annotation_annotation_layer_state._internal_.ManagedUserLayer.md#layer_)
- [localCoordinateSpace](annotation_annotation_layer_state._internal_.ManagedUserLayer.md#localcoordinatespace)
- [localCoordinateSpaceCombiner](annotation_annotation_layer_state._internal_.ManagedUserLayer.md#localcoordinatespacecombiner)
- [localPosition](annotation_annotation_layer_state._internal_.ManagedUserLayer.md#localposition)
- [manager](annotation_annotation_layer_state._internal_.ManagedUserLayer.md#manager)
- [name\_](annotation_annotation_layer_state._internal_.ManagedUserLayer.md#name_)
- [nonArchivedLayerIndex](annotation_annotation_layer_state._internal_.ManagedUserLayer.md#nonarchivedlayerindex)
- [readyStateChanged](annotation_annotation_layer_state._internal_.ManagedUserLayer.md#readystatechanged)
- [refCount](annotation_annotation_layer_state._internal_.ManagedUserLayer.md#refcount)
- [specificationChanged](annotation_annotation_layer_state._internal_.ManagedUserLayer.md#specificationchanged)
- [unregisterUserLayer](annotation_annotation_layer_state._internal_.ManagedUserLayer.md#unregisteruserlayer)
- [visible](annotation_annotation_layer_state._internal_.ManagedUserLayer.md#visible)
- [wasDisposed](annotation_annotation_layer_state._internal_.ManagedUserLayer.md#wasdisposed)

### Accessors

- [layer](annotation_annotation_layer_state._internal_.ManagedUserLayer.md#layer)
- [name](annotation_annotation_layer_state._internal_.ManagedUserLayer.md#name)
- [pickEnabled](annotation_annotation_layer_state._internal_.ManagedUserLayer.md#pickenabled)
- [supportsPickOption](annotation_annotation_layer_state._internal_.ManagedUserLayer.md#supportspickoption)

### Methods

- [addRef](annotation_annotation_layer_state._internal_.ManagedUserLayer.md#addref)
- [dispose](annotation_annotation_layer_state._internal_.ManagedUserLayer.md#dispose)
- [disposed](annotation_annotation_layer_state._internal_.ManagedUserLayer.md#disposed)
- [isReady](annotation_annotation_layer_state._internal_.ManagedUserLayer.md#isready)
- [refCountReachedZero](annotation_annotation_layer_state._internal_.ManagedUserLayer.md#refcountreachedzero)
- [registerCancellable](annotation_annotation_layer_state._internal_.ManagedUserLayer.md#registercancellable)
- [registerDisposer](annotation_annotation_layer_state._internal_.ManagedUserLayer.md#registerdisposer)
- [registerEventListener](annotation_annotation_layer_state._internal_.ManagedUserLayer.md#registereventlistener)
- [setArchived](annotation_annotation_layer_state._internal_.ManagedUserLayer.md#setarchived)
- [setVisible](annotation_annotation_layer_state._internal_.ManagedUserLayer.md#setvisible)
- [toJSON](annotation_annotation_layer_state._internal_.ManagedUserLayer.md#tojson)
- [unregisterDisposer](annotation_annotation_layer_state._internal_.ManagedUserLayer.md#unregisterdisposer)

## Constructors

### constructor

• **new ManagedUserLayer**(`name`, `manager`)

If layer is not null, tranfers ownership of a reference.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `manager` | [`LayerListSpecification`](annotation_annotation_layer_state._internal_.LayerListSpecification.md) |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/layer.ts:565](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L565)

## Properties

### archived

• **archived**: `boolean` = `false`

#### Defined in

[src/neuroglancer/layer.ts:542](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L542)

___

### containers

• **containers**: `Set`<[`LayerManager`](annotation_annotation_layer_state._internal_.LayerManager.md)\>

#### Defined in

[src/neuroglancer/layer.ts:492](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L492)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### layerChanged

• **layerChanged**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/layer.ts:490](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L490)

___

### layer\_

• `Private` **layer\_**: ``null`` \| [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md) = `null`

#### Defined in

[src/neuroglancer/layer.ts:493](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L493)

___

### localCoordinateSpace

• **localCoordinateSpace**: [`TrackableCoordinateSpace`](annotation_annotation_layer_state._internal_.TrackableCoordinateSpace.md)

#### Defined in

[src/neuroglancer/layer.ts:480](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L480)

___

### localCoordinateSpaceCombiner

• **localCoordinateSpaceCombiner**: [`CoordinateSpaceCombiner`](annotation_annotation_layer_state._internal_.CoordinateSpaceCombiner.md)

#### Defined in

[src/neuroglancer/layer.ts:481](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L481)

___

### localPosition

• **localPosition**: [`Position`](annotation_annotation_layer_state._internal_.Position.md)

#### Defined in

[src/neuroglancer/layer.ts:483](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L483)

___

### manager

• **manager**: [`LayerListSpecification`](annotation_annotation_layer_state._internal_.LayerListSpecification.md)

___

### name\_

• `Private` **name\_**: `string`

#### Defined in

[src/neuroglancer/layer.ts:528](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L528)

___

### nonArchivedLayerIndex

• **nonArchivedLayerIndex**: `number` = `-1`

#### Defined in

[src/neuroglancer/layer.ts:487](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L487)

___

### readyStateChanged

• **readyStateChanged**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/layer.ts:489](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L489)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### specificationChanged

• **specificationChanged**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/layer.ts:491](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L491)

___

### unregisterUserLayer

• `Private` **unregisterUserLayer**: `undefined` \| () => `void`

#### Defined in

[src/neuroglancer/layer.ts:497](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L497)

___

### visible

• **visible**: `boolean` = `true`

#### Defined in

[src/neuroglancer/layer.ts:541](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L541)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### layer

• `get` **layer**(): ``null`` \| [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)

#### Returns

``null`` \| [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)

#### Defined in

[src/neuroglancer/layer.ts:494](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L494)

• `set` **layer**(`layer`): `void`

If layer is not null, tranfers ownership of a reference.

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | ``null`` \| [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:502](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L502)

___

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Defined in

[src/neuroglancer/layer.ts:530](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L530)

• `set` **name**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:534](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L534)

___

### pickEnabled

• `get` **pickEnabled**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/layer.ts:549](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L549)

• `set` **pickEnabled**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:555](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L555)

___

### supportsPickOption

• `get` **supportsPickOption**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/layer.ts:544](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L544)

## Methods

### addRef

▸ **addRef**(): [`ManagedUserLayer`](annotation_annotation_layer_state._internal_.ManagedUserLayer.md)

#### Returns

[`ManagedUserLayer`](annotation_annotation_layer_state._internal_.ManagedUserLayer.md)

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[addRef](util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[dispose](util_disposable.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[disposed](util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/layer.ts:617](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L617)

___

### isReady

▸ **isReady**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/layer.ts:523](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L523)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCountReachedZero](util_disposable.RefCounted.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L66)

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

[RefCounted](util_disposable.RefCounted.md).[registerCancellable](util_disposable.RefCounted.md#registercancellable)

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L100)

___

### registerDisposer

▸ **registerDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/util_disposable.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[registerDisposer](util_disposable.RefCounted.md#registerdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L76)

___

### registerEventListener

▸ **registerEventListener**(`target`, `type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EventTarget`](../modules/annotation_annotation_layer_state._internal_.md#eventtarget) |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/annotation_annotation_layer_state._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](../interfaces/annotation_annotation_layer_state._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[registerEventListener](util_disposable.RefCounted.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L95)

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

[src/neuroglancer/layer.ts:598](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L598)

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

[src/neuroglancer/layer.ts:587](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L587)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Defined in

[src/neuroglancer/layer.ts:570](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L570)

___

### unregisterDisposer

▸ **unregisterDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/util_disposable.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[unregisterDisposer](util_disposable.RefCounted.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)
