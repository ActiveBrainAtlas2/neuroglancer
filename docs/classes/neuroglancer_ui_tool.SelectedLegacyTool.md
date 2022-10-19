[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/ui/tool](../modules/neuroglancer_ui_tool.md) / SelectedLegacyTool

# Class: SelectedLegacyTool

[neuroglancer/ui/tool](../modules/neuroglancer_ui_tool.md).SelectedLegacyTool

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`SelectedLegacyTool`**

## Implements

- [`TrackableValueInterface`](../interfaces/neuroglancer_trackable_value.TrackableValueInterface.md)<[`LegacyTool`](neuroglancer_ui_tool.LegacyTool.md) \| `undefined`\>

## Table of contents

### Constructors

- [constructor](neuroglancer_ui_tool.SelectedLegacyTool.md#constructor)

### Properties

- [changed](neuroglancer_ui_tool.SelectedLegacyTool.md#changed)
- [disposedStacks](neuroglancer_ui_tool.SelectedLegacyTool.md#disposedstacks)
- [layer](neuroglancer_ui_tool.SelectedLegacyTool.md#layer)
- [refCount](neuroglancer_ui_tool.SelectedLegacyTool.md#refcount)
- [value\_](neuroglancer_ui_tool.SelectedLegacyTool.md#value_)
- [wasDisposed](neuroglancer_ui_tool.SelectedLegacyTool.md#wasdisposed)

### Accessors

- [value](neuroglancer_ui_tool.SelectedLegacyTool.md#value)

### Methods

- [addRef](neuroglancer_ui_tool.SelectedLegacyTool.md#addref)
- [dispose](neuroglancer_ui_tool.SelectedLegacyTool.md#dispose)
- [disposed](neuroglancer_ui_tool.SelectedLegacyTool.md#disposed)
- [refCountReachedZero](neuroglancer_ui_tool.SelectedLegacyTool.md#refcountreachedzero)
- [registerCancellable](neuroglancer_ui_tool.SelectedLegacyTool.md#registercancellable)
- [registerDisposer](neuroglancer_ui_tool.SelectedLegacyTool.md#registerdisposer)
- [registerEventListener](neuroglancer_ui_tool.SelectedLegacyTool.md#registereventlistener)
- [reset](neuroglancer_ui_tool.SelectedLegacyTool.md#reset)
- [restoreState](neuroglancer_ui_tool.SelectedLegacyTool.md#restorestate)
- [toJSON](neuroglancer_ui_tool.SelectedLegacyTool.md#tojson)
- [unregister](neuroglancer_ui_tool.SelectedLegacyTool.md#unregister)
- [unregisterDisposer](neuroglancer_ui_tool.SelectedLegacyTool.md#unregisterdisposer)

## Constructors

### constructor

• **new SelectedLegacyTool**(`layer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`UserLayer`](neuroglancer_layer.UserLayer.md) |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/ui/tool.ts:210](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/tool.ts#L210)

## Properties

### changed

• **changed**: [`Signal`](neuroglancer_util_signal.Signal.md)<() => `void`\>

#### Implementation of

[TrackableValueInterface](../interfaces/neuroglancer_trackable_value.TrackableValueInterface.md).[changed](../interfaces/neuroglancer_trackable_value.TrackableValueInterface.md#changed)

#### Defined in

[src/neuroglancer/ui/tool.ts:166](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/tool.ts#L166)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### layer

• **layer**: [`UserLayer`](neuroglancer_layer.UserLayer.md)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### value\_

• `Private` **value\_**: `undefined` \| [`LegacyTool`](neuroglancer_ui_tool.LegacyTool.md)<[`UserLayer`](neuroglancer_layer.UserLayer.md)\>

#### Defined in

[src/neuroglancer/ui/tool.ts:167](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/tool.ts#L167)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### value

• `get` **value**(): `undefined` \| [`LegacyTool`](neuroglancer_ui_tool.LegacyTool.md)<[`UserLayer`](neuroglancer_layer.UserLayer.md)\>

#### Returns

`undefined` \| [`LegacyTool`](neuroglancer_ui_tool.LegacyTool.md)<[`UserLayer`](neuroglancer_layer.UserLayer.md)\>

#### Implementation of

[TrackableValueInterface](../interfaces/neuroglancer_trackable_value.TrackableValueInterface.md).[value](../interfaces/neuroglancer_trackable_value.TrackableValueInterface.md#value)

#### Defined in

[src/neuroglancer/ui/tool.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/tool.ts#L169)

• `set` **value**(`newValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newValue` | `undefined` \| [`LegacyTool`](neuroglancer_ui_tool.LegacyTool.md)<[`UserLayer`](neuroglancer_layer.UserLayer.md)\> |

#### Returns

`void`

#### Implementation of

[TrackableValueInterface](../interfaces/neuroglancer_trackable_value.TrackableValueInterface.md).[value](../interfaces/neuroglancer_trackable_value.TrackableValueInterface.md#value)

#### Defined in

[src/neuroglancer/ui/tool.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/tool.ts#L173)

## Methods

### addRef

▸ **addRef**(): [`SelectedLegacyTool`](neuroglancer_ui_tool.SelectedLegacyTool.md)

#### Returns

[`SelectedLegacyTool`](neuroglancer_ui_tool.SelectedLegacyTool.md)

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[addRef](neuroglancer_util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[dispose](neuroglancer_util_disposable.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposed](neuroglancer_util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/ui/tool.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/tool.ts#L192)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCountReachedZero](neuroglancer_util_disposable.RefCounted.md#refcountreachedzero)

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

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[registerCancellable](neuroglancer_util_disposable.RefCounted.md#registercancellable)

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

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[registerDisposer](neuroglancer_util_disposable.RefCounted.md#registerdisposer)

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

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[registerEventListener](neuroglancer_util_disposable.RefCounted.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L95)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Implementation of

[TrackableValueInterface](../interfaces/neuroglancer_trackable_value.TrackableValueInterface.md).[reset](../interfaces/neuroglancer_trackable_value.TrackableValueInterface.md#reset)

#### Defined in

[src/neuroglancer/ui/tool.ts:201](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/tool.ts#L201)

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

[TrackableValueInterface](../interfaces/neuroglancer_trackable_value.TrackableValueInterface.md).[restoreState](../interfaces/neuroglancer_trackable_value.TrackableValueInterface.md#restorestate)

#### Defined in

[src/neuroglancer/ui/tool.ts:197](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/tool.ts#L197)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Implementation of

[TrackableValueInterface](../interfaces/neuroglancer_trackable_value.TrackableValueInterface.md).[toJSON](../interfaces/neuroglancer_trackable_value.TrackableValueInterface.md#tojson)

#### Defined in

[src/neuroglancer/ui/tool.ts:205](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/tool.ts#L205)

___

### unregister

▸ `Private` **unregister**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/tool.ts:183](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/tool.ts#L183)

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

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[unregisterDisposer](neuroglancer_util_disposable.RefCounted.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L85)
