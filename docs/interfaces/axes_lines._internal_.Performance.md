[neuroglancer](../README.md) / [Modules](../modules.md) / [axes\_lines](../modules/axes_lines.md) / [<internal\>](../modules/axes_lines._internal_.md) / Performance

# Interface: Performance

[axes_lines](../modules/axes_lines.md).[<internal>](../modules/axes_lines._internal_.md).Performance

Provides access to performance-related information for the current page. It's part of the High Resolution Time API, but is enhanced by the Performance Timeline API, the Navigation Timing API, the User Timing API, and the Resource Timing API.

## Hierarchy

- [`EventTarget`](../modules/axes_lines._internal_.md#eventtarget)

  ↳ **`Performance`**

## Table of contents

### Properties

- [eventCounts](axes_lines._internal_.Performance.md#eventcounts)
- [navigation](axes_lines._internal_.Performance.md#navigation)
- [onresourcetimingbufferfull](axes_lines._internal_.Performance.md#onresourcetimingbufferfull)
- [timeOrigin](axes_lines._internal_.Performance.md#timeorigin)
- [timing](axes_lines._internal_.Performance.md#timing)

### Methods

- [addEventListener](axes_lines._internal_.Performance.md#addeventlistener)
- [clearMarks](axes_lines._internal_.Performance.md#clearmarks)
- [clearMeasures](axes_lines._internal_.Performance.md#clearmeasures)
- [clearResourceTimings](axes_lines._internal_.Performance.md#clearresourcetimings)
- [dispatchEvent](axes_lines._internal_.Performance.md#dispatchevent)
- [getEntries](axes_lines._internal_.Performance.md#getentries)
- [getEntriesByName](axes_lines._internal_.Performance.md#getentriesbyname)
- [getEntriesByType](axes_lines._internal_.Performance.md#getentriesbytype)
- [mark](axes_lines._internal_.Performance.md#mark)
- [measure](axes_lines._internal_.Performance.md#measure)
- [now](axes_lines._internal_.Performance.md#now)
- [removeEventListener](axes_lines._internal_.Performance.md#removeeventlistener)
- [setResourceTimingBufferSize](axes_lines._internal_.Performance.md#setresourcetimingbuffersize)
- [toJSON](axes_lines._internal_.Performance.md#tojson)

## Properties

### eventCounts

• `Readonly` **eventCounts**: `EventCounts`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10526

___

### navigation

• `Readonly` **navigation**: [`PerformanceNavigation`](../modules/axes_lines._internal_.md#performancenavigation)

**`deprecated`**

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10528

___

### onresourcetimingbufferfull

• **onresourcetimingbufferfull**: ``null`` \| (`this`: [`Performance`](../modules/axes_lines._internal_.md#performance), `ev`: [`Event`](../modules/axes_lines._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10529

___

### timeOrigin

• `Readonly` **timeOrigin**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10530

___

### timing

• `Readonly` **timing**: [`PerformanceTiming`](../modules/axes_lines._internal_.md#performancetiming)

**`deprecated`**

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10532

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"resourcetimingbufferfull"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`Performance`](../modules/axes_lines._internal_.md#performance), `ev`: [`PerformanceEventMap`](axes_lines._internal_.PerformanceEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](axes_lines._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10544

▸ **addEventListener**(`type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/axes_lines._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](axes_lines._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10545

___

### clearMarks

▸ **clearMarks**(`markName?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `markName?` | `string` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10533

___

### clearMeasures

▸ **clearMeasures**(`measureName?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `measureName?` | `string` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10534

___

### clearResourceTimings

▸ **clearResourceTimings**(): `void`

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10535

___

### dispatchEvent

▸ **dispatchEvent**(`event`): `boolean`

Dispatches a synthetic event event to target and returns true if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`Event`](../modules/axes_lines._internal_.md#event) |

#### Returns

`boolean`

#### Inherited from

EventTarget.dispatchEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5138

___

### getEntries

▸ **getEntries**(): [`PerformanceEntryList`](../modules/axes_lines._internal_.md#performanceentrylist)

#### Returns

[`PerformanceEntryList`](../modules/axes_lines._internal_.md#performanceentrylist)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10536

___

### getEntriesByName

▸ **getEntriesByName**(`name`, `type?`): [`PerformanceEntryList`](../modules/axes_lines._internal_.md#performanceentrylist)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `type?` | `string` |

#### Returns

[`PerformanceEntryList`](../modules/axes_lines._internal_.md#performanceentrylist)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10537

___

### getEntriesByType

▸ **getEntriesByType**(`type`): [`PerformanceEntryList`](../modules/axes_lines._internal_.md#performanceentrylist)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

[`PerformanceEntryList`](../modules/axes_lines._internal_.md#performanceentrylist)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10538

___

### mark

▸ **mark**(`markName`, `markOptions?`): [`PerformanceMark`](../modules/axes_lines._internal_.md#performancemark)

#### Parameters

| Name | Type |
| :------ | :------ |
| `markName` | `string` |
| `markOptions?` | [`PerformanceMarkOptions`](axes_lines._internal_.PerformanceMarkOptions.md) |

#### Returns

[`PerformanceMark`](../modules/axes_lines._internal_.md#performancemark)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10539

___

### measure

▸ **measure**(`measureName`, `startOrMeasureOptions?`, `endMark?`): [`PerformanceMeasure`](../modules/axes_lines._internal_.md#performancemeasure)

#### Parameters

| Name | Type |
| :------ | :------ |
| `measureName` | `string` |
| `startOrMeasureOptions?` | `string` \| [`PerformanceMeasureOptions`](axes_lines._internal_.PerformanceMeasureOptions.md) |
| `endMark?` | `string` |

#### Returns

[`PerformanceMeasure`](../modules/axes_lines._internal_.md#performancemeasure)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10540

___

### now

▸ **now**(): `number`

#### Returns

`number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10541

___

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"resourcetimingbufferfull"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`Performance`](../modules/axes_lines._internal_.md#performance), `ev`: [`PerformanceEventMap`](axes_lines._internal_.PerformanceEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](axes_lines._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10546

▸ **removeEventListener**(`type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/axes_lines._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`EventListenerOptions`](axes_lines._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10547

___

### setResourceTimingBufferSize

▸ **setResourceTimingBufferSize**(`maxSize`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `maxSize` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10542

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10543
