[neuroglancer](../README.md) / [Modules](../modules.md) / [data\_panel\_layout](../modules/data_panel_layout.md) / CrossSectionSpecificationMap

# Class: CrossSectionSpecificationMap

[data_panel_layout](../modules/data_panel_layout.md).CrossSectionSpecificationMap

## Hierarchy

- `WatchableMap`<`string`, [`CrossSectionSpecification`](data_panel_layout.CrossSectionSpecification.md)\>

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

WatchableMap&lt;string, CrossSectionSpecification\&gt;.constructor

#### Defined in

[src/neuroglancer/data_panel_layout.ts:524](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/data_panel_layout.ts#L524)

## Properties

### changed

• **changed**: `NullarySignal`

#### Inherited from

WatchableMap.changed

#### Defined in

[src/neuroglancer/util/watchable_map.ts:21](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/watchable_map.ts#L21)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

WatchableMap.disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L52)

___

### map

• **map**: `Map`<`string`, [`CrossSectionSpecification`](data_panel_layout.CrossSectionSpecification.md)\>

#### Inherited from

WatchableMap.map

#### Defined in

[src/neuroglancer/util/watchable_map.ts:22](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/watchable_map.ts#L22)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

WatchableMap.refCount

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

WatchableMap.wasDisposed

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### size

• `get` **size**(): `number`

#### Returns

`number`

#### Inherited from

WatchableMap.size

#### Defined in

[src/neuroglancer/util/watchable_map.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/watchable_map.ts#L75)

___

### value

• `get` **value**(): `ReadonlyMap`<`K`, `V`\>

#### Returns

`ReadonlyMap`<`K`, `V`\>

#### Inherited from

WatchableMap.value

#### Defined in

[src/neuroglancer/util/watchable_map.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/watchable_map.ts#L40)

## Methods

### [iterator]

▸ **[iterator]**(): `IterableIterator`<[`string`, [`CrossSectionSpecification`](data_panel_layout.CrossSectionSpecification.md)]\>

#### Returns

`IterableIterator`<[`string`, [`CrossSectionSpecification`](data_panel_layout.CrossSectionSpecification.md)]\>

#### Inherited from

WatchableMap.\_\_@iterator@87

#### Defined in

[src/neuroglancer/util/watchable_map.ts:78](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/watchable_map.ts#L78)

___

### addRef

▸ **addRef**(): [`CrossSectionSpecificationMap`](data_panel_layout.CrossSectionSpecificationMap.md)

#### Returns

[`CrossSectionSpecificationMap`](data_panel_layout.CrossSectionSpecificationMap.md)

#### Inherited from

WatchableMap.addRef

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L48)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Inherited from

WatchableMap.clear

#### Defined in

[src/neuroglancer/util/watchable_map.ts:81](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/watchable_map.ts#L81)

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

WatchableMap.delete

#### Defined in

[src/neuroglancer/util/watchable_map.ts:57](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/watchable_map.ts#L57)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

WatchableMap.dispose

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

WatchableMap.disposed

#### Defined in

[src/neuroglancer/util/watchable_map.ts:98](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/watchable_map.ts#L98)

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

WatchableMap.get

#### Defined in

[src/neuroglancer/util/watchable_map.ts:69](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/watchable_map.ts#L69)

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

WatchableMap.has

#### Defined in

[src/neuroglancer/util/watchable_map.ts:72](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/watchable_map.ts#L72)

___

### keys

▸ **keys**(): `IterableIterator`<`string`\>

#### Returns

`IterableIterator`<`string`\>

#### Inherited from

WatchableMap.keys

#### Defined in

[src/neuroglancer/util/watchable_map.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/watchable_map.ts#L95)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

WatchableMap.refCountReachedZero

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L66)

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

WatchableMap.registerCancellable

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L100)

___

### registerDisposer

▸ **registerDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Disposer` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

WatchableMap.registerDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L76)

___

### registerEventListener

▸ **registerEventListener**(`target`, `type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `EventTarget` |
| `type` | `string` |
| `listener` | `EventListenerOrEventListenerObject` |
| `options?` | `boolean` \| `AddEventListenerOptions` |

#### Returns

`void`

#### Inherited from

WatchableMap.registerEventListener

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L95)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/data_panel_layout.ts:545](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/data_panel_layout.ts#L545)

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

[src/neuroglancer/data_panel_layout.ts:532](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/data_panel_layout.ts#L532)

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

WatchableMap.set

#### Defined in

[src/neuroglancer/util/watchable_map.ts:44](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/watchable_map.ts#L44)

___

### toJSON

▸ **toJSON**(): `undefined` \| { `[key: string]`: `any`;  }

#### Returns

`undefined` \| { `[key: string]`: `any`;  }

#### Defined in

[src/neuroglancer/data_panel_layout.ts:549](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/data_panel_layout.ts#L549)

___

### unregisterDisposer

▸ **unregisterDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Disposer` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

WatchableMap.unregisterDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L85)

___

### values

▸ **values**(): `IterableIterator`<[`CrossSectionSpecification`](data_panel_layout.CrossSectionSpecification.md)\>

#### Returns

`IterableIterator`<[`CrossSectionSpecification`](data_panel_layout.CrossSectionSpecification.md)\>

#### Inherited from

WatchableMap.values

#### Defined in

[src/neuroglancer/util/watchable_map.ts:92](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/watchable_map.ts#L92)
