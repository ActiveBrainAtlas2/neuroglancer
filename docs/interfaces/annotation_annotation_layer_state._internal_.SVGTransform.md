[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / SVGTransform

# Interface: SVGTransform

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).SVGTransform

SVGTransform is the interface for one of the component transformations within an SVGTransformList; thus, an SVGTransform object corresponds to a single component (e.g., scale(…) or matrix(…)) within a transform attribute.

## Table of contents

### Properties

- [SVG\_TRANSFORM\_MATRIX](annotation_annotation_layer_state._internal_.SVGTransform.md#svg_transform_matrix)
- [SVG\_TRANSFORM\_ROTATE](annotation_annotation_layer_state._internal_.SVGTransform.md#svg_transform_rotate)
- [SVG\_TRANSFORM\_SCALE](annotation_annotation_layer_state._internal_.SVGTransform.md#svg_transform_scale)
- [SVG\_TRANSFORM\_SKEWX](annotation_annotation_layer_state._internal_.SVGTransform.md#svg_transform_skewx)
- [SVG\_TRANSFORM\_SKEWY](annotation_annotation_layer_state._internal_.SVGTransform.md#svg_transform_skewy)
- [SVG\_TRANSFORM\_TRANSLATE](annotation_annotation_layer_state._internal_.SVGTransform.md#svg_transform_translate)
- [SVG\_TRANSFORM\_UNKNOWN](annotation_annotation_layer_state._internal_.SVGTransform.md#svg_transform_unknown)
- [angle](annotation_annotation_layer_state._internal_.SVGTransform.md#angle)
- [matrix](annotation_annotation_layer_state._internal_.SVGTransform.md#matrix)
- [type](annotation_annotation_layer_state._internal_.SVGTransform.md#type)

### Methods

- [setMatrix](annotation_annotation_layer_state._internal_.SVGTransform.md#setmatrix)
- [setRotate](annotation_annotation_layer_state._internal_.SVGTransform.md#setrotate)
- [setScale](annotation_annotation_layer_state._internal_.SVGTransform.md#setscale)
- [setSkewX](annotation_annotation_layer_state._internal_.SVGTransform.md#setskewx)
- [setSkewY](annotation_annotation_layer_state._internal_.SVGTransform.md#setskewy)
- [setTranslate](annotation_annotation_layer_state._internal_.SVGTransform.md#settranslate)

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

• `Readonly` **matrix**: [`DOMMatrix`](../modules/annotation_annotation_layer_state._internal_.md#dommatrix)

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
| `matrix?` | [`DOMMatrix2DInit`](annotation_annotation_layer_state._internal_.DOMMatrix2DInit.md) |

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
