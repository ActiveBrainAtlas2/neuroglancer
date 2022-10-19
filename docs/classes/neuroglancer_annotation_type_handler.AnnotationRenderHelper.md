[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/annotation/type\_handler](../modules/neuroglancer_annotation_type_handler.md) / AnnotationRenderHelper

# Class: AnnotationRenderHelper

[neuroglancer/annotation/type_handler](../modules/neuroglancer_annotation_type_handler.md).AnnotationRenderHelper

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`AnnotationRenderHelper`**

## Table of contents

### Constructors

- [constructor](neuroglancer_annotation_type_handler.AnnotationRenderHelper.md#constructor)

### Properties

- [annotationType](neuroglancer_annotation_type_handler.AnnotationRenderHelper.md#annotationtype)
- [disposedStacks](neuroglancer_annotation_type_handler.AnnotationRenderHelper.md#disposedstacks)
- [fallbackShaderParameters](neuroglancer_annotation_type_handler.AnnotationRenderHelper.md#fallbackshaderparameters)
- [gl](neuroglancer_annotation_type_handler.AnnotationRenderHelper.md#gl)
- [pickIdsPerInstance](neuroglancer_annotation_type_handler.AnnotationRenderHelper.md#pickidsperinstance)
- [properties](neuroglancer_annotation_type_handler.AnnotationRenderHelper.md#properties)
- [propertyOffsets](neuroglancer_annotation_type_handler.AnnotationRenderHelper.md#propertyoffsets)
- [rank](neuroglancer_annotation_type_handler.AnnotationRenderHelper.md#rank)
- [refCount](neuroglancer_annotation_type_handler.AnnotationRenderHelper.md#refcount)
- [serializedBytesPerAnnotation](neuroglancer_annotation_type_handler.AnnotationRenderHelper.md#serializedbytesperannotation)
- [serializedGeometryBytesPerAnnotation](neuroglancer_annotation_type_handler.AnnotationRenderHelper.md#serializedgeometrybytesperannotation)
- [shaderControlState](neuroglancer_annotation_type_handler.AnnotationRenderHelper.md#shadercontrolstate)
- [shaderError](neuroglancer_annotation_type_handler.AnnotationRenderHelper.md#shadererror)
- [targetIsSliceView](neuroglancer_annotation_type_handler.AnnotationRenderHelper.md#targetissliceview)
- [wasDisposed](neuroglancer_annotation_type_handler.AnnotationRenderHelper.md#wasdisposed)

### Accessors

- [invokeUserMain](neuroglancer_annotation_type_handler.AnnotationRenderHelper.md#invokeusermain)

### Methods

- [addRef](neuroglancer_annotation_type_handler.AnnotationRenderHelper.md#addref)
- [dispose](neuroglancer_annotation_type_handler.AnnotationRenderHelper.md#dispose)
- [disposed](neuroglancer_annotation_type_handler.AnnotationRenderHelper.md#disposed)
- [draw](neuroglancer_annotation_type_handler.AnnotationRenderHelper.md#draw)
- [enable](neuroglancer_annotation_type_handler.AnnotationRenderHelper.md#enable)
- [getCrossSectionFadeFactor](neuroglancer_annotation_type_handler.AnnotationRenderHelper.md#getcrosssectionfadefactor)
- [getDependentShader](neuroglancer_annotation_type_handler.AnnotationRenderHelper.md#getdependentshader)
- [refCountReachedZero](neuroglancer_annotation_type_handler.AnnotationRenderHelper.md#refcountreachedzero)
- [registerCancellable](neuroglancer_annotation_type_handler.AnnotationRenderHelper.md#registercancellable)
- [registerDisposer](neuroglancer_annotation_type_handler.AnnotationRenderHelper.md#registerdisposer)
- [registerEventListener](neuroglancer_annotation_type_handler.AnnotationRenderHelper.md#registereventlistener)
- [setPartIndex](neuroglancer_annotation_type_handler.AnnotationRenderHelper.md#setpartindex)
- [unregisterDisposer](neuroglancer_annotation_type_handler.AnnotationRenderHelper.md#unregisterdisposer)

## Constructors

### constructor

• **new AnnotationRenderHelper**(`gl`, `annotationType`, `rank`, `properties`, `shaderControlState`, `fallbackShaderParameters`, `shaderError`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |
| `annotationType` | [`AnnotationType`](../enums/neuroglancer_annotation.AnnotationType.md) |
| `rank` | `number` |
| `properties` | readonly [`Readonly`](../modules/neuroglancer_annotation_frontend_source._internal_.md#readonly)<[`AnnotationPropertySpec`](../modules/neuroglancer_annotation.md#annotationpropertyspec)\>[] |
| `shaderControlState` | [`ShaderControlState`](neuroglancer_webgl_shader_ui_controls.ShaderControlState.md) |
| `fallbackShaderParameters` | [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<[`ShaderControlsBuilderState`](../interfaces/neuroglancer_webgl_shader_ui_controls.ShaderControlsBuilderState.md)\> |
| `shaderError` | [`WatchableShaderError`](../modules/neuroglancer_webgl_dynamic_shader.md#watchableshadererror) |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/annotation/type_handler.ts:134](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/type_handler.ts#L134)

## Properties

### annotationType

• **annotationType**: [`AnnotationType`](../enums/neuroglancer_annotation.AnnotationType.md)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### fallbackShaderParameters

• **fallbackShaderParameters**: [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<[`ShaderControlsBuilderState`](../interfaces/neuroglancer_webgl_shader_ui_controls.ShaderControlsBuilderState.md)\>

___

### gl

• **gl**: [`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

___

### pickIdsPerInstance

• **pickIdsPerInstance**: `number`

#### Defined in

[src/neuroglancer/annotation/type_handler.ts:128](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/type_handler.ts#L128)

___

### properties

• **properties**: readonly [`Readonly`](../modules/neuroglancer_annotation_frontend_source._internal_.md#readonly)<[`AnnotationPropertySpec`](../modules/neuroglancer_annotation.md#annotationpropertyspec)\>[]

___

### propertyOffsets

• `Readonly` **propertyOffsets**: `number`[]

#### Defined in

[src/neuroglancer/annotation/type_handler.ts:132](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/type_handler.ts#L132)

___

### rank

• **rank**: `number`

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### serializedBytesPerAnnotation

• `Readonly` **serializedBytesPerAnnotation**: `number`

#### Defined in

[src/neuroglancer/annotation/type_handler.ts:130](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/type_handler.ts#L130)

___

### serializedGeometryBytesPerAnnotation

• `Readonly` **serializedGeometryBytesPerAnnotation**: `number`

#### Defined in

[src/neuroglancer/annotation/type_handler.ts:131](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/type_handler.ts#L131)

___

### shaderControlState

• **shaderControlState**: [`ShaderControlState`](neuroglancer_webgl_shader_ui_controls.ShaderControlState.md)

___

### shaderError

• **shaderError**: [`WatchableShaderError`](../modules/neuroglancer_webgl_dynamic_shader.md#watchableshadererror)

___

### targetIsSliceView

• **targetIsSliceView**: `boolean`

#### Defined in

[src/neuroglancer/annotation/type_handler.ts:129](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/type_handler.ts#L129)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### invokeUserMain

• `get` **invokeUserMain**(): `string`

#### Returns

`string`

#### Defined in

[src/neuroglancer/annotation/type_handler.ts:385](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/type_handler.ts#L385)

## Methods

### addRef

▸ **addRef**(): [`AnnotationRenderHelper`](neuroglancer_annotation_type_handler.AnnotationRenderHelper.md)

#### Returns

[`AnnotationRenderHelper`](neuroglancer_annotation_type_handler.AnnotationRenderHelper.md)

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

### draw

▸ `Abstract` **draw**(`context`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`AnnotationRenderContext`](../interfaces/neuroglancer_annotation_type_handler.AnnotationRenderContext.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/type_handler.ts:437](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/type_handler.ts#L437)

___

### enable

▸ **enable**(`shaderGetter`, `context`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shaderGetter` | [`AnnotationShaderGetter`](../modules/neuroglancer_annotation_type_handler.md#annotationshadergetter) |
| `context` | [`AnnotationRenderContext`](../interfaces/neuroglancer_annotation_type_handler.AnnotationRenderContext.md) |
| `callback` | (`shader`: [`ShaderProgram`](neuroglancer_webgl_shader.ShaderProgram.md)) => `void` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/type_handler.ts:404](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/type_handler.ts#L404)

___

### getCrossSectionFadeFactor

▸ **getCrossSectionFadeFactor**(): ``"(clamp(1.0 - 2.0 * abs(0.5 - gl_FragCoord.z), 0.0, 1.0))"`` \| ``"(1.0)"``

#### Returns

``"(clamp(1.0 - 2.0 * abs(0.5 - gl_FragCoord.z), 0.0, 1.0))"`` \| ``"(1.0)"``

#### Defined in

[src/neuroglancer/annotation/type_handler.ts:396](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/type_handler.ts#L396)

___

### getDependentShader

▸ **getDependentShader**(`memoizeKey`, `defineShader`): [`AnnotationShaderGetter`](../modules/neuroglancer_annotation_type_handler.md#annotationshadergetter)

#### Parameters

| Name | Type |
| :------ | :------ |
| `memoizeKey` | `any` |
| `defineShader` | (`builder`: [`ShaderBuilder`](neuroglancer_webgl_shader.ShaderBuilder.md)) => `void` |

#### Returns

[`AnnotationShaderGetter`](../modules/neuroglancer_annotation_type_handler.md#annotationshadergetter)

#### Defined in

[src/neuroglancer/annotation/type_handler.ts:150](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/type_handler.ts#L150)

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

### setPartIndex

▸ **setPartIndex**(`builder`, ...`partIndexExpressions`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | [`ShaderBuilder`](neuroglancer_webgl_shader.ShaderBuilder.md) |
| `...partIndexExpressions` | `string`[] |

#### Returns

`string`

#### Defined in

[src/neuroglancer/annotation/type_handler.ts:357](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/type_handler.ts#L357)

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
