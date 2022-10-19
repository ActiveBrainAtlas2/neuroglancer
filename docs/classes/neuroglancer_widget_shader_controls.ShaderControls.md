[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/widget/shader\_controls](../modules/neuroglancer_widget_shader_controls.md) / ShaderControls

# Class: ShaderControls

[neuroglancer/widget/shader_controls](../modules/neuroglancer_widget_shader_controls.md).ShaderControls

## Hierarchy

- [`Tab`](neuroglancer_widget_tab_view.Tab.md)

  ↳ **`ShaderControls`**

## Table of contents

### Constructors

- [constructor](neuroglancer_widget_shader_controls.ShaderControls.md#constructor)

### Properties

- [controlDisposer](neuroglancer_widget_shader_controls.ShaderControls.md#controldisposer)
- [display](neuroglancer_widget_shader_controls.ShaderControls.md#display)
- [disposedStacks](neuroglancer_widget_shader_controls.ShaderControls.md#disposedstacks)
- [element](neuroglancer_widget_shader_controls.ShaderControls.md#element)
- [layer](neuroglancer_widget_shader_controls.ShaderControls.md#layer)
- [options](neuroglancer_widget_shader_controls.ShaderControls.md#options)
- [refCount](neuroglancer_widget_shader_controls.ShaderControls.md#refcount)
- [state](neuroglancer_widget_shader_controls.ShaderControls.md#state)
- [toolId](neuroglancer_widget_shader_controls.ShaderControls.md#toolid)
- [visibility](neuroglancer_widget_shader_controls.ShaderControls.md#visibility)
- [wasDisposed](neuroglancer_widget_shader_controls.ShaderControls.md#wasdisposed)

### Accessors

- [visible](neuroglancer_widget_shader_controls.ShaderControls.md#visible)

### Methods

- [addRef](neuroglancer_widget_shader_controls.ShaderControls.md#addref)
- [dispose](neuroglancer_widget_shader_controls.ShaderControls.md#dispose)
- [disposed](neuroglancer_widget_shader_controls.ShaderControls.md#disposed)
- [refCountReachedZero](neuroglancer_widget_shader_controls.ShaderControls.md#refcountreachedzero)
- [registerCancellable](neuroglancer_widget_shader_controls.ShaderControls.md#registercancellable)
- [registerDisposer](neuroglancer_widget_shader_controls.ShaderControls.md#registerdisposer)
- [registerEventListener](neuroglancer_widget_shader_controls.ShaderControls.md#registereventlistener)
- [unregisterDisposer](neuroglancer_widget_shader_controls.ShaderControls.md#unregisterdisposer)
- [updateControls](neuroglancer_widget_shader_controls.ShaderControls.md#updatecontrols)

## Constructors

### constructor

• **new ShaderControls**(`state`, `display`, `layer`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`ShaderControlState`](neuroglancer_webgl_shader_ui_controls.ShaderControlState.md) |
| `display` | [`DisplayContext`](neuroglancer_display_context.DisplayContext.md) |
| `layer` | [`UserLayer`](neuroglancer_layer.UserLayer.md) |
| `options` | [`ShaderControlsOptions`](../interfaces/neuroglancer_widget_shader_controls.ShaderControlsOptions.md) |

#### Overrides

[Tab](neuroglancer_widget_tab_view.Tab.md).[constructor](neuroglancer_widget_tab_view.Tab.md#constructor)

#### Defined in

[src/neuroglancer/widget/shader_controls.ts:104](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/shader_controls.ts#L104)

## Properties

### controlDisposer

• `Private` **controlDisposer**: `undefined` \| [`RefCounted`](neuroglancer_util_disposable.RefCounted.md) = `undefined`

#### Defined in

[src/neuroglancer/widget/shader_controls.ts:102](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/shader_controls.ts#L102)

___

### display

• **display**: [`DisplayContext`](neuroglancer_display_context.DisplayContext.md)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[Tab](neuroglancer_widget_tab_view.Tab.md).[disposedStacks](neuroglancer_widget_tab_view.Tab.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### element

• **element**: [`HTMLDivElement`](../modules/main_module._internal_.md#htmldivelement)

#### Inherited from

[Tab](neuroglancer_widget_tab_view.Tab.md).[element](neuroglancer_widget_tab_view.Tab.md#element)

#### Defined in

[src/neuroglancer/widget/tab_view.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/tab_view.ts#L32)

___

### layer

• **layer**: [`UserLayer`](neuroglancer_layer.UserLayer.md)

___

### options

• **options**: [`ShaderControlsOptions`](../interfaces/neuroglancer_widget_shader_controls.ShaderControlsOptions.md) = `{}`

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[Tab](neuroglancer_widget_tab_view.Tab.md).[refCount](neuroglancer_widget_tab_view.Tab.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### state

• **state**: [`ShaderControlState`](neuroglancer_webgl_shader_ui_controls.ShaderControlState.md)

___

### toolId

• `Private` **toolId**: `string`

#### Defined in

[src/neuroglancer/widget/shader_controls.ts:103](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/shader_controls.ts#L103)

___

### visibility

• **visibility**: [`WatchableVisibilityPriority`](neuroglancer_visibility_priority_frontend.WatchableVisibilityPriority.md)

#### Inherited from

[Tab](neuroglancer_widget_tab_view.Tab.md).[visibility](neuroglancer_widget_tab_view.Tab.md#visibility)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[Tab](neuroglancer_widget_tab_view.Tab.md).[wasDisposed](neuroglancer_widget_tab_view.Tab.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Tab.visible

#### Defined in

[src/neuroglancer/widget/tab_view.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/tab_view.ts#L34)

## Methods

### addRef

▸ **addRef**(): [`ShaderControls`](neuroglancer_widget_shader_controls.ShaderControls.md)

#### Returns

[`ShaderControls`](neuroglancer_widget_shader_controls.ShaderControls.md)

#### Inherited from

[Tab](neuroglancer_widget_tab_view.Tab.md).[addRef](neuroglancer_widget_tab_view.Tab.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[Tab](neuroglancer_widget_tab_view.Tab.md).[dispose](neuroglancer_widget_tab_view.Tab.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

[Tab](neuroglancer_widget_tab_view.Tab.md).[disposed](neuroglancer_widget_tab_view.Tab.md#disposed)

#### Defined in

[src/neuroglancer/widget/shader_controls.ts:136](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/shader_controls.ts#L136)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[Tab](neuroglancer_widget_tab_view.Tab.md).[refCountReachedZero](neuroglancer_widget_tab_view.Tab.md#refcountreachedzero)

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

[Tab](neuroglancer_widget_tab_view.Tab.md).[registerCancellable](neuroglancer_widget_tab_view.Tab.md#registercancellable)

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

[Tab](neuroglancer_widget_tab_view.Tab.md).[registerDisposer](neuroglancer_widget_tab_view.Tab.md#registerdisposer)

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

[Tab](neuroglancer_widget_tab_view.Tab.md).[registerEventListener](neuroglancer_widget_tab_view.Tab.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L95)

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

[Tab](neuroglancer_widget_tab_view.Tab.md).[unregisterDisposer](neuroglancer_widget_tab_view.Tab.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L85)

___

### updateControls

▸ **updateControls**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/widget/shader_controls.ts:118](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/shader_controls.ts#L118)
