[neuroglancer](../README.md) / [Exports](../modules.md) / [main\_module](../modules/main_module.md) / [<internal\>](../modules/main_module._internal_.md) / SVGAngle

# Interface: SVGAngle

[main_module](../modules/main_module.md).[<internal>](../modules/main_module._internal_.md).SVGAngle

Used to represent a value that can be an <angle> or <number> value. An SVGAngle reflected through the animVal attribute is always read only.

## Table of contents

### Properties

- [SVG\_ANGLETYPE\_DEG](main_module._internal_.SVGAngle.md#svg_angletype_deg)
- [SVG\_ANGLETYPE\_GRAD](main_module._internal_.SVGAngle.md#svg_angletype_grad)
- [SVG\_ANGLETYPE\_RAD](main_module._internal_.SVGAngle.md#svg_angletype_rad)
- [SVG\_ANGLETYPE\_UNKNOWN](main_module._internal_.SVGAngle.md#svg_angletype_unknown)
- [SVG\_ANGLETYPE\_UNSPECIFIED](main_module._internal_.SVGAngle.md#svg_angletype_unspecified)
- [unitType](main_module._internal_.SVGAngle.md#unittype)
- [value](main_module._internal_.SVGAngle.md#value)
- [valueAsString](main_module._internal_.SVGAngle.md#valueasstring)
- [valueInSpecifiedUnits](main_module._internal_.SVGAngle.md#valueinspecifiedunits)

### Methods

- [convertToSpecifiedUnits](main_module._internal_.SVGAngle.md#converttospecifiedunits)
- [newValueSpecifiedUnits](main_module._internal_.SVGAngle.md#newvaluespecifiedunits)

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
