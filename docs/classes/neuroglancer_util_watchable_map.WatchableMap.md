[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/util/watchable\_map](../modules/neuroglancer_util_watchable_map.md) / WatchableMap

# Class: WatchableMap<K, V\>

[neuroglancer/util/watchable_map](../modules/neuroglancer_util_watchable_map.md).WatchableMap

## Type parameters

| Name |
| :------ |
| `K` |
| `V` |

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`WatchableMap`**

  ↳↳ [`WatchableAnnotationRelationshipStates`](neuroglancer_annotation_annotation_layer_state.WatchableAnnotationRelationshipStates.md)

  ↳↳ [`CrossSectionSpecificationMap`](neuroglancer_data_panel_layout.CrossSectionSpecificationMap.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_util_watchable_map.WatchableMap.md#constructor)

### Properties

- [changed](neuroglancer_util_watchable_map.WatchableMap.md#changed)
- [disposedStacks](neuroglancer_util_watchable_map.WatchableMap.md#disposedstacks)
- [disposerMap](neuroglancer_util_watchable_map.WatchableMap.md#disposermap)
- [map](neuroglancer_util_watchable_map.WatchableMap.md#map)
- [refCount](neuroglancer_util_watchable_map.WatchableMap.md#refcount)
- [wasDisposed](neuroglancer_util_watchable_map.WatchableMap.md#wasdisposed)

### Accessors

- [size](neuroglancer_util_watchable_map.WatchableMap.md#size)
- [value](neuroglancer_util_watchable_map.WatchableMap.md#value)

### Methods

- [[iterator]](neuroglancer_util_watchable_map.WatchableMap.md#[iterator])
- [addRef](neuroglancer_util_watchable_map.WatchableMap.md#addref)
- [clear](neuroglancer_util_watchable_map.WatchableMap.md#clear)
- [delete](neuroglancer_util_watchable_map.WatchableMap.md#delete)
- [dispose](neuroglancer_util_watchable_map.WatchableMap.md#dispose)
- [disposed](neuroglancer_util_watchable_map.WatchableMap.md#disposed)
- [get](neuroglancer_util_watchable_map.WatchableMap.md#get)
- [has](neuroglancer_util_watchable_map.WatchableMap.md#has)
- [keys](neuroglancer_util_watchable_map.WatchableMap.md#keys)
- [refCountReachedZero](neuroglancer_util_watchable_map.WatchableMap.md#refcountreachedzero)
- [registerCancellable](neuroglancer_util_watchable_map.WatchableMap.md#registercancellable)
- [registerDisposer](neuroglancer_util_watchable_map.WatchableMap.md#registerdisposer)
- [registerEventListener](neuroglancer_util_watchable_map.WatchableMap.md#registereventlistener)
- [set](neuroglancer_util_watchable_map.WatchableMap.md#set)
- [unregisterDisposer](neuroglancer_util_watchable_map.WatchableMap.md#unregisterdisposer)
- [values](neuroglancer_util_watchable_map.WatchableMap.md#values)

## Constructors

### constructor

• **new WatchableMap**<`K`, `V`\>(`register`, `values?`)

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `register` | (`context`: [`RefCounted`](neuroglancer_util_disposable.RefCounted.md), `v`: `V`, `k`: `K`) => `void` |
| `values?` | [`Iterable`](../interfaces/main_module._internal_.Iterable.md)<[`K`, `V`]\> |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/util/watchable_map.ts:24](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/watchable_map.ts#L24)

## Properties

### changed

• **changed**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/util/watchable_map.ts:21](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/watchable_map.ts#L21)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### disposerMap

• `Private` **disposerMap**: `Map`<`K`, [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)\>

#### Defined in

[src/neuroglancer/util/watchable_map.ts:23](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/watchable_map.ts#L23)

___

### map

• **map**: `Map`<`K`, `V`\>

#### Defined in

[src/neuroglancer/util/watchable_map.ts:22](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/watchable_map.ts#L22)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### size

• `get` **size**(): `number`

#### Returns

`number`

#### Defined in

[src/neuroglancer/util/watchable_map.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/watchable_map.ts#L75)

___

### value

• `get` **value**(): `ReadonlyMap`<`K`, `V`\>

#### Returns

`ReadonlyMap`<`K`, `V`\>

#### Defined in

[src/neuroglancer/util/watchable_map.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/watchable_map.ts#L40)

## Methods

### [iterator]

▸ **[iterator]**(): [`IterableIterator`](../interfaces/main_module._internal_.IterableIterator.md)<[`K`, `V`]\>

#### Returns

[`IterableIterator`](../interfaces/main_module._internal_.IterableIterator.md)<[`K`, `V`]\>

#### Defined in

[src/neuroglancer/util/watchable_map.ts:78](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/watchable_map.ts#L78)

___

### addRef

▸ **addRef**(): [`WatchableMap`](neuroglancer_util_watchable_map.WatchableMap.md)<`K`, `V`\>

#### Returns

[`WatchableMap`](neuroglancer_util_watchable_map.WatchableMap.md)<`K`, `V`\>

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[addRef](neuroglancer_util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L48)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/watchable_map.ts:81](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/watchable_map.ts#L81)

___

### delete

▸ **delete**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/util/watchable_map.ts:57](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/watchable_map.ts#L57)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[dispose](neuroglancer_util_disposable.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposed](neuroglancer_util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/watchable_map.ts:98](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/watchable_map.ts#L98)

___

### get

▸ **get**(`key`): `undefined` \| `V`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`undefined` \| `V`

#### Defined in

[src/neuroglancer/util/watchable_map.ts:69](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/watchable_map.ts#L69)

___

### has

▸ **has**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/util/watchable_map.ts:72](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/watchable_map.ts#L72)

___

### keys

▸ **keys**(): [`IterableIterator`](../interfaces/main_module._internal_.IterableIterator.md)<`K`\>

#### Returns

[`IterableIterator`](../interfaces/main_module._internal_.IterableIterator.md)<`K`\>

#### Defined in

[src/neuroglancer/util/watchable_map.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/watchable_map.ts#L95)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCountReachedZero](neuroglancer_util_disposable.RefCounted.md#refcountreachedzero)

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

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[registerCancellable](neuroglancer_util_disposable.RefCounted.md#registercancellable)

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

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[registerDisposer](neuroglancer_util_disposable.RefCounted.md#registerdisposer)

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

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[registerEventListener](neuroglancer_util_disposable.RefCounted.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L95)

___

### set

▸ **set**(`key`, `value`): [`WatchableMap`](neuroglancer_util_watchable_map.WatchableMap.md)<`K`, `V`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |
| `value` | `V` |

#### Returns

[`WatchableMap`](neuroglancer_util_watchable_map.WatchableMap.md)<`K`, `V`\>

#### Defined in

[src/neuroglancer/util/watchable_map.ts:44](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/watchable_map.ts#L44)

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

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[unregisterDisposer](neuroglancer_util_disposable.RefCounted.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L85)

___

### values

▸ **values**(): [`IterableIterator`](../interfaces/main_module._internal_.IterableIterator.md)<`V`\>

#### Returns

[`IterableIterator`](../interfaces/main_module._internal_.IterableIterator.md)<`V`\>

#### Defined in

[src/neuroglancer/util/watchable_map.ts:92](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/watchable_map.ts#L92)
