[neuroglancer](../README.md) / [Modules](../modules.md) / [image\_user\_layer](../modules/image_user_layer.md) / [<internal\>](../modules/image_user_layer._internal_.md) / ToolBinder

# Class: ToolBinder

[image_user_layer](../modules/image_user_layer.md).[<internal>](../modules/image_user_layer._internal_.md).ToolBinder

## Hierarchy

- [`RefCounted`](axes_lines._internal_.RefCounted.md)

  ↳ **`ToolBinder`**

## Table of contents

### Constructors

- [constructor](image_user_layer._internal_.ToolBinder.md#constructor)

### Properties

- [activeTool\_](image_user_layer._internal_.ToolBinder.md#activetool_)
- [bindings](image_user_layer._internal_.ToolBinder.md#bindings)
- [changed](image_user_layer._internal_.ToolBinder.md#changed)
- [debounceDeactivate](image_user_layer._internal_.ToolBinder.md#debouncedeactivate)
- [debounceReactivate](image_user_layer._internal_.ToolBinder.md#debouncereactivate)
- [disposedStacks](image_user_layer._internal_.ToolBinder.md#disposedstacks)
- [queuedTool](image_user_layer._internal_.ToolBinder.md#queuedtool)
- [refCount](image_user_layer._internal_.ToolBinder.md#refcount)
- [wasDisposed](image_user_layer._internal_.ToolBinder.md#wasdisposed)

### Methods

- [activate](image_user_layer._internal_.ToolBinder.md#activate)
- [addRef](image_user_layer._internal_.ToolBinder.md#addref)
- [deactivate\_](image_user_layer._internal_.ToolBinder.md#deactivate_)
- [destroyTool](image_user_layer._internal_.ToolBinder.md#destroytool)
- [dispose](image_user_layer._internal_.ToolBinder.md#dispose)
- [disposed](image_user_layer._internal_.ToolBinder.md#disposed)
- [get](image_user_layer._internal_.ToolBinder.md#get)
- [reactivateQueuedTool](image_user_layer._internal_.ToolBinder.md#reactivatequeuedtool)
- [refCountReachedZero](image_user_layer._internal_.ToolBinder.md#refcountreachedzero)
- [registerCancellable](image_user_layer._internal_.ToolBinder.md#registercancellable)
- [registerDisposer](image_user_layer._internal_.ToolBinder.md#registerdisposer)
- [registerEventListener](image_user_layer._internal_.ToolBinder.md#registereventlistener)
- [set](image_user_layer._internal_.ToolBinder.md#set)
- [unregisterDisposer](image_user_layer._internal_.ToolBinder.md#unregisterdisposer)

## Constructors

### constructor

• **new ToolBinder**(`inputEventMapBinder`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputEventMapBinder` | [`InputEventMapBinder`](../modules/image_user_layer._internal_.md#inputeventmapbinder) |

#### Overrides

[RefCounted](axes_lines._internal_.RefCounted.md).[constructor](axes_lines._internal_.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/ui/tool.ts:223](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/tool.ts#L223)

## Properties

### activeTool\_

• **activeTool\_**: `undefined` \| [`ToolActivation`](image_user_layer._internal_.ToolActivation.md)<[`Tool`](image_user_layer._internal_.Tool.md)<[`UserLayer`](layer.UserLayer.md)\>\>

#### Defined in

[src/neuroglancer/ui/tool.ts:218](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/tool.ts#L218)

___

### bindings

• **bindings**: `Map`<`string`, [`Tool`](image_user_layer._internal_.Tool.md)<[`UserLayer`](layer.UserLayer.md)\>\>

#### Defined in

[src/neuroglancer/ui/tool.ts:216](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/tool.ts#L216)

___

### changed

• **changed**: [`Signal`](coordinate_transform._internal_.Signal.md)<() => `void`\>

#### Defined in

[src/neuroglancer/ui/tool.ts:217](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/tool.ts#L217)

___

### debounceDeactivate

• `Private` **debounceDeactivate**: [`DebouncedFunc`](../interfaces/data_panel_layout._internal_.DebouncedFunc.md)<() => `void`\>

#### Defined in

[src/neuroglancer/ui/tool.ts:220](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/tool.ts#L220)

___

### debounceReactivate

• `Private` **debounceReactivate**: [`DebouncedFunc`](../interfaces/data_panel_layout._internal_.DebouncedFunc.md)<() => `void`\>

#### Defined in

[src/neuroglancer/ui/tool.ts:221](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/tool.ts#L221)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[disposedStacks](axes_lines._internal_.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L52)

___

### queuedTool

• `Private` **queuedTool**: `undefined` \| [`Tool`](image_user_layer._internal_.Tool.md)<[`UserLayer`](layer.UserLayer.md)\>

#### Defined in

[src/neuroglancer/ui/tool.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/tool.ts#L219)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[refCount](axes_lines._internal_.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[wasDisposed](axes_lines._internal_.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L46)

## Methods

### activate

▸ **activate**(`key`): `undefined` \| [`Tool`](image_user_layer._internal_.Tool.md)<[`UserLayer`](layer.UserLayer.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`undefined` \| [`Tool`](image_user_layer._internal_.Tool.md)<[`UserLayer`](layer.UserLayer.md)\>

#### Defined in

[src/neuroglancer/ui/tool.ts:264](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/tool.ts#L264)

___

### addRef

▸ **addRef**(): [`ToolBinder`](image_user_layer._internal_.ToolBinder.md)

#### Returns

[`ToolBinder`](image_user_layer._internal_.ToolBinder.md)

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[addRef](axes_lines._internal_.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L48)

___

### deactivate\_

▸ **deactivate_**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/tool.ts:328](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/tool.ts#L328)

___

### destroyTool

▸ **destroyTool**(`tool`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tool` | [`Tool`](image_user_layer._internal_.Tool.md)<[`UserLayer`](layer.UserLayer.md)\> |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/tool.ts:313](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/tool.ts#L313)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[dispose](axes_lines._internal_.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

[RefCounted](axes_lines._internal_.RefCounted.md).[disposed](axes_lines._internal_.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/ui/tool.ts:323](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/tool.ts#L323)

___

### get

▸ **get**(`key`): `undefined` \| [`Tool`](image_user_layer._internal_.Tool.md)<[`UserLayer`](layer.UserLayer.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`undefined` \| [`Tool`](image_user_layer._internal_.Tool.md)<[`UserLayer`](layer.UserLayer.md)\>

#### Defined in

[src/neuroglancer/ui/tool.ts:227](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/tool.ts#L227)

___

### reactivateQueuedTool

▸ `Private` **reactivateQueuedTool**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/tool.ts:304](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/tool.ts#L304)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[refCountReachedZero](axes_lines._internal_.RefCounted.md#refcountreachedzero)

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

[RefCounted](axes_lines._internal_.RefCounted.md).[registerCancellable](axes_lines._internal_.RefCounted.md#registercancellable)

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

[RefCounted](axes_lines._internal_.RefCounted.md).[registerDisposer](axes_lines._internal_.RefCounted.md#registerdisposer)

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

[RefCounted](axes_lines._internal_.RefCounted.md).[registerEventListener](axes_lines._internal_.RefCounted.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L95)

___

### set

▸ **set**(`key`, `tool`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `tool` | `undefined` \| [`Tool`](image_user_layer._internal_.Tool.md)<[`UserLayer`](layer.UserLayer.md)\> |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/tool.ts:231](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/tool.ts#L231)

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

[RefCounted](axes_lines._internal_.RefCounted.md).[unregisterDisposer](axes_lines._internal_.RefCounted.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L85)
