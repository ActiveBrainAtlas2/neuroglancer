[neuroglancer](../README.md) / [Modules](../modules.md) / [axes\_lines](../modules/axes_lines.md) / [<internal\>](../modules/axes_lines._internal_.md) / SVGAngle

# Interface: SVGAngle

[axes_lines](../modules/axes_lines.md).[<internal>](../modules/axes_lines._internal_.md).SVGAngle

Used to represent a value that can be an <angle> or <number> value. An SVGAngle reflected through the animVal attribute is always read only.

## Table of contents

### Properties

- [SVG\_ANGLETYPE\_DEG](axes_lines._internal_.SVGAngle.md#svg_angletype_deg)
- [SVG\_ANGLETYPE\_GRAD](axes_lines._internal_.SVGAngle.md#svg_angletype_grad)
- [SVG\_ANGLETYPE\_RAD](axes_lines._internal_.SVGAngle.md#svg_angletype_rad)
- [SVG\_ANGLETYPE\_UNKNOWN](axes_lines._internal_.SVGAngle.md#svg_angletype_unknown)
- [SVG\_ANGLETYPE\_UNSPECIFIED](axes_lines._internal_.SVGAngle.md#svg_angletype_unspecified)
- [unitType](axes_lines._internal_.SVGAngle.md#unittype)
- [value](axes_lines._internal_.SVGAngle.md#value)
- [valueAsString](axes_lines._internal_.SVGAngle.md#valueasstring)
- [valueInSpecifiedUnits](axes_lines._internal_.SVGAngle.md#valueinspecifiedunits)

### Methods

- [convertToSpecifiedUnits](axes_lines._internal_.SVGAngle.md#converttospecifiedunits)
- [newValueSpecifiedUnits](axes_lines._internal_.SVGAngle.md#newvaluespecifiedunits)

## Properties

### SVG\_ANGLETYPE\_DEG

• `Readonly` **SVG\_ANGLETYPE\_DEG**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11658

___

### SVG\_ANGLETYPE\_GRAD

• `Readonly` **SVG\_ANGLETYPE\_GRAD**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11659

___

### SVG\_ANGLETYPE\_RAD

• `Readonly` **SVG\_ANGLETYPE\_RAD**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11660

___

### SVG\_ANGLETYPE\_UNKNOWN

• `Readonly` **SVG\_ANGLETYPE\_UNKNOWN**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11661

___

### SVG\_ANGLETYPE\_UNSPECIFIED

• `Readonly` **SVG\_ANGLETYPE\_UNSPECIFIED**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11662

___

### unitType

• `Readonly` **unitType**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11652

___

### value

• **value**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11653

___

### valueAsString

• **valueAsString**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11654

___

### valueInSpecifiedUnits

• **valueInSpecifiedUnits**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11655

## Methods

### convertToSpecifiedUnits

▸ **convertToSpecifiedUnits**(`unitType`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `unitType` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11656

___

### newValueSpecifiedUnits

▸ **newValueSpecifiedUnits**(`unitType`, `valueInSpecifiedUnits`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `unitType` | `number` |
| `valueInSpecifiedUnits` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11657
