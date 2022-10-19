[neuroglancer](../README.md) / [Modules](../modules.md) / [image\_user\_layer](../modules/image_user_layer.md) / [<internal\>](../modules/image_user_layer._internal_.md) / WatchableAnnotationRelationshipStates

# Class: WatchableAnnotationRelationshipStates

[image_user_layer](../modules/image_user_layer.md).[<internal>](../modules/image_user_layer._internal_.md).WatchableAnnotationRelationshipStates

## Hierarchy

- [`WatchableMap`](data_panel_layout._internal_.WatchableMap.md)<`string`, [`AnnotationRelationshipState`](../interfaces/image_user_layer._internal_.AnnotationRelationshipState.md)\>

  ↳ **`WatchableAnnotationRelationshipStates`**

## Table of contents

### Constructors

- [constructor](image_user_layer._internal_.WatchableAnnotationRelationshipStates.md#constructor)

### Properties

- [changed](image_user_layer._internal_.WatchableAnnotationRelationshipStates.md#changed)
- [disposedStacks](image_user_layer._internal_.WatchableAnnotationRelationshipStates.md#disposedstacks)
- [map](image_user_layer._internal_.WatchableAnnotationRelationshipStates.md#map)
- [refCount](image_user_layer._internal_.WatchableAnnotationRelationshipStates.md#refcount)
- [wasDisposed](image_user_layer._internal_.WatchableAnnotationRelationshipStates.md#wasdisposed)

### Accessors

- [size](image_user_layer._internal_.WatchableAnnotationRelationshipStates.md#size)
- [value](image_user_layer._internal_.WatchableAnnotationRelationshipStates.md#value)

### Methods

- [[iterator]](image_user_layer._internal_.WatchableAnnotationRelationshipStates.md#[iterator])
- [addRef](image_user_layer._internal_.WatchableAnnotationRelationshipStates.md#addref)
- [clear](image_user_layer._internal_.WatchableAnnotationRelationshipStates.md#clear)
- [delete](image_user_layer._internal_.WatchableAnnotationRelationshipStates.md#delete)
- [dispose](image_user_layer._internal_.WatchableAnnotationRelationshipStates.md#dispose)
- [disposed](image_user_layer._internal_.WatchableAnnotationRelationshipStates.md#disposed)
- [get](image_user_layer._internal_.WatchableAnnotationRelationshipStates.md#get)
- [has](image_user_layer._internal_.WatchableAnnotationRelationshipStates.md#has)
- [keys](image_user_layer._internal_.WatchableAnnotationRelationshipStates.md#keys)
- [refCountReachedZero](image_user_layer._internal_.WatchableAnnotationRelationshipStates.md#refcountreachedzero)
- [registerCancellable](image_user_layer._internal_.WatchableAnnotationRelationshipStates.md#registercancellable)
- [registerDisposer](image_user_layer._internal_.WatchableAnnotationRelationshipStates.md#registerdisposer)
- [registerEventListener](image_user_layer._internal_.WatchableAnnotationRelationshipStates.md#registereventlistener)
- [set](image_user_layer._internal_.WatchableAnnotationRelationshipStates.md#set)
- [unregisterDisposer](image_user_layer._internal_.WatchableAnnotationRelationshipStates.md#unregisterdisposer)
- [values](image_user_layer._internal_.WatchableAnnotationRelationshipStates.md#values)

## Constructors

### constructor

• **new WatchableAnnotationRelationshipStates**()

#### Overrides

[WatchableMap](data_panel_layout._internal_.WatchableMap.md).[constructor](data_panel_layout._internal_.WatchableMap.md#constructor)

#### Defined in

[src/neuroglancer/annotation/annotation_layer_state.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/annotation_layer_state.ts#L47)

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

• **map**: `Map`<`string`, [`AnnotationRelationshipState`](../interfaces/image_user_layer._internal_.AnnotationRelationshipState.md)\>

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

▸ **[iterator]**(): [`IterableIterator`](../interfaces/axes_lines._internal_.IterableIterator.md)<[`string`, [`AnnotationRelationshipState`](../interfaces/image_user_layer._internal_.AnnotationRelationshipState.md)]\>

#### Returns

[`IterableIterator`](../interfaces/axes_lines._internal_.IterableIterator.md)<[`string`, [`AnnotationRelationshipState`](../interfaces/image_user_layer._internal_.AnnotationRelationshipState.md)]\>

#### Inherited from

[WatchableMap](data_panel_layout._internal_.WatchableMap.md).[[iterator]](data_panel_layout._internal_.WatchableMap.md#[iterator])

#### Defined in

[src/neuroglancer/util/watchable_map.ts:78](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/watchable_map.ts#L78)

___

### addRef

▸ **addRef**(): [`WatchableAnnotationRelationshipStates`](image_user_layer._internal_.WatchableAnnotationRelationshipStates.md)

#### Returns

[`WatchableAnnotationRelationshipStates`](image_user_layer._internal_.WatchableAnnotationRelationshipStates.md)

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

▸ **get**(`name`): [`AnnotationRelationshipState`](../interfaces/image_user_layer._internal_.AnnotationRelationshipState.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`AnnotationRelationshipState`](../interfaces/image_user_layer._internal_.AnnotationRelationshipState.md)

#### Overrides

[WatchableMap](data_panel_layout._internal_.WatchableMap.md).[get](data_panel_layout._internal_.WatchableMap.md#get)

#### Defined in

[src/neuroglancer/annotation/annotation_layer_state.ts:70](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/annotation_layer_state.ts#L70)

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

### set

▸ **set**(`key`, `value`): [`WatchableAnnotationRelationshipStates`](image_user_layer._internal_.WatchableAnnotationRelationshipStates.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | [`AnnotationRelationshipState`](../interfaces/image_user_layer._internal_.AnnotationRelationshipState.md) |

#### Returns

[`WatchableAnnotationRelationshipStates`](image_user_layer._internal_.WatchableAnnotationRelationshipStates.md)

#### Inherited from

[WatchableMap](data_panel_layout._internal_.WatchableMap.md).[set](data_panel_layout._internal_.WatchableMap.md#set)

#### Defined in

[src/neuroglancer/util/watchable_map.ts:44](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/watchable_map.ts#L44)

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

▸ **values**(): [`IterableIterator`](../interfaces/axes_lines._internal_.IterableIterator.md)<[`AnnotationRelationshipState`](../interfaces/image_user_layer._internal_.AnnotationRelationshipState.md)\>

#### Returns

[`IterableIterator`](../interfaces/axes_lines._internal_.IterableIterator.md)<[`AnnotationRelationshipState`](../interfaces/image_user_layer._internal_.AnnotationRelationshipState.md)\>

#### Inherited from

[WatchableMap](data_panel_layout._internal_.WatchableMap.md).[values](data_panel_layout._internal_.WatchableMap.md#values)

#### Defined in

[src/neuroglancer/util/watchable_map.ts:92](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/watchable_map.ts#L92)
