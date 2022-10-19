[neuroglancer](../README.md) / [Modules](../modules.md) / [widget/tab\_view](../modules/widget_tab_view.md) / StackView

# Class: StackView<TabId, TabType\>

[widget/tab_view](../modules/widget_tab_view.md).StackView

## Type parameters

| Name | Type |
| :------ | :------ |
| `TabId` | `TabId` |
| `TabType` | extends [`Tab`](widget_tab_view.Tab.md) = [`Tab`](widget_tab_view.Tab.md) |

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`StackView`**

## Table of contents

### Constructors

- [constructor](widget_tab_view.StackView.md#constructor)

### Properties

- [debouncedUpdateSelectedTab](widget_tab_view.StackView.md#debouncedupdateselectedtab)
- [displayedTab](widget_tab_view.StackView.md#displayedtab)
- [disposedStacks](widget_tab_view.StackView.md#disposedstacks)
- [element](widget_tab_view.StackView.md#element)
- [getter](widget_tab_view.StackView.md#getter)
- [invalidateByDefault](widget_tab_view.StackView.md#invalidatebydefault)
- [refCount](widget_tab_view.StackView.md#refcount)
- [selected](widget_tab_view.StackView.md#selected)
- [tabVisibilityChanged](widget_tab_view.StackView.md#tabvisibilitychanged)
- [tabs](widget_tab_view.StackView.md#tabs)
- [visibility](widget_tab_view.StackView.md#visibility)
- [wasDisposed](widget_tab_view.StackView.md#wasdisposed)

### Accessors

- [visible](widget_tab_view.StackView.md#visible)

### Methods

- [addRef](widget_tab_view.StackView.md#addref)
- [dispose](widget_tab_view.StackView.md#dispose)
- [disposed](widget_tab_view.StackView.md#disposed)
- [flush](widget_tab_view.StackView.md#flush)
- [hideTab](widget_tab_view.StackView.md#hidetab)
- [invalidate](widget_tab_view.StackView.md#invalidate)
- [invalidateAll](widget_tab_view.StackView.md#invalidateall)
- [refCountReachedZero](widget_tab_view.StackView.md#refcountreachedzero)
- [registerCancellable](widget_tab_view.StackView.md#registercancellable)
- [registerDisposer](widget_tab_view.StackView.md#registerdisposer)
- [registerEventListener](widget_tab_view.StackView.md#registereventlistener)
- [showTab](widget_tab_view.StackView.md#showtab)
- [unregisterDisposer](widget_tab_view.StackView.md#unregisterdisposer)
- [updateSelectedTab](widget_tab_view.StackView.md#updateselectedtab)

## Constructors

### constructor

• **new StackView**<`TabId`, `TabType`\>(`getter`, `selected`, `visibility?`, `invalidateByDefault?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TabId` | `TabId` |
| `TabType` | extends [`Tab`](widget_tab_view.Tab.md)<`TabType`\> = [`Tab`](widget_tab_view.Tab.md) |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `getter` | (`id`: `TabId`) => `TabType` | `undefined` |
| `selected` | [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`undefined` \| `TabId`\> | `undefined` |
| `visibility` | [`WatchableVisibilityPriority`](visibility_priority_frontend.WatchableVisibilityPriority.md) | `undefined` |
| `invalidateByDefault` | `boolean` | `false` |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/widget/tab_view.ts:166](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/tab_view.ts#L166)

## Properties

### debouncedUpdateSelectedTab

• `Private` **debouncedUpdateSelectedTab**: [`DebouncedFunction`](../interfaces/util_animation_frame_debounce.DebouncedFunction.md)

#### Defined in

[src/neuroglancer/widget/tab_view.ts:159](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/tab_view.ts#L159)

___

### displayedTab

• `Private` **displayedTab**: `undefined` \| `TabId`

#### Defined in

[src/neuroglancer/widget/tab_view.ts:153](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/tab_view.ts#L153)

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

[src/neuroglancer/widget/tab_view.ts:149](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/tab_view.ts#L149)

___

### getter

• **getter**: (`id`: `TabId`) => `TabType`

#### Type declaration

▸ (`id`): `TabType`

##### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `TabId` |

##### Returns

`TabType`

___

### invalidateByDefault

• **invalidateByDefault**: `boolean` = `false`

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### selected

• **selected**: [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`undefined` \| `TabId`\>

___

### tabVisibilityChanged

• **tabVisibilityChanged**: [`Signal`](util_signal.Signal.md)<(`id`: `TabId`, `visible`: `boolean`) => `void`\>

#### Defined in

[src/neuroglancer/widget/tab_view.ts:151](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/tab_view.ts#L151)

___

### tabs

• **tabs**: `Map`<`TabId`, `TabType`\>

#### Defined in

[src/neuroglancer/widget/tab_view.ts:150](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/tab_view.ts#L150)

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

[src/neuroglancer/widget/tab_view.ts:155](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/tab_view.ts#L155)

## Methods

### addRef

▸ **addRef**(): [`StackView`](widget_tab_view.StackView.md)<`TabId`, `TabType`\>

#### Returns

[`StackView`](widget_tab_view.StackView.md)<`TabId`, `TabType`\>

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

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[disposed](util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/widget/tab_view.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/tab_view.ts#L245)

___

### flush

▸ **flush**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/tab_view.ts:162](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/tab_view.ts#L162)

___

### hideTab

▸ `Private` **hideTab**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `TabId` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/tab_view.ts:194](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/tab_view.ts#L194)

___

### invalidate

▸ **invalidate**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `TabId` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/tab_view.ts:180](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/tab_view.ts#L180)

___

### invalidateAll

▸ **invalidateAll**(`predicate?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `predicate` | `undefined` \| (`id`: `TabId`) => `boolean` | `undefined` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/tab_view.ts:235](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/tab_view.ts#L235)

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

### showTab

▸ `Private` **showTab**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `TabId` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/tab_view.ts:203](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/tab_view.ts#L203)

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

### updateSelectedTab

▸ `Private` **updateSelectedTab**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/tab_view.ts:216](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/tab_view.ts#L216)
