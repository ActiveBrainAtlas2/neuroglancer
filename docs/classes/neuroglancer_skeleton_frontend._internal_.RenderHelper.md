[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/skeleton/frontend](../modules/neuroglancer_skeleton_frontend.md) / [<internal\>](../modules/neuroglancer_skeleton_frontend._internal_.md) / RenderHelper

# Class: RenderHelper

[neuroglancer/skeleton/frontend](../modules/neuroglancer_skeleton_frontend.md).[<internal>](../modules/neuroglancer_skeleton_frontend._internal_.md).RenderHelper

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`RenderHelper`**

## Table of contents

### Constructors

- [constructor](neuroglancer_skeleton_frontend._internal_.RenderHelper.md#constructor)

### Properties

- [base](neuroglancer_skeleton_frontend._internal_.RenderHelper.md#base)
- [disposedStacks](neuroglancer_skeleton_frontend._internal_.RenderHelper.md#disposedstacks)
- [edgeShaderGetter](neuroglancer_skeleton_frontend._internal_.RenderHelper.md#edgeshadergetter)
- [nodeShaderGetter](neuroglancer_skeleton_frontend._internal_.RenderHelper.md#nodeshadergetter)
- [refCount](neuroglancer_skeleton_frontend._internal_.RenderHelper.md#refcount)
- [targetIsSliceView](neuroglancer_skeleton_frontend._internal_.RenderHelper.md#targetissliceview)
- [textureAccessHelper](neuroglancer_skeleton_frontend._internal_.RenderHelper.md#textureaccesshelper)
- [vertexIdHelper](neuroglancer_skeleton_frontend._internal_.RenderHelper.md#vertexidhelper)
- [wasDisposed](neuroglancer_skeleton_frontend._internal_.RenderHelper.md#wasdisposed)

### Accessors

- [gl](neuroglancer_skeleton_frontend._internal_.RenderHelper.md#gl)
- [vertexAttributes](neuroglancer_skeleton_frontend._internal_.RenderHelper.md#vertexattributes)

### Methods

- [addRef](neuroglancer_skeleton_frontend._internal_.RenderHelper.md#addref)
- [beginLayer](neuroglancer_skeleton_frontend._internal_.RenderHelper.md#beginlayer)
- [defineAttributeAccess](neuroglancer_skeleton_frontend._internal_.RenderHelper.md#defineattributeaccess)
- [defineCommonShader](neuroglancer_skeleton_frontend._internal_.RenderHelper.md#definecommonshader)
- [dispose](neuroglancer_skeleton_frontend._internal_.RenderHelper.md#dispose)
- [disposed](neuroglancer_skeleton_frontend._internal_.RenderHelper.md#disposed)
- [drawSkeleton](neuroglancer_skeleton_frontend._internal_.RenderHelper.md#drawskeleton)
- [endLayer](neuroglancer_skeleton_frontend._internal_.RenderHelper.md#endlayer)
- [getCrossSectionFadeFactor](neuroglancer_skeleton_frontend._internal_.RenderHelper.md#getcrosssectionfadefactor)
- [refCountReachedZero](neuroglancer_skeleton_frontend._internal_.RenderHelper.md#refcountreachedzero)
- [registerCancellable](neuroglancer_skeleton_frontend._internal_.RenderHelper.md#registercancellable)
- [registerDisposer](neuroglancer_skeleton_frontend._internal_.RenderHelper.md#registerdisposer)
- [registerEventListener](neuroglancer_skeleton_frontend._internal_.RenderHelper.md#registereventlistener)
- [setColor](neuroglancer_skeleton_frontend._internal_.RenderHelper.md#setcolor)
- [setPickID](neuroglancer_skeleton_frontend._internal_.RenderHelper.md#setpickid)
- [unregisterDisposer](neuroglancer_skeleton_frontend._internal_.RenderHelper.md#unregisterdisposer)

## Constructors

### constructor

• **new RenderHelper**(`base`, `targetIsSliceView`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `base` | [`SkeletonLayer`](neuroglancer_skeleton_frontend.SkeletonLayer.md) |
| `targetIsSliceView` | `boolean` |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:186](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/skeleton/frontend.ts#L186)

## Properties

### base

• **base**: [`SkeletonLayer`](neuroglancer_skeleton_frontend.SkeletonLayer.md)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### edgeShaderGetter

• **edgeShaderGetter**: [`ParameterizedEmitterDependentShaderGetter`](../modules/neuroglancer_webgl_dynamic_shader.md#parameterizedemitterdependentshadergetter)<[`ShaderControlsBuilderState`](../interfaces/neuroglancer_webgl_shader_ui_controls.ShaderControlsBuilderState.md), `undefined`\>

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:78](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/skeleton/frontend.ts#L78)

___

### nodeShaderGetter

• **nodeShaderGetter**: [`ParameterizedEmitterDependentShaderGetter`](../modules/neuroglancer_webgl_dynamic_shader.md#parameterizedemitterdependentshadergetter)<[`ShaderControlsBuilderState`](../interfaces/neuroglancer_webgl_shader_ui_controls.ShaderControlsBuilderState.md), `undefined`\>

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:130](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/skeleton/frontend.ts#L130)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### targetIsSliceView

• **targetIsSliceView**: `boolean`

___

### textureAccessHelper

• `Private` **textureAccessHelper**: [`OneDimensionalTextureAccessHelper`](neuroglancer_webgl_texture_access.OneDimensionalTextureAccessHelper.md)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:65](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/skeleton/frontend.ts#L65)

___

### vertexIdHelper

• `Private` **vertexIdHelper**: [`VertexIdHelper`](neuroglancer_webgl_vertex_id.VertexIdHelper.md)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/skeleton/frontend.ts#L66)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### gl

• `get` **gl**(): [`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

#### Returns

[`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:182](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/skeleton/frontend.ts#L182)

___

### vertexAttributes

• `get` **vertexAttributes**(): [`VertexAttributeRenderInfo`](../interfaces/neuroglancer_skeleton_frontend._internal_.VertexAttributeRenderInfo.md)[]

#### Returns

[`VertexAttributeRenderInfo`](../interfaces/neuroglancer_skeleton_frontend._internal_.VertexAttributeRenderInfo.md)[]

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:67](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/skeleton/frontend.ts#L67)

## Methods

### addRef

▸ **addRef**(): [`RenderHelper`](neuroglancer_skeleton_frontend._internal_.RenderHelper.md)

#### Returns

[`RenderHelper`](neuroglancer_skeleton_frontend._internal_.RenderHelper.md)

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[addRef](neuroglancer_util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L48)

___

### beginLayer

▸ **beginLayer**(`gl`, `shader`, `renderContext`, `modelMatrix`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |
| `shader` | [`ShaderProgram`](neuroglancer_webgl_shader.ShaderProgram.md) |
| `renderContext` | [`PerspectiveViewRenderContext`](../interfaces/neuroglancer_perspective_view_render_layer.PerspectiveViewRenderContext.md) \| [`SliceViewPanelRenderContext`](../interfaces/neuroglancer_sliceview_renderlayer.SliceViewPanelRenderContext.md) |
| `modelMatrix` | [`mat4`](neuroglancer_util_geom.mat4.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:214](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/skeleton/frontend.ts#L214)

___

### defineAttributeAccess

▸ **defineAttributeAccess**(`builder`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | [`ShaderBuilder`](neuroglancer_webgl_shader.ShaderBuilder.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:190](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/skeleton/frontend.ts#L190)

___

### defineCommonShader

▸ **defineCommonShader**(`builder`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | [`ShaderBuilder`](neuroglancer_webgl_shader.ShaderBuilder.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:71](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/skeleton/frontend.ts#L71)

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

### drawSkeleton

▸ **drawSkeleton**(`gl`, `edgeShader`, `nodeShader`, `skeletonChunk`, `projectionParameters`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |
| `edgeShader` | [`ShaderProgram`](neuroglancer_webgl_shader.ShaderProgram.md) |
| `nodeShader` | ``null`` \| [`ShaderProgram`](neuroglancer_webgl_shader.ShaderProgram.md) |
| `skeletonChunk` | [`SkeletonChunk`](neuroglancer_skeleton_frontend.SkeletonChunk.md) |
| `projectionParameters` | `Object` |
| `projectionParameters.height` | `number` |
| `projectionParameters.width` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:231](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/skeleton/frontend.ts#L231)

___

### endLayer

▸ **endLayer**(`gl`, `shader`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |
| `shader` | [`ShaderProgram`](neuroglancer_webgl_shader.ShaderProgram.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:266](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/skeleton/frontend.ts#L266)

___

### getCrossSectionFadeFactor

▸ **getCrossSectionFadeFactor**(): ``"(clamp(1.0 - 2.0 * abs(0.5 - gl_FragCoord.z), 0.0, 1.0))"`` \| ``"(1.0)"``

#### Returns

``"(clamp(1.0 - 2.0 * abs(0.5 - gl_FragCoord.z), 0.0, 1.0))"`` \| ``"(1.0)"``

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:206](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/skeleton/frontend.ts#L206)

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

### setColor

▸ **setColor**(`gl`, `shader`, `color`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |
| `shader` | [`ShaderProgram`](neuroglancer_webgl_shader.ShaderProgram.md) |
| `color` | [`vec3`](neuroglancer_util_geom.vec3.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:223](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/skeleton/frontend.ts#L223)

___

### setPickID

▸ **setPickID**(`gl`, `shader`, `pickID`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |
| `shader` | [`ShaderProgram`](neuroglancer_webgl_shader.ShaderProgram.md) |
| `pickID` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:227](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/skeleton/frontend.ts#L227)

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
