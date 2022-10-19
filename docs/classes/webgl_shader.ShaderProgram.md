[neuroglancer](../README.md) / [Modules](../modules.md) / [webgl/shader](../modules/webgl_shader.md) / ShaderProgram

# Class: ShaderProgram

[webgl/shader](../modules/webgl_shader.md).ShaderProgram

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`ShaderProgram`**

## Table of contents

### Constructors

- [constructor](webgl_shader.ShaderProgram.md#constructor)

### Properties

- [attributes](webgl_shader.ShaderProgram.md#attributes)
- [disposedStacks](webgl_shader.ShaderProgram.md#disposedstacks)
- [fragmentShader](webgl_shader.ShaderProgram.md#fragmentshader)
- [fragmentSource](webgl_shader.ShaderProgram.md#fragmentsource)
- [gl](webgl_shader.ShaderProgram.md#gl)
- [program](webgl_shader.ShaderProgram.md#program)
- [refCount](webgl_shader.ShaderProgram.md#refcount)
- [textureUnits](webgl_shader.ShaderProgram.md#textureunits)
- [uniforms](webgl_shader.ShaderProgram.md#uniforms)
- [vertexDebugOutputs](webgl_shader.ShaderProgram.md#vertexdebugoutputs)
- [vertexShader](webgl_shader.ShaderProgram.md#vertexshader)
- [vertexShaderInputBinders](webgl_shader.ShaderProgram.md#vertexshaderinputbinders)
- [vertexSource](webgl_shader.ShaderProgram.md#vertexsource)
- [wasDisposed](webgl_shader.ShaderProgram.md#wasdisposed)

### Methods

- [addRef](webgl_shader.ShaderProgram.md#addref)
- [attribute](webgl_shader.ShaderProgram.md#attribute)
- [bind](webgl_shader.ShaderProgram.md#bind)
- [dispose](webgl_shader.ShaderProgram.md#dispose)
- [disposed](webgl_shader.ShaderProgram.md#disposed)
- [refCountReachedZero](webgl_shader.ShaderProgram.md#refcountreachedzero)
- [registerCancellable](webgl_shader.ShaderProgram.md#registercancellable)
- [registerDisposer](webgl_shader.ShaderProgram.md#registerdisposer)
- [registerEventListener](webgl_shader.ShaderProgram.md#registereventlistener)
- [textureUnit](webgl_shader.ShaderProgram.md#textureunit)
- [uniform](webgl_shader.ShaderProgram.md#uniform)
- [unregisterDisposer](webgl_shader.ShaderProgram.md#unregisterdisposer)

## Constructors

### constructor

• **new ShaderProgram**(`gl`, `vertexSource`, `fragmentSource`, `uniformNames?`, `attributeNames?`, `vertexDebugOutputs?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/webgl_context.GL.md) |
| `vertexSource` | `string` |
| `fragmentSource` | `string` |
| `uniformNames?` | `string`[] |
| `attributeNames?` | `string`[] |
| `vertexDebugOutputs?` | [`VertexDebugOutput`](../interfaces/webgl_shader._internal_.VertexDebugOutput.md)[] |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/webgl/shader.ts:145](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader.ts#L145)

## Properties

### attributes

• **attributes**: `Map`<`string`, `number`\>

#### Defined in

[src/neuroglancer/webgl/shader.ts:139](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader.ts#L139)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### fragmentShader

• **fragmentShader**: [`WebGLShader`](../modules/annotation_annotation_layer_state._internal_.md#webglshader)

#### Defined in

[src/neuroglancer/webgl/shader.ts:138](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader.ts#L138)

___

### fragmentSource

• **fragmentSource**: `string`

___

### gl

• **gl**: [`GL`](../interfaces/webgl_context.GL.md)

___

### program

• **program**: [`WebGLProgram`](../modules/annotation_annotation_layer_state._internal_.md#webglprogram)

#### Defined in

[src/neuroglancer/webgl/shader.ts:136](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader.ts#L136)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### textureUnits

• **textureUnits**: `Map`<`any`, `number`\>

#### Defined in

[src/neuroglancer/webgl/shader.ts:141](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader.ts#L141)

___

### uniforms

• **uniforms**: `Map`<`string`, ``null`` \| [`WebGLUniformLocation`](../modules/annotation_annotation_layer_state._internal_.md#webgluniformlocation)\>

#### Defined in

[src/neuroglancer/webgl/shader.ts:140](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader.ts#L140)

___

### vertexDebugOutputs

• `Optional` **vertexDebugOutputs**: [`VertexDebugOutput`](../interfaces/webgl_shader._internal_.VertexDebugOutput.md)[]

#### Defined in

[src/neuroglancer/webgl/shader.ts:143](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader.ts#L143)

___

### vertexShader

• **vertexShader**: [`WebGLShader`](../modules/annotation_annotation_layer_state._internal_.md#webglshader)

#### Defined in

[src/neuroglancer/webgl/shader.ts:137](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader.ts#L137)

___

### vertexShaderInputBinders

• **vertexShaderInputBinders**: `Object` = `{}`

#### Index signature

▪ [name: `string`]: [`VertexShaderInputBinder`](../interfaces/webgl_shader.VertexShaderInputBinder.md)

#### Defined in

[src/neuroglancer/webgl/shader.ts:142](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader.ts#L142)

___

### vertexSource

• **vertexSource**: `string`

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`ShaderProgram`](webgl_shader.ShaderProgram.md)

#### Returns

[`ShaderProgram`](webgl_shader.ShaderProgram.md)

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[addRef](util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

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

[src/neuroglancer/webgl/shader.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader.ts#L199)

___

### bind

▸ **bind**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/shader.ts:207](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader.ts#L207)

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

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[disposed](util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/webgl/shader.ts:212](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader.ts#L212)

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

### textureUnit

▸ **textureUnit**(`symbol`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `symbol` | `Symbol` |

#### Returns

`number`

#### Defined in

[src/neuroglancer/webgl/shader.ts:203](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader.ts#L203)

___

### uniform

▸ **uniform**(`name`): [`WebGLUniformLocation`](../modules/annotation_annotation_layer_state._internal_.md#webgluniformlocation)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`WebGLUniformLocation`](../modules/annotation_annotation_layer_state._internal_.md#webgluniformlocation)

#### Defined in

[src/neuroglancer/webgl/shader.ts:195](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader.ts#L195)

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
