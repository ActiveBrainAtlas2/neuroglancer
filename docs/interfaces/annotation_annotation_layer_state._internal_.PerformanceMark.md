[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / PerformanceMark

# Interface: PerformanceMark

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).PerformanceMark

PerformanceMark is an abstract interface for PerformanceEntry objects with an entryType of "mark". Entries of this type are created by calling performance.mark() to add a named DOMHighResTimeStamp (the mark) to the browser's performance timeline.

## Hierarchy

- [`PerformanceEntry`](../modules/annotation_annotation_layer_state._internal_.md#performanceentry)

  ↳ **`PerformanceMark`**

## Table of contents

### Properties

- [detail](annotation_annotation_layer_state._internal_.PerformanceMark.md#detail)
- [duration](annotation_annotation_layer_state._internal_.PerformanceMark.md#duration)
- [entryType](annotation_annotation_layer_state._internal_.PerformanceMark.md#entrytype)
- [name](annotation_annotation_layer_state._internal_.PerformanceMark.md#name)
- [startTime](annotation_annotation_layer_state._internal_.PerformanceMark.md#starttime)

### Methods

- [toJSON](annotation_annotation_layer_state._internal_.PerformanceMark.md#tojson)

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
