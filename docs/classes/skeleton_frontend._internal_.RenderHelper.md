[neuroglancer](../README.md) / [Modules](../modules.md) / [skeleton/frontend](../modules/skeleton_frontend.md) / [<internal\>](../modules/skeleton_frontend._internal_.md) / RenderHelper

# Class: RenderHelper

[skeleton/frontend](../modules/skeleton_frontend.md).[<internal>](../modules/skeleton_frontend._internal_.md).RenderHelper

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`RenderHelper`**

## Table of contents

### Constructors

- [constructor](skeleton_frontend._internal_.RenderHelper.md#constructor)

### Properties

- [base](skeleton_frontend._internal_.RenderHelper.md#base)
- [disposedStacks](skeleton_frontend._internal_.RenderHelper.md#disposedstacks)
- [edgeShaderGetter](skeleton_frontend._internal_.RenderHelper.md#edgeshadergetter)
- [nodeShaderGetter](skeleton_frontend._internal_.RenderHelper.md#nodeshadergetter)
- [refCount](skeleton_frontend._internal_.RenderHelper.md#refcount)
- [targetIsSliceView](skeleton_frontend._internal_.RenderHelper.md#targetissliceview)
- [textureAccessHelper](skeleton_frontend._internal_.RenderHelper.md#textureaccesshelper)
- [vertexIdHelper](skeleton_frontend._internal_.RenderHelper.md#vertexidhelper)
- [wasDisposed](skeleton_frontend._internal_.RenderHelper.md#wasdisposed)

### Accessors

- [gl](skeleton_frontend._internal_.RenderHelper.md#gl)
- [vertexAttributes](skeleton_frontend._internal_.RenderHelper.md#vertexattributes)

### Methods

- [addRef](skeleton_frontend._internal_.RenderHelper.md#addref)
- [beginLayer](skeleton_frontend._internal_.RenderHelper.md#beginlayer)
- [defineAttributeAccess](skeleton_frontend._internal_.RenderHelper.md#defineattributeaccess)
- [defineCommonShader](skeleton_frontend._internal_.RenderHelper.md#definecommonshader)
- [dispose](skeleton_frontend._internal_.RenderHelper.md#dispose)
- [disposed](skeleton_frontend._internal_.RenderHelper.md#disposed)
- [drawSkeleton](skeleton_frontend._internal_.RenderHelper.md#drawskeleton)
- [endLayer](skeleton_frontend._internal_.RenderHelper.md#endlayer)
- [getCrossSectionFadeFactor](skeleton_frontend._internal_.RenderHelper.md#getcrosssectionfadefactor)
- [refCountReachedZero](skeleton_frontend._internal_.RenderHelper.md#refcountreachedzero)
- [registerCancellable](skeleton_frontend._internal_.RenderHelper.md#registercancellable)
- [registerDisposer](skeleton_frontend._internal_.RenderHelper.md#registerdisposer)
- [registerEventListener](skeleton_frontend._internal_.RenderHelper.md#registereventlistener)
- [setColor](skeleton_frontend._internal_.RenderHelper.md#setcolor)
- [setPickID](skeleton_frontend._internal_.RenderHelper.md#setpickid)
- [unregisterDisposer](skeleton_frontend._internal_.RenderHelper.md#unregisterdisposer)

## Constructors

### constructor

• **new RenderHelper**(`base`, `targetIsSliceView`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `base` | [`SkeletonLayer`](skeleton_frontend.SkeletonLayer.md) |
| `targetIsSliceView` | `boolean` |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:186](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/skeleton/frontend.ts#L186)

## Properties

### base

• **base**: [`SkeletonLayer`](skeleton_frontend.SkeletonLayer.md)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### edgeShaderGetter

• **edgeShaderGetter**: [`ParameterizedEmitterDependentShaderGetter`](../modules/webgl_dynamic_shader.md#parameterizedemitterdependentshadergetter)<[`ShaderControlsBuilderState`](../interfaces/webgl_shader_ui_controls.ShaderControlsBuilderState.md), `undefined`\>

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:78](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/skeleton/frontend.ts#L78)

___

### nodeShaderGetter

• **nodeShaderGetter**: [`ParameterizedEmitterDependentShaderGetter`](../modules/webgl_dynamic_shader.md#parameterizedemitterdependentshadergetter)<[`ShaderControlsBuilderState`](../interfaces/webgl_shader_ui_controls.ShaderControlsBuilderState.md), `undefined`\>

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:130](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/skeleton/frontend.ts#L130)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### targetIsSliceView

• **targetIsSliceView**: `boolean`

___

### textureAccessHelper

• `Private` **textureAccessHelper**: [`OneDimensionalTextureAccessHelper`](webgl_texture_access.OneDimensionalTextureAccessHelper.md)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:65](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/skeleton/frontend.ts#L65)

___

### vertexIdHelper

• `Private` **vertexIdHelper**: [`VertexIdHelper`](webgl_vertex_id.VertexIdHelper.md)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/skeleton/frontend.ts#L66)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### gl

• `get` **gl**(): [`GL`](../interfaces/webgl_context.GL.md)

#### Returns

[`GL`](../interfaces/webgl_context.GL.md)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:182](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/skeleton/frontend.ts#L182)

___

### vertexAttributes

• `get` **vertexAttributes**(): [`VertexAttributeRenderInfo`](../interfaces/skeleton_frontend._internal_.VertexAttributeRenderInfo.md)[]

#### Returns

[`VertexAttributeRenderInfo`](../interfaces/skeleton_frontend._internal_.VertexAttributeRenderInfo.md)[]

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:67](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/skeleton/frontend.ts#L67)

## Methods

### addRef

▸ **addRef**(): [`RenderHelper`](skeleton_frontend._internal_.RenderHelper.md)

#### Returns

[`RenderHelper`](skeleton_frontend._internal_.RenderHelper.md)

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[addRef](util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### beginLayer

▸ **beginLayer**(`gl`, `shader`, `renderContext`, `modelMatrix`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/webgl_context.GL.md) |
| `shader` | [`ShaderProgram`](webgl_shader.ShaderProgram.md) |
| `renderContext` | [`PerspectiveViewRenderContext`](../interfaces/perspective_view_render_layer.PerspectiveViewRenderContext.md) \| [`SliceViewPanelRenderContext`](../interfaces/sliceview_renderlayer.SliceViewPanelRenderContext.md) |
| `modelMatrix` | [`mat4`](util_geom.mat4.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:214](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/skeleton/frontend.ts#L214)

___

### defineAttributeAccess

▸ **defineAttributeAccess**(`builder`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | [`ShaderBuilder`](webgl_shader.ShaderBuilder.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:190](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/skeleton/frontend.ts#L190)

___

### defineCommonShader

▸ **defineCommonShader**(`builder`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | [`ShaderBuilder`](webgl_shader.ShaderBuilder.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:71](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/skeleton/frontend.ts#L71)

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

### drawSkeleton

▸ **drawSkeleton**(`gl`, `edgeShader`, `nodeShader`, `skeletonChunk`, `projectionParameters`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/webgl_context.GL.md) |
| `edgeShader` | [`ShaderProgram`](webgl_shader.ShaderProgram.md) |
| `nodeShader` | ``null`` \| [`ShaderProgram`](webgl_shader.ShaderProgram.md) |
| `skeletonChunk` | [`SkeletonChunk`](skeleton_frontend.SkeletonChunk.md) |
| `projectionParameters` | `Object` |
| `projectionParameters.height` | `number` |
| `projectionParameters.width` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:231](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/skeleton/frontend.ts#L231)

___

### endLayer

▸ **endLayer**(`gl`, `shader`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/webgl_context.GL.md) |
| `shader` | [`ShaderProgram`](webgl_shader.ShaderProgram.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:266](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/skeleton/frontend.ts#L266)

___

### getCrossSectionFadeFactor

▸ **getCrossSectionFadeFactor**(): ``"(clamp(1.0 - 2.0 * abs(0.5 - gl_FragCoord.z), 0.0, 1.0))"`` \| ``"(1.0)"``

#### Returns

``"(clamp(1.0 - 2.0 * abs(0.5 - gl_FragCoord.z), 0.0, 1.0))"`` \| ``"(1.0)"``

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:206](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/skeleton/frontend.ts#L206)

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

### setColor

▸ **setColor**(`gl`, `shader`, `color`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/webgl_context.GL.md) |
| `shader` | [`ShaderProgram`](webgl_shader.ShaderProgram.md) |
| `color` | [`vec3`](util_geom.vec3.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:223](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/skeleton/frontend.ts#L223)

___

### setPickID

▸ **setPickID**(`gl`, `shader`, `pickID`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/webgl_context.GL.md) |
| `shader` | [`ShaderProgram`](webgl_shader.ShaderProgram.md) |
| `pickID` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:227](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/skeleton/frontend.ts#L227)

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
