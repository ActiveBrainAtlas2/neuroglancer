[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/util/geom](../modules/neuroglancer_util_geom.md) / vec4

# Class: vec4

[neuroglancer/util/geom](../modules/neuroglancer_util_geom.md).vec4

## Hierarchy

- `Float32Array`

  ↳ **`vec4`**

## Table of contents

### Constructors

- [constructor](neuroglancer_util_geom.vec4.md#constructor)

### Properties

- [BYTES\_PER\_ELEMENT](neuroglancer_util_geom.vec4.md#bytes_per_element)
- [[toStringTag]](neuroglancer_util_geom.vec4.md#[tostringtag])
- [buffer](neuroglancer_util_geom.vec4.md#buffer)
- [byteLength](neuroglancer_util_geom.vec4.md#bytelength)
- [byteOffset](neuroglancer_util_geom.vec4.md#byteoffset)
- [length](neuroglancer_util_geom.vec4.md#length)
- [typeVec3](neuroglancer_util_geom.vec4.md#typevec3)
- [BYTES\_PER\_ELEMENT](neuroglancer_util_geom.vec4.md#bytes_per_element-1)

### Methods

- [[iterator]](neuroglancer_util_geom.vec4.md#[iterator])
- [copyWithin](neuroglancer_util_geom.vec4.md#copywithin)
- [entries](neuroglancer_util_geom.vec4.md#entries)
- [every](neuroglancer_util_geom.vec4.md#every)
- [fill](neuroglancer_util_geom.vec4.md#fill)
- [filter](neuroglancer_util_geom.vec4.md#filter)
- [find](neuroglancer_util_geom.vec4.md#find)
- [findIndex](neuroglancer_util_geom.vec4.md#findindex)
- [forEach](neuroglancer_util_geom.vec4.md#foreach)
- [includes](neuroglancer_util_geom.vec4.md#includes)
- [indexOf](neuroglancer_util_geom.vec4.md#indexof)
- [join](neuroglancer_util_geom.vec4.md#join)
- [keys](neuroglancer_util_geom.vec4.md#keys)
- [lastIndexOf](neuroglancer_util_geom.vec4.md#lastindexof)
- [map](neuroglancer_util_geom.vec4.md#map)
- [reduce](neuroglancer_util_geom.vec4.md#reduce)
- [reduceRight](neuroglancer_util_geom.vec4.md#reduceright)
- [reverse](neuroglancer_util_geom.vec4.md#reverse)
- [set](neuroglancer_util_geom.vec4.md#set)
- [slice](neuroglancer_util_geom.vec4.md#slice)
- [some](neuroglancer_util_geom.vec4.md#some)
- [sort](neuroglancer_util_geom.vec4.md#sort)
- [subarray](neuroglancer_util_geom.vec4.md#subarray)
- [toLocaleString](neuroglancer_util_geom.vec4.md#tolocalestring)
- [toString](neuroglancer_util_geom.vec4.md#tostring)
- [valueOf](neuroglancer_util_geom.vec4.md#valueof)
- [values](neuroglancer_util_geom.vec4.md#values)
- [add](neuroglancer_util_geom.vec4.md#add)
- [ceil](neuroglancer_util_geom.vec4.md#ceil)
- [clone](neuroglancer_util_geom.vec4.md#clone)
- [copy](neuroglancer_util_geom.vec4.md#copy)
- [create](neuroglancer_util_geom.vec4.md#create)
- [dist](neuroglancer_util_geom.vec4.md#dist)
- [distance](neuroglancer_util_geom.vec4.md#distance)
- [div](neuroglancer_util_geom.vec4.md#div)
- [divide](neuroglancer_util_geom.vec4.md#divide)
- [dot](neuroglancer_util_geom.vec4.md#dot)
- [equals](neuroglancer_util_geom.vec4.md#equals)
- [exactEquals](neuroglancer_util_geom.vec4.md#exactequals)
- [floor](neuroglancer_util_geom.vec4.md#floor)
- [forEach](neuroglancer_util_geom.vec4.md#foreach-1)
- [from](neuroglancer_util_geom.vec4.md#from)
- [fromValues](neuroglancer_util_geom.vec4.md#fromvalues)
- [inverse](neuroglancer_util_geom.vec4.md#inverse)
- [len](neuroglancer_util_geom.vec4.md#len)
- [length](neuroglancer_util_geom.vec4.md#length-1)
- [lerp](neuroglancer_util_geom.vec4.md#lerp)
- [max](neuroglancer_util_geom.vec4.md#max)
- [min](neuroglancer_util_geom.vec4.md#min)
- [mul](neuroglancer_util_geom.vec4.md#mul)
- [multiply](neuroglancer_util_geom.vec4.md#multiply)
- [negate](neuroglancer_util_geom.vec4.md#negate)
- [normalize](neuroglancer_util_geom.vec4.md#normalize)
- [of](neuroglancer_util_geom.vec4.md#of)
- [random](neuroglancer_util_geom.vec4.md#random)
- [round](neuroglancer_util_geom.vec4.md#round)
- [scale](neuroglancer_util_geom.vec4.md#scale)
- [scaleAndAdd](neuroglancer_util_geom.vec4.md#scaleandadd)
- [set](neuroglancer_util_geom.vec4.md#set-1)
- [sqrDist](neuroglancer_util_geom.vec4.md#sqrdist)
- [sqrLen](neuroglancer_util_geom.vec4.md#sqrlen)
- [squaredDistance](neuroglancer_util_geom.vec4.md#squareddistance)
- [squaredLength](neuroglancer_util_geom.vec4.md#squaredlength)
- [str](neuroglancer_util_geom.vec4.md#str)
- [sub](neuroglancer_util_geom.vec4.md#sub)
- [subtract](neuroglancer_util_geom.vec4.md#subtract)
- [transformMat4](neuroglancer_util_geom.vec4.md#transformmat4)
- [transformQuat](neuroglancer_util_geom.vec4.md#transformquat)

## Constructors

### constructor

• **new vec4**(`length`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `length` | `number` |

#### Inherited from

Float32Array.constructor

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:4040

• **new vec4**(`array`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | [`ArrayBufferLike`](../modules/main_module._internal_.md#arraybufferlike) \| [`ArrayLike`](../interfaces/neuroglancer_async_computation_encode_compressed_segmentation_request._internal_.ArrayLike.md)<`number`\> |

#### Inherited from

Float32Array.constructor

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:4041

• **new vec4**(`buffer`, `byteOffset?`, `length?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | [`ArrayBufferLike`](../modules/main_module._internal_.md#arraybufferlike) |
| `byteOffset?` | `number` |
| `length?` | `number` |

#### Inherited from

Float32Array.constructor

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:4042

• **new vec4**(`elements`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `elements` | [`Iterable`](../interfaces/main_module._internal_.Iterable.md)<`number`\> |

#### Inherited from

Float32Array.constructor

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:461

• **new vec4**()

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

• `Readonly` **buffer**: [`ArrayBufferLike`](../modules/main_module._internal_.md#arraybufferlike)

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

### typeVec3

• `Private` **typeVec3**: `number`

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:976

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

▸ **[iterator]**(): [`IterableIterator`](../interfaces/main_module._internal_.IterableIterator.md)<`number`\>

#### Returns

[`IterableIterator`](../interfaces/main_module._internal_.IterableIterator.md)<`number`\>

#### Inherited from

Float32Array.\_\_@iterator@87

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:445

___

### copyWithin

▸ **copyWithin**(`target`, `start`, `end?`): [`vec4`](neuroglancer_util_geom.vec4.md)

Returns the this object after copying a section of the array identified by start and end
to the same array starting at position target

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `number` | If target is negative, it is treated as length+target where length is the  length of the array. |
| `start` | `number` | If start is negative, it is treated as length+start. If end is negative, it  is treated as length+end. |
| `end?` | `number` | If not specified, length of the this object is used as its default value. |

#### Returns

[`vec4`](neuroglancer_util_geom.vec4.md)

#### Inherited from

Float32Array.copyWithin

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:3824

___

### entries

▸ **entries**(): [`IterableIterator`](../interfaces/main_module._internal_.IterableIterator.md)<[`number`, `number`]\>

Returns an array of key, value pairs for every entry in the array

#### Returns

[`IterableIterator`](../interfaces/main_module._internal_.IterableIterator.md)<[`number`, `number`]\>

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
| `predicate` | (`value`: `number`, `index`: `number`, `array`: `Float32Array`) => `unknown` | A function that accepts up to three arguments. The every method calls  the predicate function for each element in the array until the predicate returns a value  which is coercible to the Boolean value false, or until the end of the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function.  If thisArg is omitted, undefined is used as the this value. |

#### Returns

`boolean`

#### Inherited from

Float32Array.every

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:3834

___

### fill

▸ **fill**(`value`, `start?`, `end?`): [`vec4`](neuroglancer_util_geom.vec4.md)

Changes all array elements from `start` to `end` index to a static `value` and returns the modified array

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | value to fill array section with |
| `start?` | `number` | index to start filling the array at. If start is negative, it is treated as  length+start where length is the length of the array. |
| `end?` | `number` | index to stop filling the array at. If end is negative, it is treated as  length+end. |

#### Returns

[`vec4`](neuroglancer_util_geom.vec4.md)

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
| `predicate` | (`value`: `number`, `index`: `number`, `array`: `Float32Array`) => `any` | A function that accepts up to three arguments. The filter method calls  the predicate function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function.  If thisArg is omitted, undefined is used as the this value. |

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
| `predicate` | (`value`: `number`, `index`: `number`, `obj`: `Float32Array`) => `boolean` | find calls predicate once for each element of the array, in ascending  order, until it finds one where predicate returns true. If such an element is found, find  immediately returns that element value. Otherwise, find returns undefined. |
| `thisArg?` | `any` | If provided, it will be used as the this value for each invocation of  predicate. If it is not provided, undefined is used instead. |

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
| `predicate` | (`value`: `number`, `index`: `number`, `obj`: `Float32Array`) => `boolean` | find calls predicate once for each element of the array, in ascending  order, until it finds one where predicate returns true. If such an element is found,  findIndex immediately returns that element index. Otherwise, findIndex returns -1. |
| `thisArg?` | `any` | If provided, it will be used as the this value for each invocation of  predicate. If it is not provided, undefined is used instead. |

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
| `callbackfn` | (`value`: `number`, `index`: `number`, `array`: `Float32Array`) => `void` | A function that accepts up to three arguments. forEach calls the  callbackfn function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the callbackfn function.  If thisArg is omitted, undefined is used as the this value. |

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
| `fromIndex?` | `number` | The array index at which to begin the search. If fromIndex is omitted, the   search starts at index 0. |

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
| `separator?` | `string` | A string used to separate one element of an array from the next in the  resulting String. If omitted, the array elements are separated with a comma. |

#### Returns

`string`

#### Inherited from

Float32Array.join

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:3899

___

### keys

▸ **keys**(): [`IterableIterator`](../interfaces/main_module._internal_.IterableIterator.md)<`number`\>

Returns an list of keys in the array

#### Returns

[`IterableIterator`](../interfaces/main_module._internal_.IterableIterator.md)<`number`\>

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
| `fromIndex?` | `number` | The array index at which to begin the search. If fromIndex is omitted, the  search starts at index 0. |

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
| `callbackfn` | (`value`: `number`, `index`: `number`, `array`: `Float32Array`) => `number` | A function that accepts up to three arguments. The map method calls the  callbackfn function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the callbackfn function.  If thisArg is omitted, undefined is used as the this value. |

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
| `callbackfn` | (`previousValue`: `number`, `currentValue`: `number`, `currentIndex`: `number`, `array`: `Float32Array`) => `number` | A function that accepts up to four arguments. The reduce method calls the  callbackfn function one time for each element in the array. |

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
| `callbackfn` | (`previousValue`: `U`, `currentValue`: `number`, `currentIndex`: `number`, `array`: `Float32Array`) => `U` | A function that accepts up to four arguments. The reduce method calls the  callbackfn function one time for each element in the array. |
| `initialValue` | `U` | If initialValue is specified, it is used as the initial value to start  the accumulation. The first call to the callbackfn function provides this value as an argument  instead of an array value. |

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
| `callbackfn` | (`previousValue`: `number`, `currentValue`: `number`, `currentIndex`: `number`, `array`: `Float32Array`) => `number` | A function that accepts up to four arguments. The reduceRight method calls  the callbackfn function one time for each element in the array. |

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
| `callbackfn` | (`previousValue`: `U`, `currentValue`: `number`, `currentIndex`: `number`, `array`: `Float32Array`) => `U` | A function that accepts up to four arguments. The reduceRight method calls  the callbackfn function one time for each element in the array. |
| `initialValue` | `U` | If initialValue is specified, it is used as the initial value to start  the accumulation. The first call to the callbackfn function provides this value as an argument  instead of an array value. |

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
| `array` | [`ArrayLike`](../interfaces/neuroglancer_async_computation_encode_compressed_segmentation_request._internal_.ArrayLike.md)<`number`\> | A typed or untyped array of values to set. |
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
| `predicate` | (`value`: `number`, `index`: `number`, `array`: `Float32Array`) => `unknown` | A function that accepts up to three arguments. The some method calls  the predicate function for each element in the array until the predicate returns a value  which is coercible to the Boolean value true, or until the end of the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function.  If thisArg is omitted, undefined is used as the this value. |

#### Returns

`boolean`

#### Inherited from

Float32Array.some

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:4001

___

### sort

▸ **sort**(`compareFn?`): [`vec4`](neuroglancer_util_geom.vec4.md)

Sorts an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `compareFn?` | (`a`: `number`, `b`: `number`) => `number` | Function used to determine the order of the elements. It is expected to return  a negative value if first argument is less than second argument, zero if they're equal and a positive  value otherwise. If omitted, the elements are sorted in ascending order.  ```ts  [11,2,22,1].sort((a, b) => a - b)  ``` |

#### Returns

[`vec4`](neuroglancer_util_geom.vec4.md)

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

▸ **values**(): [`IterableIterator`](../interfaces/main_module._internal_.IterableIterator.md)<`number`\>

Returns an list of values in the array

#### Returns

[`IterableIterator`](../interfaces/main_module._internal_.IterableIterator.md)<`number`\>

#### Inherited from

Float32Array.values

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:457

___

### add

▸ `Static` **add**(`out`, `a`, `b`): [`vec4`](neuroglancer_util_geom.vec4.md)

Adds two vec4's

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`vec4`](neuroglancer_util_geom.vec4.md) | the receiving vector |
| `a` | `number`[] \| [`vec4`](neuroglancer_util_geom.vec4.md) | the first operand |
| `b` | `number`[] \| [`vec4`](neuroglancer_util_geom.vec4.md) | the second operand |

#### Returns

[`vec4`](neuroglancer_util_geom.vec4.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:1033

___

### ceil

▸ `Static` **ceil**(`out`, `a`): [`vec4`](neuroglancer_util_geom.vec4.md)

Math.ceil the components of a vec4

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`vec4`](neuroglancer_util_geom.vec4.md) | the receiving vector |
| `a` | `number`[] \| [`vec4`](neuroglancer_util_geom.vec4.md) | vector to ceil |

#### Returns

[`vec4`](neuroglancer_util_geom.vec4.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:1102

___

### clone

▸ `Static` **clone**(`a`): [`vec4`](neuroglancer_util_geom.vec4.md)

Creates a new vec4 initialized with values from an existing vector

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number`[] \| [`vec4`](neuroglancer_util_geom.vec4.md) | vector to clone |

#### Returns

[`vec4`](neuroglancer_util_geom.vec4.md)

a new 4D vector

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:991

___

### copy

▸ `Static` **copy**(`out`, `a`): [`vec4`](neuroglancer_util_geom.vec4.md)

Copy the values from one vec4 to another

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`vec4`](neuroglancer_util_geom.vec4.md) | the receiving vector |
| `a` | `number`[] \| [`vec4`](neuroglancer_util_geom.vec4.md) | the source vector |

#### Returns

[`vec4`](neuroglancer_util_geom.vec4.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:1011

___

### create

▸ `Static` **create**(): [`vec4`](neuroglancer_util_geom.vec4.md)

Creates a new, empty vec4

#### Returns

[`vec4`](neuroglancer_util_geom.vec4.md)

a new 4D vector

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:983

___

### dist

▸ `Static` **dist**(`a`, `b`): `number`

Calculates the euclidian distance between two vec4's

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number`[] \| [`vec4`](neuroglancer_util_geom.vec4.md) | the first operand |
| `b` | `number`[] \| [`vec4`](neuroglancer_util_geom.vec4.md) | the second operand |

#### Returns

`number`

distance between a and b

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:1179

___

### distance

▸ `Static` **distance**(`a`, `b`): `number`

Calculates the euclidian distance between two vec4's

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number`[] \| [`vec4`](neuroglancer_util_geom.vec4.md) | the first operand |
| `b` | `number`[] \| [`vec4`](neuroglancer_util_geom.vec4.md) | the second operand |

#### Returns

`number`

distance between a and b

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:1170

___

### div

▸ `Static` **div**(`out`, `a`, `b`): [`vec4`](neuroglancer_util_geom.vec4.md)

Divides two vec4's

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`vec4`](neuroglancer_util_geom.vec4.md) | the receiving vector |
| `a` | `number`[] \| [`vec4`](neuroglancer_util_geom.vec4.md) | the first operand |
| `b` | `number`[] \| [`vec4`](neuroglancer_util_geom.vec4.md) | the second operand |

#### Returns

[`vec4`](neuroglancer_util_geom.vec4.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:1093

___

### divide

▸ `Static` **divide**(`out`, `a`, `b`): [`vec4`](neuroglancer_util_geom.vec4.md)

Divides two vec4's

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`vec4`](neuroglancer_util_geom.vec4.md) | the receiving vector |
| `a` | `number`[] \| [`vec4`](neuroglancer_util_geom.vec4.md) | the first operand |
| `b` | `number`[] \| [`vec4`](neuroglancer_util_geom.vec4.md) | the second operand |

#### Returns

[`vec4`](neuroglancer_util_geom.vec4.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:1083

___

### dot

▸ `Static` **dot**(`a`, `b`): `number`

Calculates the dot product of two vec4's

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number`[] \| [`vec4`](neuroglancer_util_geom.vec4.md) | the first operand |
| `b` | `number`[] \| [`vec4`](neuroglancer_util_geom.vec4.md) | the second operand |

#### Returns

`number`

dot product of a and b

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:1265

___

### equals

▸ `Static` **equals**(`a`, `b`): `boolean`

Returns whether or not the vectors have approximately the same elements in the same position.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number`[] \| [`vec4`](neuroglancer_util_geom.vec4.md) | The first vector. |
| `b` | `number`[] \| [`vec4`](neuroglancer_util_geom.vec4.md) | The second vector. |

#### Returns

`boolean`

True if the vectors are equal, false otherwise.

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:1369

___

### exactEquals

▸ `Static` **exactEquals**(`a`, `b`): `boolean`

Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number`[] \| [`vec4`](neuroglancer_util_geom.vec4.md) | The first vector. |
| `b` | `number`[] \| [`vec4`](neuroglancer_util_geom.vec4.md) | The second vector. |

#### Returns

`boolean`

True if the vectors are equal, false otherwise.

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:1360

___

### floor

▸ `Static` **floor**(`out`, `a`): [`vec4`](neuroglancer_util_geom.vec4.md)

Math.floor the components of a vec4

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`vec4`](neuroglancer_util_geom.vec4.md) | the receiving vector |
| `a` | `number`[] \| [`vec4`](neuroglancer_util_geom.vec4.md) | vector to floor |

#### Returns

[`vec4`](neuroglancer_util_geom.vec4.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:1111

___

### forEach

▸ `Static` **forEach**(`a`, `stride`, `offset`, `count`, `fn`, `arg`): `Float32Array`

Perform some operation over an array of vec4s.

**`Function`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `Float32Array` | the array of vectors to iterate over |
| `stride` | `number` | Number of elements between the start of each vec4. If 0 assumes tightly packed |
| `offset` | `number` | Number of elements to skip at the beginning of the array |
| `count` | `number` | Number of vec4s to iterate over. If 0 iterates over entire array |
| `fn` | (`a`: `number`[] \| [`vec4`](neuroglancer_util_geom.vec4.md), `b`: `number`[] \| [`vec4`](neuroglancer_util_geom.vec4.md), `arg`: `any`) => `void` | Function to call for each vector in the array |
| `arg` | `any` | additional argument to pass to fn |

#### Returns

`Float32Array`

a

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:1328

▸ `Static` **forEach**(`a`, `stride`, `offset`, `count`, `fn`): `Float32Array`

Perform some operation over an array of vec4s.

**`Function`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `Float32Array` | the array of vectors to iterate over |
| `stride` | `number` | Number of elements between the start of each vec4. If 0 assumes tightly packed |
| `offset` | `number` | Number of elements to skip at the beginning of the array |
| `count` | `number` | Number of vec4s to iterate over. If 0 iterates over entire array |
| `fn` | (`a`: `number`[] \| [`vec4`](neuroglancer_util_geom.vec4.md), `b`: `number`[] \| [`vec4`](neuroglancer_util_geom.vec4.md)) => `void` | Function to call for each vector in the array |

#### Returns

`Float32Array`

a

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:1342

___

### from

▸ `Static` **from**(`arrayLike`): `Float32Array`

Creates an array from an array-like or iterable object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arrayLike` | [`ArrayLike`](../interfaces/neuroglancer_async_computation_encode_compressed_segmentation_request._internal_.ArrayLike.md)<`number`\> | An array-like or iterable object to convert to an array. |

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
| `arrayLike` | [`ArrayLike`](../interfaces/neuroglancer_async_computation_encode_compressed_segmentation_request._internal_.ArrayLike.md)<`T`\> | An array-like or iterable object to convert to an array. |
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
| `arrayLike` | [`Iterable`](../interfaces/main_module._internal_.Iterable.md)<`number`\> | An array-like or iterable object to convert to an array. |
| `mapfn?` | (`v`: `number`, `k`: `number`) => `number` | A mapping function to call on every element of the array. |
| `thisArg?` | `any` | Value of 'this' used to invoke the mapfn. |

#### Returns

`Float32Array`

#### Inherited from

Float32Array.from

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:469

___

### fromValues

▸ `Static` **fromValues**(`x`, `y`, `z`, `w`): [`vec4`](neuroglancer_util_geom.vec4.md)

Creates a new vec4 initialized with the given values

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | X component |
| `y` | `number` | Y component |
| `z` | `number` | Z component |
| `w` | `number` | W component |

#### Returns

[`vec4`](neuroglancer_util_geom.vec4.md)

a new 4D vector

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:1002

___

### inverse

▸ `Static` **inverse**(`out`, `a`): [`vec4`](neuroglancer_util_geom.vec4.md)

Returns the inverse of the components of a vec4

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`vec4`](neuroglancer_util_geom.vec4.md) | the receiving vector |
| `a` | `number`[] \| [`vec4`](neuroglancer_util_geom.vec4.md) | vector to invert |

#### Returns

[`vec4`](neuroglancer_util_geom.vec4.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:1247

___

### len

▸ `Static` **len**(`a`): `number`

Calculates the length of a vec4

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number`[] \| [`vec4`](neuroglancer_util_geom.vec4.md) | vector to calculate length of |

#### Returns

`number`

length of a

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:1213

___

### length

▸ `Static` **length**(`a`): `number`

Calculates the length of a vec4

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number`[] \| [`vec4`](neuroglancer_util_geom.vec4.md) | vector to calculate length of |

#### Returns

`number`

length of a

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:1205

___

### lerp

▸ `Static` **lerp**(`out`, `a`, `b`, `t`): [`vec4`](neuroglancer_util_geom.vec4.md)

Performs a linear interpolation between two vec4's

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`vec4`](neuroglancer_util_geom.vec4.md) | the receiving vector |
| `a` | `number`[] \| [`vec4`](neuroglancer_util_geom.vec4.md) | the first operand |
| `b` | `number`[] \| [`vec4`](neuroglancer_util_geom.vec4.md) | the second operand |
| `t` | `number` | interpolation amount between the two inputs |

#### Returns

[`vec4`](neuroglancer_util_geom.vec4.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:1276

___

### max

▸ `Static` **max**(`out`, `a`, `b`): [`vec4`](neuroglancer_util_geom.vec4.md)

Returns the maximum of two vec4's

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`vec4`](neuroglancer_util_geom.vec4.md) | the receiving vector |
| `a` | `number`[] \| [`vec4`](neuroglancer_util_geom.vec4.md) | the first operand |
| `b` | `number`[] \| [`vec4`](neuroglancer_util_geom.vec4.md) | the second operand |

#### Returns

[`vec4`](neuroglancer_util_geom.vec4.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:1131

___

### min

▸ `Static` **min**(`out`, `a`, `b`): [`vec4`](neuroglancer_util_geom.vec4.md)

Returns the minimum of two vec4's

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`vec4`](neuroglancer_util_geom.vec4.md) | the receiving vector |
| `a` | `number`[] \| [`vec4`](neuroglancer_util_geom.vec4.md) | the first operand |
| `b` | `number`[] \| [`vec4`](neuroglancer_util_geom.vec4.md) | the second operand |

#### Returns

[`vec4`](neuroglancer_util_geom.vec4.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:1121

___

### mul

▸ `Static` **mul**(`out`, `a`, `b`): [`vec4`](neuroglancer_util_geom.vec4.md)

Multiplies two vec4's

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`vec4`](neuroglancer_util_geom.vec4.md) | the receiving vector |
| `a` | `number`[] \| [`vec4`](neuroglancer_util_geom.vec4.md) | the first operand |
| `b` | `number`[] \| [`vec4`](neuroglancer_util_geom.vec4.md) | the second operand |

#### Returns

[`vec4`](neuroglancer_util_geom.vec4.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:1073

___

### multiply

▸ `Static` **multiply**(`out`, `a`, `b`): [`vec4`](neuroglancer_util_geom.vec4.md)

Multiplies two vec4's

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`vec4`](neuroglancer_util_geom.vec4.md) | the receiving vector |
| `a` | `number`[] \| [`vec4`](neuroglancer_util_geom.vec4.md) | the first operand |
| `b` | `number`[] \| [`vec4`](neuroglancer_util_geom.vec4.md) | the second operand |

#### Returns

[`vec4`](neuroglancer_util_geom.vec4.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:1063

___

### negate

▸ `Static` **negate**(`out`, `a`): [`vec4`](neuroglancer_util_geom.vec4.md)

Negates the components of a vec4

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`vec4`](neuroglancer_util_geom.vec4.md) | the receiving vector |
| `a` | `number`[] \| [`vec4`](neuroglancer_util_geom.vec4.md) | vector to negate |

#### Returns

[`vec4`](neuroglancer_util_geom.vec4.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:1238

___

### normalize

▸ `Static` **normalize**(`out`, `a`): [`vec4`](neuroglancer_util_geom.vec4.md)

Normalize a vec4

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`vec4`](neuroglancer_util_geom.vec4.md) | the receiving vector |
| `a` | `number`[] \| [`vec4`](neuroglancer_util_geom.vec4.md) | vector to normalize |

#### Returns

[`vec4`](neuroglancer_util_geom.vec4.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:1256

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

### random

▸ `Static` **random**(`out`): [`vec4`](neuroglancer_util_geom.vec4.md)

Generates a random unit vector

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`vec4`](neuroglancer_util_geom.vec4.md) | the receiving vector |

#### Returns

[`vec4`](neuroglancer_util_geom.vec4.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:1284

▸ `Static` **random**(`out`, `scale`): [`vec4`](neuroglancer_util_geom.vec4.md)

Generates a random vector with the given scale

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`vec4`](neuroglancer_util_geom.vec4.md) | the receiving vector |
| `scale` | `number` | length of the resulting vector. If ommitted, a unit vector will be returned |

#### Returns

[`vec4`](neuroglancer_util_geom.vec4.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:1293

___

### round

▸ `Static` **round**(`out`, `a`): [`vec4`](neuroglancer_util_geom.vec4.md)

Math.round the components of a vec4

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`vec4`](neuroglancer_util_geom.vec4.md) | the receiving vector |
| `a` | `number`[] \| [`vec4`](neuroglancer_util_geom.vec4.md) | vector to round |

#### Returns

[`vec4`](neuroglancer_util_geom.vec4.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:1140

___

### scale

▸ `Static` **scale**(`out`, `a`, `b`): [`vec4`](neuroglancer_util_geom.vec4.md)

Scales a vec4 by a scalar number

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`vec4`](neuroglancer_util_geom.vec4.md) | the receiving vector |
| `a` | `number`[] \| [`vec4`](neuroglancer_util_geom.vec4.md) | the vector to scale |
| `b` | `number` | amount to scale the vector by |

#### Returns

[`vec4`](neuroglancer_util_geom.vec4.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:1150

___

### scaleAndAdd

▸ `Static` **scaleAndAdd**(`out`, `a`, `b`, `scale`): [`vec4`](neuroglancer_util_geom.vec4.md)

Adds two vec4's after scaling the second operand by a scalar value

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`vec4`](neuroglancer_util_geom.vec4.md) | the receiving vector |
| `a` | `number`[] \| [`vec4`](neuroglancer_util_geom.vec4.md) | the first operand |
| `b` | `number`[] \| [`vec4`](neuroglancer_util_geom.vec4.md) | the second operand |
| `scale` | `number` | the amount to scale b by before adding |

#### Returns

[`vec4`](neuroglancer_util_geom.vec4.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:1161

___

### set

▸ `Static` **set**(`out`, `x`, `y`, `z`, `w`): [`vec4`](neuroglancer_util_geom.vec4.md)

Set the components of a vec4 to the given values

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`vec4`](neuroglancer_util_geom.vec4.md) | the receiving vector |
| `x` | `number` | X component |
| `y` | `number` | Y component |
| `z` | `number` | Z component |
| `w` | `number` | W component |

#### Returns

[`vec4`](neuroglancer_util_geom.vec4.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:1023

___

### sqrDist

▸ `Static` **sqrDist**(`a`, `b`): `number`

Calculates the squared euclidian distance between two vec4's

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number`[] \| [`vec4`](neuroglancer_util_geom.vec4.md) | the first operand |
| `b` | `number`[] \| [`vec4`](neuroglancer_util_geom.vec4.md) | the second operand |

#### Returns

`number`

squared distance between a and b

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:1197

___

### sqrLen

▸ `Static` **sqrLen**(`a`): `number`

Calculates the squared length of a vec4

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number`[] \| [`vec4`](neuroglancer_util_geom.vec4.md) | vector to calculate squared length of |

#### Returns

`number`

squared length of a

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:1229

___

### squaredDistance

▸ `Static` **squaredDistance**(`a`, `b`): `number`

Calculates the squared euclidian distance between two vec4's

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number`[] \| [`vec4`](neuroglancer_util_geom.vec4.md) | the first operand |
| `b` | `number`[] \| [`vec4`](neuroglancer_util_geom.vec4.md) | the second operand |

#### Returns

`number`

squared distance between a and b

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:1188

___

### squaredLength

▸ `Static` **squaredLength**(`a`): `number`

Calculates the squared length of a vec4

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number`[] \| [`vec4`](neuroglancer_util_geom.vec4.md) | vector to calculate squared length of |

#### Returns

`number`

squared length of a

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:1221

___

### str

▸ `Static` **str**(`a`): `string`

Returns a string representation of a vector

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number`[] \| [`vec4`](neuroglancer_util_geom.vec4.md) | vector to represent as a string |

#### Returns

`string`

string representation of the vector

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:1351

___

### sub

▸ `Static` **sub**(`out`, `a`, `b`): [`vec4`](neuroglancer_util_geom.vec4.md)

Subtracts vector b from vector a

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`vec4`](neuroglancer_util_geom.vec4.md) | the receiving vector |
| `a` | `number`[] \| [`vec4`](neuroglancer_util_geom.vec4.md) | the first operand |
| `b` | `number`[] \| [`vec4`](neuroglancer_util_geom.vec4.md) | the second operand |

#### Returns

[`vec4`](neuroglancer_util_geom.vec4.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:1053

___

### subtract

▸ `Static` **subtract**(`out`, `a`, `b`): [`vec4`](neuroglancer_util_geom.vec4.md)

Subtracts vector b from vector a

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`vec4`](neuroglancer_util_geom.vec4.md) | the receiving vector |
| `a` | `number`[] \| [`vec4`](neuroglancer_util_geom.vec4.md) | the first operand |
| `b` | `number`[] \| [`vec4`](neuroglancer_util_geom.vec4.md) | the second operand |

#### Returns

[`vec4`](neuroglancer_util_geom.vec4.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:1043

___

### transformMat4

▸ `Static` **transformMat4**(`out`, `a`, `m`): [`vec4`](neuroglancer_util_geom.vec4.md)

Transforms the vec4 with a mat4.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`vec4`](neuroglancer_util_geom.vec4.md) | the receiving vector |
| `a` | `number`[] \| [`vec4`](neuroglancer_util_geom.vec4.md) | the vector to transform |
| `m` | [`mat4`](neuroglancer_util_geom.mat4.md) | matrix to transform with |

#### Returns

[`vec4`](neuroglancer_util_geom.vec4.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:1303

___

### transformQuat

▸ `Static` **transformQuat**(`out`, `a`, `q`): [`vec4`](neuroglancer_util_geom.vec4.md)

Transforms the vec4 with a quat

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`vec4`](neuroglancer_util_geom.vec4.md) | the receiving vector |
| `a` | `number`[] \| [`vec4`](neuroglancer_util_geom.vec4.md) | the vector to transform |
| `q` | [`quat`](neuroglancer_util_geom.quat.md) | quaternion to transform with |

#### Returns

[`vec4`](neuroglancer_util_geom.vec4.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:1314
