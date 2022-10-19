[neuroglancer](../README.md) / [Modules](../modules.md) / [axes\_lines](../modules/axes_lines.md) / [<internal\>](../modules/axes_lines._internal_.md) / PerformanceEntry

# Interface: PerformanceEntry

[axes_lines](../modules/axes_lines.md).[<internal>](../modules/axes_lines._internal_.md).PerformanceEntry

Encapsulates a single performance metric that is part of the performance timeline. A performance entry can be directly created by making a performance mark or measure (for example by calling the mark() method) at an explicit point in an application. Performance entries are also created in indirect ways such as loading a resource (such as an image).

## Table of contents

### Properties

- [duration](axes_lines._internal_.PerformanceEntry.md#duration)
- [entryType](axes_lines._internal_.PerformanceEntry.md#entrytype)
- [name](axes_lines._internal_.PerformanceEntry.md#name)
- [startTime](axes_lines._internal_.PerformanceEntry.md#starttime)

### Methods

- [toJSON](axes_lines._internal_.PerformanceEntry.md#tojson)

## Properties

### duration

• `Readonly` **duration**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10557

___

### entryType

• `Readonly` **entryType**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10558

___

### name

• `Readonly` **name**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10559

___

### startTime

• `Readonly` **startTime**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10560

## Methods

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10561
