[neuroglancer](../README.md) / [Modules](../modules.md) / [layer](../modules/layer.md) / TrackableDataSelectionState

# Class: TrackableDataSelectionState

[layer](../modules/layer.md).TrackableDataSelectionState

## Hierarchy

- `RefCounted`

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

RefCounted.constructor

#### Defined in

[src/neuroglancer/layer.ts:1056](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L1056)

## Properties

### changed

• **changed**: `NullarySignal`

#### Implementation of

[TrackableValueInterface](../interfaces/trackable_value.TrackableValueInterface.md).[changed](../interfaces/trackable_value.TrackableValueInterface.md#changed)

#### Defined in

[src/neuroglancer/layer.ts:1051](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L1051)

___

### coordinateSpace

• **coordinateSpace**: [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<[`CoordinateSpace`](../interfaces/coordinate_transform.CoordinateSpace.md)\>

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

RefCounted.disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L52)

___

### history

• **history**: [`PersistentViewerSelectionState`](../interfaces/layer.PersistentViewerSelectionState.md)[] = `[]`

#### Defined in

[src/neuroglancer/layer.ts:1052](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L1052)

___

### historyIndex

• **historyIndex**: `number` = `0`

#### Defined in

[src/neuroglancer/layer.ts:1053](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L1053)

___

### layerSelectedValues

• **layerSelectedValues**: [`LayerSelectedValues`](layer.LayerSelectedValues.md)

___

### location

• **location**: `TrackableSidePanelLocation`

#### Defined in

[src/neuroglancer/layer.ts:1054](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L1054)

___

### pin

• **pin**: [`WatchableValue`](trackable_value.WatchableValue.md)<`boolean`\>

#### Defined in

[src/neuroglancer/layer.ts:1070](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L1070)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

RefCounted.refCount

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L45)

___

### value\_

• `Private` **value\_**: `undefined` \| [`PersistentViewerSelectionState`](../interfaces/layer.PersistentViewerSelectionState.md)

#### Defined in

[src/neuroglancer/layer.ts:1069](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L1069)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

RefCounted.wasDisposed

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### value

• `get` **value**(): `undefined` \| [`PersistentViewerSelectionState`](../interfaces/layer.PersistentViewerSelectionState.md)

#### Returns

`undefined` \| [`PersistentViewerSelectionState`](../interfaces/layer.PersistentViewerSelectionState.md)

#### Implementation of

[TrackableValueInterface](../interfaces/trackable_value.TrackableValueInterface.md).[value](../interfaces/trackable_value.TrackableValueInterface.md#value)

#### Defined in

[src/neuroglancer/layer.ts:1071](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L1071)

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

[src/neuroglancer/layer.ts:1106](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L1106)

## Methods

### addRef

▸ **addRef**(): [`TrackableDataSelectionState`](layer.TrackableDataSelectionState.md)

#### Returns

[`TrackableDataSelectionState`](layer.TrackableDataSelectionState.md)

#### Inherited from

RefCounted.addRef

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L48)

___

### canGoBack

▸ **canGoBack**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/layer.ts:1085](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L1085)

___

### canGoForward

▸ **canGoForward**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/layer.ts:1090](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L1090)

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

[src/neuroglancer/layer.ts:1187](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L1187)

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

[src/neuroglancer/layer.ts:1123](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L1123)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

RefCounted.dispose

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

RefCounted.disposed

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L75)

___

### getCapturedState

▸ **getCapturedState**(): `undefined` \| [`PersistentViewerSelectionState`](../interfaces/layer.PersistentViewerSelectionState.md)

#### Returns

`undefined` \| [`PersistentViewerSelectionState`](../interfaces/layer.PersistentViewerSelectionState.md)

#### Defined in

[src/neuroglancer/layer.ts:1192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L1192)

___

### goBack

▸ **goBack**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:1075](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L1075)

___

### goForward

▸ **goForward**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:1096](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L1096)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

RefCounted.refCountReachedZero

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L66)

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

RefCounted.registerCancellable

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L100)

___

### registerDisposer

▸ **registerDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Disposer` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

RefCounted.registerDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L76)

___

### registerEventListener

▸ **registerEventListener**(`target`, `type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `EventTarget` |
| `type` | `string` |
| `listener` | `EventListenerOrEventListenerObject` |
| `options?` | `boolean` \| `AddEventListenerOptions` |

#### Returns

`void`

#### Inherited from

RefCounted.registerEventListener

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L95)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Implementation of

[TrackableValueInterface](../interfaces/trackable_value.TrackableValueInterface.md).[reset](../interfaces/trackable_value.TrackableValueInterface.md#reset)

#### Defined in

[src/neuroglancer/layer.ts:1143](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L1143)

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

[src/neuroglancer/layer.ts:1195](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L1195)

___

### select

▸ **select**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/layer.ts:1179](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L1179)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Implementation of

[TrackableValueInterface](../interfaces/trackable_value.TrackableValueInterface.md).[toJSON](../interfaces/trackable_value.TrackableValueInterface.md#tojson)

#### Defined in

[src/neuroglancer/layer.ts:1148](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/layer.ts#L1148)

___

### unregisterDisposer

▸ **unregisterDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Disposer` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

RefCounted.unregisterDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L85)
