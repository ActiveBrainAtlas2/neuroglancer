[neuroglancer](../README.md) / [Modules](../modules.md) / [widget/shader\_controls](../modules/widget_shader_controls.md) / ShaderControls

# Class: ShaderControls

[widget/shader_controls](../modules/widget_shader_controls.md).ShaderControls

## Hierarchy

- [`Tab`](widget_tab_view.Tab.md)

  ↳ **`ShaderControls`**

## Table of contents

### Constructors

- [constructor](widget_shader_controls.ShaderControls.md#constructor)

### Properties

- [controlDisposer](widget_shader_controls.ShaderControls.md#controldisposer)
- [display](widget_shader_controls.ShaderControls.md#display)
- [disposedStacks](widget_shader_controls.ShaderControls.md#disposedstacks)
- [element](widget_shader_controls.ShaderControls.md#element)
- [layer](widget_shader_controls.ShaderControls.md#layer)
- [options](widget_shader_controls.ShaderControls.md#options)
- [refCount](widget_shader_controls.ShaderControls.md#refcount)
- [state](widget_shader_controls.ShaderControls.md#state)
- [toolId](widget_shader_controls.ShaderControls.md#toolid)
- [visibility](widget_shader_controls.ShaderControls.md#visibility)
- [wasDisposed](widget_shader_controls.ShaderControls.md#wasdisposed)

### Accessors

- [visible](widget_shader_controls.ShaderControls.md#visible)

### Methods

- [addRef](widget_shader_controls.ShaderControls.md#addref)
- [dispose](widget_shader_controls.ShaderControls.md#dispose)
- [disposed](widget_shader_controls.ShaderControls.md#disposed)
- [refCountReachedZero](widget_shader_controls.ShaderControls.md#refcountreachedzero)
- [registerCancellable](widget_shader_controls.ShaderControls.md#registercancellable)
- [registerDisposer](widget_shader_controls.ShaderControls.md#registerdisposer)
- [registerEventListener](widget_shader_controls.ShaderControls.md#registereventlistener)
- [unregisterDisposer](widget_shader_controls.ShaderControls.md#unregisterdisposer)
- [updateControls](widget_shader_controls.ShaderControls.md#updatecontrols)

## Constructors

### constructor

• **new ShaderControls**(`state`, `display`, `layer`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`ShaderControlState`](webgl_shader_ui_controls.ShaderControlState.md) |
| `display` | [`DisplayContext`](annotation_annotation_layer_state._internal_.DisplayContext.md) |
| `layer` | [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md) |
| `options` | [`ShaderControlsOptions`](../interfaces/widget_shader_controls.ShaderControlsOptions.md) |

#### Overrides

[Tab](widget_tab_view.Tab.md).[constructor](widget_tab_view.Tab.md#constructor)

#### Defined in

[src/neuroglancer/widget/shader_controls.ts:104](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/shader_controls.ts#L104)

## Properties

### controlDisposer

• `Private` **controlDisposer**: `undefined` \| [`RefCounted`](util_disposable.RefCounted.md) = `undefined`

#### Defined in

[src/neuroglancer/widget/shader_controls.ts:102](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/shader_controls.ts#L102)

___

### display

• **display**: [`DisplayContext`](annotation_annotation_layer_state._internal_.DisplayContext.md)

___

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

• **layer**: [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)

___

### options

• **options**: [`ShaderControlsOptions`](../interfaces/widget_shader_controls.ShaderControlsOptions.md) = `{}`

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[Tab](widget_tab_view.Tab.md).[refCount](widget_tab_view.Tab.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### state

• **state**: [`ShaderControlState`](webgl_shader_ui_controls.ShaderControlState.md)

___

### toolId

• `Private` **toolId**: `string`

#### Defined in

[src/neuroglancer/widget/shader_controls.ts:103](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/shader_controls.ts#L103)

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

▸ **addRef**(): [`ShaderControls`](widget_shader_controls.ShaderControls.md)

#### Returns

[`ShaderControls`](widget_shader_controls.ShaderControls.md)

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

#### Overrides

[Tab](widget_tab_view.Tab.md).[disposed](widget_tab_view.Tab.md#disposed)

#### Defined in

[src/neuroglancer/widget/shader_controls.ts:136](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/shader_controls.ts#L136)

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

___

### updateControls

▸ **updateControls**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/shader_controls.ts:118](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/shader_controls.ts#L118)
