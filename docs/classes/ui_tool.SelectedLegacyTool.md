[neuroglancer](../README.md) / [Modules](../modules.md) / [ui/tool](../modules/ui_tool.md) / SelectedLegacyTool

# Class: SelectedLegacyTool

[ui/tool](../modules/ui_tool.md).SelectedLegacyTool

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`SelectedLegacyTool`**

## Implements

- [`TrackableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.TrackableValueInterface.md)<[`LegacyTool`](ui_tool.LegacyTool.md) \| `undefined`\>

## Table of contents

### Constructors

- [constructor](ui_tool.SelectedLegacyTool.md#constructor)

### Properties

- [changed](ui_tool.SelectedLegacyTool.md#changed)
- [disposedStacks](ui_tool.SelectedLegacyTool.md#disposedstacks)
- [layer](ui_tool.SelectedLegacyTool.md#layer)
- [refCount](ui_tool.SelectedLegacyTool.md#refcount)
- [value\_](ui_tool.SelectedLegacyTool.md#value_)
- [wasDisposed](ui_tool.SelectedLegacyTool.md#wasdisposed)

### Accessors

- [value](ui_tool.SelectedLegacyTool.md#value)

### Methods

- [addRef](ui_tool.SelectedLegacyTool.md#addref)
- [dispose](ui_tool.SelectedLegacyTool.md#dispose)
- [disposed](ui_tool.SelectedLegacyTool.md#disposed)
- [refCountReachedZero](ui_tool.SelectedLegacyTool.md#refcountreachedzero)
- [registerCancellable](ui_tool.SelectedLegacyTool.md#registercancellable)
- [registerDisposer](ui_tool.SelectedLegacyTool.md#registerdisposer)
- [registerEventListener](ui_tool.SelectedLegacyTool.md#registereventlistener)
- [reset](ui_tool.SelectedLegacyTool.md#reset)
- [restoreState](ui_tool.SelectedLegacyTool.md#restorestate)
- [toJSON](ui_tool.SelectedLegacyTool.md#tojson)
- [unregister](ui_tool.SelectedLegacyTool.md#unregister)
- [unregisterDisposer](ui_tool.SelectedLegacyTool.md#unregisterdisposer)

## Constructors

### constructor

• **new SelectedLegacyTool**(`layer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md) |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/ui/tool.ts:210](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L210)

## Properties

### changed

• **changed**: [`Signal`](util_signal.Signal.md)<() => `void`\>

#### Implementation of

[TrackableValueInterface](../interfaces/annotation_annotation_layer_state._internal_.TrackableValueInterface.md).[changed](../interfaces/annotation_annotation_layer_state._internal_.TrackableValueInterface.md#changed)

#### Defined in

[src/neuroglancer/ui/tool.ts:166](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L166)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### layer

• **layer**: [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### value\_

• `Private` **value\_**: `undefined` \| [`LegacyTool`](ui_tool.LegacyTool.md)<[`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)\>

#### Defined in

[src/neuroglancer/ui/tool.ts:167](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L167)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### value

• `get` **value**(): `undefined` \| [`LegacyTool`](ui_tool.LegacyTool.md)<[`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)\>

#### Returns

`undefined` \| [`LegacyTool`](ui_tool.LegacyTool.md)<[`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)\>

#### Implementation of

[TrackableValueInterface](../interfaces/annotation_annotation_layer_state._internal_.TrackableValueInterface.md).[value](../interfaces/annotation_annotation_layer_state._internal_.TrackableValueInterface.md#value)

#### Defined in

[src/neuroglancer/ui/tool.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L169)

• `set` **value**(`newValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newValue` | `undefined` \| [`LegacyTool`](ui_tool.LegacyTool.md)<[`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)\> |

#### Returns

`void`

#### Implementation of

[TrackableValueInterface](../interfaces/annotation_annotation_layer_state._internal_.TrackableValueInterface.md).[value](../interfaces/annotation_annotation_layer_state._internal_.TrackableValueInterface.md#value)

#### Defined in

[src/neuroglancer/ui/tool.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L173)

## Methods

### addRef

▸ **addRef**(): [`SelectedLegacyTool`](ui_tool.SelectedLegacyTool.md)

#### Returns

[`SelectedLegacyTool`](ui_tool.SelectedLegacyTool.md)

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

[src/neuroglancer/ui/tool.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L192)

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

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Implementation of

[TrackableValueInterface](../interfaces/annotation_annotation_layer_state._internal_.TrackableValueInterface.md).[reset](../interfaces/annotation_annotation_layer_state._internal_.TrackableValueInterface.md#reset)

#### Defined in

[src/neuroglancer/ui/tool.ts:201](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L201)

___

### restoreState

▸ **restoreState**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `unknown` |

#### Returns

`void`

#### Implementation of

[TrackableValueInterface](../interfaces/annotation_annotation_layer_state._internal_.TrackableValueInterface.md).[restoreState](../interfaces/annotation_annotation_layer_state._internal_.TrackableValueInterface.md#restorestate)

#### Defined in

[src/neuroglancer/ui/tool.ts:197](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L197)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Implementation of

[TrackableValueInterface](../interfaces/annotation_annotation_layer_state._internal_.TrackableValueInterface.md).[toJSON](../interfaces/annotation_annotation_layer_state._internal_.TrackableValueInterface.md#tojson)

#### Defined in

[src/neuroglancer/ui/tool.ts:205](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L205)

___

### unregister

▸ `Private` **unregister**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/tool.ts:183](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/tool.ts#L183)

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
