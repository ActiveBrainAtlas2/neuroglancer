[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/util/json

# Module: neuroglancer/util/json

## Table of contents

### Functions

- [emptyToUndefined](neuroglancer_util_json.md#emptytoundefined)
- [expectArray](neuroglancer_util_json.md#expectarray)
- [jsonToUrlSafe](neuroglancer_util_json.md#jsontourlsafe)
- [normalizeStringLiteral](neuroglancer_util_json.md#normalizestringliteral)
- [parseArray](neuroglancer_util_json.md#parsearray)
- [parseFiniteVec](neuroglancer_util_json.md#parsefinitevec)
- [parseFixedLengthArray](neuroglancer_util_json.md#parsefixedlengtharray)
- [parseIntVec](neuroglancer_util_json.md#parseintvec)
- [parseQueryStringParameters](neuroglancer_util_json.md#parsequerystringparameters)
- [parseXYZ](neuroglancer_util_json.md#parsexyz)
- [pythonLiteralParse](neuroglancer_util_json.md#pythonliteralparse)
- [pythonLiteralToJSON](neuroglancer_util_json.md#pythonliteraltojson)
- [stableStringify](neuroglancer_util_json.md#stablestringify)
- [unparseQueryStringParameters](neuroglancer_util_json.md#unparsequerystringparameters)
- [urlSafeParse](neuroglancer_util_json.md#urlsafeparse)
- [urlSafeStringify](neuroglancer_util_json.md#urlsafestringify)
- [urlSafeStringifyString](neuroglancer_util_json.md#urlsafestringifystring)
- [urlSafeToJSON](neuroglancer_util_json.md#urlsafetojson)
- [valueOr](neuroglancer_util_json.md#valueor)
- [verify3dDimensions](neuroglancer_util_json.md#verify3ddimensions)
- [verify3dScale](neuroglancer_util_json.md#verify3dscale)
- [verify3dVec](neuroglancer_util_json.md#verify3dvec)
- [verifyBoolean](neuroglancer_util_json.md#verifyboolean)
- [verifyEnumString](neuroglancer_util_json.md#verifyenumstring)
- [verifyFiniteFloat](neuroglancer_util_json.md#verifyfinitefloat)
- [verifyFiniteNonNegativeFloat](neuroglancer_util_json.md#verifyfinitenonnegativefloat)
- [verifyFinitePositiveFloat](neuroglancer_util_json.md#verifyfinitepositivefloat)
- [verifyFloat](neuroglancer_util_json.md#verifyfloat)
- [verifyFloat01](neuroglancer_util_json.md#verifyfloat01)
- [verifyInt](neuroglancer_util_json.md#verifyint)
- [verifyIntegerArray](neuroglancer_util_json.md#verifyintegerarray)
- [verifyMapKey](neuroglancer_util_json.md#verifymapkey)
- [verifyNonNegativeFloat](neuroglancer_util_json.md#verifynonnegativefloat)
- [verifyNonNegativeInt](neuroglancer_util_json.md#verifynonnegativeint)
- [verifyObject](neuroglancer_util_json.md#verifyobject)
- [verifyObjectAsMap](neuroglancer_util_json.md#verifyobjectasmap)
- [verifyObjectProperty](neuroglancer_util_json.md#verifyobjectproperty)
- [verifyOptionalBoolean](neuroglancer_util_json.md#verifyoptionalboolean)
- [verifyOptionalInt](neuroglancer_util_json.md#verifyoptionalint)
- [verifyOptionalObjectProperty](neuroglancer_util_json.md#verifyoptionalobjectproperty)
- [verifyOptionalString](neuroglancer_util_json.md#verifyoptionalstring)
- [verifyPositiveInt](neuroglancer_util_json.md#verifypositiveint)
- [verifyString](neuroglancer_util_json.md#verifystring)
- [verifyStringArray](neuroglancer_util_json.md#verifystringarray)

## Functions

### emptyToUndefined

▸ **emptyToUndefined**(`x`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `any` |

#### Returns

`any`

#### Defined in

[src/neuroglancer/util/json.ts:634](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/json.ts#L634)

___

### expectArray

▸ **expectArray**(`x`, `length?`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `unknown` |
| `length?` | `number` |

#### Returns

`any`[]

#### Defined in

[src/neuroglancer/util/json.ts:363](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/json.ts#L363)

___

### jsonToUrlSafe

▸ **jsonToUrlSafe**(`x`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `string` |

#### Returns

`string`

#### Defined in

[src/neuroglancer/util/json.ts:318](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/json.ts#L318)

___

### normalizeStringLiteral

▸ **normalizeStringLiteral**(`x`): `string`

Converts a string literal delimited by either single or double quotes into a string literal
delimited by double quotes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `string` |

#### Returns

`string`

#### Defined in

[src/neuroglancer/util/json.ts:267](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/json.ts#L267)

___

### parseArray

▸ **parseArray**<`T`\>(`x`, `parseElement`): `T`[]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `any` |
| `parseElement` | (`x`: `any`, `index`: `number`) => `T` |

#### Returns

`T`[]

#### Defined in

[src/neuroglancer/util/json.ts:374](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/json.ts#L374)

___

### parseFiniteVec

▸ **parseFiniteVec**<`U`\>(`out`, `obj`): `U`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends [`WritableArrayLike`](../interfaces/neuroglancer_util_array.WritableArrayLike.md)<`number`, `U`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `out` | `U` |
| `obj` | `any`[] |

#### Returns

`U`

#### Defined in

[src/neuroglancer/util/json.ts:78](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/json.ts#L78)

___

### parseFixedLengthArray

▸ **parseFixedLengthArray**<`T`, `U`\>(`out`, `obj`, `parseElement`): `U`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `U` | extends [`WritableArrayLike`](../interfaces/neuroglancer_util_array.WritableArrayLike.md)<`T`, `U`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `out` | `U` |
| `obj` | `any` |
| `parseElement` | (`x`: `any`, `index`: `number`) => `T` |

#### Returns

`U`

#### Defined in

[src/neuroglancer/util/json.ts:381](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/json.ts#L381)

___

### parseIntVec

▸ **parseIntVec**<`U`\>(`out`, `obj`): `U`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends [`WritableArrayLike`](../interfaces/neuroglancer_util_array.WritableArrayLike.md)<`number`, `U`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `out` | `U` |
| `obj` | `any` |

#### Returns

`U`

#### Defined in

[src/neuroglancer/util/json.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/json.ts#L95)

___

### parseQueryStringParameters

▸ **parseQueryStringParameters**(`queryString`): `any`

The query string parameters may either be specified in the usual
'name=value&otherName=otherValue' form or as (optionally urlSafe) JSON: '{"name":"value"}`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `queryString` | `string` |

#### Returns

`any`

#### Defined in

[src/neuroglancer/util/json.ts:543](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/json.ts#L543)

___

### parseXYZ

▸ **parseXYZ**<`A`\>(`out`, `obj`, `validator?`): `A`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`WritableArrayLike`](../interfaces/neuroglancer_util_array.WritableArrayLike.md)<`number`, `A`\> |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `out` | `A` | `undefined` |
| `obj` | `any` | `undefined` |
| `validator` | (`x`: `any`) => `number` | `verifyFloat` |

#### Returns

`A`

#### Defined in

[src/neuroglancer/util/json.ts:55](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/json.ts#L55)

___

### pythonLiteralParse

▸ **pythonLiteralParse**(`x`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `string` |

#### Returns

`any`

#### Defined in

[src/neuroglancer/util/json.ts:359](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/json.ts#L359)

___

### pythonLiteralToJSON

▸ **pythonLiteralToJSON**(`x`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `string` |

#### Returns

`string`

#### Defined in

[src/neuroglancer/util/json.ts:328](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/json.ts#L328)

___

### stableStringify

▸ **stableStringify**(`x`): `string`

Returns a JSON representation of x, with object keys sorted to ensure a
consistent result.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `any` |

#### Returns

`string`

#### Defined in

[src/neuroglancer/util/json.ts:118](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/json.ts#L118)

___

### unparseQueryStringParameters

▸ **unparseQueryStringParameters**(`parameters`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | `any` |

#### Returns

`string`

#### Defined in

[src/neuroglancer/util/json.ts:563](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/json.ts#L563)

___

### urlSafeParse

▸ **urlSafeParse**(`x`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `string` |

#### Returns

`any`

#### Defined in

[src/neuroglancer/util/json.ts:322](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/json.ts#L322)

___

### urlSafeStringify

▸ **urlSafeStringify**(`x`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `any` |

#### Returns

`string`

#### Defined in

[src/neuroglancer/util/json.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/json.ts#L172)

___

### urlSafeStringifyString

▸ **urlSafeStringifyString**(`x`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `string` |

#### Returns

`string`

#### Defined in

[src/neuroglancer/util/json.ts:166](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/json.ts#L166)

___

### urlSafeToJSON

▸ **urlSafeToJSON**(`x`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `string` |

#### Returns

`string`

#### Defined in

[src/neuroglancer/util/json.ts:314](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/json.ts#L314)

___

### valueOr

▸ **valueOr**<`T`\>(`value`, `defaultValue`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| `T` |
| `defaultValue` | `T` |

#### Returns

`T`

#### Defined in

[src/neuroglancer/util/json.ts:489](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/json.ts#L489)

___

### verify3dDimensions

▸ **verify3dDimensions**(`obj`): [`vec3`](../classes/neuroglancer_util_geom.vec3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

[`vec3`](../classes/neuroglancer_util_geom.vec3.md)

#### Defined in

[src/neuroglancer/util/json.ts:598](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/json.ts#L598)

___

### verify3dScale

▸ **verify3dScale**(`obj`): [`vec3`](../classes/neuroglancer_util_geom.vec3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

[`vec3`](../classes/neuroglancer_util_geom.vec3.md)

#### Defined in

[src/neuroglancer/util/json.ts:594](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/json.ts#L594)

___

### verify3dVec

▸ **verify3dVec**(`obj`): [`vec3`](../classes/neuroglancer_util_geom.vec3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

[`vec3`](../classes/neuroglancer_util_geom.vec3.md)

#### Defined in

[src/neuroglancer/util/json.ts:590](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/json.ts#L590)

___

### verifyBoolean

▸ **verifyBoolean**(`x`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `any` |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/util/json.ts:626](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/json.ts#L626)

___

### verifyEnumString

▸ **verifyEnumString**<`T`\>(`obj`, `enumType`): `T`

Verifies that `obj' is a string that, when converted to uppercase, matches a string property of
`enumType`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |
| `enumType` | `Object` |

#### Returns

`T`

The corresponding numerical value.

#### Defined in

[src/neuroglancer/util/json.ts:580](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/json.ts#L580)

___

### verifyFiniteFloat

▸ **verifyFiniteFloat**(`obj`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

`number`

#### Defined in

[src/neuroglancer/util/json.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/json.ts#L31)

___

### verifyFiniteNonNegativeFloat

▸ **verifyFiniteNonNegativeFloat**(`obj`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

`number`

#### Defined in

[src/neuroglancer/util/json.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/json.ts#L39)

___

### verifyFinitePositiveFloat

▸ **verifyFinitePositiveFloat**(`obj`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

`number`

#### Defined in

[src/neuroglancer/util/json.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/json.ts#L47)

___

### verifyFloat

▸ **verifyFloat**(`obj`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

`number`

#### Defined in

[src/neuroglancer/util/json.ts:20](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/json.ts#L20)

___

### verifyFloat01

▸ **verifyFloat01**(`obj`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

`number`

#### Defined in

[src/neuroglancer/util/json.ts:531](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/json.ts#L531)

___

### verifyInt

▸ **verifyInt**(`obj`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

`number`

#### Defined in

[src/neuroglancer/util/json.ts:400](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/json.ts#L400)

___

### verifyIntegerArray

▸ **verifyIntegerArray**(`a`): `number`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `unknown` |

#### Returns

`number`[]

#### Defined in

[src/neuroglancer/util/json.ts:614](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/json.ts#L614)

___

### verifyMapKey

▸ **verifyMapKey**<`U`\>(`obj`, `map`): `U`

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |
| `map` | `Map`<`string`, `U`\> |

#### Returns

`U`

#### Defined in

[src/neuroglancer/util/json.ts:443](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/json.ts#L443)

___

### verifyNonNegativeFloat

▸ **verifyNonNegativeFloat**(`obj`): `number`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `any` | the object from which the value should be parsed. |

#### Returns

`number`

the parsed value from object, throws error if obj
does not contain non negative float.

#### Defined in

[src/neuroglancer/util/json.ts:421](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/json.ts#L421)

___

### verifyNonNegativeInt

▸ **verifyNonNegativeInt**(`obj`): `number`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `any` | the object from which the value should be parsed. |

#### Returns

`number`

the parsed value from object, throws error if obj
does not contain non negative int.

#### Defined in

[src/neuroglancer/util/json.ts:435](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/json.ts#L435)

___

### verifyObject

▸ **verifyObject**(`obj`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

`any`

#### Defined in

[src/neuroglancer/util/json.ts:393](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/json.ts#L393)

___

### verifyObjectAsMap

▸ **verifyObjectAsMap**<`T`\>(`obj`, `validator`): `Map`<`string`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |
| `validator` | (`value`: `any`) => `T` |

#### Returns

`Map`<`string`, `T`\>

#### Defined in

[src/neuroglancer/util/json.ts:517](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/json.ts#L517)

___

### verifyObjectProperty

▸ **verifyObjectProperty**<`T`\>(`obj`, `propertyName`, `validator`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |
| `propertyName` | `string` |
| `validator` | (`value`: `any`) => `T` |

#### Returns

`T`

#### Defined in

[src/neuroglancer/util/json.ts:493](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/json.ts#L493)

___

### verifyOptionalBoolean

▸ **verifyOptionalBoolean**(`obj`): `boolean` \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

`boolean` \| `undefined`

#### Defined in

[src/neuroglancer/util/json.ts:474](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/json.ts#L474)

___

### verifyOptionalInt

▸ **verifyOptionalInt**(`obj`): `number` \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

`number` \| `undefined`

#### Defined in

[src/neuroglancer/util/json.ts:467](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/json.ts#L467)

___

### verifyOptionalObjectProperty

▸ **verifyOptionalObjectProperty**<`T`\>(`obj`, `propertyName`, `validator`): `T` \| `undefined`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |
| `propertyName` | `string` |
| `validator` | (`value`: `any`) => `T` |

#### Returns

`T` \| `undefined`

#### Defined in

[src/neuroglancer/util/json.ts:505](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/json.ts#L505)

▸ **verifyOptionalObjectProperty**<`T`\>(`obj`, `propertyName`, `validator`, `defaultValue`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |
| `propertyName` | `string` |
| `validator` | (`value`: `any`) => `T` |
| `defaultValue` | `T` |

#### Returns

`T`

#### Defined in

[src/neuroglancer/util/json.ts:508](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/json.ts#L508)

___

### verifyOptionalString

▸ **verifyOptionalString**(`obj`): `string` \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

`string` \| `undefined`

#### Defined in

[src/neuroglancer/util/json.ts:460](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/json.ts#L460)

___

### verifyPositiveInt

▸ **verifyPositiveInt**(`obj`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

`number`

#### Defined in

[src/neuroglancer/util/json.ts:408](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/json.ts#L408)

___

### verifyString

▸ **verifyString**(`obj`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

`string`

#### Defined in

[src/neuroglancer/util/json.ts:453](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/json.ts#L453)

___

### verifyStringArray

▸ **verifyStringArray**(`a`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `any` |

#### Returns

`string`[]

#### Defined in

[src/neuroglancer/util/json.ts:602](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/json.ts#L602)
