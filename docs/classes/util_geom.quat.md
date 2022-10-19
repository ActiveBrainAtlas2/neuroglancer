[neuroglancer](../README.md) / [Modules](../modules.md) / [util/geom](../modules/util_geom.md) / quat

# Class: quat

[util/geom](../modules/util_geom.md).quat

## Hierarchy

- `Float32Array`

  ↳ **`quat`**

## Table of contents

### Constructors

- [constructor](util_geom.quat.md#constructor)

### Properties

- [BYTES\_PER\_ELEMENT](util_geom.quat.md#bytes_per_element)
- [[toStringTag]](util_geom.quat.md#[tostringtag])
- [buffer](util_geom.quat.md#buffer)
- [byteLength](util_geom.quat.md#bytelength)
- [byteOffset](util_geom.quat.md#byteoffset)
- [length](util_geom.quat.md#length)
- [typeQuat](util_geom.quat.md#typequat)
- [BYTES\_PER\_ELEMENT](util_geom.quat.md#bytes_per_element-1)

### Methods

- [[iterator]](util_geom.quat.md#[iterator])
- [copyWithin](util_geom.quat.md#copywithin)
- [entries](util_geom.quat.md#entries)
- [every](util_geom.quat.md#every)
- [fill](util_geom.quat.md#fill)
- [filter](util_geom.quat.md#filter)
- [find](util_geom.quat.md#find)
- [findIndex](util_geom.quat.md#findindex)
- [forEach](util_geom.quat.md#foreach)
- [includes](util_geom.quat.md#includes)
- [indexOf](util_geom.quat.md#indexof)
- [join](util_geom.quat.md#join)
- [keys](util_geom.quat.md#keys)
- [lastIndexOf](util_geom.quat.md#lastindexof)
- [map](util_geom.quat.md#map)
- [reduce](util_geom.quat.md#reduce)
- [reduceRight](util_geom.quat.md#reduceright)
- [reverse](util_geom.quat.md#reverse)
- [set](util_geom.quat.md#set)
- [slice](util_geom.quat.md#slice)
- [some](util_geom.quat.md#some)
- [sort](util_geom.quat.md#sort)
- [subarray](util_geom.quat.md#subarray)
- [toLocaleString](util_geom.quat.md#tolocalestring)
- [toString](util_geom.quat.md#tostring)
- [valueOf](util_geom.quat.md#valueof)
- [values](util_geom.quat.md#values)
- [add](util_geom.quat.md#add)
- [calculateW](util_geom.quat.md#calculatew)
- [clone](util_geom.quat.md#clone)
- [conjugate](util_geom.quat.md#conjugate)
- [copy](util_geom.quat.md#copy)
- [create](util_geom.quat.md#create)
- [dot](util_geom.quat.md#dot)
- [equals](util_geom.quat.md#equals)
- [exactEquals](util_geom.quat.md#exactequals)
- [from](util_geom.quat.md#from)
- [fromEuler](util_geom.quat.md#fromeuler)
- [fromMat3](util_geom.quat.md#frommat3)
- [fromValues](util_geom.quat.md#fromvalues)
- [getAxisAngle](util_geom.quat.md#getaxisangle)
- [identity](util_geom.quat.md#identity)
- [invert](util_geom.quat.md#invert)
- [len](util_geom.quat.md#len)
- [length](util_geom.quat.md#length-1)
- [lerp](util_geom.quat.md#lerp)
- [mul](util_geom.quat.md#mul)
- [multiply](util_geom.quat.md#multiply)
- [normalize](util_geom.quat.md#normalize)
- [of](util_geom.quat.md#of)
- [rotateX](util_geom.quat.md#rotatex)
- [rotateY](util_geom.quat.md#rotatey)
- [rotateZ](util_geom.quat.md#rotatez)
- [rotationTo](util_geom.quat.md#rotationto)
- [scale](util_geom.quat.md#scale)
- [set](util_geom.quat.md#set-1)
- [setAxes](util_geom.quat.md#setaxes)
- [setAxisAngle](util_geom.quat.md#setaxisangle)
- [slerp](util_geom.quat.md#slerp)
- [sqlerp](util_geom.quat.md#sqlerp)
- [sqrLen](util_geom.quat.md#sqrlen)
- [squaredLength](util_geom.quat.md#squaredlength)
- [str](util_geom.quat.md#str)

## Constructors

### constructor

• **new quat**(`length`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `length` | `number` |

#### Inherited from

Float32Array.constructor

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:4040

• **new quat**(`array`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | [`ArrayBufferLike`](../modules/annotation_annotation_layer_state._internal_.md#arraybufferlike) \| [`ArrayLike`](../interfaces/async_computation_encode_compressed_segmentation_request._internal_.ArrayLike.md)<`number`\> |

#### Inherited from

Float32Array.constructor

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:4041

• **new quat**(`buffer`, `byteOffset?`, `length?`)

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

• **new quat**(`elements`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `elements` | [`Iterable`](../interfaces/annotation_annotation_layer_state._internal_.Iterable.md)<`number`\> |

#### Inherited from

Float32Array.constructor

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:461

• **new quat**()

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

### typeQuat

• `Private` **typeQuat**: `number`

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:2765

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

▸ **copyWithin**(`target`, `start`, `end?`): [`quat`](util_geom.quat.md)

Returns the this object after copying a section of the array identified by start and end
to the same array starting at position target

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `number` | If target is negative, it is treated as length+target where length is the length of the array. |
| `start` | `number` | If start is negative, it is treated as length+start. If end is negative, it is treated as length+end. |
| `end?` | `number` | If not specified, length of the this object is used as its default value. |

#### Returns

[`quat`](util_geom.quat.md)

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

▸ **fill**(`value`, `start?`, `end?`): [`quat`](util_geom.quat.md)

Changes all array elements from `start` to `end` index to a static `value` and returns the modified array

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | value to fill array section with |
| `start?` | `number` | index to start filling the array at. If start is negative, it is treated as length+start where length is the length of the array. |
| `end?` | `number` | index to stop filling the array at. If end is negative, it is treated as length+end. |

#### Returns

[`quat`](util_geom.quat.md)

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

▸ **sort**(`compareFn?`): [`quat`](util_geom.quat.md)

Sorts an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `compareFn?` | (`a`: `number`, `b`: `number`) => `number` | Function used to determine the order of the elements. It is expected to return a negative value if first argument is less than second argument, zero if they're equal and a positive value otherwise. If omitted, the elements are sorted in ascending order. ```ts [11,2,22,1].sort((a, b) => a - b) ``` |

#### Returns

[`quat`](util_geom.quat.md)

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

▸ `Static` **add**(`out`, `a`, `b`): [`quat`](util_geom.quat.md)

Adds two quat's

**`function`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`quat`](util_geom.quat.md) | the receiving quaternion |
| `a` | [`quat`](util_geom.quat.md) | the first operand |
| `b` | [`quat`](util_geom.quat.md) | the second operand |

#### Returns

[`quat`](util_geom.quat.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:2888

___

### calculateW

▸ `Static` **calculateW**(`out`, `a`): [`quat`](util_geom.quat.md)

Calculates the W component of a quat from the X, Y, and Z components.
Assumes that quaternion is 1 unit in length.
Any existing W component will be ignored.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`quat`](util_geom.quat.md) | the receiving quaternion |
| `a` | [`quat`](util_geom.quat.md) | quat to calculate W component of |

#### Returns

[`quat`](util_geom.quat.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:3129

___

### clone

▸ `Static` **clone**(`a`): [`quat`](util_geom.quat.md)

Creates a new quat initialized with values from an existing quaternion

**`function`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`quat`](util_geom.quat.md) | quaternion to clone |

#### Returns

[`quat`](util_geom.quat.md)

a new quaternion

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:2781

___

### conjugate

▸ `Static` **conjugate**(`out`, `a`): [`quat`](util_geom.quat.md)

Calculates the conjugate of a quat
If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`quat`](util_geom.quat.md) | the receiving quaternion |
| `a` | [`quat`](util_geom.quat.md) | quat to calculate conjugate of |

#### Returns

[`quat`](util_geom.quat.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:3041

___

### copy

▸ `Static` **copy**(`out`, `a`): [`quat`](util_geom.quat.md)

Copy the values from one quat to another

**`function`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`quat`](util_geom.quat.md) | the receiving quaternion |
| `a` | [`quat`](util_geom.quat.md) | the source quaternion |

#### Returns

[`quat`](util_geom.quat.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:2803

___

### create

▸ `Static` **create**(): [`quat`](util_geom.quat.md)

Creates a new identity quat

#### Returns

[`quat`](util_geom.quat.md)

a new quaternion

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:2772

___

### dot

▸ `Static` **dot**(`a`, `b`): `number`

Calculates the dot product of two quat's

**`function`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`quat`](util_geom.quat.md) | the first operand |
| `b` | [`quat`](util_geom.quat.md) | the second operand |

#### Returns

`number`

dot product of a and b

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:2975

___

### equals

▸ `Static` **equals**(`a`, `b`): `boolean`

Returns whether or not the quaternions have approximately the same elements in the same position.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`quat`](util_geom.quat.md) | The first vector. |
| `b` | [`quat`](util_geom.quat.md) | The second vector. |

#### Returns

`boolean`

True if the quaternions are equal, false otherwise.

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:3147

___

### exactEquals

▸ `Static` **exactEquals**(`a`, `b`): `boolean`

Returns whether or not the quaternions have exactly the same elements in the same position (when compared with ===)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`quat`](util_geom.quat.md) | The first vector. |
| `b` | [`quat`](util_geom.quat.md) | The second vector. |

#### Returns

`boolean`

True if the quaternions are equal, false otherwise.

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:3138

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

### fromEuler

▸ `Static` **fromEuler**(`out`, `x`, `y`, `z`): [`quat`](util_geom.quat.md)

Creates a quaternion from the given euler angle x, y, z.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`quat`](util_geom.quat.md) | the receiving quaternion |
| `x` | `number` | Angle to rotate around X axis in degrees. |
| `y` | `number` | Angle to rotate around Y axis in degrees. |
| `z` | `number` | Angle to rotate around Z axis in degrees. |

#### Returns

[`quat`](util_geom.quat.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:2986

___

### fromMat3

▸ `Static` **fromMat3**(`out`, `m`): [`quat`](util_geom.quat.md)

Creates a quaternion from the given 3x3 rotation matrix.

NOTE: The resultant quaternion is not normalized, so you should be sure
to renormalize the quaternion yourself where necessary.

**`function`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`quat`](util_geom.quat.md) | the receiving quaternion |
| `m` | [`mat3`](util_geom.mat3.md) | rotation matrix |

#### Returns

[`quat`](util_geom.quat.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:3092

___

### fromValues

▸ `Static` **fromValues**(`x`, `y`, `z`, `w`): [`quat`](util_geom.quat.md)

Creates a new quat initialized with the given values

**`function`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | X component |
| `y` | `number` | Y component |
| `z` | `number` | Z component |
| `w` | `number` | W component |

#### Returns

[`quat`](util_geom.quat.md)

a new quaternion

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:2793

___

### getAxisAngle

▸ `Static` **getAxisAngle**(`out_axis`, `q`): `number`

Gets the rotation axis and angle for a given
 quaternion. If a quaternion is created with
 setAxisAngle, this method will return the same
 values as providied in the original parameter list
 OR functionally equivalent values.
Example: The quaternion formed by axis [0, 0, 1] and
 angle -90 is the same as the quaternion formed by
 [0, 0, 1] and 270. This method favors the latter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out_axis` | `number`[] \| [`vec3`](util_geom.vec3.md) | Vector receiving the axis of rotation |
| `q` | [`quat`](util_geom.quat.md) | Quaternion to be decomposed |

#### Returns

`number`

Angle, in radians, of the rotation

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:2877

___

### identity

▸ `Static` **identity**(`out`): [`quat`](util_geom.quat.md)

Set a quat to the identity quaternion

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`quat`](util_geom.quat.md) | the receiving quaternion |

#### Returns

[`quat`](util_geom.quat.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:2824

___

### invert

▸ `Static` **invert**(`out`, `a`): [`quat`](util_geom.quat.md)

Calculates the inverse of a quat

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`quat`](util_geom.quat.md) | the receiving quaternion |
| `a` | [`quat`](util_geom.quat.md) | quat to calculate inverse of |

#### Returns

[`quat`](util_geom.quat.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:3031

___

### len

▸ `Static` **len**(`a`): `number`

Calculates the length of a quat

**`function`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`quat`](util_geom.quat.md) | vector to calculate length of |

#### Returns

`number`

length of a

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:2937

___

### length

▸ `Static` **length**(`a`): `number`

Calculates the length of a quat

**`function`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`quat`](util_geom.quat.md) | vector to calculate length of |

#### Returns

`number`

length of a

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:2928

___

### lerp

▸ `Static` **lerp**(`out`, `a`, `b`, `t`): [`quat`](util_geom.quat.md)

Performs a linear interpolation between two quat's

**`function`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`quat`](util_geom.quat.md) | the receiving quaternion |
| `a` | [`quat`](util_geom.quat.md) | the first operand |
| `b` | [`quat`](util_geom.quat.md) | the second operand |
| `t` | `number` | interpolation amount between the two inputs |

#### Returns

[`quat`](util_geom.quat.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:2998

___

### mul

▸ `Static` **mul**(`out`, `a`, `b`): [`quat`](util_geom.quat.md)

Multiplies two quat's

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`quat`](util_geom.quat.md) | the receiving quaternion |
| `a` | [`quat`](util_geom.quat.md) | the first operand |
| `b` | [`quat`](util_geom.quat.md) | the second operand |

#### Returns

[`quat`](util_geom.quat.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:2908

___

### multiply

▸ `Static` **multiply**(`out`, `a`, `b`): [`quat`](util_geom.quat.md)

Multiplies two quat's

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`quat`](util_geom.quat.md) | the receiving quaternion |
| `a` | [`quat`](util_geom.quat.md) | the first operand |
| `b` | [`quat`](util_geom.quat.md) | the second operand |

#### Returns

[`quat`](util_geom.quat.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:2898

___

### normalize

▸ `Static` **normalize**(`out`, `a`): [`quat`](util_geom.quat.md)

Normalize a quat

**`function`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`quat`](util_geom.quat.md) | the receiving quaternion |
| `a` | [`quat`](util_geom.quat.md) | quaternion to normalize |

#### Returns

[`quat`](util_geom.quat.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:2965

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

### rotateX

▸ `Static` **rotateX**(`out`, `a`, `rad`): [`quat`](util_geom.quat.md)

Rotates a quaternion by the given angle about the X axis

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`quat`](util_geom.quat.md) | quat receiving operation result |
| `a` | [`quat`](util_geom.quat.md) | quat to rotate |
| `rad` | `number` | angle (in radians) to rotate |

#### Returns

[`quat`](util_geom.quat.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:3059

___

### rotateY

▸ `Static` **rotateY**(`out`, `a`, `rad`): [`quat`](util_geom.quat.md)

Rotates a quaternion by the given angle about the Y axis

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`quat`](util_geom.quat.md) | quat receiving operation result |
| `a` | [`quat`](util_geom.quat.md) | quat to rotate |
| `rad` | `number` | angle (in radians) to rotate |

#### Returns

[`quat`](util_geom.quat.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:3069

___

### rotateZ

▸ `Static` **rotateZ**(`out`, `a`, `rad`): [`quat`](util_geom.quat.md)

Rotates a quaternion by the given angle about the Z axis

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`quat`](util_geom.quat.md) | quat receiving operation result |
| `a` | [`quat`](util_geom.quat.md) | quat to rotate |
| `rad` | `number` | angle (in radians) to rotate |

#### Returns

[`quat`](util_geom.quat.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:3079

___

### rotationTo

▸ `Static` **rotationTo**(`out`, `a`, `b`): [`quat`](util_geom.quat.md)

Sets a quaternion to represent the shortest rotation from one
vector to another.

Both vectors are assumed to be unit length.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`quat`](util_geom.quat.md) | the receiving quaternion. |
| `a` | `number`[] \| [`vec3`](util_geom.vec3.md) | the initial vector |
| `b` | `number`[] \| [`vec3`](util_geom.vec3.md) | the destination vector |

#### Returns

[`quat`](util_geom.quat.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:2837

▸ `Static` **rotationTo**(`out`, `a`, `b`): [`quat`](util_geom.quat.md)

Sets a quaternion to represent the shortest rotation from one
vector to another.

Both vectors are assumed to be unit length.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`quat`](util_geom.quat.md) | the receiving quaternion. |
| `a` | `number`[] \| [`vec3`](util_geom.vec3.md) | the initial vector |
| `b` | `number`[] \| [`vec3`](util_geom.vec3.md) | the destination vector |

#### Returns

[`quat`](util_geom.quat.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:3118

___

### scale

▸ `Static` **scale**(`out`, `a`, `b`): [`quat`](util_geom.quat.md)

Scales a quat by a scalar number

**`function`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`quat`](util_geom.quat.md) | the receiving vector |
| `a` | [`quat`](util_geom.quat.md) | the vector to scale |
| `b` | `number` | amount to scale the vector by |

#### Returns

[`quat`](util_geom.quat.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:2919

___

### set

▸ `Static` **set**(`out`, `x`, `y`, `z`, `w`): [`quat`](util_geom.quat.md)

Set the components of a quat to the given values

**`function`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`quat`](util_geom.quat.md) | the receiving quaternion |
| `x` | `number` | X component |
| `y` | `number` | Y component |
| `z` | `number` | Z component |
| `w` | `number` | W component |

#### Returns

[`quat`](util_geom.quat.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:2816

___

### setAxes

▸ `Static` **setAxes**(`out`, `view`, `right`, `up`): [`quat`](util_geom.quat.md)

Sets the specified quaternion with values corresponding to the given
axes. Each axis is a vec3 and is expected to be unit length and
perpendicular to all other specified axes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`quat`](util_geom.quat.md) | the receiving quat |
| `view` | `number`[] \| [`vec3`](util_geom.vec3.md) | the vector representing the viewing direction |
| `right` | `number`[] \| [`vec3`](util_geom.vec3.md) | the vector representing the local "right" direction |
| `up` | `number`[] \| [`vec3`](util_geom.vec3.md) | the vector representing the local "up" direction |

#### Returns

[`quat`](util_geom.quat.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:2849

▸ `Static` **setAxes**(`out`, `view`, `right`, `up`): [`quat`](util_geom.quat.md)

Sets the specified quaternion with values corresponding to the given
axes. Each axis is a vec3 and is expected to be unit length and
perpendicular to all other specified axes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`quat`](util_geom.quat.md) | the receiving quat |
| `view` | `number`[] \| [`vec3`](util_geom.vec3.md) | the vector representing the viewing direction |
| `right` | `number`[] \| [`vec3`](util_geom.vec3.md) | the vector representing the local "right" direction |
| `up` | `number`[] \| [`vec3`](util_geom.vec3.md) | the vector representing the local "up" direction |

#### Returns

[`quat`](util_geom.quat.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:3105

___

### setAxisAngle

▸ `Static` **setAxisAngle**(`out`, `axis`, `rad`): [`quat`](util_geom.quat.md)

Sets a quat from the given angle and rotation axis,
then returns it.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`quat`](util_geom.quat.md) | the receiving quaternion |
| `axis` | `number`[] \| [`vec3`](util_geom.vec3.md) | the axis around which to rotate |
| `rad` | `number` | the angle in radians |

#### Returns

[`quat`](util_geom.quat.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:2862

___

### slerp

▸ `Static` **slerp**(`out`, `a`, `b`, `t`): [`quat`](util_geom.quat.md)

Performs a spherical linear interpolation between two quat

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`quat`](util_geom.quat.md) | the receiving quaternion |
| `a` | [`quat`](util_geom.quat.md) | the first operand |
| `b` | [`quat`](util_geom.quat.md) | the second operand |
| `t` | `number` | interpolation amount between the two inputs |

#### Returns

[`quat`](util_geom.quat.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:3009

___

### sqlerp

▸ `Static` **sqlerp**(`out`, `a`, `b`, `c`, `d`, `t`): [`quat`](util_geom.quat.md)

Performs a spherical linear interpolation with two control points

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`quat`](util_geom.quat.md) | the receiving quaternion |
| `a` | [`quat`](util_geom.quat.md) | the first operand |
| `b` | [`quat`](util_geom.quat.md) | the second operand |
| `c` | [`quat`](util_geom.quat.md) | the third operand |
| `d` | [`quat`](util_geom.quat.md) | the fourth operand |
| `t` | `number` | interpolation amount |

#### Returns

[`quat`](util_geom.quat.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:3022

___

### sqrLen

▸ `Static` **sqrLen**(`a`): `number`

Calculates the squared length of a quat

**`function`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`quat`](util_geom.quat.md) | vector to calculate squared length of |

#### Returns

`number`

squared length of a

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:2955

___

### squaredLength

▸ `Static` **squaredLength**(`a`): `number`

Calculates the squared length of a quat

**`function`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`quat`](util_geom.quat.md) | vector to calculate squared length of |

#### Returns

`number`

squared length of a

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:2946

___

### str

▸ `Static` **str**(`a`): `string`

Returns a string representation of a quaternion

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`quat`](util_geom.quat.md) | quat to represent as a string |

#### Returns

`string`

string representation of the quat

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:3049
