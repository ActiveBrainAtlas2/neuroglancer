[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / WatchableAnnotationRelationshipStates

# Class: WatchableAnnotationRelationshipStates

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).WatchableAnnotationRelationshipStates

## Hierarchy

- [`WatchableMap`](util_watchable_map.WatchableMap.md)<`string`, [`AnnotationRelationshipState`](../interfaces/annotation_annotation_layer_state.AnnotationRelationshipState.md)\>

  ↳ **`WatchableAnnotationRelationshipStates`**

## Table of contents

### Constructors

- [constructor](annotation_annotation_layer_state.WatchableAnnotationRelationshipStates.md#constructor)

### Properties

- [changed](annotation_annotation_layer_state.WatchableAnnotationRelationshipStates.md#changed)
- [disposedStacks](annotation_annotation_layer_state.WatchableAnnotationRelationshipStates.md#disposedstacks)
- [map](annotation_annotation_layer_state.WatchableAnnotationRelationshipStates.md#map)
- [refCount](annotation_annotation_layer_state.WatchableAnnotationRelationshipStates.md#refcount)
- [wasDisposed](annotation_annotation_layer_state.WatchableAnnotationRelationshipStates.md#wasdisposed)

### Accessors

- [size](annotation_annotation_layer_state.WatchableAnnotationRelationshipStates.md#size)
- [value](annotation_annotation_layer_state.WatchableAnnotationRelationshipStates.md#value)

### Methods

- [[iterator]](annotation_annotation_layer_state.WatchableAnnotationRelationshipStates.md#[iterator])
- [addRef](annotation_annotation_layer_state.WatchableAnnotationRelationshipStates.md#addref)
- [clear](annotation_annotation_layer_state.WatchableAnnotationRelationshipStates.md#clear)
- [delete](annotation_annotation_layer_state.WatchableAnnotationRelationshipStates.md#delete)
- [dispose](annotation_annotation_layer_state.WatchableAnnotationRelationshipStates.md#dispose)
- [disposed](annotation_annotation_layer_state.WatchableAnnotationRelationshipStates.md#disposed)
- [get](annotation_annotation_layer_state.WatchableAnnotationRelationshipStates.md#get)
- [has](annotation_annotation_layer_state.WatchableAnnotationRelationshipStates.md#has)
- [keys](annotation_annotation_layer_state.WatchableAnnotationRelationshipStates.md#keys)
- [refCountReachedZero](annotation_annotation_layer_state.WatchableAnnotationRelationshipStates.md#refcountreachedzero)
- [registerCancellable](annotation_annotation_layer_state.WatchableAnnotationRelationshipStates.md#registercancellable)
- [registerDisposer](annotation_annotation_layer_state.WatchableAnnotationRelationshipStates.md#registerdisposer)
- [registerEventListener](annotation_annotation_layer_state.WatchableAnnotationRelationshipStates.md#registereventlistener)
- [set](annotation_annotation_layer_state.WatchableAnnotationRelationshipStates.md#set)
- [unregisterDisposer](annotation_annotation_layer_state.WatchableAnnotationRelationshipStates.md#unregisterdisposer)
- [values](annotation_annotation_layer_state.WatchableAnnotationRelationshipStates.md#values)

## Constructors

### constructor

• **new WatchableAnnotationRelationshipStates**()

#### Overrides

[WatchableMap](util_watchable_map.WatchableMap.md).[constructor](util_watchable_map.WatchableMap.md#constructor)

#### Defined in

[src/neuroglancer/annotation/annotation_layer_state.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/annotation_layer_state.ts#L47)

## Properties

### changed

• **changed**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Inherited from

[WatchableMap](util_watchable_map.WatchableMap.md).[changed](util_watchable_map.WatchableMap.md#changed)

#### Defined in

[src/neuroglancer/util/watchable_map.ts:21](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/watchable_map.ts#L21)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[WatchableMap](util_watchable_map.WatchableMap.md).[disposedStacks](util_watchable_map.WatchableMap.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### map

• **map**: `Map`<`string`, [`AnnotationRelationshipState`](../interfaces/annotation_annotation_layer_state.AnnotationRelationshipState.md)\>

#### Inherited from

[WatchableMap](util_watchable_map.WatchableMap.md).[map](util_watchable_map.WatchableMap.md#map)

#### Defined in

[src/neuroglancer/util/watchable_map.ts:22](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/watchable_map.ts#L22)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[WatchableMap](util_watchable_map.WatchableMap.md).[refCount](util_watchable_map.WatchableMap.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[WatchableMap](util_watchable_map.WatchableMap.md).[wasDisposed](util_watchable_map.WatchableMap.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### size

• `get` **size**(): `number`

#### Returns

`number`

#### Inherited from

WatchableMap.size

#### Defined in

[src/neuroglancer/util/watchable_map.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/watchable_map.ts#L75)

___

### value

• `get` **value**(): `ReadonlyMap`<`K`, `V`\>

#### Returns

`ReadonlyMap`<`K`, `V`\>

#### Inherited from

WatchableMap.value

#### Defined in

[src/neuroglancer/util/watchable_map.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/watchable_map.ts#L40)

## Methods

### [iterator]

▸ **[iterator]**(): [`IterableIterator`](../interfaces/annotation_annotation_layer_state._internal_.IterableIterator.md)<[`string`, [`AnnotationRelationshipState`](../interfaces/annotation_annotation_layer_state.AnnotationRelationshipState.md)]\>

#### Returns

[`IterableIterator`](../interfaces/annotation_annotation_layer_state._internal_.IterableIterator.md)<[`string`, [`AnnotationRelationshipState`](../interfaces/annotation_annotation_layer_state.AnnotationRelationshipState.md)]\>

#### Inherited from

[WatchableMap](util_watchable_map.WatchableMap.md).[[iterator]](util_watchable_map.WatchableMap.md#[iterator])

#### Defined in

[src/neuroglancer/util/watchable_map.ts:78](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/watchable_map.ts#L78)

___

### addRef

▸ **addRef**(): [`WatchableAnnotationRelationshipStates`](annotation_annotation_layer_state.WatchableAnnotationRelationshipStates.md)

#### Returns

[`WatchableAnnotationRelationshipStates`](annotation_annotation_layer_state.WatchableAnnotationRelationshipStates.md)

#### Inherited from

[WatchableMap](util_watchable_map.WatchableMap.md).[addRef](util_watchable_map.WatchableMap.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Inherited from

[WatchableMap](util_watchable_map.WatchableMap.md).[clear](util_watchable_map.WatchableMap.md#clear)

#### Defined in

[src/neuroglancer/util/watchable_map.ts:81](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/watchable_map.ts#L81)

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

[WatchableMap](util_watchable_map.WatchableMap.md).[delete](util_watchable_map.WatchableMap.md#delete)

#### Defined in

[src/neuroglancer/util/watchable_map.ts:57](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/watchable_map.ts#L57)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[WatchableMap](util_watchable_map.WatchableMap.md).[dispose](util_watchable_map.WatchableMap.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[WatchableMap](util_watchable_map.WatchableMap.md).[disposed](util_watchable_map.WatchableMap.md#disposed)

#### Defined in

[src/neuroglancer/util/watchable_map.ts:98](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/watchable_map.ts#L98)

___

### get

▸ **get**(`name`): [`AnnotationRelationshipState`](../interfaces/annotation_annotation_layer_state.AnnotationRelationshipState.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`AnnotationRelationshipState`](../interfaces/annotation_annotation_layer_state.AnnotationRelationshipState.md)

#### Overrides

[WatchableMap](util_watchable_map.WatchableMap.md).[get](util_watchable_map.WatchableMap.md#get)

#### Defined in

[src/neuroglancer/annotation/annotation_layer_state.ts:70](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/annotation_layer_state.ts#L70)

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

[WatchableMap](util_watchable_map.WatchableMap.md).[has](util_watchable_map.WatchableMap.md#has)

#### Defined in

[src/neuroglancer/util/watchable_map.ts:72](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/watchable_map.ts#L72)

___

### keys

▸ **keys**(): [`IterableIterator`](../interfaces/annotation_annotation_layer_state._internal_.IterableIterator.md)<`string`\>

#### Returns

[`IterableIterator`](../interfaces/annotation_annotation_layer_state._internal_.IterableIterator.md)<`string`\>

#### Inherited from

[WatchableMap](util_watchable_map.WatchableMap.md).[keys](util_watchable_map.WatchableMap.md#keys)

#### Defined in

[src/neuroglancer/util/watchable_map.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/watchable_map.ts#L95)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[WatchableMap](util_watchable_map.WatchableMap.md).[refCountReachedZero](util_watchable_map.WatchableMap.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L66)

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

[WatchableMap](util_watchable_map.WatchableMap.md).[registerCancellable](util_watchable_map.WatchableMap.md#registercancellable)

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L100)

___

### registerDisposer

▸ **registerDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/util_disposable.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[WatchableMap](util_watchable_map.WatchableMap.md).[registerDisposer](util_watchable_map.WatchableMap.md#registerdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L76)

___

### registerEventListener

▸ **registerEventListener**(`target`, `type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EventTarget`](../modules/annotation_annotation_layer_state._internal_.md#eventtarget) |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/annotation_annotation_layer_state._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](../interfaces/annotation_annotation_layer_state._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

[WatchableMap](util_watchable_map.WatchableMap.md).[registerEventListener](util_watchable_map.WatchableMap.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L95)

___

### set

▸ **set**(`key`, `value`): [`WatchableAnnotationRelationshipStates`](annotation_annotation_layer_state.WatchableAnnotationRelationshipStates.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | [`AnnotationRelationshipState`](../interfaces/annotation_annotation_layer_state.AnnotationRelationshipState.md) |

#### Returns

[`WatchableAnnotationRelationshipStates`](annotation_annotation_layer_state.WatchableAnnotationRelationshipStates.md)

#### Inherited from

[WatchableMap](util_watchable_map.WatchableMap.md).[set](util_watchable_map.WatchableMap.md#set)

#### Defined in

[src/neuroglancer/util/watchable_map.ts:44](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/watchable_map.ts#L44)

___

### unregisterDisposer

▸ **unregisterDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/util_disposable.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[WatchableMap](util_watchable_map.WatchableMap.md).[unregisterDisposer](util_watchable_map.WatchableMap.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)

___

### values

▸ **values**(): [`IterableIterator`](../interfaces/annotation_annotation_layer_state._internal_.IterableIterator.md)<[`AnnotationRelationshipState`](../interfaces/annotation_annotation_layer_state.AnnotationRelationshipState.md)\>

#### Returns

[`IterableIterator`](../interfaces/annotation_annotation_layer_state._internal_.IterableIterator.md)<[`AnnotationRelationshipState`](../interfaces/annotation_annotation_layer_state.AnnotationRelationshipState.md)\>

#### Inherited from

[WatchableMap](util_watchable_map.WatchableMap.md).[values](util_watchable_map.WatchableMap.md#values)

#### Defined in

[src/neuroglancer/util/watchable_map.ts:92](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/watchable_map.ts#L92)
