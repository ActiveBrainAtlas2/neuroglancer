[neuroglancer](../README.md) / [Exports](../modules.md) / [main\_module](../modules/main_module.md) / [<internal\>](../modules/main_module._internal_.md) / PerformanceMark

# Interface: PerformanceMark

[main_module](../modules/main_module.md).[<internal>](../modules/main_module._internal_.md).PerformanceMark

PerformanceMark is an abstract interface for PerformanceEntry objects with an entryType of "mark". Entries of this type are created by calling performance.mark() to add a named DOMHighResTimeStamp (the mark) to the browser's performance timeline.

## Hierarchy

- [`PerformanceEntry`](../modules/main_module._internal_.md#performanceentry)

  ↳ **`PerformanceMark`**

## Table of contents

### Properties

- [detail](main_module._internal_.PerformanceMark.md#detail)
- [duration](main_module._internal_.PerformanceMark.md#duration)
- [entryType](main_module._internal_.PerformanceMark.md#entrytype)
- [name](main_module._internal_.PerformanceMark.md#name)
- [startTime](main_module._internal_.PerformanceMark.md#starttime)

### Methods

- [toJSON](main_module._internal_.PerformanceMark.md#tojson)

## Properties

### detail

• `Readonly` **detail**: `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10584

___

### duration

• `Readonly` **duration**: `number`

#### Inherited from

PerformanceEntry.duration

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10557

___

### entryType

• `Readonly` **entryType**: `string`

#### Inherited from

PerformanceEntry.entryType

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10558

___

### name

• `Readonly` **name**: `string`

#### Inherited from

PerformanceEntry.name

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10559

___

### startTime

• `Readonly` **startTime**: `number`

#### Inherited from

PerformanceEntry.startTime

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10560

## Methods

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Inherited from

PerformanceEntry.toJSON

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10561
