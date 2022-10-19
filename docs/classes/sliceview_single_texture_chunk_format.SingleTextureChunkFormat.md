[neuroglancer](../README.md) / [Modules](../modules.md) / [sliceview/single\_texture\_chunk\_format](../modules/sliceview_single_texture_chunk_format.md) / SingleTextureChunkFormat

# Class: SingleTextureChunkFormat<TextureLayout\>

[sliceview/single_texture_chunk_format](../modules/sliceview_single_texture_chunk_format.md).SingleTextureChunkFormat

## Type parameters

| Name | Type |
| :------ | :------ |
| `TextureLayout` | extends [`Disposable`](../interfaces/util_disposable.Disposable.md) |

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`SingleTextureChunkFormat`**

  ↳↳ [`ChunkFormat`](sliceview_uncompressed_chunk_format.ChunkFormat.md)

## Implements

- [`ChunkFormat`](../interfaces/datasource._internal_.ChunkFormat.md)

## Table of contents

### Constructors

- [constructor](sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md#constructor)

### Properties

- [dataType](sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md#datatype)
- [disposedStacks](sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md#disposedstacks)
- [refCount](sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md#refcount)
- [shaderKey](sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md#shaderkey)
- [wasDisposed](sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md#wasdisposed)

### Accessors

- [shaderSamplerType](sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md#shadersamplertype)

### Methods

- [addRef](sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md#addref)
- [beginDrawing](sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md#begindrawing)
- [beginSource](sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md#beginsource)
- [bindChunk](sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md#bindchunk)
- [defineShader](sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md#defineshader)
- [dispose](sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md#dispose)
- [disposed](sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md#disposed)
- [endDrawing](sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md#enddrawing)
- [refCountReachedZero](sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md#refcountreachedzero)
- [registerCancellable](sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md#registercancellable)
- [registerDisposer](sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md#registerdisposer)
- [registerEventListener](sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md#registereventlistener)
- [setTextureData](sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md#settexturedata)
- [setupTextureLayout](sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md#setuptexturelayout)
- [unregisterDisposer](sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md#unregisterdisposer)

## Constructors

### constructor

• **new SingleTextureChunkFormat**<`TextureLayout`\>(`shaderKey`, `dataType`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TextureLayout` | extends [`Disposable`](../interfaces/util_disposable.Disposable.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `shaderKey` | `string` |
| `dataType` | [`DataType`](../enums/util_data_type.DataType.md) |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/sliceview/single_texture_chunk_format.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/single_texture_chunk_format.ts#L30)

## Properties

### dataType

• **dataType**: [`DataType`](../enums/util_data_type.DataType.md)

#### Implementation of

[ChunkFormat](../interfaces/datasource._internal_.ChunkFormat.md).[dataType](../interfaces/datasource._internal_.ChunkFormat.md#datatype)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### shaderKey

• **shaderKey**: `string`

#### Implementation of

[ChunkFormat](../interfaces/datasource._internal_.ChunkFormat.md).[shaderKey](../interfaces/datasource._internal_.ChunkFormat.md#shaderkey)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### shaderSamplerType

• `Abstract` `get` **shaderSamplerType**(): [`ShaderSamplerType`](../modules/webgl_shader.md#shadersamplertype)

#### Returns

[`ShaderSamplerType`](../modules/webgl_shader.md#shadersamplertype)

#### Defined in

[src/neuroglancer/sliceview/single_texture_chunk_format.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/single_texture_chunk_format.ts#L39)

## Methods

### addRef

▸ **addRef**(): [`SingleTextureChunkFormat`](sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md)<`TextureLayout`\>

#### Returns

[`SingleTextureChunkFormat`](sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md)<`TextureLayout`\>

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[addRef](util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### beginDrawing

▸ **beginDrawing**(`gl`, `shader`): `void`

Called once per RenderLayer when starting to draw chunks, on the ChunkFormat of the first
source.  This is not called before each source is drawn.

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/webgl_context.GL.md) |
| `shader` | [`ShaderProgram`](webgl_shader.ShaderProgram.md) |

#### Returns

`void`

#### Implementation of

[ChunkFormat](../interfaces/datasource._internal_.ChunkFormat.md).[beginDrawing](../interfaces/datasource._internal_.ChunkFormat.md#begindrawing)

#### Defined in

[src/neuroglancer/sliceview/single_texture_chunk_format.ts:41](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/single_texture_chunk_format.ts#L41)

___

### beginSource

▸ **beginSource**(`_gl`, `_shader`): `void`

Does nothing, but may be overridden by subclass.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_gl` | [`GL`](../interfaces/webgl_context.GL.md) |
| `_shader` | [`ShaderProgram`](webgl_shader.ShaderProgram.md) |

#### Returns

`void`

#### Implementation of

[ChunkFormat](../interfaces/datasource._internal_.ChunkFormat.md).[beginSource](../interfaces/datasource._internal_.ChunkFormat.md#beginsource)

#### Defined in

[src/neuroglancer/sliceview/single_texture_chunk_format.ts:80](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/single_texture_chunk_format.ts#L80)

___

### bindChunk

▸ **bindChunk**<`Data`\>(`gl`, `shader`, `chunk`, `fixedChunkPosition`, `chunkDisplaySubspaceDimensions`, `channelDimensions`, `newSource`): `void`

Called just before drawing each chunk, on the ChunkFormat .

#### Type parameters

| Name |
| :------ |
| `Data` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/webgl_context.GL.md) |
| `shader` | [`ShaderProgram`](webgl_shader.ShaderProgram.md) |
| `chunk` | [`SingleTextureVolumeChunk`](sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md)<`Data`, `TextureLayout`\> |
| `fixedChunkPosition` | `Uint32Array` |
| `chunkDisplaySubspaceDimensions` | readonly `number`[] |
| `channelDimensions` | readonly `number`[] |
| `newSource` | `boolean` |

#### Returns

`void`

#### Implementation of

[ChunkFormat](../interfaces/datasource._internal_.ChunkFormat.md).[bindChunk](../interfaces/datasource._internal_.ChunkFormat.md#bindchunk)

#### Defined in

[src/neuroglancer/sliceview/single_texture_chunk_format.ts:60](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/single_texture_chunk_format.ts#L60)

___

### defineShader

▸ **defineShader**(`builder`, `numChannelDimensions`): `void`

Called on the ChunkFormat of the first source of a RenderLayer.

This should define a fragment shader function:

  value_type getDataValueAt(ivec3 position, int channelIndex...);

where value_type is `getShaderType(this.dataType)`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | [`ShaderBuilder`](webgl_shader.ShaderBuilder.md) |
| `numChannelDimensions` | `number` |

#### Returns

`void`

#### Implementation of

[ChunkFormat](../interfaces/datasource._internal_.ChunkFormat.md).[defineShader](../interfaces/datasource._internal_.ChunkFormat.md#defineshader)

#### Defined in

[src/neuroglancer/sliceview/single_texture_chunk_format.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/single_texture_chunk_format.ts#L34)

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

### endDrawing

▸ **endDrawing**(`gl`, `shader`): `void`

Called once after all chunks have been drawn, on the ChunkFormat of the first source.

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/webgl_context.GL.md) |
| `shader` | [`ShaderProgram`](webgl_shader.ShaderProgram.md) |

#### Returns

`void`

#### Implementation of

[ChunkFormat](../interfaces/datasource._internal_.ChunkFormat.md).[endDrawing](../interfaces/datasource._internal_.ChunkFormat.md#enddrawing)

#### Defined in

[src/neuroglancer/sliceview/single_texture_chunk_format.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/single_texture_chunk_format.ts#L47)

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

### setTextureData

▸ `Abstract` **setTextureData**(`gl`, `textureLayout`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/webgl_context.GL.md) |
| `textureLayout` | `TextureLayout` |
| `data` | [`TypedArray`](../modules/util_array.md#typedarray) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/single_texture_chunk_format.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/single_texture_chunk_format.ts#L75)

___

### setupTextureLayout

▸ `Abstract` **setupTextureLayout**(`gl`, `shader`, `textureLayout`, `fixedChunkPosition`, `chunkDisplaySubspaceDimensions`, `channelDimensions`): `void`

Called each time textureLayout changes while drawing chunks.

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/webgl_context.GL.md) |
| `shader` | [`ShaderProgram`](webgl_shader.ShaderProgram.md) |
| `textureLayout` | `TextureLayout` |
| `fixedChunkPosition` | `Uint32Array` |
| `chunkDisplaySubspaceDimensions` | readonly `number`[] |
| `channelDimensions` | readonly `number`[] |

#### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/single_texture_chunk_format.ts:55](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/single_texture_chunk_format.ts#L55)

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
