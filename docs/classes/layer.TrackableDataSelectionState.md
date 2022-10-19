[neuroglancer](../README.md) / [Modules](../modules.md) / [layer](../modules/layer.md) / TrackableDataSelectionState

# Class: TrackableDataSelectionState

[layer](../modules/layer.md).TrackableDataSelectionState

## Hierarchy

- [`RefCounted`](axes_lines._internal_.RefCounted.md)

  ↳ **`TrackableDataSelectionState`**

## Implements

- [`TrackableValueInterface`](../interfaces/trackable_value.TrackableValueInterface.md)<[`PersistentViewerSelectionState`](../interfaces/layer.PersistentViewerSelectionState.md) \| `undefined`\>

## Table of contents

### Constructors

- [constructor](layer.TrackableDataSelectionState.md#constructor)

### Properties

- [changed](layer.TrackableDataSelectionState.md#changed)
- [coordinateSpace](layer.TrackableDataSelectionState.md#coordinatespace)
- [disposedStacks](layer.TrackableDataSelectionState.md#disposedstacks)
- [history](layer.TrackableDataSelectionState.md#history)
- [historyIndex](layer.TrackableDataSelectionState.md#historyindex)
- [layerSelectedValues](layer.TrackableDataSelectionState.md#layerselectedvalues)
- [location](layer.TrackableDataSelectionState.md#location)
- [pin](layer.TrackableDataSelectionState.md#pin)
- [refCount](layer.TrackableDataSelectionState.md#refcount)
- [value\_](layer.TrackableDataSelectionState.md#value_)
- [wasDisposed](layer.TrackableDataSelectionState.md#wasdisposed)

### Accessors

- [value](layer.TrackableDataSelectionState.md#value)

### Methods

- [addRef](layer.TrackableDataSelectionState.md#addref)
- [canGoBack](layer.TrackableDataSelectionState.md#cangoback)
- [canGoForward](layer.TrackableDataSelectionState.md#cangoforward)
- [capture](layer.TrackableDataSelectionState.md#capture)
- [captureSingleLayerState](layer.TrackableDataSelectionState.md#capturesinglelayerstate)
- [dispose](layer.TrackableDataSelectionState.md#dispose)
- [disposed](layer.TrackableDataSelectionState.md#disposed)
- [getCapturedState](layer.TrackableDataSelectionState.md#getcapturedstate)
- [goBack](layer.TrackableDataSelectionState.md#goback)
- [goForward](layer.TrackableDataSelectionState.md#goforward)
- [refCountReachedZero](layer.TrackableDataSelectionState.md#refcountreachedzero)
- [registerCancellable](layer.TrackableDataSelectionState.md#registercancellable)
- [registerDisposer](layer.TrackableDataSelectionState.md#registerdisposer)
- [registerEventListener](layer.TrackableDataSelectionState.md#registereventlistener)
- [reset](layer.TrackableDataSelectionState.md#reset)
- [restoreState](layer.TrackableDataSelectionState.md#restorestate)
- [select](layer.TrackableDataSelectionState.md#select)
- [toJSON](layer.TrackableDataSelectionState.md#tojson)
- [unregisterDisposer](layer.TrackableDataSelectionState.md#unregisterdisposer)

## Constructors

### constructor

• **new TrackableDataSelectionState**(`coordinateSpace`, `layerSelectedValues`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `coordinateSpace` | [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<[`CoordinateSpace`](../interfaces/coordinate_transform.CoordinateSpace.md)\> |
| `layerSelectedValues` | [`LayerSelectedValues`](layer.LayerSelectedValues.md) |

#### Overrides

[RefCounted](axes_lines._internal_.RefCounted.md).[constructor](axes_lines._internal_.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/layer.ts:1060](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L1060)

## Properties

### changed

• **changed**: [`NullarySignal`](coordinate_transform._internal_.NullarySignal.md)

#### Implementation of

[TrackableValueInterface](../interfaces/trackable_value.TrackableValueInterface.md).[changed](../interfaces/trackable_value.TrackableValueInterface.md#changed)

#### Defined in

[src/neuroglancer/layer.ts:1055](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L1055)

___

### coordinateSpace

• **coordinateSpace**: [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<[`CoordinateSpace`](../interfaces/coordinate_transform.CoordinateSpace.md)\>

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[disposedStacks](axes_lines._internal_.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L52)

___

### history

• **history**: [`PersistentViewerSelectionState`](../interfaces/layer.PersistentViewerSelectionState.md)[] = `[]`

#### Defined in

[src/neuroglancer/layer.ts:1056](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L1056)

___

### historyIndex

• **historyIndex**: `number` = `0`

#### Defined in

[src/neuroglancer/layer.ts:1057](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L1057)

___

### layerSelectedValues

• **layerSelectedValues**: [`LayerSelectedValues`](layer.LayerSelectedValues.md)

___

### location

• **location**: [`TrackableSidePanelLocation`](image_user_layer._internal_.TrackableSidePanelLocation.md)

#### Defined in

[src/neuroglancer/layer.ts:1058](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L1058)

___

### pin

• **pin**: [`WatchableValue`](trackable_value.WatchableValue.md)<`boolean`\>

#### Defined in

[src/neuroglancer/layer.ts:1074](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L1074)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[refCount](axes_lines._internal_.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L45)

___

### value\_

• `Private` **value\_**: `undefined` \| [`PersistentViewerSelectionState`](../interfaces/layer.PersistentViewerSelectionState.md)

#### Defined in

[src/neuroglancer/layer.ts:1073](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L1073)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[wasDisposed](axes_lines._internal_.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### value

• `get` **value**(): `undefined` \| [`PersistentViewerSelectionState`](../interfaces/layer.PersistentViewerSelectionState.md)

#### Returns

`undefined` \| [`PersistentViewerSelectionState`](../interfaces/layer.PersistentViewerSelectionState.md)

#### Implementation of

[TrackableValueInterface](../interfaces/trackable_value.TrackableValueInterface.md).[value](../interfaces/trackable_value.TrackableValueInterface.md#value)

#### Defined in

[src/neuroglancer/layer.ts:1075](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L1075)

• `set` **value**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| [`PersistentViewerSelectionState`](../interfaces/layer.PersistentViewerSelectionState.md) |

#### Returns

`void`

#### Implementation of

[TrackableValueInterface](../interfaces/trackable_value.TrackableValueInterface.md).[value](../interfaces/trackable_value.TrackableValueInterface.md#value)

#### Defined in

[src/neuroglancer/layer.ts:1110](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L1110)

## Methods

### addRef

▸ **addRef**(): [`TrackableDataSelectionState`](layer.TrackableDataSelectionState.md)

#### Returns

[`TrackableDataSelectionState`](layer.TrackableDataSelectionState.md)

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[addRef](axes_lines._internal_.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L48)

___

### canGoBack

▸ **canGoBack**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/layer.ts:1089](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L1089)

___

### canGoForward

▸ **canGoForward**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/layer.ts:1094](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L1094)

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

[src/neuroglancer/layer.ts:1191](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L1191)

___

### captureSingleLayerState

▸ **captureSingleLayerState**<`T`\>(`userLayer`, `capture`, `pin?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`UserLayer`](layer.UserLayer.md)<`T`\> |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `userLayer` | `T` | `undefined` |
| `capture` | (`state`: `T`[``"selectionState"``]) => `boolean` | `undefined` |
| `pin` | `boolean` \| ``"toggle"`` | `true` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:1127](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L1127)

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

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[disposed](axes_lines._internal_.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L75)

___

### getCapturedState

▸ **getCapturedState**(): `undefined` \| [`PersistentViewerSelectionState`](../interfaces/layer.PersistentViewerSelectionState.md)

#### Returns

`undefined` \| [`PersistentViewerSelectionState`](../interfaces/layer.PersistentViewerSelectionState.md)

#### Defined in

[src/neuroglancer/layer.ts:1196](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L1196)

___

### goBack

▸ **goBack**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:1079](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L1079)

___

### goForward

▸ **goForward**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:1100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L1100)

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

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Implementation of

[TrackableValueInterface](../interfaces/trackable_value.TrackableValueInterface.md).[reset](../interfaces/trackable_value.TrackableValueInterface.md#reset)

#### Defined in

[src/neuroglancer/layer.ts:1147](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L1147)

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

[TrackableValueInterface](../interfaces/trackable_value.TrackableValueInterface.md).[restoreState](../interfaces/trackable_value.TrackableValueInterface.md#restorestate)

#### Defined in

[src/neuroglancer/layer.ts:1199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L1199)

___

### select

▸ **select**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:1183](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L1183)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Implementation of

[TrackableValueInterface](../interfaces/trackable_value.TrackableValueInterface.md).[toJSON](../interfaces/trackable_value.TrackableValueInterface.md#tojson)

#### Defined in

[src/neuroglancer/layer.ts:1152](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer.ts#L1152)

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
