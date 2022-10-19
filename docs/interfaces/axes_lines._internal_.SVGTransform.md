[neuroglancer](../README.md) / [Modules](../modules.md) / [axes\_lines](../modules/axes_lines.md) / [<internal\>](../modules/axes_lines._internal_.md) / SVGTransform

# Interface: SVGTransform

[axes_lines](../modules/axes_lines.md).[<internal>](../modules/axes_lines._internal_.md).SVGTransform

SVGTransform is the interface for one of the component transformations within an SVGTransformList; thus, an SVGTransform object corresponds to a single component (e.g., scale(…) or matrix(…)) within a transform attribute.

## Table of contents

### Properties

- [SVG\_TRANSFORM\_MATRIX](axes_lines._internal_.SVGTransform.md#svg_transform_matrix)
- [SVG\_TRANSFORM\_ROTATE](axes_lines._internal_.SVGTransform.md#svg_transform_rotate)
- [SVG\_TRANSFORM\_SCALE](axes_lines._internal_.SVGTransform.md#svg_transform_scale)
- [SVG\_TRANSFORM\_SKEWX](axes_lines._internal_.SVGTransform.md#svg_transform_skewx)
- [SVG\_TRANSFORM\_SKEWY](axes_lines._internal_.SVGTransform.md#svg_transform_skewy)
- [SVG\_TRANSFORM\_TRANSLATE](axes_lines._internal_.SVGTransform.md#svg_transform_translate)
- [SVG\_TRANSFORM\_UNKNOWN](axes_lines._internal_.SVGTransform.md#svg_transform_unknown)
- [angle](axes_lines._internal_.SVGTransform.md#angle)
- [matrix](axes_lines._internal_.SVGTransform.md#matrix)
- [type](axes_lines._internal_.SVGTransform.md#type)

### Methods

- [setMatrix](axes_lines._internal_.SVGTransform.md#setmatrix)
- [setRotate](axes_lines._internal_.SVGTransform.md#setrotate)
- [setScale](axes_lines._internal_.SVGTransform.md#setscale)
- [setSkewX](axes_lines._internal_.SVGTransform.md#setskewx)
- [setSkewY](axes_lines._internal_.SVGTransform.md#setskewy)
- [setTranslate](axes_lines._internal_.SVGTransform.md#settranslate)

## Properties

### SVG\_TRANSFORM\_MATRIX

• `Readonly` **SVG\_TRANSFORM\_MATRIX**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13264

___

### SVG\_TRANSFORM\_ROTATE

• `Readonly` **SVG\_TRANSFORM\_ROTATE**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13265

___

### SVG\_TRANSFORM\_SCALE

• `Readonly` **SVG\_TRANSFORM\_SCALE**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13266

___

### SVG\_TRANSFORM\_SKEWX

• `Readonly` **SVG\_TRANSFORM\_SKEWX**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13267

___

### SVG\_TRANSFORM\_SKEWY

• `Readonly` **SVG\_TRANSFORM\_SKEWY**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13268

___

### SVG\_TRANSFORM\_TRANSLATE

• `Readonly` **SVG\_TRANSFORM\_TRANSLATE**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13269

___

### SVG\_TRANSFORM\_UNKNOWN

• `Readonly` **SVG\_TRANSFORM\_UNKNOWN**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13270

___

### angle

• `Readonly` **angle**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13255

___

### matrix

• `Readonly` **matrix**: [`DOMMatrix`](../modules/axes_lines._internal_.md#dommatrix)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13256

___

### type

• `Readonly` **type**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13257

## Methods

### setMatrix

▸ **setMatrix**(`matrix?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `matrix?` | [`DOMMatrix2DInit`](axes_lines._internal_.DOMMatrix2DInit.md) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13258

___

### setRotate

▸ **setRotate**(`angle`, `cx`, `cy`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `angle` | `number` |
| `cx` | `number` |
| `cy` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13259

___

### setScale

▸ **setScale**(`sx`, `sy`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sx` | `number` |
| `sy` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13260

___

### setSkewX

▸ **setSkewX**(`angle`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `angle` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13261

___

### setSkewY

▸ **setSkewY**(`angle`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `angle` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13262

___

### setTranslate

▸ **setTranslate**(`tx`, `ty`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | `number` |
| `ty` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13263
