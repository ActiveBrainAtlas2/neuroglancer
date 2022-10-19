[neuroglancer](../README.md) / [Modules](../modules.md) / [webgl/shader](webgl_shader.md) / <internal\>

# Module: <internal\>

## Table of contents

### Interfaces

- [ConcatArray](../interfaces/webgl_shader._internal_.ConcatArray.md)
- [ShaderCodePartArray](../interfaces/webgl_shader._internal_.ShaderCodePartArray.md)
- [ShaderCodePartFunction](../interfaces/webgl_shader._internal_.ShaderCodePartFunction.md)
- [VertexDebugOutput](../interfaces/webgl_shader._internal_.VertexDebugOutput.md)

### Type Aliases

- [FlatArray](webgl_shader._internal_.md#flatarray)

## Type Aliases

### FlatArray

Ƭ **FlatArray**<`Arr`, `Depth`\>: { `done`: `Arr` ; `recur`: `Arr` extends `ReadonlyArray`<infer InnerArr\> ? [`FlatArray`](webgl_shader._internal_.md#flatarray)<`InnerArr`, [``-1``, ``0``, ``1``, ``2``, ``3``, ``4``, ``5``, ``6``, ``7``, ``8``, ``9``, ``10``, ``11``, ``12``, ``13``, ``14``, ``15``, ``16``, ``17``, ``18``, ``19``, ``20``][`Depth`]\> : `Arr`  }[`Depth` extends ``-1`` ? ``"done"`` : ``"recur"``]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Arr` | `Arr` |
| `Depth` | extends `number` |

#### Defined in

node_modules/typescript/lib/lib.es2019.array.d.ts:21
