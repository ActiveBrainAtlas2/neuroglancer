[neuroglancer](../README.md) / [Modules](../modules.md) / [segmentation\_display\_state/frontend](../modules/segmentation_display_state_frontend.md) / SegmentSelectionState

# Class: SegmentSelectionState

[segmentation_display_state/frontend](../modules/segmentation_display_state_frontend.md).SegmentSelectionState

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`SegmentSelectionState`**

## Table of contents

### Constructors

- [constructor](segmentation_display_state_frontend.SegmentSelectionState.md#constructor)

### Properties

- [baseSelectedSegment](segmentation_display_state_frontend.SegmentSelectionState.md#baseselectedsegment)
- [changed](segmentation_display_state_frontend.SegmentSelectionState.md#changed)
- [disposedStacks](segmentation_display_state_frontend.SegmentSelectionState.md#disposedstacks)
- [hasSelectedSegment](segmentation_display_state_frontend.SegmentSelectionState.md#hasselectedsegment)
- [refCount](segmentation_display_state_frontend.SegmentSelectionState.md#refcount)
- [selectedSegment](segmentation_display_state_frontend.SegmentSelectionState.md#selectedsegment)
- [wasDisposed](segmentation_display_state_frontend.SegmentSelectionState.md#wasdisposed)

### Accessors

- [baseValue](segmentation_display_state_frontend.SegmentSelectionState.md#basevalue)
- [value](segmentation_display_state_frontend.SegmentSelectionState.md#value)

### Methods

- [addRef](segmentation_display_state_frontend.SegmentSelectionState.md#addref)
- [bindTo](segmentation_display_state_frontend.SegmentSelectionState.md#bindto)
- [dispose](segmentation_display_state_frontend.SegmentSelectionState.md#dispose)
- [disposed](segmentation_display_state_frontend.SegmentSelectionState.md#disposed)
- [isSelected](segmentation_display_state_frontend.SegmentSelectionState.md#isselected)
- [refCountReachedZero](segmentation_display_state_frontend.SegmentSelectionState.md#refcountreachedzero)
- [registerCancellable](segmentation_display_state_frontend.SegmentSelectionState.md#registercancellable)
- [registerDisposer](segmentation_display_state_frontend.SegmentSelectionState.md#registerdisposer)
- [registerEventListener](segmentation_display_state_frontend.SegmentSelectionState.md#registereventlistener)
- [set](segmentation_display_state_frontend.SegmentSelectionState.md#set)
- [unregisterDisposer](segmentation_display_state_frontend.SegmentSelectionState.md#unregisterdisposer)

## Constructors

### constructor

• **new SegmentSelectionState**()

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

## Properties

### baseSelectedSegment

• **baseSelectedSegment**: [`Uint64`](util_uint64.Uint64.md)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:61](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L61)

___

### changed

• **changed**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:63](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L63)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### hasSelectedSegment

• **hasSelectedSegment**: `boolean` = `false`

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:62](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L62)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### selectedSegment

• **selectedSegment**: [`Uint64`](util_uint64.Uint64.md)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:60](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L60)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### baseValue

• `get` **baseValue**(): `undefined` \| [`Uint64`](util_uint64.Uint64.md)

#### Returns

`undefined` \| [`Uint64`](util_uint64.Uint64.md)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:69](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L69)

___

### value

• `get` **value**(): `undefined` \| [`Uint64`](util_uint64.Uint64.md)

#### Returns

`undefined` \| [`Uint64`](util_uint64.Uint64.md)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:65](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L65)

## Methods

### addRef

▸ **addRef**(): [`SegmentSelectionState`](segmentation_display_state_frontend.SegmentSelectionState.md)

#### Returns

[`SegmentSelectionState`](segmentation_display_state_frontend.SegmentSelectionState.md)

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[addRef](util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### bindTo

▸ **bindTo**(`layerSelectedValues`, `userLayer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `layerSelectedValues` | [`LayerSelectedValues`](annotation_annotation_layer_state._internal_.LayerSelectedValues.md) |
| `userLayer` | [`SegmentationUserLayer`](segmentation_display_state_frontend._internal_.SegmentationUserLayer.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:123](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L123)

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

### isSelected

▸ **isSelected**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Uint64`](util_uint64.Uint64.md) |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:119](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L119)

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

### set

▸ **set**(`value`, `hideSegmentZero?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `undefined` \| ``null`` \| `number` \| [`Uint64`](util_uint64.Uint64.md) \| [`Uint64MapEntry`](segmentation_display_state_frontend.Uint64MapEntry.md) | `undefined` |
| `hideSegmentZero` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:73](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L73)

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
