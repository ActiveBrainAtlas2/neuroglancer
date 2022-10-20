[neuroglancer](../README.md) / [Exports](../modules.md) / [main\_module](../modules/main_module.md) / [<internal\>](../modules/main_module._internal_.md) / Performance

# Interface: Performance

[main_module](../modules/main_module.md).[<internal>](../modules/main_module._internal_.md).Performance

Provides access to performance-related information for the current page. It's part of the High Resolution Time API, but is enhanced by the Performance Timeline API, the Navigation Timing API, the User Timing API, and the Resource Timing API.

## Hierarchy

- [`EventTarget`](../modules/main_module._internal_.md#eventtarget)

  ↳ **`Performance`**

## Table of contents

### Properties

- [eventCounts](main_module._internal_.Performance.md#eventcounts)
- [navigation](main_module._internal_.Performance.md#navigation)
- [onresourcetimingbufferfull](main_module._internal_.Performance.md#onresourcetimingbufferfull)
- [timeOrigin](main_module._internal_.Performance.md#timeorigin)
- [timing](main_module._internal_.Performance.md#timing)

### Methods

- [addEventListener](main_module._internal_.Performance.md#addeventlistener)
- [clearMarks](main_module._internal_.Performance.md#clearmarks)
- [clearMeasures](main_module._internal_.Performance.md#clearmeasures)
- [clearResourceTimings](main_module._internal_.Performance.md#clearresourcetimings)
- [dispatchEvent](main_module._internal_.Performance.md#dispatchevent)
- [getEntries](main_module._internal_.Performance.md#getentries)
- [getEntriesByName](main_module._internal_.Performance.md#getentriesbyname)
- [getEntriesByType](main_module._internal_.Performance.md#getentriesbytype)
- [mark](main_module._internal_.Performance.md#mark)
- [measure](main_module._internal_.Performance.md#measure)
- [now](main_module._internal_.Performance.md#now)
- [removeEventListener](main_module._internal_.Performance.md#removeeventlistener)
- [setResourceTimingBufferSize](main_module._internal_.Performance.md#setresourcetimingbuffersize)
- [toJSON](main_module._internal_.Performance.md#tojson)

## Properties

### eventCounts

• `Readonly` **eventCounts**: `EventCounts`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10526

___

### navigation

• `Readonly` **navigation**: [`PerformanceNavigation`](../modules/main_module._internal_.md#performancenavigation)

**`Deprecated`**

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10528

___

### onresourcetimingbufferfull

• **onresourcetimingbufferfull**: ``null`` \| (`this`: [`Performance`](../modules/main_module._internal_.md#performance), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10529

___

### timeOrigin

• `Readonly` **timeOrigin**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10530

___

### timing

• `Readonly` **timing**: [`PerformanceTiming`](../modules/main_module._internal_.md#performancetiming)

**`Deprecated`**

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
| `listener` | (`this`: [`Performance`](../modules/main_module._internal_.md#performance), `ev`: [`PerformanceEventMap`](main_module._internal_.PerformanceEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](main_module._internal_.AddEventListenerOptions.md) |

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
| `listener` | [`EventListenerOrEventListenerObject`](../modules/main_module._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](main_module._internal_.AddEventListenerOptions.md) |

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
| `event` | [`Event`](../modules/main_module._internal_.md#event) |

#### Returns

`boolean`

#### Inherited from

EventTarget.dispatchEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5138

___

### getEntries

▸ **getEntries**(): [`PerformanceEntryList`](../modules/main_module._internal_.md#performanceentrylist)

#### Returns

[`PerformanceEntryList`](../modules/main_module._internal_.md#performanceentrylist)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10536

___

### getEntriesByName

▸ **getEntriesByName**(`name`, `type?`): [`PerformanceEntryList`](../modules/main_module._internal_.md#performanceentrylist)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `type?` | `string` |

#### Returns

[`PerformanceEntryList`](../modules/main_module._internal_.md#performanceentrylist)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10537

___

### getEntriesByType

▸ **getEntriesByType**(`type`): [`PerformanceEntryList`](../modules/main_module._internal_.md#performanceentrylist)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

[`PerformanceEntryList`](../modules/main_module._internal_.md#performanceentrylist)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10538

___

### mark

▸ **mark**(`markName`, `markOptions?`): [`PerformanceMark`](../modules/main_module._internal_.md#performancemark)

#### Parameters

| Name | Type |
| :------ | :------ |
| `markName` | `string` |
| `markOptions?` | [`PerformanceMarkOptions`](main_module._internal_.PerformanceMarkOptions.md) |

#### Returns

[`PerformanceMark`](../modules/main_module._internal_.md#performancemark)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10539

___

### measure

▸ **measure**(`measureName`, `startOrMeasureOptions?`, `endMark?`): [`PerformanceMeasure`](../modules/main_module._internal_.md#performancemeasure)

#### Parameters

| Name | Type |
| :------ | :------ |
| `measureName` | `string` |
| `startOrMeasureOptions?` | `string` \| [`PerformanceMeasureOptions`](main_module._internal_.PerformanceMeasureOptions.md) |
| `endMark?` | `string` |

#### Returns

[`PerformanceMeasure`](../modules/main_module._internal_.md#performancemeasure)

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
| `listener` | (`this`: [`Performance`](../modules/main_module._internal_.md#performance), `ev`: [`PerformanceEventMap`](main_module._internal_.PerformanceEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](main_module._internal_.EventListenerOptions.md) |

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
| `listener` | [`EventListenerOrEventListenerObject`](../modules/main_module._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`EventListenerOptions`](main_module._internal_.EventListenerOptions.md) |

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
