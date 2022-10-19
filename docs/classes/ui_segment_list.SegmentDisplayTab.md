[neuroglancer](../README.md) / [Modules](../modules.md) / [ui/segment\_list](../modules/ui_segment_list.md) / SegmentDisplayTab

# Class: SegmentDisplayTab

[ui/segment_list](../modules/ui_segment_list.md).SegmentDisplayTab

## Hierarchy

- [`Tab`](widget_tab_view.Tab.md)

  ↳ **`SegmentDisplayTab`**

## Table of contents

### Constructors

- [constructor](ui_segment_list.SegmentDisplayTab.md#constructor)

### Properties

- [disposedStacks](ui_segment_list.SegmentDisplayTab.md#disposedstacks)
- [element](ui_segment_list.SegmentDisplayTab.md#element)
- [layer](ui_segment_list.SegmentDisplayTab.md#layer)
- [refCount](ui_segment_list.SegmentDisplayTab.md#refcount)
- [visibility](ui_segment_list.SegmentDisplayTab.md#visibility)
- [wasDisposed](ui_segment_list.SegmentDisplayTab.md#wasdisposed)

### Accessors

- [visible](ui_segment_list.SegmentDisplayTab.md#visible)

### Methods

- [addRef](ui_segment_list.SegmentDisplayTab.md#addref)
- [dispose](ui_segment_list.SegmentDisplayTab.md#dispose)
- [disposed](ui_segment_list.SegmentDisplayTab.md#disposed)
- [refCountReachedZero](ui_segment_list.SegmentDisplayTab.md#refcountreachedzero)
- [registerCancellable](ui_segment_list.SegmentDisplayTab.md#registercancellable)
- [registerDisposer](ui_segment_list.SegmentDisplayTab.md#registerdisposer)
- [registerEventListener](ui_segment_list.SegmentDisplayTab.md#registereventlistener)
- [unregisterDisposer](ui_segment_list.SegmentDisplayTab.md#unregisterdisposer)

## Constructors

### constructor

• **new SegmentDisplayTab**(`layer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`SegmentationUserLayer`](segmentation_display_state_frontend._internal_.SegmentationUserLayer.md) |

#### Overrides

[Tab](widget_tab_view.Tab.md).[constructor](widget_tab_view.Tab.md#constructor)

#### Defined in

[src/neuroglancer/ui/segment_list.ts:778](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/segment_list.ts#L778)

## Properties

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[Tab](widget_tab_view.Tab.md).[disposedStacks](widget_tab_view.Tab.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: [`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement)

#### Inherited from

[Tab](widget_tab_view.Tab.md).[element](widget_tab_view.Tab.md#element)

#### Defined in

[src/neuroglancer/widget/tab_view.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/tab_view.ts#L32)

___

### layer

• **layer**: [`SegmentationUserLayer`](segmentation_display_state_frontend._internal_.SegmentationUserLayer.md)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[Tab](widget_tab_view.Tab.md).[refCount](widget_tab_view.Tab.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### visibility

• **visibility**: [`WatchableVisibilityPriority`](visibility_priority_frontend.WatchableVisibilityPriority.md)

#### Inherited from

[Tab](widget_tab_view.Tab.md).[visibility](widget_tab_view.Tab.md#visibility)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[Tab](widget_tab_view.Tab.md).[wasDisposed](widget_tab_view.Tab.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Tab.visible

#### Defined in

[src/neuroglancer/widget/tab_view.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/tab_view.ts#L34)

## Methods

### addRef

▸ **addRef**(): [`SegmentDisplayTab`](ui_segment_list.SegmentDisplayTab.md)

#### Returns

[`SegmentDisplayTab`](ui_segment_list.SegmentDisplayTab.md)

#### Inherited from

[Tab](widget_tab_view.Tab.md).[addRef](widget_tab_view.Tab.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[Tab](widget_tab_view.Tab.md).[dispose](widget_tab_view.Tab.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[Tab](widget_tab_view.Tab.md).[disposed](widget_tab_view.Tab.md#disposed)

#### Defined in

[src/neuroglancer/widget/tab_view.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/tab_view.ts#L45)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[Tab](widget_tab_view.Tab.md).[refCountReachedZero](widget_tab_view.Tab.md#refcountreachedzero)

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

[Tab](widget_tab_view.Tab.md).[registerCancellable](widget_tab_view.Tab.md#registercancellable)

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

[Tab](widget_tab_view.Tab.md).[registerDisposer](widget_tab_view.Tab.md#registerdisposer)

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

[Tab](widget_tab_view.Tab.md).[registerEventListener](widget_tab_view.Tab.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L95)

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

[Tab](widget_tab_view.Tab.md).[unregisterDisposer](widget_tab_view.Tab.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)
