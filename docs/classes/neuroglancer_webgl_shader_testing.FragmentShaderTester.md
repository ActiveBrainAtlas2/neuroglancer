[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/webgl/shader\_testing](../modules/neuroglancer_webgl_shader_testing.md) / FragmentShaderTester

# Class: FragmentShaderTester<Inputs, Outputs\>

[neuroglancer/webgl/shader_testing](../modules/neuroglancer_webgl_shader_testing.md).FragmentShaderTester

## Type parameters

| Name | Type |
| :------ | :------ |
| `Inputs` | extends [`FragmentShaderTestOutputs`](../interfaces/neuroglancer_webgl_shader_testing.FragmentShaderTestOutputs.md) |
| `Outputs` | extends [`FragmentShaderTestOutputs`](../interfaces/neuroglancer_webgl_shader_testing.FragmentShaderTestOutputs.md) |

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`FragmentShaderTester`**

## Table of contents

### Constructors

- [constructor](neuroglancer_webgl_shader_testing.FragmentShaderTester.md#constructor)

### Properties

- [builder](neuroglancer_webgl_shader_testing.FragmentShaderTester.md#builder)
- [disposedStacks](neuroglancer_webgl_shader_testing.FragmentShaderTester.md#disposedstacks)
- [gl](neuroglancer_webgl_shader_testing.FragmentShaderTester.md#gl)
- [inputs](neuroglancer_webgl_shader_testing.FragmentShaderTester.md#inputs)
- [offscreenFramebuffer](neuroglancer_webgl_shader_testing.FragmentShaderTester.md#offscreenframebuffer)
- [outputs](neuroglancer_webgl_shader_testing.FragmentShaderTester.md#outputs)
- [refCount](neuroglancer_webgl_shader_testing.FragmentShaderTester.md#refcount)
- [shader\_](neuroglancer_webgl_shader_testing.FragmentShaderTester.md#shader_)
- [vertexPositionsBuffer](neuroglancer_webgl_shader_testing.FragmentShaderTester.md#vertexpositionsbuffer)
- [wasDisposed](neuroglancer_webgl_shader_testing.FragmentShaderTester.md#wasdisposed)

### Accessors

- [shader](neuroglancer_webgl_shader_testing.FragmentShaderTester.md#shader)
- [values](neuroglancer_webgl_shader_testing.FragmentShaderTester.md#values)

### Methods

- [addRef](neuroglancer_webgl_shader_testing.FragmentShaderTester.md#addref)
- [build](neuroglancer_webgl_shader_testing.FragmentShaderTester.md#build)
- [dispose](neuroglancer_webgl_shader_testing.FragmentShaderTester.md#dispose)
- [disposed](neuroglancer_webgl_shader_testing.FragmentShaderTester.md#disposed)
- [execute](neuroglancer_webgl_shader_testing.FragmentShaderTester.md#execute)
- [read](neuroglancer_webgl_shader_testing.FragmentShaderTester.md#read)
- [refCountReachedZero](neuroglancer_webgl_shader_testing.FragmentShaderTester.md#refcountreachedzero)
- [registerCancellable](neuroglancer_webgl_shader_testing.FragmentShaderTester.md#registercancellable)
- [registerDisposer](neuroglancer_webgl_shader_testing.FragmentShaderTester.md#registerdisposer)
- [registerEventListener](neuroglancer_webgl_shader_testing.FragmentShaderTester.md#registereventlistener)
- [unregisterDisposer](neuroglancer_webgl_shader_testing.FragmentShaderTester.md#unregisterdisposer)

## Constructors

### constructor

• **new FragmentShaderTester**<`Inputs`, `Outputs`\>(`gl`, `inputs`, `outputs`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Inputs` | extends [`FragmentShaderTestOutputs`](../interfaces/neuroglancer_webgl_shader_testing.FragmentShaderTestOutputs.md) |
| `Outputs` | extends [`FragmentShaderTestOutputs`](../interfaces/neuroglancer_webgl_shader_testing.FragmentShaderTestOutputs.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |
| `inputs` | `Inputs` |
| `outputs` | `Outputs` |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/webgl/shader_testing.ts:97](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader_testing.ts#L97)

## Properties

### builder

• **builder**: [`ShaderBuilder`](neuroglancer_webgl_shader.ShaderBuilder.md)

#### Defined in

[src/neuroglancer/webgl/shader_testing.ts:92](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader_testing.ts#L92)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### gl

• **gl**: [`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

___

### inputs

• **inputs**: `Inputs`

___

### offscreenFramebuffer

• **offscreenFramebuffer**: [`FramebufferConfiguration`](neuroglancer_webgl_offscreen.FramebufferConfiguration.md)<[`TextureBuffer`](neuroglancer_webgl_offscreen.TextureBuffer.md), [`DepthRenderbuffer`](neuroglancer_webgl_offscreen.DepthRenderbuffer.md) \| [`DepthTextureBuffer`](neuroglancer_webgl_offscreen.DepthTextureBuffer.md)\>

#### Defined in

[src/neuroglancer/webgl/shader_testing.ts:94](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader_testing.ts#L94)

___

### outputs

• **outputs**: `Outputs`

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### shader\_

• `Private` **shader\_**: [`ShaderProgram`](neuroglancer_webgl_shader.ShaderProgram.md)

#### Defined in

[src/neuroglancer/webgl/shader_testing.ts:93](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader_testing.ts#L93)

___

### vertexPositionsBuffer

• `Private` **vertexPositionsBuffer**: [`Buffer`](neuroglancer_webgl_buffer.Buffer.md)

#### Defined in

[src/neuroglancer/webgl/shader_testing.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader_testing.ts#L95)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### shader

• `get` **shader**(): [`ShaderProgram`](neuroglancer_webgl_shader.ShaderProgram.md)

#### Returns

[`ShaderProgram`](neuroglancer_webgl_shader.ShaderProgram.md)

#### Defined in

[src/neuroglancer/webgl/shader_testing.ts:165](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader_testing.ts#L165)

___

### values

• `get` **values**(): { [P in string \| number \| symbol]: ShaderIoJavascriptType<Outputs[P]\> }

#### Returns

{ [P in string \| number \| symbol]: ShaderIoJavascriptType<Outputs[P]\> }

#### Defined in

[src/neuroglancer/webgl/shader_testing.ts:227](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader_testing.ts#L227)

## Methods

### addRef

▸ **addRef**(): [`FragmentShaderTester`](neuroglancer_webgl_shader_testing.FragmentShaderTester.md)<`Inputs`, `Outputs`\>

#### Returns

[`FragmentShaderTester`](neuroglancer_webgl_shader_testing.FragmentShaderTester.md)<`Inputs`, `Outputs`\>

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[addRef](neuroglancer_util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L48)

___

### build

▸ **build**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/shader_testing.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader_testing.ts#L172)

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

### execute

▸ **execute**(`inputValues?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputValues?` | { [P in string \| number \| symbol]: ShaderIoJavascriptType<Inputs[P]\> } |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/shader_testing.ts:176](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader_testing.ts#L176)

___

### read

▸ **read**(`key`): `number` \| `boolean` \| [`Uint64`](neuroglancer_util_uint64.Uint64.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | keyof `Outputs` |

#### Returns

`number` \| `boolean` \| [`Uint64`](neuroglancer_util_uint64.Uint64.md)

#### Defined in

[src/neuroglancer/webgl/shader_testing.ts:235](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/shader_testing.ts#L235)

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
