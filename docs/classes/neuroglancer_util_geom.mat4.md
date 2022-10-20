[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/util/geom](../modules/neuroglancer_util_geom.md) / mat4

# Class: mat4

[neuroglancer/util/geom](../modules/neuroglancer_util_geom.md).mat4

## Hierarchy

- `Float32Array`

  ↳ **`mat4`**

## Table of contents

### Constructors

- [constructor](neuroglancer_util_geom.mat4.md#constructor)

### Properties

- [BYTES\_PER\_ELEMENT](neuroglancer_util_geom.mat4.md#bytes_per_element)
- [[toStringTag]](neuroglancer_util_geom.mat4.md#[tostringtag])
- [buffer](neuroglancer_util_geom.mat4.md#buffer)
- [byteLength](neuroglancer_util_geom.mat4.md#bytelength)
- [byteOffset](neuroglancer_util_geom.mat4.md#byteoffset)
- [length](neuroglancer_util_geom.mat4.md#length)
- [typeMat4](neuroglancer_util_geom.mat4.md#typemat4)
- [BYTES\_PER\_ELEMENT](neuroglancer_util_geom.mat4.md#bytes_per_element-1)

### Methods

- [[iterator]](neuroglancer_util_geom.mat4.md#[iterator])
- [copyWithin](neuroglancer_util_geom.mat4.md#copywithin)
- [entries](neuroglancer_util_geom.mat4.md#entries)
- [every](neuroglancer_util_geom.mat4.md#every)
- [fill](neuroglancer_util_geom.mat4.md#fill)
- [filter](neuroglancer_util_geom.mat4.md#filter)
- [find](neuroglancer_util_geom.mat4.md#find)
- [findIndex](neuroglancer_util_geom.mat4.md#findindex)
- [forEach](neuroglancer_util_geom.mat4.md#foreach)
- [includes](neuroglancer_util_geom.mat4.md#includes)
- [indexOf](neuroglancer_util_geom.mat4.md#indexof)
- [join](neuroglancer_util_geom.mat4.md#join)
- [keys](neuroglancer_util_geom.mat4.md#keys)
- [lastIndexOf](neuroglancer_util_geom.mat4.md#lastindexof)
- [map](neuroglancer_util_geom.mat4.md#map)
- [reduce](neuroglancer_util_geom.mat4.md#reduce)
- [reduceRight](neuroglancer_util_geom.mat4.md#reduceright)
- [reverse](neuroglancer_util_geom.mat4.md#reverse)
- [set](neuroglancer_util_geom.mat4.md#set)
- [slice](neuroglancer_util_geom.mat4.md#slice)
- [some](neuroglancer_util_geom.mat4.md#some)
- [sort](neuroglancer_util_geom.mat4.md#sort)
- [subarray](neuroglancer_util_geom.mat4.md#subarray)
- [toLocaleString](neuroglancer_util_geom.mat4.md#tolocalestring)
- [toString](neuroglancer_util_geom.mat4.md#tostring)
- [valueOf](neuroglancer_util_geom.mat4.md#valueof)
- [values](neuroglancer_util_geom.mat4.md#values)
- [add](neuroglancer_util_geom.mat4.md#add)
- [adjoint](neuroglancer_util_geom.mat4.md#adjoint)
- [clone](neuroglancer_util_geom.mat4.md#clone)
- [copy](neuroglancer_util_geom.mat4.md#copy)
- [create](neuroglancer_util_geom.mat4.md#create)
- [determinant](neuroglancer_util_geom.mat4.md#determinant)
- [equals](neuroglancer_util_geom.mat4.md#equals)
- [exactEquals](neuroglancer_util_geom.mat4.md#exactequals)
- [frob](neuroglancer_util_geom.mat4.md#frob)
- [from](neuroglancer_util_geom.mat4.md#from)
- [fromQuat](neuroglancer_util_geom.mat4.md#fromquat)
- [fromRotation](neuroglancer_util_geom.mat4.md#fromrotation)
- [fromRotationTranslation](neuroglancer_util_geom.mat4.md#fromrotationtranslation)
- [fromRotationTranslationScale](neuroglancer_util_geom.mat4.md#fromrotationtranslationscale)
- [fromRotationTranslationScaleOrigin](neuroglancer_util_geom.mat4.md#fromrotationtranslationscaleorigin)
- [fromScaling](neuroglancer_util_geom.mat4.md#fromscaling)
- [fromTranslation](neuroglancer_util_geom.mat4.md#fromtranslation)
- [fromValues](neuroglancer_util_geom.mat4.md#fromvalues)
- [fromXRotation](neuroglancer_util_geom.mat4.md#fromxrotation)
- [fromYRotation](neuroglancer_util_geom.mat4.md#fromyrotation)
- [fromZRotation](neuroglancer_util_geom.mat4.md#fromzrotation)
- [frustum](neuroglancer_util_geom.mat4.md#frustum)
- [getRotation](neuroglancer_util_geom.mat4.md#getrotation)
- [getScaling](neuroglancer_util_geom.mat4.md#getscaling)
- [getTranslation](neuroglancer_util_geom.mat4.md#gettranslation)
- [identity](neuroglancer_util_geom.mat4.md#identity)
- [invert](neuroglancer_util_geom.mat4.md#invert)
- [lookAt](neuroglancer_util_geom.mat4.md#lookat)
- [mul](neuroglancer_util_geom.mat4.md#mul)
- [multiply](neuroglancer_util_geom.mat4.md#multiply)
- [multiplyScalar](neuroglancer_util_geom.mat4.md#multiplyscalar)
- [multiplyScalarAndAdd](neuroglancer_util_geom.mat4.md#multiplyscalarandadd)
- [of](neuroglancer_util_geom.mat4.md#of)
- [ortho](neuroglancer_util_geom.mat4.md#ortho)
- [perspective](neuroglancer_util_geom.mat4.md#perspective)
- [perspectiveFromFieldOfView](neuroglancer_util_geom.mat4.md#perspectivefromfieldofview)
- [rotate](neuroglancer_util_geom.mat4.md#rotate)
- [rotateX](neuroglancer_util_geom.mat4.md#rotatex)
- [rotateY](neuroglancer_util_geom.mat4.md#rotatey)
- [rotateZ](neuroglancer_util_geom.mat4.md#rotatez)
- [scale](neuroglancer_util_geom.mat4.md#scale)
- [set](neuroglancer_util_geom.mat4.md#set-1)
- [str](neuroglancer_util_geom.mat4.md#str)
- [sub](neuroglancer_util_geom.mat4.md#sub)
- [subtract](neuroglancer_util_geom.mat4.md#subtract)
- [targetTo](neuroglancer_util_geom.mat4.md#targetto)
- [translate](neuroglancer_util_geom.mat4.md#translate)
- [transpose](neuroglancer_util_geom.mat4.md#transpose)

## Constructors

### constructor

• **new mat4**(`length`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `length` | `number` |

#### Inherited from

Float32Array.constructor

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:4040

• **new mat4**(`array`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | [`ArrayBufferLike`](../modules/main_module._internal_.md#arraybufferlike) \| [`ArrayLike`](../interfaces/neuroglancer_async_computation_encode_compressed_segmentation_request._internal_.ArrayLike.md)<`number`\> |

#### Inherited from

Float32Array.constructor

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:4041

• **new mat4**(`buffer`, `byteOffset?`, `length?`)

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

• **new mat4**(`elements`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `elements` | [`Iterable`](../interfaces/main_module._internal_.Iterable.md)<`number`\> |

#### Inherited from

Float32Array.constructor

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:461

• **new mat4**()

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

### typeMat4

• `Private` **typeMat4**: `number`

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:2217

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

▸ **copyWithin**(`target`, `start`, `end?`): [`mat4`](neuroglancer_util_geom.mat4.md)

Returns the this object after copying a section of the array identified by start and end
to the same array starting at position target

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `number` | If target is negative, it is treated as length+target where length is the  length of the array. |
| `start` | `number` | If start is negative, it is treated as length+start. If end is negative, it  is treated as length+end. |
| `end?` | `number` | If not specified, length of the this object is used as its default value. |

#### Returns

[`mat4`](neuroglancer_util_geom.mat4.md)

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

▸ **fill**(`value`, `start?`, `end?`): [`mat4`](neuroglancer_util_geom.mat4.md)

Changes all array elements from `start` to `end` index to a static `value` and returns the modified array

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | value to fill array section with |
| `start?` | `number` | index to start filling the array at. If start is negative, it is treated as  length+start where length is the length of the array. |
| `end?` | `number` | index to stop filling the array at. If end is negative, it is treated as  length+end. |

#### Returns

[`mat4`](neuroglancer_util_geom.mat4.md)

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

▸ **sort**(`compareFn?`): [`mat4`](neuroglancer_util_geom.mat4.md)

Sorts an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `compareFn?` | (`a`: `number`, `b`: `number`) => `number` | Function used to determine the order of the elements. It is expected to return  a negative value if first argument is less than second argument, zero if they're equal and a positive  value otherwise. If omitted, the elements are sorted in ascending order.  ```ts  [11,2,22,1].sort((a, b) => a - b)  ``` |

#### Returns

[`mat4`](neuroglancer_util_geom.mat4.md)

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

▸ `Static` **add**(`out`, `a`, `b`): [`mat4`](neuroglancer_util_geom.mat4.md)

Adds two mat4's

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`mat4`](neuroglancer_util_geom.mat4.md) | the receiving matrix |
| `a` | [`mat4`](neuroglancer_util_geom.mat4.md) | the first operand |
| `b` | [`mat4`](neuroglancer_util_geom.mat4.md) | the second operand |

#### Returns

[`mat4`](neuroglancer_util_geom.mat4.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:2700

___

### adjoint

▸ `Static` **adjoint**(`out`, `a`): [`mat4`](neuroglancer_util_geom.mat4.md)

Calculates the adjugate of a mat4

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`mat4`](neuroglancer_util_geom.mat4.md) | the receiving matrix |
| `a` | [`mat4`](neuroglancer_util_geom.mat4.md) | the source matrix |

#### Returns

[`mat4`](neuroglancer_util_geom.mat4.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:2324

___

### clone

▸ `Static` **clone**(`a`): [`mat4`](neuroglancer_util_geom.mat4.md)

Creates a new mat4 initialized with values from an existing matrix

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`mat4`](neuroglancer_util_geom.mat4.md) | matrix to clone |

#### Returns

[`mat4`](neuroglancer_util_geom.mat4.md)

a new 4x4 matrix

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:2232

___

### copy

▸ `Static` **copy**(`out`, `a`): [`mat4`](neuroglancer_util_geom.mat4.md)

Copy the values from one mat4 to another

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`mat4`](neuroglancer_util_geom.mat4.md) | the receiving matrix |
| `a` | [`mat4`](neuroglancer_util_geom.mat4.md) | the source matrix |

#### Returns

[`mat4`](neuroglancer_util_geom.mat4.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:2241

___

### create

▸ `Static` **create**(): [`mat4`](neuroglancer_util_geom.mat4.md)

Creates a new identity mat4

#### Returns

[`mat4`](neuroglancer_util_geom.mat4.md)

a new 4x4 matrix

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:2224

___

### determinant

▸ `Static` **determinant**(`a`): `number`

Calculates the determinant of a mat4

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`mat4`](neuroglancer_util_geom.mat4.md) | the source matrix |

#### Returns

`number`

determinant of a

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:2332

___

### equals

▸ `Static` **equals**(`a`, `b`): `boolean`

Returns whether or not the matrices have approximately the same elements in the same position.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`mat4`](neuroglancer_util_geom.mat4.md) | The first matrix. |
| `b` | [`mat4`](neuroglancer_util_geom.mat4.md) | The second matrix. |

#### Returns

`boolean`

True if the matrices are equal, false otherwise.

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:2759

___

### exactEquals

▸ `Static` **exactEquals**(`a`, `b`): `boolean`

Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`mat4`](neuroglancer_util_geom.mat4.md) | The first matrix. |
| `b` | [`mat4`](neuroglancer_util_geom.mat4.md) | The second matrix. |

#### Returns

`boolean`

True if the matrices are equal, false otherwise.

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:2750

___

### frob

▸ `Static` **frob**(`a`): `number`

Returns Frobenius norm of a mat4

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`mat4`](neuroglancer_util_geom.mat4.md) | the matrix to calculate Frobenius norm of |

#### Returns

`number`

Frobenius norm

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:2690

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

### fromQuat

▸ `Static` **fromQuat**(`out`, `q`): [`mat4`](neuroglancer_util_geom.mat4.md)

Calculates a 4x4 matrix from the given quaternion

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`mat4`](neuroglancer_util_geom.mat4.md) | mat4 receiving operation result |
| `q` | [`quat`](neuroglancer_util_geom.quat.md) | Quaternion to create matrix from |

#### Returns

[`mat4`](neuroglancer_util_geom.mat4.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:2594

___

### fromRotation

▸ `Static` **fromRotation**(`out`, `rad`, `axis`): [`mat4`](neuroglancer_util_geom.mat4.md)

Creates a matrix from a given angle around a given axis
This is equivalent to (but much faster than):

    mat4.identity(dest);
    mat4.rotate(dest, dest, rad, axis);

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`mat4`](neuroglancer_util_geom.mat4.md) | mat4 receiving operation result |
| `rad` | `number` | the angle to rotate the matrix by |
| `axis` | `number`[] \| [`vec3`](neuroglancer_util_geom.vec3.md) | the axis to rotate around |

#### Returns

[`mat4`](neuroglancer_util_geom.mat4.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:2453

___

### fromRotationTranslation

▸ `Static` **fromRotationTranslation**(`out`, `q`, `v`): [`mat4`](neuroglancer_util_geom.mat4.md)

Creates a matrix from a quaternion rotation and vector translation
This is equivalent to (but much faster than):

    mat4.identity(dest);
    mat4.translate(dest, vec);
    var quatMat = mat4.create();
    quat4.toMat4(quat, quatMat);
    mat4.multiply(dest, quatMat);

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`mat4`](neuroglancer_util_geom.mat4.md) | mat4 receiving operation result |
| `q` | [`quat`](neuroglancer_util_geom.quat.md) | Rotation quaternion |
| `v` | `number`[] \| [`vec3`](neuroglancer_util_geom.vec3.md) | Translation vector |

#### Returns

[`mat4`](neuroglancer_util_geom.mat4.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:2510

___

### fromRotationTranslationScale

▸ `Static` **fromRotationTranslationScale**(`out`, `q`, `v`, `s`): [`mat4`](neuroglancer_util_geom.mat4.md)

Creates a matrix from a quaternion rotation, vector translation and vector scale
This is equivalent to (but much faster than):

    mat4.identity(dest);
    mat4.translate(dest, vec);
    var quatMat = mat4.create();
    quat4.toMat4(quat, quatMat);
    mat4.multiply(dest, quatMat);
    mat4.scale(dest, scale)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`mat4`](neuroglancer_util_geom.mat4.md) | mat4 receiving operation result |
| `q` | [`quat`](neuroglancer_util_geom.quat.md) | Rotation quaternion |
| `v` | `number`[] \| [`vec3`](neuroglancer_util_geom.vec3.md) | Translation vector |
| `s` | `number`[] \| [`vec3`](neuroglancer_util_geom.vec3.md) | Scaling vector |

#### Returns

[`mat4`](neuroglancer_util_geom.mat4.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:2562

___

### fromRotationTranslationScaleOrigin

▸ `Static` **fromRotationTranslationScaleOrigin**(`out`, `q`, `v`, `s`, `o`): [`mat4`](neuroglancer_util_geom.mat4.md)

Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
This is equivalent to (but much faster than):

    mat4.identity(dest);
    mat4.translate(dest, vec);
    mat4.translate(dest, origin);
    var quatMat = mat4.create();
    quat4.toMat4(quat, quatMat);
    mat4.multiply(dest, quatMat);
    mat4.scale(dest, scale)
    mat4.translate(dest, negativeOrigin);

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`mat4`](neuroglancer_util_geom.mat4.md) | mat4 receiving operation result |
| `q` | [`quat`](neuroglancer_util_geom.quat.md) | Rotation quaternion |
| `v` | `number`[] \| [`vec3`](neuroglancer_util_geom.vec3.md) | Translation vector |
| `s` | `number`[] \| [`vec3`](neuroglancer_util_geom.vec3.md) | Scaling vector |
| `o` | `number`[] \| [`vec3`](neuroglancer_util_geom.vec3.md) | The origin vector around which to scale and rotate |

#### Returns

[`mat4`](neuroglancer_util_geom.mat4.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:2584

___

### fromScaling

▸ `Static` **fromScaling**(`out`, `v`): [`mat4`](neuroglancer_util_geom.mat4.md)

Creates a matrix from a vector scaling
This is equivalent to (but much faster than):

    mat4.identity(dest);
    mat4.scale(dest, dest, vec);

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`mat4`](neuroglancer_util_geom.mat4.md) | mat4 receiving operation result |
| `v` | `number`[] \| [`vec3`](neuroglancer_util_geom.vec3.md) | Scaling vector |

#### Returns

[`mat4`](neuroglancer_util_geom.mat4.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:2439

___

### fromTranslation

▸ `Static` **fromTranslation**(`out`, `v`): [`mat4`](neuroglancer_util_geom.mat4.md)

Creates a matrix from a vector translation
This is equivalent to (but much faster than):

    mat4.identity(dest);
    mat4.translate(dest, dest, vec);

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`mat4`](neuroglancer_util_geom.mat4.md) | mat4 receiving operation result |
| `v` | `number`[] \| [`vec3`](neuroglancer_util_geom.vec3.md) | Translation vector |

#### Returns

[`mat4`](neuroglancer_util_geom.mat4.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:2426

___

### fromValues

▸ `Static` **fromValues**(`m00`, `m01`, `m02`, `m03`, `m10`, `m11`, `m12`, `m13`, `m20`, `m21`, `m22`, `m23`, `m30`, `m31`, `m32`, `m33`): [`mat4`](neuroglancer_util_geom.mat4.md)

Create a new mat4 with the given values

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `m00` | `number` | Component in column 0, row 0 position (index 0) |
| `m01` | `number` | Component in column 0, row 1 position (index 1) |
| `m02` | `number` | Component in column 0, row 2 position (index 2) |
| `m03` | `number` | Component in column 0, row 3 position (index 3) |
| `m10` | `number` | Component in column 1, row 0 position (index 4) |
| `m11` | `number` | Component in column 1, row 1 position (index 5) |
| `m12` | `number` | Component in column 1, row 2 position (index 6) |
| `m13` | `number` | Component in column 1, row 3 position (index 7) |
| `m20` | `number` | Component in column 2, row 0 position (index 8) |
| `m21` | `number` | Component in column 2, row 1 position (index 9) |
| `m22` | `number` | Component in column 2, row 2 position (index 10) |
| `m23` | `number` | Component in column 2, row 3 position (index 11) |
| `m30` | `number` | Component in column 3, row 0 position (index 12) |
| `m31` | `number` | Component in column 3, row 1 position (index 13) |
| `m32` | `number` | Component in column 3, row 2 position (index 14) |
| `m33` | `number` | Component in column 3, row 3 position (index 15) |

#### Returns

[`mat4`](neuroglancer_util_geom.mat4.md)

A new mat4

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:2265

___

### fromXRotation

▸ `Static` **fromXRotation**(`out`, `rad`): [`mat4`](neuroglancer_util_geom.mat4.md)

Creates a matrix from the given angle around the X axis
This is equivalent to (but much faster than):

    mat4.identity(dest);
    mat4.rotateX(dest, dest, rad);

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`mat4`](neuroglancer_util_geom.mat4.md) | mat4 receiving operation result |
| `rad` | `number` | the angle to rotate the matrix by |

#### Returns

[`mat4`](neuroglancer_util_geom.mat4.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:2466

___

### fromYRotation

▸ `Static` **fromYRotation**(`out`, `rad`): [`mat4`](neuroglancer_util_geom.mat4.md)

Creates a matrix from the given angle around the Y axis
This is equivalent to (but much faster than):

    mat4.identity(dest);
    mat4.rotateY(dest, dest, rad);

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`mat4`](neuroglancer_util_geom.mat4.md) | mat4 receiving operation result |
| `rad` | `number` | the angle to rotate the matrix by |

#### Returns

[`mat4`](neuroglancer_util_geom.mat4.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:2479

___

### fromZRotation

▸ `Static` **fromZRotation**(`out`, `rad`): [`mat4`](neuroglancer_util_geom.mat4.md)

Creates a matrix from the given angle around the Z axis
This is equivalent to (but much faster than):

    mat4.identity(dest);
    mat4.rotateZ(dest, dest, rad);

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`mat4`](neuroglancer_util_geom.mat4.md) | mat4 receiving operation result |
| `rad` | `number` | the angle to rotate the matrix by |

#### Returns

[`mat4`](neuroglancer_util_geom.mat4.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:2493

___

### frustum

▸ `Static` **frustum**(`out`, `left`, `right`, `bottom`, `top`, `near`, `far`): [`mat4`](neuroglancer_util_geom.mat4.md)

Generates a frustum matrix with the given bounds

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`mat4`](neuroglancer_util_geom.mat4.md) | mat4 frustum matrix will be written into |
| `left` | `number` | Left bound of the frustum |
| `right` | `number` | Right bound of the frustum |
| `bottom` | `number` | Bottom bound of the frustum |
| `top` | `number` | Top bound of the frustum |
| `near` | `number` | Near bound of the frustum |
| `far` | `number` | Far bound of the frustum |

#### Returns

[`mat4`](neuroglancer_util_geom.mat4.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:2608

___

### getRotation

▸ `Static` **getRotation**(`out`, `mat`): [`quat`](neuroglancer_util_geom.quat.md)

Returns a quaternion representing the rotational component
 of a transformation matrix. If a matrix is built with
 fromRotationTranslation, the returned quaternion will be the
 same as the quaternion originally supplied.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`quat`](neuroglancer_util_geom.quat.md) | Quaternion to receive the rotation component |
| `mat` | [`mat4`](neuroglancer_util_geom.mat4.md) | Matrix to be decomposed (input) |

#### Returns

[`quat`](neuroglancer_util_geom.quat.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:2543

___

### getScaling

▸ `Static` **getScaling**(`out`, `mat`): [`vec3`](neuroglancer_util_geom.vec3.md)

Returns the scaling factor component of a transformation matrix.
If a matrix is built with fromRotationTranslationScale with a
normalized Quaternion parameter, the returned vector will be
the same as the scaling vector originally supplied.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`vec3`](neuroglancer_util_geom.vec3.md) | Vector to receive scaling factor component |
| `mat` | [`mat4`](neuroglancer_util_geom.mat4.md) | Matrix to be decomposed (input) |

#### Returns

[`vec3`](neuroglancer_util_geom.vec3.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:2532

___

### getTranslation

▸ `Static` **getTranslation**(`out`, `mat`): [`vec3`](neuroglancer_util_geom.vec3.md)

Returns the translation vector component of a transformation
 matrix. If a matrix is built with fromRotationTranslation,
 the returned vector will be the same as the translation vector
 originally supplied.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`vec3`](neuroglancer_util_geom.vec3.md) | Vector to receive translation component |
| `mat` | [`mat4`](neuroglancer_util_geom.mat4.md) | Matrix to be decomposed (input) |

#### Returns

[`vec3`](neuroglancer_util_geom.vec3.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:2521

___

### identity

▸ `Static` **identity**(`out`): [`mat4`](neuroglancer_util_geom.mat4.md)

Set a mat4 to the identity matrix

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`mat4`](neuroglancer_util_geom.mat4.md) | the receiving matrix |

#### Returns

[`mat4`](neuroglancer_util_geom.mat4.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:2297

___

### invert

▸ `Static` **invert**(`out`, `a`): ``null`` \| [`mat4`](neuroglancer_util_geom.mat4.md)

Inverts a mat4

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`mat4`](neuroglancer_util_geom.mat4.md) | the receiving matrix |
| `a` | [`mat4`](neuroglancer_util_geom.mat4.md) | the source matrix |

#### Returns

``null`` \| [`mat4`](neuroglancer_util_geom.mat4.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:2315

___

### lookAt

▸ `Static` **lookAt**(`out`, `eye`, `center`, `up`): [`mat4`](neuroglancer_util_geom.mat4.md)

Generates a look-at matrix with the given eye position, focal point, and up axis

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`mat4`](neuroglancer_util_geom.mat4.md) | mat4 frustum matrix will be written into |
| `eye` | `number`[] \| [`vec3`](neuroglancer_util_geom.vec3.md) | Position of the viewer |
| `center` | `number`[] \| [`vec3`](neuroglancer_util_geom.vec3.md) | Point the viewer is looking at |
| `up` | `number`[] \| [`vec3`](neuroglancer_util_geom.vec3.md) | vec3 pointing up |

#### Returns

[`mat4`](neuroglancer_util_geom.mat4.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:2663

___

### mul

▸ `Static` **mul**(`out`, `a`, `b`): [`mat4`](neuroglancer_util_geom.mat4.md)

Multiplies two mat4's

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`mat4`](neuroglancer_util_geom.mat4.md) | the receiving matrix |
| `a` | [`mat4`](neuroglancer_util_geom.mat4.md) | the first operand |
| `b` | [`mat4`](neuroglancer_util_geom.mat4.md) | the second operand |

#### Returns

[`mat4`](neuroglancer_util_geom.mat4.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:2352

___

### multiply

▸ `Static` **multiply**(`out`, `a`, `b`): [`mat4`](neuroglancer_util_geom.mat4.md)

Multiplies two mat4's

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`mat4`](neuroglancer_util_geom.mat4.md) | the receiving matrix |
| `a` | [`mat4`](neuroglancer_util_geom.mat4.md) | the first operand |
| `b` | [`mat4`](neuroglancer_util_geom.mat4.md) | the second operand |

#### Returns

[`mat4`](neuroglancer_util_geom.mat4.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:2342

___

### multiplyScalar

▸ `Static` **multiplyScalar**(`out`, `a`, `b`): [`mat4`](neuroglancer_util_geom.mat4.md)

Multiply each element of the matrix by a scalar.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`mat4`](neuroglancer_util_geom.mat4.md) | the receiving matrix |
| `a` | [`mat4`](neuroglancer_util_geom.mat4.md) | the matrix to scale |
| `b` | `number` | amount to scale the matrix's elements by |

#### Returns

[`mat4`](neuroglancer_util_geom.mat4.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:2730

___

### multiplyScalarAndAdd

▸ `Static` **multiplyScalarAndAdd**(`out`, `a`, `b`, `scale`): [`mat4`](neuroglancer_util_geom.mat4.md)

Adds two mat4's after multiplying each element of the second operand by a scalar value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`mat4`](neuroglancer_util_geom.mat4.md) | the receiving vector |
| `a` | [`mat4`](neuroglancer_util_geom.mat4.md) | the first operand |
| `b` | [`mat4`](neuroglancer_util_geom.mat4.md) | the second operand |
| `scale` | `number` | the amount to scale b's elements by before adding |

#### Returns

[`mat4`](neuroglancer_util_geom.mat4.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:2741

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

### ortho

▸ `Static` **ortho**(`out`, `left`, `right`, `bottom`, `top`, `near`, `far`): [`mat4`](neuroglancer_util_geom.mat4.md)

Generates a orthogonal projection matrix with the given bounds

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`mat4`](neuroglancer_util_geom.mat4.md) | mat4 frustum matrix will be written into |
| `left` | `number` | Left bound of the frustum |
| `right` | `number` | Right bound of the frustum |
| `bottom` | `number` | Bottom bound of the frustum |
| `top` | `number` | Top bound of the frustum |
| `near` | `number` | Near bound of the frustum |
| `far` | `number` | Far bound of the frustum |

#### Returns

[`mat4`](neuroglancer_util_geom.mat4.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:2651

___

### perspective

▸ `Static` **perspective**(`out`, `fovy`, `aspect`, `near`, `far`): [`mat4`](neuroglancer_util_geom.mat4.md)

Generates a perspective projection matrix with the given bounds

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`mat4`](neuroglancer_util_geom.mat4.md) | mat4 frustum matrix will be written into |
| `fovy` | `number` | Vertical field of view in radians |
| `aspect` | `number` | Aspect ratio. typically viewport width/height |
| `near` | `number` | Near bound of the frustum |
| `far` | `number` | Far bound of the frustum |

#### Returns

[`mat4`](neuroglancer_util_geom.mat4.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:2621

___

### perspectiveFromFieldOfView

▸ `Static` **perspectiveFromFieldOfView**(`out`, `fov`, `near`, `far`): [`mat4`](neuroglancer_util_geom.mat4.md)

Generates a perspective projection matrix with the given field of view.
This is primarily useful for generating projection matrices to be used
with the still experimental WebVR API.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`mat4`](neuroglancer_util_geom.mat4.md) | mat4 frustum matrix will be written into |
| `fov` | `Object` | Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees |
| `fov.downDegrees` | `number` | - |
| `fov.leftDegrees` | `number` | - |
| `fov.rightDegrees` | `number` | - |
| `fov.upDegrees` | `number` | - |
| `near` | `number` | Near bound of the frustum |
| `far` | `number` | Far bound of the frustum |

#### Returns

[`mat4`](neuroglancer_util_geom.mat4.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:2635

___

### rotate

▸ `Static` **rotate**(`out`, `a`, `rad`, `axis`): [`mat4`](neuroglancer_util_geom.mat4.md)

Rotates a mat4 by the given angle

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`mat4`](neuroglancer_util_geom.mat4.md) | the receiving matrix |
| `a` | [`mat4`](neuroglancer_util_geom.mat4.md) | the matrix to rotate |
| `rad` | `number` | the angle to rotate the matrix by |
| `axis` | `number`[] \| [`vec3`](neuroglancer_util_geom.vec3.md) | the axis to rotate around |

#### Returns

[`mat4`](neuroglancer_util_geom.mat4.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:2383

___

### rotateX

▸ `Static` **rotateX**(`out`, `a`, `rad`): [`mat4`](neuroglancer_util_geom.mat4.md)

Rotates a matrix by the given angle around the X axis

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`mat4`](neuroglancer_util_geom.mat4.md) | the receiving matrix |
| `a` | [`mat4`](neuroglancer_util_geom.mat4.md) | the matrix to rotate |
| `rad` | `number` | the angle to rotate the matrix by |

#### Returns

[`mat4`](neuroglancer_util_geom.mat4.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:2393

___

### rotateY

▸ `Static` **rotateY**(`out`, `a`, `rad`): [`mat4`](neuroglancer_util_geom.mat4.md)

Rotates a matrix by the given angle around the Y axis

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`mat4`](neuroglancer_util_geom.mat4.md) | the receiving matrix |
| `a` | [`mat4`](neuroglancer_util_geom.mat4.md) | the matrix to rotate |
| `rad` | `number` | the angle to rotate the matrix by |

#### Returns

[`mat4`](neuroglancer_util_geom.mat4.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:2403

___

### rotateZ

▸ `Static` **rotateZ**(`out`, `a`, `rad`): [`mat4`](neuroglancer_util_geom.mat4.md)

Rotates a matrix by the given angle around the Z axis

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`mat4`](neuroglancer_util_geom.mat4.md) | the receiving matrix |
| `a` | [`mat4`](neuroglancer_util_geom.mat4.md) | the matrix to rotate |
| `rad` | `number` | the angle to rotate the matrix by |

#### Returns

[`mat4`](neuroglancer_util_geom.mat4.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:2413

___

### scale

▸ `Static` **scale**(`out`, `a`, `v`): [`mat4`](neuroglancer_util_geom.mat4.md)

Scales the mat4 by the dimensions in the given vec3

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`mat4`](neuroglancer_util_geom.mat4.md) | the receiving matrix |
| `a` | [`mat4`](neuroglancer_util_geom.mat4.md) | the matrix to scale |
| `v` | `number`[] \| [`vec3`](neuroglancer_util_geom.vec3.md) | the vec3 to scale the matrix by |

#### Returns

[`mat4`](neuroglancer_util_geom.mat4.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:2372

___

### set

▸ `Static` **set**(`out`, `m00`, `m01`, `m02`, `m03`, `m10`, `m11`, `m12`, `m13`, `m20`, `m21`, `m22`, `m23`, `m30`, `m31`, `m32`, `m33`): [`mat4`](neuroglancer_util_geom.mat4.md)

Set the components of a mat4 to the given values

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`mat4`](neuroglancer_util_geom.mat4.md) | the receiving matrix |
| `m00` | `number` | Component in column 0, row 0 position (index 0) |
| `m01` | `number` | Component in column 0, row 1 position (index 1) |
| `m02` | `number` | Component in column 0, row 2 position (index 2) |
| `m03` | `number` | Component in column 0, row 3 position (index 3) |
| `m10` | `number` | Component in column 1, row 0 position (index 4) |
| `m11` | `number` | Component in column 1, row 1 position (index 5) |
| `m12` | `number` | Component in column 1, row 2 position (index 6) |
| `m13` | `number` | Component in column 1, row 3 position (index 7) |
| `m20` | `number` | Component in column 2, row 0 position (index 8) |
| `m21` | `number` | Component in column 2, row 1 position (index 9) |
| `m22` | `number` | Component in column 2, row 2 position (index 10) |
| `m23` | `number` | Component in column 2, row 3 position (index 11) |
| `m30` | `number` | Component in column 3, row 0 position (index 12) |
| `m31` | `number` | Component in column 3, row 1 position (index 13) |
| `m32` | `number` | Component in column 3, row 2 position (index 14) |
| `m33` | `number` | Component in column 3, row 3 position (index 15) |

#### Returns

[`mat4`](neuroglancer_util_geom.mat4.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:2289

___

### str

▸ `Static` **str**(`mat`): `string`

Returns a string representation of a mat4

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mat` | [`mat4`](neuroglancer_util_geom.mat4.md) | matrix to represent as a string |

#### Returns

`string`

string representation of the matrix

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:2682

___

### sub

▸ `Static` **sub**(`out`, `a`, `b`): [`mat4`](neuroglancer_util_geom.mat4.md)

Subtracts matrix b from matrix a

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`mat4`](neuroglancer_util_geom.mat4.md) | the receiving matrix |
| `a` | [`mat4`](neuroglancer_util_geom.mat4.md) | the first operand |
| `b` | [`mat4`](neuroglancer_util_geom.mat4.md) | the second operand |

#### Returns

[`mat4`](neuroglancer_util_geom.mat4.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:2720

___

### subtract

▸ `Static` **subtract**(`out`, `a`, `b`): [`mat4`](neuroglancer_util_geom.mat4.md)

Subtracts matrix b from matrix a

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`mat4`](neuroglancer_util_geom.mat4.md) | the receiving matrix |
| `a` | [`mat4`](neuroglancer_util_geom.mat4.md) | the first operand |
| `b` | [`mat4`](neuroglancer_util_geom.mat4.md) | the second operand |

#### Returns

[`mat4`](neuroglancer_util_geom.mat4.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:2710

___

### targetTo

▸ `Static` **targetTo**(`out`, `eye`, `target`, `up`): [`mat4`](neuroglancer_util_geom.mat4.md)

Generates a matrix that makes something look at something else.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`mat4`](neuroglancer_util_geom.mat4.md) | mat4 frustum matrix will be written into |
| `eye` | `number`[] \| [`vec3`](neuroglancer_util_geom.vec3.md) | Position of the viewer |
| `target` | `number`[] \| [`vec3`](neuroglancer_util_geom.vec3.md) | Point the viewer is looking at |
| `up` | `number`[] \| [`vec3`](neuroglancer_util_geom.vec3.md) | vec3 pointing up |

#### Returns

[`mat4`](neuroglancer_util_geom.mat4.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:2674

___

### translate

▸ `Static` **translate**(`out`, `a`, `v`): [`mat4`](neuroglancer_util_geom.mat4.md)

Translate a mat4 by the given vector

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`mat4`](neuroglancer_util_geom.mat4.md) | the receiving matrix |
| `a` | [`mat4`](neuroglancer_util_geom.mat4.md) | the matrix to translate |
| `v` | `number`[] \| [`vec3`](neuroglancer_util_geom.vec3.md) | vector to translate by |

#### Returns

[`mat4`](neuroglancer_util_geom.mat4.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:2362

___

### transpose

▸ `Static` **transpose**(`out`, `a`): [`mat4`](neuroglancer_util_geom.mat4.md)

Transpose the values of a mat4

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`mat4`](neuroglancer_util_geom.mat4.md) | the receiving matrix |
| `a` | [`mat4`](neuroglancer_util_geom.mat4.md) | the source matrix |

#### Returns

[`mat4`](neuroglancer_util_geom.mat4.md)

out

#### Defined in

node_modules/@types/gl-matrix/index.d.ts:2306
