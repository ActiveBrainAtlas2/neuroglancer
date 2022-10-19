[neuroglancer](../README.md) / [Modules](../modules.md) / [ui/segment\_select\_tools](../modules/ui_segment_select_tools.md) / SelectSegmentsTool

# Class: SelectSegmentsTool

[ui/segment_select_tools](../modules/ui_segment_select_tools.md).SelectSegmentsTool

## Hierarchy

- [`Tool`](ui_tool.Tool.md)<[`SegmentationUserLayer`](segmentation_display_state_frontend._internal_.SegmentationUserLayer.md)\>

  ↳ **`SelectSegmentsTool`**

## Table of contents

### Constructors

- [constructor](ui_segment_select_tools.SelectSegmentsTool.md#constructor)

### Properties

- [changed](ui_segment_select_tools.SelectSegmentsTool.md#changed)
- [disposedStacks](ui_segment_select_tools.SelectSegmentsTool.md#disposedstacks)
- [keyBinding](ui_segment_select_tools.SelectSegmentsTool.md#keybinding)
- [layer](ui_segment_select_tools.SelectSegmentsTool.md#layer)
- [refCount](ui_segment_select_tools.SelectSegmentsTool.md#refcount)
- [toggle](ui_segment_select_tools.SelectSegmentsTool.md#toggle)
- [wasDisposed](ui_segment_select_tools.SelectSegmentsTool.md#wasdisposed)

### Accessors

- [description](ui_segment_select_tools.SelectSegmentsTool.md#description)
- [mouseState](ui_segment_select_tools.SelectSegmentsTool.md#mousestate)

### Methods

- [activate](ui_segment_select_tools.SelectSegmentsTool.md#activate)
- [addRef](ui_segment_select_tools.SelectSegmentsTool.md#addref)
- [dispose](ui_segment_select_tools.SelectSegmentsTool.md#dispose)
- [disposed](ui_segment_select_tools.SelectSegmentsTool.md#disposed)
- [refCountReachedZero](ui_segment_select_tools.SelectSegmentsTool.md#refcountreachedzero)
- [registerCancellable](ui_segment_select_tools.SelectSegmentsTool.md#registercancellable)
- [registerDisposer](ui_segment_select_tools.SelectSegmentsTool.md#registerdisposer)
- [registerEventListener](ui_segment_select_tools.SelectSegmentsTool.md#registereventlistener)
- [toJSON](ui_segment_select_tools.SelectSegmentsTool.md#tojson)
- [unbind](ui_segment_select_tools.SelectSegmentsTool.md#unbind)
- [unregisterDisposer](ui_segment_select_tools.SelectSegmentsTool.md#unregisterdisposer)

## Constructors

### constructor

• **new SelectSegmentsTool**(`layer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`SegmentationUserLayer`](segmentation_display_state_frontend._internal_.SegmentationUserLayer.md) |

#### Overrides

[Tool](ui_tool.Tool.md).[constructor](ui_tool.Tool.md#constructor)

#### Defined in

[src/neuroglancer/ui/segment_select_tools.ts:43](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/segment_select_tools.ts#L43)

## Properties

### changed

• **changed**: [`Signal`](util_signal.Signal.md)<() => `void`\>

#### Inherited from

[Tool](ui_tool.Tool.md).[changed](ui_tool.Tool.md#changed)

#### Defined in

[src/neuroglancer/ui/tool.ts:56](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L56)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[Tool](ui_tool.Tool.md).[disposedStacks](ui_tool.Tool.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### keyBinding

• **keyBinding**: `undefined` \| `string` = `undefined`

#### Inherited from

[Tool](ui_tool.Tool.md).[keyBinding](ui_tool.Tool.md#keybinding)

#### Defined in

[src/neuroglancer/ui/tool.ts:57](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L57)

___

### layer

• **layer**: [`SegmentationUserLayer`](segmentation_display_state_frontend._internal_.SegmentationUserLayer.md)

#### Inherited from

[Tool](ui_tool.Tool.md).[layer](ui_tool.Tool.md#layer)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[Tool](ui_tool.Tool.md).[refCount](ui_tool.Tool.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### toggle

• **toggle**: `boolean` = `false`

#### Inherited from

[Tool](ui_tool.Tool.md).[toggle](ui_tool.Tool.md#toggle)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[Tool](ui_tool.Tool.md).[wasDisposed](ui_tool.Tool.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### description

• `get` **description**(): `string`

#### Returns

`string`

#### Overrides

Tool.description

#### Defined in

[src/neuroglancer/ui/segment_select_tools.ts:148](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/segment_select_tools.ts#L148)

___

### mouseState

• `get` **mouseState**(): [`MouseSelectionState`](annotation_annotation_layer_state._internal_.MouseSelectionState.md)

#### Returns

[`MouseSelectionState`](annotation_annotation_layer_state._internal_.MouseSelectionState.md)

#### Inherited from

Tool.mouseState

#### Defined in

[src/neuroglancer/ui/tool.ts:61](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L61)

## Methods

### activate

▸ **activate**(`activation`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `activation` | [`ToolActivation`](ui_tool.ToolActivation.md)<[`SelectSegmentsTool`](ui_segment_select_tools.SelectSegmentsTool.md)\> |

#### Returns

`void`

#### Overrides

[Tool](ui_tool.Tool.md).[activate](ui_tool.Tool.md#activate)

#### Defined in

[src/neuroglancer/ui/segment_select_tools.ts:51](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/segment_select_tools.ts#L51)

___

### addRef

▸ **addRef**(): [`SelectSegmentsTool`](ui_segment_select_tools.SelectSegmentsTool.md)

#### Returns

[`SelectSegmentsTool`](ui_segment_select_tools.SelectSegmentsTool.md)

#### Inherited from

[Tool](ui_tool.Tool.md).[addRef](ui_tool.Tool.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[Tool](ui_tool.Tool.md).[dispose](ui_tool.Tool.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[Tool](ui_tool.Tool.md).[disposed](ui_tool.Tool.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L75)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[Tool](ui_tool.Tool.md).[refCountReachedZero](ui_tool.Tool.md#refcountreachedzero)

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

[Tool](ui_tool.Tool.md).[registerCancellable](ui_tool.Tool.md#registercancellable)

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

[Tool](ui_tool.Tool.md).[registerDisposer](ui_tool.Tool.md#registerdisposer)

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

[Tool](ui_tool.Tool.md).[registerEventListener](ui_tool.Tool.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L95)

___

### toJSON

▸ **toJSON**(): `string`

#### Returns

`string`

#### Overrides

[Tool](ui_tool.Tool.md).[toJSON](ui_tool.Tool.md#tojson)

#### Defined in

[src/neuroglancer/ui/segment_select_tools.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/segment_select_tools.ts#L47)

___

### unbind

▸ **unbind**(): `void`

#### Returns

`void`

#### Inherited from

[Tool](ui_tool.Tool.md).[unbind](ui_tool.Tool.md#unbind)

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

[Tool](ui_tool.Tool.md).[unregisterDisposer](ui_tool.Tool.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)
