[neuroglancer](../README.md) / [Modules](../modules.md) / [mesh/frontend](../modules/mesh_frontend.md) / MultiscaleMeshLayer

# Class: MultiscaleMeshLayer

[mesh/frontend](../modules/mesh_frontend.md).MultiscaleMeshLayer

## Hierarchy

- [`PerspectiveViewRenderLayer`](perspective_view_render_layer.PerspectiveViewRenderLayer.md)<[`ThreeDimensionalRenderLayerAttachmentState`](../interfaces/mesh_frontend._internal_.ThreeDimensionalRenderLayerAttachmentState.md)\>

  ↳ **`MultiscaleMeshLayer`**

## Table of contents

### Constructors

- [constructor](mesh_frontend.MultiscaleMeshLayer.md#constructor)

### Properties

- [backend](mesh_frontend.MultiscaleMeshLayer.md#backend)
- [chunkManager](mesh_frontend.MultiscaleMeshLayer.md#chunkmanager)
- [displayState](mesh_frontend.MultiscaleMeshLayer.md#displaystate)
- [disposedStacks](mesh_frontend.MultiscaleMeshLayer.md#disposedstacks)
- [getShader](mesh_frontend.MultiscaleMeshLayer.md#getshader)
- [isAnnotation](mesh_frontend.MultiscaleMeshLayer.md#isannotation)
- [layerChanged](mesh_frontend.MultiscaleMeshLayer.md#layerchanged)
- [layerChunkProgressInfo](mesh_frontend.MultiscaleMeshLayer.md#layerchunkprogressinfo)
- [meshShaderManager](mesh_frontend.MultiscaleMeshLayer.md#meshshadermanager)
- [messages](mesh_frontend.MultiscaleMeshLayer.md#messages)
- [redrawNeeded](mesh_frontend.MultiscaleMeshLayer.md#redrawneeded)
- [refCount](mesh_frontend.MultiscaleMeshLayer.md#refcount)
- [role](mesh_frontend.MultiscaleMeshLayer.md#role)
- [source](mesh_frontend.MultiscaleMeshLayer.md#source)
- [userLayer](mesh_frontend.MultiscaleMeshLayer.md#userlayer)
- [visibility](mesh_frontend.MultiscaleMeshLayer.md#visibility)
- [wasDisposed](mesh_frontend.MultiscaleMeshLayer.md#wasdisposed)

### Accessors

- [gl](mesh_frontend.MultiscaleMeshLayer.md#gl)
- [isTransparent](mesh_frontend.MultiscaleMeshLayer.md#istransparent)
- [transparentPickEnabled](mesh_frontend.MultiscaleMeshLayer.md#transparentpickenabled)

### Methods

- [addRef](mesh_frontend.MultiscaleMeshLayer.md#addref)
- [attach](mesh_frontend.MultiscaleMeshLayer.md#attach)
- [dispose](mesh_frontend.MultiscaleMeshLayer.md#dispose)
- [disposed](mesh_frontend.MultiscaleMeshLayer.md#disposed)
- [draw](mesh_frontend.MultiscaleMeshLayer.md#draw)
- [getObjectPosition](mesh_frontend.MultiscaleMeshLayer.md#getobjectposition)
- [getValueAt](mesh_frontend.MultiscaleMeshLayer.md#getvalueat)
- [handleAction](mesh_frontend.MultiscaleMeshLayer.md#handleaction)
- [isReady](mesh_frontend.MultiscaleMeshLayer.md#isready)
- [refCountReachedZero](mesh_frontend.MultiscaleMeshLayer.md#refcountreachedzero)
- [registerCancellable](mesh_frontend.MultiscaleMeshLayer.md#registercancellable)
- [registerDisposer](mesh_frontend.MultiscaleMeshLayer.md#registerdisposer)
- [registerEventListener](mesh_frontend.MultiscaleMeshLayer.md#registereventlistener)
- [transformPickedValue](mesh_frontend.MultiscaleMeshLayer.md#transformpickedvalue)
- [unregisterDisposer](mesh_frontend.MultiscaleMeshLayer.md#unregisterdisposer)
- [updateMouseState](mesh_frontend.MultiscaleMeshLayer.md#updatemousestate)

## Constructors

### constructor

• **new MultiscaleMeshLayer**(`chunkManager`, `source`, `displayState`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkManager` | [`ChunkManager`](chunk_manager_frontend.ChunkManager.md) |
| `source` | [`MultiscaleMeshSource`](mesh_frontend.MultiscaleMeshSource.md) |
| `displayState` | [`MeshDisplayState`](../interfaces/mesh_frontend.MeshDisplayState.md) |

#### Overrides

[PerspectiveViewRenderLayer](perspective_view_render_layer.PerspectiveViewRenderLayer.md).[constructor](perspective_view_render_layer.PerspectiveViewRenderLayer.md#constructor)

#### Defined in

[src/neuroglancer/mesh/frontend.ts:514](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/mesh/frontend.ts#L514)

## Properties

### backend

• **backend**: [`SegmentationLayerSharedObject`](segmentation_display_state_frontend.SegmentationLayerSharedObject.md)

#### Overrides

[PerspectiveViewRenderLayer](perspective_view_render_layer.PerspectiveViewRenderLayer.md).[backend](perspective_view_render_layer.PerspectiveViewRenderLayer.md#backend)

#### Defined in

[src/neuroglancer/mesh/frontend.ts:512](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/mesh/frontend.ts#L512)

___

### chunkManager

• **chunkManager**: [`ChunkManager`](chunk_manager_frontend.ChunkManager.md)

___

### displayState

• **displayState**: [`MeshDisplayState`](../interfaces/mesh_frontend.MeshDisplayState.md)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[PerspectiveViewRenderLayer](perspective_view_render_layer.PerspectiveViewRenderLayer.md).[disposedStacks](perspective_view_render_layer.PerspectiveViewRenderLayer.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### getShader

• `Private` **getShader**: [`ParameterizedEmitterDependentShaderGetter`](../modules/webgl_dynamic_shader.md#parameterizedemitterdependentshadergetter)<`boolean`, `undefined`\>

#### Defined in

[src/neuroglancer/mesh/frontend.ts:511](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/mesh/frontend.ts#L511)

___

### isAnnotation

• **isAnnotation**: `undefined` \| `boolean`

#### Inherited from

[PerspectiveViewRenderLayer](perspective_view_render_layer.PerspectiveViewRenderLayer.md).[isAnnotation](perspective_view_render_layer.PerspectiveViewRenderLayer.md#isannotation)

#### Defined in

[src/neuroglancer/perspective_view/render_layer.ts:74](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/perspective_view/render_layer.ts#L74)

___

### layerChanged

• **layerChanged**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Inherited from

[PerspectiveViewRenderLayer](perspective_view_render_layer.PerspectiveViewRenderLayer.md).[layerChanged](perspective_view_render_layer.PerspectiveViewRenderLayer.md#layerchanged)

#### Defined in

[src/neuroglancer/renderlayer.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L50)

___

### layerChunkProgressInfo

• **layerChunkProgressInfo**: [`LayerChunkProgressInfo`](chunk_manager_base.LayerChunkProgressInfo.md)

#### Inherited from

[PerspectiveViewRenderLayer](perspective_view_render_layer.PerspectiveViewRenderLayer.md).[layerChunkProgressInfo](perspective_view_render_layer.PerspectiveViewRenderLayer.md#layerchunkprogressinfo)

#### Defined in

[src/neuroglancer/renderlayer.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L52)

___

### meshShaderManager

• `Protected` **meshShaderManager**: [`MeshShaderManager`](mesh_frontend.MeshShaderManager.md)

#### Defined in

[src/neuroglancer/mesh/frontend.ts:508](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/mesh/frontend.ts#L508)

___

### messages

• **messages**: [`MessageList`](util_message_list.MessageList.md)

#### Inherited from

[PerspectiveViewRenderLayer](perspective_view_render_layer.PerspectiveViewRenderLayer.md).[messages](perspective_view_render_layer.PerspectiveViewRenderLayer.md#messages)

#### Defined in

[src/neuroglancer/renderlayer.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L49)

___

### redrawNeeded

• **redrawNeeded**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Inherited from

[PerspectiveViewRenderLayer](perspective_view_render_layer.PerspectiveViewRenderLayer.md).[redrawNeeded](perspective_view_render_layer.PerspectiveViewRenderLayer.md#redrawneeded)

#### Defined in

[src/neuroglancer/renderlayer.ts:51](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L51)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[PerspectiveViewRenderLayer](perspective_view_render_layer.PerspectiveViewRenderLayer.md).[refCount](perspective_view_render_layer.PerspectiveViewRenderLayer.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### role

• **role**: [`RenderLayerRole`](../enums/annotation_annotation_layer_state._internal_.RenderLayerRole.md) = `RenderLayerRole.DATA`

#### Inherited from

[PerspectiveViewRenderLayer](perspective_view_render_layer.PerspectiveViewRenderLayer.md).[role](perspective_view_render_layer.PerspectiveViewRenderLayer.md#role)

#### Defined in

[src/neuroglancer/renderlayer.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L48)

___

### source

• **source**: [`MultiscaleMeshSource`](mesh_frontend.MultiscaleMeshSource.md)

___

### userLayer

• **userLayer**: `undefined` \| [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)

#### Inherited from

[PerspectiveViewRenderLayer](perspective_view_render_layer.PerspectiveViewRenderLayer.md).[userLayer](perspective_view_render_layer.PerspectiveViewRenderLayer.md#userlayer)

#### Defined in

[src/neuroglancer/renderlayer.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L47)

___

### visibility

• **visibility**: [`VisibilityPriorityAggregator`](visibility_priority_frontend.VisibilityPriorityAggregator.md)

#### Inherited from

[PerspectiveViewRenderLayer](perspective_view_render_layer.PerspectiveViewRenderLayer.md).[visibility](perspective_view_render_layer.PerspectiveViewRenderLayer.md#visibility)

#### Defined in

[src/neuroglancer/renderlayer.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L85)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[PerspectiveViewRenderLayer](perspective_view_render_layer.PerspectiveViewRenderLayer.md).[wasDisposed](perspective_view_render_layer.PerspectiveViewRenderLayer.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### gl

• `get` **gl**(): [`GL`](../interfaces/webgl_context.GL.md)

#### Returns

[`GL`](../interfaces/webgl_context.GL.md)

#### Defined in

[src/neuroglancer/mesh/frontend.ts:541](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/mesh/frontend.ts#L541)

___

### isTransparent

• `get` **isTransparent**(): `boolean`

#### Returns

`boolean`

#### Overrides

PerspectiveViewRenderLayer.isTransparent

#### Defined in

[src/neuroglancer/mesh/frontend.ts:532](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/mesh/frontend.ts#L532)

___

### transparentPickEnabled

• `get` **transparentPickEnabled**(): `boolean`

#### Returns

`boolean`

#### Overrides

PerspectiveViewRenderLayer.transparentPickEnabled

#### Defined in

[src/neuroglancer/mesh/frontend.ts:537](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/mesh/frontend.ts#L537)

## Methods

### addRef

▸ **addRef**(): [`MultiscaleMeshLayer`](mesh_frontend.MultiscaleMeshLayer.md)

#### Returns

[`MultiscaleMeshLayer`](mesh_frontend.MultiscaleMeshLayer.md)

#### Inherited from

[PerspectiveViewRenderLayer](perspective_view_render_layer.PerspectiveViewRenderLayer.md).[addRef](perspective_view_render_layer.PerspectiveViewRenderLayer.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### attach

▸ **attach**(`attachment`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attachment` | [`VisibleLayerInfo`](annotation_renderlayer._internal_.VisibleLayerInfo.md)<[`LayerView`](../interfaces/annotation_renderlayer._internal_.LayerView.md), `unknown`\> |

#### Returns

`void`

#### Inherited from

[PerspectiveViewRenderLayer](perspective_view_render_layer.PerspectiveViewRenderLayer.md).[attach](perspective_view_render_layer.PerspectiveViewRenderLayer.md#attach)

#### Defined in

[src/neuroglancer/renderlayer.ts:86](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L86)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[PerspectiveViewRenderLayer](perspective_view_render_layer.PerspectiveViewRenderLayer.md).[dispose](perspective_view_render_layer.PerspectiveViewRenderLayer.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[PerspectiveViewRenderLayer](perspective_view_render_layer.PerspectiveViewRenderLayer.md).[disposed](perspective_view_render_layer.PerspectiveViewRenderLayer.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L75)

___

### draw

▸ **draw**(`renderContext`, `attachment`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderContext` | [`PerspectiveViewRenderContext`](../interfaces/perspective_view_render_layer.PerspectiveViewRenderContext.md) |
| `attachment` | [`VisibleLayerInfo`](annotation_renderlayer._internal_.VisibleLayerInfo.md)<[`PerspectivePanel`](perspective_view_panel.PerspectivePanel.md), [`ThreeDimensionalRenderLayerAttachmentState`](../interfaces/mesh_frontend._internal_.ThreeDimensionalRenderLayerAttachmentState.md)\> |

#### Returns

`void`

#### Overrides

[PerspectiveViewRenderLayer](perspective_view_render_layer.PerspectiveViewRenderLayer.md).[draw](perspective_view_render_layer.PerspectiveViewRenderLayer.md#draw)

#### Defined in

[src/neuroglancer/mesh/frontend.ts:545](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/mesh/frontend.ts#L545)

___

### getObjectPosition

▸ **getObjectPosition**(`id`): `undefined` \| `Float32Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`Uint64`](util_uint64.Uint64.md) |

#### Returns

`undefined` \| `Float32Array`

#### Defined in

[src/neuroglancer/mesh/frontend.ts:726](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/mesh/frontend.ts#L726)

___

### getValueAt

▸ **getValueAt**(`_x`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_x` | `Float32Array` |

#### Returns

`any`

#### Inherited from

[PerspectiveViewRenderLayer](perspective_view_render_layer.PerspectiveViewRenderLayer.md).[getValueAt](perspective_view_render_layer.PerspectiveViewRenderLayer.md#getvalueat)

#### Defined in

[src/neuroglancer/renderlayer.ts:58](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L58)

___

### handleAction

▸ **handleAction**(`_action`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_action` | `string` |

#### Returns

`void`

#### Inherited from

[PerspectiveViewRenderLayer](perspective_view_render_layer.PerspectiveViewRenderLayer.md).[handleAction](perspective_view_render_layer.PerspectiveViewRenderLayer.md#handleaction)

#### Defined in

[src/neuroglancer/renderlayer.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L54)

___

### isReady

▸ **isReady**(`renderContext`, `attachment`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderContext` | [`PerspectiveViewReadyRenderContext`](../interfaces/perspective_view_render_layer.PerspectiveViewReadyRenderContext.md) |
| `attachment` | [`VisibleLayerInfo`](annotation_renderlayer._internal_.VisibleLayerInfo.md)<[`PerspectivePanel`](perspective_view_panel.PerspectivePanel.md), [`ThreeDimensionalRenderLayerAttachmentState`](../interfaces/mesh_frontend._internal_.ThreeDimensionalRenderLayerAttachmentState.md)\> |

#### Returns

`boolean`

#### Overrides

[PerspectiveViewRenderLayer](perspective_view_render_layer.PerspectiveViewRenderLayer.md).[isReady](perspective_view_render_layer.PerspectiveViewRenderLayer.md#isready)

#### Defined in

[src/neuroglancer/mesh/frontend.ts:682](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/mesh/frontend.ts#L682)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[PerspectiveViewRenderLayer](perspective_view_render_layer.PerspectiveViewRenderLayer.md).[refCountReachedZero](perspective_view_render_layer.PerspectiveViewRenderLayer.md#refcountreachedzero)

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

[PerspectiveViewRenderLayer](perspective_view_render_layer.PerspectiveViewRenderLayer.md).[registerCancellable](perspective_view_render_layer.PerspectiveViewRenderLayer.md#registercancellable)

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

[PerspectiveViewRenderLayer](perspective_view_render_layer.PerspectiveViewRenderLayer.md).[registerDisposer](perspective_view_render_layer.PerspectiveViewRenderLayer.md#registerdisposer)

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

[PerspectiveViewRenderLayer](perspective_view_render_layer.PerspectiveViewRenderLayer.md).[registerEventListener](perspective_view_render_layer.PerspectiveViewRenderLayer.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L95)

___

### transformPickedValue

▸ **transformPickedValue**(`pickState`): `any`

Transform the stored pickedValue and offset associated with the retrieved pick ID into the
actual value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `pickState` | [`PickState`](../interfaces/annotation_annotation_layer_state._internal_.PickState.md) |

#### Returns

`any`

#### Inherited from

[PerspectiveViewRenderLayer](perspective_view_render_layer.PerspectiveViewRenderLayer.md).[transformPickedValue](perspective_view_render_layer.PerspectiveViewRenderLayer.md#transformpickedvalue)

#### Defined in

[src/neuroglancer/renderlayer.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L66)

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

[PerspectiveViewRenderLayer](perspective_view_render_layer.PerspectiveViewRenderLayer.md).[unregisterDisposer](perspective_view_render_layer.PerspectiveViewRenderLayer.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)

___

### updateMouseState

▸ **updateMouseState**(`_mouseState`, `_pickedValue`, `_pickedOffset`, `_data`): `void`

Optionally updates the mouse state based on the retrived pick information.  This might snap the
3-d position to the center of the picked point.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_mouseState` | [`MouseSelectionState`](annotation_annotation_layer_state._internal_.MouseSelectionState.md) |
| `_pickedValue` | [`Uint64`](util_uint64.Uint64.md) |
| `_pickedOffset` | `number` |
| `_data` | `any` |

#### Returns

`void`

#### Inherited from

[PerspectiveViewRenderLayer](perspective_view_render_layer.PerspectiveViewRenderLayer.md).[updateMouseState](perspective_view_render_layer.PerspectiveViewRenderLayer.md#updatemousestate)

#### Defined in

[src/neuroglancer/renderlayer.ts:74](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L74)
