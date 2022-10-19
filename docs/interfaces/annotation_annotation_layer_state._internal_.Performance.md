[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / Performance

# Interface: Performance

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).Performance

Provides access to performance-related information for the current page. It's part of the High Resolution Time API, but is enhanced by the Performance Timeline API, the Navigation Timing API, the User Timing API, and the Resource Timing API.

## Hierarchy

- [`EventTarget`](../modules/annotation_annotation_layer_state._internal_.md#eventtarget)

  ↳ **`Performance`**

## Table of contents

### Properties

- [eventCounts](annotation_annotation_layer_state._internal_.Performance.md#eventcounts)
- [navigation](annotation_annotation_layer_state._internal_.Performance.md#navigation)
- [onresourcetimingbufferfull](annotation_annotation_layer_state._internal_.Performance.md#onresourcetimingbufferfull)
- [timeOrigin](annotation_annotation_layer_state._internal_.Performance.md#timeorigin)
- [timing](annotation_annotation_layer_state._internal_.Performance.md#timing)

### Methods

- [addEventListener](annotation_annotation_layer_state._internal_.Performance.md#addeventlistener)
- [clearMarks](annotation_annotation_layer_state._internal_.Performance.md#clearmarks)
- [clearMeasures](annotation_annotation_layer_state._internal_.Performance.md#clearmeasures)
- [clearResourceTimings](annotation_annotation_layer_state._internal_.Performance.md#clearresourcetimings)
- [dispatchEvent](annotation_annotation_layer_state._internal_.Performance.md#dispatchevent)
- [getEntries](annotation_annotation_layer_state._internal_.Performance.md#getentries)
- [getEntriesByName](annotation_annotation_layer_state._internal_.Performance.md#getentriesbyname)
- [getEntriesByType](annotation_annotation_layer_state._internal_.Performance.md#getentriesbytype)
- [mark](annotation_annotation_layer_state._internal_.Performance.md#mark)
- [measure](annotation_annotation_layer_state._internal_.Performance.md#measure)
- [now](annotation_annotation_layer_state._internal_.Performance.md#now)
- [removeEventListener](annotation_annotation_layer_state._internal_.Performance.md#removeeventlistener)
- [setResourceTimingBufferSize](annotation_annotation_layer_state._internal_.Performance.md#setresourcetimingbuffersize)
- [toJSON](annotation_annotation_layer_state._internal_.Performance.md#tojson)

## Properties

### eventCounts

• `Readonly` **eventCounts**: `EventCounts`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10526

___

### navigation

• `Readonly` **navigation**: [`PerformanceNavigation`](../modules/annotation_annotation_layer_state._internal_.md#performancenavigation)

**`deprecated`**

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10528

___

### onresourcetimingbufferfull

• **onresourcetimingbufferfull**: ``null`` \| (`this`: [`Performance`](../modules/annotation_annotation_layer_state._internal_.md#performance), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10529

___

### timeOrigin

• `Readonly` **timeOrigin**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10530

___

### timing

• `Readonly` **timing**: [`PerformanceTiming`](../modules/annotation_annotation_layer_state._internal_.md#performancetiming)

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
| `listener` | (`this`: [`Performance`](../modules/annotation_annotation_layer_state._internal_.md#performance), `ev`: [`PerformanceEventMap`](annotation_annotation_layer_state._internal_.PerformanceEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](annotation_annotation_layer_state._internal_.AddEventListenerOptions.md) |

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
| `listener` | [`EventListenerOrEventListenerObject`](../modules/annotation_annotation_layer_state._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](annotation_annotation_layer_state._internal_.AddEventListenerOptions.md) |

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
| `event` | [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event) |

#### Returns

`boolean`

#### Inherited from

EventTarget.dispatchEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5138

___

### getEntries

▸ **getEntries**(): [`PerformanceEntryList`](../modules/annotation_annotation_layer_state._internal_.md#performanceentrylist)

#### Returns

[`PerformanceEntryList`](../modules/annotation_annotation_layer_state._internal_.md#performanceentrylist)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10536

___

### getEntriesByName

▸ **getEntriesByName**(`name`, `type?`): [`PerformanceEntryList`](../modules/annotation_annotation_layer_state._internal_.md#performanceentrylist)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `type?` | `string` |

#### Returns

[`PerformanceEntryList`](../modules/annotation_annotation_layer_state._internal_.md#performanceentrylist)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10537

___

### getEntriesByType

▸ **getEntriesByType**(`type`): [`PerformanceEntryList`](../modules/annotation_annotation_layer_state._internal_.md#performanceentrylist)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

[`PerformanceEntryList`](../modules/annotation_annotation_layer_state._internal_.md#performanceentrylist)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10538

___

### mark

▸ **mark**(`markName`, `markOptions?`): [`PerformanceMark`](../modules/annotation_annotation_layer_state._internal_.md#performancemark)

#### Parameters

| Name | Type |
| :------ | :------ |
| `markName` | `string` |
| `markOptions?` | [`PerformanceMarkOptions`](annotation_annotation_layer_state._internal_.PerformanceMarkOptions.md) |

#### Returns

[`PerformanceMark`](../modules/annotation_annotation_layer_state._internal_.md#performancemark)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10539

___

### measure

▸ **measure**(`measureName`, `startOrMeasureOptions?`, `endMark?`): [`PerformanceMeasure`](../modules/annotation_annotation_layer_state._internal_.md#performancemeasure)

#### Parameters

| Name | Type |
| :------ | :------ |
| `measureName` | `string` |
| `startOrMeasureOptions?` | `string` \| [`PerformanceMeasureOptions`](annotation_annotation_layer_state._internal_.PerformanceMeasureOptions.md) |
| `endMark?` | `string` |

#### Returns

[`PerformanceMeasure`](../modules/annotation_annotation_layer_state._internal_.md#performancemeasure)

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
| `listener` | (`this`: [`Performance`](../modules/annotation_annotation_layer_state._internal_.md#performance), `ev`: [`PerformanceEventMap`](annotation_annotation_layer_state._internal_.PerformanceEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](annotation_annotation_layer_state._internal_.EventListenerOptions.md) |

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
| `listener` | [`EventListenerOrEventListenerObject`](../modules/annotation_annotation_layer_state._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`EventListenerOptions`](annotation_annotation_layer_state._internal_.EventListenerOptions.md) |

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
