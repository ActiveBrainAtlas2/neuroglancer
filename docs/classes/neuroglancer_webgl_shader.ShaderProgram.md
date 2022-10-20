[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/webgl/shader](../modules/neuroglancer_webgl_shader.md) / ShaderProgram

# Class: ShaderProgram

[neuroglancer/webgl/shader](../modules/neuroglancer_webgl_shader.md).ShaderProgram

**`License`**

Copyright 2016 Google Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`ShaderProgram`**

## Table of contents

### Constructors

- [constructor](neuroglancer_webgl_shader.ShaderProgram.md#constructor)

### Properties

- [attributes](neuroglancer_webgl_shader.ShaderProgram.md#attributes)
- [disposedStacks](neuroglancer_webgl_shader.ShaderProgram.md#disposedstacks)
- [fragmentShader](neuroglancer_webgl_shader.ShaderProgram.md#fragmentshader)
- [fragmentSource](neuroglancer_webgl_shader.ShaderProgram.md#fragmentsource)
- [gl](neuroglancer_webgl_shader.ShaderProgram.md#gl)
- [program](neuroglancer_webgl_shader.ShaderProgram.md#program)
- [refCount](neuroglancer_webgl_shader.ShaderProgram.md#refcount)
- [textureUnits](neuroglancer_webgl_shader.ShaderProgram.md#textureunits)
- [uniforms](neuroglancer_webgl_shader.ShaderProgram.md#uniforms)
- [vertexDebugOutputs](neuroglancer_webgl_shader.ShaderProgram.md#vertexdebugoutputs)
- [vertexShader](neuroglancer_webgl_shader.ShaderProgram.md#vertexshader)
- [vertexShaderInputBinders](neuroglancer_webgl_shader.ShaderProgram.md#vertexshaderinputbinders)
- [vertexSource](neuroglancer_webgl_shader.ShaderProgram.md#vertexsource)
- [wasDisposed](neuroglancer_webgl_shader.ShaderProgram.md#wasdisposed)

### Methods

- [addRef](neuroglancer_webgl_shader.ShaderProgram.md#addref)
- [attribute](neuroglancer_webgl_shader.ShaderProgram.md#attribute)
- [bind](neuroglancer_webgl_shader.ShaderProgram.md#bind)
- [dispose](neuroglancer_webgl_shader.ShaderProgram.md#dispose)
- [disposed](neuroglancer_webgl_shader.ShaderProgram.md#disposed)
- [refCountReachedZero](neuroglancer_webgl_shader.ShaderProgram.md#refcountreachedzero)
- [registerCancellable](neuroglancer_webgl_shader.ShaderProgram.md#registercancellable)
- [registerDisposer](neuroglancer_webgl_shader.ShaderProgram.md#registerdisposer)
- [registerEventListener](neuroglancer_webgl_shader.ShaderProgram.md#registereventlistener)
- [textureUnit](neuroglancer_webgl_shader.ShaderProgram.md#textureunit)
- [uniform](neuroglancer_webgl_shader.ShaderProgram.md#uniform)
- [unregisterDisposer](neuroglancer_webgl_shader.ShaderProgram.md#unregisterdisposer)

## Constructors

### constructor

• **new ShaderProgram**(`gl`, `vertexSource`, `fragmentSource`, `uniformNames?`, `attributeNames?`, `vertexDebugOutputs?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |
| `vertexSource` | `string` |
| `fragmentSource` | `string` |
| `uniformNames?` | `string`[] |
| `attributeNames?` | `string`[] |
| `vertexDebugOutputs?` | [`VertexDebugOutput`](../interfaces/neuroglancer_webgl_shader._internal_.VertexDebugOutput.md)[] |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/webgl/shader.ts:145](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/shader.ts#L145)

## Properties

### attributes

• **attributes**: `Map`<`string`, `number`\>

#### Defined in

[src/neuroglancer/webgl/shader.ts:139](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/shader.ts#L139)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### fragmentShader

• **fragmentShader**: [`WebGLShader`](../modules/main_module._internal_.md#webglshader)

#### Defined in

[src/neuroglancer/webgl/shader.ts:138](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/shader.ts#L138)

___

### fragmentSource

• **fragmentSource**: `string`

#### Defined in

[src/neuroglancer/webgl/shader.ts:146](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/shader.ts#L146)

___

### gl

• **gl**: [`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

#### Defined in

[src/neuroglancer/webgl/shader.ts:146](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/shader.ts#L146)

___

### program

• **program**: [`WebGLProgram`](../modules/main_module._internal_.md#webglprogram)

#### Defined in

[src/neuroglancer/webgl/shader.ts:136](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/shader.ts#L136)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### textureUnits

• **textureUnits**: `Map`<`any`, `number`\>

#### Defined in

[src/neuroglancer/webgl/shader.ts:141](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/shader.ts#L141)

___

### uniforms

• **uniforms**: `Map`<`string`, ``null`` \| [`WebGLUniformLocation`](../modules/main_module._internal_.md#webgluniformlocation)\>

#### Defined in

[src/neuroglancer/webgl/shader.ts:140](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/shader.ts#L140)

___

### vertexDebugOutputs

• `Optional` **vertexDebugOutputs**: [`VertexDebugOutput`](../interfaces/neuroglancer_webgl_shader._internal_.VertexDebugOutput.md)[]

#### Defined in

[src/neuroglancer/webgl/shader.ts:143](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/shader.ts#L143)

___

### vertexShader

• **vertexShader**: [`WebGLShader`](../modules/main_module._internal_.md#webglshader)

#### Defined in

[src/neuroglancer/webgl/shader.ts:137](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/shader.ts#L137)

___

### vertexShaderInputBinders

• **vertexShaderInputBinders**: `Object` = `{}`

#### Index signature

▪ [name: `string`]: [`VertexShaderInputBinder`](../interfaces/neuroglancer_webgl_shader.VertexShaderInputBinder.md)

#### Defined in

[src/neuroglancer/webgl/shader.ts:142](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/shader.ts#L142)

___

### vertexSource

• **vertexSource**: `string`

#### Defined in

[src/neuroglancer/webgl/shader.ts:146](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/shader.ts#L146)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`ShaderProgram`](neuroglancer_webgl_shader.ShaderProgram.md)

#### Returns

[`ShaderProgram`](neuroglancer_webgl_shader.ShaderProgram.md)

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[addRef](neuroglancer_util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

___

### attribute

▸ **attribute**(`name`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`number`

#### Defined in

[src/neuroglancer/webgl/shader.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/shader.ts#L199)

___

### bind

▸ **bind**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/shader.ts:207](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/shader.ts#L207)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[dispose](neuroglancer_util_disposable.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposed](neuroglancer_util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/webgl/shader.ts:212](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/shader.ts#L212)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCountReachedZero](neuroglancer_util_disposable.RefCounted.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L66)

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

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L100)

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

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L76)

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

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L95)

___

### textureUnit

▸ **textureUnit**(`symbol`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `symbol` | `Symbol` |

#### Returns

`number`

#### Defined in

[src/neuroglancer/webgl/shader.ts:203](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/shader.ts#L203)

___

### uniform

▸ **uniform**(`name`): [`WebGLUniformLocation`](../modules/main_module._internal_.md#webgluniformlocation)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`WebGLUniformLocation`](../modules/main_module._internal_.md#webgluniformlocation)

#### Defined in

[src/neuroglancer/webgl/shader.ts:195](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/shader.ts#L195)

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

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L85)
