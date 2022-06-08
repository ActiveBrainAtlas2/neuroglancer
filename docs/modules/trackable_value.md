[neuroglancer](../README.md) / [Modules](../modules.md) / trackable\_value

# Module: trackable\_value

## Table of contents

### Classes

- [AggregateWatchableValue](../classes/trackable_value.AggregateWatchableValue.md)
- [CachedWatchableValue](../classes/trackable_value.CachedWatchableValue.md)
- [ComputedWatchableValue](../classes/trackable_value.ComputedWatchableValue.md)
- [IndirectTrackableValue](../classes/trackable_value.IndirectTrackableValue.md)
- [IndirectWatchableValue](../classes/trackable_value.IndirectWatchableValue.md)
- [TrackableRefCounted](../classes/trackable_value.TrackableRefCounted.md)
- [TrackableValue](../classes/trackable_value.TrackableValue.md)
- [WatchableRefCounted](../classes/trackable_value.WatchableRefCounted.md)
- [WatchableSet](../classes/trackable_value.WatchableSet.md)
- [WatchableValue](../classes/trackable_value.WatchableValue.md)

### Interfaces

- [NestedStateManager](../interfaces/trackable_value.NestedStateManager.md)
- [TrackableValueInterface](../interfaces/trackable_value.TrackableValueInterface.md)
- [WatchableValueChangeInterface](../interfaces/trackable_value.WatchableValueChangeInterface.md)
- [WatchableValueInterface](../interfaces/trackable_value.WatchableValueInterface.md)

### Functions

- [constantWatchableValue](trackable_value.md#constantwatchablevalue)
- [linkWatchableValue](trackable_value.md#linkwatchablevalue)
- [makeCachedDerivedWatchableValue](trackable_value.md#makecachedderivedwatchablevalue)
- [makeCachedLazyDerivedWatchableValue](trackable_value.md#makecachedlazyderivedwatchablevalue)
- [makeDerivedWatchableValue](trackable_value.md#makederivedwatchablevalue)
- [observeWatchable](trackable_value.md#observewatchable)
- [registerNested](trackable_value.md#registernested)
- [registerNestedSync](trackable_value.md#registernestedsync)

## Functions

### constantWatchableValue

▸ **constantWatchableValue**<`T`\>(`value`): [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

[`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<`T`\>

#### Defined in

[src/neuroglancer/trackable_value.ts:387](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/trackable_value.ts#L387)

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
| `source` | [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<`T`\> |
| `target` | [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<`T`\> |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/neuroglancer/trackable_value.ts:397](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/trackable_value.ts#L397)

___

### makeCachedDerivedWatchableValue

▸ **makeCachedDerivedWatchableValue**<`U`, `T`\>(`f`, `ws`, `isEqual?`): [`CachedWatchableValue`](../classes/trackable_value.CachedWatchableValue.md)<`U`\>

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

[`CachedWatchableValue`](../classes/trackable_value.CachedWatchableValue.md)<`U`\>

#### Defined in

[src/neuroglancer/trackable_value.ts:143](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/trackable_value.ts#L143)

___

### makeCachedLazyDerivedWatchableValue

▸ **makeCachedLazyDerivedWatchableValue**<`U`, `T`\>(`f`, ...`ws`): `CachedLazyDerivedWatchableValue`<`U`\>

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

`CachedLazyDerivedWatchableValue`<`U`\>

#### Defined in

[src/neuroglancer/trackable_value.ts:121](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/trackable_value.ts#L121)

___

### makeDerivedWatchableValue

▸ **makeDerivedWatchableValue**<`U`, `T`\>(`f`, ...`ws`): `DerivedWatchableValue`<`U`\>

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

`DerivedWatchableValue`<`U`\>

#### Defined in

[src/neuroglancer/trackable_value.ts:91](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/trackable_value.ts#L91)

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
| `watchable` | [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<`T`\> |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/neuroglancer/trackable_value.ts:391](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/trackable_value.ts#L391)

___

### registerNested

▸ **registerNested**<`U`, `T`\>(`f`, ...`watchables`): [`NestedStateManager`](../interfaces/trackable_value.NestedStateManager.md)<`U`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | `U` |
| `T` | extends `any`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`context`: `RefCounted`, ...`values`: `T`) => `U` |
| `...watchables` | { [K in string \| number \| symbol]: WatchableValueInterface<T[K]\> } |

#### Returns

[`NestedStateManager`](../interfaces/trackable_value.NestedStateManager.md)<`U`\>

#### Defined in

[src/neuroglancer/trackable_value.ts:307](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/trackable_value.ts#L307)

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
| `f` | (`context`: `RefCounted`, ...`values`: `T`) => `U` |
| `...watchables` | { [K in string \| number \| symbol]: WatchableValueInterface<T[K]\> } |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `value` | `U` |
| `dispose` | () => `void` |

#### Defined in

[src/neuroglancer/trackable_value.ts:349](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/trackable_value.ts#L349)
