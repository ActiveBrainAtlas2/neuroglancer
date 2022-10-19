[neuroglancer](../README.md) / [Modules](../modules.md) / [image\_user\_layer](../modules/image_user_layer.md) / [<internal\>](../modules/image_user_layer._internal_.md) / SegmentSelectionState

# Class: SegmentSelectionState

[image_user_layer](../modules/image_user_layer.md).[<internal>](../modules/image_user_layer._internal_.md).SegmentSelectionState

## Hierarchy

- [`RefCounted`](axes_lines._internal_.RefCounted.md)

  ↳ **`SegmentSelectionState`**

## Table of contents

### Constructors

- [constructor](image_user_layer._internal_.SegmentSelectionState.md#constructor)

### Properties

- [baseSelectedSegment](image_user_layer._internal_.SegmentSelectionState.md#baseselectedsegment)
- [changed](image_user_layer._internal_.SegmentSelectionState.md#changed)
- [disposedStacks](image_user_layer._internal_.SegmentSelectionState.md#disposedstacks)
- [hasSelectedSegment](image_user_layer._internal_.SegmentSelectionState.md#hasselectedsegment)
- [refCount](image_user_layer._internal_.SegmentSelectionState.md#refcount)
- [selectedSegment](image_user_layer._internal_.SegmentSelectionState.md#selectedsegment)
- [wasDisposed](image_user_layer._internal_.SegmentSelectionState.md#wasdisposed)

### Accessors

- [baseValue](image_user_layer._internal_.SegmentSelectionState.md#basevalue)
- [value](image_user_layer._internal_.SegmentSelectionState.md#value)

### Methods

- [addRef](image_user_layer._internal_.SegmentSelectionState.md#addref)
- [bindTo](image_user_layer._internal_.SegmentSelectionState.md#bindto)
- [dispose](image_user_layer._internal_.SegmentSelectionState.md#dispose)
- [disposed](image_user_layer._internal_.SegmentSelectionState.md#disposed)
- [isSelected](image_user_layer._internal_.SegmentSelectionState.md#isselected)
- [refCountReachedZero](image_user_layer._internal_.SegmentSelectionState.md#refcountreachedzero)
- [registerCancellable](image_user_layer._internal_.SegmentSelectionState.md#registercancellable)
- [registerDisposer](image_user_layer._internal_.SegmentSelectionState.md#registerdisposer)
- [registerEventListener](image_user_layer._internal_.SegmentSelectionState.md#registereventlistener)
- [set](image_user_layer._internal_.SegmentSelectionState.md#set)
- [unregisterDisposer](image_user_layer._internal_.SegmentSelectionState.md#unregisterdisposer)

## Constructors

### constructor

• **new SegmentSelectionState**()

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[constructor](axes_lines._internal_.RefCounted.md#constructor)

## Properties

### baseSelectedSegment

• **baseSelectedSegment**: [`Uint64`](data_panel_layout._internal_.Uint64.md)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:61](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_display_state/frontend.ts#L61)

___

### changed

• **changed**: [`NullarySignal`](coordinate_transform._internal_.NullarySignal.md)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:63](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_display_state/frontend.ts#L63)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[disposedStacks](axes_lines._internal_.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L52)

___

### hasSelectedSegment

• **hasSelectedSegment**: `boolean` = `false`

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:62](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_display_state/frontend.ts#L62)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[refCount](axes_lines._internal_.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L45)

___

### selectedSegment

• **selectedSegment**: [`Uint64`](data_panel_layout._internal_.Uint64.md)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:60](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_display_state/frontend.ts#L60)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[wasDisposed](axes_lines._internal_.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### baseValue

• `get` **baseValue**(): `undefined` \| [`Uint64`](data_panel_layout._internal_.Uint64.md)

#### Returns

`undefined` \| [`Uint64`](data_panel_layout._internal_.Uint64.md)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:69](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_display_state/frontend.ts#L69)

___

### value

• `get` **value**(): `undefined` \| [`Uint64`](data_panel_layout._internal_.Uint64.md)

#### Returns

`undefined` \| [`Uint64`](data_panel_layout._internal_.Uint64.md)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:65](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_display_state/frontend.ts#L65)

## Methods

### addRef

▸ **addRef**(): [`SegmentSelectionState`](image_user_layer._internal_.SegmentSelectionState.md)

#### Returns

[`SegmentSelectionState`](image_user_layer._internal_.SegmentSelectionState.md)

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[addRef](axes_lines._internal_.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L48)

___

### bindTo

▸ **bindTo**(`layerSelectedValues`, `userLayer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `layerSelectedValues` | [`LayerSelectedValues`](layer.LayerSelectedValues.md) |
| `userLayer` | [`SegmentationUserLayer`](segmentation_user_layer.SegmentationUserLayer.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:123](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_display_state/frontend.ts#L123)

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

### isSelected

▸ **isSelected**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Uint64`](data_panel_layout._internal_.Uint64.md) |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:119](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_display_state/frontend.ts#L119)

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

### set

▸ **set**(`value`, `hideSegmentZero?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `undefined` \| ``null`` \| `number` \| [`Uint64`](data_panel_layout._internal_.Uint64.md) \| [`Uint64MapEntry`](image_user_layer._internal_.Uint64MapEntry.md) | `undefined` |
| `hideSegmentZero` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:73](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_display_state/frontend.ts#L73)

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
