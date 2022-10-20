[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/layer](../modules/neuroglancer_layer.md) / TrackableDataSelectionState

# Class: TrackableDataSelectionState

[neuroglancer/layer](../modules/neuroglancer_layer.md).TrackableDataSelectionState

**`License`**

Copyright 2016 Google Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`TrackableDataSelectionState`**

## Implements

- [`TrackableValueInterface`](../interfaces/neuroglancer_trackable_value.TrackableValueInterface.md)<[`PersistentViewerSelectionState`](../interfaces/neuroglancer_layer.PersistentViewerSelectionState.md) \| `undefined`\>

## Table of contents

### Constructors

- [constructor](neuroglancer_layer.TrackableDataSelectionState.md#constructor)

### Properties

- [changed](neuroglancer_layer.TrackableDataSelectionState.md#changed)
- [coordinateSpace](neuroglancer_layer.TrackableDataSelectionState.md#coordinatespace)
- [disposedStacks](neuroglancer_layer.TrackableDataSelectionState.md#disposedstacks)
- [history](neuroglancer_layer.TrackableDataSelectionState.md#history)
- [historyIndex](neuroglancer_layer.TrackableDataSelectionState.md#historyindex)
- [layerSelectedValues](neuroglancer_layer.TrackableDataSelectionState.md#layerselectedvalues)
- [location](neuroglancer_layer.TrackableDataSelectionState.md#location)
- [pin](neuroglancer_layer.TrackableDataSelectionState.md#pin)
- [refCount](neuroglancer_layer.TrackableDataSelectionState.md#refcount)
- [value\_](neuroglancer_layer.TrackableDataSelectionState.md#value_)
- [wasDisposed](neuroglancer_layer.TrackableDataSelectionState.md#wasdisposed)

### Accessors

- [value](neuroglancer_layer.TrackableDataSelectionState.md#value)

### Methods

- [addRef](neuroglancer_layer.TrackableDataSelectionState.md#addref)
- [canGoBack](neuroglancer_layer.TrackableDataSelectionState.md#cangoback)
- [canGoForward](neuroglancer_layer.TrackableDataSelectionState.md#cangoforward)
- [capture](neuroglancer_layer.TrackableDataSelectionState.md#capture)
- [captureSingleLayerState](neuroglancer_layer.TrackableDataSelectionState.md#capturesinglelayerstate)
- [dispose](neuroglancer_layer.TrackableDataSelectionState.md#dispose)
- [disposed](neuroglancer_layer.TrackableDataSelectionState.md#disposed)
- [getCapturedState](neuroglancer_layer.TrackableDataSelectionState.md#getcapturedstate)
- [goBack](neuroglancer_layer.TrackableDataSelectionState.md#goback)
- [goForward](neuroglancer_layer.TrackableDataSelectionState.md#goforward)
- [refCountReachedZero](neuroglancer_layer.TrackableDataSelectionState.md#refcountreachedzero)
- [registerCancellable](neuroglancer_layer.TrackableDataSelectionState.md#registercancellable)
- [registerDisposer](neuroglancer_layer.TrackableDataSelectionState.md#registerdisposer)
- [registerEventListener](neuroglancer_layer.TrackableDataSelectionState.md#registereventlistener)
- [reset](neuroglancer_layer.TrackableDataSelectionState.md#reset)
- [restoreState](neuroglancer_layer.TrackableDataSelectionState.md#restorestate)
- [select](neuroglancer_layer.TrackableDataSelectionState.md#select)
- [toJSON](neuroglancer_layer.TrackableDataSelectionState.md#tojson)
- [unregisterDisposer](neuroglancer_layer.TrackableDataSelectionState.md#unregisterdisposer)

## Constructors

### constructor

• **new TrackableDataSelectionState**(`coordinateSpace`, `layerSelectedValues`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `coordinateSpace` | [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<[`CoordinateSpace`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpace.md)\> |
| `layerSelectedValues` | [`LayerSelectedValues`](neuroglancer_layer.LayerSelectedValues.md) |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/layer.ts:1060](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1060)

## Properties

### changed

• **changed**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Implementation of

[TrackableValueInterface](../interfaces/neuroglancer_trackable_value.TrackableValueInterface.md).[changed](../interfaces/neuroglancer_trackable_value.TrackableValueInterface.md#changed)

#### Defined in

[src/neuroglancer/layer.ts:1055](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1055)

___

### coordinateSpace

• **coordinateSpace**: [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<[`CoordinateSpace`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpace.md)\>

#### Defined in

[src/neuroglancer/layer.ts:1061](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1061)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### history

• **history**: [`PersistentViewerSelectionState`](../interfaces/neuroglancer_layer.PersistentViewerSelectionState.md)[] = `[]`

#### Defined in

[src/neuroglancer/layer.ts:1056](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1056)

___

### historyIndex

• **historyIndex**: `number` = `0`

#### Defined in

[src/neuroglancer/layer.ts:1057](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1057)

___

### layerSelectedValues

• **layerSelectedValues**: [`LayerSelectedValues`](neuroglancer_layer.LayerSelectedValues.md)

#### Defined in

[src/neuroglancer/layer.ts:1062](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1062)

___

### location

• **location**: [`TrackableSidePanelLocation`](neuroglancer_ui_side_panel_location.TrackableSidePanelLocation.md)

#### Defined in

[src/neuroglancer/layer.ts:1058](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1058)

___

### pin

• **pin**: [`WatchableValue`](neuroglancer_trackable_value.WatchableValue.md)<`boolean`\>

#### Defined in

[src/neuroglancer/layer.ts:1074](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1074)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### value\_

• `Private` **value\_**: `undefined` \| [`PersistentViewerSelectionState`](../interfaces/neuroglancer_layer.PersistentViewerSelectionState.md)

#### Defined in

[src/neuroglancer/layer.ts:1073](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1073)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### value

• `get` **value**(): `undefined` \| [`PersistentViewerSelectionState`](../interfaces/neuroglancer_layer.PersistentViewerSelectionState.md)

#### Returns

`undefined` \| [`PersistentViewerSelectionState`](../interfaces/neuroglancer_layer.PersistentViewerSelectionState.md)

#### Implementation of

[TrackableValueInterface](../interfaces/neuroglancer_trackable_value.TrackableValueInterface.md).[value](../interfaces/neuroglancer_trackable_value.TrackableValueInterface.md#value)

#### Defined in

[src/neuroglancer/layer.ts:1075](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1075)

• `set` **value**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| [`PersistentViewerSelectionState`](../interfaces/neuroglancer_layer.PersistentViewerSelectionState.md) |

#### Returns

`void`

#### Implementation of

[TrackableValueInterface](../interfaces/neuroglancer_trackable_value.TrackableValueInterface.md).[value](../interfaces/neuroglancer_trackable_value.TrackableValueInterface.md#value)

#### Defined in

[src/neuroglancer/layer.ts:1110](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1110)

## Methods

### addRef

▸ **addRef**(): [`TrackableDataSelectionState`](neuroglancer_layer.TrackableDataSelectionState.md)

#### Returns

[`TrackableDataSelectionState`](neuroglancer_layer.TrackableDataSelectionState.md)

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[addRef](neuroglancer_util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

___

### canGoBack

▸ **canGoBack**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/layer.ts:1089](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1089)

___

### canGoForward

▸ **canGoForward**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/layer.ts:1094](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1094)

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

[src/neuroglancer/layer.ts:1191](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1191)

___

### captureSingleLayerState

▸ **captureSingleLayerState**<`T`\>(`userLayer`, `capture`, `pin?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`UserLayer`](neuroglancer_layer.UserLayer.md)<`T`\> |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `userLayer` | `T` | `undefined` |
| `capture` | (`state`: `T`[``"selectionState"``]) => `boolean` | `undefined` |
| `pin` | `boolean` \| ``"toggle"`` | `true` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:1127](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1127)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[dispose](neuroglancer_util_disposable.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposed](neuroglancer_util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L75)

___

### getCapturedState

▸ **getCapturedState**(): `undefined` \| [`PersistentViewerSelectionState`](../interfaces/neuroglancer_layer.PersistentViewerSelectionState.md)

#### Returns

`undefined` \| [`PersistentViewerSelectionState`](../interfaces/neuroglancer_layer.PersistentViewerSelectionState.md)

#### Defined in

[src/neuroglancer/layer.ts:1196](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1196)

___

### goBack

▸ **goBack**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:1079](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1079)

___

### goForward

▸ **goForward**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:1100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1100)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCountReachedZero](neuroglancer_util_disposable.RefCounted.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L66)

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

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L100)

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

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L76)

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

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L95)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Implementation of

TrackableValueInterface.reset

#### Defined in

[src/neuroglancer/layer.ts:1147](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1147)

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

TrackableValueInterface.restoreState

#### Defined in

[src/neuroglancer/layer.ts:1199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1199)

___

### select

▸ **select**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:1183](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1183)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Implementation of

TrackableValueInterface.toJSON

#### Defined in

[src/neuroglancer/layer.ts:1152](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer.ts#L1152)

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

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L85)
