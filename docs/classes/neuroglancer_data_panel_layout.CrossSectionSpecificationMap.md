[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/data\_panel\_layout](../modules/neuroglancer_data_panel_layout.md) / CrossSectionSpecificationMap

# Class: CrossSectionSpecificationMap

[neuroglancer/data_panel_layout](../modules/neuroglancer_data_panel_layout.md).CrossSectionSpecificationMap

## Hierarchy

- [`WatchableMap`](neuroglancer_util_watchable_map.WatchableMap.md)<`string`, [`CrossSectionSpecification`](neuroglancer_data_panel_layout.CrossSectionSpecification.md)\>

  ↳ **`CrossSectionSpecificationMap`**

## Table of contents

### Constructors

- [constructor](neuroglancer_data_panel_layout.CrossSectionSpecificationMap.md#constructor)

### Properties

- [changed](neuroglancer_data_panel_layout.CrossSectionSpecificationMap.md#changed)
- [disposedStacks](neuroglancer_data_panel_layout.CrossSectionSpecificationMap.md#disposedstacks)
- [map](neuroglancer_data_panel_layout.CrossSectionSpecificationMap.md#map)
- [refCount](neuroglancer_data_panel_layout.CrossSectionSpecificationMap.md#refcount)
- [wasDisposed](neuroglancer_data_panel_layout.CrossSectionSpecificationMap.md#wasdisposed)

### Accessors

- [size](neuroglancer_data_panel_layout.CrossSectionSpecificationMap.md#size)
- [value](neuroglancer_data_panel_layout.CrossSectionSpecificationMap.md#value)

### Methods

- [[iterator]](neuroglancer_data_panel_layout.CrossSectionSpecificationMap.md#[iterator])
- [addRef](neuroglancer_data_panel_layout.CrossSectionSpecificationMap.md#addref)
- [clear](neuroglancer_data_panel_layout.CrossSectionSpecificationMap.md#clear)
- [delete](neuroglancer_data_panel_layout.CrossSectionSpecificationMap.md#delete)
- [dispose](neuroglancer_data_panel_layout.CrossSectionSpecificationMap.md#dispose)
- [disposed](neuroglancer_data_panel_layout.CrossSectionSpecificationMap.md#disposed)
- [get](neuroglancer_data_panel_layout.CrossSectionSpecificationMap.md#get)
- [has](neuroglancer_data_panel_layout.CrossSectionSpecificationMap.md#has)
- [keys](neuroglancer_data_panel_layout.CrossSectionSpecificationMap.md#keys)
- [refCountReachedZero](neuroglancer_data_panel_layout.CrossSectionSpecificationMap.md#refcountreachedzero)
- [registerCancellable](neuroglancer_data_panel_layout.CrossSectionSpecificationMap.md#registercancellable)
- [registerDisposer](neuroglancer_data_panel_layout.CrossSectionSpecificationMap.md#registerdisposer)
- [registerEventListener](neuroglancer_data_panel_layout.CrossSectionSpecificationMap.md#registereventlistener)
- [reset](neuroglancer_data_panel_layout.CrossSectionSpecificationMap.md#reset)
- [restoreState](neuroglancer_data_panel_layout.CrossSectionSpecificationMap.md#restorestate)
- [set](neuroglancer_data_panel_layout.CrossSectionSpecificationMap.md#set)
- [toJSON](neuroglancer_data_panel_layout.CrossSectionSpecificationMap.md#tojson)
- [unregisterDisposer](neuroglancer_data_panel_layout.CrossSectionSpecificationMap.md#unregisterdisposer)
- [values](neuroglancer_data_panel_layout.CrossSectionSpecificationMap.md#values)

## Constructors

### constructor

• **new CrossSectionSpecificationMap**(`parentNavigationState`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parentNavigationState` | [`NavigationState`](neuroglancer_navigation_state.NavigationState.md)<[`TrackableZoomInterface`](../modules/neuroglancer_navigation_state.md#trackablezoominterface)\> |

#### Overrides

[WatchableMap](neuroglancer_util_watchable_map.WatchableMap.md).[constructor](neuroglancer_util_watchable_map.WatchableMap.md#constructor)

#### Defined in

[src/neuroglancer/data_panel_layout.ts:524](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/data_panel_layout.ts#L524)

## Properties

### changed

• **changed**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Inherited from

[WatchableMap](neuroglancer_util_watchable_map.WatchableMap.md).[changed](neuroglancer_util_watchable_map.WatchableMap.md#changed)

#### Defined in

[src/neuroglancer/util/watchable_map.ts:21](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/watchable_map.ts#L21)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[WatchableMap](neuroglancer_util_watchable_map.WatchableMap.md).[disposedStacks](neuroglancer_util_watchable_map.WatchableMap.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### map

• **map**: `Map`<`string`, [`CrossSectionSpecification`](neuroglancer_data_panel_layout.CrossSectionSpecification.md)\>

#### Inherited from

[WatchableMap](neuroglancer_util_watchable_map.WatchableMap.md).[map](neuroglancer_util_watchable_map.WatchableMap.md#map)

#### Defined in

[src/neuroglancer/util/watchable_map.ts:22](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/watchable_map.ts#L22)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[WatchableMap](neuroglancer_util_watchable_map.WatchableMap.md).[refCount](neuroglancer_util_watchable_map.WatchableMap.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[WatchableMap](neuroglancer_util_watchable_map.WatchableMap.md).[wasDisposed](neuroglancer_util_watchable_map.WatchableMap.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### size

• `get` **size**(): `number`

#### Returns

`number`

#### Inherited from

WatchableMap.size

#### Defined in

[src/neuroglancer/util/watchable_map.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/watchable_map.ts#L75)

___

### value

• `get` **value**(): `ReadonlyMap`<`K`, `V`\>

#### Returns

`ReadonlyMap`<`K`, `V`\>

#### Inherited from

WatchableMap.value

#### Defined in

[src/neuroglancer/util/watchable_map.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/watchable_map.ts#L40)

## Methods

### [iterator]

▸ **[iterator]**(): [`IterableIterator`](../interfaces/main_module._internal_.IterableIterator.md)<[`string`, [`CrossSectionSpecification`](neuroglancer_data_panel_layout.CrossSectionSpecification.md)]\>

#### Returns

[`IterableIterator`](../interfaces/main_module._internal_.IterableIterator.md)<[`string`, [`CrossSectionSpecification`](neuroglancer_data_panel_layout.CrossSectionSpecification.md)]\>

#### Inherited from

[WatchableMap](neuroglancer_util_watchable_map.WatchableMap.md).[[iterator]](neuroglancer_util_watchable_map.WatchableMap.md#[iterator])

#### Defined in

[src/neuroglancer/util/watchable_map.ts:78](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/watchable_map.ts#L78)

___

### addRef

▸ **addRef**(): [`CrossSectionSpecificationMap`](neuroglancer_data_panel_layout.CrossSectionSpecificationMap.md)

#### Returns

[`CrossSectionSpecificationMap`](neuroglancer_data_panel_layout.CrossSectionSpecificationMap.md)

#### Inherited from

[WatchableMap](neuroglancer_util_watchable_map.WatchableMap.md).[addRef](neuroglancer_util_watchable_map.WatchableMap.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L48)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Inherited from

[WatchableMap](neuroglancer_util_watchable_map.WatchableMap.md).[clear](neuroglancer_util_watchable_map.WatchableMap.md#clear)

#### Defined in

[src/neuroglancer/util/watchable_map.ts:81](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/watchable_map.ts#L81)

___

### delete

▸ **delete**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`boolean`

#### Inherited from

[WatchableMap](neuroglancer_util_watchable_map.WatchableMap.md).[delete](neuroglancer_util_watchable_map.WatchableMap.md#delete)

#### Defined in

[src/neuroglancer/util/watchable_map.ts:57](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/watchable_map.ts#L57)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[WatchableMap](neuroglancer_util_watchable_map.WatchableMap.md).[dispose](neuroglancer_util_watchable_map.WatchableMap.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[WatchableMap](neuroglancer_util_watchable_map.WatchableMap.md).[disposed](neuroglancer_util_watchable_map.WatchableMap.md#disposed)

#### Defined in

[src/neuroglancer/util/watchable_map.ts:98](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/watchable_map.ts#L98)

___

### get

▸ **get**(`key`): `undefined` \| [`CrossSectionSpecification`](neuroglancer_data_panel_layout.CrossSectionSpecification.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`undefined` \| [`CrossSectionSpecification`](neuroglancer_data_panel_layout.CrossSectionSpecification.md)

#### Inherited from

[WatchableMap](neuroglancer_util_watchable_map.WatchableMap.md).[get](neuroglancer_util_watchable_map.WatchableMap.md#get)

#### Defined in

[src/neuroglancer/util/watchable_map.ts:69](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/watchable_map.ts#L69)

___

### has

▸ **has**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`boolean`

#### Inherited from

[WatchableMap](neuroglancer_util_watchable_map.WatchableMap.md).[has](neuroglancer_util_watchable_map.WatchableMap.md#has)

#### Defined in

[src/neuroglancer/util/watchable_map.ts:72](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/watchable_map.ts#L72)

___

### keys

▸ **keys**(): [`IterableIterator`](../interfaces/main_module._internal_.IterableIterator.md)<`string`\>

#### Returns

[`IterableIterator`](../interfaces/main_module._internal_.IterableIterator.md)<`string`\>

#### Inherited from

[WatchableMap](neuroglancer_util_watchable_map.WatchableMap.md).[keys](neuroglancer_util_watchable_map.WatchableMap.md#keys)

#### Defined in

[src/neuroglancer/util/watchable_map.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/watchable_map.ts#L95)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[WatchableMap](neuroglancer_util_watchable_map.WatchableMap.md).[refCountReachedZero](neuroglancer_util_watchable_map.WatchableMap.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L66)

___

### registerCancellable

▸ **registerCancellable**<`T`\>(`cancellable`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cancellable` | `T` |

#### Returns

`T`

#### Inherited from

[WatchableMap](neuroglancer_util_watchable_map.WatchableMap.md).[registerCancellable](neuroglancer_util_watchable_map.WatchableMap.md#registercancellable)

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L100)

___

### registerDisposer

▸ **registerDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/neuroglancer_util_disposable.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[WatchableMap](neuroglancer_util_watchable_map.WatchableMap.md).[registerDisposer](neuroglancer_util_watchable_map.WatchableMap.md#registerdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L76)

___

### registerEventListener

▸ **registerEventListener**(`target`, `type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EventTarget`](../modules/main_module._internal_.md#eventtarget) |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/main_module._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](../interfaces/main_module._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

[WatchableMap](neuroglancer_util_watchable_map.WatchableMap.md).[registerEventListener](neuroglancer_util_watchable_map.WatchableMap.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L95)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/data_panel_layout.ts:545](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/data_panel_layout.ts#L545)

___

### restoreState

▸ **restoreState**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/data_panel_layout.ts:532](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/data_panel_layout.ts#L532)

___

### set

▸ **set**(`key`, `value`): [`CrossSectionSpecificationMap`](neuroglancer_data_panel_layout.CrossSectionSpecificationMap.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | [`CrossSectionSpecification`](neuroglancer_data_panel_layout.CrossSectionSpecification.md) |

#### Returns

[`CrossSectionSpecificationMap`](neuroglancer_data_panel_layout.CrossSectionSpecificationMap.md)

#### Inherited from

[WatchableMap](neuroglancer_util_watchable_map.WatchableMap.md).[set](neuroglancer_util_watchable_map.WatchableMap.md#set)

#### Defined in

[src/neuroglancer/util/watchable_map.ts:44](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/watchable_map.ts#L44)

___

### toJSON

▸ **toJSON**(): `undefined` \| { `[key: string]`: `any`;  }

#### Returns

`undefined` \| { `[key: string]`: `any`;  }

#### Defined in

[src/neuroglancer/data_panel_layout.ts:549](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/data_panel_layout.ts#L549)

___

### unregisterDisposer

▸ **unregisterDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/neuroglancer_util_disposable.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[WatchableMap](neuroglancer_util_watchable_map.WatchableMap.md).[unregisterDisposer](neuroglancer_util_watchable_map.WatchableMap.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L85)

___

### values

▸ **values**(): [`IterableIterator`](../interfaces/main_module._internal_.IterableIterator.md)<[`CrossSectionSpecification`](neuroglancer_data_panel_layout.CrossSectionSpecification.md)\>

#### Returns

[`IterableIterator`](../interfaces/main_module._internal_.IterableIterator.md)<[`CrossSectionSpecification`](neuroglancer_data_panel_layout.CrossSectionSpecification.md)\>

#### Inherited from

[WatchableMap](neuroglancer_util_watchable_map.WatchableMap.md).[values](neuroglancer_util_watchable_map.WatchableMap.md#values)

#### Defined in

[src/neuroglancer/util/watchable_map.ts:92](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/watchable_map.ts#L92)
