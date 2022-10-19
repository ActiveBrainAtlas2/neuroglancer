[neuroglancer](../README.md) / [Modules](../modules.md) / [ui/annotations](../modules/ui_annotations.md) / MergedAnnotationStates

# Class: MergedAnnotationStates

[ui/annotations](../modules/ui_annotations.md).MergedAnnotationStates

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`MergedAnnotationStates`**

## Implements

- [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<readonly [`AnnotationLayerState`](annotation_annotation_layer_state.AnnotationLayerState.md)[]\>

## Table of contents

### Constructors

- [constructor](ui_annotations.MergedAnnotationStates.md#constructor)

### Properties

- [changed](ui_annotations.MergedAnnotationStates.md#changed)
- [disposedStacks](ui_annotations.MergedAnnotationStates.md#disposedstacks)
- [isLoadingChanged](ui_annotations.MergedAnnotationStates.md#isloadingchanged)
- [loadingCount](ui_annotations.MergedAnnotationStates.md#loadingcount)
- [refCount](ui_annotations.MergedAnnotationStates.md#refcount)
- [relationships](ui_annotations.MergedAnnotationStates.md#relationships)
- [states](ui_annotations.MergedAnnotationStates.md#states)
- [wasDisposed](ui_annotations.MergedAnnotationStates.md#wasdisposed)

### Accessors

- [isLoading](ui_annotations.MergedAnnotationStates.md#isloading)
- [value](ui_annotations.MergedAnnotationStates.md#value)

### Methods

- [add](ui_annotations.MergedAnnotationStates.md#add)
- [addRef](ui_annotations.MergedAnnotationStates.md#addref)
- [dispose](ui_annotations.MergedAnnotationStates.md#dispose)
- [disposed](ui_annotations.MergedAnnotationStates.md#disposed)
- [markLoading](ui_annotations.MergedAnnotationStates.md#markloading)
- [refCountReachedZero](ui_annotations.MergedAnnotationStates.md#refcountreachedzero)
- [registerCancellable](ui_annotations.MergedAnnotationStates.md#registercancellable)
- [registerDisposer](ui_annotations.MergedAnnotationStates.md#registerdisposer)
- [registerEventListener](ui_annotations.MergedAnnotationStates.md#registereventlistener)
- [sort](ui_annotations.MergedAnnotationStates.md#sort)
- [unregisterDisposer](ui_annotations.MergedAnnotationStates.md#unregisterdisposer)
- [updateRelationships](ui_annotations.MergedAnnotationStates.md#updaterelationships)

## Constructors

### constructor

• **new MergedAnnotationStates**()

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

## Properties

### changed

• **changed**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Implementation of

[WatchableValueInterface](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md).[changed](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md#changed)

#### Defined in

[src/neuroglancer/ui/annotations.ts:117](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L117)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### isLoadingChanged

• **isLoadingChanged**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/ui/annotations.ts:118](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L118)

___

### loadingCount

• `Private` **loadingCount**: `number` = `0`

#### Defined in

[src/neuroglancer/ui/annotations.ts:121](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L121)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### relationships

• **relationships**: `string`[] = `[]`

#### Defined in

[src/neuroglancer/ui/annotations.ts:120](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L120)

___

### states

• **states**: [`AnnotationLayerState`](annotation_annotation_layer_state.AnnotationLayerState.md)[] = `[]`

#### Defined in

[src/neuroglancer/ui/annotations.ts:119](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L119)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### isLoading

• `get` **isLoading**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/ui/annotations.ts:127](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L127)

___

### value

• `get` **value**(): [`AnnotationLayerState`](annotation_annotation_layer_state.AnnotationLayerState.md)[]

#### Returns

[`AnnotationLayerState`](annotation_annotation_layer_state.AnnotationLayerState.md)[]

#### Implementation of

[WatchableValueInterface](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md).[value](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md#value)

#### Defined in

[src/neuroglancer/ui/annotations.ts:123](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L123)

## Methods

### add

▸ **add**(`state`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`AnnotationLayerState`](annotation_annotation_layer_state.AnnotationLayerState.md) |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/neuroglancer/ui/annotations.ts:158](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L158)

___

### addRef

▸ **addRef**(): [`MergedAnnotationStates`](ui_annotations.MergedAnnotationStates.md)

#### Returns

[`MergedAnnotationStates`](ui_annotations.MergedAnnotationStates.md)

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[addRef](util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[dispose](util_disposable.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposed](util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L75)

___

### markLoading

▸ **markLoading**(): () => `void`

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/neuroglancer/ui/annotations.ts:131](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L131)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCountReachedZero](util_disposable.RefCounted.md#refcountreachedzero)

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

[RefCounted](util_disposable.RefCounted.md).[registerCancellable](util_disposable.RefCounted.md#registercancellable)

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

[RefCounted](util_disposable.RefCounted.md).[registerDisposer](util_disposable.RefCounted.md#registerdisposer)

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

[RefCounted](util_disposable.RefCounted.md).[registerEventListener](util_disposable.RefCounted.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L95)

___

### sort

▸ `Private` **sort**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/annotations.ts:140](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L140)

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

[RefCounted](util_disposable.RefCounted.md).[unregisterDisposer](util_disposable.RefCounted.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)

___

### updateRelationships

▸ `Private` **updateRelationships**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/annotations.ts:148](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/annotations.ts#L148)
