[neuroglancer](../README.md) / [Modules](../modules.md) / [widget/layer\_control](../modules/widget_layer_control.md) / LayerControlTool

# Class: LayerControlTool<LayerType\>

[widget/layer_control](../modules/widget_layer_control.md).LayerControlTool

## Type parameters

| Name | Type |
| :------ | :------ |
| `LayerType` | extends [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md) = [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md) |

## Hierarchy

- [`Tool`](ui_tool.Tool.md)<`LayerType`\>

  ↳ **`LayerControlTool`**

## Table of contents

### Constructors

- [constructor](widget_layer_control.LayerControlTool.md#constructor)

### Properties

- [changed](widget_layer_control.LayerControlTool.md#changed)
- [disposedStacks](widget_layer_control.LayerControlTool.md#disposedstacks)
- [keyBinding](widget_layer_control.LayerControlTool.md#keybinding)
- [layer](widget_layer_control.LayerControlTool.md#layer)
- [options](widget_layer_control.LayerControlTool.md#options)
- [refCount](widget_layer_control.LayerControlTool.md#refcount)
- [toggle](widget_layer_control.LayerControlTool.md#toggle)
- [wasDisposed](widget_layer_control.LayerControlTool.md#wasdisposed)

### Accessors

- [description](widget_layer_control.LayerControlTool.md#description)
- [mouseState](widget_layer_control.LayerControlTool.md#mousestate)

### Methods

- [activate](widget_layer_control.LayerControlTool.md#activate)
- [addRef](widget_layer_control.LayerControlTool.md#addref)
- [dispose](widget_layer_control.LayerControlTool.md#dispose)
- [disposed](widget_layer_control.LayerControlTool.md#disposed)
- [refCountReachedZero](widget_layer_control.LayerControlTool.md#refcountreachedzero)
- [registerCancellable](widget_layer_control.LayerControlTool.md#registercancellable)
- [registerDisposer](widget_layer_control.LayerControlTool.md#registerdisposer)
- [registerEventListener](widget_layer_control.LayerControlTool.md#registereventlistener)
- [toJSON](widget_layer_control.LayerControlTool.md#tojson)
- [unbind](widget_layer_control.LayerControlTool.md#unbind)
- [unregisterDisposer](widget_layer_control.LayerControlTool.md#unregisterdisposer)

## Constructors

### constructor

• **new LayerControlTool**<`LayerType`\>(`layer`, `options`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `LayerType` | extends [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)<`LayerType`\> = [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | `LayerType` |
| `options` | [`LayerControlDefinition`](../interfaces/widget_layer_control.LayerControlDefinition.md)<`LayerType`, `unknown`\> |

#### Overrides

[Tool](ui_tool.Tool.md).[constructor](ui_tool.Tool.md#constructor)

#### Defined in

[src/neuroglancer/widget/layer_control.ts:79](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/layer_control.ts#L79)

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

• **layer**: `LayerType`

#### Inherited from

[Tool](ui_tool.Tool.md).[layer](ui_tool.Tool.md#layer)

___

### options

• **options**: [`LayerControlDefinition`](../interfaces/widget_layer_control.LayerControlDefinition.md)<`LayerType`, `unknown`\>

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

[src/neuroglancer/widget/layer_control.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/layer_control.ts#L95)

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
| `activation` | [`ToolActivation`](ui_tool.ToolActivation.md)<[`LayerControlTool`](widget_layer_control.LayerControlTool.md)<`LayerType`\>\> |

#### Returns

`void`

#### Overrides

[Tool](ui_tool.Tool.md).[activate](ui_tool.Tool.md#activate)

#### Defined in

[src/neuroglancer/widget/layer_control.ts:82](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/layer_control.ts#L82)

___

### addRef

▸ **addRef**(): [`LayerControlTool`](widget_layer_control.LayerControlTool.md)<`LayerType`\>

#### Returns

[`LayerControlTool`](widget_layer_control.LayerControlTool.md)<`LayerType`\>

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

▸ **toJSON**(): `any`

#### Returns

`any`

#### Overrides

[Tool](ui_tool.Tool.md).[toJSON](ui_tool.Tool.md#tojson)

#### Defined in

[src/neuroglancer/widget/layer_control.ts:99](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/layer_control.ts#L99)

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
