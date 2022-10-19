[neuroglancer](../README.md) / [Modules](../modules.md) / [data\_panel\_layout](../modules/data_panel_layout.md) / CrossSectionSpecificationMap

# Class: CrossSectionSpecificationMap

[data_panel_layout](../modules/data_panel_layout.md).CrossSectionSpecificationMap

## Hierarchy

- [`WatchableMap`](data_panel_layout._internal_.WatchableMap.md)<`string`, [`CrossSectionSpecification`](data_panel_layout.CrossSectionSpecification.md)\>

  ↳ **`CrossSectionSpecificationMap`**

## Table of contents

### Constructors

- [constructor](data_panel_layout.CrossSectionSpecificationMap.md#constructor)

### Properties

- [changed](data_panel_layout.CrossSectionSpecificationMap.md#changed)
- [disposedStacks](data_panel_layout.CrossSectionSpecificationMap.md#disposedstacks)
- [map](data_panel_layout.CrossSectionSpecificationMap.md#map)
- [refCount](data_panel_layout.CrossSectionSpecificationMap.md#refcount)
- [wasDisposed](data_panel_layout.CrossSectionSpecificationMap.md#wasdisposed)

### Accessors

- [size](data_panel_layout.CrossSectionSpecificationMap.md#size)
- [value](data_panel_layout.CrossSectionSpecificationMap.md#value)

### Methods

- [[iterator]](data_panel_layout.CrossSectionSpecificationMap.md#[iterator])
- [addRef](data_panel_layout.CrossSectionSpecificationMap.md#addref)
- [clear](data_panel_layout.CrossSectionSpecificationMap.md#clear)
- [delete](data_panel_layout.CrossSectionSpecificationMap.md#delete)
- [dispose](data_panel_layout.CrossSectionSpecificationMap.md#dispose)
- [disposed](data_panel_layout.CrossSectionSpecificationMap.md#disposed)
- [get](data_panel_layout.CrossSectionSpecificationMap.md#get)
- [has](data_panel_layout.CrossSectionSpecificationMap.md#has)
- [keys](data_panel_layout.CrossSectionSpecificationMap.md#keys)
- [refCountReachedZero](data_panel_layout.CrossSectionSpecificationMap.md#refcountreachedzero)
- [registerCancellable](data_panel_layout.CrossSectionSpecificationMap.md#registercancellable)
- [registerDisposer](data_panel_layout.CrossSectionSpecificationMap.md#registerdisposer)
- [registerEventListener](data_panel_layout.CrossSectionSpecificationMap.md#registereventlistener)
- [reset](data_panel_layout.CrossSectionSpecificationMap.md#reset)
- [restoreState](data_panel_layout.CrossSectionSpecificationMap.md#restorestate)
- [set](data_panel_layout.CrossSectionSpecificationMap.md#set)
- [toJSON](data_panel_layout.CrossSectionSpecificationMap.md#tojson)
- [unregisterDisposer](data_panel_layout.CrossSectionSpecificationMap.md#unregisterdisposer)
- [values](data_panel_layout.CrossSectionSpecificationMap.md#values)

## Constructors

### constructor

• **new CrossSectionSpecificationMap**(`parentNavigationState`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parentNavigationState` | [`NavigationState`](navigation_state.NavigationState.md)<[`TrackableZoomInterface`](../modules/navigation_state.md#trackablezoominterface)\> |

#### Overrides

[WatchableMap](data_panel_layout._internal_.WatchableMap.md).[constructor](data_panel_layout._internal_.WatchableMap.md#constructor)

#### Defined in

[src/neuroglancer/data_panel_layout.ts:524](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/data_panel_layout.ts#L524)

## Properties

### changed

• **changed**: [`NullarySignal`](coordinate_transform._internal_.NullarySignal.md)

#### Inherited from

[WatchableMap](data_panel_layout._internal_.WatchableMap.md).[changed](data_panel_layout._internal_.WatchableMap.md#changed)

#### Defined in

[src/neuroglancer/util/watchable_map.ts:21](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/watchable_map.ts#L21)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[WatchableMap](data_panel_layout._internal_.WatchableMap.md).[disposedStacks](data_panel_layout._internal_.WatchableMap.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L52)

___

### map

• **map**: `Map`<`string`, [`CrossSectionSpecification`](data_panel_layout.CrossSectionSpecification.md)\>

#### Inherited from

[WatchableMap](data_panel_layout._internal_.WatchableMap.md).[map](data_panel_layout._internal_.WatchableMap.md#map)

#### Defined in

[src/neuroglancer/util/watchable_map.ts:22](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/watchable_map.ts#L22)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[WatchableMap](data_panel_layout._internal_.WatchableMap.md).[refCount](data_panel_layout._internal_.WatchableMap.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[WatchableMap](data_panel_layout._internal_.WatchableMap.md).[wasDisposed](data_panel_layout._internal_.WatchableMap.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### size

• `get` **size**(): `number`

#### Returns

`number`

#### Inherited from

WatchableMap.size

#### Defined in

[src/neuroglancer/util/watchable_map.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/watchable_map.ts#L75)

___

### value

• `get` **value**(): `ReadonlyMap`<`K`, `V`\>

#### Returns

`ReadonlyMap`<`K`, `V`\>

#### Inherited from

WatchableMap.value

#### Defined in

[src/neuroglancer/util/watchable_map.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/watchable_map.ts#L40)

## Methods

### [iterator]

▸ **[iterator]**(): [`IterableIterator`](../interfaces/axes_lines._internal_.IterableIterator.md)<[`string`, [`CrossSectionSpecification`](data_panel_layout.CrossSectionSpecification.md)]\>

#### Returns

[`IterableIterator`](../interfaces/axes_lines._internal_.IterableIterator.md)<[`string`, [`CrossSectionSpecification`](data_panel_layout.CrossSectionSpecification.md)]\>

#### Inherited from

[WatchableMap](data_panel_layout._internal_.WatchableMap.md).[[iterator]](data_panel_layout._internal_.WatchableMap.md#[iterator])

#### Defined in

[src/neuroglancer/util/watchable_map.ts:78](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/watchable_map.ts#L78)

___

### addRef

▸ **addRef**(): [`CrossSectionSpecificationMap`](data_panel_layout.CrossSectionSpecificationMap.md)

#### Returns

[`CrossSectionSpecificationMap`](data_panel_layout.CrossSectionSpecificationMap.md)

#### Inherited from

[WatchableMap](data_panel_layout._internal_.WatchableMap.md).[addRef](data_panel_layout._internal_.WatchableMap.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L48)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Inherited from

[WatchableMap](data_panel_layout._internal_.WatchableMap.md).[clear](data_panel_layout._internal_.WatchableMap.md#clear)

#### Defined in

[src/neuroglancer/util/watchable_map.ts:81](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/watchable_map.ts#L81)

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

[WatchableMap](data_panel_layout._internal_.WatchableMap.md).[delete](data_panel_layout._internal_.WatchableMap.md#delete)

#### Defined in

[src/neuroglancer/util/watchable_map.ts:57](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/watchable_map.ts#L57)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[WatchableMap](data_panel_layout._internal_.WatchableMap.md).[dispose](data_panel_layout._internal_.WatchableMap.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[WatchableMap](data_panel_layout._internal_.WatchableMap.md).[disposed](data_panel_layout._internal_.WatchableMap.md#disposed)

#### Defined in

[src/neuroglancer/util/watchable_map.ts:98](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/watchable_map.ts#L98)

___

### get

▸ **get**(`key`): `undefined` \| [`CrossSectionSpecification`](data_panel_layout.CrossSectionSpecification.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`undefined` \| [`CrossSectionSpecification`](data_panel_layout.CrossSectionSpecification.md)

#### Inherited from

[WatchableMap](data_panel_layout._internal_.WatchableMap.md).[get](data_panel_layout._internal_.WatchableMap.md#get)

#### Defined in

[src/neuroglancer/util/watchable_map.ts:69](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/watchable_map.ts#L69)

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

[WatchableMap](data_panel_layout._internal_.WatchableMap.md).[has](data_panel_layout._internal_.WatchableMap.md#has)

#### Defined in

[src/neuroglancer/util/watchable_map.ts:72](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/watchable_map.ts#L72)

___

### keys

▸ **keys**(): [`IterableIterator`](../interfaces/axes_lines._internal_.IterableIterator.md)<`string`\>

#### Returns

[`IterableIterator`](../interfaces/axes_lines._internal_.IterableIterator.md)<`string`\>

#### Inherited from

[WatchableMap](data_panel_layout._internal_.WatchableMap.md).[keys](data_panel_layout._internal_.WatchableMap.md#keys)

#### Defined in

[src/neuroglancer/util/watchable_map.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/watchable_map.ts#L95)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[WatchableMap](data_panel_layout._internal_.WatchableMap.md).[refCountReachedZero](data_panel_layout._internal_.WatchableMap.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L66)

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

[WatchableMap](data_panel_layout._internal_.WatchableMap.md).[registerCancellable](data_panel_layout._internal_.WatchableMap.md#registercancellable)

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L100)

___

### registerDisposer

▸ **registerDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/axes_lines._internal_.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[WatchableMap](data_panel_layout._internal_.WatchableMap.md).[registerDisposer](data_panel_layout._internal_.WatchableMap.md#registerdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L76)

___

### registerEventListener

▸ **registerEventListener**(`target`, `type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EventTarget`](../modules/axes_lines._internal_.md#eventtarget) |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/axes_lines._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](../interfaces/axes_lines._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

[WatchableMap](data_panel_layout._internal_.WatchableMap.md).[registerEventListener](data_panel_layout._internal_.WatchableMap.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L95)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/data_panel_layout.ts:545](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/data_panel_layout.ts#L545)

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

[src/neuroglancer/data_panel_layout.ts:532](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/data_panel_layout.ts#L532)

___

### set

▸ **set**(`key`, `value`): [`CrossSectionSpecificationMap`](data_panel_layout.CrossSectionSpecificationMap.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | [`CrossSectionSpecification`](data_panel_layout.CrossSectionSpecification.md) |

#### Returns

[`CrossSectionSpecificationMap`](data_panel_layout.CrossSectionSpecificationMap.md)

#### Inherited from

[WatchableMap](data_panel_layout._internal_.WatchableMap.md).[set](data_panel_layout._internal_.WatchableMap.md#set)

#### Defined in

[src/neuroglancer/util/watchable_map.ts:44](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/watchable_map.ts#L44)

___

### toJSON

▸ **toJSON**(): `undefined` \| { `[key: string]`: `any`;  }

#### Returns

`undefined` \| { `[key: string]`: `any`;  }

#### Defined in

[src/neuroglancer/data_panel_layout.ts:549](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/data_panel_layout.ts#L549)

___

### unregisterDisposer

▸ **unregisterDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/axes_lines._internal_.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[WatchableMap](data_panel_layout._internal_.WatchableMap.md).[unregisterDisposer](data_panel_layout._internal_.WatchableMap.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L85)

___

### values

▸ **values**(): [`IterableIterator`](../interfaces/axes_lines._internal_.IterableIterator.md)<[`CrossSectionSpecification`](data_panel_layout.CrossSectionSpecification.md)\>

#### Returns

[`IterableIterator`](../interfaces/axes_lines._internal_.IterableIterator.md)<[`CrossSectionSpecification`](data_panel_layout.CrossSectionSpecification.md)\>

#### Inherited from

[WatchableMap](data_panel_layout._internal_.WatchableMap.md).[values](data_panel_layout._internal_.WatchableMap.md#values)

#### Defined in

[src/neuroglancer/util/watchable_map.ts:92](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/watchable_map.ts#L92)
