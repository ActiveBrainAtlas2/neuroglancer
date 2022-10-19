[neuroglancer](../README.md) / [Modules](../modules.md) / [webgl/texture\_access](../modules/webgl_texture_access.md) / TextureFormat

# Class: TextureFormat

[webgl/texture_access](../modules/webgl_texture_access.md).TextureFormat

## Implemented by

- [`ChunkFormat`](sliceview_uncompressed_chunk_format.ChunkFormat.md)

## Table of contents

### Constructors

- [constructor](webgl_texture_access.TextureFormat.md#constructor)

### Properties

- [arrayConstructor](webgl_texture_access.TextureFormat.md#arrayconstructor)
- [arrayElementsPerTexel](webgl_texture_access.TextureFormat.md#arrayelementspertexel)
- [samplerPrefix](webgl_texture_access.TextureFormat.md#samplerprefix)
- [texelType](webgl_texture_access.TextureFormat.md#texeltype)
- [texelsPerElement](webgl_texture_access.TextureFormat.md#texelsperelement)
- [textureFormat](webgl_texture_access.TextureFormat.md#textureformat)
- [textureInternalFormat](webgl_texture_access.TextureFormat.md#textureinternalformat)

## Constructors

### constructor

• **new TextureFormat**()

## Properties

### arrayConstructor

• **arrayConstructor**: [`TypedArrayConstructor`](../modules/util_array.md#typedarrayconstructor)

TypedArray type that must be used when uploading the texture data.

#### Defined in

[src/neuroglancer/webgl/texture_access.ts:65](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/texture_access.ts#L65)

___

### arrayElementsPerTexel

• **arrayElementsPerTexel**: `number`

Number of typed array elements per texel.

#### Defined in

[src/neuroglancer/webgl/texture_access.ts:60](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/texture_access.ts#L60)

___

### samplerPrefix

• **samplerPrefix**: [`ShaderSamplerPrefix`](../modules/webgl_shader.md#shadersamplerprefix)

#### Defined in

[src/neuroglancer/webgl/texture_access.ts:67](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/texture_access.ts#L67)

___

### texelType

• **texelType**: `number`

Texel type to specify when uploading the texture data.

#### Defined in

[src/neuroglancer/webgl/texture_access.ts:55](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/texture_access.ts#L55)

___

### texelsPerElement

• **texelsPerElement**: `number`

Number of texels per multi-channel element.

#### Defined in

[src/neuroglancer/webgl/texture_access.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/texture_access.ts#L40)

___

### textureFormat

• **textureFormat**: `number`

Texture format to specify when uploading the texture data.

#### Defined in

[src/neuroglancer/webgl/texture_access.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/texture_access.ts#L50)

___

### textureInternalFormat

• **textureInternalFormat**: `number`

Texture internal format to specify when uploading the texture data.

#### Defined in

[src/neuroglancer/webgl/texture_access.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/texture_access.ts#L45)
