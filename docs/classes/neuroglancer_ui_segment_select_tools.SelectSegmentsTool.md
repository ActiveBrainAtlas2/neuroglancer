[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/ui/segment\_select\_tools](../modules/neuroglancer_ui_segment_select_tools.md) / SelectSegmentsTool

# Class: SelectSegmentsTool

[neuroglancer/ui/segment_select_tools](../modules/neuroglancer_ui_segment_select_tools.md).SelectSegmentsTool

## Hierarchy

- [`Tool`](neuroglancer_ui_tool.Tool.md)<[`SegmentationUserLayer`](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md)\>

  ↳ **`SelectSegmentsTool`**

## Table of contents

### Constructors

- [constructor](neuroglancer_ui_segment_select_tools.SelectSegmentsTool.md#constructor)

### Properties

- [changed](neuroglancer_ui_segment_select_tools.SelectSegmentsTool.md#changed)
- [disposedStacks](neuroglancer_ui_segment_select_tools.SelectSegmentsTool.md#disposedstacks)
- [keyBinding](neuroglancer_ui_segment_select_tools.SelectSegmentsTool.md#keybinding)
- [layer](neuroglancer_ui_segment_select_tools.SelectSegmentsTool.md#layer)
- [refCount](neuroglancer_ui_segment_select_tools.SelectSegmentsTool.md#refcount)
- [toggle](neuroglancer_ui_segment_select_tools.SelectSegmentsTool.md#toggle)
- [wasDisposed](neuroglancer_ui_segment_select_tools.SelectSegmentsTool.md#wasdisposed)

### Accessors

- [description](neuroglancer_ui_segment_select_tools.SelectSegmentsTool.md#description)
- [mouseState](neuroglancer_ui_segment_select_tools.SelectSegmentsTool.md#mousestate)

### Methods

- [activate](neuroglancer_ui_segment_select_tools.SelectSegmentsTool.md#activate)
- [addRef](neuroglancer_ui_segment_select_tools.SelectSegmentsTool.md#addref)
- [dispose](neuroglancer_ui_segment_select_tools.SelectSegmentsTool.md#dispose)
- [disposed](neuroglancer_ui_segment_select_tools.SelectSegmentsTool.md#disposed)
- [refCountReachedZero](neuroglancer_ui_segment_select_tools.SelectSegmentsTool.md#refcountreachedzero)
- [registerCancellable](neuroglancer_ui_segment_select_tools.SelectSegmentsTool.md#registercancellable)
- [registerDisposer](neuroglancer_ui_segment_select_tools.SelectSegmentsTool.md#registerdisposer)
- [registerEventListener](neuroglancer_ui_segment_select_tools.SelectSegmentsTool.md#registereventlistener)
- [toJSON](neuroglancer_ui_segment_select_tools.SelectSegmentsTool.md#tojson)
- [unbind](neuroglancer_ui_segment_select_tools.SelectSegmentsTool.md#unbind)
- [unregisterDisposer](neuroglancer_ui_segment_select_tools.SelectSegmentsTool.md#unregisterdisposer)

## Constructors

### constructor

• **new SelectSegmentsTool**(`layer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`SegmentationUserLayer`](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md) |

#### Overrides

[Tool](neuroglancer_ui_tool.Tool.md).[constructor](neuroglancer_ui_tool.Tool.md#constructor)

#### Defined in

[src/neuroglancer/ui/segment_select_tools.ts:43](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/segment_select_tools.ts#L43)

## Properties

### changed

• **changed**: [`Signal`](neuroglancer_util_signal.Signal.md)<() => `void`\>

#### Inherited from

[Tool](neuroglancer_ui_tool.Tool.md).[changed](neuroglancer_ui_tool.Tool.md#changed)

#### Defined in

[src/neuroglancer/ui/tool.ts:56](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/tool.ts#L56)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[Tool](neuroglancer_ui_tool.Tool.md).[disposedStacks](neuroglancer_ui_tool.Tool.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### keyBinding

• **keyBinding**: `undefined` \| `string` = `undefined`

#### Inherited from

[Tool](neuroglancer_ui_tool.Tool.md).[keyBinding](neuroglancer_ui_tool.Tool.md#keybinding)

#### Defined in

[src/neuroglancer/ui/tool.ts:57](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/tool.ts#L57)

___

### layer

• **layer**: [`SegmentationUserLayer`](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md)

#### Inherited from

[Tool](neuroglancer_ui_tool.Tool.md).[layer](neuroglancer_ui_tool.Tool.md#layer)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[Tool](neuroglancer_ui_tool.Tool.md).[refCount](neuroglancer_ui_tool.Tool.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### toggle

• **toggle**: `boolean` = `false`

#### Inherited from

[Tool](neuroglancer_ui_tool.Tool.md).[toggle](neuroglancer_ui_tool.Tool.md#toggle)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[Tool](neuroglancer_ui_tool.Tool.md).[wasDisposed](neuroglancer_ui_tool.Tool.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### description

• `get` **description**(): `string`

#### Returns

`string`

#### Overrides

Tool.description

#### Defined in

[src/neuroglancer/ui/segment_select_tools.ts:148](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/segment_select_tools.ts#L148)

___

### mouseState

• `get` **mouseState**(): [`MouseSelectionState`](neuroglancer_layer.MouseSelectionState.md)

#### Returns

[`MouseSelectionState`](neuroglancer_layer.MouseSelectionState.md)

#### Inherited from

Tool.mouseState

#### Defined in

[src/neuroglancer/ui/tool.ts:61](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/tool.ts#L61)

## Methods

### activate

▸ **activate**(`activation`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `activation` | [`ToolActivation`](neuroglancer_ui_tool.ToolActivation.md)<[`SelectSegmentsTool`](neuroglancer_ui_segment_select_tools.SelectSegmentsTool.md)\> |

#### Returns

`void`

#### Overrides

[Tool](neuroglancer_ui_tool.Tool.md).[activate](neuroglancer_ui_tool.Tool.md#activate)

#### Defined in

[src/neuroglancer/ui/segment_select_tools.ts:51](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/segment_select_tools.ts#L51)

___

### addRef

▸ **addRef**(): [`SelectSegmentsTool`](neuroglancer_ui_segment_select_tools.SelectSegmentsTool.md)

#### Returns

[`SelectSegmentsTool`](neuroglancer_ui_segment_select_tools.SelectSegmentsTool.md)

#### Inherited from

[Tool](neuroglancer_ui_tool.Tool.md).[addRef](neuroglancer_ui_tool.Tool.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[Tool](neuroglancer_ui_tool.Tool.md).[dispose](neuroglancer_ui_tool.Tool.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[Tool](neuroglancer_ui_tool.Tool.md).[disposed](neuroglancer_ui_tool.Tool.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L75)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[Tool](neuroglancer_ui_tool.Tool.md).[refCountReachedZero](neuroglancer_ui_tool.Tool.md#refcountreachedzero)

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

[Tool](neuroglancer_ui_tool.Tool.md).[registerCancellable](neuroglancer_ui_tool.Tool.md#registercancellable)

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

[Tool](neuroglancer_ui_tool.Tool.md).[registerDisposer](neuroglancer_ui_tool.Tool.md#registerdisposer)

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

[Tool](neuroglancer_ui_tool.Tool.md).[registerEventListener](neuroglancer_ui_tool.Tool.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L95)

___

### toJSON

▸ **toJSON**(): `string`

#### Returns

`string`

#### Overrides

[Tool](neuroglancer_ui_tool.Tool.md).[toJSON](neuroglancer_ui_tool.Tool.md#tojson)

#### Defined in

[src/neuroglancer/ui/segment_select_tools.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/segment_select_tools.ts#L47)

___

### unbind

▸ **unbind**(): `void`

#### Returns

`void`

#### Inherited from

[Tool](neuroglancer_ui_tool.Tool.md).[unbind](neuroglancer_ui_tool.Tool.md#unbind)

#### Defined in

[src/neuroglancer/ui/tool.ts:67](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/tool.ts#L67)

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

[Tool](neuroglancer_ui_tool.Tool.md).[unregisterDisposer](neuroglancer_ui_tool.Tool.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L85)
