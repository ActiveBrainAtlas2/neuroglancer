[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/annotation/annotation\_layer\_state](../modules/neuroglancer_annotation_annotation_layer_state.md) / WatchableAnnotationRelationshipStates

# Class: WatchableAnnotationRelationshipStates

[neuroglancer/annotation/annotation_layer_state](../modules/neuroglancer_annotation_annotation_layer_state.md).WatchableAnnotationRelationshipStates

**`License`**

Copyright 2016 Google Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

## Hierarchy

- [`WatchableMap`](neuroglancer_util_watchable_map.WatchableMap.md)<`string`, [`AnnotationRelationshipState`](../interfaces/neuroglancer_annotation_annotation_layer_state.AnnotationRelationshipState.md)\>

  ↳ **`WatchableAnnotationRelationshipStates`**

## Table of contents

### Constructors

- [constructor](neuroglancer_annotation_annotation_layer_state.WatchableAnnotationRelationshipStates.md#constructor)

### Properties

- [changed](neuroglancer_annotation_annotation_layer_state.WatchableAnnotationRelationshipStates.md#changed)
- [disposedStacks](neuroglancer_annotation_annotation_layer_state.WatchableAnnotationRelationshipStates.md#disposedstacks)
- [map](neuroglancer_annotation_annotation_layer_state.WatchableAnnotationRelationshipStates.md#map)
- [refCount](neuroglancer_annotation_annotation_layer_state.WatchableAnnotationRelationshipStates.md#refcount)
- [wasDisposed](neuroglancer_annotation_annotation_layer_state.WatchableAnnotationRelationshipStates.md#wasdisposed)

### Accessors

- [size](neuroglancer_annotation_annotation_layer_state.WatchableAnnotationRelationshipStates.md#size)
- [value](neuroglancer_annotation_annotation_layer_state.WatchableAnnotationRelationshipStates.md#value)

### Methods

- [[iterator]](neuroglancer_annotation_annotation_layer_state.WatchableAnnotationRelationshipStates.md#[iterator])
- [addRef](neuroglancer_annotation_annotation_layer_state.WatchableAnnotationRelationshipStates.md#addref)
- [clear](neuroglancer_annotation_annotation_layer_state.WatchableAnnotationRelationshipStates.md#clear)
- [delete](neuroglancer_annotation_annotation_layer_state.WatchableAnnotationRelationshipStates.md#delete)
- [dispose](neuroglancer_annotation_annotation_layer_state.WatchableAnnotationRelationshipStates.md#dispose)
- [disposed](neuroglancer_annotation_annotation_layer_state.WatchableAnnotationRelationshipStates.md#disposed)
- [get](neuroglancer_annotation_annotation_layer_state.WatchableAnnotationRelationshipStates.md#get)
- [has](neuroglancer_annotation_annotation_layer_state.WatchableAnnotationRelationshipStates.md#has)
- [keys](neuroglancer_annotation_annotation_layer_state.WatchableAnnotationRelationshipStates.md#keys)
- [refCountReachedZero](neuroglancer_annotation_annotation_layer_state.WatchableAnnotationRelationshipStates.md#refcountreachedzero)
- [registerCancellable](neuroglancer_annotation_annotation_layer_state.WatchableAnnotationRelationshipStates.md#registercancellable)
- [registerDisposer](neuroglancer_annotation_annotation_layer_state.WatchableAnnotationRelationshipStates.md#registerdisposer)
- [registerEventListener](neuroglancer_annotation_annotation_layer_state.WatchableAnnotationRelationshipStates.md#registereventlistener)
- [set](neuroglancer_annotation_annotation_layer_state.WatchableAnnotationRelationshipStates.md#set)
- [unregisterDisposer](neuroglancer_annotation_annotation_layer_state.WatchableAnnotationRelationshipStates.md#unregisterdisposer)
- [values](neuroglancer_annotation_annotation_layer_state.WatchableAnnotationRelationshipStates.md#values)

## Constructors

### constructor

• **new WatchableAnnotationRelationshipStates**()

#### Overrides

[WatchableMap](neuroglancer_util_watchable_map.WatchableMap.md).[constructor](neuroglancer_util_watchable_map.WatchableMap.md#constructor)

#### Defined in

[src/neuroglancer/annotation/annotation_layer_state.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/annotation_layer_state.ts#L47)

## Properties

### changed

• **changed**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Inherited from

[WatchableMap](neuroglancer_util_watchable_map.WatchableMap.md).[changed](neuroglancer_util_watchable_map.WatchableMap.md#changed)

#### Defined in

[src/neuroglancer/util/watchable_map.ts:21](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/watchable_map.ts#L21)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[WatchableMap](neuroglancer_util_watchable_map.WatchableMap.md).[disposedStacks](neuroglancer_util_watchable_map.WatchableMap.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### map

• **map**: `Map`<`string`, [`AnnotationRelationshipState`](../interfaces/neuroglancer_annotation_annotation_layer_state.AnnotationRelationshipState.md)\>

#### Inherited from

[WatchableMap](neuroglancer_util_watchable_map.WatchableMap.md).[map](neuroglancer_util_watchable_map.WatchableMap.md#map)

#### Defined in

[src/neuroglancer/util/watchable_map.ts:22](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/watchable_map.ts#L22)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[WatchableMap](neuroglancer_util_watchable_map.WatchableMap.md).[refCount](neuroglancer_util_watchable_map.WatchableMap.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[WatchableMap](neuroglancer_util_watchable_map.WatchableMap.md).[wasDisposed](neuroglancer_util_watchable_map.WatchableMap.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### size

• `get` **size**(): `number`

#### Returns

`number`

#### Inherited from

WatchableMap.size

#### Defined in

[src/neuroglancer/util/watchable_map.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/watchable_map.ts#L75)

___

### value

• `get` **value**(): `ReadonlyMap`<`K`, `V`\>

#### Returns

`ReadonlyMap`<`K`, `V`\>

#### Inherited from

WatchableMap.value

#### Defined in

[src/neuroglancer/util/watchable_map.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/watchable_map.ts#L40)

## Methods

### [iterator]

▸ **[iterator]**(): [`IterableIterator`](../interfaces/main_module._internal_.IterableIterator.md)<[`string`, [`AnnotationRelationshipState`](../interfaces/neuroglancer_annotation_annotation_layer_state.AnnotationRelationshipState.md)]\>

#### Returns

[`IterableIterator`](../interfaces/main_module._internal_.IterableIterator.md)<[`string`, [`AnnotationRelationshipState`](../interfaces/neuroglancer_annotation_annotation_layer_state.AnnotationRelationshipState.md)]\>

#### Inherited from

[WatchableMap](neuroglancer_util_watchable_map.WatchableMap.md).[[iterator]](neuroglancer_util_watchable_map.WatchableMap.md#[iterator])

#### Defined in

[src/neuroglancer/util/watchable_map.ts:78](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/watchable_map.ts#L78)

___

### addRef

▸ **addRef**(): [`WatchableAnnotationRelationshipStates`](neuroglancer_annotation_annotation_layer_state.WatchableAnnotationRelationshipStates.md)

#### Returns

[`WatchableAnnotationRelationshipStates`](neuroglancer_annotation_annotation_layer_state.WatchableAnnotationRelationshipStates.md)

#### Inherited from

[WatchableMap](neuroglancer_util_watchable_map.WatchableMap.md).[addRef](neuroglancer_util_watchable_map.WatchableMap.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Inherited from

[WatchableMap](neuroglancer_util_watchable_map.WatchableMap.md).[clear](neuroglancer_util_watchable_map.WatchableMap.md#clear)

#### Defined in

[src/neuroglancer/util/watchable_map.ts:81](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/watchable_map.ts#L81)

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

[src/neuroglancer/util/watchable_map.ts:57](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/watchable_map.ts#L57)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[WatchableMap](neuroglancer_util_watchable_map.WatchableMap.md).[dispose](neuroglancer_util_watchable_map.WatchableMap.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[WatchableMap](neuroglancer_util_watchable_map.WatchableMap.md).[disposed](neuroglancer_util_watchable_map.WatchableMap.md#disposed)

#### Defined in

[src/neuroglancer/util/watchable_map.ts:98](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/watchable_map.ts#L98)

___

### get

▸ **get**(`name`): [`AnnotationRelationshipState`](../interfaces/neuroglancer_annotation_annotation_layer_state.AnnotationRelationshipState.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`AnnotationRelationshipState`](../interfaces/neuroglancer_annotation_annotation_layer_state.AnnotationRelationshipState.md)

#### Overrides

[WatchableMap](neuroglancer_util_watchable_map.WatchableMap.md).[get](neuroglancer_util_watchable_map.WatchableMap.md#get)

#### Defined in

[src/neuroglancer/annotation/annotation_layer_state.ts:70](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/annotation_layer_state.ts#L70)

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

[src/neuroglancer/util/watchable_map.ts:72](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/watchable_map.ts#L72)

___

### keys

▸ **keys**(): [`IterableIterator`](../interfaces/main_module._internal_.IterableIterator.md)<`string`\>

#### Returns

[`IterableIterator`](../interfaces/main_module._internal_.IterableIterator.md)<`string`\>

#### Inherited from

[WatchableMap](neuroglancer_util_watchable_map.WatchableMap.md).[keys](neuroglancer_util_watchable_map.WatchableMap.md#keys)

#### Defined in

[src/neuroglancer/util/watchable_map.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/watchable_map.ts#L95)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[WatchableMap](neuroglancer_util_watchable_map.WatchableMap.md).[refCountReachedZero](neuroglancer_util_watchable_map.WatchableMap.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L66)

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

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L100)

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

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L76)

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

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L95)

___

### set

▸ **set**(`key`, `value`): [`WatchableAnnotationRelationshipStates`](neuroglancer_annotation_annotation_layer_state.WatchableAnnotationRelationshipStates.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | [`AnnotationRelationshipState`](../interfaces/neuroglancer_annotation_annotation_layer_state.AnnotationRelationshipState.md) |

#### Returns

[`WatchableAnnotationRelationshipStates`](neuroglancer_annotation_annotation_layer_state.WatchableAnnotationRelationshipStates.md)

#### Inherited from

[WatchableMap](neuroglancer_util_watchable_map.WatchableMap.md).[set](neuroglancer_util_watchable_map.WatchableMap.md#set)

#### Defined in

[src/neuroglancer/util/watchable_map.ts:44](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/watchable_map.ts#L44)

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

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L85)

___

### values

▸ **values**(): [`IterableIterator`](../interfaces/main_module._internal_.IterableIterator.md)<[`AnnotationRelationshipState`](../interfaces/neuroglancer_annotation_annotation_layer_state.AnnotationRelationshipState.md)\>

#### Returns

[`IterableIterator`](../interfaces/main_module._internal_.IterableIterator.md)<[`AnnotationRelationshipState`](../interfaces/neuroglancer_annotation_annotation_layer_state.AnnotationRelationshipState.md)\>

#### Inherited from

[WatchableMap](neuroglancer_util_watchable_map.WatchableMap.md).[values](neuroglancer_util_watchable_map.WatchableMap.md#values)

#### Defined in

[src/neuroglancer/util/watchable_map.ts:92](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/watchable_map.ts#L92)
