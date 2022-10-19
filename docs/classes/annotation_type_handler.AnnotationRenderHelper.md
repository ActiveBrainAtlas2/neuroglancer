[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/type\_handler](../modules/annotation_type_handler.md) / AnnotationRenderHelper

# Class: AnnotationRenderHelper

[annotation/type_handler](../modules/annotation_type_handler.md).AnnotationRenderHelper

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`AnnotationRenderHelper`**

## Table of contents

### Constructors

- [constructor](annotation_type_handler.AnnotationRenderHelper.md#constructor)

### Properties

- [annotationType](annotation_type_handler.AnnotationRenderHelper.md#annotationtype)
- [disposedStacks](annotation_type_handler.AnnotationRenderHelper.md#disposedstacks)
- [fallbackShaderParameters](annotation_type_handler.AnnotationRenderHelper.md#fallbackshaderparameters)
- [gl](annotation_type_handler.AnnotationRenderHelper.md#gl)
- [pickIdsPerInstance](annotation_type_handler.AnnotationRenderHelper.md#pickidsperinstance)
- [properties](annotation_type_handler.AnnotationRenderHelper.md#properties)
- [propertyOffsets](annotation_type_handler.AnnotationRenderHelper.md#propertyoffsets)
- [rank](annotation_type_handler.AnnotationRenderHelper.md#rank)
- [refCount](annotation_type_handler.AnnotationRenderHelper.md#refcount)
- [serializedBytesPerAnnotation](annotation_type_handler.AnnotationRenderHelper.md#serializedbytesperannotation)
- [serializedGeometryBytesPerAnnotation](annotation_type_handler.AnnotationRenderHelper.md#serializedgeometrybytesperannotation)
- [shaderControlState](annotation_type_handler.AnnotationRenderHelper.md#shadercontrolstate)
- [shaderError](annotation_type_handler.AnnotationRenderHelper.md#shadererror)
- [targetIsSliceView](annotation_type_handler.AnnotationRenderHelper.md#targetissliceview)
- [wasDisposed](annotation_type_handler.AnnotationRenderHelper.md#wasdisposed)

### Accessors

- [invokeUserMain](annotation_type_handler.AnnotationRenderHelper.md#invokeusermain)

### Methods

- [addRef](annotation_type_handler.AnnotationRenderHelper.md#addref)
- [dispose](annotation_type_handler.AnnotationRenderHelper.md#dispose)
- [disposed](annotation_type_handler.AnnotationRenderHelper.md#disposed)
- [draw](annotation_type_handler.AnnotationRenderHelper.md#draw)
- [enable](annotation_type_handler.AnnotationRenderHelper.md#enable)
- [getCrossSectionFadeFactor](annotation_type_handler.AnnotationRenderHelper.md#getcrosssectionfadefactor)
- [getDependentShader](annotation_type_handler.AnnotationRenderHelper.md#getdependentshader)
- [refCountReachedZero](annotation_type_handler.AnnotationRenderHelper.md#refcountreachedzero)
- [registerCancellable](annotation_type_handler.AnnotationRenderHelper.md#registercancellable)
- [registerDisposer](annotation_type_handler.AnnotationRenderHelper.md#registerdisposer)
- [registerEventListener](annotation_type_handler.AnnotationRenderHelper.md#registereventlistener)
- [setPartIndex](annotation_type_handler.AnnotationRenderHelper.md#setpartindex)
- [unregisterDisposer](annotation_type_handler.AnnotationRenderHelper.md#unregisterdisposer)

## Constructors

### constructor

• **new AnnotationRenderHelper**(`gl`, `annotationType`, `rank`, `properties`, `shaderControlState`, `fallbackShaderParameters`, `shaderError`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/webgl_context.GL.md) |
| `annotationType` | [`AnnotationType`](../enums/annotation.AnnotationType.md) |
| `rank` | `number` |
| `properties` | readonly [`Readonly`](../modules/annotation_annotation_layer_state._internal_.md#readonly)<[`AnnotationPropertySpec`](../modules/annotation.md#annotationpropertyspec)\>[] |
| `shaderControlState` | [`ShaderControlState`](webgl_shader_ui_controls.ShaderControlState.md) |
| `fallbackShaderParameters` | [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<[`ShaderControlsBuilderState`](../interfaces/webgl_shader_ui_controls.ShaderControlsBuilderState.md)\> |
| `shaderError` | [`WatchableShaderError`](../modules/webgl_dynamic_shader.md#watchableshadererror) |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/annotation/type_handler.ts:134](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/type_handler.ts#L134)

## Properties

### annotationType

• **annotationType**: [`AnnotationType`](../enums/annotation.AnnotationType.md)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### fallbackShaderParameters

• **fallbackShaderParameters**: [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<[`ShaderControlsBuilderState`](../interfaces/webgl_shader_ui_controls.ShaderControlsBuilderState.md)\>

___

### gl

• **gl**: [`GL`](../interfaces/webgl_context.GL.md)

___

### pickIdsPerInstance

• **pickIdsPerInstance**: `number`

#### Defined in

[src/neuroglancer/annotation/type_handler.ts:128](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/type_handler.ts#L128)

___

### properties

• **properties**: readonly [`Readonly`](../modules/annotation_annotation_layer_state._internal_.md#readonly)<[`AnnotationPropertySpec`](../modules/annotation.md#annotationpropertyspec)\>[]

___

### propertyOffsets

• `Readonly` **propertyOffsets**: `number`[]

#### Defined in

[src/neuroglancer/annotation/type_handler.ts:132](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/type_handler.ts#L132)

___

### rank

• **rank**: `number`

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### serializedBytesPerAnnotation

• `Readonly` **serializedBytesPerAnnotation**: `number`

#### Defined in

[src/neuroglancer/annotation/type_handler.ts:130](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/type_handler.ts#L130)

___

### serializedGeometryBytesPerAnnotation

• `Readonly` **serializedGeometryBytesPerAnnotation**: `number`

#### Defined in

[src/neuroglancer/annotation/type_handler.ts:131](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/type_handler.ts#L131)

___

### shaderControlState

• **shaderControlState**: [`ShaderControlState`](webgl_shader_ui_controls.ShaderControlState.md)

___

### shaderError

• **shaderError**: [`WatchableShaderError`](../modules/webgl_dynamic_shader.md#watchableshadererror)

___

### targetIsSliceView

• **targetIsSliceView**: `boolean`

#### Defined in

[src/neuroglancer/annotation/type_handler.ts:129](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/type_handler.ts#L129)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### invokeUserMain

• `get` **invokeUserMain**(): `string`

#### Returns

`string`

#### Defined in

[src/neuroglancer/annotation/type_handler.ts:385](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/type_handler.ts#L385)

## Methods

### addRef

▸ **addRef**(): [`AnnotationRenderHelper`](annotation_type_handler.AnnotationRenderHelper.md)

#### Returns

[`AnnotationRenderHelper`](annotation_type_handler.AnnotationRenderHelper.md)

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

### draw

▸ `Abstract` **draw**(`context`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`AnnotationRenderContext`](../interfaces/annotation_type_handler.AnnotationRenderContext.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/type_handler.ts:437](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/type_handler.ts#L437)

___

### enable

▸ **enable**(`shaderGetter`, `context`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shaderGetter` | [`AnnotationShaderGetter`](../modules/annotation_type_handler.md#annotationshadergetter) |
| `context` | [`AnnotationRenderContext`](../interfaces/annotation_type_handler.AnnotationRenderContext.md) |
| `callback` | (`shader`: [`ShaderProgram`](webgl_shader.ShaderProgram.md)) => `void` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/type_handler.ts:404](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/type_handler.ts#L404)

___

### getCrossSectionFadeFactor

▸ **getCrossSectionFadeFactor**(): ``"(clamp(1.0 - 2.0 * abs(0.5 - gl_FragCoord.z), 0.0, 1.0))"`` \| ``"(1.0)"``

#### Returns

``"(clamp(1.0 - 2.0 * abs(0.5 - gl_FragCoord.z), 0.0, 1.0))"`` \| ``"(1.0)"``

#### Defined in

[src/neuroglancer/annotation/type_handler.ts:396](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/type_handler.ts#L396)

___

### getDependentShader

▸ **getDependentShader**(`memoizeKey`, `defineShader`): [`AnnotationShaderGetter`](../modules/annotation_type_handler.md#annotationshadergetter)

#### Parameters

| Name | Type |
| :------ | :------ |
| `memoizeKey` | `any` |
| `defineShader` | (`builder`: [`ShaderBuilder`](webgl_shader.ShaderBuilder.md)) => `void` |

#### Returns

[`AnnotationShaderGetter`](../modules/annotation_type_handler.md#annotationshadergetter)

#### Defined in

[src/neuroglancer/annotation/type_handler.ts:150](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/type_handler.ts#L150)

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

### setPartIndex

▸ **setPartIndex**(`builder`, ...`partIndexExpressions`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | [`ShaderBuilder`](webgl_shader.ShaderBuilder.md) |
| `...partIndexExpressions` | `string`[] |

#### Returns

`string`

#### Defined in

[src/neuroglancer/annotation/type_handler.ts:357](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/type_handler.ts#L357)

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
