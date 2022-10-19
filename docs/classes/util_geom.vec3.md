[neuroglancer](../README.md) / [Modules](../modules.md) / [util/geom](../modules/util_geom.md) / vec3

# Class: vec3

[util/geom](../modules/util_geom.md).vec3

## Hierarchy

- `Float32Array`

  ↳ **`vec3`**

## Table of contents

### Constructors

- [constructor](util_geom.vec3.md#constructor)

### Properties

- [BYTES\_PER\_ELEMENT](util_geom.vec3.md#bytes_per_element)
- [[toStringTag]](util_geom.vec3.md#[tostringtag])
- [buffer](util_geom.vec3.md#buffer)
- [byteLength](util_geom.vec3.md#bytelength)
- [byteOffset](util_geom.vec3.md#byteoffset)
- [length](util_geom.vec3.md#length)
- [typeVec3](util_geom.vec3.md#typevec3)
- [BYTES\_PER\_ELEMENT](util_geom.vec3.md#bytes_per_element-1)

### Methods

- [[iterator]](util_geom.vec3.md#[iterator])
- [copyWithin](util_geom.vec3.md#copywithin)
- [entries](util_geom.vec3.md#entries)
- [every](util_geom.vec3.md#every)
- [fill](util_geom.vec3.md#fill)
- [filter](util_geom.vec3.md#filter)
- [find](util_geom.vec3.md#find)
- [findIndex](util_geom.vec3.md#findindex)
- [forEach](util_geom.vec3.md#foreach)
- [includes](util_geom.vec3.md#includes)
- [indexOf](util_geom.vec3.md#indexof)
- [join](util_geom.vec3.md#join)
- [keys](util_geom.vec3.md#keys)
- [lastIndexOf](util_geom.vec3.md#lastindexof)
- [map](util_geom.vec3.md#map)
- [reduce](util_geom.vec3.md#reduce)
- [reduceRight](util_geom.vec3.md#reduceright)
- [reverse](util_geom.vec3.md#reverse)
- [set](util_geom.vec3.md#set)
- [slice](util_geom.vec3.md#slice)
- [some](util_geom.vec3.md#some)
- [sort](util_geom.vec3.md#sort)
- [subarray](util_geom.vec3.md#subarray)
- [toLocaleString](util_geom.vec3.md#tolocalestring)
- [toString](util_geom.vec3.md#tostring)
- [valueOf](util_geom.vec3.md#valueof)
- [values](util_geom.vec3.md#values)
- [add](util_geom.vec3.md#add)
- [angle](util_geom.vec3.md#angle)
- [bezier](util_geom.vec3.md#bezier)
- [ceil](util_geom.vec3.md#ceil)
- [clone](util_geom.vec3.md#clone)
- [copy](util_geom.vec3.md#copy)
- [create](util_geom.vec3.md#create)
- [cross](util_geom.vec3.md#cross)
- [dist](util_geom.vec3.md#dist)
- [distance](util_geom.vec3.md#distance)
- [div](util_geom.vec3.md#div)
- [divide](util_geom.vec3.md#divide)
- [dot](util_geom.vec3.md#dot)
- [equals](util_geom.vec3.md#equals)
- [exactEquals](util_geom.vec3.md#exactequals)
- [floor](util_geom.vec3.md#floor)
- [forEach](util_geom.vec3.md#foreach-1)
- [from](util_geom.vec3.md#from)
- [fromValues](util_geom.vec3.md#fromvalues)
- [hermite](util_geom.vec3.md#hermite)
- [inverse](util_geom.vec3.md#inverse)
- [len](util_geom.vec3.md#len)
- [length](util_geom.vec3.md#length-1)
- [lerp](util_geom.vec3.md#lerp)
- [max](util_geom.vec3.md#max)
- [min](util_geom.vec3.md#min)
- [mul](util_geom.vec3.md#mul)
- [multiply](util_geom.vec3.md#multiply)
- [negate](util_geom.vec3.md#negate)
- [normalize](util_geom.vec3.md#normalize)
- [of](util_geom.vec3.md#of)
- [random](util_geom.vec3.md#random)
- [rotateX](util_geom.vec3.md#rotatex)
- [rotateY](util_geom.vec3.md#rotatey)
- [rotateZ](util_geom.vec3.md#rotatez)
- [round](util_geom.vec3.md#round)
- [scale](util_geom.vec3.md#scale)
- [scaleAndAdd](util_geom.vec3.md#scaleandadd)
- [set](util_geom.vec3.md#set-1)
- [sqrDist](util_geom.vec3.md#sqrdist)
- [sqrLen](util_geom.vec3.md#sqrlen)
- [squaredDistance](util_geom.vec3.md#squareddistance)
- [squaredLength](util_geom.vec3.md#squaredlength)
- [str](util_geom.vec3.md#str)
- [sub](util_geom.vec3.md#sub)
- [subtract](util_geom.vec3.md#subtract)
- [transformMat3](util_geom.vec3.md#transformmat3)
- [transformMat4](util_geom.vec3.md#transformmat4)
- [transformQuat](util_geom.vec3.md#transformquat)

## Constructors

### constructor

• **new vec3**(`length`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `length` | `number` |

#### Inherited from

Float32Array.constructor

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:4040

• **new vec3**(`array`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | [`ArrayBufferLike`](../modules/annotation_annotation_layer_state._internal_.md#arraybufferlike) \| [`ArrayLike`](../interfaces/async_computation_encode_compressed_segmentation_request._internal_.ArrayLike.md)<`number`\> |

#### Inherited from

Float32Array.constructor

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:4041

• **new vec3**(`buffer`, `byteOffset?`, `length?`)

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

• **new vec3**(`elements`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `elements` | [`Iterable`](../interfaces/annotation_annotation_layer_state._internal_.Iterable.md)<`number`\> |

#### Inherited from

Float32Array.constructor

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:461

• **new vec3**()

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

### typeVec3

• `Private` **typeVec3**: `number`

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:495

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

▸ **copyWithin**(`target`, `start`, `end?`): [`vec3`](util_geom.vec3.md)

Returns the this object after copying a section of the array identified by start and end
to the same array starting at position target

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `number` | If target is negative, it is treated as length+target where length is the length of the array. |
| `start` | `number` | If start is negative, it is treated as length+start. If end is negative, it is treated as length+end. |
| `end?` | `number` | If not specified, length of the this object is used as its default value. |

#### Returns

[`vec3`](util_geom.vec3.md)

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

▸ **fill**(`value`, `start?`, `end?`): [`vec3`](util_geom.vec3.md)

Changes all array elements from `start` to `end` index to a static `value` and returns the modified array

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | value to fill array section with |
| `start?` | `number` | index to start filling the array at. If start is negative, it is treated as length+start where length is the length of the array. |
| `end?` | `number` | index to stop filling the array at. If end is negative, it is treated as length+end. |

#### Returns

[`vec3`](util_geom.vec3.md)

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

▸ **sort**(`compareFn?`): [`vec3`](util_geom.vec3.md)

Sorts an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `compareFn?` | (`a`: `number`, `b`: `number`) => `number` | Function used to determine the order of the elements. It is expected to return a negative value if first argument is less than second argument, zero if they're equal and a positive value otherwise. If omitted, the elements are sorted in ascending order. ```ts [11,2,22,1].sort((a, b) => a - b) ``` |

#### Returns

[`vec3`](util_geom.vec3.md)

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

▸ `Static` **add**(`out`, `a`, `b`): [`vec3`](util_geom.vec3.md)

Adds two vec3's

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`vec3`](util_geom.vec3.md) | the receiving vector |
| `a` | `number`[] \| [`vec3`](util_geom.vec3.md) | the first operand |
| `b` | `number`[] \| [`vec3`](util_geom.vec3.md) | the second operand |

#### Returns

[`vec3`](util_geom.vec3.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:550

___

### angle

▸ `Static` **angle**(`a`, `b`): `number`

Get the angle between two 3D vectors

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number`[] \| [`vec3`](util_geom.vec3.md) | The first operand |
| `b` | `number`[] \| [`vec3`](util_geom.vec3.md) | The second operand |

#### Returns

`number`

The angle in radians

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:945

___

### bezier

▸ `Static` **bezier**(`out`, `a`, `b`, `c`, `d`, `t`): [`vec3`](util_geom.vec3.md)

Performs a bezier interpolation with two control points

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`vec3`](util_geom.vec3.md) | the receiving vector |
| `a` | `number`[] \| [`vec3`](util_geom.vec3.md) | the first operand |
| `b` | `number`[] \| [`vec3`](util_geom.vec3.md) | the second operand |
| `c` | `number`[] \| [`vec3`](util_geom.vec3.md) | the third operand |
| `d` | `number`[] \| [`vec3`](util_geom.vec3.md) | the fourth operand |
| `t` | `number` | interpolation amount between the two inputs |

#### Returns

[`vec3`](util_geom.vec3.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:829

___

### ceil

▸ `Static` **ceil**(`out`, `a`): [`vec3`](util_geom.vec3.md)

Math.ceil the components of a vec3

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`vec3`](util_geom.vec3.md) | the receiving vector |
| `a` | `number`[] \| [`vec3`](util_geom.vec3.md) | vector to ceil |

#### Returns

[`vec3`](util_geom.vec3.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:619

___

### clone

▸ `Static` **clone**(`a`): [`vec3`](util_geom.vec3.md)

Creates a new vec3 initialized with values from an existing vector

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number`[] \| [`vec3`](util_geom.vec3.md) | vector to clone |

#### Returns

[`vec3`](util_geom.vec3.md)

a new 3D vector

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:510

___

### copy

▸ `Static` **copy**(`out`, `a`): [`vec3`](util_geom.vec3.md)

Copy the values from one vec3 to another

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`vec3`](util_geom.vec3.md) | the receiving vector |
| `a` | `number`[] \| [`vec3`](util_geom.vec3.md) | the source vector |

#### Returns

[`vec3`](util_geom.vec3.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:529

___

### create

▸ `Static` **create**(): [`vec3`](util_geom.vec3.md)

Creates a new, empty vec3

#### Returns

[`vec3`](util_geom.vec3.md)

a new 3D vector

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:502

___

### cross

▸ `Static` **cross**(`out`, `a`, `b`): [`vec3`](util_geom.vec3.md)

Computes the cross product of two vec3's

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`vec3`](util_geom.vec3.md) | the receiving vector |
| `a` | `number`[] \| [`vec3`](util_geom.vec3.md) | the first operand |
| `b` | `number`[] \| [`vec3`](util_geom.vec3.md) | the second operand |

#### Returns

[`vec3`](util_geom.vec3.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:792

___

### dist

▸ `Static` **dist**(`a`, `b`): `number`

Calculates the euclidian distance between two vec3's

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number`[] \| [`vec3`](util_geom.vec3.md) | the first operand |
| `b` | `number`[] \| [`vec3`](util_geom.vec3.md) | the second operand |

#### Returns

`number`

distance between a and b

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:696

___

### distance

▸ `Static` **distance**(`a`, `b`): `number`

Calculates the euclidian distance between two vec3's

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number`[] \| [`vec3`](util_geom.vec3.md) | the first operand |
| `b` | `number`[] \| [`vec3`](util_geom.vec3.md) | the second operand |

#### Returns

`number`

distance between a and b

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:687

___

### div

▸ `Static` **div**(`out`, `a`, `b`): [`vec3`](util_geom.vec3.md)

Divides two vec3's

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`vec3`](util_geom.vec3.md) | the receiving vector |
| `a` | `number`[] \| [`vec3`](util_geom.vec3.md) | the first operand |
| `b` | `number`[] \| [`vec3`](util_geom.vec3.md) | the second operand |

#### Returns

[`vec3`](util_geom.vec3.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:610

___

### divide

▸ `Static` **divide**(`out`, `a`, `b`): [`vec3`](util_geom.vec3.md)

Divides two vec3's

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`vec3`](util_geom.vec3.md) | the receiving vector |
| `a` | `number`[] \| [`vec3`](util_geom.vec3.md) | the first operand |
| `b` | `number`[] \| [`vec3`](util_geom.vec3.md) | the second operand |

#### Returns

[`vec3`](util_geom.vec3.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:600

___

### dot

▸ `Static` **dot**(`a`, `b`): `number`

Calculates the dot product of two vec3's

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number`[] \| [`vec3`](util_geom.vec3.md) | the first operand |
| `b` | `number`[] \| [`vec3`](util_geom.vec3.md) | the second operand |

#### Returns

`number`

dot product of a and b

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:782

___

### equals

▸ `Static` **equals**(`a`, `b`): `boolean`

Returns whether or not the vectors have approximately the same elements in the same position.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number`[] \| [`vec3`](util_geom.vec3.md) | The first vector. |
| `b` | `number`[] \| [`vec3`](util_geom.vec3.md) | The second vector. |

#### Returns

`boolean`

True if the vectors are equal, false otherwise.

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:971

___

### exactEquals

▸ `Static` **exactEquals**(`a`, `b`): `boolean`

Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number`[] \| [`vec3`](util_geom.vec3.md) | The first vector. |
| `b` | `number`[] \| [`vec3`](util_geom.vec3.md) | The second vector. |

#### Returns

`boolean`

True if the vectors are equal, false otherwise.

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:962

___

### floor

▸ `Static` **floor**(`out`, `a`): [`vec3`](util_geom.vec3.md)

Math.floor the components of a vec3

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`vec3`](util_geom.vec3.md) | the receiving vector |
| `a` | `number`[] \| [`vec3`](util_geom.vec3.md) | vector to floor |

#### Returns

[`vec3`](util_geom.vec3.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:628

___

### forEach

▸ `Static` **forEach**(`a`, `stride`, `offset`, `count`, `fn`, `arg`): `Float32Array`

Perform some operation over an array of vec3s.

**`function`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `Float32Array` | the array of vectors to iterate over |
| `stride` | `number` | Number of elements between the start of each vec3. If 0 assumes tightly packed |
| `offset` | `number` | Number of elements to skip at the beginning of the array |
| `count` | `number` | Number of vec3s to iterate over. If 0 iterates over entire array |
| `fn` | (`a`: `number`[] \| [`vec3`](util_geom.vec3.md), `b`: `number`[] \| [`vec3`](util_geom.vec3.md), `arg`: `any`) => `void` | Function to call for each vector in the array |
| `arg` | `any` | additional argument to pass to fn |

#### Returns

`Float32Array`

a

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:922

▸ `Static` **forEach**(`a`, `stride`, `offset`, `count`, `fn`): `Float32Array`

Perform some operation over an array of vec3s.

**`function`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `Float32Array` | the array of vectors to iterate over |
| `stride` | `number` | Number of elements between the start of each vec3. If 0 assumes tightly packed |
| `offset` | `number` | Number of elements to skip at the beginning of the array |
| `count` | `number` | Number of vec3s to iterate over. If 0 iterates over entire array |
| `fn` | (`a`: `number`[] \| [`vec3`](util_geom.vec3.md), `b`: `number`[] \| [`vec3`](util_geom.vec3.md)) => `void` | Function to call for each vector in the array |

#### Returns

`Float32Array`

a

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:936

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

### fromValues

▸ `Static` **fromValues**(`x`, `y`, `z`): [`vec3`](util_geom.vec3.md)

Creates a new vec3 initialized with the given values

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | X component |
| `y` | `number` | Y component |
| `z` | `number` | Z component |

#### Returns

[`vec3`](util_geom.vec3.md)

a new 3D vector

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:520

___

### hermite

▸ `Static` **hermite**(`out`, `a`, `b`, `c`, `d`, `t`): [`vec3`](util_geom.vec3.md)

Performs a hermite interpolation with two control points

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`vec3`](util_geom.vec3.md) | the receiving vector |
| `a` | `number`[] \| [`vec3`](util_geom.vec3.md) | the first operand |
| `b` | `number`[] \| [`vec3`](util_geom.vec3.md) | the second operand |
| `c` | `number`[] \| [`vec3`](util_geom.vec3.md) | the third operand |
| `d` | `number`[] \| [`vec3`](util_geom.vec3.md) | the fourth operand |
| `t` | `number` | interpolation amount between the two inputs |

#### Returns

[`vec3`](util_geom.vec3.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:816

___

### inverse

▸ `Static` **inverse**(`out`, `a`): [`vec3`](util_geom.vec3.md)

Returns the inverse of the components of a vec3

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`vec3`](util_geom.vec3.md) | the receiving vector |
| `a` | `number`[] \| [`vec3`](util_geom.vec3.md) | vector to invert |

#### Returns

[`vec3`](util_geom.vec3.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:764

___

### len

▸ `Static` **len**(`a`): `number`

Calculates the length of a vec3

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number`[] \| [`vec3`](util_geom.vec3.md) | vector to calculate length of |

#### Returns

`number`

length of a

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:730

___

### length

▸ `Static` **length**(`a`): `number`

Calculates the length of a vec3

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number`[] \| [`vec3`](util_geom.vec3.md) | vector to calculate length of |

#### Returns

`number`

length of a

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:722

___

### lerp

▸ `Static` **lerp**(`out`, `a`, `b`, `t`): [`vec3`](util_geom.vec3.md)

Performs a linear interpolation between two vec3's

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`vec3`](util_geom.vec3.md) | the receiving vector |
| `a` | `number`[] \| [`vec3`](util_geom.vec3.md) | the first operand |
| `b` | `number`[] \| [`vec3`](util_geom.vec3.md) | the second operand |
| `t` | `number` | interpolation amount between the two inputs |

#### Returns

[`vec3`](util_geom.vec3.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:803

___

### max

▸ `Static` **max**(`out`, `a`, `b`): [`vec3`](util_geom.vec3.md)

Returns the maximum of two vec3's

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`vec3`](util_geom.vec3.md) | the receiving vector |
| `a` | `number`[] \| [`vec3`](util_geom.vec3.md) | the first operand |
| `b` | `number`[] \| [`vec3`](util_geom.vec3.md) | the second operand |

#### Returns

[`vec3`](util_geom.vec3.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:648

___

### min

▸ `Static` **min**(`out`, `a`, `b`): [`vec3`](util_geom.vec3.md)

Returns the minimum of two vec3's

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`vec3`](util_geom.vec3.md) | the receiving vector |
| `a` | `number`[] \| [`vec3`](util_geom.vec3.md) | the first operand |
| `b` | `number`[] \| [`vec3`](util_geom.vec3.md) | the second operand |

#### Returns

[`vec3`](util_geom.vec3.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:638

___

### mul

▸ `Static` **mul**(`out`, `a`, `b`): [`vec3`](util_geom.vec3.md)

Multiplies two vec3's

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`vec3`](util_geom.vec3.md) | the receiving vector |
| `a` | `number`[] \| [`vec3`](util_geom.vec3.md) | the first operand |
| `b` | `number`[] \| [`vec3`](util_geom.vec3.md) | the second operand |

#### Returns

[`vec3`](util_geom.vec3.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:590

___

### multiply

▸ `Static` **multiply**(`out`, `a`, `b`): [`vec3`](util_geom.vec3.md)

Multiplies two vec3's

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`vec3`](util_geom.vec3.md) | the receiving vector |
| `a` | `number`[] \| [`vec3`](util_geom.vec3.md) | the first operand |
| `b` | `number`[] \| [`vec3`](util_geom.vec3.md) | the second operand |

#### Returns

[`vec3`](util_geom.vec3.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:580

___

### negate

▸ `Static` **negate**(`out`, `a`): [`vec3`](util_geom.vec3.md)

Negates the components of a vec3

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`vec3`](util_geom.vec3.md) | the receiving vector |
| `a` | `number`[] \| [`vec3`](util_geom.vec3.md) | vector to negate |

#### Returns

[`vec3`](util_geom.vec3.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:755

___

### normalize

▸ `Static` **normalize**(`out`, `a`): [`vec3`](util_geom.vec3.md)

Normalize a vec3

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`vec3`](util_geom.vec3.md) | the receiving vector |
| `a` | `number`[] \| [`vec3`](util_geom.vec3.md) | vector to normalize |

#### Returns

[`vec3`](util_geom.vec3.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:773

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

▸ `Static` **random**(`out`): [`vec3`](util_geom.vec3.md)

Generates a random unit vector

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`vec3`](util_geom.vec3.md) | the receiving vector |

#### Returns

[`vec3`](util_geom.vec3.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:837

▸ `Static` **random**(`out`, `scale`): [`vec3`](util_geom.vec3.md)

Generates a random vector with the given scale

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`vec3`](util_geom.vec3.md) | the receiving vector |
| `scale` | `number` | - |

#### Returns

[`vec3`](util_geom.vec3.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:846

___

### rotateX

▸ `Static` **rotateX**(`out`, `a`, `b`, `c`): [`vec3`](util_geom.vec3.md)

Rotate a 3D vector around the x-axis

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`vec3`](util_geom.vec3.md) | The receiving vec3 |
| `a` | `number`[] \| [`vec3`](util_geom.vec3.md) | The vec3 point to rotate |
| `b` | `number`[] \| [`vec3`](util_geom.vec3.md) | The origin of the rotation |
| `c` | `number` | The angle of rotation |

#### Returns

[`vec3`](util_geom.vec3.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:888

___

### rotateY

▸ `Static` **rotateY**(`out`, `a`, `b`, `c`): [`vec3`](util_geom.vec3.md)

Rotate a 3D vector around the y-axis

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`vec3`](util_geom.vec3.md) | The receiving vec3 |
| `a` | `number`[] \| [`vec3`](util_geom.vec3.md) | The vec3 point to rotate |
| `b` | `number`[] \| [`vec3`](util_geom.vec3.md) | The origin of the rotation |
| `c` | `number` | The angle of rotation |

#### Returns

[`vec3`](util_geom.vec3.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:898

___

### rotateZ

▸ `Static` **rotateZ**(`out`, `a`, `b`, `c`): [`vec3`](util_geom.vec3.md)

Rotate a 3D vector around the z-axis

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`vec3`](util_geom.vec3.md) | The receiving vec3 |
| `a` | `number`[] \| [`vec3`](util_geom.vec3.md) | The vec3 point to rotate |
| `b` | `number`[] \| [`vec3`](util_geom.vec3.md) | The origin of the rotation |
| `c` | `number` | The angle of rotation |

#### Returns

[`vec3`](util_geom.vec3.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:908

___

### round

▸ `Static` **round**(`out`, `a`): [`vec3`](util_geom.vec3.md)

Math.round the components of a vec3

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`vec3`](util_geom.vec3.md) | the receiving vector |
| `a` | `number`[] \| [`vec3`](util_geom.vec3.md) | vector to round |

#### Returns

[`vec3`](util_geom.vec3.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:657

___

### scale

▸ `Static` **scale**(`out`, `a`, `b`): [`vec3`](util_geom.vec3.md)

Scales a vec3 by a scalar number

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`vec3`](util_geom.vec3.md) | the receiving vector |
| `a` | `number`[] \| [`vec3`](util_geom.vec3.md) | the vector to scale |
| `b` | `number` | amount to scale the vector by |

#### Returns

[`vec3`](util_geom.vec3.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:667

___

### scaleAndAdd

▸ `Static` **scaleAndAdd**(`out`, `a`, `b`, `scale`): [`vec3`](util_geom.vec3.md)

Adds two vec3's after scaling the second operand by a scalar value

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`vec3`](util_geom.vec3.md) | the receiving vector |
| `a` | `number`[] \| [`vec3`](util_geom.vec3.md) | the first operand |
| `b` | `number`[] \| [`vec3`](util_geom.vec3.md) | the second operand |
| `scale` | `number` | the amount to scale b by before adding |

#### Returns

[`vec3`](util_geom.vec3.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:678

___

### set

▸ `Static` **set**(`out`, `x`, `y`, `z`): [`vec3`](util_geom.vec3.md)

Set the components of a vec3 to the given values

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`vec3`](util_geom.vec3.md) | the receiving vector |
| `x` | `number` | X component |
| `y` | `number` | Y component |
| `z` | `number` | Z component |

#### Returns

[`vec3`](util_geom.vec3.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:540

___

### sqrDist

▸ `Static` **sqrDist**(`a`, `b`): `number`

Calculates the squared euclidian distance between two vec3's

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number`[] \| [`vec3`](util_geom.vec3.md) | the first operand |
| `b` | `number`[] \| [`vec3`](util_geom.vec3.md) | the second operand |

#### Returns

`number`

squared distance between a and b

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:714

___

### sqrLen

▸ `Static` **sqrLen**(`a`): `number`

Calculates the squared length of a vec3

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number`[] \| [`vec3`](util_geom.vec3.md) | vector to calculate squared length of |

#### Returns

`number`

squared length of a

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:746

___

### squaredDistance

▸ `Static` **squaredDistance**(`a`, `b`): `number`

Calculates the squared euclidian distance between two vec3's

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number`[] \| [`vec3`](util_geom.vec3.md) | the first operand |
| `b` | `number`[] \| [`vec3`](util_geom.vec3.md) | the second operand |

#### Returns

`number`

squared distance between a and b

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:705

___

### squaredLength

▸ `Static` **squaredLength**(`a`): `number`

Calculates the squared length of a vec3

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number`[] \| [`vec3`](util_geom.vec3.md) | vector to calculate squared length of |

#### Returns

`number`

squared length of a

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:738

___

### str

▸ `Static` **str**(`a`): `string`

Returns a string representation of a vector

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number`[] \| [`vec3`](util_geom.vec3.md) | vector to represent as a string |

#### Returns

`string`

string representation of the vector

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:953

___

### sub

▸ `Static` **sub**(`out`, `a`, `b`): [`vec3`](util_geom.vec3.md)

Subtracts vector b from vector a

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`vec3`](util_geom.vec3.md) | the receiving vector |
| `a` | `number`[] \| [`vec3`](util_geom.vec3.md) | the first operand |
| `b` | `number`[] \| [`vec3`](util_geom.vec3.md) | the second operand |

#### Returns

[`vec3`](util_geom.vec3.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:570

___

### subtract

▸ `Static` **subtract**(`out`, `a`, `b`): [`vec3`](util_geom.vec3.md)

Subtracts vector b from vector a

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`vec3`](util_geom.vec3.md) | the receiving vector |
| `a` | `number`[] \| [`vec3`](util_geom.vec3.md) | the first operand |
| `b` | `number`[] \| [`vec3`](util_geom.vec3.md) | the second operand |

#### Returns

[`vec3`](util_geom.vec3.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:560

___

### transformMat3

▸ `Static` **transformMat3**(`out`, `a`, `m`): [`vec3`](util_geom.vec3.md)

Transforms the vec3 with a mat3.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`vec3`](util_geom.vec3.md) | the receiving vector |
| `a` | `number`[] \| [`vec3`](util_geom.vec3.md) | the vector to transform |
| `m` | [`mat3`](util_geom.mat3.md) | the 3x3 matrix to transform with |

#### Returns

[`vec3`](util_geom.vec3.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:856

___

### transformMat4

▸ `Static` **transformMat4**(`out`, `a`, `m`): [`vec3`](util_geom.vec3.md)

Transforms the vec3 with a mat4.
4th vector component is implicitly '1'

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`vec3`](util_geom.vec3.md) | the receiving vector |
| `a` | `number`[] \| [`vec3`](util_geom.vec3.md) | the vector to transform |
| `m` | [`mat4`](util_geom.mat4.md) | matrix to transform with |

#### Returns

[`vec3`](util_geom.vec3.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:867

___

### transformQuat

▸ `Static` **transformQuat**(`out`, `a`, `q`): [`vec3`](util_geom.vec3.md)

Transforms the vec3 with a quat

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`vec3`](util_geom.vec3.md) | the receiving vector |
| `a` | `number`[] \| [`vec3`](util_geom.vec3.md) | the vector to transform |
| `q` | [`quat`](util_geom.quat.md) | quaternion to transform with |

#### Returns

[`vec3`](util_geom.vec3.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:877
