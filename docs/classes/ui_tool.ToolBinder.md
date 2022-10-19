[neuroglancer](../README.md) / [Modules](../modules.md) / [ui/tool](../modules/ui_tool.md) / ToolBinder

# Class: ToolBinder

[ui/tool](../modules/ui_tool.md).ToolBinder

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`ToolBinder`**

## Table of contents

### Constructors

- [constructor](ui_tool.ToolBinder.md#constructor)

### Properties

- [activeTool\_](ui_tool.ToolBinder.md#activetool_)
- [bindings](ui_tool.ToolBinder.md#bindings)
- [changed](ui_tool.ToolBinder.md#changed)
- [debounceDeactivate](ui_tool.ToolBinder.md#debouncedeactivate)
- [debounceReactivate](ui_tool.ToolBinder.md#debouncereactivate)
- [disposedStacks](ui_tool.ToolBinder.md#disposedstacks)
- [queuedTool](ui_tool.ToolBinder.md#queuedtool)
- [refCount](ui_tool.ToolBinder.md#refcount)
- [wasDisposed](ui_tool.ToolBinder.md#wasdisposed)

### Methods

- [activate](ui_tool.ToolBinder.md#activate)
- [addRef](ui_tool.ToolBinder.md#addref)
- [deactivate\_](ui_tool.ToolBinder.md#deactivate_)
- [destroyTool](ui_tool.ToolBinder.md#destroytool)
- [dispose](ui_tool.ToolBinder.md#dispose)
- [disposed](ui_tool.ToolBinder.md#disposed)
- [get](ui_tool.ToolBinder.md#get)
- [reactivateQueuedTool](ui_tool.ToolBinder.md#reactivatequeuedtool)
- [refCountReachedZero](ui_tool.ToolBinder.md#refcountreachedzero)
- [registerCancellable](ui_tool.ToolBinder.md#registercancellable)
- [registerDisposer](ui_tool.ToolBinder.md#registerdisposer)
- [registerEventListener](ui_tool.ToolBinder.md#registereventlistener)
- [set](ui_tool.ToolBinder.md#set)
- [unregisterDisposer](ui_tool.ToolBinder.md#unregisterdisposer)

## Constructors

### constructor

• **new ToolBinder**(`inputEventMapBinder`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputEventMapBinder` | [`InputEventMapBinder`](../modules/ui_tool.md#inputeventmapbinder) |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/ui/tool.ts:223](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L223)

## Properties

### activeTool\_

• **activeTool\_**: `undefined` \| [`ToolActivation`](ui_tool.ToolActivation.md)<[`Tool`](ui_tool.Tool.md)<[`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)\>\>

#### Defined in

[src/neuroglancer/ui/tool.ts:218](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L218)

___

### bindings

• **bindings**: `Map`<`string`, [`Tool`](ui_tool.Tool.md)<[`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)\>\>

#### Defined in

[src/neuroglancer/ui/tool.ts:216](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L216)

___

### changed

• **changed**: [`Signal`](util_signal.Signal.md)<() => `void`\>

#### Defined in

[src/neuroglancer/ui/tool.ts:217](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L217)

___

### debounceDeactivate

• `Private` **debounceDeactivate**: [`DebouncedFunc`](../interfaces/annotation_annotation_layer_state._internal_.DebouncedFunc.md)<() => `void`\>

#### Defined in

[src/neuroglancer/ui/tool.ts:220](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L220)

___

### debounceReactivate

• `Private` **debounceReactivate**: [`DebouncedFunc`](../interfaces/annotation_annotation_layer_state._internal_.DebouncedFunc.md)<() => `void`\>

#### Defined in

[src/neuroglancer/ui/tool.ts:221](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L221)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### queuedTool

• `Private` **queuedTool**: `undefined` \| [`Tool`](ui_tool.Tool.md)<[`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)\>

#### Defined in

[src/neuroglancer/ui/tool.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L219)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Methods

### activate

▸ **activate**(`key`): `undefined` \| [`Tool`](ui_tool.Tool.md)<[`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`undefined` \| [`Tool`](ui_tool.Tool.md)<[`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)\>

#### Defined in

[src/neuroglancer/ui/tool.ts:264](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L264)

___

### addRef

▸ **addRef**(): [`ToolBinder`](ui_tool.ToolBinder.md)

#### Returns

[`ToolBinder`](ui_tool.ToolBinder.md)

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[addRef](util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### deactivate\_

▸ **deactivate_**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/tool.ts:328](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L328)

___

### destroyTool

▸ **destroyTool**(`tool`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tool` | [`Tool`](ui_tool.Tool.md)<[`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)\> |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/tool.ts:313](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L313)

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

[src/neuroglancer/ui/tool.ts:323](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L323)

___

### get

▸ **get**(`key`): `undefined` \| [`Tool`](ui_tool.Tool.md)<[`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`undefined` \| [`Tool`](ui_tool.Tool.md)<[`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)\>

#### Defined in

[src/neuroglancer/ui/tool.ts:227](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L227)

___

### reactivateQueuedTool

▸ `Private` **reactivateQueuedTool**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/tool.ts:304](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L304)

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

### set

▸ **set**(`key`, `tool`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `tool` | `undefined` \| [`Tool`](ui_tool.Tool.md)<[`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)\> |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/tool.ts:231](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L231)

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
