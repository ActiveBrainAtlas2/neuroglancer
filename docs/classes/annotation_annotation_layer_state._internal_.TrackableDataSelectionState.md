[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / TrackableDataSelectionState

# Class: TrackableDataSelectionState

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).TrackableDataSelectionState

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`TrackableDataSelectionState`**

## Implements

- [`TrackableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.TrackableValueInterface.md)<[`PersistentViewerSelectionState`](../interfaces/annotation_annotation_layer_state._internal_.PersistentViewerSelectionState.md) \| `undefined`\>

## Table of contents

### Constructors

- [constructor](annotation_annotation_layer_state._internal_.TrackableDataSelectionState.md#constructor)

### Properties

- [changed](annotation_annotation_layer_state._internal_.TrackableDataSelectionState.md#changed)
- [coordinateSpace](annotation_annotation_layer_state._internal_.TrackableDataSelectionState.md#coordinatespace)
- [disposedStacks](annotation_annotation_layer_state._internal_.TrackableDataSelectionState.md#disposedstacks)
- [history](annotation_annotation_layer_state._internal_.TrackableDataSelectionState.md#history)
- [historyIndex](annotation_annotation_layer_state._internal_.TrackableDataSelectionState.md#historyindex)
- [layerSelectedValues](annotation_annotation_layer_state._internal_.TrackableDataSelectionState.md#layerselectedvalues)
- [location](annotation_annotation_layer_state._internal_.TrackableDataSelectionState.md#location)
- [pin](annotation_annotation_layer_state._internal_.TrackableDataSelectionState.md#pin)
- [refCount](annotation_annotation_layer_state._internal_.TrackableDataSelectionState.md#refcount)
- [value\_](annotation_annotation_layer_state._internal_.TrackableDataSelectionState.md#value_)
- [wasDisposed](annotation_annotation_layer_state._internal_.TrackableDataSelectionState.md#wasdisposed)

### Accessors

- [value](annotation_annotation_layer_state._internal_.TrackableDataSelectionState.md#value)

### Methods

- [addRef](annotation_annotation_layer_state._internal_.TrackableDataSelectionState.md#addref)
- [canGoBack](annotation_annotation_layer_state._internal_.TrackableDataSelectionState.md#cangoback)
- [canGoForward](annotation_annotation_layer_state._internal_.TrackableDataSelectionState.md#cangoforward)
- [capture](annotation_annotation_layer_state._internal_.TrackableDataSelectionState.md#capture)
- [captureSingleLayerState](annotation_annotation_layer_state._internal_.TrackableDataSelectionState.md#capturesinglelayerstate)
- [dispose](annotation_annotation_layer_state._internal_.TrackableDataSelectionState.md#dispose)
- [disposed](annotation_annotation_layer_state._internal_.TrackableDataSelectionState.md#disposed)
- [getCapturedState](annotation_annotation_layer_state._internal_.TrackableDataSelectionState.md#getcapturedstate)
- [goBack](annotation_annotation_layer_state._internal_.TrackableDataSelectionState.md#goback)
- [goForward](annotation_annotation_layer_state._internal_.TrackableDataSelectionState.md#goforward)
- [refCountReachedZero](annotation_annotation_layer_state._internal_.TrackableDataSelectionState.md#refcountreachedzero)
- [registerCancellable](annotation_annotation_layer_state._internal_.TrackableDataSelectionState.md#registercancellable)
- [registerDisposer](annotation_annotation_layer_state._internal_.TrackableDataSelectionState.md#registerdisposer)
- [registerEventListener](annotation_annotation_layer_state._internal_.TrackableDataSelectionState.md#registereventlistener)
- [reset](annotation_annotation_layer_state._internal_.TrackableDataSelectionState.md#reset)
- [restoreState](annotation_annotation_layer_state._internal_.TrackableDataSelectionState.md#restorestate)
- [select](annotation_annotation_layer_state._internal_.TrackableDataSelectionState.md#select)
- [toJSON](annotation_annotation_layer_state._internal_.TrackableDataSelectionState.md#tojson)
- [unregisterDisposer](annotation_annotation_layer_state._internal_.TrackableDataSelectionState.md#unregisterdisposer)

## Constructors

### constructor

• **new TrackableDataSelectionState**(`coordinateSpace`, `layerSelectedValues`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `coordinateSpace` | [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<[`CoordinateSpace`](../interfaces/annotation_annotation_layer_state._internal_.CoordinateSpace.md)\> |
| `layerSelectedValues` | [`LayerSelectedValues`](annotation_annotation_layer_state._internal_.LayerSelectedValues.md) |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/layer.ts:1060](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1060)

## Properties

### changed

• **changed**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Implementation of

[TrackableValueInterface](../interfaces/annotation_annotation_layer_state._internal_.TrackableValueInterface.md).[changed](../interfaces/annotation_annotation_layer_state._internal_.TrackableValueInterface.md#changed)

#### Defined in

[src/neuroglancer/layer.ts:1055](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1055)

___

### coordinateSpace

• **coordinateSpace**: [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<[`CoordinateSpace`](../interfaces/annotation_annotation_layer_state._internal_.CoordinateSpace.md)\>

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### history

• **history**: [`PersistentViewerSelectionState`](../interfaces/annotation_annotation_layer_state._internal_.PersistentViewerSelectionState.md)[] = `[]`

#### Defined in

[src/neuroglancer/layer.ts:1056](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1056)

___

### historyIndex

• **historyIndex**: `number` = `0`

#### Defined in

[src/neuroglancer/layer.ts:1057](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1057)

___

### layerSelectedValues

• **layerSelectedValues**: [`LayerSelectedValues`](annotation_annotation_layer_state._internal_.LayerSelectedValues.md)

___

### location

• **location**: [`TrackableSidePanelLocation`](ui_side_panel_location.TrackableSidePanelLocation.md)

#### Defined in

[src/neuroglancer/layer.ts:1058](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1058)

___

### pin

• **pin**: [`WatchableValue`](annotation_annotation_layer_state._internal_.WatchableValue.md)<`boolean`\>

#### Defined in

[src/neuroglancer/layer.ts:1074](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1074)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### value\_

• `Private` **value\_**: `undefined` \| [`PersistentViewerSelectionState`](../interfaces/annotation_annotation_layer_state._internal_.PersistentViewerSelectionState.md)

#### Defined in

[src/neuroglancer/layer.ts:1073](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1073)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### value

• `get` **value**(): `undefined` \| [`PersistentViewerSelectionState`](../interfaces/annotation_annotation_layer_state._internal_.PersistentViewerSelectionState.md)

#### Returns

`undefined` \| [`PersistentViewerSelectionState`](../interfaces/annotation_annotation_layer_state._internal_.PersistentViewerSelectionState.md)

#### Implementation of

[TrackableValueInterface](../interfaces/annotation_annotation_layer_state._internal_.TrackableValueInterface.md).[value](../interfaces/annotation_annotation_layer_state._internal_.TrackableValueInterface.md#value)

#### Defined in

[src/neuroglancer/layer.ts:1075](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1075)

• `set` **value**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| [`PersistentViewerSelectionState`](../interfaces/annotation_annotation_layer_state._internal_.PersistentViewerSelectionState.md) |

#### Returns

`void`

#### Implementation of

[TrackableValueInterface](../interfaces/annotation_annotation_layer_state._internal_.TrackableValueInterface.md).[value](../interfaces/annotation_annotation_layer_state._internal_.TrackableValueInterface.md#value)

#### Defined in

[src/neuroglancer/layer.ts:1110](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1110)

## Methods

### addRef

▸ **addRef**(): [`TrackableDataSelectionState`](annotation_annotation_layer_state._internal_.TrackableDataSelectionState.md)

#### Returns

[`TrackableDataSelectionState`](annotation_annotation_layer_state._internal_.TrackableDataSelectionState.md)

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[addRef](util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### canGoBack

▸ **canGoBack**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/layer.ts:1089](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1089)

___

### canGoForward

▸ **canGoForward**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/layer.ts:1094](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1094)

___

### capture

▸ **capture**(`canRetain?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `canRetain` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:1191](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1191)

___

### captureSingleLayerState

▸ **captureSingleLayerState**<`T`\>(`userLayer`, `capture`, `pin?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)<`T`\> |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `userLayer` | `T` | `undefined` |
| `capture` | (`state`: `T`[``"selectionState"``]) => `boolean` | `undefined` |
| `pin` | `boolean` \| ``"toggle"`` | `true` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:1127](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1127)

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

### getCapturedState

▸ **getCapturedState**(): `undefined` \| [`PersistentViewerSelectionState`](../interfaces/annotation_annotation_layer_state._internal_.PersistentViewerSelectionState.md)

#### Returns

`undefined` \| [`PersistentViewerSelectionState`](../interfaces/annotation_annotation_layer_state._internal_.PersistentViewerSelectionState.md)

#### Defined in

[src/neuroglancer/layer.ts:1196](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1196)

___

### goBack

▸ **goBack**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:1079](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1079)

___

### goForward

▸ **goForward**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:1100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1100)

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

[src/neuroglancer/layer.ts:1147](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1147)

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

[src/neuroglancer/layer.ts:1199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1199)

___

### select

▸ **select**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:1183](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1183)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Implementation of

[TrackableValueInterface](../interfaces/annotation_annotation_layer_state._internal_.TrackableValueInterface.md).[toJSON](../interfaces/annotation_annotation_layer_state._internal_.TrackableValueInterface.md#tojson)

#### Defined in

[src/neuroglancer/layer.ts:1152](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L1152)

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
