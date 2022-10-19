[neuroglancer](../README.md) / [Modules](../modules.md) / [widget/tab\_view](../modules/widget_tab_view.md) / TabView

# Class: TabView

[widget/tab_view](../modules/widget_tab_view.md).TabView

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`TabView`**

## Table of contents

### Constructors

- [constructor](widget_tab_view.TabView.md#constructor)

### Properties

- [debouncedUpdateView](widget_tab_view.TabView.md#debouncedupdateview)
- [disposedStacks](widget_tab_view.TabView.md#disposedstacks)
- [element](widget_tab_view.TabView.md#element)
- [handleTabElement](widget_tab_view.TabView.md#handletabelement)
- [refCount](widget_tab_view.TabView.md#refcount)
- [selectedTab](widget_tab_view.TabView.md#selectedtab)
- [stack](widget_tab_view.TabView.md#stack)
- [tabBar](widget_tab_view.TabView.md#tabbar)
- [tabLabels](widget_tab_view.TabView.md#tablabels)
- [tabs](widget_tab_view.TabView.md#tabs)
- [tabsGeneration](widget_tab_view.TabView.md#tabsgeneration)
- [visibility](widget_tab_view.TabView.md#visibility)
- [wasDisposed](widget_tab_view.TabView.md#wasdisposed)

### Accessors

- [visible](widget_tab_view.TabView.md#visible)

### Methods

- [addRef](widget_tab_view.TabView.md#addref)
- [destroyTabs](widget_tab_view.TabView.md#destroytabs)
- [dispose](widget_tab_view.TabView.md#dispose)
- [disposed](widget_tab_view.TabView.md#disposed)
- [makeTabs](widget_tab_view.TabView.md#maketabs)
- [refCountReachedZero](widget_tab_view.TabView.md#refcountreachedzero)
- [registerCancellable](widget_tab_view.TabView.md#registercancellable)
- [registerDisposer](widget_tab_view.TabView.md#registerdisposer)
- [registerEventListener](widget_tab_view.TabView.md#registereventlistener)
- [unregisterDisposer](widget_tab_view.TabView.md#unregisterdisposer)
- [updateTabLabelStyles](widget_tab_view.TabView.md#updatetablabelstyles)
- [updateTabs](widget_tab_view.TabView.md#updatetabs)

## Constructors

### constructor

• **new TabView**(`options`, `visibility?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`TabViewOptions`](../interfaces/widget_tab_view.TabViewOptions.md) |
| `visibility` | [`WatchableVisibilityPriority`](visibility_priority_frontend.WatchableVisibilityPriority.md) |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/widget/tab_view.ts:290](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/tab_view.ts#L290)

## Properties

### debouncedUpdateView

• `Private` **debouncedUpdateView**: [`DebouncedFunction`](../interfaces/util_animation_frame_debounce.DebouncedFunction.md)

#### Defined in

[src/neuroglancer/widget/tab_view.ts:287](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/tab_view.ts#L287)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: [`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/widget/tab_view.ts:272](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/tab_view.ts#L272)

___

### handleTabElement

• `Private` **handleTabElement**: `undefined` \| (`id`: `string`, `element`: [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement)) => `void`

#### Defined in

[src/neuroglancer/widget/tab_view.ts:277](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/tab_view.ts#L277)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### selectedTab

• **selectedTab**: [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`undefined` \| `string`\>

#### Defined in

[src/neuroglancer/widget/tab_view.ts:276](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/tab_view.ts#L276)

___

### stack

• `Private` **stack**: [`StackView`](widget_tab_view.StackView.md)<`string`, [`Tab`](widget_tab_view.Tab.md)\>

#### Defined in

[src/neuroglancer/widget/tab_view.ts:279](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/tab_view.ts#L279)

___

### tabBar

• **tabBar**: [`HTMLDivElement`](../modules/annotation_annotation_layer_state._internal_.md#htmldivelement)

#### Defined in

[src/neuroglancer/widget/tab_view.ts:273](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/tab_view.ts#L273)

___

### tabLabels

• `Private` **tabLabels**: `Map`<`string`, [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement)\>

#### Defined in

[src/neuroglancer/widget/tab_view.ts:280](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/tab_view.ts#L280)

___

### tabs

• **tabs**: [`WatchableValueChangeInterface`](../interfaces/perspective_view_panel._internal_.WatchableValueChangeInterface.md)<{ `id`: `string` ; `label`: `string`  }[]\>

#### Defined in

[src/neuroglancer/widget/tab_view.ts:275](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/tab_view.ts#L275)

___

### tabsGeneration

• `Private` **tabsGeneration**: `number` = `-1`

#### Defined in

[src/neuroglancer/widget/tab_view.ts:281](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/tab_view.ts#L281)

___

### visibility

• **visibility**: [`WatchableVisibilityPriority`](visibility_priority_frontend.WatchableVisibilityPriority.md)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/widget/tab_view.ts:283](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/tab_view.ts#L283)

## Methods

### addRef

▸ **addRef**(): [`TabView`](widget_tab_view.TabView.md)

#### Returns

[`TabView`](widget_tab_view.TabView.md)

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[addRef](util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### destroyTabs

▸ `Private` **destroyTabs**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/tab_view.ts:326](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/tab_view.ts#L326)

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

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[disposed](util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/widget/tab_view.ts:360](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/tab_view.ts#L360)

___

### makeTabs

▸ `Private` **makeTabs**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/tab_view.ts:341](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/tab_view.ts#L341)

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

### updateTabLabelStyles

▸ `Private` **updateTabLabelStyles**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/tab_view.ts:310](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/tab_view.ts#L310)

___

### updateTabs

▸ `Private` **updateTabs**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/tab_view.ts:317](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/tab_view.ts#L317)
