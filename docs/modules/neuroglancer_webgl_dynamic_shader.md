[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/webgl/dynamic\_shader

# Module: neuroglancer/webgl/dynamic\_shader

## Table of contents

### Interfaces

- [ParameterizedContextDependentShaderGetter](../interfaces/neuroglancer_webgl_dynamic_shader.ParameterizedContextDependentShaderGetter.md)
- [ParameterizedEmitterDependentShaderOptions](../interfaces/neuroglancer_webgl_dynamic_shader.ParameterizedEmitterDependentShaderOptions.md)
- [ParameterizedShaderGetterResult](../interfaces/neuroglancer_webgl_dynamic_shader.ParameterizedShaderGetterResult.md)
- [ParameterizedShaderOptions](../interfaces/neuroglancer_webgl_dynamic_shader.ParameterizedShaderOptions.md)

### Type Aliases

- [ParameterizedEmitterDependentShaderGetter](neuroglancer_webgl_dynamic_shader.md#parameterizedemitterdependentshadergetter)
- [TrackableFragmentMain](neuroglancer_webgl_dynamic_shader.md#trackablefragmentmain)
- [WatchableShaderError](neuroglancer_webgl_dynamic_shader.md#watchableshadererror)

### Functions

- [makeTrackableFragmentMain](neuroglancer_webgl_dynamic_shader.md#maketrackablefragmentmain)
- [makeWatchableShaderError](neuroglancer_webgl_dynamic_shader.md#makewatchableshadererror)
- [parameterizedContextDependentShaderGetter](neuroglancer_webgl_dynamic_shader.md#parameterizedcontextdependentshadergetter)
- [parameterizedEmitterDependentShaderGetter](neuroglancer_webgl_dynamic_shader.md#parameterizedemitterdependentshadergetter-1)
- [shaderCodeWithLineDirective](neuroglancer_webgl_dynamic_shader.md#shadercodewithlinedirective)

## Type Aliases

### ParameterizedEmitterDependentShaderGetter

Ƭ **ParameterizedEmitterDependentShaderGetter**<`Parameters`, `ExtraParameters`\>: [`ParameterizedContextDependentShaderGetter`](../interfaces/neuroglancer_webgl_dynamic_shader.ParameterizedContextDependentShaderGetter.md)<[`ShaderModule`](neuroglancer_webgl_shader.md#shadermodule), `Parameters`, `ExtraParameters`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Parameters` | `any` |
| `ExtraParameters` | `any` |

#### Defined in

[src/neuroglancer/webgl/dynamic_shader.ts:179](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/dynamic_shader.ts#L179)

___

### TrackableFragmentMain

Ƭ **TrackableFragmentMain**: [`TrackableValue`](../classes/neuroglancer_trackable_value.TrackableValue.md)<`string`\>

#### Defined in

[src/neuroglancer/webgl/dynamic_shader.ts:35](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/dynamic_shader.ts#L35)

___

### WatchableShaderError

Ƭ **WatchableShaderError**: [`WatchableValue`](../classes/neuroglancer_trackable_value.WatchableValue.md)<[`ShaderCompilationError`](../classes/neuroglancer_webgl_shader.ShaderCompilationError.md) \| [`ShaderLinkError`](../classes/neuroglancer_webgl_shader.ShaderLinkError.md) \| `undefined` \| ``null``\>

undefined means shader has not been compiled.  null means shader was compiled successfully.

#### Defined in

[src/neuroglancer/webgl/dynamic_shader.ts:28](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/dynamic_shader.ts#L28)

## Functions

### makeTrackableFragmentMain

▸ **makeTrackableFragmentMain**(`value`): [`TrackableValue`](../classes/neuroglancer_trackable_value.TrackableValue.md)<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

[`TrackableValue`](../classes/neuroglancer_trackable_value.TrackableValue.md)<`string`\>

#### Defined in

[src/neuroglancer/webgl/dynamic_shader.ts:37](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/dynamic_shader.ts#L37)

___

### makeWatchableShaderError

▸ **makeWatchableShaderError**(): [`WatchableValue`](../classes/neuroglancer_trackable_value.WatchableValue.md)<`undefined` \| ``null`` \| [`ShaderCompilationError`](../classes/neuroglancer_webgl_shader.ShaderCompilationError.md) \| [`ShaderLinkError`](../classes/neuroglancer_webgl_shader.ShaderLinkError.md)\>

#### Returns

[`WatchableValue`](../classes/neuroglancer_trackable_value.WatchableValue.md)<`undefined` \| ``null`` \| [`ShaderCompilationError`](../classes/neuroglancer_webgl_shader.ShaderCompilationError.md) \| [`ShaderLinkError`](../classes/neuroglancer_webgl_shader.ShaderLinkError.md)\>

#### Defined in

[src/neuroglancer/webgl/dynamic_shader.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/dynamic_shader.ts#L31)

___

### parameterizedContextDependentShaderGetter

▸ **parameterizedContextDependentShaderGetter**<`Context`, `ContextKey`, `Parameters`, `ExtraParameters`\>(`refCounted`, `gl`, `options`): [`ParameterizedContextDependentShaderGetter`](../interfaces/neuroglancer_webgl_dynamic_shader.ParameterizedContextDependentShaderGetter.md)<`Context`, `Parameters`, `ExtraParameters`\>

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
| `refCounted` | [`RefCounted`](../classes/neuroglancer_util_disposable.RefCounted.md) |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |
| `options` | [`ParameterizedShaderOptions`](../interfaces/neuroglancer_webgl_dynamic_shader.ParameterizedShaderOptions.md)<`Parameters`, `ExtraParameters`\> & { `defineShader`: (`builder`: [`ShaderBuilder`](../classes/neuroglancer_webgl_shader.ShaderBuilder.md), `context`: `Context`, `parameters`: `Parameters`, `extraParameters`: `ExtraParameters`) => `void` ; `encodeContext?`: (`context`: `Context`) => `any` ; `getContextKey`: (`context`: `Context`) => `ContextKey`  } |

#### Returns

[`ParameterizedContextDependentShaderGetter`](../interfaces/neuroglancer_webgl_dynamic_shader.ParameterizedContextDependentShaderGetter.md)<`Context`, `Parameters`, `ExtraParameters`\>

#### Defined in

[src/neuroglancer/webgl/dynamic_shader.ts:63](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/dynamic_shader.ts#L63)

___

### parameterizedEmitterDependentShaderGetter

▸ **parameterizedEmitterDependentShaderGetter**<`Parameters`, `ExtraParameters`\>(`refCounted`, `gl`, `options`): [`ParameterizedEmitterDependentShaderGetter`](neuroglancer_webgl_dynamic_shader.md#parameterizedemitterdependentshadergetter)<`Parameters`, `ExtraParameters`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Parameters` | `Parameters` |
| `ExtraParameters` | `undefined` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `refCounted` | [`RefCounted`](../classes/neuroglancer_util_disposable.RefCounted.md) |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |
| `options` | [`ParameterizedEmitterDependentShaderOptions`](../interfaces/neuroglancer_webgl_dynamic_shader.ParameterizedEmitterDependentShaderOptions.md)<`Parameters`, `ExtraParameters`\> |

#### Returns

[`ParameterizedEmitterDependentShaderGetter`](neuroglancer_webgl_dynamic_shader.md#parameterizedemitterdependentshadergetter)<`Parameters`, `ExtraParameters`\>

#### Defined in

[src/neuroglancer/webgl/dynamic_shader.ts:182](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/dynamic_shader.ts#L182)

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

[src/neuroglancer/webgl/dynamic_shader.ts:197](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/dynamic_shader.ts#L197)
