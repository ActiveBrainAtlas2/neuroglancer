[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/annotation/annotation\_layer\_state](../modules/neuroglancer_annotation_annotation_layer_state.md) / AnnotationLayerState

# Class: AnnotationLayerState

[neuroglancer/annotation/annotation_layer_state](../modules/neuroglancer_annotation_annotation_layer_state.md).AnnotationLayerState

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`AnnotationLayerState`**

## Table of contents

### Constructors

- [constructor](neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md#constructor)

### Properties

- [chunkTransform](neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md#chunktransform)
- [dataSource](neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md#datasource)
- [displayState](neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md#displaystate)
- [disposedStacks](neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md#disposedstacks)
- [localPosition](neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md#localposition)
- [refCount](neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md#refcount)
- [role](neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md#role)
- [source](neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md#source)
- [subsourceId](neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md#subsourceid)
- [subsourceIndex](neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md#subsourceindex)
- [transform](neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md#transform)
- [wasDisposed](neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md#wasdisposed)

### Accessors

- [sourceIndex](neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md#sourceindex)

### Methods

- [addRef](neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md#addref)
- [dispose](neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md#dispose)
- [disposed](neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md#disposed)
- [refCountReachedZero](neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md#refcountreachedzero)
- [registerCancellable](neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md#registercancellable)
- [registerDisposer](neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md#registerdisposer)
- [registerEventListener](neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md#registereventlistener)
- [unregisterDisposer](neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md#unregisterdisposer)

## Constructors

### constructor

• **new AnnotationLayerState**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.dataSource` | [`LayerDataSource`](neuroglancer_layer_data_source.LayerDataSource.md) |
| `options.displayState` | [`AnnotationDisplayState`](neuroglancer_annotation_annotation_layer_state.AnnotationDisplayState.md) |
| `options.localPosition` | [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<`Float32Array`\> |
| `options.role?` | [`RenderLayerRole`](../enums/neuroglancer_renderlayer.RenderLayerRole.md) |
| `options.source` | [`AnnotationSource`](neuroglancer_annotation.AnnotationSource.md) \| [`MultiscaleAnnotationSource`](neuroglancer_annotation_frontend_source.MultiscaleAnnotationSource.md) |
| `options.subsourceId` | `string` |
| `options.subsourceIndex` | `number` |
| `options.transform` | [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<[`RenderLayerTransformOrError`](../modules/neuroglancer_render_coordinate_transform.md#renderlayertransformorerror)\> |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/annotation/annotation_layer_state.ts:150](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/annotation_layer_state.ts#L150)

## Properties

### chunkTransform

• `Readonly` **chunkTransform**: [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<[`ValueOrError`](../modules/neuroglancer_util_error.md#valueorerror)<[`ChunkTransformParameters`](../interfaces/neuroglancer_render_coordinate_transform.ChunkTransformParameters.md)\>\>

#### Defined in

[src/neuroglancer/annotation/annotation_layer_state.ts:148](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/annotation_layer_state.ts#L148)

___

### dataSource

• **dataSource**: [`LayerDataSource`](neuroglancer_layer_data_source.LayerDataSource.md)

#### Defined in

[src/neuroglancer/annotation/annotation_layer_state.ts:143](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/annotation_layer_state.ts#L143)

___

### displayState

• **displayState**: [`AnnotationDisplayState`](neuroglancer_annotation_annotation_layer_state.AnnotationDisplayState.md)

#### Defined in

[src/neuroglancer/annotation/annotation_layer_state.ts:146](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/annotation_layer_state.ts#L146)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### localPosition

• **localPosition**: [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<`Float32Array`\>

#### Defined in

[src/neuroglancer/annotation/annotation_layer_state.ts:140](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/annotation_layer_state.ts#L140)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### role

• **role**: [`RenderLayerRole`](../enums/neuroglancer_renderlayer.RenderLayerRole.md)

#### Defined in

[src/neuroglancer/annotation/annotation_layer_state.ts:142](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/annotation_layer_state.ts#L142)

___

### source

• **source**: [`AnnotationSource`](neuroglancer_annotation.AnnotationSource.md) \| [`MultiscaleAnnotationSource`](neuroglancer_annotation_frontend_source.MultiscaleAnnotationSource.md)

#### Defined in

[src/neuroglancer/annotation/annotation_layer_state.ts:141](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/annotation_layer_state.ts#L141)

___

### subsourceId

• **subsourceId**: `string`

#### Defined in

[src/neuroglancer/annotation/annotation_layer_state.ts:144](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/annotation_layer_state.ts#L144)

___

### subsourceIndex

• **subsourceIndex**: `number`

#### Defined in

[src/neuroglancer/annotation/annotation_layer_state.ts:145](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/annotation_layer_state.ts#L145)

___

### transform

• **transform**: [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<[`RenderLayerTransformOrError`](../modules/neuroglancer_render_coordinate_transform.md#renderlayertransformorerror)\>

#### Defined in

[src/neuroglancer/annotation/annotation_layer_state.ts:139](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/annotation_layer_state.ts#L139)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### sourceIndex

• `get` **sourceIndex**(): `number`

#### Returns

`number`

#### Defined in

[src/neuroglancer/annotation/annotation_layer_state.ts:181](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/annotation_layer_state.ts#L181)

## Methods

### addRef

▸ **addRef**(): [`AnnotationLayerState`](neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md)

#### Returns

[`AnnotationLayerState`](neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md)

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

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposed](neuroglancer_util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L75)

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
