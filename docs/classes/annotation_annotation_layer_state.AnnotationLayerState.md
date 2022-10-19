[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / AnnotationLayerState

# Class: AnnotationLayerState

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).AnnotationLayerState

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`AnnotationLayerState`**

## Table of contents

### Constructors

- [constructor](annotation_annotation_layer_state.AnnotationLayerState.md#constructor)

### Properties

- [chunkTransform](annotation_annotation_layer_state.AnnotationLayerState.md#chunktransform)
- [dataSource](annotation_annotation_layer_state.AnnotationLayerState.md#datasource)
- [displayState](annotation_annotation_layer_state.AnnotationLayerState.md#displaystate)
- [disposedStacks](annotation_annotation_layer_state.AnnotationLayerState.md#disposedstacks)
- [localPosition](annotation_annotation_layer_state.AnnotationLayerState.md#localposition)
- [refCount](annotation_annotation_layer_state.AnnotationLayerState.md#refcount)
- [role](annotation_annotation_layer_state.AnnotationLayerState.md#role)
- [source](annotation_annotation_layer_state.AnnotationLayerState.md#source)
- [subsourceId](annotation_annotation_layer_state.AnnotationLayerState.md#subsourceid)
- [subsourceIndex](annotation_annotation_layer_state.AnnotationLayerState.md#subsourceindex)
- [transform](annotation_annotation_layer_state.AnnotationLayerState.md#transform)
- [wasDisposed](annotation_annotation_layer_state.AnnotationLayerState.md#wasdisposed)

### Accessors

- [sourceIndex](annotation_annotation_layer_state.AnnotationLayerState.md#sourceindex)

### Methods

- [addRef](annotation_annotation_layer_state.AnnotationLayerState.md#addref)
- [dispose](annotation_annotation_layer_state.AnnotationLayerState.md#dispose)
- [disposed](annotation_annotation_layer_state.AnnotationLayerState.md#disposed)
- [refCountReachedZero](annotation_annotation_layer_state.AnnotationLayerState.md#refcountreachedzero)
- [registerCancellable](annotation_annotation_layer_state.AnnotationLayerState.md#registercancellable)
- [registerDisposer](annotation_annotation_layer_state.AnnotationLayerState.md#registerdisposer)
- [registerEventListener](annotation_annotation_layer_state.AnnotationLayerState.md#registereventlistener)
- [unregisterDisposer](annotation_annotation_layer_state.AnnotationLayerState.md#unregisterdisposer)

## Constructors

### constructor

• **new AnnotationLayerState**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.dataSource` | [`LayerDataSource`](annotation_annotation_layer_state._internal_.LayerDataSource.md) |
| `options.displayState` | [`AnnotationDisplayState`](annotation_annotation_layer_state.AnnotationDisplayState.md) |
| `options.localPosition` | [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`Float32Array`\> |
| `options.role?` | [`RenderLayerRole`](../enums/annotation_annotation_layer_state._internal_.RenderLayerRole.md) |
| `options.source` | [`AnnotationSource`](annotation.AnnotationSource.md) \| [`MultiscaleAnnotationSource`](annotation_frontend_source.MultiscaleAnnotationSource.md) |
| `options.subsourceId` | `string` |
| `options.subsourceIndex` | `number` |
| `options.transform` | [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<[`RenderLayerTransformOrError`](../modules/annotation_annotation_layer_state._internal_.md#renderlayertransformorerror)\> |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/annotation/annotation_layer_state.ts:150](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/annotation_layer_state.ts#L150)

## Properties

### chunkTransform

• `Readonly` **chunkTransform**: [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<[`ValueOrError`](../modules/util_error.md#valueorerror)<[`ChunkTransformParameters`](../interfaces/annotation_annotation_layer_state._internal_.ChunkTransformParameters.md)\>\>

#### Defined in

[src/neuroglancer/annotation/annotation_layer_state.ts:148](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/annotation_layer_state.ts#L148)

___

### dataSource

• **dataSource**: [`LayerDataSource`](annotation_annotation_layer_state._internal_.LayerDataSource.md)

#### Defined in

[src/neuroglancer/annotation/annotation_layer_state.ts:143](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/annotation_layer_state.ts#L143)

___

### displayState

• **displayState**: [`AnnotationDisplayState`](annotation_annotation_layer_state.AnnotationDisplayState.md)

#### Defined in

[src/neuroglancer/annotation/annotation_layer_state.ts:146](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/annotation_layer_state.ts#L146)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### localPosition

• **localPosition**: [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`Float32Array`\>

#### Defined in

[src/neuroglancer/annotation/annotation_layer_state.ts:140](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/annotation_layer_state.ts#L140)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### role

• **role**: [`RenderLayerRole`](../enums/annotation_annotation_layer_state._internal_.RenderLayerRole.md)

#### Defined in

[src/neuroglancer/annotation/annotation_layer_state.ts:142](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/annotation_layer_state.ts#L142)

___

### source

• **source**: [`AnnotationSource`](annotation.AnnotationSource.md) \| [`MultiscaleAnnotationSource`](annotation_frontend_source.MultiscaleAnnotationSource.md)

#### Defined in

[src/neuroglancer/annotation/annotation_layer_state.ts:141](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/annotation_layer_state.ts#L141)

___

### subsourceId

• **subsourceId**: `string`

#### Defined in

[src/neuroglancer/annotation/annotation_layer_state.ts:144](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/annotation_layer_state.ts#L144)

___

### subsourceIndex

• **subsourceIndex**: `number`

#### Defined in

[src/neuroglancer/annotation/annotation_layer_state.ts:145](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/annotation_layer_state.ts#L145)

___

### transform

• **transform**: [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<[`RenderLayerTransformOrError`](../modules/annotation_annotation_layer_state._internal_.md#renderlayertransformorerror)\>

#### Defined in

[src/neuroglancer/annotation/annotation_layer_state.ts:139](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/annotation_layer_state.ts#L139)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### sourceIndex

• `get` **sourceIndex**(): `number`

#### Returns

`number`

#### Defined in

[src/neuroglancer/annotation/annotation_layer_state.ts:181](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/annotation_layer_state.ts#L181)

## Methods

### addRef

▸ **addRef**(): [`AnnotationLayerState`](annotation_annotation_layer_state.AnnotationLayerState.md)

#### Returns

[`AnnotationLayerState`](annotation_annotation_layer_state.AnnotationLayerState.md)

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

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposed](util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L75)

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
