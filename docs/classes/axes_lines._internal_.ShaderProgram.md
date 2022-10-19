[neuroglancer](../README.md) / [Modules](../modules.md) / [axes\_lines](../modules/axes_lines.md) / [<internal\>](../modules/axes_lines._internal_.md) / ShaderProgram

# Class: ShaderProgram

[axes_lines](../modules/axes_lines.md).[<internal>](../modules/axes_lines._internal_.md).ShaderProgram

## Hierarchy

- [`RefCounted`](axes_lines._internal_.RefCounted.md)

  ↳ **`ShaderProgram`**

## Table of contents

### Constructors

- [constructor](axes_lines._internal_.ShaderProgram.md#constructor)

### Properties

- [attributes](axes_lines._internal_.ShaderProgram.md#attributes)
- [disposedStacks](axes_lines._internal_.ShaderProgram.md#disposedstacks)
- [fragmentShader](axes_lines._internal_.ShaderProgram.md#fragmentshader)
- [fragmentSource](axes_lines._internal_.ShaderProgram.md#fragmentsource)
- [gl](axes_lines._internal_.ShaderProgram.md#gl)
- [program](axes_lines._internal_.ShaderProgram.md#program)
- [refCount](axes_lines._internal_.ShaderProgram.md#refcount)
- [textureUnits](axes_lines._internal_.ShaderProgram.md#textureunits)
- [uniforms](axes_lines._internal_.ShaderProgram.md#uniforms)
- [vertexDebugOutputs](axes_lines._internal_.ShaderProgram.md#vertexdebugoutputs)
- [vertexShader](axes_lines._internal_.ShaderProgram.md#vertexshader)
- [vertexShaderInputBinders](axes_lines._internal_.ShaderProgram.md#vertexshaderinputbinders)
- [vertexSource](axes_lines._internal_.ShaderProgram.md#vertexsource)
- [wasDisposed](axes_lines._internal_.ShaderProgram.md#wasdisposed)

### Methods

- [addRef](axes_lines._internal_.ShaderProgram.md#addref)
- [attribute](axes_lines._internal_.ShaderProgram.md#attribute)
- [bind](axes_lines._internal_.ShaderProgram.md#bind)
- [dispose](axes_lines._internal_.ShaderProgram.md#dispose)
- [disposed](axes_lines._internal_.ShaderProgram.md#disposed)
- [refCountReachedZero](axes_lines._internal_.ShaderProgram.md#refcountreachedzero)
- [registerCancellable](axes_lines._internal_.ShaderProgram.md#registercancellable)
- [registerDisposer](axes_lines._internal_.ShaderProgram.md#registerdisposer)
- [registerEventListener](axes_lines._internal_.ShaderProgram.md#registereventlistener)
- [textureUnit](axes_lines._internal_.ShaderProgram.md#textureunit)
- [uniform](axes_lines._internal_.ShaderProgram.md#uniform)
- [unregisterDisposer](axes_lines._internal_.ShaderProgram.md#unregisterdisposer)

## Constructors

### constructor

• **new ShaderProgram**(`gl`, `vertexSource`, `fragmentSource`, `uniformNames?`, `attributeNames?`, `vertexDebugOutputs?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/axes_lines._internal_.GL.md) |
| `vertexSource` | `string` |
| `fragmentSource` | `string` |
| `uniformNames?` | `string`[] |
| `attributeNames?` | `string`[] |
| `vertexDebugOutputs?` | [`VertexDebugOutput`](../interfaces/axes_lines._internal_.VertexDebugOutput.md)[] |

#### Overrides

[RefCounted](axes_lines._internal_.RefCounted.md).[constructor](axes_lines._internal_.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/webgl/shader.ts:145](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader.ts#L145)

## Properties

### attributes

• **attributes**: `Map`<`string`, `number`\>

#### Defined in

[src/neuroglancer/webgl/shader.ts:139](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader.ts#L139)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[disposedStacks](axes_lines._internal_.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L52)

___

### fragmentShader

• **fragmentShader**: [`WebGLShader`](../modules/axes_lines._internal_.md#webglshader)

#### Defined in

[src/neuroglancer/webgl/shader.ts:138](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader.ts#L138)

___

### fragmentSource

• **fragmentSource**: `string`

___

### gl

• **gl**: [`GL`](../interfaces/axes_lines._internal_.GL.md)

___

### program

• **program**: [`WebGLProgram`](../modules/axes_lines._internal_.md#webglprogram)

#### Defined in

[src/neuroglancer/webgl/shader.ts:136](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader.ts#L136)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[refCount](axes_lines._internal_.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L45)

___

### textureUnits

• **textureUnits**: `Map`<`any`, `number`\>

#### Defined in

[src/neuroglancer/webgl/shader.ts:141](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader.ts#L141)

___

### uniforms

• **uniforms**: `Map`<`string`, ``null`` \| [`WebGLUniformLocation`](../modules/axes_lines._internal_.md#webgluniformlocation)\>

#### Defined in

[src/neuroglancer/webgl/shader.ts:140](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader.ts#L140)

___

### vertexDebugOutputs

• `Optional` **vertexDebugOutputs**: [`VertexDebugOutput`](../interfaces/axes_lines._internal_.VertexDebugOutput.md)[]

#### Defined in

[src/neuroglancer/webgl/shader.ts:143](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader.ts#L143)

___

### vertexShader

• **vertexShader**: [`WebGLShader`](../modules/axes_lines._internal_.md#webglshader)

#### Defined in

[src/neuroglancer/webgl/shader.ts:137](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader.ts#L137)

___

### vertexShaderInputBinders

• **vertexShaderInputBinders**: `Object` = `{}`

#### Index signature

▪ [name: `string`]: [`VertexShaderInputBinder`](../interfaces/axes_lines._internal_.VertexShaderInputBinder.md)

#### Defined in

[src/neuroglancer/webgl/shader.ts:142](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader.ts#L142)

___

### vertexSource

• **vertexSource**: `string`

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[wasDisposed](axes_lines._internal_.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`ShaderProgram`](axes_lines._internal_.ShaderProgram.md)

#### Returns

[`ShaderProgram`](axes_lines._internal_.ShaderProgram.md)

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[addRef](axes_lines._internal_.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L48)

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

[src/neuroglancer/webgl/shader.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader.ts#L199)

___

### bind

▸ **bind**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/shader.ts:207](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader.ts#L207)

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

#### Overrides

[RefCounted](axes_lines._internal_.RefCounted.md).[disposed](axes_lines._internal_.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/webgl/shader.ts:212](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader.ts#L212)

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

### textureUnit

▸ **textureUnit**(`symbol`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `symbol` | `Symbol` |

#### Returns

`number`

#### Defined in

[src/neuroglancer/webgl/shader.ts:203](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader.ts#L203)

___

### uniform

▸ **uniform**(`name`): [`WebGLUniformLocation`](../modules/axes_lines._internal_.md#webgluniformlocation)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`WebGLUniformLocation`](../modules/axes_lines._internal_.md#webgluniformlocation)

#### Defined in

[src/neuroglancer/webgl/shader.ts:195](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/shader.ts#L195)

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
