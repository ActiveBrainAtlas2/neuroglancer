[neuroglancer](../README.md) / [Modules](../modules.md) / [image\_user\_layer](../modules/image_user_layer.md) / [<internal\>](../modules/image_user_layer._internal_.md) / AnnotationLayerState

# Class: AnnotationLayerState

[image_user_layer](../modules/image_user_layer.md).[<internal>](../modules/image_user_layer._internal_.md).AnnotationLayerState

## Hierarchy

- [`RefCounted`](axes_lines._internal_.RefCounted.md)

  ↳ **`AnnotationLayerState`**

## Table of contents

### Constructors

- [constructor](image_user_layer._internal_.AnnotationLayerState.md#constructor)

### Properties

- [chunkTransform](image_user_layer._internal_.AnnotationLayerState.md#chunktransform)
- [dataSource](image_user_layer._internal_.AnnotationLayerState.md#datasource)
- [displayState](image_user_layer._internal_.AnnotationLayerState.md#displaystate)
- [disposedStacks](image_user_layer._internal_.AnnotationLayerState.md#disposedstacks)
- [localPosition](image_user_layer._internal_.AnnotationLayerState.md#localposition)
- [refCount](image_user_layer._internal_.AnnotationLayerState.md#refcount)
- [role](image_user_layer._internal_.AnnotationLayerState.md#role)
- [source](image_user_layer._internal_.AnnotationLayerState.md#source)
- [subsourceId](image_user_layer._internal_.AnnotationLayerState.md#subsourceid)
- [subsourceIndex](image_user_layer._internal_.AnnotationLayerState.md#subsourceindex)
- [transform](image_user_layer._internal_.AnnotationLayerState.md#transform)
- [wasDisposed](image_user_layer._internal_.AnnotationLayerState.md#wasdisposed)

### Accessors

- [sourceIndex](image_user_layer._internal_.AnnotationLayerState.md#sourceindex)

### Methods

- [addRef](image_user_layer._internal_.AnnotationLayerState.md#addref)
- [dispose](image_user_layer._internal_.AnnotationLayerState.md#dispose)
- [disposed](image_user_layer._internal_.AnnotationLayerState.md#disposed)
- [refCountReachedZero](image_user_layer._internal_.AnnotationLayerState.md#refcountreachedzero)
- [registerCancellable](image_user_layer._internal_.AnnotationLayerState.md#registercancellable)
- [registerDisposer](image_user_layer._internal_.AnnotationLayerState.md#registerdisposer)
- [registerEventListener](image_user_layer._internal_.AnnotationLayerState.md#registereventlistener)
- [unregisterDisposer](image_user_layer._internal_.AnnotationLayerState.md#unregisterdisposer)

## Constructors

### constructor

• **new AnnotationLayerState**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.dataSource` | [`LayerDataSource`](layer_data_source.LayerDataSource.md) |
| `options.displayState` | [`AnnotationDisplayState`](image_user_layer._internal_.AnnotationDisplayState.md) |
| `options.localPosition` | [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<`Float32Array`\> |
| `options.role?` | [`RenderLayerRole`](../enums/renderlayer.RenderLayerRole.md) |
| `options.source` | [`AnnotationSource`](image_user_layer._internal_.AnnotationSource.md) \| [`MultiscaleAnnotationSource`](image_user_layer._internal_.MultiscaleAnnotationSource.md) |
| `options.subsourceId` | `string` |
| `options.subsourceIndex` | `number` |
| `options.transform` | [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<[`RenderLayerTransformOrError`](../modules/render_coordinate_transform.md#renderlayertransformorerror)\> |

#### Overrides

[RefCounted](axes_lines._internal_.RefCounted.md).[constructor](axes_lines._internal_.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/annotation/annotation_layer_state.ts:150](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/annotation_layer_state.ts#L150)

## Properties

### chunkTransform

• `Readonly` **chunkTransform**: [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<[`ValueOrError`](../modules/image_user_layer._internal_.md#valueorerror)<[`ChunkTransformParameters`](../interfaces/render_coordinate_transform.ChunkTransformParameters.md)\>\>

#### Defined in

[src/neuroglancer/annotation/annotation_layer_state.ts:148](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/annotation_layer_state.ts#L148)

___

### dataSource

• **dataSource**: [`LayerDataSource`](layer_data_source.LayerDataSource.md)

#### Defined in

[src/neuroglancer/annotation/annotation_layer_state.ts:143](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/annotation_layer_state.ts#L143)

___

### displayState

• **displayState**: [`AnnotationDisplayState`](image_user_layer._internal_.AnnotationDisplayState.md)

#### Defined in

[src/neuroglancer/annotation/annotation_layer_state.ts:146](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/annotation_layer_state.ts#L146)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[disposedStacks](axes_lines._internal_.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L52)

___

### localPosition

• **localPosition**: [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<`Float32Array`\>

#### Defined in

[src/neuroglancer/annotation/annotation_layer_state.ts:140](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/annotation_layer_state.ts#L140)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[refCount](axes_lines._internal_.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L45)

___

### role

• **role**: [`RenderLayerRole`](../enums/renderlayer.RenderLayerRole.md)

#### Defined in

[src/neuroglancer/annotation/annotation_layer_state.ts:142](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/annotation_layer_state.ts#L142)

___

### source

• **source**: [`AnnotationSource`](image_user_layer._internal_.AnnotationSource.md) \| [`MultiscaleAnnotationSource`](image_user_layer._internal_.MultiscaleAnnotationSource.md)

#### Defined in

[src/neuroglancer/annotation/annotation_layer_state.ts:141](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/annotation_layer_state.ts#L141)

___

### subsourceId

• **subsourceId**: `string`

#### Defined in

[src/neuroglancer/annotation/annotation_layer_state.ts:144](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/annotation_layer_state.ts#L144)

___

### subsourceIndex

• **subsourceIndex**: `number`

#### Defined in

[src/neuroglancer/annotation/annotation_layer_state.ts:145](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/annotation_layer_state.ts#L145)

___

### transform

• **transform**: [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<[`RenderLayerTransformOrError`](../modules/render_coordinate_transform.md#renderlayertransformorerror)\>

#### Defined in

[src/neuroglancer/annotation/annotation_layer_state.ts:139](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/annotation_layer_state.ts#L139)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[wasDisposed](axes_lines._internal_.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### sourceIndex

• `get` **sourceIndex**(): `number`

#### Returns

`number`

#### Defined in

[src/neuroglancer/annotation/annotation_layer_state.ts:181](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/annotation_layer_state.ts#L181)

## Methods

### addRef

▸ **addRef**(): [`AnnotationLayerState`](image_user_layer._internal_.AnnotationLayerState.md)

#### Returns

[`AnnotationLayerState`](image_user_layer._internal_.AnnotationLayerState.md)

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[addRef](axes_lines._internal_.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[dispose](axes_lines._internal_.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[disposed](axes_lines._internal_.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L75)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[refCountReachedZero](axes_lines._internal_.RefCounted.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L66)

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

[RefCounted](axes_lines._internal_.RefCounted.md).[registerCancellable](axes_lines._internal_.RefCounted.md#registercancellable)

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

[RefCounted](axes_lines._internal_.RefCounted.md).[registerDisposer](axes_lines._internal_.RefCounted.md#registerdisposer)

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

[RefCounted](axes_lines._internal_.RefCounted.md).[registerEventListener](axes_lines._internal_.RefCounted.md#registereventlistener)

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

[RefCounted](axes_lines._internal_.RefCounted.md).[unregisterDisposer](axes_lines._internal_.RefCounted.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L85)
