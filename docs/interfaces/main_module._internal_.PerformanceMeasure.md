[neuroglancer](../README.md) / [Exports](../modules.md) / [main\_module](../modules/main_module.md) / [<internal\>](../modules/main_module._internal_.md) / PerformanceMeasure

# Interface: PerformanceMeasure

[main_module](../modules/main_module.md).[<internal>](../modules/main_module._internal_.md).PerformanceMeasure

PerformanceMeasure is an abstract interface for PerformanceEntry objects with an entryType of "measure". Entries of this type are created by calling performance.measure() to add a named DOMHighResTimeStamp (the measure) between two marks to the browser's performance timeline.

## Hierarchy

- [`PerformanceEntry`](../modules/main_module._internal_.md#performanceentry)

  ↳ **`PerformanceMeasure`**

## Table of contents

### Properties

- [detail](main_module._internal_.PerformanceMeasure.md#detail)
- [duration](main_module._internal_.PerformanceMeasure.md#duration)
- [entryType](main_module._internal_.PerformanceMeasure.md#entrytype)
- [name](main_module._internal_.PerformanceMeasure.md#name)
- [startTime](main_module._internal_.PerformanceMeasure.md#starttime)

### Methods

- [toJSON](main_module._internal_.PerformanceMeasure.md#tojson)

## Properties

### detail

• `Readonly` **detail**: `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10594

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
