[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/sliceview/uncompressed\_chunk\_format](../modules/neuroglancer_sliceview_uncompressed_chunk_format.md) / ChunkFormat

# Class: ChunkFormat

[neuroglancer/sliceview/uncompressed_chunk_format](../modules/neuroglancer_sliceview_uncompressed_chunk_format.md).ChunkFormat

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

- [`SingleTextureChunkFormat`](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md)<[`TextureLayout`](neuroglancer_sliceview_uncompressed_chunk_format._internal_.TextureLayout.md)\>

  ↳ **`ChunkFormat`**

## Implements

- [`TextureFormat`](neuroglancer_webgl_texture_access.TextureFormat.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_sliceview_uncompressed_chunk_format.ChunkFormat.md#constructor)

### Properties

- [arrayConstructor](neuroglancer_sliceview_uncompressed_chunk_format.ChunkFormat.md#arrayconstructor)
- [arrayElementsPerTexel](neuroglancer_sliceview_uncompressed_chunk_format.ChunkFormat.md#arrayelementspertexel)
- [dataType](neuroglancer_sliceview_uncompressed_chunk_format.ChunkFormat.md#datatype)
- [disposedStacks](neuroglancer_sliceview_uncompressed_chunk_format.ChunkFormat.md#disposedstacks)
- [refCount](neuroglancer_sliceview_uncompressed_chunk_format.ChunkFormat.md#refcount)
- [samplerPrefix](neuroglancer_sliceview_uncompressed_chunk_format.ChunkFormat.md#samplerprefix)
- [shaderKey](neuroglancer_sliceview_uncompressed_chunk_format.ChunkFormat.md#shaderkey)
- [shaderSamplerType](neuroglancer_sliceview_uncompressed_chunk_format.ChunkFormat.md#shadersamplertype)
- [texelType](neuroglancer_sliceview_uncompressed_chunk_format.ChunkFormat.md#texeltype)
- [texelsPerElement](neuroglancer_sliceview_uncompressed_chunk_format.ChunkFormat.md#texelsperelement)
- [textureAccessHelper](neuroglancer_sliceview_uncompressed_chunk_format.ChunkFormat.md#textureaccesshelper)
- [textureDims](neuroglancer_sliceview_uncompressed_chunk_format.ChunkFormat.md#texturedims)
- [textureFormat](neuroglancer_sliceview_uncompressed_chunk_format.ChunkFormat.md#textureformat)
- [textureInternalFormat](neuroglancer_sliceview_uncompressed_chunk_format.ChunkFormat.md#textureinternalformat)
- [wasDisposed](neuroglancer_sliceview_uncompressed_chunk_format.ChunkFormat.md#wasdisposed)

### Methods

- [addRef](neuroglancer_sliceview_uncompressed_chunk_format.ChunkFormat.md#addref)
- [beginDrawing](neuroglancer_sliceview_uncompressed_chunk_format.ChunkFormat.md#begindrawing)
- [beginSource](neuroglancer_sliceview_uncompressed_chunk_format.ChunkFormat.md#beginsource)
- [bindChunk](neuroglancer_sliceview_uncompressed_chunk_format.ChunkFormat.md#bindchunk)
- [defineShader](neuroglancer_sliceview_uncompressed_chunk_format.ChunkFormat.md#defineshader)
- [dispose](neuroglancer_sliceview_uncompressed_chunk_format.ChunkFormat.md#dispose)
- [disposed](neuroglancer_sliceview_uncompressed_chunk_format.ChunkFormat.md#disposed)
- [endDrawing](neuroglancer_sliceview_uncompressed_chunk_format.ChunkFormat.md#enddrawing)
- [getTextureLayout](neuroglancer_sliceview_uncompressed_chunk_format.ChunkFormat.md#gettexturelayout)
- [refCountReachedZero](neuroglancer_sliceview_uncompressed_chunk_format.ChunkFormat.md#refcountreachedzero)
- [registerCancellable](neuroglancer_sliceview_uncompressed_chunk_format.ChunkFormat.md#registercancellable)
- [registerDisposer](neuroglancer_sliceview_uncompressed_chunk_format.ChunkFormat.md#registerdisposer)
- [registerEventListener](neuroglancer_sliceview_uncompressed_chunk_format.ChunkFormat.md#registereventlistener)
- [setTextureData](neuroglancer_sliceview_uncompressed_chunk_format.ChunkFormat.md#settexturedata)
- [setupTextureLayout](neuroglancer_sliceview_uncompressed_chunk_format.ChunkFormat.md#setuptexturelayout)
- [unregisterDisposer](neuroglancer_sliceview_uncompressed_chunk_format.ChunkFormat.md#unregisterdisposer)
- [get](neuroglancer_sliceview_uncompressed_chunk_format.ChunkFormat.md#get)

## Constructors

### constructor

• **new ChunkFormat**(`_gl`, `dataType`, `key`, `textureDims`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |
| `dataType` | [`DataType`](../enums/neuroglancer_util_data_type.DataType.md) |
| `key` | `string` |
| `textureDims` | `number` |

#### Overrides

[SingleTextureChunkFormat](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md).[constructor](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md#constructor)

#### Defined in

[src/neuroglancer/sliceview/uncompressed_chunk_format.ts:89](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/uncompressed_chunk_format.ts#L89)

## Properties

### arrayConstructor

• **arrayConstructor**: [`TypedArrayConstructor`](../modules/neuroglancer_util_array.md#typedarrayconstructor)

TypedArray type that must be used when uploading the texture data.

#### Implementation of

[TextureFormat](neuroglancer_webgl_texture_access.TextureFormat.md).[arrayConstructor](neuroglancer_webgl_texture_access.TextureFormat.md#arrayconstructor)

#### Defined in

[src/neuroglancer/sliceview/uncompressed_chunk_format.ts:79](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/uncompressed_chunk_format.ts#L79)

___

### arrayElementsPerTexel

• **arrayElementsPerTexel**: `number`

Number of typed array elements per texel.

#### Implementation of

[TextureFormat](neuroglancer_webgl_texture_access.TextureFormat.md).[arrayElementsPerTexel](neuroglancer_webgl_texture_access.TextureFormat.md#arrayelementspertexel)

#### Defined in

[src/neuroglancer/sliceview/uncompressed_chunk_format.ts:78](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/uncompressed_chunk_format.ts#L78)

___

### dataType

• **dataType**: [`DataType`](../enums/neuroglancer_util_data_type.DataType.md)

#### Inherited from

[SingleTextureChunkFormat](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md).[dataType](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md#datatype)

#### Defined in

[src/neuroglancer/sliceview/single_texture_chunk_format.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/single_texture_chunk_format.ts#L30)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[SingleTextureChunkFormat](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md).[disposedStacks](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[SingleTextureChunkFormat](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md).[refCount](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### samplerPrefix

• **samplerPrefix**: [`ShaderSamplerPrefix`](../modules/neuroglancer_webgl_shader.md#shadersamplerprefix)

#### Implementation of

[TextureFormat](neuroglancer_webgl_texture_access.TextureFormat.md).[samplerPrefix](neuroglancer_webgl_texture_access.TextureFormat.md#samplerprefix)

#### Defined in

[src/neuroglancer/sliceview/uncompressed_chunk_format.ts:80](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/uncompressed_chunk_format.ts#L80)

___

### shaderKey

• **shaderKey**: `string`

#### Inherited from

[SingleTextureChunkFormat](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md).[shaderKey](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md#shaderkey)

#### Defined in

[src/neuroglancer/sliceview/single_texture_chunk_format.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/single_texture_chunk_format.ts#L30)

___

### shaderSamplerType

• **shaderSamplerType**: [`ShaderSamplerType`](../modules/neuroglancer_webgl_shader.md#shadersamplertype)

#### Overrides

[SingleTextureChunkFormat](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md).[shaderSamplerType](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md#shadersamplertype)

#### Defined in

[src/neuroglancer/sliceview/uncompressed_chunk_format.ts:81](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/uncompressed_chunk_format.ts#L81)

___

### texelType

• **texelType**: `number`

Texel type to specify when uploading the texture data.

#### Implementation of

[TextureFormat](neuroglancer_webgl_texture_access.TextureFormat.md).[texelType](neuroglancer_webgl_texture_access.TextureFormat.md#texeltype)

#### Defined in

[src/neuroglancer/sliceview/uncompressed_chunk_format.ts:77](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/uncompressed_chunk_format.ts#L77)

___

### texelsPerElement

• **texelsPerElement**: `number`

Number of texels per multi-channel element.

#### Implementation of

[TextureFormat](neuroglancer_webgl_texture_access.TextureFormat.md).[texelsPerElement](neuroglancer_webgl_texture_access.TextureFormat.md#texelsperelement)

#### Defined in

[src/neuroglancer/sliceview/uncompressed_chunk_format.ts:74](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/uncompressed_chunk_format.ts#L74)

___

### textureAccessHelper

• `Private` **textureAccessHelper**: [`TextureAccessHelper`](neuroglancer_webgl_texture_access.TextureAccessHelper.md)

#### Defined in

[src/neuroglancer/sliceview/uncompressed_chunk_format.ts:82](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/uncompressed_chunk_format.ts#L82)

___

### textureDims

• **textureDims**: `number`

#### Defined in

[src/neuroglancer/sliceview/uncompressed_chunk_format.ts:89](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/uncompressed_chunk_format.ts#L89)

___

### textureFormat

• **textureFormat**: `number`

Texture format to specify when uploading the texture data.

#### Implementation of

[TextureFormat](neuroglancer_webgl_texture_access.TextureFormat.md).[textureFormat](neuroglancer_webgl_texture_access.TextureFormat.md#textureformat)

#### Defined in

[src/neuroglancer/sliceview/uncompressed_chunk_format.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/uncompressed_chunk_format.ts#L76)

___

### textureInternalFormat

• **textureInternalFormat**: `number`

Texture internal format to specify when uploading the texture data.

#### Implementation of

[TextureFormat](neuroglancer_webgl_texture_access.TextureFormat.md).[textureInternalFormat](neuroglancer_webgl_texture_access.TextureFormat.md#textureinternalformat)

#### Defined in

[src/neuroglancer/sliceview/uncompressed_chunk_format.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/uncompressed_chunk_format.ts#L75)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[SingleTextureChunkFormat](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md).[wasDisposed](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`ChunkFormat`](neuroglancer_sliceview_uncompressed_chunk_format.ChunkFormat.md)

#### Returns

[`ChunkFormat`](neuroglancer_sliceview_uncompressed_chunk_format.ChunkFormat.md)

#### Inherited from

[SingleTextureChunkFormat](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md).[addRef](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

___

### beginDrawing

▸ **beginDrawing**(`gl`, `shader`): `void`

Called once per RenderLayer when starting to draw chunks, on the ChunkFormat of the first
source.  This is not called before each source is drawn.

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |
| `shader` | [`ShaderProgram`](neuroglancer_webgl_shader.ShaderProgram.md) |

#### Returns

`void`

#### Inherited from

[SingleTextureChunkFormat](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md).[beginDrawing](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md#begindrawing)

#### Defined in

[src/neuroglancer/sliceview/single_texture_chunk_format.ts:41](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/single_texture_chunk_format.ts#L41)

___

### beginSource

▸ **beginSource**(`_gl`, `_shader`): `void`

Does nothing, but may be overridden by subclass.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |
| `_shader` | [`ShaderProgram`](neuroglancer_webgl_shader.ShaderProgram.md) |

#### Returns

`void`

#### Inherited from

[SingleTextureChunkFormat](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md).[beginSource](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md#beginsource)

#### Defined in

[src/neuroglancer/sliceview/single_texture_chunk_format.ts:80](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/single_texture_chunk_format.ts#L80)

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
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |
| `shader` | [`ShaderProgram`](neuroglancer_webgl_shader.ShaderProgram.md) |
| `chunk` | [`SingleTextureVolumeChunk`](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureVolumeChunk.md)<`Data`, [`TextureLayout`](neuroglancer_sliceview_uncompressed_chunk_format._internal_.TextureLayout.md)\> |
| `fixedChunkPosition` | `Uint32Array` |
| `chunkDisplaySubspaceDimensions` | readonly `number`[] |
| `channelDimensions` | readonly `number`[] |
| `newSource` | `boolean` |

#### Returns

`void`

#### Inherited from

[SingleTextureChunkFormat](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md).[bindChunk](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md#bindchunk)

#### Defined in

[src/neuroglancer/sliceview/single_texture_chunk_format.ts:60](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/single_texture_chunk_format.ts#L60)

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
| `builder` | [`ShaderBuilder`](neuroglancer_webgl_shader.ShaderBuilder.md) |
| `numChannelDimensions` | `number` |

#### Returns

`void`

#### Overrides

[SingleTextureChunkFormat](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md).[defineShader](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md#defineshader)

#### Defined in

[src/neuroglancer/sliceview/uncompressed_chunk_format.ts:96](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/uncompressed_chunk_format.ts#L96)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[SingleTextureChunkFormat](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md).[dispose](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[SingleTextureChunkFormat](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md).[disposed](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L75)

___

### endDrawing

▸ **endDrawing**(`gl`, `shader`): `void`

Called once after all chunks have been drawn, on the ChunkFormat of the first source.

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |
| `shader` | [`ShaderProgram`](neuroglancer_webgl_shader.ShaderProgram.md) |

#### Returns

`void`

#### Inherited from

[SingleTextureChunkFormat](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md).[endDrawing](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md#enddrawing)

#### Defined in

[src/neuroglancer/sliceview/single_texture_chunk_format.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/single_texture_chunk_format.ts#L47)

___

### getTextureLayout

▸ **getTextureLayout**(`gl`, `chunkDataSize`): [`TextureLayout`](neuroglancer_sliceview_uncompressed_chunk_format._internal_.TextureLayout.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |
| `chunkDataSize` | `Uint32Array` |

#### Returns

[`TextureLayout`](neuroglancer_sliceview_uncompressed_chunk_format._internal_.TextureLayout.md)

#### Defined in

[src/neuroglancer/sliceview/uncompressed_chunk_format.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/uncompressed_chunk_format.ts#L175)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[SingleTextureChunkFormat](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md).[refCountReachedZero](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md#refcountreachedzero)

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

[SingleTextureChunkFormat](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md).[registerCancellable](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md#registercancellable)

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

[SingleTextureChunkFormat](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md).[registerDisposer](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md#registerdisposer)

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

[SingleTextureChunkFormat](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md).[registerEventListener](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L95)

___

### setTextureData

▸ **setTextureData**(`gl`, `textureLayout`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |
| `textureLayout` | [`TextureLayout`](neuroglancer_sliceview_uncompressed_chunk_format._internal_.TextureLayout.md) |
| `data` | [`TypedArray`](../modules/neuroglancer_util_array.md#typedarray) |

#### Returns

`void`

#### Overrides

[SingleTextureChunkFormat](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md).[setTextureData](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md#settexturedata)

#### Defined in

[src/neuroglancer/sliceview/uncompressed_chunk_format.ts:179](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/uncompressed_chunk_format.ts#L179)

___

### setupTextureLayout

▸ **setupTextureLayout**(`gl`, `shader`, `textureLayout`, `fixedChunkPosition`, `chunkDisplaySubspaceDimensions`, `channelDimensions`): `void`

Called each time textureLayout changes while drawing chunks.

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |
| `shader` | [`ShaderProgram`](neuroglancer_webgl_shader.ShaderProgram.md) |
| `textureLayout` | [`TextureLayout`](neuroglancer_sliceview_uncompressed_chunk_format._internal_.TextureLayout.md) |
| `fixedChunkPosition` | `Uint32Array` |
| `chunkDisplaySubspaceDimensions` | readonly `number`[] |
| `channelDimensions` | readonly `number`[] |

#### Returns

`void`

#### Overrides

[SingleTextureChunkFormat](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md).[setupTextureLayout](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md#setuptexturelayout)

#### Defined in

[src/neuroglancer/sliceview/uncompressed_chunk_format.ts:135](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/uncompressed_chunk_format.ts#L135)

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

[SingleTextureChunkFormat](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md).[unregisterDisposer](neuroglancer_sliceview_single_texture_chunk_format.SingleTextureChunkFormat.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L85)

___

### get

▸ `Static` **get**(`gl`, `dataType`, `textureDims`): [`ChunkFormat`](neuroglancer_sliceview_uncompressed_chunk_format.ChunkFormat.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |
| `dataType` | [`DataType`](../enums/neuroglancer_util_data_type.DataType.md) |
| `textureDims` | `number` |

#### Returns

[`ChunkFormat`](neuroglancer_sliceview_uncompressed_chunk_format.ChunkFormat.md)

#### Defined in

[src/neuroglancer/sliceview/uncompressed_chunk_format.ts:84](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/uncompressed_chunk_format.ts#L84)
