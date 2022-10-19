[neuroglancer](../README.md) / [Modules](../modules.md) / [ui/tool](../modules/ui_tool.md) / Tool

# Class: Tool<LayerType\>

[ui/tool](../modules/ui_tool.md).Tool

## Type parameters

| Name | Type |
| :------ | :------ |
| `LayerType` | extends [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md) = [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md) |

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`Tool`**

  ↳↳ [`SelectSegmentsTool`](ui_segment_select_tools.SelectSegmentsTool.md)

  ↳↳ [`MergeSegmentsTool`](ui_segment_split_merge_tools.MergeSegmentsTool.md)

  ↳↳ [`SplitSegmentsTool`](ui_segment_split_merge_tools.SplitSegmentsTool.md)

  ↳↳ [`LayerControlTool`](widget_layer_control.LayerControlTool.md)

## Table of contents

### Constructors

- [constructor](ui_tool.Tool.md#constructor)

### Properties

- [changed](ui_tool.Tool.md#changed)
- [description](ui_tool.Tool.md#description)
- [disposedStacks](ui_tool.Tool.md#disposedstacks)
- [keyBinding](ui_tool.Tool.md#keybinding)
- [layer](ui_tool.Tool.md#layer)
- [refCount](ui_tool.Tool.md#refcount)
- [toggle](ui_tool.Tool.md#toggle)
- [wasDisposed](ui_tool.Tool.md#wasdisposed)

### Accessors

- [mouseState](ui_tool.Tool.md#mousestate)

### Methods

- [activate](ui_tool.Tool.md#activate)
- [addRef](ui_tool.Tool.md#addref)
- [dispose](ui_tool.Tool.md#dispose)
- [disposed](ui_tool.Tool.md#disposed)
- [refCountReachedZero](ui_tool.Tool.md#refcountreachedzero)
- [registerCancellable](ui_tool.Tool.md#registercancellable)
- [registerDisposer](ui_tool.Tool.md#registerdisposer)
- [registerEventListener](ui_tool.Tool.md#registereventlistener)
- [toJSON](ui_tool.Tool.md#tojson)
- [unbind](ui_tool.Tool.md#unbind)
- [unregisterDisposer](ui_tool.Tool.md#unregisterdisposer)

## Constructors

### constructor

• **new Tool**<`LayerType`\>(`layer`, `toggle?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `LayerType` | extends [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)<`LayerType`\> = [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md) |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `layer` | `LayerType` | `undefined` |
| `toggle` | `boolean` | `false` |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/ui/tool.ts:58](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L58)

## Properties

### changed

• **changed**: [`Signal`](util_signal.Signal.md)<() => `void`\>

#### Defined in

[src/neuroglancer/ui/tool.ts:56](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L56)

___

### description

• `Abstract` **description**: `string`

#### Defined in

[src/neuroglancer/ui/tool.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L66)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### keyBinding

• **keyBinding**: `undefined` \| `string` = `undefined`

#### Defined in

[src/neuroglancer/ui/tool.ts:57](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L57)

___

### layer

• **layer**: `LayerType`

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### toggle

• **toggle**: `boolean` = `false`

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### mouseState

• `get` **mouseState**(): [`MouseSelectionState`](annotation_annotation_layer_state._internal_.MouseSelectionState.md)

#### Returns

[`MouseSelectionState`](annotation_annotation_layer_state._internal_.MouseSelectionState.md)

#### Defined in

[src/neuroglancer/ui/tool.ts:61](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L61)

## Methods

### activate

▸ `Abstract` **activate**(`activation`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `activation` | [`ToolActivation`](ui_tool.ToolActivation.md)<[`Tool`](ui_tool.Tool.md)<`LayerType`\>\> |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/tool.ts:64](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L64)

___

### addRef

▸ **addRef**(): [`Tool`](ui_tool.Tool.md)<`LayerType`\>

#### Returns

[`Tool`](ui_tool.Tool.md)<`LayerType`\>

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

### toJSON

▸ `Abstract` **toJSON**(): `any`

#### Returns

`any`

#### Defined in

[src/neuroglancer/ui/tool.ts:65](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L65)

___

### unbind

▸ **unbind**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/tool.ts:67](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L67)

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
