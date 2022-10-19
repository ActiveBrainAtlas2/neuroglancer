[neuroglancer](../README.md) / [Modules](../modules.md) / [data\_panel\_layout](../modules/data_panel_layout.md) / [<internal\>](../modules/data_panel_layout._internal_.md) / SliceViewBase

# Class: SliceViewBase<Source, RLayer, Transformed\>

[data_panel_layout](../modules/data_panel_layout.md).[<internal>](../modules/data_panel_layout._internal_.md).SliceViewBase

## Type parameters

| Name | Type |
| :------ | :------ |
| `Source` | extends [`SliceViewChunkSource`](../interfaces/data_panel_layout._internal_.SliceViewChunkSource-1.md) = [`SliceViewChunkSource`](../interfaces/data_panel_layout._internal_.SliceViewChunkSource-1.md) |
| `RLayer` | extends [`SliceViewRenderLayer`](../interfaces/data_panel_layout._internal_.SliceViewRenderLayer-1.md) = [`SliceViewRenderLayer`](../interfaces/data_panel_layout._internal_.SliceViewRenderLayer-1.md) |
| `Transformed` | extends [`TransformedSource`](../interfaces/data_panel_layout._internal_.TransformedSource.md)<`RLayer`, `Source`\> = [`TransformedSource`](../interfaces/data_panel_layout._internal_.TransformedSource.md)<`RLayer`, `Source`\> |

## Hierarchy

- [`SharedObject`](worker_rpc.SharedObject.md)

  ↳ **`SliceViewBase`**

  ↳↳ [`FrontendSliceViewBase`](data_panel_layout._internal_.FrontendSliceViewBase.md)

## Table of contents

### Constructors

- [constructor](data_panel_layout._internal_.SliceViewBase.md#constructor)

### Properties

- [RPC\_TYPE\_ID](data_panel_layout._internal_.SliceViewBase.md#rpc_type_id)
- [disposedStacks](data_panel_layout._internal_.SliceViewBase.md#disposedstacks)
- [isOwner](data_panel_layout._internal_.SliceViewBase.md#isowner)
- [projectionParameters](data_panel_layout._internal_.SliceViewBase.md#projectionparameters)
- [refCount](data_panel_layout._internal_.SliceViewBase.md#refcount)
- [referencedGeneration](data_panel_layout._internal_.SliceViewBase.md#referencedgeneration)
- [rpc](data_panel_layout._internal_.SliceViewBase.md#rpc)
- [rpcId](data_panel_layout._internal_.SliceViewBase.md#rpcid)
- [unreferencedGeneration](data_panel_layout._internal_.SliceViewBase.md#unreferencedgeneration)
- [visibleLayers](data_panel_layout._internal_.SliceViewBase.md#visiblelayers)
- [visibleSourcesStale](data_panel_layout._internal_.SliceViewBase.md#visiblesourcesstale)
- [wasDisposed](data_panel_layout._internal_.SliceViewBase.md#wasdisposed)

### Methods

- [addCounterpartRef](data_panel_layout._internal_.SliceViewBase.md#addcounterpartref)
- [addRef](data_panel_layout._internal_.SliceViewBase.md#addref)
- [counterpartRefCountReachedZero](data_panel_layout._internal_.SliceViewBase.md#counterpartrefcountreachedzero)
- [dispose](data_panel_layout._internal_.SliceViewBase.md#dispose)
- [disposed](data_panel_layout._internal_.SliceViewBase.md#disposed)
- [initializeCounterpart](data_panel_layout._internal_.SliceViewBase.md#initializecounterpart)
- [initializeSharedObject](data_panel_layout._internal_.SliceViewBase.md#initializesharedobject)
- [invalidateVisibleChunks](data_panel_layout._internal_.SliceViewBase.md#invalidatevisiblechunks)
- [invalidateVisibleSources](data_panel_layout._internal_.SliceViewBase.md#invalidatevisiblesources)
- [ownerDispose](data_panel_layout._internal_.SliceViewBase.md#ownerdispose)
- [refCountReachedZero](data_panel_layout._internal_.SliceViewBase.md#refcountreachedzero)
- [registerCancellable](data_panel_layout._internal_.SliceViewBase.md#registercancellable)
- [registerDisposer](data_panel_layout._internal_.SliceViewBase.md#registerdisposer)
- [registerEventListener](data_panel_layout._internal_.SliceViewBase.md#registereventlistener)
- [unregisterDisposer](data_panel_layout._internal_.SliceViewBase.md#unregisterdisposer)
- [updateVisibleSources](data_panel_layout._internal_.SliceViewBase.md#updatevisiblesources)

## Constructors

### constructor

• **new SliceViewBase**<`Source`, `RLayer`, `Transformed`\>(`projectionParameters`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Source` | extends [`SliceViewChunkSource`](../interfaces/data_panel_layout._internal_.SliceViewChunkSource-1.md)<[`SliceViewChunkSpecification`](../interfaces/data_panel_layout._internal_.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>, `Source`\> = [`SliceViewChunkSource`](../interfaces/data_panel_layout._internal_.SliceViewChunkSource-1.md)<[`SliceViewChunkSpecification`](../interfaces/data_panel_layout._internal_.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>\> |
| `RLayer` | extends [`SliceViewRenderLayer`](../interfaces/data_panel_layout._internal_.SliceViewRenderLayer-1.md) = [`SliceViewRenderLayer`](../interfaces/data_panel_layout._internal_.SliceViewRenderLayer-1.md) |
| `Transformed` | extends [`TransformedSource`](../interfaces/data_panel_layout._internal_.TransformedSource.md)<`RLayer`, `Source`, `Transformed`\> = [`TransformedSource`](../interfaces/data_panel_layout._internal_.TransformedSource.md)<`RLayer`, `Source`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `projectionParameters` | [`WatchableValueChangeInterface`](../interfaces/trackable_value.WatchableValueChangeInterface.md)<[`SliceViewProjectionParameters`](data_panel_layout._internal_.SliceViewProjectionParameters.md)\> |

#### Overrides

[SharedObject](worker_rpc.SharedObject.md).[constructor](worker_rpc.SharedObject.md#constructor)

#### Defined in

[src/neuroglancer/sliceview/base.ts:265](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/base.ts#L265)

## Properties

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

Should be set to a constant specifying the SharedObject type identifier on the prototype of
final derived owner classes.  It is not used on counterpart (non-owner) classes.

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[RPC_TYPE_ID](worker_rpc.SharedObject.md#rpc_type_id)

#### Defined in

[src/neuroglancer/worker_rpc.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L245)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[disposedStacks](worker_rpc.SharedObject.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L52)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[isOwner](worker_rpc.SharedObject.md#isowner)

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L171)

___

### projectionParameters

• **projectionParameters**: [`WatchableValueChangeInterface`](../interfaces/trackable_value.WatchableValueChangeInterface.md)<[`SliceViewProjectionParameters`](data_panel_layout._internal_.SliceViewProjectionParameters.md)\>

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[refCount](worker_rpc.SharedObject.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L45)

___

### referencedGeneration

• **referencedGeneration**: `number`

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[referencedGeneration](worker_rpc.SharedObject.md#referencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L173)

___

### rpc

• **rpc**: ``null`` \| [`RPC`](worker_rpc.RPC.md) = `null`

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[rpc](worker_rpc.SharedObject.md#rpc)

#### Defined in

[src/neuroglancer/worker_rpc.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L169)

___

### rpcId

• **rpcId**: ``null`` \| `number` = `null`

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[rpcId](worker_rpc.SharedObject.md#rpcid)

#### Defined in

[src/neuroglancer/worker_rpc.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L170)

___

### unreferencedGeneration

• **unreferencedGeneration**: `number`

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[unreferencedGeneration](worker_rpc.SharedObject.md#unreferencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L172)

___

### visibleLayers

• **visibleLayers**: `Map`<`RLayer`, [`VisibleLayerSources`](../interfaces/data_panel_layout._internal_.VisibleLayerSources.md)<`RLayer`, `Source`, `Transformed`\>\>

#### Defined in

[src/neuroglancer/sliceview/base.ts:262](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/base.ts#L262)

___

### visibleSourcesStale

• **visibleSourcesStale**: `boolean` = `true`

#### Defined in

[src/neuroglancer/sliceview/base.ts:263](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/base.ts#L263)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[wasDisposed](worker_rpc.SharedObject.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addCounterpartRef

▸ **addCounterpartRef**(): `Object`

Precondition: this.isOwner === true.

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `gen` | `number` |
| `id` | ``null`` \| `number` |

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[addCounterpartRef](worker_rpc.SharedObject.md#addcounterpartref)

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`SliceViewBase`](data_panel_layout._internal_.SliceViewBase.md)<`Source`, `RLayer`, `Transformed`\>

#### Returns

[`SliceViewBase`](data_panel_layout._internal_.SliceViewBase.md)<`Source`, `RLayer`, `Transformed`\>

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[addRef](worker_rpc.SharedObject.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L48)

___

### counterpartRefCountReachedZero

▸ **counterpartRefCountReachedZero**(`generation`): `void`

Precondition: this.isOwner === true.

This should be called when the counterpart's refCount is decremented and reaches zero.

#### Parameters

| Name | Type |
| :------ | :------ |
| `generation` | `number` |

#### Returns

`void`

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[counterpartRefCountReachedZero](worker_rpc.SharedObject.md#counterpartrefcountreachedzero)

#### Defined in

[src/neuroglancer/worker_rpc.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L234)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[dispose](worker_rpc.SharedObject.md#dispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[disposed](worker_rpc.SharedObject.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L75)

___

### initializeCounterpart

▸ **initializeCounterpart**(`rpc`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](worker_rpc.RPC.md) |
| `options` | `any` |

#### Returns

`void`

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[initializeCounterpart](worker_rpc.SharedObject.md#initializecounterpart)

#### Defined in

[src/neuroglancer/worker_rpc.ts:182](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L182)

___

### initializeSharedObject

▸ **initializeSharedObject**(`rpc`, `rpcId?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](worker_rpc.RPC.md) |
| `rpcId` | `number` |

#### Returns

`void`

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[initializeSharedObject](worker_rpc.SharedObject.md#initializesharedobject)

#### Defined in

[src/neuroglancer/worker_rpc.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L175)

___

### invalidateVisibleChunks

▸ **invalidateVisibleChunks**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/base.ts:280](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/base.ts#L280)

___

### invalidateVisibleSources

▸ **invalidateVisibleSources**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/base.ts:276](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/base.ts#L276)

___

### ownerDispose

▸ `Protected` **ownerDispose**(): `void`

Precondition: this.isOwner === true.

#### Returns

`void`

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[ownerDispose](worker_rpc.SharedObject.md#ownerdispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L219)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[refCountReachedZero](worker_rpc.SharedObject.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/worker_rpc.ts:203](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L203)

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

[SharedObject](worker_rpc.SharedObject.md).[registerCancellable](worker_rpc.SharedObject.md#registercancellable)

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L100)

___

### registerDisposer

▸ **registerDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/axes_lines._internal_.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[registerDisposer](worker_rpc.SharedObject.md#registerdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L76)

___

### registerEventListener

▸ **registerEventListener**(`target`, `type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EventTarget`](../modules/axes_lines._internal_.md#eventtarget) |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/axes_lines._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](../interfaces/axes_lines._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[registerEventListener](worker_rpc.SharedObject.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L95)

___

### unregisterDisposer

▸ **unregisterDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/axes_lines._internal_.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[unregisterDisposer](worker_rpc.SharedObject.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L85)

___

### updateVisibleSources

▸ **updateVisibleSources**(): `void`

Computes the list of sources to use for each visible layer, based on the
current pixelSize.

#### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/base.ts:286](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/base.ts#L286)
