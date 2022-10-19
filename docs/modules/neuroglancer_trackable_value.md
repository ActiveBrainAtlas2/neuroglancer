[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/trackable\_value

# Module: neuroglancer/trackable\_value

## Table of contents

### Modules

- [&lt;internal\&gt;](neuroglancer_trackable_value._internal_.md)

### Classes

- [AggregateWatchableValue](../classes/neuroglancer_trackable_value.AggregateWatchableValue.md)
- [CachedWatchableValue](../classes/neuroglancer_trackable_value.CachedWatchableValue.md)
- [ComputedWatchableValue](../classes/neuroglancer_trackable_value.ComputedWatchableValue.md)
- [IndirectTrackableValue](../classes/neuroglancer_trackable_value.IndirectTrackableValue.md)
- [IndirectWatchableValue](../classes/neuroglancer_trackable_value.IndirectWatchableValue.md)
- [TrackableRefCounted](../classes/neuroglancer_trackable_value.TrackableRefCounted.md)
- [TrackableValue](../classes/neuroglancer_trackable_value.TrackableValue.md)
- [WatchableRefCounted](../classes/neuroglancer_trackable_value.WatchableRefCounted.md)
- [WatchableSet](../classes/neuroglancer_trackable_value.WatchableSet.md)
- [WatchableValue](../classes/neuroglancer_trackable_value.WatchableValue.md)

### Interfaces

- [NestedStateManager](../interfaces/neuroglancer_trackable_value.NestedStateManager.md)
- [TrackableValueInterface](../interfaces/neuroglancer_trackable_value.TrackableValueInterface.md)
- [WatchableValueChangeInterface](../interfaces/neuroglancer_trackable_value.WatchableValueChangeInterface.md)
- [WatchableValueInterface](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)

### Functions

- [constantWatchableValue](neuroglancer_trackable_value.md#constantwatchablevalue)
- [linkWatchableValue](neuroglancer_trackable_value.md#linkwatchablevalue)
- [makeCachedDerivedWatchableValue](neuroglancer_trackable_value.md#makecachedderivedwatchablevalue)
- [makeCachedLazyDerivedWatchableValue](neuroglancer_trackable_value.md#makecachedlazyderivedwatchablevalue)
- [makeDerivedWatchableValue](neuroglancer_trackable_value.md#makederivedwatchablevalue)
- [observeWatchable](neuroglancer_trackable_value.md#observewatchable)
- [registerNested](neuroglancer_trackable_value.md#registernested)
- [registerNestedSync](neuroglancer_trackable_value.md#registernestedsync)

## Functions

### constantWatchableValue

▸ **constantWatchableValue**<`T`\>(`value`): [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

[`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<`T`\>

#### Defined in

[src/neuroglancer/trackable_value.ts:387](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/trackable_value.ts#L387)

___

### linkWatchableValue

▸ **linkWatchableValue**<`T`\>(`source`, `target`): () => `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<`T`\> |
| `target` | [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<`T`\> |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/neuroglancer/trackable_value.ts:397](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/trackable_value.ts#L397)

___

### makeCachedDerivedWatchableValue

▸ **makeCachedDerivedWatchableValue**<`U`, `T`\>(`f`, `ws`, `isEqual?`): [`CachedWatchableValue`](../classes/neuroglancer_trackable_value.CachedWatchableValue.md)<`U`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | `U` |
| `T` | extends `any`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (...`v`: `T`) => `U` |
| `ws` | { [K in string \| number \| symbol]: WatchableValueInterface<T[K]\> } |
| `isEqual?` | (`a`: `U`, `b`: `U`) => `boolean` |

#### Returns

[`CachedWatchableValue`](../classes/neuroglancer_trackable_value.CachedWatchableValue.md)<`U`\>

#### Defined in

[src/neuroglancer/trackable_value.ts:143](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/trackable_value.ts#L143)

___

### makeCachedLazyDerivedWatchableValue

▸ **makeCachedLazyDerivedWatchableValue**<`U`, `T`\>(`f`, ...`ws`): [`CachedLazyDerivedWatchableValue`](../classes/neuroglancer_annotation_annotation_layer_state._internal_.CachedLazyDerivedWatchableValue.md)<`U`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | `U` |
| `T` | extends `any`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (...`v`: `T`) => `U` |
| `...ws` | { [K in string \| number \| symbol]: WatchableValueInterface<T[K]\> } |

#### Returns

[`CachedLazyDerivedWatchableValue`](../classes/neuroglancer_annotation_annotation_layer_state._internal_.CachedLazyDerivedWatchableValue.md)<`U`\>

#### Defined in

[src/neuroglancer/trackable_value.ts:121](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/trackable_value.ts#L121)

___

### makeDerivedWatchableValue

▸ **makeDerivedWatchableValue**<`U`, `T`\>(`f`, ...`ws`): [`DerivedWatchableValue`](../classes/neuroglancer_trackable_value._internal_.DerivedWatchableValue.md)<`U`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | `U` |
| `T` | extends `any`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (...`v`: `T`) => `U` |
| `...ws` | { [K in string \| number \| symbol]: WatchableValueInterface<T[K]\> } |

#### Returns

[`DerivedWatchableValue`](../classes/neuroglancer_trackable_value._internal_.DerivedWatchableValue.md)<`U`\>

#### Defined in

[src/neuroglancer/trackable_value.ts:91](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/trackable_value.ts#L91)

___

### observeWatchable

▸ **observeWatchable**<`T`\>(`callback`, `watchable`): () => `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`value`: `T`) => `void` |
| `watchable` | [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<`T`\> |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/neuroglancer/trackable_value.ts:391](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/trackable_value.ts#L391)

___

### registerNested

▸ **registerNested**<`U`, `T`\>(`f`, ...`watchables`): [`NestedStateManager`](../interfaces/neuroglancer_trackable_value.NestedStateManager.md)<`U`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | `U` |
| `T` | extends `any`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`context`: [`RefCounted`](../classes/neuroglancer_util_disposable.RefCounted.md), ...`values`: `T`) => `U` |
| `...watchables` | { [K in string \| number \| symbol]: WatchableValueInterface<T[K]\> } |

#### Returns

[`NestedStateManager`](../interfaces/neuroglancer_trackable_value.NestedStateManager.md)<`U`\>

#### Defined in

[src/neuroglancer/trackable_value.ts:307](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/trackable_value.ts#L307)

___

### registerNestedSync

▸ **registerNestedSync**<`U`, `T`\>(`f`, ...`watchables`): `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | `U` |
| `T` | extends `any`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`context`: [`RefCounted`](../classes/neuroglancer_util_disposable.RefCounted.md), ...`values`: `T`) => `U` |
| `...watchables` | { [K in string \| number \| symbol]: WatchableValueInterface<T[K]\> } |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `value` | `U` |
| `dispose` | () => `void` |

#### Defined in

[src/neuroglancer/trackable_value.ts:349](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/trackable_value.ts#L349)
