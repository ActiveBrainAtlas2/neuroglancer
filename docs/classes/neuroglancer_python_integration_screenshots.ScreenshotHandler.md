[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/python\_integration/screenshots](../modules/neuroglancer_python_integration_screenshots.md) / ScreenshotHandler

# Class: ScreenshotHandler

[neuroglancer/python_integration/screenshots](../modules/neuroglancer_python_integration_screenshots.md).ScreenshotHandler

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`ScreenshotHandler`**

## Table of contents

### Constructors

- [constructor](neuroglancer_python_integration_screenshots.ScreenshotHandler.md#constructor)

### Properties

- [debouncedMaybeSendScreenshot](neuroglancer_python_integration_screenshots.ScreenshotHandler.md#debouncedmaybesendscreenshot)
- [disposedStacks](neuroglancer_python_integration_screenshots.ScreenshotHandler.md#disposedstacks)
- [previousRequest](neuroglancer_python_integration_screenshots.ScreenshotHandler.md#previousrequest)
- [refCount](neuroglancer_python_integration_screenshots.ScreenshotHandler.md#refcount)
- [requestState](neuroglancer_python_integration_screenshots.ScreenshotHandler.md#requeststate)
- [sendScreenshotRequested](neuroglancer_python_integration_screenshots.ScreenshotHandler.md#sendscreenshotrequested)
- [sendStatisticsRequested](neuroglancer_python_integration_screenshots.ScreenshotHandler.md#sendstatisticsrequested)
- [statisticsRequested](neuroglancer_python_integration_screenshots.ScreenshotHandler.md#statisticsrequested)
- [throttledSendStatistics](neuroglancer_python_integration_screenshots.ScreenshotHandler.md#throttledsendstatistics)
- [viewer](neuroglancer_python_integration_screenshots.ScreenshotHandler.md#viewer)
- [wasAlreadyVisible](neuroglancer_python_integration_screenshots.ScreenshotHandler.md#wasalreadyvisible)
- [wasDisposed](neuroglancer_python_integration_screenshots.ScreenshotHandler.md#wasdisposed)

### Methods

- [addRef](neuroglancer_python_integration_screenshots.ScreenshotHandler.md#addref)
- [dispose](neuroglancer_python_integration_screenshots.ScreenshotHandler.md#dispose)
- [disposed](neuroglancer_python_integration_screenshots.ScreenshotHandler.md#disposed)
- [isReady](neuroglancer_python_integration_screenshots.ScreenshotHandler.md#isready)
- [maybeSendScreenshot](neuroglancer_python_integration_screenshots.ScreenshotHandler.md#maybesendscreenshot)
- [refCountReachedZero](neuroglancer_python_integration_screenshots.ScreenshotHandler.md#refcountreachedzero)
- [registerCancellable](neuroglancer_python_integration_screenshots.ScreenshotHandler.md#registercancellable)
- [registerDisposer](neuroglancer_python_integration_screenshots.ScreenshotHandler.md#registerdisposer)
- [registerEventListener](neuroglancer_python_integration_screenshots.ScreenshotHandler.md#registereventlistener)
- [unregisterDisposer](neuroglancer_python_integration_screenshots.ScreenshotHandler.md#unregisterdisposer)

## Constructors

### constructor

• **new ScreenshotHandler**(`viewer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `viewer` | [`Viewer`](neuroglancer_viewer.Viewer.md) |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/python_integration/screenshots.ts:82](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/python_integration/screenshots.ts#L82)

## Properties

### debouncedMaybeSendScreenshot

• `Private` **debouncedMaybeSendScreenshot**: [`DebouncedFunc`](../interfaces/neuroglancer_chunk_manager_backend._internal_.DebouncedFunc.md)<() => `Promise`<`void`\>\>

#### Defined in

[src/neuroglancer/python_integration/screenshots.ts:41](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/python_integration/screenshots.ts#L41)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### previousRequest

• `Private` **previousRequest**: `undefined` \| `string` = `undefined`

#### Defined in

[src/neuroglancer/python_integration/screenshots.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/python_integration/screenshots.ts#L40)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### requestState

• **requestState**: [`TrackableValue`](neuroglancer_trackable_value.TrackableValue.md)<`undefined` \| `string`\>

#### Defined in

[src/neuroglancer/python_integration/screenshots.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/python_integration/screenshots.ts#L33)

___

### sendScreenshotRequested

• **sendScreenshotRequested**: [`Signal`](neuroglancer_util_signal.Signal.md)<(`state`: `any`) => `void`\>

#### Defined in

[src/neuroglancer/python_integration/screenshots.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/python_integration/screenshots.ts#L31)

___

### sendStatisticsRequested

• **sendStatisticsRequested**: [`Signal`](neuroglancer_util_signal.Signal.md)<(`state`: `any`) => `void`\>

#### Defined in

[src/neuroglancer/python_integration/screenshots.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/python_integration/screenshots.ts#L32)

___

### statisticsRequested

• `Private` **statisticsRequested**: `boolean` = `false`

#### Defined in

[src/neuroglancer/python_integration/screenshots.ts:43](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/python_integration/screenshots.ts#L43)

___

### throttledSendStatistics

• `Private` **throttledSendStatistics**: [`DebouncedFunc`](../interfaces/neuroglancer_chunk_manager_backend._internal_.DebouncedFunc.md)<(`requestId`: `string`) => `Promise`<`void`\>\>

#### Defined in

[src/neuroglancer/python_integration/screenshots.ts:44](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/python_integration/screenshots.ts#L44)

___

### viewer

• **viewer**: [`Viewer`](neuroglancer_viewer.Viewer.md)

___

### wasAlreadyVisible

• `Private` **wasAlreadyVisible**: `boolean` = `false`

To reduce the risk of taking a screenshot while deferred code is still registering layers,
require that the viewer be in a ready state once, and still remain ready while all pending
events are handled, before a screenshot is taken.

#### Defined in

[src/neuroglancer/python_integration/screenshots.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/python_integration/screenshots.ts#L39)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`ScreenshotHandler`](neuroglancer_python_integration_screenshots.ScreenshotHandler.md)

#### Returns

[`ScreenshotHandler`](neuroglancer_python_integration_screenshots.ScreenshotHandler.md)

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

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposed](neuroglancer_util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L75)

___

### isReady

▸ `Private` **isReady**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/python_integration/screenshots.ts:88](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/python_integration/screenshots.ts#L88)

___

### maybeSendScreenshot

▸ `Private` **maybeSendScreenshot**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/neuroglancer/python_integration/screenshots.ts:102](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/python_integration/screenshots.ts#L102)

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
