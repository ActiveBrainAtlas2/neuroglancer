[neuroglancer](../README.md) / [Modules](../modules.md) / [python\_integration/screenshots](../modules/python_integration_screenshots.md) / ScreenshotHandler

# Class: ScreenshotHandler

[python_integration/screenshots](../modules/python_integration_screenshots.md).ScreenshotHandler

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`ScreenshotHandler`**

## Table of contents

### Constructors

- [constructor](python_integration_screenshots.ScreenshotHandler.md#constructor)

### Properties

- [debouncedMaybeSendScreenshot](python_integration_screenshots.ScreenshotHandler.md#debouncedmaybesendscreenshot)
- [disposedStacks](python_integration_screenshots.ScreenshotHandler.md#disposedstacks)
- [previousRequest](python_integration_screenshots.ScreenshotHandler.md#previousrequest)
- [refCount](python_integration_screenshots.ScreenshotHandler.md#refcount)
- [requestState](python_integration_screenshots.ScreenshotHandler.md#requeststate)
- [sendScreenshotRequested](python_integration_screenshots.ScreenshotHandler.md#sendscreenshotrequested)
- [sendStatisticsRequested](python_integration_screenshots.ScreenshotHandler.md#sendstatisticsrequested)
- [statisticsRequested](python_integration_screenshots.ScreenshotHandler.md#statisticsrequested)
- [throttledSendStatistics](python_integration_screenshots.ScreenshotHandler.md#throttledsendstatistics)
- [viewer](python_integration_screenshots.ScreenshotHandler.md#viewer)
- [wasAlreadyVisible](python_integration_screenshots.ScreenshotHandler.md#wasalreadyvisible)
- [wasDisposed](python_integration_screenshots.ScreenshotHandler.md#wasdisposed)

### Methods

- [addRef](python_integration_screenshots.ScreenshotHandler.md#addref)
- [dispose](python_integration_screenshots.ScreenshotHandler.md#dispose)
- [disposed](python_integration_screenshots.ScreenshotHandler.md#disposed)
- [isReady](python_integration_screenshots.ScreenshotHandler.md#isready)
- [maybeSendScreenshot](python_integration_screenshots.ScreenshotHandler.md#maybesendscreenshot)
- [refCountReachedZero](python_integration_screenshots.ScreenshotHandler.md#refcountreachedzero)
- [registerCancellable](python_integration_screenshots.ScreenshotHandler.md#registercancellable)
- [registerDisposer](python_integration_screenshots.ScreenshotHandler.md#registerdisposer)
- [registerEventListener](python_integration_screenshots.ScreenshotHandler.md#registereventlistener)
- [unregisterDisposer](python_integration_screenshots.ScreenshotHandler.md#unregisterdisposer)

## Constructors

### constructor

• **new ScreenshotHandler**(`viewer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `viewer` | [`Viewer`](datasource_state_share._internal_.Viewer.md) |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/python_integration/screenshots.ts:82](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/python_integration/screenshots.ts#L82)

## Properties

### debouncedMaybeSendScreenshot

• `Private` **debouncedMaybeSendScreenshot**: [`DebouncedFunc`](../interfaces/annotation_annotation_layer_state._internal_.DebouncedFunc.md)<() => `Promise`<`void`\>\>

#### Defined in

[src/neuroglancer/python_integration/screenshots.ts:41](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/python_integration/screenshots.ts#L41)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### previousRequest

• `Private` **previousRequest**: `undefined` \| `string` = `undefined`

#### Defined in

[src/neuroglancer/python_integration/screenshots.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/python_integration/screenshots.ts#L40)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### requestState

• **requestState**: [`TrackableValue`](annotation_annotation_layer_state._internal_.TrackableValue.md)<`undefined` \| `string`\>

#### Defined in

[src/neuroglancer/python_integration/screenshots.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/python_integration/screenshots.ts#L33)

___

### sendScreenshotRequested

• **sendScreenshotRequested**: [`Signal`](util_signal.Signal.md)<(`state`: `any`) => `void`\>

#### Defined in

[src/neuroglancer/python_integration/screenshots.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/python_integration/screenshots.ts#L31)

___

### sendStatisticsRequested

• **sendStatisticsRequested**: [`Signal`](util_signal.Signal.md)<(`state`: `any`) => `void`\>

#### Defined in

[src/neuroglancer/python_integration/screenshots.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/python_integration/screenshots.ts#L32)

___

### statisticsRequested

• `Private` **statisticsRequested**: `boolean` = `false`

#### Defined in

[src/neuroglancer/python_integration/screenshots.ts:43](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/python_integration/screenshots.ts#L43)

___

### throttledSendStatistics

• `Private` **throttledSendStatistics**: [`DebouncedFunc`](../interfaces/annotation_annotation_layer_state._internal_.DebouncedFunc.md)<(`requestId`: `string`) => `Promise`<`void`\>\>

#### Defined in

[src/neuroglancer/python_integration/screenshots.ts:44](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/python_integration/screenshots.ts#L44)

___

### viewer

• **viewer**: [`Viewer`](datasource_state_share._internal_.Viewer.md)

___

### wasAlreadyVisible

• `Private` **wasAlreadyVisible**: `boolean` = `false`

To reduce the risk of taking a screenshot while deferred code is still registering layers,
require that the viewer be in a ready state once, and still remain ready while all pending
events are handled, before a screenshot is taken.

#### Defined in

[src/neuroglancer/python_integration/screenshots.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/python_integration/screenshots.ts#L39)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`ScreenshotHandler`](python_integration_screenshots.ScreenshotHandler.md)

#### Returns

[`ScreenshotHandler`](python_integration_screenshots.ScreenshotHandler.md)

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

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposed](util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L75)

___

### isReady

▸ `Private` **isReady**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/python_integration/screenshots.ts:88](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/python_integration/screenshots.ts#L88)

___

### maybeSendScreenshot

▸ `Private` **maybeSendScreenshot**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/neuroglancer/python_integration/screenshots.ts:102](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/python_integration/screenshots.ts#L102)

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
