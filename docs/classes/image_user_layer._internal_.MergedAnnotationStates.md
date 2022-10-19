[neuroglancer](../README.md) / [Modules](../modules.md) / [image\_user\_layer](../modules/image_user_layer.md) / [<internal\>](../modules/image_user_layer._internal_.md) / MergedAnnotationStates

# Class: MergedAnnotationStates

[image_user_layer](../modules/image_user_layer.md).[<internal>](../modules/image_user_layer._internal_.md).MergedAnnotationStates

## Hierarchy

- [`RefCounted`](axes_lines._internal_.RefCounted.md)

  ↳ **`MergedAnnotationStates`**

## Implements

- [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<readonly [`AnnotationLayerState`](image_user_layer._internal_.AnnotationLayerState.md)[]\>

## Table of contents

### Constructors

- [constructor](image_user_layer._internal_.MergedAnnotationStates.md#constructor)

### Properties

- [changed](image_user_layer._internal_.MergedAnnotationStates.md#changed)
- [disposedStacks](image_user_layer._internal_.MergedAnnotationStates.md#disposedstacks)
- [isLoadingChanged](image_user_layer._internal_.MergedAnnotationStates.md#isloadingchanged)
- [loadingCount](image_user_layer._internal_.MergedAnnotationStates.md#loadingcount)
- [refCount](image_user_layer._internal_.MergedAnnotationStates.md#refcount)
- [relationships](image_user_layer._internal_.MergedAnnotationStates.md#relationships)
- [states](image_user_layer._internal_.MergedAnnotationStates.md#states)
- [wasDisposed](image_user_layer._internal_.MergedAnnotationStates.md#wasdisposed)

### Accessors

- [isLoading](image_user_layer._internal_.MergedAnnotationStates.md#isloading)
- [value](image_user_layer._internal_.MergedAnnotationStates.md#value)

### Methods

- [add](image_user_layer._internal_.MergedAnnotationStates.md#add)
- [addRef](image_user_layer._internal_.MergedAnnotationStates.md#addref)
- [dispose](image_user_layer._internal_.MergedAnnotationStates.md#dispose)
- [disposed](image_user_layer._internal_.MergedAnnotationStates.md#disposed)
- [markLoading](image_user_layer._internal_.MergedAnnotationStates.md#markloading)
- [refCountReachedZero](image_user_layer._internal_.MergedAnnotationStates.md#refcountreachedzero)
- [registerCancellable](image_user_layer._internal_.MergedAnnotationStates.md#registercancellable)
- [registerDisposer](image_user_layer._internal_.MergedAnnotationStates.md#registerdisposer)
- [registerEventListener](image_user_layer._internal_.MergedAnnotationStates.md#registereventlistener)
- [sort](image_user_layer._internal_.MergedAnnotationStates.md#sort)
- [unregisterDisposer](image_user_layer._internal_.MergedAnnotationStates.md#unregisterdisposer)
- [updateRelationships](image_user_layer._internal_.MergedAnnotationStates.md#updaterelationships)

## Constructors

### constructor

• **new MergedAnnotationStates**()

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[constructor](axes_lines._internal_.RefCounted.md#constructor)

## Properties

### changed

• **changed**: [`NullarySignal`](coordinate_transform._internal_.NullarySignal.md)

#### Implementation of

[WatchableValueInterface](../interfaces/trackable_value.WatchableValueInterface.md).[changed](../interfaces/trackable_value.WatchableValueInterface.md#changed)

#### Defined in

[src/neuroglancer/ui/annotations.ts:117](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/annotations.ts#L117)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[disposedStacks](axes_lines._internal_.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L52)

___

### isLoadingChanged

• **isLoadingChanged**: [`NullarySignal`](coordinate_transform._internal_.NullarySignal.md)

#### Defined in

[src/neuroglancer/ui/annotations.ts:118](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/annotations.ts#L118)

___

### loadingCount

• `Private` **loadingCount**: `number` = `0`

#### Defined in

[src/neuroglancer/ui/annotations.ts:121](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/annotations.ts#L121)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[refCount](axes_lines._internal_.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L45)

___

### relationships

• **relationships**: `string`[] = `[]`

#### Defined in

[src/neuroglancer/ui/annotations.ts:120](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/annotations.ts#L120)

___

### states

• **states**: [`AnnotationLayerState`](image_user_layer._internal_.AnnotationLayerState.md)[] = `[]`

#### Defined in

[src/neuroglancer/ui/annotations.ts:119](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/annotations.ts#L119)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[wasDisposed](axes_lines._internal_.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### isLoading

• `get` **isLoading**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/ui/annotations.ts:127](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/annotations.ts#L127)

___

### value

• `get` **value**(): [`AnnotationLayerState`](image_user_layer._internal_.AnnotationLayerState.md)[]

#### Returns

[`AnnotationLayerState`](image_user_layer._internal_.AnnotationLayerState.md)[]

#### Implementation of

[WatchableValueInterface](../interfaces/trackable_value.WatchableValueInterface.md).[value](../interfaces/trackable_value.WatchableValueInterface.md#value)

#### Defined in

[src/neuroglancer/ui/annotations.ts:123](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/annotations.ts#L123)

## Methods

### add

▸ **add**(`state`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`AnnotationLayerState`](image_user_layer._internal_.AnnotationLayerState.md) |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/neuroglancer/ui/annotations.ts:158](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/annotations.ts#L158)

___

### addRef

▸ **addRef**(): [`MergedAnnotationStates`](image_user_layer._internal_.MergedAnnotationStates.md)

#### Returns

[`MergedAnnotationStates`](image_user_layer._internal_.MergedAnnotationStates.md)

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[addRef](axes_lines._internal_.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[dispose](axes_lines._internal_.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[disposed](axes_lines._internal_.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L75)

___

### markLoading

▸ **markLoading**(): () => `void`

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/neuroglancer/ui/annotations.ts:131](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/annotations.ts#L131)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[refCountReachedZero](axes_lines._internal_.RefCounted.md#refcountreachedzero)

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

[RefCounted](axes_lines._internal_.RefCounted.md).[registerCancellable](axes_lines._internal_.RefCounted.md#registercancellable)

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

[RefCounted](axes_lines._internal_.RefCounted.md).[registerDisposer](axes_lines._internal_.RefCounted.md#registerdisposer)

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

[RefCounted](axes_lines._internal_.RefCounted.md).[registerEventListener](axes_lines._internal_.RefCounted.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L95)

___

### sort

▸ `Private` **sort**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/annotations.ts:140](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/annotations.ts#L140)

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

[RefCounted](axes_lines._internal_.RefCounted.md).[unregisterDisposer](axes_lines._internal_.RefCounted.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L85)

___

### updateRelationships

▸ `Private` **updateRelationships**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/annotations.ts:148](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/annotations.ts#L148)
