[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/webgl/square\_corners\_buffer

# Module: neuroglancer/webgl/square\_corners\_buffer

## Table of contents

### Functions

- [getCubeCornersArray](neuroglancer_webgl_square_corners_buffer.md#getcubecornersarray)
- [getSquareCornersArray](neuroglancer_webgl_square_corners_buffer.md#getsquarecornersarray)
- [getSquareCornersBuffer](neuroglancer_webgl_square_corners_buffer.md#getsquarecornersbuffer)

## Functions

### getCubeCornersArray

▸ **getCubeCornersArray**(`startX?`, `startY?`, `startZ?`, `endX?`, `endY?`, `endZ?`, `minorTiles?`, `majorTiles?`): `Float32Array`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `startX` | `number` | `-1` |
| `startY` | `number` | `-1` |
| `startZ` | `number` | `-1` |
| `endX` | `number` | `1` |
| `endY` | `number` | `1` |
| `endZ` | `number` | `1` |
| `minorTiles` | `number` | `1` |
| `majorTiles` | `number` | `1` |

#### Returns

`Float32Array`

#### Defined in

[src/neuroglancer/webgl/square_corners_buffer.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/square_corners_buffer.ts#L33)

___

### getSquareCornersArray

▸ **getSquareCornersArray**(`startX?`, `startY?`, `endX?`, `endY?`, `minorTiles?`, `majorTiles?`): `Float32Array`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `startX` | `number` | `-1` |
| `startY` | `number` | `-1` |
| `endX` | `number` | `1` |
| `endY` | `number` | `1` |
| `minorTiles` | `number` | `1` |
| `majorTiles` | `number` | `1` |

#### Returns

`Float32Array`

#### Defined in

[src/neuroglancer/webgl/square_corners_buffer.ts:21](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/square_corners_buffer.ts#L21)

___

### getSquareCornersBuffer

▸ **getSquareCornersBuffer**(`gl`, `startX?`, `startY?`, `endX?`, `endY?`, `minorTiles?`, `majorTiles?`): [`Buffer`](../classes/neuroglancer_webgl_buffer.Buffer.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) | `undefined` |
| `startX` | `number` | `-1` |
| `startY` | `number` | `-1` |
| `endX` | `number` | `1` |
| `endY` | `number` | `1` |
| `minorTiles` | `number` | `1` |
| `majorTiles` | `number` | `1` |

#### Returns

[`Buffer`](../classes/neuroglancer_webgl_buffer.Buffer.md)

#### Defined in

[src/neuroglancer/webgl/square_corners_buffer.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/square_corners_buffer.ts#L50)
