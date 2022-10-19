[neuroglancer](../README.md) / [Modules](../modules.md) / [util/geom](../modules/util_geom.md) / [<internal\>](../modules/util_geom._internal_.md) / mat2d

# Class: mat2d

[util/geom](../modules/util_geom.md).[<internal>](../modules/util_geom._internal_.md).mat2d

## Hierarchy

- `Float32Array`

  ↳ **`mat2d`**

## Table of contents

### Constructors

- [constructor](util_geom._internal_.mat2d.md#constructor)

### Properties

- [BYTES\_PER\_ELEMENT](util_geom._internal_.mat2d.md#bytes_per_element)
- [[toStringTag]](util_geom._internal_.mat2d.md#[tostringtag])
- [buffer](util_geom._internal_.mat2d.md#buffer)
- [byteLength](util_geom._internal_.mat2d.md#bytelength)
- [byteOffset](util_geom._internal_.mat2d.md#byteoffset)
- [length](util_geom._internal_.mat2d.md#length)
- [typeMat2d](util_geom._internal_.mat2d.md#typemat2d)
- [BYTES\_PER\_ELEMENT](util_geom._internal_.mat2d.md#bytes_per_element-1)

### Methods

- [[iterator]](util_geom._internal_.mat2d.md#[iterator])
- [copyWithin](util_geom._internal_.mat2d.md#copywithin)
- [entries](util_geom._internal_.mat2d.md#entries)
- [every](util_geom._internal_.mat2d.md#every)
- [fill](util_geom._internal_.mat2d.md#fill)
- [filter](util_geom._internal_.mat2d.md#filter)
- [find](util_geom._internal_.mat2d.md#find)
- [findIndex](util_geom._internal_.mat2d.md#findindex)
- [forEach](util_geom._internal_.mat2d.md#foreach)
- [includes](util_geom._internal_.mat2d.md#includes)
- [indexOf](util_geom._internal_.mat2d.md#indexof)
- [join](util_geom._internal_.mat2d.md#join)
- [keys](util_geom._internal_.mat2d.md#keys)
- [lastIndexOf](util_geom._internal_.mat2d.md#lastindexof)
- [map](util_geom._internal_.mat2d.md#map)
- [reduce](util_geom._internal_.mat2d.md#reduce)
- [reduceRight](util_geom._internal_.mat2d.md#reduceright)
- [reverse](util_geom._internal_.mat2d.md#reverse)
- [set](util_geom._internal_.mat2d.md#set)
- [slice](util_geom._internal_.mat2d.md#slice)
- [some](util_geom._internal_.mat2d.md#some)
- [sort](util_geom._internal_.mat2d.md#sort)
- [subarray](util_geom._internal_.mat2d.md#subarray)
- [toLocaleString](util_geom._internal_.mat2d.md#tolocalestring)
- [toString](util_geom._internal_.mat2d.md#tostring)
- [valueOf](util_geom._internal_.mat2d.md#valueof)
- [values](util_geom._internal_.mat2d.md#values)
- [add](util_geom._internal_.mat2d.md#add)
- [clone](util_geom._internal_.mat2d.md#clone)
- [copy](util_geom._internal_.mat2d.md#copy)
- [create](util_geom._internal_.mat2d.md#create)
- [determinant](util_geom._internal_.mat2d.md#determinant)
- [equals](util_geom._internal_.mat2d.md#equals)
- [exactEquals](util_geom._internal_.mat2d.md#exactequals)
- [frob](util_geom._internal_.mat2d.md#frob)
- [from](util_geom._internal_.mat2d.md#from)
- [fromRotation](util_geom._internal_.mat2d.md#fromrotation)
- [fromScaling](util_geom._internal_.mat2d.md#fromscaling)
- [fromTranslation](util_geom._internal_.mat2d.md#fromtranslation)
- [fromValues](util_geom._internal_.mat2d.md#fromvalues)
- [identity](util_geom._internal_.mat2d.md#identity)
- [invert](util_geom._internal_.mat2d.md#invert)
- [mul](util_geom._internal_.mat2d.md#mul)
- [multiply](util_geom._internal_.mat2d.md#multiply)
- [multiplyScalar](util_geom._internal_.mat2d.md#multiplyscalar)
- [multiplyScalarAndAdd](util_geom._internal_.mat2d.md#multiplyscalarandadd)
- [of](util_geom._internal_.mat2d.md#of)
- [rotate](util_geom._internal_.mat2d.md#rotate)
- [scale](util_geom._internal_.mat2d.md#scale)
- [set](util_geom._internal_.mat2d.md#set-1)
- [str](util_geom._internal_.mat2d.md#str)
- [sub](util_geom._internal_.mat2d.md#sub)
- [subtract](util_geom._internal_.mat2d.md#subtract)
- [translate](util_geom._internal_.mat2d.md#translate)

## Constructors

### constructor

• **new mat2d**(`length`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `length` | `number` |

#### Inherited from

Float32Array.constructor

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:4040

• **new mat2d**(`array`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | [`ArrayBufferLike`](../modules/annotation_annotation_layer_state._internal_.md#arraybufferlike) \| [`ArrayLike`](../interfaces/async_computation_encode_compressed_segmentation_request._internal_.ArrayLike.md)<`number`\> |

#### Inherited from

Float32Array.constructor

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:4041

• **new mat2d**(`buffer`, `byteOffset?`, `length?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | [`ArrayBufferLike`](../modules/annotation_annotation_layer_state._internal_.md#arraybufferlike) |
| `byteOffset?` | `number` |
| `length?` | `number` |

#### Inherited from

Float32Array.constructor

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:4042

• **new mat2d**(`elements`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `elements` | [`Iterable`](../interfaces/annotation_annotation_layer_state._internal_.Iterable.md)<`number`\> |

#### Inherited from

Float32Array.constructor

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:461

• **new mat2d**()

#### Inherited from

Float32Array.constructor

#### Defined in

node_modules/typescript/lib/lib.es2017.typedarrays.d.ts:50

## Properties

### BYTES\_PER\_ELEMENT

• `Readonly` **BYTES\_PER\_ELEMENT**: `number`

The size in bytes of each element in the array.

#### Inherited from

Float32Array.BYTES\_PER\_ELEMENT

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:3798

___

### [toStringTag]

• `Readonly` **[toStringTag]**: ``"Float32Array"``

#### Inherited from

Float32Array.\_\_@toStringTag@25

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:306

___

### buffer

• `Readonly` **buffer**: [`ArrayBufferLike`](../modules/annotation_annotation_layer_state._internal_.md#arraybufferlike)

The ArrayBuffer instance referenced by the array.

#### Inherited from

Float32Array.buffer

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:3803

___

### byteLength

• `Readonly` **byteLength**: `number`

The length in bytes of the array.

#### Inherited from

Float32Array.byteLength

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:3808

___

### byteOffset

• `Readonly` **byteOffset**: `number`

The offset in bytes of the array.

#### Inherited from

Float32Array.byteOffset

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:3813

___

### length

• `Readonly` **length**: `number`

The length of the array.

#### Inherited from

Float32Array.length

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:3912

___

### typeMat2d

• `Private` **typeMat2d**: `number`

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:1632

___

### BYTES\_PER\_ELEMENT

▪ `Static` `Readonly` **BYTES\_PER\_ELEMENT**: `number`

The size in bytes of each element in the array.

#### Inherited from

Float32Array.BYTES\_PER\_ELEMENT

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:4047

## Methods

### [iterator]

▸ **[iterator]**(): [`IterableIterator`](../interfaces/annotation_annotation_layer_state._internal_.IterableIterator.md)<`number`\>

#### Returns

[`IterableIterator`](../interfaces/annotation_annotation_layer_state._internal_.IterableIterator.md)<`number`\>

#### Inherited from

Float32Array.\_\_@iterator@87

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:445

___

### copyWithin

▸ **copyWithin**(`target`, `start`, `end?`): [`mat2d`](util_geom._internal_.mat2d.md)

Returns the this object after copying a section of the array identified by start and end
to the same array starting at position target

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `number` | If target is negative, it is treated as length+target where length is the length of the array. |
| `start` | `number` | If start is negative, it is treated as length+start. If end is negative, it is treated as length+end. |
| `end?` | `number` | If not specified, length of the this object is used as its default value. |

#### Returns

[`mat2d`](util_geom._internal_.mat2d.md)

#### Inherited from

Float32Array.copyWithin

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:3824

___

### entries

▸ **entries**(): [`IterableIterator`](../interfaces/annotation_annotation_layer_state._internal_.IterableIterator.md)<[`number`, `number`]\>

Returns an array of key, value pairs for every entry in the array

#### Returns

[`IterableIterator`](../interfaces/annotation_annotation_layer_state._internal_.IterableIterator.md)<[`number`, `number`]\>

#### Inherited from

Float32Array.entries

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:449

___

### every

▸ **every**(`predicate`, `thisArg?`): `boolean`

Determines whether all the members of an array satisfy the specified test.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `number`, `index`: `number`, `array`: `Float32Array`) => `unknown` | A function that accepts up to three arguments. The every method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value false, or until the end of the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`boolean`

#### Inherited from

Float32Array.every

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:3834

___

### fill

▸ **fill**(`value`, `start?`, `end?`): [`mat2d`](util_geom._internal_.mat2d.md)

Changes all array elements from `start` to `end` index to a static `value` and returns the modified array

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | value to fill array section with |
| `start?` | `number` | index to start filling the array at. If start is negative, it is treated as length+start where length is the length of the array. |
| `end?` | `number` | index to stop filling the array at. If end is negative, it is treated as length+end. |

#### Returns

[`mat2d`](util_geom._internal_.mat2d.md)

#### Inherited from

Float32Array.fill

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:3844

___

### filter

▸ **filter**(`predicate`, `thisArg?`): `Float32Array`

Returns the elements of an array that meet the condition specified in a callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `number`, `index`: `number`, `array`: `Float32Array`) => `any` | A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`Float32Array`

#### Inherited from

Float32Array.filter

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:3853

___

### find

▸ **find**(`predicate`, `thisArg?`): `undefined` \| `number`

Returns the value of the first element in the array where predicate is true, and undefined
otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `number`, `index`: `number`, `obj`: `Float32Array`) => `boolean` | find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, find immediately returns that element value. Otherwise, find returns undefined. |
| `thisArg?` | `any` | If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead. |

#### Returns

`undefined` \| `number`

#### Inherited from

Float32Array.find

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:3864

___

### findIndex

▸ **findIndex**(`predicate`, `thisArg?`): `number`

Returns the index of the first element in the array where predicate is true, and -1
otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `number`, `index`: `number`, `obj`: `Float32Array`) => `boolean` | find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, findIndex immediately returns that element index. Otherwise, findIndex returns -1. |
| `thisArg?` | `any` | If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead. |

#### Returns

`number`

#### Inherited from

Float32Array.findIndex

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:3875

___

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

Performs the specified action for each element in an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`value`: `number`, `index`: `number`, `array`: `Float32Array`) => `void` | A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`void`

#### Inherited from

Float32Array.forEach

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:3884

___

### includes

▸ **includes**(`searchElement`, `fromIndex?`): `boolean`

Determines whether an array includes a certain element, returning true or false as appropriate.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchElement` | `number` | The element to search for. |
| `fromIndex?` | `number` | The position in this array at which to begin searching for searchElement. |

#### Returns

`boolean`

#### Inherited from

Float32Array.includes

#### Defined in

node_modules/typescript/lib/lib.es2016.array.include.d.ts:108

___

### indexOf

▸ **indexOf**(`searchElement`, `fromIndex?`): `number`

Returns the index of the first occurrence of a value in an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchElement` | `number` | The value to locate in the array. |
| `fromIndex?` | `number` | The array index at which to begin the search. If fromIndex is omitted, the  search starts at index 0. |

#### Returns

`number`

#### Inherited from

Float32Array.indexOf

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:3892

___

### join

▸ **join**(`separator?`): `string`

Adds all the elements of an array separated by the specified separator string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `separator?` | `string` | A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma. |

#### Returns

`string`

#### Inherited from

Float32Array.join

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:3899

___

### keys

▸ **keys**(): [`IterableIterator`](../interfaces/annotation_annotation_layer_state._internal_.IterableIterator.md)<`number`\>

Returns an list of keys in the array

#### Returns

[`IterableIterator`](../interfaces/annotation_annotation_layer_state._internal_.IterableIterator.md)<`number`\>

#### Inherited from

Float32Array.keys

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:453

___

### lastIndexOf

▸ **lastIndexOf**(`searchElement`, `fromIndex?`): `number`

Returns the index of the last occurrence of a value in an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchElement` | `number` | The value to locate in the array. |
| `fromIndex?` | `number` | The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0. |

#### Returns

`number`

#### Inherited from

Float32Array.lastIndexOf

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:3907

___

### map

▸ **map**(`callbackfn`, `thisArg?`): `Float32Array`

Calls a defined callback function on each element of an array, and returns an array that
contains the results.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`value`: `number`, `index`: `number`, `array`: `Float32Array`) => `number` | A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`Float32Array`

#### Inherited from

Float32Array.map

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:3922

___

### reduce

▸ **reduce**(`callbackfn`): `number`

Calls the specified callback function for all the elements in an array. The return value of
the callback function is the accumulated result, and is provided as an argument in the next
call to the callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `number`, `currentValue`: `number`, `currentIndex`: `number`, `array`: `Float32Array`) => `number` | A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |

#### Returns

`number`

#### Inherited from

Float32Array.reduce

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:3934

▸ **reduce**(`callbackfn`, `initialValue`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`previousValue`: `number`, `currentValue`: `number`, `currentIndex`: `number`, `array`: `Float32Array`) => `number` |
| `initialValue` | `number` |

#### Returns

`number`

#### Inherited from

Float32Array.reduce

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:3935

▸ **reduce**<`U`\>(`callbackfn`, `initialValue`): `U`

Calls the specified callback function for all the elements in an array. The return value of
the callback function is the accumulated result, and is provided as an argument in the next
call to the callback function.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `U`, `currentValue`: `number`, `currentIndex`: `number`, `array`: `Float32Array`) => `U` | A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |
| `initialValue` | `U` | If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

#### Returns

`U`

#### Inherited from

Float32Array.reduce

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:3947

___

### reduceRight

▸ **reduceRight**(`callbackfn`): `number`

Calls the specified callback function for all the elements in an array, in descending order.
The return value of the callback function is the accumulated result, and is provided as an
argument in the next call to the callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `number`, `currentValue`: `number`, `currentIndex`: `number`, `array`: `Float32Array`) => `number` | A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |

#### Returns

`number`

#### Inherited from

Float32Array.reduceRight

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:3959

▸ **reduceRight**(`callbackfn`, `initialValue`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`previousValue`: `number`, `currentValue`: `number`, `currentIndex`: `number`, `array`: `Float32Array`) => `number` |
| `initialValue` | `number` |

#### Returns

`number`

#### Inherited from

Float32Array.reduceRight

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:3960

▸ **reduceRight**<`U`\>(`callbackfn`, `initialValue`): `U`

Calls the specified callback function for all the elements in an array, in descending order.
The return value of the callback function is the accumulated result, and is provided as an
argument in the next call to the callback function.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `U`, `currentValue`: `number`, `currentIndex`: `number`, `array`: `Float32Array`) => `U` | A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |
| `initialValue` | `U` | If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

#### Returns

`U`

#### Inherited from

Float32Array.reduceRight

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:3972

___

### reverse

▸ **reverse**(): `Float32Array`

Reverses the elements in an Array.

#### Returns

`Float32Array`

#### Inherited from

Float32Array.reverse

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:3977

___

### set

▸ **set**(`array`, `offset?`): `void`

Sets a value or an array of values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | [`ArrayLike`](../interfaces/async_computation_encode_compressed_segmentation_request._internal_.ArrayLike.md)<`number`\> | A typed or untyped array of values to set. |
| `offset?` | `number` | The index in the current array at which the values are to be written. |

#### Returns

`void`

#### Inherited from

Float32Array.set

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:3984

___

### slice

▸ **slice**(`start?`, `end?`): `Float32Array`

Returns a section of an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start?` | `number` | The beginning of the specified portion of the array. |
| `end?` | `number` | The end of the specified portion of the array. This is exclusive of the element at the index 'end'. |

#### Returns

`Float32Array`

#### Inherited from

Float32Array.slice

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:3991

___

### some

▸ **some**(`predicate`, `thisArg?`): `boolean`

Determines whether the specified callback function returns true for any element of an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `number`, `index`: `number`, `array`: `Float32Array`) => `unknown` | A function that accepts up to three arguments. The some method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value true, or until the end of the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`boolean`

#### Inherited from

Float32Array.some

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:4001

___

### sort

▸ **sort**(`compareFn?`): [`mat2d`](util_geom._internal_.mat2d.md)

Sorts an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `compareFn?` | (`a`: `number`, `b`: `number`) => `number` | Function used to determine the order of the elements. It is expected to return a negative value if first argument is less than second argument, zero if they're equal and a positive value otherwise. If omitted, the elements are sorted in ascending order. ```ts [11,2,22,1].sort((a, b) => a - b) ``` |

#### Returns

[`mat2d`](util_geom._internal_.mat2d.md)

#### Inherited from

Float32Array.sort

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:4012

___

### subarray

▸ **subarray**(`begin?`, `end?`): `Float32Array`

Gets a new Float32Array view of the ArrayBuffer store for this array, referencing the elements
at begin, inclusive, up to end, exclusive.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `begin?` | `number` | The index of the beginning of the array. |
| `end?` | `number` | The index of the end of the array. |

#### Returns

`Float32Array`

#### Inherited from

Float32Array.subarray

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:4020

___

### toLocaleString

▸ **toLocaleString**(): `string`

Converts a number to a string by using the current locale.

#### Returns

`string`

#### Inherited from

Float32Array.toLocaleString

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:4025

___

### toString

▸ **toString**(): `string`

Returns a string representation of an array.

#### Returns

`string`

#### Inherited from

Float32Array.toString

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:4030

___

### valueOf

▸ **valueOf**(): `Float32Array`

Returns the primitive value of the specified object.

#### Returns

`Float32Array`

#### Inherited from

Float32Array.valueOf

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:4033

___

### values

▸ **values**(): [`IterableIterator`](../interfaces/annotation_annotation_layer_state._internal_.IterableIterator.md)<`number`\>

Returns an list of values in the array

#### Returns

[`IterableIterator`](../interfaces/annotation_annotation_layer_state._internal_.IterableIterator.md)<`number`\>

#### Inherited from

Float32Array.values

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:457

___

### add

▸ `Static` **add**(`out`, `a`, `b`): [`mat2d`](util_geom._internal_.mat2d.md)

Adds two mat2d's

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`mat2d`](util_geom._internal_.mat2d.md) | the receiving matrix |
| `a` | [`mat2d`](util_geom._internal_.mat2d.md) | the first operand |
| `b` | [`mat2d`](util_geom._internal_.mat2d.md) | the second operand |

#### Returns

[`mat2d`](util_geom._internal_.mat2d.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:1824

___

### clone

▸ `Static` **clone**(`a`): [`mat2d`](util_geom._internal_.mat2d.md)

Creates a new mat2d initialized with values from an existing matrix

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`mat2d`](util_geom._internal_.mat2d.md) | matrix to clone |

#### Returns

[`mat2d`](util_geom._internal_.mat2d.md)

a new 2x3 matrix

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:1647

___

### copy

▸ `Static` **copy**(`out`, `a`): [`mat2d`](util_geom._internal_.mat2d.md)

Copy the values from one mat2d to another

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`mat2d`](util_geom._internal_.mat2d.md) | the receiving matrix |
| `a` | [`mat2d`](util_geom._internal_.mat2d.md) | the source matrix |

#### Returns

[`mat2d`](util_geom._internal_.mat2d.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:1656

___

### create

▸ `Static` **create**(): [`mat2d`](util_geom._internal_.mat2d.md)

Creates a new identity mat2d

#### Returns

[`mat2d`](util_geom._internal_.mat2d.md)

a new 2x3 matrix

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:1639

___

### determinant

▸ `Static` **determinant**(`a`): `number`

Calculates the determinant of a mat2d

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`mat2d`](util_geom._internal_.mat2d.md) | the source matrix |

#### Returns

`number`

determinant of a

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:1709

___

### equals

▸ `Static` **equals**(`a`, `b`): `boolean`

Returns whether or not the matrices have approximately the same elements in the same position.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`mat2d`](util_geom._internal_.mat2d.md) | The first matrix. |
| `b` | [`mat2d`](util_geom._internal_.mat2d.md) | The second matrix. |

#### Returns

`boolean`

True if the matrices are equal, false otherwise.

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:1883

___

### exactEquals

▸ `Static` **exactEquals**(`a`, `b`): `boolean`

Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`mat2d`](util_geom._internal_.mat2d.md) | The first matrix. |
| `b` | [`mat2d`](util_geom._internal_.mat2d.md) | The second matrix. |

#### Returns

`boolean`

True if the matrices are equal, false otherwise.

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:1874

___

### frob

▸ `Static` **frob**(`a`): `number`

Returns Frobenius norm of a mat2d

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`mat2d`](util_geom._internal_.mat2d.md) | the matrix to calculate Frobenius norm of |

#### Returns

`number`

Frobenius norm

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:1814

___

### from

▸ `Static` **from**(`arrayLike`): `Float32Array`

Creates an array from an array-like or iterable object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arrayLike` | [`ArrayLike`](../interfaces/async_computation_encode_compressed_segmentation_request._internal_.ArrayLike.md)<`number`\> | An array-like or iterable object to convert to an array. |

#### Returns

`Float32Array`

#### Inherited from

Float32Array.from

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:4059

▸ `Static` **from**<`T`\>(`arrayLike`, `mapfn`, `thisArg?`): `Float32Array`

Creates an array from an array-like or iterable object.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arrayLike` | [`ArrayLike`](../interfaces/async_computation_encode_compressed_segmentation_request._internal_.ArrayLike.md)<`T`\> | An array-like or iterable object to convert to an array. |
| `mapfn` | (`v`: `T`, `k`: `number`) => `number` | A mapping function to call on every element of the array. |
| `thisArg?` | `any` | Value of 'this' used to invoke the mapfn. |

#### Returns

`Float32Array`

#### Inherited from

Float32Array.from

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:4067

▸ `Static` **from**(`arrayLike`, `mapfn?`, `thisArg?`): `Float32Array`

Creates an array from an array-like or iterable object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arrayLike` | [`Iterable`](../interfaces/annotation_annotation_layer_state._internal_.Iterable.md)<`number`\> | An array-like or iterable object to convert to an array. |
| `mapfn?` | (`v`: `number`, `k`: `number`) => `number` | A mapping function to call on every element of the array. |
| `thisArg?` | `any` | Value of 'this' used to invoke the mapfn. |

#### Returns

`Float32Array`

#### Inherited from

Float32Array.from

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:469

___

### fromRotation

▸ `Static` **fromRotation**(`out`, `rad`): [`mat2d`](util_geom._internal_.mat2d.md)

Creates a matrix from a given angle
This is equivalent to (but much faster than):

    mat2d.identity(dest);
    mat2d.rotate(dest, dest, rad);

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`mat2d`](util_geom._internal_.mat2d.md) | mat2d receiving operation result |
| `rad` | `number` | the angle to rotate the matrix by |

#### Returns

[`mat2d`](util_geom._internal_.mat2d.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:1772

___

### fromScaling

▸ `Static` **fromScaling**(`out`, `v`): [`mat2d`](util_geom._internal_.mat2d.md)

Creates a matrix from a vector scaling
This is equivalent to (but much faster than):

    mat2d.identity(dest);
    mat2d.scale(dest, dest, vec);

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`mat2d`](util_geom._internal_.mat2d.md) | mat2d receiving operation result |
| `v` | `number`[] \| [`vec2`](util_geom.vec2.md) | Scaling vector |

#### Returns

[`mat2d`](util_geom._internal_.mat2d.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:1785

___

### fromTranslation

▸ `Static` **fromTranslation**(`out`, `v`): [`mat2d`](util_geom._internal_.mat2d.md)

Creates a matrix from a vector translation
This is equivalent to (but much faster than):

    mat2d.identity(dest);
    mat2d.translate(dest, dest, vec);

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`mat2d`](util_geom._internal_.mat2d.md) | mat2d receiving operation result |
| `v` | `number`[] \| [`vec2`](util_geom.vec2.md) | Translation vector |

#### Returns

[`mat2d`](util_geom._internal_.mat2d.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:1798

___

### fromValues

▸ `Static` **fromValues**(`a`, `b`, `c`, `d`, `tx`, `ty`): [`mat2d`](util_geom._internal_.mat2d.md)

Create a new mat2d with the given values

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | Component A (index 0) |
| `b` | `number` | Component B (index 1) |
| `c` | `number` | Component C (index 2) |
| `d` | `number` | Component D (index 3) |
| `tx` | `number` | Component TX (index 4) |
| `ty` | `number` | Component TY (index 5) |

#### Returns

[`mat2d`](util_geom._internal_.mat2d.md)

A new mat2d

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:1677

___

### identity

▸ `Static` **identity**(`out`): [`mat2d`](util_geom._internal_.mat2d.md)

Set a mat2d to the identity matrix

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`mat2d`](util_geom._internal_.mat2d.md) | the receiving matrix |

#### Returns

[`mat2d`](util_geom._internal_.mat2d.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:1664

___

### invert

▸ `Static` **invert**(`out`, `a`): ``null`` \| [`mat2d`](util_geom._internal_.mat2d.md)

Inverts a mat2d

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`mat2d`](util_geom._internal_.mat2d.md) | the receiving matrix |
| `a` | [`mat2d`](util_geom._internal_.mat2d.md) | the source matrix |

#### Returns

``null`` \| [`mat2d`](util_geom._internal_.mat2d.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:1701

___

### mul

▸ `Static` **mul**(`out`, `a`, `b`): [`mat2d`](util_geom._internal_.mat2d.md)

Multiplies two mat2d's

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`mat2d`](util_geom._internal_.mat2d.md) | the receiving matrix |
| `a` | [`mat2d`](util_geom._internal_.mat2d.md) | the first operand |
| `b` | [`mat2d`](util_geom._internal_.mat2d.md) | the second operand |

#### Returns

[`mat2d`](util_geom._internal_.mat2d.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:1729

___

### multiply

▸ `Static` **multiply**(`out`, `a`, `b`): [`mat2d`](util_geom._internal_.mat2d.md)

Multiplies two mat2d's

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`mat2d`](util_geom._internal_.mat2d.md) | the receiving matrix |
| `a` | [`mat2d`](util_geom._internal_.mat2d.md) | the first operand |
| `b` | [`mat2d`](util_geom._internal_.mat2d.md) | the second operand |

#### Returns

[`mat2d`](util_geom._internal_.mat2d.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:1719

___

### multiplyScalar

▸ `Static` **multiplyScalar**(`out`, `a`, `b`): [`mat2d`](util_geom._internal_.mat2d.md)

Multiply each element of the matrix by a scalar.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`mat2d`](util_geom._internal_.mat2d.md) | the receiving matrix |
| `a` | [`mat2d`](util_geom._internal_.mat2d.md) | the matrix to scale |
| `b` | `number` | amount to scale the matrix's elements by |

#### Returns

[`mat2d`](util_geom._internal_.mat2d.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:1854

___

### multiplyScalarAndAdd

▸ `Static` **multiplyScalarAndAdd**(`out`, `a`, `b`, `scale`): [`mat2d`](util_geom._internal_.mat2d.md)

Adds two mat2d's after multiplying each element of the second operand by a scalar value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`mat2d`](util_geom._internal_.mat2d.md) | the receiving vector |
| `a` | [`mat2d`](util_geom._internal_.mat2d.md) | the first operand |
| `b` | [`mat2d`](util_geom._internal_.mat2d.md) | the second operand |
| `scale` | `number` | the amount to scale b's elements by before adding |

#### Returns

[`mat2d`](util_geom._internal_.mat2d.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:1865

___

### of

▸ `Static` **of**(...`items`): `Float32Array`

Returns a new array from a set of elements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | `number`[] | A set of elements to include in the new array object. |

#### Returns

`Float32Array`

#### Inherited from

Float32Array.of

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:4053

___

### rotate

▸ `Static` **rotate**(`out`, `a`, `rad`): [`mat2d`](util_geom._internal_.mat2d.md)

Rotates a mat2d by the given angle

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`mat2d`](util_geom._internal_.mat2d.md) | the receiving matrix |
| `a` | [`mat2d`](util_geom._internal_.mat2d.md) | the matrix to rotate |
| `rad` | `number` | the angle to rotate the matrix by |

#### Returns

[`mat2d`](util_geom._internal_.mat2d.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:1739

___

### scale

▸ `Static` **scale**(`out`, `a`, `v`): [`mat2d`](util_geom._internal_.mat2d.md)

Scales the mat2d by the dimensions in the given vec2

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`mat2d`](util_geom._internal_.mat2d.md) | the receiving matrix |
| `a` | [`mat2d`](util_geom._internal_.mat2d.md) | the matrix to translate |
| `v` | `number`[] \| [`vec2`](util_geom.vec2.md) | the vec2 to scale the matrix by |

#### Returns

[`mat2d`](util_geom._internal_.mat2d.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:1749

___

### set

▸ `Static` **set**(`out`, `a`, `b`, `c`, `d`, `tx`, `ty`): [`mat2d`](util_geom._internal_.mat2d.md)

Set the components of a mat2d to the given values

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`mat2d`](util_geom._internal_.mat2d.md) | the receiving matrix |
| `a` | `number` | Component A (index 0) |
| `b` | `number` | Component B (index 1) |
| `c` | `number` | Component C (index 2) |
| `d` | `number` | Component D (index 3) |
| `tx` | `number` | Component TX (index 4) |
| `ty` | `number` | Component TY (index 5) |

#### Returns

[`mat2d`](util_geom._internal_.mat2d.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:1692

___

### str

▸ `Static` **str**(`a`): `string`

Returns a string representation of a mat2d

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`mat2d`](util_geom._internal_.mat2d.md) | matrix to represent as a string |

#### Returns

`string`

string representation of the matrix

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:1806

___

### sub

▸ `Static` **sub**(`out`, `a`, `b`): [`mat2d`](util_geom._internal_.mat2d.md)

Subtracts matrix b from matrix a

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`mat2d`](util_geom._internal_.mat2d.md) | the receiving matrix |
| `a` | [`mat2d`](util_geom._internal_.mat2d.md) | the first operand |
| `b` | [`mat2d`](util_geom._internal_.mat2d.md) | the second operand |

#### Returns

[`mat2d`](util_geom._internal_.mat2d.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:1844

___

### subtract

▸ `Static` **subtract**(`out`, `a`, `b`): [`mat2d`](util_geom._internal_.mat2d.md)

Subtracts matrix b from matrix a

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`mat2d`](util_geom._internal_.mat2d.md) | the receiving matrix |
| `a` | [`mat2d`](util_geom._internal_.mat2d.md) | the first operand |
| `b` | [`mat2d`](util_geom._internal_.mat2d.md) | the second operand |

#### Returns

[`mat2d`](util_geom._internal_.mat2d.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:1834

___

### translate

▸ `Static` **translate**(`out`, `a`, `v`): [`mat2d`](util_geom._internal_.mat2d.md)

Translates the mat2d by the dimensions in the given vec2

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`mat2d`](util_geom._internal_.mat2d.md) | the receiving matrix |
| `a` | [`mat2d`](util_geom._internal_.mat2d.md) | the matrix to translate |
| `v` | `number`[] \| [`vec2`](util_geom.vec2.md) | the vec2 to translate the matrix by |

#### Returns

[`mat2d`](util_geom._internal_.mat2d.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:1759
