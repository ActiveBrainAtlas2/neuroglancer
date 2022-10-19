[neuroglancer](../README.md) / [Modules](../modules.md) / [sliceview/uncompressed\_chunk\_format](../modules/sliceview_uncompressed_chunk_format.md) / ChunkFormat

# Class: ChunkFormat

[sliceview/uncompressed_chunk_format](../modules/sliceview_uncompressed_chunk_format.md).ChunkFormat

## Hierarchy

- [`SingleTextureChunkFormat`](sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md)<[`TextureLayout`](sliceview_uncompressed_chunk_format._internal_.TextureLayout.md)\>

  ↳ **`ChunkFormat`**

## Implements

- [`TextureFormat`](webgl_texture_access.TextureFormat.md)

## Table of contents

### Constructors

- [constructor](sliceview_uncompressed_chunk_format.ChunkFormat.md#constructor)

### Properties

- [arrayConstructor](sliceview_uncompressed_chunk_format.ChunkFormat.md#arrayconstructor)
- [arrayElementsPerTexel](sliceview_uncompressed_chunk_format.ChunkFormat.md#arrayelementspertexel)
- [dataType](sliceview_uncompressed_chunk_format.ChunkFormat.md#datatype)
- [disposedStacks](sliceview_uncompressed_chunk_format.ChunkFormat.md#disposedstacks)
- [refCount](sliceview_uncompressed_chunk_format.ChunkFormat.md#refcount)
- [samplerPrefix](sliceview_uncompressed_chunk_format.ChunkFormat.md#samplerprefix)
- [shaderKey](sliceview_uncompressed_chunk_format.ChunkFormat.md#shaderkey)
- [shaderSamplerType](sliceview_uncompressed_chunk_format.ChunkFormat.md#shadersamplertype)
- [texelType](sliceview_uncompressed_chunk_format.ChunkFormat.md#texeltype)
- [texelsPerElement](sliceview_uncompressed_chunk_format.ChunkFormat.md#texelsperelement)
- [textureAccessHelper](sliceview_uncompressed_chunk_format.ChunkFormat.md#textureaccesshelper)
- [textureDims](sliceview_uncompressed_chunk_format.ChunkFormat.md#texturedims)
- [textureFormat](sliceview_uncompressed_chunk_format.ChunkFormat.md#textureformat)
- [textureInternalFormat](sliceview_uncompressed_chunk_format.ChunkFormat.md#textureinternalformat)
- [wasDisposed](sliceview_uncompressed_chunk_format.ChunkFormat.md#wasdisposed)

### Methods

- [addRef](sliceview_uncompressed_chunk_format.ChunkFormat.md#addref)
- [beginDrawing](sliceview_uncompressed_chunk_format.ChunkFormat.md#begindrawing)
- [beginSource](sliceview_uncompressed_chunk_format.ChunkFormat.md#beginsource)
- [bindChunk](sliceview_uncompressed_chunk_format.ChunkFormat.md#bindchunk)
- [defineShader](sliceview_uncompressed_chunk_format.ChunkFormat.md#defineshader)
- [dispose](sliceview_uncompressed_chunk_format.ChunkFormat.md#dispose)
- [disposed](sliceview_uncompressed_chunk_format.ChunkFormat.md#disposed)
- [endDrawing](sliceview_uncompressed_chunk_format.ChunkFormat.md#enddrawing)
- [getTextureLayout](sliceview_uncompressed_chunk_format.ChunkFormat.md#gettexturelayout)
- [refCountReachedZero](sliceview_uncompressed_chunk_format.ChunkFormat.md#refcountreachedzero)
- [registerCancellable](sliceview_uncompressed_chunk_format.ChunkFormat.md#registercancellable)
- [registerDisposer](sliceview_uncompressed_chunk_format.ChunkFormat.md#registerdisposer)
- [registerEventListener](sliceview_uncompressed_chunk_format.ChunkFormat.md#registereventlistener)
- [setTextureData](sliceview_uncompressed_chunk_format.ChunkFormat.md#settexturedata)
- [setupTextureLayout](sliceview_uncompressed_chunk_format.ChunkFormat.md#setuptexturelayout)
- [unregisterDisposer](sliceview_uncompressed_chunk_format.ChunkFormat.md#unregisterdisposer)
- [get](sliceview_uncompressed_chunk_format.ChunkFormat.md#get)

## Constructors

### constructor

• **new ChunkFormat**(`_gl`, `dataType`, `key`, `textureDims`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_gl` | [`GL`](../interfaces/webgl_context.GL.md) |
| `dataType` | [`DataType`](../enums/util_data_type.DataType.md) |
| `key` | `string` |
| `textureDims` | `number` |

#### Overrides

[SingleTextureChunkFormat](sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md).[constructor](sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md#constructor)

#### Defined in

[src/neuroglancer/sliceview/uncompressed_chunk_format.ts:89](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/uncompressed_chunk_format.ts#L89)

## Properties

### arrayConstructor

• **arrayConstructor**: [`TypedArrayConstructor`](../modules/util_array.md#typedarrayconstructor)

#### Implementation of

TextureFormat.arrayConstructor

#### Defined in

[src/neuroglancer/sliceview/uncompressed_chunk_format.ts:79](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/uncompressed_chunk_format.ts#L79)

___

### arrayElementsPerTexel

• **arrayElementsPerTexel**: `number`

#### Implementation of

TextureFormat.arrayElementsPerTexel

#### Defined in

[src/neuroglancer/sliceview/uncompressed_chunk_format.ts:78](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/uncompressed_chunk_format.ts#L78)

___

### dataType

• **dataType**: [`DataType`](../enums/util_data_type.DataType.md)

#### Inherited from

[SingleTextureChunkFormat](sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md).[dataType](sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md#datatype)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[SingleTextureChunkFormat](sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md).[disposedStacks](sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[SingleTextureChunkFormat](sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md).[refCount](sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### samplerPrefix

• **samplerPrefix**: [`ShaderSamplerPrefix`](../modules/webgl_shader.md#shadersamplerprefix)

#### Implementation of

TextureFormat.samplerPrefix

#### Defined in

[src/neuroglancer/sliceview/uncompressed_chunk_format.ts:80](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/uncompressed_chunk_format.ts#L80)

___

### shaderKey

• **shaderKey**: `string`

#### Inherited from

[SingleTextureChunkFormat](sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md).[shaderKey](sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md#shaderkey)

___

### shaderSamplerType

• **shaderSamplerType**: [`ShaderSamplerType`](../modules/webgl_shader.md#shadersamplertype)

#### Overrides

[SingleTextureChunkFormat](sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md).[shaderSamplerType](sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md#shadersamplertype)

#### Defined in

[src/neuroglancer/sliceview/uncompressed_chunk_format.ts:81](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/uncompressed_chunk_format.ts#L81)

___

### texelType

• **texelType**: `number`

#### Implementation of

TextureFormat.texelType

#### Defined in

[src/neuroglancer/sliceview/uncompressed_chunk_format.ts:77](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/uncompressed_chunk_format.ts#L77)

___

### texelsPerElement

• **texelsPerElement**: `number`

#### Implementation of

TextureFormat.texelsPerElement

#### Defined in

[src/neuroglancer/sliceview/uncompressed_chunk_format.ts:74](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/uncompressed_chunk_format.ts#L74)

___

### textureAccessHelper

• `Private` **textureAccessHelper**: [`TextureAccessHelper`](webgl_texture_access.TextureAccessHelper.md)

#### Defined in

[src/neuroglancer/sliceview/uncompressed_chunk_format.ts:82](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/uncompressed_chunk_format.ts#L82)

___

### textureDims

• **textureDims**: `number`

___

### textureFormat

• **textureFormat**: `number`

#### Implementation of

TextureFormat.textureFormat

#### Defined in

[src/neuroglancer/sliceview/uncompressed_chunk_format.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/uncompressed_chunk_format.ts#L76)

___

### textureInternalFormat

• **textureInternalFormat**: `number`

#### Implementation of

TextureFormat.textureInternalFormat

#### Defined in

[src/neuroglancer/sliceview/uncompressed_chunk_format.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/uncompressed_chunk_format.ts#L75)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[SingleTextureChunkFormat](sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md).[wasDisposed](sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`ChunkFormat`](sliceview_uncompressed_chunk_format.ChunkFormat.md)

#### Returns

[`ChunkFormat`](sliceview_uncompressed_chunk_format.ChunkFormat.md)

#### Inherited from

[SingleTextureChunkFormat](sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md).[addRef](sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md#addref)

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

#### Inherited from

[SingleTextureChunkFormat](sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md).[beginDrawing](sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md#begindrawing)

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

#### Inherited from

[SingleTextureChunkFormat](sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md).[beginSource](sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md#beginsource)

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
| `chunk` | [`SingleTextureVolumeChunk`](sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md)<`Data`, [`TextureLayout`](sliceview_uncompressed_chunk_format._internal_.TextureLayout.md)\> |
| `fixedChunkPosition` | `Uint32Array` |
| `chunkDisplaySubspaceDimensions` | readonly `number`[] |
| `channelDimensions` | readonly `number`[] |
| `newSource` | `boolean` |

#### Returns

`void`

#### Inherited from

[SingleTextureChunkFormat](sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md).[bindChunk](sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md#bindchunk)

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

#### Overrides

[SingleTextureChunkFormat](sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md).[defineShader](sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md#defineshader)

#### Defined in

[src/neuroglancer/sliceview/uncompressed_chunk_format.ts:96](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/uncompressed_chunk_format.ts#L96)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[SingleTextureChunkFormat](sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md).[dispose](sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[SingleTextureChunkFormat](sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md).[disposed](sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md#disposed)

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

#### Inherited from

[SingleTextureChunkFormat](sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md).[endDrawing](sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md#enddrawing)

#### Defined in

[src/neuroglancer/sliceview/single_texture_chunk_format.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/single_texture_chunk_format.ts#L47)

___

### getTextureLayout

▸ **getTextureLayout**(`gl`, `chunkDataSize`): [`TextureLayout`](sliceview_uncompressed_chunk_format._internal_.TextureLayout.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/webgl_context.GL.md) |
| `chunkDataSize` | `Uint32Array` |

#### Returns

[`TextureLayout`](sliceview_uncompressed_chunk_format._internal_.TextureLayout.md)

#### Defined in

[src/neuroglancer/sliceview/uncompressed_chunk_format.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/uncompressed_chunk_format.ts#L175)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[SingleTextureChunkFormat](sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md).[refCountReachedZero](sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md#refcountreachedzero)

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

[SingleTextureChunkFormat](sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md).[registerCancellable](sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md#registercancellable)

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

[SingleTextureChunkFormat](sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md).[registerDisposer](sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md#registerdisposer)

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

[SingleTextureChunkFormat](sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md).[registerEventListener](sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L95)

___

### setTextureData

▸ **setTextureData**(`gl`, `textureLayout`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/webgl_context.GL.md) |
| `textureLayout` | [`TextureLayout`](sliceview_uncompressed_chunk_format._internal_.TextureLayout.md) |
| `data` | [`TypedArray`](../modules/util_array.md#typedarray) |

#### Returns

`void`

#### Overrides

[SingleTextureChunkFormat](sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md).[setTextureData](sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md#settexturedata)

#### Defined in

[src/neuroglancer/sliceview/uncompressed_chunk_format.ts:179](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/uncompressed_chunk_format.ts#L179)

___

### setupTextureLayout

▸ **setupTextureLayout**(`gl`, `shader`, `textureLayout`, `fixedChunkPosition`, `chunkDisplaySubspaceDimensions`, `channelDimensions`): `void`

Called each time textureLayout changes while drawing chunks.

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/webgl_context.GL.md) |
| `shader` | [`ShaderProgram`](webgl_shader.ShaderProgram.md) |
| `textureLayout` | [`TextureLayout`](sliceview_uncompressed_chunk_format._internal_.TextureLayout.md) |
| `fixedChunkPosition` | `Uint32Array` |
| `chunkDisplaySubspaceDimensions` | readonly `number`[] |
| `channelDimensions` | readonly `number`[] |

#### Returns

`void`

#### Overrides

[SingleTextureChunkFormat](sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md).[setupTextureLayout](sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md#setuptexturelayout)

#### Defined in

[src/neuroglancer/sliceview/uncompressed_chunk_format.ts:135](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/uncompressed_chunk_format.ts#L135)

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

[SingleTextureChunkFormat](sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md).[unregisterDisposer](sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)

___

### get

▸ `Static` **get**(`gl`, `dataType`, `textureDims`): [`ChunkFormat`](sliceview_uncompressed_chunk_format.ChunkFormat.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/webgl_context.GL.md) |
| `dataType` | [`DataType`](../enums/util_data_type.DataType.md) |
| `textureDims` | `number` |

#### Returns

[`ChunkFormat`](sliceview_uncompressed_chunk_format.ChunkFormat.md)

#### Defined in

[src/neuroglancer/sliceview/uncompressed_chunk_format.ts:84](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/uncompressed_chunk_format.ts#L84)
