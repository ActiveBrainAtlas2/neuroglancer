[neuroglancer](../README.md) / [Modules](../modules.md) / [segmentation\_user\_layer](../modules/segmentation_user_layer.md) / [<internal\>](../modules/segmentation_user_layer._internal_.md) / LayerControlTool

# Class: LayerControlTool<LayerType\>

[segmentation_user_layer](../modules/segmentation_user_layer.md).[<internal>](../modules/segmentation_user_layer._internal_.md).LayerControlTool

## Type parameters

| Name | Type |
| :------ | :------ |
| `LayerType` | extends [`UserLayer`](layer.UserLayer.md) = [`UserLayer`](layer.UserLayer.md) |

## Hierarchy

- [`Tool`](image_user_layer._internal_.Tool.md)<`LayerType`\>

  ↳ **`LayerControlTool`**

## Table of contents

### Constructors

- [constructor](segmentation_user_layer._internal_.LayerControlTool.md#constructor)

### Properties

- [changed](segmentation_user_layer._internal_.LayerControlTool.md#changed)
- [disposedStacks](segmentation_user_layer._internal_.LayerControlTool.md#disposedstacks)
- [keyBinding](segmentation_user_layer._internal_.LayerControlTool.md#keybinding)
- [layer](segmentation_user_layer._internal_.LayerControlTool.md#layer)
- [options](segmentation_user_layer._internal_.LayerControlTool.md#options)
- [refCount](segmentation_user_layer._internal_.LayerControlTool.md#refcount)
- [toggle](segmentation_user_layer._internal_.LayerControlTool.md#toggle)
- [wasDisposed](segmentation_user_layer._internal_.LayerControlTool.md#wasdisposed)

### Accessors

- [description](segmentation_user_layer._internal_.LayerControlTool.md#description)
- [mouseState](segmentation_user_layer._internal_.LayerControlTool.md#mousestate)

### Methods

- [activate](segmentation_user_layer._internal_.LayerControlTool.md#activate)
- [addRef](segmentation_user_layer._internal_.LayerControlTool.md#addref)
- [dispose](segmentation_user_layer._internal_.LayerControlTool.md#dispose)
- [disposed](segmentation_user_layer._internal_.LayerControlTool.md#disposed)
- [refCountReachedZero](segmentation_user_layer._internal_.LayerControlTool.md#refcountreachedzero)
- [registerCancellable](segmentation_user_layer._internal_.LayerControlTool.md#registercancellable)
- [registerDisposer](segmentation_user_layer._internal_.LayerControlTool.md#registerdisposer)
- [registerEventListener](segmentation_user_layer._internal_.LayerControlTool.md#registereventlistener)
- [toJSON](segmentation_user_layer._internal_.LayerControlTool.md#tojson)
- [unbind](segmentation_user_layer._internal_.LayerControlTool.md#unbind)
- [unregisterDisposer](segmentation_user_layer._internal_.LayerControlTool.md#unregisterdisposer)

## Constructors

### constructor

• **new LayerControlTool**<`LayerType`\>(`layer`, `options`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `LayerType` | extends [`UserLayer`](layer.UserLayer.md)<`LayerType`\> = [`UserLayer`](layer.UserLayer.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | `LayerType` |
| `options` | [`LayerControlDefinition`](../interfaces/segmentation_user_layer._internal_.LayerControlDefinition.md)<`LayerType`, `unknown`\> |

#### Overrides

[Tool](image_user_layer._internal_.Tool.md).[constructor](image_user_layer._internal_.Tool.md#constructor)

#### Defined in

[src/neuroglancer/widget/layer_control.ts:79](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/layer_control.ts#L79)

## Properties

### changed

• **changed**: [`Signal`](coordinate_transform._internal_.Signal.md)<() => `void`\>

#### Inherited from

[Tool](image_user_layer._internal_.Tool.md).[changed](image_user_layer._internal_.Tool.md#changed)

#### Defined in

[src/neuroglancer/ui/tool.ts:56](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/tool.ts#L56)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[Tool](image_user_layer._internal_.Tool.md).[disposedStacks](image_user_layer._internal_.Tool.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L52)

___

### keyBinding

• **keyBinding**: `undefined` \| `string` = `undefined`

#### Inherited from

[Tool](image_user_layer._internal_.Tool.md).[keyBinding](image_user_layer._internal_.Tool.md#keybinding)

#### Defined in

[src/neuroglancer/ui/tool.ts:57](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/tool.ts#L57)

___

### layer

• **layer**: `LayerType`

#### Inherited from

[Tool](image_user_layer._internal_.Tool.md).[layer](image_user_layer._internal_.Tool.md#layer)

___

### options

• **options**: [`LayerControlDefinition`](../interfaces/segmentation_user_layer._internal_.LayerControlDefinition.md)<`LayerType`, `unknown`\>

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[Tool](image_user_layer._internal_.Tool.md).[refCount](image_user_layer._internal_.Tool.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L45)

___

### toggle

• **toggle**: `boolean` = `false`

#### Inherited from

[Tool](image_user_layer._internal_.Tool.md).[toggle](image_user_layer._internal_.Tool.md#toggle)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[Tool](image_user_layer._internal_.Tool.md).[wasDisposed](image_user_layer._internal_.Tool.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### description

• `get` **description**(): `string`

#### Returns

`string`

#### Overrides

Tool.description

#### Defined in

[src/neuroglancer/widget/layer_control.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/layer_control.ts#L95)

___

### mouseState

• `get` **mouseState**(): [`MouseSelectionState`](layer.MouseSelectionState.md)

#### Returns

[`MouseSelectionState`](layer.MouseSelectionState.md)

#### Inherited from

Tool.mouseState

#### Defined in

[src/neuroglancer/ui/tool.ts:61](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/tool.ts#L61)

## Methods

### activate

▸ **activate**(`activation`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `activation` | [`ToolActivation`](image_user_layer._internal_.ToolActivation.md)<[`LayerControlTool`](segmentation_user_layer._internal_.LayerControlTool.md)<`LayerType`\>\> |

#### Returns

`void`

#### Overrides

[Tool](image_user_layer._internal_.Tool.md).[activate](image_user_layer._internal_.Tool.md#activate)

#### Defined in

[src/neuroglancer/widget/layer_control.ts:82](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/layer_control.ts#L82)

___

### addRef

▸ **addRef**(): [`LayerControlTool`](segmentation_user_layer._internal_.LayerControlTool.md)<`LayerType`\>

#### Returns

[`LayerControlTool`](segmentation_user_layer._internal_.LayerControlTool.md)<`LayerType`\>

#### Inherited from

[Tool](image_user_layer._internal_.Tool.md).[addRef](image_user_layer._internal_.Tool.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[Tool](image_user_layer._internal_.Tool.md).[dispose](image_user_layer._internal_.Tool.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[Tool](image_user_layer._internal_.Tool.md).[disposed](image_user_layer._internal_.Tool.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L75)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[Tool](image_user_layer._internal_.Tool.md).[refCountReachedZero](image_user_layer._internal_.Tool.md#refcountreachedzero)

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

[Tool](image_user_layer._internal_.Tool.md).[registerCancellable](image_user_layer._internal_.Tool.md#registercancellable)

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

[Tool](image_user_layer._internal_.Tool.md).[registerDisposer](image_user_layer._internal_.Tool.md#registerdisposer)

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

[Tool](image_user_layer._internal_.Tool.md).[registerEventListener](image_user_layer._internal_.Tool.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L95)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Overrides

[Tool](image_user_layer._internal_.Tool.md).[toJSON](image_user_layer._internal_.Tool.md#tojson)

#### Defined in

[src/neuroglancer/widget/layer_control.ts:99](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/widget/layer_control.ts#L99)

___

### unbind

▸ **unbind**(): `void`

#### Returns

`void`

#### Inherited from

[Tool](image_user_layer._internal_.Tool.md).[unbind](image_user_layer._internal_.Tool.md#unbind)

#### Defined in

[src/neuroglancer/ui/tool.ts:67](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/tool.ts#L67)

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

[Tool](image_user_layer._internal_.Tool.md).[unregisterDisposer](image_user_layer._internal_.Tool.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L85)
