[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/webgl/texture\_access](../modules/neuroglancer_webgl_texture_access.md) / TextureFormat

# Class: TextureFormat

[neuroglancer/webgl/texture_access](../modules/neuroglancer_webgl_texture_access.md).TextureFormat

## Implemented by

- [`ChunkFormat`](neuroglancer_sliceview_uncompressed_chunk_format.ChunkFormat.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_webgl_texture_access.TextureFormat.md#constructor)

### Properties

- [arrayConstructor](neuroglancer_webgl_texture_access.TextureFormat.md#arrayconstructor)
- [arrayElementsPerTexel](neuroglancer_webgl_texture_access.TextureFormat.md#arrayelementspertexel)
- [samplerPrefix](neuroglancer_webgl_texture_access.TextureFormat.md#samplerprefix)
- [texelType](neuroglancer_webgl_texture_access.TextureFormat.md#texeltype)
- [texelsPerElement](neuroglancer_webgl_texture_access.TextureFormat.md#texelsperelement)
- [textureFormat](neuroglancer_webgl_texture_access.TextureFormat.md#textureformat)
- [textureInternalFormat](neuroglancer_webgl_texture_access.TextureFormat.md#textureinternalformat)

## Constructors

### constructor

• **new TextureFormat**()

## Properties

### arrayConstructor

• **arrayConstructor**: [`TypedArrayConstructor`](../modules/neuroglancer_util_array.md#typedarrayconstructor)

TypedArray type that must be used when uploading the texture data.

#### Defined in

[src/neuroglancer/webgl/texture_access.ts:65](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/texture_access.ts#L65)

___

### arrayElementsPerTexel

• **arrayElementsPerTexel**: `number`

Number of typed array elements per texel.

#### Defined in

[src/neuroglancer/webgl/texture_access.ts:60](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/texture_access.ts#L60)

___

### samplerPrefix

• **samplerPrefix**: [`ShaderSamplerPrefix`](../modules/neuroglancer_webgl_shader.md#shadersamplerprefix)

#### Defined in

[src/neuroglancer/webgl/texture_access.ts:67](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/texture_access.ts#L67)

___

### texelType

• **texelType**: `number`

Texel type to specify when uploading the texture data.

#### Defined in

[src/neuroglancer/webgl/texture_access.ts:55](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/texture_access.ts#L55)

___

### texelsPerElement

• **texelsPerElement**: `number`

Number of texels per multi-channel element.

#### Defined in

[src/neuroglancer/webgl/texture_access.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/texture_access.ts#L40)

___

### textureFormat

• **textureFormat**: `number`

Texture format to specify when uploading the texture data.

#### Defined in

[src/neuroglancer/webgl/texture_access.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/texture_access.ts#L50)

___

### textureInternalFormat

• **textureInternalFormat**: `number`

Texture internal format to specify when uploading the texture data.

#### Defined in

[src/neuroglancer/webgl/texture_access.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/texture_access.ts#L45)
