[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/segmentation\_display\_state/frontend](../modules/neuroglancer_segmentation_display_state_frontend.md) / SegmentSelectionState

# Class: SegmentSelectionState

[neuroglancer/segmentation_display_state/frontend](../modules/neuroglancer_segmentation_display_state_frontend.md).SegmentSelectionState

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`SegmentSelectionState`**

## Table of contents

### Constructors

- [constructor](neuroglancer_segmentation_display_state_frontend.SegmentSelectionState.md#constructor)

### Properties

- [baseSelectedSegment](neuroglancer_segmentation_display_state_frontend.SegmentSelectionState.md#baseselectedsegment)
- [changed](neuroglancer_segmentation_display_state_frontend.SegmentSelectionState.md#changed)
- [disposedStacks](neuroglancer_segmentation_display_state_frontend.SegmentSelectionState.md#disposedstacks)
- [hasSelectedSegment](neuroglancer_segmentation_display_state_frontend.SegmentSelectionState.md#hasselectedsegment)
- [refCount](neuroglancer_segmentation_display_state_frontend.SegmentSelectionState.md#refcount)
- [selectedSegment](neuroglancer_segmentation_display_state_frontend.SegmentSelectionState.md#selectedsegment)
- [wasDisposed](neuroglancer_segmentation_display_state_frontend.SegmentSelectionState.md#wasdisposed)

### Accessors

- [baseValue](neuroglancer_segmentation_display_state_frontend.SegmentSelectionState.md#basevalue)
- [value](neuroglancer_segmentation_display_state_frontend.SegmentSelectionState.md#value)

### Methods

- [addRef](neuroglancer_segmentation_display_state_frontend.SegmentSelectionState.md#addref)
- [bindTo](neuroglancer_segmentation_display_state_frontend.SegmentSelectionState.md#bindto)
- [dispose](neuroglancer_segmentation_display_state_frontend.SegmentSelectionState.md#dispose)
- [disposed](neuroglancer_segmentation_display_state_frontend.SegmentSelectionState.md#disposed)
- [isSelected](neuroglancer_segmentation_display_state_frontend.SegmentSelectionState.md#isselected)
- [refCountReachedZero](neuroglancer_segmentation_display_state_frontend.SegmentSelectionState.md#refcountreachedzero)
- [registerCancellable](neuroglancer_segmentation_display_state_frontend.SegmentSelectionState.md#registercancellable)
- [registerDisposer](neuroglancer_segmentation_display_state_frontend.SegmentSelectionState.md#registerdisposer)
- [registerEventListener](neuroglancer_segmentation_display_state_frontend.SegmentSelectionState.md#registereventlistener)
- [set](neuroglancer_segmentation_display_state_frontend.SegmentSelectionState.md#set)
- [unregisterDisposer](neuroglancer_segmentation_display_state_frontend.SegmentSelectionState.md#unregisterdisposer)

## Constructors

### constructor

• **new SegmentSelectionState**()

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

## Properties

### baseSelectedSegment

• **baseSelectedSegment**: [`Uint64`](neuroglancer_util_uint64.Uint64.md)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:61](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_display_state/frontend.ts#L61)

___

### changed

• **changed**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:63](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_display_state/frontend.ts#L63)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### hasSelectedSegment

• **hasSelectedSegment**: `boolean` = `false`

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:62](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_display_state/frontend.ts#L62)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### selectedSegment

• **selectedSegment**: [`Uint64`](neuroglancer_util_uint64.Uint64.md)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:60](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_display_state/frontend.ts#L60)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### baseValue

• `get` **baseValue**(): `undefined` \| [`Uint64`](neuroglancer_util_uint64.Uint64.md)

#### Returns

`undefined` \| [`Uint64`](neuroglancer_util_uint64.Uint64.md)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:69](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_display_state/frontend.ts#L69)

___

### value

• `get` **value**(): `undefined` \| [`Uint64`](neuroglancer_util_uint64.Uint64.md)

#### Returns

`undefined` \| [`Uint64`](neuroglancer_util_uint64.Uint64.md)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:65](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_display_state/frontend.ts#L65)

## Methods

### addRef

▸ **addRef**(): [`SegmentSelectionState`](neuroglancer_segmentation_display_state_frontend.SegmentSelectionState.md)

#### Returns

[`SegmentSelectionState`](neuroglancer_segmentation_display_state_frontend.SegmentSelectionState.md)

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[addRef](neuroglancer_util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L48)

___

### bindTo

▸ **bindTo**(`layerSelectedValues`, `userLayer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `layerSelectedValues` | [`LayerSelectedValues`](neuroglancer_layer.LayerSelectedValues.md) |
| `userLayer` | [`SegmentationUserLayer`](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:123](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_display_state/frontend.ts#L123)

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

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposed](neuroglancer_util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L75)

___

### isSelected

▸ **isSelected**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:119](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_display_state/frontend.ts#L119)

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

▸ **set**(`value`, `hideSegmentZero?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `undefined` \| ``null`` \| `number` \| [`Uint64`](neuroglancer_util_uint64.Uint64.md) \| [`Uint64MapEntry`](neuroglancer_segmentation_display_state_frontend.Uint64MapEntry.md) | `undefined` |
| `hideSegmentZero` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:73](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_display_state/frontend.ts#L73)

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
