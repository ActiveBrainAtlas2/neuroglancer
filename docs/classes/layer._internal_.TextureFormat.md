[neuroglancer](../README.md) / [Modules](../modules.md) / [layer](../modules/layer.md) / [<internal\>](../modules/layer._internal_.md) / TextureFormat

# Class: TextureFormat

[layer](../modules/layer.md).[<internal>](../modules/layer._internal_.md).TextureFormat

## Table of contents

### Constructors

- [constructor](layer._internal_.TextureFormat.md#constructor)

### Properties

- [arrayConstructor](layer._internal_.TextureFormat.md#arrayconstructor)
- [arrayElementsPerTexel](layer._internal_.TextureFormat.md#arrayelementspertexel)
- [samplerPrefix](layer._internal_.TextureFormat.md#samplerprefix)
- [texelType](layer._internal_.TextureFormat.md#texeltype)
- [texelsPerElement](layer._internal_.TextureFormat.md#texelsperelement)
- [textureFormat](layer._internal_.TextureFormat.md#textureformat)
- [textureInternalFormat](layer._internal_.TextureFormat.md#textureinternalformat)

## Constructors

### constructor

• **new TextureFormat**()

## Properties

### arrayConstructor

• **arrayConstructor**: [`TypedArrayConstructor`](../modules/layer._internal_.md#typedarrayconstructor)

TypedArray type that must be used when uploading the texture data.

#### Defined in

[src/neuroglancer/webgl/texture_access.ts:65](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/texture_access.ts#L65)

___

### arrayElementsPerTexel

• **arrayElementsPerTexel**: `number`

Number of typed array elements per texel.

#### Defined in

[src/neuroglancer/webgl/texture_access.ts:60](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/texture_access.ts#L60)

___

### samplerPrefix

• **samplerPrefix**: [`ShaderSamplerPrefix`](../modules/layer._internal_.md#shadersamplerprefix)

#### Defined in

[src/neuroglancer/webgl/texture_access.ts:67](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/texture_access.ts#L67)

___

### texelType

• **texelType**: `number`

Texel type to specify when uploading the texture data.

#### Defined in

[src/neuroglancer/webgl/texture_access.ts:55](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/texture_access.ts#L55)

___

### texelsPerElement

• **texelsPerElement**: `number`

Number of texels per multi-channel element.

#### Defined in

[src/neuroglancer/webgl/texture_access.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/texture_access.ts#L40)

___

### textureFormat

• **textureFormat**: `number`

Texture format to specify when uploading the texture data.

#### Defined in

[src/neuroglancer/webgl/texture_access.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/texture_access.ts#L50)

___

### textureInternalFormat

• **textureInternalFormat**: `number`

Texture internal format to specify when uploading the texture data.

#### Defined in

[src/neuroglancer/webgl/texture_access.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/texture_access.ts#L45)
