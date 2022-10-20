[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/webgl/shader](../modules/neuroglancer_webgl_shader.md) / [<internal\>](../modules/neuroglancer_webgl_shader._internal_.md) / ShaderCodePartArray

# Interface: ShaderCodePartArray

[neuroglancer/webgl/shader](../modules/neuroglancer_webgl_shader.md).[<internal>](../modules/neuroglancer_webgl_shader._internal_.md).ShaderCodePartArray

## Hierarchy

- `Array`<[`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart)\>

  ↳ **`ShaderCodePartArray`**

## Table of contents

### Properties

- [length](neuroglancer_webgl_shader._internal_.ShaderCodePartArray.md#length)

### Methods

- [[iterator]](neuroglancer_webgl_shader._internal_.ShaderCodePartArray.md#[iterator])
- [[unscopables]](neuroglancer_webgl_shader._internal_.ShaderCodePartArray.md#[unscopables])
- [concat](neuroglancer_webgl_shader._internal_.ShaderCodePartArray.md#concat)
- [copyWithin](neuroglancer_webgl_shader._internal_.ShaderCodePartArray.md#copywithin)
- [entries](neuroglancer_webgl_shader._internal_.ShaderCodePartArray.md#entries)
- [every](neuroglancer_webgl_shader._internal_.ShaderCodePartArray.md#every)
- [fill](neuroglancer_webgl_shader._internal_.ShaderCodePartArray.md#fill)
- [filter](neuroglancer_webgl_shader._internal_.ShaderCodePartArray.md#filter)
- [find](neuroglancer_webgl_shader._internal_.ShaderCodePartArray.md#find)
- [findIndex](neuroglancer_webgl_shader._internal_.ShaderCodePartArray.md#findindex)
- [flat](neuroglancer_webgl_shader._internal_.ShaderCodePartArray.md#flat)
- [flatMap](neuroglancer_webgl_shader._internal_.ShaderCodePartArray.md#flatmap)
- [forEach](neuroglancer_webgl_shader._internal_.ShaderCodePartArray.md#foreach)
- [includes](neuroglancer_webgl_shader._internal_.ShaderCodePartArray.md#includes)
- [indexOf](neuroglancer_webgl_shader._internal_.ShaderCodePartArray.md#indexof)
- [join](neuroglancer_webgl_shader._internal_.ShaderCodePartArray.md#join)
- [keys](neuroglancer_webgl_shader._internal_.ShaderCodePartArray.md#keys)
- [lastIndexOf](neuroglancer_webgl_shader._internal_.ShaderCodePartArray.md#lastindexof)
- [map](neuroglancer_webgl_shader._internal_.ShaderCodePartArray.md#map)
- [pop](neuroglancer_webgl_shader._internal_.ShaderCodePartArray.md#pop)
- [push](neuroglancer_webgl_shader._internal_.ShaderCodePartArray.md#push)
- [reduce](neuroglancer_webgl_shader._internal_.ShaderCodePartArray.md#reduce)
- [reduceRight](neuroglancer_webgl_shader._internal_.ShaderCodePartArray.md#reduceright)
- [reverse](neuroglancer_webgl_shader._internal_.ShaderCodePartArray.md#reverse)
- [shift](neuroglancer_webgl_shader._internal_.ShaderCodePartArray.md#shift)
- [slice](neuroglancer_webgl_shader._internal_.ShaderCodePartArray.md#slice)
- [some](neuroglancer_webgl_shader._internal_.ShaderCodePartArray.md#some)
- [sort](neuroglancer_webgl_shader._internal_.ShaderCodePartArray.md#sort)
- [splice](neuroglancer_webgl_shader._internal_.ShaderCodePartArray.md#splice)
- [toLocaleString](neuroglancer_webgl_shader._internal_.ShaderCodePartArray.md#tolocalestring)
- [toString](neuroglancer_webgl_shader._internal_.ShaderCodePartArray.md#tostring)
- [unshift](neuroglancer_webgl_shader._internal_.ShaderCodePartArray.md#unshift)
- [values](neuroglancer_webgl_shader._internal_.ShaderCodePartArray.md#values)

## Properties

### length

• **length**: `number`

Gets or sets the length of the array. This is a number one higher than the highest index in the array.

#### Inherited from

Array.length

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1279

## Methods

### [iterator]

▸ **[iterator]**(): [`IterableIterator`](main_module._internal_.IterableIterator.md)<[`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart)\>

Iterator

#### Returns

[`IterableIterator`](main_module._internal_.IterableIterator.md)<[`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart)\>

#### Inherited from

Array.\_\_@iterator@87

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:60

___

### [unscopables]

▸ **[unscopables]**(): `Object`

Returns an object whose properties have the value 'true'
when they will be absent when used in a 'with' statement.

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `copyWithin` | `boolean` |
| `entries` | `boolean` |
| `fill` | `boolean` |
| `find` | `boolean` |
| `findIndex` | `boolean` |
| `keys` | `boolean` |
| `values` | `boolean` |

#### Inherited from

Array.\_\_@unscopables@113

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:99

___

### concat

▸ **concat**(...`items`): [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart)[]

Combines two or more arrays.
This method returns a new array without modifying any existing arrays.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | [`ConcatArray`](neuroglancer_webgl_shader._internal_.ConcatArray.md)<[`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart)\>[] | Additional arrays and/or items to add to the end of the array. |

#### Returns

[`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart)[]

#### Inherited from

Array.concat

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1303

▸ **concat**(...`items`): [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart)[]

Combines two or more arrays.
This method returns a new array without modifying any existing arrays.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | ([`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart) \| [`ConcatArray`](neuroglancer_webgl_shader._internal_.ConcatArray.md)<[`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart)\>)[] | Additional arrays and/or items to add to the end of the array. |

#### Returns

[`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart)[]

#### Inherited from

Array.concat

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1309

___

### copyWithin

▸ **copyWithin**(`target`, `start`, `end?`): [`ShaderCodePartArray`](neuroglancer_webgl_shader._internal_.ShaderCodePartArray.md)

Returns the this object after copying a section of the array identified by start and end
to the same array starting at position target

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `number` | If target is negative, it is treated as length+target where length is the  length of the array. |
| `start` | `number` | If start is negative, it is treated as length+start. If end is negative, it  is treated as length+end. |
| `end?` | `number` | If not specified, length of the this object is used as its default value. |

#### Returns

[`ShaderCodePartArray`](neuroglancer_webgl_shader._internal_.ShaderCodePartArray.md)

#### Inherited from

Array.copyWithin

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:64

___

### entries

▸ **entries**(): [`IterableIterator`](main_module._internal_.IterableIterator.md)<[`number`, [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart)]\>

Returns an iterable of key, value pairs for every entry in the array

#### Returns

[`IterableIterator`](main_module._internal_.IterableIterator.md)<[`number`, [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart)]\>

#### Inherited from

Array.entries

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:65

___

### every

▸ **every**<`S`\>(`predicate`, `thisArg?`): this is S[]

Determines whether all the members of an array satisfy the specified test.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart), `index`: `number`, `array`: [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart)[]) => value is S | A function that accepts up to three arguments. The every method calls  the predicate function for each element in the array until the predicate returns a value  which is coercible to the Boolean value false, or until the end of the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function.  If thisArg is omitted, undefined is used as the this value. |

#### Returns

this is S[]

#### Inherited from

Array.every

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1386

▸ **every**(`predicate`, `thisArg?`): `boolean`

Determines whether all the members of an array satisfy the specified test.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart), `index`: `number`, `array`: [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart)[]) => `unknown` | A function that accepts up to three arguments. The every method calls  the predicate function for each element in the array until the predicate returns a value  which is coercible to the Boolean value false, or until the end of the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function.  If thisArg is omitted, undefined is used as the this value. |

#### Returns

`boolean`

#### Inherited from

Array.every

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1395

___

### fill

▸ **fill**(`value`, `start?`, `end?`): [`ShaderCodePartArray`](neuroglancer_webgl_shader._internal_.ShaderCodePartArray.md)

Changes all array elements from `start` to `end` index to a static `value` and returns the modified array

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart) | value to fill array section with |
| `start?` | `number` | index to start filling the array at. If start is negative, it is treated as  length+start where length is the length of the array. |
| `end?` | `number` | index to stop filling the array at. If end is negative, it is treated as  length+end. |

#### Returns

[`ShaderCodePartArray`](neuroglancer_webgl_shader._internal_.ShaderCodePartArray.md)

#### Inherited from

Array.fill

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:53

___

### filter

▸ **filter**<`S`\>(`predicate`, `thisArg?`): `S`[]

Returns the elements of an array that meet the condition specified in a callback function.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart), `index`: `number`, `array`: [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart)[]) => value is S | A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`S`[]

#### Inherited from

Array.filter

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1422

▸ **filter**(`predicate`, `thisArg?`): [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart)[]

Returns the elements of an array that meet the condition specified in a callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart), `index`: `number`, `array`: [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart)[]) => `unknown` | A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

[`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart)[]

#### Inherited from

Array.filter

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1428

___

### find

▸ **find**<`S`\>(`predicate`, `thisArg?`): `undefined` \| `S`

Returns the value of the first element in the array where predicate is true, and undefined
otherwise.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`this`: `void`, `value`: [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart), `index`: `number`, `obj`: [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart)[]) => value is S | find calls predicate once for each element of the array, in ascending  order, until it finds one where predicate returns true. If such an element is found, find  immediately returns that element value. Otherwise, find returns undefined. |
| `thisArg?` | `any` | If provided, it will be used as the this value for each invocation of  predicate. If it is not provided, undefined is used instead. |

#### Returns

`undefined` \| `S`

#### Inherited from

Array.find

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:31

▸ **find**(`predicate`, `thisArg?`): `undefined` \| [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart)

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart), `index`: `number`, `obj`: [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart)[]) => `unknown` |
| `thisArg?` | `any` |

#### Returns

`undefined` \| [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart)

#### Inherited from

Array.find

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:32

___

### findIndex

▸ **findIndex**(`predicate`, `thisArg?`): `number`

Returns the index of the first element in the array where predicate is true, and -1
otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart), `index`: `number`, `obj`: [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart)[]) => `unknown` | find calls predicate once for each element of the array, in ascending  order, until it finds one where predicate returns true. If such an element is found,  findIndex immediately returns that element index. Otherwise, findIndex returns -1. |
| `thisArg?` | `any` | If provided, it will be used as the this value for each invocation of  predicate. If it is not provided, undefined is used instead. |

#### Returns

`number`

#### Inherited from

Array.findIndex

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:43

___

### flat

▸ **flat**<`A`, `D`\>(`this`, `depth?`): [`FlatArray`](../modules/neuroglancer_webgl_shader._internal_.md#flatarray)<`A`, `D`\>[]

Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `D` | extends `number` = ``1`` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `A` | - |
| `depth?` | `D` | The maximum recursion depth |

#### Returns

[`FlatArray`](../modules/neuroglancer_webgl_shader._internal_.md#flatarray)<`A`, `D`\>[]

#### Inherited from

Array.flat

#### Defined in

node_modules/typescript/lib/lib.es2019.array.d.ts:81

___

### flatMap

▸ **flatMap**<`U`, `This`\>(`callback`, `thisArg?`): `U`[]

Calls a defined callback function on each element of an array. Then, flattens the result into
a new array.
This is identical to a map followed by flat with depth 1.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | `U` |
| `This` | `undefined` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (`this`: `This`, `value`: [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart), `index`: `number`, `array`: [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart)[]) => `U` \| readonly `U`[] | A function that accepts up to three arguments. The flatMap method calls the  callback function one time for each element in the array. |
| `thisArg?` | `This` | An object to which the this keyword can refer in the callback function. If  thisArg is omitted, undefined is used as the this value. |

#### Returns

`U`[]

#### Inherited from

Array.flatMap

#### Defined in

node_modules/typescript/lib/lib.es2019.array.d.ts:70

___

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

Performs the specified action for each element in an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`value`: [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart), `index`: `number`, `array`: [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart)[]) => `void` | A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`void`

#### Inherited from

Array.forEach

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1410

___

### includes

▸ **includes**(`searchElement`, `fromIndex?`): `boolean`

Determines whether an array includes a certain element, returning true or false as appropriate.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchElement` | [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart) | The element to search for. |
| `fromIndex?` | `number` | The position in this array at which to begin searching for searchElement. |

#### Returns

`boolean`

#### Inherited from

Array.includes

#### Defined in

node_modules/typescript/lib/lib.es2016.array.include.d.ts:27

___

### indexOf

▸ **indexOf**(`searchElement`, `fromIndex?`): `number`

Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchElement` | [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart) | The value to locate in the array. |
| `fromIndex?` | `number` | The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0. |

#### Returns

`number`

#### Inherited from

Array.indexOf

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1371

___

### join

▸ **join**(`separator?`): `string`

Adds all the elements of an array into a string, separated by the specified separator string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `separator?` | `string` | A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma. |

#### Returns

`string`

#### Inherited from

Array.join

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1314

___

### keys

▸ **keys**(): [`IterableIterator`](main_module._internal_.IterableIterator.md)<`number`\>

Returns an iterable of keys in the array

#### Returns

[`IterableIterator`](main_module._internal_.IterableIterator.md)<`number`\>

#### Inherited from

Array.keys

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:70

___

### lastIndexOf

▸ **lastIndexOf**(`searchElement`, `fromIndex?`): `number`

Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchElement` | [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart) | The value to locate in the array. |
| `fromIndex?` | `number` | The array index at which to begin searching backward. If fromIndex is omitted, the search starts at the last index in the array. |

#### Returns

`number`

#### Inherited from

Array.lastIndexOf

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1377

___

### map

▸ **map**<`U`\>(`callbackfn`, `thisArg?`): `U`[]

Calls a defined callback function on each element of an array, and returns an array that contains the results.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`value`: [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart), `index`: `number`, `array`: [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart)[]) => `U` | A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`U`[]

#### Inherited from

Array.map

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1416

___

### pop

▸ **pop**(): `undefined` \| [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart)

Removes the last element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.

#### Returns

`undefined` \| [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart)

#### Inherited from

Array.pop

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1292

___

### push

▸ **push**(...`items`): `number`

Appends new elements to the end of an array, and returns the new length of the array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart)[] | New elements to add to the array. |

#### Returns

`number`

#### Inherited from

Array.push

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1297

___

### reduce

▸ **reduce**(`callbackfn`): [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart)

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart), `currentValue`: [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart), `currentIndex`: `number`, `array`: [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart)[]) => [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart) | A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |

#### Returns

[`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart)

#### Inherited from

Array.reduce

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1434

▸ **reduce**(`callbackfn`, `initialValue`): [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart)

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`previousValue`: [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart), `currentValue`: [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart), `currentIndex`: `number`, `array`: [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart)[]) => [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart) |
| `initialValue` | [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart) |

#### Returns

[`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart)

#### Inherited from

Array.reduce

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1435

▸ **reduce**<`U`\>(`callbackfn`, `initialValue`): `U`

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `U`, `currentValue`: [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart), `currentIndex`: `number`, `array`: [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart)[]) => `U` | A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |
| `initialValue` | `U` | If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

#### Returns

`U`

#### Inherited from

Array.reduce

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1441

___

### reduceRight

▸ **reduceRight**(`callbackfn`): [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart)

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart), `currentValue`: [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart), `currentIndex`: `number`, `array`: [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart)[]) => [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart) | A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |

#### Returns

[`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart)

#### Inherited from

Array.reduceRight

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1447

▸ **reduceRight**(`callbackfn`, `initialValue`): [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart)

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`previousValue`: [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart), `currentValue`: [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart), `currentIndex`: `number`, `array`: [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart)[]) => [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart) |
| `initialValue` | [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart) |

#### Returns

[`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart)

#### Inherited from

Array.reduceRight

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1448

▸ **reduceRight**<`U`\>(`callbackfn`, `initialValue`): `U`

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `U`, `currentValue`: [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart), `currentIndex`: `number`, `array`: [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart)[]) => `U` | A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |
| `initialValue` | `U` | If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

#### Returns

`U`

#### Inherited from

Array.reduceRight

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1454

___

### reverse

▸ **reverse**(): [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart)[]

Reverses the elements in an array in place.
This method mutates the array and returns a reference to the same array.

#### Returns

[`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart)[]

#### Inherited from

Array.reverse

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1319

___

### shift

▸ **shift**(): `undefined` \| [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart)

Removes the first element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.

#### Returns

`undefined` \| [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart)

#### Inherited from

Array.shift

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1324

___

### slice

▸ **slice**(`start?`, `end?`): [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart)[]

Returns a copy of a section of an array.
For both start and end, a negative index can be used to indicate an offset from the end of the array.
For example, -2 refers to the second to last element of the array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start?` | `number` | The beginning index of the specified portion of the array.  If start is undefined, then the slice begins at index 0. |
| `end?` | `number` | The end index of the specified portion of the array. This is exclusive of the element at the index 'end'.  If end is undefined, then the slice extends to the end of the array. |

#### Returns

[`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart)[]

#### Inherited from

Array.slice

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1334

___

### some

▸ **some**(`predicate`, `thisArg?`): `boolean`

Determines whether the specified callback function returns true for any element of an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart), `index`: `number`, `array`: [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart)[]) => `unknown` | A function that accepts up to three arguments. The some method calls  the predicate function for each element in the array until the predicate returns a value  which is coercible to the Boolean value true, or until the end of the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function.  If thisArg is omitted, undefined is used as the this value. |

#### Returns

`boolean`

#### Inherited from

Array.some

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1404

___

### sort

▸ **sort**(`compareFn?`): [`ShaderCodePartArray`](neuroglancer_webgl_shader._internal_.ShaderCodePartArray.md)

Sorts an array in place.
This method mutates the array and returns a reference to the same array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `compareFn?` | (`a`: [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart), `b`: [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart)) => `number` | Function used to determine the order of the elements. It is expected to return  a negative value if the first argument is less than the second argument, zero if they're equal, and a positive  value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.  ```ts  [11,2,22,1].sort((a, b) => a - b)  ``` |

#### Returns

[`ShaderCodePartArray`](neuroglancer_webgl_shader._internal_.ShaderCodePartArray.md)

#### Inherited from

Array.sort

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1345

___

### splice

▸ **splice**(`start`, `deleteCount?`): [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart)[]

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `number` | The zero-based location in the array from which to start removing elements. |
| `deleteCount?` | `number` | The number of elements to remove. |

#### Returns

[`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart)[]

An array containing the elements that were deleted.

#### Inherited from

Array.splice

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1352

▸ **splice**(`start`, `deleteCount`, ...`items`): [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart)[]

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `number` | The zero-based location in the array from which to start removing elements. |
| `deleteCount` | `number` | The number of elements to remove. |
| `...items` | [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart)[] | Elements to insert into the array in place of the deleted elements. |

#### Returns

[`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart)[]

An array containing the elements that were deleted.

#### Inherited from

Array.splice

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1360

___

### toLocaleString

▸ **toLocaleString**(): `string`

Returns a string representation of an array. The elements are converted to string using their toLocaleString methods.

#### Returns

`string`

#### Inherited from

Array.toLocaleString

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1287

___

### toString

▸ **toString**(): `string`

Returns a string representation of an array.

#### Returns

`string`

#### Inherited from

Array.toString

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1283

___

### unshift

▸ **unshift**(...`items`): `number`

Inserts new elements at the start of an array, and returns the new length of the array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart)[] | Elements to insert at the start of the array. |

#### Returns

`number`

#### Inherited from

Array.unshift

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1365

___

### values

▸ **values**(): [`IterableIterator`](main_module._internal_.IterableIterator.md)<[`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart)\>

Returns an iterable of values in the array

#### Returns

[`IterableIterator`](main_module._internal_.IterableIterator.md)<[`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart)\>

#### Inherited from

Array.values

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:75
