[neuroglancer](../README.md) / [Modules](../modules.md) / webgl/dynamic\_shader

# Module: webgl/dynamic\_shader

## Table of contents

### Interfaces

- [ParameterizedContextDependentShaderGetter](../interfaces/webgl_dynamic_shader.ParameterizedContextDependentShaderGetter.md)
- [ParameterizedEmitterDependentShaderOptions](../interfaces/webgl_dynamic_shader.ParameterizedEmitterDependentShaderOptions.md)
- [ParameterizedShaderGetterResult](../interfaces/webgl_dynamic_shader.ParameterizedShaderGetterResult.md)
- [ParameterizedShaderOptions](../interfaces/webgl_dynamic_shader.ParameterizedShaderOptions.md)

### Type Aliases

- [ParameterizedEmitterDependentShaderGetter](webgl_dynamic_shader.md#parameterizedemitterdependentshadergetter)
- [TrackableFragmentMain](webgl_dynamic_shader.md#trackablefragmentmain)
- [WatchableShaderError](webgl_dynamic_shader.md#watchableshadererror)

### Functions

- [makeTrackableFragmentMain](webgl_dynamic_shader.md#maketrackablefragmentmain)
- [makeWatchableShaderError](webgl_dynamic_shader.md#makewatchableshadererror)
- [parameterizedContextDependentShaderGetter](webgl_dynamic_shader.md#parameterizedcontextdependentshadergetter)
- [parameterizedEmitterDependentShaderGetter](webgl_dynamic_shader.md#parameterizedemitterdependentshadergetter-1)
- [shaderCodeWithLineDirective](webgl_dynamic_shader.md#shadercodewithlinedirective)

## Type Aliases

### ParameterizedEmitterDependentShaderGetter

Ƭ **ParameterizedEmitterDependentShaderGetter**<`Parameters`, `ExtraParameters`\>: [`ParameterizedContextDependentShaderGetter`](../interfaces/webgl_dynamic_shader.ParameterizedContextDependentShaderGetter.md)<[`ShaderModule`](webgl_shader.md#shadermodule), `Parameters`, `ExtraParameters`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Parameters` | `any` |
| `ExtraParameters` | `any` |

#### Defined in

[src/neuroglancer/webgl/dynamic_shader.ts:179](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/dynamic_shader.ts#L179)

___

### TrackableFragmentMain

Ƭ **TrackableFragmentMain**: [`TrackableValue`](../classes/annotation_annotation_layer_state._internal_.TrackableValue.md)<`string`\>

#### Defined in

[src/neuroglancer/webgl/dynamic_shader.ts:35](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/dynamic_shader.ts#L35)

___

### WatchableShaderError

Ƭ **WatchableShaderError**: [`WatchableValue`](../classes/annotation_annotation_layer_state._internal_.WatchableValue.md)<[`ShaderCompilationError`](../classes/webgl_shader.ShaderCompilationError.md) \| [`ShaderLinkError`](../classes/webgl_shader.ShaderLinkError.md) \| `undefined` \| ``null``\>

undefined means shader has not been compiled.  null means shader was compiled successfully.

#### Defined in

[src/neuroglancer/webgl/dynamic_shader.ts:28](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/dynamic_shader.ts#L28)

## Functions

### makeTrackableFragmentMain

▸ **makeTrackableFragmentMain**(`value`): [`TrackableValue`](../classes/annotation_annotation_layer_state._internal_.TrackableValue.md)<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

[`TrackableValue`](../classes/annotation_annotation_layer_state._internal_.TrackableValue.md)<`string`\>

#### Defined in

[src/neuroglancer/webgl/dynamic_shader.ts:37](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/dynamic_shader.ts#L37)

___

### makeWatchableShaderError

▸ **makeWatchableShaderError**(): [`WatchableValue`](../classes/annotation_annotation_layer_state._internal_.WatchableValue.md)<`undefined` \| ``null`` \| [`ShaderCompilationError`](../classes/webgl_shader.ShaderCompilationError.md) \| [`ShaderLinkError`](../classes/webgl_shader.ShaderLinkError.md)\>

#### Returns

[`WatchableValue`](../classes/annotation_annotation_layer_state._internal_.WatchableValue.md)<`undefined` \| ``null`` \| [`ShaderCompilationError`](../classes/webgl_shader.ShaderCompilationError.md) \| [`ShaderLinkError`](../classes/webgl_shader.ShaderLinkError.md)\>

#### Defined in

[src/neuroglancer/webgl/dynamic_shader.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/dynamic_shader.ts#L31)

___

### parameterizedContextDependentShaderGetter

▸ **parameterizedContextDependentShaderGetter**<`Context`, `ContextKey`, `Parameters`, `ExtraParameters`\>(`refCounted`, `gl`, `options`): [`ParameterizedContextDependentShaderGetter`](../interfaces/webgl_dynamic_shader.ParameterizedContextDependentShaderGetter.md)<`Context`, `Parameters`, `ExtraParameters`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Context` | `Context` |
| `ContextKey` | `ContextKey` |
| `Parameters` | `Parameters` |
| `ExtraParameters` | `undefined` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `refCounted` | [`RefCounted`](../classes/util_disposable.RefCounted.md) |
| `gl` | [`GL`](../interfaces/webgl_context.GL.md) |
| `options` | [`ParameterizedShaderOptions`](../interfaces/webgl_dynamic_shader.ParameterizedShaderOptions.md)<`Parameters`, `ExtraParameters`\> & { `defineShader`: (`builder`: [`ShaderBuilder`](../classes/webgl_shader.ShaderBuilder.md), `context`: `Context`, `parameters`: `Parameters`, `extraParameters`: `ExtraParameters`) => `void` ; `encodeContext?`: (`context`: `Context`) => `any` ; `getContextKey`: (`context`: `Context`) => `ContextKey`  } |

#### Returns

[`ParameterizedContextDependentShaderGetter`](../interfaces/webgl_dynamic_shader.ParameterizedContextDependentShaderGetter.md)<`Context`, `Parameters`, `ExtraParameters`\>

#### Defined in

[src/neuroglancer/webgl/dynamic_shader.ts:63](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/dynamic_shader.ts#L63)

___

### parameterizedEmitterDependentShaderGetter

▸ **parameterizedEmitterDependentShaderGetter**<`Parameters`, `ExtraParameters`\>(`refCounted`, `gl`, `options`): [`ParameterizedEmitterDependentShaderGetter`](webgl_dynamic_shader.md#parameterizedemitterdependentshadergetter)<`Parameters`, `ExtraParameters`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Parameters` | `Parameters` |
| `ExtraParameters` | `undefined` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `refCounted` | [`RefCounted`](../classes/util_disposable.RefCounted.md) |
| `gl` | [`GL`](../interfaces/webgl_context.GL.md) |
| `options` | [`ParameterizedEmitterDependentShaderOptions`](../interfaces/webgl_dynamic_shader.ParameterizedEmitterDependentShaderOptions.md)<`Parameters`, `ExtraParameters`\> |

#### Returns

[`ParameterizedEmitterDependentShaderGetter`](webgl_dynamic_shader.md#parameterizedemitterdependentshadergetter)<`Parameters`, `ExtraParameters`\>

#### Defined in

[src/neuroglancer/webgl/dynamic_shader.ts:182](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/dynamic_shader.ts#L182)

___

### shaderCodeWithLineDirective

▸ **shaderCodeWithLineDirective**(`code`, `sourceStringNumber?`, `line?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `code` | `string` | `undefined` |
| `sourceStringNumber` | `number` | `1` |
| `line` | `number` | `0` |

#### Returns

`string`

#### Defined in

[src/neuroglancer/webgl/dynamic_shader.ts:197](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/dynamic_shader.ts#L197)
